import { d as nt, $ as Wt, aR as Bt, B as wt, c as j, a1 as Gt, ae as pt, G as kt, o as W, T as jt, a$ as dt, ao as gt, an as Pt, i as lt, E as Vt, N as Yt, ag as Ut, a as V, w as St, b as Xt, f as ht, u as I, bI as qt, H as Qt, av as Zt, e as tt, aw as Ct, t as st, h as Jt } from "./C95QRNzc.js";
import { C as Kt, d as te, $ as ft, A as ct, a0 as _t, a1 as Y, a2 as M, q as C, a3 as yt, r as ee, s as L, a4 as rt, a5 as et, a6 as mt, a7 as xt, a8 as k, a9 as At, aa as ne, ab as ae, l as oe, w as Dt, i as ie, f as at, t as se, m as re, S as le, v as Rt, u as ce, h as ue, ac as de, Q as Lt, R as Tt, X as ge, Y as fe, Z as me, _ as pe } from "./BonmEWrn.js";
import { _ as he } from "./DlAUqK2U.js";
import { _ as Ot } from "./iXO873XU.js";
import { i as ve } from "./DEpc-rVb.js";
import { u as be } from "./DJne-mAn.js";
import { u as Et } from "./BhpWC2zv.js";
import { u as _e } from "./BB0NDaZh.js";
import { g as ye } from "./CpsPJSKh.js";
import "./CqkleIqs.js";
import "./BPgVFFXt.js";
import "./D0DW2WUk.js";
const xe = Object.assign(Object.assign({}, Kt), { tooltip: void 0, annotations: void 0 });
class Ae extends te {
  constructor(e, n, o) {
    var l;
    super(e), this._defaultConfig = xe, this.config = this._defaultConfig, n && (this.updateContainer(n, true), this.component = n.component), o && this.setData(o, true), !((l = this.component) === null || l === void 0) && l.datamodel.data && this.render();
  }
  setData(e, n) {
    var o;
    const { config: l } = this;
    this.component && this.component.setData(e), n || this.render(), (o = l.tooltip) === null || o === void 0 || o.hide();
  }
  updateContainer(e, n) {
    super.updateContainer(e), this._removeAllChildren(), this.component = e.component, e.sizing && (this.component.sizing = e.sizing), this.element.appendChild(this.component.element);
    const o = e.tooltip;
    o && (o.hasContainer() || o.setContainer(this._container), o.setComponents([this.component]));
    const l = e.annotations;
    l && this.element.appendChild(l.element), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), n || this.render();
  }
  updateComponent(e, n) {
    this.component.setConfig(e), n || this.render();
  }
  update(e, n, o) {
    e && this.updateContainer(e, true), n && this.updateComponent(n, true), o && this.setData(o, true), this.render();
  }
  getFitWidthScale() {
    const { config: e, component: n } = this, o = n;
    if (!o.getWidth) return 1;
    const l = o.getWidth() + e.margin.left + e.margin.right;
    return this.width / l;
  }
  _preRender() {
    var e;
    super._preRender(), this.component.setSize(this.width, this.height, this.containerWidth, this.containerHeight), (e = this.config.annotations) === null || e === void 0 || e.setSize(this.width, this.height, this.containerWidth, this.containerHeight);
  }
  _render(e) {
    var n;
    const { config: o, component: l } = this;
    super._render(e), l.g.attr("transform", `translate(${o.margin.left},${o.margin.top})`), l.render(e), (n = o.annotations) === null || n === void 0 || n.render(e), o.tooltip && o.tooltip.update();
  }
  render(e = this.config.duration) {
    const { config: n, component: o } = this;
    if (n.sizing === ft.Extend || n.sizing === ft.FitWidth) {
      const l = n.sizing === ft.FitWidth, u = o, s = u.getWidth() + n.margin.left + n.margin.right, t = u.getHeight() + n.margin.top + n.margin.bottom, i = l ? this.getFitWidthScale() : 1, a = this.svg.attr("width"), h = this.svg.attr("height"), g = s * i, d = t * i, v = a || h;
      ct(this.svg, v ? e : 0).attr("width", g).attr("height", d).attr("viewBox", `0 0 ${s} ${l ? d : t}`).attr("preserveAspectRatio", "xMinYMin");
    } else this.svg.attr("width", this.config.width || this.containerWidth).attr("height", this.config.height || this.containerHeight);
    this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
      this._preRender(), this._render(e);
    });
  }
  _onResize() {
    var e;
    const { config: n } = this;
    super._onResize(), (e = n.tooltip) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, n;
    const { component: o, config: l } = this;
    super.destroy(), o == null ? void 0 : o.destroy(), (e = l.tooltip) === null || e === void 0 || e.destroy(), (n = l.annotations) === null || n === void 0 || n.destroy();
  }
}
function Re(c) {
  return c.innerRadius;
}
function we(c) {
  return c.outerRadius;
}
function ke(c) {
  return c.startAngle;
}
function Se(c) {
  return c.endAngle;
}
function Ce(c) {
  return c && c.padAngle;
}
function De(c, e, n, o, l, u, s, t) {
  var i = n - c, a = o - e, h = s - l, g = t - u, d = g * i - h * a;
  if (!(d * d < L)) return d = (h * (e - u) - g * (c - l)) / d, [c + d * i, e + d * a];
}
function it(c, e, n, o, l, u, s) {
  var t = c - n, i = e - o, a = (s ? u : -u) / et(t * t + i * i), h = a * i, g = -a * t, d = c + h, v = e + g, b = n + h, R = o + g, r = (d + b) / 2, D = (v + R) / 2, y = b - d, x = R - v, _ = y * y + x * x, w = l - u, A = d * R - b * v, F = (x < 0 ? -1 : 1) * et(ne(0, w * w * _ - A * A)), N = (A * x - y * F) / _, S = (-A * y - x * F) / _, T = (A * x + y * F) / _, O = (-A * y + x * F) / _, f = N - r, p = S - D, $ = T - r, z = O - D;
  return f * f + p * p > $ * $ + z * z && (N = T, S = O), { cx: N, cy: S, x01: -h, y01: -g, x11: N * (l / w - 1), y11: S * (l / w - 1) };
}
function Le() {
  var c = Re, e = we, n = C(0), o = null, l = ke, u = Se, s = Ce, t = null;
  function i() {
    var a, h, g = +c.apply(this, arguments), d = +e.apply(this, arguments), v = l.apply(this, arguments) - yt, b = u.apply(this, arguments) - yt, R = xt(b - v), r = b > v;
    if (t || (t = a = ee()), d < g && (h = d, d = g, g = h), !(d > L)) t.moveTo(0, 0);
    else if (R > rt - L) t.moveTo(d * Y(v), d * M(v)), t.arc(0, 0, d, v, b, !r), g > L && (t.moveTo(g * Y(b), g * M(b)), t.arc(0, 0, g, b, v, r));
    else {
      var D = v, y = b, x = v, _ = b, w = R, A = R, F = s.apply(this, arguments) / 2, N = F > L && (o ? +o.apply(this, arguments) : et(g * g + d * d)), S = mt(xt(d - g) / 2, +n.apply(this, arguments)), T = S, O = S, f, p;
      if (N > L) {
        var $ = At(N / g * M(F)), z = At(N / d * M(F));
        (w -= $ * 2) > L ? ($ *= r ? 1 : -1, x += $, _ -= $) : (w = 0, x = _ = (v + b) / 2), (A -= z * 2) > L ? (z *= r ? 1 : -1, D += z, y -= z) : (A = 0, D = y = (v + b) / 2);
      }
      var B = d * Y(D), G = d * M(D), ot = g * Y(_), U = g * M(_);
      if (S > L) {
        var P = d * Y(y), X = d * M(y), q = g * Y(x), Q = g * M(x), H;
        if (R < _t && (H = De(B, G, q, Q, P, X, ot, U))) {
          var Z = B - H[0], J = G - H[1], m = P - H[0], E = X - H[1], K = 1 / M(ae((Z * m + J * E) / (et(Z * Z + J * J) * et(m * m + E * E))) / 2), bt = et(H[0] * H[0] + H[1] * H[1]);
          T = mt(S, (g - bt) / (K - 1)), O = mt(S, (d - bt) / (K + 1));
        }
      }
      A > L ? O > L ? (f = it(q, Q, B, G, d, O, r), p = it(P, X, ot, U, d, O, r), t.moveTo(f.cx + f.x01, f.cy + f.y01), O < S ? t.arc(f.cx, f.cy, O, k(f.y01, f.x01), k(p.y01, p.x01), !r) : (t.arc(f.cx, f.cy, O, k(f.y01, f.x01), k(f.y11, f.x11), !r), t.arc(0, 0, d, k(f.cy + f.y11, f.cx + f.x11), k(p.cy + p.y11, p.cx + p.x11), !r), t.arc(p.cx, p.cy, O, k(p.y11, p.x11), k(p.y01, p.x01), !r))) : (t.moveTo(B, G), t.arc(0, 0, d, D, y, !r)) : t.moveTo(B, G), !(g > L) || !(w > L) ? t.lineTo(ot, U) : T > L ? (f = it(ot, U, P, X, g, -T, r), p = it(B, G, q, Q, g, -T, r), t.lineTo(f.cx + f.x01, f.cy + f.y01), T < S ? t.arc(f.cx, f.cy, T, k(f.y01, f.x01), k(p.y01, p.x01), !r) : (t.arc(f.cx, f.cy, T, k(f.y01, f.x01), k(f.y11, f.x11), !r), t.arc(0, 0, g, k(f.cy + f.y11, f.cx + f.x11), k(p.cy + p.y11, p.cx + p.x11), r), t.arc(p.cx, p.cy, T, k(p.y11, p.x11), k(p.y01, p.x01), !r))) : t.arc(0, 0, g, _, x, r);
    }
    if (t.closePath(), a) return t = null, a + "" || null;
  }
  return i.centroid = function() {
    var a = (+c.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+l.apply(this, arguments) + +u.apply(this, arguments)) / 2 - _t / 2;
    return [Y(h) * a, M(h) * a];
  }, i.innerRadius = function(a) {
    return arguments.length ? (c = typeof a == "function" ? a : C(+a), i) : c;
  }, i.outerRadius = function(a) {
    return arguments.length ? (e = typeof a == "function" ? a : C(+a), i) : e;
  }, i.cornerRadius = function(a) {
    return arguments.length ? (n = typeof a == "function" ? a : C(+a), i) : n;
  }, i.padRadius = function(a) {
    return arguments.length ? (o = a == null ? null : typeof a == "function" ? a : C(+a), i) : o;
  }, i.startAngle = function(a) {
    return arguments.length ? (l = typeof a == "function" ? a : C(+a), i) : l;
  }, i.endAngle = function(a) {
    return arguments.length ? (u = typeof a == "function" ? a : C(+a), i) : u;
  }, i.padAngle = function(a) {
    return arguments.length ? (s = typeof a == "function" ? a : C(+a), i) : s;
  }, i.context = function(a) {
    return arguments.length ? (t = a ?? null, i) : t;
  }, i;
}
function Te(c, e) {
  return e < c ? -1 : e > c ? 1 : e >= c ? 0 : NaN;
}
function Oe(c) {
  return c;
}
function Ee() {
  var c = Oe, e = Te, n = null, o = C(0), l = C(rt), u = C(0);
  function s(t) {
    var i, a = t.length, h, g, d = 0, v = new Array(a), b = new Array(a), R = +o.apply(this, arguments), r = Math.min(rt, Math.max(-rt, l.apply(this, arguments) - R)), D, y = Math.min(Math.abs(r) / a, u.apply(this, arguments)), x = y * (r < 0 ? -1 : 1), _;
    for (i = 0; i < a; ++i) (_ = b[v[i] = i] = +c(t[i], i, t)) > 0 && (d += _);
    for (e != null ? v.sort(function(w, A) {
      return e(b[w], b[A]);
    }) : n != null && v.sort(function(w, A) {
      return n(t[w], t[A]);
    }), i = 0, g = d ? (r - a * x) / d : 0; i < a; ++i, R = D) h = v[i], _ = b[h], D = R + (_ > 0 ? _ * g : 0) + x, b[h] = { data: t[h], index: i, value: _, startAngle: R, endAngle: D, padAngle: y };
    return b;
  }
  return s.value = function(t) {
    return arguments.length ? (c = typeof t == "function" ? t : C(+t), s) : c;
  }, s.sortValues = function(t) {
    return arguments.length ? (e = t, n = null, s) : e;
  }, s.sort = function(t) {
    return arguments.length ? (n = t, e = null, s) : n;
  }, s.startAngle = function(t) {
    return arguments.length ? (o = typeof t == "function" ? t : C(+t), s) : o;
  }, s.endAngle = function(t) {
    return arguments.length ? (l = typeof t == "function" ? t : C(+t), s) : l;
  }, s.padAngle = function(t) {
    return arguments.length ? (u = typeof t == "function" ? t : C(+t), s) : u;
  }, s;
}
const Fe = Object.assign(Object.assign({}, oe), { id: (c, e) => {
  var n;
  return (n = c.id) !== null && n !== void 0 ? n : e;
}, value: void 0, angleRange: [0, 2 * Math.PI], padAngle: 0, sortFunction: void 0, cornerRadius: 0, color: void 0, radius: void 0, arcWidth: 20, centralLabel: void 0, centralSubLabel: void 0, centralSubLabelWrap: true, showEmptySegments: false, emptySegmentAngle: 0.5 * Math.PI / 180, showBackground: true, backgroundAngleRange: void 0, centralLabelOffsetX: void 0, centralLabelOffsetY: void 0 });
function Ne(c, e) {
  c.style("fill", (n) => Dt(n.data, e.color, n.index)).style("opacity", 0).each((n, o, l) => {
    const u = l[o], s = (n.startAngle + n.endAngle) / 2, t = (n.endAngle - n.startAngle) / 2;
    u._animState = { startAngle: s - t, endAngle: s + t, innerRadius: n.innerRadius, outerRadius: n.outerRadius, padAngle: n.padAngle };
  });
}
function $e(c, e, n, o) {
  c.style("transition", `fill ${o}ms`).style("fill", (u) => Dt(u.data, e.color, u.index));
  const l = (u) => e.showEmptySegments || u.value ? 1 : 0;
  o ? ct(c, o).style("opacity", l).attrTween("d", (s, t, i) => {
    const a = i[t], h = { startAngle: s.startAngle, endAngle: s.endAngle, innerRadius: s.innerRadius, outerRadius: s.outerRadius, padAngle: s.padAngle }, g = ie(a._animState, h);
    return (d) => (a._animState = g(d), n(a._animState));
  }) : c.attr("d", n).style("opacity", l);
}
function ze(c, e) {
  ct(c, e).style("opacity", 0).remove();
}
const Ft = Array.from({ length: 4 }, (c, e) => {
  const n = -Math.PI / 2 + e * Math.PI / 2;
  return [n, n + Math.PI];
}), [_n, yn, xn, An] = Ft, Nt = at`
  label: donut-component;
`, He = se`
  :root {
    --vis-donut-central-label-font-size: 16px;
    --vis-donut-central-label-text-color: #5b5f6d;
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-donut-central-label-font-family: */
    --vis-donut-central-label-font-weight: 600;

    --vis-donut-central-sub-label-font-size: 12px;
    --vis-donut-central-sub-label-text-color: #5b5f6d;
    // Undefined by default to allow proper fallback to var(--vis-font-family)
    /* --vis-donut-central-sub-label-font-family: */
    --vis-donut-central-sub-label-font-weight: 500;

    --vis-donut-background-color: #E7E9F3;
    --vis-donut-segment-stroke-width: 0;
    // The line segment color variable is not defined by default
    // to allow it to fallback to the donut background color
    /* --vis-donut-segment-stroke-color: none; */

    --vis-dark-donut-central-label-text-color: #C2BECE;
    --vis-dark-donut-central-sub-label-text-color: #C2BECE;
    --vis-dark-donut-background-color: #18160C;
  }

  body.theme-dark ${`.${Nt}`} {
    --vis-donut-central-label-text-color: var(--vis-dark-donut-central-label-text-color);
    --vis-donut-central-sub-label-text-color: var(--vis-dark-donut-central-sub-label-text-color);
    --vis-donut-background-color: var(--vis-dark-donut-background-color);
  }
`, $t = at`
  label: background;
  fill: var(--vis-donut-background-color);
`, vt = at`
  label: segment;
  stroke-width: var(--vis-donut-segment-stroke-width);
  stroke: var(--vis-donut-segment-stroke-color, var(--vis-donut-background-color));
`, zt = at`
  label: segment-exit;
`, Ht = at`
  label: central-label;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: var(--vis-donut-central-label-font-size);
  font-family: var(--vis-donut-central-label-font-family, var(--vis-font-family));
  font-weight: var(--vis-donut-central-label-font-weight);
  fill: var(--vis-donut-central-label-text-color);
`, It = at`
  label: central-label;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: var(--vis-donut-central-sub-label-font-size);
  font-family: var(--vis-donut-central-sub-label-font-family, var(--vis-font-family));
  font-weight: var(--vis-donut-central-sub-label-font-weight);
  fill: var(--vis-donut-central-sub-label-text-color);
`, Ie = Object.freeze(Object.defineProperty({ __proto__: null, background: $t, centralLabel: Ht, centralSubLabel: It, root: Nt, segment: vt, segmentExit: zt, variables: He }, Symbol.toStringTag, { value: "Module" }));
class ut extends re {
  constructor(e) {
    super(), this._defaultConfig = Fe, this.config = this._defaultConfig, this.datamodel = new le(), this.arcGen = Le(), this.events = {}, e && this.setConfig(e), this.arcBackground = this.g.append("path"), this.arcGroup = this.g.append("g"), this.centralLabel = this.g.append("text").attr("class", Ht), this.centralSubLabel = this.g.append("text").attr("class", It);
  }
  get bleed() {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }
  _render(e) {
    var n, o, l, u, s, t, i, a, h, g, d, v, b, R;
    const { config: r, datamodel: D, bleed: y } = this, x = D.data.map((m, E) => ({ index: E, datum: m })).filter((m) => r.showEmptySegments || Rt(m.datum, r.value, m.index)), _ = ce(e) ? e : r.duration, [w, A, F, N] = Ft.map((m) => r.angleRange && r.angleRange[0] === m[0] && r.angleRange[1] === m[1]), S = w || F, T = A || N, O = this._width * (T ? 2 : 1), f = this._height * (S ? 2 : 1), p = r.radius || Math.min(O - y.left - y.right, f - y.top - y.bottom) / 2, $ = r.arcWidth === 0 ? 0 : ue(p - r.arcWidth, 0, p - 1), z = this._height / 2 + (w ? p / 2 : F ? -p / 2 : 0), B = this._width / 2 + (N ? p / 2 : A ? -p / 2 : 0), G = `translate(${B},${z})`;
    this.arcGroup.attr("transform", G), this.arcGen.startAngle((m) => m.startAngle).endAngle((m) => m.endAngle).innerRadius((m) => m.innerRadius).outerRadius((m) => m.outerRadius).padAngle((m) => m.padAngle).cornerRadius(r.cornerRadius);
    const U = Ee().startAngle((o = (n = r.angleRange) === null || n === void 0 ? void 0 : n[0]) !== null && o !== void 0 ? o : 0).endAngle((u = (l = r.angleRange) === null || l === void 0 ? void 0 : l[1]) !== null && u !== void 0 ? u : 2 * Math.PI).padAngle(r.padAngle).value((m) => Rt(m.datum, r.value, m.index) || 0).sort((m, E) => {
      var K;
      return (K = r.sortFunction) === null || K === void 0 ? void 0 : K.call(r, m.datum, E.datum);
    })(x).map((m) => {
      const E = Object.assign(Object.assign({}, m), { data: m.data.datum, index: m.data.index, innerRadius: $, outerRadius: p });
      return r.showEmptySegments && m.endAngle - m.startAngle - m.padAngle <= Number.EPSILON && (E.endAngle = m.startAngle + Math.max(r.emptySegmentAngle, r.padAngle), E.padAngle = m.padAngle / 2), E;
    }), P = this.arcGroup.selectAll(`.${vt}`).data(U, (m) => r.id(m.data, m.index)), X = P.enter().append("path").attr("class", vt).call(Ne, r), q = P.merge(X);
    q.call($e, r, this.arcGen, _), q.sort((m, E) => E.value - m.value), P.exit().attr("class", zt).call(ze, _);
    const Q = A ? "start" : N ? "end" : "middle";
    this.centralLabel.attr("dy", r.centralSubLabel ? "-0.55em" : null).style("text-anchor", Q).text((s = r.centralLabel) !== null && s !== void 0 ? s : null), this.centralSubLabel.attr("dy", r.centralLabel ? "0.55em" : null).style("text-anchor", Q).text((t = r.centralSubLabel) !== null && t !== void 0 ? t : null), r.centralSubLabelWrap && de(this.centralSubLabel, $ * 1.9);
    const H = (r.centralLabelOffsetX || 0) + B;
    let Z = (r.centralLabelOffsetY || 0) + z;
    S && r.centralLabelOffsetX === void 0 && r.centralLabelOffsetY === void 0 && (Z = (w ? -this.centralSubLabel.node().getBoundingClientRect().height : F ? this.centralLabel.node().getBoundingClientRect().height : 0) + z);
    const J = `translate(${H},${Z})`;
    this.centralLabel.attr("transform", J), this.centralSubLabel.attr("transform", J), this.arcBackground.attr("class", $t).attr("visibility", r.showBackground ? null : "hidden").attr("transform", G), ct(this.arcBackground, _).attr("d", this.arcGen({ startAngle: (g = (a = (i = r.backgroundAngleRange) === null || i === void 0 ? void 0 : i[0]) !== null && a !== void 0 ? a : (h = r.angleRange) === null || h === void 0 ? void 0 : h[0]) !== null && g !== void 0 ? g : 0, endAngle: (R = (v = (d = r.backgroundAngleRange) === null || d === void 0 ? void 0 : d[1]) !== null && v !== void 0 ? v : (b = r.angleRange) === null || b === void 0 ? void 0 : b[1]) !== null && R !== void 0 ? R : 2 * Math.PI, innerRadius: $, outerRadius: p }));
  }
}
ut.selectors = Ie;
const Me = nt({ __name: "index", props: { component: {}, tooltip: {}, annotations: {}, duration: {}, margin: {}, padding: {}, sizing: {}, width: {}, height: {}, svgDefs: {}, ariaLabel: {}, data: {} }, setup(c, { expose: e }) {
  const n = c, { data: o } = Wt(n), l = Lt(n);
  let u;
  const s = Bt({ component: void 0, tooltip: void 0, annotations: void 0 }), t = wt(), i = () => {
    u || t.value && s.component && (u = new Ae(t.value, { ...dt(s) }, o.value));
  };
  return Gt(() => {
    var a;
    i(), (a = s.component) == null || a.config, u == null ? void 0 : u.updateContainer({ ...dt(l.value), ...dt(s) });
  }), pt(o, () => {
    u ? u.setData(o.value, true) : i();
  }), kt(() => u == null ? void 0 : u.destroy()), gt(Tt, { data: o, update: (a) => s.component = a, destroy: () => s.component = void 0 }), gt(ge, { data: o, update: (a) => s.tooltip = a, destroy: () => {
    s.tooltip = void 0;
  } }), gt(fe, { data: o, update: (a) => s.annotations = a, destroy: () => {
    s.annotations = void 0;
  } }), e({ component: u }), (a, h) => (W(), j("div", { "data-vis-single-container": "", ref_key: "elRef", ref: t, class: "unovis-single-container" }, [jt(a.$slots, "default")], 512));
} }), We = { "data-vis-component": "" };
ut.selectors;
const Be = nt({ __name: "index", props: { id: { type: Function }, value: {}, angleRange: {}, padAngle: {}, sortFunction: { type: Function }, cornerRadius: {}, color: {}, radius: {}, arcWidth: {}, centralLabel: {}, centralSubLabel: {}, centralSubLabelWrap: { type: Boolean }, showEmptySegments: { type: Boolean }, emptySegmentAngle: {}, showBackground: { type: Boolean }, backgroundAngleRange: {}, centralLabelOffsetX: {}, centralLabelOffsetY: {}, duration: {}, events: {}, attributes: {}, data: {} }, setup(c, { expose: e }) {
  const n = Pt(Tt), o = c, l = lt(() => n.data.value ?? o.data), u = Lt(o), s = wt();
  return Vt(() => {
    Yt(() => {
      var t;
      s.value = new ut(u.value), (t = s.value) == null || t.setData(l.value), n.update(s.value);
    });
  }), kt(() => {
    var t;
    (t = s.value) == null || t.destroy(), n.destroy();
  }), pt(u, (t, i) => {
    var a;
    me(t, i) || (a = s.value) == null || a.setConfig(u.value);
  }), pt(l, () => {
    var t;
    (t = s.value) == null || t.setData(l.value);
  }), e({ component: s }), (t, i) => (W(), j("div", We));
} }), Ge = { flex: "~ col items-center" }, je = nt({ __name: "Donut.client", props: { data: {}, startAngle: { default: 15 } }, setup(c) {
  const e = Ut(), o = ((i) => i * Math.PI / 180)(c.startAngle), l = [o, 360 - o], u = (i) => i.value, s = (i) => i.color;
  function t(i) {
    const a = document.createElement("div");
    return qt(Qt(e.default, i.data), a), a.innerHTML;
  }
  return (i, a) => (W(), j("div", Ge, [V(I(Me), { data: i.data, height: 280, width: 280, "size-280": "", "max-w-280": "", relative: "" }, { default: St(() => [V(I(Be), { color: s, value: u, "angle-range": l, "corner-radius": 8, "arc-width": 64, "pad-angle": 0.045, "show-background": false }), e.default ? (W(), Xt(I(pe), { key: 0, triggers: { [I(ut).selectors.segment]: t } }, null, 8, ["triggers"])) : ht("", true)]), _: 1 }, 8, ["data"])]));
} }), Mt = Object.assign(he(je, [["__scopeId", "data-v-0b9dae92"]]), { __name: "ChartDonut" }), Pe = Ct(Mt), Ve = { ring: "1.5 green", "text-neutral": "", "font-semibold": "", "px-12": "", "py-6": "", "rounded-full": "", "bg-neutral-0": "", "right-8": "", "top-196": "", absolute: "" }, Ye = nt({ __name: "Distribution", props: { info: {} }, setup(c) {
  const e = Zt("target"), n = ve(e), { stakingRatio: o } = be({ enabled: n }), l = Et(), u = new Intl.NumberFormat(l.value, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }), s = lt(() => o.value ? [{ color: "var(--colors-green)", value: o.value || 0, label: `${u.format(o.value * 100)} staked`, annotation: { bottom: "40px", right: "-72px" } }, { color: "var(--colors-neutral-200)", value: 1 - o.value || 1, label: "Circulating", annotation: { top: "40px", left: "-42px" } }] : []), t = lt(() => {
    var _a;
    return 90 - 180 * (((_a = s.value.at(0)) == null ? void 0 : _a.value) || 0);
  });
  return (i, a) => {
    const h = Pe, g = Ot;
    return W(), j("div", { ref_key: "target", ref: e, relative: "", flex: "~ col items-center" }, [V(h, { data: I(s), "start-angle": I(t) }, null, 8, ["data", "start-angle"]), tt("div", Ve, st(I(u).format(I(o) ?? 0)) + " staked ", 1), V(g, { wrapper: "div", field: i.info, "text-center": "", "max-w-42ch": "", "f-m-lg": "" }, null, 8, ["field"])], 512);
  };
} }), Ue = Object.assign(Ye, { __name: "StakingDistribution" }), Xe = Ct(Mt), qe = { flex: "~ col items-center" }, Qe = ["src"], Ze = { flex: "~ gap-2 col", "font-semibold": "", "lh-none": "" }, Je = { "f-text-lg": "" }, Ke = { flex: "~ justify-between items-baseline gap-12", "mt-4": "" }, tn = { text: "f-sm neutral-800", "lh-none": "" }, en = { key: 0, text: "green f-xs", "font-bold": "", "lh-none": "" }, nn = nt({ __name: "Distribution", props: { info: {} }, setup(c) {
  const e = Et(), n = new Intl.NumberFormat(e.value, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }), o = new Intl.NumberFormat(e.value, { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }), { validators: l } = _e(), u = lt(() => {
    if (!l.value) return [];
    const s = [], t = { color: "rgb(var(--nq-neutral-400))", value: 0, name: "Others", logo: "", balance: 0 };
    for (const { dominanceRatio: i, accentColor: a, ...h } of l.value) i < 0.02 ? (t.value += i, t.balance += h.balance) : s.push({ color: a, value: i, dominanceRatio: i, accentColor: a, ...h });
    return t.value > 0 ? [...s, t] : s;
  });
  return (s, t) => {
    const i = Xe, a = Ot;
    return W(), j("div", qe, [V(i, { data: I(u) }, { default: St(({ color: h, value: g, name: d, logo: v, balance: b }) => [(W(), j("div", { key: d, style: Jt({ "--c": h }), ring: "1.5 $c", flex: "~ items-center gap-16", "data-tooltip-container": "", "text-neutral": "", "font-semibold": "", "p-16": "", "rounded-8": "", "bg-neutral-0": "", "w-max": "", shadow: "" }, [v ? (W(), j("img", { key: 0, src: v, "size-40": "", loading: "lazy" }, null, 8, Qe)) : ht("", true), tt("div", Ze, [tt("h3", Je, st(d), 1), tt("div", Ke, [tt("span", tn, st(I(n).format(g)), 1), b > 0 ? (W(), j("p", en, st(I(o).format(b / 1e5)) + " NIM ", 1)) : ht("", true)])])], 4))]), _: 1 }, 8, ["data"]), V(a, { wrapper: "div", field: s.info, "text-center": "", "max-w-42ch": "", "f-m-lg": "" }, null, 8, ["field"])]);
  };
} }), an = Object.assign(nn, { __name: "ValidatorDistribution" }), on = { "bg-neutral-0": "" }, sn = { flex: "~ wrap md:gap-100 gap-y-72 lg:gap-x-160 f-gap-x-12 justify-center" }, Rn = nt({ __name: "index", props: ye(), setup(c) {
  return (e, n) => {
    const o = Ue, l = an;
    return W(), j("section", on, [tt("div", sn, [V(o, { info: e.slice.primary.marketCapDistributionInfo }, null, 8, ["info"]), V(l, { info: e.slice.primary.stakedDistributionInfo }, null, 8, ["info"])])]);
  };
} });
export {
  Rn as default
};
