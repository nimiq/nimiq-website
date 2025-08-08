import { i as O, B as _, R as se, ae as pt, P as le, Q as ce, bo as tt, u as M, d as Ct, a2 as Nt, T as Ot, V as It, bq as jt, b as ae, o as Yt, w as qt, U as Ut, E as fe, ad as ue, br as de, bs as me, a1 as Xt, c as he, a as pe, m as ge, h as we, aa as ye } from "./C95QRNzc.js";
const xe = ["top", "right", "bottom", "left"], K = Math.min, k = Math.max, at = Math.round, ct = Math.floor, V = (t) => ({ x: t, y: t }), ve = { left: "right", right: "left", bottom: "top", top: "bottom" }, be = { start: "end", end: "start" };
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
function Ae(t, e, n) {
  n === void 0 && (n = false);
  const o = it(t), i = St(t), s = Rt(i);
  let r = i === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (r = ft(r)), [r, ft(r)];
}
function Ce(t) {
  const e = ft(t);
  return [xt(t), e, xt(e)];
}
function xt(t) {
  return t.replace(/start|end/g, (e) => be[e]);
}
function Oe(t, e, n) {
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
function Pe(t, e, n, o) {
  const i = it(t);
  let s = Oe(U(t), n === "start", o);
  return i && (s = s.map((r) => r + "-" + i), e && (s = s.concat(s.map(xt)))), s;
}
function ft(t) {
  return t.replace(/left|right|bottom|top/g, (e) => ve[e]);
}
function Re(t) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...t };
}
function Gt(t) {
  return typeof t != "number" ? Re(t) : { top: t, right: t, bottom: t, left: t };
}
function ut(t) {
  const { x: e, y: n, width: o, height: i } = t;
  return { width: o, height: i, top: n, left: e, right: e + o, bottom: n + i, x: e, y: n };
}
function Bt(t, e, n) {
  let { reference: o, floating: i } = t;
  const s = Y(e), r = St(e), l = Rt(r), c = U(e), a = s === "y", f = o.x + o.width / 2 - i.width / 2, u = o.y + o.height / 2 - i.height / 2, h = o[l] / 2 - i[l] / 2;
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
      d[r] -= h * (n && a ? -1 : 1);
      break;
    case "end":
      d[r] += h * (n && a ? -1 : 1);
      break;
  }
  return d;
}
const Se = async (t, e, n) => {
  const { placement: o = "bottom", strategy: i = "absolute", middleware: s = [], platform: r } = n, l = s.filter(Boolean), c = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let a = await r.getElementRects({ reference: t, floating: e, strategy: i }), { x: f, y: u } = Bt(a, o, c), h = o, d = {}, m = 0;
  for (let p = 0; p < l.length; p++) {
    const { name: g, fn: w } = l[p], { x, y, data: v, reset: A } = await w({ x: f, y: u, initialPlacement: o, placement: h, strategy: i, middlewareData: d, rects: a, platform: r, elements: { reference: t, floating: e } });
    f = x ?? f, u = y ?? u, d = { ...d, [g]: { ...d[g], ...v } }, A && m <= 50 && (m++, typeof A == "object" && (A.placement && (h = A.placement), A.rects && (a = A.rects === true ? await r.getElementRects({ reference: t, floating: e, strategy: i }) : A.rects), { x: f, y: u } = Bt(a, h, c)), p = -1);
  }
  return { x: f, y: u, placement: h, strategy: i, middlewareData: d };
};
async function rt(t, e) {
  var n;
  e === void 0 && (e = {});
  const { x: o, y: i, platform: s, rects: r, elements: l, strategy: c } = t, { boundary: a = "clippingAncestors", rootBoundary: f = "viewport", elementContext: u = "floating", altBoundary: h = false, padding: d = 0 } = q(e, t), m = Gt(d), g = l[h ? u === "floating" ? "reference" : "floating" : u], w = ut(await s.getClippingRect({ element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(l.floating)), boundary: a, rootBoundary: f, strategy: c })), x = u === "floating" ? { x: o, y: i, width: r.floating.width, height: r.floating.height } : r.reference, y = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l.floating)), v = await (s.isElement == null ? void 0 : s.isElement(y)) ? await (s.getScale == null ? void 0 : s.getScale(y)) || { x: 1, y: 1 } : { x: 1, y: 1 }, A = ut(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: x, offsetParent: y, strategy: c }) : x);
  return { top: (w.top - A.top + m.top) / v.y, bottom: (A.bottom - w.bottom + m.bottom) / v.y, left: (w.left - A.left + m.left) / v.x, right: (A.right - w.right + m.right) / v.x };
}
const Ee = (t) => ({ name: "arrow", options: t, async fn(e) {
  const { x: n, y: o, placement: i, rects: s, platform: r, elements: l, middlewareData: c } = e, { element: a, padding: f = 0 } = q(t, e) || {};
  if (a == null) return {};
  const u = Gt(f), h = { x: n, y: o }, d = St(i), m = Rt(d), p = await r.getDimensions(a), g = d === "y", w = g ? "top" : "left", x = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", v = s.reference[m] + s.reference[d] - h[d] - s.floating[m], A = h[d] - s.reference[d], P = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a));
  let b = P ? P[y] : 0;
  (!b || !await (r.isElement == null ? void 0 : r.isElement(P))) && (b = l.floating[y] || s.floating[m]);
  const C = v / 2 - A / 2, S = b / 2 - p[m] / 2 - 1, E = K(u[w], S), R = K(u[x], S), D = E, z = b - p[m] - R, $ = b / 2 - p[m] / 2 + C, T = yt(D, $, z), j = !c.arrow && it(i) != null && $ !== T && s.reference[m] / 2 - ($ < D ? E : R) - p[m] / 2 < 0, L = j ? $ < D ? $ - D : $ - z : 0;
  return { [d]: h[d] + L, data: { [d]: T, centerOffset: $ - T - L, ...j && { alignmentOffset: L } }, reset: j };
} }), De = function(t) {
  return t === void 0 && (t = {}), { name: "flip", options: t, async fn(e) {
    var n, o;
    const { placement: i, middlewareData: s, rects: r, initialPlacement: l, platform: c, elements: a } = e, { mainAxis: f = true, crossAxis: u = true, fallbackPlacements: h, fallbackStrategy: d = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: p = true, ...g } = q(t, e);
    if ((n = s.arrow) != null && n.alignmentOffset) return {};
    const w = U(i), x = Y(l), y = U(l) === l, v = await (c.isRTL == null ? void 0 : c.isRTL(a.floating)), A = h || (y || !p ? [ft(l)] : Ce(l)), P = m !== "none";
    !h && P && A.push(...Pe(l, p, m, v));
    const b = [l, ...A], C = await rt(e, g), S = [];
    let E = ((o = s.flip) == null ? void 0 : o.overflows) || [];
    if (f && S.push(C[w]), u) {
      const T = Ae(i, r, v);
      S.push(C[T[0]], C[T[1]]);
    }
    if (E = [...E, { placement: i, overflows: S }], !S.every((T) => T <= 0)) {
      var R, D;
      const T = (((R = s.flip) == null ? void 0 : R.index) || 0) + 1, j = b[T];
      if (j) {
        var z;
        const X = u === "alignment" ? x !== Y(j) : false, H = ((z = E[0]) == null ? void 0 : z.overflows[0]) > 0;
        if (!X || H) return { data: { index: T, overflows: E }, reset: { placement: j } };
      }
      let L = (D = E.filter((X) => X.overflows[0] <= 0).sort((X, H) => X.overflows[1] - H.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!L) switch (d) {
        case "bestFit": {
          var $;
          const X = ($ = E.filter((H) => {
            if (P) {
              const G = Y(H.placement);
              return G === x || G === "y";
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
  return xe.some((e) => t[e] >= 0);
}
const Le = function(t) {
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
async function Te(t, e) {
  const { placement: n, platform: o, elements: i } = t, s = await (o.isRTL == null ? void 0 : o.isRTL(i.floating)), r = U(n), l = it(n), c = Y(n) === "y", a = ["left", "top"].includes(r) ? -1 : 1, f = s && c ? -1 : 1, u = q(e, t);
  let { mainAxis: h, crossAxis: d, alignmentAxis: m } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: u.mainAxis || 0, crossAxis: u.crossAxis || 0, alignmentAxis: u.alignmentAxis };
  return l && typeof m == "number" && (d = l === "end" ? m * -1 : m), c ? { x: d * f, y: h * a } : { x: h * a, y: d * f };
}
const ke = function(t) {
  return t === void 0 && (t = 0), { name: "offset", options: t, async fn(e) {
    var n, o;
    const { x: i, y: s, placement: r, middlewareData: l } = e, c = await Te(e, t);
    return r === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: i + c.x, y: s + c.y, data: { ...c, placement: r } };
  } };
}, Be = function(t) {
  return t === void 0 && (t = {}), { name: "shift", options: t, async fn(e) {
    const { x: n, y: o, placement: i } = e, { mainAxis: s = true, crossAxis: r = false, limiter: l = { fn: (g) => {
      let { x: w, y: x } = g;
      return { x: w, y: x };
    } }, ...c } = q(t, e), a = { x: n, y: o }, f = await rt(e, c), u = Y(U(i)), h = Pt(u);
    let d = a[h], m = a[u];
    if (s) {
      const g = h === "y" ? "top" : "left", w = h === "y" ? "bottom" : "right", x = d + f[g], y = d - f[w];
      d = yt(x, d, y);
    }
    if (r) {
      const g = u === "y" ? "top" : "left", w = u === "y" ? "bottom" : "right", x = m + f[g], y = m - f[w];
      m = yt(x, m, y);
    }
    const p = l.fn({ ...e, [h]: d, [u]: m });
    return { ...p, data: { x: p.x - n, y: p.y - o, enabled: { [h]: s, [u]: r } } };
  } };
}, $e = function(t) {
  return t === void 0 && (t = {}), { options: t, fn(e) {
    const { x: n, y: o, placement: i, rects: s, middlewareData: r } = e, { offset: l = 0, mainAxis: c = true, crossAxis: a = true } = q(t, e), f = { x: n, y: o }, u = Y(i), h = Pt(u);
    let d = f[h], m = f[u];
    const p = q(l, e), g = typeof p == "number" ? { mainAxis: p, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...p };
    if (c) {
      const y = h === "y" ? "height" : "width", v = s.reference[h] - s.floating[y] + g.mainAxis, A = s.reference[h] + s.reference[y] - g.mainAxis;
      d < v ? d = v : d > A && (d = A);
    }
    if (a) {
      var w, x;
      const y = h === "y" ? "width" : "height", v = ["top", "left"].includes(U(i)), A = s.reference[u] - s.floating[y] + (v && ((w = r.offset) == null ? void 0 : w[u]) || 0) + (v ? 0 : g.crossAxis), P = s.reference[u] + s.reference[y] + (v ? 0 : ((x = r.offset) == null ? void 0 : x[u]) || 0) - (v ? g.crossAxis : 0);
      m < A ? m = A : m > P && (m = P);
    }
    return { [h]: d, [u]: m };
  } };
}, Me = function(t) {
  return t === void 0 && (t = {}), { name: "size", options: t, async fn(e) {
    var n, o;
    const { placement: i, rects: s, platform: r, elements: l } = e, { apply: c = () => {
    }, ...a } = q(t, e), f = await rt(e, a), u = U(i), h = it(i), d = Y(i) === "y", { width: m, height: p } = s.floating;
    let g, w;
    u === "top" || u === "bottom" ? (g = u, w = h === (await (r.isRTL == null ? void 0 : r.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (w = u, g = h === "end" ? "top" : "bottom");
    const x = p - f.top - f.bottom, y = m - f.left - f.right, v = K(p - f[g], x), A = K(m - f[w], y), P = !e.middlewareData.shift;
    let b = v, C = A;
    if ((n = e.middlewareData.shift) != null && n.enabled.x && (C = y), (o = e.middlewareData.shift) != null && o.enabled.y && (b = x), P && !h) {
      const E = k(f.left, 0), R = k(f.right, 0), D = k(f.top, 0), z = k(f.bottom, 0);
      d ? C = m - 2 * (E !== 0 || R !== 0 ? E + R : k(f.left, f.right)) : b = p - 2 * (D !== 0 || z !== 0 ? D + z : k(f.top, f.bottom));
    }
    await c({ ...e, availableWidth: C, availableHeight: b });
    const S = await r.getDimensions(l.floating);
    return m !== S.width || p !== S.height ? { reset: { rects: true } } : {};
  } };
};
function dt() {
  return typeof window < "u";
}
function J(t) {
  return Et(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function B(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function I(t) {
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
function Fe(t) {
  return ["table", "td", "th"].includes(J(t));
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
function We(t) {
  let e = Q(t);
  for (; N(e) && !ot(e); ) {
    if (Dt(e)) return e;
    if (mt(e)) return null;
    e = Q(e);
  }
  return null;
}
function Lt() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function ot(t) {
  return ["html", "body", "#document"].includes(J(t));
}
function W(t) {
  return B(t).getComputedStyle(t);
}
function ht(t) {
  return F(t) ? { scrollLeft: t.scrollLeft, scrollTop: t.scrollTop } : { scrollLeft: t.scrollX, scrollTop: t.scrollY };
}
function Q(t) {
  if (J(t) === "html") return t;
  const e = t.assignedSlot || t.parentNode || Ft(t) && t.host || I(t);
  return Ft(e) ? e.host : e;
}
function Kt(t) {
  const e = Q(t);
  return ot(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : N(e) && lt(e) ? e : Kt(e);
}
function st(t, e, n) {
  var o;
  e === void 0 && (e = []), n === void 0 && (n = true);
  const i = Kt(t), s = i === ((o = t.ownerDocument) == null ? void 0 : o.body), r = B(i);
  if (s) {
    const l = vt(r);
    return e.concat(r, r.visualViewport || [], lt(i) ? i : [], l && n ? st(l) : []);
  }
  return e.concat(i, st(i, [], n));
}
function vt(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function Qt(t) {
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
  if (!N(e)) return V(1);
  const n = e.getBoundingClientRect(), { width: o, height: i, $: s } = Qt(e);
  let r = (s ? at(n.width) : n.width) / o, l = (s ? at(n.height) : n.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: r, y: l };
}
const ze = V(0);
function Zt(t) {
  const e = B(t);
  return !Lt() || !e.visualViewport ? ze : { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop };
}
function He(t, e, n) {
  return e === void 0 && (e = false), !n || e && n !== B(t) ? false : e;
}
function Z(t, e, n, o) {
  e === void 0 && (e = false), n === void 0 && (n = false);
  const i = t.getBoundingClientRect(), s = Tt(t);
  let r = V(1);
  e && (o ? F(o) && (r = nt(o)) : r = nt(t));
  const l = He(s, n, o) ? Zt(s) : V(0);
  let c = (i.left + l.x) / r.x, a = (i.top + l.y) / r.y, f = i.width / r.x, u = i.height / r.y;
  if (s) {
    const h = B(s), d = o && F(o) ? B(o) : o;
    let m = h, p = vt(m);
    for (; p && o && d !== m; ) {
      const g = nt(p), w = p.getBoundingClientRect(), x = W(p), y = w.left + (p.clientLeft + parseFloat(x.paddingLeft)) * g.x, v = w.top + (p.clientTop + parseFloat(x.paddingTop)) * g.y;
      c *= g.x, a *= g.y, f *= g.x, u *= g.y, c += y, a += v, m = B(p), p = vt(m);
    }
  }
  return ut({ width: f, height: u, x: c, y: a });
}
function kt(t, e) {
  const n = ht(t).scrollLeft;
  return e ? e.left + n : Z(I(t)).left + n;
}
function Jt(t, e, n) {
  n === void 0 && (n = false);
  const o = t.getBoundingClientRect(), i = o.left + e.scrollLeft - (n ? 0 : kt(t, o)), s = o.top + e.scrollTop;
  return { x: i, y: s };
}
function _e(t) {
  let { elements: e, rect: n, offsetParent: o, strategy: i } = t;
  const s = i === "fixed", r = I(o), l = e ? mt(e.floating) : false;
  if (o === r || l && s) return n;
  let c = { scrollLeft: 0, scrollTop: 0 }, a = V(1);
  const f = V(0), u = N(o);
  if ((u || !u && !s) && ((J(o) !== "body" || lt(r)) && (c = ht(o)), N(o))) {
    const d = Z(o);
    a = nt(o), f.x = d.x + o.clientLeft, f.y = d.y + o.clientTop;
  }
  const h = r && !u && !s ? Jt(r, c, true) : V(0);
  return { width: n.width * a.x, height: n.height * a.y, x: n.x * a.x - c.scrollLeft * a.x + f.x + h.x, y: n.y * a.y - c.scrollTop * a.y + f.y + h.y };
}
function Ve(t) {
  return Array.from(t.getClientRects());
}
function Ne(t) {
  const e = I(t), n = ht(t), o = t.ownerDocument.body, i = k(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth), s = k(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
  let r = -n.scrollLeft + kt(t);
  const l = -n.scrollTop;
  return W(o).direction === "rtl" && (r += k(e.clientWidth, o.clientWidth) - i), { width: i, height: s, x: r, y: l };
}
function Ie(t, e) {
  const n = B(t), o = I(t), i = n.visualViewport;
  let s = o.clientWidth, r = o.clientHeight, l = 0, c = 0;
  if (i) {
    s = i.width, r = i.height;
    const a = Lt();
    (!a || a && e === "fixed") && (l = i.offsetLeft, c = i.offsetTop);
  }
  return { width: s, height: r, x: l, y: c };
}
function je(t, e) {
  const n = Z(t, true, e === "fixed"), o = n.top + t.clientTop, i = n.left + t.clientLeft, s = N(t) ? nt(t) : V(1), r = t.clientWidth * s.x, l = t.clientHeight * s.y, c = i * s.x, a = o * s.y;
  return { width: r, height: l, x: c, y: a };
}
function Wt(t, e, n) {
  let o;
  if (e === "viewport") o = Ie(t, n);
  else if (e === "document") o = Ne(I(t));
  else if (F(e)) o = je(e, n);
  else {
    const i = Zt(t);
    o = { x: e.x - i.x, y: e.y - i.y, width: e.width, height: e.height };
  }
  return ut(o);
}
function te(t, e) {
  const n = Q(t);
  return n === e || !F(n) || ot(n) ? false : W(n).position === "fixed" || te(n, e);
}
function Ye(t, e) {
  const n = e.get(t);
  if (n) return n;
  let o = st(t, [], false).filter((l) => F(l) && J(l) !== "body"), i = null;
  const s = W(t).position === "fixed";
  let r = s ? Q(t) : t;
  for (; F(r) && !ot(r); ) {
    const l = W(r), c = Dt(r);
    !c && l.position === "fixed" && (i = null), (s ? !c && !i : !c && l.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || lt(r) && !c && te(t, r)) ? o = o.filter((f) => f !== r) : i = l, r = Q(r);
  }
  return e.set(t, o), o;
}
function qe(t) {
  let { element: e, boundary: n, rootBoundary: o, strategy: i } = t;
  const r = [...n === "clippingAncestors" ? mt(e) ? [] : Ye(e, this._c) : [].concat(n), o], l = r[0], c = r.reduce((a, f) => {
    const u = Wt(e, f, i);
    return a.top = k(u.top, a.top), a.right = K(u.right, a.right), a.bottom = K(u.bottom, a.bottom), a.left = k(u.left, a.left), a;
  }, Wt(e, l, i));
  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
}
function Ue(t) {
  const { width: e, height: n } = Qt(t);
  return { width: e, height: n };
}
function Xe(t, e, n) {
  const o = N(e), i = I(e), s = n === "fixed", r = Z(t, true, s, e);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const c = V(0);
  function a() {
    c.x = kt(i);
  }
  if (o || !o && !s) if ((J(e) !== "body" || lt(i)) && (l = ht(e)), o) {
    const d = Z(e, true, s, e);
    c.x = d.x + e.clientLeft, c.y = d.y + e.clientTop;
  } else i && a();
  s && !o && i && a();
  const f = i && !o && !s ? Jt(i, l) : V(0), u = r.left + l.scrollLeft - c.x - f.x, h = r.top + l.scrollTop - c.y - f.y;
  return { x: u, y: h, width: r.width, height: r.height };
}
function gt(t) {
  return W(t).position === "static";
}
function zt(t, e) {
  if (!N(t) || W(t).position === "fixed") return null;
  if (e) return e(t);
  let n = t.offsetParent;
  return I(t) === n && (n = n.ownerDocument.body), n;
}
function ee(t, e) {
  const n = B(t);
  if (mt(t)) return n;
  if (!N(t)) {
    let i = Q(t);
    for (; i && !ot(i); ) {
      if (F(i) && !gt(i)) return i;
      i = Q(i);
    }
    return n;
  }
  let o = zt(t, e);
  for (; o && Fe(o) && gt(o); ) o = zt(o, e);
  return o && ot(o) && gt(o) && !Dt(o) ? n : o || We(t) || n;
}
const Ge = async function(t) {
  const e = this.getOffsetParent || ee, n = this.getDimensions, o = await n(t.floating);
  return { reference: Xe(t.reference, await e(t.floating), t.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function Ke(t) {
  return W(t).direction === "rtl";
}
const Qe = { convertOffsetParentRelativeRectToViewportRelativeRect: _e, getDocumentElement: I, getClippingRect: qe, getOffsetParent: ee, getElementRects: Ge, getClientRects: Ve, getDimensions: Ue, getScale: nt, isElement: F, isRTL: Ke };
function ne(t, e) {
  return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height;
}
function Ze(t, e) {
  let n = null, o;
  const i = I(t);
  function s() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function r(l, c) {
    l === void 0 && (l = false), c === void 0 && (c = 1), s();
    const a = t.getBoundingClientRect(), { left: f, top: u, width: h, height: d } = a;
    if (l || e(), !h || !d) return;
    const m = ct(u), p = ct(i.clientWidth - (f + h)), g = ct(i.clientHeight - (u + d)), w = ct(f), y = { rootMargin: -m + "px " + -p + "px " + -g + "px " + -w + "px", threshold: k(0, K(1, c)) || 1 };
    let v = true;
    function A(P) {
      const b = P[0].intersectionRatio;
      if (b !== c) {
        if (!v) return r();
        b ? r(false, b) : o = setTimeout(() => {
          r(false, 1e-7);
        }, 1e3);
      }
      b === 1 && !ne(a, t.getBoundingClientRect()) && r(), v = false;
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
function Je(t, e, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: i = true, ancestorResize: s = true, elementResize: r = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: c = false } = o, a = Tt(t), f = i || s ? [...a ? st(a) : [], ...st(e)] : [];
  f.forEach((w) => {
    i && w.addEventListener("scroll", n, { passive: true }), s && w.addEventListener("resize", n);
  });
  const u = a && l ? Ze(a, n) : null;
  let h = -1, d = null;
  r && (d = new ResizeObserver((w) => {
    let [x] = w;
    x && x.target === a && d && (d.unobserve(e), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var y;
      (y = d) == null || y.observe(e);
    })), n();
  }), a && !c && d.observe(a), d.observe(e));
  let m, p = c ? Z(t) : null;
  c && g();
  function g() {
    const w = Z(t);
    p && !ne(p, w) && n(), p = w, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var w;
    f.forEach((x) => {
      i && x.removeEventListener("scroll", n), s && x.removeEventListener("resize", n);
    }), u == null ? void 0 : u(), (w = d) == null || w.disconnect(), d = null, c && cancelAnimationFrame(m);
  };
}
const tn = ke, en = Be, Ht = De, nn = Me, on = Le, rn = Ee, sn = $e, ln = (t, e, n) => {
  const o = /* @__PURE__ */ new Map(), i = { platform: Qe, ...n }, s = { ...i.platform, _c: o };
  return Se(t, e, { ...i, platform: s });
};
function cn(t) {
  return t != null && typeof t == "object" && "$el" in t;
}
function bt(t) {
  if (cn(t)) {
    const e = t.$el;
    return Et(e) && J(e) === "#comment" ? null : e;
  }
  return t;
}
function et(t) {
  return typeof t == "function" ? t() : M(t);
}
function an(t) {
  return { name: "arrow", options: t, fn(e) {
    const n = bt(et(t.element));
    return n == null ? {} : rn({ element: n, padding: t.padding }).fn(e);
  } };
}
function oe(t) {
  return typeof window > "u" ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function _t(t, e) {
  const n = oe(t);
  return Math.round(e * n) / n;
}
function fn(t, e, n) {
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
  }), a = O(() => bt(t.value)), f = O(() => bt(e.value)), u = _(0), h = _(0), d = _(l.value), m = _(r.value), p = se({}), g = _(false), w = O(() => {
    const b = { position: d.value, left: "0", top: "0" };
    if (!f.value) return b;
    const C = _t(f.value, u.value), S = _t(f.value, h.value);
    return c.value ? { ...b, transform: "translate(" + C + "px, " + S + "px)", ...oe(f.value) >= 1.5 && { willChange: "transform" } } : { position: d.value, left: C + "px", top: S + "px" };
  });
  let x;
  function y() {
    if (a.value == null || f.value == null) return;
    const b = i.value;
    ln(a.value, f.value, { middleware: s.value, placement: r.value, strategy: l.value }).then((C) => {
      u.value = C.x, h.value = C.y, d.value = C.strategy, m.value = C.placement, p.value = C.middlewareData, g.value = b !== false;
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
  return pt([s, r, l, i], y, { flush: "sync" }), pt([a, f], A, { flush: "sync" }), pt(i, P, { flush: "sync" }), le() && ce(v), { x: tt(u), y: tt(h), strategy: tt(d), placement: tt(m), middlewareData: tt(p), isPositioned: tt(g), floatingStyles: w, update: y };
}
const [ie, un] = Nt("PopperRoot"), yn = Ct({ inheritAttrs: false, __name: "PopperRoot", setup(t) {
  const e = _();
  return un({ anchor: e, onAnchorChange: (n) => e.value = n }), (n, o) => Ot(n.$slots, "default");
} }), xn = Ct({ __name: "PopperAnchor", props: { reference: {}, asChild: { type: Boolean }, as: {} }, setup(t) {
  const e = t, { forwardRef: n, currentElement: o } = It(), i = ie();
  return jt(() => {
    i.onAnchorChange(e.reference ?? o.value);
  }), (s, r) => (Yt(), ae(M(Ut), { ref: M(n), as: s.as, "as-child": s.asChild }, { default: qt(() => [Ot(s.$slots, "default")]), _: 3 }, 8, ["as", "as-child"]));
} });
function dn(t) {
  return t !== null;
}
function mn(t) {
  return { name: "transformOrigin", options: t, fn(e) {
    var _a, _b, _c;
    const { placement: n, rects: o, middlewareData: i } = e, r = ((_a = i.arrow) == null ? void 0 : _a.centerOffset) !== 0, l = r ? 0 : t.arrowWidth, c = r ? 0 : t.arrowHeight, [a, f] = At(n), u = { start: "0%", center: "50%", end: "100%" }[f], h = (((_b = i.arrow) == null ? void 0 : _b.x) ?? 0) + l / 2, d = (((_c = i.arrow) == null ? void 0 : _c.y) ?? 0) + c / 2;
    let m = "", p = "";
    return a === "bottom" ? (m = r ? u : `${h}px`, p = `${-c}px`) : a === "top" ? (m = r ? u : `${h}px`, p = `${o.floating.height + c}px`) : a === "right" ? (m = `${-c}px`, p = r ? u : `${d}px`) : a === "left" && (m = `${o.floating.width + c}px`, p = r ? u : `${d}px`), { data: { x: m, y: p } };
  } };
}
function At(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
function hn(t) {
  const e = _(), n = O(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.width) ?? 0;
  }), o = O(() => {
    var _a;
    return ((_a = e.value) == null ? void 0 : _a.height) ?? 0;
  });
  return fe(() => {
    const i = ue(t);
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
const pn = { side: "bottom", sideOffset: 0, align: "center", alignOffset: 0, arrowPadding: 0, avoidCollisions: true, collisionBoundary: () => [], collisionPadding: 0, sticky: "partial", hideWhenDetached: false, positionStrategy: "fixed", updatePositionStrategy: "optimized", prioritizePosition: false }, [vn, gn] = Nt("PopperContent"), bn = Ct({ inheritAttrs: false, __name: "PopperContent", props: de({ side: {}, sideOffset: {}, align: {}, alignOffset: {}, avoidCollisions: { type: Boolean }, collisionBoundary: {}, collisionPadding: {}, arrowPadding: {}, sticky: {}, hideWhenDetached: { type: Boolean }, positionStrategy: {}, updatePositionStrategy: {}, disableUpdateOnLayoutShift: { type: Boolean }, prioritizePosition: { type: Boolean }, reference: {}, asChild: { type: Boolean }, as: {} }, { ...pn }), emits: ["placed"], setup(t, { emit: e }) {
  const n = t, o = e, i = ie(), { forwardRef: s, currentElement: r } = It(), l = _(), c = _(), { width: a, height: f } = hn(c), u = O(() => n.side + (n.align !== "center" ? `-${n.align}` : "")), h = O(() => typeof n.collisionPadding == "number" ? n.collisionPadding : { top: 0, right: 0, bottom: 0, left: 0, ...n.collisionPadding }), d = O(() => Array.isArray(n.collisionBoundary) ? n.collisionBoundary : [n.collisionBoundary]), m = O(() => ({ padding: h.value, boundary: d.value.filter(dn), altBoundary: d.value.length > 0 })), p = me(() => [tn({ mainAxis: n.sideOffset + f.value, alignmentAxis: n.alignOffset }), n.prioritizePosition && n.avoidCollisions && Ht({ ...m.value }), n.avoidCollisions && en({ mainAxis: true, crossAxis: !!n.prioritizePosition, limiter: n.sticky === "partial" ? sn() : void 0, ...m.value }), !n.prioritizePosition && n.avoidCollisions && Ht({ ...m.value }), nn({ ...m.value, apply: ({ elements: R, rects: D, availableWidth: z, availableHeight: $ }) => {
    const { width: T, height: j } = D.reference, L = R.floating.style;
    L.setProperty("--reka-popper-available-width", `${z}px`), L.setProperty("--reka-popper-available-height", `${$}px`), L.setProperty("--reka-popper-anchor-width", `${T}px`), L.setProperty("--reka-popper-anchor-height", `${j}px`);
  } }), c.value && an({ element: c.value, padding: n.arrowPadding }), mn({ arrowWidth: a.value, arrowHeight: f.value }), n.hideWhenDetached && on({ strategy: "referenceHidden", ...m.value })]), g = O(() => n.reference ?? i.anchor.value), { floatingStyles: w, placement: x, isPositioned: y, middlewareData: v } = fn(g, l, { strategy: n.positionStrategy, placement: u, whileElementsMounted: (...R) => Je(...R, { layoutShift: !n.disableUpdateOnLayoutShift, animationFrame: n.updatePositionStrategy === "always" }), middleware: p }), A = O(() => At(x.value)[0]), P = O(() => At(x.value)[1]);
  jt(() => {
    y.value && o("placed");
  });
  const b = O(() => {
    var _a;
    return ((_a = v.value.arrow) == null ? void 0 : _a.centerOffset) !== 0;
  }), C = _("");
  Xt(() => {
    r.value && (C.value = window.getComputedStyle(r.value).zIndex);
  });
  const S = O(() => {
    var _a;
    return ((_a = v.value.arrow) == null ? void 0 : _a.x) ?? 0;
  }), E = O(() => {
    var _a;
    return ((_a = v.value.arrow) == null ? void 0 : _a.y) ?? 0;
  });
  return gn({ placedSide: A, onArrowChange: (R) => c.value = R, arrowX: S, arrowY: E, shouldHideArrow: b }), (R, D) => {
    var _a, _b, _c;
    return Yt(), he("div", { ref_key: "floatingRef", ref: l, "data-reka-popper-content-wrapper": "", style: we({ ...M(w), transform: M(y) ? M(w).transform : "translate(0, -200%)", minWidth: "max-content", zIndex: C.value, "--reka-popper-transform-origin": [(_a = M(v).transformOrigin) == null ? void 0 : _a.x, (_b = M(v).transformOrigin) == null ? void 0 : _b.y].join(" "), ...((_c = M(v).hide) == null ? void 0 : _c.referenceHidden) && { visibility: "hidden", pointerEvents: "none" } }) }, [pe(M(Ut), ge({ ref: M(s) }, R.$attrs, { "as-child": n.asChild, as: R.as, "data-side": A.value, "data-align": P.value, style: { animation: M(y) ? void 0 : "none" } }), { default: qt(() => [Ot(R.$slots, "default")]), _: 3 }, 16, ["as-child", "as", "data-side", "data-align", "style"])], 4);
  };
} });
let wt = 0;
function An() {
  Xt((t) => {
    if (!ye) return;
    const e = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", e[0] ?? Vt()), document.body.insertAdjacentElement("beforeend", e[1] ?? Vt()), wt++, t(() => {
      wt === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((n) => n.remove()), wt--;
    });
  });
}
function Vt() {
  const t = document.createElement("span");
  return t.setAttribute("data-reka-focus-guard", ""), t.tabIndex = 0, t.style.outline = "none", t.style.opacity = "0", t.style.position = "fixed", t.style.pointerEvents = "none", t;
}
export {
  xn as _,
  yn as a,
  bn as b,
  vn as i,
  An as u
};
