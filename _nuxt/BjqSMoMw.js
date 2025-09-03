import { g as me } from "./BtthtQJI.js";
import { d as se, j as le, o as ce, k as M, n as ue, h as fe } from "./BSLliBk6.js";
const pe = se({ __name: "Disclaimer", props: { color: {} }, setup(c2) {
  const t = me(c2.color);
  return (d, m) => (ce(), le("section", { class: ue(fe(t)), group: "", "mx-0": "", "children:max-w-none": "" }, m[0] || (m[0] = [M("div", { class: "nq-prose", "transition-colors": "", "children:text": "f-sm neutral-800 group-hocus:neutral-900" }, [M("h2", null, " Disclaimer "), M("p", { lh: "[1.75]", "f-mt-xs": "" }, " None of the statements must be viewed as an endorsement or recommendation for Nimiq, any cryptocurrency, or investment product. Neither the information, nor any opinion contained herein constitutes a solicitation or offer by the creators or participants to buy or sell any securities or other financial instruments or provide any investment advice or service. All statements contained in statements made in Nimiq\u2019s web pages, blogs, social media, press releases, or in any place accessible by the public, and oral statements that may be made by Nimiq or project associates that are not statements of historical fact, constitute \u201Cforward-looking statements\u201D. These forward-looking statements involve known and unknown risks, uncertainties, and other factors that may cause the actual future results, performance, or achievements to be materially different from any future results, performance, or achievements expected, expressed, or implied by such forward-looking statements. The final decision of implementing any changes to the Nimiq protocol, including its parameters, always remains with the decentralized node operators who agree what version and parameters to deploy and support. ")], -1)]), 2));
} }), we = Object.assign(pe, { __name: "Disclaimer" });
/*! medium-zoom 1.1.0 | MIT License | https://github.com/francoischalifour/medium-zoom */
var b = Object.assign || function(c2) {
  for (var t = 1; t < arguments.length; t++) {
    var d = arguments[t];
    for (var m in d) Object.prototype.hasOwnProperty.call(d, m) && (c2[m] = d[m]);
  }
  return c2;
}, N = function(t) {
  return t.tagName === "IMG";
}, ge = function(t) {
  return NodeList.prototype.isPrototypeOf(t);
}, T = function(t) {
  return t && t.nodeType === 1;
}, U = function(t) {
  var d = t.currentSrc || t.src;
  return d.substr(-4).toLowerCase() === ".svg";
}, W = function(t) {
  try {
    return Array.isArray(t) ? t.filter(N) : ge(t) ? [].slice.call(t).filter(N) : T(t) ? [t].filter(N) : typeof t == "string" ? [].slice.call(document.querySelectorAll(t)).filter(N) : [];
  } catch {
    throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`);
  }
}, ve = function(t) {
  var d = document.createElement("div");
  return d.classList.add("medium-zoom-overlay"), d.style.background = t, d;
}, he = function(t) {
  var d = t.getBoundingClientRect(), m = d.top, p = d.left, A = d.width, k = d.height, h = t.cloneNode(), _ = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, H = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  return h.removeAttribute("id"), h.style.position = "absolute", h.style.top = m + _ + "px", h.style.left = p + H + "px", h.style.width = A + "px", h.style.height = k + "px", h.style.transform = "", h;
}, L = function(t, d) {
  var m = b({ bubbles: false, cancelable: false, detail: void 0 }, d);
  if (typeof window.CustomEvent == "function") return new CustomEvent(t, m);
  var p = document.createEvent("CustomEvent");
  return p.initCustomEvent(t, m.bubbles, m.cancelable, m.detail), p;
}, Le = function c(t) {
  var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m = window.Promise || function(o) {
    function n() {
    }
    o(n, n);
  }, p = function(o) {
    var n = o.target;
    if (n === x) {
      z();
      return;
    }
    g.indexOf(n) !== -1 && Y({ target: n });
  }, A = function() {
    if (!(E || !e.original)) {
      var o = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      Math.abs(D - o) > a.scrollOffset && setTimeout(z, 150);
    }
  }, k = function(o) {
    var n = o.key || o.keyCode;
    (n === "Escape" || n === "Esc" || n === 27) && z();
  }, h = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = o;
    if (o.background && (x.style.background = o.background), o.container && o.container instanceof Object && (n.container = b({}, a.container, o.container)), o.template) {
      var i = T(o.template) ? o.template : document.querySelector(o.template);
      n.template = i;
    }
    return a = b({}, a, n), g.forEach(function(s) {
      s.dispatchEvent(L("medium-zoom:update", { detail: { zoom: l } }));
    }), l;
  }, _ = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return c(b({}, a, o));
  }, H = function() {
    for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
    var s = n.reduce(function(r, f) {
      return [].concat(r, W(f));
    }, []);
    return s.filter(function(r) {
      return g.indexOf(r) === -1;
    }).forEach(function(r) {
      g.push(r), r.classList.add("medium-zoom-image");
    }), O.forEach(function(r) {
      var f = r.type, v = r.listener, w = r.options;
      s.forEach(function(y) {
        y.addEventListener(f, v, w);
      });
    }), l;
  }, Z = function() {
    for (var o = arguments.length, n = Array(o), i = 0; i < o; i++) n[i] = arguments[i];
    e.zoomed && z();
    var s = n.length > 0 ? n.reduce(function(r, f) {
      return [].concat(r, W(f));
    }, []) : g;
    return s.forEach(function(r) {
      r.classList.remove("medium-zoom-image"), r.dispatchEvent(L("medium-zoom:detach", { detail: { zoom: l } }));
    }), g = g.filter(function(r) {
      return s.indexOf(r) === -1;
    }), l;
  }, F = function(o, n) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return g.forEach(function(s) {
      s.addEventListener("medium-zoom:" + o, n, i);
    }), O.push({ type: "medium-zoom:" + o, listener: n, options: i }), l;
  }, X = function(o, n) {
    var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return g.forEach(function(s) {
      s.removeEventListener("medium-zoom:" + o, n, i);
    }), O = O.filter(function(s) {
      return !(s.type === "medium-zoom:" + o && s.listener.toString() === n.toString());
    }), l;
  }, P = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = o.target, i = function() {
      var r = { width: document.documentElement.clientWidth, height: document.documentElement.clientHeight, left: 0, top: 0, right: 0, bottom: 0 }, f = void 0, v = void 0;
      if (a.container) if (a.container instanceof Object) r = b({}, r, a.container), f = r.width - r.left - r.right - a.margin * 2, v = r.height - r.top - r.bottom - a.margin * 2;
      else {
        var w = T(a.container) ? a.container : document.querySelector(a.container), y = w.getBoundingClientRect(), I = y.width, J = y.height, Q = y.left, $ = y.top;
        r = b({}, r, { width: I, height: J, left: Q, top: $ });
      }
      f = f || r.width - a.margin * 2, v = v || r.height - a.margin * 2;
      var C = e.zoomedHd || e.original, ee = U(C) ? f : C.naturalWidth || f, te = U(C) ? v : C.naturalHeight || v, S = C.getBoundingClientRect(), oe = S.top, ne = S.left, j = S.width, q = S.height, re = Math.min(Math.max(j, ee), f) / j, ae = Math.min(Math.max(q, te), v) / q, B = Math.min(re, ae), ie = (-ne + (f - j) / 2 + a.margin + r.left) / B, de = (-oe + (v - q) / 2 + a.margin + r.top) / B, R = "scale(" + B + ") translate3d(" + ie + "px, " + de + "px, 0)";
      e.zoomed.style.transform = R, e.zoomedHd && (e.zoomedHd.style.transform = R);
    };
    return new m(function(s) {
      if (n && g.indexOf(n) === -1) {
        s(l);
        return;
      }
      var r = function I() {
        E = false, e.zoomed.removeEventListener("transitionend", I), e.original.dispatchEvent(L("medium-zoom:opened", { detail: { zoom: l } })), s(l);
      };
      if (e.zoomed) {
        s(l);
        return;
      }
      if (n) e.original = n;
      else if (g.length > 0) {
        var f = g;
        e.original = f[0];
      } else {
        s(l);
        return;
      }
      if (e.original.dispatchEvent(L("medium-zoom:open", { detail: { zoom: l } })), D = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, E = true, e.zoomed = he(e.original), document.body.appendChild(x), a.template) {
        var v = T(a.template) ? a.template : document.querySelector(a.template);
        e.template = document.createElement("div"), e.template.appendChild(v.content.cloneNode(true)), document.body.appendChild(e.template);
      }
      if (e.original.parentElement && e.original.parentElement.tagName === "PICTURE" && e.original.currentSrc && (e.zoomed.src = e.original.currentSrc), document.body.appendChild(e.zoomed), window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      }), e.original.classList.add("medium-zoom-image--hidden"), e.zoomed.classList.add("medium-zoom-image--opened"), e.zoomed.addEventListener("click", z), e.zoomed.addEventListener("transitionend", r), e.original.getAttribute("data-zoom-src")) {
        e.zoomedHd = e.zoomed.cloneNode(), e.zoomedHd.removeAttribute("srcset"), e.zoomedHd.removeAttribute("sizes"), e.zoomedHd.removeAttribute("loading"), e.zoomedHd.src = e.zoomed.getAttribute("data-zoom-src"), e.zoomedHd.onerror = function() {
          clearInterval(w), console.warn("Unable to reach the zoom image target " + e.zoomedHd.src), e.zoomedHd = null, i();
        };
        var w = setInterval(function() {
          e.zoomedHd.complete && (clearInterval(w), e.zoomedHd.classList.add("medium-zoom-image--opened"), e.zoomedHd.addEventListener("click", z), document.body.appendChild(e.zoomedHd), i());
        }, 10);
      } else if (e.original.hasAttribute("srcset")) {
        e.zoomedHd = e.zoomed.cloneNode(), e.zoomedHd.removeAttribute("sizes"), e.zoomedHd.removeAttribute("loading");
        var y = e.zoomedHd.addEventListener("load", function() {
          e.zoomedHd.removeEventListener("load", y), e.zoomedHd.classList.add("medium-zoom-image--opened"), e.zoomedHd.addEventListener("click", z), document.body.appendChild(e.zoomedHd), i();
        });
      } else i();
    });
  }, z = function() {
    return new m(function(o) {
      if (E || !e.original) {
        o(l);
        return;
      }
      var n = function i() {
        e.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(e.zoomed), e.zoomedHd && document.body.removeChild(e.zoomedHd), document.body.removeChild(x), e.zoomed.classList.remove("medium-zoom-image--opened"), e.template && document.body.removeChild(e.template), E = false, e.zoomed.removeEventListener("transitionend", i), e.original.dispatchEvent(L("medium-zoom:closed", { detail: { zoom: l } })), e.original = null, e.zoomed = null, e.zoomedHd = null, e.template = null, o(l);
      };
      E = true, document.body.classList.remove("medium-zoom--opened"), e.zoomed.style.transform = "", e.zoomedHd && (e.zoomedHd.style.transform = ""), e.template && (e.template.style.transition = "opacity 150ms", e.template.style.opacity = 0), e.original.dispatchEvent(L("medium-zoom:close", { detail: { zoom: l } })), e.zoomed.addEventListener("transitionend", n);
    });
  }, Y = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = o.target;
    return e.original ? z() : P({ target: n });
  }, K = function() {
    return a;
  }, G = function() {
    return g;
  }, V = function() {
    return e.original;
  }, g = [], O = [], E = false, D = 0, a = d, e = { original: null, zoomed: null, zoomedHd: null, template: null };
  Object.prototype.toString.call(t) === "[object Object]" ? a = t : (t || typeof t == "string") && H(t), a = b({ margin: 0, background: "#fff", scrollOffset: 40, container: null, template: null }, a);
  var x = ve(a.background);
  document.addEventListener("click", p), document.addEventListener("keyup", k), document.addEventListener("scroll", A), window.addEventListener("resize", z);
  var l = { open: P, close: z, toggle: Y, update: h, clone: _, attach: H, detach: Z, on: F, off: X, getOptions: K, getImages: G, getZoomedImage: V };
  return l;
};
function ze(c2, t) {
  t === void 0 && (t = {});
  var d = t.insertAt;
  if (!(typeof document > "u")) {
    var m = document.head || document.getElementsByTagName("head")[0], p = document.createElement("style");
    p.type = "text/css", d === "top" && m.firstChild ? m.insertBefore(p, m.firstChild) : m.appendChild(p), p.styleSheet ? p.styleSheet.cssText = c2 : p.appendChild(document.createTextNode(c2));
  }
}
var ye = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
ze(ye);
export {
  we as _,
  Le as m
};
