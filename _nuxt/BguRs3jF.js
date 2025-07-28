const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./onepager.BMUVdREQ.css","./DdNtdfJ-.js","./DJp7Yxf2.js","./CrnXQicC.js","./BNXriZyS.js","./T2yBj71G.js","./DSbx5aGI.js","./C8aoRHDt.js","./BIPleKtX.js","./CMmzeBWC.js","./Tooltip.6qo_YfJI.css","./Cn5kCPLx.js","./DeSMYd_K.js","./roadmap.D5eBsHDI.css","./C3l1wAaQ.js","./L_1B5uKx.js","./BHoc60Y9.js","./Ba9NVTdI.js","./D0RLG1u9.js","./C2NnffCY.js","./vPo95uWa.js","./BghiwBAd.js","./BPogp8AH.js","./CwbeRH5k.js","./_post_.Bq3qrgvB.css","./C86ykKnc.js","./CqkleIqs.js","./B-kq_RgX.js","./zCRcNgXc.js","./D0DW2WUk.js","./Blockchain.BxxfcmTf.css","./3t-UtUoh.js","./Dvca-oHQ.js","./Ba6ZbKEs.js","./CbA0xmEM.js","./B32zcr7a.js","./CHIgUVhi.js","./qA1gjzOk.js","./B-0a4KEb.js","./QoFfB0oT.js","./BDcJzeBR.js","./ybb453Wh.js","./default.DSKO0rLl.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
let eE, Oc, cd, He, Lc, Qo, we, St, fs, he, Qn, qa, mn, me, Zt, On, Ue, pr, xe, Vc, cf, qp, Zu, hE, QS, at, Xo, Hi, ge, Ld, pE, tt, wt, Nn, lm, Te, Kt, tE, Lu, fh, Ke, lE, ha, ag, Tt, ys, vs, gE, Ym, Xd, Uw, b0, ks, Es, Aa, r0, ur, du, cs, ta, Yr, JS, ct, sE, nE, XS, Rs, sa, Ce, lt, SE, jd, cE, rE, iE, Ie, Zo, YS, dE, Se, $t, hr, wE, _v, kt, Je, $h, aE, zh, ie, Nm, ZS, vE, oe, _E, uE, ly, ql, yE, bE, fE, mE, de, pe, st, tn, fr, os, MS, K, bs, jS, eo, Jr, q, Bn, Dt, nr, io, Ht, re, oE, $e, _n, Ra, EE;
let __tla = (async () => {
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
      for (const s of o) if (s.type === "childList") for (const i of s.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(o) {
      const s = {};
      return o.integrity && (s.integrity = o.integrity), o.referrerPolicy && (s.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? s.credentials = "include" : o.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
    }
    function r(o) {
      if (o.ep) return;
      o.ep = true;
      const s = n(o);
      fetch(o.href, s);
    }
  })();
  function Ki(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  let ae, Gn, Bt, up, zr, Gi, Pe, zi, fp, ue, G, zn, es, $a, dp, te, Ee, bt, ye, Ji, Fc, lr, pp, Hc, Yi, Jn, ts, hp, mp, Xt, ns, Ge, Yn, Uc, ii, Wc;
  ae = {};
  Gn = [];
  Bt = () => {
  };
  up = () => false;
  zr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
  Gi = (e) => e.startsWith("onUpdate:");
  Pe = Object.assign;
  zi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  fp = Object.prototype.hasOwnProperty;
  ue = (e, t) => fp.call(e, t);
  G = Array.isArray;
  zn = (e) => lr(e) === "[object Map]";
  es = (e) => lr(e) === "[object Set]";
  $a = (e) => lr(e) === "[object Date]";
  dp = (e) => lr(e) === "[object RegExp]";
  te = (e) => typeof e == "function";
  Ee = (e) => typeof e == "string";
  bt = (e) => typeof e == "symbol";
  ye = (e) => e !== null && typeof e == "object";
  Ji = (e) => (ye(e) || te(e)) && te(e.then) && te(e.catch);
  Fc = Object.prototype.toString;
  lr = (e) => Fc.call(e);
  pp = (e) => lr(e).slice(8, -1);
  Hc = (e) => lr(e) === "[object Object]";
  Yi = (e) => Ee(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  Jn = Ki(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  ts = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  hp = /-(\w)/g;
  ct = ts((e) => e.replace(hp, (t, n) => n ? n.toUpperCase() : ""));
  mp = /\B([A-Z])/g;
  Xt = ts((e) => e.replace(mp, "-$1").toLowerCase());
  ns = ts((e) => e.charAt(0).toUpperCase() + e.slice(1));
  Rs = ts((e) => e ? `on${ns(e)}` : "");
  Ge = (e, t) => !Object.is(e, t);
  Yn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  };
  Uc = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  };
  ii = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  Wc = (e) => {
    const t = Ee(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Ia;
  const rs = () => Ia || (Ia = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  os = function(e) {
    if (G(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = Ee(r) ? bp(r) : os(r);
        if (o) for (const s in o) t[s] = o[s];
      }
      return t;
    } else if (Ee(e) || ye(e)) return e;
  };
  const gp = /;(?![^(]*\))/g, yp = /:([^]+)/, vp = /\/\*[^]*?\*\//g;
  function bp(e) {
    const t = {};
    return e.replace(vp, "").split(gp).forEach((n) => {
      if (n) {
        const r = n.split(yp);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  Jr = function(e) {
    let t = "";
    if (Ee(e)) t = e;
    else if (G(e)) for (let n = 0; n < e.length; n++) {
      const r = Jr(e[n]);
      r && (t += r + " ");
    }
    else if (ye(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  Vc = function(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !Ee(t) && (e.class = Jr(t)), n && (e.style = os(n)), e;
  };
  const _p = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wp = Ki(_p);
  function qc(e) {
    return !!e || e === "";
  }
  function Sp(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let r = 0; n && r < e.length; r++) n = tr(e[r], t[r]);
    return n;
  }
  function tr(e, t) {
    if (e === t) return true;
    let n = $a(e), r = $a(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : false;
    if (n = bt(e), r = bt(t), n || r) return e === t;
    if (n = G(e), r = G(t), n || r) return n && r ? Sp(e, t) : false;
    if (n = ye(e), r = ye(t), n || r) {
      if (!n || !r) return false;
      const o = Object.keys(e).length, s = Object.keys(t).length;
      if (o !== s) return false;
      for (const i in e) {
        const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
        if (a && !l || !a && l || !tr(e[i], t[i])) return false;
      }
    }
    return String(e) === String(t);
  }
  function Kc(e, t) {
    return e.findIndex((n) => tr(n, t));
  }
  let Gc, zc, Cs;
  Gc = (e) => !!(e && e.__v_isRef === true);
  Ht = (e) => Ee(e) ? e : e == null ? "" : G(e) || ye(e) && (e.toString === Fc || !te(e.toString)) ? Gc(e) ? Ht(e.value) : JSON.stringify(e, zc, 2) : String(e);
  zc = (e, t) => Gc(t) ? zc(e, t.value) : zn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], s) => (n[Cs(r, s) + " =>"] = o, n), {})
  } : es(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Cs(n))
  } : bt(t) ? Cs(t) : ye(t) && !G(t) && !Hc(t) ? String(t) : t;
  Cs = (e, t = "") => {
    var n;
    return bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let De;
  class Jc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = De, !t && De && (this.index = (De.scopes || (De.scopes = [])).push(this) - 1);
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
        const n = De;
        try {
          return De = this, t();
        } finally {
          De = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = De, De = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (De = this.prevScope, this.prevScope = void 0);
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
          const o = this.parent.scopes.pop();
          o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  Yr = function(e) {
    return new Jc(e);
  };
  Zt = function() {
    return De;
  };
  On = function(e, t = false) {
    De && De.cleanups.push(e);
  };
  let _e;
  const Ps = /* @__PURE__ */ new WeakSet();
  class Yc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && De.active && De.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ps.has(this) && (Ps.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Na(this), Zc(this);
      const t = _e, n = vt;
      _e = this, vt = true;
      try {
        return this.fn();
      } finally {
        eu(this), _e = t, vt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Zi(t);
        this.deps = this.depsTail = void 0, Na(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      ai(this) && this.run();
    }
    get dirty() {
      return ai(this);
    }
  }
  let Qc = 0, Rr, Cr;
  function Xc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Cr, Cr = e;
      return;
    }
    e.next = Rr, Rr = e;
  }
  function Qi() {
    Qc++;
  }
  function Xi() {
    if (--Qc > 0) return;
    if (Cr) {
      let t = Cr;
      for (Cr = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Rr; ) {
      let t = Rr;
      for (Rr = void 0; t; ) {
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
  function Zc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function eu(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), Zi(r), Ep(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function ai(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (tu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function tu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Br) || (e.globalVersion = Br, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ai(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = _e, r = vt;
    _e = e, vt = true;
    try {
      Zc(e);
      const o = e.fn(e._value);
      (t.version === 0 || Ge(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      _e = n, vt = r, eu(e), e.flags &= -3;
    }
  }
  function Zi(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let s = n.computed.deps; s; s = s.nextDep) Zi(s, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Ep(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let vt = true;
  const nu = [];
  function zt() {
    nu.push(vt), vt = false;
  }
  function Jt() {
    const e = nu.pop();
    vt = e === void 0 ? true : e;
  }
  function Na(e) {
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
  let Br = 0;
  class kp {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class ss {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!_e || !vt || _e === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== _e) n = this.activeLink = new kp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, ru(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = _e.depsTail, n.nextDep = void 0, _e.depsTail.nextDep = n, _e.depsTail = n, _e.deps === n && (_e.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, Br++, this.notify(t);
    }
    notify(t) {
      Qi();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Xi();
      }
    }
  }
  function ru(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) ru(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const $o = /* @__PURE__ */ new WeakMap(), Pn = Symbol(""), li = Symbol(""), Dr = Symbol("");
  function je(e, t, n) {
    if (vt && _e) {
      let r = $o.get(e);
      r || $o.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new ss()), o.map = r, o.key = n), o.track();
    }
  }
  function Ut(e, t, n, r, o, s) {
    const i = $o.get(e);
    if (!i) {
      Br++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if (Qi(), t === "clear") i.forEach(a);
    else {
      const l = G(e), u = l && Yi(n);
      if (l && n === "length") {
        const c = Number(r);
        i.forEach((f, p) => {
          (p === "length" || p === Dr || !bt(p) && p >= c) && a(f);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Dr)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Pn)), zn(e) && a(i.get(li)));
          break;
        case "delete":
          l || (a(i.get(Pn)), zn(e) && a(i.get(li)));
          break;
        case "set":
          zn(e) && a(i.get(Pn));
          break;
      }
    }
    Xi();
  }
  function Tp(e, t) {
    const n = $o.get(e);
    return n && n.get(t);
  }
  function Fn(e) {
    const t = ie(e);
    return t === e ? t : (je(t, "iterate", Dr), pt(e) ? t : t.map(Ne));
  }
  function is(e) {
    return je(e = ie(e), "iterate", Dr), e;
  }
  const Rp = {
    __proto__: null,
    [Symbol.iterator]() {
      return As(this, Symbol.iterator, Ne);
    },
    concat(...e) {
      return Fn(this).concat(...e.map((t) => G(t) ? Fn(t) : t));
    },
    entries() {
      return As(this, "entries", (e) => (e[1] = Ne(e[1]), e));
    },
    every(e, t) {
      return jt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return jt(this, "filter", e, t, (n) => n.map(Ne), arguments);
    },
    find(e, t) {
      return jt(this, "find", e, t, Ne, arguments);
    },
    findIndex(e, t) {
      return jt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return jt(this, "findLast", e, t, Ne, arguments);
    },
    findLastIndex(e, t) {
      return jt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return jt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return xs(this, "includes", e);
    },
    indexOf(...e) {
      return xs(this, "indexOf", e);
    },
    join(e) {
      return Fn(this).join(e);
    },
    lastIndexOf(...e) {
      return xs(this, "lastIndexOf", e);
    },
    map(e, t) {
      return jt(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return vr(this, "pop");
    },
    push(...e) {
      return vr(this, "push", e);
    },
    reduce(e, ...t) {
      return Ba(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ba(this, "reduceRight", e, t);
    },
    shift() {
      return vr(this, "shift");
    },
    some(e, t) {
      return jt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return vr(this, "splice", e);
    },
    toReversed() {
      return Fn(this).toReversed();
    },
    toSorted(e) {
      return Fn(this).toSorted(e);
    },
    toSpliced(...e) {
      return Fn(this).toSpliced(...e);
    },
    unshift(...e) {
      return vr(this, "unshift", e);
    },
    values() {
      return As(this, "values", Ne);
    }
  };
  function As(e, t, n) {
    const r = is(e), o = r[t]();
    return r !== e && !pt(e) && (o._next = o.next, o.next = () => {
      const s = o._next();
      return s.value && (s.value = n(s.value)), s;
    }), o;
  }
  const Cp = Array.prototype;
  function jt(e, t, n, r, o, s) {
    const i = is(e), a = i !== e && !pt(e), l = i[t];
    if (l !== Cp[t]) {
      const f = l.apply(e, s);
      return a ? Ne(f) : f;
    }
    let u = n;
    i !== e && (a ? u = function(f, p) {
      return n.call(this, Ne(f), p, e);
    } : n.length > 2 && (u = function(f, p) {
      return n.call(this, f, p, e);
    }));
    const c = l.call(i, u, r);
    return a && o ? o(c) : c;
  }
  function Ba(e, t, n, r) {
    const o = is(e);
    let s = n;
    return o !== e && (pt(e) ? n.length > 3 && (s = function(i, a, l) {
      return n.call(this, i, a, l, e);
    }) : s = function(i, a, l) {
      return n.call(this, i, Ne(a), l, e);
    }), o[t](s, ...r);
  }
  function xs(e, t, n) {
    const r = ie(e);
    je(r, "iterate", Dr);
    const o = r[t](...n);
    return (o === -1 || o === false) && ea(n[0]) ? (n[0] = ie(n[0]), r[t](...n)) : o;
  }
  function vr(e, t, n = []) {
    zt(), Qi();
    const r = ie(e)[t].apply(e, n);
    return Xi(), Jt(), r;
  }
  const Pp = Ki("__proto__,__v_isRef,__isVue"), ou = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt));
  function Ap(e) {
    bt(e) || (e = String(e));
    const t = ie(this);
    return je(t, "has", e), t.hasOwnProperty(e);
  }
  class su {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw") return r === (o ? s ? fu : uu : s ? cu : lu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const i = G(t);
      if (!o) {
        let l;
        if (i && (l = Rp[n])) return l;
        if (n === "hasOwnProperty") return Ap;
      }
      const a = Reflect.get(t, n, Se(t) ? t : r);
      return (bt(n) ? ou.has(n) : Pp(n)) || (o || je(t, "get", n), s) ? a : Se(a) ? i && Yi(n) ? a : a.value : ye(a) ? o ? du(a) : kt(a) : a;
    }
  }
  class iu extends su {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, o) {
      let s = t[n];
      if (!this._isShallow) {
        const l = Yt(s);
        if (!pt(r) && !Yt(r) && (s = ie(s), r = ie(r)), !G(t) && Se(s) && !Se(r)) return l ? false : (s.value = r, true);
      }
      const i = G(t) && Yi(n) ? Number(n) < t.length : ue(t, n), a = Reflect.set(t, n, r, Se(t) ? t : o);
      return t === ie(o) && (i ? Ge(r, s) && Ut(t, "set", n, r) : Ut(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = ue(t, n);
      t[n];
      const o = Reflect.deleteProperty(t, n);
      return o && r && Ut(t, "delete", n, void 0), o;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!bt(n) || !ou.has(n)) && je(t, "has", n), r;
    }
    ownKeys(t) {
      return je(t, "iterate", G(t) ? "length" : Pn), Reflect.ownKeys(t);
    }
  }
  class au extends su {
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
  const xp = new iu(), Op = new au(), Lp = new iu(true), Mp = new au(true), ci = (e) => e, lo = (e) => Reflect.getPrototypeOf(e);
  function $p(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, s = ie(o), i = zn(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? ci : t ? Io : Ne;
      return !t && je(s, "iterate", l ? li : Pn), {
        next() {
          const { value: f, done: p } = u.next();
          return p ? {
            value: f,
            done: p
          } : {
            value: a ? [
              c(f[0]),
              c(f[1])
            ] : c(f),
            done: p
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function co(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Ip(e, t) {
    const n = {
      get(o) {
        const s = this.__v_raw, i = ie(s), a = ie(o);
        e || (Ge(o, a) && je(i, "get", o), je(i, "get", a));
        const { has: l } = lo(i), u = t ? ci : e ? Io : Ne;
        if (l.call(i, o)) return u(s.get(o));
        if (l.call(i, a)) return u(s.get(a));
        s !== i && s.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && je(ie(o), "iterate", Pn), Reflect.get(o, "size", o);
      },
      has(o) {
        const s = this.__v_raw, i = ie(s), a = ie(o);
        return e || (Ge(o, a) && je(i, "has", o), je(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
      },
      forEach(o, s) {
        const i = this, a = i.__v_raw, l = ie(a), u = t ? ci : e ? Io : Ne;
        return !e && je(l, "iterate", Pn), a.forEach((c, f) => o.call(s, u(c), u(f), i));
      }
    };
    return Pe(n, e ? {
      add: co("add"),
      set: co("set"),
      delete: co("delete"),
      clear: co("clear")
    } : {
      add(o) {
        !t && !pt(o) && !Yt(o) && (o = ie(o));
        const s = ie(this);
        return lo(s).has.call(s, o) || (s.add(o), Ut(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !pt(s) && !Yt(s) && (s = ie(s));
        const i = ie(this), { has: a, get: l } = lo(i);
        let u = a.call(i, o);
        u || (o = ie(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? Ge(s, c) && Ut(i, "set", o, s) : Ut(i, "add", o, s), this;
      },
      delete(o) {
        const s = ie(this), { has: i, get: a } = lo(s);
        let l = i.call(s, o);
        l || (o = ie(o), l = i.call(s, o)), a && a.call(s, o);
        const u = s.delete(o);
        return l && Ut(s, "delete", o, void 0), u;
      },
      clear() {
        const o = ie(this), s = o.size !== 0, i = o.clear();
        return s && Ut(o, "clear", void 0, void 0), i;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((o) => {
      n[o] = $p(o, e, t);
    }), n;
  }
  function as(e, t) {
    const n = Ip(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ue(n, o) && o in r ? n : r, o, s);
  }
  const Np = {
    get: as(false, false)
  }, Bp = {
    get: as(false, true)
  }, Dp = {
    get: as(true, false)
  }, jp = {
    get: as(true, true)
  }, lu = /* @__PURE__ */ new WeakMap(), cu = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap(), fu = /* @__PURE__ */ new WeakMap();
  function Fp(e) {
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
  function Hp(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Fp(pp(e));
  }
  kt = function(e) {
    return Yt(e) ? e : ls(e, false, xp, Np, lu);
  };
  function Nt(e) {
    return ls(e, false, Lp, Bp, cu);
  }
  du = function(e) {
    return ls(e, true, Op, Dp, uu);
  };
  JS = function(e) {
    return ls(e, true, Mp, jp, fu);
  };
  function ls(e, t, n, r, o) {
    if (!ye(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = Hp(e);
    if (s === 0) return e;
    const i = o.get(e);
    if (i) return i;
    const a = new Proxy(e, s === 2 ? r : n);
    return o.set(e, a), a;
  }
  function qt(e) {
    return Yt(e) ? qt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Yt(e) {
    return !!(e && e.__v_isReadonly);
  }
  function pt(e) {
    return !!(e && e.__v_isShallow);
  }
  function ea(e) {
    return e ? !!e.__v_raw : false;
  }
  ie = function(e) {
    const t = e && e.__v_raw;
    return t ? ie(t) : e;
  };
  Qn = function(e) {
    return !ue(e, "__v_skip") && Object.isExtensible(e) && Uc(e, "__v_skip", true), e;
  };
  const Ne = (e) => ye(e) ? kt(e) : e, Io = (e) => ye(e) ? du(e) : e;
  Se = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  He = function(e) {
    return pu(e, false);
  };
  Ue = function(e) {
    return pu(e, true);
  };
  function pu(e, t) {
    return Se(e) ? e : new Up(e, t);
  }
  class Up {
    constructor(t, n) {
      this.dep = new ss(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ie(t), this._value = n ? t : Ne(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || pt(t) || Yt(t);
      t = r ? t : ie(t), Ge(t, n) && (this._rawValue = t, this._value = r ? t : Ne(t), this.dep.trigger());
    }
  }
  re = function(e) {
    return Se(e) ? e.value : e;
  };
  Ke = function(e) {
    return te(e) ? e() : re(e);
  };
  const Wp = {
    get: (e, t, n) => t === "__v_raw" ? e : re(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return Se(o) && !Se(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function hu(e) {
    return qt(e) ? e : new Proxy(e, Wp);
  }
  class Vp {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new ss(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  cs = function(e) {
    return new Vp(e);
  };
  qp = function(e) {
    const t = G(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = mu(e, n);
    return t;
  };
  class Kp {
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
      return Tp(ie(this._object), this._key);
    }
  }
  class Gp {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  ta = function(e, t, n) {
    return Se(e) ? e : te(e) ? new Gp(e) : ye(e) && arguments.length > 1 ? mu(e, t, n) : He(e);
  };
  function mu(e, t, n) {
    const r = e[t];
    return Se(r) ? r : new Kp(e, t, n);
  }
  class zp {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new ss(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Br - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && _e !== this) return Xc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return tu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Jp(e, t, n = false) {
    let r, o;
    return te(e) ? r = e : (r = e.get, o = e.set), new zp(r, o, n);
  }
  const uo = {}, No = /* @__PURE__ */ new WeakMap();
  let Rn;
  function Yp(e, t = false, n = Rn) {
    if (n) {
      let r = No.get(n);
      r || No.set(n, r = []), r.push(e);
    }
  }
  function Qp(e, t, n = ae) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (v) => o ? v : pt(v) || o === false || o === 0 ? Wt(v, 1) : Wt(v);
    let c, f, p, d, h = false, g = false;
    if (Se(e) ? (f = () => e.value, h = pt(e)) : qt(e) ? (f = () => u(e), h = true) : G(e) ? (g = true, h = e.some((v) => qt(v) || pt(v)), f = () => e.map((v) => {
      if (Se(v)) return v.value;
      if (qt(v)) return u(v);
      if (te(v)) return l ? l(v, 2) : v();
    })) : te(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (p) {
        zt();
        try {
          p();
        } finally {
          Jt();
        }
      }
      const v = Rn;
      Rn = c;
      try {
        return l ? l(e, 3, [
          d
        ]) : e(d);
      } finally {
        Rn = v;
      }
    } : f = Bt, t && o) {
      const v = f, w = o === true ? 1 / 0 : o;
      f = () => Wt(v(), w);
    }
    const S = Zt(), E = () => {
      c.stop(), S && S.active && zi(S.effects, c);
    };
    if (s && t) {
      const v = t;
      t = (...w) => {
        v(...w), E();
      };
    }
    let _ = g ? new Array(e.length).fill(uo) : uo;
    const m = (v) => {
      if (!(!(c.flags & 1) || !c.dirty && !v)) if (t) {
        const w = c.run();
        if (o || h || (g ? w.some((P, L) => Ge(P, _[L])) : Ge(w, _))) {
          p && p();
          const P = Rn;
          Rn = c;
          try {
            const L = [
              w,
              _ === uo ? void 0 : g && _[0] === uo ? [] : _,
              d
            ];
            l ? l(t, 3, L) : t(...L), _ = w;
          } finally {
            Rn = P;
          }
        }
      } else c.run();
    };
    return a && a(m), c = new Yc(f), c.scheduler = i ? () => i(m, false) : m, d = (v) => Yp(v, false, c), p = c.onStop = () => {
      const v = No.get(c);
      if (v) {
        if (l) l(v, 4);
        else for (const w of v) w();
        No.delete(c);
      }
    }, t ? r ? m(true) : _ = c.run() : i ? i(m.bind(null, true), true) : c.run(), E.pause = c.pause.bind(c), E.resume = c.resume.bind(c), E.stop = E, E;
  }
  function Wt(e, t = 1 / 0, n) {
    if (t <= 0 || !ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, Se(e)) Wt(e.value, t, n);
    else if (G(e)) for (let r = 0; r < e.length; r++) Wt(e[r], t, n);
    else if (es(e) || zn(e)) e.forEach((r) => {
      Wt(r, t, n);
    });
    else if (Hc(e)) {
      for (const r in e) Wt(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Wt(e[r], t, n);
    }
    return e;
  }
  function Qr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      cr(o, t, n);
    }
  }
  function _t(e, t, n, r) {
    if (te(e)) {
      const o = Qr(e, t, n, r);
      return o && Ji(o) && o.catch((s) => {
        cr(s, t, n);
      }), o;
    }
    if (G(e)) {
      const o = [];
      for (let s = 0; s < e.length; s++) o.push(_t(e[s], t, n, r));
      return o;
    }
  }
  function cr(e, t, n, r = true) {
    const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ae;
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
      if (s) {
        zt(), Qr(s, null, 10, [
          e,
          l,
          u
        ]), Jt();
        return;
      }
    }
    Xp(e, n, o, r, i);
  }
  function Xp(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const ze = [];
  let Ot = -1;
  const Xn = [];
  let cn = null, Vn = 0;
  const gu = Promise.resolve();
  let Bo = null;
  wt = function(e) {
    const t = Bo || gu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Zp(e) {
    let t = Ot + 1, n = ze.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = ze[r], s = jr(o);
      s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function na(e) {
    if (!(e.flags & 1)) {
      const t = jr(e), n = ze[ze.length - 1];
      !n || !(e.flags & 2) && t >= jr(n) ? ze.push(e) : ze.splice(Zp(t), 0, e), e.flags |= 1, yu();
    }
  }
  function yu() {
    Bo || (Bo = gu.then(vu));
  }
  function ui(e) {
    G(e) ? Xn.push(...e) : cn && e.id === -1 ? cn.splice(Vn + 1, 0, e) : e.flags & 1 || (Xn.push(e), e.flags |= 1), yu();
  }
  function Da(e, t, n = Ot + 1) {
    for (; n < ze.length; n++) {
      const r = ze[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        ze.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Do(e) {
    if (Xn.length) {
      const t = [
        ...new Set(Xn)
      ].sort((n, r) => jr(n) - jr(r));
      if (Xn.length = 0, cn) {
        cn.push(...t);
        return;
      }
      for (cn = t, Vn = 0; Vn < cn.length; Vn++) {
        const n = cn[Vn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      cn = null, Vn = 0;
    }
  }
  const jr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function vu(e) {
    try {
      for (Ot = 0; Ot < ze.length; Ot++) {
        const t = ze[Ot];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Ot < ze.length; Ot++) {
        const t = ze[Ot];
        t && (t.flags &= -2);
      }
      Ot = -1, ze.length = 0, Do(), Bo = null, (ze.length || Xn.length) && vu();
    }
  }
  let Me = null, bu = null;
  function jo(e) {
    const t = Me;
    return Me = e, bu = e && e.type.__scopeId || null, t;
  }
  $e = function(e, t = Me, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && Za(-1);
      const s = jo(t);
      let i;
      try {
        i = e(...o);
      } finally {
        jo(s), r._d && Za(1);
      }
      return i;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  YS = function(e, t) {
    if (Me === null) return e;
    const n = hs(Me), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [s, i, a, l = ae] = t[o];
      s && (te(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && Wt(i), r.push({
        dir: s,
        instance: n,
        value: i,
        oldValue: void 0,
        arg: a,
        modifiers: l
      }));
    }
    return e;
  };
  function Mt(e, t, n, r) {
    const o = e.dirs, s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      s && (a.oldValue = s[i].value);
      let l = a.dir[r];
      l && (zt(), _t(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), Jt());
    }
  }
  const _u = Symbol("_vte"), wu = (e) => e.__isTeleport, Pr = (e) => e && (e.disabled || e.disabled === ""), ja = (e) => e && (e.defer || e.defer === ""), Fa = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ha = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, fi = (e, t) => {
    const n = e && e.to;
    return Ee(n) ? t ? t(n) : null : n;
  }, Su = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      const { mc: c, pc: f, pbc: p, o: { insert: d, querySelector: h, createText: g, createComment: S } } = u, E = Pr(t.props);
      let { shapeFlag: _, children: m, dynamicChildren: v } = t;
      if (e == null) {
        const w = t.el = g(""), P = t.anchor = g("");
        d(w, n, r), d(P, n, r);
        const L = (C, O) => {
          _ & 16 && (o && o.isCE && (o.ce._teleportTarget = C), c(m, C, O, o, s, i, a, l));
        }, N = () => {
          const C = t.target = fi(t.props, h), O = Eu(C, t, g, d);
          C && (i !== "svg" && Fa(C) ? i = "svg" : i !== "mathml" && Ha(C) && (i = "mathml"), E || (L(C, O), Ao(t, false)));
        };
        E && (L(n, P), Ao(t, true)), ja(t.props) ? Oe(() => {
          N(), t.el.__isMounted = true;
        }, s) : N();
      } else {
        if (ja(t.props) && !e.el.__isMounted) {
          Oe(() => {
            Su.process(e, t, n, r, o, s, i, a, l, u), delete e.el.__isMounted;
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const w = t.anchor = e.anchor, P = t.target = e.target, L = t.targetAnchor = e.targetAnchor, N = Pr(e.props), C = N ? n : P, O = N ? w : L;
        if (i === "svg" || Fa(P) ? i = "svg" : (i === "mathml" || Ha(P)) && (i = "mathml"), v ? (p(e.dynamicChildren, v, C, o, s, i, a), la(e, t, true)) : l || f(e, t, C, O, o, s, i, a, false), E) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : fo(t, n, w, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const k = t.target = fi(t.props, h);
          k && fo(t, k, null, u, 0);
        } else N && fo(t, P, L, u, 1);
        Ao(t, E);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, s) {
      const { shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: p } = e;
      if (f && (o(u), o(c)), s && o(l), i & 16) {
        const d = s || !Pr(p);
        for (let h = 0; h < a.length; h++) {
          const g = a[h];
          r(g, t, n, d, !!g.dynamicChildren);
        }
      }
    },
    move: fo,
    hydrate: eh
  };
  function fo(e, t, n, { o: { insert: r }, m: o }, s = 2) {
    s === 0 && r(e.targetAnchor, t, n);
    const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
    if (f && r(i, t, n), (!f || Pr(c)) && l & 16) for (let p = 0; p < u.length; p++) o(u[p], t, n, 2);
    f && r(a, t, n);
  }
  function eh(e, t, n, r, o, s, { o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
    const p = t.target = fi(t.props, l);
    if (p) {
      const d = Pr(t.props), h = p._lpa || p.firstChild;
      if (t.shapeFlag & 16) if (d) t.anchor = f(i(e), t, a(e), n, r, o, s), t.targetStart = h, t.targetAnchor = h && i(h);
      else {
        t.anchor = i(e);
        let g = h;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor") t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, p._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || Eu(p, t, c, u), f(h && i(h), t, p, n, r, o, s);
      }
      Ao(t, d);
    }
    return t.anchor && i(t.anchor);
  }
  QS = Su;
  function Ao(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, o;
      for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function Eu(e, t, n, r) {
    const o = t.targetStart = n(""), s = t.targetAnchor = n("");
    return o[_u] = s, e && (r(o, e), r(s, e)), s;
  }
  const un = Symbol("_leaveCb"), po = Symbol("_enterCb");
  function ku() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return St(() => {
      e.isMounted = true;
    }), Nn(() => {
      e.isUnmounting = true;
    }), e;
  }
  const ft = [
    Function,
    Array
  ], Tu = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ft,
    onEnter: ft,
    onAfterEnter: ft,
    onEnterCancelled: ft,
    onBeforeLeave: ft,
    onLeave: ft,
    onAfterLeave: ft,
    onLeaveCancelled: ft,
    onBeforeAppear: ft,
    onAppear: ft,
    onAfterAppear: ft,
    onAppearCancelled: ft
  }, Ru = (e) => {
    const t = e.subTree;
    return t.component ? Ru(t.component) : t;
  }, th = {
    name: "BaseTransition",
    props: Tu,
    setup(e, { slots: t }) {
      const n = tt(), r = ku();
      return () => {
        const o = t.default && ra(t.default(), true);
        if (!o || !o.length) return;
        const s = Cu(o), i = ie(e), { mode: a } = i;
        if (r.isLeaving) return Os(s);
        const l = Ua(s);
        if (!l) return Os(s);
        let u = Fr(l, i, r, n, (f) => u = f);
        l.type !== Ce && wn(l, u);
        let c = n.subTree && Ua(n.subTree);
        if (c && c.type !== Ce && !gt(l, c) && Ru(n).type !== Ce) {
          let f = Fr(c, i, r, n);
          if (wn(c, f), a === "out-in" && l.type !== Ce) return r.isLeaving = true, f.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Os(s);
          a === "in-out" && l.type !== Ce ? f.delayLeave = (p, d, h) => {
            const g = Pu(r, c);
            g[String(c.key)] = c, p[un] = () => {
              d(), p[un] = void 0, delete u.delayedLeave, c = void 0;
            }, u.delayedLeave = () => {
              h(), delete u.delayedLeave, c = void 0;
            };
          } : c = void 0;
        } else c && (c = void 0);
        return s;
      };
    }
  };
  function Cu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Ce) {
        t = n;
        break;
      }
    }
    return t;
  }
  const nh = th;
  function Pu(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Fr(e, t, n, r, o) {
    const { appear: s, mode: i, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: p, onLeave: d, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: S, onAppear: E, onAfterAppear: _, onAppearCancelled: m } = t, v = String(e.key), w = Pu(n, e), P = (C, O) => {
      C && _t(C, r, 9, O);
    }, L = (C, O) => {
      const k = O[1];
      P(C, O), G(C) ? C.every((R) => R.length <= 1) && k() : C.length <= 1 && k();
    }, N = {
      mode: i,
      persisted: a,
      beforeEnter(C) {
        let O = l;
        if (!n.isMounted) if (s) O = S || l;
        else return;
        C[un] && C[un](true);
        const k = w[v];
        k && gt(e, k) && k.el[un] && k.el[un](), P(O, [
          C
        ]);
      },
      enter(C) {
        let O = u, k = c, R = f;
        if (!n.isMounted) if (s) O = E || u, k = _ || c, R = m || f;
        else return;
        let B = false;
        const Z = C[po] = (ee) => {
          B || (B = true, ee ? P(R, [
            C
          ]) : P(k, [
            C
          ]), N.delayedLeave && N.delayedLeave(), C[po] = void 0);
        };
        O ? L(O, [
          C,
          Z
        ]) : Z();
      },
      leave(C, O) {
        const k = String(e.key);
        if (C[po] && C[po](true), n.isUnmounting) return O();
        P(p, [
          C
        ]);
        let R = false;
        const B = C[un] = (Z) => {
          R || (R = true, O(), Z ? P(g, [
            C
          ]) : P(h, [
            C
          ]), C[un] = void 0, w[k] === e && delete w[k]);
        };
        w[k] = e, d ? L(d, [
          C,
          B
        ]) : B();
      },
      clone(C) {
        const O = Fr(C, t, n, r, o);
        return o && o(O), O;
      }
    };
    return N;
  }
  function Os(e) {
    if (Xr(e)) return e = lt(e), e.children = null, e;
  }
  function Ua(e) {
    if (!Xr(e)) return wu(e.type) && e.children ? Cu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && te(n.default)) return n.default();
    }
  }
  function wn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, wn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function ra(e, t = false, n) {
    let r = [], o = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
      i.type === we ? (i.patchFlag & 128 && o++, r = r.concat(ra(i.children, t, a))) : (t || i.type !== Ce) && r.push(a != null ? lt(i, {
        key: a
      }) : i);
    }
    if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r;
  }
  pe = function(e, t) {
    return te(e) ? Pe({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  XS = function() {
    const e = tt();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
  };
  function oa(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  ZS = function(e) {
    const t = tt(), n = Ue(null);
    if (t) {
      const o = t.refs === ae ? t.refs = {} : t.refs;
      Object.defineProperty(o, e, {
        enumerable: true,
        get: () => n.value,
        set: (s) => n.value = s
      });
    }
    return n;
  };
  function Hr(e, t, n, r, o = false) {
    if (G(e)) {
      e.forEach((h, g) => Hr(h, t && (G(t) ? t[g] : t), n, r, o));
      return;
    }
    if (bn(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Hr(e, t, n, r.component.subTree);
      return;
    }
    const s = r.shapeFlag & 4 ? hs(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === ae ? a.refs = {} : a.refs, f = a.setupState, p = ie(f), d = f === ae ? () => false : (h) => ue(p, h);
    if (u != null && u !== l && (Ee(u) ? (c[u] = null, d(u) && (f[u] = null)) : Se(u) && (u.value = null)), te(l)) Qr(l, a, 12, [
      i,
      c
    ]);
    else {
      const h = Ee(l), g = Se(l);
      if (h || g) {
        const S = () => {
          if (e.f) {
            const E = h ? d(l) ? f[l] : c[l] : l.value;
            o ? G(E) && zi(E, s) : G(E) ? E.includes(s) || E.push(s) : h ? (c[l] = [
              s
            ], d(l) && (f[l] = c[l])) : (l.value = [
              s
            ], e.k && (c[e.k] = l.value));
          } else h ? (c[l] = i, d(l) && (f[l] = i)) : g && (l.value = i, e.k && (c[e.k] = i));
        };
        i ? (S.id = -1, Oe(S, n)) : S();
      }
    }
  }
  let Wa = false;
  const Hn = () => {
    Wa || (console.error("Hydration completed but contains mismatches."), Wa = true);
  }, rh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", oh = (e) => e.namespaceURI.includes("MathML"), ho = (e) => {
    if (e.nodeType === 1) {
      if (rh(e)) return "svg";
      if (oh(e)) return "mathml";
    }
  }, Kn = (e) => e.nodeType === 8;
  function sh(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: l, createComment: u } } = e, c = (m, v) => {
      if (!v.hasChildNodes()) {
        n(null, m, v), Do(), v._vnode = m;
        return;
      }
      f(v.firstChild, m, null, null, null), Do(), v._vnode = m;
    }, f = (m, v, w, P, L, N = false) => {
      N = N || !!v.dynamicChildren;
      const C = Kn(m) && m.data === "[", O = () => g(m, v, w, P, L, C), { type: k, ref: R, shapeFlag: B, patchFlag: Z } = v;
      let ee = m.nodeType;
      v.el = m, Z === -2 && (N = false, v.dynamicChildren = null);
      let F = null;
      switch (k) {
        case xn:
          ee !== 3 ? v.children === "" ? (l(v.el = o(""), i(m), m), F = m) : F = O() : (m.data !== v.children && (Hn(), m.data = v.children), F = s(m));
          break;
        case Ce:
          _(m) ? (F = s(m), E(v.el = m.content.firstChild, m, w)) : ee !== 8 || C ? F = O() : F = s(m);
          break;
        case xr:
          if (C && (m = s(m), ee = m.nodeType), ee === 1 || ee === 3) {
            F = m;
            const z = !v.children.length;
            for (let J = 0; J < v.staticCount; J++) z && (v.children += F.nodeType === 1 ? F.outerHTML : F.data), J === v.staticCount - 1 && (v.anchor = F), F = s(F);
            return C ? s(F) : F;
          } else O();
          break;
        case we:
          C ? F = h(m, v, w, P, L, N) : F = O();
          break;
        default:
          if (B & 1) (ee !== 1 || v.type.toLowerCase() !== m.tagName.toLowerCase()) && !_(m) ? F = O() : F = p(m, v, w, P, L, N);
          else if (B & 6) {
            v.slotScopeIds = L;
            const z = i(m);
            if (C ? F = S(m) : Kn(m) && m.data === "teleport start" ? F = S(m, m.data, "teleport end") : F = s(m), t(v, z, null, w, P, ho(z), N), bn(v) && !v.type.__asyncResolved) {
              let J;
              C ? (J = ge(we), J.anchor = F ? F.previousSibling : z.lastChild) : J = m.nodeType === 3 ? fr("") : ge("div"), J.el = m, v.component.subTree = J;
            }
          } else B & 64 ? ee !== 8 ? F = O() : F = v.type.hydrate(m, v, w, P, L, N, e, d) : B & 128 && (F = v.type.hydrate(m, v, w, P, ho(i(m)), L, N, e, f));
      }
      return R != null && Hr(R, null, P, v), F;
    }, p = (m, v, w, P, L, N) => {
      N = N || !!v.dynamicChildren;
      const { type: C, props: O, patchFlag: k, shapeFlag: R, dirs: B, transition: Z } = v, ee = C === "input" || C === "option";
      if (ee || k !== -1) {
        B && Mt(v, null, w, "created");
        let F = false;
        if (_(m)) {
          F = Qu(null, Z) && w && w.vnode.props && w.vnode.props.appear;
          const J = m.content.firstChild;
          F && Z.beforeEnter(J), E(J, m, w), v.el = m = J;
        }
        if (R & 16 && !(O && (O.innerHTML || O.textContent))) {
          let J = d(m.firstChild, v, m, w, P, L, N);
          for (; J; ) {
            mo(m, 1) || Hn();
            const Ae = J;
            J = J.nextSibling, a(Ae);
          }
        } else if (R & 8) {
          let J = v.children;
          J[0] === `
` && (m.tagName === "PRE" || m.tagName === "TEXTAREA") && (J = J.slice(1)), m.textContent !== J && (mo(m, 0) || Hn(), m.textContent = v.children);
        }
        if (O) {
          if (ee || !N || k & 48) {
            const J = m.tagName.includes("-");
            for (const Ae in O) (ee && (Ae.endsWith("value") || Ae === "indeterminate") || zr(Ae) && !Jn(Ae) || Ae[0] === "." || J) && r(m, Ae, null, O[Ae], void 0, w);
          } else if (O.onClick) r(m, "onClick", null, O.onClick, void 0, w);
          else if (k & 4 && qt(O.style)) for (const J in O.style) O.style[J];
        }
        let z;
        (z = O && O.onVnodeBeforeMount) && et(z, w, v), B && Mt(v, null, w, "beforeMount"), ((z = O && O.onVnodeMounted) || B || F) && of(() => {
          z && et(z, w, v), F && Z.enter(m), B && Mt(v, null, w, "mounted");
        }, P);
      }
      return m.nextSibling;
    }, d = (m, v, w, P, L, N, C) => {
      C = C || !!v.dynamicChildren;
      const O = v.children, k = O.length;
      for (let R = 0; R < k; R++) {
        const B = C ? O[R] : O[R] = it(O[R]), Z = B.type === xn;
        m ? (Z && !C && R + 1 < k && it(O[R + 1]).type === xn && (l(o(m.data.slice(B.children.length)), w, s(m)), m.data = B.children), m = f(m, B, P, L, N, C)) : Z && !B.children ? l(B.el = o(""), w) : (mo(w, 1) || Hn(), n(null, B, w, null, P, L, ho(w), N));
      }
      return m;
    }, h = (m, v, w, P, L, N) => {
      const { slotScopeIds: C } = v;
      C && (L = L ? L.concat(C) : C);
      const O = i(m), k = d(s(m), v, O, w, P, L, N);
      return k && Kn(k) && k.data === "]" ? s(v.anchor = k) : (Hn(), l(v.anchor = u("]"), O, k), k);
    }, g = (m, v, w, P, L, N) => {
      if (mo(m.parentElement, 1) || Hn(), v.el = null, N) {
        const k = S(m);
        for (; ; ) {
          const R = s(m);
          if (R && R !== k) a(R);
          else break;
        }
      }
      const C = s(m), O = i(m);
      return a(m), n(null, v, O, C, w, P, ho(O), L), w && (w.vnode.el = v.el, ps(w, v.el)), C;
    }, S = (m, v = "[", w = "]") => {
      let P = 0;
      for (; m; ) if (m = s(m), m && Kn(m) && (m.data === v && P++, m.data === w)) {
        if (P === 0) return s(m);
        P--;
      }
      return m;
    }, E = (m, v, w) => {
      const P = v.parentNode;
      P && P.replaceChild(m, v);
      let L = w;
      for (; L; ) L.vnode.el === v && (L.vnode.el = L.subTree.el = m), L = L.parent;
    }, _ = (m) => m.nodeType === 1 && m.tagName === "TEMPLATE";
    return [
      c,
      f
    ];
  }
  const Va = "data-allow-mismatch", ih = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };
  function mo(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(Va); ) e = e.parentElement;
    const n = e && e.getAttribute(Va);
    if (n == null) return false;
    if (n === "") return true;
    {
      const r = n.split(",");
      return t === 0 && r.includes("children") ? true : n.split(",").includes(ih[t]);
    }
  }
  rs().requestIdleCallback;
  rs().cancelIdleCallback;
  function ah(e, t) {
    if (Kn(e) && e.data === "[") {
      let n = 1, r = e.nextSibling;
      for (; r; ) {
        if (r.nodeType === 1) {
          if (t(r) === false) break;
        } else if (Kn(r)) if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
        r = r.nextSibling;
      }
    } else t(e);
  }
  const bn = (e) => !!e.type.__asyncLoader;
  qa = function(e) {
    te(e) && (e = {
      loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: o = 200, hydrate: s, timeout: i, suspensible: a = true, onError: l } = e;
    let u = null, c, f = 0;
    const p = () => (f++, u = null, d()), d = () => {
      let h;
      return u || (h = u = t().catch((g) => {
        if (g = g instanceof Error ? g : new Error(String(g)), l) return new Promise((S, E) => {
          l(g, () => S(p()), () => E(g), f + 1);
        });
        throw g;
      }).then((g) => h !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)));
    };
    return pe({
      name: "AsyncComponentWrapper",
      __asyncLoader: d,
      __asyncHydrate(h, g, S) {
        const E = s ? () => {
          const _ = s(S, (m) => ah(h, m));
          _ && (g.bum || (g.bum = [])).push(_);
        } : S;
        c ? E() : d().then(() => !g.isUnmounted && E());
      },
      get __asyncResolved() {
        return c;
      },
      setup() {
        const h = Le;
        if (oa(h), c) return () => Ls(c, h);
        const g = (m) => {
          u = null, cr(m, h, 13, !r);
        };
        if (a && h.suspense || rr) return d().then((m) => () => Ls(m, h)).catch((m) => (g(m), () => r ? ge(r, {
          error: m
        }) : null));
        const S = He(false), E = He(), _ = He(!!o);
        return o && setTimeout(() => {
          _.value = false;
        }, o), i != null && setTimeout(() => {
          if (!S.value && !E.value) {
            const m = new Error(`Async component timed out after ${i}ms.`);
            g(m), E.value = m;
          }
        }, i), d().then(() => {
          S.value = true, h.parent && Xr(h.parent.vnode) && h.parent.update();
        }).catch((m) => {
          g(m), E.value = m;
        }), () => {
          if (S.value && c) return Ls(c, h);
          if (E.value && r) return ge(r, {
            error: E.value
          });
          if (n && !_.value) return ge(n);
        };
      }
    });
  };
  function Ls(e, t) {
    const { ref: n, props: r, children: o, ce: s } = t.vnode, i = ge(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i;
  }
  const Xr = (e) => e.type.__isKeepAlive, lh = {
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
      const n = tt(), r = n.ctx;
      if (!r.renderer) return () => {
        const _ = t.default && t.default();
        return _ && _.length === 1 ? _[0] : _;
      };
      const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      let i = null;
      const a = n.suspense, { renderer: { p: l, m: u, um: c, o: { createElement: f } } } = r, p = f("div");
      r.activate = (_, m, v, w, P) => {
        const L = _.component;
        u(_, m, v, 0, a), l(L.vnode, _, m, v, L, a, w, _.slotScopeIds, P), Oe(() => {
          L.isDeactivated = false, L.a && Yn(L.a);
          const N = _.props && _.props.onVnodeMounted;
          N && et(N, L.parent, _);
        }, a);
      }, r.deactivate = (_) => {
        const m = _.component;
        Ho(m.m), Ho(m.a), u(_, p, null, 1, a), Oe(() => {
          m.da && Yn(m.da);
          const v = _.props && _.props.onVnodeUnmounted;
          v && et(v, m.parent, _), m.isDeactivated = true;
        }, a);
      };
      function d(_) {
        Ms(_), c(_, n, a, true);
      }
      function h(_) {
        o.forEach((m, v) => {
          const w = wi(m.type);
          w && !_(w) && g(v);
        });
      }
      function g(_) {
        const m = o.get(_);
        m && (!i || !gt(m, i)) ? d(m) : i && Ms(i), o.delete(_), s.delete(_);
      }
      at(() => [
        e.include,
        e.exclude
      ], ([_, m]) => {
        _ && h((v) => Er(_, v)), m && h((v) => !Er(m, v));
      }, {
        flush: "post",
        deep: true
      });
      let S = null;
      const E = () => {
        S != null && (Uo(n.subTree.type) ? Oe(() => {
          o.set(S, go(n.subTree));
        }, n.subTree.suspense) : o.set(S, go(n.subTree)));
      };
      return St(E), sa(E), Nn(() => {
        o.forEach((_) => {
          const { subTree: m, suspense: v } = n, w = go(m);
          if (_.type === w.type && _.key === w.key) {
            Ms(w);
            const P = w.component.da;
            P && Oe(P, v);
            return;
          }
          d(_);
        });
      }), () => {
        if (S = null, !t.default) return i = null;
        const _ = t.default(), m = _[0];
        if (_.length > 1) return i = null, _;
        if (!Mn(m) || !(m.shapeFlag & 4) && !(m.shapeFlag & 128)) return i = null, m;
        let v = go(m);
        if (v.type === Ce) return i = null, v;
        const w = v.type, P = wi(bn(v) ? v.type.__asyncResolved || {} : w), { include: L, exclude: N, max: C } = e;
        if (L && (!P || !Er(L, P)) || N && P && Er(N, P)) return v.shapeFlag &= -257, i = v, m;
        const O = v.key == null ? w : v.key, k = o.get(O);
        return v.el && (v = lt(v), m.shapeFlag & 128 && (m.ssContent = v)), S = O, k ? (v.el = k.el, v.component = k.component, v.transition && wn(v, v.transition), v.shapeFlag |= 512, s.delete(O), s.add(O)) : (s.add(O), C && s.size > parseInt(C, 10) && g(s.values().next().value)), v.shapeFlag |= 256, i = v, Uo(m.type) ? m : v;
      };
    }
  }, ch = lh;
  function Er(e, t) {
    return G(e) ? e.some((n) => Er(n, t)) : Ee(e) ? e.split(",").includes(t) : dp(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  function Au(e, t) {
    Ou(e, "a", t);
  }
  function xu(e, t) {
    Ou(e, "da", t);
  }
  function Ou(e, t, n = Le) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (us(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) Xr(o.parent.vnode) && uh(r, t, n, o), o = o.parent;
    }
  }
  function uh(e, t, n, r) {
    const o = us(t, e, r, true);
    fs(() => {
      zi(r[t], o);
    }, n);
  }
  function Ms(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function go(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function us(e, t, n = Le, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
        zt();
        const a = $n(n), l = _t(t, n, e, i);
        return a(), Jt(), l;
      });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  let en, dh, ph, hh;
  en = (e) => (t, n = Le) => {
    (!rr || e === "sp") && us(e, (...r) => t(...r), n);
  };
  Lu = en("bm");
  St = en("m");
  fh = en("bu");
  sa = en("u");
  Nn = en("bum");
  fs = en("um");
  dh = en("sp");
  ph = en("rtg");
  hh = en("rtc");
  function Mu(e, t = Le) {
    us("ec", e, t);
  }
  const $u = "components";
  function di(e, t) {
    return Nu($u, e, true, t) || e;
  }
  const Iu = Symbol.for("v-ndc");
  Je = function(e) {
    return Ee(e) ? Nu($u, e, false) || e : e || Iu;
  };
  function Nu(e, t, n = true, r = false) {
    const o = Me || Le;
    if (o) {
      const s = o.type;
      {
        const a = wi(s, false);
        if (a && (a === t || a === ct(t) || a === ns(ct(t)))) return s;
      }
      const i = Ka(o[e] || s[e], t) || Ka(o.appContext[e], t);
      return !i && r ? s : i;
    }
  }
  function Ka(e, t) {
    return e && (e[t] || e[ct(t)] || e[ns(ct(t))]);
  }
  nr = function(e, t, n, r) {
    let o;
    const s = n, i = G(e);
    if (i || Ee(e)) {
      const a = i && qt(e);
      let l = false, u = false;
      a && (l = !pt(e), u = Yt(e), e = is(e)), o = new Array(e.length);
      for (let c = 0, f = e.length; c < f; c++) o[c] = t(l ? u ? Io(Ne(e[c])) : Ne(e[c]) : e[c], c, void 0, s);
    } else if (typeof e == "number") {
      o = new Array(e);
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s);
    } else if (ye(e)) if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, s));
    else {
      const a = Object.keys(e);
      o = new Array(a.length);
      for (let l = 0, u = a.length; l < u; l++) {
        const c = a[l];
        o[l] = t(e[c], c, l, s);
      }
    }
    else o = [];
    return o;
  };
  xe = function(e, t, n = {}, r, o) {
    if (Me.ce || Me.parent && bn(Me.parent) && Me.parent.ce) return t !== "default" && (n.name = t), q(), oe(we, null, [
      ge("slot", n, r && r())
    ], 64);
    let s = e[t];
    s && s._c && (s._d = false), q();
    const i = s && Bu(s(n)), a = n.key || i && i.key, l = oe(we, {
      key: (a && !bt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && l.scopeId && (l.slotScopeIds = [
      l.scopeId + "-s"
    ]), s && s._c && (s._d = true), l;
  };
  function Bu(e) {
    return e.some((t) => Mn(t) ? !(t.type === Ce || t.type === we && !Bu(t.children)) : true) ? e : null;
  }
  const pi = (e) => e ? uf(e) ? hs(e) : pi(e.parent) : null, Ar = Pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => pi(e.parent),
    $root: (e) => pi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      na(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wt.bind(e.proxy)),
    $watch: (e) => Ih.bind(e)
  }), $s = (e, t) => e !== ae && !e.__isScriptSetup && ue(e, t), mh = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = e;
      let u;
      if (t[0] !== "$") {
        const d = i[t];
        if (d !== void 0) switch (d) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
        else {
          if ($s(r, t)) return i[t] = 1, r[t];
          if (o !== ae && ue(o, t)) return i[t] = 2, o[t];
          if ((u = e.propsOptions[0]) && ue(u, t)) return i[t] = 3, s[t];
          if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
          hi && (i[t] = 0);
        }
      }
      const c = Ar[t];
      let f, p;
      if (c) return t === "$attrs" && je(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
      if (p = l.config.globalProperties, ue(p, t)) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return $s(o, t) ? (o[t] = n, true) : r !== ae && ue(r, t) ? (r[t] = n, true) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
      let a;
      return !!n[i] || e !== ae && ue(e, i) || $s(t, i) || (a = s[0]) && ue(a, i) || ue(r, i) || ue(Ar, i) || ue(o.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  eE = function() {
    return Du().slots;
  };
  tE = function() {
    return Du().attrs;
  };
  function Du() {
    const e = tt();
    return e.setupContext || (e.setupContext = df(e));
  }
  function Ur(e) {
    return G(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  nE = function(e, t) {
    const n = Ur(e);
    for (const r in t) {
      if (r.startsWith("__skip")) continue;
      let o = n[r];
      o ? G(o) || te(o) ? o = n[r] = {
        type: o,
        default: t[r]
      } : o.default = t[r] : o === null && (o = n[r] = {
        default: t[r]
      }), o && t[`__skip_${r}`] && (o.skipFactory = true);
    }
    return n;
  };
  rE = function(e, t) {
    return !e || !t ? e || t : G(e) && G(t) ? e.concat(t) : Pe({}, Ur(e), Ur(t));
  };
  oE = function(e) {
    const t = tt();
    let n = e();
    return bi(), Ji(n) && (n = n.catch((r) => {
      throw $n(t), r;
    })), [
      n,
      () => $n(t)
    ];
  };
  let hi = true;
  function gh(e) {
    const t = Fu(e), n = e.proxy, r = e.ctx;
    hi = false, t.beforeCreate && Ga(t.beforeCreate, e, "bc");
    const { data: o, computed: s, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: p, beforeUpdate: d, updated: h, activated: g, deactivated: S, beforeDestroy: E, beforeUnmount: _, destroyed: m, unmounted: v, render: w, renderTracked: P, renderTriggered: L, errorCaptured: N, serverPrefetch: C, expose: O, inheritAttrs: k, components: R, directives: B, filters: Z } = t;
    if (u && yh(u, r, null), i) for (const z in i) {
      const J = i[z];
      te(J) && (r[z] = J.bind(n));
    }
    if (o) {
      const z = o.call(n, n);
      ye(z) && (e.data = kt(z));
    }
    if (hi = true, s) for (const z in s) {
      const J = s[z], Ae = te(J) ? J.bind(n, n) : te(J.get) ? J.get.bind(n, n) : Bt, nn = !te(J) && te(J.set) ? J.set.bind(n) : Bt, Rt = K({
        get: Ae,
        set: nn
      });
      Object.defineProperty(r, z, {
        enumerable: true,
        configurable: true,
        get: () => Rt.value,
        set: (Ye) => Rt.value = Ye
      });
    }
    if (a) for (const z in a) ju(a[z], r, n, z);
    if (l) {
      const z = te(l) ? l.call(n) : l;
      Reflect.ownKeys(z).forEach((J) => {
        Kt(J, z[J]);
      });
    }
    c && Ga(c, e, "c");
    function F(z, J) {
      G(J) ? J.forEach((Ae) => z(Ae.bind(n))) : J && z(J.bind(n));
    }
    if (F(Lu, f), F(St, p), F(fh, d), F(sa, h), F(Au, g), F(xu, S), F(Mu, N), F(hh, P), F(ph, L), F(Nn, _), F(fs, v), F(dh, C), G(O)) if (O.length) {
      const z = e.exposed || (e.exposed = {});
      O.forEach((J) => {
        Object.defineProperty(z, J, {
          get: () => n[J],
          set: (Ae) => n[J] = Ae
        });
      });
    } else e.exposed || (e.exposed = {});
    w && e.render === Bt && (e.render = w), k != null && (e.inheritAttrs = k), R && (e.components = R), B && (e.directives = B), C && oa(e);
  }
  function yh(e, t, n = Bt) {
    G(e) && (e = mi(e));
    for (const r in e) {
      const o = e[r];
      let s;
      ye(o) ? "default" in o ? s = Te(o.from || r, o.default, true) : s = Te(o.from || r) : s = Te(o), Se(s) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (i) => s.value = i
      }) : t[r] = s;
    }
  }
  function Ga(e, t, n) {
    _t(G(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function ju(e, t, n, r) {
    let o = r.includes(".") ? ef(n, r) : () => n[r];
    if (Ee(e)) {
      const s = t[e];
      te(s) && at(o, s);
    } else if (te(e)) at(o, e.bind(n));
    else if (ye(e)) if (G(e)) e.forEach((s) => ju(s, t, n, r));
    else {
      const s = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(s) && at(o, s, e);
    }
  }
  function Fu(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach((u) => Fo(l, u, i, true)), Fo(l, t, i)), ye(t) && s.set(t, l), l;
  }
  function Fo(e, t, n, r = false) {
    const { mixins: o, extends: s } = t;
    s && Fo(e, s, n, true), o && o.forEach((i) => Fo(e, i, n, true));
    for (const i in t) if (!(r && i === "expose")) {
      const a = vh[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
    return e;
  }
  const vh = {
    data: za,
    props: Ja,
    emits: Ja,
    methods: kr,
    computed: kr,
    beforeCreate: qe,
    created: qe,
    beforeMount: qe,
    mounted: qe,
    beforeUpdate: qe,
    updated: qe,
    beforeDestroy: qe,
    beforeUnmount: qe,
    destroyed: qe,
    unmounted: qe,
    activated: qe,
    deactivated: qe,
    errorCaptured: qe,
    serverPrefetch: qe,
    components: kr,
    directives: kr,
    watch: _h,
    provide: za,
    inject: bh
  };
  function za(e, t) {
    return t ? e ? function() {
      return Pe(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function bh(e, t) {
    return kr(mi(e), mi(t));
  }
  function mi(e) {
    if (G(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function qe(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function kr(e, t) {
    return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Ja(e, t) {
    return e ? G(e) && G(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Pe(/* @__PURE__ */ Object.create(null), Ur(e), Ur(t ?? {})) : t;
  }
  function _h(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Pe(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = qe(e[r], t[r]);
    return n;
  }
  function Hu() {
    return {
      app: null,
      config: {
        isNativeTag: up,
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
  let wh = 0;
  function Sh(e, t) {
    return function(r, o = null) {
      te(r) || (r = Pe({}, r)), o != null && !ye(o) && (o = null);
      const s = Hu(), i = /* @__PURE__ */ new WeakSet(), a = [];
      let l = false;
      const u = s.app = {
        _uid: wh++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: rm,
        get config() {
          return s.config;
        },
        set config(c) {
        },
        use(c, ...f) {
          return i.has(c) || (c && te(c.install) ? (i.add(c), c.install(u, ...f)) : te(c) && (i.add(c), c(u, ...f))), u;
        },
        mixin(c) {
          return s.mixins.includes(c) || s.mixins.push(c), u;
        },
        component(c, f) {
          return f ? (s.components[c] = f, u) : s.components[c];
        },
        directive(c, f) {
          return f ? (s.directives[c] = f, u) : s.directives[c];
        },
        mount(c, f, p) {
          if (!l) {
            const d = u._ceVNode || ge(r, o);
            return d.appContext = s, p === true ? p = "svg" : p === false && (p = void 0), f && t ? t(d, c) : e(d, c, p), l = true, u._container = c, c.__vue_app__ = u, hs(d.component);
          }
        },
        onUnmount(c) {
          a.push(c);
        },
        unmount() {
          l && (_t(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(c, f) {
          return s.provides[c] = f, u;
        },
        runWithContext(c) {
          const f = An;
          An = u;
          try {
            return c();
          } finally {
            An = f;
          }
        }
      };
      return u;
    };
  }
  let An = null;
  Kt = function(e, t) {
    if (Le) {
      let n = Le.provides;
      const r = Le.parent && Le.parent.provides;
      r === n && (n = Le.provides = Object.create(r)), n[e] = t;
    }
  };
  Te = function(e, t, n = false) {
    const r = Le || Me;
    if (r || An) {
      const o = An ? An._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && te(t) ? t.call(r && r.proxy) : t;
    }
  };
  ur = function() {
    return !!(Le || Me || An);
  };
  const Uu = {}, Wu = () => Object.create(Uu), Vu = (e) => Object.getPrototypeOf(e) === Uu;
  function Eh(e, t, n, r = false) {
    const o = {}, s = Wu();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), qu(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Nt(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
  }
  function kh(e, t, n, r) {
    const { props: o, attrs: s, vnode: { patchFlag: i } } = e, a = ie(o), [l] = e.propsOptions;
    let u = false;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let p = c[f];
          if (ds(e.emitsOptions, p)) continue;
          const d = t[p];
          if (l) if (ue(s, p)) d !== s[p] && (s[p] = d, u = true);
          else {
            const h = ct(p);
            o[h] = gi(l, a, h, d, e, false);
          }
          else d !== s[p] && (s[p] = d, u = true);
        }
      }
    } else {
      qu(e, t, o, s) && (u = true);
      let c;
      for (const f in a) (!t || !ue(t, f) && ((c = Xt(f)) === f || !ue(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = gi(l, a, f, void 0, e, true)) : delete o[f]);
      if (s !== a) for (const f in s) (!t || !ue(t, f)) && (delete s[f], u = true);
    }
    u && Ut(e.attrs, "set", "");
  }
  function qu(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = false, a;
    if (t) for (let l in t) {
      if (Jn(l)) continue;
      const u = t[l];
      let c;
      o && ue(o, c = ct(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ds(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = true);
    }
    if (s) {
      const l = ie(n), u = a || ae;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        n[f] = gi(o, l, f, u[f], e, !ue(u, f));
      }
    }
    return i;
  }
  function gi(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
      const a = ue(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && te(l)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const c = $n(o);
            r = u[n] = l.call(null, t), c();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !a ? r = false : i[1] && (r === "" || r === Xt(n)) && (r = true));
    }
    return r;
  }
  const Th = /* @__PURE__ */ new WeakMap();
  function Ku(e, t, n = false) {
    const r = n ? Th : t.propsCache, o = r.get(e);
    if (o) return o;
    const s = e.props, i = {}, a = [];
    let l = false;
    if (!te(e)) {
      const c = (f) => {
        l = true;
        const [p, d] = Ku(f, t, true);
        Pe(i, p), d && a.push(...d);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!s && !l) return ye(e) && r.set(e, Gn), Gn;
    if (G(s)) for (let c = 0; c < s.length; c++) {
      const f = ct(s[c]);
      Ya(f) && (i[f] = ae);
    }
    else if (s) for (const c in s) {
      const f = ct(c);
      if (Ya(f)) {
        const p = s[c], d = i[f] = G(p) || te(p) ? {
          type: p
        } : Pe({}, p), h = d.type;
        let g = false, S = true;
        if (G(h)) for (let E = 0; E < h.length; ++E) {
          const _ = h[E], m = te(_) && _.name;
          if (m === "Boolean") {
            g = true;
            break;
          } else m === "String" && (S = false);
        }
        else g = te(h) && h.name === "Boolean";
        d[0] = g, d[1] = S, (g || ue(d, "default")) && a.push(f);
      }
    }
    const u = [
      i,
      a
    ];
    return ye(e) && r.set(e, u), u;
  }
  function Ya(e) {
    return e[0] !== "$" && !Jn(e);
  }
  const ia = (e) => e[0] === "_" || e === "$stable", aa = (e) => G(e) ? e.map(it) : [
    it(e)
  ], Rh = (e, t, n) => {
    if (t._n) return t;
    const r = $e((...o) => aa(t(...o)), n);
    return r._c = false, r;
  }, Gu = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (ia(o)) continue;
      const s = e[o];
      if (te(s)) t[o] = Rh(o, s, r);
      else if (s != null) {
        const i = aa(s);
        t[o] = () => i;
      }
    }
  }, zu = (e, t) => {
    const n = aa(t);
    e.slots.default = () => n;
  }, Ju = (e, t, n) => {
    for (const r in t) (n || !ia(r)) && (e[r] = t[r]);
  }, Ch = (e, t, n) => {
    const r = e.slots = Wu();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Ju(r, t, n), n && Uc(r, "_", o, true)) : Gu(t, r);
    } else t && zu(e, t);
  }, Ph = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = true, i = ae;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? s = false : Ju(o, t, n) : (s = !t.$stable, Gu(t, o)), i = t;
    } else t && (zu(e, t), i = {
      default: 1
    });
    if (s) for (const a in o) !ia(a) && i[a] == null && delete o[a];
  }, Oe = of;
  function Ah(e) {
    return Yu(e);
  }
  function xh(e) {
    return Yu(e, sh);
  }
  function Yu(e, t) {
    const n = rs();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: p, setScopeId: d = Bt, insertStaticContent: h } = e, g = (y, b, T, M = null, A = null, $ = null, H = void 0, j = null, D = !!b.dynamicChildren) => {
      if (y === b) return;
      y && !gt(y, b) && (M = x(y), Ye(y, A, $, true), y = null), b.patchFlag === -2 && (D = false, b.dynamicChildren = null);
      const { type: I, ref: X, shapeFlag: W } = b;
      switch (I) {
        case xn:
          S(y, b, T, M);
          break;
        case Ce:
          E(y, b, T, M);
          break;
        case xr:
          y == null && _(b, T, M, H);
          break;
        case we:
          R(y, b, T, M, A, $, H, j, D);
          break;
        default:
          W & 1 ? w(y, b, T, M, A, $, H, j, D) : W & 6 ? B(y, b, T, M, A, $, H, j, D) : (W & 64 || W & 128) && I.process(y, b, T, M, A, $, H, j, D, Y);
      }
      X != null && A && Hr(X, y && y.ref, $, b || y, !b);
    }, S = (y, b, T, M) => {
      if (y == null) r(b.el = a(b.children), T, M);
      else {
        const A = b.el = y.el;
        b.children !== y.children && u(A, b.children);
      }
    }, E = (y, b, T, M) => {
      y == null ? r(b.el = l(b.children || ""), T, M) : b.el = y.el;
    }, _ = (y, b, T, M) => {
      [y.el, y.anchor] = h(y.children, b, T, M, y.el, y.anchor);
    }, m = ({ el: y, anchor: b }, T, M) => {
      let A;
      for (; y && y !== b; ) A = p(y), r(y, T, M), y = A;
      r(b, T, M);
    }, v = ({ el: y, anchor: b }) => {
      let T;
      for (; y && y !== b; ) T = p(y), o(y), y = T;
      o(b);
    }, w = (y, b, T, M, A, $, H, j, D) => {
      b.type === "svg" ? H = "svg" : b.type === "math" && (H = "mathml"), y == null ? P(b, T, M, A, $, H, j, D) : C(y, b, A, $, H, j, D);
    }, P = (y, b, T, M, A, $, H, j) => {
      let D, I;
      const { props: X, shapeFlag: W, transition: Q, dirs: ne } = y;
      if (D = y.el = i(y.type, $, X && X.is, X), W & 8 ? c(D, y.children) : W & 16 && N(y.children, D, null, M, A, Is(y, $), H, j), ne && Mt(y, null, M, "created"), L(D, y, y.scopeId, H, M), X) {
        for (const be in X) be !== "value" && !Jn(be) && s(D, be, null, X[be], $, M);
        "value" in X && s(D, "value", null, X.value, $), (I = X.onVnodeBeforeMount) && et(I, M, y);
      }
      ne && Mt(y, null, M, "beforeMount");
      const se = Qu(A, Q);
      se && Q.beforeEnter(D), r(D, b, T), ((I = X && X.onVnodeMounted) || se || ne) && Oe(() => {
        I && et(I, M, y), se && Q.enter(D), ne && Mt(y, null, M, "mounted");
      }, A);
    }, L = (y, b, T, M, A) => {
      if (T && d(y, T), M) for (let $ = 0; $ < M.length; $++) d(y, M[$]);
      if (A) {
        let $ = A.subTree;
        if (b === $ || Uo($.type) && ($.ssContent === b || $.ssFallback === b)) {
          const H = A.vnode;
          L(y, H, H.scopeId, H.slotScopeIds, A.parent);
        }
      }
    }, N = (y, b, T, M, A, $, H, j, D = 0) => {
      for (let I = D; I < y.length; I++) {
        const X = y[I] = j ? fn(y[I]) : it(y[I]);
        g(null, X, b, T, M, A, $, H, j);
      }
    }, C = (y, b, T, M, A, $, H) => {
      const j = b.el = y.el;
      let { patchFlag: D, dynamicChildren: I, dirs: X } = b;
      D |= y.patchFlag & 16;
      const W = y.props || ae, Q = b.props || ae;
      let ne;
      if (T && Sn(T, false), (ne = Q.onVnodeBeforeUpdate) && et(ne, T, b, y), X && Mt(b, y, T, "beforeUpdate"), T && Sn(T, true), (W.innerHTML && Q.innerHTML == null || W.textContent && Q.textContent == null) && c(j, ""), I ? O(y.dynamicChildren, I, j, T, M, Is(b, A), $) : H || J(y, b, j, null, T, M, Is(b, A), $, false), D > 0) {
        if (D & 16) k(j, W, Q, T, A);
        else if (D & 2 && W.class !== Q.class && s(j, "class", null, Q.class, A), D & 4 && s(j, "style", W.style, Q.style, A), D & 8) {
          const se = b.dynamicProps;
          for (let be = 0; be < se.length; be++) {
            const fe = se[be], nt = W[fe], Be = Q[fe];
            (Be !== nt || fe === "value") && s(j, fe, nt, Be, A, T);
          }
        }
        D & 1 && y.children !== b.children && c(j, b.children);
      } else !H && I == null && k(j, W, Q, T, A);
      ((ne = Q.onVnodeUpdated) || X) && Oe(() => {
        ne && et(ne, T, b, y), X && Mt(b, y, T, "updated");
      }, M);
    }, O = (y, b, T, M, A, $, H) => {
      for (let j = 0; j < b.length; j++) {
        const D = y[j], I = b[j], X = D.el && (D.type === we || !gt(D, I) || D.shapeFlag & 70) ? f(D.el) : T;
        g(D, I, X, null, M, A, $, H, true);
      }
    }, k = (y, b, T, M, A) => {
      if (b !== T) {
        if (b !== ae) for (const $ in b) !Jn($) && !($ in T) && s(y, $, b[$], null, A, M);
        for (const $ in T) {
          if (Jn($)) continue;
          const H = T[$], j = b[$];
          H !== j && $ !== "value" && s(y, $, j, H, A, M);
        }
        "value" in T && s(y, "value", b.value, T.value, A);
      }
    }, R = (y, b, T, M, A, $, H, j, D) => {
      const I = b.el = y ? y.el : a(""), X = b.anchor = y ? y.anchor : a("");
      let { patchFlag: W, dynamicChildren: Q, slotScopeIds: ne } = b;
      ne && (j = j ? j.concat(ne) : ne), y == null ? (r(I, T, M), r(X, T, M), N(b.children || [], T, X, A, $, H, j, D)) : W > 0 && W & 64 && Q && y.dynamicChildren ? (O(y.dynamicChildren, Q, T, A, $, H, j), (b.key != null || A && b === A.subTree) && la(y, b, true)) : J(y, b, T, X, A, $, H, j, D);
    }, B = (y, b, T, M, A, $, H, j, D) => {
      b.slotScopeIds = j, y == null ? b.shapeFlag & 512 ? A.ctx.activate(b, T, M, H, D) : Z(b, T, M, A, $, H, D) : ee(y, b, D);
    }, Z = (y, b, T, M, A, $, H) => {
      const j = y.component = Qh(y, M, A);
      if (Xr(y) && (j.ctx.renderer = Y), Xh(j, false, H), j.asyncDep) {
        if (A && A.registerDep(j, F, H), !y.el) {
          const D = j.subTree = ge(Ce);
          E(null, D, b, T);
        }
      } else F(j, y, b, T, A, $, H);
    }, ee = (y, b, T) => {
      const M = b.component = y.component;
      if (Fh(y, b, T)) if (M.asyncDep && !M.asyncResolved) {
        z(M, b, T);
        return;
      } else M.next = b, M.update();
      else b.el = y.el, M.vnode = b;
    }, F = (y, b, T, M, A, $, H) => {
      const j = () => {
        if (y.isMounted) {
          let { next: W, bu: Q, u: ne, parent: se, vnode: be } = y;
          {
            const rt = Xu(y);
            if (rt) {
              W && (W.el = be.el, z(y, W, H)), rt.asyncDep.then(() => {
                y.isUnmounted || j();
              });
              return;
            }
          }
          let fe = W, nt;
          Sn(y, false), W ? (W.el = be.el, z(y, W, H)) : W = be, Q && Yn(Q), (nt = W.props && W.props.onVnodeBeforeUpdate) && et(nt, se, W, be), Sn(y, true);
          const Be = Ns(y), ht = y.subTree;
          y.subTree = Be, g(ht, Be, f(ht.el), x(ht), y, A, $), W.el = Be.el, fe === null && ps(y, Be.el), ne && Oe(ne, A), (nt = W.props && W.props.onVnodeUpdated) && Oe(() => et(nt, se, W, be), A);
        } else {
          let W;
          const { el: Q, props: ne } = b, { bm: se, m: be, parent: fe, root: nt, type: Be } = y, ht = bn(b);
          if (Sn(y, false), se && Yn(se), !ht && (W = ne && ne.onVnodeBeforeMount) && et(W, fe, b), Sn(y, true), Q && ke) {
            const rt = () => {
              y.subTree = Ns(y), ke(Q, y.subTree, y, A, null);
            };
            ht && Be.__asyncHydrate ? Be.__asyncHydrate(Q, y, rt) : rt();
          } else {
            nt.ce && nt.ce._injectChildStyle(Be);
            const rt = y.subTree = Ns(y);
            g(null, rt, T, M, y, A, $), b.el = rt.el;
          }
          if (be && Oe(be, A), !ht && (W = ne && ne.onVnodeMounted)) {
            const rt = b;
            Oe(() => et(W, fe, rt), A);
          }
          (b.shapeFlag & 256 || fe && bn(fe.vnode) && fe.vnode.shapeFlag & 256) && y.a && Oe(y.a, A), y.isMounted = true, b = T = M = null;
        }
      };
      y.scope.on();
      const D = y.effect = new Yc(j);
      y.scope.off();
      const I = y.update = D.run.bind(D), X = y.job = D.runIfDirty.bind(D);
      X.i = y, X.id = y.uid, D.scheduler = () => na(X), Sn(y, true), I();
    }, z = (y, b, T) => {
      b.component = y;
      const M = y.vnode.props;
      y.vnode = b, y.next = null, kh(y, b.props, M, T), Ph(y, b.children, T), zt(), Da(y), Jt();
    }, J = (y, b, T, M, A, $, H, j, D = false) => {
      const I = y && y.children, X = y ? y.shapeFlag : 0, W = b.children, { patchFlag: Q, shapeFlag: ne } = b;
      if (Q > 0) {
        if (Q & 128) {
          nn(I, W, T, M, A, $, H, j, D);
          return;
        } else if (Q & 256) {
          Ae(I, W, T, M, A, $, H, j, D);
          return;
        }
      }
      ne & 8 ? (X & 16 && ut(I, A, $), W !== I && c(T, W)) : X & 16 ? ne & 16 ? nn(I, W, T, M, A, $, H, j, D) : ut(I, A, $, true) : (X & 8 && c(T, ""), ne & 16 && N(W, T, M, A, $, H, j, D));
    }, Ae = (y, b, T, M, A, $, H, j, D) => {
      y = y || Gn, b = b || Gn;
      const I = y.length, X = b.length, W = Math.min(I, X);
      let Q;
      for (Q = 0; Q < W; Q++) {
        const ne = b[Q] = D ? fn(b[Q]) : it(b[Q]);
        g(y[Q], ne, T, null, A, $, H, j, D);
      }
      I > X ? ut(y, A, $, true, false, W) : N(b, T, M, A, $, H, j, D, W);
    }, nn = (y, b, T, M, A, $, H, j, D) => {
      let I = 0;
      const X = b.length;
      let W = y.length - 1, Q = X - 1;
      for (; I <= W && I <= Q; ) {
        const ne = y[I], se = b[I] = D ? fn(b[I]) : it(b[I]);
        if (gt(ne, se)) g(ne, se, T, null, A, $, H, j, D);
        else break;
        I++;
      }
      for (; I <= W && I <= Q; ) {
        const ne = y[W], se = b[Q] = D ? fn(b[Q]) : it(b[Q]);
        if (gt(ne, se)) g(ne, se, T, null, A, $, H, j, D);
        else break;
        W--, Q--;
      }
      if (I > W) {
        if (I <= Q) {
          const ne = Q + 1, se = ne < X ? b[ne].el : M;
          for (; I <= Q; ) g(null, b[I] = D ? fn(b[I]) : it(b[I]), T, se, A, $, H, j, D), I++;
        }
      } else if (I > Q) for (; I <= W; ) Ye(y[I], A, $, true), I++;
      else {
        const ne = I, se = I, be = /* @__PURE__ */ new Map();
        for (I = se; I <= Q; I++) {
          const ot = b[I] = D ? fn(b[I]) : it(b[I]);
          ot.key != null && be.set(ot.key, I);
        }
        let fe, nt = 0;
        const Be = Q - se + 1;
        let ht = false, rt = 0;
        const yr = new Array(Be);
        for (I = 0; I < Be; I++) yr[I] = 0;
        for (I = ne; I <= W; I++) {
          const ot = y[I];
          if (nt >= Be) {
            Ye(ot, A, $, true);
            continue;
          }
          let Ct;
          if (ot.key != null) Ct = be.get(ot.key);
          else for (fe = se; fe <= Q; fe++) if (yr[fe - se] === 0 && gt(ot, b[fe])) {
            Ct = fe;
            break;
          }
          Ct === void 0 ? Ye(ot, A, $, true) : (yr[Ct - se] = I + 1, Ct >= rt ? rt = Ct : ht = true, g(ot, b[Ct], T, null, A, $, H, j, D), nt++);
        }
        const La = ht ? Oh(yr) : Gn;
        for (fe = La.length - 1, I = Be - 1; I >= 0; I--) {
          const ot = se + I, Ct = b[ot], Ma = ot + 1 < X ? b[ot + 1].el : M;
          yr[I] === 0 ? g(null, Ct, T, Ma, A, $, H, j, D) : ht && (fe < 0 || I !== La[fe] ? Rt(Ct, T, Ma, 2) : fe--);
        }
      }
    }, Rt = (y, b, T, M, A = null) => {
      const { el: $, type: H, transition: j, children: D, shapeFlag: I } = y;
      if (I & 6) {
        Rt(y.component.subTree, b, T, M);
        return;
      }
      if (I & 128) {
        y.suspense.move(b, T, M);
        return;
      }
      if (I & 64) {
        H.move(y, b, T, Y);
        return;
      }
      if (H === we) {
        r($, b, T);
        for (let W = 0; W < D.length; W++) Rt(D[W], b, T, M);
        r(y.anchor, b, T);
        return;
      }
      if (H === xr) {
        m(y, b, T);
        return;
      }
      if (M !== 2 && I & 1 && j) if (M === 0) j.beforeEnter($), r($, b, T), Oe(() => j.enter($), A);
      else {
        const { leave: W, delayLeave: Q, afterLeave: ne } = j, se = () => {
          y.ctx.isUnmounted ? o($) : r($, b, T);
        }, be = () => {
          W($, () => {
            se(), ne && ne();
          });
        };
        Q ? Q($, se, be) : be();
      }
      else r($, b, T);
    }, Ye = (y, b, T, M = false, A = false) => {
      const { type: $, props: H, ref: j, children: D, dynamicChildren: I, shapeFlag: X, patchFlag: W, dirs: Q, cacheIndex: ne } = y;
      if (W === -2 && (A = false), j != null && (zt(), Hr(j, null, T, y, true), Jt()), ne != null && (b.renderCache[ne] = void 0), X & 256) {
        b.ctx.deactivate(y);
        return;
      }
      const se = X & 1 && Q, be = !bn(y);
      let fe;
      if (be && (fe = H && H.onVnodeBeforeUnmount) && et(fe, b, y), X & 6) ao(y.component, T, M);
      else {
        if (X & 128) {
          y.suspense.unmount(T, M);
          return;
        }
        se && Mt(y, null, b, "beforeUnmount"), X & 64 ? y.type.remove(y, b, T, Y, M) : I && !I.hasOnce && ($ !== we || W > 0 && W & 64) ? ut(I, b, T, false, true) : ($ === we && W & 384 || !A && X & 16) && ut(D, b, T), M && Dn(y);
      }
      (be && (fe = H && H.onVnodeUnmounted) || se) && Oe(() => {
        fe && et(fe, b, y), se && Mt(y, null, b, "unmounted");
      }, T);
    }, Dn = (y) => {
      const { type: b, el: T, anchor: M, transition: A } = y;
      if (b === we) {
        jn(T, M);
        return;
      }
      if (b === xr) {
        v(y);
        return;
      }
      const $ = () => {
        o(T), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (y.shapeFlag & 1 && A && !A.persisted) {
        const { leave: H, delayLeave: j } = A, D = () => H(T, $);
        j ? j(y.el, $, D) : D();
      } else $();
    }, jn = (y, b) => {
      let T;
      for (; y !== b; ) T = p(y), o(y), y = T;
      o(b);
    }, ao = (y, b, T) => {
      const { bum: M, scope: A, job: $, subTree: H, um: j, m: D, a: I, parent: X, slots: { __: W } } = y;
      Ho(D), Ho(I), M && Yn(M), X && G(W) && W.forEach((Q) => {
        X.renderCache[Q] = void 0;
      }), A.stop(), $ && ($.flags |= 8, Ye(H, y, b, T)), j && Oe(j, b), Oe(() => {
        y.isUnmounted = true;
      }, b), b && b.pendingBranch && !b.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve());
    }, ut = (y, b, T, M = false, A = false, $ = 0) => {
      for (let H = $; H < y.length; H++) Ye(y[H], b, T, M, A);
    }, x = (y) => {
      if (y.shapeFlag & 6) return x(y.component.subTree);
      if (y.shapeFlag & 128) return y.suspense.next();
      const b = p(y.anchor || y.el), T = b && b[_u];
      return T ? p(T) : b;
    };
    let V = false;
    const U = (y, b, T) => {
      y == null ? b._vnode && Ye(b._vnode, null, null, true) : g(b._vnode || null, y, b, null, null, null, T), b._vnode = y, V || (V = true, Da(), Do(), V = false);
    }, Y = {
      p: g,
      um: Ye,
      m: Rt,
      r: Dn,
      mt: Z,
      mc: N,
      pc: J,
      pbc: O,
      n: x,
      o: e
    };
    let le, ke;
    return t && ([le, ke] = t(Y)), {
      render: U,
      hydrate: le,
      createApp: Sh(U, le)
    };
  }
  function Is({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function Sn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Qu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function la(e, t, n = false) {
    const r = e.children, o = t.children;
    if (G(r) && G(o)) for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = fn(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && la(i, a)), a.type === xn && (a.el = i.el), a.type === Ce && !a.el && (a.el = i.el);
    }
  }
  function Oh(e) {
    const t = e.slice(), n = [
      0
    ];
    let r, o, s, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
      const u = e[r];
      if (u !== 0) {
        if (o = n[n.length - 1], e[o] < u) {
          t[r] = o, n.push(r);
          continue;
        }
        for (s = 0, i = n.length - 1; s < i; ) a = s + i >> 1, e[n[a]] < u ? s = a + 1 : i = a;
        u < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r);
      }
    }
    for (s = n.length, i = n[s - 1]; s-- > 0; ) n[s] = i, i = t[i];
    return n;
  }
  function Xu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Xu(t);
  }
  function Ho(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Lh = Symbol.for("v-scx"), Mh = () => Te(Lh);
  Zu = function(e, t) {
    return Zr(e, null, t);
  };
  sE = function(e, t) {
    return Zr(e, null, {
      flush: "post"
    });
  };
  $h = function(e, t) {
    return Zr(e, null, {
      flush: "sync"
    });
  };
  at = function(e, t, n) {
    return Zr(e, t, n);
  };
  function Zr(e, t, n = ae) {
    const { immediate: r, deep: o, flush: s, once: i } = n, a = Pe({}, n), l = t && r || !t && s !== "post";
    let u;
    if (rr) {
      if (s === "sync") {
        const d = Mh();
        u = d.__watcherHandles || (d.__watcherHandles = []);
      } else if (!l) {
        const d = () => {
        };
        return d.stop = Bt, d.resume = Bt, d.pause = Bt, d;
      }
    }
    const c = Le;
    a.call = (d, h, g) => _t(d, c, h, g);
    let f = false;
    s === "post" ? a.scheduler = (d) => {
      Oe(d, c && c.suspense);
    } : s !== "sync" && (f = true, a.scheduler = (d, h) => {
      h ? d() : na(d);
    }), a.augmentJob = (d) => {
      t && (d.flags |= 4), f && (d.flags |= 2, c && (d.id = c.uid, d.i = c));
    };
    const p = Qp(e, t, a);
    return rr && (u ? u.push(p) : l && p()), p;
  }
  function Ih(e, t, n) {
    const r = this.proxy, o = Ee(e) ? e.includes(".") ? ef(r, e) : () => r[e] : e.bind(r, r);
    let s;
    te(t) ? s = t : (s = t.handler, n = t);
    const i = $n(this), a = Zr(o, s.bind(r), n);
    return i(), a;
  }
  function ef(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  iE = function(e, t, n = ae) {
    const r = tt(), o = ct(t), s = Xt(t), i = tf(e, o), a = cs((l, u) => {
      let c, f = ae, p;
      return $h(() => {
        const d = e[o];
        Ge(c, d) && (c = d, u());
      }), {
        get() {
          return l(), n.get ? n.get(c) : c;
        },
        set(d) {
          const h = n.set ? n.set(d) : d;
          if (!Ge(h, c) && !(f !== ae && Ge(d, f))) return;
          const g = r.vnode.props;
          g && (t in g || o in g || s in g) && (`onUpdate:${t}` in g || `onUpdate:${o}` in g || `onUpdate:${s}` in g) || (c = d, u()), r.emit(`update:${t}`, h), Ge(d, h) && Ge(d, f) && !Ge(h, p) && u(), f = d, p = h;
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
  const tf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${Xt(t)}Modifiers`];
  function Nh(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ae;
    let o = n;
    const s = t.startsWith("update:"), i = s && tf(r, t.slice(7));
    i && (i.trim && (o = n.map((c) => Ee(c) ? c.trim() : c)), i.number && (o = n.map(ii)));
    let a, l = r[a = Rs(t)] || r[a = Rs(ct(t))];
    !l && s && (l = r[a = Rs(Xt(t))]), l && _t(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, _t(u, e, 6, o);
    }
  }
  function nf(e, t, n = false) {
    const r = t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {}, a = false;
    if (!te(e)) {
      const l = (u) => {
        const c = nf(u, t, true);
        c && (a = true, Pe(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !s && !a ? (ye(e) && r.set(e, null), null) : (G(s) ? s.forEach((l) => i[l] = null) : Pe(i, s), ye(e) && r.set(e, i), i);
  }
  function ds(e, t) {
    return !e || !zr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, Xt(t)) || ue(e, t));
  }
  function Ns(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: p, setupState: d, ctx: h, inheritAttrs: g } = e, S = jo(e);
    let E, _;
    try {
      if (n.shapeFlag & 4) {
        const v = o || r, w = v;
        E = it(u.call(w, v, c, f, d, p, h)), _ = a;
      } else {
        const v = t;
        E = it(v.length > 1 ? v(f, {
          attrs: a,
          slots: i,
          emit: l
        }) : v(f, null)), _ = t.props ? a : Dh(a);
      }
    } catch (v) {
      Or.length = 0, cr(v, e, 1), E = ge(Ce);
    }
    let m = E;
    if (_ && g !== false) {
      const v = Object.keys(_), { shapeFlag: w } = m;
      v.length && w & 7 && (s && v.some(Gi) && (_ = jh(_, s)), m = lt(m, _, false, true));
    }
    return n.dirs && (m = lt(m, null, false, true), m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs), n.transition && wn(m, n.transition), E = m, jo(S), E;
  }
  function Bh(e, t = true) {
    let n;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (Mn(o)) {
        if (o.type !== Ce || o.children === "v-if") {
          if (n) return;
          n = o;
        }
      } else return;
    }
    return n;
  }
  const Dh = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || zr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, jh = (e, t) => {
    const n = {};
    for (const r in e) (!Gi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function Fh(e, t, n) {
    const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && l >= 0) {
      if (l & 1024) return true;
      if (l & 16) return r ? Qa(r, i, u) : !!i;
      if (l & 8) {
        const c = t.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const p = c[f];
          if (i[p] !== r[p] && !ds(u, p)) return true;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? true : r === i ? false : r ? i ? Qa(r, i, u) : true : !!i;
    return false;
  }
  function Qa(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (t[s] !== e[s] && !ds(n, s)) return true;
    }
    return false;
  }
  function ps({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Uo = (e) => e.__isSuspense;
  let yi = 0;
  const Hh = {
    name: "Suspense",
    __isSuspense: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      if (e == null) Uh(t, n, r, o, s, i, a, l, u);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return;
        }
        Wh(e, t, n, r, o, i, a, l, u);
      }
    },
    hydrate: Vh,
    normalize: qh
  }, ca = Hh;
  function Wr(e, t) {
    const n = e.props && e.props[t];
    te(n) && n();
  }
  function Uh(e, t, n, r, o, s, i, a, l) {
    const { p: u, o: { createElement: c } } = l, f = c("div"), p = e.suspense = rf(e, o, r, t, f, n, s, i, a, l);
    u(null, p.pendingBranch = e.ssContent, f, null, r, p, s, i), p.deps > 0 ? (Wr(e, "onPending"), Wr(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, s, i), Zn(p, e.ssFallback)) : p.resolve(false, true);
  }
  function Wh(e, t, n, r, o, s, i, a, { p: l, um: u, o: { createElement: c } }) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const p = t.ssContent, d = t.ssFallback, { activeBranch: h, pendingBranch: g, isInFallback: S, isHydrating: E } = f;
    if (g) f.pendingBranch = p, gt(p, g) ? (l(g, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : S && (E || (l(h, d, n, r, o, null, s, i, a), Zn(f, d)))) : (f.pendingId = yi++, E ? (f.isHydrating = false, f.activeBranch = g) : u(g, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), S ? (l(null, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : (l(h, d, n, r, o, null, s, i, a), Zn(f, d))) : h && gt(p, h) ? (l(h, p, n, r, o, f, s, i, a), f.resolve(true)) : (l(null, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
    else if (h && gt(p, h)) l(h, p, n, r, o, f, s, i, a), Zn(f, p);
    else if (Wr(t, "onPending"), f.pendingBranch = p, p.shapeFlag & 512 ? f.pendingId = p.component.suspenseId : f.pendingId = yi++, l(null, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0) f.resolve();
    else {
      const { timeout: _, pendingId: m } = f;
      _ > 0 ? setTimeout(() => {
        f.pendingId === m && f.fallback(d);
      }, _) : _ === 0 && f.fallback(d);
    }
  }
  function rf(e, t, n, r, o, s, i, a, l, u, c = false) {
    const { p: f, m: p, um: d, n: h, o: { parentNode: g, remove: S } } = u;
    let E;
    const _ = Kh(e);
    _ && t && t.pendingBranch && (E = t.pendingId, t.deps++);
    const m = e.props ? Wc(e.props.timeout) : void 0, v = s, w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: o,
      deps: 0,
      pendingId: yi++,
      timeout: typeof m == "number" ? m : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: false,
      effects: [],
      resolve(P = false, L = false) {
        const { vnode: N, activeBranch: C, pendingBranch: O, pendingId: k, effects: R, parentComponent: B, container: Z } = w;
        let ee = false;
        w.isHydrating ? w.isHydrating = false : P || (ee = C && O.transition && O.transition.mode === "out-in", ee && (C.transition.afterLeave = () => {
          k === w.pendingId && (p(O, Z, s === v ? h(C) : s, 0), ui(R));
        }), C && (g(C.el) === Z && (s = h(C)), d(C, B, w, true)), ee || p(O, Z, s, 0)), Zn(w, O), w.pendingBranch = null, w.isInFallback = false;
        let F = w.parent, z = false;
        for (; F; ) {
          if (F.pendingBranch) {
            F.effects.push(...R), z = true;
            break;
          }
          F = F.parent;
        }
        !z && !ee && ui(R), w.effects = [], _ && t && t.pendingBranch && E === t.pendingId && (t.deps--, t.deps === 0 && !L && t.resolve()), Wr(N, "onResolve");
      },
      fallback(P) {
        if (!w.pendingBranch) return;
        const { vnode: L, activeBranch: N, parentComponent: C, container: O, namespace: k } = w;
        Wr(L, "onFallback");
        const R = h(N), B = () => {
          w.isInFallback && (f(null, P, O, R, C, null, k, a, l), Zn(w, P));
        }, Z = P.transition && P.transition.mode === "out-in";
        Z && (N.transition.afterLeave = B), w.isInFallback = true, d(N, C, null, true), Z || B();
      },
      move(P, L, N) {
        w.activeBranch && p(w.activeBranch, P, L, N), w.container = P;
      },
      next() {
        return w.activeBranch && h(w.activeBranch);
      },
      registerDep(P, L, N) {
        const C = !!w.pendingBranch;
        C && w.deps++;
        const O = P.vnode.el;
        P.asyncDep.catch((k) => {
          cr(k, P, 0);
        }).then((k) => {
          if (P.isUnmounted || w.isUnmounted || w.pendingId !== P.suspenseId) return;
          P.asyncResolved = true;
          const { vnode: R } = P;
          _i(P, k), O && (R.el = O);
          const B = !O && P.subTree.el;
          L(P, R, g(O || P.subTree.el), O ? null : h(P.subTree), w, i, N), B && S(B), ps(P, R.el), C && --w.deps === 0 && w.resolve();
        });
      },
      unmount(P, L) {
        w.isUnmounted = true, w.activeBranch && d(w.activeBranch, n, P, L), w.pendingBranch && d(w.pendingBranch, n, P, L);
      }
    };
    return w;
  }
  function Vh(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = rf(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, true), c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(false, true), c;
  }
  function qh(e) {
    const { shapeFlag: t, children: n } = e, r = t & 32;
    e.ssContent = Xa(r ? n.default : n), e.ssFallback = r ? Xa(n.fallback) : ge(Ce);
  }
  function Xa(e) {
    let t;
    if (te(e)) {
      const n = Ln && e._c;
      n && (e._d = false, q()), e = e(), n && (e._d = true, t = Fe, sf());
    }
    return G(e) && (e = Bh(e)), e = it(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function of(e, t) {
    t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : ui(e);
  }
  function Zn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let o = t.el;
    for (; !o && t.component; ) t = t.component.subTree, o = t.el;
    n.el = o, r && r.subTree === n && (r.vnode.el = o, ps(r, o));
  }
  function Kh(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  let xn, xr, Or;
  we = Symbol.for("v-fgt");
  xn = Symbol.for("v-txt");
  Ce = Symbol.for("v-cmt");
  xr = Symbol.for("v-stc");
  Or = [];
  let Fe = null;
  q = function(e = false) {
    Or.push(Fe = e ? null : []);
  };
  function sf() {
    Or.pop(), Fe = Or[Or.length - 1] || null;
  }
  let Ln = 1;
  function Za(e, t = false) {
    Ln += e, e < 0 && Fe && t && (Fe.hasOnce = true);
  }
  function af(e) {
    return e.dynamicChildren = Ln > 0 ? Fe || Gn : null, sf(), Ln > 0 && Fe && Fe.push(e), e;
  }
  de = function(e, t, n, r, o, s) {
    return af(st(e, t, n, r, o, s, true));
  };
  oe = function(e, t, n, r, o) {
    return af(ge(e, t, n, r, o, true));
  };
  function Mn(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function gt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const lf = ({ key: e }) => e ?? null, xo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Ee(e) || Se(e) || te(e) ? {
    i: Me,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  st = function(e, t = null, n = null, r = 0, o = null, s = e === we ? 0 : 1, i = false, a = false) {
    const l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && lf(t),
      ref: t && xo(t),
      scopeId: bu,
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
      shapeFlag: s,
      patchFlag: r,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: Me
    };
    return a ? (ua(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Ee(n) ? 8 : 16), Ln > 0 && !i && Fe && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Fe.push(l), l;
  };
  ge = Gh;
  function Gh(e, t = null, n = null, r = 0, o = null, s = false) {
    if ((!e || e === Iu) && (e = Ce), Mn(e)) {
      const a = lt(e, t, true);
      return n && ua(a, n), Ln > 0 && !s && Fe && (a.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = a : Fe.push(a)), a.patchFlag = -2, a;
    }
    if (tm(e) && (e = e.__vccOpts), t) {
      t = cf(t);
      let { class: a, style: l } = t;
      a && !Ee(a) && (t.class = Jr(a)), ye(l) && (ea(l) && !G(l) && (l = Pe({}, l)), t.style = os(l));
    }
    const i = Ee(e) ? 1 : Uo(e) ? 128 : wu(e) ? 64 : ye(e) ? 4 : te(e) ? 2 : 0;
    return st(e, t, n, r, o, i, s, true);
  }
  cf = function(e) {
    return e ? ea(e) || Vu(e) ? Pe({}, e) : e : null;
  };
  lt = function(e, t, n = false, r = false) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? eo(o || {}, t) : o, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && lf(u),
      ref: t && t.ref ? n && s ? G(s) ? s.concat(xo(t)) : [
        s,
        xo(t)
      ] : xo(t) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== we ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && lt(e.ssContent),
      ssFallback: e.ssFallback && lt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return l && r && wn(c, l.clone(c)), c;
  };
  fr = function(e = " ", t = 0) {
    return ge(xn, null, e, t);
  };
  zh = function(e, t) {
    const n = ge(xr, null, e);
    return n.staticCount = t, n;
  };
  tn = function(e = "", t = false) {
    return t ? (q(), oe(Ce, null, e)) : ge(Ce, null, e);
  };
  function it(e) {
    return e == null || typeof e == "boolean" ? ge(Ce) : G(e) ? ge(we, null, e.slice()) : Mn(e) ? fn(e) : ge(xn, null, String(e));
  }
  function fn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
  }
  function ua(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (G(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), ua(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Vu(t) ? t._ctx = Me : o === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else te(t) ? (t = {
      default: t,
      _ctx: Me
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      fr(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  eo = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = Jr([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = os([
        t.style,
        r.style
      ]);
      else if (zr(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(G(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
    }
    return t;
  };
  function et(e, t, n, r = null) {
    _t(e, t, 7, [
      n,
      r
    ]);
  }
  const Jh = Hu();
  let Yh = 0;
  function Qh(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || Jh, s = {
      uid: Yh++,
      vnode: e,
      type: r,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      job: null,
      scope: new Jc(true),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      ids: t ? t.ids : [
        "",
        0,
        0
      ],
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ku(r, o),
      emitsOptions: nf(r, o),
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
    return s.ctx = {
      _: s
    }, s.root = t ? t.root : s, s.emit = Nh.bind(null, s), e.ce && e.ce(s), s;
  }
  let Le = null;
  tt = () => Le || Me;
  let Wo, vi;
  {
    const e = rs(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
        o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
      };
    };
    Wo = t("__VUE_INSTANCE_SETTERS__", (n) => Le = n), vi = t("__VUE_SSR_SETTERS__", (n) => rr = n);
  }
  const $n = (e) => {
    const t = Le;
    return Wo(e), e.scope.on(), () => {
      e.scope.off(), Wo(t);
    };
  }, bi = () => {
    Le && Le.scope.off(), Wo(null);
  };
  function uf(e) {
    return e.vnode.shapeFlag & 4;
  }
  let rr = false;
  function Xh(e, t = false, n = false) {
    t && vi(t);
    const { props: r, children: o } = e.vnode, s = uf(e);
    Eh(e, r, s, t), Ch(e, o, n || t);
    const i = s ? Zh(e, t) : void 0;
    return t && vi(false), i;
  }
  function Zh(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, mh);
    const { setup: r } = n;
    if (r) {
      zt();
      const o = e.setupContext = r.length > 1 ? df(e) : null, s = $n(e), i = Qr(r, e, 0, [
        e.props,
        o
      ]), a = Ji(i);
      if (Jt(), s(), (a || e.sp) && !bn(e) && oa(e), a) {
        if (i.then(bi, bi), t) return i.then((l) => {
          _i(e, l);
        }).catch((l) => {
          cr(l, e, 0);
        });
        e.asyncDep = i;
      } else _i(e, i);
    } else ff(e);
  }
  function _i(e, t, n) {
    te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ye(t) && (e.setupState = hu(t)), ff(e);
  }
  function ff(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Bt);
    {
      const o = $n(e);
      zt();
      try {
        gh(e);
      } finally {
        Jt(), o();
      }
    }
  }
  const em = {
    get(e, t) {
      return je(e, "get", ""), e[t];
    }
  };
  function df(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, em),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function hs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(hu(Qn(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Ar) return Ar[n](e);
      },
      has(t, n) {
        return n in t || n in Ar;
      }
    })) : e.proxy;
  }
  function wi(e, t = true) {
    return te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function tm(e) {
    return te(e) && "__vccOpts" in e;
  }
  K = (e, t) => Jp(e, t, rr);
  he = function(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ye(t) && !G(t) ? Mn(t) ? ge(e, null, [
      t
    ]) : ge(e, t) : ge(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Mn(n) && (n = [
      n
    ]), ge(e, t, n));
  };
  aE = function(e, t, n, r) {
    const o = n[r];
    if (o && nm(o, e)) return o;
    const s = t();
    return s.memo = e.slice(), s.cacheIndex = r, n[r] = s;
  };
  function nm(e, t) {
    const n = e.memo;
    if (n.length != t.length) return false;
    for (let r = 0; r < n.length; r++) if (Ge(n[r], t[r])) return false;
    return Ln > 0 && Fe && Fe.push(e), true;
  }
  const rm = "3.5.14";
  let Si;
  const el = typeof window < "u" && window.trustedTypes;
  if (el) try {
    Si = el.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let pf, om, sm, Ft, tl, im, rn, br, or, hf, mf, am, En, nl;
  pf = Si ? (e) => Si.createHTML(e) : (e) => e;
  om = "http://www.w3.org/2000/svg";
  sm = "http://www.w3.org/1998/Math/MathML";
  Ft = typeof document < "u" ? document : null;
  tl = Ft && Ft.createElement("template");
  im = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? Ft.createElementNS(om, e) : t === "mathml" ? Ft.createElementNS(sm, e) : n ? Ft.createElement(e, {
        is: n
      }) : Ft.createElement(e);
      return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
    },
    createText: (e) => Ft.createTextNode(e),
    createComment: (e) => Ft.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ft.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === s || !(o = o.nextSibling)); ) ;
      else {
        tl.innerHTML = pf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = tl.content;
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
  rn = "transition";
  br = "animation";
  or = Symbol("_vtc");
  hf = {
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
  mf = Pe({}, Tu, hf);
  am = (e) => (e.displayName = "Transition", e.props = mf, e);
  lm = am((e, { slots: t }) => he(nh, gf(e), t));
  En = (e, t = []) => {
    G(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  nl = (e) => e ? G(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function gf(e) {
    const t = {};
    for (const R in e) R in hf || (t[R] = e[R]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: s = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = i, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: d = `${n}-leave-to` } = e, h = cm(o), g = h && h[0], S = h && h[1], { onBeforeEnter: E, onEnter: _, onEnterCancelled: m, onLeave: v, onLeaveCancelled: w, onBeforeAppear: P = E, onAppear: L = _, onAppearCancelled: N = m } = t, C = (R, B, Z, ee) => {
      R._enterCancelled = ee, an(R, B ? c : a), an(R, B ? u : i), Z && Z();
    }, O = (R, B) => {
      R._isLeaving = false, an(R, f), an(R, d), an(R, p), B && B();
    }, k = (R) => (B, Z) => {
      const ee = R ? L : _, F = () => C(B, R, Z);
      En(ee, [
        B,
        F
      ]), rl(() => {
        an(B, R ? l : s), At(B, R ? c : a), nl(ee) || ol(B, r, g, F);
      });
    };
    return Pe(t, {
      onBeforeEnter(R) {
        En(E, [
          R
        ]), At(R, s), At(R, i);
      },
      onBeforeAppear(R) {
        En(P, [
          R
        ]), At(R, l), At(R, u);
      },
      onEnter: k(false),
      onAppear: k(true),
      onLeave(R, B) {
        R._isLeaving = true;
        const Z = () => O(R, B);
        At(R, f), R._enterCancelled ? (At(R, p), Ei()) : (Ei(), At(R, p)), rl(() => {
          R._isLeaving && (an(R, f), At(R, d), nl(v) || ol(R, r, S, Z));
        }), En(v, [
          R,
          Z
        ]);
      },
      onEnterCancelled(R) {
        C(R, false, void 0, true), En(m, [
          R
        ]);
      },
      onAppearCancelled(R) {
        C(R, true, void 0, true), En(N, [
          R
        ]);
      },
      onLeaveCancelled(R) {
        O(R), En(w, [
          R
        ]);
      }
    });
  }
  function cm(e) {
    if (e == null) return null;
    if (ye(e)) return [
      Bs(e.enter),
      Bs(e.leave)
    ];
    {
      const t = Bs(e);
      return [
        t,
        t
      ];
    }
  }
  function Bs(e) {
    return Wc(e);
  }
  function At(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[or] || (e[or] = /* @__PURE__ */ new Set())).add(t);
  }
  function an(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[or];
    n && (n.delete(t), n.size || (e[or] = void 0));
  }
  function rl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let um = 0;
  function ol(e, t, n, r) {
    const o = e._endId = ++um, s = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(s, n);
    const { type: i, timeout: a, propCount: l } = yf(e, t);
    if (!i) return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
      e.removeEventListener(u, p), s();
    }, p = (d) => {
      d.target === e && ++c >= l && f();
    };
    setTimeout(() => {
      c < l && f();
    }, a + 1), e.addEventListener(u, p);
  }
  function yf(e, t) {
    const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), o = r(`${rn}Delay`), s = r(`${rn}Duration`), i = sl(o, s), a = r(`${br}Delay`), l = r(`${br}Duration`), u = sl(a, l);
    let c = null, f = 0, p = 0;
    t === rn ? i > 0 && (c = rn, f = i, p = s.length) : t === br ? u > 0 && (c = br, f = u, p = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? rn : br : null, p = c ? c === rn ? s.length : l.length : 0);
    const d = c === rn && /\b(transform|all)(,|$)/.test(r(`${rn}Property`).toString());
    return {
      type: c,
      timeout: f,
      propCount: p,
      hasTransform: d
    };
  }
  function sl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => il(n) + il(e[r])));
  }
  function il(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Ei() {
    return document.body.offsetHeight;
  }
  function fm(e, t, n) {
    const r = e[or];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let Vo, vf;
  Vo = Symbol("_vod");
  vf = Symbol("_vsh");
  lE = {
    beforeMount(e, { value: t }, { transition: n }) {
      e[Vo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : _r(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), _r(e, true), r.enter(e)) : r.leave(e, () => {
        _r(e, false);
      }) : _r(e, t));
    },
    beforeUnmount(e, { value: t }) {
      _r(e, t);
    }
  };
  function _r(e, t) {
    e.style.display = t ? e[Vo] : "none", e[vf] = !t;
  }
  const dm = Symbol(""), pm = /(^|;)\s*display\s*:/;
  function hm(e, t, n) {
    const r = e.style, o = Ee(n);
    let s = false;
    if (n && !o) {
      if (t) if (Ee(t)) for (const i of t.split(";")) {
        const a = i.slice(0, i.indexOf(":")).trim();
        n[a] == null && Oo(r, a, "");
      }
      else for (const i in t) n[i] == null && Oo(r, i, "");
      for (const i in n) i === "display" && (s = true), Oo(r, i, n[i]);
    } else if (o) {
      if (t !== n) {
        const i = r[dm];
        i && (n += ";" + i), r.cssText = n, s = pm.test(n);
      }
    } else t && e.removeAttribute("style");
    Vo in e && (e[Vo] = s ? r.display : "", e[vf] && (r.display = "none"));
  }
  const al = /\s*!important$/;
  function Oo(e, t, n) {
    if (G(n)) n.forEach((r) => Oo(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = mm(e, t);
      al.test(n) ? e.setProperty(Xt(r), n.replace(al, ""), "important") : e[r] = n;
    }
  }
  const ll = [
    "Webkit",
    "Moz",
    "ms"
  ], Ds = {};
  function mm(e, t) {
    const n = Ds[t];
    if (n) return n;
    let r = ct(t);
    if (r !== "filter" && r in e) return Ds[t] = r;
    r = ns(r);
    for (let o = 0; o < ll.length; o++) {
      const s = ll[o] + r;
      if (s in e) return Ds[t] = s;
    }
    return t;
  }
  const cl = "http://www.w3.org/1999/xlink";
  function ul(e, t, n, r, o, s = wp(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(cl, t.slice(6, t.length)) : e.setAttributeNS(cl, t, n) : n == null || s && !qc(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : bt(n) ? String(n) : n);
  }
  function fl(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? pf(n) : n);
      return;
    }
    const s = e.tagName;
    if (t === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const a = s === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
      (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
      return;
    }
    let i = false;
    if (n === "" || n == null) {
      const a = typeof e[t];
      a === "boolean" ? n = qc(n) : n == null && a === "string" ? (n = "", i = true) : a === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(o || t);
  }
  function hn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function gm(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const dl = Symbol("_vei");
  function ym(e, t, n, r, o = null) {
    const s = e[dl] || (e[dl] = {}), i = s[t];
    if (r && i) i.value = r;
    else {
      const [a, l] = vm(t);
      if (r) {
        const u = s[t] = wm(r, o);
        hn(e, a, u, l);
      } else i && (gm(e, a, i, l), s[t] = void 0);
    }
  }
  const pl = /(?:Once|Passive|Capture)$/;
  function vm(e) {
    let t;
    if (pl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(pl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Xt(e.slice(2)),
      t
    ];
  }
  let js = 0;
  const bm = Promise.resolve(), _m = () => js || (bm.then(() => js = 0), js = Date.now());
  function wm(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      _t(Sm(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = _m(), n;
  }
  function Sm(e, t) {
    if (G(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const hl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Em = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? fm(e, r, i) : t === "style" ? hm(e, n, r) : zr(t) ? Gi(t) || ym(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : km(e, t, r, i)) ? (fl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ul(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Ee(r)) ? fl(e, ct(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ul(e, t, r, i));
  };
  function km(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && hl(t) && te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return hl(t) && Ee(n) ? false : t in e;
  }
  let bf, _f, qo, ml, Tm, Rm;
  bf = /* @__PURE__ */ new WeakMap();
  _f = /* @__PURE__ */ new WeakMap();
  qo = Symbol("_moveCb");
  ml = Symbol("_enterCb");
  Tm = (e) => (delete e.props.mode, e);
  Rm = Tm({
    name: "TransitionGroup",
    props: Pe({}, mf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = tt(), r = ku();
      let o, s;
      return sa(() => {
        if (!o.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!xm(o[0].el, n.vnode.el, i)) {
          o = [];
          return;
        }
        o.forEach(Cm), o.forEach(Pm);
        const a = o.filter(Am);
        Ei(), a.forEach((l) => {
          const u = l.el, c = u.style;
          At(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[qo] = (p) => {
            p && p.target !== u || (!p || /transform$/.test(p.propertyName)) && (u.removeEventListener("transitionend", f), u[qo] = null, an(u, i));
          };
          u.addEventListener("transitionend", f);
        }), o = [];
      }), () => {
        const i = ie(e), a = gf(i);
        let l = i.tag || we;
        if (o = [], s) for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), wn(c, Fr(c, a, r, n)), bf.set(c, c.el.getBoundingClientRect()));
        }
        s = t.default ? ra(t.default()) : [];
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.key != null && wn(c, Fr(c, a, r, n));
        }
        return ge(l, null, s);
      };
    }
  });
  cE = Rm;
  function Cm(e) {
    const t = e.el;
    t[qo] && t[qo](), t[ml] && t[ml]();
  }
  function Pm(e) {
    _f.set(e, e.el.getBoundingClientRect());
  }
  function Am(e) {
    const t = bf.get(e), n = _f.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
    }
  }
  function xm(e, t, n) {
    const r = e.cloneNode(), o = e[or];
    o && o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const { hasTransform: i } = yf(r);
    return s.removeChild(r), i;
  }
  const sr = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return G(t) ? (n) => Yn(t, n) : t;
  };
  function Om(e) {
    e.target.composing = true;
  }
  function gl(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  let Gt;
  Gt = Symbol("_assign");
  uE = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[Gt] = sr(o);
      const s = r || o.props && o.props.type === "number";
      hn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), s && (a = ii(a)), e[Gt](a);
      }), n && hn(e, "change", () => {
        e.value = e.value.trim();
      }), t || (hn(e, "compositionstart", Om), hn(e, "compositionend", gl), hn(e, "change", gl));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
      if (e[Gt] = sr(i), e.composing) return;
      const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? ii(e.value) : e.value, l = t ?? "";
      a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
    }
  };
  fE = {
    deep: true,
    created(e, t, n) {
      e[Gt] = sr(n), hn(e, "change", () => {
        const r = e._modelValue, o = wf(e), s = e.checked, i = e[Gt];
        if (G(r)) {
          const a = Kc(r, o), l = a !== -1;
          if (s && !l) i(r.concat(o));
          else if (!s && l) {
            const u = [
              ...r
            ];
            u.splice(a, 1), i(u);
          }
        } else if (es(r)) {
          const a = new Set(r);
          s ? a.add(o) : a.delete(o), i(a);
        } else i(Sf(e, s));
      });
    },
    mounted: yl,
    beforeUpdate(e, t, n) {
      e[Gt] = sr(n), yl(e, t, n);
    }
  };
  function yl(e, { value: t, oldValue: n }, r) {
    e._modelValue = t;
    let o;
    if (G(t)) o = Kc(t, r.props.value) > -1;
    else if (es(t)) o = t.has(r.props.value);
    else {
      if (t === n) return;
      o = tr(t, Sf(e, true));
    }
    e.checked !== o && (e.checked = o);
  }
  dE = {
    created(e, { value: t }, n) {
      e.checked = tr(t, n.props.value), e[Gt] = sr(n), hn(e, "change", () => {
        e[Gt](wf(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      e[Gt] = sr(r), t !== n && (e.checked = tr(t, r.props.value));
    }
  };
  function wf(e) {
    return "_value" in e ? e._value : e.value;
  }
  function Sf(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  let Lm, Mm, $m, Ef;
  Lm = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  Mm = {
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
    exact: (e, t) => Lm.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  pE = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (o, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const a = Mm[t[i]];
        if (a && a(o, t)) return;
      }
      return e(o, ...s);
    });
  };
  $m = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  hE = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = (o) => {
      if (!("key" in o)) return;
      const s = Xt(o.key);
      if (t.some((i) => i === s || $m[i] === s)) return e(o);
    });
  };
  Ef = Pe({
    patchProp: Em
  }, im);
  let Lr, vl = false;
  function kf() {
    return Lr || (Lr = Ah(Ef));
  }
  function Im() {
    return Lr = vl ? Lr : xh(Ef), vl = true, Lr;
  }
  let Bm;
  mE = (...e) => {
    kf().render(...e);
  };
  Nm = (...e) => {
    const t = kf().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = Rf(r);
      if (!o) return;
      const s = t._component;
      !te(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
      const i = n(o, false, Tf(o));
      return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
    }, t;
  };
  Bm = (...e) => {
    const t = Im().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = Rf(r);
      if (o) return n(o, true, Tf(o));
    }, t;
  };
  function Tf(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Rf(e) {
    return Ee(e) ? document.querySelector(e) : e;
  }
  const Dm = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, jm = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Fm = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
  function Hm(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
      Um(e);
      return;
    }
    return t;
  }
  function Um(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
  }
  function Vr(e, t = {}) {
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
    if (!Fm.test(e)) {
      if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
      return e;
    }
    try {
      if (Dm.test(e) || jm.test(e)) {
        if (t.strict) throw new Error("[destr] Possible prototype pollution");
        return JSON.parse(e, Hm);
      }
      return JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
  const Cf = /#/g, Pf = /&/g, Af = /\//g, Wm = /=/g, Vm = /\?/g, ms = /\+/g, qm = /%5e/gi, Km = /%60/gi, Gm = /%7c/gi, zm = /%20/gi, Jm = /%252f/gi;
  function xf(e) {
    return encodeURI("" + e).replace(Gm, "|");
  }
  function ki(e) {
    return xf(typeof e == "string" ? e : JSON.stringify(e)).replace(ms, "%2B").replace(zm, "+").replace(Cf, "%23").replace(Pf, "%26").replace(Km, "`").replace(qm, "^").replace(Af, "%2F");
  }
  function Fs(e) {
    return ki(e).replace(Wm, "%3D");
  }
  Ym = function(e) {
    return xf(e).replace(Cf, "%23").replace(Vm, "%3F").replace(Jm, "%2F").replace(Pf, "%26").replace(ms, "%2B");
  };
  gE = function(e) {
    return Ym(e).replace(Af, "%2F");
  };
  function Ko(e = "") {
    try {
      return decodeURIComponent("" + e);
    } catch {
      return "" + e;
    }
  }
  function Qm(e) {
    return Ko(e.replace(ms, " "));
  }
  function Xm(e) {
    return Ko(e.replace(ms, " "));
  }
  function fa(e = "") {
    const t = /* @__PURE__ */ Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
      const r = n.match(/([^=]+)=?(.*)/) || [];
      if (r.length < 2) continue;
      const o = Qm(r[1]);
      if (o === "__proto__" || o === "constructor") continue;
      const s = Xm(r[2] || "");
      t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [
        t[o],
        s
      ];
    }
    return t;
  }
  function Zm(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((n) => `${Fs(e)}=${ki(n)}`).join("&") : `${Fs(e)}=${ki(t)}` : Fs(e);
  }
  function Of(e) {
    return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => Zm(t, e[t])).filter(Boolean).join("&");
  }
  const eg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, Lf = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, tg = /^([/\\]\s*){2,}[^/\\]/, ng = /^[\s\0]*(blob|data|javascript|vbscript):$/i, rg = /\/$|\/\?|\/#/, og = /^\.?\//;
  Tt = function(e, t = {}) {
    return typeof t == "boolean" && (t = {
      acceptRelative: t
    }), t.strict ? eg.test(e) : Lf.test(e) || (t.acceptRelative ? tg.test(e) : false);
  };
  function sg(e) {
    return !!e && ng.test(e);
  }
  function Ti(e = "", t) {
    return t ? rg.test(e) : e.endsWith("/");
  }
  function Qt(e = "", t) {
    if (!t) return (Ti(e) ? e.slice(0, -1) : e) || "/";
    if (!Ti(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o), r = e.slice(o));
    const [s, ...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function gs(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Ti(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o), r = e.slice(o), !n)) return r;
    const [s, ...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function ig(e = "") {
    return e.startsWith("/");
  }
  ag = function(e = "") {
    return ig(e) ? e : "/" + e;
  };
  function Ri(e, t) {
    if ($f(t) || Tt(e)) return e;
    const n = Qt(t);
    return e.startsWith(n) ? e : ys(n, e);
  }
  function bl(e, t) {
    if ($f(t)) return e;
    const n = Qt(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r;
  }
  function Mf(e, t) {
    const n = vs(e), r = {
      ...fa(n.search),
      ...t
    };
    return n.search = Of(r), dg(n);
  }
  function $f(e) {
    return !e || e === "/";
  }
  function lg(e) {
    return e && e !== "/";
  }
  ys = function(e, ...t) {
    let n = e || "";
    for (const r of t.filter((o) => lg(o))) if (n) {
      const o = r.replace(og, "");
      n = gs(n) + o;
    } else n = r;
    return n;
  };
  function If(...e) {
    var _a2, _b2, _c2, _d2;
    const t = /\/(?!\/)/, n = e.filter(Boolean), r = [];
    let o = 0;
    for (const i of n) if (!(!i || i === "/")) {
      for (const [a, l] of i.split(t).entries()) if (!(!l || l === ".")) {
        if (l === "..") {
          if (r.length === 1 && Tt(r[0])) continue;
          r.pop(), o--;
          continue;
        }
        if (a === 1 && ((_a2 = r[r.length - 1]) == null ? void 0 : _a2.endsWith(":/"))) {
          r[r.length - 1] += "/" + l;
          continue;
        }
        r.push(l), o++;
      }
    }
    let s = r.join("/");
    return o >= 0 ? ((_b2 = n[0]) == null ? void 0 : _b2.startsWith("/")) && !s.startsWith("/") ? s = "/" + s : ((_c2 = n[0]) == null ? void 0 : _c2.startsWith("./")) && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * o) + s, ((_d2 = n[n.length - 1]) == null ? void 0 : _d2.endsWith("/")) && !s.endsWith("/") && (s += "/"), s;
  }
  function cg(e) {
    return ug(e, "https://");
  }
  function ug(e, t) {
    let n = e.match(Lf);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e;
  }
  function fg(e, t) {
    return Ko(Qt(e)) === Ko(Qt(t));
  }
  const Nf = Symbol.for("ufo:protocolRelative");
  vs = function(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
      const [, f, p = ""] = n;
      return {
        protocol: f.toLowerCase(),
        pathname: p,
        href: f + p,
        auth: "",
        host: "",
        search: "",
        hash: ""
      };
    }
    if (!Tt(e, {
      acceptRelative: true
    })) return _l(e);
    const [, r = "", o, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: l, search: u, hash: c } = _l(a);
    return {
      protocol: r.toLowerCase(),
      auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
      host: i,
      pathname: l,
      search: u,
      hash: c,
      [Nf]: !r
    };
  };
  function _l(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
      pathname: t,
      search: n,
      hash: r
    };
  }
  function dg(e) {
    const t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", o = e.auth ? e.auth + "@" : "", s = e.host || "";
    return (e.protocol || e[Nf] ? (e.protocol || "") + "//" : "") + o + s + t + n + r;
  }
  class pg extends Error {
    constructor(t, n) {
      super(t, n), this.name = "FetchError", (n == null ? void 0 : n.cause) && !this.cause && (this.cause = n.cause);
    }
  }
  function hg(e) {
    var _a2, _b2, _c2, _d2, _e2;
    const t = ((_a2 = e.error) == null ? void 0 : _a2.message) || ((_b2 = e.error) == null ? void 0 : _b2.toString()) || "", n = ((_c2 = e.request) == null ? void 0 : _c2.method) || ((_d2 = e.options) == null ? void 0 : _d2.method) || "GET", r = ((_e2 = e.request) == null ? void 0 : _e2.url) || String(e.request) || "/", o = `[${n}] ${JSON.stringify(r)}`, s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", i = `${o}: ${s}${t ? ` ${t}` : ""}`, a = new pg(i, e.error ? {
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
  const mg = new Set(Object.freeze([
    "PATCH",
    "POST",
    "PUT",
    "DELETE"
  ]));
  function wl(e = "GET") {
    return mg.has(e.toUpperCase());
  }
  function gg(e) {
    if (e === void 0) return false;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? true : t !== "object" ? false : Array.isArray(e) ? true : e.buffer ? false : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
  }
  const yg = /* @__PURE__ */ new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html"
  ]), vg = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
  function bg(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return vg.test(t) ? "json" : yg.has(t) || t.startsWith("text/") ? "text" : "blob";
  }
  function _g(e, t, n, r) {
    const o = wg((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
    let s;
    return ((n == null ? void 0 : n.query) || (n == null ? void 0 : n.params) || (t == null ? void 0 : t.params) || (t == null ? void 0 : t.query)) && (s = {
      ...n == null ? void 0 : n.params,
      ...n == null ? void 0 : n.query,
      ...t == null ? void 0 : t.params,
      ...t == null ? void 0 : t.query
    }), {
      ...n,
      ...t,
      query: s,
      params: s,
      headers: o
    };
  }
  function wg(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e) for (const [o, s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(o, s);
    return r;
  }
  async function yo(e, t) {
    if (t) if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
  }
  const Sg = /* @__PURE__ */ new Set([
    408,
    409,
    425,
    429,
    500,
    502,
    503,
    504
  ]), Eg = /* @__PURE__ */ new Set([
    101,
    204,
    205,
    304
  ]);
  function Bf(e = {}) {
    const { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: r = globalThis.AbortController } = e;
    async function o(a) {
      const l = a.error && a.error.name === "AbortError" && !a.options.timeout || false;
      if (a.options.retry !== false && !l) {
        let c;
        typeof a.options.retry == "number" ? c = a.options.retry : c = wl(a.options.method) ? 0 : 1;
        const f = a.response && a.response.status || 500;
        if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : Sg.has(f))) {
          const p = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
          return p > 0 && await new Promise((d) => setTimeout(d, p)), s(a.request, {
            ...a.options,
            retry: c - 1
          });
        }
      }
      const u = hg(a);
      throw Error.captureStackTrace && Error.captureStackTrace(u, s), u;
    }
    const s = async function(l, u = {}) {
      const c = {
        request: l,
        options: _g(l, u, e.defaults, n),
        response: void 0,
        error: void 0
      };
      c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await yo(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = Ri(c.request, c.options.baseURL)), c.options.query && (c.request = Mf(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && wl(c.options.method) && (gg(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
      let f;
      if (!c.options.signal && c.options.timeout) {
        const d = new r();
        f = setTimeout(() => {
          const h = new Error("[TimeoutError]: The operation was aborted due to timeout");
          h.name = "TimeoutError", h.code = 23, d.abort(h);
        }, c.options.timeout), c.options.signal = d.signal;
      }
      try {
        c.response = await t(c.request, c.options);
      } catch (d) {
        return c.error = d, c.options.onRequestError && await yo(c, c.options.onRequestError), await o(c);
      } finally {
        f && clearTimeout(f);
      }
      if ((c.response.body || c.response._bodyInit) && !Eg.has(c.response.status) && c.options.method !== "HEAD") {
        const d = (c.options.parseResponse ? "json" : c.options.responseType) || bg(c.response.headers.get("content-type") || "");
        switch (d) {
          case "json": {
            const h = await c.response.text(), g = c.options.parseResponse || Vr;
            c.response._data = g(h);
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
      return c.options.onResponse && await yo(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await yo(c, c.options.onResponseError), await o(c)) : c.response;
    }, i = async function(l, u) {
      return (await s(l, u))._data;
    };
    return i.raw = s, i.native = (...a) => t(...a), i.create = (a = {}, l = {}) => Bf({
      ...e,
      ...l,
      defaults: {
        ...e.defaults,
        ...l.defaults,
        ...a
      }
    }), i;
  }
  const Go = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  }(), kg = Go.fetch ? (...e) => Go.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")), Tg = Go.Headers, Rg = Go.AbortController, Cg = Bf({
    fetch: kg,
    Headers: Tg,
    AbortController: Rg
  }), Pg = Cg, Ag = () => {
    var _a2, _b2, _c2;
    return ((_a2 = window == null ? void 0 : window.__NUXT__) == null ? void 0 : _a2.config) || ((_c2 = (_b2 = window == null ? void 0 : window.useNuxtApp) == null ? void 0 : _b2.call(window).payload) == null ? void 0 : _c2.config);
  }, da = () => Ag().app, xg = () => da().baseURL, Og = () => da().buildAssetsDir, pa = (...e) => If(Df(), Og(), ...e), Df = (...e) => {
    const t = da(), n = t.cdnURL || t.baseURL;
    return e.length ? If(n, ...e) : n;
  };
  globalThis.__buildAssetsURL = pa, globalThis.__publicAssetsURL = Df;
  globalThis.$fetch || (globalThis.$fetch = Pg.create({
    baseURL: xg()
  }));
  "global" in globalThis || (globalThis.global = globalThis);
  function Ci(e, t = {}, n) {
    for (const r in e) {
      const o = e[r], s = n ? `${n}:${r}` : r;
      typeof o == "object" && o !== null ? Ci(o, t, s) : typeof o == "function" && (t[s] = o);
    }
    return t;
  }
  const Lg = {
    run: (e) => e()
  }, Mg = () => Lg, jf = typeof console.createTask < "u" ? console.createTask : Mg;
  function $g(e, t) {
    const n = t.shift(), r = jf(n);
    return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve());
  }
  function Ig(e, t) {
    const n = t.shift(), r = jf(n);
    return Promise.all(e.map((o) => r.run(() => o(...t))));
  }
  function Hs(e, t) {
    for (const n of [
      ...e
    ]) n(t);
  }
  class Ng {
    constructor() {
      this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
    }
    hook(t, n, r = {}) {
      if (!t || typeof n != "function") return () => {
      };
      const o = t;
      let s;
      for (; this._deprecatedHooks[t]; ) s = this._deprecatedHooks[t], t = s.to;
      if (s && !r.allowDeprecated) {
        let i = s.message;
        i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i));
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
      let r, o = (...s) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...s));
      return r = this.hook(t, o), r;
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
      for (const o of r) this.hook(t, o);
    }
    deprecateHooks(t) {
      Object.assign(this._deprecatedHooks, t);
      for (const n in t) this.deprecateHook(n, t[n]);
    }
    addHooks(t) {
      const n = Ci(t), r = Object.keys(n).map((o) => this.hook(o, n[o]));
      return () => {
        for (const o of r.splice(0, r.length)) o();
      };
    }
    removeHooks(t) {
      const n = Ci(t);
      for (const r in n) this.removeHook(r, n[r]);
    }
    removeAllHooks() {
      for (const t in this._hooks) delete this._hooks[t];
    }
    callHook(t, ...n) {
      return n.unshift(t), this.callHookWith($g, t, ...n);
    }
    callHookParallel(t, ...n) {
      return n.unshift(t), this.callHookWith(Ig, t, ...n);
    }
    callHookWith(t, n, ...r) {
      const o = this._before || this._after ? {
        name: n,
        args: r,
        context: {}
      } : void 0;
      this._before && Hs(this._before, o);
      const s = t(n in this._hooks ? [
        ...this._hooks[n]
      ] : [], r);
      return s instanceof Promise ? s.finally(() => {
        this._after && o && Hs(this._after, o);
      }) : (this._after && o && Hs(this._after, o), s);
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
  function Ff() {
    return new Ng();
  }
  function Bg(e = {}) {
    let t, n = false;
    const r = (i) => {
      if (t && t !== i) throw new Error("Context conflict");
    };
    let o;
    if (e.asyncContext) {
      const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
      i ? o = new i() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
    const s = () => {
      if (o) {
        const i = o.getStore();
        if (i !== void 0) return i;
      }
      return t;
    };
    return {
      use: () => {
        const i = s();
        if (i === void 0) throw new Error("Context is not available");
        return i;
      },
      tryUse: () => s(),
      set: (i, a) => {
        a || r(i), t = i, n = true;
      },
      unset: () => {
        t = void 0, n = false;
      },
      call: (i, a) => {
        r(i), t = i;
        try {
          return o ? o.run(i, a) : a();
        } finally {
          n || (t = void 0);
        }
      },
      async callAsync(i, a) {
        t = i;
        const l = () => {
          t = i;
        }, u = () => t === i ? l : void 0;
        Pi.add(u);
        try {
          const c = o ? o.run(i, a) : a();
          return n || (t = void 0), await c;
        } finally {
          Pi.delete(u);
        }
      }
    };
  }
  function Dg(e = {}) {
    const t = {};
    return {
      get(n, r = {}) {
        return t[n] || (t[n] = Bg({
          ...e,
          ...r
        })), t[n];
      }
    };
  }
  const zo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}, Sl = "__unctx__", jg = zo[Sl] || (zo[Sl] = Dg()), Fg = (e, t = {}) => jg.get(e, t), El = "__unctx_async_handlers__", Pi = zo[El] || (zo[El] = /* @__PURE__ */ new Set());
  function er(e) {
    const t = [];
    for (const o of Pi) {
      const s = o();
      s && t.push(s);
    }
    const n = () => {
      for (const o of t) o();
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch((o) => {
      throw n(), o;
    })), [
      r,
      n
    ];
  }
  let Hg, kl, Ug, Wg, Tl, Vg, qg, Kg, Hf, Rl, Gg;
  Hg = false;
  kl = false;
  Ug = true;
  Wg = false;
  Tl = {
    id: "__nuxt-loader"
  };
  Vg = {
    componentName: "NuxtLink",
    prefetch: true,
    prefetchOn: {
      visibility: true
    }
  };
  qg = {
    deep: false
  };
  yE = {};
  Kg = "#__nuxt";
  Hf = "nuxt-app";
  Rl = 36e5;
  Gg = "vite:preloadError";
  function Uf(e = Hf) {
    return Fg(e, {
      asyncContext: false
    });
  }
  const zg = "__nuxt_plugin";
  function Jg(e) {
    var _a2;
    let t = 0;
    const n = {
      _id: e.id || Hf || "nuxt-app",
      _scope: Yr(),
      provide: void 0,
      versions: {
        get nuxt() {
          return "4.0.1";
        },
        get vue() {
          return n.vueApp.version;
        }
      },
      payload: Nt({
        ...((_a2 = e.ssrContext) == null ? void 0 : _a2.payload) || {},
        data: Nt({}),
        state: kt({}),
        once: /* @__PURE__ */ new Set(),
        _errors: Nt({})
      }),
      static: {
        data: {}
      },
      runWithContext(o) {
        return n._scope.active && !Zt() ? n._scope.run(() => Cl(n, o)) : Cl(n, o);
      },
      isHydrating: true,
      deferHydration() {
        if (!n.isHydrating) return () => {
        };
        t++;
        let o = false;
        return () => {
          if (!o && (o = true, t--, t === 0)) return n.isHydrating = false, n.callHook("app:suspense:resolve");
        };
      },
      _asyncDataPromises: {},
      _asyncData: Nt({}),
      _payloadRevivers: {},
      ...e
    };
    {
      const o = window.__NUXT__;
      if (o) for (const s in o) switch (s) {
        case "data":
        case "state":
        case "_errors":
          Object.assign(n.payload[s], o[s]);
          break;
        default:
          n.payload[s] = o[s];
      }
    }
    n.hooks = Ff(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (o, s) => {
      const i = "$" + o;
      vo(n, i, s), vo(n.vueApp.config.globalProperties, i, s);
    }, vo(n.vueApp, "$nuxt", n), vo(n.vueApp.config.globalProperties, "$nuxt", n);
    {
      window.addEventListener(Gg, (s) => {
        n.callHook("app:chunkError", {
          error: s.payload
        }), s.payload.message.includes("Unable to preload CSS") && s.preventDefault();
      }), window.useNuxtApp || (window.useNuxtApp = me);
      const o = n.hook("app:error", (...s) => {
        console.error("[nuxt] error caught during app initialization", ...s);
      });
      n.hook("app:mounted", o);
    }
    const r = n.payload.config;
    return n.provide("config", r), n;
  }
  function Yg(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks);
  }
  async function Qg(e, t) {
    if (typeof t == "function") {
      const { provide: n } = await e.runWithContext(() => t(e)) || {};
      if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
    }
  }
  async function Xg(e, t) {
    const n = /* @__PURE__ */ new Set(), r = [], o = [], s = [];
    let i = 0;
    async function a(l) {
      var _a2;
      const u = ((_a2 = l.dependsOn) == null ? void 0 : _a2.filter((c) => t.some((f) => f._name === c) && !n.has(c))) ?? [];
      if (u.length > 0) r.push([
        new Set(u),
        l
      ]);
      else {
        const c = Qg(e, l).then(async () => {
          l._name && (n.add(l._name), await Promise.all(r.map(async ([f, p]) => {
            f.has(l._name) && (f.delete(l._name), f.size === 0 && (i++, await a(p)));
          })));
        });
        l.parallel ? o.push(c.catch((f) => s.push(f))) : await c;
      }
    }
    for (const l of t) Yg(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(o), i) for (let l = 0; l < i; l++) await Promise.all(o);
    if (s.length) throw s[0];
  }
  function Re(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {
    }), e, {
      [zg]: true,
      _name: t
    });
  }
  const Wf = Re;
  function Cl(e, t, n) {
    const r = () => t();
    return Uf(e._id).set(e), e.vueApp.runWithContext(r);
  }
  function Zg(e) {
    var _a2;
    let t;
    return ur() && (t = (_a2 = tt()) == null ? void 0 : _a2.appContext.app.$nuxt), t || (t = Uf(e).tryUse()), t || null;
  }
  me = function(e) {
    const t = Zg(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t;
  };
  Dt = function(e) {
    return me().$config;
  };
  function vo(e, t, n) {
    Object.defineProperty(e, t, {
      get: () => n
    });
  }
  function ey(e, t) {
    return {
      ctx: {
        table: e
      },
      matchAll: (n) => qf(n, e)
    };
  }
  function Vf(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, o]) => [
      r,
      Vf(o)
    ])) : new Map(Object.entries(e[n]));
    return t;
  }
  function ty(e) {
    return ey(Vf(e));
  }
  function qf(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s, i] of Pl(t.wildcard)) (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s, i] of Pl(t.dynamic)) if (e.startsWith(s + "/")) {
      const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
      r.push(...qf(a, i));
    }
    const o = t.static.get(e);
    return o && r.push(o), r.filter(Boolean);
  }
  function Pl(e) {
    return [
      ...e.entries()
    ].sort((t, n) => t[0].length - n[0].length);
  }
  function Us(e) {
    if (e === null || typeof e != "object") return false;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? false : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : true;
  }
  function Ai(e, t, n = ".", r) {
    if (!Us(t)) return Ai(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
      if (s === "__proto__" || s === "constructor") continue;
      const i = e[s];
      i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [
        ...i,
        ...o[s]
      ] : Us(i) && Us(o[s]) ? o[s] = Ai(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i));
    }
    return o;
  }
  function ny(e) {
    return (...t) => t.reduce((n, r) => Ai(n, r, "", e), {});
  }
  ha = ny();
  function ry(e, t) {
    try {
      return t in e;
    } catch {
      return false;
    }
  }
  class Al extends Error {
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
        statusCode: xi(this.statusCode, 500)
      };
      return this.statusMessage && (t.statusMessage = Kf(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t;
    }
  }
  __publicField(Al, "__h3_error__", true);
  function oy(e) {
    if (typeof e == "string") return new Al(e);
    if (sy(e)) return e;
    const t = new Al(e.message ?? e.statusMessage ?? "", {
      cause: e.cause || e
    });
    if (ry(e, "stack")) try {
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
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = xi(e.statusCode, t.statusCode) : e.status && (t.statusCode = xi(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
      const n = t.statusMessage;
      Kf(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t;
  }
  function sy(e) {
    var _a2;
    return ((_a2 = e == null ? void 0 : e.constructor) == null ? void 0 : _a2.__h3_error__) === true;
  }
  const iy = /[^\u0009\u0020-\u007E]/g;
  function Kf(e = "") {
    return e.replace(iy, "");
  }
  function xi(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
  }
  let Gf, In;
  Gf = Symbol("layout-meta");
  In = Symbol("route");
  Ie = () => {
    var _a2;
    return (_a2 = me()) == null ? void 0 : _a2.$router;
  };
  Bn = () => ur() ? Te(In, me()._route) : me()._route;
  let ay;
  ay = () => {
    try {
      if (me()._processingMiddleware) return true;
    } catch {
      return false;
    }
    return false;
  };
  ly = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : "path" in e ? Oi(e) : Ie().resolve(e).href;
    if (t == null ? void 0 : t.open) {
      const { target: l = "_blank", windowFeatures: u = {} } = t.open, c = Object.entries(u).filter(([f, p]) => p !== void 0).map(([f, p]) => `${f.toLowerCase()}=${p}`).join(", ");
      return open(n, l, c), Promise.resolve();
    }
    const r = Tt(n, {
      acceptRelative: true
    }), o = (t == null ? void 0 : t.external) || r;
    if (o) {
      if (!(t == null ? void 0 : t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const { protocol: l } = new URL(n, window.location.href);
      if (l && sg(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const s = ay();
    if (!o && s) {
      if (t == null ? void 0 : t.replace) {
        if (typeof e == "string") {
          const { pathname: l, search: u, hash: c } = vs(e);
          return {
            path: l,
            ...u && {
              query: fa(u)
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
    const i = Ie(), a = me();
    return o ? (a._scope.stop(), (t == null ? void 0 : t.replace) ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {
    }) : false : Promise.resolve()) : (t == null ? void 0 : t.replace) ? i.replace(e) : i.push(e);
  };
  function Oi(e) {
    return Mf(e.path || "", e.query || {}) + (e.hash || "");
  }
  let zf, dr, Cn, Jf, Yf, cy;
  zf = "__nuxt_error";
  dr = () => ta(me().payload, "error");
  Cn = (e) => {
    const t = _n(e);
    try {
      const n = me(), r = dr();
      n.hooks.callHook("app:error", t), r.value || (r.value = t);
    } catch {
      throw t;
    }
    return t;
  };
  Jf = async (e = {}) => {
    const t = me(), n = dr();
    t.callHook("app:error:cleared", e), e.redirect && await Ie().replace(e.redirect), n.value = void 0;
  };
  Yf = (e) => !!e && typeof e == "object" && zf in e;
  _n = (e) => {
    const t = oy(e);
    return Object.defineProperty(t, zf, {
      value: true,
      configurable: false,
      writable: false
    }), t;
  };
  cy = {
    trailing: true
  };
  function uy(e, t = 25, n = {}) {
    if (n = {
      ...cy,
      ...n
    }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
    let r, o, s = [], i, a;
    const l = (u, c) => (i = fy(e, u, c), i.finally(() => {
      if (i = null, n.trailing && a && !o) {
        const f = l(u, a);
        return a = null, f;
      }
    }), i);
    return function(...u) {
      return i ? (n.trailing && (a = u), i) : new Promise((c) => {
        const f = !o && n.leading;
        clearTimeout(o), o = setTimeout(() => {
          o = null;
          const p = n.leading ? r : l(this, u);
          for (const d of s) d(p);
          s = [];
        }, t), f ? (r = l(this, u), c(r)) : s.push(c);
      });
    };
  }
  async function fy(e, t, n) {
    return await e.apply(t, n);
  }
  let ma;
  const to = (e) => ma = e, dy = () => ur() && Te(ga) || ma, ga = Symbol();
  function Li(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Mr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Mr || (Mr = {}));
  function py() {
    const e = Yr(true), t = e.run(() => He({}));
    let n = [], r = [];
    const o = Qn({
      install(s) {
        to(o), o._a = s, s.provide(ga, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
      },
      use(s) {
        return this._a ? n.push(s) : r.push(s), this;
      },
      _p: n,
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return o;
  }
  const Qf = () => {
  };
  function xl(e, t, n, r = Qf) {
    e.push(t);
    const o = () => {
      const s = e.indexOf(t);
      s > -1 && (e.splice(s, 1), r());
    };
    return !n && Zt() && On(o), o;
  }
  function Un(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const hy = (e) => e(), Ol = Symbol(), Ws = Symbol();
  function Mi(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], o = e[n];
      Li(o) && Li(r) && e.hasOwnProperty(n) && !Se(r) && !qt(r) ? e[n] = Mi(o, r) : e[n] = r;
    }
    return e;
  }
  const Xf = Symbol();
  function my(e) {
    return Object.defineProperty(e, Xf, {});
  }
  function gy(e) {
    return !Li(e) || !Object.prototype.hasOwnProperty.call(e, Xf);
  }
  const { assign: ln } = Object;
  function yy(e) {
    return !!(Se(e) && e.effect);
  }
  function vy(e, t, n, r) {
    const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
    let l;
    function u() {
      a || (n.state.value[e] = o ? o() : {});
      const c = qp(n.state.value[e]);
      return ln(c, s, Object.keys(i || {}).reduce((f, p) => (f[p] = Qn(K(() => {
        to(n);
        const d = n._s.get(e);
        return i[p].call(d, d);
      })), f), {}));
    }
    return l = Zf(e, u, t, n, r, true), l;
  }
  function Zf(e, t, n = {}, r, o, s) {
    let i;
    const a = ln({
      actions: {}
    }, n), l = {
      deep: true
    };
    let u, c, f = [], p = [], d;
    const h = r.state.value[e];
    !s && !h && (r.state.value[e] = {}), He({});
    let g;
    function S(N) {
      let C;
      u = c = false, typeof N == "function" ? (N(r.state.value[e]), C = {
        type: Mr.patchFunction,
        storeId: e,
        events: d
      }) : (Mi(r.state.value[e], N), C = {
        type: Mr.patchObject,
        payload: N,
        storeId: e,
        events: d
      });
      const O = g = Symbol();
      wt().then(() => {
        g === O && (u = true);
      }), c = true, Un(f, C, r.state.value[e]);
    }
    const E = s ? function() {
      const { state: C } = n, O = C ? C() : {};
      this.$patch((k) => {
        ln(k, O);
      });
    } : Qf;
    function _() {
      i.stop(), f = [], p = [], r._s.delete(e);
    }
    const m = (N, C = "") => {
      if (Ol in N) return N[Ws] = C, N;
      const O = function() {
        to(r);
        const k = Array.from(arguments), R = [], B = [];
        function Z(z) {
          R.push(z);
        }
        function ee(z) {
          B.push(z);
        }
        Un(p, {
          args: k,
          name: O[Ws],
          store: w,
          after: Z,
          onError: ee
        });
        let F;
        try {
          F = N.apply(this && this.$id === e ? this : w, k);
        } catch (z) {
          throw Un(B, z), z;
        }
        return F instanceof Promise ? F.then((z) => (Un(R, z), z)).catch((z) => (Un(B, z), Promise.reject(z))) : (Un(R, F), F);
      };
      return O[Ol] = true, O[Ws] = C, O;
    }, v = {
      _p: r,
      $id: e,
      $onAction: xl.bind(null, p),
      $patch: S,
      $reset: E,
      $subscribe(N, C = {}) {
        const O = xl(f, N, C.detached, () => k()), k = i.run(() => at(() => r.state.value[e], (R) => {
          (C.flush === "sync" ? c : u) && N({
            storeId: e,
            type: Mr.direct,
            events: d
          }, R);
        }, ln({}, l, C)));
        return O;
      },
      $dispose: _
    }, w = kt(v);
    r._s.set(e, w);
    const L = (r._a && r._a.runWithContext || hy)(() => r._e.run(() => (i = Yr()).run(() => t({
      action: m
    }))));
    for (const N in L) {
      const C = L[N];
      if (Se(C) && !yy(C) || qt(C)) s || (h && gy(C) && (Se(C) ? C.value = h[N] : Mi(C, h[N])), r.state.value[e][N] = C);
      else if (typeof C == "function") {
        const O = m(C, N);
        L[N] = O, a.actions[N] = C;
      }
    }
    return ln(w, L), ln(ie(w), L), Object.defineProperty(w, "$state", {
      get: () => r.state.value[e],
      set: (N) => {
        S((C) => {
          ln(C, N);
        });
      }
    }), r._p.forEach((N) => {
      ln(w, i.run(() => N({
        store: w,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), h && s && n.hydrate && n.hydrate(w.$state, h), u = true, c = true, w;
  }
  function by(e, t, n) {
    let r;
    const o = typeof t == "function";
    r = o ? n : t;
    function s(i, a) {
      const l = ur();
      return i = i || (l ? Te(ga, null) : null), i && to(i), i = ma, i._s.has(e) || (o ? Zf(e, t, r, i) : vy(e, r, i)), i._s.get(e);
    }
    return s.$id = e, s;
  }
  function Ll(e) {
    const t = wy(e), n = new ArrayBuffer(t.length), r = new DataView(n);
    for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
    return n;
  }
  const _y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function wy(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "", n = 0, r = 0;
    for (let o = 0; o < e.length; o++) n <<= 6, n |= _y.indexOf(e[o]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
  }
  const Sy = -1, Ey = -2, ky = -3, Ty = -4, Ry = -5, Cy = -6;
  function Py(e, t) {
    return Ay(JSON.parse(e), t);
  }
  function Ay(e, t) {
    if (typeof e == "number") return o(e, true);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e, r = Array(n.length);
    function o(s, i = false) {
      if (s === Sy) return;
      if (s === ky) return NaN;
      if (s === Ty) return 1 / 0;
      if (s === Ry) return -1 / 0;
      if (s === Cy) return -0;
      if (i) throw new Error("Invalid input");
      if (s in r) return r[s];
      const a = n[s];
      if (!a || typeof a != "object") r[s] = a;
      else if (Array.isArray(a)) if (typeof a[0] == "string") {
        const l = a[0], u = t == null ? void 0 : t[l];
        if (u) return r[s] = u(o(a[1]));
        switch (l) {
          case "Date":
            r[s] = new Date(a[1]);
            break;
          case "Set":
            const c = /* @__PURE__ */ new Set();
            r[s] = c;
            for (let d = 1; d < a.length; d += 1) c.add(o(a[d]));
            break;
          case "Map":
            const f = /* @__PURE__ */ new Map();
            r[s] = f;
            for (let d = 1; d < a.length; d += 2) f.set(o(a[d]), o(a[d + 1]));
            break;
          case "RegExp":
            r[s] = new RegExp(a[1], a[2]);
            break;
          case "Object":
            r[s] = Object(a[1]);
            break;
          case "BigInt":
            r[s] = BigInt(a[1]);
            break;
          case "null":
            const p = /* @__PURE__ */ Object.create(null);
            r[s] = p;
            for (let d = 1; d < a.length; d += 2) p[a[d]] = o(a[d + 1]);
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
            const d = globalThis[l], h = a[1], g = Ll(h), S = new d(g);
            r[s] = S;
            break;
          }
          case "ArrayBuffer": {
            const d = a[1], h = Ll(d);
            r[s] = h;
            break;
          }
          default:
            throw new Error(`Unknown type ${l}`);
        }
      } else {
        const l = new Array(a.length);
        r[s] = l;
        for (let u = 0; u < a.length; u += 1) {
          const c = a[u];
          c !== Ey && (l[u] = o(c));
        }
      }
      else {
        const l = {};
        r[s] = l;
        for (const u in a) {
          const c = a[u];
          l[u] = o(c);
        }
      }
      return r[s];
    }
    return o(0);
  }
  const xy = /* @__PURE__ */ new Set([
    "link",
    "style",
    "script",
    "noscript"
  ]), Oy = /* @__PURE__ */ new Set([
    "title",
    "titleTemplate",
    "script",
    "style",
    "noscript"
  ]), Ml = /* @__PURE__ */ new Set([
    "base",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), Ly = /* @__PURE__ */ new Set([
    "title",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), My = /* @__PURE__ */ new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams"
  ]), $y = /* @__PURE__ */ new Set([
    "key",
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "innerHTML",
    "textContent",
    "processTemplateParams"
  ]), Iy = /* @__PURE__ */ new Set([
    "templateParams",
    "htmlAttrs",
    "bodyAttrs"
  ]), ya = /* @__PURE__ */ new Set([
    "theme-color",
    "google-site-verification",
    "og",
    "article",
    "book",
    "profile",
    "twitter",
    "author"
  ]), qr = {
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
  }, Ny = {
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
  }, ed = {
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
    return n === -1 ? t : qr.META.has(t.slice(0, n)) || qr.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t;
  }
  function td(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t));
  }
  function $i(e) {
    return Array.isArray(e) ? e.map($i) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [
      Vt(t),
      $i(n)
    ]));
  }
  function nd(e, t = {}) {
    const { entrySeparator: n = "", keyValueSeparator: r = "", wrapValue: o, resolve: s } = t;
    return Object.entries(e).map(([i, a]) => {
      if (s) {
        const u = s({
          key: i,
          value: a
        });
        if (u !== void 0) return u;
      }
      const l = typeof a == "object" ? nd(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && o ? `${o}${a.replace(new RegExp(o, "g"), `\\${o}`)}${o}` : a;
      return `${i}${r}${l}`;
    }).join(n);
  }
  function $l(e, t) {
    const n = td(t), r = Vt(e), o = rd(r);
    if (!ya.has(r)) return [
      {
        [o]: r,
        ...n
      }
    ];
    const s = Object.fromEntries(Object.entries(n).map(([i, a]) => [
      `${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`,
      a
    ]));
    return Jo(s || {}).sort((i, a) => {
      var _a2, _b2;
      return (((_a2 = i[o]) == null ? void 0 : _a2.length) || 0) - (((_b2 = a[o]) == null ? void 0 : _b2.length) || 0);
    });
  }
  function rd(e) {
    var _a2;
    if (((_a2 = ed[e]) == null ? void 0 : _a2.metaKey) === "http-equiv" || qr.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = Vt(e), n = t.indexOf(":");
    return n === -1 ? "name" : qr.OG.has(t.slice(0, n)) ? "property" : "name";
  }
  function By(e) {
    return Ny[e] || Vt(e);
  }
  function Dy(e, t) {
    var _a2;
    return t === "refresh" ? `${e.seconds};url=${e.url}` : nd($i(e), {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve: ({ value: n, key: r }) => n === null ? "" : typeof n == "boolean" ? r : void 0,
      ...(_a2 = ed[t]) == null ? void 0 : _a2.unpack
    });
  }
  function Jo(e) {
    const t = [], n = {};
    for (const [o, s] of Object.entries(e)) {
      if (Array.isArray(s)) {
        if (o === "themeColor") {
          s.forEach((i) => {
            typeof i == "object" && i !== null && t.push({
              name: "theme-color",
              ...i
            });
          });
          continue;
        }
        for (const i of s) if (typeof i == "object" && i !== null) {
          const a = [], l = [];
          for (const [u, c] of Object.entries(i)) {
            const f = `${o}${u === "url" ? "" : `:${u}`}`, p = Jo({
              [f]: c
            });
            (u === "url" ? a : l).push(...p);
          }
          t.push(...a, ...l);
        } else t.push(...typeof i == "string" ? Jo({
          [o]: i
        }) : $l(o, i));
        continue;
      }
      if (typeof s == "object" && s) if (qr.MEDIA.has(o)) {
        const i = o.startsWith("twitter") ? "twitter" : "og", a = o.replace(/^(og|twitter)/, "").toLowerCase(), l = i === "twitter" ? "name" : "property";
        s.url && t.push({
          [l]: `${i}:${a}`,
          content: s.url
        }), s.secureUrl && t.push({
          [l]: `${i}:${a}:secure_url`,
          content: s.secureUrl
        });
        for (const [u, c] of Object.entries(s)) u !== "url" && u !== "secureUrl" && t.push({
          [l]: `${i}:${a}:${u}`,
          content: c
        });
      } else ya.has(Vt(o)) ? t.push(...$l(o, s)) : n[o] = td(s);
      else n[o] = s;
    }
    const r = Object.entries(n).map(([o, s]) => {
      if (o === "charset") return {
        charset: s === null ? "_null" : s
      };
      const i = rd(o), a = By(o), l = s === null ? "_null" : typeof s == "object" ? Dy(s, o) : typeof s == "number" ? s.toString() : s;
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
    ].map((o) => "content" in o && o.content === "_null" ? {
      ...o,
      content: null
    } : o);
  }
  const jy = {
    key: "flatMeta",
    hooks: {
      "entries:normalize": (e) => {
        const t = [];
        e.tags = e.tags.map((n) => n.tag !== "_flatMeta" ? n : (t.push(Jo(n.props).map((r) => ({
          ...n,
          tag: "meta",
          props: r
        }))), false)).filter(Boolean).concat(...t);
      }
    }
  }, Fy = [
    "name",
    "property",
    "http-equiv"
  ], Hy = /* @__PURE__ */ new Set([
    "viewport",
    "description",
    "keywords",
    "robots"
  ]);
  function od(e) {
    const t = e.split(":");
    return t.length ? ya.has(t[1]) : false;
  }
  function Ii(e) {
    const { props: t, tag: n } = e;
    if (My.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (e.tag === "meta") {
      for (const r of Fy) if (t[r] !== void 0) {
        const o = t[r], s = o.includes(":"), i = Hy.has(o), l = !(s || i) && e.key ? `:key:${e.key}` : "";
        return `${n}:${o}${l}`;
      }
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (Oy.has(n)) {
      const r = e.textContent || e.innerHTML;
      if (r) return `${n}:content:${r}`;
    }
  }
  function Il(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([r, o]) => `${r}:${String(o)}`).join(",")}`;
  }
  function Yo(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let o;
    if (t && (o = t(n, e)), Array.isArray(o)) return o.map((s) => Yo(s, t));
    if ((o == null ? void 0 : o.constructor) === Object) {
      const s = {};
      for (const i of Object.keys(o)) s[i] = Yo(o[i], t, i);
      return s;
    }
    return o;
  }
  function Uy(e, t) {
    const n = e === "style" ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set();
    function r(o) {
      const s = o.trim();
      if (s) if (e === "style") {
        const [i, ...a] = s.split(":").map((l) => l.trim());
        i && a.length && n.set(i, a.join(":"));
      } else s.split(" ").filter(Boolean).forEach((i) => n.add(i));
    }
    return typeof t == "string" ? e === "style" ? t.split(";").forEach(r) : r(t) : Array.isArray(t) ? t.forEach((o) => r(o)) : t && typeof t == "object" && Object.entries(t).forEach(([o, s]) => {
      s && s !== "false" && (e === "style" ? n.set(o.trim(), s) : r(o));
    }), n;
  }
  function sd(e, t) {
    return e.props = e.props || {}, t && Object.entries(t).forEach(([n, r]) => {
      if (r === null) {
        e.props[n] = null;
        return;
      }
      if (n === "class" || n === "style") {
        e.props[n] = Uy(n, r);
        return;
      }
      if ($y.has(n)) {
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
      const o = String(r), s = n.startsWith("data-");
      o === "true" || o === "" ? e.props[n] = s ? o : true : !r && s && o === "false" ? e.props[n] = "false" : r !== void 0 && (e.props[n] = r);
    }), e;
  }
  function Wy(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
      [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, r = sd({
      tag: e,
      props: {}
    }, n);
    return r.key && xy.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map((o) => ({
      ...r,
      props: {
        ...r.props,
        content: o
      }
    })) : r;
  }
  function Vy(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (o, s) => {
      for (let i = 0; i < t.length; i++) s = t[i](o, s);
      return s;
    };
    e = n(void 0, e);
    const r = [];
    return e = Yo(e, n), Object.entries(e || {}).forEach(([o, s]) => {
      if (s !== void 0) for (const i of Array.isArray(s) ? s : [
        s
      ]) r.push(Wy(o, i));
    }), r.flat();
  }
  const Nl = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w, Bl = {
    base: -10,
    title: 10
  }, qy = {
    critical: -8,
    high: -1,
    low: 2
  }, Dl = {
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
  }, Ky = /@import/, wr = (e) => e === "" || e === true;
  function Gy(e, t) {
    var _a2;
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = qy[t.tagPriority] || 0, o = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : Dl;
    if (t.tag in Bl) n = Bl[t.tag];
    else if (t.tag === "meta") {
      const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
      s && (n = Dl.meta[s]);
    } else t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? wr(t.props.async) ? n = o.script.async : t.props.src && !wr(t.props.defer) && !wr(t.props.async) && t.props.type !== "module" && !((_a2 = t.props.type) == null ? void 0 : _a2.endsWith("json")) ? n = o.script.sync : wr(t.props.defer) && t.props.src && !wr(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && Ky.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r;
  }
  function jl(e, t) {
    const n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
  }
  function zy(e = {}) {
    var _a2;
    const t = Ff();
    t.addHooks(e.hooks || {});
    const n = !e.document, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set(), i = {
      _entryCount: 1,
      plugins: o,
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
      use: (a) => jl(i, a),
      push(a, l) {
        const u = {
          ...l || {}
        };
        delete u.head;
        const c = u._index ?? i._entryCount++, f = {
          _i: c,
          input: a,
          options: u
        }, p = {
          _poll(d = false) {
            i.dirty = true, !d && s.add(c), t.callHook("entries:updated", i);
          },
          dispose() {
            r.delete(c) && i.invalidate();
          },
          patch(d) {
            (!u.mode || u.mode === "server" && n || u.mode === "client" && !n) && (f.input = d, r.set(c, f), p._poll());
          }
        };
        return p.patch(a), p;
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
        for (await t.callHook("entries:resolve", a); s.size; ) {
          const p = s.values().next().value;
          s.delete(p);
          const d = r.get(p);
          if (d) {
            const h = {
              tags: Vy(d.input, e.propResolvers || []).map((g) => Object.assign(g, d.options)),
              entry: d
            };
            await t.callHook("entries:normalize", h), d._tags = h.tags.map((g, S) => (g._w = Gy(i, g), g._p = (d._i << 10) + S, g._d = Ii(g), g));
          }
        }
        let l = false;
        a.entries.flatMap((p) => (p._tags || []).map((d) => ({
          ...d,
          props: {
            ...d.props
          }
        }))).sort(Nl).reduce((p, d) => {
          const h = String(d._d || d._p);
          if (!p.has(h)) return p.set(h, d);
          const g = p.get(h);
          if (((d == null ? void 0 : d.tagDuplicateStrategy) || (Iy.has(d.tag) ? "merge" : null) || (d.key && d.key === g.key ? "merge" : null)) === "merge") {
            const E = {
              ...g.props
            };
            Object.entries(d.props).forEach(([_, m]) => E[_] = _ === "style" ? new Map([
              ...g.props.style || /* @__PURE__ */ new Map(),
              ...m
            ]) : _ === "class" ? /* @__PURE__ */ new Set([
              ...g.props.class || /* @__PURE__ */ new Set(),
              ...m
            ]) : m), p.set(h, {
              ...d,
              props: E
            });
          } else d._p >> 10 === g._p >> 10 && d.tag === "meta" && od(h) ? (p.set(h, Object.assign([
            ...Array.isArray(g) ? g : [
              g
            ],
            d
          ], d)), l = true) : (d._w === g._w ? d._p > g._p : (d == null ? void 0 : d._w) < (g == null ? void 0 : g._w)) && p.set(h, d);
          return p;
        }, a.tagMap);
        const u = a.tagMap.get("title"), c = a.tagMap.get("titleTemplate");
        if (i._title = u == null ? void 0 : u.textContent, c) {
          const p = c == null ? void 0 : c.textContent;
          if (i._titleTemplate = p, p) {
            let d = typeof p == "function" ? p(u == null ? void 0 : u.textContent) : p;
            typeof d == "string" && !i.plugins.has("template-params") && (d = d.replace("%s", (u == null ? void 0 : u.textContent) || "")), u ? d === null ? a.tagMap.delete("title") : a.tagMap.set("title", {
              ...u,
              textContent: d
            }) : (c.tag = "title", c.textContent = d);
          }
        }
        a.tags = Array.from(a.tagMap.values()), l && (a.tags = a.tags.flat().sort(Nl)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
        const f = [];
        for (const p of a.tags) {
          const { innerHTML: d, tag: h, props: g } = p;
          if (Ly.has(h) && !(Object.keys(g).length === 0 && !p.innerHTML && !p.textContent) && !(h === "meta" && !g.content && !g["http-equiv"] && !g.charset)) {
            if (h === "script" && d) {
              if ((_a3 = g.type) == null ? void 0 : _a3.endsWith("json")) {
                const S = typeof d == "string" ? d : JSON.stringify(d);
                p.innerHTML = S.replace(/</g, "\\u003C");
              } else typeof d == "string" && (p.innerHTML = d.replace(new RegExp(`</${h}`, "g"), `<\\/${h}`));
              p._d = Ii(p);
            }
            f.push(p);
          }
        }
        return f;
      },
      invalidate() {
        for (const a of r.values()) s.add(a._i);
        i.dirty = true, t.callHook("entries:updated", i);
      }
    };
    return ((e == null ? void 0 : e.plugins) || []).forEach((a) => jl(i, a)), i.hooks.callHook("init", i), (_a2 = e.init) == null ? void 0 : _a2.forEach((a) => a && i.push(a)), i;
  }
  const dn = "%separator", Jy = new RegExp(`${dn}(?:\\s*${dn})*`, "g");
  function Yy(e, t, n = false) {
    var _a2;
    let r;
    if (t === "s" || t === "pageTitle") r = e.pageTitle;
    else if (t.includes(".")) {
      const o = t.indexOf(".");
      r = (_a2 = e[t.substring(0, o)]) == null ? void 0 : _a2[t.substring(o + 1)];
    } else r = e[t];
    if (r !== void 0) return n ? (r || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r || "";
  }
  function bo(e, t, n, r = false) {
    if (typeof e != "string" || !e.includes("%")) return e;
    let o = e;
    try {
      o = decodeURI(e);
    } catch {
    }
    const s = o.match(/%\w+(?:\.\w+)?/g);
    if (!s) return e;
    const i = e.includes(dn);
    return e = e.replace(/%\w+(?:\.\w+)?/g, (a) => {
      if (a === dn || !s.includes(a)) return a;
      const l = Yy(t, a.slice(1), r);
      return l !== void 0 ? l : a;
    }).trim(), i && (e.endsWith(dn) && (e = e.slice(0, -dn.length)), e.startsWith(dn) && (e = e.slice(dn.length)), e = e.replace(Jy, n || "").trim()), e;
  }
  const Qy = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
  }, Xy = [
    "innerHTML",
    "textContent"
  ], id = (e) => ({
    key: "template-params",
    hooks: {
      "entries:normalize": (t) => {
        var _a2, _b2, _c2;
        const n = ((_b2 = (_a2 = t.tags.filter((r) => r.tag === "templateParams" && r.mode === "server")) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.props) || {};
        Object.keys(n).length && (e._ssrPayload = {
          templateParams: {
            ...((_c2 = e._ssrPayload) == null ? void 0 : _c2.templateParams) || {},
            ...n
          }
        });
      },
      "tags:resolve": ({ tagMap: t, tags: n }) => {
        var _a2;
        const r = ((_a2 = t.get("templateParams")) == null ? void 0 : _a2.props) || {}, o = r.separator || "|";
        delete r.separator, r.pageTitle = bo(r.pageTitle || e._title || "", r, o);
        for (const s of n) {
          if (s.processTemplateParams === false) continue;
          const i = Qy[s.tag];
          if (i && typeof s.props[i] == "string") s.props[i] = bo(s.props[i], r, o);
          else if (s.processTemplateParams || s.tag === "titleTemplate" || s.tag === "title") for (const a of Xy) typeof s[a] == "string" && (s[a] = bo(s[a], r, o, s.tag === "script" && s.props.type.endsWith("json")));
        }
        e._templateParams = r, e._separator = o;
      },
      "tags:afterResolve": ({ tagMap: t }) => {
        const n = t.get("title");
        (n == null ? void 0 : n.textContent) && n.processTemplateParams !== false && (n.textContent = bo(n.textContent, e._templateParams, e._separator));
      }
    }
  });
  function Zy(e = {}) {
    return (t) => (t.push({
      meta: [
        {
          name: "twitter:card",
          content: e.twitterCard || "summary_large_image",
          tagPriority: "low"
        },
        {
          property: "og:title",
          tagPriority: "low",
          "data-infer": ""
        },
        {
          property: "og:description",
          tagPriority: "low",
          "data-infer": ""
        }
      ]
    }), {
      key: "infer-seo-meta",
      hooks: {
        "tags:beforeResolve": ({ tagMap: n }) => {
          var _a2, _b2;
          let r = t._titleTemplate || t._title;
          const o = n.get("meta:og:title");
          typeof (o == null ? void 0 : o.props["data-infer"]) < "u" && (typeof r == "function" && (r = r(t._title)), o.props.content = e.ogTitle ? e.ogTitle(r) : r || "", o.processTemplateParams = true);
          const s = (_b2 = (_a2 = n.get("meta:description")) == null ? void 0 : _a2.props) == null ? void 0 : _b2.content, i = n.get("meta:og:description");
          typeof (i == null ? void 0 : i.props["data-infer"]) < "u" && (i.props.content = e.ogDescription ? e.ogDescription(s) : s || "", i.processTemplateParams = true);
        }
      }
    });
  }
  const ev = (e, t) => Se(t) ? Ke(t) : t, va = "usehead";
  function tv(e) {
    return {
      install(n) {
        n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(va, e);
      }
    }.install;
  }
  function ad() {
    if (ur()) {
      const e = Te(va);
      if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function ld(e, t = {}) {
    const n = t.head || ad();
    return n.ssr ? n.push(e || {}, t) : nv(n, e, t);
  }
  function nv(e, t, n = {}) {
    const r = He(false);
    let o;
    return Zu(() => {
      const i = r.value ? {} : Yo(t, ev);
      o ? o.patch(i) : o = e.push(i, n);
    }), tt() && (Nn(() => {
      o.dispose();
    }), xu(() => {
      r.value = true;
    }), Au(() => {
      r.value = false;
    })), o;
  }
  function rv(e = {}, t = {}) {
    (t.head || ad()).use(jy);
    const { title: r, titleTemplate: o, ...s } = e;
    return ld({
      title: r,
      titleTemplate: o,
      _flatMeta: s
    }, t);
  }
  pr = function(e) {
    var _a2;
    const t = e || me();
    return ((_a2 = t.ssrContext) == null ? void 0 : _a2.head) || t.runWithContext(() => {
      if (ur()) {
        const n = Te(va);
        if (!n) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
        return n;
      }
    });
  };
  bs = function(e, t = {}) {
    const n = pr(t.nuxt);
    return ld(e, {
      head: n,
      ...t
    });
  };
  cd = function(e, t = {}) {
    const n = pr(t.nuxt);
    return rv(e, {
      head: n,
      ...t
    });
  };
  let ov, sv, Fl;
  ov = "modulepreload";
  sv = function(e, t) {
    return new URL(e, t).href;
  };
  Fl = {};
  mn = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      let u = function(c) {
        return Promise.all(c.map((f) => Promise.resolve(f).then((p) => ({
          status: "fulfilled",
          value: p
        }), (p) => ({
          status: "rejected",
          reason: p
        }))));
      };
      const i = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      o = u(n.map((c) => {
        if (c = sv(c, r), c in Fl) return;
        Fl[c] = true;
        const f = c.endsWith(".css"), p = f ? '[rel="stylesheet"]' : "";
        if (!!r) for (let g = i.length - 1; g >= 0; g--) {
          const S = i[g];
          if (S.href === c && (!f || S.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${p}`)) return;
        const h = document.createElement("link");
        if (h.rel = f ? "stylesheet" : ov, f || (h.as = "script"), h.crossOrigin = "", h.href = c, l && h.setAttribute("nonce", l), document.head.appendChild(h), f) return new Promise((g, S) => {
          h.addEventListener("load", g), h.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${c}`)));
        });
      }));
    }
    function s(i) {
      const a = new Event("vite:preloadError", {
        cancelable: true
      });
      if (a.payload = i, window.dispatchEvent(a), !a.defaultPrevented) throw i;
    }
    return o.then((i) => {
      for (const a of i || []) a.status === "rejected" && s(a.reason);
      return t().catch(s);
    });
  };
  let Lo, Mo;
  function iv() {
    return Lo = $fetch(pa(`builds/meta/${Dt().app.buildId}.json`), {
      responseType: "json"
    }), Lo.then((e) => {
      Mo = ty(e.matcher);
    }).catch((e) => {
      console.error("[nuxt] Error fetching app manifest.", e);
    }), Lo;
  }
  function _s() {
    return Lo || iv();
  }
  async function ba(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await _s(), !Mo) return console.error("[nuxt] Error creating app manifest matcher.", Mo), {};
    try {
      return ha({}, ...Mo.matchAll(t).reverse());
    } catch (n) {
      return console.error("[nuxt] Error matching route rules.", n), {};
    }
  }
  async function Hl(e, t = {}) {
    if (!await fd(e)) return null;
    const r = await lv(e, t);
    return await ud(r) || null;
  }
  const av = "_payload.json";
  async function lv(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || Tt(n.pathname, {
      acceptRelative: true
    })) throw new Error("Payload URL must not include hostname: " + e);
    const r = Dt(), o = t.hash || (t.fresh ? Date.now() : r.app.buildId), s = r.app.cdnURL, i = s && await fd(e) ? s : r.app.baseURL;
    return ys(i, n.pathname, av + (o ? `?${o}` : ""));
  }
  async function ud(e) {
    const t = fetch(e, {
      cache: "force-cache"
    }).then((n) => n.text().then(dd));
    try {
      return await t;
    } catch (n) {
      console.warn("[nuxt] Cannot load payload ", e, n);
    }
    return null;
  }
  async function fd(e = Bn().path) {
    const t = me();
    return e = Qt(e), (await _s()).prerendered.includes(e) ? true : t.runWithContext(async () => {
      const r = await ba({
        path: e
      });
      return !!r.prerender && !r.redirect;
    });
  }
  let kn = null;
  async function cv() {
    var _a2;
    if (kn) return kn;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await dd(e.textContent || ""), n = e.dataset.src ? await ud(e.dataset.src) : void 0;
    return kn = {
      ...t,
      ...n,
      ...window.__NUXT__
    }, ((_a2 = kn.config) == null ? void 0 : _a2.public) && (kn.config.public = kt(kn.config.public)), kn;
  }
  async function dd(e) {
    return await Py(e, me()._payloadRevivers);
  }
  function _a(e, t) {
    me()._payloadRevivers[e] = t;
  }
  const uv = Wf(() => {
    _a("skipHydrate", (e) => {
    });
  });
  var pd = class {
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
  function hd(e, [t, n, r], o, s = []) {
    e.children ?? (e.children = /* @__PURE__ */ new Map());
    const i = [
      ...s,
      t
    ], a = new pd([], n && o(i, null, ...n));
    if (e.children.set(t, a), r) for (const l of r) hd(a, l, o, i);
  }
  function Ul(e, t, n, r) {
    e.addEventListener(t, n, r), Zt() && On(() => {
      e.removeEventListener(t, n);
    });
  }
  var fv = typeof window < "u";
  function Wl(e, ...t) {
    return typeof e == "function" ? e(...t) : e;
  }
  function dv(e) {
    return e && typeof e == "object" ? JSON.stringify(e, Object.keys(e).sort()) : String(e);
  }
  var _o = (e) => e.map(dv), pv = () => {
  }, hv = {
    gcTime: 1e3 * 60
  }, mv = Symbol(), md = {
    staleTime: 1e3 * 5,
    gcTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
    enabled: true
  }, gd = Symbol(), yd = () => Te(gd, md);
  function vd(e) {
    return (e == null ? void 0 : e.placeholderData) != null && e.state.value.status === "pending";
  }
  var Vl = {}, gv = "_pc_query", wa = by(gv, ({ action: e }) => {
    const t = new pd();
    let n;
    const r = my(cs((k, R) => (n = R) && {
      get: () => (k(), t),
      set: pv
    })), o = Zt(), s = dy()._a, i = yd(), a = e((k, R = null, B, Z = null, ee = 0) => o.run(() => {
      const F = Ue({
        data: B,
        error: Z,
        status: Z ? "error" : B !== void 0 ? "success" : "pending"
      }), z = Ue("idle");
      return Qn({
        key: k,
        state: F,
        placeholderData: null,
        when: ee,
        asyncStatus: z,
        pending: null,
        deps: Qn(/* @__PURE__ */ new Set()),
        gcTimeout: void 0,
        ext: Vl,
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
    const u = /* @__PURE__ */ new WeakMap(), c = e((k) => {
      let R = u.get(k);
      return R ? (R[2].resume(), R[0] = R[0].map((B) => B.options ? S(B.options, B) : B)) : (l = R = [
        [],
        null,
        o.run(() => Yr())
      ], R[1] = s.runWithContext(() => R[2].run(k)), l = null, u.set(k, R)), R;
    });
    function f(k, R) {
      R && (k.deps.add(R), clearTimeout(k.gcTimeout), k.gcTimeout = void 0, n());
    }
    function p(k, R) {
      !R || !k.deps.has(R) || (k.deps.delete(R), n(), d(k));
    }
    function d(k) {
      k.deps.size > 0 || !k.options || (clearTimeout(k.gcTimeout), Number.isFinite(k.options.gcTime) && (k.gcTimeout = setTimeout(() => {
        O(k);
      }, k.options.gcTime)));
    }
    const h = e((k) => Promise.all(g({
      active: true,
      ...k
    }).map((R) => {
      var _a2;
      return _(R), Ke((_a2 = R.options) == null ? void 0 : _a2.enabled) && v(R);
    }))), g = e((k = {}) => {
      const R = k.key ? r.value.find(_o(k.key)) : r.value;
      return R ? (k.exact ? R.value ? [
        R.value
      ] : [] : [
        ...R
      ]).filter((B) => (k.stale == null || B.stale === k.stale) && (k.active == null || B.active === k.active) && (!k.status || B.state.value.status === k.status) && (!k.predicate || k.predicate(B))) : [];
    }), S = e((k, R) => {
      var _a2;
      const B = {
        ...i,
        ...k
      }, Z = _o(Ke(B.key));
      let ee = t.get(Z);
      return ee || (t.set(Z, ee = a(Z, B, (_a2 = B.initialData) == null ? void 0 : _a2.call(B))), B.placeholderData && ee.state.value.status === "pending" && (ee.placeholderData = Wl(B.placeholderData, vd(R) ? R.placeholderData : R == null ? void 0 : R.state.value.data)), n()), ee.options = B, ee.ext === Vl && (ee.ext = {}, E(ee)), l == null ? void 0 : l[0].push(ee), ee;
    }), E = e((k) => {
    }), _ = e((k) => {
      k.when = 0, w(k);
    }), m = e(async (k, R = k.options) => {
      var _a2;
      return k.state.value.error || k.stale ? ((_a2 = k.pending) == null ? void 0 : _a2.refreshCall) ?? v(k, R) : k.state.value;
    }), v = e(async (k, R = k.options) => {
      var _a2;
      k.asyncStatus.value = "loading";
      const B = new AbortController(), { signal: Z } = B;
      (_a2 = k.pending) == null ? void 0 : _a2.abortController.abort();
      const ee = k.pending = {
        abortController: B,
        refreshCall: (async () => R.query({
          signal: Z
        }))().then((F) => (ee === k.pending && L(k, {
          data: F,
          error: null,
          status: "success"
        }), k.state.value)).catch((F) => {
          throw ee === k.pending && F && F.name !== "AbortError" && L(k, {
            status: "error",
            data: k.state.value.data,
            error: F
          }), F;
        }).finally(() => {
          k.asyncStatus.value = "idle", ee === k.pending && (k.pending = null, k.state.value.status !== "pending" && (k.placeholderData = null), k.when = Date.now());
        }),
        when: Date.now()
      };
      return ee.refreshCall;
    }), w = e((k, R) => {
      var _a2;
      (_a2 = k.pending) == null ? void 0 : _a2.abortController.abort(R), k.asyncStatus.value = "idle", k.pending = null;
    }), P = e((k, R) => {
      g(k).forEach((B) => w(B, R));
    }), L = e((k, R) => {
      k.state.value = R, k.when = Date.now();
    }), N = e((k, R) => {
      const B = _o(k);
      let Z = t.get(B);
      Z || t.set(B, Z = a(B)), L(Z, {
        error: null,
        status: "success",
        data: Wl(R, Z.state.value.data)
      }), d(Z), n();
    });
    function C(k) {
      var _a2;
      return (_a2 = r.value.get(_o(k))) == null ? void 0 : _a2.state.value.data;
    }
    const O = e((k) => {
      t.set(k.key), n();
    });
    return {
      caches: r,
      ensureDefinedQuery: c,
      _s: Qn(o),
      setQueryData: N,
      getQueryData: C,
      invalidateQueries: h,
      cancelQueries: P,
      invalidate: _,
      fetch: v,
      refresh: m,
      ensure: S,
      extend: E,
      track: f,
      untrack: p,
      cancel: w,
      create: a,
      remove: O,
      setEntryState: L,
      getEntries: g
    };
  });
  function yv(e, t) {
    for (const n of t) hd(e.caches, n, e.create);
  }
  vE = function(e) {
    const t = wa(), n = yd(), r = tt(), o = Zt(), s = {
      ...n,
      ...e
    }, { refetchOnMount: i, refetchOnReconnect: a, refetchOnWindowFocus: l, enabled: u } = s;
    let c;
    const f = K(() => (o == null ? void 0 : o._isPaused) ? c : c = t.ensure(s, c));
    c = f.value;
    const p = () => f.value.state.value, d = (v) => t.refresh(f.value, s).catch(v || p), h = (v) => t.fetch(f.value, s).catch(v || p), g = K(() => vd(f.value)), S = K(() => g.value ? {
      status: "success",
      data: f.value.placeholderData,
      error: null
    } : f.value.state.value), E = {};
    for (const v in c.ext) E[v] = K({
      get: () => Ke(f.value.ext[v]),
      set(w) {
        const P = f.value.ext[v];
        Se(P) ? P.value = w : f.value.ext[v] = w;
      }
    });
    const _ = {
      ...E,
      state: S,
      status: K(() => S.value.status),
      data: K(() => S.value.data),
      error: K(() => f.value.state.value.error),
      asyncStatus: K(() => f.value.asyncStatus.value),
      isPlaceholderData: g,
      isPending: K(() => S.value.status === "pending"),
      isLoading: K(() => f.value.asyncStatus.value === "loading"),
      refresh: d,
      refetch: h
    };
    let m = false;
    return r ? (St(() => {
      m = true, t.track(c, r);
    }), fs(() => {
      t.untrack(c, r);
    })) : (m = true, o && (t.track(c, o), On(() => {
      t.untrack(c, o);
    }))), at(f, (v, w) => {
      m && (w && (t.untrack(w, r), t.untrack(w, o)), t.track(v, r), t.track(v, o), Ke(u) && d());
    }, {
      immediate: true
    }), typeof u != "boolean" && at(u, (v) => {
      v && d();
    }), r && St(() => {
      if (Ke(u)) {
        const v = Ke(i);
        v === "always" ? h() : (v || _.status.value === "pending") && d();
      }
    }), fv && (l && Ul(document, "visibilitychange", () => {
      const v = Ke(l);
      document.visibilityState === "visible" && Ke(u) && (v === "always" ? h() : v && d());
    }), a && Ul(window, "online", () => {
      if (Ke(u)) {
        const v = Ke(a);
        v === "always" ? h() : v && d();
      }
    })), _;
  };
  var vv = (e, t = {}) => {
    const { pinia: n = e.config.globalProperties.$pinia, plugins: r, queryOptions: o, mutationOptions: s = {} } = t;
    e.provide(gd, {
      ...md,
      ...o
    }), e.provide(mv, {
      ...hv,
      ...s
    });
    const i = wa(n);
    r == null ? void 0 : r.forEach((a) => a({
      scope: i._s,
      queryCache: i,
      pinia: n
    }));
  };
  ql = function(e) {
    return typeof e == "string" ? `'${e}'` : new bv().serialize(e);
  };
  const bv = function() {
    var _e2;
    class e {
      constructor() {
        __privateAdd(this, _e2, /* @__PURE__ */ new Map());
      }
      compare(n, r) {
        const o = typeof n, s = typeof r;
        return o === "string" && s === "string" ? n.localeCompare(r) : o === "number" && s === "number" ? n - r : String.prototype.localeCompare.call(this.serialize(n, true), this.serialize(r, true));
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
        const o = n.constructor, s = o === Object || o === void 0 ? "" : o.name;
        if (s !== "" && globalThis[s] === o) return this.serializeBuiltInType(s, n);
        if (typeof n.toJSON == "function") {
          const i = n.toJSON();
          return s + (i !== null && typeof i == "object" ? this.$object(i) : `(${this.serialize(i)})`);
        }
        return this.serializeObjectEntries(s, Object.entries(n));
      }
      serializeBuiltInType(n, r) {
        const o = this["$" + n];
        if (o) return o.call(this, r);
        if (typeof (r == null ? void 0 : r.entries) == "function") return this.serializeObjectEntries(n, r.entries());
        throw new Error(`Cannot serialize ${n}`);
      }
      serializeObjectEntries(n, r) {
        const o = Array.from(r).sort((i, a) => this.compare(i[0], a[0]));
        let s = `${n}{`;
        for (let i = 0; i < o.length; i++) {
          const [a, l] = o[i];
          s += `${this.serialize(a, true)}:${this.serialize(l)}`, i < o.length - 1 && (s += ",");
        }
        return s + "}";
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
        for (let o = 0; o < n.length; o++) r += this.serialize(n[o]), o < n.length - 1 && (r += ",");
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
        return `Set${this.$Array(Array.from(n).sort((r, o) => this.compare(r, o)))}`;
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
  _v = function(e, t) {
    return e === t || ql(e) === ql(t);
  };
  let Vs, wv, Sv, Ev, kv;
  Vs = (e) => typeof e == "function";
  wv = (e) => e !== null && typeof e == "object";
  Sv = (e) => (wv(e) || Vs(e)) && Vs(e.then) && Vs(e.catch);
  Ev = Object.prototype.toString;
  kv = (e) => Ev.call(e);
  bE = (e) => kv(e) === "[object Object]";
  const qn = typeof document < "u";
  function bd(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function Tv(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && bd(e.default);
  }
  const ce = Object.assign;
  function qs(e, t) {
    const n = {};
    for (const r in t) {
      const o = t[r];
      n[r] = Et(o) ? o.map(e) : e(o);
    }
    return n;
  }
  const $r = () => {
  }, Et = Array.isArray, _d = /#/g, Rv = /&/g, Cv = /\//g, Pv = /=/g, Av = /\?/g, wd = /\+/g, xv = /%5B/g, Ov = /%5D/g, Sd = /%5E/g, Lv = /%60/g, Ed = /%7B/g, Mv = /%7C/g, kd = /%7D/g, $v = /%20/g;
  function Sa(e) {
    return encodeURI("" + e).replace(Mv, "|").replace(xv, "[").replace(Ov, "]");
  }
  function Iv(e) {
    return Sa(e).replace(Ed, "{").replace(kd, "}").replace(Sd, "^");
  }
  function Ni(e) {
    return Sa(e).replace(wd, "%2B").replace($v, "+").replace(_d, "%23").replace(Rv, "%26").replace(Lv, "`").replace(Ed, "{").replace(kd, "}").replace(Sd, "^");
  }
  function Nv(e) {
    return Ni(e).replace(Pv, "%3D");
  }
  function Bv(e) {
    return Sa(e).replace(_d, "%23").replace(Av, "%3F");
  }
  function Dv(e) {
    return e == null ? "" : Bv(e).replace(Cv, "%2F");
  }
  function Kr(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const jv = /\/$/, Fv = (e) => e.replace(jv, "");
  function Ks(e, t, n = "/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = Vv(r ?? t, n), {
      fullPath: r + (s && "?") + s + i,
      path: r,
      query: o,
      hash: Kr(i)
    };
  }
  function Hv(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Kl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Uv(e, t, n) {
    const r = t.matched.length - 1, o = n.matched.length - 1;
    return r > -1 && r === o && ir(t.matched[r], n.matched[o]) && Td(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function ir(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Td(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (const n in e) if (!Wv(e[n], t[n])) return false;
    return true;
  }
  function Wv(e, t) {
    return Et(e) ? Gl(e, t) : Et(t) ? Gl(t, e) : e === t;
  }
  function Gl(e, t) {
    return Et(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function Vv(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, a;
    for (i = 0; i < r.length; i++) if (a = r[i], a !== ".") if (a === "..") s > 1 && s--;
    else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
  }
  const dt = {
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
  var Gr;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(Gr || (Gr = {}));
  var Ir;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(Ir || (Ir = {}));
  function qv(e) {
    if (!e) if (qn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Fv(e);
  }
  const Kv = /^[^#]+#/;
  function Gv(e, t) {
    return e.replace(Kv, "#") + t;
  }
  function zv(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const ws = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Jv(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!o) return;
      t = zv(o, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function zl(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const Bi = /* @__PURE__ */ new Map();
  function Yv(e, t) {
    Bi.set(e, t);
  }
  function Qv(e) {
    const t = Bi.get(e);
    return Bi.delete(e), t;
  }
  let Xv = () => location.protocol + "//" + location.host;
  function Rd(e, t) {
    const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
    if (s > -1) {
      let a = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), Kl(l, "");
    }
    return Kl(n, e) + r + o;
  }
  function Zv(e, t, n, r) {
    let o = [], s = [], i = null;
    const a = ({ state: p }) => {
      const d = Rd(e, location), h = n.value, g = t.value;
      let S = 0;
      if (p) {
        if (n.value = d, t.value = p, i && i === h) {
          i = null;
          return;
        }
        S = g ? p.position - g.position : 0;
      } else r(d);
      o.forEach((E) => {
        E(n.value, h, {
          delta: S,
          type: Gr.pop,
          direction: S ? S > 0 ? Ir.forward : Ir.back : Ir.unknown
        });
      });
    };
    function l() {
      i = n.value;
    }
    function u(p) {
      o.push(p);
      const d = () => {
        const h = o.indexOf(p);
        h > -1 && o.splice(h, 1);
      };
      return s.push(d), d;
    }
    function c() {
      const { history: p } = window;
      p.state && p.replaceState(ce({}, p.state, {
        scroll: ws()
      }), "");
    }
    function f() {
      for (const p of s) p();
      s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", c);
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", c, {
      passive: true
    }), {
      pauseListeners: l,
      listen: u,
      destroy: f
    };
  }
  function Jl(e, t, n, r = false, o = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: o ? ws() : null
    };
  }
  function eb(e) {
    const { history: t, location: n } = window, r = {
      value: Rd(e, n)
    }, o = {
      value: t.state
    };
    o.value || s(r.value, {
      back: null,
      current: r.value,
      forward: null,
      position: t.length - 1,
      replaced: true,
      scroll: null
    }, true);
    function s(l, u, c) {
      const f = e.indexOf("#"), p = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Xv() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](u, "", p), o.value = u;
      } catch (d) {
        console.error(d), n[c ? "replace" : "assign"](p);
      }
    }
    function i(l, u) {
      const c = ce({}, t.state, Jl(o.value.back, l, o.value.forward, true), u, {
        position: o.value.position
      });
      s(l, c, true), r.value = l;
    }
    function a(l, u) {
      const c = ce({}, o.value, t.state, {
        forward: l,
        scroll: ws()
      });
      s(c.current, c, true);
      const f = ce({}, Jl(r.value, l, null), {
        position: c.position + 1
      }, u);
      s(l, f, false), r.value = l;
    }
    return {
      location: r,
      state: o,
      push: a,
      replace: i
    };
  }
  function tb(e) {
    e = qv(e);
    const t = eb(e), n = Zv(e, t.state, t.location, t.replace);
    function r(s, i = true) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = ce({
      location: "",
      base: e,
      go: r,
      createHref: Gv.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(o, "state", {
      enumerable: true,
      get: () => t.state.value
    }), o;
  }
  function nb(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function Cd(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const Pd = Symbol("");
  var Yl;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(Yl || (Yl = {}));
  function ar(e, t) {
    return ce(new Error(), {
      type: e,
      [Pd]: true
    }, t);
  }
  function xt(e, t) {
    return e instanceof Error && Pd in e && (t == null || !!(e.type & t));
  }
  const Ql = "[^/]+?", rb = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, ob = /[.+*?^${}()[\]/\\]/g;
  function sb(e, t) {
    const n = ce({}, rb, t), r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const u of e) {
      const c = u.length ? [] : [
        90
      ];
      n.strict && !u.length && (o += "/");
      for (let f = 0; f < u.length; f++) {
        const p = u[f];
        let d = 40 + (n.sensitive ? 0.25 : 0);
        if (p.type === 0) f || (o += "/"), o += p.value.replace(ob, "\\$&"), d += 40;
        else if (p.type === 1) {
          const { value: h, repeatable: g, optional: S, regexp: E } = p;
          s.push({
            name: h,
            repeatable: g,
            optional: S
          });
          const _ = E || Ql;
          if (_ !== Ql) {
            d += 10;
            try {
              new RegExp(`(${_})`);
            } catch (v) {
              throw new Error(`Invalid custom RegExp for param "${h}" (${_}): ` + v.message);
            }
          }
          let m = g ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
          f || (m = S && u.length < 2 ? `(?:/${m})` : "/" + m), S && (m += "?"), o += m, d += 20, S && (d += -8), g && (d += -20), _ === ".*" && (d += -50);
        }
        c.push(d);
      }
      r.push(c);
    }
    if (n.strict && n.end) {
      const u = r.length - 1;
      r[u][r[u].length - 1] += 0.7000000000000001;
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && !o.endsWith("/") && (o += "(?:/|$)");
    const i = new RegExp(o, n.sensitive ? "" : "i");
    function a(u) {
      const c = u.match(i), f = {};
      if (!c) return null;
      for (let p = 1; p < c.length; p++) {
        const d = c[p] || "", h = s[p - 1];
        f[h.name] = d && h.repeatable ? d.split("/") : d;
      }
      return f;
    }
    function l(u) {
      let c = "", f = false;
      for (const p of e) {
        (!f || !c.endsWith("/")) && (c += "/"), f = false;
        for (const d of p) if (d.type === 0) c += d.value;
        else if (d.type === 1) {
          const { value: h, repeatable: g, optional: S } = d, E = h in u ? u[h] : "";
          if (Et(E) && !g) throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = Et(E) ? E.join("/") : E;
          if (!_) if (S) p.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
          else throw new Error(`Missing required param "${h}"`);
          c += _;
        }
      }
      return c || "/";
    }
    return {
      re: i,
      score: r,
      keys: s,
      parse: a,
      stringify: l
    };
  }
  function ib(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function Ad(e, t) {
    let n = 0;
    const r = e.score, o = t.score;
    for (; n < r.length && n < o.length; ) {
      const s = ib(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (Xl(r)) return 1;
      if (Xl(o)) return -1;
    }
    return o.length - r.length;
  }
  function Xl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const ab = {
    type: 0,
    value: ""
  }, lb = /[a-zA-Z0-9_]/;
  function cb(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        ab
      ]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(d) {
      throw new Error(`ERR (${n})/"${u}": ${d}`);
    }
    let n = 0, r = n;
    const o = [];
    let s;
    function i() {
      s && o.push(s), s = [];
    }
    let a = 0, l, u = "", c = "";
    function f() {
      u && (n === 0 ? s.push({
        type: 0,
        value: u
      }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`), s.push({
        type: 1,
        value: u,
        regexp: c,
        repeatable: l === "*" || l === "+",
        optional: l === "*" || l === "?"
      })) : t("Invalid state to consume buffer"), u = "");
    }
    function p() {
      u += l;
    }
    for (; a < e.length; ) {
      if (l = e[a++], l === "\\" && n !== 2) {
        r = n, n = 4;
        continue;
      }
      switch (n) {
        case 0:
          l === "/" ? (u && f(), i()) : l === ":" ? (f(), n = 1) : p();
          break;
        case 4:
          p(), n = r;
          break;
        case 1:
          l === "(" ? n = 2 : lb.test(l) ? p() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
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
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), o;
  }
  function ub(e, t, n) {
    const r = sb(cb(e.path), n), o = ce(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
  }
  function fb(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = nc({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function o(f) {
      return r.get(f);
    }
    function s(f, p, d) {
      const h = !d, g = ec(f);
      g.aliasOf = d && d.record;
      const S = nc(t, f), E = [
        g
      ];
      if ("alias" in f) {
        const v = typeof f.alias == "string" ? [
          f.alias
        ] : f.alias;
        for (const w of v) E.push(ec(ce({}, g, {
          components: d ? d.record.components : g.components,
          path: w,
          aliasOf: d ? d.record : g
        })));
      }
      let _, m;
      for (const v of E) {
        const { path: w } = v;
        if (p && w[0] !== "/") {
          const P = p.record.path, L = P[P.length - 1] === "/" ? "" : "/";
          v.path = p.record.path + (w && L + w);
        }
        if (_ = ub(v, p, S), d ? d.alias.push(_) : (m = m || _, m !== _ && m.alias.push(_), h && f.name && !tc(_) && i(f.name)), xd(_) && l(_), g.children) {
          const P = g.children;
          for (let L = 0; L < P.length; L++) s(P[L], _, d && d.children[L]);
        }
        d = d || _;
      }
      return m ? () => {
        i(m);
      } : $r;
    }
    function i(f) {
      if (Cd(f)) {
        const p = r.get(f);
        p && (r.delete(f), n.splice(n.indexOf(p), 1), p.children.forEach(i), p.alias.forEach(i));
      } else {
        const p = n.indexOf(f);
        p > -1 && (n.splice(p, 1), f.record.name && r.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i));
      }
    }
    function a() {
      return n;
    }
    function l(f) {
      const p = hb(f, n);
      n.splice(p, 0, f), f.record.name && !tc(f) && r.set(f.record.name, f);
    }
    function u(f, p) {
      let d, h = {}, g, S;
      if ("name" in f && f.name) {
        if (d = r.get(f.name), !d) throw ar(1, {
          location: f
        });
        S = d.record.name, h = ce(Zl(p.params, d.keys.filter((m) => !m.optional).concat(d.parent ? d.parent.keys.filter((m) => m.optional) : []).map((m) => m.name)), f.params && Zl(f.params, d.keys.map((m) => m.name))), g = d.stringify(h);
      } else if (f.path != null) g = f.path, d = n.find((m) => m.re.test(g)), d && (h = d.parse(g), S = d.record.name);
      else {
        if (d = p.name ? r.get(p.name) : n.find((m) => m.re.test(p.path)), !d) throw ar(1, {
          location: f,
          currentLocation: p
        });
        S = d.record.name, h = ce({}, p.params, f.params), g = d.stringify(h);
      }
      const E = [];
      let _ = d;
      for (; _; ) E.unshift(_.record), _ = _.parent;
      return {
        name: S,
        path: g,
        params: h,
        matched: E,
        meta: pb(E)
      };
    }
    e.forEach((f) => s(f));
    function c() {
      n.length = 0, r.clear();
    }
    return {
      addRoute: s,
      resolve: u,
      removeRoute: i,
      clearRoutes: c,
      getRoutes: a,
      getRecordMatcher: o
    };
  }
  function Zl(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function ec(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: db(e),
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
  function db(e) {
    const t = {}, n = e.props || false;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function tc(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function pb(e) {
    return e.reduce((t, n) => ce(t, n.meta), {});
  }
  function nc(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function hb(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const s = n + r >> 1;
      Ad(e, t[s]) < 0 ? r = s : n = s + 1;
    }
    const o = mb(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r;
  }
  function mb(e) {
    let t = e;
    for (; t = t.parent; ) if (xd(t) && Ad(e, t) === 0) return t;
  }
  function xd({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function gb(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(wd, " "), i = s.indexOf("="), a = Kr(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : Kr(s.slice(i + 1));
      if (a in t) {
        let u = t[a];
        Et(u) || (u = t[a] = [
          u
        ]), u.push(l);
      } else t[a] = l;
    }
    return t;
  }
  function rc(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = Nv(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (Et(r) ? r.map((s) => s && Ni(s)) : [
        r && Ni(r)
      ]).forEach((s) => {
        s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
      });
    }
    return t;
  }
  function yb(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = Et(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
    }
    return t;
  }
  const vb = Symbol(""), oc = Symbol(""), no = Symbol(""), Ea = Symbol(""), Di = Symbol("");
  function Sr() {
    let e = [];
    function t(r) {
      return e.push(r), () => {
        const o = e.indexOf(r);
        o > -1 && e.splice(o, 1);
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
  function pn(e, t, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, l) => {
      const u = (p) => {
        p === false ? l(ar(4, {
          from: n,
          to: t
        })) : p instanceof Error ? l(p) : nb(p) ? l(ar(2, {
          from: t,
          to: p
        })) : (i && r.enterCallbacks[o] === i && typeof p == "function" && i.push(p), a());
      }, c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((p) => l(p));
    });
  }
  function Gs(e, t, n, r, o = (s) => s()) {
    const s = [];
    for (const i of e) for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a])) if (bd(l)) {
        const c = (l.__vccOpts || l)[t];
        c && s.push(pn(c, n, r, i, a, o));
      } else {
        let u = l();
        s.push(() => u.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
          const f = Tv(c) ? c.default : c;
          i.mods[a] = c, i.components[a] = f;
          const d = (f.__vccOpts || f)[t];
          return d && pn(d, n, r, i, a, o)();
        }));
      }
    }
    return s;
  }
  function sc(e) {
    const t = Te(no), n = Te(Ea), r = K(() => {
      const l = re(e.to);
      return t.resolve(l);
    }), o = K(() => {
      const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const p = f.findIndex(ir.bind(null, c));
      if (p > -1) return p;
      const d = ic(l[u - 2]);
      return u > 1 && ic(c) === d && f[f.length - 1].path !== d ? f.findIndex(ir.bind(null, l[u - 2])) : p;
    }), s = K(() => o.value > -1 && Eb(n.params, r.value.params)), i = K(() => o.value > -1 && o.value === n.matched.length - 1 && Td(n.params, r.value.params));
    function a(l = {}) {
      if (Sb(l)) {
        const u = t[re(e.replace) ? "replace" : "push"](re(e.to)).catch($r);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: K(() => r.value.href),
      isActive: s,
      isExactActive: i,
      navigate: a
    };
  }
  function bb(e) {
    return e.length === 1 ? e[0] : e;
  }
  const _b = pe({
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
    useLink: sc,
    setup(e, { slots: t }) {
      const n = kt(sc(e)), { options: r } = Te(no), o = K(() => ({
        [ac(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [ac(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const s = t.default && bb(t.default(n));
        return e.custom ? s : he("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: o.value
        }, s);
      };
    }
  }), wb = _b;
  function Sb(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function Eb(e, t) {
    for (const n in t) {
      const r = t[n], o = e[n];
      if (typeof r == "string") {
        if (r !== o) return false;
      } else if (!Et(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return false;
    }
    return true;
  }
  function ic(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const ac = (e, t, n) => e ?? t ?? n, kb = pe({
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
      const r = Te(Di), o = K(() => e.route || r.value), s = Te(oc, 0), i = K(() => {
        let u = re(s);
        const { matched: c } = o.value;
        let f;
        for (; (f = c[u]) && !f.components; ) u++;
        return u;
      }), a = K(() => o.value.matched[i.value]);
      Kt(oc, K(() => i.value + 1)), Kt(vb, a), Kt(Di, o);
      const l = He();
      return at(() => [
        l.value,
        a.value,
        e.name
      ], ([u, c, f], [p, d, h]) => {
        c && (c.instances[f] = u, d && d !== c && u && u === p && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards), c.updateGuards.size || (c.updateGuards = d.updateGuards))), u && c && (!d || !ir(c, d) || !p) && (c.enterCallbacks[f] || []).forEach((g) => g(u));
      }, {
        flush: "post"
      }), () => {
        const u = o.value, c = e.name, f = a.value, p = f && f.components[c];
        if (!p) return lc(n.default, {
          Component: p,
          route: u
        });
        const d = f.props[c], h = d ? d === true ? u.params : typeof d == "function" ? d(u) : d : null, S = he(p, ce({}, h, t, {
          onVnodeUnmounted: (E) => {
            E.component.isUnmounted && (f.instances[c] = null);
          },
          ref: l
        }));
        return lc(n.default, {
          Component: S,
          route: u
        }) || S;
      };
    }
  });
  function lc(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const Od = kb;
  function Tb(e) {
    const t = fb(e.routes, e), n = e.parseQuery || gb, r = e.stringifyQuery || rc, o = e.history, s = Sr(), i = Sr(), a = Sr(), l = Ue(dt);
    let u = dt;
    qn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = qs.bind(null, (x) => "" + x), f = qs.bind(null, Dv), p = qs.bind(null, Kr);
    function d(x, V) {
      let U, Y;
      return Cd(x) ? (U = t.getRecordMatcher(x), Y = V) : Y = x, t.addRoute(Y, U);
    }
    function h(x) {
      const V = t.getRecordMatcher(x);
      V && t.removeRoute(V);
    }
    function g() {
      return t.getRoutes().map((x) => x.record);
    }
    function S(x) {
      return !!t.getRecordMatcher(x);
    }
    function E(x, V) {
      if (V = ce({}, V || l.value), typeof x == "string") {
        const b = Ks(n, x, V.path), T = t.resolve({
          path: b.path
        }, V), M = o.createHref(b.fullPath);
        return ce(b, T, {
          params: p(T.params),
          hash: Kr(b.hash),
          redirectedFrom: void 0,
          href: M
        });
      }
      let U;
      if (x.path != null) U = ce({}, x, {
        path: Ks(n, x.path, V.path).path
      });
      else {
        const b = ce({}, x.params);
        for (const T in b) b[T] == null && delete b[T];
        U = ce({}, x, {
          params: f(b)
        }), V.params = f(V.params);
      }
      const Y = t.resolve(U, V), le = x.hash || "";
      Y.params = c(p(Y.params));
      const ke = Hv(r, ce({}, x, {
        hash: Iv(le),
        path: Y.path
      })), y = o.createHref(ke);
      return ce({
        fullPath: ke,
        hash: le,
        query: r === rc ? yb(x.query) : x.query || {}
      }, Y, {
        redirectedFrom: void 0,
        href: y
      });
    }
    function _(x) {
      return typeof x == "string" ? Ks(n, x, l.value.path) : ce({}, x);
    }
    function m(x, V) {
      if (u !== x) return ar(8, {
        from: V,
        to: x
      });
    }
    function v(x) {
      return L(x);
    }
    function w(x) {
      return v(ce(_(x), {
        replace: true
      }));
    }
    function P(x) {
      const V = x.matched[x.matched.length - 1];
      if (V && V.redirect) {
        const { redirect: U } = V;
        let Y = typeof U == "function" ? U(x) : U;
        return typeof Y == "string" && (Y = Y.includes("?") || Y.includes("#") ? Y = _(Y) : {
          path: Y
        }, Y.params = {}), ce({
          query: x.query,
          hash: x.hash,
          params: Y.path != null ? {} : x.params
        }, Y);
      }
    }
    function L(x, V) {
      const U = u = E(x), Y = l.value, le = x.state, ke = x.force, y = x.replace === true, b = P(U);
      if (b) return L(ce(_(b), {
        state: typeof b == "object" ? ce({}, le, b.state) : le,
        force: ke,
        replace: y
      }), V || U);
      const T = U;
      T.redirectedFrom = V;
      let M;
      return !ke && Uv(r, Y, U) && (M = ar(16, {
        to: T,
        from: Y
      }), Rt(Y, Y, true, false)), (M ? Promise.resolve(M) : O(T, Y)).catch((A) => xt(A) ? xt(A, 2) ? A : nn(A) : J(A, T, Y)).then((A) => {
        if (A) {
          if (xt(A, 2)) return L(ce({
            replace: y
          }, _(A.to), {
            state: typeof A.to == "object" ? ce({}, le, A.to.state) : le,
            force: ke
          }), V || T);
        } else A = R(T, Y, true, y, le);
        return k(T, Y, A), A;
      });
    }
    function N(x, V) {
      const U = m(x, V);
      return U ? Promise.reject(U) : Promise.resolve();
    }
    function C(x) {
      const V = jn.values().next().value;
      return V && typeof V.runWithContext == "function" ? V.runWithContext(x) : x();
    }
    function O(x, V) {
      let U;
      const [Y, le, ke] = Rb(x, V);
      U = Gs(Y.reverse(), "beforeRouteLeave", x, V);
      for (const b of Y) b.leaveGuards.forEach((T) => {
        U.push(pn(T, x, V));
      });
      const y = N.bind(null, x, V);
      return U.push(y), ut(U).then(() => {
        U = [];
        for (const b of s.list()) U.push(pn(b, x, V));
        return U.push(y), ut(U);
      }).then(() => {
        U = Gs(le, "beforeRouteUpdate", x, V);
        for (const b of le) b.updateGuards.forEach((T) => {
          U.push(pn(T, x, V));
        });
        return U.push(y), ut(U);
      }).then(() => {
        U = [];
        for (const b of ke) if (b.beforeEnter) if (Et(b.beforeEnter)) for (const T of b.beforeEnter) U.push(pn(T, x, V));
        else U.push(pn(b.beforeEnter, x, V));
        return U.push(y), ut(U);
      }).then(() => (x.matched.forEach((b) => b.enterCallbacks = {}), U = Gs(ke, "beforeRouteEnter", x, V, C), U.push(y), ut(U))).then(() => {
        U = [];
        for (const b of i.list()) U.push(pn(b, x, V));
        return U.push(y), ut(U);
      }).catch((b) => xt(b, 8) ? b : Promise.reject(b));
    }
    function k(x, V, U) {
      a.list().forEach((Y) => C(() => Y(x, V, U)));
    }
    function R(x, V, U, Y, le) {
      const ke = m(x, V);
      if (ke) return ke;
      const y = V === dt, b = qn ? history.state : {};
      U && (Y || y ? o.replace(x.fullPath, ce({
        scroll: y && b && b.scroll
      }, le)) : o.push(x.fullPath, le)), l.value = x, Rt(x, V, U, y), nn();
    }
    let B;
    function Z() {
      B || (B = o.listen((x, V, U) => {
        if (!ao.listening) return;
        const Y = E(x), le = P(Y);
        if (le) {
          L(ce(le, {
            replace: true,
            force: true
          }), Y).catch($r);
          return;
        }
        u = Y;
        const ke = l.value;
        qn && Yv(zl(ke.fullPath, U.delta), ws()), O(Y, ke).catch((y) => xt(y, 12) ? y : xt(y, 2) ? (L(ce(_(y.to), {
          force: true
        }), Y).then((b) => {
          xt(b, 20) && !U.delta && U.type === Gr.pop && o.go(-1, false);
        }).catch($r), Promise.reject()) : (U.delta && o.go(-U.delta, false), J(y, Y, ke))).then((y) => {
          y = y || R(Y, ke, false), y && (U.delta && !xt(y, 8) ? o.go(-U.delta, false) : U.type === Gr.pop && xt(y, 20) && o.go(-1, false)), k(Y, ke, y);
        }).catch($r);
      }));
    }
    let ee = Sr(), F = Sr(), z;
    function J(x, V, U) {
      nn(x);
      const Y = F.list();
      return Y.length ? Y.forEach((le) => le(x, V, U)) : console.error(x), Promise.reject(x);
    }
    function Ae() {
      return z && l.value !== dt ? Promise.resolve() : new Promise((x, V) => {
        ee.add([
          x,
          V
        ]);
      });
    }
    function nn(x) {
      return z || (z = !x, Z(), ee.list().forEach(([V, U]) => x ? U(x) : V()), ee.reset()), x;
    }
    function Rt(x, V, U, Y) {
      const { scrollBehavior: le } = e;
      if (!qn || !le) return Promise.resolve();
      const ke = !U && Qv(zl(x.fullPath, 0)) || (Y || !U) && history.state && history.state.scroll || null;
      return wt().then(() => le(x, V, ke)).then((y) => y && Jv(y)).catch((y) => J(y, x, V));
    }
    const Ye = (x) => o.go(x);
    let Dn;
    const jn = /* @__PURE__ */ new Set(), ao = {
      currentRoute: l,
      listening: true,
      addRoute: d,
      removeRoute: h,
      clearRoutes: t.clearRoutes,
      hasRoute: S,
      getRoutes: g,
      resolve: E,
      options: e,
      push: v,
      replace: w,
      go: Ye,
      back: () => Ye(-1),
      forward: () => Ye(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: F.add,
      isReady: Ae,
      install(x) {
        const V = this;
        x.component("RouterLink", wb), x.component("RouterView", Od), x.config.globalProperties.$router = V, Object.defineProperty(x.config.globalProperties, "$route", {
          enumerable: true,
          get: () => re(l)
        }), qn && !Dn && l.value === dt && (Dn = true, v(o.location).catch((le) => {
        }));
        const U = {};
        for (const le in dt) Object.defineProperty(U, le, {
          get: () => l.value[le],
          enumerable: true
        });
        x.provide(no, V), x.provide(Ea, Nt(U)), x.provide(Di, l);
        const Y = x.unmount;
        jn.add(x), x.unmount = function() {
          jn.delete(x), jn.size < 1 && (u = dt, B && B(), B = null, l.value = dt, Dn = false, z = false), Y();
        };
      }
    };
    function ut(x) {
      return x.reduce((V, U) => V.then(() => C(U)), Promise.resolve());
    }
    return ao;
  }
  function Rb(e, t) {
    const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
      const a = t.matched[i];
      a && (e.matched.find((u) => ir(u, a)) ? r.push(a) : n.push(a));
      const l = e.matched[i];
      l && (t.matched.find((u) => ir(u, l)) || o.push(l));
    }
    return [
      n,
      r,
      o
    ];
  }
  _E = function() {
    return Te(no);
  };
  Ld = function(e) {
    return Te(Ea);
  };
  const Md = (e, t) => ({
    default: () => {
      var _a2;
      return e ? he(lm, e === true ? {} : e, t) : (_a2 = t.default) == null ? void 0 : _a2.call(t);
    }
  }), Cb = /(:\w+)\([^)]+\)/g, Pb = /(:\w+)[?+*]/g, Ab = /:\w+/g;
  function cc(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(Cb, "$1").replace(Pb, "$1").replace(Ab, (n) => {
      var _a2;
      return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
    });
    return typeof t == "function" ? t(e) : t;
  }
  function $d(e, t) {
    return e === t || t === dt ? false : cc(e) !== cc(t) ? true : !e.matched.every((r, o) => {
      var _a2, _b2;
      return r.components && r.components.default === ((_b2 = (_a2 = t.matched[o]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default);
    });
  }
  function xb(e, t = false) {
    if (e) {
      if (e.nodeName === "#comment" && e.nodeValue === "[") return Id(e, [], t);
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
  function Id(e, t = [], n = false) {
    var _a2;
    if (e && e.nodeName) {
      if (Lb(e)) return t;
      if (!Ob(e)) {
        const r = e.cloneNode(true);
        n && ((_a2 = r.querySelectorAll) == null ? void 0 : _a2.call(r, "[data-island-slot]").forEach((o) => {
          o.innerHTML = "";
        })), t.push(r.outerHTML);
      }
      Id(e.nextSibling, t, n);
    }
    return t;
  }
  function zs(e, t) {
    const n = e ? xb(e) : [
      t
    ];
    return n ? zh(n.join(""), n.length) : he("div");
  }
  function Ob(e) {
    return e.nodeName === "#comment" && e.nodeValue === "[";
  }
  function Lb(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]";
  }
  let Nd, wo, Js;
  Nd = Symbol.for("nuxt:client-only");
  wo = "<div></div>";
  wE = pe({
    name: "ClientOnly",
    inheritAttrs: false,
    props: [
      "fallback",
      "placeholder",
      "placeholderTag",
      "fallbackTag"
    ],
    setup(e, { slots: t, attrs: n }) {
      const r = Ue(false);
      St(() => {
        r.value = true;
      });
      const o = tt();
      return o && (o._nuxtClientOnly = true), Kt(Nd, true), () => {
        var _a2;
        if (r.value) {
          const l = (_a2 = t.default) == null ? void 0 : _a2.call(t);
          return l && l.length === 1 ? [
            lt(l[0], n)
          ] : l;
        }
        const s = t.fallback || t.placeholder;
        if (s) return he(s);
        const i = e.fallback || e.placeholder || "", a = e.fallbackTag || e.placeholderTag || "span";
        return de(a, n, i);
      };
    }
  });
  Js = /* @__PURE__ */ new WeakMap();
  SE = function(e) {
    if (Js.has(e)) return Js.get(e);
    const t = {
      ...e
    };
    return t.render ? t.render = (n, r, o, s, i, a) => {
      var _a2;
      if (s.mounted$ ?? n.mounted$) {
        const l = (_a2 = e.render) == null ? void 0 : _a2.bind(n)(n, r, o, s, i, a);
        return l.children === null || typeof l.children == "string" ? lt(l) : he(l);
      }
      return zs(n._.vnode.el, wo);
    } : t.template && (t.template = `
      <template v-if="mounted$">${e.template}</template>
      <template v-else>${wo}</template>
    `), t.setup = (n, r) => {
      var _a2;
      const o = me(), s = Ue(o.isHydrating === false), i = tt();
      if (o.isHydrating) {
        const l = {
          ...i.attrs
        }, u = Mb(i);
        for (const c in l) delete i.attrs[c];
        St(() => {
          Object.assign(i.attrs, l), i.vnode.dirs = u;
        });
      }
      St(() => {
        s.value = true;
      });
      const a = ((_a2 = e.setup) == null ? void 0 : _a2.call(e, n, r)) || {};
      return Sv(a) ? Promise.resolve(a).then((l) => typeof l != "function" ? (l || (l = {}), l.mounted$ = s, l) : (...u) => {
        if (s.value || !o.isHydrating) {
          const c = l(...u);
          return c.children === null || typeof c.children == "string" ? lt(c) : he(c);
        }
        return zs(i == null ? void 0 : i.vnode.el, wo);
      }) : typeof a == "function" ? (...l) => {
        if (s.value) {
          const u = a(...l), c = t.inheritAttrs !== false ? r.attrs : void 0;
          return u.children === null || typeof u.children == "string" ? lt(u, c) : he(u, c);
        }
        return zs(i == null ? void 0 : i.vnode.el, wo);
      } : Object.assign(a, {
        mounted$: s
      });
    }, Js.set(e, t), t;
  };
  function Mb(e) {
    if (!e || !e.vnode.dirs) return null;
    const t = e.vnode.dirs;
    return e.vnode.dirs = null, t;
  }
  let ji, $b;
  ji = globalThis.requestIdleCallback || ((e) => {
    const t = Date.now(), n = {
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout(() => {
      e(n);
    }, 1);
  });
  $b = globalThis.cancelIdleCallback || ((e) => {
    clearTimeout(e);
  });
  hr = (e) => {
    const t = me();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
      ji(() => e());
    }) : ji(() => e());
  };
  EE = function(...e) {
    var _a2;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    Ib(e[0], e[1]) && e.unshift(t);
    let [n, r, o = {}] = e;
    const s = K(() => Ke(n));
    if (typeof s.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = me();
    o.server ?? (o.server = true), o.default ?? (o.default = Bb), o.getCachedData ?? (o.getCachedData = Dd), o.lazy ?? (o.lazy = false), o.immediate ?? (o.immediate = true), o.deep ?? (o.deep = qg.deep), o.dedupe ?? (o.dedupe = "cancel"), o._functionName, i._asyncData[s.value];
    const a = {
      cause: "initial",
      dedupe: o.dedupe
    };
    ((_a2 = i._asyncData[s.value]) == null ? void 0 : _a2._init) || (a.cachedData = o.getCachedData(s.value, i, {
      cause: "initial"
    }), i._asyncData[s.value] = uc(i, s.value, r, o, a.cachedData));
    const l = i._asyncData[s.value];
    l._deps++;
    const u = () => i._asyncData[s.value].execute(a), c = o.server !== false && i.payload.serverRendered;
    {
      let d = function(_) {
        const m = i._asyncData[_];
        (m == null ? void 0 : m._deps) && (m._deps--, m._deps === 0 && (m == null ? void 0 : m._off()));
      };
      const h = tt();
      if (h && c && o.immediate && !h.sp && (h.sp = []), h && !h._nuxtOnBeforeMountCbs) {
        h._nuxtOnBeforeMountCbs = [];
        const _ = h._nuxtOnBeforeMountCbs;
        Lu(() => {
          _.forEach((m) => {
            m();
          }), _.splice(0, _.length);
        }), fs(() => _.splice(0, _.length));
      }
      const g = h && (h._nuxtClientOnly || Te(Nd, false));
      c && i.isHydrating && (l.error.value || l.data.value !== void 0) ? l.status.value = l.error.value ? "error" : "success" : h && (!g && i.payload.serverRendered && i.isHydrating || o.lazy) && o.immediate ? h._nuxtOnBeforeMountCbs.push(u) : o.immediate && l.status.value !== "success" && u();
      const S = Zt(), E = at([
        s,
        ...o.watch || []
      ], ([_], [m]) => {
        var _a3, _b2, _c2;
        if ((_ || m) && _ !== m) {
          const v = ((_a3 = i._asyncData[m]) == null ? void 0 : _a3.data.value) !== void 0, w = i._asyncDataPromises[m] !== void 0;
          m && d(m);
          const P = {
            cause: "initial",
            dedupe: o.dedupe
          };
          if (!((_b2 = i._asyncData[_]) == null ? void 0 : _b2._init)) {
            let L;
            m && v ? L = (_c2 = i._asyncData[m]) == null ? void 0 : _c2.data.value : (L = o.getCachedData(_, i, {
              cause: "initial"
            }), P.cachedData = L), i._asyncData[_] = uc(i, _, r, o, L);
          }
          i._asyncData[_]._deps++, (o.immediate || v || w) && i._asyncData[_].execute(P);
        } else l._execute({
          cause: "watch",
          dedupe: o.dedupe
        });
      }, {
        flush: "sync"
      });
      S && On(() => {
        E(), d(s.value);
      });
    }
    const f = {
      data: So(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.data;
      }),
      pending: So(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.pending;
      }),
      status: So(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.status;
      }),
      error: So(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.error;
      }),
      refresh: (...d) => i._asyncData[s.value].execute(...d),
      execute: (...d) => i._asyncData[s.value].execute(...d),
      clear: () => Bd(i, s.value)
    }, p = Promise.resolve(i._asyncDataPromises[s.value]).then(() => f);
    return Object.assign(p, f), p;
  };
  function So(e) {
    return K({
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
  function Ib(e, t) {
    return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function");
  }
  async function Fi(e) {
    await new Promise((n) => hr(n)), await me().hooks.callHookParallel("app:data:refresh", void 0);
  }
  function Bd(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = void 0), e._asyncData[t] && (e._asyncData[t].data.value = re(e._asyncData[t]._default()), e._asyncData[t].error.value = void 0, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = true), e._asyncDataPromises[t] = void 0);
  }
  function Nb(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function uc(e, t, n, r, o) {
    var _a2;
    (_a2 = e.payload._errors)[t] ?? (_a2[t] = void 0);
    const s = r.getCachedData !== Dd, i = n, a = r.deep ? He : Ue, l = o !== void 0, u = e.hook("app:data:refresh", async (f) => {
      (!f || f.includes(t)) && await c.execute({
        cause: "refresh:hook"
      });
    }), c = {
      data: a(l ? o : r.default()),
      pending: K(() => c.status.value === "pending"),
      error: ta(e.payload._errors, t),
      status: Ue("idle"),
      execute: (...f) => {
        const [p, d = void 0] = f, h = p && d === void 0 && typeof p == "object" ? p : {};
        if (e._asyncDataPromises[t]) {
          if ((h.dedupe ?? r.dedupe) === "defer") return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = true;
        }
        {
          const S = "cachedData" in h ? h.cachedData : r.getCachedData(t, e, {
            cause: h.cause ?? "refresh:manual"
          });
          if (S !== void 0) return e.payload.data[t] = c.data.value = S, c.error.value = void 0, c.status.value = "success", Promise.resolve(S);
        }
        c.status.value = "pending";
        const g = new Promise((S, E) => {
          try {
            S(i(e));
          } catch (_) {
            E(_);
          }
        }).then(async (S) => {
          if (g.cancelled) return e._asyncDataPromises[t];
          let E = S;
          r.transform && (E = await r.transform(S)), r.pick && (E = Nb(E, r.pick)), e.payload.data[t] = E, c.data.value = E, c.error.value = void 0, c.status.value = "success";
        }).catch((S) => {
          if (g.cancelled) return e._asyncDataPromises[t];
          c.error.value = _n(S), c.data.value = re(r.default()), c.status.value = "error";
        }).finally(() => {
          g.cancelled || delete e._asyncDataPromises[t];
        });
        return e._asyncDataPromises[t] = g, e._asyncDataPromises[t];
      },
      _execute: uy((...f) => c.execute(...f), 0, {
        leading: true
      }),
      _default: r.default,
      _deps: 0,
      _init: true,
      _hash: void 0,
      _off: () => {
        var _a3;
        u(), ((_a3 = e._asyncData[t]) == null ? void 0 : _a3._init) && (e._asyncData[t]._init = false), s || wt(() => {
          var _a4;
          ((_a4 = e._asyncData[t]) == null ? void 0 : _a4._init) || (Bd(e, t), c.execute = () => Promise.resolve());
        });
      }
    };
    return c;
  }
  const Bb = () => {
  }, Dd = (e, t, n) => {
    if (t.isHydrating) return t.payload.data[e];
    if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook") return t.static.data[e];
  }, Db = "$s";
  jd = function(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = Db + n, s = me(), i = ta(s.payload.state, o);
    if (i.value === void 0 && r) {
      const a = r();
      if (Se(a)) return s.payload.state[o] = a, a;
      i.value = a;
    }
    return i;
  };
  function jb(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {}, r = t || {}, o = r.decode || Fb;
    let s = 0;
    for (; s < e.length; ) {
      const i = e.indexOf("=", s);
      if (i === -1) break;
      let a = e.indexOf(";", s);
      if (a === -1) a = e.length;
      else if (a < i) {
        s = e.lastIndexOf(";", i - 1) + 1;
        continue;
      }
      const l = e.slice(s, i).trim();
      if ((r == null ? void 0 : r.filter) && !(r == null ? void 0 : r.filter(l))) {
        s = a + 1;
        continue;
      }
      if (n[l] === void 0) {
        let u = e.slice(i + 1, a).trim();
        u.codePointAt(0) === 34 && (u = u.slice(1, -1)), n[l] = Hb(u, o);
      }
      s = a + 1;
    }
    return n;
  }
  function Fb(e) {
    return e.includes("%") ? decodeURIComponent(e) : e;
  }
  function Hb(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  const Eo = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function fc(e, t, n) {
    const r = n || {}, o = r.encode || encodeURIComponent;
    if (typeof o != "function") throw new TypeError("option encode is invalid");
    if (!Eo.test(e)) throw new TypeError("argument name is invalid");
    const s = o(t);
    if (s && !Eo.test(s)) throw new TypeError("argument val is invalid");
    let i = e + "=" + s;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
      const a = r.maxAge - 0;
      if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
      i += "; Max-Age=" + Math.floor(a);
    }
    if (r.domain) {
      if (!Eo.test(r.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!Eo.test(r.path)) throw new TypeError("option path is invalid");
      i += "; Path=" + r.path;
    }
    if (r.expires) {
      if (!Ub(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
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
  function Ub(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
  }
  function mt(e) {
    if (typeof e != "object") return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
      if (e.constructor !== Object && typeof e.constructor == "function") {
        n = new e.constructor();
        for (t in e) e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = mt(e[t]));
      } else {
        n = {};
        for (t in e) t === "__proto__" ? Object.defineProperty(n, t, {
          value: mt(e[t]),
          configurable: true,
          enumerable: true,
          writable: true
        }) : n[t] = mt(e[t]);
      }
      return n;
    }
    if (r === "[object Array]") {
      for (t = e.length, n = Array(t); t--; ) n[t] = mt(e[t]);
      return n;
    }
    return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(o) {
      n.add(mt(o));
    }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(o, s) {
      n.set(mt(s), mt(o));
    }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(mt(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
  }
  const Wb = {
    path: "/",
    watch: true,
    decode: (e) => Vr(decodeURIComponent(e)),
    encode: (e) => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
  }, ko = window.cookieStore;
  function dc(e, t) {
    var _a2;
    const n = {
      ...Wb,
      ...t
    };
    n.filter ?? (n.filter = (u) => u === e);
    const r = pc(n) || {};
    let o;
    n.maxAge !== void 0 ? o = n.maxAge * 1e3 : n.expires && (o = n.expires.getTime() - Date.now());
    const s = o !== void 0 && o <= 0, i = s || r[e] === void 0 || r[e] === null, a = mt(s ? void 0 : r[e] ?? ((_a2 = n.default) == null ? void 0 : _a2.call(n))), l = o && !s ? Kb(a, o, n.watch && n.watch !== "shallow") : He(a);
    {
      let u = null;
      try {
        !ko && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${e}`));
      } catch {
      }
      const c = (h = false) => {
        !h && (n.readonly || _v(l.value, r[e])) || (qb(e, l.value, n), r[e] = mt(l.value), u == null ? void 0 : u.postMessage({
          value: n.encode(l.value)
        }));
      }, f = (h) => {
        var _a3;
        const g = h.refresh ? (_a3 = pc(n)) == null ? void 0 : _a3[e] : n.decode(h.value);
        p = true, l.value = g, r[e] = mt(g), wt(() => {
          p = false;
        });
      };
      let p = false;
      const d = !!Zt();
      if (d && On(() => {
        p = true, c(), u == null ? void 0 : u.close();
      }), ko) {
        const h = (g) => {
          const S = g.changed.find((_) => _.name === e), E = g.deleted.find((_) => _.name === e);
          S && f({
            value: S.value
          }), E && f({
            value: null
          });
        };
        ko.addEventListener("change", h), d && On(() => ko.removeEventListener("change", h));
      } else u && (u.onmessage = ({ data: h }) => f(h));
      n.watch && at(l, () => {
        p || c();
      }, {
        deep: n.watch !== "shallow"
      }), i && c(i);
    }
    return l;
  }
  function pc(e = {}) {
    return jb(document.cookie, e);
  }
  function Vb(e, t, n = {}) {
    return t == null ? fc(e, t, {
      ...n,
      maxAge: -1
    }) : fc(e, t, n);
  }
  function qb(e, t, n = {}) {
    document.cookie = Vb(e, t, n);
  }
  const hc = 2147483647;
  function Kb(e, t, n) {
    let r, o, s = 0;
    const i = n ? He(e) : {
      value: e
    };
    return Zt() && On(() => {
      o == null ? void 0 : o(), clearTimeout(r);
    }), cs((a, l) => {
      n && (o = at(i, l));
      function u() {
        s = 0, clearTimeout(r);
        const c = t - s, f = c < hc ? c : hc;
        r = setTimeout(() => {
          if (s += f, s < t) return u();
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
  function Gb(e) {
    if ((e == null ? void 0 : e.__asyncLoader) && !e.__asyncResolved) return e.__asyncLoader();
  }
  async function Fd(e, t = Ie()) {
    const { path: n, matched: r } = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = /* @__PURE__ */ new Set()), t._routePreloaded.has(n))) return;
    const o = t._preloadPromises || (t._preloadPromises = []);
    if (o.length > 4) return Promise.all(o).then(() => Fd(e, t));
    t._routePreloaded.add(n);
    const s = r.map((i) => {
      var _a2;
      return (_a2 = i.components) == null ? void 0 : _a2.default;
    }).filter((i) => typeof i == "function");
    for (const i of s) {
      const a = Promise.resolve(i()).catch(() => {
      }).finally(() => o.splice(o.indexOf(a)));
      o.push(a);
    }
    await Promise.all(o);
  }
  function zb(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
      n = Vr(sessionStorage.getItem("nuxt:reload") || "{}");
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
          state: me().payload.state
        }));
      } catch {
      }
      window.location.pathname !== t ? window.location.href = t : window.location.reload();
    }
  }
  const Jb = {
    scrollBehavior(e, t, n) {
      var _a2;
      const r = me(), o = ((_a2 = Ie().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
      if (e.path === t.path) return t.hash && !e.hash ? {
        left: 0,
        top: 0
      } : e.hash ? {
        el: e.hash,
        top: Hd(e.hash),
        behavior: o
      } : false;
      if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === false) return false;
      const i = r._runningTransition ? "page:transition:finish" : "page:loading:end";
      return new Promise((a) => {
        if (t === dt) {
          a(mc(e, t, n, o));
          return;
        }
        r.hooks.hookOnce(i, () => {
          requestAnimationFrame(() => a(mc(e, t, n, o)));
        });
      });
    }
  };
  function Hd(e) {
    try {
      const t = document.querySelector(e);
      if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
    } catch {
    }
    return 0;
  }
  function mc(e, t, n, r) {
    if (n) return n;
    const o = $d(e, t);
    return e.hash ? {
      el: e.hash,
      top: Hd(e.hash),
      behavior: o ? r : "instant"
    } : {
      left: 0,
      top: 0
    };
  }
  const Yb = {
    scrollBehaviorType: "smooth",
    hashMode: false
  }, on = {
    ...Yb,
    ...Jb
  }, Qb = (...e) => e.find((t) => t !== void 0);
  function Xb(e) {
    const t = e.componentName || "NuxtLink";
    function n(s) {
      return typeof s == "string" && s.startsWith("#");
    }
    function r(s, i, a) {
      const l = a ?? e.trailingSlash;
      if (!s || l !== "append" && l !== "remove") return s;
      if (typeof s == "string") return To(s, l);
      const u = "path" in s && s.path !== void 0 ? s.path : i(s).path;
      return {
        ...s,
        name: void 0,
        path: To(u, l)
      };
    }
    function o(s) {
      const i = Ie(), a = Dt(), l = K(() => !!s.target && s.target !== "_self"), u = K(() => {
        const S = s.to || s.href || "";
        return typeof S == "string" && Tt(S, {
          acceptRelative: true
        });
      }), c = di("RouterLink"), f = c && typeof c != "string" ? c.useLink : void 0, p = K(() => {
        if (s.external) return true;
        const S = s.to || s.href || "";
        return typeof S == "object" ? false : S === "" || u.value;
      }), d = K(() => {
        const S = s.to || s.href || "";
        return p.value ? S : r(S, i.resolve, s.trailingSlash);
      }), h = p.value ? void 0 : f == null ? void 0 : f({
        ...s,
        to: d
      }), g = K(() => {
        var _a2;
        const S = s.trailingSlash ?? e.trailingSlash;
        if (!d.value || u.value || n(d.value)) return d.value;
        if (p.value) {
          const E = typeof d.value == "object" && "path" in d.value ? Oi(d.value) : d.value, _ = typeof E == "object" ? i.resolve(E).href : E;
          return To(_, S);
        }
        return typeof d.value == "object" ? ((_a2 = i.resolve(d.value)) == null ? void 0 : _a2.href) ?? null : To(ys(a.app.baseURL, d.value), S);
      });
      return {
        to: d,
        hasTarget: l,
        isAbsoluteUrl: u,
        isExternal: p,
        href: g,
        isActive: (h == null ? void 0 : h.isActive) ?? K(() => d.value === i.currentRoute.value.path),
        isExactActive: (h == null ? void 0 : h.isExactActive) ?? K(() => d.value === i.currentRoute.value.path),
        route: (h == null ? void 0 : h.route) ?? K(() => i.resolve(d.value)),
        async navigate(S) {
          await ly(g.value, {
            replace: s.replace,
            external: p.value || l.value
          });
        }
      };
    }
    return pe({
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
      useLink: o,
      setup(s, { slots: i }) {
        const a = Ie(), { to: l, href: u, navigate: c, isExternal: f, hasTarget: p, isAbsoluteUrl: d } = o(s), h = Ue(false), g = He(null), S = (m) => {
          var _a2;
          g.value = s.custom ? (_a2 = m == null ? void 0 : m.$el) == null ? void 0 : _a2.nextElementSibling : m == null ? void 0 : m.$el;
        };
        function E(m) {
          var _a2, _b2;
          return !h.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === m : ((_a2 = s.prefetchOn) == null ? void 0 : _a2[m]) ?? ((_b2 = e.prefetchOn) == null ? void 0 : _b2[m])) && (s.prefetch ?? e.prefetch) !== false && s.noPrefetch !== true && s.target !== "_blank" && !t_();
        }
        async function _(m = me()) {
          if (h.value) return;
          h.value = true;
          const v = typeof l.value == "string" ? l.value : f.value ? Oi(l.value) : a.resolve(l.value).fullPath, w = f.value ? new URL(v, window.location.href).href : v;
          await Promise.all([
            m.hooks.callHook("link:prefetch", w).catch(() => {
            }),
            !f.value && !p.value && Fd(l.value, a).catch(() => {
            })
          ]);
        }
        if (E("visibility")) {
          const m = me();
          let v, w = null;
          St(() => {
            const P = Zb();
            hr(() => {
              v = ji(() => {
                var _a2;
                ((_a2 = g == null ? void 0 : g.value) == null ? void 0 : _a2.tagName) && (w = P.observe(g.value, async () => {
                  w == null ? void 0 : w(), w = null, await _(m);
                }));
              });
            });
          }), Nn(() => {
            v && $b(v), w == null ? void 0 : w(), w = null;
          });
        }
        return () => {
          var _a2;
          if (!f.value && !p.value && !n(l.value)) {
            const w = {
              ref: S,
              to: l.value,
              activeClass: s.activeClass || e.activeClass,
              exactActiveClass: s.exactActiveClass || e.exactActiveClass,
              replace: s.replace,
              ariaCurrentValue: s.ariaCurrentValue,
              custom: s.custom
            };
            return s.custom || (E("interaction") && (w.onPointerenter = _.bind(null, void 0), w.onFocus = _.bind(null, void 0)), h.value && (w.class = s.prefetchedClass || e.prefetchedClass), w.rel = s.rel || void 0), he(di("RouterLink"), w, i.default);
          }
          const m = s.target || null, v = Qb(s.noRel ? "" : s.rel, e.externalRelAttribute, d.value || p.value ? "noopener noreferrer" : "") || null;
          return s.custom ? i.default ? i.default({
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
                  return fa(w.search);
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
            isExternal: f.value || p.value,
            isActive: false,
            isExactActive: false
          }) : null : he("a", {
            ref: g,
            href: u.value || null,
            rel: v,
            target: m,
            onClick: (w) => {
              if (!(f.value || p.value)) return w.preventDefault(), s.replace ? a.replace(u.value) : a.push(u.value);
            }
          }, (_a2 = i.default) == null ? void 0 : _a2.call(i));
        };
      }
    });
  }
  Hi = Xb(Vg);
  function To(e, t) {
    const n = t === "append" ? gs : Qt;
    return Tt(e) && !e.startsWith("http") ? e : n(e, true);
  }
  function Zb() {
    const e = me();
    if (e._observer) return e._observer;
    let t = null;
    const n = /* @__PURE__ */ new Map(), r = (s, i) => (t || (t = new IntersectionObserver((a) => {
      for (const l of a) {
        const u = n.get(l.target);
        (l.isIntersecting || l.intersectionRatio > 0) && u && u();
      }
    })), n.set(s, i), t.observe(s), () => {
      n.delete(s), t == null ? void 0 : t.unobserve(s), n.size === 0 && (t == null ? void 0 : t.disconnect(), t = null);
    });
    return e._observer = {
      observe: r
    };
  }
  const e_ = /2g/;
  function t_() {
    const e = navigator.connection;
    return !!(e && (e.saveData || e_.test(e.effectiveType)));
  }
  const n_ = Wf(() => {
    _a("PiniaColada_TreeMapNode", (e) => e);
  }), Ud = [
    [
      "NuxtError",
      (e) => _n(e)
    ],
    [
      "EmptyShallowRef",
      (e) => Ue(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Vr(e))
    ],
    [
      "EmptyRef",
      (e) => He(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Vr(e))
    ],
    [
      "ShallowRef",
      (e) => Ue(e)
    ],
    [
      "ShallowReactive",
      (e) => Nt(e)
    ],
    [
      "Ref",
      (e) => He(e)
    ],
    [
      "Reactive",
      (e) => kt(e)
    ]
  ];
  Ud.push([
    "Island",
    ({ key: e, params: t, result: n }) => {
      var _a2;
      const r = me();
      return r.isHydrating || ((_a2 = r.payload.data)[e] || (_a2[e] = $fetch(`/__nuxt_island/${e}.json`, {
        responseType: "json",
        ...t ? {
          params: t
        } : {}
      }).then((o) => (r.payload.data[e] = o, o)))), {
        html: "",
        ...n
      };
    }
  ]);
  const r_ = Re({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, o] of Ud) _a(r, o);
      Object.assign(e.payload, ([t, n] = er(() => e.runWithContext(cv)), t = await t, n(), t)), delete window.__NUXT__;
    }
  });
  async function ka(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
      shouldRender: true,
      tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async (o) => {
      var _a2;
      const s = /* @__PURE__ */ new Map(), i = new Promise((d) => {
        e.resolveTags().then((h) => {
          d(h.map((g) => {
            const S = s.get(g._d) || 0, E = {
              tag: g,
              id: (S ? `${g._d}:${S}` : g._d) || Il(g),
              shouldRender: true
            };
            return g._d && od(g._d) && s.set(g._d, S + 1), E;
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
          const h = (_a2 = n[d]) == null ? void 0 : _a2.children;
          for (const g of h) {
            const S = g.tagName.toLowerCase();
            if (!Ml.has(S)) continue;
            const E = sd({
              tag: S,
              props: {}
            }, {
              innerHTML: g.innerHTML,
              ...g.getAttributeNames().reduce((_, m) => (_[m] = g.getAttribute(m), _), {}) || {}
            });
            if (E.key = g.getAttribute("data-hid") || void 0, E._d = Ii(E) || Il(E), a.elMap.has(E._d)) {
              let _ = 1, m = E._d;
              for (; a.elMap.has(m); ) m = `${E._d}:${_++}`;
              a.elMap.set(m, g);
            } else a.elMap.set(E._d, g);
          }
        }
      }
      a.pendingSideEffects = {
        ...a.sideEffects
      }, a.sideEffects = {};
      function l(d, h, g) {
        const S = `${d}:${h}`;
        a.sideEffects[S] = g, delete a.pendingSideEffects[S];
      }
      function u({ id: d, $el: h, tag: g }) {
        const S = g.tag.endsWith("Attrs");
        a.elMap.set(d, h), S || (g.textContent && g.textContent !== h.textContent && (h.textContent = g.textContent), g.innerHTML && g.innerHTML !== h.innerHTML && (h.innerHTML = g.innerHTML), l(d, "el", () => {
          h == null ? void 0 : h.remove(), a.elMap.delete(d);
        }));
        for (const E in g.props) {
          if (!Object.prototype.hasOwnProperty.call(g.props, E)) continue;
          const _ = g.props[E];
          if (E.startsWith("on") && typeof _ == "function") {
            const v = h == null ? void 0 : h.dataset;
            if (v && v[`${E}fired`]) {
              const w = E.slice(0, -5);
              _.call(h, new Event(w.substring(2)));
            }
            h.getAttribute(`data-${E}`) !== "" && ((g.tag === "bodyAttrs" ? n.defaultView : h).addEventListener(E.substring(2), _.bind(h)), h.setAttribute(`data-${E}`, ""));
            continue;
          }
          const m = `attr:${E}`;
          if (E === "class") {
            if (!_) continue;
            for (const v of _) S && l(d, `${m}:${v}`, () => h.classList.remove(v)), !h.classList.contains(v) && h.classList.add(v);
          } else if (E === "style") {
            if (!_) continue;
            for (const [v, w] of _) l(d, `${m}:${v}`, () => {
              h.style.removeProperty(v);
            }), h.style.setProperty(v, w);
          } else _ !== false && _ !== null && (h.getAttribute(E) !== _ && h.setAttribute(E, _ === true ? "" : String(_)), S && l(d, m, () => h.removeAttribute(E)));
        }
      }
      const c = [], f = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      }, p = await i;
      for (const d of p) {
        const { tag: h, shouldRender: g, id: S } = d;
        if (g) {
          if (h.tag === "title") {
            n.title = h.textContent, l("title", "", () => n.title = a.title);
            continue;
          }
          d.$el = d.$el || a.elMap.get(S), d.$el ? u(d) : Ml.has(h.tag) && c.push(d);
        }
      }
      for (const d of c) {
        const h = d.tag.tagPosition || "head";
        d.$el = n.createElement(d.tag.tag), u(d), f[h] = f[h] || n.createDocumentFragment(), f[h].appendChild(d.$el);
      }
      for (const d of p) await e.hooks.callHook("dom:renderTag", d, n, l);
      f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose);
      for (const d in a.pendingSideEffects) a.pendingSideEffects[d]();
      e._dom = a, await e.hooks.callHook("dom:rendered", {
        renders: p
      }), o();
    }).finally(() => {
      e._domUpdatePromise = void 0, e.dirty = false;
    })), e._domUpdatePromise;
  }
  function o_(e = {}) {
    var _a2, _b2, _c2;
    const t = ((_a2 = e.domOptions) == null ? void 0 : _a2.render) || ka;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((_c2 = (_b2 = e.document) == null ? void 0 : _b2.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _c2.innerHTML) || false;
    return zy({
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
  function s_(e, t) {
    let n = 0;
    return () => {
      const r = ++n;
      t(() => {
        n === r && e();
      });
    };
  }
  function i_(e = {}) {
    const t = o_({
      domOptions: {
        render: s_(() => ka(t), (n) => setTimeout(n, 0))
      },
      ...e
    });
    return t.install = tv(t), t;
  }
  const a_ = {
    disableDefaults: true
  }, l_ = Re({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = i_(a_);
      e.vueApp.use(t);
      {
        let n = true;
        const r = async () => {
          n = false, await ka(t);
        };
        t.hooks.hook("dom:beforeRender", (o) => {
          o.shouldRender = !n;
        }), e.hooks.hook("page:start", () => {
          n = true;
        }), e.hooks.hook("page:finish", () => {
          e.isHydrating || r();
        }), e.hooks.hook("app:error", r), e.hooks.hook("app:suspense:resolve", r);
      }
    }
  }), c_ = /(:\w+)\([^)]+\)/g, u_ = /(:\w+)[?+*]/g, f_ = /:\w+/g, d_ = (e, t) => t.path.replace(c_, "$1").replace(u_, "$1").replace(f_, (n) => {
    var _a2;
    return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  }), Ui = (e, t) => {
    const n = e.route.matched.find((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === e.Component.type;
    }), r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && d_(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  }, p_ = (e, t) => ({
    default: () => e ? he(ch, e === true ? {} : e, t) : t
  });
  function Ta(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const h_ = {
    middleware: [
      async function(e) {
        e.path === "/onepager" && await mn(() => Promise.resolve({}), __vite__mapDeps([0]), import.meta.url);
      }
    ]
  }, Qe = null, Xe = {}, Ys = [
    {
      name: "roadmap",
      path: "/roadmap",
      component: () => mn(() => import("./DdNtdfJ-.js"), __vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)
    },
    {
      name: "uid",
      path: "/:uid(.*)*",
      meta: h_ || {},
      component: () => mn(() => import("./C3l1wAaQ.js"), __vite__mapDeps([14,15,4,16,17]), import.meta.url)
    },
    {
      name: "blog-post",
      path: "/blog/:post()",
      component: () => mn(() => import("./D0RLG1u9.js"), __vite__mapDeps([18,19,6,7,8,9,10,20,21,4,22,5,15,23,12,17,11,24]), import.meta.url)
    },
    {
      name: "slice-simulator",
      path: "/slice-simulator",
      component: () => mn(() => import("./C86ykKnc.js"), __vite__mapDeps([25,26,15]), import.meta.url)
    },
    {
      name: "iframes-albatross-liveview",
      path: "/iframes/albatross-liveview",
      component: () => mn(() => import("./B-kq_RgX.js"), __vite__mapDeps([27,28,29,21,11,12,30,6,7,8,9,10,23]), import.meta.url)
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/sp",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/sp/freecrypto",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/cplink",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/exchanges",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/community-funding",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/whitepaper-1",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/whitepaper",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/developers/migration/migration-integrators",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/developers/llms-full.md",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/privacy-policy",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/cookie-policy",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/podcast",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/tutorials/ledger",
      component: Xe
    },
    {
      name: Qe == null ? void 0 : Qe.name,
      path: "/styleguide",
      component: Xe
    }
  ], m_ = async (e, t) => {
    var _a2;
    let n, r;
    if (!((_a2 = e.meta) == null ? void 0 : _a2.validate)) return;
    const o = ([n, r] = er(() => Promise.resolve(e.meta.validate(e))), n = await n, r(), n);
    if (o === true) return;
    const s = _n({
      fatal: true,
      statusCode: o && o.statusCode || 404,
      statusMessage: o && o.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath), s;
  }, g_ = async (e) => {
    let t, n;
    const r = ([t, n] = er(() => ba({
      path: e.path
    })), t = await t, n(), t);
    if (r.redirect) return Tt(r.redirect, {
      acceptRelative: true
    }) ? (window.location.href = r.redirect, false) : r.redirect;
  }, y_ = [
    m_,
    g_
  ], Wi = {};
  function v_(e, t, n) {
    const { pathname: r, search: o, hash: s } = t, i = e.indexOf("#");
    if (i > -1) {
      const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
      let c = s.slice(u);
      return c[0] !== "/" && (c = "/" + c), bl(c, "");
    }
    const a = bl(r, e), l = !n || fg(a, n) ? a : n;
    return l + (l.includes("?") ? "" : o) + s;
  }
  const b_ = Re({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var _a2;
      let t, n, r = Dt().app.baseURL;
      const o = ((_a2 = on.history) == null ? void 0 : _a2.call(on, r)) ?? tb(r), s = on.routes ? ([t, n] = er(() => on.routes(Ys)), t = await t, n(), t ?? Ys) : Ys;
      let i;
      const a = Tb({
        ...on,
        scrollBehavior: (S, E, _) => {
          if (E === dt) {
            i = _;
            return;
          }
          if (on.scrollBehavior) {
            if (a.options.scrollBehavior = on.scrollBehavior, "scrollRestoration" in window.history) {
              const m = a.beforeEach(() => {
                m(), window.history.scrollRestoration = "manual";
              });
            }
            return on.scrollBehavior(S, dt, i || _);
          }
        },
        history: o,
        routes: s
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
      const l = Ue(a.currentRoute.value);
      a.afterEach((S, E) => {
        l.value = E;
      }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const u = v_(r, window.location, e.payload.path), c = Ue(a.currentRoute.value), f = () => {
        c.value = a.currentRoute.value;
      };
      e.hook("page:finish", f), a.afterEach((S, E) => {
        var _a3, _b2, _c2, _d2;
        ((_b2 = (_a3 = S.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = E.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default) && f();
      });
      const p = {};
      for (const S in c.value) Object.defineProperty(p, S, {
        get: () => c.value[S],
        enumerable: true
      });
      e._route = Nt(p), e._middleware || (e._middleware = {
        global: [],
        named: {}
      });
      const d = dr();
      a.afterEach(async (S, E, _) => {
        delete e._processingMiddleware, !e.isHydrating && d.value && await e.runWithContext(Jf), _ && await e.callHook("page:loading:end");
      });
      try {
        [t, n] = er(() => a.isReady()), await t, n();
      } catch (S) {
        [t, n] = er(() => e.runWithContext(() => Cn(S))), await t, n();
      }
      const h = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
      f();
      const g = e.payload.state._layout;
      return a.beforeEach(async (S, E) => {
        var _a3;
        await e.callHook("page:loading:start"), S.meta = kt(S.meta), e.isHydrating && g && !Yt(S.meta.layout) && (S.meta.layout = g), e._processingMiddleware = true;
        {
          const _ = /* @__PURE__ */ new Set([
            ...y_,
            ...e._middleware.global
          ]);
          for (const m of S.matched) {
            const v = m.meta.middleware;
            if (v) for (const w of Ta(v)) _.add(w);
          }
          {
            const m = await e.runWithContext(() => ba({
              path: S.path
            }));
            if (m.appMiddleware) for (const v in m.appMiddleware) m.appMiddleware[v] ? _.add(v) : _.delete(v);
          }
          for (const m of _) {
            const v = typeof m == "string" ? e._middleware.named[m] || await ((_a3 = Wi[m]) == null ? void 0 : _a3.call(Wi).then((w) => w.default || w)) : m;
            if (!v) throw new Error(`Unknown route middleware: '${m}'.`);
            try {
              const w = await e.runWithContext(() => v(S, E));
              if (!e.payload.serverRendered && e.isHydrating && (w === false || w instanceof Error)) {
                const P = w || _n({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${u}`
                });
                return await e.runWithContext(() => Cn(P)), false;
              }
              if (w === true) continue;
              if (w === false) return w;
              if (w) return Yf(w) && w.fatal && await e.runWithContext(() => Cn(w)), w;
            } catch (w) {
              const P = _n(w);
              return P.fatal && await e.runWithContext(() => Cn(P)), P;
            }
          }
        }
      }), a.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end");
      }), a.afterEach(async (S, E) => {
        S.matched.length === 0 && await e.runWithContext(() => Cn(_n({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${S.fullPath}`,
          data: {
            path: S.fullPath
          }
        })));
      }), e.hooks.hookOnce("app:created", async () => {
        try {
          "name" in h && (h.name = void 0), await a.replace({
            ...h,
            force: true
          }), a.options.scrollBehavior = on.scrollBehavior;
        } catch (S) {
          await e.runWithContext(() => Cn(S));
        }
      }), {
        provide: {
          router: a
        }
      };
    }
  });
  function __(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !Tt(String(e.url), {
      acceptRelative: true,
      strict: false
    }) && (e.url = cg(String(e.url)));
    const t = Object.keys(e).sort((r, o) => r.localeCompare(o)), n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function w_(e) {
    const n = [];
    function r(s) {
      if (!s || typeof s != "object" || Object.keys(s).length === 0) return () => {
      };
      s._context;
      const i = {};
      for (const l in s) {
        const u = s[l];
        typeof u < "u" && u !== "" && (i[l] = u);
      }
      let a;
      return Object.keys(i).filter((l) => !l.startsWith("_")).length > 0 && (a = n.push(i)), () => {
        typeof a < "u" && n.splice(a - 1, 1);
      };
    }
    function o(s) {
      var _a2;
      const i = {};
      (s == null ? void 0 : s.debug) && (i._context = {}), i._priority = {};
      for (const a in n.sort((l, u) => (l._priority || 0) - (u._priority || 0))) for (const l in n[a]) {
        const u = l, c = (s == null ? void 0 : s.resolveRefs) ? Ke(n[a][l]) : n[a][l];
        !l.startsWith("_") && typeof c < "u" && c !== "" && (i[l] = c, typeof n[a]._priority < "u" && n[a]._priority !== -1 && (i._priority[u] = n[a]._priority), (s == null ? void 0 : s.debug) && (i._context[u] = ((_a2 = n[a]._context) == null ? void 0 : _a2[u]) || n[a]._context || "anonymous"));
      }
      return (s == null ? void 0 : s.skipNormalize) ? i : __(i);
    }
    return {
      stack: n,
      push: r,
      get: o
    };
  }
  const S_ = Re({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
      var _a2;
      const t = w_(), n = jd("site-config");
      {
        const r = n.value || window.__NUXT_SITE_CONFIG__ || {};
        for (const o in r) o[0] !== "_" && t.push({
          [o]: r[o],
          _priority: ((_a2 = r._priority) == null ? void 0 : _a2[o]) || -1
        });
      }
      return {
        provide: {
          nuxtSiteConfig: t
        }
      };
    }
  }), E_ = Re({
    name: "nuxt:payload",
    setup(e) {
      const t = /* @__PURE__ */ new Set();
      Ie().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const o = await Hl(n.path);
        if (o) {
          for (const s of t) delete e.static.data[s];
          for (const s in o.data) s in e.static.data || t.add(s), e.static.data[s] = o.data[s];
        }
      }), hr(() => {
        var _a2;
        e.hooks.hook("link:prefetch", async (n) => {
          const { hostname: r } = new URL(n, window.location.href);
          r === window.location.hostname && await Hl(n).catch(() => {
            console.warn("[nuxt] Error preloading payload for", n);
          });
        }), ((_a2 = navigator.connection) == null ? void 0 : _a2.effectiveType) !== "slow-2g" && setTimeout(_s, 1e3);
      });
    }
  }), k_ = Re(() => {
    const e = Ie();
    hr(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100), requestAnimationFrame(() => {
            setTimeout(t, 0);
          });
        });
      });
    });
  }), T_ = Re((e) => {
    let t;
    async function n() {
      const r = await _s();
      t && clearTimeout(t), t = setTimeout(n, Rl);
      try {
        const o = await $fetch(pa("builds/latest.json") + `?${Date.now()}`);
        o.id !== r.id && e.hooks.callHook("app:manifest:update", o);
      } catch {
      }
    }
    hr(() => {
      t = setTimeout(n, Rl);
    });
  }), R_ = Re((e) => {
    if (!document.startViewTransition) return;
    let t, n = false, r, o;
    const s = () => {
      t = void 0, n = false, o = void 0, r = void 0;
    };
    window.addEventListener("popstate", (a) => {
      n = a.hasUAVisualTransition, n && (t == null ? void 0 : t.skipTransition());
    }), Ie().beforeResolve(async (a, l) => {
      const u = a.meta.viewTransition ?? Ug, f = window.matchMedia("(prefers-reduced-motion: reduce)").matches && u !== "always";
      if (u === false || f || n || !$d(a, l)) return;
      const p = new Promise((g, S) => {
        r = g, o = S;
      });
      let d;
      const h = new Promise((g) => d = g);
      return t = document.startViewTransition(() => (d(), p)), t.finished.then(s), await e.callHook("page:view-transition:start", t), h;
    }), e.hook("vue:error", () => {
      o == null ? void 0 : o(), s();
    }), e.hook("page:finish", () => {
      r == null ? void 0 : r(), s();
    });
  }), C_ = Re({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Ie(), n = Dt(), r = /* @__PURE__ */ new Set();
      t.beforeEach(() => {
        r.clear();
      }), e.hook("app:chunkError", ({ error: s }) => {
        r.add(s);
      });
      function o(s) {
        const i = ys(n.app.baseURL, s.fullPath);
        zb({
          path: i,
          persistState: true
        });
      }
      e.hook("app:manifest:update", () => {
        t.beforeResolve(o);
      }), t.onError((s, i) => {
        r.has(s) && o(i);
      });
    }
  }), P_ = Re({
    name: "pinia",
    setup(e) {
      const t = py();
      return e.vueApp.use(t), to(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
        provide: {
          pinia: t
        }
      };
    }
  }), A_ = Re({
    name: "nuxt:global-components"
  }), yn = {
    default: qa(() => mn(() => import("./3t-UtUoh.js"), __vite__mapDeps([31,4,32,9,33,8,34,35,36,37,38,39,7,11,12,40,19,6,10,5,41,42]), import.meta.url).then((e) => e.default || e)),
    iframe: qa(() => mn(() => import("./CTdbkQva.js"), [], import.meta.url).then((e) => e.default || e))
  }, x_ = Re({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Ie();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var _a2;
          const r = (_a2 = n == null ? void 0 : n.meta) == null ? void 0 : _a2.layout;
          r && typeof yn[r] == "function" && await yn[r]();
        });
      }), e.hooks.hook("link:prefetch", (n) => {
        if (Tt(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const o = r.meta.layout;
        let s = Ta(r.meta.middleware);
        s = s.filter((i) => typeof i == "string");
        for (const i of s) typeof Wi[i] == "function" && Wi[i]();
        typeof o == "string" && o in yn && Gb(yn[o]);
      });
    }
  });
  function O_(e) {
    return ({ queryCache: t, scope: n }) => {
      t.$onAction(({ name: r, after: o }) => {
        r === "create" && o((s) => {
          var _a2;
          const i = ((_a2 = s.options) == null ? void 0 : _a2.delay) ?? (e == null ? void 0 : e.delay) ?? 200;
          n.run(() => {
            const a = Ue(false);
            if (s.ext.isDelaying = a, !i) return;
            const l = s.asyncStatus.value;
            s.asyncStatus = cs((u, c) => {
              let f = l, p;
              return {
                get() {
                  return u(), f;
                },
                set(d) {
                  clearTimeout(p), d === "loading" ? (a.value = true, p = setTimeout(() => {
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
  const L_ = {
    plugins: [
      O_()
    ]
  }, M_ = Re({
    name: "Pinia Colada",
    dependsOn: [
      "pinia"
    ],
    setup(e) {
      e.vueApp.use(vv, {
        ...L_
      });
      const t = e.vueApp.config.globalProperties.$pinia;
      e.payload && e.payload.pinia_colada && yv(wa(t), e.payload.pinia_colada);
    }
  }), $_ = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/), I_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, N_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, B_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, D_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function j_(e) {
    return I_.test(e) || N_.test(e.slice(0, 4));
  }
  function F_(e) {
    return B_.test(e) || D_.test(e.slice(0, 4));
  }
  function H_(e) {
    return /iPad|iPhone|iPod/.test(e);
  }
  function U_(e) {
    return /android/i.test(e);
  }
  function W_(e) {
    return /Windows/.test(e);
  }
  function V_(e) {
    return /Mac OS X/.test(e);
  }
  const q_ = [
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
  function K_(e) {
    for (const t of q_) if (t.regex.test(e)) return t.name;
    return "";
  }
  function gc(e, t = {}) {
    let n = false, r = false, o = false, s = false;
    if (e === "Amazon CloudFront") t["cloudfront-is-mobile-viewer"] === "true" && (n = true, r = true), t["cloudfront-is-tablet-viewer"] === "true" && (n = false, r = true), t["cloudfront-is-desktop-viewer"] === "true" && (n = false, r = false), t["cloudfront-is-ios-viewer"] === "true" && (o = true), t["cloudfront-is-android-viewer"] === "true" && (s = true);
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
    else n = j_(e), r = F_(e), o = H_(e), s = U_(e);
    const i = W_(e), a = V_(e), l = K_(e), u = l === "Safari", c = l === "Firefox", f = l === "Edge", p = l === "Chrome", d = l === "Samsung", h = $_.test(e);
    return {
      userAgent: e,
      isMobile: n,
      isMobileOrTablet: r,
      isTablet: !n && r,
      isDesktop: !r,
      isIos: o,
      isAndroid: s,
      isWindows: i,
      isMacOS: a,
      isApple: a || o,
      isDesktopOrTablet: !n,
      isSafari: u,
      isFirefox: c,
      isEdge: f,
      isChrome: p,
      isSamsung: d,
      isCrawler: h
    };
  }
  const G_ = Re(() => {
    const e = Dt(), t = e.public.device.defaultUserAgent;
    let n;
    {
      const r = navigator.userAgent || t;
      n = kt(gc(r)), e.public.device.refreshOnResize && window.addEventListener("resize", () => {
        setTimeout(() => {
          const o = gc(navigator.userAgent || r);
          Object.entries(o).forEach(([s, i]) => {
            n[s] = i;
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
  Ra = function(e) {
    const t = kt({});
    return Zu(() => {
      const n = me().$nuxtSiteConfig.get(ha({
        resolveRefs: true
      }, e));
      Object.assign(t, n);
    }), delete t._priority, t;
  };
  const z_ = Re(() => {
    const e = pr();
    if (!e) return;
    const t = Ra(), n = {
      meta: [],
      templateParams: {
        site: t,
        siteUrl: t.url,
        siteName: t.name
      }
    };
    t.separator && (n.templateParams.separator = t.separator), t.titleSeparator && (n.templateParams.titleSeparator = t.titleSeparator), t.description && (n.templateParams.siteDescription = t.description, n.meta.push({
      name: "description",
      content: "%site.description",
      tagPriority: "low"
    })), e.push(n);
  }), J_ = Re(() => {
    const e = pr();
    e && (e.use(id), e.use(Zy()));
  }), Y_ = /\d/, Q_ = [
    "-",
    "_",
    "/",
    "."
  ];
  function X_(e = "") {
    if (!Y_.test(e)) return e !== e.toLowerCase();
  }
  function Z_(e, t) {
    const n = Q_, r = [];
    if (!e || typeof e != "string") return r;
    let o = "", s, i;
    for (const a of e) {
      const l = n.includes(a);
      if (l === true) {
        r.push(o), o = "", s = void 0;
        continue;
      }
      const u = X_(a);
      if (i === false) {
        if (s === false && u === true) {
          r.push(o), o = a, s = u;
          continue;
        }
        if (s === true && u === false && o.length > 1) {
          const c = o.at(-1);
          r.push(o.slice(0, Math.max(0, o.length - 1))), o = c + a, s = u;
          continue;
        }
      }
      o += a, s = u, i = l;
    }
    return r.push(o), r;
  }
  function ew(e) {
    return e ? e[0].toUpperCase() + e.slice(1) : "";
  }
  const tw = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;
  function nw(e, t) {
    return (Array.isArray(e) ? e : Z_(e)).filter(Boolean).map((n) => tw.test(n) ? n.toLowerCase() : ew(n)).join(" ");
  }
  let rw, ow, It, Wd, ve, yc, sw, gn, Ve, iw, Vd, vc, bc;
  rw = Re({
    name: "nuxt-seo:fallback-titles",
    env: {
      islands: false
    },
    setup() {
      const e = Bn(), t = dr(), n = K(() => {
        var _a2, _b2, _c2;
        if (t.value && [
          404,
          500
        ].includes((_a2 = t.value) == null ? void 0 : _a2.statusCode)) return `${t.value.statusCode} - ${t.value.message}`;
        if (typeof ((_b2 = e.meta) == null ? void 0 : _b2.title) == "string") return (_c2 = e.meta) == null ? void 0 : _c2.title;
        const s = Qt(e.path || "/").split("/").pop();
        return s ? nw(s) : null;
      });
      bs({
        title: () => n.value
      }, {
        tagPriority: 101
      });
    }
  });
  ow = Re((e) => {
    Dt().public.prismic.preview && window.addEventListener("prismicPreviewUpdate", (n) => {
      n.preventDefault(), Fi();
    });
  });
  It = {
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    span: "span"
  };
  Wd = (e) => Array.isArray(e) ? `[${e.map(Wd).join(", ")}]` : typeof e == "string" ? `"${e}"` : e instanceof Date ? `${e.getTime()}` : `${e}`;
  ve = (e) => (n, ...r) => {
    const o = r.map(Wd).join(", "), s = n && r.length ? ", " : "";
    return `[${e}(${n}${s}${o})]`;
  };
  yc = (e) => {
    const t = ve(e);
    return (r) => t(r);
  };
  sw = (e) => {
    const t = ve(e);
    return (...r) => t("", ...r);
  };
  $t = {
    at: ve("at"),
    not: ve("not"),
    any: ve("any"),
    in: ve("in"),
    fulltext: ve("fulltext"),
    has: yc("has"),
    missing: yc("missing"),
    similar: sw("similar"),
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
  gn = (e) => Array.isArray(e) ? e : [
    e
  ];
  Ve = (e = {}, t) => ({
    ...e,
    filters: [
      ...e.filters || [],
      ...gn(t)
    ]
  });
  iw = (e) => typeof e == "function" ? e : () => e;
  Vd = "7.17.2";
  vc = (e) => `https://prismic.dev/msg/client/v${Vd}/${e}`;
  bc = (e) => $t.at("document.tags", gn(e));
  var aw = Object.defineProperty, lw = (e, t, n) => t in e ? aw(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, _c = (e, t, n) => lw(e, typeof t != "symbol" ? t + "" : t, n);
  class yt extends Error {
    constructor(t = "An invalid API response was returned", n, r) {
      super(t), _c(this, "url"), _c(this, "response"), this.url = n, this.response = r;
    }
  }
  const Ca = (e, t) => {
    const n = e.find((r) => t(r));
    if (!n) throw new yt("Ref could not be found.", void 0, void 0);
    return n;
  }, wc = (e) => Ca(e, (t) => t.isMasterRef), Qs = (e, t) => Ca(e, (n) => n.id === t), Xs = (e, t) => Ca(e, (n) => n.label === t), qd = "io.prismic.preview", cw = Object.freeze(Object.defineProperty({
    __proto__: null,
    preview: qd
  }, Symbol.toStringTag, {
    value: "Module"
  })), Sc = (e) => e.replace(/%3B/g, ";"), uw = (e) => {
    const t = e.split("; ");
    let n;
    for (const r of t) {
      const o = r.split("=");
      if (Sc(o[0]).replace(/%3D/g, "=") === qd) {
        n = Sc(o.slice(1).join("="));
        break;
      }
    }
    return n;
  }, fw = (e) => e.replace(/(\n| )*( |{|})(\n| )*/gm, (t, n, r) => r), Ro = (e) => $t.any("document.tags", gn(e)), dw = 5e3;
  let Ec, Zs = 0;
  const pw = (e, t = {}) => {
    const { level: n = "log" } = t;
    if (e === Ec && Date.now() - Zs < dw) {
      Zs = Date.now();
      return;
    }
    Zs = Date.now(), Ec = e, console[n](e);
  }, Wn = (e) => $t.at("document.type", e);
  class Ss extends yt {
  }
  class Vi extends yt {
  }
  class hw extends yt {
  }
  class mw extends Ss {
  }
  class kc extends Ss {
  }
  class ei extends Ss {
  }
  class gw extends Vi {
  }
  let vn, Kd, yw, vw;
  vn = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
  };
  Kd = (e) => {
    var t;
    return {
      link_type: vn.Document,
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
  Es = (e, ...t) => {
    if (!e) return null;
    const n = "link_type" in e ? e : Kd(e), [r] = t;
    let o;
    switch (typeof r == "function" || r == null ? o = {
      linkResolver: r
    } : o = {
      ...r
    }, n.link_type) {
      case vn.Media:
      case vn.Web:
        return "url" in n ? n.url : null;
      case vn.Document: {
        if ("id" in n && o.linkResolver) {
          const s = o.linkResolver(n);
          if (s != null) return s;
        }
        return "url" in n && n.url ? n.url : null;
      }
      case vn.Any:
      default:
        return null;
    }
  };
  yw = (e) => new Promise((t) => setTimeout(t, e));
  vw = ({ interval: e } = {}) => {
    const t = [];
    let n = false, r = 0;
    const o = () => {
      var l;
      !n && t.length > 0 && ((l = t.shift()) == null || l(), n = true);
    }, s = () => {
      n = false, o();
    }, i = async (l, u, c) => {
      const f = Date.now() - r;
      e && f < e && await yw(e - f);
      const p = (async () => l(...c))();
      u(p);
      try {
        await p;
      } catch {
      }
      r = Date.now(), s();
    }, a = (l, u, c) => {
      new Promise((f) => {
        t.push(f);
      }).then(i.bind(void 0, l, u, c)), (async () => (await Promise.resolve(), n || o()))();
    };
    return (l, ...u) => new Promise((c) => {
      a(l, c, u);
    });
  };
  var bw = Object.defineProperty, _w = (e, t, n) => t in e ? bw(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, Co = (e, t, n) => _w(e, typeof t != "symbol" ? t + "" : t, n);
  const ww = 1500;
  class Sw {
    constructor(t) {
      if (Co(this, "fetchFn"), Co(this, "fetchOptions"), Co(this, "queuedFetchJobs", {}), Co(this, "dedupedFetchJobs", {}), this.fetchOptions = t.fetchOptions, typeof t.fetch == "function") this.fetchFn = t.fetch;
      else if (typeof globalThis.fetch == "function") this.fetchFn = globalThis.fetch;
      else throw new yt("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.", void 0, void 0);
      this.fetchFn === globalThis.fetch && (this.fetchFn = this.fetchFn.bind(globalThis));
    }
    async fetch(t, n = {}) {
      var r, o, s, i, a;
      const l = {
        ...this.fetchOptions,
        ...n.fetchOptions,
        headers: {
          ...(r = this.fetchOptions) == null ? void 0 : r.headers,
          ...(o = n.fetchOptions) == null ? void 0 : o.headers
        },
        signal: ((s = n.fetchOptions) == null ? void 0 : s.signal) || n.signal || ((i = this.fetchOptions) == null ? void 0 : i.signal)
      };
      return (a = n.fetchOptions) != null && a.body ? this.queueFetch(t, l) : this.dedupeFetch(t, l);
    }
    queueFetch(t, n = {}) {
      const r = new URL(t).hostname;
      return this.queuedFetchJobs[r] || (this.queuedFetchJobs[r] = vw({
        interval: ww
      })), this.queuedFetchJobs[r](() => this.createFetchJob(t, n));
    }
    dedupeFetch(t, n = {}) {
      let r;
      return this.dedupedFetchJobs[t] && this.dedupedFetchJobs[t].has(n.signal) ? r = this.dedupedFetchJobs[t].get(n.signal) : (this.dedupedFetchJobs[t] = this.dedupedFetchJobs[t] || /* @__PURE__ */ new Map(), r = this.createFetchJob(t, n).finally(() => {
        var o, s;
        (o = this.dedupedFetchJobs[t]) == null || o.delete(n.signal), ((s = this.dedupedFetchJobs[t]) == null ? void 0 : s.size) === 0 && delete this.dedupedFetchJobs[t];
      }), this.dedupedFetchJobs[t].set(n.signal, r)), r;
    }
    createFetchJob(t, n = {}) {
      return this.fetchFn(t, n).then(async (r) => {
        let o, s;
        if (r.ok) try {
          o = await r.json();
        } catch {
        }
        else try {
          s = await r.text(), o = JSON.parse(s);
        } catch {
        }
        return {
          status: r.status,
          headers: r.headers,
          json: o,
          text: s
        };
      });
    }
  }
  const Ew = "x-c", kw = {
    accessToken: "access_token"
  }, Tw = (e) => typeof e == "string" ? e : e.direction === "desc" ? `${e.field} desc` : e.field, Rw = (e, t) => {
    const { filters: n, predicates: r, ...o } = t, s = new URL("documents/search", `${e}/`);
    if (n) for (const i of gn(n)) s.searchParams.append("q", `[${i}]`);
    if (r) for (const i of gn(r)) s.searchParams.append("q", `[${i}]`);
    for (const i in o) {
      const a = kw[i] || i;
      let l = o[i];
      if (a === "orderings") {
        const u = o[a];
        u != null && (l = `[${gn(u).map((f) => Tw(f)).join(",")}]`);
      } else a === "routes" && typeof o[a] == "object" && (l = JSON.stringify(gn(o[a])));
      l != null && s.searchParams.set(a, gn(l).join(","));
    }
    return s.searchParams.set(Ew, `js-${Vd}`), s.toString();
  }, Cw = (e) => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e), Pw = (e) => {
    if (Cw(e)) return `https://${e}.cdn.prismic.io/api/v2`;
    throw new yt(`An invalid Prismic repository name was given: ${e}`, void 0, void 0);
  }, Aw = (e) => {
    try {
      const t = new URL(e).hostname;
      if (t.endsWith("prismic.io") || t.endsWith("wroom.io") || t.endsWith("wroom.test")) return t.split(".")[0];
    } catch {
    }
    throw new yt(`An invalid Prismic Document API endpoint was provided: ${e}`, void 0, void 0);
  }, Tc = (e) => {
    try {
      return new URL(e), true;
    } catch {
      return false;
    }
  };
  var xw = Object.defineProperty, Gd = (e) => {
    throw TypeError(e);
  }, Ow = (e, t, n) => t in e ? xw(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, sn = (e, t, n) => Ow(e, typeof t != "symbol" ? t + "" : t, n), zd = (e, t, n) => t.has(e) || Gd("Cannot " + n), Rc = (e, t, n) => (zd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Lw = (e, t, n) => t.has(e) ? Gd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Mw = (e, t, n, r) => (zd(e, t, "write to private field"), t.set(e, n), n), Tr;
  const $w = 100, Iw = 5e3, Nw = 500, Bw = 1e3, Dw = 3;
  var Lt;
  (function(e) {
    e.Master = "Master", e.ReleaseID = "ReleaseID", e.ReleaseLabel = "ReleaseLabel", e.Manual = "Manual";
  })(Lt || (Lt = {}));
  class jw extends Sw {
    constructor(t, n = {}) {
      if (super(n), Lw(this, Tr), sn(this, "documentAPIEndpoint"), sn(this, "accessToken"), sn(this, "routes"), sn(this, "brokenRoute"), sn(this, "defaultParams"), sn(this, "refState", {
        mode: Lt.Master,
        autoPreviewsEnabled: true
      }), sn(this, "cachedRepository"), sn(this, "cachedRepositoryExpiration", 0), n.documentAPIEndpoint || Tc(t), Tc(t)) {
        this.documentAPIEndpoint = t;
        try {
          this.repositoryName = Aw(t);
        } catch {
          console.warn(`[@prismicio/client] A repository name could not be inferred from the provided endpoint (\`${t}\`). Some methods will be disabled. Create the client using a repository name to prevent this warning. For more details, see ${vc("prefer-repository-name")}`);
        }
      } else this.documentAPIEndpoint = n.documentAPIEndpoint || Pw(t), this.repositoryName = t;
      this.accessToken = n.accessToken, this.routes = n.routes, this.brokenRoute = n.brokenRoute, this.defaultParams = n.defaultParams, n.ref && this.queryContentFromRef(n.ref), this.graphQLFetch = this.graphQLFetch.bind(this);
    }
    set repositoryName(t) {
      Mw(this, Tr, t);
    }
    get repositoryName() {
      if (!Rc(this, Tr)) throw new yt(`A repository name is required for this method but one could not be inferred from the provided API endpoint (\`${this.documentAPIEndpoint}\`). To fix this error, provide a repository name when creating the client. For more details, see ${vc("prefer-repository-name")}`, void 0, void 0);
      return Rc(this, Tr);
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
      const { data: o, url: s } = await this._get(r), i = o.results[0];
      if (i) return i;
      throw new Vi("No documents were returned", s, void 0);
    }
    async dangerouslyGetAll(t = {}) {
      var n;
      const { limit: r = 1 / 0, ...o } = t, s = {
        ...o,
        pageSize: Math.min(r, o.pageSize || ((n = this.defaultParams) == null ? void 0 : n.pageSize) || $w)
      }, i = [];
      let a;
      for (; (!a || a.next_page) && i.length < r; ) {
        const l = a ? a.page + 1 : void 0;
        a = await this.get({
          ...s,
          page: l
        }), i.push(...a.results), a.next_page && await new Promise((u) => setTimeout(u, Nw));
      }
      return i.slice(0, r);
    }
    async getByID(t, n) {
      return await this.getFirst(Ve(n, $t.at("document.id", t)));
    }
    async getByIDs(t, n) {
      return await this.get(Ve(n, $t.in("document.id", t)));
    }
    async getAllByIDs(t, n) {
      return await this.dangerouslyGetAll(Ve(n, $t.in("document.id", t)));
    }
    async getByUID(t, n, r) {
      return await this.getFirst(Ve(r, [
        Wn(t),
        $t.at(`my.${t}.uid`, n)
      ]));
    }
    async getByUIDs(t, n, r) {
      return await this.get(Ve(r, [
        Wn(t),
        $t.in(`my.${t}.uid`, n)
      ]));
    }
    async getAllByUIDs(t, n, r) {
      return await this.dangerouslyGetAll(Ve(r, [
        Wn(t),
        $t.in(`my.${t}.uid`, n)
      ]));
    }
    async getSingle(t, n) {
      return await this.getFirst(Ve(n, Wn(t)));
    }
    async getByType(t, n) {
      return await this.get(Ve(n, Wn(t)));
    }
    async getAllByType(t, n) {
      return await this.dangerouslyGetAll(Ve(n, Wn(t)));
    }
    async getByTag(t, n) {
      return await this.get(Ve(n, Ro(t)));
    }
    async getAllByTag(t, n) {
      return await this.dangerouslyGetAll(Ve(n, Ro(t)));
    }
    async getByEveryTag(t, n) {
      return await this.get(Ve(n, bc(t)));
    }
    async getAllByEveryTag(t, n) {
      return await this.dangerouslyGetAll(Ve(n, bc(t)));
    }
    async getBySomeTags(t, n) {
      return await this.get(Ve(n, Ro(t)));
    }
    async getAllBySomeTags(t, n) {
      return await this.dangerouslyGetAll(Ve(n, Ro(t)));
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
      return Qs(r, t);
    }
    async getRefByLabel(t, n) {
      const r = await this.getRefs(n);
      return Xs(r, t);
    }
    async getMasterRef(t) {
      const n = await this.getRefs(t);
      return wc(n);
    }
    async getReleases(t) {
      return (await this.getRefs(t)).filter((r) => !r.isMasterRef);
    }
    async getReleaseByID(t, n) {
      const r = await this.getReleases(n);
      return Qs(r, t);
    }
    async getReleaseByLabel(t, n) {
      const r = await this.getReleases(n);
      return Xs(r, t);
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
      const o = r.ref || await this.getResolvedRefString({
        signal: t,
        fetchOptions: n
      }), s = r.integrationFieldsRef || (await this.getCachedRepository({
        signal: t,
        fetchOptions: n
      })).integrationFieldsRef || void 0;
      return Rw(this.documentAPIEndpoint, {
        ...this.defaultParams,
        ...r,
        ref: o,
        integrationFieldsRef: s,
        routes: r.routes || this.routes,
        brokenRoute: r.brokenRoute || this.brokenRoute,
        accessToken: r.accessToken || this.accessToken
      });
    }
    async resolvePreviewURL(t) {
      var n, r;
      let o = t.documentID, s = t.previewToken;
      if (typeof globalThis.location < "u") {
        const i = new URLSearchParams(globalThis.location.search);
        o = o || i.get("documentId"), s = s || i.get("token");
      } else if (this.refState.httpRequest) {
        if ("query" in this.refState.httpRequest) o = o || ((n = this.refState.httpRequest.query) == null ? void 0 : n.documentId), s = s || ((r = this.refState.httpRequest.query) == null ? void 0 : r.token);
        else if ("url" in this.refState.httpRequest && this.refState.httpRequest.url) {
          const i = new URL(this.refState.httpRequest.url, "missing-host://").searchParams;
          o = o || i.get("documentId"), s = s || i.get("token");
        }
      }
      if (o != null && s != null) {
        const i = await this.getByID(o, {
          ref: s,
          lang: "*",
          signal: t.signal,
          fetchOptions: t.fetchOptions
        }), a = Es(i, {
          linkResolver: t.linkResolver
        });
        if (typeof a == "string") return a;
      }
      return t.defaultURL;
    }
    queryLatestContent() {
      this.refState.mode = Lt.Master;
    }
    queryContentFromReleaseByID(t) {
      this.refState = {
        ...this.refState,
        mode: Lt.ReleaseID,
        releaseID: t
      };
    }
    queryContentFromReleaseByLabel(t) {
      this.refState = {
        ...this.refState,
        mode: Lt.ReleaseLabel,
        releaseLabel: t
      };
    }
    queryContentFromRef(t) {
      this.refState = {
        ...this.refState,
        mode: Lt.Manual,
        ref: t
      };
    }
    async graphQLFetch(t, n) {
      const r = await this.getCachedRepository(), o = await this.getResolvedRefString(), s = {
        "Prismic-ref": o,
        Authorization: this.accessToken ? `Token ${this.accessToken}` : "",
        ...n ? n.headers : {}
      };
      r.integrationFieldsRef && (s["Prismic-integration-field-ref"] = r.integrationFieldsRef);
      const i = {};
      for (const u in s) s[u] && (i[u.toLowerCase()] = s[u]);
      const a = new URL(t);
      a.searchParams.set("ref", o);
      const l = a.searchParams.get("query");
      return l && a.searchParams.set("query", fw(l)), await this.fetchFn(a.toString(), {
        ...n,
        headers: i
      });
    }
    async getCachedRepository(t) {
      return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + Iw, this.cachedRepository = await this.getRepository(t)), this.cachedRepository;
    }
    async getCachedRepositoryForm(t, n) {
      const o = (await this.getCachedRepository(n)).forms[t];
      if (!o) throw new yt(`Form with name "${t}" could not be found`, void 0, void 0);
      return o;
    }
    async getResolvedRefString(t) {
      var n, r;
      if (this.refState.autoPreviewsEnabled) {
        let i, a;
        if ((n = this.refState.httpRequest) != null && n.headers ? "get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get == "function" ? a = this.refState.httpRequest.headers.get("cookie") : "cookie" in this.refState.httpRequest.headers && (a = this.refState.httpRequest.headers.cookie) : (r = globalThis.document) != null && r.cookie && (a = globalThis.document.cookie), a && (i = uw(a)), i) return i;
      }
      const o = await this.getCachedRepository(t), s = this.refState.mode;
      if (s === Lt.ReleaseID) return Qs(o.refs, this.refState.releaseID).ref;
      if (s === Lt.ReleaseLabel) return Xs(o.refs, this.refState.releaseLabel).ref;
      if (s === Lt.Manual) {
        const i = await iw(this.refState.ref)();
        if (typeof i == "string") return i;
      }
      return wc(o.refs).ref;
    }
    async _get(t, n = 0) {
      var r, o;
      const s = await this.buildQueryURL(t);
      try {
        return {
          data: await this.fetch(s, t),
          url: s
        };
      } catch (i) {
        if (!(i instanceof ei || i instanceof kc) || n >= Dw - 1) throw i;
        (t == null ? void 0 : t.ref) || (this.cachedRepository = void 0);
        const a = (o = (r = i.message.match(/Master ref is: (?<ref>.*)$/)) == null ? void 0 : r.groups) == null ? void 0 : o.ref;
        if (!a) throw i;
        const l = new URL(s).searchParams.get("ref"), u = i instanceof ei ? "invalid" : "expired";
        return pw(`[@prismicio/client] The ref (${l}) was ${u}. Now retrying with the latest master ref (${a}). If you were previewing content, the response will not include draft content.`, {
          level: "warn"
        }), await this._get({
          ...t,
          ref: a
        }, n + 1);
      }
    }
    async fetch(t, n = {}) {
      const r = await super.fetch(t, n);
      if (r.status !== 404 && r.status !== 429 && r.json == null) throw new yt(void 0, t, r.json || r.text);
      switch (r.status) {
        case 200:
        case 201:
          return r.json;
        case 400:
          throw new hw(r.json.message, t, r.json);
        case 401:
        case 403:
          throw new Ss(r.json.error || r.json.message, t, r.json);
        case 404:
          throw r.json === void 0 ? new gw(`Prismic repository not found. Check that "${this.documentAPIEndpoint}" is pointing to the correct repository.`, t, t.startsWith(this.documentAPIEndpoint) ? void 0 : r.text) : r.json.type === "api_notfound_error" ? new ei(r.json.message, t, r.json) : r.json.type === "api_security_error" && /preview token.*expired/i.test(r.json.message) ? new mw(r.json.message, t, r.json) : new Vi(r.json.message, t, r.json);
        case 410:
          throw new kc(r.json.message, t, r.json);
        case 429: {
          const o = Number(r.headers.get("retry-after")), s = Number.isNaN(o) ? Bw : o;
          return await new Promise((i, a) => {
            setTimeout(async () => {
              try {
                i(await this.fetch(t, n));
              } catch (l) {
                a(l);
              }
            }, s);
          });
        }
      }
      throw new yt(void 0, t, r.json);
    }
  }
  Tr = /* @__PURE__ */ new WeakMap();
  let Fw, We, Pa, Hw, mr, Ww, Vw, qw, Kw, Gw, zw, Jd, Jw, Yw, Qw, Xw, Yd, Zw, e0, t0, n0, gr, o0, Qd, s0, i0, xa, ro, oo, Ze, a0, l0, c0, Zd, u0, Ts;
  Fw = (e, t) => new jw(e, t);
  We = (e) => e != null;
  Pa = (e) => !!e.length;
  Aa = (e) => We(e) ? e.length === 1 && "text" in e[0] ? !!e[0].text : !!e.length : false;
  Hw = Aa;
  mr = (e) => We(e) && !!e.url;
  Uw = mr;
  ks = (e) => We(e) && ("id" in e || "url" in e);
  Ww = ks;
  Vw = ks;
  qw = We;
  Kw = We;
  Gw = We;
  zw = We;
  Jd = (e) => We(Jd) && !!e;
  Jw = We;
  Yw = (e) => We(e) && !!e.embed_url;
  Qw = (e) => We(e) && "longitude" in e;
  Xw = We;
  Yd = We;
  Zw = Yd;
  e0 = (e) => We(e) && Pa(e);
  t0 = (e) => We(e) && Pa(e);
  n0 = (e) => We(e) && Pa(e);
  gr = Object.freeze(Object.defineProperty({
    __proto__: null,
    color: Gw,
    contentRelationship: Vw,
    date: qw,
    embed: Yw,
    geoPoint: Qw,
    group: t0,
    image: Uw,
    imageThumbnail: mr,
    integrationField: Yd,
    integrationFields: Zw,
    keyText: Jd,
    link: ks,
    linkToMedia: Ww,
    number: zw,
    repeatable: e0,
    richText: Aa,
    select: Jw,
    sliceZone: n0,
    table: Xw,
    timestamp: Kw,
    title: Hw
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  r0 = (e) => e ? e.length === 24 ? new Date(e.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3")) : new Date(e) : null;
  o0 = (e) => {
    const t = /^(\/(?!\/)|#)/.test(e), n = !t && !/^https?:\/\//.test(e);
    return t && !n;
  };
  Qd = (e, t = {}) => {
    if (e && ("link_type" in e ? ks(e) : e)) {
      const n = "target" in e ? e.target : void 0, r = Es(e, t.linkResolver), o = r ?? void 0, s = typeof o == "string" ? !o0(o) : false, i = t.rel ? t.rel({
        href: o,
        isExternal: s,
        target: n
      }) : s ? "noreferrer" : void 0;
      return {
        href: o,
        target: n,
        rel: i ?? void 0
      };
    }
    return {};
  };
  s0 = (e, t = " ") => {
    let n = "";
    for (let r = 0; r < e.length; r++) "text" in e[r] && (n += (n ? t : "") + e[r].text);
    return n;
  };
  Xd = (e, ...t) => {
    if (e) {
      const [n] = t;
      let r;
      return typeof n == "string" ? r = {
        separator: n
      } : r = {
        ...n
      }, s0(e, r.separator);
    } else return null;
  };
  i0 = /["'&<>]/;
  xa = (e) => {
    const t = "" + e, n = i0.exec(t);
    if (!n) return t;
    let r, o = "", s = 0, i = 0;
    for (s = n.index; s < t.length; s++) {
      switch (t.charCodeAt(s)) {
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
      i !== s && (o += t.substring(i, s)), i = s + 1, o += r;
    }
    return i !== s ? o + t.substring(i, s) : o;
  };
  ro = (e, t) => {
    const n = {
      ...t
    };
    "direction" in e && e.direction === "rtl" && (n.dir = e.direction), "data" in e && "label" in e.data && e.data.label && (n.class = n.class ? `${n.class} ${e.data.label}` : e.data.label);
    const r = [];
    for (const o in n) {
      const s = n[o];
      s && (typeof s == "boolean" ? r.push(o) : r.push(`${o}="${xa(s)}"`));
    }
    return r.length && r.unshift(""), r.join(" ");
  };
  oo = (e) => e && typeof e != "function" ? e : {};
  Ze = (e, t) => {
    const n = oo(t);
    return ({ node: r, children: o }) => `<${e}${ro(r, n)}>${o}</${e}>`;
  };
  a0 = (e) => {
    const t = oo(e);
    return ({ node: n }) => `<pre${ro(n, t)}>${xa(n.text)}</pre>`;
  };
  l0 = (e, t) => {
    const n = oo(t);
    return ({ node: r }) => {
      const o = {
        ...n,
        src: r.url,
        alt: r.alt,
        copyright: r.copyright
      };
      let s = `<img${ro(r, o)} />`;
      return r.linkTo && (s = Zd(e)({
        type: "hyperlink",
        node: {
          type: "hyperlink",
          data: r.linkTo,
          start: 0,
          end: 0
        },
        text: "",
        children: s,
        key: ""
      })), `<p class="block-img">${s}</p>`;
    };
  };
  c0 = (e) => {
    const t = oo(e);
    return ({ node: n }) => {
      const r = {
        ...t,
        "data-oembed": n.oembed.embed_url,
        "data-oembed-type": n.oembed.type,
        "data-oembed-provider": n.oembed.provider_name
      };
      return `<div${ro(n, r)}>${n.oembed.html}</div>`;
    };
  };
  Zd = (e, t) => {
    const n = oo(t);
    return ({ node: r, children: o }) => {
      const s = {
        ...n
      };
      return r.data.link_type === vn.Web ? (s.href = r.data.url, s.target = r.data.target, s.rel = "noopener noreferrer") : r.data.link_type === vn.Document ? s.href = Es(r.data, {
        linkResolver: e
      }) : r.data.link_type === vn.Media && (s.href = r.data.url), `<a${ro(r, s)}>${o}</a>`;
    };
  };
  u0 = () => ({ text: e }) => e ? xa(e).replace(/\n/g, "<br />") : "";
  Ts = () => (++Ts.i).toString();
  Ts.i = 0;
  let ep, Nr, ti, f0, tp, np, d0, rp, p0, h0, m0, ni, g0, op, y0, so, v0, ri, Cc, sp, _0, ip, Oa, ap, lp, w0, S0, E0, qi, k0, T0, R0, C0, P0, A0, x0, O0, L0, M0, $0, I0, N0, B0, D0, j0, F0, H0, U0, W0, Pc, V0, q0, K0, G0, z0, J0, Y0, Q0, Ac, xc, X0, Z0, eS, tS, nS, rS, oS, sS, iS, aS;
  ep = (e) => {
    const t = f0(e), n = [];
    for (let r = 0; r < t.length; r++) n.push(tp(t[r]));
    return {
      key: Ts(),
      children: n
    };
  };
  Nr = (e, t = []) => ({
    key: Ts(),
    type: e.type,
    text: "text" in e ? e.text : void 0,
    node: e,
    children: t
  });
  ti = (e) => Nr({
    type: It.span,
    text: e,
    spans: []
  });
  f0 = (e) => {
    const t = e.slice(0);
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (r.type === It.listItem || r.type === It.oListItem) {
        const o = [
          r
        ];
        for (; t[n + 1] && t[n + 1].type === r.type; ) o.push(t[n + 1]), t.splice(n, 1);
        r.type === It.listItem ? t[n] = {
          type: It.list,
          items: o
        } : t[n] = {
          type: It.oList,
          items: o
        };
      }
    }
    return t;
  };
  tp = (e) => {
    if ("text" in e) return Nr(e, np(e.spans, e));
    if ("items" in e) {
      const t = [];
      for (let n = 0; n < e.items.length; n++) t.push(tp(e.items[n]));
      return Nr(e, t);
    }
    return Nr(e);
  };
  np = (e, t, n) => {
    if (!e.length) return [
      ti(t.text)
    ];
    const r = e.slice(0);
    r.sort((s, i) => s.start - i.start || i.end - s.end);
    const o = [];
    for (let s = 0; s < r.length; s++) {
      const i = r[s], a = n && n.start || 0, l = i.start - a, u = i.end - a, c = t.text.slice(l, u), f = [];
      for (let d = s; d < r.length; d++) {
        const h = r[d];
        h !== i && (h.start >= i.start && h.end <= i.end ? (f.push(h), r.splice(d, 1), d--) : h.start < i.end && h.end > i.start && (f.push({
          ...h,
          end: i.end
        }), r[d] = {
          ...h,
          start: i.end
        }));
      }
      s === 0 && l > 0 && o.push(ti(t.text.slice(0, l)));
      const p = {
        ...i,
        text: c
      };
      o.push(Nr(p, np(f, {
        ...t,
        text: c
      }, i))), u < t.text.length && o.push(ti(t.text.slice(u, r[s + 1] ? r[s + 1].start - a : void 0)));
    }
    return o;
  };
  d0 = (e, t) => rp(ep(e).children, t);
  rp = (e, t) => {
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t(o.type, o.node, o.text, rp(o.children, t), o.key);
      s != null && n.push(s);
    }
    return n;
  };
  p0 = {
    [It.listItem]: "listItem",
    [It.oListItem]: "oListItem",
    [It.list]: "list",
    [It.oList]: "oList"
  };
  h0 = (e) => (t, n, r, o, s) => {
    const i = e[p0[t] || t];
    if (i) return i({
      type: t,
      node: n,
      text: r,
      children: o,
      key: s
    });
  };
  m0 = (...e) => (...t) => {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r) {
        const o = r(...t);
        if (o != null) return o;
      }
    }
  };
  ni = (e, t) => {
    const n = (o, s) => typeof o == "function" ? (i) => (o == null ? void 0 : o(i)) || s(i) : s, r = {
      heading1: n(t == null ? void 0 : t.heading1, Ze("h1", t == null ? void 0 : t.heading1)),
      heading2: n(t == null ? void 0 : t.heading2, Ze("h2", t == null ? void 0 : t.heading2)),
      heading3: n(t == null ? void 0 : t.heading3, Ze("h3", t == null ? void 0 : t.heading3)),
      heading4: n(t == null ? void 0 : t.heading4, Ze("h4", t == null ? void 0 : t.heading4)),
      heading5: n(t == null ? void 0 : t.heading5, Ze("h5", t == null ? void 0 : t.heading5)),
      heading6: n(t == null ? void 0 : t.heading6, Ze("h6", t == null ? void 0 : t.heading6)),
      paragraph: n(t == null ? void 0 : t.paragraph, Ze("p", t == null ? void 0 : t.paragraph)),
      preformatted: n(t == null ? void 0 : t.preformatted, a0(t == null ? void 0 : t.preformatted)),
      strong: n(t == null ? void 0 : t.strong, Ze("strong", t == null ? void 0 : t.strong)),
      em: n(t == null ? void 0 : t.em, Ze("em", t == null ? void 0 : t.em)),
      listItem: n(t == null ? void 0 : t.listItem, Ze("li", t == null ? void 0 : t.listItem)),
      oListItem: n(t == null ? void 0 : t.oListItem, Ze("li", t == null ? void 0 : t.oListItem)),
      list: n(t == null ? void 0 : t.list, Ze("ul", t == null ? void 0 : t.list)),
      oList: n(t == null ? void 0 : t.oList, Ze("ol", t == null ? void 0 : t.oList)),
      image: n(t == null ? void 0 : t.image, l0(e, t == null ? void 0 : t.image)),
      embed: n(t == null ? void 0 : t.embed, c0(t == null ? void 0 : t.embed)),
      hyperlink: n(t == null ? void 0 : t.hyperlink, Zd(e, t == null ? void 0 : t.hyperlink)),
      label: n(t == null ? void 0 : t.label, Ze("span", t == null ? void 0 : t.label)),
      span: n(t == null ? void 0 : t.span, u0())
    };
    return g0(r);
  };
  g0 = (e) => {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r && (t[n] = (o) => r({
        ...o,
        children: o.children.join("")
      }));
    }
    return h0(t);
  };
  op = (e, ...t) => {
    if (e) {
      const [n, r] = t;
      let o;
      typeof n == "function" || n == null ? o = {
        linkResolver: n,
        serializer: r
      } : o = {
        ...n
      };
      let s;
      return o.serializer ? typeof o.serializer == "function" ? s = m0((i, a, l, u, c) => o.serializer(i, a, l, u.join(""), c), ni(o.linkResolver)) : s = ni(o.linkResolver, o.serializer) : s = ni(o.linkResolver), d0(e, s).join("");
    } else return null;
  };
  y0 = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  so = (e, t) => {
    const n = new URL(e);
    for (const o in t) {
      const s = y0(o), i = t[o];
      i === void 0 ? n.searchParams.delete(s) : Array.isArray(i) ? n.searchParams.set(s, i.join(",")) : n.searchParams.set(s, `${i}`);
    }
    const r = n.searchParams.get("s");
    return r && (n.searchParams.delete("s"), n.searchParams.append("s", r)), n.toString();
  };
  v0 = (e, { pixelDensities: t, ...n }) => t.map((r) => `${so(e, {
    ...n,
    dpr: r
  })} ${r}x`).join(", ");
  ri = (e, { widths: t, ...n }) => t.map((r) => `${so(e, {
    ...n,
    w: void 0,
    h: void 0,
    height: void 0,
    width: r
  })} ${r}w`).join(", ");
  b0 = (e, t = {}) => e && mr(e) ? so(e.url, t) : null;
  Cc = [
    640,
    828,
    1200,
    2048,
    3840
  ];
  sp = (e, t = {}) => {
    if (e && mr(e)) {
      let { widths: n = Cc, ...r } = t;
      const { url: o, dimensions: s, id: i, alt: a, copyright: l, edit: u, ...c } = e, f = Object.values(c);
      return n === "thumbnails" && f.length < 1 && (n = Cc), {
        src: so(o, r),
        srcset: n === "thumbnails" ? [
          ri(o, {
            ...r,
            widths: [
              s.width
            ]
          }),
          ...f.map((p) => ri(p.url, {
            ...r,
            widths: [
              p.dimensions.width
            ]
          }))
        ].join(", ") : ri(e.url, {
          ...r,
          widths: n
        })
      };
    } else return null;
  };
  _0 = [
    1,
    2,
    3
  ];
  ip = (e, t = {}) => {
    if (e && mr(e)) {
      const { pixelDensities: n = _0, ...r } = t;
      return {
        src: so(e.url, r),
        srcset: v0(e.url, {
          ...r,
          pixelDensities: n
        })
      };
    } else return null;
  };
  Oa = pe({
    __name: "Wrapper",
    props: {
      wrapper: {}
    },
    setup(e) {
      return (t, n) => t.wrapper ? (q(), oe(Je(t.wrapper), Vc(eo({
        key: 0
      }, t.$attrs)), {
        default: $e(() => [
          xe(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : xe(t.$slots, "default", {
        key: 1
      });
    }
  });
  ap = Symbol("prismic");
  io = () => Te(ap, {
    options: {
      endpoint: ""
    }
  });
  lp = (e) => {
    const t = /^\/(?!\/)/.test(e), n = !t && !/^https?:\/\//i.test(e);
    return t && !n;
  };
  w0 = "div";
  S0 = pe({
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
      const t = e, { options: n } = io(), r = K(() => {
        if (!Aa(t.field)) return t.fallback ?? "";
        const c = t.linkResolver ?? n.linkResolver, f = t.serializer ?? n.richTextSerializer;
        return op(t.field, {
          linkResolver: c,
          serializer: f
        });
      }), o = He(null), s = Te(no, null);
      let i = [];
      const a = function(c) {
        c.preventDefault(), s == null ? void 0 : s.push(this.href);
      }, l = () => {
        const c = o.value && "$el" in o.value ? o.value.$el : o.value;
        c && "querySelectorAll" in c && (i = Array.from(c.querySelectorAll("a")).map((f) => {
          const p = f.getAttribute("href");
          if (p && lp(p)) {
            const d = a.bind({
              href: p
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
      return St(() => {
        u(), wt(l);
      }), at(r, () => {
        u(), wt(l);
      }), Nn(() => {
        u();
      }), (c, f) => re(gr).richText(e.field) || e.fallback ? (q(), oe(Je(e.wrapper || w0), {
        key: 0,
        ref_key: "root",
        ref: o,
        innerHTML: r.value
      }, null, 8, [
        "innerHTML"
      ])) : tn("", true);
    }
  });
  E0 = "div";
  qi = pe({
    name: "PrismicEmbed",
    __name: "PrismicEmbed",
    props: {
      field: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => re(gr).embed(t.field) ? (q(), oe(Je(t.wrapper || E0), {
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
      ])) : tn("", true);
    }
  });
  k0 = [
    "src",
    "srcset",
    "alt"
  ];
  Qo = pe({
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
      const t = e, { options: n } = io(), r = K(() => {
        var o, s;
        if (!mr(t.field)) return;
        let i, a;
        if (t.widths || !t.pixelDensities) {
          const l = sp(t.field, {
            ...t.imgixParams,
            widths: t.widths === "defaults" ? (o = n.components) == null ? void 0 : o.imageWidthSrcSetDefaults : t.widths
          });
          i = l.src, a = l.srcset;
        } else if (t.pixelDensities) {
          const l = ip(t.field, {
            ...t.imgixParams,
            pixelDensities: t.pixelDensities === "defaults" ? (s = n.components) == null ? void 0 : s.imagePixelDensitySrcSetDefaults : t.pixelDensities
          });
          i = l.src, a = l.srcset;
        }
        return {
          src: i,
          srcSet: a,
          alt: t.alt ?? (t.field.alt || t.fallbackAlt)
        };
      });
      return (o, s) => r.value ? (q(), de("img", {
        key: 0,
        src: r.value.src,
        srcset: r.value.srcSet,
        alt: r.value.alt
      }, null, 8, k0)) : tn("", true);
    }
  });
  T0 = "router-link";
  R0 = "a";
  C0 = "noreferrer";
  Xo = pe({
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
      const t = e, { options: n } = io(), r = K(() => Qd(t.field || t.document, {
        linkResolver: t.linkResolver || n.linkResolver,
        rel(i) {
          var a;
          const l = t.rel || ((a = n.components) == null ? void 0 : a.linkRel);
          return l ? typeof l == "function" ? l(i) : l : i.isExternal ? C0 : void 0;
        }
      })), o = K(() => {
        var i, a;
        return lp(r.value.href || "") ? t.internalComponent || ((i = n.components) == null ? void 0 : i.linkInternalComponent) || T0 : t.externalComponent || ((a = n.components) == null ? void 0 : a.linkExternalComponent) || R0;
      }), s = K(() => o.value === "a" ? {
        href: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      } : {
        to: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      });
      return (i, a) => (q(), oe(Je(o.value), Vc(cf(s.value)), {
        default: $e(() => [
          xe(i.$slots, "default", {}, () => [
            fr(Ht(t.field && "text" in t.field ? t.field.text : void 0), 1)
          ])
        ]),
        _: 3
      }, 16));
    }
  });
  P0 = [
    "dir"
  ];
  A0 = [
    "dir"
  ];
  x0 = [
    "dir"
  ];
  O0 = [
    "dir"
  ];
  L0 = [
    "dir"
  ];
  M0 = [
    "dir"
  ];
  $0 = [
    "dir"
  ];
  I0 = {
    key: 7
  };
  N0 = {
    key: 8
  };
  B0 = {
    key: 9
  };
  D0 = [
    "dir"
  ];
  j0 = [
    "dir"
  ];
  F0 = {
    key: 12
  };
  H0 = {
    key: 13
  };
  U0 = {
    key: 14,
    class: "block-img"
  };
  W0 = {
    key: 0
  };
  Pc = pe({
    name: "PrismicRichTextDefaultComponent",
    __name: "PrismicRichTextDefaultComponent",
    props: {
      node: {},
      linkResolver: {}
    },
    setup(e) {
      const t = e, n = K(() => "direction" in t.node && t.node.direction === "rtl" ? "rtl" : void 0);
      return (r, o) => r.node.type === "heading1" ? (q(), de("h1", {
        key: 0,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, P0)) : r.node.type === "heading2" ? (q(), de("h2", {
        key: 1,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, A0)) : r.node.type === "heading3" ? (q(), de("h3", {
        key: 2,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, x0)) : r.node.type === "heading4" ? (q(), de("h4", {
        key: 3,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, O0)) : r.node.type === "heading5" ? (q(), de("h5", {
        key: 4,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, L0)) : r.node.type === "heading6" ? (q(), de("h6", {
        key: 5,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, M0)) : r.node.type === "paragraph" ? (q(), de("p", {
        key: 6,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, $0)) : r.node.type === "preformatted" ? (q(), de("pre", I0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "strong" ? (q(), de("strong", N0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "em" ? (q(), de("em", B0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "list-item" ? (q(), de("li", {
        key: 10,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, D0)) : r.node.type === "o-list-item" ? (q(), de("li", {
        key: 11,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, j0)) : r.node.type === "group-list-item" ? (q(), de("ul", F0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "group-o-list-item" ? (q(), de("ol", H0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "image" ? (q(), de("p", U0, [
        r.node.linkTo ? (q(), oe(Xo, {
          key: 0,
          field: r.node.linkTo
        }, {
          default: $e(() => [
            ge(Qo, {
              field: r.node
            }, null, 8, [
              "field"
            ])
          ]),
          _: 1
        }, 8, [
          "field"
        ])) : (q(), oe(Qo, {
          key: 1,
          field: r.node
        }, null, 8, [
          "field"
        ]))
      ])) : r.node.type === "embed" ? (q(), oe(qi, {
        key: 15,
        field: r.node.oembed
      }, null, 8, [
        "field"
      ])) : r.node.type === "hyperlink" ? (q(), oe(Xo, {
        key: 16,
        field: r.node.data,
        "link-resolver": r.linkResolver
      }, {
        default: $e(() => [
          xe(r.$slots, "default")
        ]),
        _: 3
      }, 8, [
        "field",
        "link-resolver"
      ])) : r.node.type === "label" ? (q(), de("span", {
        key: 17,
        class: Jr(r.node.data.label)
      }, [
        xe(r.$slots, "default")
      ], 2)) : (q(true), de(we, {
        key: 18
      }, nr(r.node.text.split(`
`), (s, i) => (q(), de(we, {
        key: s
      }, [
        i > 0 ? (q(), de("br", W0)) : tn("", true),
        fr(Ht(s), 1)
      ], 64))), 128));
    }
  });
  V0 = pe({
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
      function r(o) {
        var s;
        return ((s = n.components) == null ? void 0 : s[t[o.type] || o.type]) || Pc;
      }
      return (o, s) => {
        const i = di("PrismicRichTextSerialize", true);
        return q(true), de(we, null, nr(n.children, (a) => (q(), oe(Je(r(a)), {
          key: JSON.stringify(a),
          node: a.node,
          "link-resolver": r(a) === Pc ? n.linkResolver : void 0
        }, {
          default: $e(() => [
            a.children.length ? (q(), oe(i, {
              key: 0,
              children: a.children,
              components: o.components,
              "link-resolver": o.linkResolver
            }, null, 8, [
              "children",
              "components",
              "link-resolver"
            ])) : tn("", true)
          ]),
          _: 2
        }, 1032, [
          "node",
          "link-resolver"
        ]))), 128);
      };
    }
  });
  Zo = pe({
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
      const t = e, { options: n } = io(), r = K(() => {
        var a;
        return t.components || ((a = n.components) == null ? void 0 : a.richTextComponents);
      }), o = K(() => t.linkResolver || n.linkResolver), s = K(() => ep(t.field || []).children), i = K(() => {
        var a;
        return t.components ? true : t.serializer ? false : (a = n.components) != null && a.richTextComponents ? true : !n.richTextSerializer;
      });
      return (a, l) => i.value && (re(gr).richText(e.field) || e.fallback) ? (q(), oe(Oa, {
        key: 0,
        wrapper: e.wrapper
      }, {
        default: $e(() => [
          s.value.length ? (q(), oe(V0, {
            key: 0,
            children: s.value,
            components: r.value,
            "link-resolver": o.value
          }, null, 8, [
            "children",
            "components",
            "link-resolver"
          ])) : (q(), oe(Je(e.fallback), {
            key: 1
          }))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : i.value ? tn("", true) : (q(), oe(S0, {
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
  q0 = () => ({
    table: {
      type: Object,
      required: true
    }
  });
  K0 = () => ({
    head: {
      type: Object,
      required: true
    }
  });
  G0 = () => ({
    body: {
      type: Object,
      required: true
    }
  });
  z0 = () => ({
    row: {
      type: Object,
      required: true
    }
  });
  J0 = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  Y0 = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  Q0 = {
    table: pe({
      props: q0(),
      setup(e, { slots: t }) {
        return () => he("table", t.default ? t.default() : []);
      }
    }),
    thead: pe({
      props: K0(),
      setup(e, { slots: t }) {
        return () => he("thead", t.default ? t.default() : []);
      }
    }),
    tbody: pe({
      props: G0(),
      setup(e, { slots: t }) {
        return () => he("tbody", t.default ? t.default() : []);
      }
    }),
    tr: pe({
      props: z0(),
      setup(e, { slots: t }) {
        return () => he("tr", t.default ? t.default() : []);
      }
    }),
    th: pe({
      props: J0(),
      setup(e, { slots: t }) {
        return () => he("th", t.default ? t.default() : []);
      }
    }),
    td: pe({
      props: Y0(),
      setup(e, { slots: t }) {
        return () => he("td", t.default ? t.default() : []);
      }
    })
  };
  Ac = pe({
    name: "PrismicTableRow",
    __name: "PrismicTableRow",
    props: {
      row: {},
      components: {}
    },
    setup(e) {
      const t = e;
      return (n, r) => (q(), oe(Je(t.components.tr), {
        row: n.row
      }, {
        default: $e(() => [
          (q(true), de(we, null, nr(n.row.cells, (o) => (q(), de(we, {
            key: o.key
          }, [
            o.type === "header" ? (q(), oe(Je(t.components.th), {
              key: 0,
              cell: o
            }, {
              default: $e(() => [
                ge(Zo, {
                  field: o.content,
                  components: n.components
                }, null, 8, [
                  "field",
                  "components"
                ])
              ]),
              _: 2
            }, 1032, [
              "cell"
            ])) : (q(), oe(Je(t.components.td), {
              key: 1,
              cell: o
            }, {
              default: $e(() => [
                ge(Zo, {
                  field: o.content,
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
  xc = pe({
    name: "PrismicTable",
    __name: "PrismicTable",
    props: {
      field: {},
      fallback: {},
      components: {}
    },
    setup(e) {
      const t = e, n = K(() => ({
        ...Q0,
        ...t.components
      }));
      return (r, o) => re(gr).table(r.field) ? (q(), oe(Je(n.value.table), eo({
        key: 0,
        table: r.field
      }, r.$attrs), {
        default: $e(() => [
          r.field.head ? (q(), oe(Je(n.value.thead), {
            key: 0,
            head: r.field.head
          }, {
            default: $e(() => [
              (q(true), de(we, null, nr(r.field.head.rows, (s) => (q(), oe(Ac, {
                key: s.key,
                row: s,
                components: n.value
              }, null, 8, [
                "row",
                "components"
              ]))), 128))
            ]),
            _: 1
          }, 8, [
            "head"
          ])) : tn("", true),
          (q(), oe(Je(n.value.tbody), {
            body: r.field.body
          }, {
            default: $e(() => [
              (q(true), de(we, null, nr(r.field.body.rows, (s) => (q(), oe(Ac, {
                key: s.key,
                row: s,
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
      ])) : (q(), oe(Je(r.fallback), {
        key: 1
      }));
    }
  });
  X0 = () => null;
  Oc = pe({
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
      const t = e, { options: n } = io(), r = K(() => t.slices.map((o, s) => {
        var i, a;
        const l = "slice_type" in o ? o.slice_type : o.type, u = "id" in o && typeof o.id == "string" ? o.id : `${s}-${JSON.stringify(o)}`, c = ((i = t.components) == null ? void 0 : i[l]) || t.defaultComponent || ((a = n.components) == null ? void 0 : a.sliceZoneDefaultComponent);
        if (!c) return {
          is: X0,
          key: u,
          props: {
            slice: o
          }
        };
        if (o.__mapped) {
          const { __mapped: f, ...p } = o;
          return {
            is: c,
            key: u,
            props: p
          };
        }
        return {
          is: c,
          key: u,
          props: {
            slice: o,
            index: s,
            context: t.context,
            slices: t.slices
          }
        };
      }));
      return (o, s) => o.slices ? (q(), oe(Oa, {
        key: 0,
        wrapper: o.wrapper
      }, {
        default: $e(() => [
          (q(true), de(we, null, nr(r.value, (i) => (q(), oe(Je(i.is), eo({
            key: i.key,
            ref_for: true
          }, i.props), null, 16))), 128))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : tn("", true);
    }
  });
  Lc = pe({
    name: "PrismicText",
    __name: "PrismicText",
    props: {
      field: {},
      fallback: {},
      separator: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => re(gr).richText(t.field) || t.fallback ? (q(), oe(Oa, {
        key: 0,
        wrapper: t.wrapper
      }, {
        default: $e(() => [
          fr(Ht(re(Xd)(t.field) || t.fallback), 1)
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : tn("", true);
    }
  });
  Z0 = (e) => {
    let t;
    return e.client ? t = e.client : t = Fw(e.endpoint, e.clientConfig), {
      options: e,
      ...{
        client: t,
        filter: $t,
        cookie: cw
      },
      ...{
        asText: Xd,
        asHTML: (s, ...i) => {
          const [a, l] = i;
          return op(s, typeof a == "function" || a == null ? {
            linkResolver: a || e.linkResolver,
            serializer: l || e.richTextSerializer
          } : {
            linkResolver: e.linkResolver,
            serializer: e.richTextSerializer,
            ...a
          });
        },
        asLink: (s, i) => Es(s, typeof i == "function" ? {
          linkResolver: i
        } : {
          linkResolver: e.linkResolver,
          ...i
        }),
        asLinkAttrs: (s, i) => Qd(s, {
          linkResolver: e.linkResolver,
          ...i
        }),
        asDate: r0,
        asImageSrc: b0,
        asImageWidthSrcSet: sp,
        asImagePixelDensitySrcSet: ip,
        isFilled: gr,
        documentToLinkField: Kd
      },
      install(s) {
        s.provide(ap, this), s.config.globalProperties.$prismic = this, e.injectComponents !== false && (s.component(Xo.name, Xo), s.component(qi.name, qi), s.component(Qo.name, Qo), s.component(xc.name, xc), s.component(Lc.name, Lc), s.component(Zo.name, Zo), s.component(Oc.name, Oc));
      }
    };
  };
  eS = void 0;
  tS = void 0;
  nS = void 0;
  rS = void 0;
  oS = void 0;
  sS = void 0;
  iS = Re({
    name: "prismic:setup",
    parallel: true,
    async setup(e) {
      var _a2;
      const t = Dt().public.prismic;
      let n;
      n = eS;
      const r = t.environment || t.endpoint || (n == null ? void 0 : n.documentAPIEndpoint) || "", o = Z0({
        ...t,
        endpoint: r,
        client: n,
        linkResolver: tS,
        richTextSerializer: nS,
        injectComponents: false,
        components: {
          linkInternalComponent: Hi,
          linkExternalComponent: Hi,
          ...t.components,
          linkRel: rS,
          richTextComponents: oS,
          sliceZoneDefaultComponent: sS
        }
      });
      if (e.vueApp.use(o), t.preview) {
        const s = dc("io.prismic.preview").value;
        if (s) try {
          const i = typeof s == "string" ? JSON.parse(decodeURIComponent(s)) : s;
          if (Object.keys(i).some((a) => a in i && typeof i[a] == "object" && i[a] !== null && "preview" in i[a] && i[a].preview)) {
            let a = false;
            hr(() => {
              a || Fi();
            }), Ie().afterEach(() => {
              a = true, Fi();
            });
          }
        } catch (i) {
          console.warn("Failed to parse Prismic preview cookie", i);
        }
      }
      return t.toolbar && ((_a2 = o.client) == null ? void 0 : _a2.repositoryName) ? bs({
        script: [
          {
            key: "prismic-preview",
            src: `https://static.cdn.prismic.io/prismic.min.js?repo=${o.client.repositoryName}&new=true`,
            async: true,
            defer: true,
            crossorigin: "anonymous"
          }
        ]
      }) : dc("io.prismic.preview").value = null, {
        provide: {
          prismic: o
        }
      };
    }
  });
  aS = Re(() => {
  });
  var Mc = (e, t, n) => typeof e == "function" ? e(t, n) : e, Pt = Symbol("loaders"), oi = Symbol("loaderEntries"), lS = Symbol(), Tn = Symbol(), $c = Symbol(), Po = Symbol(), si = Symbol(), cS = Symbol();
  function Ic(e) {
    return e && e[lS];
  }
  function Nc(e) {
    e && e.length;
  }
  var uS = Object.assign, fS = Symbol();
  function dS({ router: e, app: t, effect: n, isSSR: r, errors: o = [], selectNavigationResult: s = (i) => i[0].value }) {
    if (e[oi] != null) return () => {
    };
    e[oi] = /* @__PURE__ */ new WeakMap(), e[$c] = t, e[cS] = !!r;
    const i = n.run(() => Ue(false));
    t.provide(fS, i);
    const a = e.beforeEach((f) => {
      var _a2;
      e[Tn] && ((_a2 = e[Tn].meta[Po]) == null ? void 0 : _a2.abort()), e[Tn] = f, f.meta[Pt] = /* @__PURE__ */ new Set(), f.meta[Po] = new AbortController(), f.meta[si] = [];
      const p = [];
      for (const d of f.matched) if (!d.meta[Pt]) {
        d.meta[Pt] = new Set(d.meta.loaders || []);
        for (const h in d.components) {
          const g = d.components[h], S = (pS(g) ? g() : Promise.resolve(g)).then((E) => {
            if (typeof E != "function") {
              for (const _ in E) {
                const m = E[_];
                Ic(m) && d.meta[Pt].add(m);
              }
              if (Array.isArray(E.__loaders)) for (const _ of E.__loaders) Ic(_) && d.meta[Pt].add(_);
            }
          });
          p.push(S);
        }
      }
      return Promise.all(p).then(() => {
        for (const d of f.matched) for (const h of d.meta[Pt]) f.meta[Pt].add(h);
      });
    }), l = e.beforeResolve((f, p) => {
      const d = Array.from(f.meta[Pt]);
      return Nc([]), i.value = true, Promise.all(d.map((h) => {
        const { server: g, lazy: S, errors: E } = h._.options;
        if (!g && r) return;
        const _ = n.run(() => t.runWithContext(() => h._.load(f, e, p)));
        return !r && Mc(S, f, p) ? void 0 : _.catch((m) => {
          if (!E) throw m;
          if (E === true) {
            if (Array.isArray(o) ? o.some((v) => m instanceof v) : o(m)) return;
          } else if (Array.isArray(E) ? E.some((v) => m instanceof v) : E(m)) return;
          throw m;
        });
      })).then(() => {
        if (f.meta[si].length) return s(f.meta[si]);
      }).catch((h) => h instanceof hS ? h.value : Promise.reject(h)).finally(() => {
        Nc([]), i.value = false;
      });
    }), u = e.afterEach((f, p, d) => {
      var _a2;
      if (d) {
        if ((_a2 = f.meta[Po]) == null ? void 0 : _a2.abort(d), xt(d, 16)) for (const h of f.meta[Pt]) h._.getEntry(e).resetPending();
      } else for (const h of f.meta[Pt]) {
        const { commit: g, lazy: S } = h._.options;
        if (g === "after-load") {
          const E = h._.getEntry(e);
          E && (!Mc(S, f, p) || !E.isLoading.value) && E.commit(f);
        }
      }
      e[Tn] === f && (e[Tn] = null);
    }), c = e.onError((f, p) => {
      var _a2;
      (_a2 = p.meta[Po]) == null ? void 0 : _a2.abort(f), e[Tn] === p && (e[Tn] = null);
    });
    return () => {
      delete e[oi], delete e[$c], a(), l(), u(), c();
    };
  }
  function pS(e) {
    return typeof e == "function" && !("displayName" in e) && !("props" in e) && !("emits" in e) && !("__vccOpts" in e);
  }
  var hS = class {
    constructor(e) {
      this.value = e;
    }
  };
  function mS(e, t) {
    const n = Yr(true), r = dS(uS({
      app: e,
      effect: n
    }, t)), { unmount: o } = e;
    e.unmount = () => {
      n.stop(), r(), o.call(e);
    };
  }
  const gS = Re({
    name: "data-loaders",
    dependsOn: [
      "nuxt:router"
    ],
    setup(e) {
      e.vueApp.use(mS, {
        router: e.vueApp.config.globalProperties.$router,
        isSSR: false
      });
    }
  }), yS = Re({
    enforce: "post",
    async setup() {
      const e = pr(), t = jd("nuxt-seo-utils:routeRules", () => null);
      if (t.value) {
        const { head: n, seoMeta: r } = t.value;
        n && e.push(n), r && cd(r);
      }
    }
  });
  function vS(e, t) {
    let n = e;
    Tt(e, {
      strict: false,
      acceptRelative: true
    }) && (n = vs(e).pathname);
    const r = ag(t.base || "/");
    r !== "/" && n.startsWith(r) && (n = n.slice(r.length));
    let o = Qt(t.absolute ? t.siteUrl : "");
    r !== "/" && o.endsWith(r) && (o = o.slice(0, o.indexOf(r)));
    const s = t.withBase ? Ri(r, o || "/") : o, i = Ri(n, s);
    return n === "/" && !t.withBase ? gs(i) : wS(t.trailingSlash, i);
  }
  const bS = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "webp",
    "svg",
    "ico",
    "pdf",
    "doc",
    "docx",
    "xls",
    "xlsx",
    "ppt",
    "pptx",
    "txt",
    "md",
    "markdown",
    "zip",
    "rar",
    "7z",
    "tar",
    "gz",
    "mp3",
    "wav",
    "flac",
    "ogg",
    "opus",
    "m4a",
    "aac",
    "midi",
    "mid",
    "mp4",
    "avi",
    "mkv",
    "mov",
    "wmv",
    "flv",
    "webm",
    "html",
    "css",
    "js",
    "json",
    "xml",
    "tsx",
    "jsx",
    "ts",
    "vue",
    "svelte",
    "xsl",
    "rss",
    "atom",
    "php",
    "py",
    "rb",
    "java",
    "c",
    "cpp",
    "h",
    "go",
    "csv",
    "tsv",
    "sql",
    "yaml",
    "yml",
    "woff",
    "woff2",
    "ttf",
    "otf",
    "eot",
    "exe",
    "msi",
    "apk",
    "ipa",
    "dmg",
    "iso",
    "bin",
    "bat",
    "cmd",
    "sh",
    "env",
    "htaccess",
    "conf",
    "toml",
    "ini",
    "deb",
    "rpm",
    "jar",
    "war",
    "epub",
    "mobi",
    "log",
    "tmp",
    "bak",
    "old",
    "sav"
  ];
  function _S(e) {
    var _a2;
    const n = (_a2 = (e.split("/").pop() || e).match(/\.[0-9a-z]+$/i)) == null ? void 0 : _a2[0];
    return n && bS.includes(n.replace(".", ""));
  }
  function wS(e, t) {
    const n = vs(t);
    if (_S(n.pathname)) return t;
    const r = e ? gs(n.pathname) : Qt(n.pathname);
    return `${n.protocol ? `${n.protocol}//` : ""}${n.host || ""}${r}${n.search || ""}${n.hash || ""}`;
  }
  function SS(e) {
    return window.location.origin;
  }
  function ES(e = {}) {
    const t = Ra(), n = SS(), r = Dt().app.baseURL || "/";
    return (o) => K(() => vS(re(o), {
      absolute: re(e.absolute),
      withBase: re(e.withBase),
      siteUrl: re(e.canonical) !== false ? t.url : n,
      trailingSlash: t.trailingSlash,
      base: r
    }));
  }
  function kS() {
    const e = Ra({
      resolveRefs: false
    }), t = () => Ke(e.currentLocale) || Ke(e.defaultLocale) || "en";
    pr().use(id);
    const { canonicalQueryWhitelist: r, canonicalLowercase: o } = Dt().public["seo-utils"], s = Bn(), i = ES({
      withBase: true,
      absolute: true
    }), a = dr(), l = K(() => {
      if (a.value) return false;
      const { query: f } = s;
      let p = i(s.path || "/").value || s.path;
      if (o) try {
        p = p.toLocaleLowerCase(t());
      } catch {
        p = p.toLowerCase();
      }
      const d = Object.fromEntries(Object.entries(f).filter(([g]) => r.includes(g)).sort(([g], [S]) => g.localeCompare(S)));
      return {
        rel: "canonical",
        href: Object.keys(d).length ? `${p}?${Of(d)}` : p
      };
    }), u = {
      tagPriority: "low"
    };
    bs({
      htmlAttrs: {
        lang: t
      },
      templateParams: {
        site: () => e,
        siteName: () => e.name
      },
      titleTemplate: "%s %separator %siteName",
      link: [
        () => l.value
      ]
    }, u);
    const c = {
      ogType: "website",
      ogUrl: () => {
        const f = l.value;
        return f ? f.href : false;
      },
      ogLocale: () => {
        const f = t();
        {
          const p = f.replace("-", "_");
          if (p.includes("_")) return p;
        }
        return false;
      },
      ogSiteName: e.name
    };
    if (e.description && (c.description = e.description), e.twitter) {
      const f = e.twitter.startsWith("@") ? e.twitter : `@${e.twitter}`;
      c.twitterCreator = f, c.twitterSite = f;
    }
    cd(c, u);
  }
  const TS = Re({
    name: "nuxt-seo:defaults",
    order: 999,
    env: {
      islands: false
    },
    setup() {
      kS();
    }
  }), RS = [
    uv,
    n_,
    r_,
    l_,
    b_,
    S_,
    E_,
    k_,
    T_,
    R_,
    C_,
    P_,
    A_,
    x_,
    M_,
    G_,
    z_,
    J_,
    rw,
    ow,
    iS,
    aS,
    gS,
    yS,
    TS
  ], cp = (e = "RouteProvider") => pe({
    name: e,
    props: {
      route: {
        type: Object,
        required: true
      },
      vnode: Object,
      vnodeRef: Object,
      renderKey: String,
      trackRootNodes: Boolean
    },
    setup(t) {
      const n = t.renderKey, r = t.route, o = {};
      for (const s in t.route) Object.defineProperty(o, s, {
        get: () => n === t.renderKey ? t.route[s] : r[s],
        enumerable: true
      });
      return Kt(In, Nt(o)), () => t.vnode ? he(t.vnode, {
        ref: t.vnodeRef
      }) : t.vnode;
    }
  }), CS = cp(), Bc = /* @__PURE__ */ new WeakMap(), PS = pe({
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
      const o = me(), s = He(), i = Te(In, null);
      let a;
      r({
        pageRef: s
      });
      const l = Te(Gf, null);
      let u;
      const c = o.deferHydration();
      if (o.isHydrating) {
        const p = o.hooks.hookOnce("app:error", c);
        Ie().beforeEach(p);
      }
      e.pageKey && at(() => e.pageKey, (p, d) => {
        p !== d && o.callHook("page:loading:start");
      });
      let f = false;
      {
        const p = Ie().beforeResolve(() => {
          f = false;
        });
        Nn(() => {
          p();
        });
      }
      return () => he(Od, {
        name: e.name,
        route: e.route,
        ...t
      }, {
        default: (p) => {
          const d = xS(i, p.route, p.Component), h = i && i.matched.length === p.route.matched.length;
          if (!p.Component) {
            if (u && !h) return u;
            c();
            return;
          }
          if (u && l && !l.isCurrent(p.route)) return u;
          if (d && i && (!l || (l == null ? void 0 : l.isCurrent(i)))) return h ? u : null;
          const g = Ui(p, e.pageKey), S = OS(i, p.route, p.Component);
          !o.isHydrating && a === g && !S && wt(() => {
            f = true, o.callHook("page:loading:end");
          }), a = g;
          const E = !!(e.transition ?? p.route.meta.pageTransition ?? kl), _ = E && AS([
            e.transition,
            p.route.meta.pageTransition,
            kl,
            {
              onAfterLeave() {
                delete o._runningTransition, o.callHook("page:transition:finish", p.Component);
              }
            }
          ]), m = e.keepalive ?? p.route.meta.keepalive ?? Wg;
          return u = Md(E && _, p_(m, he(ca, {
            suspensible: true,
            onPending: () => {
              E && (o._runningTransition = true), o.callHook("page:start", p.Component);
            },
            onResolve: () => {
              wt(() => o.callHook("page:finish", p.Component).then(() => {
                if (!f && !S) return f = true, o.callHook("page:loading:end");
              }).finally(c));
            }
          }, {
            default: () => {
              const v = {
                key: g || void 0,
                vnode: n.default ? LS(n.default, p) : p.Component,
                route: p.route,
                renderKey: g || void 0,
                trackRootNodes: E,
                vnodeRef: s
              };
              if (!m) return he(CS, v);
              const w = p.Component.type, P = w;
              let L = Bc.get(P);
              return L || (L = cp(w.name || w.__name), Bc.set(P, L)), he(L, v);
            }
          }))).default(), u;
        }
      });
    }
  });
  function AS(e) {
    const t = e.filter(Boolean).map((n) => ({
      ...n,
      onAfterLeave: n.onAfterLeave ? Ta(n.onAfterLeave) : void 0
    }));
    return ha(...t);
  }
  function xS(e, t, n) {
    if (!e) return false;
    const r = t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    });
    return !r || r === -1 ? false : t.matched.slice(0, r).some((o, s) => {
      var _a2, _b2, _c2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) !== ((_c2 = (_b2 = e.matched[s]) == null ? void 0 : _b2.components) == null ? void 0 : _c2.default);
    }) || n && Ui({
      route: t,
      Component: n
    }) !== Ui({
      route: e,
      Component: n
    });
  }
  function OS(e, t, n) {
    return e ? t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    }) < t.matched.length - 1 : false;
  }
  function LS(e, t) {
    const n = e(t);
    return n.length === 1 ? he(n[0]) : he(we, void 0, n);
  }
  let $S;
  MS = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
  $S = {};
  function IS(e, t, n, r, o, s) {
    const i = PS;
    return q(), de("div", null, [
      ge(i)
    ]);
  }
  let NS, BS, DS, FS;
  NS = MS($S, [
    [
      "render",
      IS
    ]
  ]);
  BS = pe({
    name: "LayoutLoader",
    inheritAttrs: false,
    props: {
      name: String,
      layoutProps: Object
    },
    setup(e, t) {
      return () => he(yn[e.name], e.layoutProps, t.slots);
    }
  });
  DS = {
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
  jS = pe({
    name: "NuxtLayout",
    inheritAttrs: false,
    props: DS,
    setup(e, t) {
      const n = me(), r = Te(In), s = !r || r === Bn() ? Ld() : r, i = K(() => {
        let c = re(e.name) ?? (s == null ? void 0 : s.meta.layout) ?? "default";
        return c && !(c in yn) && e.fallback && (c = re(e.fallback)), c;
      }), a = Ue();
      t.expose({
        layoutRef: a
      });
      const l = n.deferHydration();
      if (n.isHydrating) {
        const c = n.hooks.hookOnce("app:error", l);
        Ie().beforeEach(c);
      }
      let u;
      return () => {
        const c = i.value && i.value in yn, f = (s == null ? void 0 : s.meta.layoutTransition) ?? Hg, p = u;
        return u = i.value, Md(c && f, {
          default: () => he(ca, {
            suspensible: true,
            onResolve: () => {
              wt(l);
            }
          }, {
            default: () => he(FS, {
              layoutProps: eo(t.attrs, {
                ref: a
              }),
              key: i.value || void 0,
              name: i.value,
              shouldProvide: !e.name,
              isRenderingNewLayout: (d) => d !== p && d === i.value,
              hasTransition: !!f
            }, t.slots)
          })
        }).default();
      };
    }
  });
  FS = pe({
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
      },
      isRenderingNewLayout: {
        type: Function,
        required: true
      }
    },
    setup(e, t) {
      const n = e.name;
      e.shouldProvide && Kt(Gf, {
        isCurrent: (s) => n === (s.meta.layout ?? "default")
      });
      const r = Te(In);
      if (r && r === Bn()) {
        const s = Ld(), i = {};
        for (const a in s) {
          const l = a;
          Object.defineProperty(i, l, {
            enumerable: true,
            get: () => e.isRenderingNewLayout(e.name) ? s[l] : r[l]
          });
        }
        Kt(In, Nt(i));
      }
      return () => {
        var _a2, _b2;
        return !n || typeof n == "string" && !(n in yn) ? (_b2 = (_a2 = t.slots).default) == null ? void 0 : _b2.call(_a2) : he(BS, {
          key: n,
          layoutProps: e.layoutProps,
          name: n
        }, t.slots);
      };
    }
  });
  var HS = {};
  const US = {
    "bg-neutral-100": "",
    "f-pt-2xl": ""
  }, WS = {
    "f-mt-lg": "",
    flex: "~ md:justify-center"
  }, VS = {
    "nq-prose-compact": "",
    "w-full": "",
    "f-mt-lg": ""
  }, qS = {
    bg: "red/10",
    "text-red-1100": "",
    "outline-red-600": ""
  }, KS = {
    bg: "red/10",
    "text-red-1100": "",
    "mt-4": "",
    "outline-red-600": ""
  }, GS = pe({
    __name: "error",
    props: {
      error: {}
    },
    setup(e) {
      const t = e, n = K(() => t.error.statusCode || 404), r = K(() => {
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
      }), o = Bn(), s = Ie(), i = K(() => o.path.startsWith("/developer") || o.path.startsWith("/developers") || o.path.includes("/dev/") || o.path.includes("/docs/")), a = K(() => t.error.message === "Article not found"), l = K(() => o.path.startsWith("/blog") || a.value);
      St(() => {
        if (i.value || HS.REDIRECT_ALL_ERRORS === "true") {
          const g = encodeURIComponent(o.fullPath);
          s.push(`/developers/error?original-path=${g}&status=${n.value}`);
        }
      });
      const u = K(() => l.value ? "/blog" : "/"), c = K(() => l.value ? "Browse all articles" : "Back to home"), f = () => Jf({
        redirect: u.value
      }), p = K(() => a.value ? "Article not found" : `${n.value} - ${r.value}`), d = K(() => {
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
      });
      bs({
        title: a.value ? "Article not found" : `${n.value} - ${r.value}`,
        meta: [
          {
            name: "description",
            content: K(() => d.value)
          },
          {
            name: "robots",
            content: "noindex, nofollow"
          },
          {
            property: "og:title",
            content: a.value ? "Article not found" : `${n.value} - ${r.value}`
          },
          {
            property: "og:description",
            content: K(() => d.value)
          },
          {
            property: "og:type",
            content: "website"
          },
          {
            name: "twitter:card",
            content: "summary"
          },
          {
            name: "twitter:title",
            content: a.value ? "Article not found" : `${n.value} - ${r.value}`
          },
          {
            name: "twitter:description",
            content: K(() => d.value)
          }
        ]
      });
      const h = t.error.stack;
      return delete t.error.stack, (g, S) => {
        const E = Hi, _ = jS;
        return q(), oe(_, null, {
          default: $e(() => [
            st("section", US, [
              st("h1", null, Ht(re(p)), 1),
              st("p", null, Ht(re(d)), 1),
              st("div", WS, [
                ge(E, {
                  to: re(u),
                  "nq-arrow": "",
                  "nq-pill-lg": "",
                  "nq-pill-blue": "",
                  onClick: f
                }, {
                  default: $e(() => [
                    fr(Ht(re(c)), 1)
                  ]),
                  _: 1
                }, 8, [
                  "to"
                ])
              ]),
              st("div", VS, [
                st("details", null, [
                  S[0] || (S[0] = st("summary", {
                    "w-full": "",
                    "cursor-pointer": "",
                    text: "center neutral-800"
                  }, [
                    st("span", null, "Details")
                  ], -1)),
                  st("pre", qS, Ht(g.error), 1),
                  S[1] || (S[1] = st("span", {
                    "text-red-1100": "",
                    "f-px-sm": "",
                    "f-mt-md": "",
                    "nq-label": ""
                  }, "Stack", -1)),
                  st("pre", KS, Ht(re(h)), 1)
                ])
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  }), zS = {
    key: 0
  }, Dc = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null, n = me(), r = n.deferHydration();
      if (n.isHydrating) {
        const u = n.hooks.hookOnce("app:error", r);
        Ie().beforeEach(u);
      }
      const o = false;
      Kt(In, Bn()), n.hooks.callHookWith((u) => u.map((c) => c()), "vue:setup");
      const s = dr(), i = false, a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
      Mu((u, c, f) => {
        if (n.hooks.callHook("vue:error", u, c, f).catch((p) => console.error("[nuxt] Error in `vue:error` hook", p)), a.test(navigator.userAgent)) return n.hooks.callHook("app:error", u), console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, u), false;
        if (Yf(u) && (u.fatal || u.unhandled)) return n.runWithContext(() => Cn(u)), false;
      });
      const l = false;
      return (u, c) => (q(), oe(ca, {
        onResolve: re(r)
      }, {
        default: $e(() => [
          re(i) ? (q(), de("div", zS)) : re(s) ? (q(), oe(re(GS), {
            key: 1,
            error: re(s)
          }, null, 8, [
            "error"
          ])) : re(l) ? (q(), oe(re(t), {
            key: 2,
            context: re(l)
          }, null, 8, [
            "context"
          ])) : re(o) ? (q(), oe(Je(re(o)), {
            key: 3
          })) : (q(), oe(re(NS), {
            key: 4
          }))
        ]),
        _: 1
      }, 8, [
        "onResolve"
      ]));
    }
  };
  let jc;
  {
    let e;
    jc = async function() {
      var _a2, _b2;
      if (e) return e;
      const n = !!(((_a2 = window.__NUXT__) == null ? void 0 : _a2.serverRendered) ?? ((_b2 = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b2.dataset.ssr) === "true"), r = n ? Bm(Dc) : Nm(Dc), o = Jg({
        vueApp: r
      });
      async function s(i) {
        var _a3;
        await o.callHook("app:error", i), (_a3 = o.payload).error || (_a3.error = _n(i));
      }
      r.config.errorHandler = s, o.hook("app:suspense:resolve", () => {
        r.config.errorHandler === s && (r.config.errorHandler = void 0);
      }), !n && Tl.id && o.hook("app:suspense:resolve", () => {
        var _a3;
        (_a3 = document.getElementById(Tl.id)) == null ? void 0 : _a3.remove();
      });
      try {
        await Xg(o, RS);
      } catch (i) {
        s(i);
      }
      try {
        await o.hooks.callHook("app:created", r), await o.hooks.callHook("app:beforeMount", r), r.mount(Kg), await o.hooks.callHook("app:mounted", r), await wt();
      } catch (i) {
        s(i);
      }
      return r;
    }, e = jc().catch((t) => {
      throw console.error("Error while mounting app:", t), t;
    });
  }
})();
export {
  eE as $,
  Oc as A,
  cd as B,
  He as C,
  Lc as D,
  Qo as E,
  we as F,
  St as G,
  fs as H,
  he as I,
  Qn as J,
  qa as K,
  mn as L,
  me as M,
  Zt as N,
  On as O,
  Ue as P,
  pr as Q,
  xe as R,
  Vc as S,
  cf as T,
  qp as U,
  Zu as V,
  hE as W,
  QS as X,
  at as Y,
  Xo as Z,
  Hi as _,
  __tla,
  ge as a,
  Ld as a$,
  pE as a0,
  tt as a1,
  wt as a2,
  Nn as a3,
  lm as a4,
  Te as a5,
  Kt as a6,
  tE as a7,
  Lu as a8,
  fh as a9,
  Ke as aA,
  lE as aB,
  ha as aC,
  ag as aD,
  Tt as aE,
  ys as aF,
  vs as aG,
  gE as aH,
  Ym as aI,
  Xd as aJ,
  Uw as aK,
  b0 as aL,
  ks as aM,
  Es as aN,
  Aa as aO,
  r0 as aP,
  ur as aQ,
  du as aR,
  cs as aS,
  ta as aT,
  Yr as aU,
  JS as aV,
  ct as aW,
  sE as aX,
  nE as aY,
  XS as aZ,
  Rs as a_,
  sa as aa,
  Ce as ab,
  lt as ac,
  SE as ad,
  jd as ae,
  cE as af,
  rE as ag,
  iE as ah,
  Ie as ai,
  Zo as aj,
  YS as ak,
  dE as al,
  Se as am,
  $t as an,
  hr as ao,
  wE as ap,
  _v as aq,
  kt as ar,
  Je as as,
  $h as at,
  aE as au,
  zh as av,
  ie as aw,
  Nm as ax,
  ZS as ay,
  vE as az,
  oe as b,
  _E as b0,
  uE as b1,
  ly as b2,
  ql as b3,
  yE as b4,
  bE as b5,
  fE as b6,
  mE as b7,
  de as c,
  pe as d,
  st as e,
  tn as f,
  fr as g,
  os as h,
  MS as i,
  K as j,
  bs as k,
  jS as l,
  eo as m,
  Jr as n,
  q as o,
  Bn as p,
  Dt as q,
  nr as r,
  io as s,
  Ht as t,
  re as u,
  oE as v,
  $e as w,
  _n as x,
  Ra as y,
  EE as z
};
