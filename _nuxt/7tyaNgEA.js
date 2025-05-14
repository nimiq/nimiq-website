const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./onepager.BMUVdREQ.css","./DJKAwVwp.js","./DSuxm-mJ.js","./C7IVxsr-.js","./CD5FwXF0.js","./C3sJ3Yu7.js","./AcnOGanz.js","./DptPnj5y.js","./6j_b9UX3.js","./BqwFAzj-.js","./Tooltip.Cgw-zEuc.css","./-SGvg42Q.js","./8Lad1M9Y.js","./roadmap.CYyI30Vv.css","./DqYLTfmG.js","./CpH_97JW.js","./BbgBCNXr.js","./DTqfM-cU.js","./CUE6FAPr.js","./DeL1xAR-.js","./BcIl7GhH.js","./DSYs-LpM.js","./BFSEKnqQ.js","./bWEtUbjf.js","./BlNg8BrV.js","./_post_.DSKa77bA.css","./DCr31tCO.js","./CqkleIqs.js","./D-Pdm4bS.js","./DmrZuh9Q.js","./Bz4-DFcF.js","./qVQu3vrU.js","./Blockchain.DgtOpVGp.css","./CeE0oB-j.js","./em0aKPkT.js","./Ce-DOn_-.js","./BmXLCl62.js","./BuApbZ3h.js","./CHIgUVhi.js","./Da46OeJF.js","./D0ibNwky.js","./e5EsY3M9.js","./CynVbIQT.js","./BBaoMBlA.js","./default.W_LG_VQq.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
let xS, DS, Re, wc, Ws, vt, Se, io, pe, Kn, Ia, an, Qe, ye, Kt, pn, ut, Xf, Ae, Mc, Qu, Mh, Sp, OS, pS, qs, yS, Ni, me, So, Xe, Mt, Ln, Qp, US, _b, RS, _S, kS, Ne, ra, Sf, $S, Qm, jm, MS, vS, Hd, pw, qw, _o, bo, va, Aw, ir, tu, ro, Xi, so, dS, ot, SS, bS, Oe, bt, Wr, mS, hS, AS, we, At, lr, cy, BS, FS, sv, It, Ge, kp, ES, Bp, re, dn, Te, Tm, gS, jS, rt, TS, $f, IS, $t, ho, se, ab, HS, Il, NS, xc, CS, Xg, Ks, PS, LS, de, he, nt, zt, ar, Xs, Y0, Y, Zf, nS, zr, Vr, q, po, bn, Qn, ts, Dt, ie, wS, $e, hn, VS, _c;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver((s) => {
      for (const o of s) if (o.type === "childList") for (const i of o.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(s) {
      const o = {};
      return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
    }
    function r(s) {
      if (s.ep) return;
      s.ep = true;
      const o = n(s);
      fetch(s.href, o);
    }
  })();
  function Fi(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  let ae, Un, Ot, Xd, Ur, Ui, Ce, Vi, Zd, ue, J, Vn, Gs, ka, eh, ee, ke, gt, ge, zs, Ac, sr, th, Wi, Wn, Js, nh, rh, qt, Ys, qe, qn, Oc, ti, Lc;
  ae = {};
  Un = [];
  Ot = () => {
  };
  Xd = () => false;
  Ur = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
  Ui = (e) => e.startsWith("onUpdate:");
  Ce = Object.assign;
  Vi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  Zd = Object.prototype.hasOwnProperty;
  ue = (e, t) => Zd.call(e, t);
  J = Array.isArray;
  Vn = (e) => sr(e) === "[object Map]";
  Gs = (e) => sr(e) === "[object Set]";
  ka = (e) => sr(e) === "[object Date]";
  eh = (e) => sr(e) === "[object RegExp]";
  ee = (e) => typeof e == "function";
  ke = (e) => typeof e == "string";
  gt = (e) => typeof e == "symbol";
  ge = (e) => e !== null && typeof e == "object";
  zs = (e) => (ge(e) || ee(e)) && ee(e.then) && ee(e.catch);
  Ac = Object.prototype.toString;
  sr = (e) => Ac.call(e);
  th = (e) => sr(e).slice(8, -1);
  xc = (e) => sr(e) === "[object Object]";
  Wi = (e) => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  Wn = Fi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  Js = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  nh = /-(\w)/g;
  ot = Js((e) => e.replace(nh, (t, n) => n ? n.toUpperCase() : ""));
  rh = /\B([A-Z])/g;
  qt = Js((e) => e.replace(rh, "-$1").toLowerCase());
  Ys = Js((e) => e.charAt(0).toUpperCase() + e.slice(1));
  So = Js((e) => e ? `on${Ys(e)}` : "");
  qe = (e, t) => !Object.is(e, t);
  qn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  };
  Oc = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  };
  ti = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  Lc = (e) => {
    const t = ke(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Ea;
  const Qs = () => Ea || (Ea = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  Xs = function(e) {
    if (J(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], s = ke(r) ? ah(r) : Xs(r);
        if (s) for (const o in s) t[o] = s[o];
      }
      return t;
    } else if (ke(e) || ge(e)) return e;
  };
  const sh = /;(?![^(]*\))/g, oh = /:([^]+)/, ih = /\/\*[^]*?\*\//g;
  function ah(e) {
    const t = {};
    return e.replace(ih, "").split(sh).forEach((n) => {
      if (n) {
        const r = n.split(oh);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  Vr = function(e) {
    let t = "";
    if (ke(e)) t = e;
    else if (J(e)) for (let n = 0; n < e.length; n++) {
      const r = Vr(e[n]);
      r && (t += r + " ");
    }
    else if (ge(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  Mc = function(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !ke(t) && (e.class = Vr(t)), n && (e.style = Xs(n)), e;
  };
  const lh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ch = Fi(lh);
  function Ic(e) {
    return !!e || e === "";
  }
  function uh(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let r = 0; n && r < e.length; r++) n = Yn(e[r], t[r]);
    return n;
  }
  function Yn(e, t) {
    if (e === t) return true;
    let n = ka(e), r = ka(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : false;
    if (n = gt(e), r = gt(t), n || r) return e === t;
    if (n = J(e), r = J(t), n || r) return n && r ? uh(e, t) : false;
    if (n = ge(e), r = ge(t), n || r) {
      if (!n || !r) return false;
      const s = Object.keys(e).length, o = Object.keys(t).length;
      if (s !== o) return false;
      for (const i in e) {
        const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
        if (a && !l || !a && l || !Yn(e[i], t[i])) return false;
      }
    }
    return String(e) === String(t);
  }
  function $c(e, t) {
    return e.findIndex((n) => Yn(n, t));
  }
  let Nc, Bc, ko;
  Nc = (e) => !!(e && e.__v_isRef === true);
  Dt = (e) => ke(e) ? e : e == null ? "" : J(e) || ge(e) && (e.toString === Ac || !ee(e.toString)) ? Nc(e) ? Dt(e.value) : JSON.stringify(e, Bc, 2) : String(e);
  Bc = (e, t) => Nc(t) ? Bc(e, t.value) : Vn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, s], o) => (n[ko(r, o) + " =>"] = s, n), {})
  } : Gs(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => ko(n))
  } : gt(t) ? ko(t) : ge(t) && !J(t) && !xc(t) ? String(t) : t;
  ko = (e, t = "") => {
    var n;
    return gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let We;
  class Dc {
    constructor(t = false) {
      this.detached = t, this._active = true, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = We, !t && We && (this.index = (We.scopes || (We.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let t, n;
        if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
        for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume();
      }
    }
    run(t) {
      if (this._active) {
        const n = We;
        try {
          return We = this, t();
        } finally {
          We = n;
        }
      }
    }
    on() {
      We = this;
    }
    off() {
      We = this.parent;
    }
    stop(t) {
      if (this._active) {
        this._active = false;
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
        for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
        if (this.cleanups.length = 0, this.scopes) {
          for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !t) {
          const s = this.parent.scopes.pop();
          s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  Wr = function(e) {
    return new Dc(e);
  };
  Kt = function() {
    return We;
  };
  pn = function(e, t = false) {
    We && We.cleanups.push(e);
  };
  let _e;
  const Eo = /* @__PURE__ */ new WeakSet();
  class jc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, We && We.active && We.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Eo.has(this) && (Eo.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ta(this), Uc(this);
      const t = _e, n = mt;
      _e = this, mt = true;
      try {
        return this.fn();
      } finally {
        Vc(this), _e = t, mt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Gi(t);
        this.deps = this.depsTail = void 0, Ta(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Eo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      ni(this) && this.run();
    }
    get dirty() {
      return ni(this);
    }
  }
  let Hc = 0, _r, wr;
  function Fc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = wr, wr = e;
      return;
    }
    e.next = _r, _r = e;
  }
  function qi() {
    Hc++;
  }
  function Ki() {
    if (--Hc > 0) return;
    if (wr) {
      let t = wr;
      for (wr = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; _r; ) {
      let t = _r;
      for (_r = void 0; t; ) {
        const n = t.next;
        if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
          t.trigger();
        } catch (r) {
          e || (e = r);
        }
        t = n;
      }
    }
    if (e) throw e;
  }
  function Uc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Vc(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const s = r.prevDep;
      r.version === -1 ? (r === n && (n = s), Gi(r), fh(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
    }
    e.deps = t, e.depsTail = n;
  }
  function ni(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Wc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Wc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Or)) return;
    e.globalVersion = Or;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !ni(e)) {
      e.flags &= -3;
      return;
    }
    const n = _e, r = mt;
    _e = e, mt = true;
    try {
      Uc(e);
      const s = e.fn(e._value);
      (t.version === 0 || qe(s, e._value)) && (e._value = s, t.version++);
    } catch (s) {
      throw t.version++, s;
    } finally {
      _e = n, mt = r, Vc(e), e.flags &= -3;
    }
  }
  function Gi(e, t = false) {
    const { dep: n, prevSub: r, nextSub: s } = e;
    if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let o = n.computed.deps; o; o = o.nextDep) Gi(o, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function fh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let mt = true;
  const qc = [];
  function yn() {
    qc.push(mt), mt = false;
  }
  function vn() {
    const e = qc.pop();
    mt = e === void 0 ? true : e;
  }
  function Ta(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = _e;
      _e = void 0;
      try {
        t();
      } finally {
        _e = n;
      }
    }
  }
  let Or = 0;
  class dh {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Zs {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!_e || !mt || _e === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== _e) n = this.activeLink = new dh(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Kc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = _e.depsTail, n.nextDep = void 0, _e.depsTail.nextDep = n, _e.depsTail = n, _e.deps === n && (_e.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, Or++, this.notify(t);
    }
    notify(t) {
      qi();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Ki();
      }
    }
  }
  function Kc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Kc(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Cs = /* @__PURE__ */ new WeakMap(), Rn = Symbol(""), ri = Symbol(""), Lr = Symbol("");
  function De(e, t, n) {
    if (mt && _e) {
      let r = Cs.get(e);
      r || Cs.set(e, r = /* @__PURE__ */ new Map());
      let s = r.get(n);
      s || (r.set(n, s = new Zs()), s.map = r, s.key = n), s.track();
    }
  }
  function jt(e, t, n, r, s, o) {
    const i = Cs.get(e);
    if (!i) {
      Or++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if (qi(), t === "clear") i.forEach(a);
    else {
      const l = J(e), u = l && Wi(n);
      if (l && n === "length") {
        const c = Number(r);
        i.forEach((f, h) => {
          (h === "length" || h === Lr || !gt(h) && h >= c) && a(f);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Lr)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Rn)), Vn(e) && a(i.get(ri)));
          break;
        case "delete":
          l || (a(i.get(Rn)), Vn(e) && a(i.get(ri)));
          break;
        case "set":
          Vn(e) && a(i.get(Rn));
          break;
      }
    }
    Ki();
  }
  function hh(e, t) {
    const n = Cs.get(e);
    return n && n.get(t);
  }
  function $n(e) {
    const t = re(e);
    return t === e ? t : (De(t, "iterate", Lr), ct(e) ? t : t.map(je));
  }
  function eo(e) {
    return De(e = re(e), "iterate", Lr), e;
  }
  const ph = {
    __proto__: null,
    [Symbol.iterator]() {
      return To(this, Symbol.iterator, je);
    },
    concat(...e) {
      return $n(this).concat(...e.map((t) => J(t) ? $n(t) : t));
    },
    entries() {
      return To(this, "entries", (e) => (e[1] = je(e[1]), e));
    },
    every(e, t) {
      return Nt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Nt(this, "filter", e, t, (n) => n.map(je), arguments);
    },
    find(e, t) {
      return Nt(this, "find", e, t, je, arguments);
    },
    findIndex(e, t) {
      return Nt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Nt(this, "findLast", e, t, je, arguments);
    },
    findLastIndex(e, t) {
      return Nt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Nt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Ro(this, "includes", e);
    },
    indexOf(...e) {
      return Ro(this, "indexOf", e);
    },
    join(e) {
      return $n(this).join(e);
    },
    lastIndexOf(...e) {
      return Ro(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Nt(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return dr(this, "pop");
    },
    push(...e) {
      return dr(this, "push", e);
    },
    reduce(e, ...t) {
      return Ra(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ra(this, "reduceRight", e, t);
    },
    shift() {
      return dr(this, "shift");
    },
    some(e, t) {
      return Nt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return dr(this, "splice", e);
    },
    toReversed() {
      return $n(this).toReversed();
    },
    toSorted(e) {
      return $n(this).toSorted(e);
    },
    toSpliced(...e) {
      return $n(this).toSpliced(...e);
    },
    unshift(...e) {
      return dr(this, "unshift", e);
    },
    values() {
      return To(this, "values", je);
    }
  };
  function To(e, t, n) {
    const r = eo(e), s = r[t]();
    return r !== e && !ct(e) && (s._next = s.next, s.next = () => {
      const o = s._next();
      return o.value && (o.value = n(o.value)), o;
    }), s;
  }
  const mh = Array.prototype;
  function Nt(e, t, n, r, s, o) {
    const i = eo(e), a = i !== e && !ct(e), l = i[t];
    if (l !== mh[t]) {
      const f = l.apply(e, o);
      return a ? je(f) : f;
    }
    let u = n;
    i !== e && (a ? u = function(f, h) {
      return n.call(this, je(f), h, e);
    } : n.length > 2 && (u = function(f, h) {
      return n.call(this, f, h, e);
    }));
    const c = l.call(i, u, r);
    return a && s ? s(c) : c;
  }
  function Ra(e, t, n, r) {
    const s = eo(e);
    let o = n;
    return s !== e && (ct(e) ? n.length > 3 && (o = function(i, a, l) {
      return n.call(this, i, a, l, e);
    }) : o = function(i, a, l) {
      return n.call(this, i, je(a), l, e);
    }), s[t](o, ...r);
  }
  function Ro(e, t, n) {
    const r = re(e);
    De(r, "iterate", Lr);
    const s = r[t](...n);
    return (s === -1 || s === false) && zi(n[0]) ? (n[0] = re(n[0]), r[t](...n)) : s;
  }
  function dr(e, t, n = []) {
    yn(), qi();
    const r = re(e)[t].apply(e, n);
    return Ki(), vn(), r;
  }
  const gh = Fi("__proto__,__v_isRef,__isVue"), Gc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt));
  function yh(e) {
    gt(e) || (e = String(e));
    const t = re(this);
    return De(t, "has", e), t.hasOwnProperty(e);
  }
  class zc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const s = this._isReadonly, o = this._isShallow;
      if (n === "__v_isReactive") return !s;
      if (n === "__v_isReadonly") return s;
      if (n === "__v_isShallow") return o;
      if (n === "__v_raw") return r === (s ? o ? eu : Zc : o ? Xc : Qc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const i = J(t);
      if (!s) {
        let l;
        if (i && (l = ph[n])) return l;
        if (n === "hasOwnProperty") return yh;
      }
      const a = Reflect.get(t, n, we(t) ? t : r);
      return (gt(n) ? Gc.has(n) : gh(n)) || (s || De(t, "get", n), o) ? a : we(a) ? i && Wi(n) ? a : a.value : ge(a) ? s ? tu(a) : It(a) : a;
    }
  }
  class Jc extends zc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, s) {
      let o = t[n];
      if (!this._isShallow) {
        const l = mn(o);
        if (!ct(r) && !mn(r) && (o = re(o), r = re(r)), !J(t) && we(o) && !we(r)) return l ? false : (o.value = r, true);
      }
      const i = J(t) && Wi(n) ? Number(n) < t.length : ue(t, n), a = Reflect.set(t, n, r, we(t) ? t : s);
      return t === re(s) && (i ? qe(r, o) && jt(t, "set", n, r) : jt(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = ue(t, n);
      t[n];
      const s = Reflect.deleteProperty(t, n);
      return s && r && jt(t, "delete", n, void 0), s;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!gt(n) || !Gc.has(n)) && De(t, "has", n), r;
    }
    ownKeys(t) {
      return De(t, "iterate", J(t) ? "length" : Rn), Reflect.ownKeys(t);
    }
  }
  class Yc extends zc {
    constructor(t = false) {
      super(true, t);
    }
    set(t, n) {
      return true;
    }
    deleteProperty(t, n) {
      return true;
    }
  }
  const vh = new Jc(), bh = new Yc(), _h = new Jc(true), wh = new Yc(true), si = (e) => e, rs = (e) => Reflect.getPrototypeOf(e);
  function Sh(e, t, n) {
    return function(...r) {
      const s = this.__v_raw, o = re(s), i = Vn(o), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = s[e](...r), c = n ? si : t ? oi : je;
      return !t && De(o, "iterate", l ? ri : Rn), {
        next() {
          const { value: f, done: h } = u.next();
          return h ? {
            value: f,
            done: h
          } : {
            value: a ? [
              c(f[0]),
              c(f[1])
            ] : c(f),
            done: h
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function ss(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function kh(e, t) {
    const n = {
      get(s) {
        const o = this.__v_raw, i = re(o), a = re(s);
        e || (qe(s, a) && De(i, "get", s), De(i, "get", a));
        const { has: l } = rs(i), u = t ? si : e ? oi : je;
        if (l.call(i, s)) return u(o.get(s));
        if (l.call(i, a)) return u(o.get(a));
        o !== i && o.get(s);
      },
      get size() {
        const s = this.__v_raw;
        return !e && De(re(s), "iterate", Rn), Reflect.get(s, "size", s);
      },
      has(s) {
        const o = this.__v_raw, i = re(o), a = re(s);
        return e || (qe(s, a) && De(i, "has", s), De(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a);
      },
      forEach(s, o) {
        const i = this, a = i.__v_raw, l = re(a), u = t ? si : e ? oi : je;
        return !e && De(l, "iterate", Rn), a.forEach((c, f) => s.call(o, u(c), u(f), i));
      }
    };
    return Ce(n, e ? {
      add: ss("add"),
      set: ss("set"),
      delete: ss("delete"),
      clear: ss("clear")
    } : {
      add(s) {
        !t && !ct(s) && !mn(s) && (s = re(s));
        const o = re(this);
        return rs(o).has.call(o, s) || (o.add(s), jt(o, "add", s, s)), this;
      },
      set(s, o) {
        !t && !ct(o) && !mn(o) && (o = re(o));
        const i = re(this), { has: a, get: l } = rs(i);
        let u = a.call(i, s);
        u || (s = re(s), u = a.call(i, s));
        const c = l.call(i, s);
        return i.set(s, o), u ? qe(o, c) && jt(i, "set", s, o) : jt(i, "add", s, o), this;
      },
      delete(s) {
        const o = re(this), { has: i, get: a } = rs(o);
        let l = i.call(o, s);
        l || (s = re(s), l = i.call(o, s)), a && a.call(o, s);
        const u = o.delete(s);
        return l && jt(o, "delete", s, void 0), u;
      },
      clear() {
        const s = re(this), o = s.size !== 0, i = s.clear();
        return o && jt(s, "clear", void 0, void 0), i;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((s) => {
      n[s] = Sh(s, e, t);
    }), n;
  }
  function to(e, t) {
    const n = kh(e, t);
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(ue(n, s) && s in r ? n : r, s, o);
  }
  const Eh = {
    get: to(false, false)
  }, Th = {
    get: to(false, true)
  }, Rh = {
    get: to(true, false)
  }, Ch = {
    get: to(true, true)
  }, Qc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap();
  function Ph(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Ah(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Ph(th(e));
  }
  It = function(e) {
    return mn(e) ? e : no(e, false, vh, Eh, Qc);
  };
  function Ft(e) {
    return no(e, false, _h, Th, Xc);
  }
  tu = function(e) {
    return no(e, true, bh, Rh, Zc);
  };
  dS = function(e) {
    return no(e, true, wh, Ch, eu);
  };
  function no(e, t, n, r, s) {
    if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const o = s.get(e);
    if (o) return o;
    const i = Ah(e);
    if (i === 0) return e;
    const a = new Proxy(e, i === 2 ? r : n);
    return s.set(e, a), a;
  }
  function Lt(e) {
    return mn(e) ? Lt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function mn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function ct(e) {
    return !!(e && e.__v_isShallow);
  }
  function zi(e) {
    return e ? !!e.__v_raw : false;
  }
  re = function(e) {
    const t = e && e.__v_raw;
    return t ? re(t) : e;
  };
  Kn = function(e) {
    return !ue(e, "__v_skip") && Object.isExtensible(e) && Oc(e, "__v_skip", true), e;
  };
  const je = (e) => ge(e) ? It(e) : e, oi = (e) => ge(e) ? tu(e) : e;
  we = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Re = function(e) {
    return nu(e, false);
  };
  ut = function(e) {
    return nu(e, true);
  };
  function nu(e, t) {
    return we(e) ? e : new xh(e, t);
  }
  class xh {
    constructor(t, n) {
      this.dep = new Zs(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : re(t), this._value = n ? t : je(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || ct(t) || mn(t);
      t = r ? t : re(t), qe(t, n) && (this._rawValue = t, this._value = r ? t : je(t), this.dep.trigger());
    }
  }
  ie = function(e) {
    return we(e) ? e.value : e;
  };
  rt = function(e) {
    return ee(e) ? e() : ie(e);
  };
  const Oh = {
    get: (e, t, n) => t === "__v_raw" ? e : ie(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const s = e[t];
      return we(s) && !we(n) ? (s.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function ru(e) {
    return Lt(e) ? e : new Proxy(e, Oh);
  }
  class Lh {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new Zs(), { get: r, set: s } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = s;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  ro = function(e) {
    return new Lh(e);
  };
  Mh = function(e) {
    const t = J(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = su(e, n);
    return t;
  };
  class Ih {
    constructor(t, n, r) {
      this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = true, this._value = void 0;
    }
    get value() {
      const t = this._object[this._key];
      return this._value = t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return hh(re(this._object), this._key);
    }
  }
  class $h {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  so = function(e, t, n) {
    return we(e) ? e : ee(e) ? new $h(e) : ge(e) && arguments.length > 1 ? su(e, t, n) : Re(e);
  };
  function su(e, t, n) {
    const r = e[t];
    return we(r) ? r : new Ih(e, t, n);
  }
  class Nh {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zs(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Or - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && _e !== this) return Fc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Wc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Bh(e, t, n = false) {
    let r, s;
    return ee(e) ? r = e : (r = e.get, s = e.set), new Nh(r, s, n);
  }
  const os = {}, Ps = /* @__PURE__ */ new WeakMap();
  let En;
  function Dh(e, t = false, n = En) {
    if (n) {
      let r = Ps.get(n);
      r || Ps.set(n, r = []), r.push(e);
    }
  }
  function jh(e, t, n = ae) {
    const { immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: l } = n, u = (v) => s ? v : ct(v) || s === false || s === 0 ? Ht(v, 1) : Ht(v);
    let c, f, h, d, p = false, y = false;
    if (we(e) ? (f = () => e.value, p = ct(e)) : Lt(e) ? (f = () => u(e), p = true) : J(e) ? (y = true, p = e.some((v) => Lt(v) || ct(v)), f = () => e.map((v) => {
      if (we(v)) return v.value;
      if (Lt(v)) return u(v);
      if (ee(v)) return l ? l(v, 2) : v();
    })) : ee(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (h) {
        yn();
        try {
          h();
        } finally {
          vn();
        }
      }
      const v = En;
      En = c;
      try {
        return l ? l(e, 3, [
          d
        ]) : e(d);
      } finally {
        En = v;
      }
    } : f = Ot, t && s) {
      const v = f, w = s === true ? 1 / 0 : s;
      f = () => Ht(v(), w);
    }
    const S = Kt(), k = () => {
      c.stop(), S && S.active && Vi(S.effects, c);
    };
    if (o && t) {
      const v = t;
      t = (...w) => {
        v(...w), k();
      };
    }
    let _ = y ? new Array(e.length).fill(os) : os;
    const m = (v) => {
      if (!(!(c.flags & 1) || !c.dirty && !v)) if (t) {
        const w = c.run();
        if (s || p || (y ? w.some((A, M) => qe(A, _[M])) : qe(w, _))) {
          h && h();
          const A = En;
          En = c;
          try {
            const M = [
              w,
              _ === os ? void 0 : y && _[0] === os ? [] : _,
              d
            ];
            l ? l(t, 3, M) : t(...M), _ = w;
          } finally {
            En = A;
          }
        }
      } else c.run();
    };
    return a && a(m), c = new jc(f), c.scheduler = i ? () => i(m, false) : m, d = (v) => Dh(v, false, c), h = c.onStop = () => {
      const v = Ps.get(c);
      if (v) {
        if (l) l(v, 4);
        else for (const w of v) w();
        Ps.delete(c);
      }
    }, t ? r ? m(true) : _ = c.run() : i ? i(m.bind(null, true), true) : c.run(), k.pause = c.pause.bind(c), k.resume = c.resume.bind(c), k.stop = k, k;
  }
  function Ht(e, t = 1 / 0, n) {
    if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, we(e)) Ht(e.value, t, n);
    else if (J(e)) for (let r = 0; r < e.length; r++) Ht(e[r], t, n);
    else if (Gs(e) || Vn(e)) e.forEach((r) => {
      Ht(r, t, n);
    });
    else if (xc(e)) {
      for (const r in e) Ht(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Ht(e[r], t, n);
    }
    return e;
  }
  function qr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (s) {
      or(s, t, n);
    }
  }
  function yt(e, t, n, r) {
    if (ee(e)) {
      const s = qr(e, t, n, r);
      return s && zs(s) && s.catch((o) => {
        or(o, t, n);
      }), s;
    }
    if (J(e)) {
      const s = [];
      for (let o = 0; o < e.length; o++) s.push(yt(e[o], t, n, r));
      return s;
    }
  }
  function or(e, t, n, r = true) {
    const s = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ae;
    if (t) {
      let a = t.parent;
      const l = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
      for (; a; ) {
        const c = a.ec;
        if (c) {
          for (let f = 0; f < c.length; f++) if (c[f](e, l, u) === false) return;
        }
        a = a.parent;
      }
      if (o) {
        yn(), qr(o, null, 10, [
          e,
          l,
          u
        ]), vn();
        return;
      }
    }
    Hh(e, n, s, r, i);
  }
  function Hh(e, t, n, r = true, s = false) {
    if (s) throw e;
    console.error(e);
  }
  const Ke = [];
  let Rt = -1;
  const Gn = [];
  let tn = null, jn = 0;
  const ou = Promise.resolve();
  let As = null;
  Mt = function(e) {
    const t = As || ou;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Fh(e) {
    let t = Rt + 1, n = Ke.length;
    for (; t < n; ) {
      const r = t + n >>> 1, s = Ke[r], o = Mr(s);
      o < e || o === e && s.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function Ji(e) {
    if (!(e.flags & 1)) {
      const t = Mr(e), n = Ke[Ke.length - 1];
      !n || !(e.flags & 2) && t >= Mr(n) ? Ke.push(e) : Ke.splice(Fh(t), 0, e), e.flags |= 1, iu();
    }
  }
  function iu() {
    As || (As = ou.then(au));
  }
  function ii(e) {
    J(e) ? Gn.push(...e) : tn && e.id === -1 ? tn.splice(jn + 1, 0, e) : e.flags & 1 || (Gn.push(e), e.flags |= 1), iu();
  }
  function Ca(e, t, n = Rt + 1) {
    for (; n < Ke.length; n++) {
      const r = Ke[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function xs(e) {
    if (Gn.length) {
      const t = [
        ...new Set(Gn)
      ].sort((n, r) => Mr(n) - Mr(r));
      if (Gn.length = 0, tn) {
        tn.push(...t);
        return;
      }
      for (tn = t, jn = 0; jn < tn.length; jn++) {
        const n = tn[jn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      tn = null, jn = 0;
    }
  }
  const Mr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function au(e) {
    try {
      for (Rt = 0; Rt < Ke.length; Rt++) {
        const t = Ke[Rt];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Rt < Ke.length; Rt++) {
        const t = Ke[Rt];
        t && (t.flags &= -2);
      }
      Rt = -1, Ke.length = 0, xs(), As = null, (Ke.length || Gn.length) && au();
    }
  }
  let Me = null, lu = null;
  function Os(e) {
    const t = Me;
    return Me = e, lu = e && e.type.__scopeId || null, t;
  }
  $e = function(e, t = Me, n) {
    if (!t || e._n) return e;
    const r = (...s) => {
      r._d && Ua(-1);
      const o = Os(t);
      let i;
      try {
        i = e(...s);
      } finally {
        Os(o), r._d && Ua(1);
      }
      return i;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  hS = function(e, t) {
    if (Me === null) return e;
    const n = co(Me), r = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
      let [o, i, a, l = ae] = t[s];
      o && (ee(o) && (o = {
        mounted: o,
        updated: o
      }), o.deep && Ht(i), r.push({
        dir: o,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: a,
        modifiers: l
      }));
    }
    return e;
  };
  function Pt(e, t, n, r) {
    const s = e.dirs, o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
      const a = s[i];
      o && (a.oldValue = o[i].value);
      let l = a.dir[r];
      l && (yn(), yt(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), vn());
    }
  }
  const cu = Symbol("_vte"), uu = (e) => e.__isTeleport, Sr = (e) => e && (e.disabled || e.disabled === ""), Pa = (e) => e && (e.defer || e.defer === ""), Aa = (e) => typeof SVGElement < "u" && e instanceof SVGElement, xa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ai = (e, t) => {
    const n = e && e.to;
    return ke(n) ? t ? t(n) : null : n;
  }, fu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, s, o, i, a, l, u) {
      const { mc: c, pc: f, pbc: h, o: { insert: d, querySelector: p, createText: y, createComment: S } } = u, k = Sr(t.props);
      let { shapeFlag: _, children: m, dynamicChildren: v } = t;
      if (e == null) {
        const w = t.el = y(""), A = t.anchor = y("");
        d(w, n, r), d(A, n, r);
        const M = (C, O) => {
          _ & 16 && (s && s.isCE && (s.ce._teleportTarget = C), c(m, C, O, s, o, i, a, l));
        }, N = () => {
          const C = t.target = ai(t.props, p), O = du(C, t, y, d);
          C && (i !== "svg" && Aa(C) ? i = "svg" : i !== "mathml" && xa(C) && (i = "mathml"), k || (M(C, O), Ss(t, false)));
        };
        k && (M(n, A), Ss(t, true)), Pa(t.props) ? xe(() => {
          N(), t.el.__isMounted = true;
        }, o) : N();
      } else {
        if (Pa(t.props) && !e.el.__isMounted) {
          xe(() => {
            fu.process(e, t, n, r, s, o, i, a, l, u), delete e.el.__isMounted;
          }, o);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const w = t.anchor = e.anchor, A = t.target = e.target, M = t.targetAnchor = e.targetAnchor, N = Sr(e.props), C = N ? n : A, O = N ? w : M;
        if (i === "svg" || Aa(A) ? i = "svg" : (i === "mathml" || xa(A)) && (i = "mathml"), v ? (h(e.dynamicChildren, v, C, s, o, i, a), ea(e, t, true)) : l || f(e, t, C, O, s, o, i, a, false), k) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : is(t, n, w, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const E = t.target = ai(t.props, p);
          E && is(t, E, null, u, 0);
        } else N && is(t, A, M, u, 1);
        Ss(t, k);
      }
    },
    remove(e, t, n, { um: r, o: { remove: s } }, o) {
      const { shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: h } = e;
      if (f && (s(u), s(c)), o && s(l), i & 16) {
        const d = o || !Sr(h);
        for (let p = 0; p < a.length; p++) {
          const y = a[p];
          r(y, t, n, d, !!y.dynamicChildren);
        }
      }
    },
    move: is,
    hydrate: Uh
  };
  function is(e, t, n, { o: { insert: r }, m: s }, o = 2) {
    o === 0 && r(e.targetAnchor, t, n);
    const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = o === 2;
    if (f && r(i, t, n), (!f || Sr(c)) && l & 16) for (let h = 0; h < u.length; h++) s(u[h], t, n, 2);
    f && r(a, t, n);
  }
  function Uh(e, t, n, r, s, o, { o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
    const h = t.target = ai(t.props, l);
    if (h) {
      const d = Sr(t.props), p = h._lpa || h.firstChild;
      if (t.shapeFlag & 16) if (d) t.anchor = f(i(e), t, a(e), n, r, s, o), t.targetStart = p, t.targetAnchor = p && i(p);
      else {
        t.anchor = i(e);
        let y = p;
        for (; y; ) {
          if (y && y.nodeType === 8) {
            if (y.data === "teleport start anchor") t.targetStart = y;
            else if (y.data === "teleport anchor") {
              t.targetAnchor = y, h._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          y = i(y);
        }
        t.targetAnchor || du(h, t, c, u), f(p && i(p), t, h, n, r, s, o);
      }
      Ss(t, d);
    }
    return t.anchor && i(t.anchor);
  }
  pS = fu;
  function Ss(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, s;
      for (t ? (r = e.el, s = e.anchor) : (r = e.targetStart, s = e.targetAnchor); r && r !== s; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function du(e, t, n, r) {
    const s = t.targetStart = n(""), o = t.targetAnchor = n("");
    return s[cu] = o, e && (r(s, e), r(o, e)), o;
  }
  const nn = Symbol("_leaveCb"), as = Symbol("_enterCb");
  function hu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return vt(() => {
      e.isMounted = true;
    }), Ln(() => {
      e.isUnmounting = true;
    }), e;
  }
  const at = [
    Function,
    Array
  ], pu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: at,
    onEnter: at,
    onAfterEnter: at,
    onEnterCancelled: at,
    onBeforeLeave: at,
    onLeave: at,
    onAfterLeave: at,
    onLeaveCancelled: at,
    onBeforeAppear: at,
    onAppear: at,
    onAfterAppear: at,
    onAppearCancelled: at
  }, mu = (e) => {
    const t = e.subTree;
    return t.component ? mu(t.component) : t;
  }, Vh = {
    name: "BaseTransition",
    props: pu,
    setup(e, { slots: t }) {
      const n = Xe(), r = hu();
      return () => {
        const s = t.default && Yi(t.default(), true);
        if (!s || !s.length) return;
        const o = gu(s), i = re(e), { mode: a } = i;
        if (r.isLeaving) return Co(o);
        const l = Oa(o);
        if (!l) return Co(o);
        let u = Ir(l, i, r, n, (f) => u = f);
        l.type !== Oe && gn(l, u);
        let c = n.subTree && Oa(n.subTree);
        if (c && c.type !== Oe && !ht(l, c) && mu(n).type !== Oe) {
          let f = Ir(c, i, r, n);
          if (gn(c, f), a === "out-in" && l.type !== Oe) return r.isLeaving = true, f.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Co(o);
          a === "in-out" && l.type !== Oe ? f.delayLeave = (h, d, p) => {
            const y = yu(r, c);
            y[String(c.key)] = c, h[nn] = () => {
              d(), h[nn] = void 0, delete u.delayedLeave, c = void 0;
            }, u.delayedLeave = () => {
              p(), delete u.delayedLeave, c = void 0;
            };
          } : c = void 0;
        } else c && (c = void 0);
        return o;
      };
    }
  };
  function gu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Oe) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Wh = Vh;
  function yu(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Ir(e, t, n, r, s) {
    const { appear: o, mode: i, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: h, onLeave: d, onAfterLeave: p, onLeaveCancelled: y, onBeforeAppear: S, onAppear: k, onAfterAppear: _, onAppearCancelled: m } = t, v = String(e.key), w = yu(n, e), A = (C, O) => {
      C && yt(C, r, 9, O);
    }, M = (C, O) => {
      const E = O[1];
      A(C, O), J(C) ? C.every((R) => R.length <= 1) && E() : C.length <= 1 && E();
    }, N = {
      mode: i,
      persisted: a,
      beforeEnter(C) {
        let O = l;
        if (!n.isMounted) if (o) O = S || l;
        else return;
        C[nn] && C[nn](true);
        const E = w[v];
        E && ht(e, E) && E.el[nn] && E.el[nn](), A(O, [
          C
        ]);
      },
      enter(C) {
        let O = u, E = c, R = f;
        if (!n.isMounted) if (o) O = k || u, E = _ || c, R = m || f;
        else return;
        let B = false;
        const X = C[as] = (Z) => {
          B || (B = true, Z ? A(R, [
            C
          ]) : A(E, [
            C
          ]), N.delayedLeave && N.delayedLeave(), C[as] = void 0);
        };
        O ? M(O, [
          C,
          X
        ]) : X();
      },
      leave(C, O) {
        const E = String(e.key);
        if (C[as] && C[as](true), n.isUnmounting) return O();
        A(h, [
          C
        ]);
        let R = false;
        const B = C[nn] = (X) => {
          R || (R = true, O(), X ? A(y, [
            C
          ]) : A(p, [
            C
          ]), C[nn] = void 0, w[E] === e && delete w[E]);
        };
        w[E] = e, d ? M(d, [
          C,
          B
        ]) : B();
      },
      clone(C) {
        const O = Ir(C, t, n, r, s);
        return s && s(O), O;
      }
    };
    return N;
  }
  function Co(e) {
    if (Kr(e)) return e = bt(e), e.children = null, e;
  }
  function Oa(e) {
    if (!Kr(e)) return uu(e.type) && e.children ? gu(e.children) : e;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && ee(n.default)) return n.default();
    }
  }
  function gn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, gn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Yi(e, t = false, n) {
    let r = [], s = 0;
    for (let o = 0; o < e.length; o++) {
      let i = e[o];
      const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : o);
      i.type === Se ? (i.patchFlag & 128 && s++, r = r.concat(Yi(i.children, t, a))) : (t || i.type !== Oe) && r.push(a != null ? bt(i, {
        key: a
      }) : i);
    }
    if (s > 1) for (let o = 0; o < r.length; o++) r[o].patchFlag = -2;
    return r;
  }
  he = function(e, t) {
    return ee(e) ? Ce({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  mS = function() {
    const e = Xe();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
  };
  function Qi(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  gS = function(e) {
    const t = Xe(), n = ut(null);
    if (t) {
      const s = t.refs === ae ? t.refs = {} : t.refs;
      Object.defineProperty(s, e, {
        enumerable: true,
        get: () => n.value,
        set: (o) => n.value = o
      });
    }
    return n;
  };
  function $r(e, t, n, r, s = false) {
    if (J(e)) {
      e.forEach((p, y) => $r(p, t && (J(t) ? t[y] : t), n, r, s));
      return;
    }
    if (fn(r) && !s) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && $r(e, t, n, r.component.subTree);
      return;
    }
    const o = r.shapeFlag & 4 ? co(r.component) : r.el, i = s ? null : o, { i: a, r: l } = e, u = t && t.r, c = a.refs === ae ? a.refs = {} : a.refs, f = a.setupState, h = re(f), d = f === ae ? () => false : (p) => ue(h, p);
    if (u != null && u !== l && (ke(u) ? (c[u] = null, d(u) && (f[u] = null)) : we(u) && (u.value = null)), ee(l)) qr(l, a, 12, [
      i,
      c
    ]);
    else {
      const p = ke(l), y = we(l);
      if (p || y) {
        const S = () => {
          if (e.f) {
            const k = p ? d(l) ? f[l] : c[l] : l.value;
            s ? J(k) && Vi(k, o) : J(k) ? k.includes(o) || k.push(o) : p ? (c[l] = [
              o
            ], d(l) && (f[l] = c[l])) : (l.value = [
              o
            ], e.k && (c[e.k] = l.value));
          } else p ? (c[l] = i, d(l) && (f[l] = i)) : y && (l.value = i, e.k && (c[e.k] = i));
        };
        i ? (S.id = -1, xe(S, n)) : S();
      }
    }
  }
  let La = false;
  const Nn = () => {
    La || (console.error("Hydration completed but contains mismatches."), La = true);
  }, qh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Kh = (e) => e.namespaceURI.includes("MathML"), ls = (e) => {
    if (e.nodeType === 1) {
      if (qh(e)) return "svg";
      if (Kh(e)) return "mathml";
    }
  }, Fn = (e) => e.nodeType === 8;
  function Gh(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: s, nextSibling: o, parentNode: i, remove: a, insert: l, createComment: u } } = e, c = (m, v) => {
      if (!v.hasChildNodes()) {
        n(null, m, v), xs(), v._vnode = m;
        return;
      }
      f(v.firstChild, m, null, null, null), xs(), v._vnode = m;
    }, f = (m, v, w, A, M, N = false) => {
      N = N || !!v.dynamicChildren;
      const C = Fn(m) && m.data === "[", O = () => y(m, v, w, A, M, C), { type: E, ref: R, shapeFlag: B, patchFlag: X } = v;
      let Z = m.nodeType;
      v.el = m, X === -2 && (N = false, v.dynamicChildren = null);
      let H = null;
      switch (E) {
        case Pn:
          Z !== 3 ? v.children === "" ? (l(v.el = s(""), i(m), m), H = m) : H = O() : (m.data !== v.children && (Nn(), m.data = v.children), H = o(m));
          break;
        case Oe:
          _(m) ? (H = o(m), k(v.el = m.content.firstChild, m, w)) : Z !== 8 || C ? H = O() : H = o(m);
          break;
        case Er:
          if (C && (m = o(m), Z = m.nodeType), Z === 1 || Z === 3) {
            H = m;
            const K = !v.children.length;
            for (let G = 0; G < v.staticCount; G++) K && (v.children += H.nodeType === 1 ? H.outerHTML : H.data), G === v.staticCount - 1 && (v.anchor = H), H = o(H);
            return C ? o(H) : H;
          } else O();
          break;
        case Se:
          C ? H = p(m, v, w, A, M, N) : H = O();
          break;
        default:
          if (B & 1) (Z !== 1 || v.type.toLowerCase() !== m.tagName.toLowerCase()) && !_(m) ? H = O() : H = h(m, v, w, A, M, N);
          else if (B & 6) {
            v.slotScopeIds = M;
            const K = i(m);
            if (C ? H = S(m) : Fn(m) && m.data === "teleport start" ? H = S(m, m.data, "teleport end") : H = o(m), t(v, K, null, w, A, ls(K), N), fn(v) && !v.type.__asyncResolved) {
              let G;
              C ? (G = me(Se), G.anchor = H ? H.previousSibling : K.lastChild) : G = m.nodeType === 3 ? ar("") : me("div"), G.el = m, v.component.subTree = G;
            }
          } else B & 64 ? Z !== 8 ? H = O() : H = v.type.hydrate(m, v, w, A, M, N, e, d) : B & 128 && (H = v.type.hydrate(m, v, w, A, ls(i(m)), M, N, e, f));
      }
      return R != null && $r(R, null, A, v), H;
    }, h = (m, v, w, A, M, N) => {
      N = N || !!v.dynamicChildren;
      const { type: C, props: O, patchFlag: E, shapeFlag: R, dirs: B, transition: X } = v, Z = C === "input" || C === "option";
      if (Z || E !== -1) {
        B && Pt(v, null, w, "created");
        let H = false;
        if (_(m)) {
          H = Fu(null, X) && w && w.vnode.props && w.vnode.props.appear;
          const G = m.content.firstChild;
          H && X.beforeEnter(G), k(G, m, w), v.el = m = G;
        }
        if (R & 16 && !(O && (O.innerHTML || O.textContent))) {
          let G = d(m.firstChild, v, m, w, A, M, N);
          for (; G; ) {
            cs(m, 1) || Nn();
            const Pe = G;
            G = G.nextSibling, a(Pe);
          }
        } else if (R & 8) {
          let G = v.children;
          G[0] === `
` && (m.tagName === "PRE" || m.tagName === "TEXTAREA") && (G = G.slice(1)), m.textContent !== G && (cs(m, 0) || Nn(), m.textContent = v.children);
        }
        if (O) {
          if (Z || !N || E & 48) {
            const G = m.tagName.includes("-");
            for (const Pe in O) (Z && (Pe.endsWith("value") || Pe === "indeterminate") || Ur(Pe) && !Wn(Pe) || Pe[0] === "." || G) && r(m, Pe, null, O[Pe], void 0, w);
          } else if (O.onClick) r(m, "onClick", null, O.onClick, void 0, w);
          else if (E & 4 && Lt(O.style)) for (const G in O.style) O.style[G];
        }
        let K;
        (K = O && O.onVnodeBeforeMount) && Ye(K, w, v), B && Pt(v, null, w, "beforeMount"), ((K = O && O.onVnodeMounted) || B || H) && Gu(() => {
          K && Ye(K, w, v), H && X.enter(m), B && Pt(v, null, w, "mounted");
        }, A);
      }
      return m.nextSibling;
    }, d = (m, v, w, A, M, N, C) => {
      C = C || !!v.dynamicChildren;
      const O = v.children, E = O.length;
      for (let R = 0; R < E; R++) {
        const B = C ? O[R] : O[R] = st(O[R]), X = B.type === Pn;
        m ? (X && !C && R + 1 < E && st(O[R + 1]).type === Pn && (l(s(m.data.slice(B.children.length)), w, o(m)), m.data = B.children), m = f(m, B, A, M, N, C)) : X && !B.children ? l(B.el = s(""), w) : (cs(w, 1) || Nn(), n(null, B, w, null, A, M, ls(w), N));
      }
      return m;
    }, p = (m, v, w, A, M, N) => {
      const { slotScopeIds: C } = v;
      C && (M = M ? M.concat(C) : C);
      const O = i(m), E = d(o(m), v, O, w, A, M, N);
      return E && Fn(E) && E.data === "]" ? o(v.anchor = E) : (Nn(), l(v.anchor = u("]"), O, E), E);
    }, y = (m, v, w, A, M, N) => {
      if (cs(m.parentElement, 1) || Nn(), v.el = null, N) {
        const E = S(m);
        for (; ; ) {
          const R = o(m);
          if (R && R !== E) a(R);
          else break;
        }
      }
      const C = o(m), O = i(m);
      return a(m), n(null, v, O, C, w, A, ls(O), M), w && (w.vnode.el = v.el, lo(w, v.el)), C;
    }, S = (m, v = "[", w = "]") => {
      let A = 0;
      for (; m; ) if (m = o(m), m && Fn(m) && (m.data === v && A++, m.data === w)) {
        if (A === 0) return o(m);
        A--;
      }
      return m;
    }, k = (m, v, w) => {
      const A = v.parentNode;
      A && A.replaceChild(m, v);
      let M = w;
      for (; M; ) M.vnode.el === v && (M.vnode.el = M.subTree.el = m), M = M.parent;
    }, _ = (m) => m.nodeType === 1 && m.tagName === "TEMPLATE";
    return [
      c,
      f
    ];
  }
  const Ma = "data-allow-mismatch", zh = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };
  function cs(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(Ma); ) e = e.parentElement;
    const n = e && e.getAttribute(Ma);
    if (n == null) return false;
    if (n === "") return true;
    {
      const r = n.split(",");
      return t === 0 && r.includes("children") ? true : n.split(",").includes(zh[t]);
    }
  }
  Qs().requestIdleCallback;
  Qs().cancelIdleCallback;
  function Jh(e, t) {
    if (Fn(e) && e.data === "[") {
      let n = 1, r = e.nextSibling;
      for (; r; ) {
        if (r.nodeType === 1) {
          if (t(r) === false) break;
        } else if (Fn(r)) if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
        r = r.nextSibling;
      }
    } else t(e);
  }
  const fn = (e) => !!e.type.__asyncLoader;
  Ia = function(e) {
    ee(e) && (e = {
      loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: s = 200, hydrate: o, timeout: i, suspensible: a = true, onError: l } = e;
    let u = null, c, f = 0;
    const h = () => (f++, u = null, d()), d = () => {
      let p;
      return u || (p = u = t().catch((y) => {
        if (y = y instanceof Error ? y : new Error(String(y)), l) return new Promise((S, k) => {
          l(y, () => S(h()), () => k(y), f + 1);
        });
        throw y;
      }).then((y) => p !== u && u ? u : (y && (y.__esModule || y[Symbol.toStringTag] === "Module") && (y = y.default), c = y, y)));
    };
    return he({
      name: "AsyncComponentWrapper",
      __asyncLoader: d,
      __asyncHydrate(p, y, S) {
        const k = o ? () => {
          const _ = o(S, (m) => Jh(p, m));
          _ && (y.bum || (y.bum = [])).push(_);
        } : S;
        c ? k() : d().then(() => !y.isUnmounted && k());
      },
      get __asyncResolved() {
        return c;
      },
      setup() {
        const p = Le;
        if (Qi(p), c) return () => Po(c, p);
        const y = (m) => {
          u = null, or(m, p, 13, !r);
        };
        if (a && p.suspense || Xn) return d().then((m) => () => Po(m, p)).catch((m) => (y(m), () => r ? me(r, {
          error: m
        }) : null));
        const S = Re(false), k = Re(), _ = Re(!!s);
        return s && setTimeout(() => {
          _.value = false;
        }, s), i != null && setTimeout(() => {
          if (!S.value && !k.value) {
            const m = new Error(`Async component timed out after ${i}ms.`);
            y(m), k.value = m;
          }
        }, i), d().then(() => {
          S.value = true, p.parent && Kr(p.parent.vnode) && p.parent.update();
        }).catch((m) => {
          y(m), k.value = m;
        }), () => {
          if (S.value && c) return Po(c, p);
          if (k.value && r) return me(r, {
            error: k.value
          });
          if (n && !_.value) return me(n);
        };
      }
    });
  };
  function Po(e, t) {
    const { ref: n, props: r, children: s, ce: o } = t.vnode, i = me(e, r, s);
    return i.ref = n, i.ce = o, delete t.vnode.ce, i;
  }
  const Kr = (e) => e.type.__isKeepAlive, Yh = {
    name: "KeepAlive",
    __isKeepAlive: true,
    props: {
      include: [
        String,
        RegExp,
        Array
      ],
      exclude: [
        String,
        RegExp,
        Array
      ],
      max: [
        String,
        Number
      ]
    },
    setup(e, { slots: t }) {
      const n = Xe(), r = n.ctx;
      if (!r.renderer) return () => {
        const _ = t.default && t.default();
        return _ && _.length === 1 ? _[0] : _;
      };
      const s = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      let i = null;
      const a = n.suspense, { renderer: { p: l, m: u, um: c, o: { createElement: f } } } = r, h = f("div");
      r.activate = (_, m, v, w, A) => {
        const M = _.component;
        u(_, m, v, 0, a), l(M.vnode, _, m, v, M, a, w, _.slotScopeIds, A), xe(() => {
          M.isDeactivated = false, M.a && qn(M.a);
          const N = _.props && _.props.onVnodeMounted;
          N && Ye(N, M.parent, _);
        }, a);
      }, r.deactivate = (_) => {
        const m = _.component;
        Ms(m.m), Ms(m.a), u(_, h, null, 1, a), xe(() => {
          m.da && qn(m.da);
          const v = _.props && _.props.onVnodeUnmounted;
          v && Ye(v, m.parent, _), m.isDeactivated = true;
        }, a);
      };
      function d(_) {
        Ao(_), c(_, n, a, true);
      }
      function p(_) {
        s.forEach((m, v) => {
          const w = yi(m.type);
          w && !_(w) && y(v);
        });
      }
      function y(_) {
        const m = s.get(_);
        m && (!i || !ht(m, i)) ? d(m) : i && Ao(i), s.delete(_), o.delete(_);
      }
      Qe(() => [
        e.include,
        e.exclude
      ], ([_, m]) => {
        _ && p((v) => yr(_, v)), m && p((v) => !yr(m, v));
      }, {
        flush: "post",
        deep: true
      });
      let S = null;
      const k = () => {
        S != null && (Is(n.subTree.type) ? xe(() => {
          s.set(S, us(n.subTree));
        }, n.subTree.suspense) : s.set(S, us(n.subTree)));
      };
      return vt(k), Xi(k), Ln(() => {
        s.forEach((_) => {
          const { subTree: m, suspense: v } = n, w = us(m);
          if (_.type === w.type && _.key === w.key) {
            Ao(w);
            const A = w.component.da;
            A && xe(A, v);
            return;
          }
          d(_);
        });
      }), () => {
        if (S = null, !t.default) return i = null;
        const _ = t.default(), m = _[0];
        if (_.length > 1) return i = null, _;
        if (!xn(m) || !(m.shapeFlag & 4) && !(m.shapeFlag & 128)) return i = null, m;
        let v = us(m);
        if (v.type === Oe) return i = null, v;
        const w = v.type, A = yi(fn(v) ? v.type.__asyncResolved || {} : w), { include: M, exclude: N, max: C } = e;
        if (M && (!A || !yr(M, A)) || N && A && yr(N, A)) return v.shapeFlag &= -257, i = v, m;
        const O = v.key == null ? w : v.key, E = s.get(O);
        return v.el && (v = bt(v), m.shapeFlag & 128 && (m.ssContent = v)), S = O, E ? (v.el = E.el, v.component = E.component, v.transition && gn(v, v.transition), v.shapeFlag |= 512, o.delete(O), o.add(O)) : (o.add(O), C && o.size > parseInt(C, 10) && y(o.values().next().value)), v.shapeFlag |= 256, i = v, Is(m.type) ? m : v;
      };
    }
  }, Qh = Yh;
  function yr(e, t) {
    return J(e) ? e.some((n) => yr(n, t)) : ke(e) ? e.split(",").includes(t) : eh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  function vu(e, t) {
    _u(e, "a", t);
  }
  function bu(e, t) {
    _u(e, "da", t);
  }
  function _u(e, t, n = Le) {
    const r = e.__wdc || (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated) return;
        s = s.parent;
      }
      return e();
    });
    if (oo(t, r, n), n) {
      let s = n.parent;
      for (; s && s.parent; ) Kr(s.parent.vnode) && Xh(r, t, n, s), s = s.parent;
    }
  }
  function Xh(e, t, n, r) {
    const s = oo(t, e, r, true);
    io(() => {
      Vi(r[t], s);
    }, n);
  }
  function Ao(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function us(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function oo(e, t, n = Le, r = false) {
    if (n) {
      const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
        yn();
        const a = On(n), l = yt(t, n, e, i);
        return a(), vn(), l;
      });
      return r ? s.unshift(o) : s.push(o), o;
    }
  }
  let Gt, wu, Zh, ep, tp, np;
  Gt = (e) => (t, n = Le) => {
    (!Xn || e === "sp") && oo(e, (...r) => t(...r), n);
  };
  wu = Gt("bm");
  vt = Gt("m");
  Zh = Gt("bu");
  Xi = Gt("u");
  Ln = Gt("bum");
  io = Gt("um");
  ep = Gt("sp");
  tp = Gt("rtg");
  np = Gt("rtc");
  function Su(e, t = Le) {
    oo("ec", e, t);
  }
  const ku = "components";
  function li(e, t) {
    return Tu(ku, e, true, t) || e;
  }
  const Eu = Symbol.for("v-ndc");
  Ge = function(e) {
    return ke(e) ? Tu(ku, e, false) || e : e || Eu;
  };
  function Tu(e, t, n = true, r = false) {
    const s = Me || Le;
    if (s) {
      const o = s.type;
      {
        const a = yi(o, false);
        if (a && (a === t || a === ot(t) || a === Ys(ot(t)))) return o;
      }
      const i = $a(s[e] || o[e], t) || $a(s.appContext[e], t);
      return !i && r ? o : i;
    }
  }
  function $a(e, t) {
    return e && (e[t] || e[ot(t)] || e[Ys(ot(t))]);
  }
  Qn = function(e, t, n, r) {
    let s;
    const o = n, i = J(e);
    if (i || ke(e)) {
      const a = i && Lt(e);
      let l = false;
      a && (l = !ct(e), e = eo(e)), s = new Array(e.length);
      for (let u = 0, c = e.length; u < c; u++) s[u] = t(l ? je(e[u]) : e[u], u, void 0, o);
    } else if (typeof e == "number") {
      s = new Array(e);
      for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o);
    } else if (ge(e)) if (e[Symbol.iterator]) s = Array.from(e, (a, l) => t(a, l, void 0, o));
    else {
      const a = Object.keys(e);
      s = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        s[l] = t(e[c], c, l, o);
      }
    }
    else s = [];
    return s;
  };
  Ae = function(e, t, n = {}, r, s) {
    if (Me.ce || Me.parent && fn(Me.parent) && Me.parent.ce) return t !== "default" && (n.name = t), q(), se(Se, null, [
      me("slot", n, r && r())
    ], 64);
    let o = e[t];
    o && o._c && (o._d = false), q();
    const i = o && Ru(o(n)), a = n.key || i && i.key, l = se(Se, {
      key: (a && !gt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !s && l.scopeId && (l.slotScopeIds = [
      l.scopeId + "-s"
    ]), o && o._c && (o._d = true), l;
  };
  function Ru(e) {
    return e.some((t) => xn(t) ? !(t.type === Oe || t.type === Se && !Ru(t.children)) : true) ? e : null;
  }
  const ci = (e) => e ? Xu(e) ? co(e) : ci(e.parent) : null, kr = Ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ci(e.parent),
    $root: (e) => ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Au(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ji(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mt.bind(e.proxy)),
    $watch: (e) => Ep.bind(e)
  }), xo = (e, t) => e !== ae && !e.__isScriptSetup && ue(e, t), rp = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: l } = e;
      let u;
      if (t[0] !== "$") {
        const d = i[t];
        if (d !== void 0) switch (d) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
        else {
          if (xo(r, t)) return i[t] = 1, r[t];
          if (s !== ae && ue(s, t)) return i[t] = 2, s[t];
          if ((u = e.propsOptions[0]) && ue(u, t)) return i[t] = 3, o[t];
          if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
          ui && (i[t] = 0);
        }
      }
      const c = kr[t];
      let f, h;
      if (c) return t === "$attrs" && De(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
      if (h = l.config.globalProperties, ue(h, t)) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: o } = e;
      return xo(s, t) ? (s[t] = n, true) : r !== ae && ue(r, t) ? (r[t] = n, true) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (o[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o } }, i) {
      let a;
      return !!n[i] || e !== ae && ue(e, i) || xo(t, i) || (a = o[0]) && ue(a, i) || ue(r, i) || ue(kr, i) || ue(s.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  yS = function() {
    return Cu().slots;
  };
  vS = function() {
    return Cu().attrs;
  };
  function Cu() {
    const e = Xe();
    return e.setupContext || (e.setupContext = ef(e));
  }
  function Nr(e) {
    return J(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  bS = function(e, t) {
    const n = Nr(e);
    for (const r in t) {
      if (r.startsWith("__skip")) continue;
      let s = n[r];
      s ? J(s) || ee(s) ? s = n[r] = {
        type: s,
        default: t[r]
      } : s.default = t[r] : s === null && (s = n[r] = {
        default: t[r]
      }), s && t[`__skip_${r}`] && (s.skipFactory = true);
    }
    return n;
  };
  _S = function(e, t) {
    return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : Ce({}, Nr(e), Nr(t));
  };
  wS = function(e) {
    const t = Xe();
    let n = e();
    return mi(), zs(n) && (n = n.catch((r) => {
      throw On(t), r;
    })), [
      n,
      () => On(t)
    ];
  };
  let ui = true;
  function sp(e) {
    const t = Au(e), n = e.proxy, r = e.ctx;
    ui = false, t.beforeCreate && Na(t.beforeCreate, e, "bc");
    const { data: s, computed: o, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: h, beforeUpdate: d, updated: p, activated: y, deactivated: S, beforeDestroy: k, beforeUnmount: _, destroyed: m, unmounted: v, render: w, renderTracked: A, renderTriggered: M, errorCaptured: N, serverPrefetch: C, expose: O, inheritAttrs: E, components: R, directives: B, filters: X } = t;
    if (u && op(u, r, null), i) for (const K in i) {
      const G = i[K];
      ee(G) && (r[K] = G.bind(n));
    }
    if (s) {
      const K = s.call(n, n);
      ge(K) && (e.data = It(K));
    }
    if (ui = true, o) for (const K in o) {
      const G = o[K], Pe = ee(G) ? G.bind(n, n) : ee(G.get) ? G.get.bind(n, n) : Ot, Jt = !ee(G) && ee(G.set) ? G.set.bind(n) : Ot, wt = Y({
        get: Pe,
        set: Jt
      });
      Object.defineProperty(r, K, {
        enumerable: true,
        configurable: true,
        get: () => wt.value,
        set: (ze) => wt.value = ze
      });
    }
    if (a) for (const K in a) Pu(a[K], r, n, K);
    if (l) {
      const K = ee(l) ? l.call(n) : l;
      Reflect.ownKeys(K).forEach((G) => {
        dn(G, K[G]);
      });
    }
    c && Na(c, e, "c");
    function H(K, G) {
      J(G) ? G.forEach((Pe) => K(Pe.bind(n))) : G && K(G.bind(n));
    }
    if (H(wu, f), H(vt, h), H(Zh, d), H(Xi, p), H(vu, y), H(bu, S), H(Su, N), H(np, A), H(tp, M), H(Ln, _), H(io, v), H(ep, C), J(O)) if (O.length) {
      const K = e.exposed || (e.exposed = {});
      O.forEach((G) => {
        Object.defineProperty(K, G, {
          get: () => n[G],
          set: (Pe) => n[G] = Pe
        });
      });
    } else e.exposed || (e.exposed = {});
    w && e.render === Ot && (e.render = w), E != null && (e.inheritAttrs = E), R && (e.components = R), B && (e.directives = B), C && Qi(e);
  }
  function op(e, t, n = Ot) {
    J(e) && (e = fi(e));
    for (const r in e) {
      const s = e[r];
      let o;
      ge(s) ? "default" in s ? o = Te(s.from || r, s.default, true) : o = Te(s.from || r) : o = Te(s), we(o) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => o.value,
        set: (i) => o.value = i
      }) : t[r] = o;
    }
  }
  function Na(e, t, n) {
    yt(J(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Pu(e, t, n, r) {
    let s = r.includes(".") ? Vu(n, r) : () => n[r];
    if (ke(e)) {
      const o = t[e];
      ee(o) && Qe(s, o);
    } else if (ee(e)) Qe(s, e.bind(n));
    else if (ge(e)) if (J(e)) e.forEach((o) => Pu(o, t, n, r));
    else {
      const o = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(o) && Qe(s, o, e);
    }
  }
  function Au(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: o, config: { optionMergeStrategies: i } } = e.appContext, a = o.get(t);
    let l;
    return a ? l = a : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach((u) => Ls(l, u, i, true)), Ls(l, t, i)), ge(t) && o.set(t, l), l;
  }
  function Ls(e, t, n, r = false) {
    const { mixins: s, extends: o } = t;
    o && Ls(e, o, n, true), s && s.forEach((i) => Ls(e, i, n, true));
    for (const i in t) if (!(r && i === "expose")) {
      const a = ip[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
    return e;
  }
  const ip = {
    data: Ba,
    props: Da,
    emits: Da,
    methods: vr,
    computed: vr,
    beforeCreate: Ve,
    created: Ve,
    beforeMount: Ve,
    mounted: Ve,
    beforeUpdate: Ve,
    updated: Ve,
    beforeDestroy: Ve,
    beforeUnmount: Ve,
    destroyed: Ve,
    unmounted: Ve,
    activated: Ve,
    deactivated: Ve,
    errorCaptured: Ve,
    serverPrefetch: Ve,
    components: vr,
    directives: vr,
    watch: lp,
    provide: Ba,
    inject: ap
  };
  function Ba(e, t) {
    return t ? e ? function() {
      return Ce(ee(e) ? e.call(this, this) : e, ee(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function ap(e, t) {
    return vr(fi(e), fi(t));
  }
  function fi(e) {
    if (J(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Ve(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function vr(e, t) {
    return e ? Ce(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Da(e, t) {
    return e ? J(e) && J(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Ce(/* @__PURE__ */ Object.create(null), Nr(e), Nr(t ?? {})) : t;
  }
  function lp(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ce(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = Ve(e[r], t[r]);
    return n;
  }
  function xu() {
    return {
      app: null,
      config: {
        isNativeTag: Xd,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let cp = 0;
  function up(e, t) {
    return function(r, s = null) {
      ee(r) || (r = Ce({}, r)), s != null && !ge(s) && (s = null);
      const o = xu(), i = /* @__PURE__ */ new WeakSet(), a = [];
      let l = false;
      const u = o.app = {
        _uid: cp++,
        _component: r,
        _props: s,
        _container: null,
        _context: o,
        _instance: null,
        version: Kp,
        get config() {
          return o.config;
        },
        set config(c) {
        },
        use(c, ...f) {
          return i.has(c) || (c && ee(c.install) ? (i.add(c), c.install(u, ...f)) : ee(c) && (i.add(c), c(u, ...f))), u;
        },
        mixin(c) {
          return o.mixins.includes(c) || o.mixins.push(c), u;
        },
        component(c, f) {
          return f ? (o.components[c] = f, u) : o.components[c];
        },
        directive(c, f) {
          return f ? (o.directives[c] = f, u) : o.directives[c];
        },
        mount(c, f, h) {
          if (!l) {
            const d = u._ceVNode || me(r, s);
            return d.appContext = o, h === true ? h = "svg" : h === false && (h = void 0), f && t ? t(d, c) : e(d, c, h), l = true, u._container = c, c.__vue_app__ = u, co(d.component);
          }
        },
        onUnmount(c) {
          a.push(c);
        },
        unmount() {
          l && (yt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(c, f) {
          return o.provides[c] = f, u;
        },
        runWithContext(c) {
          const f = Cn;
          Cn = u;
          try {
            return c();
          } finally {
            Cn = f;
          }
        }
      };
      return u;
    };
  }
  let Cn = null;
  dn = function(e, t) {
    if (Le) {
      let n = Le.provides;
      const r = Le.parent && Le.parent.provides;
      r === n && (n = Le.provides = Object.create(r)), n[e] = t;
    }
  };
  Te = function(e, t, n = false) {
    const r = Le || Me;
    if (r || Cn) {
      const s = Cn ? Cn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (s && e in s) return s[e];
      if (arguments.length > 1) return n && ee(t) ? t.call(r && r.proxy) : t;
    }
  };
  ir = function() {
    return !!(Le || Me || Cn);
  };
  const Ou = {}, Lu = () => Object.create(Ou), Mu = (e) => Object.getPrototypeOf(e) === Ou;
  function fp(e, t, n, r = false) {
    const s = {}, o = Lu();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Iu(e, t, s, o);
    for (const i in e.propsOptions[0]) i in s || (s[i] = void 0);
    n ? e.props = r ? s : Ft(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o;
  }
  function dp(e, t, n, r) {
    const { props: s, attrs: o, vnode: { patchFlag: i } } = e, a = re(s), [l] = e.propsOptions;
    let u = false;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let h = c[f];
          if (ao(e.emitsOptions, h)) continue;
          const d = t[h];
          if (l) if (ue(o, h)) d !== o[h] && (o[h] = d, u = true);
          else {
            const p = ot(h);
            s[p] = di(l, a, p, d, e, false);
          }
          else d !== o[h] && (o[h] = d, u = true);
        }
      }
    } else {
      Iu(e, t, s, o) && (u = true);
      let c;
      for (const f in a) (!t || !ue(t, f) && ((c = qt(f)) === f || !ue(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (s[f] = di(l, a, f, void 0, e, true)) : delete s[f]);
      if (o !== a) for (const f in o) (!t || !ue(t, f)) && (delete o[f], u = true);
    }
    u && jt(e.attrs, "set", "");
  }
  function Iu(e, t, n, r) {
    const [s, o] = e.propsOptions;
    let i = false, a;
    if (t) for (let l in t) {
      if (Wn(l)) continue;
      const u = t[l];
      let c;
      s && ue(s, c = ot(l)) ? !o || !o.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ao(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = true);
    }
    if (o) {
      const l = re(n), u = a || ae;
      for (let c = 0; c < o.length; c++) {
        const f = o[c];
        n[f] = di(s, l, f, u[f], e, !ue(u, f));
      }
    }
    return i;
  }
  function di(e, t, n, r, s, o) {
    const i = e[n];
    if (i != null) {
      const a = ue(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && ee(l)) {
          const { propsDefaults: u } = s;
          if (n in u) r = u[n];
          else {
            const c = On(s);
            r = u[n] = l.call(null, t), c();
          }
        } else r = l;
        s.ce && s.ce._setProp(n, r);
      }
      i[0] && (o && !a ? r = false : i[1] && (r === "" || r === qt(n)) && (r = true));
    }
    return r;
  }
  const hp = /* @__PURE__ */ new WeakMap();
  function $u(e, t, n = false) {
    const r = n ? hp : t.propsCache, s = r.get(e);
    if (s) return s;
    const o = e.props, i = {}, a = [];
    let l = false;
    if (!ee(e)) {
      const c = (f) => {
        l = true;
        const [h, d] = $u(f, t, true);
        Ce(i, h), d && a.push(...d);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!o && !l) return ge(e) && r.set(e, Un), Un;
    if (J(o)) for (let c = 0; c < o.length; c++) {
      const f = ot(o[c]);
      ja(f) && (i[f] = ae);
    }
    else if (o) for (const c in o) {
      const f = ot(c);
      if (ja(f)) {
        const h = o[c], d = i[f] = J(h) || ee(h) ? {
          type: h
        } : Ce({}, h), p = d.type;
        let y = false, S = true;
        if (J(p)) for (let k = 0; k < p.length; ++k) {
          const _ = p[k], m = ee(_) && _.name;
          if (m === "Boolean") {
            y = true;
            break;
          } else m === "String" && (S = false);
        }
        else y = ee(p) && p.name === "Boolean";
        d[0] = y, d[1] = S, (y || ue(d, "default")) && a.push(f);
      }
    }
    const u = [
      i,
      a
    ];
    return ge(e) && r.set(e, u), u;
  }
  function ja(e) {
    return e[0] !== "$" && !Wn(e);
  }
  const Nu = (e) => e[0] === "_" || e === "$stable", Zi = (e) => J(e) ? e.map(st) : [
    st(e)
  ], pp = (e, t, n) => {
    if (t._n) return t;
    const r = $e((...s) => Zi(t(...s)), n);
    return r._c = false, r;
  }, Bu = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (Nu(s)) continue;
      const o = e[s];
      if (ee(o)) t[s] = pp(s, o, r);
      else if (o != null) {
        const i = Zi(o);
        t[s] = () => i;
      }
    }
  }, Du = (e, t) => {
    const n = Zi(t);
    e.slots.default = () => n;
  }, ju = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  }, mp = (e, t, n) => {
    const r = e.slots = Lu();
    if (e.vnode.shapeFlag & 32) {
      const s = t._;
      s ? (ju(r, t, n), n && Oc(r, "_", s, true)) : Bu(t, r);
    } else t && Du(e, t);
  }, gp = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let o = true, i = ae;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? o = false : ju(s, t, n) : (o = !t.$stable, Bu(t, s)), i = t;
    } else t && (Du(e, t), i = {
      default: 1
    });
    if (o) for (const a in s) !Nu(a) && i[a] == null && delete s[a];
  }, xe = Gu;
  function yp(e) {
    return Hu(e);
  }
  function vp(e) {
    return Hu(e, Gh);
  }
  function Hu(e, t) {
    const n = Qs();
    n.__VUE__ = true;
    const { insert: r, remove: s, patchProp: o, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: h, setScopeId: d = Ot, insertStaticContent: p } = e, y = (g, b, T, L = null, P = null, I = null, F = void 0, j = null, D = !!b.dynamicChildren) => {
      if (g === b) return;
      g && !ht(g, b) && (L = x(g), ze(g, P, I, true), g = null), b.patchFlag === -2 && (D = false, b.dynamicChildren = null);
      const { type: $, ref: te, shapeFlag: V } = b;
      switch ($) {
        case Pn:
          S(g, b, T, L);
          break;
        case Oe:
          k(g, b, T, L);
          break;
        case Er:
          g == null && _(b, T, L, F);
          break;
        case Se:
          R(g, b, T, L, P, I, F, j, D);
          break;
        default:
          V & 1 ? w(g, b, T, L, P, I, F, j, D) : V & 6 ? B(g, b, T, L, P, I, F, j, D) : (V & 64 || V & 128) && $.process(g, b, T, L, P, I, F, j, D, z);
      }
      te != null && P && $r(te, g && g.ref, I, b || g, !b);
    }, S = (g, b, T, L) => {
      if (g == null) r(b.el = a(b.children), T, L);
      else {
        const P = b.el = g.el;
        b.children !== g.children && u(P, b.children);
      }
    }, k = (g, b, T, L) => {
      g == null ? r(b.el = l(b.children || ""), T, L) : b.el = g.el;
    }, _ = (g, b, T, L) => {
      [g.el, g.anchor] = p(g.children, b, T, L, g.el, g.anchor);
    }, m = ({ el: g, anchor: b }, T, L) => {
      let P;
      for (; g && g !== b; ) P = h(g), r(g, T, L), g = P;
      r(b, T, L);
    }, v = ({ el: g, anchor: b }) => {
      let T;
      for (; g && g !== b; ) T = h(g), s(g), g = T;
      s(b);
    }, w = (g, b, T, L, P, I, F, j, D) => {
      b.type === "svg" ? F = "svg" : b.type === "math" && (F = "mathml"), g == null ? A(b, T, L, P, I, F, j, D) : C(g, b, P, I, F, j, D);
    }, A = (g, b, T, L, P, I, F, j) => {
      let D, $;
      const { props: te, shapeFlag: V, transition: Q, dirs: ne } = g;
      if (D = g.el = i(g.type, I, te && te.is, te), V & 8 ? c(D, g.children) : V & 16 && N(g.children, D, null, L, P, Oo(g, I), F, j), ne && Pt(g, null, L, "created"), M(D, g, g.scopeId, F, L), te) {
        for (const be in te) be !== "value" && !Wn(be) && o(D, be, null, te[be], I, L);
        "value" in te && o(D, "value", null, te.value, I), ($ = te.onVnodeBeforeMount) && Ye($, L, g);
      }
      ne && Pt(g, null, L, "beforeMount");
      const oe = Fu(P, Q);
      oe && Q.beforeEnter(D), r(D, b, T), (($ = te && te.onVnodeMounted) || oe || ne) && xe(() => {
        $ && Ye($, L, g), oe && Q.enter(D), ne && Pt(g, null, L, "mounted");
      }, P);
    }, M = (g, b, T, L, P) => {
      if (T && d(g, T), L) for (let I = 0; I < L.length; I++) d(g, L[I]);
      if (P) {
        let I = P.subTree;
        if (b === I || Is(I.type) && (I.ssContent === b || I.ssFallback === b)) {
          const F = P.vnode;
          M(g, F, F.scopeId, F.slotScopeIds, P.parent);
        }
      }
    }, N = (g, b, T, L, P, I, F, j, D = 0) => {
      for (let $ = D; $ < g.length; $++) {
        const te = g[$] = j ? rn(g[$]) : st(g[$]);
        y(null, te, b, T, L, P, I, F, j);
      }
    }, C = (g, b, T, L, P, I, F) => {
      const j = b.el = g.el;
      let { patchFlag: D, dynamicChildren: $, dirs: te } = b;
      D |= g.patchFlag & 16;
      const V = g.props || ae, Q = b.props || ae;
      let ne;
      if (T && _n(T, false), (ne = Q.onVnodeBeforeUpdate) && Ye(ne, T, b, g), te && Pt(b, g, T, "beforeUpdate"), T && _n(T, true), (V.innerHTML && Q.innerHTML == null || V.textContent && Q.textContent == null) && c(j, ""), $ ? O(g.dynamicChildren, $, j, T, L, Oo(b, P), I) : F || G(g, b, j, null, T, L, Oo(b, P), I, false), D > 0) {
        if (D & 16) E(j, V, Q, T, P);
        else if (D & 2 && V.class !== Q.class && o(j, "class", null, Q.class, P), D & 4 && o(j, "style", V.style, Q.style, P), D & 8) {
          const oe = b.dynamicProps;
          for (let be = 0; be < oe.length; be++) {
            const fe = oe[be], Ze = V[fe], Be = Q[fe];
            (Be !== Ze || fe === "value") && o(j, fe, Ze, Be, P, T);
          }
        }
        D & 1 && g.children !== b.children && c(j, b.children);
      } else !F && $ == null && E(j, V, Q, T, P);
      ((ne = Q.onVnodeUpdated) || te) && xe(() => {
        ne && Ye(ne, T, b, g), te && Pt(b, g, T, "updated");
      }, L);
    }, O = (g, b, T, L, P, I, F) => {
      for (let j = 0; j < b.length; j++) {
        const D = g[j], $ = b[j], te = D.el && (D.type === Se || !ht(D, $) || D.shapeFlag & 70) ? f(D.el) : T;
        y(D, $, te, null, L, P, I, F, true);
      }
    }, E = (g, b, T, L, P) => {
      if (b !== T) {
        if (b !== ae) for (const I in b) !Wn(I) && !(I in T) && o(g, I, b[I], null, P, L);
        for (const I in T) {
          if (Wn(I)) continue;
          const F = T[I], j = b[I];
          F !== j && I !== "value" && o(g, I, j, F, P, L);
        }
        "value" in T && o(g, "value", b.value, T.value, P);
      }
    }, R = (g, b, T, L, P, I, F, j, D) => {
      const $ = b.el = g ? g.el : a(""), te = b.anchor = g ? g.anchor : a("");
      let { patchFlag: V, dynamicChildren: Q, slotScopeIds: ne } = b;
      ne && (j = j ? j.concat(ne) : ne), g == null ? (r($, T, L), r(te, T, L), N(b.children || [], T, te, P, I, F, j, D)) : V > 0 && V & 64 && Q && g.dynamicChildren ? (O(g.dynamicChildren, Q, T, P, I, F, j), (b.key != null || P && b === P.subTree) && ea(g, b, true)) : G(g, b, T, te, P, I, F, j, D);
    }, B = (g, b, T, L, P, I, F, j, D) => {
      b.slotScopeIds = j, g == null ? b.shapeFlag & 512 ? P.ctx.activate(b, T, L, F, D) : X(b, T, L, P, I, F, D) : Z(g, b, D);
    }, X = (g, b, T, L, P, I, F) => {
      const j = g.component = Hp(g, L, P);
      if (Kr(g) && (j.ctx.renderer = z), Fp(j, false, F), j.asyncDep) {
        if (P && P.registerDep(j, H, F), !g.el) {
          const D = j.subTree = me(Oe);
          k(null, D, b, T);
        }
      } else H(j, g, b, T, P, I, F);
    }, Z = (g, b, T) => {
      const L = b.component = g.component;
      if (Ap(g, b, T)) if (L.asyncDep && !L.asyncResolved) {
        K(L, b, T);
        return;
      } else L.next = b, L.update();
      else b.el = g.el, L.vnode = b;
    }, H = (g, b, T, L, P, I, F) => {
      const j = () => {
        if (g.isMounted) {
          let { next: V, bu: Q, u: ne, parent: oe, vnode: be } = g;
          {
            const et = Uu(g);
            if (et) {
              V && (V.el = be.el, K(g, V, F)), et.asyncDep.then(() => {
                g.isUnmounted || j();
              });
              return;
            }
          }
          let fe = V, Ze;
          _n(g, false), V ? (V.el = be.el, K(g, V, F)) : V = be, Q && qn(Q), (Ze = V.props && V.props.onVnodeBeforeUpdate) && Ye(Ze, oe, V, be), _n(g, true);
          const Be = Lo(g), ft = g.subTree;
          g.subTree = Be, y(ft, Be, f(ft.el), x(ft), g, P, I), V.el = Be.el, fe === null && lo(g, Be.el), ne && xe(ne, P), (Ze = V.props && V.props.onVnodeUpdated) && xe(() => Ye(Ze, oe, V, be), P);
        } else {
          let V;
          const { el: Q, props: ne } = b, { bm: oe, m: be, parent: fe, root: Ze, type: Be } = g, ft = fn(b);
          if (_n(g, false), oe && qn(oe), !ft && (V = ne && ne.onVnodeBeforeMount) && Ye(V, fe, b), _n(g, true), Q && Ee) {
            const et = () => {
              g.subTree = Lo(g), Ee(Q, g.subTree, g, P, null);
            };
            ft && Be.__asyncHydrate ? Be.__asyncHydrate(Q, g, et) : et();
          } else {
            Ze.ce && Ze.ce._injectChildStyle(Be);
            const et = g.subTree = Lo(g);
            y(null, et, T, L, g, P, I), b.el = et.el;
          }
          if (be && xe(be, P), !ft && (V = ne && ne.onVnodeMounted)) {
            const et = b;
            xe(() => Ye(V, fe, et), P);
          }
          (b.shapeFlag & 256 || fe && fn(fe.vnode) && fe.vnode.shapeFlag & 256) && g.a && xe(g.a, P), g.isMounted = true, b = T = L = null;
        }
      };
      g.scope.on();
      const D = g.effect = new jc(j);
      g.scope.off();
      const $ = g.update = D.run.bind(D), te = g.job = D.runIfDirty.bind(D);
      te.i = g, te.id = g.uid, D.scheduler = () => Ji(te), _n(g, true), $();
    }, K = (g, b, T) => {
      b.component = g;
      const L = g.vnode.props;
      g.vnode = b, g.next = null, dp(g, b.props, L, T), gp(g, b.children, T), yn(), Ca(g), vn();
    }, G = (g, b, T, L, P, I, F, j, D = false) => {
      const $ = g && g.children, te = g ? g.shapeFlag : 0, V = b.children, { patchFlag: Q, shapeFlag: ne } = b;
      if (Q > 0) {
        if (Q & 128) {
          Jt($, V, T, L, P, I, F, j, D);
          return;
        } else if (Q & 256) {
          Pe($, V, T, L, P, I, F, j, D);
          return;
        }
      }
      ne & 8 ? (te & 16 && it($, P, I), V !== $ && c(T, V)) : te & 16 ? ne & 16 ? Jt($, V, T, L, P, I, F, j, D) : it($, P, I, true) : (te & 8 && c(T, ""), ne & 16 && N(V, T, L, P, I, F, j, D));
    }, Pe = (g, b, T, L, P, I, F, j, D) => {
      g = g || Un, b = b || Un;
      const $ = g.length, te = b.length, V = Math.min($, te);
      let Q;
      for (Q = 0; Q < V; Q++) {
        const ne = b[Q] = D ? rn(b[Q]) : st(b[Q]);
        y(g[Q], ne, T, null, P, I, F, j, D);
      }
      $ > te ? it(g, P, I, true, false, V) : N(b, T, L, P, I, F, j, D, V);
    }, Jt = (g, b, T, L, P, I, F, j, D) => {
      let $ = 0;
      const te = b.length;
      let V = g.length - 1, Q = te - 1;
      for (; $ <= V && $ <= Q; ) {
        const ne = g[$], oe = b[$] = D ? rn(b[$]) : st(b[$]);
        if (ht(ne, oe)) y(ne, oe, T, null, P, I, F, j, D);
        else break;
        $++;
      }
      for (; $ <= V && $ <= Q; ) {
        const ne = g[V], oe = b[Q] = D ? rn(b[Q]) : st(b[Q]);
        if (ht(ne, oe)) y(ne, oe, T, null, P, I, F, j, D);
        else break;
        V--, Q--;
      }
      if ($ > V) {
        if ($ <= Q) {
          const ne = Q + 1, oe = ne < te ? b[ne].el : L;
          for (; $ <= Q; ) y(null, b[$] = D ? rn(b[$]) : st(b[$]), T, oe, P, I, F, j, D), $++;
        }
      } else if ($ > Q) for (; $ <= V; ) ze(g[$], P, I, true), $++;
      else {
        const ne = $, oe = $, be = /* @__PURE__ */ new Map();
        for ($ = oe; $ <= Q; $++) {
          const tt = b[$] = D ? rn(b[$]) : st(b[$]);
          tt.key != null && be.set(tt.key, $);
        }
        let fe, Ze = 0;
        const Be = Q - oe + 1;
        let ft = false, et = 0;
        const fr = new Array(Be);
        for ($ = 0; $ < Be; $++) fr[$] = 0;
        for ($ = ne; $ <= V; $++) {
          const tt = g[$];
          if (Ze >= Be) {
            ze(tt, P, I, true);
            continue;
          }
          let St;
          if (tt.key != null) St = be.get(tt.key);
          else for (fe = oe; fe <= Q; fe++) if (fr[fe - oe] === 0 && ht(tt, b[fe])) {
            St = fe;
            break;
          }
          St === void 0 ? ze(tt, P, I, true) : (fr[St - oe] = $ + 1, St >= et ? et = St : ft = true, y(tt, b[St], T, null, P, I, F, j, D), Ze++);
        }
        const wa = ft ? bp(fr) : Un;
        for (fe = wa.length - 1, $ = Be - 1; $ >= 0; $--) {
          const tt = oe + $, St = b[tt], Sa = tt + 1 < te ? b[tt + 1].el : L;
          fr[$] === 0 ? y(null, St, T, Sa, P, I, F, j, D) : ft && (fe < 0 || $ !== wa[fe] ? wt(St, T, Sa, 2) : fe--);
        }
      }
    }, wt = (g, b, T, L, P = null) => {
      const { el: I, type: F, transition: j, children: D, shapeFlag: $ } = g;
      if ($ & 6) {
        wt(g.component.subTree, b, T, L);
        return;
      }
      if ($ & 128) {
        g.suspense.move(b, T, L);
        return;
      }
      if ($ & 64) {
        F.move(g, b, T, z);
        return;
      }
      if (F === Se) {
        r(I, b, T);
        for (let V = 0; V < D.length; V++) wt(D[V], b, T, L);
        r(g.anchor, b, T);
        return;
      }
      if (F === Er) {
        m(g, b, T);
        return;
      }
      if (L !== 2 && $ & 1 && j) if (L === 0) j.beforeEnter(I), r(I, b, T), xe(() => j.enter(I), P);
      else {
        const { leave: V, delayLeave: Q, afterLeave: ne } = j, oe = () => r(I, b, T), be = () => {
          V(I, () => {
            oe(), ne && ne();
          });
        };
        Q ? Q(I, oe, be) : be();
      }
      else r(I, b, T);
    }, ze = (g, b, T, L = false, P = false) => {
      const { type: I, props: F, ref: j, children: D, dynamicChildren: $, shapeFlag: te, patchFlag: V, dirs: Q, cacheIndex: ne } = g;
      if (V === -2 && (P = false), j != null && $r(j, null, T, g, true), ne != null && (b.renderCache[ne] = void 0), te & 256) {
        b.ctx.deactivate(g);
        return;
      }
      const oe = te & 1 && Q, be = !fn(g);
      let fe;
      if (be && (fe = F && F.onVnodeBeforeUnmount) && Ye(fe, b, g), te & 6) ns(g.component, T, L);
      else {
        if (te & 128) {
          g.suspense.unmount(T, L);
          return;
        }
        oe && Pt(g, null, b, "beforeUnmount"), te & 64 ? g.type.remove(g, b, T, z, L) : $ && !$.hasOnce && (I !== Se || V > 0 && V & 64) ? it($, b, T, false, true) : (I === Se && V & 384 || !P && te & 16) && it(D, b, T), L && Mn(g);
      }
      (be && (fe = F && F.onVnodeUnmounted) || oe) && xe(() => {
        fe && Ye(fe, b, g), oe && Pt(g, null, b, "unmounted");
      }, T);
    }, Mn = (g) => {
      const { type: b, el: T, anchor: L, transition: P } = g;
      if (b === Se) {
        In(T, L);
        return;
      }
      if (b === Er) {
        v(g);
        return;
      }
      const I = () => {
        s(T), P && !P.persisted && P.afterLeave && P.afterLeave();
      };
      if (g.shapeFlag & 1 && P && !P.persisted) {
        const { leave: F, delayLeave: j } = P, D = () => F(T, I);
        j ? j(g.el, I, D) : D();
      } else I();
    }, In = (g, b) => {
      let T;
      for (; g !== b; ) T = h(g), s(g), g = T;
      s(b);
    }, ns = (g, b, T) => {
      const { bum: L, scope: P, job: I, subTree: F, um: j, m: D, a: $ } = g;
      Ms(D), Ms($), L && qn(L), P.stop(), I && (I.flags |= 8, ze(F, g, b, T)), j && xe(j, b), xe(() => {
        g.isUnmounted = true;
      }, b), b && b.pendingBranch && !b.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve());
    }, it = (g, b, T, L = false, P = false, I = 0) => {
      for (let F = I; F < g.length; F++) ze(g[F], b, T, L, P);
    }, x = (g) => {
      if (g.shapeFlag & 6) return x(g.component.subTree);
      if (g.shapeFlag & 128) return g.suspense.next();
      const b = h(g.anchor || g.el), T = b && b[cu];
      return T ? h(T) : b;
    };
    let W = false;
    const U = (g, b, T) => {
      g == null ? b._vnode && ze(b._vnode, null, null, true) : y(b._vnode || null, g, b, null, null, null, T), b._vnode = g, W || (W = true, Ca(), xs(), W = false);
    }, z = {
      p: y,
      um: ze,
      m: wt,
      r: Mn,
      mt: X,
      mc: N,
      pc: G,
      pbc: O,
      n: x,
      o: e
    };
    let le, Ee;
    return t && ([le, Ee] = t(z)), {
      render: U,
      hydrate: le,
      createApp: up(U, le)
    };
  }
  function Oo({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function _n({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Fu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ea(e, t, n = false) {
    const r = e.children, s = t.children;
    if (J(r) && J(s)) for (let o = 0; o < r.length; o++) {
      const i = r[o];
      let a = s[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = rn(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && ea(i, a)), a.type === Pn && (a.el = i.el);
    }
  }
  function bp(e) {
    const t = e.slice(), n = [
      0
    ];
    let r, s, o, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
      const u = e[r];
      if (u !== 0) {
        if (s = n[n.length - 1], e[s] < u) {
          t[r] = s, n.push(r);
          continue;
        }
        for (o = 0, i = n.length - 1; o < i; ) a = o + i >> 1, e[n[a]] < u ? o = a + 1 : i = a;
        u < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r);
      }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0; ) n[o] = i, i = t[i];
    return n;
  }
  function Uu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Uu(t);
  }
  function Ms(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const _p = Symbol.for("v-scx"), wp = () => Te(_p);
  Sp = function(e, t) {
    return Gr(e, null, t);
  };
  SS = function(e, t) {
    return Gr(e, null, {
      flush: "post"
    });
  };
  kp = function(e, t) {
    return Gr(e, null, {
      flush: "sync"
    });
  };
  Qe = function(e, t, n) {
    return Gr(e, t, n);
  };
  function Gr(e, t, n = ae) {
    const { immediate: r, deep: s, flush: o, once: i } = n, a = Ce({}, n), l = t && r || !t && o !== "post";
    let u;
    if (Xn) {
      if (o === "sync") {
        const d = wp();
        u = d.__watcherHandles || (d.__watcherHandles = []);
      } else if (!l) {
        const d = () => {
        };
        return d.stop = Ot, d.resume = Ot, d.pause = Ot, d;
      }
    }
    const c = Le;
    a.call = (d, p, y) => yt(d, c, p, y);
    let f = false;
    o === "post" ? a.scheduler = (d) => {
      xe(d, c && c.suspense);
    } : o !== "sync" && (f = true, a.scheduler = (d, p) => {
      p ? d() : Ji(d);
    }), a.augmentJob = (d) => {
      t && (d.flags |= 4), f && (d.flags |= 2, c && (d.id = c.uid, d.i = c));
    };
    const h = jh(e, t, a);
    return Xn && (u ? u.push(h) : l && h()), h;
  }
  function Ep(e, t, n) {
    const r = this.proxy, s = ke(e) ? e.includes(".") ? Vu(r, e) : () => r[e] : e.bind(r, r);
    let o;
    ee(t) ? o = t : (o = t.handler, n = t);
    const i = On(this), a = Gr(s, o.bind(r), n);
    return i(), a;
  }
  function Vu(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let s = 0; s < n.length && r; s++) r = r[n[s]];
      return r;
    };
  }
  kS = function(e, t, n = ae) {
    const r = Xe(), s = ot(t), o = qt(t), i = Wu(e, s), a = ro((l, u) => {
      let c, f = ae, h;
      return kp(() => {
        const d = e[s];
        qe(c, d) && (c = d, u());
      }), {
        get() {
          return l(), n.get ? n.get(c) : c;
        },
        set(d) {
          const p = n.set ? n.set(d) : d;
          if (!qe(p, c) && !(f !== ae && qe(d, f))) return;
          const y = r.vnode.props;
          y && (t in y || s in y || o in y) && (`onUpdate:${t}` in y || `onUpdate:${s}` in y || `onUpdate:${o}` in y) || (c = d, u()), r.emit(`update:${t}`, p), qe(d, p) && qe(d, f) && !qe(p, h) && u(), f = d, h = p;
        }
      };
    });
    return a[Symbol.iterator] = () => {
      let l = 0;
      return {
        next() {
          return l < 2 ? {
            value: l++ ? i || ae : a,
            done: false
          } : {
            done: true
          };
        }
      };
    }, a;
  };
  const Wu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ot(t)}Modifiers`] || e[`${qt(t)}Modifiers`];
  function Tp(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ae;
    let s = n;
    const o = t.startsWith("update:"), i = o && Wu(r, t.slice(7));
    i && (i.trim && (s = n.map((c) => ke(c) ? c.trim() : c)), i.number && (s = n.map(ti)));
    let a, l = r[a = So(t)] || r[a = So(ot(t))];
    !l && o && (l = r[a = So(qt(t))]), l && yt(l, e, 6, s);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, yt(u, e, 6, s);
    }
  }
  function qu(e, t, n = false) {
    const r = t.emitsCache, s = r.get(e);
    if (s !== void 0) return s;
    const o = e.emits;
    let i = {}, a = false;
    if (!ee(e)) {
      const l = (u) => {
        const c = qu(u, t, true);
        c && (a = true, Ce(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !o && !a ? (ge(e) && r.set(e, null), null) : (J(o) ? o.forEach((l) => i[l] = null) : Ce(i, o), ge(e) && r.set(e, i), i);
  }
  function ao(e, t) {
    return !e || !Ur(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, qt(t)) || ue(e, t));
  }
  function Lo(e) {
    const { type: t, vnode: n, proxy: r, withProxy: s, propsOptions: [o], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: h, setupState: d, ctx: p, inheritAttrs: y } = e, S = Os(e);
    let k, _;
    try {
      if (n.shapeFlag & 4) {
        const v = s || r, w = v;
        k = st(u.call(w, v, c, f, d, h, p)), _ = a;
      } else {
        const v = t;
        k = st(v.length > 1 ? v(f, {
          attrs: a,
          slots: i,
          emit: l
        }) : v(f, null)), _ = t.props ? a : Cp(a);
      }
    } catch (v) {
      Tr.length = 0, or(v, e, 1), k = me(Oe);
    }
    let m = k;
    if (_ && y !== false) {
      const v = Object.keys(_), { shapeFlag: w } = m;
      v.length && w & 7 && (o && v.some(Ui) && (_ = Pp(_, o)), m = bt(m, _, false, true));
    }
    return n.dirs && (m = bt(m, null, false, true), m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs), n.transition && gn(m, n.transition), k = m, Os(S), k;
  }
  function Rp(e, t = true) {
    let n;
    for (let r = 0; r < e.length; r++) {
      const s = e[r];
      if (xn(s)) {
        if (s.type !== Oe || s.children === "v-if") {
          if (n) return;
          n = s;
        }
      } else return;
    }
    return n;
  }
  const Cp = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Ur(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Pp = (e, t) => {
    const n = {};
    for (const r in e) (!Ui(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function Ap(e, t, n) {
    const { props: r, children: s, component: o } = e, { props: i, children: a, patchFlag: l } = t, u = o.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && l >= 0) {
      if (l & 1024) return true;
      if (l & 16) return r ? Ha(r, i, u) : !!i;
      if (l & 8) {
        const c = t.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const h = c[f];
          if (i[h] !== r[h] && !ao(u, h)) return true;
        }
      }
    } else return (s || a) && (!a || !a.$stable) ? true : r === i ? false : r ? i ? Ha(r, i, u) : true : !!i;
    return false;
  }
  function Ha(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let s = 0; s < r.length; s++) {
      const o = r[s];
      if (t[o] !== e[o] && !ao(n, o)) return true;
    }
    return false;
  }
  function lo({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Is = (e) => e.__isSuspense;
  let hi = 0;
  const xp = {
    name: "Suspense",
    __isSuspense: true,
    process(e, t, n, r, s, o, i, a, l, u) {
      if (e == null) Op(t, n, r, s, o, i, a, l, u);
      else {
        if (o && o.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return;
        }
        Lp(e, t, n, r, s, i, a, l, u);
      }
    },
    hydrate: Mp,
    normalize: Ip
  }, ta = xp;
  function Br(e, t) {
    const n = e.props && e.props[t];
    ee(n) && n();
  }
  function Op(e, t, n, r, s, o, i, a, l) {
    const { p: u, o: { createElement: c } } = l, f = c("div"), h = e.suspense = Ku(e, s, r, t, f, n, o, i, a, l);
    u(null, h.pendingBranch = e.ssContent, f, null, r, h, o, i), h.deps > 0 ? (Br(e, "onPending"), Br(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, o, i), zn(h, e.ssFallback)) : h.resolve(false, true);
  }
  function Lp(e, t, n, r, s, o, i, a, { p: l, um: u, o: { createElement: c } }) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const h = t.ssContent, d = t.ssFallback, { activeBranch: p, pendingBranch: y, isInFallback: S, isHydrating: k } = f;
    if (y) f.pendingBranch = h, ht(h, y) ? (l(y, h, f.hiddenContainer, null, s, f, o, i, a), f.deps <= 0 ? f.resolve() : S && (k || (l(p, d, n, r, s, null, o, i, a), zn(f, d)))) : (f.pendingId = hi++, k ? (f.isHydrating = false, f.activeBranch = y) : u(y, s, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), S ? (l(null, h, f.hiddenContainer, null, s, f, o, i, a), f.deps <= 0 ? f.resolve() : (l(p, d, n, r, s, null, o, i, a), zn(f, d))) : p && ht(h, p) ? (l(p, h, n, r, s, f, o, i, a), f.resolve(true)) : (l(null, h, f.hiddenContainer, null, s, f, o, i, a), f.deps <= 0 && f.resolve()));
    else if (p && ht(h, p)) l(p, h, n, r, s, f, o, i, a), zn(f, h);
    else if (Br(t, "onPending"), f.pendingBranch = h, h.shapeFlag & 512 ? f.pendingId = h.component.suspenseId : f.pendingId = hi++, l(null, h, f.hiddenContainer, null, s, f, o, i, a), f.deps <= 0) f.resolve();
    else {
      const { timeout: _, pendingId: m } = f;
      _ > 0 ? setTimeout(() => {
        f.pendingId === m && f.fallback(d);
      }, _) : _ === 0 && f.fallback(d);
    }
  }
  function Ku(e, t, n, r, s, o, i, a, l, u, c = false) {
    const { p: f, m: h, um: d, n: p, o: { parentNode: y, remove: S } } = u;
    let k;
    const _ = $p(e);
    _ && t && t.pendingBranch && (k = t.pendingId, t.deps++);
    const m = e.props ? Lc(e.props.timeout) : void 0, v = o, w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: s,
      deps: 0,
      pendingId: hi++,
      timeout: typeof m == "number" ? m : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: false,
      effects: [],
      resolve(A = false, M = false) {
        const { vnode: N, activeBranch: C, pendingBranch: O, pendingId: E, effects: R, parentComponent: B, container: X } = w;
        let Z = false;
        w.isHydrating ? w.isHydrating = false : A || (Z = C && O.transition && O.transition.mode === "out-in", Z && (C.transition.afterLeave = () => {
          E === w.pendingId && (h(O, X, o === v ? p(C) : o, 0), ii(R));
        }), C && (y(C.el) === X && (o = p(C)), d(C, B, w, true)), Z || h(O, X, o, 0)), zn(w, O), w.pendingBranch = null, w.isInFallback = false;
        let H = w.parent, K = false;
        for (; H; ) {
          if (H.pendingBranch) {
            H.effects.push(...R), K = true;
            break;
          }
          H = H.parent;
        }
        !K && !Z && ii(R), w.effects = [], _ && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), Br(N, "onResolve");
      },
      fallback(A) {
        if (!w.pendingBranch) return;
        const { vnode: M, activeBranch: N, parentComponent: C, container: O, namespace: E } = w;
        Br(M, "onFallback");
        const R = p(N), B = () => {
          w.isInFallback && (f(null, A, O, R, C, null, E, a, l), zn(w, A));
        }, X = A.transition && A.transition.mode === "out-in";
        X && (N.transition.afterLeave = B), w.isInFallback = true, d(N, C, null, true), X || B();
      },
      move(A, M, N) {
        w.activeBranch && h(w.activeBranch, A, M, N), w.container = A;
      },
      next() {
        return w.activeBranch && p(w.activeBranch);
      },
      registerDep(A, M, N) {
        const C = !!w.pendingBranch;
        C && w.deps++;
        const O = A.vnode.el;
        A.asyncDep.catch((E) => {
          or(E, A, 0);
        }).then((E) => {
          if (A.isUnmounted || w.isUnmounted || w.pendingId !== A.suspenseId) return;
          A.asyncResolved = true;
          const { vnode: R } = A;
          gi(A, E), O && (R.el = O);
          const B = !O && A.subTree.el;
          M(A, R, y(O || A.subTree.el), O ? null : p(A.subTree), w, i, N), B && S(B), lo(A, R.el), C && --w.deps === 0 && w.resolve();
        });
      },
      unmount(A, M) {
        w.isUnmounted = true, w.activeBranch && d(w.activeBranch, n, A, M), w.pendingBranch && d(w.pendingBranch, n, A, M);
      }
    };
    return w;
  }
  function Mp(e, t, n, r, s, o, i, a, l) {
    const u = t.suspense = Ku(t, r, n, e.parentNode, document.createElement("div"), null, s, o, i, a, true), c = l(e, u.pendingBranch = t.ssContent, n, u, o, i);
    return u.deps === 0 && u.resolve(false, true), c;
  }
  function Ip(e) {
    const { shapeFlag: t, children: n } = e, r = t & 32;
    e.ssContent = Fa(r ? n.default : n), e.ssFallback = r ? Fa(n.fallback) : me(Oe);
  }
  function Fa(e) {
    let t;
    if (ee(e)) {
      const n = An && e._c;
      n && (e._d = false, q()), e = e(), n && (e._d = true, t = He, zu());
    }
    return J(e) && (e = Rp(e)), e = st(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function Gu(e, t) {
    t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : ii(e);
  }
  function zn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let s = t.el;
    for (; !s && t.component; ) t = t.component.subTree, s = t.el;
    n.el = s, r && r.subTree === n && (r.vnode.el = s, lo(r, s));
  }
  function $p(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  let Pn, Er, Tr;
  Se = Symbol.for("v-fgt");
  Pn = Symbol.for("v-txt");
  Oe = Symbol.for("v-cmt");
  Er = Symbol.for("v-stc");
  Tr = [];
  let He = null;
  q = function(e = false) {
    Tr.push(He = e ? null : []);
  };
  function zu() {
    Tr.pop(), He = Tr[Tr.length - 1] || null;
  }
  let An = 1;
  function Ua(e, t = false) {
    An += e, e < 0 && He && t && (He.hasOnce = true);
  }
  function Ju(e) {
    return e.dynamicChildren = An > 0 ? He || Un : null, zu(), An > 0 && He && He.push(e), e;
  }
  de = function(e, t, n, r, s, o) {
    return Ju(nt(e, t, n, r, s, o, true));
  };
  se = function(e, t, n, r, s) {
    return Ju(me(e, t, n, r, s, true));
  };
  function xn(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function ht(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Yu = ({ key: e }) => e ?? null, ks = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ke(e) || we(e) || ee(e) ? {
    i: Me,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  nt = function(e, t = null, n = null, r = 0, s = null, o = e === Se ? 0 : 1, i = false, a = false) {
    const l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Yu(t),
      ref: t && ks(t),
      scopeId: lu,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetStart: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: o,
      patchFlag: r,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: Me
    };
    return a ? (na(l, n), o & 128 && e.normalize(l)) : n && (l.shapeFlag |= ke(n) ? 8 : 16), An > 0 && !i && He && (l.patchFlag > 0 || o & 6) && l.patchFlag !== 32 && He.push(l), l;
  };
  me = Np;
  function Np(e, t = null, n = null, r = 0, s = null, o = false) {
    if ((!e || e === Eu) && (e = Oe), xn(e)) {
      const a = bt(e, t, true);
      return n && na(a, n), An > 0 && !o && He && (a.shapeFlag & 6 ? He[He.indexOf(e)] = a : He.push(a)), a.patchFlag = -2, a;
    }
    if (Wp(e) && (e = e.__vccOpts), t) {
      t = Qu(t);
      let { class: a, style: l } = t;
      a && !ke(a) && (t.class = Vr(a)), ge(l) && (zi(l) && !J(l) && (l = Ce({}, l)), t.style = Xs(l));
    }
    const i = ke(e) ? 1 : Is(e) ? 128 : uu(e) ? 64 : ge(e) ? 4 : ee(e) ? 2 : 0;
    return nt(e, t, n, r, s, i, o, true);
  }
  Qu = function(e) {
    return e ? zi(e) || Mu(e) ? Ce({}, e) : e : null;
  };
  bt = function(e, t, n = false, r = false) {
    const { props: s, ref: o, patchFlag: i, children: a, transition: l } = e, u = t ? zr(s || {}, t) : s, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && Yu(u),
      ref: t && t.ref ? n && o ? J(o) ? o.concat(ks(t)) : [
        o,
        ks(t)
      ] : ks(t) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Se ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && bt(e.ssContent),
      ssFallback: e.ssFallback && bt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return l && r && gn(c, l.clone(c)), c;
  };
  ar = function(e = " ", t = 0) {
    return me(Pn, null, e, t);
  };
  Bp = function(e, t) {
    const n = me(Er, null, e);
    return n.staticCount = t, n;
  };
  zt = function(e = "", t = false) {
    return t ? (q(), se(Oe, null, e)) : me(Oe, null, e);
  };
  function st(e) {
    return e == null || typeof e == "boolean" ? me(Oe) : J(e) ? me(Se, null, e.slice()) : xn(e) ? rn(e) : me(Pn, null, String(e));
  }
  function rn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
  }
  function na(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (J(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = false), na(e, s()), s._c && (s._d = true));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Mu(t) ? t._ctx = Me : s === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else ee(t) ? (t = {
      default: t,
      _ctx: Me
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      ar(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  zr = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const s in r) if (s === "class") t.class !== r.class && (t.class = Vr([
        t.class,
        r.class
      ]));
      else if (s === "style") t.style = Xs([
        t.style,
        r.style
      ]);
      else if (Ur(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(J(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else s !== "" && (t[s] = r[s]);
    }
    return t;
  };
  function Ye(e, t, n, r = null) {
    yt(e, t, 7, [
      n,
      r
    ]);
  }
  const Dp = xu();
  let jp = 0;
  function Hp(e, t, n) {
    const r = e.type, s = (t ? t.appContext : e.appContext) || Dp, o = {
      uid: jp++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Dc(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: $u(r, s),
      emitsOptions: qu(r, s),
      emit: null,
      emitted: null,
      propsDefaults: ae,
      inheritAttrs: r.inheritAttrs,
      ctx: ae,
      data: ae,
      props: ae,
      attrs: ae,
      slots: ae,
      refs: ae,
      setupState: ae,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return o.ctx = {
      _: o
    }, o.root = t ? t.root : o, o.emit = Tp.bind(null, o), e.ce && e.ce(o), o;
  }
  let Le = null;
  Xe = () => Le || Me;
  let $s, pi;
  {
    const e = Qs(), t = (n, r) => {
      let s;
      return (s = e[n]) || (s = e[n] = []), s.push(r), (o) => {
        s.length > 1 ? s.forEach((i) => i(o)) : s[0](o);
      };
    };
    $s = t("__VUE_INSTANCE_SETTERS__", (n) => Le = n), pi = t("__VUE_SSR_SETTERS__", (n) => Xn = n);
  }
  const On = (e) => {
    const t = Le;
    return $s(e), e.scope.on(), () => {
      e.scope.off(), $s(t);
    };
  }, mi = () => {
    Le && Le.scope.off(), $s(null);
  };
  function Xu(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Xn = false;
  function Fp(e, t = false, n = false) {
    t && pi(t);
    const { props: r, children: s } = e.vnode, o = Xu(e);
    fp(e, r, o, t), mp(e, s, n);
    const i = o ? Up(e, t) : void 0;
    return t && pi(false), i;
  }
  function Up(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rp);
    const { setup: r } = n;
    if (r) {
      yn();
      const s = e.setupContext = r.length > 1 ? ef(e) : null, o = On(e), i = qr(r, e, 0, [
        e.props,
        s
      ]), a = zs(i);
      if (vn(), o(), (a || e.sp) && !fn(e) && Qi(e), a) {
        if (i.then(mi, mi), t) return i.then((l) => {
          gi(e, l);
        }).catch((l) => {
          or(l, e, 0);
        });
        e.asyncDep = i;
      } else gi(e, i);
    } else Zu(e);
  }
  function gi(e, t, n) {
    ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = ru(t)), Zu(e);
  }
  function Zu(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Ot);
    {
      const s = On(e);
      yn();
      try {
        sp(e);
      } finally {
        vn(), s();
      }
    }
  }
  const Vp = {
    get(e, t) {
      return De(e, "get", ""), e[t];
    }
  };
  function ef(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Vp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function co(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ru(Kn(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in kr) return kr[n](e);
      },
      has(t, n) {
        return n in t || n in kr;
      }
    })) : e.proxy;
  }
  function yi(e, t = true) {
    return ee(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Wp(e) {
    return ee(e) && "__vccOpts" in e;
  }
  Y = (e, t) => Bh(e, t, Xn);
  pe = function(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ge(t) && !J(t) ? xn(t) ? me(e, null, [
      t
    ]) : me(e, t) : me(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && xn(n) && (n = [
      n
    ]), me(e, t, n));
  };
  ES = function(e, t, n, r) {
    const s = n[r];
    if (s && qp(s, e)) return s;
    const o = t();
    return o.memo = e.slice(), o.cacheIndex = r, n[r] = o;
  };
  function qp(e, t) {
    const n = e.memo;
    if (n.length != t.length) return false;
    for (let r = 0; r < n.length; r++) if (qe(n[r], t[r])) return false;
    return An > 0 && He && He.push(e), true;
  }
  const Kp = "3.5.13";
  let vi;
  const Va = typeof window < "u" && window.trustedTypes;
  if (Va) try {
    vi = Va.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let tf, Gp, zp, Bt, Wa, Jp, Yt, hr, Zn, nf, rf, Yp, wn, qa;
  tf = vi ? (e) => vi.createHTML(e) : (e) => e;
  Gp = "http://www.w3.org/2000/svg";
  zp = "http://www.w3.org/1998/Math/MathML";
  Bt = typeof document < "u" ? document : null;
  Wa = Bt && Bt.createElement("template");
  Jp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t === "svg" ? Bt.createElementNS(Gp, e) : t === "mathml" ? Bt.createElementNS(zp, e) : n ? Bt.createElement(e, {
        is: n
      }) : Bt.createElement(e);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
    },
    createText: (e) => Bt.createTextNode(e),
    createComment: (e) => Bt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Bt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, s, o) {
      const i = n ? n.previousSibling : t.lastChild;
      if (s && (s === o || s.nextSibling)) for (; t.insertBefore(s.cloneNode(true), n), !(s === o || !(s = s.nextSibling)); ) ;
      else {
        Wa.innerHTML = tf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = Wa.content;
        if (r === "svg" || r === "mathml") {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        i ? i.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  Yt = "transition";
  hr = "animation";
  Zn = Symbol("_vtc");
  nf = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [
      String,
      Number,
      Object
    ],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  rf = Ce({}, pu, nf);
  Yp = (e) => (e.displayName = "Transition", e.props = rf, e);
  Qp = Yp((e, { slots: t }) => pe(Wh, sf(e), t));
  wn = (e, t = []) => {
    J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  qa = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function sf(e) {
    const t = {};
    for (const R in e) R in nf || (t[R] = e[R]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: s, enterFromClass: o = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = o, appearActiveClass: u = i, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: d = `${n}-leave-to` } = e, p = Xp(s), y = p && p[0], S = p && p[1], { onBeforeEnter: k, onEnter: _, onEnterCancelled: m, onLeave: v, onLeaveCancelled: w, onBeforeAppear: A = k, onAppear: M = _, onAppearCancelled: N = m } = t, C = (R, B, X, Z) => {
      R._enterCancelled = Z, Zt(R, B ? c : a), Zt(R, B ? u : i), X && X();
    }, O = (R, B) => {
      R._isLeaving = false, Zt(R, f), Zt(R, d), Zt(R, h), B && B();
    }, E = (R) => (B, X) => {
      const Z = R ? M : _, H = () => C(B, R, X);
      wn(Z, [
        B,
        H
      ]), Ka(() => {
        Zt(B, R ? l : o), Et(B, R ? c : a), qa(Z) || Ga(B, r, y, H);
      });
    };
    return Ce(t, {
      onBeforeEnter(R) {
        wn(k, [
          R
        ]), Et(R, o), Et(R, i);
      },
      onBeforeAppear(R) {
        wn(A, [
          R
        ]), Et(R, l), Et(R, u);
      },
      onEnter: E(false),
      onAppear: E(true),
      onLeave(R, B) {
        R._isLeaving = true;
        const X = () => O(R, B);
        Et(R, f), R._enterCancelled ? (Et(R, h), bi()) : (bi(), Et(R, h)), Ka(() => {
          R._isLeaving && (Zt(R, f), Et(R, d), qa(v) || Ga(R, r, S, X));
        }), wn(v, [
          R,
          X
        ]);
      },
      onEnterCancelled(R) {
        C(R, false, void 0, true), wn(m, [
          R
        ]);
      },
      onAppearCancelled(R) {
        C(R, true, void 0, true), wn(N, [
          R
        ]);
      },
      onLeaveCancelled(R) {
        O(R), wn(w, [
          R
        ]);
      }
    });
  }
  function Xp(e) {
    if (e == null) return null;
    if (ge(e)) return [
      Mo(e.enter),
      Mo(e.leave)
    ];
    {
      const t = Mo(e);
      return [
        t,
        t
      ];
    }
  }
  function Mo(e) {
    return Lc(e);
  }
  function Et(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zn] || (e[Zn] = /* @__PURE__ */ new Set())).add(t);
  }
  function Zt(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Zn];
    n && (n.delete(t), n.size || (e[Zn] = void 0));
  }
  function Ka(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Zp = 0;
  function Ga(e, t, n, r) {
    const s = e._endId = ++Zp, o = () => {
      s === e._endId && r();
    };
    if (n != null) return setTimeout(o, n);
    const { type: i, timeout: a, propCount: l } = of(e, t);
    if (!i) return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
      e.removeEventListener(u, h), o();
    }, h = (d) => {
      d.target === e && ++c >= l && f();
    };
    setTimeout(() => {
      c < l && f();
    }, a + 1), e.addEventListener(u, h);
  }
  function of(e, t) {
    const n = window.getComputedStyle(e), r = (p) => (n[p] || "").split(", "), s = r(`${Yt}Delay`), o = r(`${Yt}Duration`), i = za(s, o), a = r(`${hr}Delay`), l = r(`${hr}Duration`), u = za(a, l);
    let c = null, f = 0, h = 0;
    t === Yt ? i > 0 && (c = Yt, f = i, h = o.length) : t === hr ? u > 0 && (c = hr, f = u, h = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Yt : hr : null, h = c ? c === Yt ? o.length : l.length : 0);
    const d = c === Yt && /\b(transform|all)(,|$)/.test(r(`${Yt}Property`).toString());
    return {
      type: c,
      timeout: f,
      propCount: h,
      hasTransform: d
    };
  }
  function za(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => Ja(n) + Ja(e[r])));
  }
  function Ja(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function bi() {
    return document.body.offsetHeight;
  }
  function em(e, t, n) {
    const r = e[Zn];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let Ns, af;
  Ns = Symbol("_vod");
  af = Symbol("_vsh");
  TS = {
    beforeMount(e, { value: t }, { transition: n }) {
      e[Ns] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : pr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), pr(e, true), r.enter(e)) : r.leave(e, () => {
        pr(e, false);
      }) : pr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      pr(e, t);
    }
  };
  function pr(e, t) {
    e.style.display = t ? e[Ns] : "none", e[af] = !t;
  }
  const tm = Symbol(""), nm = /(^|;)\s*display\s*:/;
  function rm(e, t, n) {
    const r = e.style, s = ke(n);
    let o = false;
    if (n && !s) {
      if (t) if (ke(t)) for (const i of t.split(";")) {
        const a = i.slice(0, i.indexOf(":")).trim();
        n[a] == null && Es(r, a, "");
      }
      else for (const i in t) n[i] == null && Es(r, i, "");
      for (const i in n) i === "display" && (o = true), Es(r, i, n[i]);
    } else if (s) {
      if (t !== n) {
        const i = r[tm];
        i && (n += ";" + i), r.cssText = n, o = nm.test(n);
      }
    } else t && e.removeAttribute("style");
    Ns in e && (e[Ns] = o ? r.display : "", e[af] && (r.display = "none"));
  }
  const Ya = /\s*!important$/;
  function Es(e, t, n) {
    if (J(n)) n.forEach((r) => Es(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = sm(e, t);
      Ya.test(n) ? e.setProperty(qt(r), n.replace(Ya, ""), "important") : e[r] = n;
    }
  }
  const Qa = [
    "Webkit",
    "Moz",
    "ms"
  ], Io = {};
  function sm(e, t) {
    const n = Io[t];
    if (n) return n;
    let r = ot(t);
    if (r !== "filter" && r in e) return Io[t] = r;
    r = Ys(r);
    for (let s = 0; s < Qa.length; s++) {
      const o = Qa[s] + r;
      if (o in e) return Io[t] = o;
    }
    return t;
  }
  const Xa = "http://www.w3.org/1999/xlink";
  function Za(e, t, n, r, s, o = ch(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Xa, t.slice(6, t.length)) : e.setAttributeNS(Xa, t, n) : n == null || o && !Ic(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : gt(n) ? String(n) : n);
  }
  function el(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? tf(n) : n);
      return;
    }
    const o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
      const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let i = false;
    if (n === "" || n == null) {
      const a = typeof e[t];
      a === "boolean" ? n = Ic(n) : n == null && a === "string" ? (n = "", i = true) : a === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(s || t);
  }
  function on(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function om(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const tl = Symbol("_vei");
  function im(e, t, n, r, s = null) {
    const o = e[tl] || (e[tl] = {}), i = o[t];
    if (r && i) i.value = r;
    else {
      const [a, l] = am(t);
      if (r) {
        const u = o[t] = um(r, s);
        on(e, a, u, l);
      } else i && (om(e, a, i, l), o[t] = void 0);
    }
  }
  const nl = /(?:Once|Passive|Capture)$/;
  function am(e) {
    let t;
    if (nl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(nl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : qt(e.slice(2)),
      t
    ];
  }
  let $o = 0;
  const lm = Promise.resolve(), cm = () => $o || (lm.then(() => $o = 0), $o = Date.now());
  function um(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      yt(fm(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = cm(), n;
  }
  function fm(e, t) {
    if (J(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (s) => !s._stopped && r && r(s));
    } else return t;
  }
  const rl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dm = (e, t, n, r, s, o) => {
    const i = s === "svg";
    t === "class" ? em(e, r, i) : t === "style" ? rm(e, n, r) : Ur(t) ? Ui(t) || im(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : hm(e, t, r, i)) ? (el(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Za(e, t, r, i, o, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ke(r)) ? el(e, ot(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Za(e, t, r, i));
  };
  function hm(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && rl(t) && ee(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const s = e.tagName;
      if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return false;
    }
    return rl(t) && ke(n) ? false : t in e;
  }
  let lf, cf, Bs, sl, pm, mm;
  lf = /* @__PURE__ */ new WeakMap();
  cf = /* @__PURE__ */ new WeakMap();
  Bs = Symbol("_moveCb");
  sl = Symbol("_enterCb");
  pm = (e) => (delete e.props.mode, e);
  mm = pm({
    name: "TransitionGroup",
    props: Ce({}, rf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = Xe(), r = hu();
      let s, o;
      return Xi(() => {
        if (!s.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!bm(s[0].el, n.vnode.el, i)) return;
        s.forEach(gm), s.forEach(ym);
        const a = s.filter(vm);
        bi(), a.forEach((l) => {
          const u = l.el, c = u.style;
          Et(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[Bs] = (h) => {
            h && h.target !== u || (!h || /transform$/.test(h.propertyName)) && (u.removeEventListener("transitionend", f), u[Bs] = null, Zt(u, i));
          };
          u.addEventListener("transitionend", f);
        });
      }), () => {
        const i = re(e), a = sf(i);
        let l = i.tag || Se;
        if (s = [], o) for (let u = 0; u < o.length; u++) {
          const c = o[u];
          c.el && c.el instanceof Element && (s.push(c), gn(c, Ir(c, a, r, n)), lf.set(c, c.el.getBoundingClientRect()));
        }
        o = t.default ? Yi(t.default()) : [];
        for (let u = 0; u < o.length; u++) {
          const c = o[u];
          c.key != null && gn(c, Ir(c, a, r, n));
        }
        return me(l, null, o);
      };
    }
  });
  RS = mm;
  function gm(e) {
    const t = e.el;
    t[Bs] && t[Bs](), t[sl] && t[sl]();
  }
  function ym(e) {
    cf.set(e, e.el.getBoundingClientRect());
  }
  function vm(e) {
    const t = lf.get(e), n = cf.get(e), r = t.left - n.left, s = t.top - n.top;
    if (r || s) {
      const o = e.el.style;
      return o.transform = o.webkitTransform = `translate(${r}px,${s}px)`, o.transitionDuration = "0s", e;
    }
  }
  function bm(e, t, n) {
    const r = e.cloneNode(), s = e[Zn];
    s && s.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const o = t.nodeType === 1 ? t : t.parentNode;
    o.appendChild(r);
    const { hasTransform: i } = of(r);
    return o.removeChild(r), i;
  }
  const er = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return J(t) ? (n) => qn(t, n) : t;
  };
  function _m(e) {
    e.target.composing = true;
  }
  function ol(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  let Wt;
  Wt = Symbol("_assign");
  CS = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e[Wt] = er(s);
      const o = r || s.props && s.props.type === "number";
      on(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), o && (a = ti(a)), e[Wt](a);
      }), n && on(e, "change", () => {
        e.value = e.value.trim();
      }), t || (on(e, "compositionstart", _m), on(e, "compositionend", ol), on(e, "change", ol));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: s, number: o } }, i) {
      if (e[Wt] = er(i), e.composing) return;
      const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? ti(e.value) : e.value, l = t ?? "";
      a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || s && e.value.trim() === l) || (e.value = l));
    }
  };
  PS = {
    deep: true,
    created(e, t, n) {
      e[Wt] = er(n), on(e, "change", () => {
        const r = e._modelValue, s = uf(e), o = e.checked, i = e[Wt];
        if (J(r)) {
          const a = $c(r, s), l = a !== -1;
          if (o && !l) i(r.concat(s));
          else if (!o && l) {
            const u = [
              ...r
            ];
            u.splice(a, 1), i(u);
          }
        } else if (Gs(r)) {
          const a = new Set(r);
          o ? a.add(s) : a.delete(s), i(a);
        } else i(ff(e, o));
      });
    },
    mounted: il,
    beforeUpdate(e, t, n) {
      e[Wt] = er(n), il(e, t, n);
    }
  };
  function il(e, { value: t, oldValue: n }, r) {
    e._modelValue = t;
    let s;
    if (J(t)) s = $c(t, r.props.value) > -1;
    else if (Gs(t)) s = t.has(r.props.value);
    else {
      if (t === n) return;
      s = Yn(t, ff(e, true));
    }
    e.checked !== s && (e.checked = s);
  }
  AS = {
    created(e, { value: t }, n) {
      e.checked = Yn(t, n.props.value), e[Wt] = er(n), on(e, "change", () => {
        e[Wt](uf(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      e[Wt] = er(r), t !== n && (e.checked = Yn(t, r.props.value));
    }
  };
  function uf(e) {
    return "_value" in e ? e._value : e.value;
  }
  function ff(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  let wm, Sm, km, df;
  wm = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Sm = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => wm.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  xS = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (s, ...o) => {
      for (let i = 0; i < t.length; i++) {
        const a = Sm[t[i]];
        if (a && a(s, t)) return;
      }
      return e(s, ...o);
    });
  };
  km = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  OS = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = (s) => {
      if (!("key" in s)) return;
      const o = qt(s.key);
      if (t.some((i) => i === o || km[i] === o)) return e(s);
    });
  };
  df = Ce({
    patchProp: dm
  }, Jp);
  let Rr, al = false;
  function hf() {
    return Rr || (Rr = yp(df));
  }
  function Em() {
    return Rr = al ? Rr : vp(df), al = true, Rr;
  }
  let Rm;
  LS = (...e) => {
    hf().render(...e);
  };
  Tm = (...e) => {
    const t = hf().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const s = mf(r);
      if (!s) return;
      const o = t._component;
      !ee(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
      const i = n(s, false, pf(s));
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
    }, t;
  };
  Rm = (...e) => {
    const t = Em().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const s = mf(r);
      if (s) return n(s, true, pf(s));
    }, t;
  };
  function pf(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function mf(e) {
    return ke(e) ? document.querySelector(e) : e;
  }
  const Cm = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Pm = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Am = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
  function xm(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
      Om(e);
      return;
    }
    return t;
  }
  function Om(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
  }
  function Dr(e, t = {}) {
    if (typeof e != "string") return e;
    if (e[0] === '"' && e[e.length - 1] === '"' && e.indexOf("\\") === -1) return e.slice(1, -1);
    const n = e.trim();
    if (n.length <= 9) switch (n.toLowerCase()) {
      case "true":
        return true;
      case "false":
        return false;
      case "undefined":
        return;
      case "null":
        return null;
      case "nan":
        return Number.NaN;
      case "infinity":
        return Number.POSITIVE_INFINITY;
      case "-infinity":
        return Number.NEGATIVE_INFINITY;
    }
    if (!Am.test(e)) {
      if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
      return e;
    }
    try {
      if (Cm.test(e) || Pm.test(e)) {
        if (t.strict) throw new Error("[destr] Possible prototype pollution");
        return JSON.parse(e, xm);
      }
      return JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
  const gf = /#/g, yf = /&/g, vf = /\//g, Lm = /=/g, Mm = /\?/g, uo = /\+/g, Im = /%5e/gi, $m = /%60/gi, Nm = /%7c/gi, Bm = /%20/gi, Dm = /%252f/gi;
  function bf(e) {
    return encodeURI("" + e).replace(Nm, "|");
  }
  function _i(e) {
    return bf(typeof e == "string" ? e : JSON.stringify(e)).replace(uo, "%2B").replace(Bm, "+").replace(gf, "%23").replace(yf, "%26").replace($m, "`").replace(Im, "^").replace(vf, "%2F");
  }
  function No(e) {
    return _i(e).replace(Lm, "%3D");
  }
  jm = function(e) {
    return bf(e).replace(gf, "%23").replace(Mm, "%3F").replace(Dm, "%2F").replace(yf, "%26").replace(uo, "%2B");
  };
  MS = function(e) {
    return jm(e).replace(vf, "%2F");
  };
  function Ds(e = "") {
    try {
      return decodeURIComponent("" + e);
    } catch {
      return "" + e;
    }
  }
  function Hm(e) {
    return Ds(e.replace(uo, " "));
  }
  function Fm(e) {
    return Ds(e.replace(uo, " "));
  }
  function fo(e = "") {
    const t = /* @__PURE__ */ Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
      const r = n.match(/([^=]+)=?(.*)/) || [];
      if (r.length < 2) continue;
      const s = Hm(r[1]);
      if (s === "__proto__" || s === "constructor") continue;
      const o = Fm(r[2] || "");
      t[s] === void 0 ? t[s] = o : Array.isArray(t[s]) ? t[s].push(o) : t[s] = [
        t[s],
        o
      ];
    }
    return t;
  }
  function Um(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((n) => `${No(e)}=${_i(n)}`).join("&") : `${No(e)}=${_i(t)}` : No(e);
  }
  function Vm(e) {
    return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => Um(t, e[t])).filter(Boolean).join("&");
  }
  const Wm = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, _f = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, qm = /^([/\\]\s*){2,}[^/\\]/, Km = /^[\s\0]*(blob|data|javascript|vbscript):$/i, Gm = /\/$|\/\?|\/#/, zm = /^\.?\//;
  $t = function(e, t = {}) {
    return typeof t == "boolean" && (t = {
      acceptRelative: t
    }), t.strict ? Wm.test(e) : _f.test(e) || (t.acceptRelative ? qm.test(e) : false);
  };
  function Jm(e) {
    return !!e && Km.test(e);
  }
  function wi(e = "", t) {
    return t ? Gm.test(e) : e.endsWith("/");
  }
  function tr(e = "", t) {
    if (!t) return (wi(e) ? e.slice(0, -1) : e) || "/";
    if (!wi(e, true)) return e || "/";
    let n = e, r = "";
    const s = e.indexOf("#");
    s !== -1 && (n = e.slice(0, s), r = e.slice(s));
    const [o, ...i] = n.split("?");
    return ((o.endsWith("/") ? o.slice(0, -1) : o) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function wf(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (wi(e, true)) return e || "/";
    let n = e, r = "";
    const s = e.indexOf("#");
    if (s !== -1 && (n = e.slice(0, s), r = e.slice(s), !n)) return r;
    const [o, ...i] = n.split("?");
    return o + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function Ym(e = "") {
    return e.startsWith("/");
  }
  IS = function(e = "") {
    return Ym(e) ? e : "/" + e;
  };
  Qm = function(e, t) {
    if (kf(t) || $t(e)) return e;
    const n = tr(t);
    return e.startsWith(n) ? e : ho(n, e);
  };
  function ll(e, t) {
    if (kf(t)) return e;
    const n = tr(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r;
  }
  Sf = function(e, t) {
    const n = ra(e), r = {
      ...fo(n.search),
      ...t
    };
    return n.search = Vm(r), ng(n);
  };
  $S = function(e) {
    return fo(ra(e).search);
  };
  function kf(e) {
    return !e || e === "/";
  }
  function Xm(e) {
    return e && e !== "/";
  }
  ho = function(e, ...t) {
    let n = e || "";
    for (const r of t.filter((s) => Xm(s))) if (n) {
      const s = r.replace(zm, "");
      n = wf(n) + s;
    } else n = r;
    return n;
  };
  function Ef(...e) {
    var _a2, _b2, _c2, _d2;
    const t = /\/(?!\/)/, n = e.filter(Boolean), r = [];
    let s = 0;
    for (const i of n) if (!(!i || i === "/")) {
      for (const [a, l] of i.split(t).entries()) if (!(!l || l === ".")) {
        if (l === "..") {
          if (r.length === 1 && $t(r[0])) continue;
          r.pop(), s--;
          continue;
        }
        if (a === 1 && ((_a2 = r[r.length - 1]) == null ? void 0 : _a2.endsWith(":/"))) {
          r[r.length - 1] += "/" + l;
          continue;
        }
        r.push(l), s++;
      }
    }
    let o = r.join("/");
    return s >= 0 ? ((_b2 = n[0]) == null ? void 0 : _b2.startsWith("/")) && !o.startsWith("/") ? o = "/" + o : ((_c2 = n[0]) == null ? void 0 : _c2.startsWith("./")) && !o.startsWith("./") && (o = "./" + o) : o = "../".repeat(-1 * s) + o, ((_d2 = n[n.length - 1]) == null ? void 0 : _d2.endsWith("/")) && !o.endsWith("/") && (o += "/"), o;
  }
  function Zm(e) {
    return eg(e, "https://");
  }
  function eg(e, t) {
    let n = e.match(_f);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e;
  }
  function tg(e, t) {
    return Ds(tr(e)) === Ds(tr(t));
  }
  const Tf = Symbol.for("ufo:protocolRelative");
  ra = function(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
      const [, f, h = ""] = n;
      return {
        protocol: f.toLowerCase(),
        pathname: h,
        href: f + h,
        auth: "",
        host: "",
        search: "",
        hash: ""
      };
    }
    if (!$t(e, {
      acceptRelative: true
    })) return cl(e);
    const [, r = "", s, o = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = o.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: l, search: u, hash: c } = cl(a);
    return {
      protocol: r.toLowerCase(),
      auth: s ? s.slice(0, Math.max(0, s.length - 1)) : "",
      host: i,
      pathname: l,
      search: u,
      hash: c,
      [Tf]: !r
    };
  };
  function cl(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
      pathname: t,
      search: n,
      hash: r
    };
  }
  function ng(e) {
    const t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", s = e.auth ? e.auth + "@" : "", o = e.host || "";
    return (e.protocol || e[Tf] ? (e.protocol || "") + "//" : "") + s + o + t + n + r;
  }
  class rg extends Error {
    constructor(t, n) {
      super(t, n), this.name = "FetchError", (n == null ? void 0 : n.cause) && !this.cause && (this.cause = n.cause);
    }
  }
  function sg(e) {
    var _a2, _b2, _c2, _d2, _e2;
    const t = ((_a2 = e.error) == null ? void 0 : _a2.message) || ((_b2 = e.error) == null ? void 0 : _b2.toString()) || "", n = ((_c2 = e.request) == null ? void 0 : _c2.method) || ((_d2 = e.options) == null ? void 0 : _d2.method) || "GET", r = ((_e2 = e.request) == null ? void 0 : _e2.url) || String(e.request) || "/", s = `[${n}] ${JSON.stringify(r)}`, o = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", i = `${s}: ${o}${t ? ` ${t}` : ""}`, a = new rg(i, e.error ? {
      cause: e.error
    } : void 0);
    for (const l of [
      "request",
      "options",
      "response"
    ]) Object.defineProperty(a, l, {
      get() {
        return e[l];
      }
    });
    for (const [l, u] of [
      [
        "data",
        "_data"
      ],
      [
        "status",
        "status"
      ],
      [
        "statusCode",
        "status"
      ],
      [
        "statusText",
        "statusText"
      ],
      [
        "statusMessage",
        "statusText"
      ]
    ]) Object.defineProperty(a, l, {
      get() {
        return e.response && e.response[u];
      }
    });
    return a;
  }
  const og = new Set(Object.freeze([
    "PATCH",
    "POST",
    "PUT",
    "DELETE"
  ]));
  function ul(e = "GET") {
    return og.has(e.toUpperCase());
  }
  function ig(e) {
    if (e === void 0) return false;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? true : t !== "object" ? false : Array.isArray(e) ? true : e.buffer ? false : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
  }
  const ag = /* @__PURE__ */ new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html"
  ]), lg = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
  function cg(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return lg.test(t) ? "json" : ag.has(t) || t.startsWith("text/") ? "text" : "blob";
  }
  function ug(e, t, n, r) {
    const s = fg((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
    let o;
    return ((n == null ? void 0 : n.query) || (n == null ? void 0 : n.params) || (t == null ? void 0 : t.params) || (t == null ? void 0 : t.query)) && (o = {
      ...n == null ? void 0 : n.params,
      ...n == null ? void 0 : n.query,
      ...t == null ? void 0 : t.params,
      ...t == null ? void 0 : t.query
    }), {
      ...n,
      ...t,
      query: o,
      params: o,
      headers: s
    };
  }
  function fg(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e) for (const [s, o] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(s, o);
    return r;
  }
  async function fs(e, t) {
    if (t) if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
  }
  const dg = /* @__PURE__ */ new Set([
    408,
    409,
    425,
    429,
    500,
    502,
    503,
    504
  ]), hg = /* @__PURE__ */ new Set([
    101,
    204,
    205,
    304
  ]);
  function Rf(e = {}) {
    const { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: r = globalThis.AbortController } = e;
    async function s(a) {
      const l = a.error && a.error.name === "AbortError" && !a.options.timeout || false;
      if (a.options.retry !== false && !l) {
        let c;
        typeof a.options.retry == "number" ? c = a.options.retry : c = ul(a.options.method) ? 0 : 1;
        const f = a.response && a.response.status || 500;
        if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : dg.has(f))) {
          const h = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
          return h > 0 && await new Promise((d) => setTimeout(d, h)), o(a.request, {
            ...a.options,
            retry: c - 1
          });
        }
      }
      const u = sg(a);
      throw Error.captureStackTrace && Error.captureStackTrace(u, o), u;
    }
    const o = async function(l, u = {}) {
      const c = {
        request: l,
        options: ug(l, u, e.defaults, n),
        response: void 0,
        error: void 0
      };
      c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await fs(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = Qm(c.request, c.options.baseURL)), c.options.query && (c.request = Sf(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && ul(c.options.method) && (ig(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
      let f;
      if (!c.options.signal && c.options.timeout) {
        const d = new r();
        f = setTimeout(() => {
          const p = new Error("[TimeoutError]: The operation was aborted due to timeout");
          p.name = "TimeoutError", p.code = 23, d.abort(p);
        }, c.options.timeout), c.options.signal = d.signal;
      }
      try {
        c.response = await t(c.request, c.options);
      } catch (d) {
        return c.error = d, c.options.onRequestError && await fs(c, c.options.onRequestError), await s(c);
      } finally {
        f && clearTimeout(f);
      }
      if ((c.response.body || c.response._bodyInit) && !hg.has(c.response.status) && c.options.method !== "HEAD") {
        const d = (c.options.parseResponse ? "json" : c.options.responseType) || cg(c.response.headers.get("content-type") || "");
        switch (d) {
          case "json": {
            const p = await c.response.text(), y = c.options.parseResponse || Dr;
            c.response._data = y(p);
            break;
          }
          case "stream": {
            c.response._data = c.response.body || c.response._bodyInit;
            break;
          }
          default:
            c.response._data = await c.response[d]();
        }
      }
      return c.options.onResponse && await fs(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await fs(c, c.options.onResponseError), await s(c)) : c.response;
    }, i = async function(l, u) {
      return (await o(l, u))._data;
    };
    return i.raw = o, i.native = (...a) => t(...a), i.create = (a = {}, l = {}) => Rf({
      ...e,
      ...l,
      defaults: {
        ...e.defaults,
        ...l.defaults,
        ...a
      }
    }), i;
  }
  const js = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  }(), pg = js.fetch ? (...e) => js.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")), mg = js.Headers, gg = js.AbortController, yg = Rf({
    fetch: pg,
    Headers: mg,
    AbortController: gg
  }), vg = yg, bg = () => {
    var _a2;
    return ((_a2 = window == null ? void 0 : window.__NUXT__) == null ? void 0 : _a2.config) || {};
  }, Hs = bg().app, _g = () => Hs.baseURL, wg = () => Hs.buildAssetsDir, sa = (...e) => Ef(Cf(), wg(), ...e), Cf = (...e) => {
    const t = Hs.cdnURL || Hs.baseURL;
    return e.length ? Ef(t, ...e) : t;
  };
  globalThis.__buildAssetsURL = sa, globalThis.__publicAssetsURL = Cf;
  globalThis.$fetch || (globalThis.$fetch = vg.create({
    baseURL: _g()
  }));
  function Si(e, t = {}, n) {
    for (const r in e) {
      const s = e[r], o = n ? `${n}:${r}` : r;
      typeof s == "object" && s !== null ? Si(s, t, o) : typeof s == "function" && (t[o] = s);
    }
    return t;
  }
  const Sg = {
    run: (e) => e()
  }, kg = () => Sg, Pf = typeof console.createTask < "u" ? console.createTask : kg;
  function Eg(e, t) {
    const n = t.shift(), r = Pf(n);
    return e.reduce((s, o) => s.then(() => r.run(() => o(...t))), Promise.resolve());
  }
  function Tg(e, t) {
    const n = t.shift(), r = Pf(n);
    return Promise.all(e.map((s) => r.run(() => s(...t))));
  }
  function Bo(e, t) {
    for (const n of [
      ...e
    ]) n(t);
  }
  class Rg {
    constructor() {
      this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
    }
    hook(t, n, r = {}) {
      if (!t || typeof n != "function") return () => {
      };
      const s = t;
      let o;
      for (; this._deprecatedHooks[t]; ) o = this._deprecatedHooks[t], t = o.to;
      if (o && !r.allowDeprecated) {
        let i = o.message;
        i || (i = `${s} hook has been deprecated` + (o.to ? `, please use ${o.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
      }
      if (!n.name) try {
        Object.defineProperty(n, "name", {
          get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
      return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
        n && (this.removeHook(t, n), n = void 0);
      };
    }
    hookOnce(t, n) {
      let r, s = (...o) => (typeof r == "function" && r(), r = void 0, s = void 0, n(...o));
      return r = this.hook(t, s), r;
    }
    removeHook(t, n) {
      if (this._hooks[t]) {
        const r = this._hooks[t].indexOf(n);
        r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t];
      }
    }
    deprecateHook(t, n) {
      this._deprecatedHooks[t] = typeof n == "string" ? {
        to: n
      } : n;
      const r = this._hooks[t] || [];
      delete this._hooks[t];
      for (const s of r) this.hook(t, s);
    }
    deprecateHooks(t) {
      Object.assign(this._deprecatedHooks, t);
      for (const n in t) this.deprecateHook(n, t[n]);
    }
    addHooks(t) {
      const n = Si(t), r = Object.keys(n).map((s) => this.hook(s, n[s]));
      return () => {
        for (const s of r.splice(0, r.length)) s();
      };
    }
    removeHooks(t) {
      const n = Si(t);
      for (const r in n) this.removeHook(r, n[r]);
    }
    removeAllHooks() {
      for (const t in this._hooks) delete this._hooks[t];
    }
    callHook(t, ...n) {
      return n.unshift(t), this.callHookWith(Eg, t, ...n);
    }
    callHookParallel(t, ...n) {
      return n.unshift(t), this.callHookWith(Tg, t, ...n);
    }
    callHookWith(t, n, ...r) {
      const s = this._before || this._after ? {
        name: n,
        args: r,
        context: {}
      } : void 0;
      this._before && Bo(this._before, s);
      const o = t(n in this._hooks ? [
        ...this._hooks[n]
      ] : [], r);
      return o instanceof Promise ? o.finally(() => {
        this._after && s && Bo(this._after, s);
      }) : (this._after && s && Bo(this._after, s), o);
    }
    beforeEach(t) {
      return this._before = this._before || [], this._before.push(t), () => {
        if (this._before !== void 0) {
          const n = this._before.indexOf(t);
          n !== -1 && this._before.splice(n, 1);
        }
      };
    }
    afterEach(t) {
      return this._after = this._after || [], this._after.push(t), () => {
        if (this._after !== void 0) {
          const n = this._after.indexOf(t);
          n !== -1 && this._after.splice(n, 1);
        }
      };
    }
  }
  function Af() {
    return new Rg();
  }
  function Cg(e = {}) {
    let t, n = false;
    const r = (i) => {
      if (t && t !== i) throw new Error("Context conflict");
    };
    let s;
    if (e.asyncContext) {
      const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
      i ? s = new i() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
    const o = () => {
      if (s) {
        const i = s.getStore();
        if (i !== void 0) return i;
      }
      return t;
    };
    return {
      use: () => {
        const i = o();
        if (i === void 0) throw new Error("Context is not available");
        return i;
      },
      tryUse: () => o(),
      set: (i, a) => {
        a || r(i), t = i, n = true;
      },
      unset: () => {
        t = void 0, n = false;
      },
      call: (i, a) => {
        r(i), t = i;
        try {
          return s ? s.run(i, a) : a();
        } finally {
          n || (t = void 0);
        }
      },
      async callAsync(i, a) {
        t = i;
        const l = () => {
          t = i;
        }, u = () => t === i ? l : void 0;
        ki.add(u);
        try {
          const c = s ? s.run(i, a) : a();
          return n || (t = void 0), await c;
        } finally {
          ki.delete(u);
        }
      }
    };
  }
  function Pg(e = {}) {
    const t = {};
    return {
      get(n, r = {}) {
        return t[n] || (t[n] = Cg({
          ...e,
          ...r
        })), t[n];
      }
    };
  }
  const Fs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}, fl = "__unctx__", Ag = Fs[fl] || (Fs[fl] = Pg()), xg = (e, t = {}) => Ag.get(e, t), dl = "__unctx_async_handlers__", ki = Fs[dl] || (Fs[dl] = /* @__PURE__ */ new Set());
  function Jn(e) {
    const t = [];
    for (const s of ki) {
      const o = s();
      o && t.push(o);
    }
    const n = () => {
      for (const s of t) s();
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch((s) => {
      throw n(), s;
    })), [
      r,
      n
    ];
  }
  let Og, hl, Lg, Mg, pl, Ig, Ut, $g, Ng, xf, ml, Bg;
  Og = false;
  hl = false;
  Lg = true;
  Mg = false;
  pl = {
    id: "__nuxt-loader"
  };
  Ig = {
    componentName: "NuxtLink",
    prefetch: true,
    prefetchOn: {
      visibility: true
    }
  };
  Ut = {
    deep: false
  };
  $g = void 0;
  NS = {};
  Ng = "#__nuxt";
  xf = "nuxt-app";
  ml = 36e5;
  Bg = "vite:preloadError";
  function Of(e = xf) {
    return xg(e, {
      asyncContext: false
    });
  }
  const Dg = "__nuxt_plugin";
  function jg(e) {
    var _a2;
    let t = 0;
    const n = {
      _id: e.id || xf || "nuxt-app",
      _scope: Wr(),
      provide: void 0,
      globalName: "nuxt",
      versions: {
        get nuxt() {
          return "3.17.3";
        },
        get vue() {
          return n.vueApp.version;
        }
      },
      payload: Ft({
        ...((_a2 = e.ssrContext) == null ? void 0 : _a2.payload) || {},
        data: Ft({}),
        state: It({}),
        once: /* @__PURE__ */ new Set(),
        _errors: Ft({})
      }),
      static: {
        data: {}
      },
      runWithContext(s) {
        return n._scope.active && !Kt() ? n._scope.run(() => gl(n, s)) : gl(n, s);
      },
      isHydrating: true,
      deferHydration() {
        if (!n.isHydrating) return () => {
        };
        t++;
        let s = false;
        return () => {
          if (!s && (s = true, t--, t === 0)) return n.isHydrating = false, n.callHook("app:suspense:resolve");
        };
      },
      _asyncDataPromises: {},
      _asyncData: Ft({}),
      _payloadRevivers: {},
      ...e
    };
    {
      const s = window.__NUXT__;
      if (s) for (const o in s) switch (o) {
        case "data":
        case "state":
        case "_errors":
          Object.assign(n.payload[o], s[o]);
          break;
        default:
          n.payload[o] = s[o];
      }
    }
    n.hooks = Af(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (s, o) => {
      const i = "$" + s;
      ds(n, i, o), ds(n.vueApp.config.globalProperties, i, o);
    }, ds(n.vueApp, "$nuxt", n), ds(n.vueApp.config.globalProperties, "$nuxt", n);
    {
      window.addEventListener(Bg, (o) => {
        n.callHook("app:chunkError", {
          error: o.payload
        }), o.payload.message.includes("Unable to preload CSS") && o.preventDefault();
      }), window.useNuxtApp || (window.useNuxtApp = ye);
      const s = n.hook("app:error", (...o) => {
        console.error("[nuxt] error caught during app initialization", ...o);
      });
      n.hook("app:mounted", s);
    }
    const r = n.payload.config;
    return n.provide("config", r), n;
  }
  function Hg(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks);
  }
  async function Fg(e, t) {
    if (typeof t == "function") {
      const { provide: n } = await e.runWithContext(() => t(e)) || {};
      if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
    }
  }
  async function Ug(e, t) {
    const n = [], r = [], s = [], o = [];
    let i = 0;
    async function a(l) {
      var _a2;
      const u = ((_a2 = l.dependsOn) == null ? void 0 : _a2.filter((c) => t.some((f) => f._name === c) && !n.includes(c))) ?? [];
      if (u.length > 0) r.push([
        new Set(u),
        l
      ]);
      else {
        const c = Fg(e, l).then(async () => {
          l._name && (n.push(l._name), await Promise.all(r.map(async ([f, h]) => {
            f.has(l._name) && (f.delete(l._name), f.size === 0 && (i++, await a(h)));
          })));
        });
        l.parallel ? s.push(c.catch((f) => o.push(f))) : await c;
      }
    }
    for (const l of t) Hg(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(s), i) for (let l = 0; l < i; l++) await Promise.all(s);
    if (o.length) throw o[0];
  }
  function Ie(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {
    }), e, {
      [Dg]: true,
      _name: t
    });
  }
  const Lf = Ie;
  function gl(e, t, n) {
    const r = () => t();
    return Of(e._id).set(e), e.vueApp.runWithContext(r);
  }
  function Vg(e) {
    var _a2;
    let t;
    return ir() && (t = (_a2 = Xe()) == null ? void 0 : _a2.appContext.app.$nuxt), t || (t = Of(e).tryUse()), t || null;
  }
  ye = function(e) {
    const t = Vg(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t;
  };
  bn = function(e) {
    return ye().$config;
  };
  function ds(e, t, n) {
    Object.defineProperty(e, t, {
      get: () => n
    });
  }
  function Wg(e, t) {
    return {
      ctx: {
        table: e
      },
      matchAll: (n) => If(n, e)
    };
  }
  function Mf(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, s]) => [
      r,
      Mf(s)
    ])) : new Map(Object.entries(e[n]));
    return t;
  }
  function qg(e) {
    return Wg(Mf(e));
  }
  function If(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [o, i] of yl(t.wildcard)) (e === o || e.startsWith(o + "/")) && r.push(i);
    for (const [o, i] of yl(t.dynamic)) if (e.startsWith(o + "/")) {
      const a = "/" + e.slice(o.length).split("/").splice(2).join("/");
      r.push(...If(a, i));
    }
    const s = t.static.get(e);
    return s && r.push(s), r.filter(Boolean);
  }
  function yl(e) {
    return [
      ...e.entries()
    ].sort((t, n) => t[0].length - n[0].length);
  }
  function Do(e) {
    if (e === null || typeof e != "object") return false;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? false : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : true;
  }
  function Ei(e, t, n = ".", r) {
    if (!Do(t)) return Ei(e, {}, n, r);
    const s = Object.assign({}, t);
    for (const o in e) {
      if (o === "__proto__" || o === "constructor") continue;
      const i = e[o];
      i != null && (r && r(s, o, i, n) || (Array.isArray(i) && Array.isArray(s[o]) ? s[o] = [
        ...i,
        ...s[o]
      ] : Do(i) && Do(s[o]) ? s[o] = Ei(i, s[o], (n ? `${n}.` : "") + o.toString(), r) : s[o] = i));
    }
    return s;
  }
  function Kg(e) {
    return (...t) => t.reduce((n, r) => Ei(n, r, "", e), {});
  }
  $f = Kg();
  function Gg(e, t) {
    try {
      return t in e;
    } catch {
      return false;
    }
  }
  class vl extends Error {
    constructor(t, n = {}) {
      super(t, n);
      __publicField(this, "statusCode", 500);
      __publicField(this, "fatal", false);
      __publicField(this, "unhandled", false);
      __publicField(this, "statusMessage");
      __publicField(this, "data");
      __publicField(this, "cause");
      n.cause && !this.cause && (this.cause = n.cause);
    }
    toJSON() {
      const t = {
        message: this.message,
        statusCode: Ti(this.statusCode, 500)
      };
      return this.statusMessage && (t.statusMessage = Nf(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t;
    }
  }
  __publicField(vl, "__h3_error__", true);
  function zg(e) {
    if (typeof e == "string") return new vl(e);
    if (Jg(e)) return e;
    const t = new vl(e.message ?? e.statusMessage ?? "", {
      cause: e.cause || e
    });
    if (Gg(e, "stack")) try {
      Object.defineProperty(t, "stack", {
        get() {
          return e.stack;
        }
      });
    } catch {
      try {
        t.stack = e.stack;
      } catch {
      }
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Ti(e.statusCode, t.statusCode) : e.status && (t.statusCode = Ti(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
      const n = t.statusMessage;
      Nf(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t;
  }
  function Jg(e) {
    var _a2;
    return ((_a2 = e == null ? void 0 : e.constructor) == null ? void 0 : _a2.__h3_error__) === true;
  }
  const Yg = /[^\u0009\u0020-\u007E]/g;
  function Nf(e = "") {
    return e.replace(Yg, "");
  }
  function Ti(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
  }
  let Bf, Jr;
  Bf = Symbol("layout-meta");
  Jr = Symbol("route");
  Ne = () => {
    var _a2;
    return (_a2 = ye()) == null ? void 0 : _a2.$router;
  };
  po = () => ir() ? Te(Jr, ye()._route) : ye()._route;
  let Qg;
  Qg = () => {
    try {
      if (ye()._processingMiddleware) return true;
    } catch {
      return false;
    }
    return false;
  };
  Xg = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : "path" in e ? Ri(e) : Ne().resolve(e).href;
    if (t == null ? void 0 : t.open) {
      const { target: l = "_blank", windowFeatures: u = {} } = t.open, c = Object.entries(u).filter(([f, h]) => h !== void 0).map(([f, h]) => `${f.toLowerCase()}=${h}`).join(", ");
      return open(n, l, c), Promise.resolve();
    }
    const r = $t(n, {
      acceptRelative: true
    }), s = (t == null ? void 0 : t.external) || r;
    if (s) {
      if (!(t == null ? void 0 : t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const { protocol: l } = new URL(n, window.location.href);
      if (l && Jm(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const o = Qg();
    if (!s && o) {
      if (t == null ? void 0 : t.replace) {
        if (typeof e == "string") {
          const { pathname: l, search: u, hash: c } = ra(e);
          return {
            path: l,
            ...u && {
              query: fo(u)
            },
            ...c && {
              hash: c
            },
            replace: true
          };
        }
        return {
          ...e,
          replace: true
        };
      }
      return e;
    }
    const i = Ne(), a = ye();
    return s ? (a._scope.stop(), (t == null ? void 0 : t.replace) ? location.replace(n) : location.href = n, o ? a.isHydrating ? new Promise(() => {
    }) : false : Promise.resolve()) : (t == null ? void 0 : t.replace) ? i.replace(e) : i.push(e);
  };
  function Ri(e) {
    return Sf(e.path || "", e.query || {}) + (e.hash || "");
  }
  let Df, mo, Tn, jf, Hf, Zg;
  Df = "__nuxt_error";
  mo = () => so(ye().payload, "error");
  Tn = (e) => {
    const t = hn(e);
    try {
      const n = ye(), r = mo();
      n.hooks.callHook("app:error", t), r.value || (r.value = t);
    } catch {
      throw t;
    }
    return t;
  };
  jf = async (e = {}) => {
    const t = ye(), n = mo();
    t.callHook("app:error:cleared", e), e.redirect && await Ne().replace(e.redirect), n.value = $g;
  };
  Hf = (e) => !!e && typeof e == "object" && Df in e;
  hn = (e) => {
    const t = zg(e);
    return Object.defineProperty(t, Df, {
      value: true,
      configurable: false,
      writable: false
    }), t;
  };
  Zg = {
    trailing: true
  };
  function ey(e, t = 25, n = {}) {
    if (n = {
      ...Zg,
      ...n
    }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
    let r, s, o = [], i, a;
    const l = (u, c) => (i = ty(e, u, c), i.finally(() => {
      if (i = null, n.trailing && a && !s) {
        const f = l(u, a);
        return a = null, f;
      }
    }), i);
    return function(...u) {
      return i ? (n.trailing && (a = u), i) : new Promise((c) => {
        const f = !s && n.leading;
        clearTimeout(s), s = setTimeout(() => {
          s = null;
          const h = n.leading ? r : l(this, u);
          for (const d of o) d(h);
          o = [];
        }, t), f ? (r = l(this, u), c(r)) : o.push(c);
      });
    };
  }
  async function ty(e, t, n) {
    return await e.apply(t, n);
  }
  let oa;
  const Yr = (e) => oa = e, ny = () => ir() && Te(ia) || oa, ia = Symbol();
  function Ci(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Cr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Cr || (Cr = {}));
  function ry() {
    const e = Wr(true), t = e.run(() => Re({}));
    let n = [], r = [];
    const s = Kn({
      install(o) {
        Yr(s), s._a = o, o.provide(ia, s), o.config.globalProperties.$pinia = s, r.forEach((i) => n.push(i)), r = [];
      },
      use(o) {
        return this._a ? n.push(o) : r.push(o), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return s;
  }
  const Ff = () => {
  };
  function bl(e, t, n, r = Ff) {
    e.push(t);
    const s = () => {
      const o = e.indexOf(t);
      o > -1 && (e.splice(o, 1), r());
    };
    return !n && Kt() && pn(s), s;
  }
  function Bn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const sy = (e) => e(), _l = Symbol(), jo = Symbol();
  function Pi(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], s = e[n];
      Ci(s) && Ci(r) && e.hasOwnProperty(n) && !we(r) && !Lt(r) ? e[n] = Pi(s, r) : e[n] = r;
    }
    return e;
  }
  const Uf = Symbol();
  function oy(e) {
    return Object.defineProperty(e, Uf, {});
  }
  function iy(e) {
    return !Ci(e) || !Object.prototype.hasOwnProperty.call(e, Uf);
  }
  const { assign: en } = Object;
  function ay(e) {
    return !!(we(e) && e.effect);
  }
  function ly(e, t, n, r) {
    const { state: s, actions: o, getters: i } = t, a = n.state.value[e];
    let l;
    function u() {
      a || (n.state.value[e] = s ? s() : {});
      const c = Mh(n.state.value[e]);
      return en(c, o, Object.keys(i || {}).reduce((f, h) => (f[h] = Kn(Y(() => {
        Yr(n);
        const d = n._s.get(e);
        return i[h].call(d, d);
      })), f), {}));
    }
    return l = Vf(e, u, t, n, r, true), l;
  }
  function Vf(e, t, n = {}, r, s, o) {
    let i;
    const a = en({
      actions: {}
    }, n), l = {
      deep: true
    };
    let u, c, f = [], h = [], d;
    const p = r.state.value[e];
    !o && !p && (r.state.value[e] = {}), Re({});
    let y;
    function S(N) {
      let C;
      u = c = false, typeof N == "function" ? (N(r.state.value[e]), C = {
        type: Cr.patchFunction,
        storeId: e,
        events: d
      }) : (Pi(r.state.value[e], N), C = {
        type: Cr.patchObject,
        payload: N,
        storeId: e,
        events: d
      });
      const O = y = Symbol();
      Mt().then(() => {
        y === O && (u = true);
      }), c = true, Bn(f, C, r.state.value[e]);
    }
    const k = o ? function() {
      const { state: C } = n, O = C ? C() : {};
      this.$patch((E) => {
        en(E, O);
      });
    } : Ff;
    function _() {
      i.stop(), f = [], h = [], r._s.delete(e);
    }
    const m = (N, C = "") => {
      if (_l in N) return N[jo] = C, N;
      const O = function() {
        Yr(r);
        const E = Array.from(arguments), R = [], B = [];
        function X(K) {
          R.push(K);
        }
        function Z(K) {
          B.push(K);
        }
        Bn(h, {
          args: E,
          name: O[jo],
          store: w,
          after: X,
          onError: Z
        });
        let H;
        try {
          H = N.apply(this && this.$id === e ? this : w, E);
        } catch (K) {
          throw Bn(B, K), K;
        }
        return H instanceof Promise ? H.then((K) => (Bn(R, K), K)).catch((K) => (Bn(B, K), Promise.reject(K))) : (Bn(R, H), H);
      };
      return O[_l] = true, O[jo] = C, O;
    }, v = {
      _p: r,
      $id: e,
      $onAction: bl.bind(null, h),
      $patch: S,
      $reset: k,
      $subscribe(N, C = {}) {
        const O = bl(f, N, C.detached, () => E()), E = i.run(() => Qe(() => r.state.value[e], (R) => {
          (C.flush === "sync" ? c : u) && N({
            storeId: e,
            type: Cr.direct,
            events: d
          }, R);
        }, en({}, l, C)));
        return O;
      },
      $dispose: _
    }, w = It(v);
    r._s.set(e, w);
    const M = (r._a && r._a.runWithContext || sy)(() => r._e.run(() => (i = Wr()).run(() => t({
      action: m
    }))));
    for (const N in M) {
      const C = M[N];
      if (we(C) && !ay(C) || Lt(C)) o || (p && iy(C) && (we(C) ? C.value = p[N] : Pi(C, p[N])), r.state.value[e][N] = C);
      else if (typeof C == "function") {
        const O = m(C, N);
        M[N] = O, a.actions[N] = C;
      }
    }
    return en(w, M), en(re(w), M), Object.defineProperty(w, "$state", {
      get: () => r.state.value[e],
      set: (N) => {
        S((C) => {
          en(C, N);
        });
      }
    }), r._p.forEach((N) => {
      en(w, i.run(() => N({
        store: w,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), p && o && n.hydrate && n.hydrate(w.$state, p), u = true, c = true, w;
  }
  cy = function(e, t, n) {
    let r;
    const s = typeof t == "function";
    r = s ? n : t;
    function o(i, a) {
      const l = ir();
      return i = i || (l ? Te(ia, null) : null), i && Yr(i), i = oa, i._s.has(e) || (s ? Vf(e, t, r, i) : ly(e, r, i)), i._s.get(e);
    }
    return o.$id = e, o;
  };
  BS = function(e) {
    const t = re(e), n = {};
    for (const r in t) {
      const s = t[r];
      s.effect ? n[r] = Y({
        get: () => e[r],
        set(o) {
          e[r] = o;
        }
      }) : (we(s) || Lt(s)) && (n[r] = so(e, r));
    }
    return n;
  };
  function wl(e) {
    const t = fy(e), n = new ArrayBuffer(t.length), r = new DataView(n);
    for (let s = 0; s < n.byteLength; s++) r.setUint8(s, t.charCodeAt(s));
    return n;
  }
  const uy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function fy(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "", n = 0, r = 0;
    for (let s = 0; s < e.length; s++) n <<= 6, n |= uy.indexOf(e[s]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
  }
  const dy = -1, hy = -2, py = -3, my = -4, gy = -5, yy = -6;
  function vy(e, t) {
    return by(JSON.parse(e), t);
  }
  function by(e, t) {
    if (typeof e == "number") return s(e, true);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e, r = Array(n.length);
    function s(o, i = false) {
      if (o === dy) return;
      if (o === py) return NaN;
      if (o === my) return 1 / 0;
      if (o === gy) return -1 / 0;
      if (o === yy) return -0;
      if (i) throw new Error("Invalid input");
      if (o in r) return r[o];
      const a = n[o];
      if (!a || typeof a != "object") r[o] = a;
      else if (Array.isArray(a)) if (typeof a[0] == "string") {
        const l = a[0], u = t == null ? void 0 : t[l];
        if (u) return r[o] = u(s(a[1]));
        switch (l) {
          case "Date":
            r[o] = new Date(a[1]);
            break;
          case "Set":
            const c = /* @__PURE__ */ new Set();
            r[o] = c;
            for (let d = 1; d < a.length; d += 1) c.add(s(a[d]));
            break;
          case "Map":
            const f = /* @__PURE__ */ new Map();
            r[o] = f;
            for (let d = 1; d < a.length; d += 2) f.set(s(a[d]), s(a[d + 1]));
            break;
          case "RegExp":
            r[o] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            r[o] = Object(a[1]);
            break;
          case "BigInt":
            r[o] = BigInt(a[1]);
            break;
          case "null":
            const h = /* @__PURE__ */ Object.create(null);
            r[o] = h;
            for (let d = 1; d < a.length; d += 2) h[a[d]] = s(a[d + 1]);
            break;
          case "Int8Array":
          case "Uint8Array":
          case "Uint8ClampedArray":
          case "Int16Array":
          case "Uint16Array":
          case "Int32Array":
          case "Uint32Array":
          case "Float32Array":
          case "Float64Array":
          case "BigInt64Array":
          case "BigUint64Array": {
            const d = globalThis[l], p = a[1], y = wl(p), S = new d(y);
            r[o] = S;
            break;
          }
          case "ArrayBuffer": {
            const d = a[1], p = wl(d);
            r[o] = p;
            break;
          }
          default:
            throw new Error(`Unknown type ${l}`);
        }
      } else {
        const l = new Array(a.length);
        r[o] = l;
        for (let u = 0; u < a.length; u += 1) {
          const c = a[u];
          c !== hy && (l[u] = s(c));
        }
      }
      else {
        const l = {};
        r[o] = l;
        for (const u in a) {
          const c = a[u];
          l[u] = s(c);
        }
      }
      return r[o];
    }
    return s(0);
  }
  const _y = /* @__PURE__ */ new Set([
    "link",
    "style",
    "script",
    "noscript"
  ]), wy = /* @__PURE__ */ new Set([
    "title",
    "titleTemplate",
    "script",
    "style",
    "noscript"
  ]), Sl = /* @__PURE__ */ new Set([
    "base",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), Sy = /* @__PURE__ */ new Set([
    "title",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), ky = /* @__PURE__ */ new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams"
  ]), Ey = /* @__PURE__ */ new Set([
    "key",
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "innerHTML",
    "textContent",
    "processTemplateParams"
  ]), Ty = /* @__PURE__ */ new Set([
    "templateParams",
    "htmlAttrs",
    "bodyAttrs"
  ]), aa = /* @__PURE__ */ new Set([
    "theme-color",
    "google-site-verification",
    "og",
    "article",
    "book",
    "profile",
    "twitter",
    "author"
  ]), jr = {
    META: /* @__PURE__ */ new Set([
      "twitter"
    ]),
    OG: /* @__PURE__ */ new Set([
      "og",
      "book",
      "article",
      "profile",
      "fb"
    ]),
    MEDIA: /* @__PURE__ */ new Set([
      "ogImage",
      "ogVideo",
      "ogAudio",
      "twitterImage"
    ]),
    HTTP_EQUIV: /* @__PURE__ */ new Set([
      "contentType",
      "defaultStyle",
      "xUaCompatible"
    ])
  }, Ry = {
    articleExpirationTime: "article:expiration_time",
    articleModifiedTime: "article:modified_time",
    articlePublishedTime: "article:published_time",
    bookReleaseDate: "book:release_date",
    fbAppId: "fb:app_id",
    ogAudioSecureUrl: "og:audio:secure_url",
    ogAudioUrl: "og:audio",
    ogImageSecureUrl: "og:image:secure_url",
    ogImageUrl: "og:image",
    ogSiteName: "og:site_name",
    ogVideoSecureUrl: "og:video:secure_url",
    ogVideoUrl: "og:video",
    profileFirstName: "profile:first_name",
    profileLastName: "profile:last_name",
    profileUsername: "profile:username",
    msapplicationConfig: "msapplication-Config",
    msapplicationTileColor: "msapplication-TileColor",
    msapplicationTileImage: "msapplication-TileImage"
  }, Wf = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({ key: e, value: t }) => `${Vt(e)}=${t}`
      }
    },
    refresh: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: ";",
        resolve: ({ key: e, value: t }) => e === "seconds" ? `${t}` : void 0
      }
    },
    robots: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({ key: e, value: t }) => typeof t == "boolean" ? Vt(e) : `${Vt(e)}:${t}`
      }
    },
    contentSecurityPolicy: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: "; ",
        resolve: ({ key: e, value: t }) => `${Vt(e)} ${t}`
      }
    },
    charset: {}
  };
  function Vt(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(), n = t.indexOf("-");
    return n === -1 ? t : jr.META.has(t.slice(0, n)) || jr.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t;
  }
  function qf(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t));
  }
  function Ai(e) {
    return Array.isArray(e) ? e.map(Ai) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [
      Vt(t),
      Ai(n)
    ]));
  }
  function Kf(e, t = {}) {
    const { entrySeparator: n = "", keyValueSeparator: r = "", wrapValue: s, resolve: o } = t;
    return Object.entries(e).map(([i, a]) => {
      if (o) {
        const u = o({
          key: i,
          value: a
        });
        if (u !== void 0) return u;
      }
      const l = typeof a == "object" ? Kf(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && s ? `${s}${a.replace(new RegExp(s, "g"), `\\${s}`)}${s}` : a;
      return `${i}${r}${l}`;
    }).join(n);
  }
  function kl(e, t) {
    const n = qf(t), r = Vt(e), s = Gf(r);
    if (!aa.has(r)) return [
      {
        [s]: r,
        ...n
      }
    ];
    const o = Object.fromEntries(Object.entries(n).map(([i, a]) => [
      `${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`,
      a
    ]));
    return Us(o || {}).sort((i, a) => {
      var _a2, _b2;
      return (((_a2 = i[s]) == null ? void 0 : _a2.length) || 0) - (((_b2 = a[s]) == null ? void 0 : _b2.length) || 0);
    });
  }
  function Gf(e) {
    var _a2;
    if (((_a2 = Wf[e]) == null ? void 0 : _a2.metaKey) === "http-equiv" || jr.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = Vt(e), n = t.indexOf(":");
    return n === -1 ? "name" : jr.OG.has(t.slice(0, n)) ? "property" : "name";
  }
  function Cy(e) {
    return Ry[e] || Vt(e);
  }
  function Py(e, t) {
    var _a2;
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Kf(Ai(e), {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve: ({ value: n, key: r }) => n === null ? "" : typeof n == "boolean" ? r : void 0,
      ...(_a2 = Wf[t]) == null ? void 0 : _a2.unpack
    });
  }
  function Us(e) {
    const t = [], n = {};
    for (const [s, o] of Object.entries(e)) {
      if (Array.isArray(o)) {
        if (s === "themeColor") {
          o.forEach((i) => {
            typeof i == "object" && i !== null && t.push({
              name: "theme-color",
              ...i
            });
          });
          continue;
        }
        for (const i of o) if (typeof i == "object" && i !== null) {
          const a = [], l = [];
          for (const [u, c] of Object.entries(i)) {
            const f = `${s}${u === "url" ? "" : `:${u}`}`, h = Us({
              [f]: c
            });
            (u === "url" ? a : l).push(...h);
          }
          t.push(...a, ...l);
        } else t.push(...typeof i == "string" ? Us({
          [s]: i
        }) : kl(s, i));
        continue;
      }
      if (typeof o == "object" && o) if (jr.MEDIA.has(s)) {
        const i = s.startsWith("twitter") ? "twitter" : "og", a = s.replace(/^(og|twitter)/, "").toLowerCase(), l = i === "twitter" ? "name" : "property";
        o.url && t.push({
          [l]: `${i}:${a}`,
          content: o.url
        }), o.secureUrl && t.push({
          [l]: `${i}:${a}:secure_url`,
          content: o.secureUrl
        });
        for (const [u, c] of Object.entries(o)) u !== "url" && u !== "secureUrl" && t.push({
          [l]: `${i}:${a}:${u}`,
          content: c
        });
      } else aa.has(Vt(s)) ? t.push(...kl(s, o)) : n[s] = qf(o);
      else n[s] = o;
    }
    const r = Object.entries(n).map(([s, o]) => {
      if (s === "charset") return {
        charset: o === null ? "_null" : o
      };
      const i = Gf(s), a = Cy(s), l = o === null ? "_null" : typeof o == "object" ? Py(o, s) : typeof o == "number" ? o.toString() : o;
      return i === "http-equiv" ? {
        "http-equiv": a,
        content: l
      } : {
        [i]: a,
        content: l
      };
    });
    return [
      ...t,
      ...r
    ].map((s) => "content" in s && s.content === "_null" ? {
      ...s,
      content: null
    } : s);
  }
  const Ay = {
    key: "flatMeta",
    hooks: {
      "entries:normalize": (e) => {
        const t = [];
        e.tags = e.tags.map((n) => n.tag !== "_flatMeta" ? n : (t.push(Us(n.props).map((r) => ({
          ...n,
          tag: "meta",
          props: r
        }))), false)).filter(Boolean).concat(...t);
      }
    }
  }, xy = [
    "name",
    "property",
    "http-equiv"
  ];
  function zf(e) {
    const t = e.split(":")[1];
    return aa.has(t);
  }
  function xi(e) {
    const { props: t, tag: n } = e;
    if (ky.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (e.tag === "meta") {
      for (const r of xy) if (t[r] !== void 0) return `${n}:${t[r]}`;
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (wy.has(n)) {
      const r = e.textContent || e.innerHTML;
      if (r) return `${n}:content:${r}`;
    }
  }
  function El(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([r, s]) => `${r}:${String(s)}`).join(",")}`;
  }
  function Vs(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let s;
    if (t && (s = t(n, e)), Array.isArray(s)) return s.map((o) => Vs(o, t));
    if ((s == null ? void 0 : s.constructor) === Object) {
      const o = {};
      for (const i of Object.keys(s)) o[i] = Vs(s[i], t, i);
      return o;
    }
    return s;
  }
  function Oy(e, t) {
    const n = e === "style" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
    function r(s) {
      const o = s.trim();
      if (o) if (e === "style") {
        const [i, ...a] = o.split(":").map((l) => l.trim());
        i && a.length && n.set(i, a.join(":"));
      } else o.split(" ").filter(Boolean).forEach((i) => n.add(i));
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach((s) => r(s)) : t && typeof t == "object" && Object.entries(t).forEach(([s, o]) => {
      o && o !== "false" && (e === "style" ? n.set(s.trim(), o) : r(s));
    }), n;
  }
  function Jf(e, t) {
    return e.props = e.props || {}, t && Object.entries(t).forEach(([n, r]) => {
      if (r === null) {
        e.props[n] = null;
        return;
      }
      if (n === "class" || n === "style") {
        e.props[n] = Oy(n, r);
        return;
      }
      if (Ey.has(n)) {
        if ([
          "textContent",
          "innerHTML"
        ].includes(n) && typeof r == "object") {
          let i = t.type;
          if (t.type || (i = "application/json"), !(i == null ? void 0 : i.endsWith("json")) && i !== "speculationrules") return;
          t.type = i, e.props.type = i, e[n] = JSON.stringify(r);
        } else e[n] = r;
        return;
      }
      const s = String(r), o = n.startsWith("data-");
      s === "true" || s === "" ? e.props[n] = o ? s : true : !r && o && s === "false" ? e.props[n] = "false" : r !== void 0 && (e.props[n] = r);
    }), e;
  }
  function Ly(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
      [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, r = Jf({
      tag: e,
      props: {}
    }, n);
    return r.key && _y.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map((s) => ({
      ...r,
      props: {
        ...r.props,
        content: s
      }
    })) : r;
  }
  function My(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (s, o) => {
      for (let i = 0; i < t.length; i++) o = t[i](s, o);
      return o;
    };
    e = n(void 0, e);
    const r = [];
    return e = Vs(e, n), Object.entries(e || {}).forEach(([s, o]) => {
      if (o !== void 0) for (const i of Array.isArray(o) ? o : [
        o
      ]) r.push(Ly(s, i));
    }), r.flat();
  }
  const Tl = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w, Rl = {
    base: -10,
    title: 10
  }, Iy = {
    critical: -8,
    high: -1,
    low: 2
  }, Cl = {
    meta: {
      "content-security-policy": -30,
      charset: -20,
      viewport: -15
    },
    link: {
      preconnect: 20,
      stylesheet: 60,
      preload: 70,
      modulepreload: 70,
      prefetch: 90,
      "dns-prefetch": 90,
      prerender: 90
    },
    script: {
      async: 30,
      defer: 80,
      sync: 50
    },
    style: {
      imported: 40,
      sync: 60
    }
  }, $y = /@import/, mr = (e) => e === "" || e === true;
  function Ny(e, t) {
    var _a2;
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = Iy[t.tagPriority] || 0, s = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : Cl;
    if (t.tag in Rl) n = Rl[t.tag];
    else if (t.tag === "meta") {
      const o = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
      o && (n = Cl.meta[o]);
    } else t.tag === "link" && t.props.rel ? n = s.link[t.props.rel] : t.tag === "script" ? mr(t.props.async) ? n = s.script.async : t.props.src && !mr(t.props.defer) && !mr(t.props.async) && t.props.type !== "module" && !((_a2 = t.props.type) == null ? void 0 : _a2.endsWith("json")) ? n = s.script.sync : mr(t.props.defer) && t.props.src && !mr(t.props.async) && (n = s.script.defer) : t.tag === "style" && (n = t.innerHTML && $y.test(t.innerHTML) ? s.style.imported : s.style.sync);
    return (n || 100) + r;
  }
  function Pl(e, t) {
    const n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
  }
  function By(e = {}) {
    var _a2;
    const t = Af();
    t.addHooks(e.hooks || {});
    const n = !e.document, r = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = [], i = {
      _entryCount: 1,
      plugins: s,
      dirty: false,
      resolvedOptions: e,
      hooks: t,
      ssr: n,
      entries: r,
      headEntries() {
        return [
          ...r.values()
        ];
      },
      use: (a) => Pl(i, a),
      push(a, l) {
        const u = {
          ...l || {}
        };
        delete u.head;
        const c = u._index ?? i._entryCount++, f = {
          _i: c,
          input: a,
          options: u
        }, h = {
          _poll(d = false) {
            i.dirty = true, !d && o.push(c), t.callHook("entries:updated", i);
          },
          dispose() {
            r.delete(c) && h._poll(true);
          },
          patch(d) {
            (!u.mode || u.mode === "server" && n || u.mode === "client" && !n) && (f.input = d, r.set(c, f), h._poll());
          }
        };
        return h.patch(a), h;
      },
      async resolveTags() {
        var _a3;
        const a = {
          tagMap: /* @__PURE__ */ new Map(),
          tags: [],
          entries: [
            ...i.entries.values()
          ]
        };
        for (await t.callHook("entries:resolve", a); o.length; ) {
          const h = o.shift(), d = r.get(h);
          if (d) {
            const p = {
              tags: My(d.input, e.propResolvers || []).map((y) => Object.assign(y, d.options)),
              entry: d
            };
            await t.callHook("entries:normalize", p), d._tags = p.tags.map((y, S) => (y._w = Ny(i, y), y._p = (d._i << 10) + S, y._d = xi(y), y));
          }
        }
        let l = false;
        a.entries.flatMap((h) => (h._tags || []).map((d) => ({
          ...d,
          props: {
            ...d.props
          }
        }))).sort(Tl).reduce((h, d) => {
          const p = String(d._d || d._p);
          if (!h.has(p)) return h.set(p, d);
          const y = h.get(p);
          if (((d == null ? void 0 : d.tagDuplicateStrategy) || (Ty.has(d.tag) ? "merge" : null) || (d.key && d.key === y.key ? "merge" : null)) === "merge") {
            const k = {
              ...y.props
            };
            Object.entries(d.props).forEach(([_, m]) => k[_] = _ === "style" ? new Map([
              ...y.props.style || /* @__PURE__ */ new Map(),
              ...m
            ]) : _ === "class" ? /* @__PURE__ */ new Set([
              ...y.props.class || /* @__PURE__ */ new Set(),
              ...m
            ]) : m), h.set(p, {
              ...d,
              props: k
            });
          } else d._p >> 10 === y._p >> 10 && zf(d._d) ? (h.set(p, Object.assign([
            ...Array.isArray(y) ? y : [
              y
            ],
            d
          ], d)), l = true) : (d._w === y._w ? d._p > y._p : (d == null ? void 0 : d._w) < (y == null ? void 0 : y._w)) && h.set(p, d);
          return h;
        }, a.tagMap);
        const u = a.tagMap.get("title"), c = a.tagMap.get("titleTemplate");
        if (i._title = u == null ? void 0 : u.textContent, c) {
          const h = c == null ? void 0 : c.textContent;
          if (i._titleTemplate = h, h) {
            let d = typeof h == "function" ? h(u == null ? void 0 : u.textContent) : h;
            typeof d == "string" && !i.plugins.has("template-params") && (d = d.replace("%s", (u == null ? void 0 : u.textContent) || "")), u ? d === null ? a.tagMap.delete("title") : a.tagMap.set("title", {
              ...u,
              textContent: d
            }) : (c.tag = "title", c.textContent = d);
          }
        }
        a.tags = Array.from(a.tagMap.values()), l && (a.tags = a.tags.flat().sort(Tl)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
        const f = [];
        for (const h of a.tags) {
          const { innerHTML: d, tag: p, props: y } = h;
          if (Sy.has(p) && !(Object.keys(y).length === 0 && !h.innerHTML && !h.textContent) && !(p === "meta" && !y.content && !y["http-equiv"] && !y.charset)) {
            if (p === "script" && d) {
              if ((_a3 = y.type) == null ? void 0 : _a3.endsWith("json")) {
                const S = typeof d == "string" ? d : JSON.stringify(d);
                h.innerHTML = S.replace(/</g, "\\u003C");
              } else typeof d == "string" && (h.innerHTML = d.replace(new RegExp(`</${p}`, "g"), `<\\/${p}`));
              h._d = xi(h);
            }
            f.push(h);
          }
        }
        return f;
      }
    };
    return ((e == null ? void 0 : e.plugins) || []).forEach((a) => Pl(i, a)), i.hooks.callHook("init", i), (_a2 = e.init) == null ? void 0 : _a2.forEach((a) => a && i.push(a)), i;
  }
  const Dy = (e, t) => we(t) ? rt(t) : t, la = "usehead";
  function jy(e) {
    return {
      install(n) {
        n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(la, e);
      }
    }.install;
  }
  function Yf() {
    if (ir()) {
      const e = Te(la);
      if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function Qf(e, t = {}) {
    const n = t.head || Yf();
    return n.ssr ? n.push(e || {}, t) : Hy(n, e, t);
  }
  function Hy(e, t, n = {}) {
    const r = Re(false);
    let s;
    return Sp(() => {
      const i = r.value ? {} : Vs(t, Dy);
      s ? s.patch(i) : s = e.push(i, n);
    }), Xe() && (Ln(() => {
      s.dispose();
    }), bu(() => {
      r.value = true;
    }), vu(() => {
      r.value = false;
    })), s;
  }
  function Fy(e = {}, t = {}) {
    (t.head || Yf()).use(Ay);
    const { title: r, titleTemplate: s, ...o } = e;
    return Qf({
      title: r,
      titleTemplate: s,
      _flatMeta: o
    }, t);
  }
  Xf = function(e) {
    var _a2;
    const t = e || ye();
    return ((_a2 = t.ssrContext) == null ? void 0 : _a2.head) || t.runWithContext(() => {
      if (ir()) {
        const n = Te(la);
        if (!n) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
        return n;
      }
    });
  };
  Zf = function(e, t = {}) {
    const n = Xf(t.nuxt);
    return Qf(e, {
      head: n,
      ...t
    });
  };
  DS = function(e, t = {}) {
    const n = Xf(t.nuxt);
    return Fy(e, {
      head: n,
      ...t
    });
  };
  let Uy, Vy, Al;
  Uy = "modulepreload";
  Vy = function(e, t) {
    return new URL(e, t).href;
  };
  Al = {};
  an = function(t, n, r) {
    let s = Promise.resolve();
    if (n && n.length > 0) {
      let i = function(c) {
        return Promise.all(c.map((f) => Promise.resolve(f).then((h) => ({
          status: "fulfilled",
          value: h
        }), (h) => ({
          status: "rejected",
          reason: h
        }))));
      };
      const a = document.getElementsByTagName("link"), l = document.querySelector("meta[property=csp-nonce]"), u = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      s = i(n.map((c) => {
        if (c = Vy(c, r), c in Al) return;
        Al[c] = true;
        const f = c.endsWith(".css"), h = f ? '[rel="stylesheet"]' : "";
        if (!!r) for (let y = a.length - 1; y >= 0; y--) {
          const S = a[y];
          if (S.href === c && (!f || S.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${h}`)) return;
        const p = document.createElement("link");
        if (p.rel = f ? "stylesheet" : Uy, f || (p.as = "script"), p.crossOrigin = "", p.href = c, u && p.setAttribute("nonce", u), document.head.appendChild(p), f) return new Promise((y, S) => {
          p.addEventListener("load", y), p.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${c}`)));
        });
      }));
    }
    function o(i) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i;
    }
    return s.then((i) => {
      for (const a of i || []) a.status === "rejected" && o(a.reason);
      return t().catch(o);
    });
  };
  let Ts, Rs;
  function Wy() {
    return Ts = $fetch(sa(`builds/meta/${bn().app.buildId}.json`), {
      responseType: "json"
    }), Ts.then((e) => {
      Rs = qg(e.matcher);
    }).catch((e) => {
      console.error("[nuxt] Error fetching app manifest.", e);
    }), Ts;
  }
  function go() {
    return Ts || Wy();
  }
  async function ca(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await go(), !Rs) return console.error("[nuxt] Error creating app manifest matcher.", Rs), {};
    try {
      return $f({}, ...Rs.matchAll(t).reverse());
    } catch (n) {
      return console.error("[nuxt] Error matching route rules.", n), {};
    }
  }
  async function xl(e, t = {}) {
    if (!await td(e)) return null;
    const r = await Ky(e, t);
    return await ed(r) || null;
  }
  const qy = "_payload.json";
  async function Ky(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || $t(n.pathname, {
      acceptRelative: true
    })) throw new Error("Payload URL must not include hostname: " + e);
    const r = bn(), s = t.hash || (t.fresh ? Date.now() : r.app.buildId), o = r.app.cdnURL, i = o && await td(e) ? o : r.app.baseURL;
    return ho(i, n.pathname, qy + (s ? `?${s}` : ""));
  }
  async function ed(e) {
    const t = fetch(e, {
      cache: "force-cache"
    }).then((n) => n.text().then(nd));
    try {
      return await t;
    } catch (n) {
      console.warn("[nuxt] Cannot load payload ", e, n);
    }
    return null;
  }
  async function td(e = po().path) {
    const t = ye();
    return e = tr(e), (await go()).prerendered.includes(e) ? true : t.runWithContext(async () => {
      const r = await ca({
        path: e
      });
      return !!r.prerender && !r.redirect;
    });
  }
  let Sn = null;
  async function Gy() {
    var _a2;
    if (Sn) return Sn;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await nd(e.textContent || ""), n = e.dataset.src ? await ed(e.dataset.src) : void 0;
    return Sn = {
      ...t,
      ...n,
      ...window.__NUXT__
    }, ((_a2 = Sn.config) == null ? void 0 : _a2.public) && (Sn.config.public = It(Sn.config.public)), Sn;
  }
  async function nd(e) {
    return await vy(e, ye()._payloadRevivers);
  }
  function ua(e, t) {
    ye()._payloadRevivers[e] = t;
  }
  const zy = Lf(() => {
    ua("skipHydrate", (e) => {
    });
  });
  var rd = class {
    constructor(...e) {
      __publicField(this, "value");
      __publicField(this, "children");
      __publicField(this, "parent");
      e.length && this.set(...e);
    }
    set([e, ...t], n) {
      var _a2, _b2;
      if (e) {
        let r = (_a2 = this.children) == null ? void 0 : _a2.get(e);
        r ? r.set(t, n) : (this.children ?? (this.children = /* @__PURE__ */ new Map()), r = new this.constructor(t, n), r.parent = this, this.children.set(e, r));
      } else if (this.value = n, n == null) {
        let r = this;
        for (; r == null ? void 0 : r.isEmpty(); ) (_b2 = r.children) == null ? void 0 : _b2.clear(), r = r.parent;
      }
    }
    isEmpty() {
      var _a2;
      return this.value == null && Array.from(((_a2 = this.children) == null ? void 0 : _a2.values()) || []).every((e) => e.isEmpty());
    }
    find([e, ...t]) {
      var _a2, _b2;
      return e ? (_b2 = (_a2 = this.children) == null ? void 0 : _a2.get(e)) == null ? void 0 : _b2.find(t) : this;
    }
    get(e) {
      var _a2;
      return (_a2 = this.find(e)) == null ? void 0 : _a2.value;
    }
    *[Symbol.iterator]() {
      if (this.value != null && (yield this.value), this.children) for (const e of this.children.values()) yield* e;
    }
  };
  function sd(e, [t, n, r], s, o = []) {
    e.children ?? (e.children = /* @__PURE__ */ new Map());
    const i = [
      ...o,
      t
    ], a = new rd([], n && s(i, null, ...n));
    if (e.children.set(t, a), r) for (const l of r) sd(a, l, s, i);
  }
  function Ol(e, t, n, r) {
    e.addEventListener(t, n, r), Kt() && pn(() => {
      e.removeEventListener(t, n);
    });
  }
  var Jy = typeof window < "u";
  function Ll(e, ...t) {
    return typeof e == "function" ? e(...t) : e;
  }
  function Yy(e) {
    return e && typeof e == "object" ? JSON.stringify(e, Object.keys(e).sort()) : String(e);
  }
  var hs = (e) => e.map(Yy), Qy = () => {
  }, Xy = {
    gcTime: 1e3 * 60
  }, Zy = Symbol(), od = {
    staleTime: 1e3 * 5,
    gcTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
    enabled: true
  }, id = Symbol(), ad = () => Te(id, od);
  function ld(e) {
    return (e == null ? void 0 : e.placeholderData) != null && e.state.value.status === "pending";
  }
  var Ml = {}, ev = "_pc_query", fa = cy(ev, ({ action: e }) => {
    const t = new rd();
    let n;
    const r = oy(ro((E, R) => (n = R) && {
      get: () => (E(), t),
      set: Qy
    })), s = Kt(), o = ny()._a, i = ad(), a = e((E, R = null, B, X = null, Z = 0) => s.run(() => {
      const H = ut({
        data: B,
        error: X,
        status: X ? "error" : B !== void 0 ? "success" : "pending"
      }), K = ut("idle");
      return Kn({
        key: E,
        state: H,
        placeholderData: null,
        when: Z,
        asyncStatus: K,
        pending: null,
        deps: Kn(/* @__PURE__ */ new Set()),
        gcTimeout: void 0,
        ext: Ml,
        options: R,
        get stale() {
          return !this.options || !this.when || Date.now() >= this.when + this.options.staleTime;
        },
        get active() {
          return this.deps.size > 0;
        }
      });
    }));
    let l;
    const u = /* @__PURE__ */ new WeakMap(), c = e((E) => {
      let R = u.get(E);
      return R ? (R[2].resume(), R[0] = R[0].map((B) => B.options ? S(B.options, B) : B)) : (l = R = [
        [],
        null,
        s.run(() => Wr())
      ], R[1] = o.runWithContext(() => R[2].run(E)), l = null, u.set(E, R)), R;
    });
    function f(E, R) {
      R && (E.deps.add(R), clearTimeout(E.gcTimeout), E.gcTimeout = void 0, n());
    }
    function h(E, R) {
      !R || !E.deps.has(R) || (E.deps.delete(R), n(), d(E));
    }
    function d(E) {
      E.deps.size > 0 || !E.options || (clearTimeout(E.gcTimeout), Number.isFinite(E.options.gcTime) && (E.gcTimeout = setTimeout(() => {
        O(E);
      }, E.options.gcTime)));
    }
    const p = e((E) => Promise.all(y({
      active: true,
      ...E
    }).map((R) => {
      var _a2;
      return _(R), rt((_a2 = R.options) == null ? void 0 : _a2.enabled) && v(R);
    }))), y = e((E = {}) => {
      const R = E.key ? r.value.find(hs(E.key)) : r.value;
      return R ? (E.exact ? R.value ? [
        R.value
      ] : [] : [
        ...R
      ]).filter((B) => (E.stale == null || B.stale === E.stale) && (E.active == null || B.active === E.active) && (!E.status || B.state.value.status === E.status) && (!E.predicate || E.predicate(B))) : [];
    }), S = e((E, R) => {
      var _a2;
      const B = {
        ...i,
        ...E
      }, X = hs(rt(B.key));
      let Z = t.get(X);
      return Z || (t.set(X, Z = a(X, B, (_a2 = B.initialData) == null ? void 0 : _a2.call(B))), B.placeholderData && Z.state.value.status === "pending" && (Z.placeholderData = Ll(B.placeholderData, ld(R) ? R.placeholderData : R == null ? void 0 : R.state.value.data)), n()), Z.options = B, Z.ext === Ml && (Z.ext = {}, k(Z)), l == null ? void 0 : l[0].push(Z), Z;
    }), k = e((E) => {
    }), _ = e((E) => {
      E.when = 0, w(E);
    }), m = e(async (E, R = E.options) => {
      var _a2;
      return E.state.value.error || E.stale ? ((_a2 = E.pending) == null ? void 0 : _a2.refreshCall) ?? v(E, R) : E.state.value;
    }), v = e(async (E, R = E.options) => {
      var _a2;
      E.asyncStatus.value = "loading";
      const B = new AbortController(), { signal: X } = B;
      (_a2 = E.pending) == null ? void 0 : _a2.abortController.abort();
      const Z = E.pending = {
        abortController: B,
        refreshCall: (async () => R.query({
          signal: X
        }))().then((H) => (Z === E.pending && M(E, {
          data: H,
          error: null,
          status: "success"
        }), E.state.value)).catch((H) => {
          throw Z === E.pending && H && H.name !== "AbortError" && M(E, {
            status: "error",
            data: E.state.value.data,
            error: H
          }), H;
        }).finally(() => {
          E.asyncStatus.value = "idle", Z === E.pending && (E.pending = null, E.state.value.status !== "pending" && (E.placeholderData = null), E.when = Date.now());
        }),
        when: Date.now()
      };
      return Z.refreshCall;
    }), w = e((E, R) => {
      var _a2;
      (_a2 = E.pending) == null ? void 0 : _a2.abortController.abort(R), E.asyncStatus.value = "idle", E.pending = null;
    }), A = e((E, R) => {
      y(E).forEach((B) => w(B, R));
    }), M = e((E, R) => {
      E.state.value = R, E.when = Date.now();
    }), N = e((E, R) => {
      const B = hs(E);
      let X = t.get(B);
      X || t.set(B, X = a(B)), M(X, {
        error: null,
        status: "success",
        data: Ll(R, X.state.value.data)
      }), d(X), n();
    });
    function C(E) {
      var _a2;
      return (_a2 = r.value.get(hs(E))) == null ? void 0 : _a2.state.value.data;
    }
    const O = e((E) => {
      t.set(E.key), n();
    });
    return {
      caches: r,
      ensureDefinedQuery: c,
      _s: Kn(s),
      setQueryData: N,
      getQueryData: C,
      invalidateQueries: p,
      cancelQueries: A,
      invalidate: _,
      fetch: v,
      refresh: m,
      ensure: S,
      extend: k,
      track: f,
      untrack: h,
      cancel: w,
      create: a,
      remove: O,
      setEntryState: M,
      getEntries: y
    };
  });
  function tv(e, t) {
    for (const n of t) sd(e.caches, n, e.create);
  }
  jS = function(e) {
    const t = fa(), n = ad(), r = Xe(), s = Kt(), o = {
      ...n,
      ...e
    }, { refetchOnMount: i, refetchOnReconnect: a, refetchOnWindowFocus: l, enabled: u } = o;
    let c;
    const f = Y(() => (s == null ? void 0 : s._isPaused) ? c : c = t.ensure(o, c));
    c = f.value;
    const h = () => f.value.state.value, d = (v) => t.refresh(f.value, o).catch(v || h), p = (v) => t.fetch(f.value, o).catch(v || h), y = Y(() => ld(f.value)), S = Y(() => y.value ? {
      status: "success",
      data: f.value.placeholderData,
      error: null
    } : f.value.state.value), k = {};
    for (const v in c.ext) k[v] = Y({
      get: () => rt(f.value.ext[v]),
      set(w) {
        const A = f.value.ext[v];
        we(A) ? A.value = w : f.value.ext[v] = w;
      }
    });
    const _ = {
      ...k,
      state: S,
      status: Y(() => S.value.status),
      data: Y(() => S.value.data),
      error: Y(() => f.value.state.value.error),
      asyncStatus: Y(() => f.value.asyncStatus.value),
      isPlaceholderData: y,
      isPending: Y(() => S.value.status === "pending"),
      isLoading: Y(() => f.value.asyncStatus.value === "loading"),
      refresh: d,
      refetch: p
    };
    let m = false;
    return r ? (vt(() => {
      m = true, t.track(c, r);
    }), io(() => {
      t.untrack(c, r);
    })) : (m = true, s && (t.track(c, s), pn(() => {
      t.untrack(c, s);
    }))), Qe(f, (v, w) => {
      m && (w && (t.untrack(w, r), t.untrack(w, s)), t.track(v, r), t.track(v, s), rt(u) && d());
    }, {
      immediate: true
    }), typeof u != "boolean" && Qe(u, (v) => {
      v && d();
    }), r && vt(() => {
      if (rt(u)) {
        const v = rt(i);
        v === "always" ? p() : (v || _.status.value === "pending") && d();
      }
    }), Jy && (l && Ol(document, "visibilitychange", () => {
      const v = rt(l);
      document.visibilityState === "visible" && rt(u) && (v === "always" ? p() : v && d());
    }), a && Ol(window, "online", () => {
      if (rt(u)) {
        const v = rt(a);
        v === "always" ? p() : v && d();
      }
    })), _;
  };
  var nv = (e, t = {}) => {
    const { pinia: n = e.config.globalProperties.$pinia, plugins: r, queryOptions: s, mutationOptions: o = {} } = t;
    e.provide(id, {
      ...od,
      ...s
    }), e.provide(Zy, {
      ...Xy,
      ...o
    });
    const i = fa(n);
    r == null ? void 0 : r.forEach((a) => a({
      scope: i._s,
      queryCache: i,
      pinia: n
    }));
  };
  Il = function(e) {
    return typeof e == "string" ? `'${e}'` : new rv().serialize(e);
  };
  const rv = function() {
    var _e2;
    class e {
      constructor() {
        __privateAdd(this, _e2, /* @__PURE__ */ new Map());
      }
      compare(n, r) {
        const s = typeof n, o = typeof r;
        return s === "string" && o === "string" ? n.localeCompare(r) : s === "number" && o === "number" ? n - r : String.prototype.localeCompare.call(this.serialize(n, true), this.serialize(r, true));
      }
      serialize(n, r) {
        if (n === null) return "null";
        switch (typeof n) {
          case "string":
            return r ? n : `'${n}'`;
          case "bigint":
            return `${n}n`;
          case "object":
            return this.$object(n);
          case "function":
            return this.$function(n);
        }
        return String(n);
      }
      serializeObject(n) {
        const r = Object.prototype.toString.call(n);
        if (r !== "[object Object]") return this.serializeBuiltInType(r.length < 10 ? `unknown:${r}` : r.slice(8, -1), n);
        const s = n.constructor, o = s === Object || s === void 0 ? "" : s.name;
        if (o !== "" && globalThis[o] === s) return this.serializeBuiltInType(o, n);
        if (typeof n.toJSON == "function") {
          const i = n.toJSON();
          return o + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
        }
        return this.serializeObjectEntries(o, Object.entries(n));
      }
      serializeBuiltInType(n, r) {
        const s = this["$" + n];
        if (s) return s.call(this, r);
        if (typeof (r == null ? void 0 : r.entries) == "function") return this.serializeObjectEntries(n, r.entries());
        throw new Error(`Cannot serialize ${n}`);
      }
      serializeObjectEntries(n, r) {
        const s = Array.from(r).sort((i, a) => this.compare(i[0], a[0]));
        let o = `${n}{`;
        for (let i = 0; i < s.length; i++) {
          const [a, l] = s[i];
          o += `${this.serialize(a, true)}:${this.serialize(l)}`, i < s.length - 1 && (o += ",");
        }
        return o + "}";
      }
      $object(n) {
        let r = __privateGet(this, _e2).get(n);
        return r === void 0 && (__privateGet(this, _e2).set(n, `#${__privateGet(this, _e2).size}`), r = this.serializeObject(n), __privateGet(this, _e2).set(n, r)), r;
      }
      $function(n) {
        const r = Function.prototype.toString.call(n);
        return r.slice(-15) === "[native code] }" ? `${n.name || ""}()[native]` : `${n.name}(${n.length})${r.replace(/\s*\n\s*/g, "")}`;
      }
      $Array(n) {
        let r = "[";
        for (let s = 0; s < n.length; s++) r += this.serialize(n[s]), s < n.length - 1 && (r += ",");
        return r + "]";
      }
      $Date(n) {
        try {
          return `Date(${n.toISOString()})`;
        } catch {
          return "Date(null)";
        }
      }
      $ArrayBuffer(n) {
        return `ArrayBuffer[${new Uint8Array(n).join(",")}]`;
      }
      $Set(n) {
        return `Set${this.$Array(Array.from(n).sort((r, s) => this.compare(r, s)))}`;
      }
      $Map(n) {
        return this.serializeObjectEntries("Map", n.entries());
      }
    }
    _e2 = new WeakMap();
    for (const t of [
      "Error",
      "RegExp",
      "URL"
    ]) e.prototype["$" + t] = function(n) {
      return `${t}(${n})`;
    };
    for (const t of [
      "Int8Array",
      "Uint8Array",
      "Uint8ClampedArray",
      "Int16Array",
      "Uint16Array",
      "Int32Array",
      "Uint32Array",
      "Float32Array",
      "Float64Array"
    ]) e.prototype["$" + t] = function(n) {
      return `${t}[${n.join(",")}]`;
    };
    for (const t of [
      "BigInt64Array",
      "BigUint64Array"
    ]) e.prototype["$" + t] = function(n) {
      return `${t}[${n.join("n,")}${n.length > 0 ? "n" : ""}]`;
    };
    return e;
  }();
  sv = function(e, t) {
    return e === t || Il(e) === Il(t);
  };
  const Hn = typeof document < "u";
  function cd(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function ov(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && cd(e.default);
  }
  const ce = Object.assign;
  function Ho(e, t) {
    const n = {};
    for (const r in t) {
      const s = t[r];
      n[r] = _t(s) ? s.map(e) : e(s);
    }
    return n;
  }
  const Pr = () => {
  }, _t = Array.isArray, ud = /#/g, iv = /&/g, av = /\//g, lv = /=/g, cv = /\?/g, fd = /\+/g, uv = /%5B/g, fv = /%5D/g, dd = /%5E/g, dv = /%60/g, hd = /%7B/g, hv = /%7C/g, pd = /%7D/g, pv = /%20/g;
  function da(e) {
    return encodeURI("" + e).replace(hv, "|").replace(uv, "[").replace(fv, "]");
  }
  function mv(e) {
    return da(e).replace(hd, "{").replace(pd, "}").replace(dd, "^");
  }
  function Oi(e) {
    return da(e).replace(fd, "%2B").replace(pv, "+").replace(ud, "%23").replace(iv, "%26").replace(dv, "`").replace(hd, "{").replace(pd, "}").replace(dd, "^");
  }
  function gv(e) {
    return Oi(e).replace(lv, "%3D");
  }
  function yv(e) {
    return da(e).replace(ud, "%23").replace(cv, "%3F");
  }
  function vv(e) {
    return e == null ? "" : yv(e).replace(av, "%2F");
  }
  function Hr(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const bv = /\/$/, _v = (e) => e.replace(bv, "");
  function Fo(e, t, n = "/") {
    let r, s = {}, o = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), o = t.slice(l + 1, a > -1 ? a : t.length), s = e(o)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = Ev(r ?? t, n), {
      fullPath: r + (o && "?") + o + i,
      path: r,
      query: s,
      hash: Hr(i)
    };
  }
  function wv(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function $l(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Sv(e, t, n) {
    const r = t.matched.length - 1, s = n.matched.length - 1;
    return r > -1 && r === s && nr(t.matched[r], n.matched[s]) && md(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function nr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function md(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (const n in e) if (!kv(e[n], t[n])) return false;
    return true;
  }
  function kv(e, t) {
    return _t(e) ? Nl(e, t) : _t(t) ? Nl(t, e) : e === t;
  }
  function Nl(e, t) {
    return _t(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function Ev(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), s = r[r.length - 1];
    (s === ".." || s === ".") && r.push("");
    let o = n.length - 1, i, a;
    for (i = 0; i < r.length; i++) if (a = r[i], a !== ".") if (a === "..") o > 1 && o--;
    else break;
    return n.slice(0, o).join("/") + "/" + r.slice(i).join("/");
  }
  const lt = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  var Fr;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(Fr || (Fr = {}));
  var Ar;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(Ar || (Ar = {}));
  function Tv(e) {
    if (!e) if (Hn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), _v(e);
  }
  const Rv = /^[^#]+#/;
  function Cv(e, t) {
    return e.replace(Rv, "#") + t;
  }
  function Pv(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const yo = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Av(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), s = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!s) return;
      t = Pv(s, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Bl(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const Li = /* @__PURE__ */ new Map();
  function xv(e, t) {
    Li.set(e, t);
  }
  function Ov(e) {
    const t = Li.get(e);
    return Li.delete(e), t;
  }
  let Lv = () => location.protocol + "//" + location.host;
  function gd(e, t) {
    const { pathname: n, search: r, hash: s } = t, o = e.indexOf("#");
    if (o > -1) {
      let a = s.includes(e.slice(o)) ? e.slice(o).length : 1, l = s.slice(a);
      return l[0] !== "/" && (l = "/" + l), $l(l, "");
    }
    return $l(n, e) + r + s;
  }
  function Mv(e, t, n, r) {
    let s = [], o = [], i = null;
    const a = ({ state: h }) => {
      const d = gd(e, location), p = n.value, y = t.value;
      let S = 0;
      if (h) {
        if (n.value = d, t.value = h, i && i === p) {
          i = null;
          return;
        }
        S = y ? h.position - y.position : 0;
      } else r(d);
      s.forEach((k) => {
        k(n.value, p, {
          delta: S,
          type: Fr.pop,
          direction: S ? S > 0 ? Ar.forward : Ar.back : Ar.unknown
        });
      });
    };
    function l() {
      i = n.value;
    }
    function u(h) {
      s.push(h);
      const d = () => {
        const p = s.indexOf(h);
        p > -1 && s.splice(p, 1);
      };
      return o.push(d), d;
    }
    function c() {
      const { history: h } = window;
      h.state && h.replaceState(ce({}, h.state, {
        scroll: yo()
      }), "");
    }
    function f() {
      for (const h of o) h();
      o = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c);
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c, {
      passive: true
    }), {
      pauseListeners: l,
      listen: u,
      destroy: f
    };
  }
  function Dl(e, t, n, r = false, s = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: s ? yo() : null
    };
  }
  function Iv(e) {
    const { history: t, location: n } = window, r = {
      value: gd(e, n)
    }, s = {
      value: t.state
    };
    s.value || o(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function o(l, u, c) {
      const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Lv() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](u, "", h), s.value = u;
      } catch (d) {
        console.error(d), n[c ? "replace" : "assign"](h);
      }
    }
    function i(l, u) {
      const c = ce({}, t.state, Dl(s.value.back, l, s.value.forward, true), u, {
        position: s.value.position
      });
      o(l, c, true), r.value = l;
    }
    function a(l, u) {
      const c = ce({}, s.value, t.state, {
        forward: l,
        scroll: yo()
      });
      o(c.current, c, true);
      const f = ce({}, Dl(r.value, l, null), {
        position: c.position + 1
      }, u);
      o(l, f, false), r.value = l;
    }
    return {
      location: r,
      state: s,
      push: a,
      replace: i
    };
  }
  function $v(e) {
    e = Tv(e);
    const t = Iv(e), n = Mv(e, t.state, t.location, t.replace);
    function r(o, i = true) {
      i || n.pauseListeners(), history.go(o);
    }
    const s = ce({
      location: "",
      base: e,
      go: r,
      createHref: Cv.bind(null, e)
    }, t, n);
    return Object.defineProperty(s, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(s, "state", {
      enumerable: true,
      get: () => t.state.value
    }), s;
  }
  function Nv(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function yd(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const vd = Symbol("");
  var jl;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(jl || (jl = {}));
  function rr(e, t) {
    return ce(new Error(), {
      type: e,
      [vd]: true
    }, t);
  }
  function Tt(e, t) {
    return e instanceof Error && vd in e && (t == null || !!(e.type & t));
  }
  const Hl = "[^/]+?", Bv = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, Dv = /[.+*?^${}()[\]/\\]/g;
  function jv(e, t) {
    const n = ce({}, Bv, t), r = [];
    let s = n.start ? "^" : "";
    const o = [];
    for (const u of e) {
      const c = u.length ? [] : [
        90
      ];
      n.strict && !u.length && (s += "/");
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        let d = 40 + (n.sensitive ? 0.25 : 0);
        if (h.type === 0) f || (s += "/"), s += h.value.replace(Dv, "\\$&"), d += 40;
        else if (h.type === 1) {
          const { value: p, repeatable: y, optional: S, regexp: k } = h;
          o.push({
            name: p,
            repeatable: y,
            optional: S
          });
          const _ = k || Hl;
          if (_ !== Hl) {
            d += 10;
            try {
              new RegExp(`(${_})`);
            } catch (v) {
              throw new Error(`Invalid custom RegExp for param "${p}" (${_}): ` + v.message);
            }
          }
          let m = y ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
          f || (m = S && u.length < 2 ? `(?:/${m})` : "/" + m), S && (m += "?"), s += m, d += 20, S && (d += -8), y && (d += -20), _ === ".*" && (d += -50);
        }
        c.push(d);
      }
      r.push(c);
    }
    if (n.strict && n.end) {
      const u = r.length - 1;
      r[u][r[u].length - 1] += 0.7000000000000001;
    }
    n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
    const i = new RegExp(s, n.sensitive ? "" : "i");
    function a(u) {
      const c = u.match(i), f = {};
      if (!c) return null;
      for (let h = 1; h < c.length; h++) {
        const d = c[h] || "", p = o[h - 1];
        f[p.name] = d && p.repeatable ? d.split("/") : d;
      }
      return f;
    }
    function l(u) {
      let c = "", f = false;
      for (const h of e) {
        (!f || !c.endsWith("/")) && (c += "/"), f = false;
        for (const d of h) if (d.type === 0) c += d.value;
        else if (d.type === 1) {
          const { value: p, repeatable: y, optional: S } = d, k = p in u ? u[p] : "";
          if (_t(k) && !y) throw new Error(`Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = _t(k) ? k.join("/") : k;
          if (!_) if (S) h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
          else throw new Error(`Missing required param "${p}"`);
          c += _;
        }
      }
      return c || "/";
    }
    return {
      re: i,
      score: r,
      keys: o,
      parse: a,
      stringify: l
    };
  }
  function Hv(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function bd(e, t) {
    let n = 0;
    const r = e.score, s = t.score;
    for (; n < r.length && n < s.length; ) {
      const o = Hv(r[n], s[n]);
      if (o) return o;
      n++;
    }
    if (Math.abs(s.length - r.length) === 1) {
      if (Fl(r)) return 1;
      if (Fl(s)) return -1;
    }
    return s.length - r.length;
  }
  function Fl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const Fv = {
    type: 0,
    value: ""
  }, Uv = /[a-zA-Z0-9_]/;
  function Vv(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        Fv
      ]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(d) {
      throw new Error(`ERR (${n})/"${u}": ${d}`);
    }
    let n = 0, r = n;
    const s = [];
    let o;
    function i() {
      o && s.push(o), o = [];
    }
    let a = 0, l, u = "", c = "";
    function f() {
      u && (n === 0 ? o.push({
        type: 0,
        value: u
      }) : n === 1 || n === 2 || n === 3 ? (o.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), o.push({
        type: 1,
        value: u,
        regexp: c,
        repeatable: l === "*" || l === "+",
        optional: l === "*" || l === "?"
      })) : t("Invalid state to consume buffer"), u = "");
    }
    function h() {
      u += l;
    }
    for (; a < e.length; ) {
      if (l = e[a++], l === "\\" && n !== 2) {
        r = n, n = 4;
        continue;
      }
      switch (n) {
        case 0:
          l === "/" ? (u && f(), i()) : l === ":" ? (f(), n = 1) : h();
          break;
        case 4:
          h(), n = r;
          break;
        case 1:
          l === "(" ? n = 2 : Uv.test(l) ? h() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
          break;
        case 2:
          l === ")" ? c[c.length - 1] == "\\" ? c = c.slice(0, -1) + l : n = 3 : c += l;
          break;
        case 3:
          f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, c = "";
          break;
        default:
          t("Unknown state");
          break;
      }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), s;
  }
  function Wv(e, t, n) {
    const r = jv(Vv(e.path), n), s = ce(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
  }
  function qv(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = ql({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function s(f) {
      return r.get(f);
    }
    function o(f, h, d) {
      const p = !d, y = Vl(f);
      y.aliasOf = d && d.record;
      const S = ql(t, f), k = [
        y
      ];
      if ("alias" in f) {
        const v = typeof f.alias == "string" ? [
          f.alias
        ] : f.alias;
        for (const w of v) k.push(Vl(ce({}, y, {
          components: d ? d.record.components : y.components,
          path: w,
          aliasOf: d ? d.record : y
        })));
      }
      let _, m;
      for (const v of k) {
        const { path: w } = v;
        if (h && w[0] !== "/") {
          const A = h.record.path, M = A[A.length - 1] === "/" ? "" : "/";
          v.path = h.record.path + (w && M + w);
        }
        if (_ = Wv(v, h, S), d ? d.alias.push(_) : (m = m || _, m !== _ && m.alias.push(_), p && f.name && !Wl(_) && i(f.name)), _d(_) && l(_), y.children) {
          const A = y.children;
          for (let M = 0; M < A.length; M++) o(A[M], _, d && d.children[M]);
        }
        d = d || _;
      }
      return m ? () => {
        i(m);
      } : Pr;
    }
    function i(f) {
      if (yd(f)) {
        const h = r.get(f);
        h && (r.delete(f), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
      } else {
        const h = n.indexOf(f);
        h > -1 && (n.splice(h, 1), f.record.name && r.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i));
      }
    }
    function a() {
      return n;
    }
    function l(f) {
      const h = zv(f, n);
      n.splice(h, 0, f), f.record.name && !Wl(f) && r.set(f.record.name, f);
    }
    function u(f, h) {
      let d, p = {}, y, S;
      if ("name" in f && f.name) {
        if (d = r.get(f.name), !d) throw rr(1, {
          location: f
        });
        S = d.record.name, p = ce(Ul(h.params, d.keys.filter((m) => !m.optional).concat(d.parent ? d.parent.keys.filter((m) => m.optional) : []).map((m) => m.name)), f.params && Ul(f.params, d.keys.map((m) => m.name))), y = d.stringify(p);
      } else if (f.path != null) y = f.path, d = n.find((m) => m.re.test(y)), d && (p = d.parse(y), S = d.record.name);
      else {
        if (d = h.name ? r.get(h.name) : n.find((m) => m.re.test(h.path)), !d) throw rr(1, {
          location: f,
          currentLocation: h
        });
        S = d.record.name, p = ce({}, h.params, f.params), y = d.stringify(p);
      }
      const k = [];
      let _ = d;
      for (; _; ) k.unshift(_.record), _ = _.parent;
      return {
        name: S,
        path: y,
        params: p,
        matched: k,
        meta: Gv(k)
      };
    }
    e.forEach((f) => o(f));
    function c() {
      n.length = 0, r.clear();
    }
    return {
      addRoute: o,
      resolve: u,
      removeRoute: i,
      clearRoutes: c,
      getRoutes: a,
      getRecordMatcher: s
    };
  }
  function Ul(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function Vl(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: Kv(e),
      children: e.children || [],
      instances: {},
      leaveGuards: /* @__PURE__ */ new Set(),
      updateGuards: /* @__PURE__ */ new Set(),
      enterCallbacks: {},
      components: "components" in e ? e.components || null : e.component && {
        default: e.component
      }
    };
    return Object.defineProperty(t, "mods", {
      value: {}
    }), t;
  }
  function Kv(e) {
    const t = {}, n = e.props || false;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function Wl(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function Gv(e) {
    return e.reduce((t, n) => ce(t, n.meta), {});
  }
  function ql(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function zv(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const o = n + r >> 1;
      bd(e, t[o]) < 0 ? r = o : n = o + 1;
    }
    const s = Jv(e);
    return s && (r = t.lastIndexOf(s, r - 1)), r;
  }
  function Jv(e) {
    let t = e;
    for (; t = t.parent; ) if (_d(t) && bd(e, t) === 0) return t;
  }
  function _d({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function Yv(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let s = 0; s < r.length; ++s) {
      const o = r[s].replace(fd, " "), i = o.indexOf("="), a = Hr(i < 0 ? o : o.slice(0, i)), l = i < 0 ? null : Hr(o.slice(i + 1));
      if (a in t) {
        let u = t[a];
        _t(u) || (u = t[a] = [
          u
        ]), u.push(l);
      } else t[a] = l;
    }
    return t;
  }
  function Kl(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = gv(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (_t(r) ? r.map((o) => o && Oi(o)) : [
        r && Oi(r)
      ]).forEach((o) => {
        o !== void 0 && (t += (t.length ? "&" : "") + n, o != null && (t += "=" + o));
      });
    }
    return t;
  }
  function Qv(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = _t(r) ? r.map((s) => s == null ? null : "" + s) : r == null ? r : "" + r);
    }
    return t;
  }
  const Xv = Symbol(""), Gl = Symbol(""), Qr = Symbol(""), ha = Symbol(""), Mi = Symbol("");
  function gr() {
    let e = [];
    function t(r) {
      return e.push(r), () => {
        const s = e.indexOf(r);
        s > -1 && e.splice(s, 1);
      };
    }
    function n() {
      e = [];
    }
    return {
      add: t,
      list: () => e.slice(),
      reset: n
    };
  }
  function sn(e, t, n, r, s, o = (i) => i()) {
    const i = r && (r.enterCallbacks[s] = r.enterCallbacks[s] || []);
    return () => new Promise((a, l) => {
      const u = (h) => {
        h === false ? l(rr(4, {
          from: n,
          to: t
        })) : h instanceof Error ? l(h) : Nv(h) ? l(rr(2, {
          from: t,
          to: h
        })) : (i && r.enterCallbacks[s] === i && typeof h == "function" && i.push(h), a());
      }, c = o(() => e.call(r && r.instances[s], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((h) => l(h));
    });
  }
  function Uo(e, t, n, r, s = (o) => o()) {
    const o = [];
    for (const i of e) for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a])) if (cd(l)) {
        const c = (l.__vccOpts || l)[t];
        c && o.push(sn(c, n, r, i, a, s));
      } else {
        let u = l();
        o.push(() => u.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
          const f = ov(c) ? c.default : c;
          i.mods[a] = c, i.components[a] = f;
          const d = (f.__vccOpts || f)[t];
          return d && sn(d, n, r, i, a, s)();
        }));
      }
    }
    return o;
  }
  function zl(e) {
    const t = Te(Qr), n = Te(ha), r = Y(() => {
      const l = ie(e.to);
      return t.resolve(l);
    }), s = Y(() => {
      const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const h = f.findIndex(nr.bind(null, c));
      if (h > -1) return h;
      const d = Jl(l[u - 2]);
      return u > 1 && Jl(c) === d && f[f.length - 1].path !== d ? f.findIndex(nr.bind(null, l[u - 2])) : h;
    }), o = Y(() => s.value > -1 && rb(n.params, r.value.params)), i = Y(() => s.value > -1 && s.value === n.matched.length - 1 && md(n.params, r.value.params));
    function a(l = {}) {
      if (nb(l)) {
        const u = t[ie(e.replace) ? "replace" : "push"](ie(e.to)).catch(Pr);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: Y(() => r.value.href),
      isActive: o,
      isExactActive: i,
      navigate: a
    };
  }
  function Zv(e) {
    return e.length === 1 ? e[0] : e;
  }
  const eb = he({
    name: "RouterLink",
    compatConfig: {
      MODE: 3
    },
    props: {
      to: {
        type: [
          String,
          Object
        ],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      },
      viewTransition: Boolean
    },
    useLink: zl,
    setup(e, { slots: t }) {
      const n = It(zl(e)), { options: r } = Te(Qr), s = Y(() => ({
        [Yl(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [Yl(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const o = t.default && Zv(t.default(n));
        return e.custom ? o : pe("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: s.value
        }, o);
      };
    }
  }), tb = eb;
  function nb(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function rb(e, t) {
    for (const n in t) {
      const r = t[n], s = e[n];
      if (typeof r == "string") {
        if (r !== s) return false;
      } else if (!_t(s) || s.length !== r.length || r.some((o, i) => o !== s[i])) return false;
    }
    return true;
  }
  function Jl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const Yl = (e, t, n) => e ?? t ?? n, sb = he({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    compatConfig: {
      MODE: 3
    },
    setup(e, { attrs: t, slots: n }) {
      const r = Te(Mi), s = Y(() => e.route || r.value), o = Te(Gl, 0), i = Y(() => {
        let u = ie(o);
        const { matched: c } = s.value;
        let f;
        for (; (f = c[u]) && !f.components; ) u++;
        return u;
      }), a = Y(() => s.value.matched[i.value]);
      dn(Gl, Y(() => i.value + 1)), dn(Xv, a), dn(Mi, s);
      const l = Re();
      return Qe(() => [
        l.value,
        a.value,
        e.name
      ], ([u, c, f], [h, d, p]) => {
        c && (c.instances[f] = u, d && d !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards), c.updateGuards.size || (c.updateGuards = d.updateGuards))), u && c && (!d || !nr(c, d) || !h) && (c.enterCallbacks[f] || []).forEach((y) => y(u));
      }, {
        flush: "post"
      }), () => {
        const u = s.value, c = e.name, f = a.value, h = f && f.components[c];
        if (!h) return Ql(n.default, {
          Component: h,
          route: u
        });
        const d = f.props[c], p = d ? d === true ? u.params : typeof d == "function" ? d(u) : d : null, S = pe(h, ce({}, p, t, {
          onVnodeUnmounted: (k) => {
            k.component.isUnmounted && (f.instances[c] = null);
          },
          ref: l
        }));
        return Ql(n.default, {
          Component: S,
          route: u
        }) || S;
      };
    }
  });
  function Ql(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const wd = sb;
  function ob(e) {
    const t = qv(e.routes, e), n = e.parseQuery || Yv, r = e.stringifyQuery || Kl, s = e.history, o = gr(), i = gr(), a = gr(), l = ut(lt);
    let u = lt;
    Hn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ho.bind(null, (x) => "" + x), f = Ho.bind(null, vv), h = Ho.bind(null, Hr);
    function d(x, W) {
      let U, z;
      return yd(x) ? (U = t.getRecordMatcher(x), z = W) : z = x, t.addRoute(z, U);
    }
    function p(x) {
      const W = t.getRecordMatcher(x);
      W && t.removeRoute(W);
    }
    function y() {
      return t.getRoutes().map((x) => x.record);
    }
    function S(x) {
      return !!t.getRecordMatcher(x);
    }
    function k(x, W) {
      if (W = ce({}, W || l.value), typeof x == "string") {
        const b = Fo(n, x, W.path), T = t.resolve({
          path: b.path
        }, W), L = s.createHref(b.fullPath);
        return ce(b, T, {
          params: h(T.params),
          hash: Hr(b.hash),
          redirectedFrom: void 0,
          href: L
        });
      }
      let U;
      if (x.path != null) U = ce({}, x, {
        path: Fo(n, x.path, W.path).path
      });
      else {
        const b = ce({}, x.params);
        for (const T in b) b[T] == null && delete b[T];
        U = ce({}, x, {
          params: f(b)
        }), W.params = f(W.params);
      }
      const z = t.resolve(U, W), le = x.hash || "";
      z.params = c(h(z.params));
      const Ee = wv(r, ce({}, x, {
        hash: mv(le),
        path: z.path
      })), g = s.createHref(Ee);
      return ce({
        fullPath: Ee,
        hash: le,
        query: r === Kl ? Qv(x.query) : x.query || {}
      }, z, {
        redirectedFrom: void 0,
        href: g
      });
    }
    function _(x) {
      return typeof x == "string" ? Fo(n, x, l.value.path) : ce({}, x);
    }
    function m(x, W) {
      if (u !== x) return rr(8, {
        from: W,
        to: x
      });
    }
    function v(x) {
      return M(x);
    }
    function w(x) {
      return v(ce(_(x), {
        replace: true
      }));
    }
    function A(x) {
      const W = x.matched[x.matched.length - 1];
      if (W && W.redirect) {
        const { redirect: U } = W;
        let z = typeof U == "function" ? U(x) : U;
        return typeof z == "string" && (z = z.includes("?") || z.includes("#") ? z = _(z) : {
          path: z
        }, z.params = {}), ce({
          query: x.query,
          hash: x.hash,
          params: z.path != null ? {} : x.params
        }, z);
      }
    }
    function M(x, W) {
      const U = u = k(x), z = l.value, le = x.state, Ee = x.force, g = x.replace === true, b = A(U);
      if (b) return M(ce(_(b), {
        state: typeof b == "object" ? ce({}, le, b.state) : le,
        force: Ee,
        replace: g
      }), W || U);
      const T = U;
      T.redirectedFrom = W;
      let L;
      return !Ee && Sv(r, z, U) && (L = rr(16, {
        to: T,
        from: z
      }), wt(z, z, true, false)), (L ? Promise.resolve(L) : O(T, z)).catch((P) => Tt(P) ? Tt(P, 2) ? P : Jt(P) : G(P, T, z)).then((P) => {
        if (P) {
          if (Tt(P, 2)) return M(ce({
            replace: g
          }, _(P.to), {
            state: typeof P.to == "object" ? ce({}, le, P.to.state) : le,
            force: Ee
          }), W || T);
        } else P = R(T, z, true, g, le);
        return E(T, z, P), P;
      });
    }
    function N(x, W) {
      const U = m(x, W);
      return U ? Promise.reject(U) : Promise.resolve();
    }
    function C(x) {
      const W = In.values().next().value;
      return W && typeof W.runWithContext == "function" ? W.runWithContext(x) : x();
    }
    function O(x, W) {
      let U;
      const [z, le, Ee] = ib(x, W);
      U = Uo(z.reverse(), "beforeRouteLeave", x, W);
      for (const b of z) b.leaveGuards.forEach((T) => {
        U.push(sn(T, x, W));
      });
      const g = N.bind(null, x, W);
      return U.push(g), it(U).then(() => {
        U = [];
        for (const b of o.list()) U.push(sn(b, x, W));
        return U.push(g), it(U);
      }).then(() => {
        U = Uo(le, "beforeRouteUpdate", x, W);
        for (const b of le) b.updateGuards.forEach((T) => {
          U.push(sn(T, x, W));
        });
        return U.push(g), it(U);
      }).then(() => {
        U = [];
        for (const b of Ee) if (b.beforeEnter) if (_t(b.beforeEnter)) for (const T of b.beforeEnter) U.push(sn(T, x, W));
        else U.push(sn(b.beforeEnter, x, W));
        return U.push(g), it(U);
      }).then(() => (x.matched.forEach((b) => b.enterCallbacks = {}), U = Uo(Ee, "beforeRouteEnter", x, W, C), U.push(g), it(U))).then(() => {
        U = [];
        for (const b of i.list()) U.push(sn(b, x, W));
        return U.push(g), it(U);
      }).catch((b) => Tt(b, 8) ? b : Promise.reject(b));
    }
    function E(x, W, U) {
      a.list().forEach((z) => C(() => z(x, W, U)));
    }
    function R(x, W, U, z, le) {
      const Ee = m(x, W);
      if (Ee) return Ee;
      const g = W === lt, b = Hn ? history.state : {};
      U && (z || g ? s.replace(x.fullPath, ce({
        scroll: g && b && b.scroll
      }, le)) : s.push(x.fullPath, le)), l.value = x, wt(x, W, U, g), Jt();
    }
    let B;
    function X() {
      B || (B = s.listen((x, W, U) => {
        if (!ns.listening) return;
        const z = k(x), le = A(z);
        if (le) {
          M(ce(le, {
            replace: true,
            force: true
          }), z).catch(Pr);
          return;
        }
        u = z;
        const Ee = l.value;
        Hn && xv(Bl(Ee.fullPath, U.delta), yo()), O(z, Ee).catch((g) => Tt(g, 12) ? g : Tt(g, 2) ? (M(ce(_(g.to), {
          force: true
        }), z).then((b) => {
          Tt(b, 20) && !U.delta && U.type === Fr.pop && s.go(-1, false);
        }).catch(Pr), Promise.reject()) : (U.delta && s.go(-U.delta, false), G(g, z, Ee))).then((g) => {
          g = g || R(z, Ee, false), g && (U.delta && !Tt(g, 8) ? s.go(-U.delta, false) : U.type === Fr.pop && Tt(g, 20) && s.go(-1, false)), E(z, Ee, g);
        }).catch(Pr);
      }));
    }
    let Z = gr(), H = gr(), K;
    function G(x, W, U) {
      Jt(x);
      const z = H.list();
      return z.length ? z.forEach((le) => le(x, W, U)) : console.error(x), Promise.reject(x);
    }
    function Pe() {
      return K && l.value !== lt ? Promise.resolve() : new Promise((x, W) => {
        Z.add([
          x,
          W
        ]);
      });
    }
    function Jt(x) {
      return K || (K = !x, X(), Z.list().forEach(([W, U]) => x ? U(x) : W()), Z.reset()), x;
    }
    function wt(x, W, U, z) {
      const { scrollBehavior: le } = e;
      if (!Hn || !le) return Promise.resolve();
      const Ee = !U && Ov(Bl(x.fullPath, 0)) || (z || !U) && history.state && history.state.scroll || null;
      return Mt().then(() => le(x, W, Ee)).then((g) => g && Av(g)).catch((g) => G(g, x, W));
    }
    const ze = (x) => s.go(x);
    let Mn;
    const In = /* @__PURE__ */ new Set(), ns = {
      currentRoute: l,
      listening: true,
      addRoute: d,
      removeRoute: p,
      clearRoutes: t.clearRoutes,
      hasRoute: S,
      getRoutes: y,
      resolve: k,
      options: e,
      push: v,
      replace: w,
      go: ze,
      back: () => ze(-1),
      forward: () => ze(1),
      beforeEach: o.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: H.add,
      isReady: Pe,
      install(x) {
        const W = this;
        x.component("RouterLink", tb), x.component("RouterView", wd), x.config.globalProperties.$router = W, Object.defineProperty(x.config.globalProperties, "$route", {
          enumerable: true,
          get: () => ie(l)
        }), Hn && !Mn && l.value === lt && (Mn = true, v(s.location).catch((le) => {
        }));
        const U = {};
        for (const le in lt) Object.defineProperty(U, le, {
          get: () => l.value[le],
          enumerable: true
        });
        x.provide(Qr, W), x.provide(ha, Ft(U)), x.provide(Mi, l);
        const z = x.unmount;
        In.add(x), x.unmount = function() {
          In.delete(x), In.size < 1 && (u = lt, B && B(), B = null, l.value = lt, Mn = false, K = false), z();
        };
      }
    };
    function it(x) {
      return x.reduce((W, U) => W.then(() => C(U)), Promise.resolve());
    }
    return ns;
  }
  function ib(e, t) {
    const n = [], r = [], s = [], o = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < o; i++) {
      const a = t.matched[i];
      a && (e.matched.find((u) => nr(u, a)) ? r.push(a) : n.push(a));
      const l = e.matched[i];
      l && (t.matched.find((u) => nr(u, l)) || s.push(l));
    }
    return [
      n,
      r,
      s
    ];
  }
  HS = function() {
    return Te(Qr);
  };
  ab = function(e) {
    return Te(ha);
  };
  const Sd = (e, t) => ({
    default: () => {
      var _a2;
      return e ? pe(Qp, e === true ? {} : e, t) : (_a2 = t.default) == null ? void 0 : _a2.call(t);
    }
  }), lb = /(:\w+)\([^)]+\)/g, cb = /(:\w+)[?+*]/g, ub = /:\w+/g;
  function Xl(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(lb, "$1").replace(cb, "$1").replace(ub, (n) => {
      var _a2;
      return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
    });
    return typeof t == "function" ? t(e) : t;
  }
  function kd(e, t) {
    return e === t || t === lt ? false : Xl(e) !== Xl(t) ? true : !e.matched.every((r, s) => {
      var _a2, _b2;
      return r.components && r.components.default === ((_b2 = (_a2 = t.matched[s]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default);
    });
  }
  function fb(e, t = false) {
    if (e) {
      if (e.nodeName === "#comment" && e.nodeValue === "[") return Ed(e, [], t);
      if (t) {
        const n = e.cloneNode(true);
        return n.querySelectorAll("[data-island-slot]").forEach((r) => {
          r.innerHTML = "";
        }), [
          n.outerHTML
        ];
      }
      return [
        e.outerHTML
      ];
    }
  }
  function Ed(e, t = [], n = false) {
    var _a2;
    if (e && e.nodeName) {
      if (hb(e)) return t;
      if (!db(e)) {
        const r = e.cloneNode(true);
        n && ((_a2 = r.querySelectorAll) == null ? void 0 : _a2.call(r, "[data-island-slot]").forEach((s) => {
          s.innerHTML = "";
        })), t.push(r.outerHTML);
      }
      Ed(e.nextSibling, t, n);
    }
    return t;
  }
  function Vo(e, t) {
    const n = e ? fb(e) : [
      t
    ];
    return n ? Bp(n.join(""), n.length) : pe("div");
  }
  function db(e) {
    return e.nodeName === "#comment" && e.nodeValue === "[";
  }
  function hb(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]";
  }
  let Td, ps, Wo;
  Td = Symbol.for("nuxt:client-only");
  ps = "<div></div>";
  FS = he({
    name: "ClientOnly",
    inheritAttrs: false,
    props: [
      "fallback",
      "placeholder",
      "placeholderTag",
      "fallbackTag"
    ],
    setup(e, { slots: t, attrs: n }) {
      const r = Re(false);
      vt(() => {
        r.value = true;
      });
      const s = Xe();
      return s && (s._nuxtClientOnly = true), dn(Td, true), (o) => {
        var _a2;
        if (r.value) return (_a2 = t.default) == null ? void 0 : _a2.call(t);
        const i = t.fallback || t.placeholder;
        if (i) return i();
        const a = o.fallback || o.placeholder || "", l = o.fallbackTag || o.placeholderTag || "span";
        return de(l, n, a);
      };
    }
  });
  Wo = /* @__PURE__ */ new WeakMap();
  US = function(e) {
    if (Wo.has(e)) return Wo.get(e);
    const t = {
      ...e
    };
    return t.render ? t.render = (n, r, s, o, i, a) => {
      var _a2;
      if (o.mounted$ ?? n.mounted$) {
        const l = (_a2 = e.render) == null ? void 0 : _a2.bind(n)(n, r, s, o, i, a);
        return l.children === null || typeof l.children == "string" ? bt(l) : pe(l);
      }
      return Vo(n._.vnode.el, ps);
    } : t.template && (t.template = `
      <template v-if="mounted$">${e.template}</template>
      <template v-else>${ps}</template>
    `), t.setup = (n, r) => {
      var _a2;
      const s = ye(), o = Re(s.isHydrating === false), i = Xe();
      if (s.isHydrating) {
        const l = {
          ...i.attrs
        }, u = pb(i);
        for (const c in l) delete i.attrs[c];
        vt(() => {
          Object.assign(i.attrs, l), i.vnode.dirs = u;
        });
      }
      vt(() => {
        o.value = true;
      });
      const a = ((_a2 = e.setup) == null ? void 0 : _a2.call(e, n, r)) || {};
      return zs(a) ? Promise.resolve(a).then((l) => typeof l != "function" ? (l || (l = {}), l.mounted$ = o, l) : (...u) => {
        if (o.value || !s.isHydrating) {
          const c = l(...u);
          return c.children === null || typeof c.children == "string" ? bt(c) : pe(c);
        }
        return Vo(i == null ? void 0 : i.vnode.el, ps);
      }) : typeof a == "function" ? (...l) => o.value ? pe(a(...l), r.attrs) : Vo(i == null ? void 0 : i.vnode.el, ps) : Object.assign(a, {
        mounted$: o
      });
    }, Wo.set(e, t), t;
  };
  function pb(e) {
    if (!e || !e.vnode.dirs) return null;
    const t = e.vnode.dirs;
    return e.vnode.dirs = null, t;
  }
  let Ii, mb, gb;
  Ii = globalThis.requestIdleCallback || ((e) => {
    const t = Date.now(), n = {
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout(() => {
      e(n);
    }, 1);
  });
  mb = globalThis.cancelIdleCallback || ((e) => {
    clearTimeout(e);
  });
  lr = (e) => {
    const t = ye();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
      Ii(() => e());
    }) : Ii(() => e());
  };
  gb = (e) => e === "defer" || e === false;
  VS = function(...e) {
    var _a2;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && typeof e[0] != "object" && !(typeof e[0] == "function" && typeof e[1] == "function") && e.unshift(t);
    let [n, r, s = {}] = e;
    const o = Y(() => rt(n));
    if (typeof o.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = ye();
    s.server ?? (s.server = true), s.default ?? (s.default = vb), s.getCachedData ?? (s.getCachedData = Cd), s.lazy ?? (s.lazy = false), s.immediate ?? (s.immediate = true), s.deep ?? (s.deep = Ut.deep), s.dedupe ?? (s.dedupe = "cancel"), s._functionName, i._asyncData[o.value];
    const a = s.getCachedData(o.value, i, {
      cause: "initial"
    });
    ((_a2 = i._asyncData[o.value]) == null ? void 0 : _a2._init) || (i._asyncData[o.value] = Zl(i, o.value, r, s, a));
    const l = i._asyncData[o.value];
    l._deps++;
    const u = () => i._asyncData[o.value].execute({
      cause: "initial",
      dedupe: s.dedupe
    }), c = s.server !== false && i.payload.serverRendered;
    {
      let d = function(_) {
        const m = i._asyncData[_];
        (m == null ? void 0 : m._deps) && (m._deps--, m._deps === 0 && (m == null ? void 0 : m._off()));
      };
      const p = Xe();
      if (p && c && s.immediate && !p.sp && (p.sp = []), p && !p._nuxtOnBeforeMountCbs) {
        p._nuxtOnBeforeMountCbs = [];
        const _ = p._nuxtOnBeforeMountCbs;
        wu(() => {
          _.forEach((m) => {
            m();
          }), _.splice(0, _.length);
        }), io(() => _.splice(0, _.length));
      }
      const y = p && (p._nuxtClientOnly || Te(Td, false));
      c && i.isHydrating && (l.error.value || a != null) ? l.status.value = l.error.value ? "error" : "success" : p && !y && (i.payload.serverRendered && i.isHydrating || s.lazy) && s.immediate ? p._nuxtOnBeforeMountCbs.push(u) : s.immediate && u();
      const S = Kt();
      if (s.watch) {
        const _ = Qe(s.watch, () => {
          l._execute({
            cause: "watch",
            dedupe: s.dedupe
          });
        }, {
          flush: "post"
        });
        S && pn(() => _());
      }
      const k = Qe(o, (_, m) => {
        var _a3, _b2;
        const v = ((_a3 = i._asyncData[m]) == null ? void 0 : _a3.data.value) !== Ut.value;
        m && d(m), ((_b2 = i._asyncData[_]) == null ? void 0 : _b2._init) || (i._asyncData[_] = Zl(i, _, r, s, s.getCachedData(_, i, {
          cause: "initial"
        }))), i._asyncData[_]._deps++, (s.immediate || v) && i._asyncData[_].execute({
          cause: "initial",
          dedupe: s.dedupe
        });
      }, {
        flush: "sync"
      });
      S && pn(() => {
        k(), d(o.value);
      });
    }
    const f = {
      data: ms(() => {
        var _a3;
        return (_a3 = i._asyncData[o.value]) == null ? void 0 : _a3.data;
      }),
      pending: ms(() => {
        var _a3;
        return (_a3 = i._asyncData[o.value]) == null ? void 0 : _a3.pending;
      }),
      status: ms(() => {
        var _a3;
        return (_a3 = i._asyncData[o.value]) == null ? void 0 : _a3.status;
      }),
      error: ms(() => {
        var _a3;
        return (_a3 = i._asyncData[o.value]) == null ? void 0 : _a3.error;
      }),
      refresh: (...d) => i._asyncData[o.value].execute(...d),
      execute: (...d) => i._asyncData[o.value].execute(...d),
      clear: () => Rd(i, o.value)
    }, h = Promise.resolve(i._asyncDataPromises[o.value]).then(() => f);
    return Object.assign(h, f), h;
  };
  function ms(e) {
    return Y({
      get() {
        var _a2;
        return (_a2 = e()) == null ? void 0 : _a2.value;
      },
      set(t) {
        const n = e();
        n && (n.value = t);
      }
    });
  }
  async function $i(e) {
    await new Promise((n) => lr(n)), await ye().hooks.callHookParallel("app:data:refresh", void 0);
  }
  function Rd(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = Ut.errorValue), e._asyncData[t] && (e._asyncData[t].data.value = ie(e._asyncData[t]._default()), e._asyncData[t].error.value = Ut.errorValue, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = true), e._asyncDataPromises[t] = void 0);
  }
  function yb(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function Zl(e, t, n, r, s) {
    var _a2;
    (_a2 = e.payload._errors)[t] ?? (_a2[t] = Ut.errorValue);
    const o = r.getCachedData !== Cd, i = n, a = r.deep ? Re : ut, l = s != null, u = e.hook("app:data:refresh", async (f) => {
      (!f || f.includes(t)) && await c.execute({
        cause: "refresh:hook"
      });
    }), c = {
      data: a(l ? s : r.default()),
      pending: Y(() => c.status.value === "pending"),
      error: so(e.payload._errors, t),
      status: ut("idle"),
      execute: (f = {}) => {
        if (e._asyncDataPromises[t]) {
          if (gb(f.dedupe ?? r.dedupe)) return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = true;
        }
        {
          const d = f.cause === "initial" ? s : r.getCachedData(t, e, {
            cause: f.cause ?? "refresh:manual"
          });
          if (d != null) return e.payload.data[t] = c.data.value = d, c.error.value = Ut.errorValue, c.status.value = "success", Promise.resolve(d);
        }
        c.status.value = "pending";
        const h = new Promise((d, p) => {
          try {
            d(i(e));
          } catch (y) {
            p(y);
          }
        }).then(async (d) => {
          if (h.cancelled) return e._asyncDataPromises[t];
          let p = d;
          r.transform && (p = await r.transform(d)), r.pick && (p = yb(p, r.pick)), e.payload.data[t] = p, c.data.value = p, c.error.value = Ut.errorValue, c.status.value = "success";
        }).catch((d) => {
          if (h.cancelled) return e._asyncDataPromises[t];
          c.error.value = hn(d), c.data.value = ie(r.default()), c.status.value = "error";
        }).finally(() => {
          h.cancelled || delete e._asyncDataPromises[t];
        });
        return e._asyncDataPromises[t] = h, e._asyncDataPromises[t];
      },
      _execute: ey((...f) => c.execute(...f), 0, {
        leading: true
      }),
      _default: r.default,
      _deps: 0,
      _init: true,
      _hash: void 0,
      _off: () => {
        u(), c._init = false, o || (Rd(e, t), c.execute = () => Promise.resolve(), c.data.value = Ut.value);
      }
    };
    return c;
  }
  const vb = () => Ut.value, Cd = (e, t, n) => {
    if (t.isHydrating) return t.payload.data[e];
    if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook") return t.static.data[e];
  }, bb = "$s";
  _b = function(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const s = bb + n, o = ye(), i = so(o.payload.state, s);
    if (i.value === void 0 && r) {
      const a = r();
      if (we(a)) return o.payload.state[s] = a, a;
      i.value = a;
    }
    return i;
  };
  function wb(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {}, r = t || {}, s = r.decode || Sb;
    let o = 0;
    for (; o < e.length; ) {
      const i = e.indexOf("=", o);
      if (i === -1) break;
      let a = e.indexOf(";", o);
      if (a === -1) a = e.length;
      else if (a < i) {
        o = e.lastIndexOf(";", i - 1) + 1;
        continue;
      }
      const l = e.slice(o, i).trim();
      if ((r == null ? void 0 : r.filter) && !(r == null ? void 0 : r.filter(l))) {
        o = a + 1;
        continue;
      }
      if (n[l] === void 0) {
        let u = e.slice(i + 1, a).trim();
        u.codePointAt(0) === 34 && (u = u.slice(1, -1)), n[l] = kb(u, s);
      }
      o = a + 1;
    }
    return n;
  }
  function Sb(e) {
    return e.includes("%") ? decodeURIComponent(e) : e;
  }
  function kb(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  const gs = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function ec(e, t, n) {
    const r = n || {}, s = r.encode || encodeURIComponent;
    if (typeof s != "function") throw new TypeError("option encode is invalid");
    if (!gs.test(e)) throw new TypeError("argument name is invalid");
    const o = s(t);
    if (o && !gs.test(o)) throw new TypeError("argument val is invalid");
    let i = e + "=" + o;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
      const a = r.maxAge - 0;
      if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
      i += "; Max-Age=" + Math.floor(a);
    }
    if (r.domain) {
      if (!gs.test(r.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!gs.test(r.path)) throw new TypeError("option path is invalid");
      i += "; Path=" + r.path;
    }
    if (r.expires) {
      if (!Eb(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
      i += "; Expires=" + r.expires.toUTCString();
    }
    if (r.httpOnly && (i += "; HttpOnly"), r.secure && (i += "; Secure"), r.priority) switch (typeof r.priority == "string" ? r.priority.toLowerCase() : r.priority) {
      case "low": {
        i += "; Priority=Low";
        break;
      }
      case "medium": {
        i += "; Priority=Medium";
        break;
      }
      case "high": {
        i += "; Priority=High";
        break;
      }
      default:
        throw new TypeError("option priority is invalid");
    }
    if (r.sameSite) switch (typeof r.sameSite == "string" ? r.sameSite.toLowerCase() : r.sameSite) {
      case true: {
        i += "; SameSite=Strict";
        break;
      }
      case "lax": {
        i += "; SameSite=Lax";
        break;
      }
      case "strict": {
        i += "; SameSite=Strict";
        break;
      }
      case "none": {
        i += "; SameSite=None";
        break;
      }
      default:
        throw new TypeError("option sameSite is invalid");
    }
    return r.partitioned && (i += "; Partitioned"), i;
  }
  function Eb(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
  }
  function dt(e) {
    if (typeof e != "object") return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
      if (e.constructor !== Object && typeof e.constructor == "function") {
        n = new e.constructor();
        for (t in e) e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = dt(e[t]));
      } else {
        n = {};
        for (t in e) t === "__proto__" ? Object.defineProperty(n, t, {
          value: dt(e[t]),
          configurable: true,
          enumerable: true,
          writable: true
        }) : n[t] = dt(e[t]);
      }
      return n;
    }
    if (r === "[object Array]") {
      for (t = e.length, n = Array(t); t--; ) n[t] = dt(e[t]);
      return n;
    }
    return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(s) {
      n.add(dt(s));
    }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(s, o) {
      n.set(dt(o), dt(s));
    }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(dt(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
  }
  const Tb = {
    path: "/",
    watch: true,
    decode: (e) => Dr(decodeURIComponent(e)),
    encode: (e) => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
  }, ys = window.cookieStore;
  function tc(e, t) {
    var _a2;
    const n = {
      ...Tb,
      ...t
    };
    n.filter ?? (n.filter = (u) => u === e);
    const r = nc(n) || {};
    let s;
    n.maxAge !== void 0 ? s = n.maxAge * 1e3 : n.expires && (s = n.expires.getTime() - Date.now());
    const o = s !== void 0 && s <= 0, i = o || r[e] === void 0 || r[e] === null, a = dt(o ? void 0 : r[e] ?? ((_a2 = n.default) == null ? void 0 : _a2.call(n))), l = s && !o ? Pb(a, s, n.watch && n.watch !== "shallow") : Re(a);
    {
      let u = null;
      try {
        !ys && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${e}`));
      } catch {
      }
      const c = (p = false) => {
        !p && (n.readonly || sv(l.value, r[e])) || (Cb(e, l.value, n), r[e] = dt(l.value), u == null ? void 0 : u.postMessage({
          value: n.encode(l.value)
        }));
      }, f = (p) => {
        var _a3;
        const y = p.refresh ? (_a3 = nc(n)) == null ? void 0 : _a3[e] : n.decode(p.value);
        h = true, l.value = y, r[e] = dt(y), Mt(() => {
          h = false;
        });
      };
      let h = false;
      const d = !!Kt();
      if (d && pn(() => {
        h = true, c(), u == null ? void 0 : u.close();
      }), ys) {
        const p = (y) => {
          const S = y.changed.find((_) => _.name === e), k = y.deleted.find((_) => _.name === e);
          S && f({
            value: S.value
          }), k && f({
            value: null
          });
        };
        ys.addEventListener("change", p), d && pn(() => ys.removeEventListener("change", p));
      } else u && (u.onmessage = ({ data: p }) => f(p));
      n.watch && Qe(l, () => {
        h || c();
      }, {
        deep: n.watch !== "shallow"
      }), i && c(i);
    }
    return l;
  }
  function nc(e = {}) {
    return wb(document.cookie, e);
  }
  function Rb(e, t, n = {}) {
    return t == null ? ec(e, t, {
      ...n,
      maxAge: -1
    }) : ec(e, t, n);
  }
  function Cb(e, t, n = {}) {
    document.cookie = Rb(e, t, n);
  }
  const rc = 2147483647;
  function Pb(e, t, n) {
    let r, s, o = 0;
    const i = n ? Re(e) : {
      value: e
    };
    return Kt() && pn(() => {
      s == null ? void 0 : s(), clearTimeout(r);
    }), ro((a, l) => {
      n && (s = Qe(i, l));
      function u() {
        o = 0, clearTimeout(r);
        const c = t - o, f = c < rc ? c : rc;
        r = setTimeout(() => {
          if (o += f, o < t) return u();
          i.value = void 0, l();
        }, f);
      }
      return {
        get() {
          return a(), i.value;
        },
        set(c) {
          u(), i.value = c, l();
        }
      };
    });
  }
  function Ab(e) {
    if ((e == null ? void 0 : e.__asyncLoader) && !e.__asyncResolved) return e.__asyncLoader();
  }
  async function Pd(e, t = Ne()) {
    const { path: n, matched: r } = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = /* @__PURE__ */ new Set()), t._routePreloaded.has(n))) return;
    const s = t._preloadPromises || (t._preloadPromises = []);
    if (s.length > 4) return Promise.all(s).then(() => Pd(e, t));
    t._routePreloaded.add(n);
    const o = r.map((i) => {
      var _a2;
      return (_a2 = i.components) == null ? void 0 : _a2.default;
    }).filter((i) => typeof i == "function");
    for (const i of o) {
      const a = Promise.resolve(i()).catch(() => {
      }).finally(() => s.splice(s.indexOf(a)));
      s.push(a);
    }
    await Promise.all(s);
  }
  function xb(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
      n = Dr(sessionStorage.getItem("nuxt:reload") || "{}");
    } catch {
    }
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
      try {
        sessionStorage.setItem("nuxt:reload", JSON.stringify({
          path: t,
          expires: Date.now() + (e.ttl ?? 1e4)
        }));
      } catch {
      }
      if (e.persistState) try {
        sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
          state: ye().payload.state
        }));
      } catch {
      }
      window.location.pathname !== t ? window.location.href = t : window.location.reload();
    }
  }
  const Ob = {
    scrollBehavior(e, t, n) {
      var _a2;
      const r = ye(), s = ((_a2 = Ne().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
      if (e.path === t.path) return t.hash && !e.hash ? {
        left: 0,
        top: 0
      } : e.hash ? {
        el: e.hash,
        top: Ad(e.hash),
        behavior: s
      } : false;
      if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === false) return false;
      let i = n || void 0;
      !i && kd(e, t) && (i = {
        left: 0,
        top: 0
      });
      const a = r._runningTransition ? "page:transition:finish" : "page:loading:end";
      return new Promise((l) => {
        if (t === lt) {
          l(sc(e, "instant", i));
          return;
        }
        r.hooks.hookOnce(a, () => {
          requestAnimationFrame(() => l(sc(e, "instant", i)));
        });
      });
    }
  };
  function Ad(e) {
    try {
      const t = document.querySelector(e);
      if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
    } catch {
    }
    return 0;
  }
  function sc(e, t, n) {
    return n || (e.hash ? {
      el: e.hash,
      top: Ad(e.hash),
      behavior: t
    } : {
      left: 0,
      top: 0,
      behavior: t
    });
  }
  const Lb = {
    scrollBehaviorType: "smooth",
    hashMode: false
  }, Qt = {
    ...Lb,
    ...Ob
  }, Mb = (...e) => e.find((t) => t !== void 0);
  function Ib(e) {
    const t = e.componentName || "NuxtLink";
    function n(o) {
      return typeof o == "string" && o.startsWith("#");
    }
    function r(o, i, a) {
      const l = a ?? e.trailingSlash;
      if (!o || l !== "append" && l !== "remove") return o;
      if (typeof o == "string") return vs(o, l);
      const u = "path" in o && o.path !== void 0 ? o.path : i(o).path;
      return {
        ...o,
        name: void 0,
        path: vs(u, l)
      };
    }
    function s(o) {
      const i = Ne(), a = bn(), l = Y(() => !!o.target && o.target !== "_self"), u = Y(() => {
        const S = o.to || o.href || "";
        return typeof S == "string" && $t(S, {
          acceptRelative: true
        });
      }), c = li("RouterLink"), f = c && typeof c != "string" ? c.useLink : void 0, h = Y(() => {
        if (o.external) return true;
        const S = o.to || o.href || "";
        return typeof S == "object" ? false : S === "" || u.value;
      }), d = Y(() => {
        const S = o.to || o.href || "";
        return h.value ? S : r(S, i.resolve, o.trailingSlash);
      }), p = h.value ? void 0 : f == null ? void 0 : f({
        ...o,
        to: d
      }), y = Y(() => {
        var _a2;
        const S = o.trailingSlash ?? e.trailingSlash;
        if (!d.value || u.value || n(d.value)) return d.value;
        if (h.value) {
          const k = typeof d.value == "object" && "path" in d.value ? Ri(d.value) : d.value, _ = typeof k == "object" ? i.resolve(k).href : k;
          return vs(_, S);
        }
        return typeof d.value == "object" ? ((_a2 = i.resolve(d.value)) == null ? void 0 : _a2.href) ?? null : vs(ho(a.app.baseURL, d.value), S);
      });
      return {
        to: d,
        hasTarget: l,
        isAbsoluteUrl: u,
        isExternal: h,
        href: y,
        isActive: (p == null ? void 0 : p.isActive) ?? Y(() => d.value === i.currentRoute.value.path),
        isExactActive: (p == null ? void 0 : p.isExactActive) ?? Y(() => d.value === i.currentRoute.value.path),
        route: (p == null ? void 0 : p.route) ?? Y(() => i.resolve(d.value)),
        async navigate(S) {
          await Xg(y.value, {
            replace: o.replace,
            external: h.value || l.value
          });
        }
      };
    }
    return he({
      name: t,
      props: {
        to: {
          type: [
            String,
            Object
          ],
          default: void 0,
          required: false
        },
        href: {
          type: [
            String,
            Object
          ],
          default: void 0,
          required: false
        },
        target: {
          type: String,
          default: void 0,
          required: false
        },
        rel: {
          type: String,
          default: void 0,
          required: false
        },
        noRel: {
          type: Boolean,
          default: void 0,
          required: false
        },
        prefetch: {
          type: Boolean,
          default: void 0,
          required: false
        },
        prefetchOn: {
          type: [
            String,
            Object
          ],
          default: void 0,
          required: false
        },
        noPrefetch: {
          type: Boolean,
          default: void 0,
          required: false
        },
        activeClass: {
          type: String,
          default: void 0,
          required: false
        },
        exactActiveClass: {
          type: String,
          default: void 0,
          required: false
        },
        prefetchedClass: {
          type: String,
          default: void 0,
          required: false
        },
        replace: {
          type: Boolean,
          default: void 0,
          required: false
        },
        ariaCurrentValue: {
          type: String,
          default: void 0,
          required: false
        },
        external: {
          type: Boolean,
          default: void 0,
          required: false
        },
        custom: {
          type: Boolean,
          default: void 0,
          required: false
        },
        trailingSlash: {
          type: String,
          default: void 0,
          required: false
        }
      },
      useLink: s,
      setup(o, { slots: i }) {
        const a = Ne(), { to: l, href: u, navigate: c, isExternal: f, hasTarget: h, isAbsoluteUrl: d } = s(o), p = Re(false), y = Re(null), S = (m) => {
          var _a2;
          y.value = o.custom ? (_a2 = m == null ? void 0 : m.$el) == null ? void 0 : _a2.nextElementSibling : m == null ? void 0 : m.$el;
        };
        function k(m) {
          var _a2, _b2;
          return !p.value && (typeof o.prefetchOn == "string" ? o.prefetchOn === m : ((_a2 = o.prefetchOn) == null ? void 0 : _a2[m]) ?? ((_b2 = e.prefetchOn) == null ? void 0 : _b2[m])) && (o.prefetch ?? e.prefetch) !== false && o.noPrefetch !== true && o.target !== "_blank" && !Bb();
        }
        async function _(m = ye()) {
          if (p.value) return;
          p.value = true;
          const v = typeof l.value == "string" ? l.value : f.value ? Ri(l.value) : a.resolve(l.value).fullPath, w = f.value ? new URL(v, window.location.href).href : v;
          await Promise.all([
            m.hooks.callHook("link:prefetch", w).catch(() => {
            }),
            !f.value && !h.value && Pd(l.value, a).catch(() => {
            })
          ]);
        }
        if (k("visibility")) {
          const m = ye();
          let v, w = null;
          vt(() => {
            const A = $b();
            lr(() => {
              v = Ii(() => {
                var _a2;
                ((_a2 = y == null ? void 0 : y.value) == null ? void 0 : _a2.tagName) && (w = A.observe(y.value, async () => {
                  w == null ? void 0 : w(), w = null, await _(m);
                }));
              });
            });
          }), Ln(() => {
            v && mb(v), w == null ? void 0 : w(), w = null;
          });
        }
        return () => {
          var _a2;
          if (!f.value && !h.value && !n(l.value)) {
            const w = {
              ref: S,
              to: l.value,
              activeClass: o.activeClass || e.activeClass,
              exactActiveClass: o.exactActiveClass || e.exactActiveClass,
              replace: o.replace,
              ariaCurrentValue: o.ariaCurrentValue,
              custom: o.custom
            };
            return o.custom || (k("interaction") && (w.onPointerenter = _.bind(null, void 0), w.onFocus = _.bind(null, void 0)), p.value && (w.class = o.prefetchedClass || e.prefetchedClass), w.rel = o.rel || void 0), pe(li("RouterLink"), w, i.default);
          }
          const m = o.target || null, v = Mb(o.noRel ? "" : o.rel, e.externalRelAttribute, d.value || h.value ? "noopener noreferrer" : "") || null;
          return o.custom ? i.default ? i.default({
            href: u.value,
            navigate: c,
            prefetch: _,
            get route() {
              if (!u.value) return;
              const w = new URL(u.value, window.location.href);
              return {
                path: w.pathname,
                fullPath: w.pathname,
                get query() {
                  return fo(w.search);
                },
                hash: w.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: u.value
              };
            },
            rel: v,
            target: m,
            isExternal: f.value || h.value,
            isActive: false,
            isExactActive: false
          }) : null : pe("a", {
            ref: y,
            href: u.value || null,
            rel: v,
            target: m
          }, (_a2 = i.default) == null ? void 0 : _a2.call(i));
        };
      }
    });
  }
  Ni = Ib(Ig);
  function vs(e, t) {
    const n = t === "append" ? wf : tr;
    return $t(e) && !e.startsWith("http") ? e : n(e, true);
  }
  function $b() {
    const e = ye();
    if (e._observer) return e._observer;
    let t = null;
    const n = /* @__PURE__ */ new Map(), r = (o, i) => (t || (t = new IntersectionObserver((a) => {
      for (const l of a) {
        const u = n.get(l.target);
        (l.isIntersecting || l.intersectionRatio > 0) && u && u();
      }
    })), n.set(o, i), t.observe(o), () => {
      n.delete(o), t == null ? void 0 : t.unobserve(o), n.size === 0 && (t == null ? void 0 : t.disconnect(), t = null);
    });
    return e._observer = {
      observe: r
    };
  }
  const Nb = /2g/;
  function Bb() {
    const e = navigator.connection;
    return !!(e && (e.saveData || Nb.test(e.effectiveType)));
  }
  const Db = Lf(() => {
    ua("PiniaColada_TreeMapNode", (e) => e);
  }), xd = [
    [
      "NuxtError",
      (e) => hn(e)
    ],
    [
      "EmptyShallowRef",
      (e) => ut(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Dr(e))
    ],
    [
      "EmptyRef",
      (e) => Re(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Dr(e))
    ],
    [
      "ShallowRef",
      (e) => ut(e)
    ],
    [
      "ShallowReactive",
      (e) => Ft(e)
    ],
    [
      "Ref",
      (e) => Re(e)
    ],
    [
      "Reactive",
      (e) => It(e)
    ]
  ];
  xd.push([
    "Island",
    ({ key: e, params: t, result: n }) => {
      var _a2;
      const r = ye();
      return r.isHydrating || ((_a2 = r.payload.data)[e] || (_a2[e] = $fetch(`/__nuxt_island/${e}.json`, {
        responseType: "json",
        ...t ? {
          params: t
        } : {}
      }).then((s) => (r.payload.data[e] = s, s)))), {
        html: "",
        ...n
      };
    }
  ]);
  const jb = Ie({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, s] of xd) ua(r, s);
      Object.assign(e.payload, ([t, n] = Jn(() => e.runWithContext(Gy)), t = await t, n(), t)), window.__NUXT__ = e.payload;
    }
  });
  async function pa(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
      shouldRender: true,
      tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async (s) => {
      var _a2;
      const o = /* @__PURE__ */ new Map(), i = new Promise((d) => {
        e.resolveTags().then((p) => {
          d(p.map((y) => {
            const S = o.get(y._d) || 0, k = {
              tag: y,
              id: (S ? `${y._d}:${S}` : y._d) || El(y),
              shouldRender: true
            };
            return y._d && zf(y._d) && o.set(y._d, S + 1), k;
          }));
        });
      });
      let a = e._dom;
      if (!a) {
        a = {
          title: n.title,
          elMap: (/* @__PURE__ */ new Map()).set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
        };
        for (const d of [
          "body",
          "head"
        ]) {
          const p = (_a2 = n[d]) == null ? void 0 : _a2.children;
          for (const y of p) {
            const S = y.tagName.toLowerCase();
            if (!Sl.has(S)) continue;
            const k = Jf({
              tag: S,
              props: {}
            }, {
              innerHTML: y.innerHTML,
              ...y.getAttributeNames().reduce((_, m) => (_[m] = y.getAttribute(m), _), {}) || {}
            });
            if (k.key = y.getAttribute("data-hid") || void 0, k._d = xi(k) || El(k), a.elMap.has(k._d)) {
              let _ = 1, m = k._d;
              for (; a.elMap.has(m); ) m = `${k._d}:${_++}`;
              a.elMap.set(m, y);
            } else a.elMap.set(k._d, y);
          }
        }
      }
      a.pendingSideEffects = {
        ...a.sideEffects
      }, a.sideEffects = {};
      function l(d, p, y) {
        const S = `${d}:${p}`;
        a.sideEffects[S] = y, delete a.pendingSideEffects[S];
      }
      function u({ id: d, $el: p, tag: y }) {
        const S = y.tag.endsWith("Attrs");
        a.elMap.set(d, p), S || (y.textContent && y.textContent !== p.textContent && (p.textContent = y.textContent), y.innerHTML && y.innerHTML !== p.innerHTML && (p.innerHTML = y.innerHTML), l(d, "el", () => {
          p == null ? void 0 : p.remove(), a.elMap.delete(d);
        }));
        for (const k in y.props) {
          if (!Object.prototype.hasOwnProperty.call(y.props, k)) continue;
          const _ = y.props[k];
          if (k.startsWith("on") && typeof _ == "function") {
            const v = p == null ? void 0 : p.dataset;
            if (v && v[`${k}fired`]) {
              const w = k.slice(0, -5);
              _.call(p, new Event(w.substring(2)));
            }
            p.getAttribute(`data-${k}`) !== "" && ((y.tag === "bodyAttrs" ? n.defaultView : p).addEventListener(k.substring(2), _.bind(p)), p.setAttribute(`data-${k}`, ""));
            continue;
          }
          const m = `attr:${k}`;
          if (k === "class") {
            if (!_) continue;
            for (const v of _) S && l(d, `${m}:${v}`, () => p.classList.remove(v)), !p.classList.contains(v) && p.classList.add(v);
          } else if (k === "style") {
            if (!_) continue;
            for (const [v, w] of _) l(d, `${m}:${v}`, () => {
              p.style.removeProperty(v);
            }), p.style.setProperty(v, w);
          } else _ !== false && _ !== null && (p.getAttribute(k) !== _ && p.setAttribute(k, _ === true ? "" : String(_)), S && l(d, m, () => p.removeAttribute(k)));
        }
      }
      const c = [], f = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      }, h = await i;
      for (const d of h) {
        const { tag: p, shouldRender: y, id: S } = d;
        if (y) {
          if (p.tag === "title") {
            n.title = p.textContent, l("title", "", () => n.title = a.title);
            continue;
          }
          d.$el = d.$el || a.elMap.get(S), d.$el ? u(d) : Sl.has(p.tag) && c.push(d);
        }
      }
      for (const d of c) {
        const p = d.tag.tagPosition || "head";
        d.$el = n.createElement(d.tag.tag), u(d), f[p] = f[p] || n.createDocumentFragment(), f[p].appendChild(d.$el);
      }
      for (const d of h) await e.hooks.callHook("dom:renderTag", d, n, l);
      f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose);
      for (const d in a.pendingSideEffects) a.pendingSideEffects[d]();
      e._dom = a, await e.hooks.callHook("dom:rendered", {
        renders: h
      }), s();
    }).finally(() => {
      e._domUpdatePromise = void 0, e.dirty = false;
    })), e._domUpdatePromise;
  }
  function Hb(e = {}) {
    var _a2, _b2, _c2;
    const t = ((_a2 = e.domOptions) == null ? void 0 : _a2.render) || pa;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((_c2 = (_b2 = e.document) == null ? void 0 : _b2.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _c2.innerHTML) || false;
    return By({
      ...e,
      plugins: [
        ...e.plugins || [],
        {
          key: "client",
          hooks: {
            "entries:updated": t
          }
        }
      ],
      init: [
        n ? JSON.parse(n) : false,
        ...e.init || []
      ]
    });
  }
  function Fb(e, t) {
    let n = 0;
    return () => {
      const r = ++n;
      t(() => {
        n === r && e();
      });
    };
  }
  function Ub(e = {}) {
    const t = Hb({
      domOptions: {
        render: Fb(() => pa(t), (n) => setTimeout(n, 0))
      },
      ...e
    });
    return t.install = jy(t), t;
  }
  const Vb = {
    disableDefaults: true
  }, Wb = Ie({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = Ub(Vb);
      e.vueApp.use(t);
      {
        let n = true;
        const r = async () => {
          n = false, await pa(t);
        };
        t.hooks.hook("dom:beforeRender", (s) => {
          s.shouldRender = !n;
        }), e.hooks.hook("page:start", () => {
          n = true;
        }), e.hooks.hook("page:finish", () => {
          e.isHydrating || r();
        }), e.hooks.hook("app:error", r), e.hooks.hook("app:suspense:resolve", r);
      }
    }
  }), qb = /(:\w+)\([^)]+\)/g, Kb = /(:\w+)[?+*]/g, Gb = /:\w+/g, zb = (e, t) => t.path.replace(qb, "$1").replace(Kb, "$1").replace(Gb, (n) => {
    var _a2;
    return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  }), Bi = (e, t) => {
    const n = e.route.matched.find((s) => {
      var _a2;
      return ((_a2 = s.components) == null ? void 0 : _a2.default) === e.Component.type;
    }), r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && zb(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  }, Jb = (e, t) => ({
    default: () => e ? pe(Qh, e === true ? {} : e, t) : t
  });
  function ma(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const Yb = {
    middleware: [
      async function(e) {
        e.path === "/onepager" && await an(() => Promise.resolve({}), __vite__mapDeps([0]), import.meta.url);
      }
    ]
  }, qo = [
    {
      name: "roadmap",
      path: "/roadmap",
      component: () => an(() => import("./DJKAwVwp.js"), __vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)
    },
    {
      name: "uid",
      path: "/:uid(.*)*",
      meta: Yb || {},
      component: () => an(() => import("./DqYLTfmG.js"), __vite__mapDeps([14,15,4,16,17]), import.meta.url)
    },
    {
      name: "blog-post",
      path: "/blog/:post()",
      component: () => an(() => import("./CUE6FAPr.js"), __vite__mapDeps([18,19,6,7,8,9,10,20,21,4,22,5,23,15,24,12,17,11,25]), import.meta.url)
    },
    {
      name: "slice-simulator",
      path: "/slice-simulator",
      component: () => an(() => import("./DCr31tCO.js"), __vite__mapDeps([26,27,15]), import.meta.url)
    },
    {
      name: "iframes-albatross-liveview",
      path: "/iframes/albatross-liveview",
      component: () => an(() => import("./D-Pdm4bS.js"), __vite__mapDeps([28,29,30,21,11,12,31,32,6,7,8,9,10,24]), import.meta.url)
    }
  ], Qb = async (e, t) => {
    var _a2;
    let n, r;
    if (!((_a2 = e.meta) == null ? void 0 : _a2.validate)) return;
    const s = ([n, r] = Jn(() => Promise.resolve(e.meta.validate(e))), n = await n, r(), n);
    if (s === true) return;
    const o = hn({
      fatal: true,
      statusCode: s && s.statusCode || 404,
      statusMessage: s && s.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath), o;
  }, Xb = async (e) => {
    let t, n;
    const r = ([t, n] = Jn(() => ca({
      path: e.path
    })), t = await t, n(), t);
    if (r.redirect) return $t(r.redirect, {
      acceptRelative: true
    }) ? (window.location.href = r.redirect, false) : r.redirect;
  }, Zb = [
    Qb,
    Xb
  ], Di = {};
  function e_(e, t, n) {
    const { pathname: r, search: s, hash: o } = t, i = e.indexOf("#");
    if (i > -1) {
      const u = o.includes(e.slice(i)) ? e.slice(i).length : 1;
      let c = o.slice(u);
      return c[0] !== "/" && (c = "/" + c), ll(c, "");
    }
    const a = ll(r, e), l = !n || tg(a, n) ? a : n;
    return l + (l.includes("?") ? "" : s) + o;
  }
  const t_ = Ie({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var _a2;
      let t, n, r = bn().app.baseURL;
      const s = ((_a2 = Qt.history) == null ? void 0 : _a2.call(Qt, r)) ?? $v(r), o = Qt.routes ? ([t, n] = Jn(() => Qt.routes(qo)), t = await t, n(), t ?? qo) : qo;
      let i;
      const a = ob({
        ...Qt,
        scrollBehavior: (S, k, _) => {
          if (k === lt) {
            i = _;
            return;
          }
          if (Qt.scrollBehavior) {
            if (a.options.scrollBehavior = Qt.scrollBehavior, "scrollRestoration" in window.history) {
              const m = a.beforeEach(() => {
                m(), window.history.scrollRestoration = "manual";
              });
            }
            return Qt.scrollBehavior(S, lt, i || _);
          }
        },
        history: s,
        routes: o
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
      const l = ut(a.currentRoute.value);
      a.afterEach((S, k) => {
        l.value = k;
      }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const u = e_(r, window.location, e.payload.path), c = ut(a.currentRoute.value), f = () => {
        c.value = a.currentRoute.value;
      };
      e.hook("page:finish", f), a.afterEach((S, k) => {
        var _a3, _b2, _c2, _d2;
        ((_b2 = (_a3 = S.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = k.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default) && f();
      });
      const h = {};
      for (const S in c.value) Object.defineProperty(h, S, {
        get: () => c.value[S],
        enumerable: true
      });
      e._route = Ft(h), e._middleware || (e._middleware = {
        global: [],
        named: {}
      });
      const d = mo();
      a.afterEach(async (S, k, _) => {
        delete e._processingMiddleware, !e.isHydrating && d.value && await e.runWithContext(jf), _ && await e.callHook("page:loading:end");
      });
      try {
        [t, n] = Jn(() => a.isReady()), await t, n();
      } catch (S) {
        [t, n] = Jn(() => e.runWithContext(() => Tn(S))), await t, n();
      }
      const p = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
      f();
      const y = e.payload.state._layout;
      return a.beforeEach(async (S, k) => {
        var _a3;
        await e.callHook("page:loading:start"), S.meta = It(S.meta), e.isHydrating && y && !mn(S.meta.layout) && (S.meta.layout = y), e._processingMiddleware = true;
        {
          const _ = /* @__PURE__ */ new Set([
            ...Zb,
            ...e._middleware.global
          ]);
          for (const m of S.matched) {
            const v = m.meta.middleware;
            if (v) for (const w of ma(v)) _.add(w);
          }
          {
            const m = await e.runWithContext(() => ca({
              path: S.path
            }));
            if (m.appMiddleware) for (const v in m.appMiddleware) m.appMiddleware[v] ? _.add(v) : _.delete(v);
          }
          for (const m of _) {
            const v = typeof m == "string" ? e._middleware.named[m] || await ((_a3 = Di[m]) == null ? void 0 : _a3.call(Di).then((w) => w.default || w)) : m;
            if (!v) throw new Error(`Unknown route middleware: '${m}'.`);
            try {
              const w = await e.runWithContext(() => v(S, k));
              if (!e.payload.serverRendered && e.isHydrating && (w === false || w instanceof Error)) {
                const A = w || hn({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${u}`
                });
                return await e.runWithContext(() => Tn(A)), false;
              }
              if (w === true) continue;
              if (w === false) return w;
              if (w) return Hf(w) && w.fatal && await e.runWithContext(() => Tn(w)), w;
            } catch (w) {
              const A = hn(w);
              return A.fatal && await e.runWithContext(() => Tn(A)), A;
            }
          }
        }
      }), a.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end");
      }), a.afterEach(async (S, k) => {
        S.matched.length === 0 && await e.runWithContext(() => Tn(hn({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${S.fullPath}`,
          data: {
            path: S.fullPath
          }
        })));
      }), e.hooks.hookOnce("app:created", async () => {
        try {
          "name" in p && (p.name = void 0), await a.replace({
            ...p,
            force: true
          }), a.options.scrollBehavior = Qt.scrollBehavior;
        } catch (S) {
          await e.runWithContext(() => Tn(S));
        }
      }), {
        provide: {
          router: a
        }
      };
    }
  });
  function n_(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !$t(String(e.url), {
      acceptRelative: true,
      strict: false
    }) && (e.url = Zm(String(e.url)));
    const t = Object.keys(e).sort((r, s) => r.localeCompare(s)), n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function r_(e) {
    const n = [];
    function r(o) {
      if (!o || typeof o != "object" || Object.keys(o).length === 0) return () => {
      };
      o._context;
      const i = {};
      for (const l in o) {
        const u = o[l];
        typeof u < "u" && u !== "" && (i[l] = u);
      }
      let a;
      return Object.keys(i).filter((l) => !l.startsWith("_")).length > 0 && (a = n.push(i)), () => {
        typeof a < "u" && n.splice(a - 1, 1);
      };
    }
    function s(o) {
      var _a2;
      const i = {};
      (o == null ? void 0 : o.debug) && (i._context = {}), i._priority = {};
      for (const a in n.sort((l, u) => (l._priority || 0) - (u._priority || 0))) for (const l in n[a]) {
        const u = l, c = (o == null ? void 0 : o.resolveRefs) ? rt(n[a][l]) : n[a][l];
        !l.startsWith("_") && typeof c < "u" && c !== "" && (i[l] = c, typeof n[a]._priority < "u" && n[a]._priority !== -1 && (i._priority[u] = n[a]._priority), (o == null ? void 0 : o.debug) && (i._context[u] = ((_a2 = n[a]._context) == null ? void 0 : _a2[u]) || n[a]._context || "anonymous"));
      }
      return (o == null ? void 0 : o.skipNormalize) ? i : n_(i);
    }
    return {
      stack: n,
      push: r,
      get: s
    };
  }
  const s_ = Ie({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
      var _a2;
      const t = r_(), n = _b("site-config");
      {
        const r = n.value || window.__NUXT_SITE_CONFIG__ || {};
        for (const s in r) s[0] !== "_" && t.push({
          [s]: r[s],
          _priority: ((_a2 = r._priority) == null ? void 0 : _a2[s]) || -1
        });
      }
      return {
        provide: {
          nuxtSiteConfig: t
        }
      };
    }
  }), o_ = Ie({
    name: "nuxt:payload",
    setup(e) {
      const t = /* @__PURE__ */ new Set();
      Ne().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const s = await xl(n.path);
        if (s) {
          for (const o of t) delete e.static.data[o];
          for (const o in s.data) o in e.static.data || t.add(o), e.static.data[o] = s.data[o];
        }
      }), lr(() => {
        var _a2;
        e.hooks.hook("link:prefetch", async (n) => {
          const { hostname: r } = new URL(n, window.location.href);
          r === window.location.hostname && await xl(n).catch(() => {
            console.warn("[nuxt] Error preloading payload for", n);
          });
        }), ((_a2 = navigator.connection) == null ? void 0 : _a2.effectiveType) !== "slow-2g" && setTimeout(go, 1e3);
      });
    }
  }), i_ = Ie(() => {
    const e = Ne();
    lr(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100), requestAnimationFrame(() => {
            setTimeout(t, 0);
          });
        });
      });
    });
  }), a_ = Ie((e) => {
    let t;
    async function n() {
      const r = await go();
      t && clearTimeout(t), t = setTimeout(n, ml);
      try {
        const s = await $fetch(sa("builds/latest.json") + `?${Date.now()}`);
        s.id !== r.id && e.hooks.callHook("app:manifest:update", s);
      } catch {
      }
    }
    lr(() => {
      t = setTimeout(n, ml);
    });
  }), l_ = Ie((e) => {
    if (!document.startViewTransition) return;
    let t, n = false, r, s;
    const o = () => {
      t = void 0, n = false, s = void 0, r = void 0;
    };
    window.addEventListener("popstate", (a) => {
      n = a.hasUAVisualTransition, n && (t == null ? void 0 : t.skipTransition());
    }), Ne().beforeResolve(async (a, l) => {
      const u = a.meta.viewTransition ?? Lg, f = window.matchMedia("(prefers-reduced-motion: reduce)").matches && u !== "always";
      if (u === false || f || n || !kd(a, l)) return;
      const h = new Promise((y, S) => {
        r = y, s = S;
      });
      let d;
      const p = new Promise((y) => d = y);
      return t = document.startViewTransition(() => (d(), h)), t.finished.then(o), await e.callHook("page:view-transition:start", t), p;
    }), e.hook("vue:error", () => {
      s == null ? void 0 : s(), o();
    }), e.hook("page:finish", () => {
      r == null ? void 0 : r(), o();
    });
  }), c_ = Ie({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Ne(), n = bn(), r = /* @__PURE__ */ new Set();
      t.beforeEach(() => {
        r.clear();
      }), e.hook("app:chunkError", ({ error: o }) => {
        r.add(o);
      });
      function s(o) {
        const a = "href" in o && o.href[0] === "#" ? n.app.baseURL + o.href : ho(n.app.baseURL, o.fullPath);
        xb({
          path: a,
          persistState: true
        });
      }
      e.hook("app:manifest:update", () => {
        t.beforeResolve(s);
      }), t.onError((o, i) => {
        r.has(o) && s(i);
      });
    }
  }), u_ = Ie({
    name: "pinia",
    setup(e) {
      const t = ry();
      return e.vueApp.use(t), Yr(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
        provide: {
          pinia: t
        }
      };
    }
  }), f_ = Ie({
    name: "nuxt:global-components"
  }), cn = {
    default: Ia(() => an(() => import("./CeE0oB-j.js"), __vite__mapDeps([33,4,34,9,35,8,36,37,38,39,40,3,41,7,11,12,42,19,6,10,5,43,44]), import.meta.url).then((e) => e.default || e)),
    iframe: Ia(() => an(() => import("./fwfolQm2.js"), [], import.meta.url).then((e) => e.default || e))
  }, d_ = Ie({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Ne();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var _a2;
          const r = (_a2 = n == null ? void 0 : n.meta) == null ? void 0 : _a2.layout;
          r && typeof cn[r] == "function" && await cn[r]();
        });
      }), e.hooks.hook("link:prefetch", (n) => {
        if ($t(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const s = r.meta.layout;
        let o = ma(r.meta.middleware);
        o = o.filter((i) => typeof i == "string");
        for (const i of o) typeof Di[i] == "function" && Di[i]();
        typeof s == "string" && s in cn && Ab(cn[s]);
      });
    }
  });
  function h_(e) {
    return ({ queryCache: t, scope: n }) => {
      t.$onAction(({ name: r, after: s }) => {
        r === "create" && s((o) => {
          var _a2;
          const i = ((_a2 = o.options) == null ? void 0 : _a2.delay) ?? (e == null ? void 0 : e.delay) ?? 200;
          n.run(() => {
            const a = ut(false);
            if (o.ext.isDelaying = a, !i) return;
            const l = o.asyncStatus.value;
            o.asyncStatus = ro((u, c) => {
              let f = l, h;
              return {
                get() {
                  return u(), f;
                },
                set(d) {
                  clearTimeout(h), d === "loading" ? (a.value = true, h = setTimeout(() => {
                    a.value = false, f = d, c();
                  }, i)) : (a.value = false, f = d, c());
                }
              };
            });
          });
        });
      });
    };
  }
  const p_ = {
    plugins: [
      h_()
    ]
  }, m_ = Ie({
    name: "Pinia Colada",
    dependsOn: [
      "pinia"
    ],
    setup(e) {
      e.vueApp.use(nv, {
        ...p_
      });
      const t = e.vueApp.config.globalProperties.$pinia;
      e.payload && e.payload.pinia_colada && tv(fa(t), e.payload.pinia_colada);
    }
  }), g_ = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/), y_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, v_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, b_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, __ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function w_(e) {
    return y_.test(e) || v_.test(e.slice(0, 4));
  }
  function S_(e) {
    return b_.test(e) || __.test(e.slice(0, 4));
  }
  function k_(e) {
    return /iPad|iPhone|iPod/.test(e);
  }
  function E_(e) {
    return /android/i.test(e);
  }
  function T_(e) {
    return /Windows/.test(e);
  }
  function R_(e) {
    return /Mac OS X/.test(e);
  }
  const C_ = [
    {
      name: "Samsung",
      regex: /SamsungBrowser/i
    },
    {
      name: "Edge",
      regex: /edg(?:[ea]|ios)?\//i
    },
    {
      name: "Firefox",
      regex: /firefox|iceweasel|fxios/i
    },
    {
      name: "Chrome",
      regex: /chrome|crios|crmo/i
    },
    {
      name: "Safari",
      regex: /safari|applewebkit/i
    }
  ];
  function P_(e) {
    for (const t of C_) if (t.regex.test(e)) return t.name;
    return "";
  }
  function oc(e, t = {}) {
    let n = false, r = false, s = false, o = false;
    if (e === "Amazon CloudFront") t["cloudfront-is-mobile-viewer"] === "true" && (n = true, r = true), t["cloudfront-is-tablet-viewer"] === "true" && (n = false, r = true), t["cloudfront-is-desktop-viewer"] === "true" && (n = false, r = false), t["cloudfront-is-ios-viewer"] === "true" && (s = true), t["cloudfront-is-android-viewer"] === "true" && (o = true);
    else if (t && t["cf-device-type"]) switch (t["cf-device-type"]) {
      case "mobile":
        n = true, r = true;
        break;
      case "tablet":
        n = false, r = true;
        break;
      case "desktop":
        n = false, r = false;
        break;
    }
    else n = w_(e), r = S_(e), s = k_(e), o = E_(e);
    const i = T_(e), a = R_(e), l = P_(e), u = l === "Safari", c = l === "Firefox", f = l === "Edge", h = l === "Chrome", d = l === "Samsung", p = g_.test(e);
    return {
      userAgent: e,
      isMobile: n,
      isMobileOrTablet: r,
      isTablet: !n && r,
      isDesktop: !r,
      isIos: s,
      isAndroid: o,
      isWindows: i,
      isMacOS: a,
      isApple: a || s,
      isDesktopOrTablet: !n,
      isSafari: u,
      isFirefox: c,
      isEdge: f,
      isChrome: h,
      isSamsung: d,
      isCrawler: p
    };
  }
  let A_, x_, xt, Od, ve, ic, O_, ln, Ue, L_, Ld, ac, lc;
  A_ = Ie(() => {
    const e = bn(), t = e.public.device.defaultUserAgent;
    let n;
    {
      const r = navigator.userAgent || t;
      n = It(oc(r)), e.public.device.refreshOnResize && window.addEventListener("resize", () => {
        setTimeout(() => {
          const s = oc(navigator.userAgent || r);
          Object.entries(s).forEach(([o, i]) => {
            n[o] = i;
          });
        }, 50);
      });
    }
    return {
      provide: {
        device: n
      }
    };
  });
  x_ = Ie((e) => {
    bn().public.prismic.preview && window.addEventListener("prismicPreviewUpdate", (n) => {
      n.preventDefault(), $i();
    });
  });
  xt = {
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    span: "span"
  };
  Od = (e) => Array.isArray(e) ? `[${e.map(Od).join(", ")}]` : typeof e == "string" ? `"${e}"` : e instanceof Date ? `${e.getTime()}` : `${e}`;
  ve = (e) => (n, ...r) => {
    const s = r.map(Od).join(", "), o = n && r.length ? ", " : "";
    return `[${e}(${n}${o}${s})]`;
  };
  ic = (e) => {
    const t = ve(e);
    return (r) => t(r);
  };
  O_ = (e) => {
    const t = ve(e);
    return (...r) => t("", ...r);
  };
  At = {
    at: ve("at"),
    not: ve("not"),
    any: ve("any"),
    in: ve("in"),
    fulltext: ve("fulltext"),
    has: ic("has"),
    missing: ic("missing"),
    similar: O_("similar"),
    geopointNear: ve("geopoint.near"),
    numberLessThan: ve("number.lt"),
    numberGreaterThan: ve("number.gt"),
    numberInRange: ve("number.inRange"),
    dateAfter: ve("date.after"),
    dateBefore: ve("date.before"),
    dateBetween: ve("date.between"),
    dateDayOfMonth: ve("date.day-of-month"),
    dateDayOfMonthAfter: ve("date.day-of-month-after"),
    dateDayOfMonthBefore: ve("date.day-of-month-before"),
    dateDayOfWeek: ve("date.day-of-week"),
    dateDayOfWeekAfter: ve("date.day-of-week-after"),
    dateDayOfWeekBefore: ve("date.day-of-week-before"),
    dateMonth: ve("date.month"),
    dateMonthAfter: ve("date.month-after"),
    dateMonthBefore: ve("date.month-before"),
    dateYear: ve("date.year"),
    dateHour: ve("date.hour"),
    dateHourAfter: ve("date.hour-after"),
    dateHourBefore: ve("date.hour-before")
  };
  ln = (e) => Array.isArray(e) ? e : [
    e
  ];
  Ue = (e = {}, t) => ({
    ...e,
    filters: [
      ...e.filters || [],
      ...ln(t)
    ]
  });
  L_ = (e) => typeof e == "function" ? e : () => e;
  Ld = "7.17.2";
  ac = (e) => `https://prismic.dev/msg/client/v${Ld}/${e}`;
  lc = (e) => At.at("document.tags", ln(e));
  var M_ = Object.defineProperty, I_ = (e, t, n) => t in e ? M_(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, cc = (e, t, n) => I_(e, typeof t != "symbol" ? t + "" : t, n);
  class pt extends Error {
    constructor(t = "An invalid API response was returned", n, r) {
      super(t), cc(this, "url"), cc(this, "response"), this.url = n, this.response = r;
    }
  }
  const ga = (e, t) => {
    const n = e.find((r) => t(r));
    if (!n) throw new pt("Ref could not be found.", void 0, void 0);
    return n;
  }, uc = (e) => ga(e, (t) => t.isMasterRef), Ko = (e, t) => ga(e, (n) => n.id === t), Go = (e, t) => ga(e, (n) => n.label === t), Md = "io.prismic.preview", $_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    preview: Md
  }, Symbol.toStringTag, {
    value: "Module"
  })), fc = (e) => e.replace(/%3B/g, ";"), N_ = (e) => {
    const t = e.split("; ");
    let n;
    for (const r of t) {
      const s = r.split("=");
      if (fc(s[0]).replace(/%3D/g, "=") === Md) {
        n = fc(s.slice(1).join("="));
        break;
      }
    }
    return n;
  }, B_ = (e) => e.replace(/(\n| )*( |{|})(\n| )*/gm, (t, n, r) => r), bs = (e) => At.any("document.tags", ln(e)), D_ = 5e3;
  let dc, zo = 0;
  const j_ = (e, t = {}) => {
    const { level: n = "log" } = t;
    if (e === dc && Date.now() - zo < D_) {
      zo = Date.now();
      return;
    }
    zo = Date.now(), dc = e, console[n](e);
  }, Dn = (e) => At.at("document.type", e);
  class vo extends pt {
  }
  class ji extends pt {
  }
  class H_ extends pt {
  }
  class F_ extends vo {
  }
  class hc extends vo {
  }
  class Jo extends vo {
  }
  class U_ extends ji {
  }
  let un, Id, V_, W_;
  un = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
  };
  Id = (e) => {
    var t;
    return {
      link_type: un.Document,
      id: e.id,
      uid: e.uid || void 0,
      type: e.type,
      tags: e.tags,
      lang: e.lang,
      url: e.url == null ? void 0 : e.url,
      slug: (t = e.slugs) == null ? void 0 : t[0],
      ...e.data && Object.keys(e.data).length > 0 ? {
        data: e.data
      } : {}
    };
  };
  bo = (e, ...t) => {
    if (!e) return null;
    const n = "link_type" in e ? e : Id(e), [r] = t;
    let s;
    switch (typeof r == "function" || r == null ? s = {
      linkResolver: r
    } : s = {
      ...r
    }, n.link_type) {
      case un.Media:
      case un.Web:
        return "url" in n ? n.url : null;
      case un.Document: {
        if ("id" in n && s.linkResolver) {
          const o = s.linkResolver(n);
          if (o != null) return o;
        }
        return "url" in n && n.url ? n.url : null;
      }
      case un.Any:
      default:
        return null;
    }
  };
  V_ = (e) => new Promise((t) => setTimeout(t, e));
  W_ = ({ interval: e } = {}) => {
    const t = [];
    let n = false, r = 0;
    const s = () => {
      var l;
      !n && t.length > 0 && ((l = t.shift()) == null || l(), n = true);
    }, o = () => {
      n = false, s();
    }, i = async (l, u, c) => {
      const f = Date.now() - r;
      e && f < e && await V_(e - f);
      const h = (async () => l(...c))();
      u(h);
      try {
        await h;
      } catch {
      }
      r = Date.now(), o();
    }, a = (l, u, c) => {
      new Promise((f) => {
        t.push(f);
      }).then(i.bind(void 0, l, u, c)), (async () => (await Promise.resolve(), n || s()))();
    };
    return (l, ...u) => new Promise((c) => {
      a(l, c, u);
    });
  };
  var q_ = Object.defineProperty, K_ = (e, t, n) => t in e ? q_(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, _s = (e, t, n) => K_(e, typeof t != "symbol" ? t + "" : t, n);
  const G_ = 1500;
  class z_ {
    constructor(t) {
      if (_s(this, "fetchFn"), _s(this, "fetchOptions"), _s(this, "queuedFetchJobs", {}), _s(this, "dedupedFetchJobs", {}), this.fetchOptions = t.fetchOptions, typeof t.fetch == "function") this.fetchFn = t.fetch;
      else if (typeof globalThis.fetch == "function") this.fetchFn = globalThis.fetch;
      else throw new pt("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.", void 0, void 0);
      this.fetchFn === globalThis.fetch && (this.fetchFn = this.fetchFn.bind(globalThis));
    }
    async fetch(t, n = {}) {
      var r, s, o, i, a;
      const l = {
        ...this.fetchOptions,
        ...n.fetchOptions,
        headers: {
          ...(r = this.fetchOptions) == null ? void 0 : r.headers,
          ...(s = n.fetchOptions) == null ? void 0 : s.headers
        },
        signal: ((o = n.fetchOptions) == null ? void 0 : o.signal) || n.signal || ((i = this.fetchOptions) == null ? void 0 : i.signal)
      };
      return (a = n.fetchOptions) != null && a.body ? this.queueFetch(t, l) : this.dedupeFetch(t, l);
    }
    queueFetch(t, n = {}) {
      const r = new URL(t).hostname;
      return this.queuedFetchJobs[r] || (this.queuedFetchJobs[r] = W_({
        interval: G_
      })), this.queuedFetchJobs[r](() => this.createFetchJob(t, n));
    }
    dedupeFetch(t, n = {}) {
      let r;
      return this.dedupedFetchJobs[t] && this.dedupedFetchJobs[t].has(n.signal) ? r = this.dedupedFetchJobs[t].get(n.signal) : (this.dedupedFetchJobs[t] = this.dedupedFetchJobs[t] || /* @__PURE__ */ new Map(), r = this.createFetchJob(t, n).finally(() => {
        var s, o;
        (s = this.dedupedFetchJobs[t]) == null || s.delete(n.signal), ((o = this.dedupedFetchJobs[t]) == null ? void 0 : o.size) === 0 && delete this.dedupedFetchJobs[t];
      }), this.dedupedFetchJobs[t].set(n.signal, r)), r;
    }
    createFetchJob(t, n = {}) {
      return this.fetchFn(t, n).then(async (r) => {
        let s, o;
        if (r.ok) try {
          s = await r.json();
        } catch {
        }
        else try {
          o = await r.text(), s = JSON.parse(o);
        } catch {
        }
        return {
          status: r.status,
          headers: r.headers,
          json: s,
          text: o
        };
      });
    }
  }
  const J_ = "x-c", Y_ = {
    accessToken: "access_token"
  }, Q_ = (e) => typeof e == "string" ? e : e.direction === "desc" ? `${e.field} desc` : e.field, X_ = (e, t) => {
    const { filters: n, predicates: r, ...s } = t, o = new URL("documents/search", `${e}/`);
    if (n) for (const i of ln(n)) o.searchParams.append("q", `[${i}]`);
    if (r) for (const i of ln(r)) o.searchParams.append("q", `[${i}]`);
    for (const i in s) {
      const a = Y_[i] || i;
      let l = s[i];
      if (a === "orderings") {
        const u = s[a];
        u != null && (l = `[${ln(u).map((f) => Q_(f)).join(",")}]`);
      } else a === "routes" && typeof s[a] == "object" && (l = JSON.stringify(ln(s[a])));
      l != null && o.searchParams.set(a, ln(l).join(","));
    }
    return o.searchParams.set(J_, `js-${Ld}`), o.toString();
  }, Z_ = (e) => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e), ew = (e) => {
    if (Z_(e)) return `https://${e}.cdn.prismic.io/api/v2`;
    throw new pt(`An invalid Prismic repository name was given: ${e}`, void 0, void 0);
  }, tw = (e) => {
    try {
      const t = new URL(e).hostname;
      if (t.endsWith("prismic.io") || t.endsWith("wroom.io") || t.endsWith("wroom.test")) return t.split(".")[0];
    } catch {
    }
    throw new pt(`An invalid Prismic Document API endpoint was provided: ${e}`, void 0, void 0);
  }, pc = (e) => {
    try {
      return new URL(e), true;
    } catch {
      return false;
    }
  };
  var nw = Object.defineProperty, $d = (e) => {
    throw TypeError(e);
  }, rw = (e, t, n) => t in e ? nw(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, Xt = (e, t, n) => rw(e, typeof t != "symbol" ? t + "" : t, n), Nd = (e, t, n) => t.has(e) || $d("Cannot " + n), mc = (e, t, n) => (Nd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), sw = (e, t, n) => t.has(e) ? $d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ow = (e, t, n, r) => (Nd(e, t, "write to private field"), t.set(e, n), n), br;
  const iw = 100, aw = 5e3, lw = 500, cw = 1e3, uw = 3;
  var Ct;
  (function(e) {
    e.Master = "Master", e.ReleaseID = "ReleaseID", e.ReleaseLabel = "ReleaseLabel", e.Manual = "Manual";
  })(Ct || (Ct = {}));
  class fw extends z_ {
    constructor(t, n = {}) {
      if (super(n), sw(this, br), Xt(this, "documentAPIEndpoint"), Xt(this, "accessToken"), Xt(this, "routes"), Xt(this, "brokenRoute"), Xt(this, "defaultParams"), Xt(this, "refState", {
        mode: Ct.Master,
        autoPreviewsEnabled: true
      }), Xt(this, "cachedRepository"), Xt(this, "cachedRepositoryExpiration", 0), n.documentAPIEndpoint || pc(t), pc(t)) {
        this.documentAPIEndpoint = t;
        try {
          this.repositoryName = tw(t);
        } catch {
          console.warn(`[@prismicio/client] A repository name could not be inferred from the provided endpoint (\`${t}\`). Some methods will be disabled. Create the client using a repository name to prevent this warning. For more details, see ${ac("prefer-repository-name")}`);
        }
      } else this.documentAPIEndpoint = n.documentAPIEndpoint || ew(t), this.repositoryName = t;
      this.accessToken = n.accessToken, this.routes = n.routes, this.brokenRoute = n.brokenRoute, this.defaultParams = n.defaultParams, n.ref && this.queryContentFromRef(n.ref), this.graphQLFetch = this.graphQLFetch.bind(this);
    }
    set repositoryName(t) {
      ow(this, br, t);
    }
    get repositoryName() {
      if (!mc(this, br)) throw new pt(`A repository name is required for this method but one could not be inferred from the provided API endpoint (\`${this.documentAPIEndpoint}\`). To fix this error, provide a repository name when creating the client. For more details, see ${ac("prefer-repository-name")}`, void 0, void 0);
      return mc(this, br);
    }
    set endpoint(t) {
      this.documentAPIEndpoint = t;
    }
    get endpoint() {
      return this.documentAPIEndpoint;
    }
    enableAutoPreviews() {
      this.refState.autoPreviewsEnabled = true;
    }
    enableAutoPreviewsFromReq(t) {
      this.refState.httpRequest = t, this.refState.autoPreviewsEnabled = true;
    }
    disableAutoPreviews() {
      this.refState.autoPreviewsEnabled = false;
    }
    async get(t) {
      const { data: n } = await this._get(t);
      return n;
    }
    async getFirst(t) {
      var n;
      const r = {
        ...t
      };
      !(t && t.page) && !(t == null ? void 0 : t.pageSize) && (r.pageSize = ((n = this.defaultParams) == null ? void 0 : n.pageSize) ?? 1);
      const { data: s, url: o } = await this._get(r), i = s.results[0];
      if (i) return i;
      throw new ji("No documents were returned", o, void 0);
    }
    async dangerouslyGetAll(t = {}) {
      var n;
      const { limit: r = 1 / 0, ...s } = t, o = {
        ...s,
        pageSize: Math.min(r, s.pageSize || ((n = this.defaultParams) == null ? void 0 : n.pageSize) || iw)
      }, i = [];
      let a;
      for (; (!a || a.next_page) && i.length < r; ) {
        const l = a ? a.page + 1 : void 0;
        a = await this.get({
          ...o,
          page: l
        }), i.push(...a.results), a.next_page && await new Promise((u) => setTimeout(u, lw));
      }
      return i.slice(0, r);
    }
    async getByID(t, n) {
      return await this.getFirst(Ue(n, At.at("document.id", t)));
    }
    async getByIDs(t, n) {
      return await this.get(Ue(n, At.in("document.id", t)));
    }
    async getAllByIDs(t, n) {
      return await this.dangerouslyGetAll(Ue(n, At.in("document.id", t)));
    }
    async getByUID(t, n, r) {
      return await this.getFirst(Ue(r, [
        Dn(t),
        At.at(`my.${t}.uid`, n)
      ]));
    }
    async getByUIDs(t, n, r) {
      return await this.get(Ue(r, [
        Dn(t),
        At.in(`my.${t}.uid`, n)
      ]));
    }
    async getAllByUIDs(t, n, r) {
      return await this.dangerouslyGetAll(Ue(r, [
        Dn(t),
        At.in(`my.${t}.uid`, n)
      ]));
    }
    async getSingle(t, n) {
      return await this.getFirst(Ue(n, Dn(t)));
    }
    async getByType(t, n) {
      return await this.get(Ue(n, Dn(t)));
    }
    async getAllByType(t, n) {
      return await this.dangerouslyGetAll(Ue(n, Dn(t)));
    }
    async getByTag(t, n) {
      return await this.get(Ue(n, bs(t)));
    }
    async getAllByTag(t, n) {
      return await this.dangerouslyGetAll(Ue(n, bs(t)));
    }
    async getByEveryTag(t, n) {
      return await this.get(Ue(n, lc(t)));
    }
    async getAllByEveryTag(t, n) {
      return await this.dangerouslyGetAll(Ue(n, lc(t)));
    }
    async getBySomeTags(t, n) {
      return await this.get(Ue(n, bs(t)));
    }
    async getAllBySomeTags(t, n) {
      return await this.dangerouslyGetAll(Ue(n, bs(t)));
    }
    async getRepository(t) {
      const n = new URL(this.documentAPIEndpoint);
      return this.accessToken && n.searchParams.set("access_token", this.accessToken), await this.fetch(n.toString(), t);
    }
    async getRefs(t) {
      return (await this.getRepository(t)).refs;
    }
    async getRefByID(t, n) {
      const r = await this.getRefs(n);
      return Ko(r, t);
    }
    async getRefByLabel(t, n) {
      const r = await this.getRefs(n);
      return Go(r, t);
    }
    async getMasterRef(t) {
      const n = await this.getRefs(t);
      return uc(n);
    }
    async getReleases(t) {
      return (await this.getRefs(t)).filter((r) => !r.isMasterRef);
    }
    async getReleaseByID(t, n) {
      const r = await this.getReleases(n);
      return Ko(r, t);
    }
    async getReleaseByLabel(t, n) {
      const r = await this.getReleases(n);
      return Go(r, t);
    }
    async getTags(t) {
      try {
        const n = await this.getCachedRepositoryForm("tags", t), r = new URL(n.action);
        return this.accessToken && r.searchParams.set("access_token", this.accessToken), await this.fetch(r.toString(), t);
      } catch {
        return (await this.getRepository(t)).tags;
      }
    }
    async buildQueryURL({ signal: t, fetchOptions: n, ...r } = {}) {
      const s = r.ref || await this.getResolvedRefString({
        signal: t,
        fetchOptions: n
      }), o = r.integrationFieldsRef || (await this.getCachedRepository({
        signal: t,
        fetchOptions: n
      })).integrationFieldsRef || void 0;
      return X_(this.documentAPIEndpoint, {
        ...this.defaultParams,
        ...r,
        ref: s,
        integrationFieldsRef: o,
        routes: r.routes || this.routes,
        brokenRoute: r.brokenRoute || this.brokenRoute,
        accessToken: r.accessToken || this.accessToken
      });
    }
    async resolvePreviewURL(t) {
      var n, r;
      let s = t.documentID, o = t.previewToken;
      if (typeof globalThis.location < "u") {
        const i = new URLSearchParams(globalThis.location.search);
        s = s || i.get("documentId"), o = o || i.get("token");
      } else if (this.refState.httpRequest) {
        if ("query" in this.refState.httpRequest) s = s || ((n = this.refState.httpRequest.query) == null ? void 0 : n.documentId), o = o || ((r = this.refState.httpRequest.query) == null ? void 0 : r.token);
        else if ("url" in this.refState.httpRequest && this.refState.httpRequest.url) {
          const i = new URL(this.refState.httpRequest.url, "missing-host://").searchParams;
          s = s || i.get("documentId"), o = o || i.get("token");
        }
      }
      if (s != null && o != null) {
        const i = await this.getByID(s, {
          ref: o,
          lang: "*",
          signal: t.signal,
          fetchOptions: t.fetchOptions
        }), a = bo(i, {
          linkResolver: t.linkResolver
        });
        if (typeof a == "string") return a;
      }
      return t.defaultURL;
    }
    queryLatestContent() {
      this.refState.mode = Ct.Master;
    }
    queryContentFromReleaseByID(t) {
      this.refState = {
        ...this.refState,
        mode: Ct.ReleaseID,
        releaseID: t
      };
    }
    queryContentFromReleaseByLabel(t) {
      this.refState = {
        ...this.refState,
        mode: Ct.ReleaseLabel,
        releaseLabel: t
      };
    }
    queryContentFromRef(t) {
      this.refState = {
        ...this.refState,
        mode: Ct.Manual,
        ref: t
      };
    }
    async graphQLFetch(t, n) {
      const r = await this.getCachedRepository(), s = await this.getResolvedRefString(), o = {
        "Prismic-ref": s,
        Authorization: this.accessToken ? `Token ${this.accessToken}` : "",
        ...n ? n.headers : {}
      };
      r.integrationFieldsRef && (o["Prismic-integration-field-ref"] = r.integrationFieldsRef);
      const i = {};
      for (const u in o) o[u] && (i[u.toLowerCase()] = o[u]);
      const a = new URL(t);
      a.searchParams.set("ref", s);
      const l = a.searchParams.get("query");
      return l && a.searchParams.set("query", B_(l)), await this.fetchFn(a.toString(), {
        ...n,
        headers: i
      });
    }
    async getCachedRepository(t) {
      return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + aw, this.cachedRepository = await this.getRepository(t)), this.cachedRepository;
    }
    async getCachedRepositoryForm(t, n) {
      const s = (await this.getCachedRepository(n)).forms[t];
      if (!s) throw new pt(`Form with name "${t}" could not be found`, void 0, void 0);
      return s;
    }
    async getResolvedRefString(t) {
      var n, r;
      if (this.refState.autoPreviewsEnabled) {
        let i, a;
        if ((n = this.refState.httpRequest) != null && n.headers ? "get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get == "function" ? a = this.refState.httpRequest.headers.get("cookie") : "cookie" in this.refState.httpRequest.headers && (a = this.refState.httpRequest.headers.cookie) : (r = globalThis.document) != null && r.cookie && (a = globalThis.document.cookie), a && (i = N_(a)), i) return i;
      }
      const s = await this.getCachedRepository(t), o = this.refState.mode;
      if (o === Ct.ReleaseID) return Ko(s.refs, this.refState.releaseID).ref;
      if (o === Ct.ReleaseLabel) return Go(s.refs, this.refState.releaseLabel).ref;
      if (o === Ct.Manual) {
        const i = await L_(this.refState.ref)();
        if (typeof i == "string") return i;
      }
      return uc(s.refs).ref;
    }
    async _get(t, n = 0) {
      var r, s;
      const o = await this.buildQueryURL(t);
      try {
        return {
          data: await this.fetch(o, t),
          url: o
        };
      } catch (i) {
        if (!(i instanceof Jo || i instanceof hc) || n >= uw - 1) throw i;
        (t == null ? void 0 : t.ref) || (this.cachedRepository = void 0);
        const a = (s = (r = i.message.match(/Master ref is: (?<ref>.*)$/)) == null ? void 0 : r.groups) == null ? void 0 : s.ref;
        if (!a) throw i;
        const l = new URL(o).searchParams.get("ref"), u = i instanceof Jo ? "invalid" : "expired";
        return j_(`[@prismicio/client] The ref (${l}) was ${u}. Now retrying with the latest master ref (${a}). If you were previewing content, the response will not include draft content.`, {
          level: "warn"
        }), await this._get({
          ...t,
          ref: a
        }, n + 1);
      }
    }
    async fetch(t, n = {}) {
      const r = await super.fetch(t, n);
      if (r.status !== 404 && r.status !== 429 && r.json == null) throw new pt(void 0, t, r.json || r.text);
      switch (r.status) {
        case 200:
        case 201:
          return r.json;
        case 400:
          throw new H_(r.json.message, t, r.json);
        case 401:
        case 403:
          throw new vo(r.json.error || r.json.message, t, r.json);
        case 404:
          throw r.json === void 0 ? new U_(`Prismic repository not found. Check that "${this.documentAPIEndpoint}" is pointing to the correct repository.`, t, t.startsWith(this.documentAPIEndpoint) ? void 0 : r.text) : r.json.type === "api_notfound_error" ? new Jo(r.json.message, t, r.json) : r.json.type === "api_security_error" && /preview token.*expired/i.test(r.json.message) ? new F_(r.json.message, t, r.json) : new ji(r.json.message, t, r.json);
        case 410:
          throw new hc(r.json.message, t, r.json);
        case 429: {
          const s = Number(r.headers.get("retry-after")), o = Number.isNaN(s) ? cw : s;
          return await new Promise((i, a) => {
            setTimeout(async () => {
              try {
                i(await this.fetch(t, n));
              } catch (l) {
                a(l);
              }
            }, o);
          });
        }
      }
      throw new pt(void 0, t, r.json);
    }
  }
  br = /* @__PURE__ */ new WeakMap();
  let dw, Fe, ya, hw, cr, mw, gw, yw, vw, bw, _w, Bd, ww, Sw, kw, Ew, Dd, Tw, Rw, Cw, Pw, ur, xw, jd, Ow, Lw, ba, Xr, Zr, Je, Mw, Iw, $w, Fd, Nw, wo;
  dw = (e, t) => new fw(e, t);
  Fe = (e) => e != null;
  ya = (e) => !!e.length;
  va = (e) => Fe(e) ? e.length === 1 && "text" in e[0] ? !!e[0].text : !!e.length : false;
  hw = va;
  cr = (e) => Fe(e) && !!e.url;
  pw = cr;
  _o = (e) => Fe(e) && ("id" in e || "url" in e);
  mw = _o;
  gw = _o;
  yw = Fe;
  vw = Fe;
  bw = Fe;
  _w = Fe;
  Bd = (e) => Fe(Bd) && !!e;
  ww = Fe;
  Sw = (e) => Fe(e) && !!e.embed_url;
  kw = (e) => Fe(e) && "longitude" in e;
  Ew = Fe;
  Dd = Fe;
  Tw = Dd;
  Rw = (e) => Fe(e) && ya(e);
  Cw = (e) => Fe(e) && ya(e);
  Pw = (e) => Fe(e) && ya(e);
  ur = Object.freeze(Object.defineProperty({
    __proto__: null,
    color: bw,
    contentRelationship: gw,
    date: yw,
    embed: Sw,
    geoPoint: kw,
    group: Cw,
    image: pw,
    imageThumbnail: cr,
    integrationField: Dd,
    integrationFields: Tw,
    keyText: Bd,
    link: _o,
    linkToMedia: mw,
    number: _w,
    repeatable: Rw,
    richText: va,
    select: ww,
    sliceZone: Pw,
    table: Ew,
    timestamp: vw,
    title: hw
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Aw = (e) => e ? e.length === 24 ? new Date(e.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3")) : new Date(e) : null;
  xw = (e) => {
    const t = /^(\/(?!\/)|#)/.test(e), n = !t && !/^https?:\/\//.test(e);
    return t && !n;
  };
  jd = (e, t = {}) => {
    if (e && ("link_type" in e ? _o(e) : e)) {
      const n = "target" in e ? e.target : void 0, r = bo(e, t.linkResolver), s = r ?? void 0, o = typeof s == "string" ? !xw(s) : false, i = t.rel ? t.rel({
        href: s,
        isExternal: o,
        target: n
      }) : o ? "noreferrer" : void 0;
      return {
        href: s,
        target: n,
        rel: i ?? void 0
      };
    }
    return {};
  };
  Ow = (e, t = " ") => {
    let n = "";
    for (let r = 0; r < e.length; r++) "text" in e[r] && (n += (n ? t : "") + e[r].text);
    return n;
  };
  Hd = (e, ...t) => {
    if (e) {
      const [n] = t;
      let r;
      return typeof n == "string" ? r = {
        separator: n
      } : r = {
        ...n
      }, Ow(e, r.separator);
    } else return null;
  };
  Lw = /["'&<>]/;
  ba = (e) => {
    const t = "" + e, n = Lw.exec(t);
    if (!n) return t;
    let r, s = "", o = 0, i = 0;
    for (o = n.index; o < t.length; o++) {
      switch (t.charCodeAt(o)) {
        case 34:
          r = "&quot;";
          break;
        case 38:
          r = "&amp;";
          break;
        case 39:
          r = "&#39;";
          break;
        case 60:
          r = "&lt;";
          break;
        case 62:
          r = "&gt;";
          break;
        default:
          continue;
      }
      i !== o && (s += t.substring(i, o)), i = o + 1, s += r;
    }
    return i !== o ? s + t.substring(i, o) : s;
  };
  Xr = (e, t) => {
    const n = {
      ...t
    };
    "direction" in e && e.direction === "rtl" && (n.dir = e.direction), "data" in e && "label" in e.data && e.data.label && (n.class = n.class ? `${n.class} ${e.data.label}` : e.data.label);
    const r = [];
    for (const s in n) {
      const o = n[s];
      o && (typeof o == "boolean" ? r.push(s) : r.push(`${s}="${ba(o)}"`));
    }
    return r.length && r.unshift(""), r.join(" ");
  };
  Zr = (e) => e && typeof e != "function" ? e : {};
  Je = (e, t) => {
    const n = Zr(t);
    return ({ node: r, children: s }) => `<${e}${Xr(r, n)}>${s}</${e}>`;
  };
  Mw = (e) => {
    const t = Zr(e);
    return ({ node: n }) => `<pre${Xr(n, t)}>${ba(n.text)}</pre>`;
  };
  Iw = (e, t) => {
    const n = Zr(t);
    return ({ node: r }) => {
      const s = {
        ...n,
        src: r.url,
        alt: r.alt,
        copyright: r.copyright
      };
      let o = `<img${Xr(r, s)} />`;
      return r.linkTo && (o = Fd(e)({
        type: "hyperlink",
        node: {
          type: "hyperlink",
          data: r.linkTo,
          start: 0,
          end: 0
        },
        text: "",
        children: o,
        key: ""
      })), `<p class="block-img">${o}</p>`;
    };
  };
  $w = (e) => {
    const t = Zr(e);
    return ({ node: n }) => {
      const r = {
        ...t,
        "data-oembed": n.oembed.embed_url,
        "data-oembed-type": n.oembed.type,
        "data-oembed-provider": n.oembed.provider_name
      };
      return `<div${Xr(n, r)}>${n.oembed.html}</div>`;
    };
  };
  Fd = (e, t) => {
    const n = Zr(t);
    return ({ node: r, children: s }) => {
      const o = {
        ...n
      };
      return r.data.link_type === un.Web ? (o.href = r.data.url, o.target = r.data.target, o.rel = "noopener noreferrer") : r.data.link_type === un.Document ? o.href = bo(r.data, {
        linkResolver: e
      }) : r.data.link_type === un.Media && (o.href = r.data.url), `<a${Xr(r, o)}>${s}</a>`;
    };
  };
  Nw = () => ({ text: e }) => e ? ba(e).replace(/\n/g, "<br />") : "";
  wo = () => (++wo.i).toString();
  wo.i = 0;
  let Ud, xr, Yo, Bw, Vd, Wd, Dw, qd, jw, Hw, Fw, Qo, Uw, Kd, Vw, es, Ww, Xo, gc, Gd, Kw, zd, _a, Jd, Yd, Gw, zw, Jw, Hi, Yw, Qw, Xw, Zw, e0, t0, n0, r0, s0, o0, i0, a0, l0, c0, u0, f0, d0, h0, p0, m0, yc, g0, y0, v0, b0, _0, w0, S0, k0, vc, bc, E0, T0, R0, C0, P0, A0, x0, O0, L0, M0;
  Ud = (e) => {
    const t = Bw(e), n = [];
    for (let r = 0; r < t.length; r++) n.push(Vd(t[r]));
    return {
      key: wo(),
      children: n
    };
  };
  xr = (e, t = []) => ({
    key: wo(),
    type: e.type,
    text: "text" in e ? e.text : void 0,
    node: e,
    children: t
  });
  Yo = (e) => xr({
    type: xt.span,
    text: e,
    spans: []
  });
  Bw = (e) => {
    const t = e.slice(0);
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (r.type === xt.listItem || r.type === xt.oListItem) {
        const s = [
          r
        ];
        for (; t[n + 1] && t[n + 1].type === r.type; ) s.push(t[n + 1]), t.splice(n, 1);
        r.type === xt.listItem ? t[n] = {
          type: xt.list,
          items: s
        } : t[n] = {
          type: xt.oList,
          items: s
        };
      }
    }
    return t;
  };
  Vd = (e) => {
    if ("text" in e) return xr(e, Wd(e.spans, e));
    if ("items" in e) {
      const t = [];
      for (let n = 0; n < e.items.length; n++) t.push(Vd(e.items[n]));
      return xr(e, t);
    }
    return xr(e);
  };
  Wd = (e, t, n) => {
    if (!e.length) return [
      Yo(t.text)
    ];
    const r = e.slice(0);
    r.sort((o, i) => o.start - i.start || i.end - o.end);
    const s = [];
    for (let o = 0; o < r.length; o++) {
      const i = r[o], a = n && n.start || 0, l = i.start - a, u = i.end - a, c = t.text.slice(l, u), f = [];
      for (let d = o; d < r.length; d++) {
        const p = r[d];
        p !== i && (p.start >= i.start && p.end <= i.end ? (f.push(p), r.splice(d, 1), d--) : p.start < i.end && p.end > i.start && (f.push({
          ...p,
          end: i.end
        }), r[d] = {
          ...p,
          start: i.end
        }));
      }
      o === 0 && l > 0 && s.push(Yo(t.text.slice(0, l)));
      const h = {
        ...i,
        text: c
      };
      s.push(xr(h, Wd(f, {
        ...t,
        text: c
      }, i))), u < t.text.length && s.push(Yo(t.text.slice(u, r[o + 1] ? r[o + 1].start - a : void 0)));
    }
    return s;
  };
  Dw = (e, t) => qd(Ud(e).children, t);
  qd = (e, t) => {
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const s = e[r], o = t(s.type, s.node, s.text, qd(s.children, t), s.key);
      o != null && n.push(o);
    }
    return n;
  };
  jw = {
    [xt.listItem]: "listItem",
    [xt.oListItem]: "oListItem",
    [xt.list]: "list",
    [xt.oList]: "oList"
  };
  Hw = (e) => (t, n, r, s, o) => {
    const i = e[jw[t] || t];
    if (i) return i({
      type: t,
      node: n,
      text: r,
      children: s,
      key: o
    });
  };
  Fw = (...e) => (...t) => {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r) {
        const s = r(...t);
        if (s != null) return s;
      }
    }
  };
  Qo = (e, t) => {
    const n = (s, o) => typeof s == "function" ? (i) => (s == null ? void 0 : s(i)) || o(i) : o, r = {
      heading1: n(t == null ? void 0 : t.heading1, Je("h1", t == null ? void 0 : t.heading1)),
      heading2: n(t == null ? void 0 : t.heading2, Je("h2", t == null ? void 0 : t.heading2)),
      heading3: n(t == null ? void 0 : t.heading3, Je("h3", t == null ? void 0 : t.heading3)),
      heading4: n(t == null ? void 0 : t.heading4, Je("h4", t == null ? void 0 : t.heading4)),
      heading5: n(t == null ? void 0 : t.heading5, Je("h5", t == null ? void 0 : t.heading5)),
      heading6: n(t == null ? void 0 : t.heading6, Je("h6", t == null ? void 0 : t.heading6)),
      paragraph: n(t == null ? void 0 : t.paragraph, Je("p", t == null ? void 0 : t.paragraph)),
      preformatted: n(t == null ? void 0 : t.preformatted, Mw(t == null ? void 0 : t.preformatted)),
      strong: n(t == null ? void 0 : t.strong, Je("strong", t == null ? void 0 : t.strong)),
      em: n(t == null ? void 0 : t.em, Je("em", t == null ? void 0 : t.em)),
      listItem: n(t == null ? void 0 : t.listItem, Je("li", t == null ? void 0 : t.listItem)),
      oListItem: n(t == null ? void 0 : t.oListItem, Je("li", t == null ? void 0 : t.oListItem)),
      list: n(t == null ? void 0 : t.list, Je("ul", t == null ? void 0 : t.list)),
      oList: n(t == null ? void 0 : t.oList, Je("ol", t == null ? void 0 : t.oList)),
      image: n(t == null ? void 0 : t.image, Iw(e, t == null ? void 0 : t.image)),
      embed: n(t == null ? void 0 : t.embed, $w(t == null ? void 0 : t.embed)),
      hyperlink: n(t == null ? void 0 : t.hyperlink, Fd(e, t == null ? void 0 : t.hyperlink)),
      label: n(t == null ? void 0 : t.label, Je("span", t == null ? void 0 : t.label)),
      span: n(t == null ? void 0 : t.span, Nw())
    };
    return Uw(r);
  };
  Uw = (e) => {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r && (t[n] = (s) => r({
        ...s,
        children: s.children.join("")
      }));
    }
    return Hw(t);
  };
  Kd = (e, ...t) => {
    if (e) {
      const [n, r] = t;
      let s;
      typeof n == "function" || n == null ? s = {
        linkResolver: n,
        serializer: r
      } : s = {
        ...n
      };
      let o;
      return s.serializer ? typeof s.serializer == "function" ? o = Fw((i, a, l, u, c) => s.serializer(i, a, l, u.join(""), c), Qo(s.linkResolver)) : o = Qo(s.linkResolver, s.serializer) : o = Qo(s.linkResolver), Dw(e, o).join("");
    } else return null;
  };
  Vw = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  es = (e, t) => {
    const n = new URL(e);
    for (const s in t) {
      const o = Vw(s), i = t[s];
      i === void 0 ? n.searchParams.delete(o) : Array.isArray(i) ? n.searchParams.set(o, i.join(",")) : n.searchParams.set(o, `${i}`);
    }
    const r = n.searchParams.get("s");
    return r && (n.searchParams.delete("s"), n.searchParams.append("s", r)), n.toString();
  };
  Ww = (e, { pixelDensities: t, ...n }) => t.map((r) => `${es(e, {
    ...n,
    dpr: r
  })} ${r}x`).join(", ");
  Xo = (e, { widths: t, ...n }) => t.map((r) => `${es(e, {
    ...n,
    w: void 0,
    h: void 0,
    height: void 0,
    width: r
  })} ${r}w`).join(", ");
  qw = (e, t = {}) => e && cr(e) ? es(e.url, t) : null;
  gc = [
    640,
    828,
    1200,
    2048,
    3840
  ];
  Gd = (e, t = {}) => {
    if (e && cr(e)) {
      let { widths: n = gc, ...r } = t;
      const { url: s, dimensions: o, id: i, alt: a, copyright: l, edit: u, ...c } = e, f = Object.values(c);
      return n === "thumbnails" && f.length < 1 && (n = gc), {
        src: es(s, r),
        srcset: n === "thumbnails" ? [
          Xo(s, {
            ...r,
            widths: [
              o.width
            ]
          }),
          ...f.map((h) => Xo(h.url, {
            ...r,
            widths: [
              h.dimensions.width
            ]
          }))
        ].join(", ") : Xo(e.url, {
          ...r,
          widths: n
        })
      };
    } else return null;
  };
  Kw = [
    1,
    2,
    3
  ];
  zd = (e, t = {}) => {
    if (e && cr(e)) {
      const { pixelDensities: n = Kw, ...r } = t;
      return {
        src: es(e.url, r),
        srcset: Ww(e.url, {
          ...r,
          pixelDensities: n
        })
      };
    } else return null;
  };
  _a = he({
    __name: "Wrapper",
    props: {
      wrapper: {}
    },
    setup(e) {
      return (t, n) => t.wrapper ? (q(), se(Ge(t.wrapper), Mc(zr({
        key: 0
      }, t.$attrs)), {
        default: $e(() => [
          Ae(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : Ae(t.$slots, "default", {
        key: 1
      });
    }
  });
  Jd = Symbol("prismic");
  ts = () => Te(Jd, {
    options: {
      endpoint: ""
    }
  });
  Yd = (e) => {
    const t = /^\/(?!\/)/.test(e), n = !t && !/^https?:\/\//i.test(e);
    return t && !n;
  };
  Gw = "div";
  zw = he({
    name: "DeprecatedPrismicRichText",
    __name: "DeprecatedPrismicRichText",
    props: {
      field: {
        type: Array
      },
      fallback: {
        type: String
      },
      linkResolver: {
        type: Function
      },
      serializer: {
        type: [
          Object,
          Function
        ]
      },
      wrapper: {
        type: [
          String,
          Object,
          Function
        ]
      }
    },
    setup(e) {
      const t = e, { options: n } = ts(), r = Y(() => {
        if (!va(t.field)) return t.fallback ?? "";
        const c = t.linkResolver ?? n.linkResolver, f = t.serializer ?? n.richTextSerializer;
        return Kd(t.field, {
          linkResolver: c,
          serializer: f
        });
      }), s = Re(null), o = Te(Qr, null);
      let i = [];
      const a = function(c) {
        c.preventDefault(), o == null ? void 0 : o.push(this.href);
      }, l = () => {
        const c = s.value && "$el" in s.value ? s.value.$el : s.value;
        c && "querySelectorAll" in c && (i = Array.from(c.querySelectorAll("a")).map((f) => {
          const h = f.getAttribute("href");
          if (h && Yd(h)) {
            const d = a.bind({
              href: h
            });
            return f.addEventListener("click", d), {
              element: f,
              listener: d
            };
          } else return false;
        }).filter((f) => f));
      }, u = () => {
        i.forEach(({ element: c, listener: f }) => c.removeEventListener("click", f)), i = [];
      };
      return vt(() => {
        u(), Mt(l);
      }), Qe(r, () => {
        u(), Mt(l);
      }), Ln(() => {
        u();
      }), (c, f) => ie(ur).richText(e.field) || e.fallback ? (q(), se(Ge(e.wrapper || Gw), {
        key: 0,
        ref_key: "root",
        ref: s,
        innerHTML: r.value
      }, null, 8, [
        "innerHTML"
      ])) : zt("", true);
    }
  });
  Jw = "div";
  Hi = he({
    name: "PrismicEmbed",
    __name: "PrismicEmbed",
    props: {
      field: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => ie(ur).embed(t.field) ? (q(), se(Ge(t.wrapper || Jw), {
        key: 0,
        "data-oembed": t.field.embed_url,
        "data-oembed-type": t.field.type,
        "data-oembed-provider": t.field.provider_name,
        innerHTML: t.field.html
      }, null, 8, [
        "data-oembed",
        "data-oembed-type",
        "data-oembed-provider",
        "innerHTML"
      ])) : zt("", true);
    }
  });
  Yw = [
    "src",
    "srcset",
    "alt"
  ];
  Ws = he({
    name: "PrismicImage",
    __name: "PrismicImage",
    props: {
      field: {},
      imgixParams: {},
      alt: {},
      fallbackAlt: {},
      widths: {},
      pixelDensities: {}
    },
    setup(e) {
      const t = e, { options: n } = ts(), r = Y(() => {
        var s, o;
        if (!cr(t.field)) return;
        let i, a;
        if (t.widths || !t.pixelDensities) {
          const l = Gd(t.field, {
            ...t.imgixParams,
            widths: t.widths === "defaults" ? (s = n.components) == null ? void 0 : s.imageWidthSrcSetDefaults : t.widths
          });
          i = l.src, a = l.srcset;
        } else if (t.pixelDensities) {
          const l = zd(t.field, {
            ...t.imgixParams,
            pixelDensities: t.pixelDensities === "defaults" ? (o = n.components) == null ? void 0 : o.imagePixelDensitySrcSetDefaults : t.pixelDensities
          });
          i = l.src, a = l.srcset;
        }
        return {
          src: i,
          srcSet: a,
          alt: t.alt ?? (t.field.alt || t.fallbackAlt)
        };
      });
      return (s, o) => r.value ? (q(), de("img", {
        key: 0,
        src: r.value.src,
        srcset: r.value.srcSet,
        alt: r.value.alt
      }, null, 8, Yw)) : zt("", true);
    }
  });
  Qw = "router-link";
  Xw = "a";
  Zw = "noreferrer";
  qs = he({
    name: "PrismicLink",
    __name: "PrismicLink",
    props: {
      linkResolver: {},
      rel: {
        type: [
          String,
          Function
        ]
      },
      internalComponent: {},
      externalComponent: {},
      field: {},
      document: {}
    },
    setup(e) {
      const t = e, { options: n } = ts(), r = Y(() => jd(t.field || t.document, {
        linkResolver: t.linkResolver || n.linkResolver,
        rel(i) {
          var a;
          const l = t.rel || ((a = n.components) == null ? void 0 : a.linkRel);
          return l ? typeof l == "function" ? l(i) : l : i.isExternal ? Zw : void 0;
        }
      })), s = Y(() => {
        var i, a;
        return Yd(r.value.href || "") ? t.internalComponent || ((i = n.components) == null ? void 0 : i.linkInternalComponent) || Qw : t.externalComponent || ((a = n.components) == null ? void 0 : a.linkExternalComponent) || Xw;
      }), o = Y(() => s.value === "a" ? {
        href: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      } : {
        to: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      });
      return (i, a) => (q(), se(Ge(s.value), Mc(Qu(o.value)), {
        default: $e(() => [
          Ae(i.$slots, "default", {}, () => [
            ar(Dt(t.field && "text" in t.field ? t.field.text : void 0), 1)
          ])
        ]),
        _: 3
      }, 16));
    }
  });
  e0 = [
    "dir"
  ];
  t0 = [
    "dir"
  ];
  n0 = [
    "dir"
  ];
  r0 = [
    "dir"
  ];
  s0 = [
    "dir"
  ];
  o0 = [
    "dir"
  ];
  i0 = [
    "dir"
  ];
  a0 = {
    key: 7
  };
  l0 = {
    key: 8
  };
  c0 = {
    key: 9
  };
  u0 = [
    "dir"
  ];
  f0 = [
    "dir"
  ];
  d0 = {
    key: 12
  };
  h0 = {
    key: 13
  };
  p0 = {
    key: 14,
    class: "block-img"
  };
  m0 = {
    key: 0
  };
  yc = he({
    name: "PrismicRichTextDefaultComponent",
    __name: "PrismicRichTextDefaultComponent",
    props: {
      node: {},
      linkResolver: {}
    },
    setup(e) {
      const t = e, n = Y(() => "direction" in t.node && t.node.direction === "rtl" ? "rtl" : void 0);
      return (r, s) => r.node.type === "heading1" ? (q(), de("h1", {
        key: 0,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, e0)) : r.node.type === "heading2" ? (q(), de("h2", {
        key: 1,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, t0)) : r.node.type === "heading3" ? (q(), de("h3", {
        key: 2,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, n0)) : r.node.type === "heading4" ? (q(), de("h4", {
        key: 3,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, r0)) : r.node.type === "heading5" ? (q(), de("h5", {
        key: 4,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, s0)) : r.node.type === "heading6" ? (q(), de("h6", {
        key: 5,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, o0)) : r.node.type === "paragraph" ? (q(), de("p", {
        key: 6,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, i0)) : r.node.type === "preformatted" ? (q(), de("pre", a0, [
        Ae(r.$slots, "default")
      ])) : r.node.type === "strong" ? (q(), de("strong", l0, [
        Ae(r.$slots, "default")
      ])) : r.node.type === "em" ? (q(), de("em", c0, [
        Ae(r.$slots, "default")
      ])) : r.node.type === "list-item" ? (q(), de("li", {
        key: 10,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, u0)) : r.node.type === "o-list-item" ? (q(), de("li", {
        key: 11,
        dir: n.value
      }, [
        Ae(r.$slots, "default")
      ], 8, f0)) : r.node.type === "group-list-item" ? (q(), de("ul", d0, [
        Ae(r.$slots, "default")
      ])) : r.node.type === "group-o-list-item" ? (q(), de("ol", h0, [
        Ae(r.$slots, "default")
      ])) : r.node.type === "image" ? (q(), de("p", p0, [
        r.node.linkTo ? (q(), se(qs, {
          key: 0,
          field: r.node.linkTo
        }, {
          default: $e(() => [
            me(Ws, {
              field: r.node
            }, null, 8, [
              "field"
            ])
          ]),
          _: 1
        }, 8, [
          "field"
        ])) : (q(), se(Ws, {
          key: 1,
          field: r.node
        }, null, 8, [
          "field"
        ]))
      ])) : r.node.type === "embed" ? (q(), se(Hi, {
        key: 15,
        field: r.node.oembed
      }, null, 8, [
        "field"
      ])) : r.node.type === "hyperlink" ? (q(), se(qs, {
        key: 16,
        field: r.node.data,
        "link-resolver": r.linkResolver
      }, {
        default: $e(() => [
          Ae(r.$slots, "default")
        ]),
        _: 3
      }, 8, [
        "field",
        "link-resolver"
      ])) : r.node.type === "label" ? (q(), de("span", {
        key: 17,
        class: Vr(r.node.data.label)
      }, [
        Ae(r.$slots, "default")
      ], 2)) : (q(true), de(Se, {
        key: 18
      }, Qn(r.node.text.split(`
`), (o, i) => (q(), de(Se, {
        key: o
      }, [
        i > 0 ? (q(), de("br", m0)) : zt("", true),
        ar(Dt(o), 1)
      ], 64))), 128));
    }
  });
  g0 = he({
    name: "PrismicRichTextSerialize",
    __name: "PrismicRichTextSerialize",
    props: {
      components: {},
      children: {},
      linkResolver: {}
    },
    setup(e) {
      const t = {
        "list-item": "listItem",
        "o-list-item": "oListItem",
        "group-list-item": "list",
        "group-o-list-item": "oList"
      }, n = e;
      function r(s) {
        var o;
        return ((o = n.components) == null ? void 0 : o[t[s.type] || s.type]) || yc;
      }
      return (s, o) => {
        const i = li("PrismicRichTextSerialize", true);
        return q(true), de(Se, null, Qn(n.children, (a) => (q(), se(Ge(r(a)), {
          key: JSON.stringify(a),
          node: a.node,
          "link-resolver": r(a) === yc ? n.linkResolver : void 0
        }, {
          default: $e(() => [
            a.children.length ? (q(), se(i, {
              key: 0,
              children: a.children,
              components: s.components,
              "link-resolver": s.linkResolver
            }, null, 8, [
              "children",
              "components",
              "link-resolver"
            ])) : zt("", true)
          ]),
          _: 2
        }, 1032, [
          "node",
          "link-resolver"
        ]))), 128);
      };
    }
  });
  Ks = he({
    name: "PrismicRichText",
    __name: "PrismicRichText",
    props: {
      field: {
        type: Array
      },
      fallback: {
        type: [
          String,
          Object,
          Function
        ]
      },
      components: {
        type: Object
      },
      linkResolver: {
        type: Function
      },
      serializer: {
        type: [
          Object,
          Function
        ]
      },
      wrapper: {
        type: [
          String,
          Object,
          Function
        ]
      }
    },
    setup(e) {
      const t = e, { options: n } = ts(), r = Y(() => {
        var a;
        return t.components || ((a = n.components) == null ? void 0 : a.richTextComponents);
      }), s = Y(() => t.linkResolver || n.linkResolver), o = Y(() => Ud(t.field || []).children), i = Y(() => {
        var a;
        return t.components ? true : t.serializer ? false : (a = n.components) != null && a.richTextComponents ? true : !n.richTextSerializer;
      });
      return (a, l) => i.value && (ie(ur).richText(e.field) || e.fallback) ? (q(), se(_a, {
        key: 0,
        wrapper: e.wrapper
      }, {
        default: $e(() => [
          o.value.length ? (q(), se(g0, {
            key: 0,
            children: o.value,
            components: r.value,
            "link-resolver": s.value
          }, null, 8, [
            "children",
            "components",
            "link-resolver"
          ])) : (q(), se(Ge(e.fallback), {
            key: 1
          }))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : i.value ? zt("", true) : (q(), se(zw, {
        key: 1,
        field: e.field,
        fallback: typeof e.fallback == "string" ? e.fallback : void 0,
        "link-resolver": e.linkResolver,
        serializer: e.serializer,
        wrapper: e.wrapper
      }, null, 8, [
        "field",
        "fallback",
        "link-resolver",
        "serializer",
        "wrapper"
      ]));
    }
  });
  y0 = () => ({
    table: {
      type: Object,
      required: true
    }
  });
  v0 = () => ({
    head: {
      type: Object,
      required: true
    }
  });
  b0 = () => ({
    body: {
      type: Object,
      required: true
    }
  });
  _0 = () => ({
    row: {
      type: Object,
      required: true
    }
  });
  w0 = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  S0 = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  k0 = {
    table: he({
      props: y0(),
      setup(e, { slots: t }) {
        return () => pe("table", t.default ? t.default() : []);
      }
    }),
    thead: he({
      props: v0(),
      setup(e, { slots: t }) {
        return () => pe("thead", t.default ? t.default() : []);
      }
    }),
    tbody: he({
      props: b0(),
      setup(e, { slots: t }) {
        return () => pe("tbody", t.default ? t.default() : []);
      }
    }),
    tr: he({
      props: _0(),
      setup(e, { slots: t }) {
        return () => pe("tr", t.default ? t.default() : []);
      }
    }),
    th: he({
      props: w0(),
      setup(e, { slots: t }) {
        return () => pe("th", t.default ? t.default() : []);
      }
    }),
    td: he({
      props: S0(),
      setup(e, { slots: t }) {
        return () => pe("td", t.default ? t.default() : []);
      }
    })
  };
  vc = he({
    name: "PrismicTableRow",
    __name: "PrismicTableRow",
    props: {
      row: {},
      components: {}
    },
    setup(e) {
      const t = e;
      return (n, r) => (q(), se(Ge(t.components.tr), {
        row: n.row
      }, {
        default: $e(() => [
          (q(true), de(Se, null, Qn(n.row.cells, (s) => (q(), de(Se, {
            key: s.key
          }, [
            s.type === "header" ? (q(), se(Ge(t.components.th), {
              key: 0,
              cell: s
            }, {
              default: $e(() => [
                me(Ks, {
                  field: s.content,
                  components: n.components
                }, null, 8, [
                  "field",
                  "components"
                ])
              ]),
              _: 2
            }, 1032, [
              "cell"
            ])) : (q(), se(Ge(t.components.td), {
              key: 1,
              cell: s
            }, {
              default: $e(() => [
                me(Ks, {
                  field: s.content,
                  components: t.components
                }, null, 8, [
                  "field",
                  "components"
                ])
              ]),
              _: 2
            }, 1032, [
              "cell"
            ]))
          ], 64))), 128))
        ]),
        _: 1
      }, 8, [
        "row"
      ]));
    }
  });
  bc = he({
    name: "PrismicTable",
    __name: "PrismicTable",
    props: {
      field: {},
      fallback: {},
      components: {}
    },
    setup(e) {
      const t = e, n = Y(() => ({
        ...k0,
        ...t.components
      }));
      return (r, s) => ie(ur).table(r.field) ? (q(), se(Ge(n.value.table), zr({
        key: 0,
        table: r.field
      }, r.$attrs), {
        default: $e(() => [
          r.field.head ? (q(), se(Ge(n.value.thead), {
            key: 0,
            head: r.field.head
          }, {
            default: $e(() => [
              (q(true), de(Se, null, Qn(r.field.head.rows, (o) => (q(), se(vc, {
                key: o.key,
                row: o,
                components: n.value
              }, null, 8, [
                "row",
                "components"
              ]))), 128))
            ]),
            _: 1
          }, 8, [
            "head"
          ])) : zt("", true),
          (q(), se(Ge(n.value.tbody), {
            body: r.field.body
          }, {
            default: $e(() => [
              (q(true), de(Se, null, Qn(r.field.body.rows, (o) => (q(), se(vc, {
                key: o.key,
                row: o,
                components: n.value
              }, null, 8, [
                "row",
                "components"
              ]))), 128))
            ]),
            _: 1
          }, 8, [
            "body"
          ]))
        ]),
        _: 1
      }, 16, [
        "table"
      ])) : (q(), se(Ge(r.fallback), {
        key: 1
      }));
    }
  });
  E0 = () => null;
  _c = he({
    name: "SliceZone",
    __name: "SliceZone",
    props: {
      slices: {},
      components: {},
      defaultComponent: {},
      context: {},
      wrapper: {}
    },
    setup(e) {
      const t = e, { options: n } = ts(), r = Y(() => t.slices.map((s, o) => {
        var i, a;
        const l = "slice_type" in s ? s.slice_type : s.type, u = "id" in s && typeof s.id == "string" ? s.id : `${o}-${JSON.stringify(s)}`, c = ((i = t.components) == null ? void 0 : i[l]) || t.defaultComponent || ((a = n.components) == null ? void 0 : a.sliceZoneDefaultComponent);
        if (!c) return {
          is: E0,
          key: u,
          props: {
            slice: s
          }
        };
        if (s.__mapped) {
          const { __mapped: f, ...h } = s;
          return {
            is: c,
            key: u,
            props: h
          };
        }
        return {
          is: c,
          key: u,
          props: {
            slice: s,
            index: o,
            context: t.context,
            slices: t.slices
          }
        };
      }));
      return (s, o) => s.slices ? (q(), se(_a, {
        key: 0,
        wrapper: s.wrapper
      }, {
        default: $e(() => [
          (q(true), de(Se, null, Qn(r.value, (i) => (q(), se(Ge(i.is), zr({
            key: i.key,
            ref_for: true
          }, i.props), null, 16))), 128))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : zt("", true);
    }
  });
  wc = he({
    name: "PrismicText",
    __name: "PrismicText",
    props: {
      field: {},
      fallback: {},
      separator: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => ie(ur).richText(t.field) || t.fallback ? (q(), se(_a, {
        key: 0,
        wrapper: t.wrapper
      }, {
        default: $e(() => [
          ar(Dt(ie(Hd)(t.field) || t.fallback), 1)
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : zt("", true);
    }
  });
  T0 = (e) => {
    let t;
    return e.client ? t = e.client : t = dw(e.endpoint, e.clientConfig), {
      options: e,
      ...{
        client: t,
        filter: At,
        cookie: $_
      },
      ...{
        asText: Hd,
        asHTML: (o, ...i) => {
          const [a, l] = i;
          return Kd(o, typeof a == "function" || a == null ? {
            linkResolver: a || e.linkResolver,
            serializer: l || e.richTextSerializer
          } : {
            linkResolver: e.linkResolver,
            serializer: e.richTextSerializer,
            ...a
          });
        },
        asLink: (o, i) => bo(o, typeof i == "function" ? {
          linkResolver: i
        } : {
          linkResolver: e.linkResolver,
          ...i
        }),
        asLinkAttrs: (o, i) => jd(o, {
          linkResolver: e.linkResolver,
          ...i
        }),
        asDate: Aw,
        asImageSrc: qw,
        asImageWidthSrcSet: Gd,
        asImagePixelDensitySrcSet: zd,
        isFilled: ur,
        documentToLinkField: Id
      },
      install(o) {
        o.provide(Jd, this), o.config.globalProperties.$prismic = this, e.injectComponents !== false && (o.component(qs.name, qs), o.component(Hi.name, Hi), o.component(Ws.name, Ws), o.component(bc.name, bc), o.component(wc.name, wc), o.component(Ks.name, Ks), o.component(_c.name, _c));
      }
    };
  };
  R0 = void 0;
  C0 = void 0;
  P0 = void 0;
  A0 = void 0;
  x0 = void 0;
  O0 = void 0;
  L0 = Ie({
    name: "prismic:setup",
    parallel: true,
    async setup(e) {
      var _a2;
      const t = bn().public.prismic;
      let n;
      n = R0;
      const r = t.environment || t.endpoint || (n == null ? void 0 : n.documentAPIEndpoint) || "", s = T0({
        ...t,
        endpoint: r,
        client: n,
        linkResolver: C0,
        richTextSerializer: P0,
        injectComponents: false,
        components: {
          linkInternalComponent: Ni,
          linkExternalComponent: Ni,
          ...t.components,
          linkRel: A0,
          richTextComponents: x0,
          sliceZoneDefaultComponent: O0
        }
      });
      if (e.vueApp.use(s), t.preview) {
        const o = tc("io.prismic.preview").value;
        if (o) try {
          const i = typeof o == "string" ? JSON.parse(decodeURIComponent(o)) : o;
          if (Object.keys(i).some((a) => a in i && typeof i[a] == "object" && i[a] !== null && "preview" in i[a] && i[a].preview)) {
            let a = false;
            lr(() => {
              a || $i();
            }), Ne().afterEach(() => {
              a = true, $i();
            });
          }
        } catch (i) {
          console.warn("Failed to parse Prismic preview cookie", i);
        }
      }
      return t.toolbar && ((_a2 = s.client) == null ? void 0 : _a2.repositoryName) ? Zf({
        script: [
          {
            key: "prismic-preview",
            src: `https://static.cdn.prismic.io/prismic.min.js?repo=${s.client.repositoryName}&new=true`,
            async: true,
            defer: true,
            crossorigin: "anonymous"
          }
        ]
      }) : tc("io.prismic.preview").value = null, {
        provide: {
          prismic: s
        }
      };
    }
  });
  M0 = Ie(() => {
  });
  var Sc = (e, t, n) => typeof e == "function" ? e(t, n) : e, kt = Symbol("loaders"), Zo = Symbol("loaderEntries"), I0 = Symbol(), kn = Symbol(), kc = Symbol(), ws = Symbol(), ei = Symbol(), $0 = Symbol();
  function Ec(e) {
    return e && e[I0];
  }
  function Tc(e) {
    e && e.length;
  }
  var N0 = Object.assign, B0 = Symbol();
  function D0({ router: e, app: t, effect: n, isSSR: r, errors: s = [], selectNavigationResult: o = (i) => i[0].value }) {
    if (e[Zo] != null) return () => {
    };
    e[Zo] = /* @__PURE__ */ new WeakMap(), e[kc] = t, e[$0] = !!r;
    const i = n.run(() => ut(false));
    t.provide(B0, i);
    const a = e.beforeEach((f) => {
      var _a2;
      e[kn] && ((_a2 = e[kn].meta[ws]) == null ? void 0 : _a2.abort()), e[kn] = f, f.meta[kt] = /* @__PURE__ */ new Set(), f.meta[ws] = new AbortController(), f.meta[ei] = [];
      const h = [];
      for (const d of f.matched) if (!d.meta[kt]) {
        d.meta[kt] = new Set(d.meta.loaders || []);
        for (const p in d.components) {
          const y = d.components[p], S = (j0(y) ? y() : Promise.resolve(y)).then((k) => {
            if (typeof k != "function") {
              for (const _ in k) {
                const m = k[_];
                Ec(m) && d.meta[kt].add(m);
              }
              if (Array.isArray(k.__loaders)) for (const _ of k.__loaders) Ec(_) && d.meta[kt].add(_);
            }
          });
          h.push(S);
        }
      }
      return Promise.all(h).then(() => {
        for (const d of f.matched) for (const p of d.meta[kt]) f.meta[kt].add(p);
      });
    }), l = e.beforeResolve((f, h) => {
      const d = Array.from(f.meta[kt]);
      return Tc([]), i.value = true, Promise.all(d.map((p) => {
        const { server: y, lazy: S, errors: k } = p._.options;
        if (!y && r) return;
        const _ = n.run(() => t.runWithContext(() => p._.load(f, e, h)));
        return !r && Sc(S, f, h) ? void 0 : _.catch((m) => {
          if (!k) throw m;
          if (k === true) {
            if (Array.isArray(s) ? s.some((v) => m instanceof v) : s(m)) return;
          } else if (Array.isArray(k) ? k.some((v) => m instanceof v) : k(m)) return;
          throw m;
        });
      })).then(() => {
        if (f.meta[ei].length) return o(f.meta[ei]);
      }).catch((p) => p instanceof H0 ? p.value : Promise.reject(p)).finally(() => {
        Tc([]), i.value = false;
      });
    }), u = e.afterEach((f, h, d) => {
      var _a2;
      if (d) {
        if ((_a2 = f.meta[ws]) == null ? void 0 : _a2.abort(d), Tt(d, 16)) for (const p of f.meta[kt]) p._.getEntry(e).resetPending();
      } else for (const p of f.meta[kt]) {
        const { commit: y, lazy: S } = p._.options;
        if (y === "after-load") {
          const k = p._.getEntry(e);
          k && (!Sc(S, f, h) || !k.isLoading.value) && k.commit(f);
        }
      }
      e[kn] === f && (e[kn] = null);
    }), c = e.onError((f, h) => {
      var _a2;
      (_a2 = h.meta[ws]) == null ? void 0 : _a2.abort(f), e[kn] === h && (e[kn] = null);
    });
    return () => {
      delete e[Zo], delete e[kc], a(), l(), u(), c();
    };
  }
  function j0(e) {
    return typeof e == "function" && !("displayName" in e) && !("props" in e) && !("emits" in e) && !("__vccOpts" in e);
  }
  var H0 = class {
    constructor(e) {
      this.value = e;
    }
  };
  function F0(e, t) {
    const n = Wr(true), r = D0(N0({
      app: e,
      effect: n
    }, t)), { unmount: s } = e;
    e.unmount = () => {
      n.stop(), r(), s.call(e);
    };
  }
  const U0 = Ie({
    name: "data-loaders",
    dependsOn: [
      "nuxt:router"
    ],
    setup(e) {
      e.vueApp.use(F0, {
        router: e.vueApp.config.globalProperties.$router,
        isSSR: false
      });
    }
  }), V0 = [
    zy,
    Db,
    jb,
    Wb,
    t_,
    s_,
    o_,
    i_,
    a_,
    l_,
    c_,
    u_,
    f_,
    d_,
    m_,
    A_,
    x_,
    L0,
    M0,
    U0
  ], Qd = (e = "RouteProvider") => he({
    name: e,
    props: {
      vnode: {
        type: Object,
        required: true
      },
      route: {
        type: Object,
        required: true
      },
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean
    },
    setup(t) {
      const n = t.renderKey, r = t.route, s = {};
      for (const o in t.route) Object.defineProperty(s, o, {
        get: () => n === t.renderKey ? t.route[o] : r[o],
        enumerable: true
      });
      return dn(Jr, Ft(s)), () => pe(t.vnode, {
        ref: t.vnodeRef
      });
    }
  }), W0 = Qd(), Rc = /* @__PURE__ */ new WeakMap(), q0 = he({
    name: "NuxtPage",
    inheritAttrs: false,
    props: {
      name: {
        type: String
      },
      transition: {
        type: [
          Boolean,
          Object
        ],
        default: void 0
      },
      keepalive: {
        type: [
          Boolean,
          Object
        ],
        default: void 0
      },
      route: {
        type: Object
      },
      pageKey: {
        type: [
          Function,
          String
        ],
        default: null
      }
    },
    setup(e, { attrs: t, slots: n, expose: r }) {
      const s = ye(), o = Re(), i = Te(Jr, null);
      let a;
      r({
        pageRef: o
      });
      const l = Te(Bf, null);
      let u;
      const c = s.deferHydration();
      if (s.isHydrating) {
        const h = s.hooks.hookOnce("app:error", c);
        Ne().beforeEach(h);
      }
      e.pageKey && Qe(() => e.pageKey, (h, d) => {
        h !== d && s.callHook("page:loading:start");
      });
      let f = false;
      {
        const h = Ne().beforeResolve(() => {
          f = false;
        });
        Ln(() => {
          h();
        });
      }
      return () => pe(wd, {
        name: e.name,
        route: e.route,
        ...t
      }, {
        default: (h) => {
          const d = G0(i, h.route, h.Component), p = i && i.matched.length === h.route.matched.length;
          if (!h.Component) {
            if (u && !p) return u;
            c();
            return;
          }
          if (u && l && !l.isCurrent(h.route)) return u;
          if (d && i && (!l || (l == null ? void 0 : l.isCurrent(i)))) return p ? u : null;
          const y = Bi(h, e.pageKey), S = z0(i, h.route, h.Component);
          !s.isHydrating && a === y && !S && Mt(() => {
            f = true, s.callHook("page:loading:end");
          }), a = y;
          const k = !!(e.transition ?? h.route.meta.pageTransition ?? hl), _ = k && K0([
            e.transition,
            h.route.meta.pageTransition,
            hl,
            {
              onBeforeLeave() {
                s._runningTransition = true;
              },
              onAfterLeave() {
                delete s._runningTransition, s.callHook("page:transition:finish", h.Component);
              }
            }
          ]), m = e.keepalive ?? h.route.meta.keepalive ?? Mg;
          return u = Sd(k && _, Jb(m, pe(ta, {
            suspensible: true,
            onPending: () => s.callHook("page:start", h.Component),
            onResolve: () => {
              Mt(() => s.callHook("page:finish", h.Component).then(() => {
                if (!f && !S) return f = true, s.callHook("page:loading:end");
              }).finally(c));
            }
          }, {
            default: () => {
              const v = {
                key: y || void 0,
                vnode: n.default ? J0(n.default, h) : h.Component,
                route: h.route,
                renderKey: y || void 0,
                trackRootNodes: k,
                vnodeRef: o
              };
              if (!m) return pe(W0, v);
              const w = h.Component.type, A = w;
              let M = Rc.get(A);
              return M || (M = Qd(w.name || w.__name), Rc.set(A, M)), pe(M, v);
            }
          }))).default(), u;
        }
      });
    }
  });
  function K0(e) {
    const t = e.filter(Boolean).map((n) => ({
      ...n,
      onAfterLeave: n.onAfterLeave ? ma(n.onAfterLeave) : void 0
    }));
    return $f(...t);
  }
  function G0(e, t, n) {
    if (!e) return false;
    const r = t.matched.findIndex((s) => {
      var _a2;
      return ((_a2 = s.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    });
    return !r || r === -1 ? false : t.matched.slice(0, r).some((s, o) => {
      var _a2, _b2, _c2;
      return ((_a2 = s.components) == null ? void 0 : _a2.default) !== ((_c2 = (_b2 = e.matched[o]) == null ? void 0 : _b2.components) == null ? void 0 : _c2.default);
    }) || n && Bi({
      route: t,
      Component: n
    }) !== Bi({
      route: e,
      Component: n
    });
  }
  function z0(e, t, n) {
    return e ? t.matched.findIndex((s) => {
      var _a2;
      return ((_a2 = s.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    }) < t.matched.length - 1 : false;
  }
  function J0(e, t) {
    const n = e(t);
    return n.length === 1 ? pe(n[0]) : pe(Se, void 0, n);
  }
  let Q0;
  Y0 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t) n[r] = s;
    return n;
  };
  Q0 = {};
  function X0(e, t, n, r, s, o) {
    const i = q0;
    return q(), de("div", null, [
      me(i)
    ]);
  }
  let Z0, eS, tS, rS;
  Z0 = Y0(Q0, [
    [
      "render",
      X0
    ]
  ]);
  eS = he({
    name: "LayoutLoader",
    inheritAttrs: false,
    props: {
      name: String,
      layoutProps: Object
    },
    setup(e, t) {
      return () => pe(cn[e.name], e.layoutProps, t.slots);
    }
  });
  tS = {
    name: {
      type: [
        String,
        Boolean,
        Object
      ],
      default: null
    },
    fallback: {
      type: [
        String,
        Object
      ],
      default: null
    }
  };
  nS = he({
    name: "NuxtLayout",
    inheritAttrs: false,
    props: tS,
    setup(e, t) {
      const n = ye(), r = Te(Jr), s = r === po() ? ab() : r, o = Y(() => {
        let l = ie(e.name) ?? s.meta.layout ?? "default";
        return l && !(l in cn) && e.fallback && (l = ie(e.fallback)), l;
      }), i = Re();
      t.expose({
        layoutRef: i
      });
      const a = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", a);
        Ne().beforeEach(l);
      }
      return () => {
        const l = o.value && o.value in cn, u = s.meta.layoutTransition ?? Og;
        return Sd(l && u, {
          default: () => pe(ta, {
            suspensible: true,
            onResolve: () => {
              Mt(a);
            }
          }, {
            default: () => pe(rS, {
              layoutProps: zr(t.attrs, {
                ref: i
              }),
              key: o.value || void 0,
              name: o.value,
              shouldProvide: !e.name,
              hasTransition: !!u
            }, t.slots)
          })
        }).default();
      };
    }
  });
  rS = he({
    name: "NuxtLayoutProvider",
    inheritAttrs: false,
    props: {
      name: {
        type: [
          String,
          Boolean
        ]
      },
      layoutProps: {
        type: Object
      },
      hasTransition: {
        type: Boolean
      },
      shouldProvide: {
        type: Boolean
      }
    },
    setup(e, t) {
      const n = e.name;
      return e.shouldProvide && dn(Bf, {
        isCurrent: (r) => n === (r.meta.layout ?? "default")
      }), () => {
        var _a2, _b2;
        return !n || typeof n == "string" && !(n in cn) ? (_b2 = (_a2 = t.slots).default) == null ? void 0 : _b2.call(_a2) : pe(eS, {
          key: n,
          layoutProps: e.layoutProps,
          name: n
        }, t.slots);
      };
    }
  });
  var sS = {};
  const oS = {
    "bg-neutral-100": "",
    "f-pt-2xl": ""
  }, iS = {
    "f-mt-lg": "",
    flex: "~ md:justify-center"
  }, aS = {
    "nq-prose-compact": "",
    "w-full": "",
    "f-mt-lg": ""
  }, lS = {
    bg: "red/10",
    "text-red-1100": "",
    "outline-red-600": ""
  }, cS = {
    bg: "red/10",
    "mt-4": "",
    "text-red-1100": "",
    "outline-red-600": ""
  }, uS = he({
    __name: "error",
    props: {
      error: {}
    },
    setup(e) {
      const t = e, n = Y(() => t.error.statusCode || 404), r = Y(() => {
        if (t.error.statusMessage) return t.error.statusMessage;
        switch (n.value) {
          case 404:
            return "Page not found";
          case 403:
            return "Access denied";
          case 500:
            return "Something went wrong";
          case 503:
            return "Service temporarily unavailable";
          default:
            return "Something went wrong";
        }
      }), s = po(), o = Ne(), i = Y(() => s.path.startsWith("/developer") || s.path.startsWith("/developers") || s.path.includes("/dev/") || s.path.includes("/docs/")), a = Y(() => t.error.message === "Article not found"), l = Y(() => s.path.startsWith("/blog") || a.value);
      vt(() => {
        if (i.value || sS.REDIRECT_ALL_ERRORS === "true") {
          const y = encodeURIComponent(s.fullPath);
          o.push(`/developers/error?original-path=${y}&status=${n.value}`);
        }
      });
      const u = Y(() => l.value ? "/blog" : "/"), c = Y(() => l.value ? "Browse all articles" : "Back to home"), f = () => jf({
        redirect: u.value
      });
      Zf({
        title: a.value ? "Article not found | Nimiq Blog" : `${n.value} - ${r.value} | Nimiq`,
        meta: [
          {
            name: "robots",
            content: "noindex, nofollow"
          }
        ]
      });
      const h = Y(() => a.value ? "Article not found" : `${n.value} - ${r.value}`), d = Y(() => {
        if (a.value) return "We couldn't find the article you're looking for. It may have been moved, renamed, or is not available.";
        switch (n.value) {
          case 404:
            return "We couldn't find the page you were looking for. It might have been moved or doesn't exist.";
          case 403:
            return "You don't have permission to access this page.";
          case 500:
            return "Something went wrong on our end. Please try again later.";
          case 503:
            return "Service temporarily unavailable. Please try again later.";
          default:
            return "We encountered a problem while trying to load this page. Please try again later.";
        }
      }), p = t.error.stack;
      return delete t.error.stack, (y, S) => {
        const k = Ni, _ = nS;
        return q(), se(_, null, {
          default: $e(() => [
            nt("section", oS, [
              nt("h1", null, Dt(ie(h)), 1),
              nt("p", null, Dt(ie(d)), 1),
              nt("div", iS, [
                me(k, {
                  to: ie(u),
                  "nq-arrow": "",
                  "nq-pill-lg": "",
                  "nq-pill-blue": "",
                  onClick: f
                }, {
                  default: $e(() => [
                    ar(Dt(ie(c)), 1)
                  ]),
                  _: 1
                }, 8, [
                  "to"
                ])
              ]),
              nt("div", aS, [
                nt("details", null, [
                  S[0] || (S[0] = nt("summary", {
                    "w-full": "",
                    "cursor-pointer": "",
                    text: "center neutral-800"
                  }, [
                    nt("span", null, "Details")
                  ], -1)),
                  nt("pre", lS, Dt(y.error), 1),
                  S[1] || (S[1] = nt("span", {
                    "text-red-1100": "",
                    "nq-label": "",
                    "f-px-sm": "",
                    "f-mt-md": ""
                  }, "Stack", -1)),
                  nt("pre", cS, Dt(ie(p)), 1)
                ])
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  }), fS = {
    key: 0
  }, Cc = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null, n = ye(), r = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", r);
        Ne().beforeEach(l);
      }
      const s = false;
      dn(Jr, po()), n.hooks.callHookWith((l) => l.map((u) => u()), "vue:setup");
      const o = mo(), i = false;
      Su((l, u, c) => {
        if (n.hooks.callHook("vue:error", l, u, c).catch((f) => console.error("[nuxt] Error in `vue:error` hook", f)), Hf(l) && (l.fatal || l.unhandled)) return n.runWithContext(() => Tn(l)), false;
      });
      const a = false;
      return (l, u) => (q(), se(ta, {
        onResolve: ie(r)
      }, {
        default: $e(() => [
          ie(i) ? (q(), de("div", fS)) : ie(o) ? (q(), se(ie(uS), {
            key: 1,
            error: ie(o)
          }, null, 8, [
            "error"
          ])) : ie(a) ? (q(), se(ie(t), {
            key: 2,
            context: ie(a)
          }, null, 8, [
            "context"
          ])) : ie(s) ? (q(), se(Ge(ie(s)), {
            key: 3
          })) : (q(), se(ie(Z0), {
            key: 4
          }))
        ]),
        _: 1
      }, 8, [
        "onResolve"
      ]));
    }
  };
  let Pc;
  {
    let e;
    Pc = async function() {
      var _a2, _b2;
      if (e) return e;
      const n = !!(((_a2 = window.__NUXT__) == null ? void 0 : _a2.serverRendered) ?? ((_b2 = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b2.dataset.ssr) === "true"), r = n ? Rm(Cc) : Tm(Cc), s = jg({
        vueApp: r
      });
      async function o(i) {
        var _a3;
        await s.callHook("app:error", i), (_a3 = s.payload).error || (_a3.error = hn(i));
      }
      r.config.errorHandler = o, s.hook("app:suspense:resolve", () => {
        r.config.errorHandler === o && (r.config.errorHandler = void 0);
      }), !n && pl.id && s.hook("app:suspense:resolve", () => {
        var _a3;
        (_a3 = document.getElementById(pl.id)) == null ? void 0 : _a3.remove();
      });
      try {
        await Ug(s, V0);
      } catch (i) {
        o(i);
      }
      try {
        await s.hooks.callHook("app:created", r), await s.hooks.callHook("app:beforeMount", r), r.mount(Ng), await s.hooks.callHook("app:mounted", r), await Mt();
      } catch (i) {
        o(i);
      }
      return r;
    }, e = Pc().catch((t) => {
      throw console.error("Error while mounting app:", t), t;
    });
  }
})();
export {
  xS as $,
  DS as A,
  Re as B,
  wc as C,
  Ws as D,
  vt as E,
  Se as F,
  io as G,
  pe as H,
  Kn as I,
  Ia as J,
  an as K,
  Qe as L,
  ye as M,
  Kt as N,
  pn as O,
  ut as P,
  Xf as Q,
  Ae as R,
  Mc as S,
  Qu as T,
  Mh as U,
  Sp as V,
  OS as W,
  pS as X,
  qs as Y,
  yS as Z,
  Ni as _,
  __tla,
  me as a,
  So as a$,
  Xe as a0,
  Mt as a1,
  Ln as a2,
  Qp as a3,
  US as a4,
  _b as a5,
  RS as a6,
  _S as a7,
  kS as a8,
  Ne as a9,
  ra as aA,
  Sf as aB,
  $S as aC,
  Qm as aD,
  jm as aE,
  MS as aF,
  vS as aG,
  Hd as aH,
  pw as aI,
  qw as aJ,
  _o as aK,
  bo as aL,
  va as aM,
  Aw as aN,
  ir as aO,
  tu as aP,
  ro as aQ,
  Xi as aR,
  so as aS,
  dS as aT,
  ot as aU,
  SS as aV,
  bS as aW,
  Oe as aX,
  bt as aY,
  Wr as aZ,
  mS as a_,
  hS as aa,
  AS as ab,
  we as ac,
  At as ad,
  lr as ae,
  cy as af,
  BS as ag,
  FS as ah,
  sv as ai,
  It as aj,
  Ge as ak,
  kp as al,
  ES as am,
  Bp as an,
  re as ao,
  dn as ap,
  Te as aq,
  Tm as ar,
  gS as as,
  jS as at,
  rt as au,
  TS as av,
  $f as aw,
  IS as ax,
  $t as ay,
  ho as az,
  se as b,
  ab as b0,
  HS as b1,
  Il as b2,
  NS as b3,
  xc as b4,
  CS as b5,
  Xg as b6,
  Ks as b7,
  PS as b8,
  LS as b9,
  de as c,
  he as d,
  nt as e,
  zt as f,
  ar as g,
  Xs as h,
  Y0 as i,
  Y as j,
  Zf as k,
  nS as l,
  zr as m,
  Vr as n,
  q as o,
  po as p,
  bn as q,
  Qn as r,
  ts as s,
  Dt as t,
  ie as u,
  wS as v,
  $e as w,
  hn as x,
  VS as y,
  _c as z
};
