import { d as nt, U as Wt, ar as Gt, C as wt, c as j, V as Bt, Y as pt, H as kt, o as W, R as jt, a6 as dt, aw as gt, a5 as Pt, j as lt, G as Vt, a2 as Yt, $ as Ut, a as V, w as St, b as Xt, f as ht, u as I, b7 as qt, I as Qt, i as Zt, e as tt, ad as Ct, t as st, h as Jt } from "./g1xKa6TI.js";
import { C as Kt, d as te, $ as ft, A as ct, a0 as _t, a1 as Y, a2 as M, q as C, a3 as yt, r as ee, s as L, a4 as rt, a5 as et, a6 as mt, a7 as xt, a8 as k, a9 as At, aa as ne, ab as ae, l as oe, w as Dt, i as ie, f as at, t as se, m as re, S as le, v as Rt, u as ce, h as ue, ac as de, Q as Lt, R as Ot, X as ge, Y as fe, Z as me, _ as pe } from "./uE6-wW8o.js";
import { _ as Tt } from "./H0qEFha8.js";
import { u as he } from "./DpgSLQ_6.js";
import { u as Et } from "./nnhf449w.js";
import { u as ve } from "./caHnzLGH.js";
import { g as be } from "./CpsPJSKh.js";
import "./CqkleIqs.js";
import "./k4OXxJR1.js";
import "./Qjh2__OP.js";
import "./D0DW2WUk.js";
const _e = Object.assign(Object.assign({}, Kt), { tooltip: void 0, annotations: void 0 });
class ye extends te {
  constructor(e, a, o) {
    var l;
    super(e), this._defaultConfig = _e, this.config = this._defaultConfig, a && (this.updateContainer(a, true), this.component = a.component), o && this.setData(o, true), !((l = this.component) === null || l === void 0) && l.datamodel.data && this.render();
  }
  setData(e, a) {
    var o;
    const { config: l } = this;
    this.component && this.component.setData(e), a || this.render(), (o = l.tooltip) === null || o === void 0 || o.hide();
  }
  updateContainer(e, a) {
    super.updateContainer(e), this._removeAllChildren(), this.component = e.component, e.sizing && (this.component.sizing = e.sizing), this.element.appendChild(this.component.element);
    const o = e.tooltip;
    o && (o.hasContainer() || o.setContainer(this._container), o.setComponents([this.component]));
    const l = e.annotations;
    l && this.element.appendChild(l.element), this.element.appendChild(this._svgDefs.node()), this.element.appendChild(this._svgDefsExternal.node()), a || this.render();
  }
  updateComponent(e, a) {
    this.component.setConfig(e), a || this.render();
  }
  update(e, a, o) {
    e && this.updateContainer(e, true), a && this.updateComponent(a, true), o && this.setData(o, true), this.render();
  }
  getFitWidthScale() {
    const { config: e, component: a } = this, o = a;
    if (!o.getWidth) return 1;
    const l = o.getWidth() + e.margin.left + e.margin.right;
    return this.width / l;
  }
  _preRender() {
    var e;
    super._preRender(), this.component.setSize(this.width, this.height, this.containerWidth, this.containerHeight), (e = this.config.annotations) === null || e === void 0 || e.setSize(this.width, this.height, this.containerWidth, this.containerHeight);
  }
  _render(e) {
    var a;
    const { config: o, component: l } = this;
    super._render(e), l.g.attr("transform", `translate(${o.margin.left},${o.margin.top})`), l.render(e), (a = o.annotations) === null || a === void 0 || a.render(e), o.tooltip && o.tooltip.update();
  }
  render(e = this.config.duration) {
    const { config: a, component: o } = this;
    if (a.sizing === ft.Extend || a.sizing === ft.FitWidth) {
      const l = a.sizing === ft.FitWidth, u = o, s = u.getWidth() + a.margin.left + a.margin.right, t = u.getHeight() + a.margin.top + a.margin.bottom, i = l ? this.getFitWidthScale() : 1, n = this.svg.attr("width"), h = this.svg.attr("height"), f = s * i, d = t * i, v = n || h;
      ct(this.svg, v ? e : 0).attr("width", f).attr("height", d).attr("viewBox", `0 0 ${s} ${l ? d : t}`).attr("preserveAspectRatio", "xMinYMin");
    } else this.svg.attr("width", this.config.width || this.containerWidth).attr("height", this.config.height || this.containerHeight);
    this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
      this._preRender(), this._render(e);
    });
  }
  _onResize() {
    var e;
    const { config: a } = this;
    super._onResize(), (e = a.tooltip) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, a;
    const { component: o, config: l } = this;
    super.destroy(), o == null ? void 0 : o.destroy(), (e = l.tooltip) === null || e === void 0 || e.destroy(), (a = l.annotations) === null || a === void 0 || a.destroy();
  }
}
function xe(c) {
  return c.innerRadius;
}
function Ae(c) {
  return c.outerRadius;
}
function Re(c) {
  return c.startAngle;
}
function we(c) {
  return c.endAngle;
}
function ke(c) {
  return c && c.padAngle;
}
function Se(c, e, a, o, l, u, s, t) {
  var i = a - c, n = o - e, h = s - l, f = t - u, d = f * i - h * n;
  if (!(d * d < L)) return d = (h * (e - u) - f * (c - l)) / d, [c + d * i, e + d * n];
}
function it(c, e, a, o, l, u, s) {
  var t = c - a, i = e - o, n = (s ? u : -u) / et(t * t + i * i), h = n * i, f = -n * t, d = c + h, v = e + f, b = a + h, R = o + f, r = (d + b) / 2, D = (v + R) / 2, y = b - d, x = R - v, _ = y * y + x * x, w = l - u, A = d * R - b * v, F = (x < 0 ? -1 : 1) * et(ne(0, w * w * _ - A * A)), $ = (A * x - y * F) / _, S = (-A * y - x * F) / _, O = (A * x + y * F) / _, T = (-A * y + x * F) / _, g = $ - r, p = S - D, N = O - r, z = T - D;
  return g * g + p * p > N * N + z * z && ($ = O, S = T), { cx: $, cy: S, x01: -h, y01: -f, x11: $ * (l / w - 1), y11: S * (l / w - 1) };
}
function Ce() {
  var c = xe, e = Ae, a = C(0), o = null, l = Re, u = we, s = ke, t = null;
  function i() {
    var n, h, f = +c.apply(this, arguments), d = +e.apply(this, arguments), v = l.apply(this, arguments) - yt, b = u.apply(this, arguments) - yt, R = xt(b - v), r = b > v;
    if (t || (t = n = ee()), d < f && (h = d, d = f, f = h), !(d > L)) t.moveTo(0, 0);
    else if (R > rt - L) t.moveTo(d * Y(v), d * M(v)), t.arc(0, 0, d, v, b, !r), f > L && (t.moveTo(f * Y(b), f * M(b)), t.arc(0, 0, f, b, v, r));
    else {
      var D = v, y = b, x = v, _ = b, w = R, A = R, F = s.apply(this, arguments) / 2, $ = F > L && (o ? +o.apply(this, arguments) : et(f * f + d * d)), S = mt(xt(d - f) / 2, +a.apply(this, arguments)), O = S, T = S, g, p;
      if ($ > L) {
        var N = At($ / f * M(F)), z = At($ / d * M(F));
        (w -= N * 2) > L ? (N *= r ? 1 : -1, x += N, _ -= N) : (w = 0, x = _ = (v + b) / 2), (A -= z * 2) > L ? (z *= r ? 1 : -1, D += z, y -= z) : (A = 0, D = y = (v + b) / 2);
      }
      var G = d * Y(D), B = d * M(D), ot = f * Y(_), U = f * M(_);
      if (S > L) {
        var P = d * Y(y), X = d * M(y), q = f * Y(x), Q = f * M(x), H;
        if (R < _t && (H = Se(G, B, q, Q, P, X, ot, U))) {
          var Z = G - H[0], J = B - H[1], m = P - H[0], E = X - H[1], K = 1 / M(ae((Z * m + J * E) / (et(Z * Z + J * J) * et(m * m + E * E))) / 2), bt = et(H[0] * H[0] + H[1] * H[1]);
          O = mt(S, (f - bt) / (K - 1)), T = mt(S, (d - bt) / (K + 1));
        }
      }
      A > L ? T > L ? (g = it(q, Q, G, B, d, T, r), p = it(P, X, ot, U, d, T, r), t.moveTo(g.cx + g.x01, g.cy + g.y01), T < S ? t.arc(g.cx, g.cy, T, k(g.y01, g.x01), k(p.y01, p.x01), !r) : (t.arc(g.cx, g.cy, T, k(g.y01, g.x01), k(g.y11, g.x11), !r), t.arc(0, 0, d, k(g.cy + g.y11, g.cx + g.x11), k(p.cy + p.y11, p.cx + p.x11), !r), t.arc(p.cx, p.cy, T, k(p.y11, p.x11), k(p.y01, p.x01), !r))) : (t.moveTo(G, B), t.arc(0, 0, d, D, y, !r)) : t.moveTo(G, B), !(f > L) || !(w > L) ? t.lineTo(ot, U) : O > L ? (g = it(ot, U, P, X, f, -O, r), p = it(G, B, q, Q, f, -O, r), t.lineTo(g.cx + g.x01, g.cy + g.y01), O < S ? t.arc(g.cx, g.cy, O, k(g.y01, g.x01), k(p.y01, p.x01), !r) : (t.arc(g.cx, g.cy, O, k(g.y01, g.x01), k(g.y11, g.x11), !r), t.arc(0, 0, f, k(g.cy + g.y11, g.cx + g.x11), k(p.cy + p.y11, p.cx + p.x11), r), t.arc(p.cx, p.cy, O, k(p.y11, p.x11), k(p.y01, p.x01), !r))) : t.arc(0, 0, f, _, x, r);
    }
    if (t.closePath(), n) return t = null, n + "" || null;
  }
  return i.centroid = function() {
    var n = (+c.apply(this, arguments) + +e.apply(this, arguments)) / 2, h = (+l.apply(this, arguments) + +u.apply(this, arguments)) / 2 - _t / 2;
    return [Y(h) * n, M(h) * n];
  }, i.innerRadius = function(n) {
    return arguments.length ? (c = typeof n == "function" ? n : C(+n), i) : c;
  }, i.outerRadius = function(n) {
    return arguments.length ? (e = typeof n == "function" ? n : C(+n), i) : e;
  }, i.cornerRadius = function(n) {
    return arguments.length ? (a = typeof n == "function" ? n : C(+n), i) : a;
  }, i.padRadius = function(n) {
    return arguments.length ? (o = n == null ? null : typeof n == "function" ? n : C(+n), i) : o;
  }, i.startAngle = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : C(+n), i) : l;
  }, i.endAngle = function(n) {
    return arguments.length ? (u = typeof n == "function" ? n : C(+n), i) : u;
  }, i.padAngle = function(n) {
    return arguments.length ? (s = typeof n == "function" ? n : C(+n), i) : s;
  }, i.context = function(n) {
    return arguments.length ? (t = n ?? null, i) : t;
  }, i;
}
function De(c, e) {
  return e < c ? -1 : e > c ? 1 : e >= c ? 0 : NaN;
}
function Le(c) {
  return c;
}
function Oe() {
  var c = Le, e = De, a = null, o = C(0), l = C(rt), u = C(0);
  function s(t) {
    var i, n = t.length, h, f, d = 0, v = new Array(n), b = new Array(n), R = +o.apply(this, arguments), r = Math.min(rt, Math.max(-rt, l.apply(this, arguments) - R)), D, y = Math.min(Math.abs(r) / n, u.apply(this, arguments)), x = y * (r < 0 ? -1 : 1), _;
    for (i = 0; i < n; ++i) (_ = b[v[i] = i] = +c(t[i], i, t)) > 0 && (d += _);
    for (e != null ? v.sort(function(w, A) {
      return e(b[w], b[A]);
    }) : a != null && v.sort(function(w, A) {
      return a(t[w], t[A]);
    }), i = 0, f = d ? (r - n * x) / d : 0; i < n; ++i, R = D) h = v[i], _ = b[h], D = R + (_ > 0 ? _ * f : 0) + x, b[h] = { data: t[h], index: i, value: _, startAngle: R, endAngle: D, padAngle: y };
    return b;
  }
  return s.value = function(t) {
    return arguments.length ? (c = typeof t == "function" ? t : C(+t), s) : c;
  }, s.sortValues = function(t) {
    return arguments.length ? (e = t, a = null, s) : e;
  }, s.sort = function(t) {
    return arguments.length ? (a = t, e = null, s) : a;
  }, s.startAngle = function(t) {
    return arguments.length ? (o = typeof t == "function" ? t : C(+t), s) : o;
  }, s.endAngle = function(t) {
    return arguments.length ? (l = typeof t == "function" ? t : C(+t), s) : l;
  }, s.padAngle = function(t) {
    return arguments.length ? (u = typeof t == "function" ? t : C(+t), s) : u;
  }, s;
}
const Te = Object.assign(Object.assign({}, oe), { id: (c, e) => {
  var a;
  return (a = c.id) !== null && a !== void 0 ? a : e;
}, value: void 0, angleRange: [0, 2 * Math.PI], padAngle: 0, sortFunction: void 0, cornerRadius: 0, color: void 0, radius: void 0, arcWidth: 20, centralLabel: void 0, centralSubLabel: void 0, centralSubLabelWrap: true, showEmptySegments: false, emptySegmentAngle: 0.5 * Math.PI / 180, showBackground: true, backgroundAngleRange: void 0, centralLabelOffsetX: void 0, centralLabelOffsetY: void 0 });
function Ee(c, e) {
  c.style("fill", (a) => Dt(a.data, e.color, a.index)).style("opacity", 0).each((a, o, l) => {
    const u = l[o], s = (a.startAngle + a.endAngle) / 2, t = (a.endAngle - a.startAngle) / 2;
    u._animState = { startAngle: s - t, endAngle: s + t, innerRadius: a.innerRadius, outerRadius: a.outerRadius, padAngle: a.padAngle };
  });
}
function Fe(c, e, a, o) {
  c.style("transition", `fill ${o}ms`).style("fill", (u) => Dt(u.data, e.color, u.index));
  const l = (u) => e.showEmptySegments || u.value ? 1 : 0;
  o ? ct(c, o).style("opacity", l).attrTween("d", (s, t, i) => {
    const n = i[t], h = { startAngle: s.startAngle, endAngle: s.endAngle, innerRadius: s.innerRadius, outerRadius: s.outerRadius, padAngle: s.padAngle }, f = ie(n._animState, h);
    return (d) => (n._animState = f(d), a(n._animState));
  }) : c.attr("d", a).style("opacity", l);
}
function $e(c, e) {
  ct(c, e).style("opacity", 0).remove();
}
const Ft = Array.from({ length: 4 }, (c, e) => {
  const a = -Math.PI / 2 + e * Math.PI / 2;
  return [a, a + Math.PI];
}), [vn, bn, _n, yn] = Ft, $t = at`
  label: donut-component;
`, Ne = se`
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

  body.theme-dark ${`.${$t}`} {
    --vis-donut-central-label-text-color: var(--vis-dark-donut-central-label-text-color);
    --vis-donut-central-sub-label-text-color: var(--vis-dark-donut-central-sub-label-text-color);
    --vis-donut-background-color: var(--vis-dark-donut-background-color);
  }
`, Nt = at`
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
`, ze = Object.freeze(Object.defineProperty({ __proto__: null, background: Nt, centralLabel: Ht, centralSubLabel: It, root: $t, segment: vt, segmentExit: zt, variables: Ne }, Symbol.toStringTag, { value: "Module" }));
class ut extends re {
  constructor(e) {
    super(), this._defaultConfig = Te, this.config = this._defaultConfig, this.datamodel = new le(), this.arcGen = Ce(), this.events = {}, e && this.setConfig(e), this.arcBackground = this.g.append("path"), this.arcGroup = this.g.append("g"), this.centralLabel = this.g.append("text").attr("class", Ht), this.centralSubLabel = this.g.append("text").attr("class", It);
  }
  get bleed() {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }
  _render(e) {
    var a, o, l, u, s, t, i, n, h, f, d, v, b, R;
    const { config: r, datamodel: D, bleed: y } = this, x = D.data.map((m, E) => ({ index: E, datum: m })).filter((m) => r.showEmptySegments || Rt(m.datum, r.value, m.index)), _ = ce(e) ? e : r.duration, [w, A, F, $] = Ft.map((m) => r.angleRange && r.angleRange[0] === m[0] && r.angleRange[1] === m[1]), S = w || F, O = A || $, T = this._width * (O ? 2 : 1), g = this._height * (S ? 2 : 1), p = r.radius || Math.min(T - y.left - y.right, g - y.top - y.bottom) / 2, N = r.arcWidth === 0 ? 0 : ue(p - r.arcWidth, 0, p - 1), z = this._height / 2 + (w ? p / 2 : F ? -p / 2 : 0), G = this._width / 2 + ($ ? p / 2 : A ? -p / 2 : 0), B = `translate(${G},${z})`;
    this.arcGroup.attr("transform", B), this.arcGen.startAngle((m) => m.startAngle).endAngle((m) => m.endAngle).innerRadius((m) => m.innerRadius).outerRadius((m) => m.outerRadius).padAngle((m) => m.padAngle).cornerRadius(r.cornerRadius);
    const U = Oe().startAngle((o = (a = r.angleRange) === null || a === void 0 ? void 0 : a[0]) !== null && o !== void 0 ? o : 0).endAngle((u = (l = r.angleRange) === null || l === void 0 ? void 0 : l[1]) !== null && u !== void 0 ? u : 2 * Math.PI).padAngle(r.padAngle).value((m) => Rt(m.datum, r.value, m.index) || 0).sort((m, E) => {
      var K;
      return (K = r.sortFunction) === null || K === void 0 ? void 0 : K.call(r, m.datum, E.datum);
    })(x).map((m) => {
      const E = Object.assign(Object.assign({}, m), { data: m.data.datum, index: m.data.index, innerRadius: N, outerRadius: p });
      return r.showEmptySegments && m.endAngle - m.startAngle - m.padAngle <= Number.EPSILON && (E.endAngle = m.startAngle + Math.max(r.emptySegmentAngle, r.padAngle), E.padAngle = m.padAngle / 2), E;
    }), P = this.arcGroup.selectAll(`.${vt}`).data(U, (m) => r.id(m.data, m.index)), X = P.enter().append("path").attr("class", vt).call(Ee, r), q = P.merge(X);
    q.call(Fe, r, this.arcGen, _), q.sort((m, E) => E.value - m.value), P.exit().attr("class", zt).call($e, _);
    const Q = A ? "start" : $ ? "end" : "middle";
    this.centralLabel.attr("dy", r.centralSubLabel ? "-0.55em" : null).style("text-anchor", Q).text((s = r.centralLabel) !== null && s !== void 0 ? s : null), this.centralSubLabel.attr("dy", r.centralLabel ? "0.55em" : null).style("text-anchor", Q).text((t = r.centralSubLabel) !== null && t !== void 0 ? t : null), r.centralSubLabelWrap && de(this.centralSubLabel, N * 1.9);
    const H = (r.centralLabelOffsetX || 0) + G;
    let Z = (r.centralLabelOffsetY || 0) + z;
    S && r.centralLabelOffsetX === void 0 && r.centralLabelOffsetY === void 0 && (Z = (w ? -this.centralSubLabel.node().getBoundingClientRect().height : F ? this.centralLabel.node().getBoundingClientRect().height : 0) + z);
    const J = `translate(${H},${Z})`;
    this.centralLabel.attr("transform", J), this.centralSubLabel.attr("transform", J), this.arcBackground.attr("class", Nt).attr("visibility", r.showBackground ? null : "hidden").attr("transform", B), ct(this.arcBackground, _).attr("d", this.arcGen({ startAngle: (f = (n = (i = r.backgroundAngleRange) === null || i === void 0 ? void 0 : i[0]) !== null && n !== void 0 ? n : (h = r.angleRange) === null || h === void 0 ? void 0 : h[0]) !== null && f !== void 0 ? f : 0, endAngle: (R = (v = (d = r.backgroundAngleRange) === null || d === void 0 ? void 0 : d[1]) !== null && v !== void 0 ? v : (b = r.angleRange) === null || b === void 0 ? void 0 : b[1]) !== null && R !== void 0 ? R : 2 * Math.PI, innerRadius: N, outerRadius: p }));
  }
}
ut.selectors = ze;
const He = nt({ __name: "index", props: { component: {}, tooltip: {}, annotations: {}, duration: {}, margin: {}, padding: {}, sizing: {}, width: {}, height: {}, svgDefs: {}, ariaLabel: {}, data: {} }, setup(c, { expose: e }) {
  const a = c, { data: o } = Wt(a), l = Lt(a);
  let u;
  const s = Gt({ component: void 0, tooltip: void 0, annotations: void 0 }), t = wt(), i = () => {
    u || t.value && s.component && (u = new ye(t.value, { ...gt(s) }, o.value));
  };
  return Bt(() => {
    var n;
    i(), (n = s.component) == null || n.config, u == null ? void 0 : u.updateContainer({ ...gt(l.value), ...gt(s) });
  }), pt(o, () => {
    u ? u.setData(o.value, true) : i();
  }), kt(() => u == null ? void 0 : u.destroy()), dt(Ot, { data: o, update: (n) => s.component = n, destroy: () => s.component = void 0 }), dt(ge, { data: o, update: (n) => s.tooltip = n, destroy: () => {
    s.tooltip = void 0;
  } }), dt(fe, { data: o, update: (n) => s.annotations = n, destroy: () => {
    s.annotations = void 0;
  } }), e({ component: u }), (n, h) => (W(), j("div", { "data-vis-single-container": "", ref_key: "elRef", ref: t, class: "unovis-single-container" }, [jt(n.$slots, "default")], 512));
} }), Ie = { "data-vis-component": "" };
ut.selectors;
const Me = nt({ __name: "index", props: { id: { type: Function }, value: {}, angleRange: {}, padAngle: {}, sortFunction: { type: Function }, cornerRadius: {}, color: {}, radius: {}, arcWidth: {}, centralLabel: {}, centralSubLabel: {}, centralSubLabelWrap: { type: Boolean }, showEmptySegments: { type: Boolean }, emptySegmentAngle: {}, showBackground: { type: Boolean }, backgroundAngleRange: {}, centralLabelOffsetX: {}, centralLabelOffsetY: {}, duration: {}, events: {}, attributes: {}, data: {} }, setup(c, { expose: e }) {
  const a = Pt(Ot), o = c, l = lt(() => a.data.value ?? o.data), u = Lt(o), s = wt();
  return Vt(() => {
    Yt(() => {
      var t;
      s.value = new ut(u.value), (t = s.value) == null || t.setData(l.value), a.update(s.value);
    });
  }), kt(() => {
    var t;
    (t = s.value) == null || t.destroy(), a.destroy();
  }), pt(u, (t, i) => {
    var n;
    me(t, i) || (n = s.value) == null || n.setConfig(u.value);
  }), pt(l, () => {
    var t;
    (t = s.value) == null || t.setData(l.value);
  }), e({ component: s }), (t, i) => (W(), j("div", Ie));
} }), We = { flex: "~ col items-center" }, Ge = nt({ __name: "Donut.client", props: { data: {}, startAngle: { default: 15 } }, setup(c) {
  const e = Ut(), o = ((i) => i * Math.PI / 180)(c.startAngle), l = [o, 360 - o], u = (i) => i.value, s = (i) => i.color;
  function t(i) {
    const n = document.createElement("div");
    return qt(Qt(e.default, i.data), n), n.innerHTML;
  }
  return (i, n) => (W(), j("div", We, [V(I(He), { data: i.data, height: 280, width: 280, "size-280": "", "max-w-280": "", relative: "" }, { default: St(() => [V(I(Me), { color: s, value: u, "angle-range": l, "corner-radius": 8, "arc-width": 64, "pad-angle": 0.045, "show-background": false }), e.default ? (W(), Xt(I(pe), { key: 0, triggers: { [I(ut).selectors.segment]: t } }, null, 8, ["triggers"])) : ht("", true)]), _: 1 }, 8, ["data"])]));
} }), Mt = Object.assign(Zt(Ge, [["__scopeId", "data-v-0b9dae92"]]), { __name: "ChartDonut" }), Be = Ct(Mt), je = { relative: "", flex: "~ col items-center" }, Pe = { ring: "1.5 green", "text-neutral": "", "font-semibold": "", "px-12": "", "py-6": "", "rounded-full": "", "bg-neutral-0": "", "right-8": "", "top-196": "", absolute: "" }, Ve = nt({ __name: "Distribution", props: { info: {} }, setup(c) {
  const { stakingRatio: e } = he(), a = Et(), o = new Intl.NumberFormat(a.value, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }), l = lt(() => e.value ? [{ color: "rgb(var(--nq-green))", value: e.value || 0, label: `${o.format(e.value * 100)} staked`, annotation: { bottom: "40px", right: "-72px" } }, { color: "rgb(var(--nq-neutral-200))", value: 1 - e.value || 1, label: "Circulating", annotation: { top: "40px", left: "-42px" } }] : []), u = lt(() => {
    var _a;
    return 90 - 180 * (((_a = l.value.at(0)) == null ? void 0 : _a.value) || 0);
  });
  return (s, t) => {
    const i = Be, n = Tt;
    return W(), j("div", je, [V(i, { data: I(l), "start-angle": I(u) }, null, 8, ["data", "start-angle"]), tt("div", Pe, st(I(o).format(I(e) ?? 0)) + " staked ", 1), V(n, { wrapper: "div", field: s.info, "text-center": "", "max-w-42ch": "", "f-m-lg": "" }, null, 8, ["field"])]);
  };
} }), Ye = Object.assign(Ve, { __name: "StakingDistribution" }), Ue = Ct(Mt), Xe = { flex: "~ col items-center" }, qe = ["src"], Qe = { flex: "~ gap-2 col", "font-semibold": "", "lh-none": "" }, Ze = { "f-text-lg": "" }, Je = { flex: "~ justify-between items-baseline gap-12", "mt-4": "" }, Ke = { text: "f-sm neutral-800", "lh-none": "" }, tn = { key: 0, text: "green f-xs", "font-bold": "", "lh-none": "" }, en = nt({ __name: "Distribution", props: { info: {} }, setup(c) {
  const e = Et(), a = new Intl.NumberFormat(e.value, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }), o = new Intl.NumberFormat(e.value, { style: "decimal", minimumFractionDigits: 0, maximumFractionDigits: 0 }), { validators: l } = ve(), u = lt(() => {
    if (!l.value) return [];
    const s = [], t = { color: "rgb(var(--nq-neutral-400))", value: 0, name: "Others", logo: "", balance: 0 };
    for (const { dominanceRatio: i, accentColor: n, ...h } of l.value) i < 0.02 ? (t.value += i, t.balance += h.balance) : s.push({ color: n, value: i, dominanceRatio: i, accentColor: n, ...h });
    return t.value > 0 ? [...s, t] : s;
  });
  return (s, t) => {
    const i = Ue, n = Tt;
    return W(), j("div", Xe, [V(i, { data: I(u) }, { default: St(({ color: h, value: f, name: d, logo: v, balance: b }) => [(W(), j("div", { key: d, style: Jt({ "--c": h }), ring: "1.5 $c", flex: "~ items-center gap-16", "data-tooltip-container": "", "text-neutral": "", "font-semibold": "", "p-16": "", "rounded-8": "", "bg-neutral-0": "", "w-max": "", shadow: "" }, [v ? (W(), j("img", { key: 0, src: v, "size-40": "", loading: "lazy" }, null, 8, qe)) : ht("", true), tt("div", Qe, [tt("h3", Ze, st(d), 1), tt("div", Je, [tt("span", Ke, st(I(a).format(f)), 1), b > 0 ? (W(), j("p", tn, st(I(o).format(b / 1e5)) + " NIM ", 1)) : ht("", true)])])], 4))]), _: 1 }, 8, ["data"]), V(n, { wrapper: "div", field: s.info, "text-center": "", "max-w-42ch": "", "f-m-lg": "" }, null, 8, ["field"])]);
  };
} }), nn = Object.assign(en, { __name: "ValidatorDistribution" }), an = { "bg-neutral-0": "" }, on = { flex: "~ wrap md:gap-100 gap-y-72 lg:gap-x-160 f-gap-x-12 justify-center" }, xn = nt({ __name: "index", props: be(), setup(c) {
  return (e, a) => {
    const o = Ye, l = nn;
    return W(), j("section", an, [tt("div", on, [V(o, { info: e.slice.primary.marketCapDistributionInfo }, null, 8, ["info"]), V(l, { info: e.slice.primary.stakedDistributionInfo }, null, 8, ["info"])])]);
  };
} });
export {
  xn as default
};
