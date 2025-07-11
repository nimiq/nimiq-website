import { g as ri } from "./CqkleIqs.js";
import { a0 as ii, j as si, a_ as on, d as oi, a4 as ai, B as ci, c as ui, E as li, a1 as fi, G as hi, X as di, o as pi } from "./gdLxT4Lf.js";
var Te = "http://www.w3.org/1999/xhtml";
const an = { svg: "http://www.w3.org/2000/svg", xhtml: Te, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };
function le(t3) {
  var e = t3 += "", n = e.indexOf(":");
  return n >= 0 && (e = t3.slice(0, n)) !== "xmlns" && (t3 = t3.slice(n + 1)), an.hasOwnProperty(e) ? { space: an[e], local: t3 } : t3;
}
function vi(t3) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Te && e.documentElement.namespaceURI === Te ? e.createElement(t3) : e.createElementNS(n, t3);
  };
}
function gi(t3) {
  return function() {
    return this.ownerDocument.createElementNS(t3.space, t3.local);
  };
}
function jn(t3) {
  var e = le(t3);
  return (e.local ? gi : vi)(e);
}
function mi() {
}
function We(t3) {
  return t3 == null ? mi : function() {
    return this.querySelector(t3);
  };
}
function _i(t3) {
  typeof t3 != "function" && (t3 = We(t3));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var s = e[i], o = s.length, a = r[i] = new Array(o), c, u, l = 0; l < o; ++l) (c = s[l]) && (u = t3.call(c, c.__data__, l, s)) && ("__data__" in c && (u.__data__ = c.__data__), a[l] = u);
  return new M(r, this._parents);
}
function yi(t3) {
  return t3 == null ? [] : Array.isArray(t3) ? t3 : Array.from(t3);
}
function wi() {
  return [];
}
function tr(t3) {
  return t3 == null ? wi : function() {
    return this.querySelectorAll(t3);
  };
}
function xi(t3) {
  return function() {
    return yi(t3.apply(this, arguments));
  };
}
function bi(t3) {
  typeof t3 == "function" ? t3 = xi(t3) : t3 = tr(t3);
  for (var e = this._groups, n = e.length, r = [], i = [], s = 0; s < n; ++s) for (var o = e[s], a = o.length, c, u = 0; u < a; ++u) (c = o[u]) && (r.push(t3.call(c, c.__data__, u, o)), i.push(c));
  return new M(r, i);
}
function er(t3) {
  return function() {
    return this.matches(t3);
  };
}
function nr(t3) {
  return function(e) {
    return e.matches(t3);
  };
}
var Ai = Array.prototype.find;
function Ci(t3) {
  return function() {
    return Ai.call(this.children, t3);
  };
}
function Si() {
  return this.firstElementChild;
}
function Ti(t3) {
  return this.select(t3 == null ? Si : Ci(typeof t3 == "function" ? t3 : nr(t3)));
}
var Ei = Array.prototype.filter;
function $i() {
  return Array.from(this.children);
}
function ki(t3) {
  return function() {
    return Ei.call(this.children, t3);
  };
}
function Ri(t3) {
  return this.selectAll(t3 == null ? $i : ki(typeof t3 == "function" ? t3 : nr(t3)));
}
function Ni(t3) {
  typeof t3 != "function" && (t3 = er(t3));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var s = e[i], o = s.length, a = r[i] = [], c, u = 0; u < o; ++u) (c = s[u]) && t3.call(c, c.__data__, u, s) && a.push(c);
  return new M(r, this._parents);
}
function rr(t3) {
  return new Array(t3.length);
}
function Oi() {
  return new M(this._enter || this._groups.map(rr), this._parents);
}
function Zt(t3, e) {
  this.ownerDocument = t3.ownerDocument, this.namespaceURI = t3.namespaceURI, this._next = null, this._parent = t3, this.__data__ = e;
}
Zt.prototype = { constructor: Zt, appendChild: function(t3) {
  return this._parent.insertBefore(t3, this._next);
}, insertBefore: function(t3, e) {
  return this._parent.insertBefore(t3, e);
}, querySelector: function(t3) {
  return this._parent.querySelector(t3);
}, querySelectorAll: function(t3) {
  return this._parent.querySelectorAll(t3);
} };
function zi(t3) {
  return function() {
    return t3;
  };
}
function Mi(t3, e, n, r, i, s) {
  for (var o = 0, a, c = e.length, u = s.length; o < u; ++o) (a = e[o]) ? (a.__data__ = s[o], r[o] = a) : n[o] = new Zt(t3, s[o]);
  for (; o < c; ++o) (a = e[o]) && (i[o] = a);
}
function Pi(t3, e, n, r, i, s, o) {
  var a, c, u = /* @__PURE__ */ new Map(), l = e.length, f = s.length, h = new Array(l), d;
  for (a = 0; a < l; ++a) (c = e[a]) && (h[a] = d = o.call(c, c.__data__, a, e) + "", u.has(d) ? i[a] = c : u.set(d, c));
  for (a = 0; a < f; ++a) d = o.call(t3, s[a], a, s) + "", (c = u.get(d)) ? (r[a] = c, c.__data__ = s[a], u.delete(d)) : n[a] = new Zt(t3, s[a]);
  for (a = 0; a < l; ++a) (c = e[a]) && u.get(h[a]) === c && (i[a] = c);
}
function Ii(t3) {
  return t3.__data__;
}
function Fi(t3, e) {
  if (!arguments.length) return Array.from(this, Ii);
  var n = e ? Pi : Mi, r = this._parents, i = this._groups;
  typeof t3 != "function" && (t3 = zi(t3));
  for (var s = i.length, o = new Array(s), a = new Array(s), c = new Array(s), u = 0; u < s; ++u) {
    var l = r[u], f = i[u], h = f.length, d = Li(t3.call(l, l && l.__data__, u, r)), v = d.length, p = a[u] = new Array(v), g = o[u] = new Array(v), y = c[u] = new Array(h);
    n(l, f, p, g, y, d, e);
    for (var m = 0, _ = 0, T, w; m < v; ++m) if (T = p[m]) {
      for (m >= _ && (_ = m + 1); !(w = g[_]) && ++_ < v; ) ;
      T._next = w || null;
    }
  }
  return o = new M(o, r), o._enter = a, o._exit = c, o;
}
function Li(t3) {
  return typeof t3 == "object" && "length" in t3 ? t3 : Array.from(t3);
}
function Bi() {
  return new M(this._exit || this._groups.map(rr), this._parents);
}
function Di(t3, e, n) {
  var r = this.enter(), i = this, s = this.exit();
  return typeof t3 == "function" ? (r = t3(r), r && (r = r.selection())) : r = r.append(t3 + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? s.remove() : n(s), r && i ? r.merge(i).order() : i;
}
function Hi(t3) {
  for (var e = t3.selection ? t3.selection() : t3, n = this._groups, r = e._groups, i = n.length, s = r.length, o = Math.min(i, s), a = new Array(i), c = 0; c < o; ++c) for (var u = n[c], l = r[c], f = u.length, h = a[c] = new Array(f), d, v = 0; v < f; ++v) (d = u[v] || l[v]) && (h[v] = d);
  for (; c < i; ++c) a[c] = n[c];
  return new M(a, this._parents);
}
function Vi() {
  for (var t3 = this._groups, e = -1, n = t3.length; ++e < n; ) for (var r = t3[e], i = r.length - 1, s = r[i], o; --i >= 0; ) (o = r[i]) && (s && o.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(o, s), s = o);
  return this;
}
function Wi(t3) {
  t3 || (t3 = Ui);
  function e(f, h) {
    return f && h ? t3(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), s = 0; s < r; ++s) {
    for (var o = n[s], a = o.length, c = i[s] = new Array(a), u, l = 0; l < a; ++l) (u = o[l]) && (c[l] = u);
    c.sort(e);
  }
  return new M(i, this._parents).order();
}
function Ui(t3, e) {
  return t3 < e ? -1 : t3 > e ? 1 : t3 >= e ? 0 : NaN;
}
function Xi() {
  var t3 = arguments[0];
  return arguments[0] = this, t3.apply(null, arguments), this;
}
function qi() {
  return Array.from(this);
}
function Gi() {
  for (var t3 = this._groups, e = 0, n = t3.length; e < n; ++e) for (var r = t3[e], i = 0, s = r.length; i < s; ++i) {
    var o = r[i];
    if (o) return o;
  }
  return null;
}
function Yi() {
  let t3 = 0;
  for (const e of this) ++t3;
  return t3;
}
function Zi() {
  return !this.node();
}
function Ki(t3) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n) for (var i = e[n], s = 0, o = i.length, a; s < o; ++s) (a = i[s]) && t3.call(a, a.__data__, s, i);
  return this;
}
function Qi(t3) {
  return function() {
    this.removeAttribute(t3);
  };
}
function Ji(t3) {
  return function() {
    this.removeAttributeNS(t3.space, t3.local);
  };
}
function ji(t3, e) {
  return function() {
    this.setAttribute(t3, e);
  };
}
function ts(t3, e) {
  return function() {
    this.setAttributeNS(t3.space, t3.local, e);
  };
}
function es(t3, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t3) : this.setAttribute(t3, n);
  };
}
function ns(t3, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t3.space, t3.local) : this.setAttributeNS(t3.space, t3.local, n);
  };
}
function rs(t3, e) {
  var n = le(t3);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ji : Qi : typeof e == "function" ? n.local ? ns : es : n.local ? ts : ji)(n, e));
}
function ir(t3) {
  return t3.ownerDocument && t3.ownerDocument.defaultView || t3.document && t3 || t3.defaultView;
}
function is(t3) {
  return function() {
    this.style.removeProperty(t3);
  };
}
function ss(t3, e, n) {
  return function() {
    this.style.setProperty(t3, e, n);
  };
}
function os(t3, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t3) : this.style.setProperty(t3, r, n);
  };
}
function as(t3, e, n) {
  return arguments.length > 1 ? this.each((e == null ? is : typeof e == "function" ? os : ss)(t3, e, n ?? "")) : ct(this.node(), t3);
}
function ct(t3, e) {
  return t3.style.getPropertyValue(e) || ir(t3).getComputedStyle(t3, null).getPropertyValue(e);
}
function cs(t3) {
  return function() {
    delete this[t3];
  };
}
function us(t3, e) {
  return function() {
    this[t3] = e;
  };
}
function ls(t3, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t3] : this[t3] = n;
  };
}
function fs(t3, e) {
  return arguments.length > 1 ? this.each((e == null ? cs : typeof e == "function" ? ls : us)(t3, e)) : this.node()[t3];
}
function sr(t3) {
  return t3.trim().split(/^|\s+/);
}
function Ue(t3) {
  return t3.classList || new or(t3);
}
function or(t3) {
  this._node = t3, this._names = sr(t3.getAttribute("class") || "");
}
or.prototype = { add: function(t3) {
  var e = this._names.indexOf(t3);
  e < 0 && (this._names.push(t3), this._node.setAttribute("class", this._names.join(" ")));
}, remove: function(t3) {
  var e = this._names.indexOf(t3);
  e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
}, contains: function(t3) {
  return this._names.indexOf(t3) >= 0;
} };
function ar(t3, e) {
  for (var n = Ue(t3), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function cr(t3, e) {
  for (var n = Ue(t3), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function hs(t3) {
  return function() {
    ar(this, t3);
  };
}
function ds(t3) {
  return function() {
    cr(this, t3);
  };
}
function ps(t3, e) {
  return function() {
    (e.apply(this, arguments) ? ar : cr)(this, t3);
  };
}
function vs(t3, e) {
  var n = sr(t3 + "");
  if (arguments.length < 2) {
    for (var r = Ue(this.node()), i = -1, s = n.length; ++i < s; ) if (!r.contains(n[i])) return false;
    return true;
  }
  return this.each((typeof e == "function" ? ps : e ? hs : ds)(n, e));
}
function gs() {
  this.textContent = "";
}
function ms(t3) {
  return function() {
    this.textContent = t3;
  };
}
function _s(t3) {
  return function() {
    var e = t3.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function ys(t3) {
  return arguments.length ? this.each(t3 == null ? gs : (typeof t3 == "function" ? _s : ms)(t3)) : this.node().textContent;
}
function ws() {
  this.innerHTML = "";
}
function xs(t3) {
  return function() {
    this.innerHTML = t3;
  };
}
function bs(t3) {
  return function() {
    var e = t3.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function As(t3) {
  return arguments.length ? this.each(t3 == null ? ws : (typeof t3 == "function" ? bs : xs)(t3)) : this.node().innerHTML;
}
function Cs() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Ss() {
  return this.each(Cs);
}
function Ts() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Es() {
  return this.each(Ts);
}
function $s(t3) {
  var e = typeof t3 == "function" ? t3 : jn(t3);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function ks() {
  return null;
}
function Rs(t3, e) {
  var n = typeof t3 == "function" ? t3 : jn(t3), r = e == null ? ks : typeof e == "function" ? e : We(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ns() {
  var t3 = this.parentNode;
  t3 && t3.removeChild(this);
}
function Os() {
  return this.each(Ns);
}
function zs() {
  var t3 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t3, this.nextSibling) : t3;
}
function Ms() {
  var t3 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t3, this.nextSibling) : t3;
}
function Ps(t3) {
  return this.select(t3 ? Ms : zs);
}
function Is(t3) {
  return arguments.length ? this.property("__data__", t3) : this.node().__data__;
}
function Fs(t3) {
  return function(e) {
    t3.call(this, e, this.__data__);
  };
}
function Ls(t3) {
  return t3.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Bs(t3) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, s; n < i; ++n) s = e[n], (!t3.type || s.type === t3.type) && s.name === t3.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++r] = s;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Ds(t3, e, n) {
  return function() {
    var r = this.__on, i, s = Fs(e);
    if (r) {
      for (var o = 0, a = r.length; o < a; ++o) if ((i = r[o]).type === t3.type && i.name === t3.name) {
        this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = s, i.options = n), i.value = e;
        return;
      }
    }
    this.addEventListener(t3.type, s, n), i = { type: t3.type, name: t3.name, value: e, listener: s, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Hs(t3, e, n) {
  var r = Ls(t3 + ""), i, s = r.length, o;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var c = 0, u = a.length, l; c < u; ++c) for (i = 0, l = a[c]; i < s; ++i) if ((o = r[i]).type === l.type && o.name === l.name) return l.value;
    }
    return;
  }
  for (a = e ? Ds : Bs, i = 0; i < s; ++i) this.each(a(r[i], e, n));
  return this;
}
function ur(t3, e, n) {
  var r = ir(t3), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, false, false)), t3.dispatchEvent(i);
}
function Vs(t3, e) {
  return function() {
    return ur(this, t3, e);
  };
}
function Ws(t3, e) {
  return function() {
    return ur(this, t3, e.apply(this, arguments));
  };
}
function Us(t3, e) {
  return this.each((typeof e == "function" ? Ws : Vs)(t3, e));
}
function* Xs() {
  for (var t3 = this._groups, e = 0, n = t3.length; e < n; ++e) for (var r = t3[e], i = 0, s = r.length, o; i < s; ++i) (o = r[i]) && (yield o);
}
var lr = [null];
function M(t3, e) {
  this._groups = t3, this._parents = e;
}
function $t() {
  return new M([[document.documentElement]], lr);
}
function qs() {
  return this;
}
M.prototype = $t.prototype = { constructor: M, select: _i, selectAll: bi, selectChild: Ti, selectChildren: Ri, filter: Ni, data: Fi, enter: Oi, exit: Bi, join: Di, merge: Hi, selection: qs, order: Vi, sort: Wi, call: Xi, nodes: qi, node: Gi, size: Yi, empty: Zi, each: Ki, attr: rs, style: as, property: fs, classed: vs, text: ys, html: As, raise: Ss, lower: Es, append: $s, insert: Rs, remove: Os, clone: Ps, datum: Is, on: Hs, dispatch: Us, [Symbol.iterator]: Xs };
function rt(t3) {
  return typeof t3 == "string" ? new M([[document.querySelector(t3)]], [document.documentElement]) : new M([[t3]], lr);
}
function Gs(t3) {
  let e;
  for (; e = t3.sourceEvent; ) t3 = e;
  return t3;
}
function cn(t3, e) {
  if (t3 = Gs(t3), e === void 0 && (e = t3.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var r = n.createSVGPoint();
      return r.x = t3.clientX, r.y = t3.clientY, r = r.matrixTransform(e.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect();
      return [t3.clientX - i.left - e.clientLeft, t3.clientY - i.top - e.clientTop];
    }
  }
  return [t3.pageX, t3.pageY];
}
var yt;
(function(t3) {
  t3[t3.SVG = 0] = "SVG", t3[t3.HTML = 1] = "HTML";
})(yt || (yt = {}));
var ut;
(function(t3) {
  t3.Fit = "fit", t3.Extend = "extend", t3.FitWidth = "fit_width";
})(ut || (ut = {}));
function me(t3, e) {
  return t3 == null || e == null ? NaN : t3 < e ? -1 : t3 > e ? 1 : t3 >= e ? 0 : NaN;
}
function Ys(t3, e) {
  return t3 == null || e == null ? NaN : e < t3 ? -1 : e > t3 ? 1 : e >= t3 ? 0 : NaN;
}
function Zs(t3) {
  let e, n, r;
  t3.length !== 2 ? (e = me, n = (a, c) => me(t3(a), c), r = (a, c) => t3(a) - c) : (e = t3 === me || t3 === Ys ? t3 : Ks, n = t3, r = t3);
  function i(a, c, u = 0, l = a.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(a[f], c) < 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function s(a, c, u = 0, l = a.length) {
    if (u < l) {
      if (e(c, c) !== 0) return l;
      do {
        const f = u + l >>> 1;
        n(a[f], c) <= 0 ? u = f + 1 : l = f;
      } while (u < l);
    }
    return u;
  }
  function o(a, c, u = 0, l = a.length) {
    const f = i(a, c, u, l - 1);
    return f > u && r(a[f - 1], c) > -r(a[f], c) ? f - 1 : f;
  }
  return { left: i, center: o, right: s };
}
function Ks() {
  return 0;
}
function un(t3, e) {
  let n;
  if (e === void 0) for (const r of t3) r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t3) (i = e(i, ++r, t3)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function ln(t3, e) {
  let n;
  if (e === void 0) for (const r of t3) r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t3) (i = e(i, ++r, t3)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Qs(t3, e) {
  let n = 0, r = 0;
  if (e === void 0) for (let i of t3) i != null && (i = +i) >= i && (++n, r += i);
  else {
    let i = -1;
    for (let s of t3) (s = e(s, ++i, t3)) != null && (s = +s) >= s && (++n, r += s);
  }
  if (n) return r / n;
}
function Js(t3, e) {
  let n = 0;
  if (e === void 0) for (let r of t3) (r = +r) && (n += r);
  else {
    let r = -1;
    for (let i of t3) (i = +e(i, ++r, t3)) && (n += i);
  }
  return n;
}
function js(t3, e, n) {
  var r = {}, i = r.noTrailing, s = i === void 0 ? false : i, o = r.noLeading, a = o === void 0 ? false : o, c = r.debounceMode, u = c === void 0 ? void 0 : c, l, f = false, h = 0;
  function d() {
    l && clearTimeout(l);
  }
  function v(g) {
    var y = g || {}, m = y.upcomingOnly, _ = m === void 0 ? false : m;
    d(), f = !_;
  }
  function p() {
    for (var g = arguments.length, y = new Array(g), m = 0; m < g; m++) y[m] = arguments[m];
    var _ = this, T = Date.now() - h;
    if (f) return;
    function w() {
      h = Date.now(), e.apply(_, y);
    }
    function S() {
      l = void 0;
    }
    !a && u && !l && w(), d(), u === void 0 && T > t3 ? a ? (h = Date.now(), s || (l = setTimeout(u ? S : w, t3))) : w() : s !== true && (l = setTimeout(u ? S : w, u === void 0 ? t3 - T : t3));
  }
  return p.cancel = v, p;
}
const Xe = (t3) => typeof t3 == "number", fr = (t3) => typeof t3 == "function", qe = (t3) => Array.isArray(t3), to = (t3) => t3 instanceof Object, Kt = (t3) => t3.constructor.name !== "Function" && t3.constructor.name !== "Object", fn = (t3) => to(t3) && !qe(t3) && !fr(t3) && !Kt(t3), Qt = (t3, e, n = [], r = /* @__PURE__ */ new Set()) => {
  if (Array.isArray(t3)) {
    if (!Array.isArray(e) || t3.length !== e.length) return false;
    if (r.has(t3)) return true;
    r.add(t3);
    for (let i = 0; i < t3.length; i++) if (!Qt(t3[i], e[i], n, r)) return false;
    return true;
  }
  if (t3 instanceof Date && e instanceof Date) return t3.getTime() === e.getTime();
  if (typeof t3 == "object" && t3 !== null && e !== null) {
    if (typeof e != "object") return false;
    if (t3 === e) return true;
    const i = Object.keys(t3).filter((o) => !n.includes(o)), s = Object.keys(e).filter((o) => !n.includes(o));
    if (i.length !== s.length) return false;
    if (r.has(t3)) return true;
    r.add(t3);
    for (const o of i) if (!Qt(t3[o], e[o], n, r)) return false;
    return true;
  }
  return t3 === e;
}, eo = (t3) => t3.flat(), Jt = (t3, e = /* @__PURE__ */ new Map()) => {
  if (typeof t3 != "object" || t3 === null) return t3;
  if (t3 instanceof Date) return new Date(t3.getTime());
  if (t3 instanceof Array) {
    const n = [];
    e.set(t3, n);
    for (const r of t3) n.push(e.has(r) ? e.get(r) : Jt(r, e));
    return n;
  }
  if (Kt(t3)) return t3;
  if (t3 instanceof Object) {
    const n = {};
    e.set(t3, n);
    const r = t3;
    return Object.keys(t3).reduce((i, s) => (i[s] = e.has(r[s]) ? e.get(r[s]) : Jt(r[s], e), i), n), n;
  }
  return t3;
}, lt = (t3, e, n = /* @__PURE__ */ new Map()) => {
  if (!t3 || !e || t3 === e) return t3;
  const r = Kt(t3) ? t3 : Jt(t3);
  return n.has(e) ? n.get(e) : (n.set(e, r), Object.keys(e).forEach((i) => {
    i === "__proto__" || i === "constructor" || (fn(t3[i]) && fn(e[i]) ? r[i] = lt(t3[i], e[i], n) : Kt(e) ? r[i] = e : r[i] = Jt(e[i]));
  }), r);
}, jt = (t3, e, n) => js(e, t3);
function hr(t3, e, n) {
  return fr(e) ? e(t3, n) : e;
}
function no(t3, e, n) {
  return hr(t3, e, n);
}
function X(t3, e, n) {
  return hr(t3, e, n);
}
function Bu(t3) {
  return t3.filter((e) => e && !Xe(e));
}
function hn(t3, e, n) {
  return Math.min(Math.max(t3, e), n);
}
function Du(t3, ...e) {
  if (!t3) return [void 0, void 0];
  if (qe(e)) {
    let n = 0, r = 0;
    return t3.forEach((i, s) => {
      let o = 0, a = 0;
      for (const c of e) {
        const u = X(i, c, s) || 0;
        u >= 0 ? o += u : a += u;
      }
      o > r && (r = o), a < n && (n = a);
    }), [n, r];
  }
}
function Hu(t3, e, ...n) {
  const r = [];
  let i = 0, s = 0;
  for (const o of n) {
    const a = X(t3, o, e) || 0;
    a >= 0 ? r.push(i += a) : r.push(s += a);
  }
  return r;
}
function Vu(t3, e, n, r) {
  const i = t3.map((a, c) => X(a, e, c) || 0), s = n.map((a, c) => {
    const u = Qs(t3, (l, f) => X(l, a, f) || 0);
    return u === 0 && Array.isArray(r) ? r[c] : u < 0;
  }), o = n.map(() => []);
  return t3.forEach((a, c) => {
    let u = i[c], l = i[c];
    n.forEach((f, h) => {
      const d = X(a, f, c) || 0;
      d >= 0 ? o[h].push([u, u += d]) : o[h].push([l, l += d]);
    });
  }), o.forEach((a, c) => {
    a.isMostlyNegative = s[c];
  }), o;
}
function ro(t3, ...e) {
  return t3 ? ln(t3, (r, i) => ln(e, (s) => X(r, s, i))) : void 0;
}
function io(t3, ...e) {
  return t3 ? un(t3, (r, i) => un(e, (s) => X(r, s, i))) : void 0;
}
function Wu(t3, ...e) {
  return [ro(t3, ...e), io(t3, ...e)];
}
function Uu(t3, e, n) {
  if (t3.length <= 1) return t3[0];
  const r = t3.map((o, a) => X(o, n, a));
  r.sort((o, a) => o - a);
  const i = Zs((o) => o).left, s = i(r, e, 1, t3.length - 1);
  return e - r[s - 1] > r[s] - e ? t3[s] : t3[s - 1];
}
function Xu(t3, e, n) {
  return t3.filter((i, s) => {
    const o = X(i, n, s);
    return o >= e[0] && o <= e[1];
  });
}
var J = [], so = function() {
  return J.some(function(t3) {
    return t3.activeTargets.length > 0;
  });
}, oo = function() {
  return J.some(function(t3) {
    return t3.skippedTargets.length > 0;
  });
}, dn = "ResizeObserver loop completed with undelivered notifications.", ao = function() {
  var t3;
  typeof ErrorEvent == "function" ? t3 = new ErrorEvent("error", { message: dn }) : (t3 = document.createEvent("Event"), t3.initEvent("error", false, false), t3.message = dn), window.dispatchEvent(t3);
}, bt;
(function(t3) {
  t3.BORDER_BOX = "border-box", t3.CONTENT_BOX = "content-box", t3.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(bt || (bt = {}));
var j = function(t3) {
  return Object.freeze(t3);
}, co = /* @__PURE__ */ function() {
  function t3(e, n) {
    this.inlineSize = e, this.blockSize = n, j(this);
  }
  return t3;
}(), dr = function() {
  function t3(e, n, r, i) {
    return this.x = e, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, j(this);
  }
  return t3.prototype.toJSON = function() {
    var e = this, n = e.x, r = e.y, i = e.top, s = e.right, o = e.bottom, a = e.left, c = e.width, u = e.height;
    return { x: n, y: r, top: i, right: s, bottom: o, left: a, width: c, height: u };
  }, t3.fromRect = function(e) {
    return new t3(e.x, e.y, e.width, e.height);
  }, t3;
}(), Ge = function(t3) {
  return t3 instanceof SVGElement && "getBBox" in t3;
}, pr = function(t3) {
  if (Ge(t3)) {
    var e = t3.getBBox(), n = e.width, r = e.height;
    return !n && !r;
  }
  var i = t3, s = i.offsetWidth, o = i.offsetHeight;
  return !(s || o || t3.getClientRects().length);
}, pn = function(t3) {
  var e;
  if (t3 instanceof Element) return true;
  var n = (e = t3 == null ? void 0 : t3.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(n && t3 instanceof n.Element);
}, uo = function(t3) {
  switch (t3.tagName) {
    case "INPUT":
      if (t3.type !== "image") break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
}, vr = typeof window < "u" ? window : {}, Ot = /* @__PURE__ */ new WeakMap(), vn = /auto|scroll/, lo = /^tb|vertical/, fo = /msie|trident/i.test(globalThis.navigator && vr.navigator.userAgent), F = function(t3) {
  return parseFloat(t3 || "0");
}, it = function(t3, e, n) {
  return t3 === void 0 && (t3 = 0), e === void 0 && (e = 0), n === void 0 && (n = false), new co((n ? e : t3) || 0, (n ? t3 : e) || 0);
}, gn = j({ devicePixelContentBoxSize: it(), borderBoxSize: it(), contentBoxSize: it(), contentRect: new dr(0, 0, 0, 0) }), gr = function(t3, e) {
  if (e === void 0 && (e = false), Ot.has(t3) && !e) return Ot.get(t3);
  if (pr(t3)) return Ot.set(t3, gn), gn;
  var n = getComputedStyle(t3), r = Ge(t3) && t3.ownerSVGElement && t3.getBBox(), i = !fo && n.boxSizing === "border-box", s = lo.test(n.writingMode || ""), o = !r && vn.test(n.overflowY || ""), a = !r && vn.test(n.overflowX || ""), c = r ? 0 : F(n.paddingTop), u = r ? 0 : F(n.paddingRight), l = r ? 0 : F(n.paddingBottom), f = r ? 0 : F(n.paddingLeft), h = r ? 0 : F(n.borderTopWidth), d = r ? 0 : F(n.borderRightWidth), v = r ? 0 : F(n.borderBottomWidth), p = r ? 0 : F(n.borderLeftWidth), g = f + u, y = c + l, m = p + d, _ = h + v, T = a ? t3.offsetHeight - _ - t3.clientHeight : 0, w = o ? t3.offsetWidth - m - t3.clientWidth : 0, S = i ? g + m : 0, x = i ? y + _ : 0, W = r ? r.width : F(n.width) - S - w, $ = r ? r.height : F(n.height) - x - T, ei = W + g + w + m, ni = $ + y + T + _, sn = j({ devicePixelContentBoxSize: it(Math.round(W * devicePixelRatio), Math.round($ * devicePixelRatio), s), borderBoxSize: it(ei, ni, s), contentBoxSize: it(W, $, s), contentRect: new dr(f, c, W, $) });
  return Ot.set(t3, sn), sn;
}, mr = function(t3, e, n) {
  var r = gr(t3, n), i = r.borderBoxSize, s = r.contentBoxSize, o = r.devicePixelContentBoxSize;
  switch (e) {
    case bt.DEVICE_PIXEL_CONTENT_BOX:
      return o;
    case bt.BORDER_BOX:
      return i;
    default:
      return s;
  }
}, ho = /* @__PURE__ */ function() {
  function t3(e) {
    var n = gr(e);
    this.target = e, this.contentRect = n.contentRect, this.borderBoxSize = j([n.borderBoxSize]), this.contentBoxSize = j([n.contentBoxSize]), this.devicePixelContentBoxSize = j([n.devicePixelContentBoxSize]);
  }
  return t3;
}(), _r = function(t3) {
  if (pr(t3)) return 1 / 0;
  for (var e = 0, n = t3.parentNode; n; ) e += 1, n = n.parentNode;
  return e;
}, po = function() {
  var t3 = 1 / 0, e = [];
  J.forEach(function(o) {
    if (o.activeTargets.length !== 0) {
      var a = [];
      o.activeTargets.forEach(function(u) {
        var l = new ho(u.target), f = _r(u.target);
        a.push(l), u.lastReportedSize = mr(u.target, u.observedBox), f < t3 && (t3 = f);
      }), e.push(function() {
        o.callback.call(o.observer, a, o.observer);
      }), o.activeTargets.splice(0, o.activeTargets.length);
    }
  });
  for (var n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    i();
  }
  return t3;
}, mn = function(t3) {
  J.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (_r(i.target) > t3 ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, vo = function() {
  var t3 = 0;
  for (mn(t3); so(); ) t3 = po(), mn(t3);
  return oo() && ao(), t3 > 0;
}, _e, yr = [], go = function() {
  return yr.splice(0).forEach(function(t3) {
    return t3();
  });
}, mo = function(t3) {
  if (!_e) {
    var e = 0, n = document.createTextNode(""), r = { characterData: true };
    new MutationObserver(function() {
      return go();
    }).observe(n, r), _e = function() {
      n.textContent = "".concat(e ? e-- : e++);
    };
  }
  yr.push(t3), _e();
}, _o = function(t3) {
  mo(function() {
    requestAnimationFrame(t3);
  });
}, Bt = 0, yo = function() {
  return !!Bt;
}, wo = 250, xo = { attributes: true, characterData: true, childList: true, subtree: true }, _n = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], yn = function(t3) {
  return t3 === void 0 && (t3 = 0), Date.now() + t3;
}, ye = false, bo = function() {
  function t3() {
    var e = this;
    this.stopped = true, this.listener = function() {
      return e.schedule();
    };
  }
  return t3.prototype.run = function(e) {
    var n = this;
    if (e === void 0 && (e = wo), !ye) {
      ye = true;
      var r = yn(e);
      _o(function() {
        var i = false;
        try {
          i = vo();
        } finally {
          if (ye = false, e = r - yn(), !yo()) return;
          i ? n.run(1e3) : e > 0 ? n.run(e) : n.start();
        }
      });
    }
  }, t3.prototype.schedule = function() {
    this.stop(), this.run();
  }, t3.prototype.observe = function() {
    var e = this, n = function() {
      return e.observer && e.observer.observe(document.body, xo);
    };
    document.body ? n() : vr.addEventListener("DOMContentLoaded", n);
  }, t3.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), _n.forEach(function(n) {
      return globalThis.addEventListener(n, e.listener, true);
    }));
  }, t3.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), _n.forEach(function(n) {
      return globalThis.removeEventListener(n, e.listener, true);
    }), this.stopped = true);
  }, t3;
}(), Ee = new bo(), wn = function(t3) {
  !Bt && t3 > 0 && Ee.start(), Bt += t3, !Bt && Ee.stop();
}, Ao = function(t3) {
  return !Ge(t3) && !uo(t3) && getComputedStyle(t3).display === "inline";
}, Co = function() {
  function t3(e, n) {
    this.target = e, this.observedBox = n || bt.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return t3.prototype.isActive = function() {
    var e = mr(this.target, this.observedBox, true);
    return Ao(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, t3;
}(), So = /* @__PURE__ */ function() {
  function t3(e, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = n;
  }
  return t3;
}(), zt = /* @__PURE__ */ new WeakMap(), xn = function(t3, e) {
  for (var n = 0; n < t3.length; n += 1) if (t3[n].target === e) return n;
  return -1;
}, Mt = function() {
  function t3() {
  }
  return t3.connect = function(e, n) {
    var r = new So(e, n);
    zt.set(e, r);
  }, t3.observe = function(e, n, r) {
    var i = zt.get(e), s = i.observationTargets.length === 0;
    xn(i.observationTargets, n) < 0 && (s && J.push(i), i.observationTargets.push(new Co(n, r && r.box)), wn(1), Ee.schedule());
  }, t3.unobserve = function(e, n) {
    var r = zt.get(e), i = xn(r.observationTargets, n), s = r.observationTargets.length === 1;
    i >= 0 && (s && J.splice(J.indexOf(r), 1), r.observationTargets.splice(i, 1), wn(-1));
  }, t3.disconnect = function(e) {
    var n = this, r = zt.get(e);
    r.observationTargets.slice().forEach(function(i) {
      return n.unobserve(e, i.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, t3;
}(), To = function() {
  function t3(e) {
    if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Mt.connect(this, e);
  }
  return t3.prototype.observe = function(e, n) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!pn(e)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Mt.observe(this, e, n);
  }, t3.prototype.unobserve = function(e) {
    if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!pn(e)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Mt.unobserve(this, e);
  }, t3.prototype.disconnect = function() {
    Mt.disconnect(this);
  }, t3.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t3;
}();
const Eo = globalThis.ResizeObserver || To, $o = { duration: void 0, margin: { top: 0, bottom: 0, left: 0, right: 0 }, padding: { top: 0, bottom: 0, left: 0, right: 0 }, sizing: ut.Fit, width: void 0, height: void 0, svgDefs: void 0, ariaLabel: void 0 };
class te {
  constructor(e) {
    this._defaultConfig = $o, this._isFirstRender = true, this._renderAnimationFrameId = null, this._container = e;
    const n = rt(this._container);
    n.attr("role", "figure"), this.svg = n.append("svg").style("display", "block").attr("xmlns", "http://www.w3.org/2000/svg").attr("height", te.DEFAULT_CONTAINER_HEIGHT).attr("aria-hidden", true), this._svgDefs = this.svg.append("defs"), this._svgDefsExternal = this.svg.append("defs"), this.element = this.svg.node();
  }
  updateContainer(e) {
    var n;
    this.prevConfig = this.config, this.config = lt(this._defaultConfig, e), (e == null ? void 0 : e.svgDefs) !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.svgDefs) && (this._svgDefsExternal.selectAll("*").remove(), this._svgDefsExternal.html(e.svgDefs));
  }
  _preRender() {
  }
  _render(e) {
    const { config: n } = this;
    rt(this._container).attr("aria-label", n.ariaLabel), this._isFirstRender = false;
  }
  render(e = this.config.duration) {
    const n = this.config.width || this.containerWidth, r = this.config.height || this.containerHeight;
    this.svg.attr("width", n).attr("height", r), this._resizeObserver || this._setUpResizeObserver(), cancelAnimationFrame(this._renderAnimationFrameId), this._renderAnimationFrameId = requestAnimationFrame(() => {
      this._preRender(), this._render(e);
    });
  }
  get containerWidth() {
    return this.config.width ? this.element.clientWidth : this._container.clientWidth || this._container.getBoundingClientRect().width;
  }
  get containerHeight() {
    return this.config.height ? this.element.clientHeight : this._container.clientHeight || this._container.getBoundingClientRect().height || te.DEFAULT_CONTAINER_HEIGHT;
  }
  get width() {
    return hn(this.containerWidth - this.config.margin.left - this.config.margin.right, 0, Number.POSITIVE_INFINITY);
  }
  get height() {
    return hn(this.containerHeight - this.config.margin.top - this.config.margin.bottom, 0, Number.POSITIVE_INFINITY);
  }
  _removeAllChildren() {
    for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
  }
  _onResize() {
    const { config: e } = this;
    (e.sizing === ut.Fit || e.sizing === ut.FitWidth) && this.render(0);
  }
  _setUpResizeObserver() {
    if (this._resizeObserver) return;
    const e = this._container.getBoundingClientRect();
    this._containerSize = { width: e.width, height: e.height }, this._resizeObserver = new Eo((n, r) => {
      cancelAnimationFrame(this._resizeObserverAnimationFrameId), this._resizeObserverAnimationFrameId = requestAnimationFrame(() => {
        const i = this._container.getBoundingClientRect(), s = { width: i.width, height: i.height };
        !Qt(this._containerSize, s) && s.width && s.height && (this._containerSize = s, this._onResize());
      });
    }), this._resizeObserver.observe(this._container);
  }
  destroy() {
    var e;
    cancelAnimationFrame(this._renderAnimationFrameId), cancelAnimationFrame(this._resizeObserverAnimationFrameId), (e = this._resizeObserver) === null || e === void 0 || e.disconnect(), this.svg.remove();
  }
}
te.DEFAULT_CONTAINER_HEIGHT = 300;
function ko(t3) {
  if (t3.sheet) return t3.sheet;
  for (var e = 0; e < document.styleSheets.length; e++) if (document.styleSheets[e].ownerNode === t3) return document.styleSheets[e];
}
function Ro(t3) {
  var e = document.createElement("style");
  return e.setAttribute("data-emotion", t3.key), t3.nonce !== void 0 && e.setAttribute("nonce", t3.nonce), e.appendChild(document.createTextNode("")), e.setAttribute("data-s", ""), e;
}
var No = function() {
  function t3(n) {
    var r = this;
    this._insertTag = function(i) {
      var s;
      r.tags.length === 0 ? r.insertionPoint ? s = r.insertionPoint.nextSibling : r.prepend ? s = r.container.firstChild : s = r.before : s = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(i, s), r.tags.push(i);
    }, this.isSpeedy = n.speedy === void 0 ? true : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var e = t3.prototype;
  return e.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, e.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ro(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var s = ko(i);
      try {
        s.insertRule(r, s.cssRules.length);
      } catch {
      }
    } else i.appendChild(document.createTextNode(r));
    this.ctr++;
  }, e.flush = function() {
    this.tags.forEach(function(r) {
      var i;
      return (i = r.parentNode) == null ? void 0 : i.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, t3;
}(), R = "-ms-", ee = "-moz-", b = "-webkit-", wr = "comm", Ye = "rule", Ze = "decl", Oo = "@import", xr = "@keyframes", zo = "@layer", Mo = Math.abs, fe = String.fromCharCode, Po = Object.assign;
function Io(t3, e) {
  return k(t3, 0) ^ 45 ? (((e << 2 ^ k(t3, 0)) << 2 ^ k(t3, 1)) << 2 ^ k(t3, 2)) << 2 ^ k(t3, 3) : 0;
}
function br(t3) {
  return t3.trim();
}
function Fo(t3, e) {
  return (t3 = e.exec(t3)) ? t3[0] : t3;
}
function A(t3, e, n) {
  return t3.replace(e, n);
}
function $e(t3, e) {
  return t3.indexOf(e);
}
function k(t3, e) {
  return t3.charCodeAt(e) | 0;
}
function At(t3, e, n) {
  return t3.slice(e, n);
}
function L(t3) {
  return t3.length;
}
function Ke(t3) {
  return t3.length;
}
function Pt(t3, e) {
  return e.push(t3), t3;
}
function Lo(t3, e) {
  return t3.map(e).join("");
}
var he = 1, ft = 1, Ar = 0, O = 0, E = 0, dt = "";
function de(t3, e, n, r, i, s, o) {
  return { value: t3, root: e, parent: n, type: r, props: i, children: s, line: he, column: ft, length: o, return: "" };
}
function pt(t3, e) {
  return Po(de("", null, null, "", null, null, 0), t3, { length: -t3.length }, e);
}
function Bo() {
  return E;
}
function Do() {
  return E = O > 0 ? k(dt, --O) : 0, ft--, E === 10 && (ft = 1, he--), E;
}
function z() {
  return E = O < Ar ? k(dt, O++) : 0, ft++, E === 10 && (ft = 1, he++), E;
}
function D() {
  return k(dt, O);
}
function Dt() {
  return O;
}
function kt(t3, e) {
  return At(dt, t3, e);
}
function Ct(t3) {
  switch (t3) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Cr(t3) {
  return he = ft = 1, Ar = L(dt = t3), O = 0, [];
}
function Sr(t3) {
  return dt = "", t3;
}
function Ht(t3) {
  return br(kt(O - 1, ke(t3 === 91 ? t3 + 2 : t3 === 40 ? t3 + 1 : t3)));
}
function Ho(t3) {
  for (; (E = D()) && E < 33; ) z();
  return Ct(t3) > 2 || Ct(E) > 3 ? "" : " ";
}
function Vo(t3, e) {
  for (; --e && z() && !(E < 48 || E > 102 || E > 57 && E < 65 || E > 70 && E < 97); ) ;
  return kt(t3, Dt() + (e < 6 && D() == 32 && z() == 32));
}
function ke(t3) {
  for (; z(); ) switch (E) {
    case t3:
      return O;
    case 34:
    case 39:
      t3 !== 34 && t3 !== 39 && ke(E);
      break;
    case 40:
      t3 === 41 && ke(t3);
      break;
    case 92:
      z();
      break;
  }
  return O;
}
function Wo(t3, e) {
  for (; z() && t3 + E !== 57; ) if (t3 + E === 84 && D() === 47) break;
  return "/*" + kt(e, O - 1) + "*" + fe(t3 === 47 ? t3 : z());
}
function Uo(t3) {
  for (; !Ct(D()); ) z();
  return kt(t3, O);
}
function Xo(t3) {
  return Sr(Vt("", null, null, null, [""], t3 = Cr(t3), 0, [0], t3));
}
function Vt(t3, e, n, r, i, s, o, a, c) {
  for (var u = 0, l = 0, f = o, h = 0, d = 0, v = 0, p = 1, g = 1, y = 1, m = 0, _ = "", T = i, w = s, S = r, x = _; g; ) switch (v = m, m = z()) {
    case 40:
      if (v != 108 && k(x, f - 1) == 58) {
        $e(x += A(Ht(m), "&", "&\f"), "&\f") != -1 && (y = -1);
        break;
      }
    case 34:
    case 39:
    case 91:
      x += Ht(m);
      break;
    case 9:
    case 10:
    case 13:
    case 32:
      x += Ho(v);
      break;
    case 92:
      x += Vo(Dt() - 1, 7);
      continue;
    case 47:
      switch (D()) {
        case 42:
        case 47:
          Pt(qo(Wo(z(), Dt()), e, n), c);
          break;
        default:
          x += "/";
      }
      break;
    case 123 * p:
      a[u++] = L(x) * y;
    case 125 * p:
    case 59:
    case 0:
      switch (m) {
        case 0:
        case 125:
          g = 0;
        case 59 + l:
          y == -1 && (x = A(x, /\f/g, "")), d > 0 && L(x) - f && Pt(d > 32 ? An(x + ";", r, n, f - 1) : An(A(x, " ", "") + ";", r, n, f - 2), c);
          break;
        case 59:
          x += ";";
        default:
          if (Pt(S = bn(x, e, n, u, l, i, a, _, T = [], w = [], f), s), m === 123) if (l === 0) Vt(x, e, S, S, T, s, f, a, w);
          else switch (h === 99 && k(x, 3) === 110 ? 100 : h) {
            case 100:
            case 108:
            case 109:
            case 115:
              Vt(t3, S, S, r && Pt(bn(t3, S, S, 0, 0, i, a, _, i, T = [], f), w), i, w, f, a, r ? T : w);
              break;
            default:
              Vt(x, S, S, S, [""], w, 0, a, w);
          }
      }
      u = l = d = 0, p = y = 1, _ = x = "", f = o;
      break;
    case 58:
      f = 1 + L(x), d = v;
    default:
      if (p < 1) {
        if (m == 123) --p;
        else if (m == 125 && p++ == 0 && Do() == 125) continue;
      }
      switch (x += fe(m), m * p) {
        case 38:
          y = l > 0 ? 1 : (x += "\f", -1);
          break;
        case 44:
          a[u++] = (L(x) - 1) * y, y = 1;
          break;
        case 64:
          D() === 45 && (x += Ht(z())), h = D(), l = f = L(_ = x += Uo(Dt())), m++;
          break;
        case 45:
          v === 45 && L(x) == 2 && (p = 0);
      }
  }
  return s;
}
function bn(t3, e, n, r, i, s, o, a, c, u, l) {
  for (var f = i - 1, h = i === 0 ? s : [""], d = Ke(h), v = 0, p = 0, g = 0; v < r; ++v) for (var y = 0, m = At(t3, f + 1, f = Mo(p = o[v])), _ = t3; y < d; ++y) (_ = br(p > 0 ? h[y] + " " + m : A(m, /&\f/g, h[y]))) && (c[g++] = _);
  return de(t3, e, n, i === 0 ? Ye : a, c, u, l);
}
function qo(t3, e, n) {
  return de(t3, e, n, wr, fe(Bo()), At(t3, 2, -2), 0);
}
function An(t3, e, n, r) {
  return de(t3, e, n, Ze, At(t3, 0, r), At(t3, r + 1, -1), r);
}
function st(t3, e) {
  for (var n = "", r = Ke(t3), i = 0; i < r; i++) n += e(t3[i], i, t3, e) || "";
  return n;
}
function Go(t3, e, n, r) {
  switch (t3.type) {
    case zo:
      if (t3.children.length) break;
    case Oo:
    case Ze:
      return t3.return = t3.return || t3.value;
    case wr:
      return "";
    case xr:
      return t3.return = t3.value + "{" + st(t3.children, r) + "}";
    case Ye:
      t3.value = t3.props.join(",");
  }
  return L(n = st(t3.children, r)) ? t3.return = t3.value + "{" + n + "}" : "";
}
function Yo(t3) {
  var e = Ke(t3);
  return function(n, r, i, s) {
    for (var o = "", a = 0; a < e; a++) o += t3[a](n, r, i, s) || "";
    return o;
  };
}
function Zo(t3) {
  return function(e) {
    e.root || (e = e.return) && t3(e);
  };
}
function Ko(t3) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return e[n] === void 0 && (e[n] = t3(n)), e[n];
  };
}
var Qo = function(e, n, r) {
  for (var i = 0, s = 0; i = s, s = D(), i === 38 && s === 12 && (n[r] = 1), !Ct(s); ) z();
  return kt(e, O);
}, Jo = function(e, n) {
  var r = -1, i = 44;
  do
    switch (Ct(i)) {
      case 0:
        i === 38 && D() === 12 && (n[r] = 1), e[r] += Qo(O - 1, n, r);
        break;
      case 2:
        e[r] += Ht(i);
        break;
      case 4:
        if (i === 44) {
          e[++r] = D() === 58 ? "&\f" : "", n[r] = e[r].length;
          break;
        }
      default:
        e[r] += fe(i);
    }
  while (i = z());
  return e;
}, jo = function(e, n) {
  return Sr(Jo(Cr(e), n));
}, Cn = /* @__PURE__ */ new WeakMap(), ta = function(e) {
  if (!(e.type !== "rule" || !e.parent || e.length < 1)) {
    for (var n = e.value, r = e.parent, i = e.column === r.column && e.line === r.line; r.type !== "rule"; ) if (r = r.parent, !r) return;
    if (!(e.props.length === 1 && n.charCodeAt(0) !== 58 && !Cn.get(r)) && !i) {
      Cn.set(e, true);
      for (var s = [], o = jo(n, s), a = r.props, c = 0, u = 0; c < o.length; c++) for (var l = 0; l < a.length; l++, u++) e.props[u] = s[c] ? o[c].replace(/&\f/g, a[l]) : a[l] + " " + o[c];
    }
  }
}, ea = function(e) {
  if (e.type === "decl") {
    var n = e.value;
    n.charCodeAt(0) === 108 && n.charCodeAt(2) === 98 && (e.return = "", e.value = "");
  }
};
function Tr(t3, e) {
  switch (Io(t3, e)) {
    case 5103:
      return b + "print-" + t3 + t3;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return b + t3 + t3;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return b + t3 + ee + t3 + R + t3 + t3;
    case 6828:
    case 4268:
      return b + t3 + R + t3 + t3;
    case 6165:
      return b + t3 + R + "flex-" + t3 + t3;
    case 5187:
      return b + t3 + A(t3, /(\w+).+(:[^]+)/, b + "box-$1$2" + R + "flex-$1$2") + t3;
    case 5443:
      return b + t3 + R + "flex-item-" + A(t3, /flex-|-self/, "") + t3;
    case 4675:
      return b + t3 + R + "flex-line-pack" + A(t3, /align-content|flex-|-self/, "") + t3;
    case 5548:
      return b + t3 + R + A(t3, "shrink", "negative") + t3;
    case 5292:
      return b + t3 + R + A(t3, "basis", "preferred-size") + t3;
    case 6060:
      return b + "box-" + A(t3, "-grow", "") + b + t3 + R + A(t3, "grow", "positive") + t3;
    case 4554:
      return b + A(t3, /([^-])(transform)/g, "$1" + b + "$2") + t3;
    case 6187:
      return A(A(A(t3, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), t3, "") + t3;
    case 5495:
    case 3959:
      return A(t3, /(image-set\([^]*)/, b + "$1$`$1");
    case 4968:
      return A(A(t3, /(.+:)(flex-)?(.*)/, b + "box-pack:$3" + R + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + b + t3 + t3;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return A(t3, /(.+)-inline(.+)/, b + "$1$2") + t3;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (L(t3) - 1 - e > 6) switch (k(t3, e + 1)) {
        case 109:
          if (k(t3, e + 4) !== 45) break;
        case 102:
          return A(t3, /(.+:)(.+)-([^]+)/, "$1" + b + "$2-$3$1" + ee + (k(t3, e + 3) == 108 ? "$3" : "$2-$3")) + t3;
        case 115:
          return ~$e(t3, "stretch") ? Tr(A(t3, "stretch", "fill-available"), e) + t3 : t3;
      }
      break;
    case 4949:
      if (k(t3, e + 1) !== 115) break;
    case 6444:
      switch (k(t3, L(t3) - 3 - (~$e(t3, "!important") && 10))) {
        case 107:
          return A(t3, ":", ":" + b) + t3;
        case 101:
          return A(t3, /(.+:)([^;!]+)(;|!.+)?/, "$1" + b + (k(t3, 14) === 45 ? "inline-" : "") + "box$3$1" + b + "$2$3$1" + R + "$2box$3") + t3;
      }
      break;
    case 5936:
      switch (k(t3, e + 11)) {
        case 114:
          return b + t3 + R + A(t3, /[svh]\w+-[tblr]{2}/, "tb") + t3;
        case 108:
          return b + t3 + R + A(t3, /[svh]\w+-[tblr]{2}/, "tb-rl") + t3;
        case 45:
          return b + t3 + R + A(t3, /[svh]\w+-[tblr]{2}/, "lr") + t3;
      }
      return b + t3 + R + t3 + t3;
  }
  return t3;
}
var na = function(e, n, r, i) {
  if (e.length > -1 && !e.return) switch (e.type) {
    case Ze:
      e.return = Tr(e.value, e.length);
      break;
    case xr:
      return st([pt(e, { value: A(e.value, "@", "@" + b) })], i);
    case Ye:
      if (e.length) return Lo(e.props, function(s) {
        switch (Fo(s, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return st([pt(e, { props: [A(s, /:(read-\w+)/, ":" + ee + "$1")] })], i);
          case "::placeholder":
            return st([pt(e, { props: [A(s, /:(plac\w+)/, ":" + b + "input-$1")] }), pt(e, { props: [A(s, /:(plac\w+)/, ":" + ee + "$1")] }), pt(e, { props: [A(s, /:(plac\w+)/, R + "input-$1")] })], i);
        }
        return "";
      });
  }
}, ra = [na], ia = function(e) {
  var n = e.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var g = p.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var i = e.stylisPlugins || ra, s = {}, o, a = [];
  o = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + n + ' "]'), function(p) {
    for (var g = p.getAttribute("data-emotion").split(" "), y = 1; y < g.length; y++) s[g[y]] = true;
    a.push(p);
  });
  var c, u = [ta, ea];
  {
    var l, f = [Go, Zo(function(p) {
      l.insert(p);
    })], h = Yo(u.concat(i, f)), d = function(g) {
      return st(Xo(g), h);
    };
    c = function(g, y, m, _) {
      l = m, d(g ? g + "{" + y.styles + "}" : y.styles), _ && (v.inserted[y.name] = true);
    };
  }
  var v = { key: n, sheet: new No({ key: n, container: o, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: s, registered: {}, insert: c };
  return v.sheet.hydrate(a), v;
};
function sa(t3) {
  for (var e = 0, n, r = 0, i = t3.length; i >= 4; ++r, i -= 4) n = t3.charCodeAt(r) & 255 | (t3.charCodeAt(++r) & 255) << 8 | (t3.charCodeAt(++r) & 255) << 16 | (t3.charCodeAt(++r) & 255) << 24, n = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= n >>> 24, e = (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      e ^= (t3.charCodeAt(r + 2) & 255) << 16;
    case 2:
      e ^= (t3.charCodeAt(r + 1) & 255) << 8;
    case 1:
      e ^= t3.charCodeAt(r) & 255, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
var oa = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 }, aa = /[A-Z]|^ms/g, ca = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Er = function(e) {
  return e.charCodeAt(1) === 45;
}, Sn = function(e) {
  return e != null && typeof e != "boolean";
}, we = Ko(function(t3) {
  return Er(t3) ? t3 : t3.replace(aa, "-$&").toLowerCase();
}), Tn = function(e, n) {
  switch (e) {
    case "animation":
    case "animationName":
      if (typeof n == "string") return n.replace(ca, function(r, i, s) {
        return Z = { name: i, styles: s, next: Z }, i;
      });
  }
  return oa[e] !== 1 && !Er(e) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function ne(t3, e, n) {
  if (n == null) return "";
  var r = n;
  if (r.__emotion_styles !== void 0) return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var i = n;
      if (i.anim === 1) return Z = { name: i.name, styles: i.styles, next: Z }, i.name;
      var s = n;
      if (s.styles !== void 0) {
        var o = s.next;
        if (o !== void 0) for (; o !== void 0; ) Z = { name: o.name, styles: o.styles, next: Z }, o = o.next;
        var a = s.styles + ";";
        return a;
      }
      return ua(t3, e, n);
    }
  }
  var c = n;
  if (e == null) return c;
  var u = e[c];
  return u !== void 0 ? u : c;
}
function ua(t3, e, n) {
  var r = "";
  if (Array.isArray(n)) for (var i = 0; i < n.length; i++) r += ne(t3, e, n[i]) + ";";
  else for (var s in n) {
    var o = n[s];
    if (typeof o != "object") {
      var a = o;
      e != null && e[a] !== void 0 ? r += s + "{" + e[a] + "}" : Sn(a) && (r += we(s) + ":" + Tn(s, a) + ";");
    } else if (Array.isArray(o) && typeof o[0] == "string" && (e == null || e[o[0]] === void 0)) for (var c = 0; c < o.length; c++) Sn(o[c]) && (r += we(s) + ":" + Tn(s, o[c]) + ";");
    else {
      var u = ne(t3, e, o);
      switch (s) {
        case "animation":
        case "animationName": {
          r += we(s) + ":" + u + ";";
          break;
        }
        default:
          r += s + "{" + u + "}";
      }
    }
  }
  return r;
}
var En = /label:\s*([^\s;{]+)\s*(;|$)/g, Z;
function xe(t3, e, n) {
  if (t3.length === 1 && typeof t3[0] == "object" && t3[0] !== null && t3[0].styles !== void 0) return t3[0];
  var r = true, i = "";
  Z = void 0;
  var s = t3[0];
  if (s == null || s.raw === void 0) r = false, i += ne(n, e, s);
  else {
    var o = s;
    i += o[0];
  }
  for (var a = 1; a < t3.length; a++) if (i += ne(n, e, t3[a]), r) {
    var c = s;
    i += c[a];
  }
  En.lastIndex = 0;
  for (var u = "", l; (l = En.exec(i)) !== null; ) u += "-" + l[1];
  var f = sa(i) + u;
  return { name: f, styles: i, next: Z };
}
function $r(t3, e, n) {
  var r = "";
  return n.split(" ").forEach(function(i) {
    t3[i] !== void 0 ? e.push(t3[i] + ";") : i && (r += i + " ");
  }), r;
}
var la = function(e, n, r) {
  var i = e.key + "-" + n.name;
  e.registered[i] === void 0 && (e.registered[i] = n.styles);
}, fa = function(e, n, r) {
  la(e, n);
  var i = e.key + "-" + n.name;
  if (e.inserted[n.name] === void 0) {
    var s = n;
    do
      e.insert(n === s ? "." + i : "", s, e.sheet, true), s = s.next;
    while (s !== void 0);
  }
};
function $n(t3, e) {
  if (t3.inserted[e.name] === void 0) return t3.insert("", e, t3.sheet, true);
}
function kn(t3, e, n) {
  var r = [], i = $r(t3, r, n);
  return r.length < 2 ? n : i + e(r);
}
var ha = function(e) {
  var n = ia(e);
  n.sheet.speedy = function(a) {
    this.isSpeedy = a;
  }, n.compat = true;
  var r = function() {
    for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
    var f = xe(u, n.registered, void 0);
    return fa(n, f), n.key + "-" + f.name;
  }, i = function() {
    for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
    var f = xe(u, n.registered), h = "animation-" + f.name;
    return $n(n, { name: f.name, styles: "@keyframes " + h + "{" + f.styles + "}" }), h;
  }, s = function() {
    for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
    var f = xe(u, n.registered);
    $n(n, f);
  }, o = function() {
    for (var c = arguments.length, u = new Array(c), l = 0; l < c; l++) u[l] = arguments[l];
    return kn(n.registered, r, da(u));
  };
  return { css: r, cx: o, injectGlobal: s, keyframes: i, hydrate: function(c) {
    c.forEach(function(u) {
      n.inserted[u] = true;
    });
  }, flush: function() {
    n.registered = {}, n.inserted = {}, n.sheet.flush();
  }, sheet: n.sheet, cache: n, getRegisteredStyles: $r.bind(null, n.registered), merge: kn.bind(null, n.registered, r) };
}, da = function t(e) {
  for (var n = "", r = 0; r < e.length; r++) {
    var i = e[r];
    if (i != null) {
      var s = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i)) s = t(i);
          else {
            s = "";
            for (var o in i) i[o] && o && (s && (s += " "), s += o);
          }
          break;
        }
        default:
          s = i;
      }
      s && (n && (n += " "), n += s);
    }
  }
  return n;
}, kr = ha({ key: "css" }), Rr = kr.injectGlobal, Rt = kr.css, be, Rn;
function pa() {
  return Rn || (Rn = 1, be = function(e, n) {
    n || (n = [0, ""]), e = String(e);
    var r = parseFloat(e, 10);
    return n[0] = r, n[1] = e.match(/[\d.\-\+]*\s*(.*)/)[1] || "", n;
  }), be;
}
var Ae, Nn;
function va() {
  if (Nn) return Ae;
  Nn = 1;
  var t3 = pa();
  Ae = i;
  var e = r("in", document.body);
  function n(s, o) {
    var a = t3(getComputedStyle(s).getPropertyValue(o));
    return a[0] * i(a[1], s);
  }
  function r(s, o) {
    var a = document.createElement("div");
    a.style.height = "128" + s, o.appendChild(a);
    var c = n(a, "height") / 128;
    return o.removeChild(a), c;
  }
  function i(s, o) {
    if (!s) return null;
    switch (o = o || document.body, s = (s + "" || "px").trim().toLowerCase(), (o === window || o === document) && (o = document.body), s) {
      case "%":
        return o.clientHeight / 100;
      case "ch":
      case "ex":
        return r(s, o);
      case "em":
        return n(o, "font-size");
      case "rem":
        return n(document.body, "font-size");
      case "vw":
        return window.innerWidth / 100;
      case "vh":
        return window.innerHeight / 100;
      case "vmin":
        return Math.min(window.innerWidth, window.innerHeight) / 100;
      case "vmax":
        return Math.max(window.innerWidth, window.innerHeight) / 100;
      case "in":
        return e;
      case "cm":
        return e / 2.54;
      case "mm":
        return e / 25.4;
      case "pt":
        return e / 72;
      case "pc":
        return e / 6;
      case "px":
        return 1;
    }
    var a = t3(s);
    if (!isNaN(a[0]) && a[1]) {
      var c = i(a[1], o);
      return typeof c == "number" ? a[0] * c : null;
    }
    return null;
  }
  return Ae;
}
va();
function ga() {
  const t3 = () => Math.floor((1 + crypto.getRandomValues(new Uint32Array(1))[0]) * 65536).toString(16).substring(1);
  return `${t3() + t3()}-${t3()}-${t3()}-${t3()}-${t3()}${t3()}${t3()}`;
}
function ma(t3, e) {
  const n = t3.substr(4, t3.length - 5);
  return getComputedStyle(e).getPropertyValue(n);
}
function qu(t3, e, n = 0) {
  const [r, i, s, o] = [t3.x + n, t3.y + t3.height - 2 * n, t3.x + t3.width - 2 * n, t3.y + n], [a, c, u, l] = [e.x + n, e.y + e.height - 2 * n, e.x + e.width - 2 * n, e.y + n];
  return !(i < l || c < o || s < a || u < r);
}
function Qe(t3, e, n) {
  t3.prototype = e.prototype = n, n.constructor = t3;
}
function Nr(t3, e) {
  var n = Object.create(t3.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function Nt() {
}
var St = 0.7, re = 1 / St, ot = "\\s*([+-]?\\d+)\\s*", Tt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", H = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _a = /^#([0-9a-f]{3,8})$/, ya = new RegExp(`^rgb\\(${ot},${ot},${ot}\\)$`), wa = new RegExp(`^rgb\\(${H},${H},${H}\\)$`), xa = new RegExp(`^rgba\\(${ot},${ot},${ot},${Tt}\\)$`), ba = new RegExp(`^rgba\\(${H},${H},${H},${Tt}\\)$`), Aa = new RegExp(`^hsl\\(${Tt},${H},${H}\\)$`), Ca = new RegExp(`^hsla\\(${Tt},${H},${H},${Tt}\\)$`), On = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
Qe(Nt, et, { copy(t3) {
  return Object.assign(new this.constructor(), this, t3);
}, displayable() {
  return this.rgb().displayable();
}, hex: zn, formatHex: zn, formatHex8: Sa, formatHsl: Ta, formatRgb: Mn, toString: Mn });
function zn() {
  return this.rgb().formatHex();
}
function Sa() {
  return this.rgb().formatHex8();
}
function Ta() {
  return Or(this).formatHsl();
}
function Mn() {
  return this.rgb().formatRgb();
}
function et(t3) {
  var e, n;
  return t3 = (t3 + "").trim().toLowerCase(), (e = _a.exec(t3)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Pn(e) : n === 3 ? new N(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? It(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? It(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = ya.exec(t3)) ? new N(e[1], e[2], e[3], 1) : (e = wa.exec(t3)) ? new N(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = xa.exec(t3)) ? It(e[1], e[2], e[3], e[4]) : (e = ba.exec(t3)) ? It(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Aa.exec(t3)) ? Ln(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ca.exec(t3)) ? Ln(e[1], e[2] / 100, e[3] / 100, e[4]) : On.hasOwnProperty(t3) ? Pn(On[t3]) : t3 === "transparent" ? new N(NaN, NaN, NaN, 0) : null;
}
function Pn(t3) {
  return new N(t3 >> 16 & 255, t3 >> 8 & 255, t3 & 255, 1);
}
function It(t3, e, n, r) {
  return r <= 0 && (t3 = e = n = NaN), new N(t3, e, n, r);
}
function Ea(t3) {
  return t3 instanceof Nt || (t3 = et(t3)), t3 ? (t3 = t3.rgb(), new N(t3.r, t3.g, t3.b, t3.opacity)) : new N();
}
function Re(t3, e, n, r) {
  return arguments.length === 1 ? Ea(t3) : new N(t3, e, n, r ?? 1);
}
function N(t3, e, n, r) {
  this.r = +t3, this.g = +e, this.b = +n, this.opacity = +r;
}
Qe(N, Re, Nr(Nt, { brighter(t3) {
  return t3 = t3 == null ? re : Math.pow(re, t3), new N(this.r * t3, this.g * t3, this.b * t3, this.opacity);
}, darker(t3) {
  return t3 = t3 == null ? St : Math.pow(St, t3), new N(this.r * t3, this.g * t3, this.b * t3, this.opacity);
}, rgb() {
  return this;
}, clamp() {
  return new N(tt(this.r), tt(this.g), tt(this.b), ie(this.opacity));
}, displayable() {
  return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
}, hex: In, formatHex: In, formatHex8: $a, formatRgb: Fn, toString: Fn }));
function In() {
  return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}`;
}
function $a() {
  return `#${Q(this.r)}${Q(this.g)}${Q(this.b)}${Q((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Fn() {
  const t3 = ie(this.opacity);
  return `${t3 === 1 ? "rgb(" : "rgba("}${tt(this.r)}, ${tt(this.g)}, ${tt(this.b)}${t3 === 1 ? ")" : `, ${t3})`}`;
}
function ie(t3) {
  return isNaN(t3) ? 1 : Math.max(0, Math.min(1, t3));
}
function tt(t3) {
  return Math.max(0, Math.min(255, Math.round(t3) || 0));
}
function Q(t3) {
  return t3 = tt(t3), (t3 < 16 ? "0" : "") + t3.toString(16);
}
function Ln(t3, e, n, r) {
  return r <= 0 ? t3 = e = n = NaN : n <= 0 || n >= 1 ? t3 = e = NaN : e <= 0 && (t3 = NaN), new P(t3, e, n, r);
}
function Or(t3) {
  if (t3 instanceof P) return new P(t3.h, t3.s, t3.l, t3.opacity);
  if (t3 instanceof Nt || (t3 = et(t3)), !t3) return new P();
  if (t3 instanceof P) return t3;
  t3 = t3.rgb();
  var e = t3.r / 255, n = t3.g / 255, r = t3.b / 255, i = Math.min(e, n, r), s = Math.max(e, n, r), o = NaN, a = s - i, c = (s + i) / 2;
  return a ? (e === s ? o = (n - r) / a + (n < r) * 6 : n === s ? o = (r - e) / a + 2 : o = (e - n) / a + 4, a /= c < 0.5 ? s + i : 2 - s - i, o *= 60) : a = c > 0 && c < 1 ? 0 : o, new P(o, a, c, t3.opacity);
}
function Je(t3, e, n, r) {
  return arguments.length === 1 ? Or(t3) : new P(t3, e, n, r ?? 1);
}
function P(t3, e, n, r) {
  this.h = +t3, this.s = +e, this.l = +n, this.opacity = +r;
}
Qe(P, Je, Nr(Nt, { brighter(t3) {
  return t3 = t3 == null ? re : Math.pow(re, t3), new P(this.h, this.s, this.l * t3, this.opacity);
}, darker(t3) {
  return t3 = t3 == null ? St : Math.pow(St, t3), new P(this.h, this.s, this.l * t3, this.opacity);
}, rgb() {
  var t3 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t3) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
  return new N(Ce(t3 >= 240 ? t3 - 240 : t3 + 120, i, r), Ce(t3, i, r), Ce(t3 < 120 ? t3 + 240 : t3 - 120, i, r), this.opacity);
}, clamp() {
  return new P(Bn(this.h), Ft(this.s), Ft(this.l), ie(this.opacity));
}, displayable() {
  return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
}, formatHsl() {
  const t3 = ie(this.opacity);
  return `${t3 === 1 ? "hsl(" : "hsla("}${Bn(this.h)}, ${Ft(this.s) * 100}%, ${Ft(this.l) * 100}%${t3 === 1 ? ")" : `, ${t3})`}`;
} }));
function Bn(t3) {
  return t3 = (t3 || 0) % 360, t3 < 0 ? t3 + 360 : t3;
}
function Ft(t3) {
  return Math.max(0, Math.min(1, t3 || 0));
}
function Ce(t3, e, n) {
  return (t3 < 60 ? e + (n - e) * t3 / 60 : t3 < 180 ? n : t3 < 240 ? e + (n - e) * (240 - t3) / 60 : e) * 255;
}
const gt = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS) || ["#4D8CFD", "#FF6B7E", "#F4B83E", "#A6CC74", "#00C19A", "#6859BE"], ka = (globalThis == null ? void 0 : globalThis.UNOVIS_COLORS_DARK) || ["#4D8CFD", "#FF6B7E", "#FFC16D", "#A6CC74", "#00C19A", "#7887E0"], G = (t3) => `--vis-${Xe(t3) ? `color${t3 % gt.length}` : t3}`;
function Ra(t3, e = 0.4) {
  const n = Je(t3);
  return n.l = n.l * (1 + e), n.formatHex();
}
function Na(t3, e = 0.4, n = 0.6) {
  const r = Je(t3);
  return r.s = r.s * (1 - n), r.l = r.l * (1 - e), r.formatHex();
}
const se = 10, Ne = [{ id: "stripes-diagonal", svg: '<path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="#000"/>' }, { id: "dots", svg: '<path d="m0-1.5a1 1 0 010 3m10-3a1 1 0 000 3M5 3.5a1 1 0 010 3 1 1 0 010-3M0 8.5 a1 1 0 010 3m10-3a1 1 0 000 3" fill"#000"/>' }, { id: "stripes-vertical", svg: '<path d="M 5,-1 L5,11" stroke="#000"/>' }, { id: "crosshatch", svg: '<path d="M0 0L10 10ZM10 0L0 10Z" stroke="#000"/>' }, { id: "waves", svg: '<path d="M0 4Q2.5 1 5 4 7.5 7 10 4v2Q7.5 9 5 6 2.5 3 0 6Z" fill="#000"/>' }, { id: "circles", svg: '<circle cx="5" cy="5" r="3" stroke="#000" fill="#fff"/>' }], Oe = [{ id: "circle", marker: '<circle cx="5" cy="5" r="5"/>', dashArray: [] }, { id: "triangle", marker: '<path d="M5,0 L10,9 L0,9Z">', dashArray: [9, 1] }, { id: "diamond", marker: '<path d="M 0 5 L5 0 L 10 5 L 5 10 L 0 5Z">', dashArray: [2] }, { id: "arrow", marker: '<path d="M4 0 0 0 6 5 0 10 4 10 10 5Z">', dashArray: [2, 3, 8, 3] }, { id: "square", marker: '<rect x="1" y="1" width="8" height="8"/>', dashArray: [6] }, { id: "star", marker: '<path d="m2 9 3-9 3 9L0 3h10Z"/>', dashArray: [1, 6] }];
function Y(t3) {
  return `vis-${`pattern-${t3.svg ? "fill" : "marker"}`}-${t3.id}`;
}
const Oa = (t3) => `<mask id="${Y(t3)}">
    <pattern id="${t3.id}" viewBox="0 0 10 10" width="${se}" height="${se}" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" fill="#fff"/>
      ${t3.svg}
    </pattern>
    <rect x="-50%" y="-50%" width="200%" height="200%" fill="url(#${t3.id})"/>
  </mask>`, za = (t3, e) => `<marker id="${Y(t3)}"
    fill="var(${G(e)})"
    markerUnits="userSpaceOnUse"
    refX="5"
    refY="5"
    markerWidth="${se}"
    markerHeight="${se}">
    ${t3.marker}
  </marker>`;
function Ma() {
  const t3 = Ne.map(Oa).concat(Oe.map(za)).join(""), e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  e.setAttribute("height", "100%"), e.setAttribute("width", "100%"), e.style.position = "fixed", e.style.zIndex = "-99999999", e.innerHTML = `<defs>${t3}</defs>`, document.body.appendChild(e);
}
typeof window < "u" && Ma();
const zr = (globalThis == null ? void 0 : globalThis.UNOVIS_FONT_W2H_RATIO_DEFAULT) || 0.5, Mr = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_SEPARATOR_DEFAULT) || [" ", "-", ".", ","], Pr = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_HYPHEN_CHARACTER_DEFAULT) || "-", Dn = (globalThis == null ? void 0 : globalThis.UNOVIS_TEXT_DEFAULT) || { text: "", fontSize: 12, fontFamily: "var(--vis-font-family)", lineHeight: 1.25, marginTop: 0, marginBottom: 0 };
Rr`
  :root {
    label: vis-root-styles;
    --vis-font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    --vis-font-wh-ratio: ${zr};
    --vis-color-main: var(${G(0)});
    --vis-color-main-light: ${Ra(gt[0])};
    --vis-color-main-dark: ${Na(gt[0])};
    --vis-color-grey: #2a2a2a;
    ${gt.map((t3, e) => `${G(e)}: ${t3};`)}
    ${ka.map((t3, e) => `--vis-dark-color${e}: ${t3};`)}
    ${Ne.map((t3, e) => `
      --${Y(t3)}: url(#${Y(t3)});
      --vis-pattern-fill${e}: var(--${Y(t3)});
    `)}
    ${Oe.map((t3, e) => {
  var n;
  return `
      --${Y(t3)}: url(#${Y(t3)});
      --vis-pattern-marker${e}: var(--${Y(t3)});
      --vis-pattern-dasharray${e}: ${(n = t3.dashArray) === null || n === void 0 ? void 0 : n.join(" ")};
    `;
})}

    body.theme-dark {
      ${gt.map((t3, e) => `${G(e)}: var(--vis-dark-color${e});`)}
    }

    body.theme-patterns {
      ${Ne.map((t3, e) => `path[style*="fill: var(${G(e)})"]  {
        mask: var(--vis-pattern-fill${e});
      }`)}
      ${Oe.map((t3, e) => `
      path[stroke="var(${G(e)})"]:not([style*="fill"]),
      path[style*="stroke: var(${G(e)})"]:not([style*="fill"]) {
        marker: var(--vis-pattern-marker${e});
        stroke-dasharray: var(--vis-pattern-dasharray${e});
      }
    `)}
}
`;
function Pa(t3 = window == null ? void 0 : window.document.body) {
  return t3 ? +ma("var(--vis-font-wh-ratio)", t3) : zr;
}
var Ia = { value: () => {
} };
function Ir() {
  for (var t3 = 0, e = arguments.length, n = {}, r; t3 < e; ++t3) {
    if (!(r = arguments[t3] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new Wt(n);
}
function Wt(t3) {
  this._ = t3;
}
function Fa(t3, e) {
  return t3.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
Wt.prototype = Ir.prototype = { constructor: Wt, on: function(t3, e) {
  var n = this._, r = Fa(t3 + "", n), i, s = -1, o = r.length;
  if (arguments.length < 2) {
    for (; ++s < o; ) if ((i = (t3 = r[s]).type) && (i = La(n[i], t3.name))) return i;
    return;
  }
  if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
  for (; ++s < o; ) if (i = (t3 = r[s]).type) n[i] = Hn(n[i], t3.name, e);
  else if (e == null) for (i in n) n[i] = Hn(n[i], t3.name, null);
  return this;
}, copy: function() {
  var t3 = {}, e = this._;
  for (var n in e) t3[n] = e[n].slice();
  return new Wt(t3);
}, call: function(t3, e) {
  if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, s; r < i; ++r) n[r] = arguments[r + 2];
  if (!this._.hasOwnProperty(t3)) throw new Error("unknown type: " + t3);
  for (s = this._[t3], r = 0, i = s.length; r < i; ++r) s[r].value.apply(e, n);
}, apply: function(t3, e, n) {
  if (!this._.hasOwnProperty(t3)) throw new Error("unknown type: " + t3);
  for (var r = this._[t3], i = 0, s = r.length; i < s; ++i) r[i].value.apply(e, n);
} };
function La(t3, e) {
  for (var n = 0, r = t3.length, i; n < r; ++n) if ((i = t3[n]).name === e) return i.value;
}
function Hn(t3, e, n) {
  for (var r = 0, i = t3.length; r < i; ++r) if (t3[r].name === e) {
    t3[r] = Ia, t3 = t3.slice(0, r).concat(t3.slice(r + 1));
    break;
  }
  return n != null && t3.push({ name: e, value: n }), t3;
}
var ht = 0, mt = 0, vt = 0, Fr = 1e3, oe, _t, ae = 0, nt = 0, pe = 0, Et = typeof performance == "object" && performance.now ? performance : Date, Lr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t3) {
  setTimeout(t3, 17);
};
function je() {
  return nt || (Lr(Ba), nt = Et.now() + pe);
}
function Ba() {
  nt = 0;
}
function ce() {
  this._call = this._time = this._next = null;
}
ce.prototype = Br.prototype = { constructor: ce, restart: function(t3, e, n) {
  if (typeof t3 != "function") throw new TypeError("callback is not a function");
  n = (n == null ? je() : +n) + (e == null ? 0 : +e), !this._next && _t !== this && (_t ? _t._next = this : oe = this, _t = this), this._call = t3, this._time = n, ze();
}, stop: function() {
  this._call && (this._call = null, this._time = 1 / 0, ze());
} };
function Br(t3, e, n) {
  var r = new ce();
  return r.restart(t3, e, n), r;
}
function Da() {
  je(), ++ht;
  for (var t3 = oe, e; t3; ) (e = nt - t3._time) >= 0 && t3._call.call(void 0, e), t3 = t3._next;
  --ht;
}
function Vn() {
  nt = (ae = Et.now()) + pe, ht = mt = 0;
  try {
    Da();
  } finally {
    ht = 0, Va(), nt = 0;
  }
}
function Ha() {
  var t3 = Et.now(), e = t3 - ae;
  e > Fr && (pe -= e, ae = t3);
}
function Va() {
  for (var t3, e = oe, n, r = 1 / 0; e; ) e._call ? (r > e._time && (r = e._time), t3 = e, e = e._next) : (n = e._next, e._next = null, e = t3 ? t3._next = n : oe = n);
  _t = t3, ze(r);
}
function ze(t3) {
  if (!ht) {
    mt && (mt = clearTimeout(mt));
    var e = t3 - nt;
    e > 24 ? (t3 < 1 / 0 && (mt = setTimeout(Vn, t3 - Et.now() - pe)), vt && (vt = clearInterval(vt))) : (vt || (ae = Et.now(), vt = setInterval(Ha, Fr)), ht = 1, Lr(Vn));
  }
}
function Wn(t3, e, n) {
  var r = new ce();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t3(i + e);
  }, e, n), r;
}
var Wa = Ir("start", "end", "cancel", "interrupt"), Ua = [], Dr = 0, Un = 1, Me = 2, Ut = 3, Xn = 4, Pe = 5, Xt = 6;
function ve(t3, e, n, r, i, s) {
  var o = t3.__transition;
  if (!o) t3.__transition = {};
  else if (n in o) return;
  Xa(t3, n, { name: e, index: r, group: i, on: Wa, tween: Ua, time: s.time, delay: s.delay, duration: s.duration, ease: s.ease, timer: null, state: Dr });
}
function tn(t3, e) {
  var n = I(t3, e);
  if (n.state > Dr) throw new Error("too late; already scheduled");
  return n;
}
function V(t3, e) {
  var n = I(t3, e);
  if (n.state > Ut) throw new Error("too late; already running");
  return n;
}
function I(t3, e) {
  var n = t3.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function Xa(t3, e, n) {
  var r = t3.__transition, i;
  r[e] = n, n.timer = Br(s, 0, n.time);
  function s(u) {
    n.state = Un, n.timer.restart(o, n.delay, n.time), n.delay <= u && o(u - n.delay);
  }
  function o(u) {
    var l, f, h, d;
    if (n.state !== Un) return c();
    for (l in r) if (d = r[l], d.name === n.name) {
      if (d.state === Ut) return Wn(o);
      d.state === Xn ? (d.state = Xt, d.timer.stop(), d.on.call("interrupt", t3, t3.__data__, d.index, d.group), delete r[l]) : +l < e && (d.state = Xt, d.timer.stop(), d.on.call("cancel", t3, t3.__data__, d.index, d.group), delete r[l]);
    }
    if (Wn(function() {
      n.state === Ut && (n.state = Xn, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = Me, n.on.call("start", t3, t3.__data__, n.index, n.group), n.state === Me) {
      for (n.state = Ut, i = new Array(h = n.tween.length), l = 0, f = -1; l < h; ++l) (d = n.tween[l].value.call(t3, t3.__data__, n.index, n.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function a(u) {
    for (var l = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(c), n.state = Pe, 1), f = -1, h = i.length; ++f < h; ) i[f].call(t3, l);
    n.state === Pe && (n.on.call("end", t3, t3.__data__, n.index, n.group), c());
  }
  function c() {
    n.state = Xt, n.timer.stop(), delete r[e];
    for (var u in r) return;
    delete t3.__transition;
  }
}
function Hr(t3, e) {
  var n = t3.__transition, r, i, s = true, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        s = false;
        continue;
      }
      i = r.state > Me && r.state < Pe, r.state = Xt, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t3, t3.__data__, r.index, r.group), delete n[o];
    }
    s && delete t3.__transition;
  }
}
function qa(t3) {
  return this.each(function() {
    Hr(this, t3);
  });
}
const en = (t3) => () => t3;
function Ga(t3, e) {
  return function(n) {
    return t3 + n * e;
  };
}
function Ya(t3, e, n) {
  return t3 = Math.pow(t3, n), e = Math.pow(e, n) - t3, n = 1 / n, function(r) {
    return Math.pow(t3 + r * e, n);
  };
}
function Za(t3) {
  return (t3 = +t3) == 1 ? Vr : function(e, n) {
    return n - e ? Ya(e, n, t3) : en(isNaN(e) ? n : e);
  };
}
function Vr(t3, e) {
  var n = e - t3;
  return n ? Ga(t3, n) : en(isNaN(t3) ? e : t3);
}
const ue = function t2(e) {
  var n = Za(e);
  function r(i, s) {
    var o = n((i = Re(i)).r, (s = Re(s)).r), a = n(i.g, s.g), c = n(i.b, s.b), u = Vr(i.opacity, s.opacity);
    return function(l) {
      return i.r = o(l), i.g = a(l), i.b = c(l), i.opacity = u(l), i + "";
    };
  }
  return r.gamma = t2, r;
}(1);
function Ka(t3, e) {
  e || (e = []);
  var n = t3 ? Math.min(e.length, t3.length) : 0, r = e.slice(), i;
  return function(s) {
    for (i = 0; i < n; ++i) r[i] = t3[i] * (1 - s) + e[i] * s;
    return r;
  };
}
function Qa(t3) {
  return ArrayBuffer.isView(t3) && !(t3 instanceof DataView);
}
function Ja(t3, e) {
  var n = e ? e.length : 0, r = t3 ? Math.min(n, t3.length) : 0, i = new Array(r), s = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Ur(t3[o], e[o]);
  for (; o < n; ++o) s[o] = e[o];
  return function(a) {
    for (o = 0; o < r; ++o) s[o] = i[o](a);
    return s;
  };
}
function ja(t3, e) {
  var n = /* @__PURE__ */ new Date();
  return t3 = +t3, e = +e, function(r) {
    return n.setTime(t3 * (1 - r) + e * r), n;
  };
}
function B(t3, e) {
  return t3 = +t3, e = +e, function(n) {
    return t3 * (1 - n) + e * n;
  };
}
function tc(t3, e) {
  var n = {}, r = {}, i;
  (t3 === null || typeof t3 != "object") && (t3 = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e) i in t3 ? n[i] = Ur(t3[i], e[i]) : r[i] = e[i];
  return function(s) {
    for (i in n) r[i] = n[i](s);
    return r;
  };
}
var Ie = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Se = new RegExp(Ie.source, "g");
function ec(t3) {
  return function() {
    return t3;
  };
}
function nc(t3) {
  return function(e) {
    return t3(e) + "";
  };
}
function Wr(t3, e) {
  var n = Ie.lastIndex = Se.lastIndex = 0, r, i, s, o = -1, a = [], c = [];
  for (t3 = t3 + "", e = e + ""; (r = Ie.exec(t3)) && (i = Se.exec(e)); ) (s = i.index) > n && (s = e.slice(n, s), a[o] ? a[o] += s : a[++o] = s), (r = r[0]) === (i = i[0]) ? a[o] ? a[o] += i : a[++o] = i : (a[++o] = null, c.push({ i: o, x: B(r, i) })), n = Se.lastIndex;
  return n < e.length && (s = e.slice(n), a[o] ? a[o] += s : a[++o] = s), a.length < 2 ? c[0] ? nc(c[0].x) : ec(e) : (e = c.length, function(u) {
    for (var l = 0, f; l < e; ++l) a[(f = c[l]).i] = f.x(u);
    return a.join("");
  });
}
function Ur(t3, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? en(e) : (n === "number" ? B : n === "string" ? (r = et(e)) ? (e = r, ue) : Wr : e instanceof et ? ue : e instanceof Date ? ja : Qa(e) ? Ka : Array.isArray(e) ? Ja : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? tc : B)(t3, e);
}
var qn = 180 / Math.PI, Fe = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };
function Xr(t3, e, n, r, i, s) {
  var o, a, c;
  return (o = Math.sqrt(t3 * t3 + e * e)) && (t3 /= o, e /= o), (c = t3 * n + e * r) && (n -= t3 * c, r -= e * c), (a = Math.sqrt(n * n + r * r)) && (n /= a, r /= a, c /= a), t3 * r < e * n && (t3 = -t3, e = -e, c = -c, o = -o), { translateX: i, translateY: s, rotate: Math.atan2(e, t3) * qn, skewX: Math.atan(c) * qn, scaleX: o, scaleY: a };
}
var Lt;
function rc(t3) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t3 + "");
  return e.isIdentity ? Fe : Xr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function ic(t3) {
  return t3 == null || (Lt || (Lt = document.createElementNS("http://www.w3.org/2000/svg", "g")), Lt.setAttribute("transform", t3), !(t3 = Lt.transform.baseVal.consolidate())) ? Fe : (t3 = t3.matrix, Xr(t3.a, t3.b, t3.c, t3.d, t3.e, t3.f));
}
function qr(t3, e, n, r) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, l, f, h, d, v) {
    if (u !== f || l !== h) {
      var p = d.push("translate(", null, e, null, n);
      v.push({ i: p - 4, x: B(u, f) }, { i: p - 2, x: B(l, h) });
    } else (f || h) && d.push("translate(" + f + e + h + n);
  }
  function o(u, l, f, h) {
    u !== l ? (u - l > 180 ? l += 360 : l - u > 180 && (u += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: B(u, l) })) : l && f.push(i(f) + "rotate(" + l + r);
  }
  function a(u, l, f, h) {
    u !== l ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: B(u, l) }) : l && f.push(i(f) + "skewX(" + l + r);
  }
  function c(u, l, f, h, d, v) {
    if (u !== f || l !== h) {
      var p = d.push(i(d) + "scale(", null, ",", null, ")");
      v.push({ i: p - 4, x: B(u, f) }, { i: p - 2, x: B(l, h) });
    } else (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(u, l) {
    var f = [], h = [];
    return u = t3(u), l = t3(l), s(u.translateX, u.translateY, l.translateX, l.translateY, f, h), o(u.rotate, l.rotate, f, h), a(u.skewX, l.skewX, f, h), c(u.scaleX, u.scaleY, l.scaleX, l.scaleY, f, h), u = l = null, function(d) {
      for (var v = -1, p = h.length, g; ++v < p; ) f[(g = h[v]).i] = g.x(d);
      return f.join("");
    };
  };
}
var sc = qr(rc, "px, ", "px)", "deg)"), oc = qr(ic, ", ", ")", ")");
function ac(t3, e) {
  var n, r;
  return function() {
    var i = V(this, t3), s = i.tween;
    if (s !== n) {
      r = n = s;
      for (var o = 0, a = r.length; o < a; ++o) if (r[o].name === e) {
        r = r.slice(), r.splice(o, 1);
        break;
      }
    }
    i.tween = r;
  };
}
function cc(t3, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var s = V(this, t3), o = s.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var a = { name: e, value: n }, c = 0, u = i.length; c < u; ++c) if (i[c].name === e) {
        i[c] = a;
        break;
      }
      c === u && i.push(a);
    }
    s.tween = i;
  };
}
function uc(t3, e) {
  var n = this._id;
  if (t3 += "", arguments.length < 2) {
    for (var r = I(this.node(), n).tween, i = 0, s = r.length, o; i < s; ++i) if ((o = r[i]).name === t3) return o.value;
    return null;
  }
  return this.each((e == null ? ac : cc)(n, t3, e));
}
function nn(t3, e, n) {
  var r = t3._id;
  return t3.each(function() {
    var i = V(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return I(i, r).value[e];
  };
}
function Gr(t3, e) {
  var n;
  return (typeof e == "number" ? B : e instanceof et ? ue : (n = et(e)) ? (e = n, ue) : Wr)(t3, e);
}
function lc(t3) {
  return function() {
    this.removeAttribute(t3);
  };
}
function fc(t3) {
  return function() {
    this.removeAttributeNS(t3.space, t3.local);
  };
}
function hc(t3, e, n) {
  var r, i = n + "", s;
  return function() {
    var o = this.getAttribute(t3);
    return o === i ? null : o === r ? s : s = e(r = o, n);
  };
}
function dc(t3, e, n) {
  var r, i = n + "", s;
  return function() {
    var o = this.getAttributeNS(t3.space, t3.local);
    return o === i ? null : o === r ? s : s = e(r = o, n);
  };
}
function pc(t3, e, n) {
  var r, i, s;
  return function() {
    var o, a = n(this), c;
    return a == null ? void this.removeAttribute(t3) : (o = this.getAttribute(t3), c = a + "", o === c ? null : o === r && c === i ? s : (i = c, s = e(r = o, a)));
  };
}
function vc(t3, e, n) {
  var r, i, s;
  return function() {
    var o, a = n(this), c;
    return a == null ? void this.removeAttributeNS(t3.space, t3.local) : (o = this.getAttributeNS(t3.space, t3.local), c = a + "", o === c ? null : o === r && c === i ? s : (i = c, s = e(r = o, a)));
  };
}
function gc(t3, e) {
  var n = le(t3), r = n === "transform" ? oc : Gr;
  return this.attrTween(t3, typeof e == "function" ? (n.local ? vc : pc)(n, r, nn(this, "attr." + t3, e)) : e == null ? (n.local ? fc : lc)(n) : (n.local ? dc : hc)(n, r, e));
}
function mc(t3, e) {
  return function(n) {
    this.setAttribute(t3, e.call(this, n));
  };
}
function _c(t3, e) {
  return function(n) {
    this.setAttributeNS(t3.space, t3.local, e.call(this, n));
  };
}
function yc(t3, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && _c(t3, s)), n;
  }
  return i._value = e, i;
}
function wc(t3, e) {
  var n, r;
  function i() {
    var s = e.apply(this, arguments);
    return s !== r && (n = (r = s) && mc(t3, s)), n;
  }
  return i._value = e, i;
}
function xc(t3, e) {
  var n = "attr." + t3;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = le(t3);
  return this.tween(n, (r.local ? yc : wc)(r, e));
}
function bc(t3, e) {
  return function() {
    tn(this, t3).delay = +e.apply(this, arguments);
  };
}
function Ac(t3, e) {
  return e = +e, function() {
    tn(this, t3).delay = e;
  };
}
function Cc(t3) {
  var e = this._id;
  return arguments.length ? this.each((typeof t3 == "function" ? bc : Ac)(e, t3)) : I(this.node(), e).delay;
}
function Sc(t3, e) {
  return function() {
    V(this, t3).duration = +e.apply(this, arguments);
  };
}
function Tc(t3, e) {
  return e = +e, function() {
    V(this, t3).duration = e;
  };
}
function Ec(t3) {
  var e = this._id;
  return arguments.length ? this.each((typeof t3 == "function" ? Sc : Tc)(e, t3)) : I(this.node(), e).duration;
}
function $c(t3, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    V(this, t3).ease = e;
  };
}
function kc(t3) {
  var e = this._id;
  return arguments.length ? this.each($c(e, t3)) : I(this.node(), e).ease;
}
function Rc(t3, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    V(this, t3).ease = n;
  };
}
function Nc(t3) {
  if (typeof t3 != "function") throw new Error();
  return this.each(Rc(this._id, t3));
}
function Oc(t3) {
  typeof t3 != "function" && (t3 = er(t3));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) for (var s = e[i], o = s.length, a = r[i] = [], c, u = 0; u < o; ++u) (c = s[u]) && t3.call(c, c.__data__, u, s) && a.push(c);
  return new q(r, this._parents, this._name, this._id);
}
function zc(t3) {
  if (t3._id !== this._id) throw new Error();
  for (var e = this._groups, n = t3._groups, r = e.length, i = n.length, s = Math.min(r, i), o = new Array(r), a = 0; a < s; ++a) for (var c = e[a], u = n[a], l = c.length, f = o[a] = new Array(l), h, d = 0; d < l; ++d) (h = c[d] || u[d]) && (f[d] = h);
  for (; a < r; ++a) o[a] = e[a];
  return new q(o, this._parents, this._name, this._id);
}
function Mc(t3) {
  return (t3 + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Pc(t3, e, n) {
  var r, i, s = Mc(e) ? tn : V;
  return function() {
    var o = s(this, t3), a = o.on;
    a !== r && (i = (r = a).copy()).on(e, n), o.on = i;
  };
}
function Ic(t3, e) {
  var n = this._id;
  return arguments.length < 2 ? I(this.node(), n).on.on(t3) : this.each(Pc(n, t3, e));
}
function Fc(t3) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t3) return;
    e && e.removeChild(this);
  };
}
function Lc() {
  return this.on("end.remove", Fc(this._id));
}
function Bc(t3) {
  var e = this._name, n = this._id;
  typeof t3 != "function" && (t3 = We(t3));
  for (var r = this._groups, i = r.length, s = new Array(i), o = 0; o < i; ++o) for (var a = r[o], c = a.length, u = s[o] = new Array(c), l, f, h = 0; h < c; ++h) (l = a[h]) && (f = t3.call(l, l.__data__, h, a)) && ("__data__" in l && (f.__data__ = l.__data__), u[h] = f, ve(u[h], e, n, h, u, I(l, n)));
  return new q(s, this._parents, e, n);
}
function Dc(t3) {
  var e = this._name, n = this._id;
  typeof t3 != "function" && (t3 = tr(t3));
  for (var r = this._groups, i = r.length, s = [], o = [], a = 0; a < i; ++a) for (var c = r[a], u = c.length, l, f = 0; f < u; ++f) if (l = c[f]) {
    for (var h = t3.call(l, l.__data__, f, c), d, v = I(l, n), p = 0, g = h.length; p < g; ++p) (d = h[p]) && ve(d, e, n, p, h, v);
    s.push(h), o.push(l);
  }
  return new q(s, o, e, n);
}
var Hc = $t.prototype.constructor;
function Vc() {
  return new Hc(this._groups, this._parents);
}
function Wc(t3, e) {
  var n, r, i;
  return function() {
    var s = ct(this, t3), o = (this.style.removeProperty(t3), ct(this, t3));
    return s === o ? null : s === n && o === r ? i : i = e(n = s, r = o);
  };
}
function Yr(t3) {
  return function() {
    this.style.removeProperty(t3);
  };
}
function Uc(t3, e, n) {
  var r, i = n + "", s;
  return function() {
    var o = ct(this, t3);
    return o === i ? null : o === r ? s : s = e(r = o, n);
  };
}
function Xc(t3, e, n) {
  var r, i, s;
  return function() {
    var o = ct(this, t3), a = n(this), c = a + "";
    return a == null && (c = a = (this.style.removeProperty(t3), ct(this, t3))), o === c ? null : o === r && c === i ? s : (i = c, s = e(r = o, a));
  };
}
function qc(t3, e) {
  var n, r, i, s = "style." + e, o = "end." + s, a;
  return function() {
    var c = V(this, t3), u = c.on, l = c.value[s] == null ? a || (a = Yr(e)) : void 0;
    (u !== n || i !== l) && (r = (n = u).copy()).on(o, i = l), c.on = r;
  };
}
function Gc(t3, e, n) {
  var r = (t3 += "") == "transform" ? sc : Gr;
  return e == null ? this.styleTween(t3, Wc(t3, r)).on("end.style." + t3, Yr(t3)) : typeof e == "function" ? this.styleTween(t3, Xc(t3, r, nn(this, "style." + t3, e))).each(qc(this._id, t3)) : this.styleTween(t3, Uc(t3, r, e), n).on("end.style." + t3, null);
}
function Yc(t3, e, n) {
  return function(r) {
    this.style.setProperty(t3, e.call(this, r), n);
  };
}
function Zc(t3, e, n) {
  var r, i;
  function s() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && Yc(t3, o, n)), r;
  }
  return s._value = e, s;
}
function Kc(t3, e, n) {
  var r = "style." + (t3 += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, Zc(t3, e, n ?? ""));
}
function Qc(t3) {
  return function() {
    this.textContent = t3;
  };
}
function Jc(t3) {
  return function() {
    var e = t3(this);
    this.textContent = e ?? "";
  };
}
function jc(t3) {
  return this.tween("text", typeof t3 == "function" ? Jc(nn(this, "text", t3)) : Qc(t3 == null ? "" : t3 + ""));
}
function tu(t3) {
  return function(e) {
    this.textContent = t3.call(this, e);
  };
}
function eu(t3) {
  var e, n;
  function r() {
    var i = t3.apply(this, arguments);
    return i !== n && (e = (n = i) && tu(i)), e;
  }
  return r._value = t3, r;
}
function nu(t3) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t3 == null) return this.tween(e, null);
  if (typeof t3 != "function") throw new Error();
  return this.tween(e, eu(t3));
}
function ru() {
  for (var t3 = this._name, e = this._id, n = Zr(), r = this._groups, i = r.length, s = 0; s < i; ++s) for (var o = r[s], a = o.length, c, u = 0; u < a; ++u) if (c = o[u]) {
    var l = I(c, e);
    ve(c, t3, n, u, o, { time: l.time + l.delay + l.duration, delay: 0, duration: l.duration, ease: l.ease });
  }
  return new q(r, this._parents, t3, n);
}
function iu() {
  var t3, e, n = this, r = n._id, i = n.size();
  return new Promise(function(s, o) {
    var a = { value: o }, c = { value: function() {
      --i === 0 && s();
    } };
    n.each(function() {
      var u = V(this, r), l = u.on;
      l !== t3 && (e = (t3 = l).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(c)), u.on = e;
    }), i === 0 && s();
  });
}
var su = 0;
function q(t3, e, n, r) {
  this._groups = t3, this._parents = e, this._name = n, this._id = r;
}
function Zr() {
  return ++su;
}
var U = $t.prototype;
q.prototype = { constructor: q, select: Bc, selectAll: Dc, selectChild: U.selectChild, selectChildren: U.selectChildren, filter: Oc, merge: zc, selection: Vc, transition: ru, call: U.call, nodes: U.nodes, node: U.node, size: U.size, empty: U.empty, each: U.each, on: Ic, attr: gc, attrTween: xc, style: Gc, styleTween: Kc, text: jc, textTween: nu, remove: Lc, tween: uc, delay: Cc, duration: Ec, ease: kc, easeVarying: Nc, end: iu, [Symbol.iterator]: U[Symbol.iterator] };
function ou(t3) {
  return ((t3 *= 2) <= 1 ? t3 * t3 * t3 : (t3 -= 2) * t3 * t3 + 2) / 2;
}
var au = { time: null, delay: 0, duration: 250, ease: ou };
function cu(t3, e) {
  for (var n; !(n = t3.__transition) || !(n = n[e]); ) if (!(t3 = t3.parentNode)) throw new Error(`transition ${e} not found`);
  return n;
}
function uu(t3) {
  var e, n;
  t3 instanceof q ? (e = t3._id, t3 = t3._name) : (e = Zr(), (n = au).time = je(), t3 = t3 == null ? null : t3 + "");
  for (var r = this._groups, i = r.length, s = 0; s < i; ++s) for (var o = r[s], a = o.length, c, u = 0; u < a; ++u) (c = o[u]) && ve(c, t3, e, u, o, n || cu(c, e));
  return new q(r, this._parents, t3, e);
}
$t.prototype.interrupt = qa;
$t.prototype.transition = uu;
function Gu(t3, e, n) {
  if (t3.nodes().forEach((r) => Hr(r)), e) {
    const r = t3.transition().duration(e);
    return n && r.ease(n), r;
  } else return t3;
}
class Kr {
  constructor(e) {
    this.data = e;
  }
  get data() {
    return this._data;
  }
  set data(e) {
    this._data = e;
  }
}
const lu = { duration: 600, events: {}, attributes: {} };
class Yu {
  constructor(e = yt.SVG) {
    var n, r;
    this.type = yt.SVG, this.datamodel = new Kr(), this.sizing = ut.Fit, this.events = {}, this._defaultConfig = lu, this._width = 400, this._height = 200, this._containerWidth = void 0, this._containerHeight = void 0, this._setUpComponentEventsThrottled = jt(this._setUpComponentEvents, 500), this._setCustomAttributesThrottled = jt(this._setCustomAttributes, 500), e === yt.SVG ? this.element = document.createElementNS("http://www.w3.org/2000/svg", "g") : this.element = document.createElement("div"), this.uid = ga(), this.g = rt(this.element);
    const i = (r = (n = this.constructor) === null || n === void 0 ? void 0 : n.selectors) === null || r === void 0 ? void 0 : r.root;
    i && this.g.attr("class", i);
  }
  setConfig(e) {
    this.prevConfig = this.config, this.config = lt(this._defaultConfig, e);
  }
  setData(e) {
    this.datamodel.data = e;
  }
  setSize(e, n, r, i) {
    isFinite(e) && (this._width = e), isFinite(n) && (this._height = n), isFinite(r) && (this._containerWidth = r), isFinite(i) && (this._containerHeight = i);
  }
  render(e = this.config.duration) {
    this._render(e);
    const n = "animating";
    e && (this.g.attr(n, ""), this.g.transition(n).duration(e).on("end interrupt", () => {
      this.g.attr(n, null);
    })), this._setUpComponentEventsThrottled(), this._setCustomAttributesThrottled();
  }
  get bleed() {
    return { top: 0, bottom: 0, left: 0, right: 0 };
  }
  _render(e = this.config.duration) {
  }
  _setCustomAttributes() {
    const e = this.config.attributes;
    Object.keys(e).forEach((n) => {
      Object.keys(e[n]).forEach((r) => {
        this.g.selectAll(`.${n}`).attr(r, e[n][r]);
      });
    });
  }
  _setUpComponentEvents() {
    this._bindEvents(this.events), this._bindEvents(this.config.events, ".user");
  }
  _bindEvents(e = this.events, n = "") {
    Object.keys(e).forEach((r) => {
      Object.keys(e[r]).forEach((i) => {
        const s = this.g.selectAll(`.${r}`);
        s.on(i + n, (o, a) => {
          const c = s.nodes(), u = c.indexOf(o.currentTarget), l = e[r][i];
          return l == null ? void 0 : l(a, o, u, c);
        });
      });
    });
  }
  destroy() {
    var e;
    (e = this.g) === null || e === void 0 || e.remove(), this.element = void 0;
  }
  isDestroyed() {
    return !this.element;
  }
}
class Zu extends Kr {
  constructor(e) {
    super(e);
  }
  get data() {
    var e;
    return (e = this._data) !== null && e !== void 0 ? e : [];
  }
  set data(e) {
    Array.isArray(e) && (this._data = e);
  }
}
var C;
(function(t3) {
  t3.Top = "top", t3.Bottom = "bottom", t3.Left = "left", t3.Right = "right", t3.Center = "center", t3.Auto = "auto";
})(C || (C = {}));
var Gn;
(function(t3) {
  t3.Absolute = "absolute", t3.Fixed = "fixed";
})(Gn || (Gn = {}));
var Yn;
(function(t3) {
  t3.Inside = "inside", t3.Outside = "outside";
})(Yn || (Yn = {}));
var Zn;
(function(t3) {
  t3.Horizontal = "horizontal", t3.Vertical = "vertical";
})(Zn || (Zn = {}));
const fu = { components: [], container: void 0, followCursor: true, allowHover: true, horizontalPlacement: C.Auto, horizontalShift: 0, verticalPlacement: C.Top, verticalShift: 0, attributes: {}, triggers: {}, className: void 0 }, ge = Rt`
  label: tooltip;
  display: inline-block;
  left: 0;
  bottom: 0;
  min-width: max-content;
  position: absolute;
  opacity: 0;
  transition: opacity;
  transition-duration: var(--vis-tooltip-transition-duration);
  z-index: 999999;
  padding: var(--vis-tooltip-padding);
  color: var(--vis-tooltip-text-color);
  border-radius: var(--vis-tooltip-border-radius);
  box-shadow: var(--vis-tooltip-box-shadow);
  border: solid 1px var(--vis-tooltip-border-color);
  background-color: var(--vis-tooltip-background-color);
  backdrop-filter: var(--vis-tooltip-backdrop-filter);
`, hu = ge, du = Rr`
  :root {
    --vis-tooltip-background-color: rgba(255, 255, 255, 0.95);
    --vis-tooltip-border-color: #e5e9f7;
    --vis-tooltip-text-color: #000;
    --vis-tooltip-shadow-color: rgba(172, 179, 184, 0.35);
    --vis-tooltip-backdrop-filter: none;
    --vis-tooltip-padding: 10px 15px;
    --vis-tooltip-border-radius: 5px;
    --vis-tooltip-transition-duration: 300ms;
    --vis-tooltip-box-shadow: none;

    --vis-dark-tooltip-background-color: rgba(30,30,30, 0.95);
    --vis-dark-tooltip-text-color: #e5e9f7;
    --vis-dark-tooltip-border-color: var(--vis-color-grey);
    --vis-dark-tooltip-shadow-color: rgba(0,0,0, 0.95);
  }

  body.theme-dark ${`.${ge}`} {
    --vis-tooltip-background-color: var(--vis-dark-tooltip-background-color);
    --vis-tooltip-text-color: var(--vis-dark-tooltip-text-color);
    --vis-tooltip-border-color: var(--vis-dark-tooltip-border-color);
    --vis-tooltip-shadow-color: var(--vis-dark-tooltip-shadow-color);
  }

  body.theme-dark {
    --vis-tooltip-background-color: rgba(30,30,30, 0.95);
    --vis-tooltip-text-color: #e5e9f7;
    --vis-tooltip-border-color: var(--vis-color-grey);
    --vis-tooltip-shadow-color: rgba(0,0,0, 0.95);
  }
`, Qr = Rt`
  bottom: unset;
  position: fixed;
`, Le = Rt`
  opacity: 1;
`, Be = Rt`
  display: none;
`, Jr = Rt`
  label: non-interactive;
  pointer-events: none;
  user-select: none;
`, pu = Object.freeze(Object.defineProperty({ __proto__: null, hidden: Be, nonInteractive: Jr, positionFixed: Qr, root: ge, show: Le, tooltip: hu, variables: du }, Symbol.toStringTag, { value: "Module" }));
class jr {
  constructor(e = {}) {
    this._defaultConfig = fu, this.config = this._defaultConfig, this._setUpEventsThrottled = jt(this._setUpEvents, 500), this._setContainerPositionThrottled = jt(this._setContainerPosition, 500), this._isShown = false, this.element = document.createElement("div"), this.div = rt(this.element).attr("class", ge), this.setConfig(e), this.components = this.config.components, this._mutationObserver = new MutationObserver(() => {
      this._isShown && (!this.config.followCursor && this._hoveredElement ? this.placeByElement(this._hoveredElement) : this._position && this.place({ x: this._position[0], y: this._position[1] }));
    }), this._mutationObserver.observe(this.div.node(), { childList: true, subtree: true });
  }
  setConfig(e) {
    var n;
    this.prevConfig = this.config, this.config = lt(this._defaultConfig, e), this.prevConfig.horizontalPlacement !== this.config.horizontalPlacement && this.overrideHorizontalPlacement(void 0), this.config.container && this.config.container !== ((n = this.prevConfig) === null || n === void 0 ? void 0 : n.container) && this.setContainer(this.config.container), this._setUpAttributes();
  }
  setContainer(e) {
    var n;
    (n = this.element.parentNode) === null || n === void 0 || n.removeChild(this.element), this._container = e, this._container.appendChild(this.element), this._setContainerPositionThrottled();
  }
  getContainer() {
    return this._container;
  }
  hasContainer() {
    return !!this._container && this._container.isConnected;
  }
  setComponents(e) {
    this.components = e;
  }
  update() {
    this._container && this._setUpEventsThrottled();
  }
  show(e, n) {
    this.render(e), this.place(n);
  }
  hide() {
    this.div.classed(Le, false).on("transitionend", () => {
      this.div.classed(Be, !this._isShown);
    }), this._isShown = false;
  }
  display() {
    this.div.classed(Be, false).classed(Le, true), this._isShown = true;
  }
  place(e) {
    if (this._position = [e.x, e.y], !this.hasContainer()) {
      console.warn("Unovis | Tooltip: Container was not set or is not initialized yet");
      return;
    }
    const { config: n } = this, r = this.element.offsetWidth, i = this.element.offsetHeight, s = this._overriddenHorizontalPlacement || (n.horizontalPlacement === C.Auto ? C.Center : n.horizontalPlacement), o = n.verticalPlacement === C.Auto ? e.y - i < 0 ? C.Bottom : C.Top : n.verticalPlacement, a = 5, c = s === C.Left ? -r - a - n.horizontalShift : s === C.Center ? -r / 2 : a + n.horizontalShift, u = o === C.Bottom ? a + n.verticalShift : o === C.Center ? -i / 2 : -5 - n.verticalShift - i, [l, f] = this._constraintPosToContainer(e.x + c, e.y + u, r, i);
    this._applyPosition(l, f, i);
  }
  placeByElement(e) {
    const { config: n } = this;
    this._hoveredElement = e;
    const r = 5, i = this.element.offsetWidth, s = this.element.offsetHeight, o = this.isContainerBody(), a = o ? window.innerWidth : this._container.scrollWidth, c = e.getBoundingClientRect(), u = o ? [c.x, c.y] : cn({ clientX: c.x, clientY: c.y, pageX: c.x, pageY: c.y }, this._container), l = this._overriddenHorizontalPlacement || (n.horizontalPlacement === C.Auto ? u[0] - i < 0 ? C.Right : u[0] + i > a ? C.Left : C.Center : n.horizontalPlacement);
    let f = 0;
    switch (l) {
      case C.Left:
        f = -i - r - n.horizontalShift;
        break;
      case C.Right:
        f = c.width + r + n.horizontalShift;
        break;
      case C.Center:
      default:
        f = (-i + c.width) / 2;
        break;
    }
    const h = n.verticalPlacement === C.Auto ? l !== C.Center ? C.Center : u[1] - s < 0 ? C.Bottom : C.Top : n.verticalPlacement;
    let d = -s;
    switch (h) {
      case C.Center:
        d += (s + c.height) / 2;
        break;
      case C.Bottom:
        d += s + c.height + r + n.verticalShift;
        break;
      case C.Top:
      default:
        d += -5 - n.verticalShift;
        break;
    }
    const [v, p] = this._constraintPosToContainer(u[0] + f, u[1] + d, i, s);
    this._applyPosition(v, p, s);
  }
  isContainerBody() {
    return this._container === document.body;
  }
  overrideHorizontalPlacement(e) {
    this._overriddenHorizontalPlacement = e;
  }
  render(e) {
    var n;
    const { config: r, prevConfig: i } = this;
    e instanceof HTMLElement ? this.div.select(":first-child").node() !== e && this.div.html("").append(() => e) : e && this.div.html(e), this.div.classed((n = r.className) !== null && n !== void 0 ? n : "", !!r.className).classed(Jr, !r.allowHover || r.followCursor), (i == null ? void 0 : i.className) && i.className !== r.className && this.div.classed(i.className, false), this.display();
  }
  _applyPosition(e, n, r) {
    const i = this.isContainerBody(), s = i ? window.innerHeight : this._container.scrollHeight;
    this.div.classed(Qr, i).style("top", i ? `${n}px` : "unset").style("bottom", i ? "unset" : `${s - n - r}px`).style("left", `${e}px`);
  }
  _constraintPosToContainer(e, n, r, i) {
    const s = this.isContainerBody(), o = s ? window.innerHeight : this._container.scrollHeight, a = s ? window.innerWidth : this._container.scrollWidth, c = 10, u = e > a - r - c, l = e < c, f = u ? a - r - c : l ? c : e, h = 10, d = n > o - i - h, v = n < h, p = d ? o - i - h : v ? h : n;
    return [a < r ? 0 : f, o < i ? 0 : p];
  }
  _setContainerPosition() {
    var e;
    this._container !== document.body && ((e = getComputedStyle(this._container)) === null || e === void 0 ? void 0 : e.position) === "static" && (this._container.style.position = "relative");
  }
  _setUpEvents() {
    const { config: e } = this;
    this.components.forEach((n) => {
      const r = rt(n.element);
      r.on("mousemove.tooltip", (i) => {
        const s = i.composedPath && i.composedPath() || i.path || [i.target];
        for (const o of Object.keys(e.triggers)) {
          const a = e.triggers[o];
          if (!a) continue;
          const c = r.selectAll(`.${o}`).nodes();
          for (const u of s) {
            if (u === r.node()) break;
            if (u.classList.contains(o)) {
              const l = c.indexOf(u), f = rt(u).datum(), h = a(f, l, c), [d, v] = this.isContainerBody() ? [i.clientX, i.clientY] : cn(i, this._container);
              h === null ? this.hide() : (this.render(h), e.followCursor ? this.place({ x: d, y: v }) : this.placeByElement(u)), i.stopPropagation();
              return;
            }
          }
        }
        this._isShown && this.hide();
      }).on("mouseleave.tooltip", (i) => {
        i.stopPropagation(), this.hide();
      });
    }), e.allowHover && !e.followCursor ? this.div.on("mouseenter.tooltip", this.display.bind(this)).on("mouseleave.tooltip", this.hide.bind(this)) : this.div.on("mouseenter.tooltip", null).on("mouseleave.tooltip", null);
  }
  _setUpAttributes() {
    const e = this.config.attributes;
    e && Object.keys(e).forEach((n) => {
      this.div.attr(n, e[n]);
    });
  }
  destroy() {
    var e;
    this._mutationObserver.disconnect(), (e = this.div) === null || e === void 0 || e.remove();
  }
}
jr.selectors = pu;
var De = Math.PI, He = 2 * De, K = 1e-6, vu = He - K;
function Ve() {
  this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = "";
}
function gu() {
  return new Ve();
}
Ve.prototype = gu.prototype = { constructor: Ve, moveTo: function(t3, e) {
  this._ += "M" + (this._x0 = this._x1 = +t3) + "," + (this._y0 = this._y1 = +e);
}, closePath: function() {
  this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._ += "Z");
}, lineTo: function(t3, e) {
  this._ += "L" + (this._x1 = +t3) + "," + (this._y1 = +e);
}, quadraticCurveTo: function(t3, e, n, r) {
  this._ += "Q" + +t3 + "," + +e + "," + (this._x1 = +n) + "," + (this._y1 = +r);
}, bezierCurveTo: function(t3, e, n, r, i, s) {
  this._ += "C" + +t3 + "," + +e + "," + +n + "," + +r + "," + (this._x1 = +i) + "," + (this._y1 = +s);
}, arcTo: function(t3, e, n, r, i) {
  t3 = +t3, e = +e, n = +n, r = +r, i = +i;
  var s = this._x1, o = this._y1, a = n - t3, c = r - e, u = s - t3, l = o - e, f = u * u + l * l;
  if (i < 0) throw new Error("negative radius: " + i);
  if (this._x1 === null) this._ += "M" + (this._x1 = t3) + "," + (this._y1 = e);
  else if (f > K) if (!(Math.abs(l * a - c * u) > K) || !i) this._ += "L" + (this._x1 = t3) + "," + (this._y1 = e);
  else {
    var h = n - s, d = r - o, v = a * a + c * c, p = h * h + d * d, g = Math.sqrt(v), y = Math.sqrt(f), m = i * Math.tan((De - Math.acos((v + f - p) / (2 * g * y))) / 2), _ = m / y, T = m / g;
    Math.abs(_ - 1) > K && (this._ += "L" + (t3 + _ * u) + "," + (e + _ * l)), this._ += "A" + i + "," + i + ",0,0," + +(l * h > u * d) + "," + (this._x1 = t3 + T * a) + "," + (this._y1 = e + T * c);
  }
}, arc: function(t3, e, n, r, i, s) {
  t3 = +t3, e = +e, n = +n, s = !!s;
  var o = n * Math.cos(r), a = n * Math.sin(r), c = t3 + o, u = e + a, l = 1 ^ s, f = s ? r - i : i - r;
  if (n < 0) throw new Error("negative radius: " + n);
  this._x1 === null ? this._ += "M" + c + "," + u : (Math.abs(this._x1 - c) > K || Math.abs(this._y1 - u) > K) && (this._ += "L" + c + "," + u), n && (f < 0 && (f = f % He + He), f > vu ? this._ += "A" + n + "," + n + ",0,1," + l + "," + (t3 - o) + "," + (e - a) + "A" + n + "," + n + ",0,1," + l + "," + (this._x1 = c) + "," + (this._y1 = u) : f > K && (this._ += "A" + n + "," + n + ",0," + +(f >= De) + "," + l + "," + (this._x1 = t3 + n * Math.cos(i)) + "," + (this._y1 = e + n * Math.sin(i))));
}, rect: function(t3, e, n, r) {
  this._ += "M" + (this._x0 = this._x1 = +t3) + "," + (this._y0 = this._y1 = +e) + "h" + +n + "v" + +r + "h" + -n + "Z";
}, toString: function() {
  return this._;
} };
function Ku(t3) {
  return function() {
    return t3;
  };
}
var Qu = Math.abs, Ju = Math.atan2, ju = Math.cos, tl = Math.max, el = Math.min, nl = Math.sin, rl = Math.sqrt, il = 1e-12, rn = Math.PI, Kn = rn / 2, sl = 2 * rn;
function ol(t3) {
  return t3 > 1 ? 0 : t3 < -1 ? rn : Math.acos(t3);
}
function al(t3) {
  return t3 >= 1 ? Kn : t3 <= -1 ? -Kn : Math.asin(t3);
}
function cl(t3, e, n, r) {
  return Array.isArray(e) && isFinite(n) ? e[n % e.length] : no(t3, e, n) || (Xe(n) ? `var(${G(n)})` : null);
}
var at;
(function(t3) {
  t3.Start = "start", t3.Middle = "middle", t3.End = "end";
})(at || (at = {}));
var wt;
(function(t3) {
  t3.Top = "top", t3.Middle = "middle", t3.Bottom = "bottom";
})(wt || (wt = {}));
var Qn;
(function(t3) {
  t3.Wrap = "wrap", t3.Trim = "trim";
})(Qn || (Qn = {}));
var xt;
(function(t3) {
  t3.Left = "left", t3.Center = "center", t3.Right = "right";
})(xt || (xt = {}));
var qt = { exports: {} }, mu = qt.exports, Jn;
function _u() {
  return Jn || (Jn = 1, function(t3) {
    (function(e) {
      if (typeof n != "function") {
        var n = function(v) {
          return v;
        };
        n.nonNative = true;
      }
      const r = n("plaintext"), i = n("html"), s = n("comment"), o = /<(\w*)>/g, a = /<\/?([^\s\/>]+)/;
      function c(v, p, g) {
        v = v || "", p = p || [], g = g || "";
        let y = l(p, g);
        return f(v, y);
      }
      function u(v, p) {
        v = v || [], p = p || "";
        let g = l(v, p);
        return function(m) {
          return f(m || "", g);
        };
      }
      c.init_streaming_mode = u;
      function l(v, p) {
        return v = h(v), { allowable_tags: v, tag_replacement: p, state: r, tag_buffer: "", depth: 0, in_quote_char: "" };
      }
      function f(v, p) {
        if (typeof v != "string") throw new TypeError("'html' parameter must be a string");
        let g = p.allowable_tags, y = p.tag_replacement, m = p.state, _ = p.tag_buffer, T = p.depth, w = p.in_quote_char, S = "";
        for (let x = 0, W = v.length; x < W; x++) {
          let $ = v[x];
          if (m === r) switch ($) {
            case "<":
              m = i, _ += $;
              break;
            default:
              S += $;
              break;
          }
          else if (m === i) switch ($) {
            case "<":
              if (w) break;
              T++;
              break;
            case ">":
              if (w) break;
              if (T) {
                T--;
                break;
              }
              w = "", m = r, _ += ">", g.has(d(_)) ? S += _ : S += y, _ = "";
              break;
            case '"':
            case "'":
              $ === w ? w = "" : w = w || $, _ += $;
              break;
            case "-":
              _ === "<!-" && (m = s), _ += $;
              break;
            case " ":
            case `
`:
              if (_ === "<") {
                m = r, S += "< ", _ = "";
                break;
              }
              _ += $;
              break;
            default:
              _ += $;
              break;
          }
          else if (m === s) switch ($) {
            case ">":
              _.slice(-2) == "--" && (m = r), _ = "";
              break;
            default:
              _ += $;
              break;
          }
        }
        return p.state = m, p.tag_buffer = _, p.depth = T, p.in_quote_char = w, S;
      }
      function h(v) {
        let p = /* @__PURE__ */ new Set();
        if (typeof v == "string") {
          let g;
          for (; g = o.exec(v); ) p.add(g[1]);
        } else !n.nonNative && typeof v[n.iterator] == "function" ? p = new Set(v) : typeof v.forEach == "function" && v.forEach(p.add, p);
        return p;
      }
      function d(v) {
        let p = a.exec(v);
        return p ? p[1].toLowerCase() : null;
      }
      t3.exports ? t3.exports = c : e.striptags = c;
    })(mu);
  }(qt)), qt.exports;
}
var yu = _u();
const wu = ri(yu);
function xu(t3) {
  switch (t3) {
    case xt.Center:
      return "middle";
    case xt.Right:
      return "end";
    case xt.Left:
    default:
      return "start";
  }
}
function bu(t3) {
  var e;
  return (e = t3.match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)) === null || e === void 0 ? void 0 : e.filter(Boolean).map((n) => n.toLowerCase()).join("-");
}
function Au(t3) {
  return t3.replace(/['"]/g, "&#39;").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\t/g, "\\t").replace(/\f/g, "\\f");
}
function Cu(t3, e = 15) {
  return t3 ? t3.length > e ? `\u2026${t3.substr(t3.length - e, e)}` : t3 : "";
}
function Su(t3, e = 15) {
  if (!t3) return "";
  const n = Math.floor((e - 3) / 2);
  return t3.length > e ? `${t3.substr(0, n)}\u2026${t3.substr(-n, n)}` : t3;
}
function Tu(t3, e = 15) {
  return t3 ? t3.length > e ? `${t3.substr(0, e)}\u2026` : t3 : "";
}
function Eu(t3, e = 15, n = at.Middle) {
  if (!t3) return "";
  let r = Tu(t3, e);
  return n === at.Start ? r = Cu(t3, e) : n === at.Middle && (r = Su(t3, e)), r;
}
function ti(t3, e = [" "]) {
  let n = [t3];
  for (let r = 0; r < e.length; r++) {
    const i = e[r];
    n.forEach((s, o) => {
      const a = s.split(i), c = a.map((u, l) => `${u}${l === a.length - 1 ? "" : i}`);
      n[o] = c;
    }), n = eo(n);
  }
  return n;
}
function ul(t3, e, n = [" ", "-", ".", ","]) {
  const r = t3.text();
  if (!r) return;
  const i = qe(n) ? n : [n], s = ti(r, i), o = parseFloat(t3.attr("x")) || 0;
  t3.text("");
  let a = t3.append("tspan").attr("x", o), c = `${s[0]}`;
  a.text(c), s.forEach((u, l) => {
    if (l === 0) return;
    const f = `${c}${u}`;
    a.text(f), a.node().getComputedTextLength() > e ? (a.text(c.trim()), a = t3.append("tspan").attr("x", o).attr("dy", "1.2em").text(u), c = u) : c += u;
  });
}
function ll(t3, e, n, r, i, s) {
  var o;
  e === void 0 && (e = 50), n === void 0 && (n = at.Middle), i === void 0 && (i = +((o = window.getComputedStyle(t3.node())) === null || o === void 0 ? void 0 : o.fontSize) || 0);
  const a = t3.text(), c = a.length, u = i * c * s, f = Math.ceil(c * e / (1.1 * u));
  return f < c ? (t3.text(Eu(a, f, n)), true) : false;
}
function Gt(t3, e, n = Pa()) {
  return t3.length * e * n || 0;
}
function Yt(t3, e, n) {
  const r = "http://www.w3.org/2000/svg", i = document.createElementNS(r, "svg"), s = document.createElementNS(r, "text");
  s.textContent = t3, s.setAttribute("font-size", `${n}`), s.setAttribute("font-family", e), i.appendChild(s), document.body.appendChild(i);
  const o = s.getComputedTextLength();
  return document.body.removeChild(i), o;
}
function $u(t3, e = void 0, n = true, r = Mr, i = false) {
  const s = `${t3.text}`;
  if (!s) return [];
  const o = Array.isArray(r) ? r : [r];
  return s.split(`
`).map((c) => {
    const u = [];
    if (!e) return [c];
    const l = ti(c, o);
    let f = "";
    for (let h = 0; h < l.length; h += 1) {
      (n ? Gt(f + l[h], t3.fontSize, t3.fontWidthToHeightRatio) : Yt(f + l[h], t3.fontFamily, t3.fontSize)) < e || h === 0 ? f += l[h] : (u.push(f.trim()), f = l[h]);
      const v = 2;
      if (i) for (; f.trim().length > v && (n ? Gt(f, t3.fontSize, t3.fontWidthToHeightRatio) : Yt(f, t3.fontFamily, t3.fontSize)) > e; ) {
        let g = f.trim().length - v;
        for (; g > 0; ) {
          const y = `${f.substring(0, g)}${Pr}`;
          if ((n ? Gt(y, t3.fontSize, t3.fontWidthToHeightRatio) : Yt(y, t3.fontFamily, t3.fontSize)) <= e || g === 1) {
            u.push(y.trim()), f = f.substring(g);
            break;
          }
          g--;
        }
      }
    }
    return f && u.push(f.trim()), u;
  }).flat();
}
function ku(t3, e = void 0, n = void 0, r = true, i = Mr, s = false) {
  const o = Array.isArray(t3) ? t3.map((f) => lt(Dn, f)) : [lt(Dn, t3)], a = o.map((f) => $u(f, e, r, i, s)), c = o[0];
  let u = -c.fontSize * (c.lineHeight - 1);
  const l = [];
  return o.forEach((f, h) => {
    var d;
    let v = a[h];
    const p = h > 0 ? l[h - 1] : void 0, g = p ? p.marginBottom : 0, y = f.marginTop, m = Math.max(g, y);
    u += m;
    const _ = f.fontSize * f.lineHeight;
    let T = 0;
    for (let w = 0; w < v.length; w += 1) {
      let S = v[w];
      u += _;
      const x = `${S} \u2026`, W = r ? Gt(x, f.fontSize, f.fontWidthToHeightRatio) : Yt(x, f.fontFamily, f.fontSize);
      if (T = Math.max(W, T), n && u + _ > n && w !== v.length - 1) {
        S.charAt(S.length - 1) === Pr && (S = S.substr(0, v[w].length - 1)), W < e ? v[w] = x : v[w] = `${v[w].substr(0, v[w].length - 2)}\u2026`, v = v.slice(0, w + 1);
        break;
      }
    }
    l.push(Object.assign(Object.assign({}, f), { _lines: v, _estimatedHeight: u - ((p == null ? void 0 : p._estimatedHeight) || 0), _maxWidth: Math.max(T, (d = p == null ? void 0 : p._maxWidth) !== null && d !== void 0 ? d : 0) }));
  }), l;
}
function Ru(t3, e = 0, n) {
  return t3.map((r, i) => {
    const s = i > 0 ? t3[i - 1] : void 0, o = s ? s.marginBottom / s.fontSize : 0, a = r.marginTop / r.fontSize, c = Math.max(o, a), u = { fontSize: r.fontSize, fontFamily: r.fontFamily, fontWeight: r.fontWeight, fill: r.color, y: i === 0 && n };
    return `<tspan xmlns="http://www.w3.org/2000/svg" ${Object.entries(u).filter(([f, h]) => h).map(([f, h]) => `${bu(f)}="${Au(h.toString())}"`).join(" ")}>${r._lines.map((f, h) => {
      let d;
      return i === 0 && h === 0 ? d = 0.8 + c : h === 0 ? d = c + r.lineHeight : d = r.lineHeight, `<tspan x="${e}" dy="${d}em">${f.length ? f : "\xA0"}</tspan>`;
    }).join("")}</tspan>`;
  });
}
function Nu(t3) {
  return Js(t3, (e) => e._estimatedHeight);
}
const Ou = ["text", "tspan", "textPath", "altGlyph", "altGlyphDef", "altGlyphItem", "glyphRef", "textRef", "textArea"];
function fl(t3, e, n, r) {
  var i, s;
  const o = ku(e, n.width, void 0, n.fastMode, n.separator, n.wordBreak), a = (i = n.x) !== null && i !== void 0 ? i : +t3.getAttribute("x"), c = (s = n.y) !== null && s !== void 0 ? s : +t3.getAttribute("y"), u = a ?? 0;
  let l = c ?? 0;
  if (n.textAlign && t3.setAttribute("text-anchor", xu(n.textAlign)), n.verticalAlign && n.verticalAlign !== wt.Top) {
    const f = Nu(o), h = n.verticalAlign === wt.Middle ? -f / 2 : n.verticalAlign === wt.Bottom ? -f : 0;
    l += h;
  }
  n.textRotationAngle ? t3.setAttribute("transform", `rotate(${n.textRotationAngle === 0 || n.textRotationAngle ? n.textRotationAngle : 0} ${u} ${l})`) : t3.removeAttribute("transform");
  {
    const f = new DOMParser();
    t3.textContent = "", o.forEach((h) => {
      const d = Ru([h], u, l).join(""), v = wu(d, Ou), p = f.parseFromString(v, "image/svg+xml").firstChild;
      t3.appendChild(p);
    });
  }
}
const hl = Symbol("componentAccessorKey"), zu = Symbol("tooltipAccessorKey"), dl = Symbol("crosshairAccessorKey"), pl = Symbol("axisAccessorKey"), vl = Symbol("annotationsAccessorKey");
function Mu(t3, e) {
  return Qt(t3, e);
}
function Pu(t3) {
  const e = ii(), n = e.attrs;
  return si(() => {
    const r = {}, i = (e == null ? void 0 : e.vnode.props) ?? {};
    return Object.keys(i).forEach((s) => {
      r[on(s)] = t3[on(s)];
    }), { ...r, ...n };
  });
}
const Iu = { "data-vis-tooltip": "" }, gl = oi({ __name: "index", props: { components: {}, container: {}, followCursor: { type: Boolean }, allowHover: { type: Boolean }, horizontalPlacement: {}, horizontalShift: {}, verticalPlacement: {}, verticalShift: {}, triggers: {}, attributes: {}, className: {}, data: {} }, setup(t3, { expose: e }) {
  const n = ai(zu), r = Pu(t3), i = ci();
  return li(() => {
    fi(() => {
      i.value = new jr(r.value), n.update(i.value);
    });
  }), hi(() => {
    var s;
    (s = i.value) == null || s.destroy(), n.destroy();
  }), di(r, (s, o) => {
    var a;
    Mu(s, o) || (a = i.value) == null || a.setConfig(r.value);
  }), e({ component: i }), (s, o) => (pi(), ui("div", Iu));
} });
(function() {
  try {
    if (typeof document < "u") {
      var t3 = document.createElement("style");
      t3.appendChild(document.createTextNode(".unovis-xy-container,.unovis-single-container{display:block;position:relative;width:100%}[data-vis-leaflet-map],[data-vis-leaflet-flow-map]{display:block;position:relative}[data-vis-bullet-legend]{display:block}")), document.head.appendChild(t3);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
export {
  ut as $,
  Gu as A,
  Qt as B,
  $o as C,
  Hr as D,
  ll as E,
  Qn as F,
  fl as G,
  qu as H,
  xt as I,
  cn as J,
  Uu as K,
  fr as L,
  Hu as M,
  Vu as N,
  Du as O,
  C as P,
  Pu as Q,
  hl as R,
  Zu as S,
  at as T,
  pl as U,
  wt as V,
  dl as W,
  zu as X,
  vl as Y,
  Mu as Z,
  gl as _,
  me as a,
  rn as a0,
  ju as a1,
  nl as a2,
  Kn as a3,
  sl as a4,
  rl as a5,
  el as a6,
  Qu as a7,
  Ju as a8,
  al as a9,
  tl as aa,
  ol as ab,
  ul as ac,
  Zs as b,
  B as c,
  te as d,
  Kr as e,
  Rt as f,
  ga as g,
  hn as h,
  Ur as i,
  Bu as j,
  eo as k,
  lu as l,
  Yu as m,
  Wu as n,
  Xu as o,
  qe as p,
  Ku as q,
  gu as r,
  il as s,
  Rr as t,
  Xe as u,
  X as v,
  cl as w,
  no as x,
  rt as y,
  hr as z
};
