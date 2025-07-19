const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./onepager.BMUVdREQ.css","./CE9BTSru.js","./CjXJS-5I.js","./CsdQH-VP.js","./B2NqqgPK.js","./DjC4KgUf.js","./DpIe18Wz.js","./Co9d64pR.js","./DUznQD6O.js","./DRAR02aM.js","./Tooltip.6qo_YfJI.css","./k4OXxJR1.js","./Qjh2__OP.js","./roadmap.D5eBsHDI.css","./f2Qfitit.js","./CeHn5qUl.js","./QmSsucTN.js","./idgHlp0U.js","./c9qYaCo8.js","./nh4JscoW.js","./CUsdYpwO.js","./nnhf449w.js","./B1wYQ_s1.js","./Bu-myvbS.js","./_post_.Bq3qrgvB.css","./QNM9-pvx.js","./CqkleIqs.js","./C_kGI6oZ.js","./BqR6DsKQ.js","./D0DW2WUk.js","./Blockchain.BxxfcmTf.css","./B0q1k2WO.js","./2z2xjtXM.js","./D6ZTM1qK.js","./BDLNfpkA.js","./DlNKslqp.js","./CHIgUVhi.js","./Cp_5xexF.js","./ipbtIvtS.js","./BvxGGjot.js","./CKoUQKN7.js","./DG9nywM4.js","./default.DSKO0rLl.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
let nk, Lc, ud, He, Mc, Xo, we, St, ds, he, Xn, Ka, gn, me, en, Ln, Ue, hr, xe, qc, uf, Kp, ef, gk, ZS, at, Zo, Ui, ge, Md, mk, tt, wt, Dn, cm, Te, Gt, rk, Mu, dh, Ke, uk, ma, lg, Tt, vs, bs, vk, Ym, Zd, Ww, w0, Ts, Es, xa, s0, fr, pu, us, na, Yr, YS, ct, ak, ok, ek, Cs, ia, Ce, lt, Ek, Fd, fk, sk, lk, Ie, es, XS, hk, Se, $t, mr, kk, wv, Et, Je, Ih, ck, Jh, ie, Dm, tk, _k, oe, Sk, dk, cy, Kl, bk, wk, pk, yk, de, pe, st, nn, dr, ss, IS, K, _s, HS, to, Qr, q, Bn, Bt, rr, ao, Ht, re, ik, $e, wn, Ca, Tk;
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
  function Gi(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  let ae, zn, Dt, fp, Jr, zi, Pe, Ji, dp, ue, G, Jn, ts, Ia, pp, te, ke, bt, ye, Qi, Hc, cr, hp, Uc, Yi, Qn, ns, mp, gp, Zt, rs, Ge, Yn, Vc, ai, Wc;
  ae = {};
  zn = [];
  Dt = () => {
  };
  fp = () => false;
  Jr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
  zi = (e) => e.startsWith("onUpdate:");
  Pe = Object.assign;
  Ji = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  dp = Object.prototype.hasOwnProperty;
  ue = (e, t) => dp.call(e, t);
  G = Array.isArray;
  Jn = (e) => cr(e) === "[object Map]";
  ts = (e) => cr(e) === "[object Set]";
  Ia = (e) => cr(e) === "[object Date]";
  pp = (e) => cr(e) === "[object RegExp]";
  te = (e) => typeof e == "function";
  ke = (e) => typeof e == "string";
  bt = (e) => typeof e == "symbol";
  ye = (e) => e !== null && typeof e == "object";
  Qi = (e) => (ye(e) || te(e)) && te(e.then) && te(e.catch);
  Hc = Object.prototype.toString;
  cr = (e) => Hc.call(e);
  hp = (e) => cr(e).slice(8, -1);
  Uc = (e) => cr(e) === "[object Object]";
  Yi = (e) => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  Qn = Gi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  ns = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  mp = /-(\w)/g;
  ct = ns((e) => e.replace(mp, (t, n) => n ? n.toUpperCase() : ""));
  gp = /\B([A-Z])/g;
  Zt = ns((e) => e.replace(gp, "-$1").toLowerCase());
  rs = ns((e) => e.charAt(0).toUpperCase() + e.slice(1));
  Cs = ns((e) => e ? `on${rs(e)}` : "");
  Ge = (e, t) => !Object.is(e, t);
  Yn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  };
  Vc = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  };
  ai = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  Wc = (e) => {
    const t = ke(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Na;
  const os = () => Na || (Na = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  ss = function(e) {
    if (G(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = ke(r) ? _p(r) : ss(r);
        if (o) for (const s in o) t[s] = o[s];
      }
      return t;
    } else if (ke(e) || ye(e)) return e;
  };
  const yp = /;(?![^(]*\))/g, vp = /:([^]+)/, bp = /\/\*[^]*?\*\//g;
  function _p(e) {
    const t = {};
    return e.replace(bp, "").split(yp).forEach((n) => {
      if (n) {
        const r = n.split(vp);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  Qr = function(e) {
    let t = "";
    if (ke(e)) t = e;
    else if (G(e)) for (let n = 0; n < e.length; n++) {
      const r = Qr(e[n]);
      r && (t += r + " ");
    }
    else if (ye(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  qc = function(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !ke(t) && (e.class = Qr(t)), n && (e.style = ss(n)), e;
  };
  const wp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Sp = Gi(wp);
  function Kc(e) {
    return !!e || e === "";
  }
  function kp(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let r = 0; n && r < e.length; r++) n = nr(e[r], t[r]);
    return n;
  }
  function nr(e, t) {
    if (e === t) return true;
    let n = Ia(e), r = Ia(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : false;
    if (n = bt(e), r = bt(t), n || r) return e === t;
    if (n = G(e), r = G(t), n || r) return n && r ? kp(e, t) : false;
    if (n = ye(e), r = ye(t), n || r) {
      if (!n || !r) return false;
      const o = Object.keys(e).length, s = Object.keys(t).length;
      if (o !== s) return false;
      for (const i in e) {
        const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
        if (a && !l || !a && l || !nr(e[i], t[i])) return false;
      }
    }
    return String(e) === String(t);
  }
  function Gc(e, t) {
    return e.findIndex((n) => nr(n, t));
  }
  let zc, Jc, Ps;
  zc = (e) => !!(e && e.__v_isRef === true);
  Ht = (e) => ke(e) ? e : e == null ? "" : G(e) || ye(e) && (e.toString === Hc || !te(e.toString)) ? zc(e) ? Ht(e.value) : JSON.stringify(e, Jc, 2) : String(e);
  Jc = (e, t) => zc(t) ? Jc(e, t.value) : Jn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], s) => (n[Ps(r, s) + " =>"] = o, n), {})
  } : ts(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Ps(n))
  } : bt(t) ? Ps(t) : ye(t) && !G(t) && !Uc(t) ? String(t) : t;
  Ps = (e, t = "") => {
    var n;
    return bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let Be;
  class Qc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Be, !t && Be && (this.index = (Be.scopes || (Be.scopes = [])).push(this) - 1);
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
        const n = Be;
        try {
          return Be = this, t();
        } finally {
          Be = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Be, Be = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Be = this.prevScope, this.prevScope = void 0);
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
    return new Qc(e);
  };
  en = function() {
    return Be;
  };
  Ln = function(e, t = false) {
    Be && Be.cleanups.push(e);
  };
  let _e;
  const As = /* @__PURE__ */ new WeakSet();
  class Yc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Be && Be.active && Be.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, As.has(this) && (As.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Zc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Da(this), eu(this);
      const t = _e, n = vt;
      _e = this, vt = true;
      try {
        return this.fn();
      } finally {
        tu(this), _e = t, vt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) ea(t);
        this.deps = this.depsTail = void 0, Da(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? As.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      li(this) && this.run();
    }
    get dirty() {
      return li(this);
    }
  }
  let Xc = 0, Cr, Pr;
  function Zc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Pr, Pr = e;
      return;
    }
    e.next = Cr, Cr = e;
  }
  function Xi() {
    Xc++;
  }
  function Zi() {
    if (--Xc > 0) return;
    if (Pr) {
      let t = Pr;
      for (Pr = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Cr; ) {
      let t = Cr;
      for (Cr = void 0; t; ) {
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
  function eu(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function tu(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), ea(r), Ep(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function li(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (nu(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function nu(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Br) || (e.globalVersion = Br, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !li(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = _e, r = vt;
    _e = e, vt = true;
    try {
      eu(e);
      const o = e.fn(e._value);
      (t.version === 0 || Ge(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      _e = n, vt = r, tu(e), e.flags &= -3;
    }
  }
  function ea(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let s = n.computed.deps; s; s = s.nextDep) ea(s, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function Ep(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let vt = true;
  const ru = [];
  function Jt() {
    ru.push(vt), vt = false;
  }
  function Qt() {
    const e = ru.pop();
    vt = e === void 0 ? true : e;
  }
  function Da(e) {
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
  class Tp {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class is {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!_e || !vt || _e === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== _e) n = this.activeLink = new Tp(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, ou(n);
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
      Xi();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Zi();
      }
    }
  }
  function ou(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) ou(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Io = /* @__PURE__ */ new WeakMap(), An = Symbol(""), ci = Symbol(""), jr = Symbol("");
  function je(e, t, n) {
    if (vt && _e) {
      let r = Io.get(e);
      r || Io.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new is()), o.map = r, o.key = n), o.track();
    }
  }
  function Ut(e, t, n, r, o, s) {
    const i = Io.get(e);
    if (!i) {
      Br++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if (Xi(), t === "clear") i.forEach(a);
    else {
      const l = G(e), u = l && Yi(n);
      if (l && n === "length") {
        const c = Number(r);
        i.forEach((f, p) => {
          (p === "length" || p === jr || !bt(p) && p >= c) && a(f);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(jr)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(An)), Jn(e) && a(i.get(ci)));
          break;
        case "delete":
          l || (a(i.get(An)), Jn(e) && a(i.get(ci)));
          break;
        case "set":
          Jn(e) && a(i.get(An));
          break;
      }
    }
    Zi();
  }
  function Rp(e, t) {
    const n = Io.get(e);
    return n && n.get(t);
  }
  function Hn(e) {
    const t = ie(e);
    return t === e ? t : (je(t, "iterate", jr), pt(e) ? t : t.map(Ne));
  }
  function as(e) {
    return je(e = ie(e), "iterate", jr), e;
  }
  const Cp = {
    __proto__: null,
    [Symbol.iterator]() {
      return xs(this, Symbol.iterator, Ne);
    },
    concat(...e) {
      return Hn(this).concat(...e.map((t) => G(t) ? Hn(t) : t));
    },
    entries() {
      return xs(this, "entries", (e) => (e[1] = Ne(e[1]), e));
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
      return Os(this, "includes", e);
    },
    indexOf(...e) {
      return Os(this, "indexOf", e);
    },
    join(e) {
      return Hn(this).join(e);
    },
    lastIndexOf(...e) {
      return Os(this, "lastIndexOf", e);
    },
    map(e, t) {
      return jt(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return br(this, "pop");
    },
    push(...e) {
      return br(this, "push", e);
    },
    reduce(e, ...t) {
      return Ba(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ba(this, "reduceRight", e, t);
    },
    shift() {
      return br(this, "shift");
    },
    some(e, t) {
      return jt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return br(this, "splice", e);
    },
    toReversed() {
      return Hn(this).toReversed();
    },
    toSorted(e) {
      return Hn(this).toSorted(e);
    },
    toSpliced(...e) {
      return Hn(this).toSpliced(...e);
    },
    unshift(...e) {
      return br(this, "unshift", e);
    },
    values() {
      return xs(this, "values", Ne);
    }
  };
  function xs(e, t, n) {
    const r = as(e), o = r[t]();
    return r !== e && !pt(e) && (o._next = o.next, o.next = () => {
      const s = o._next();
      return s.value && (s.value = n(s.value)), s;
    }), o;
  }
  const Pp = Array.prototype;
  function jt(e, t, n, r, o, s) {
    const i = as(e), a = i !== e && !pt(e), l = i[t];
    if (l !== Pp[t]) {
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
    const o = as(e);
    let s = n;
    return o !== e && (pt(e) ? n.length > 3 && (s = function(i, a, l) {
      return n.call(this, i, a, l, e);
    }) : s = function(i, a, l) {
      return n.call(this, i, Ne(a), l, e);
    }), o[t](s, ...r);
  }
  function Os(e, t, n) {
    const r = ie(e);
    je(r, "iterate", jr);
    const o = r[t](...n);
    return (o === -1 || o === false) && ta(n[0]) ? (n[0] = ie(n[0]), r[t](...n)) : o;
  }
  function br(e, t, n = []) {
    Jt(), Xi();
    const r = ie(e)[t].apply(e, n);
    return Zi(), Qt(), r;
  }
  const Ap = Gi("__proto__,__v_isRef,__isVue"), su = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt));
  function xp(e) {
    bt(e) || (e = String(e));
    const t = ie(this);
    return je(t, "has", e), t.hasOwnProperty(e);
  }
  class iu {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw") return r === (o ? s ? du : fu : s ? uu : cu).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const i = G(t);
      if (!o) {
        let l;
        if (i && (l = Cp[n])) return l;
        if (n === "hasOwnProperty") return xp;
      }
      const a = Reflect.get(t, n, Se(t) ? t : r);
      return (bt(n) ? su.has(n) : Ap(n)) || (o || je(t, "get", n), s) ? a : Se(a) ? i && Yi(n) ? a : a.value : ye(a) ? o ? pu(a) : Et(a) : a;
    }
  }
  class au extends iu {
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
      return (!bt(n) || !su.has(n)) && je(t, "has", n), r;
    }
    ownKeys(t) {
      return je(t, "iterate", G(t) ? "length" : An), Reflect.ownKeys(t);
    }
  }
  class lu extends iu {
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
  const Op = new au(), Lp = new lu(), Mp = new au(true), $p = new lu(true), ui = (e) => e, co = (e) => Reflect.getPrototypeOf(e);
  function Ip(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, s = ie(o), i = Jn(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? ui : t ? No : Ne;
      return !t && je(s, "iterate", l ? ci : An), {
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
  function uo(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Np(e, t) {
    const n = {
      get(o) {
        const s = this.__v_raw, i = ie(s), a = ie(o);
        e || (Ge(o, a) && je(i, "get", o), je(i, "get", a));
        const { has: l } = co(i), u = t ? ui : e ? No : Ne;
        if (l.call(i, o)) return u(s.get(o));
        if (l.call(i, a)) return u(s.get(a));
        s !== i && s.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && je(ie(o), "iterate", An), Reflect.get(o, "size", o);
      },
      has(o) {
        const s = this.__v_raw, i = ie(s), a = ie(o);
        return e || (Ge(o, a) && je(i, "has", o), je(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
      },
      forEach(o, s) {
        const i = this, a = i.__v_raw, l = ie(a), u = t ? ui : e ? No : Ne;
        return !e && je(l, "iterate", An), a.forEach((c, f) => o.call(s, u(c), u(f), i));
      }
    };
    return Pe(n, e ? {
      add: uo("add"),
      set: uo("set"),
      delete: uo("delete"),
      clear: uo("clear")
    } : {
      add(o) {
        !t && !pt(o) && !Yt(o) && (o = ie(o));
        const s = ie(this);
        return co(s).has.call(s, o) || (s.add(o), Ut(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !pt(s) && !Yt(s) && (s = ie(s));
        const i = ie(this), { has: a, get: l } = co(i);
        let u = a.call(i, o);
        u || (o = ie(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? Ge(s, c) && Ut(i, "set", o, s) : Ut(i, "add", o, s), this;
      },
      delete(o) {
        const s = ie(this), { has: i, get: a } = co(s);
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
      n[o] = Ip(o, e, t);
    }), n;
  }
  function ls(e, t) {
    const n = Np(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ue(n, o) && o in r ? n : r, o, s);
  }
  const Dp = {
    get: ls(false, false)
  }, Bp = {
    get: ls(false, true)
  }, jp = {
    get: ls(true, false)
  }, Fp = {
    get: ls(true, true)
  }, cu = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap(), fu = /* @__PURE__ */ new WeakMap(), du = /* @__PURE__ */ new WeakMap();
  function Hp(e) {
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
  function Up(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Hp(hp(e));
  }
  Et = function(e) {
    return Yt(e) ? e : cs(e, false, Op, Dp, cu);
  };
  function Nt(e) {
    return cs(e, false, Mp, Bp, uu);
  }
  pu = function(e) {
    return cs(e, true, Lp, jp, fu);
  };
  YS = function(e) {
    return cs(e, true, $p, Fp, du);
  };
  function cs(e, t, n, r, o) {
    if (!ye(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = Up(e);
    if (s === 0) return e;
    const i = o.get(e);
    if (i) return i;
    const a = new Proxy(e, s === 2 ? r : n);
    return o.set(e, a), a;
  }
  function Kt(e) {
    return Yt(e) ? Kt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Yt(e) {
    return !!(e && e.__v_isReadonly);
  }
  function pt(e) {
    return !!(e && e.__v_isShallow);
  }
  function ta(e) {
    return e ? !!e.__v_raw : false;
  }
  ie = function(e) {
    const t = e && e.__v_raw;
    return t ? ie(t) : e;
  };
  Xn = function(e) {
    return !ue(e, "__v_skip") && Object.isExtensible(e) && Vc(e, "__v_skip", true), e;
  };
  const Ne = (e) => ye(e) ? Et(e) : e, No = (e) => ye(e) ? pu(e) : e;
  Se = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  He = function(e) {
    return hu(e, false);
  };
  Ue = function(e) {
    return hu(e, true);
  };
  function hu(e, t) {
    return Se(e) ? e : new Vp(e, t);
  }
  class Vp {
    constructor(t, n) {
      this.dep = new is(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ie(t), this._value = n ? t : Ne(t), this.__v_isShallow = n;
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
  function mu(e) {
    return Kt(e) ? e : new Proxy(e, Wp);
  }
  class qp {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new is(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  us = function(e) {
    return new qp(e);
  };
  Kp = function(e) {
    const t = G(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = gu(e, n);
    return t;
  };
  class Gp {
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
      return Rp(ie(this._object), this._key);
    }
  }
  class zp {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  na = function(e, t, n) {
    return Se(e) ? e : te(e) ? new zp(e) : ye(e) && arguments.length > 1 ? gu(e, t, n) : He(e);
  };
  function gu(e, t, n) {
    const r = e[t];
    return Se(r) ? r : new Gp(e, t, n);
  }
  class Jp {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new is(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Br - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && _e !== this) return Zc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return nu(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Qp(e, t, n = false) {
    let r, o;
    return te(e) ? r = e : (r = e.get, o = e.set), new Jp(r, o, n);
  }
  const fo = {}, Do = /* @__PURE__ */ new WeakMap();
  let Cn;
  function Yp(e, t = false, n = Cn) {
    if (n) {
      let r = Do.get(n);
      r || Do.set(n, r = []), r.push(e);
    }
  }
  function Xp(e, t, n = ae) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (v) => o ? v : pt(v) || o === false || o === 0 ? Vt(v, 1) : Vt(v);
    let c, f, p, d, h = false, g = false;
    if (Se(e) ? (f = () => e.value, h = pt(e)) : Kt(e) ? (f = () => u(e), h = true) : G(e) ? (g = true, h = e.some((v) => Kt(v) || pt(v)), f = () => e.map((v) => {
      if (Se(v)) return v.value;
      if (Kt(v)) return u(v);
      if (te(v)) return l ? l(v, 2) : v();
    })) : te(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (p) {
        Jt();
        try {
          p();
        } finally {
          Qt();
        }
      }
      const v = Cn;
      Cn = c;
      try {
        return l ? l(e, 3, [
          d
        ]) : e(d);
      } finally {
        Cn = v;
      }
    } : f = Dt, t && o) {
      const v = f, w = o === true ? 1 / 0 : o;
      f = () => Vt(v(), w);
    }
    const S = en(), k = () => {
      c.stop(), S && S.active && Ji(S.effects, c);
    };
    if (s && t) {
      const v = t;
      t = (...w) => {
        v(...w), k();
      };
    }
    let _ = g ? new Array(e.length).fill(fo) : fo;
    const m = (v) => {
      if (!(!(c.flags & 1) || !c.dirty && !v)) if (t) {
        const w = c.run();
        if (o || h || (g ? w.some((P, M) => Ge(P, _[M])) : Ge(w, _))) {
          p && p();
          const P = Cn;
          Cn = c;
          try {
            const M = [
              w,
              _ === fo ? void 0 : g && _[0] === fo ? [] : _,
              d
            ];
            l ? l(t, 3, M) : t(...M), _ = w;
          } finally {
            Cn = P;
          }
        }
      } else c.run();
    };
    return a && a(m), c = new Yc(f), c.scheduler = i ? () => i(m, false) : m, d = (v) => Yp(v, false, c), p = c.onStop = () => {
      const v = Do.get(c);
      if (v) {
        if (l) l(v, 4);
        else for (const w of v) w();
        Do.delete(c);
      }
    }, t ? r ? m(true) : _ = c.run() : i ? i(m.bind(null, true), true) : c.run(), k.pause = c.pause.bind(c), k.resume = c.resume.bind(c), k.stop = k, k;
  }
  function Vt(e, t = 1 / 0, n) {
    if (t <= 0 || !ye(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, Se(e)) Vt(e.value, t, n);
    else if (G(e)) for (let r = 0; r < e.length; r++) Vt(e[r], t, n);
    else if (ts(e) || Jn(e)) e.forEach((r) => {
      Vt(r, t, n);
    });
    else if (Uc(e)) {
      for (const r in e) Vt(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Vt(e[r], t, n);
    }
    return e;
  }
  function Xr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      ur(o, t, n);
    }
  }
  function _t(e, t, n, r) {
    if (te(e)) {
      const o = Xr(e, t, n, r);
      return o && Qi(o) && o.catch((s) => {
        ur(s, t, n);
      }), o;
    }
    if (G(e)) {
      const o = [];
      for (let s = 0; s < e.length; s++) o.push(_t(e[s], t, n, r));
      return o;
    }
  }
  function ur(e, t, n, r = true) {
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
        Jt(), Xr(s, null, 10, [
          e,
          l,
          u
        ]), Qt();
        return;
      }
    }
    Zp(e, n, o, r, i);
  }
  function Zp(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const ze = [];
  let Ot = -1;
  const Zn = [];
  let un = null, qn = 0;
  const yu = Promise.resolve();
  let Bo = null;
  wt = function(e) {
    const t = Bo || yu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function eh(e) {
    let t = Ot + 1, n = ze.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = ze[r], s = Fr(o);
      s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function ra(e) {
    if (!(e.flags & 1)) {
      const t = Fr(e), n = ze[ze.length - 1];
      !n || !(e.flags & 2) && t >= Fr(n) ? ze.push(e) : ze.splice(eh(t), 0, e), e.flags |= 1, vu();
    }
  }
  function vu() {
    Bo || (Bo = yu.then(bu));
  }
  function fi(e) {
    G(e) ? Zn.push(...e) : un && e.id === -1 ? un.splice(qn + 1, 0, e) : e.flags & 1 || (Zn.push(e), e.flags |= 1), vu();
  }
  function ja(e, t, n = Ot + 1) {
    for (; n < ze.length; n++) {
      const r = ze[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        ze.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function jo(e) {
    if (Zn.length) {
      const t = [
        ...new Set(Zn)
      ].sort((n, r) => Fr(n) - Fr(r));
      if (Zn.length = 0, un) {
        un.push(...t);
        return;
      }
      for (un = t, qn = 0; qn < un.length; qn++) {
        const n = un[qn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      un = null, qn = 0;
    }
  }
  const Fr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function bu(e) {
    try {
      for (Ot = 0; Ot < ze.length; Ot++) {
        const t = ze[Ot];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Xr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Ot < ze.length; Ot++) {
        const t = ze[Ot];
        t && (t.flags &= -2);
      }
      Ot = -1, ze.length = 0, jo(), Bo = null, (ze.length || Zn.length) && bu();
    }
  }
  let Me = null, _u = null;
  function Fo(e) {
    const t = Me;
    return Me = e, _u = e && e.type.__scopeId || null, t;
  }
  $e = function(e, t = Me, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && el(-1);
      const s = Fo(t);
      let i;
      try {
        i = e(...o);
      } finally {
        Fo(s), r._d && el(1);
      }
      return i;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  XS = function(e, t) {
    if (Me === null) return e;
    const n = ms(Me), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [s, i, a, l = ae] = t[o];
      s && (te(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && Vt(i), r.push({
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
      l && (Jt(), _t(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), Qt());
    }
  }
  const wu = Symbol("_vte"), Su = (e) => e.__isTeleport, Ar = (e) => e && (e.disabled || e.disabled === ""), Fa = (e) => e && (e.defer || e.defer === ""), Ha = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ua = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, di = (e, t) => {
    const n = e && e.to;
    return ke(n) ? t ? t(n) : null : n;
  }, ku = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      const { mc: c, pc: f, pbc: p, o: { insert: d, querySelector: h, createText: g, createComment: S } } = u, k = Ar(t.props);
      let { shapeFlag: _, children: m, dynamicChildren: v } = t;
      if (e == null) {
        const w = t.el = g(""), P = t.anchor = g("");
        d(w, n, r), d(P, n, r);
        const M = (C, O) => {
          _ & 16 && (o && o.isCE && (o.ce._teleportTarget = C), c(m, C, O, o, s, i, a, l));
        }, N = () => {
          const C = t.target = di(t.props, h), O = Eu(C, t, g, d);
          C && (i !== "svg" && Ha(C) ? i = "svg" : i !== "mathml" && Ua(C) && (i = "mathml"), k || (M(C, O), xo(t, false)));
        };
        k && (M(n, P), xo(t, true)), Fa(t.props) ? Oe(() => {
          N(), t.el.__isMounted = true;
        }, s) : N();
      } else {
        if (Fa(t.props) && !e.el.__isMounted) {
          Oe(() => {
            ku.process(e, t, n, r, o, s, i, a, l, u), delete e.el.__isMounted;
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const w = t.anchor = e.anchor, P = t.target = e.target, M = t.targetAnchor = e.targetAnchor, N = Ar(e.props), C = N ? n : P, O = N ? w : M;
        if (i === "svg" || Ha(P) ? i = "svg" : (i === "mathml" || Ua(P)) && (i = "mathml"), v ? (p(e.dynamicChildren, v, C, o, s, i, a), ca(e, t, true)) : l || f(e, t, C, O, o, s, i, a, false), k) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : po(t, n, w, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const E = t.target = di(t.props, h);
          E && po(t, E, null, u, 0);
        } else N && po(t, P, M, u, 1);
        xo(t, k);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, s) {
      const { shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: p } = e;
      if (f && (o(u), o(c)), s && o(l), i & 16) {
        const d = s || !Ar(p);
        for (let h = 0; h < a.length; h++) {
          const g = a[h];
          r(g, t, n, d, !!g.dynamicChildren);
        }
      }
    },
    move: po,
    hydrate: th
  };
  function po(e, t, n, { o: { insert: r }, m: o }, s = 2) {
    s === 0 && r(e.targetAnchor, t, n);
    const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
    if (f && r(i, t, n), (!f || Ar(c)) && l & 16) for (let p = 0; p < u.length; p++) o(u[p], t, n, 2);
    f && r(a, t, n);
  }
  function th(e, t, n, r, o, s, { o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
    const p = t.target = di(t.props, l);
    if (p) {
      const d = Ar(t.props), h = p._lpa || p.firstChild;
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
      xo(t, d);
    }
    return t.anchor && i(t.anchor);
  }
  ZS = ku;
  function xo(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, o;
      for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function Eu(e, t, n, r) {
    const o = t.targetStart = n(""), s = t.targetAnchor = n("");
    return o[wu] = s, e && (r(o, e), r(s, e)), s;
  }
  const fn = Symbol("_leaveCb"), ho = Symbol("_enterCb");
  function Tu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return St(() => {
      e.isMounted = true;
    }), Dn(() => {
      e.isUnmounting = true;
    }), e;
  }
  const ft = [
    Function,
    Array
  ], Ru = {
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
  }, Cu = (e) => {
    const t = e.subTree;
    return t.component ? Cu(t.component) : t;
  }, nh = {
    name: "BaseTransition",
    props: Ru,
    setup(e, { slots: t }) {
      const n = tt(), r = Tu();
      return () => {
        const o = t.default && oa(t.default(), true);
        if (!o || !o.length) return;
        const s = Pu(o), i = ie(e), { mode: a } = i;
        if (r.isLeaving) return Ls(s);
        const l = Va(s);
        if (!l) return Ls(s);
        let u = Hr(l, i, r, n, (f) => u = f);
        l.type !== Ce && Sn(l, u);
        let c = n.subTree && Va(n.subTree);
        if (c && c.type !== Ce && !gt(l, c) && Cu(n).type !== Ce) {
          let f = Hr(c, i, r, n);
          if (Sn(c, f), a === "out-in" && l.type !== Ce) return r.isLeaving = true, f.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Ls(s);
          a === "in-out" && l.type !== Ce ? f.delayLeave = (p, d, h) => {
            const g = Au(r, c);
            g[String(c.key)] = c, p[fn] = () => {
              d(), p[fn] = void 0, delete u.delayedLeave, c = void 0;
            }, u.delayedLeave = () => {
              h(), delete u.delayedLeave, c = void 0;
            };
          } : c = void 0;
        } else c && (c = void 0);
        return s;
      };
    }
  };
  function Pu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Ce) {
        t = n;
        break;
      }
    }
    return t;
  }
  const rh = nh;
  function Au(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Hr(e, t, n, r, o) {
    const { appear: s, mode: i, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: p, onLeave: d, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: S, onAppear: k, onAfterAppear: _, onAppearCancelled: m } = t, v = String(e.key), w = Au(n, e), P = (C, O) => {
      C && _t(C, r, 9, O);
    }, M = (C, O) => {
      const E = O[1];
      P(C, O), G(C) ? C.every((R) => R.length <= 1) && E() : C.length <= 1 && E();
    }, N = {
      mode: i,
      persisted: a,
      beforeEnter(C) {
        let O = l;
        if (!n.isMounted) if (s) O = S || l;
        else return;
        C[fn] && C[fn](true);
        const E = w[v];
        E && gt(e, E) && E.el[fn] && E.el[fn](), P(O, [
          C
        ]);
      },
      enter(C) {
        let O = u, E = c, R = f;
        if (!n.isMounted) if (s) O = k || u, E = _ || c, R = m || f;
        else return;
        let D = false;
        const Z = C[ho] = (ee) => {
          D || (D = true, ee ? P(R, [
            C
          ]) : P(E, [
            C
          ]), N.delayedLeave && N.delayedLeave(), C[ho] = void 0);
        };
        O ? M(O, [
          C,
          Z
        ]) : Z();
      },
      leave(C, O) {
        const E = String(e.key);
        if (C[ho] && C[ho](true), n.isUnmounting) return O();
        P(p, [
          C
        ]);
        let R = false;
        const D = C[fn] = (Z) => {
          R || (R = true, O(), Z ? P(g, [
            C
          ]) : P(h, [
            C
          ]), C[fn] = void 0, w[E] === e && delete w[E]);
        };
        w[E] = e, d ? M(d, [
          C,
          D
        ]) : D();
      },
      clone(C) {
        const O = Hr(C, t, n, r, o);
        return o && o(O), O;
      }
    };
    return N;
  }
  function Ls(e) {
    if (Zr(e)) return e = lt(e), e.children = null, e;
  }
  function Va(e) {
    if (!Zr(e)) return Su(e.type) && e.children ? Pu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && te(n.default)) return n.default();
    }
  }
  function Sn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Sn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function oa(e, t = false, n) {
    let r = [], o = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
      i.type === we ? (i.patchFlag & 128 && o++, r = r.concat(oa(i.children, t, a))) : (t || i.type !== Ce) && r.push(a != null ? lt(i, {
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
  ek = function() {
    const e = tt();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
  };
  function sa(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  tk = function(e) {
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
  function Ur(e, t, n, r, o = false) {
    if (G(e)) {
      e.forEach((h, g) => Ur(h, t && (G(t) ? t[g] : t), n, r, o));
      return;
    }
    if (_n(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ur(e, t, n, r.component.subTree);
      return;
    }
    const s = r.shapeFlag & 4 ? ms(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === ae ? a.refs = {} : a.refs, f = a.setupState, p = ie(f), d = f === ae ? () => false : (h) => ue(p, h);
    if (u != null && u !== l && (ke(u) ? (c[u] = null, d(u) && (f[u] = null)) : Se(u) && (u.value = null)), te(l)) Xr(l, a, 12, [
      i,
      c
    ]);
    else {
      const h = ke(l), g = Se(l);
      if (h || g) {
        const S = () => {
          if (e.f) {
            const k = h ? d(l) ? f[l] : c[l] : l.value;
            o ? G(k) && Ji(k, s) : G(k) ? k.includes(s) || k.push(s) : h ? (c[l] = [
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
  const Un = () => {
    Wa || (console.error("Hydration completed but contains mismatches."), Wa = true);
  }, oh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", sh = (e) => e.namespaceURI.includes("MathML"), mo = (e) => {
    if (e.nodeType === 1) {
      if (oh(e)) return "svg";
      if (sh(e)) return "mathml";
    }
  }, Gn = (e) => e.nodeType === 8;
  function ih(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: l, createComment: u } } = e, c = (m, v) => {
      if (!v.hasChildNodes()) {
        n(null, m, v), jo(), v._vnode = m;
        return;
      }
      f(v.firstChild, m, null, null, null), jo(), v._vnode = m;
    }, f = (m, v, w, P, M, N = false) => {
      N = N || !!v.dynamicChildren;
      const C = Gn(m) && m.data === "[", O = () => g(m, v, w, P, M, C), { type: E, ref: R, shapeFlag: D, patchFlag: Z } = v;
      let ee = m.nodeType;
      v.el = m, Z === -2 && (N = false, v.dynamicChildren = null);
      let F = null;
      switch (E) {
        case On:
          ee !== 3 ? v.children === "" ? (l(v.el = o(""), i(m), m), F = m) : F = O() : (m.data !== v.children && (Un(), m.data = v.children), F = s(m));
          break;
        case Ce:
          _(m) ? (F = s(m), k(v.el = m.content.firstChild, m, w)) : ee !== 8 || C ? F = O() : F = s(m);
          break;
        case Or:
          if (C && (m = s(m), ee = m.nodeType), ee === 1 || ee === 3) {
            F = m;
            const z = !v.children.length;
            for (let J = 0; J < v.staticCount; J++) z && (v.children += F.nodeType === 1 ? F.outerHTML : F.data), J === v.staticCount - 1 && (v.anchor = F), F = s(F);
            return C ? s(F) : F;
          } else O();
          break;
        case we:
          C ? F = h(m, v, w, P, M, N) : F = O();
          break;
        default:
          if (D & 1) (ee !== 1 || v.type.toLowerCase() !== m.tagName.toLowerCase()) && !_(m) ? F = O() : F = p(m, v, w, P, M, N);
          else if (D & 6) {
            v.slotScopeIds = M;
            const z = i(m);
            if (C ? F = S(m) : Gn(m) && m.data === "teleport start" ? F = S(m, m.data, "teleport end") : F = s(m), t(v, z, null, w, P, mo(z), N), _n(v) && !v.type.__asyncResolved) {
              let J;
              C ? (J = ge(we), J.anchor = F ? F.previousSibling : z.lastChild) : J = m.nodeType === 3 ? dr("") : ge("div"), J.el = m, v.component.subTree = J;
            }
          } else D & 64 ? ee !== 8 ? F = O() : F = v.type.hydrate(m, v, w, P, M, N, e, d) : D & 128 && (F = v.type.hydrate(m, v, w, P, mo(i(m)), M, N, e, f));
      }
      return R != null && Ur(R, null, P, v), F;
    }, p = (m, v, w, P, M, N) => {
      N = N || !!v.dynamicChildren;
      const { type: C, props: O, patchFlag: E, shapeFlag: R, dirs: D, transition: Z } = v, ee = C === "input" || C === "option";
      if (ee || E !== -1) {
        D && Mt(v, null, w, "created");
        let F = false;
        if (_(m)) {
          F = Xu(null, Z) && w && w.vnode.props && w.vnode.props.appear;
          const J = m.content.firstChild;
          F && Z.beforeEnter(J), k(J, m, w), v.el = m = J;
        }
        if (R & 16 && !(O && (O.innerHTML || O.textContent))) {
          let J = d(m.firstChild, v, m, w, P, M, N);
          for (; J; ) {
            go(m, 1) || Un();
            const Ae = J;
            J = J.nextSibling, a(Ae);
          }
        } else if (R & 8) {
          let J = v.children;
          J[0] === `
` && (m.tagName === "PRE" || m.tagName === "TEXTAREA") && (J = J.slice(1)), m.textContent !== J && (go(m, 0) || Un(), m.textContent = v.children);
        }
        if (O) {
          if (ee || !N || E & 48) {
            const J = m.tagName.includes("-");
            for (const Ae in O) (ee && (Ae.endsWith("value") || Ae === "indeterminate") || Jr(Ae) && !Qn(Ae) || Ae[0] === "." || J) && r(m, Ae, null, O[Ae], void 0, w);
          } else if (O.onClick) r(m, "onClick", null, O.onClick, void 0, w);
          else if (E & 4 && Kt(O.style)) for (const J in O.style) O.style[J];
        }
        let z;
        (z = O && O.onVnodeBeforeMount) && et(z, w, v), D && Mt(v, null, w, "beforeMount"), ((z = O && O.onVnodeMounted) || D || F) && sf(() => {
          z && et(z, w, v), F && Z.enter(m), D && Mt(v, null, w, "mounted");
        }, P);
      }
      return m.nextSibling;
    }, d = (m, v, w, P, M, N, C) => {
      C = C || !!v.dynamicChildren;
      const O = v.children, E = O.length;
      for (let R = 0; R < E; R++) {
        const D = C ? O[R] : O[R] = it(O[R]), Z = D.type === On;
        m ? (Z && !C && R + 1 < E && it(O[R + 1]).type === On && (l(o(m.data.slice(D.children.length)), w, s(m)), m.data = D.children), m = f(m, D, P, M, N, C)) : Z && !D.children ? l(D.el = o(""), w) : (go(w, 1) || Un(), n(null, D, w, null, P, M, mo(w), N));
      }
      return m;
    }, h = (m, v, w, P, M, N) => {
      const { slotScopeIds: C } = v;
      C && (M = M ? M.concat(C) : C);
      const O = i(m), E = d(s(m), v, O, w, P, M, N);
      return E && Gn(E) && E.data === "]" ? s(v.anchor = E) : (Un(), l(v.anchor = u("]"), O, E), E);
    }, g = (m, v, w, P, M, N) => {
      if (go(m.parentElement, 1) || Un(), v.el = null, N) {
        const E = S(m);
        for (; ; ) {
          const R = s(m);
          if (R && R !== E) a(R);
          else break;
        }
      }
      const C = s(m), O = i(m);
      return a(m), n(null, v, O, C, w, P, mo(O), M), w && (w.vnode.el = v.el, hs(w, v.el)), C;
    }, S = (m, v = "[", w = "]") => {
      let P = 0;
      for (; m; ) if (m = s(m), m && Gn(m) && (m.data === v && P++, m.data === w)) {
        if (P === 0) return s(m);
        P--;
      }
      return m;
    }, k = (m, v, w) => {
      const P = v.parentNode;
      P && P.replaceChild(m, v);
      let M = w;
      for (; M; ) M.vnode.el === v && (M.vnode.el = M.subTree.el = m), M = M.parent;
    }, _ = (m) => m.nodeType === 1 && m.tagName === "TEMPLATE";
    return [
      c,
      f
    ];
  }
  const qa = "data-allow-mismatch", ah = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };
  function go(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(qa); ) e = e.parentElement;
    const n = e && e.getAttribute(qa);
    if (n == null) return false;
    if (n === "") return true;
    {
      const r = n.split(",");
      return t === 0 && r.includes("children") ? true : n.split(",").includes(ah[t]);
    }
  }
  os().requestIdleCallback;
  os().cancelIdleCallback;
  function lh(e, t) {
    if (Gn(e) && e.data === "[") {
      let n = 1, r = e.nextSibling;
      for (; r; ) {
        if (r.nodeType === 1) {
          if (t(r) === false) break;
        } else if (Gn(r)) if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
        r = r.nextSibling;
      }
    } else t(e);
  }
  const _n = (e) => !!e.type.__asyncLoader;
  Ka = function(e) {
    te(e) && (e = {
      loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: o = 200, hydrate: s, timeout: i, suspensible: a = true, onError: l } = e;
    let u = null, c, f = 0;
    const p = () => (f++, u = null, d()), d = () => {
      let h;
      return u || (h = u = t().catch((g) => {
        if (g = g instanceof Error ? g : new Error(String(g)), l) return new Promise((S, k) => {
          l(g, () => S(p()), () => k(g), f + 1);
        });
        throw g;
      }).then((g) => h !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)));
    };
    return pe({
      name: "AsyncComponentWrapper",
      __asyncLoader: d,
      __asyncHydrate(h, g, S) {
        const k = s ? () => {
          const _ = s(S, (m) => lh(h, m));
          _ && (g.bum || (g.bum = [])).push(_);
        } : S;
        c ? k() : d().then(() => !g.isUnmounted && k());
      },
      get __asyncResolved() {
        return c;
      },
      setup() {
        const h = Le;
        if (sa(h), c) return () => Ms(c, h);
        const g = (m) => {
          u = null, ur(m, h, 13, !r);
        };
        if (a && h.suspense || or) return d().then((m) => () => Ms(m, h)).catch((m) => (g(m), () => r ? ge(r, {
          error: m
        }) : null));
        const S = He(false), k = He(), _ = He(!!o);
        return o && setTimeout(() => {
          _.value = false;
        }, o), i != null && setTimeout(() => {
          if (!S.value && !k.value) {
            const m = new Error(`Async component timed out after ${i}ms.`);
            g(m), k.value = m;
          }
        }, i), d().then(() => {
          S.value = true, h.parent && Zr(h.parent.vnode) && h.parent.update();
        }).catch((m) => {
          g(m), k.value = m;
        }), () => {
          if (S.value && c) return Ms(c, h);
          if (k.value && r) return ge(r, {
            error: k.value
          });
          if (n && !_.value) return ge(n);
        };
      }
    });
  };
  function Ms(e, t) {
    const { ref: n, props: r, children: o, ce: s } = t.vnode, i = ge(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i;
  }
  const Zr = (e) => e.type.__isKeepAlive, ch = {
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
        const M = _.component;
        u(_, m, v, 0, a), l(M.vnode, _, m, v, M, a, w, _.slotScopeIds, P), Oe(() => {
          M.isDeactivated = false, M.a && Yn(M.a);
          const N = _.props && _.props.onVnodeMounted;
          N && et(N, M.parent, _);
        }, a);
      }, r.deactivate = (_) => {
        const m = _.component;
        Uo(m.m), Uo(m.a), u(_, p, null, 1, a), Oe(() => {
          m.da && Yn(m.da);
          const v = _.props && _.props.onVnodeUnmounted;
          v && et(v, m.parent, _), m.isDeactivated = true;
        }, a);
      };
      function d(_) {
        $s(_), c(_, n, a, true);
      }
      function h(_) {
        o.forEach((m, v) => {
          const w = Si(m.type);
          w && !_(w) && g(v);
        });
      }
      function g(_) {
        const m = o.get(_);
        m && (!i || !gt(m, i)) ? d(m) : i && $s(i), o.delete(_), s.delete(_);
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
      const k = () => {
        S != null && (Vo(n.subTree.type) ? Oe(() => {
          o.set(S, yo(n.subTree));
        }, n.subTree.suspense) : o.set(S, yo(n.subTree)));
      };
      return St(k), ia(k), Dn(() => {
        o.forEach((_) => {
          const { subTree: m, suspense: v } = n, w = yo(m);
          if (_.type === w.type && _.key === w.key) {
            $s(w);
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
        if (!$n(m) || !(m.shapeFlag & 4) && !(m.shapeFlag & 128)) return i = null, m;
        let v = yo(m);
        if (v.type === Ce) return i = null, v;
        const w = v.type, P = Si(_n(v) ? v.type.__asyncResolved || {} : w), { include: M, exclude: N, max: C } = e;
        if (M && (!P || !Er(M, P)) || N && P && Er(N, P)) return v.shapeFlag &= -257, i = v, m;
        const O = v.key == null ? w : v.key, E = o.get(O);
        return v.el && (v = lt(v), m.shapeFlag & 128 && (m.ssContent = v)), S = O, E ? (v.el = E.el, v.component = E.component, v.transition && Sn(v, v.transition), v.shapeFlag |= 512, s.delete(O), s.add(O)) : (s.add(O), C && s.size > parseInt(C, 10) && g(s.values().next().value)), v.shapeFlag |= 256, i = v, Vo(m.type) ? m : v;
      };
    }
  }, uh = ch;
  function Er(e, t) {
    return G(e) ? e.some((n) => Er(n, t)) : ke(e) ? e.split(",").includes(t) : pp(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  function xu(e, t) {
    Lu(e, "a", t);
  }
  function Ou(e, t) {
    Lu(e, "da", t);
  }
  function Lu(e, t, n = Le) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (fs(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) Zr(o.parent.vnode) && fh(r, t, n, o), o = o.parent;
    }
  }
  function fh(e, t, n, r) {
    const o = fs(t, e, r, true);
    ds(() => {
      Ji(r[t], o);
    }, n);
  }
  function $s(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function yo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function fs(e, t, n = Le, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
        Jt();
        const a = In(n), l = _t(t, n, e, i);
        return a(), Qt(), l;
      });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  let tn, ph, hh, mh;
  tn = (e) => (t, n = Le) => {
    (!or || e === "sp") && fs(e, (...r) => t(...r), n);
  };
  Mu = tn("bm");
  St = tn("m");
  dh = tn("bu");
  ia = tn("u");
  Dn = tn("bum");
  ds = tn("um");
  ph = tn("sp");
  hh = tn("rtg");
  mh = tn("rtc");
  function $u(e, t = Le) {
    fs("ec", e, t);
  }
  const Iu = "components";
  function pi(e, t) {
    return Du(Iu, e, true, t) || e;
  }
  const Nu = Symbol.for("v-ndc");
  Je = function(e) {
    return ke(e) ? Du(Iu, e, false) || e : e || Nu;
  };
  function Du(e, t, n = true, r = false) {
    const o = Me || Le;
    if (o) {
      const s = o.type;
      {
        const a = Si(s, false);
        if (a && (a === t || a === ct(t) || a === rs(ct(t)))) return s;
      }
      const i = Ga(o[e] || s[e], t) || Ga(o.appContext[e], t);
      return !i && r ? s : i;
    }
  }
  function Ga(e, t) {
    return e && (e[t] || e[ct(t)] || e[rs(ct(t))]);
  }
  rr = function(e, t, n, r) {
    let o;
    const s = n, i = G(e);
    if (i || ke(e)) {
      const a = i && Kt(e);
      let l = false, u = false;
      a && (l = !pt(e), u = Yt(e), e = as(e)), o = new Array(e.length);
      for (let c = 0, f = e.length; c < f; c++) o[c] = t(l ? u ? No(Ne(e[c])) : Ne(e[c]) : e[c], c, void 0, s);
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
    if (Me.ce || Me.parent && _n(Me.parent) && Me.parent.ce) return t !== "default" && (n.name = t), q(), oe(we, null, [
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
    return e.some((t) => $n(t) ? !(t.type === Ce || t.type === we && !Bu(t.children)) : true) ? e : null;
  }
  const hi = (e) => e ? ff(e) ? ms(e) : hi(e.parent) : null, xr = Pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => hi(e.parent),
    $root: (e) => hi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Hu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ra(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = wt.bind(e.proxy)),
    $watch: (e) => Nh.bind(e)
  }), Is = (e, t) => e !== ae && !e.__isScriptSetup && ue(e, t), gh = {
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
          if (Is(r, t)) return i[t] = 1, r[t];
          if (o !== ae && ue(o, t)) return i[t] = 2, o[t];
          if ((u = e.propsOptions[0]) && ue(u, t)) return i[t] = 3, s[t];
          if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
          mi && (i[t] = 0);
        }
      }
      const c = xr[t];
      let f, p;
      if (c) return t === "$attrs" && je(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
      if (p = l.config.globalProperties, ue(p, t)) return p[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return Is(o, t) ? (o[t] = n, true) : r !== ae && ue(r, t) ? (r[t] = n, true) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
      let a;
      return !!n[i] || e !== ae && ue(e, i) || Is(t, i) || (a = s[0]) && ue(a, i) || ue(r, i) || ue(xr, i) || ue(o.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  nk = function() {
    return ju().slots;
  };
  rk = function() {
    return ju().attrs;
  };
  function ju() {
    const e = tt();
    return e.setupContext || (e.setupContext = pf(e));
  }
  function Vr(e) {
    return G(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  ok = function(e, t) {
    const n = Vr(e);
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
  sk = function(e, t) {
    return !e || !t ? e || t : G(e) && G(t) ? e.concat(t) : Pe({}, Vr(e), Vr(t));
  };
  ik = function(e) {
    const t = tt();
    let n = e();
    return _i(), Qi(n) && (n = n.catch((r) => {
      throw In(t), r;
    })), [
      n,
      () => In(t)
    ];
  };
  let mi = true;
  function yh(e) {
    const t = Hu(e), n = e.proxy, r = e.ctx;
    mi = false, t.beforeCreate && za(t.beforeCreate, e, "bc");
    const { data: o, computed: s, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: p, beforeUpdate: d, updated: h, activated: g, deactivated: S, beforeDestroy: k, beforeUnmount: _, destroyed: m, unmounted: v, render: w, renderTracked: P, renderTriggered: M, errorCaptured: N, serverPrefetch: C, expose: O, inheritAttrs: E, components: R, directives: D, filters: Z } = t;
    if (u && vh(u, r, null), i) for (const z in i) {
      const J = i[z];
      te(J) && (r[z] = J.bind(n));
    }
    if (o) {
      const z = o.call(n, n);
      ye(z) && (e.data = Et(z));
    }
    if (mi = true, s) for (const z in s) {
      const J = s[z], Ae = te(J) ? J.bind(n, n) : te(J.get) ? J.get.bind(n, n) : Dt, rn = !te(J) && te(J.set) ? J.set.bind(n) : Dt, Rt = K({
        get: Ae,
        set: rn
      });
      Object.defineProperty(r, z, {
        enumerable: true,
        configurable: true,
        get: () => Rt.value,
        set: (Qe) => Rt.value = Qe
      });
    }
    if (a) for (const z in a) Fu(a[z], r, n, z);
    if (l) {
      const z = te(l) ? l.call(n) : l;
      Reflect.ownKeys(z).forEach((J) => {
        Gt(J, z[J]);
      });
    }
    c && za(c, e, "c");
    function F(z, J) {
      G(J) ? J.forEach((Ae) => z(Ae.bind(n))) : J && z(J.bind(n));
    }
    if (F(Mu, f), F(St, p), F(dh, d), F(ia, h), F(xu, g), F(Ou, S), F($u, N), F(mh, P), F(hh, M), F(Dn, _), F(ds, v), F(ph, C), G(O)) if (O.length) {
      const z = e.exposed || (e.exposed = {});
      O.forEach((J) => {
        Object.defineProperty(z, J, {
          get: () => n[J],
          set: (Ae) => n[J] = Ae
        });
      });
    } else e.exposed || (e.exposed = {});
    w && e.render === Dt && (e.render = w), E != null && (e.inheritAttrs = E), R && (e.components = R), D && (e.directives = D), C && sa(e);
  }
  function vh(e, t, n = Dt) {
    G(e) && (e = gi(e));
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
  function za(e, t, n) {
    _t(G(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Fu(e, t, n, r) {
    let o = r.includes(".") ? tf(n, r) : () => n[r];
    if (ke(e)) {
      const s = t[e];
      te(s) && at(o, s);
    } else if (te(e)) at(o, e.bind(n));
    else if (ye(e)) if (G(e)) e.forEach((s) => Fu(s, t, n, r));
    else {
      const s = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(s) && at(o, s, e);
    }
  }
  function Hu(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach((u) => Ho(l, u, i, true)), Ho(l, t, i)), ye(t) && s.set(t, l), l;
  }
  function Ho(e, t, n, r = false) {
    const { mixins: o, extends: s } = t;
    s && Ho(e, s, n, true), o && o.forEach((i) => Ho(e, i, n, true));
    for (const i in t) if (!(r && i === "expose")) {
      const a = bh[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
    return e;
  }
  const bh = {
    data: Ja,
    props: Qa,
    emits: Qa,
    methods: Tr,
    computed: Tr,
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
    components: Tr,
    directives: Tr,
    watch: wh,
    provide: Ja,
    inject: _h
  };
  function Ja(e, t) {
    return t ? e ? function() {
      return Pe(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function _h(e, t) {
    return Tr(gi(e), gi(t));
  }
  function gi(e) {
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
  function Tr(e, t) {
    return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Qa(e, t) {
    return e ? G(e) && G(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Pe(/* @__PURE__ */ Object.create(null), Vr(e), Vr(t ?? {})) : t;
  }
  function wh(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Pe(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = qe(e[r], t[r]);
    return n;
  }
  function Uu() {
    return {
      app: null,
      config: {
        isNativeTag: fp,
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
  let Sh = 0;
  function kh(e, t) {
    return function(r, o = null) {
      te(r) || (r = Pe({}, r)), o != null && !ye(o) && (o = null);
      const s = Uu(), i = /* @__PURE__ */ new WeakSet(), a = [];
      let l = false;
      const u = s.app = {
        _uid: Sh++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: om,
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
            return d.appContext = s, p === true ? p = "svg" : p === false && (p = void 0), f && t ? t(d, c) : e(d, c, p), l = true, u._container = c, c.__vue_app__ = u, ms(d.component);
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
          const f = xn;
          xn = u;
          try {
            return c();
          } finally {
            xn = f;
          }
        }
      };
      return u;
    };
  }
  let xn = null;
  Gt = function(e, t) {
    if (Le) {
      let n = Le.provides;
      const r = Le.parent && Le.parent.provides;
      r === n && (n = Le.provides = Object.create(r)), n[e] = t;
    }
  };
  Te = function(e, t, n = false) {
    const r = Le || Me;
    if (r || xn) {
      const o = xn ? xn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && te(t) ? t.call(r && r.proxy) : t;
    }
  };
  fr = function() {
    return !!(Le || Me || xn);
  };
  const Vu = {}, Wu = () => Object.create(Vu), qu = (e) => Object.getPrototypeOf(e) === Vu;
  function Eh(e, t, n, r = false) {
    const o = {}, s = Wu();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Ku(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Nt(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
  }
  function Th(e, t, n, r) {
    const { props: o, attrs: s, vnode: { patchFlag: i } } = e, a = ie(o), [l] = e.propsOptions;
    let u = false;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let p = c[f];
          if (ps(e.emitsOptions, p)) continue;
          const d = t[p];
          if (l) if (ue(s, p)) d !== s[p] && (s[p] = d, u = true);
          else {
            const h = ct(p);
            o[h] = yi(l, a, h, d, e, false);
          }
          else d !== s[p] && (s[p] = d, u = true);
        }
      }
    } else {
      Ku(e, t, o, s) && (u = true);
      let c;
      for (const f in a) (!t || !ue(t, f) && ((c = Zt(f)) === f || !ue(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = yi(l, a, f, void 0, e, true)) : delete o[f]);
      if (s !== a) for (const f in s) (!t || !ue(t, f)) && (delete s[f], u = true);
    }
    u && Ut(e.attrs, "set", "");
  }
  function Ku(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = false, a;
    if (t) for (let l in t) {
      if (Qn(l)) continue;
      const u = t[l];
      let c;
      o && ue(o, c = ct(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : ps(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = true);
    }
    if (s) {
      const l = ie(n), u = a || ae;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        n[f] = yi(o, l, f, u[f], e, !ue(u, f));
      }
    }
    return i;
  }
  function yi(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
      const a = ue(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && te(l)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const c = In(o);
            r = u[n] = l.call(null, t), c();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !a ? r = false : i[1] && (r === "" || r === Zt(n)) && (r = true));
    }
    return r;
  }
  const Rh = /* @__PURE__ */ new WeakMap();
  function Gu(e, t, n = false) {
    const r = n ? Rh : t.propsCache, o = r.get(e);
    if (o) return o;
    const s = e.props, i = {}, a = [];
    let l = false;
    if (!te(e)) {
      const c = (f) => {
        l = true;
        const [p, d] = Gu(f, t, true);
        Pe(i, p), d && a.push(...d);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!s && !l) return ye(e) && r.set(e, zn), zn;
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
        if (G(h)) for (let k = 0; k < h.length; ++k) {
          const _ = h[k], m = te(_) && _.name;
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
    return e[0] !== "$" && !Qn(e);
  }
  const aa = (e) => e[0] === "_" || e === "$stable", la = (e) => G(e) ? e.map(it) : [
    it(e)
  ], Ch = (e, t, n) => {
    if (t._n) return t;
    const r = $e((...o) => la(t(...o)), n);
    return r._c = false, r;
  }, zu = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (aa(o)) continue;
      const s = e[o];
      if (te(s)) t[o] = Ch(o, s, r);
      else if (s != null) {
        const i = la(s);
        t[o] = () => i;
      }
    }
  }, Ju = (e, t) => {
    const n = la(t);
    e.slots.default = () => n;
  }, Qu = (e, t, n) => {
    for (const r in t) (n || !aa(r)) && (e[r] = t[r]);
  }, Ph = (e, t, n) => {
    const r = e.slots = Wu();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Qu(r, t, n), n && Vc(r, "_", o, true)) : zu(t, r);
    } else t && Ju(e, t);
  }, Ah = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = true, i = ae;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? s = false : Qu(o, t, n) : (s = !t.$stable, zu(t, o)), i = t;
    } else t && (Ju(e, t), i = {
      default: 1
    });
    if (s) for (const a in o) !aa(a) && i[a] == null && delete o[a];
  }, Oe = sf;
  function xh(e) {
    return Yu(e);
  }
  function Oh(e) {
    return Yu(e, ih);
  }
  function Yu(e, t) {
    const n = os();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: p, setScopeId: d = Dt, insertStaticContent: h } = e, g = (y, b, T, L = null, A = null, $ = null, H = void 0, j = null, B = !!b.dynamicChildren) => {
      if (y === b) return;
      y && !gt(y, b) && (L = x(y), Qe(y, A, $, true), y = null), b.patchFlag === -2 && (B = false, b.dynamicChildren = null);
      const { type: I, ref: X, shapeFlag: V } = b;
      switch (I) {
        case On:
          S(y, b, T, L);
          break;
        case Ce:
          k(y, b, T, L);
          break;
        case Or:
          y == null && _(b, T, L, H);
          break;
        case we:
          R(y, b, T, L, A, $, H, j, B);
          break;
        default:
          V & 1 ? w(y, b, T, L, A, $, H, j, B) : V & 6 ? D(y, b, T, L, A, $, H, j, B) : (V & 64 || V & 128) && I.process(y, b, T, L, A, $, H, j, B, Q);
      }
      X != null && A && Ur(X, y && y.ref, $, b || y, !b);
    }, S = (y, b, T, L) => {
      if (y == null) r(b.el = a(b.children), T, L);
      else {
        const A = b.el = y.el;
        b.children !== y.children && u(A, b.children);
      }
    }, k = (y, b, T, L) => {
      y == null ? r(b.el = l(b.children || ""), T, L) : b.el = y.el;
    }, _ = (y, b, T, L) => {
      [y.el, y.anchor] = h(y.children, b, T, L, y.el, y.anchor);
    }, m = ({ el: y, anchor: b }, T, L) => {
      let A;
      for (; y && y !== b; ) A = p(y), r(y, T, L), y = A;
      r(b, T, L);
    }, v = ({ el: y, anchor: b }) => {
      let T;
      for (; y && y !== b; ) T = p(y), o(y), y = T;
      o(b);
    }, w = (y, b, T, L, A, $, H, j, B) => {
      b.type === "svg" ? H = "svg" : b.type === "math" && (H = "mathml"), y == null ? P(b, T, L, A, $, H, j, B) : C(y, b, A, $, H, j, B);
    }, P = (y, b, T, L, A, $, H, j) => {
      let B, I;
      const { props: X, shapeFlag: V, transition: Y, dirs: ne } = y;
      if (B = y.el = i(y.type, $, X && X.is, X), V & 8 ? c(B, y.children) : V & 16 && N(y.children, B, null, L, A, Ns(y, $), H, j), ne && Mt(y, null, L, "created"), M(B, y, y.scopeId, H, L), X) {
        for (const be in X) be !== "value" && !Qn(be) && s(B, be, null, X[be], $, L);
        "value" in X && s(B, "value", null, X.value, $), (I = X.onVnodeBeforeMount) && et(I, L, y);
      }
      ne && Mt(y, null, L, "beforeMount");
      const se = Xu(A, Y);
      se && Y.beforeEnter(B), r(B, b, T), ((I = X && X.onVnodeMounted) || se || ne) && Oe(() => {
        I && et(I, L, y), se && Y.enter(B), ne && Mt(y, null, L, "mounted");
      }, A);
    }, M = (y, b, T, L, A) => {
      if (T && d(y, T), L) for (let $ = 0; $ < L.length; $++) d(y, L[$]);
      if (A) {
        let $ = A.subTree;
        if (b === $ || Vo($.type) && ($.ssContent === b || $.ssFallback === b)) {
          const H = A.vnode;
          M(y, H, H.scopeId, H.slotScopeIds, A.parent);
        }
      }
    }, N = (y, b, T, L, A, $, H, j, B = 0) => {
      for (let I = B; I < y.length; I++) {
        const X = y[I] = j ? dn(y[I]) : it(y[I]);
        g(null, X, b, T, L, A, $, H, j);
      }
    }, C = (y, b, T, L, A, $, H) => {
      const j = b.el = y.el;
      let { patchFlag: B, dynamicChildren: I, dirs: X } = b;
      B |= y.patchFlag & 16;
      const V = y.props || ae, Y = b.props || ae;
      let ne;
      if (T && kn(T, false), (ne = Y.onVnodeBeforeUpdate) && et(ne, T, b, y), X && Mt(b, y, T, "beforeUpdate"), T && kn(T, true), (V.innerHTML && Y.innerHTML == null || V.textContent && Y.textContent == null) && c(j, ""), I ? O(y.dynamicChildren, I, j, T, L, Ns(b, A), $) : H || J(y, b, j, null, T, L, Ns(b, A), $, false), B > 0) {
        if (B & 16) E(j, V, Y, T, A);
        else if (B & 2 && V.class !== Y.class && s(j, "class", null, Y.class, A), B & 4 && s(j, "style", V.style, Y.style, A), B & 8) {
          const se = b.dynamicProps;
          for (let be = 0; be < se.length; be++) {
            const fe = se[be], nt = V[fe], De = Y[fe];
            (De !== nt || fe === "value") && s(j, fe, nt, De, A, T);
          }
        }
        B & 1 && y.children !== b.children && c(j, b.children);
      } else !H && I == null && E(j, V, Y, T, A);
      ((ne = Y.onVnodeUpdated) || X) && Oe(() => {
        ne && et(ne, T, b, y), X && Mt(b, y, T, "updated");
      }, L);
    }, O = (y, b, T, L, A, $, H) => {
      for (let j = 0; j < b.length; j++) {
        const B = y[j], I = b[j], X = B.el && (B.type === we || !gt(B, I) || B.shapeFlag & 70) ? f(B.el) : T;
        g(B, I, X, null, L, A, $, H, true);
      }
    }, E = (y, b, T, L, A) => {
      if (b !== T) {
        if (b !== ae) for (const $ in b) !Qn($) && !($ in T) && s(y, $, b[$], null, A, L);
        for (const $ in T) {
          if (Qn($)) continue;
          const H = T[$], j = b[$];
          H !== j && $ !== "value" && s(y, $, j, H, A, L);
        }
        "value" in T && s(y, "value", b.value, T.value, A);
      }
    }, R = (y, b, T, L, A, $, H, j, B) => {
      const I = b.el = y ? y.el : a(""), X = b.anchor = y ? y.anchor : a("");
      let { patchFlag: V, dynamicChildren: Y, slotScopeIds: ne } = b;
      ne && (j = j ? j.concat(ne) : ne), y == null ? (r(I, T, L), r(X, T, L), N(b.children || [], T, X, A, $, H, j, B)) : V > 0 && V & 64 && Y && y.dynamicChildren ? (O(y.dynamicChildren, Y, T, A, $, H, j), (b.key != null || A && b === A.subTree) && ca(y, b, true)) : J(y, b, T, X, A, $, H, j, B);
    }, D = (y, b, T, L, A, $, H, j, B) => {
      b.slotScopeIds = j, y == null ? b.shapeFlag & 512 ? A.ctx.activate(b, T, L, H, B) : Z(b, T, L, A, $, H, B) : ee(y, b, B);
    }, Z = (y, b, T, L, A, $, H) => {
      const j = y.component = Xh(y, L, A);
      if (Zr(y) && (j.ctx.renderer = Q), Zh(j, false, H), j.asyncDep) {
        if (A && A.registerDep(j, F, H), !y.el) {
          const B = j.subTree = ge(Ce);
          k(null, B, b, T);
        }
      } else F(j, y, b, T, A, $, H);
    }, ee = (y, b, T) => {
      const L = b.component = y.component;
      if (Hh(y, b, T)) if (L.asyncDep && !L.asyncResolved) {
        z(L, b, T);
        return;
      } else L.next = b, L.update();
      else b.el = y.el, L.vnode = b;
    }, F = (y, b, T, L, A, $, H) => {
      const j = () => {
        if (y.isMounted) {
          let { next: V, bu: Y, u: ne, parent: se, vnode: be } = y;
          {
            const rt = Zu(y);
            if (rt) {
              V && (V.el = be.el, z(y, V, H)), rt.asyncDep.then(() => {
                y.isUnmounted || j();
              });
              return;
            }
          }
          let fe = V, nt;
          kn(y, false), V ? (V.el = be.el, z(y, V, H)) : V = be, Y && Yn(Y), (nt = V.props && V.props.onVnodeBeforeUpdate) && et(nt, se, V, be), kn(y, true);
          const De = Ds(y), ht = y.subTree;
          y.subTree = De, g(ht, De, f(ht.el), x(ht), y, A, $), V.el = De.el, fe === null && hs(y, De.el), ne && Oe(ne, A), (nt = V.props && V.props.onVnodeUpdated) && Oe(() => et(nt, se, V, be), A);
        } else {
          let V;
          const { el: Y, props: ne } = b, { bm: se, m: be, parent: fe, root: nt, type: De } = y, ht = _n(b);
          if (kn(y, false), se && Yn(se), !ht && (V = ne && ne.onVnodeBeforeMount) && et(V, fe, b), kn(y, true), Y && Ee) {
            const rt = () => {
              y.subTree = Ds(y), Ee(Y, y.subTree, y, A, null);
            };
            ht && De.__asyncHydrate ? De.__asyncHydrate(Y, y, rt) : rt();
          } else {
            nt.ce && nt.ce._injectChildStyle(De);
            const rt = y.subTree = Ds(y);
            g(null, rt, T, L, y, A, $), b.el = rt.el;
          }
          if (be && Oe(be, A), !ht && (V = ne && ne.onVnodeMounted)) {
            const rt = b;
            Oe(() => et(V, fe, rt), A);
          }
          (b.shapeFlag & 256 || fe && _n(fe.vnode) && fe.vnode.shapeFlag & 256) && y.a && Oe(y.a, A), y.isMounted = true, b = T = L = null;
        }
      };
      y.scope.on();
      const B = y.effect = new Yc(j);
      y.scope.off();
      const I = y.update = B.run.bind(B), X = y.job = B.runIfDirty.bind(B);
      X.i = y, X.id = y.uid, B.scheduler = () => ra(X), kn(y, true), I();
    }, z = (y, b, T) => {
      b.component = y;
      const L = y.vnode.props;
      y.vnode = b, y.next = null, Th(y, b.props, L, T), Ah(y, b.children, T), Jt(), ja(y), Qt();
    }, J = (y, b, T, L, A, $, H, j, B = false) => {
      const I = y && y.children, X = y ? y.shapeFlag : 0, V = b.children, { patchFlag: Y, shapeFlag: ne } = b;
      if (Y > 0) {
        if (Y & 128) {
          rn(I, V, T, L, A, $, H, j, B);
          return;
        } else if (Y & 256) {
          Ae(I, V, T, L, A, $, H, j, B);
          return;
        }
      }
      ne & 8 ? (X & 16 && ut(I, A, $), V !== I && c(T, V)) : X & 16 ? ne & 16 ? rn(I, V, T, L, A, $, H, j, B) : ut(I, A, $, true) : (X & 8 && c(T, ""), ne & 16 && N(V, T, L, A, $, H, j, B));
    }, Ae = (y, b, T, L, A, $, H, j, B) => {
      y = y || zn, b = b || zn;
      const I = y.length, X = b.length, V = Math.min(I, X);
      let Y;
      for (Y = 0; Y < V; Y++) {
        const ne = b[Y] = B ? dn(b[Y]) : it(b[Y]);
        g(y[Y], ne, T, null, A, $, H, j, B);
      }
      I > X ? ut(y, A, $, true, false, V) : N(b, T, L, A, $, H, j, B, V);
    }, rn = (y, b, T, L, A, $, H, j, B) => {
      let I = 0;
      const X = b.length;
      let V = y.length - 1, Y = X - 1;
      for (; I <= V && I <= Y; ) {
        const ne = y[I], se = b[I] = B ? dn(b[I]) : it(b[I]);
        if (gt(ne, se)) g(ne, se, T, null, A, $, H, j, B);
        else break;
        I++;
      }
      for (; I <= V && I <= Y; ) {
        const ne = y[V], se = b[Y] = B ? dn(b[Y]) : it(b[Y]);
        if (gt(ne, se)) g(ne, se, T, null, A, $, H, j, B);
        else break;
        V--, Y--;
      }
      if (I > V) {
        if (I <= Y) {
          const ne = Y + 1, se = ne < X ? b[ne].el : L;
          for (; I <= Y; ) g(null, b[I] = B ? dn(b[I]) : it(b[I]), T, se, A, $, H, j, B), I++;
        }
      } else if (I > Y) for (; I <= V; ) Qe(y[I], A, $, true), I++;
      else {
        const ne = I, se = I, be = /* @__PURE__ */ new Map();
        for (I = se; I <= Y; I++) {
          const ot = b[I] = B ? dn(b[I]) : it(b[I]);
          ot.key != null && be.set(ot.key, I);
        }
        let fe, nt = 0;
        const De = Y - se + 1;
        let ht = false, rt = 0;
        const vr = new Array(De);
        for (I = 0; I < De; I++) vr[I] = 0;
        for (I = ne; I <= V; I++) {
          const ot = y[I];
          if (nt >= De) {
            Qe(ot, A, $, true);
            continue;
          }
          let Ct;
          if (ot.key != null) Ct = be.get(ot.key);
          else for (fe = se; fe <= Y; fe++) if (vr[fe - se] === 0 && gt(ot, b[fe])) {
            Ct = fe;
            break;
          }
          Ct === void 0 ? Qe(ot, A, $, true) : (vr[Ct - se] = I + 1, Ct >= rt ? rt = Ct : ht = true, g(ot, b[Ct], T, null, A, $, H, j, B), nt++);
        }
        const Ma = ht ? Lh(vr) : zn;
        for (fe = Ma.length - 1, I = De - 1; I >= 0; I--) {
          const ot = se + I, Ct = b[ot], $a = ot + 1 < X ? b[ot + 1].el : L;
          vr[I] === 0 ? g(null, Ct, T, $a, A, $, H, j, B) : ht && (fe < 0 || I !== Ma[fe] ? Rt(Ct, T, $a, 2) : fe--);
        }
      }
    }, Rt = (y, b, T, L, A = null) => {
      const { el: $, type: H, transition: j, children: B, shapeFlag: I } = y;
      if (I & 6) {
        Rt(y.component.subTree, b, T, L);
        return;
      }
      if (I & 128) {
        y.suspense.move(b, T, L);
        return;
      }
      if (I & 64) {
        H.move(y, b, T, Q);
        return;
      }
      if (H === we) {
        r($, b, T);
        for (let V = 0; V < B.length; V++) Rt(B[V], b, T, L);
        r(y.anchor, b, T);
        return;
      }
      if (H === Or) {
        m(y, b, T);
        return;
      }
      if (L !== 2 && I & 1 && j) if (L === 0) j.beforeEnter($), r($, b, T), Oe(() => j.enter($), A);
      else {
        const { leave: V, delayLeave: Y, afterLeave: ne } = j, se = () => {
          y.ctx.isUnmounted ? o($) : r($, b, T);
        }, be = () => {
          V($, () => {
            se(), ne && ne();
          });
        };
        Y ? Y($, se, be) : be();
      }
      else r($, b, T);
    }, Qe = (y, b, T, L = false, A = false) => {
      const { type: $, props: H, ref: j, children: B, dynamicChildren: I, shapeFlag: X, patchFlag: V, dirs: Y, cacheIndex: ne } = y;
      if (V === -2 && (A = false), j != null && (Jt(), Ur(j, null, T, y, true), Qt()), ne != null && (b.renderCache[ne] = void 0), X & 256) {
        b.ctx.deactivate(y);
        return;
      }
      const se = X & 1 && Y, be = !_n(y);
      let fe;
      if (be && (fe = H && H.onVnodeBeforeUnmount) && et(fe, b, y), X & 6) lo(y.component, T, L);
      else {
        if (X & 128) {
          y.suspense.unmount(T, L);
          return;
        }
        se && Mt(y, null, b, "beforeUnmount"), X & 64 ? y.type.remove(y, b, T, Q, L) : I && !I.hasOnce && ($ !== we || V > 0 && V & 64) ? ut(I, b, T, false, true) : ($ === we && V & 384 || !A && X & 16) && ut(B, b, T), L && jn(y);
      }
      (be && (fe = H && H.onVnodeUnmounted) || se) && Oe(() => {
        fe && et(fe, b, y), se && Mt(y, null, b, "unmounted");
      }, T);
    }, jn = (y) => {
      const { type: b, el: T, anchor: L, transition: A } = y;
      if (b === we) {
        Fn(T, L);
        return;
      }
      if (b === Or) {
        v(y);
        return;
      }
      const $ = () => {
        o(T), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (y.shapeFlag & 1 && A && !A.persisted) {
        const { leave: H, delayLeave: j } = A, B = () => H(T, $);
        j ? j(y.el, $, B) : B();
      } else $();
    }, Fn = (y, b) => {
      let T;
      for (; y !== b; ) T = p(y), o(y), y = T;
      o(b);
    }, lo = (y, b, T) => {
      const { bum: L, scope: A, job: $, subTree: H, um: j, m: B, a: I, parent: X, slots: { __: V } } = y;
      Uo(B), Uo(I), L && Yn(L), X && G(V) && V.forEach((Y) => {
        X.renderCache[Y] = void 0;
      }), A.stop(), $ && ($.flags |= 8, Qe(H, y, b, T)), j && Oe(j, b), Oe(() => {
        y.isUnmounted = true;
      }, b), b && b.pendingBranch && !b.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve());
    }, ut = (y, b, T, L = false, A = false, $ = 0) => {
      for (let H = $; H < y.length; H++) Qe(y[H], b, T, L, A);
    }, x = (y) => {
      if (y.shapeFlag & 6) return x(y.component.subTree);
      if (y.shapeFlag & 128) return y.suspense.next();
      const b = p(y.anchor || y.el), T = b && b[wu];
      return T ? p(T) : b;
    };
    let W = false;
    const U = (y, b, T) => {
      y == null ? b._vnode && Qe(b._vnode, null, null, true) : g(b._vnode || null, y, b, null, null, null, T), b._vnode = y, W || (W = true, ja(), jo(), W = false);
    }, Q = {
      p: g,
      um: Qe,
      m: Rt,
      r: jn,
      mt: Z,
      mc: N,
      pc: J,
      pbc: O,
      n: x,
      o: e
    };
    let le, Ee;
    return t && ([le, Ee] = t(Q)), {
      render: U,
      hydrate: le,
      createApp: kh(U, le)
    };
  }
  function Ns({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function kn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Xu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ca(e, t, n = false) {
    const r = e.children, o = t.children;
    if (G(r) && G(o)) for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = dn(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && ca(i, a)), a.type === On && (a.el = i.el), a.type === Ce && !a.el && (a.el = i.el);
    }
  }
  function Lh(e) {
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
  function Zu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Zu(t);
  }
  function Uo(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Mh = Symbol.for("v-scx"), $h = () => Te(Mh);
  ef = function(e, t) {
    return eo(e, null, t);
  };
  ak = function(e, t) {
    return eo(e, null, {
      flush: "post"
    });
  };
  Ih = function(e, t) {
    return eo(e, null, {
      flush: "sync"
    });
  };
  at = function(e, t, n) {
    return eo(e, t, n);
  };
  function eo(e, t, n = ae) {
    const { immediate: r, deep: o, flush: s, once: i } = n, a = Pe({}, n), l = t && r || !t && s !== "post";
    let u;
    if (or) {
      if (s === "sync") {
        const d = $h();
        u = d.__watcherHandles || (d.__watcherHandles = []);
      } else if (!l) {
        const d = () => {
        };
        return d.stop = Dt, d.resume = Dt, d.pause = Dt, d;
      }
    }
    const c = Le;
    a.call = (d, h, g) => _t(d, c, h, g);
    let f = false;
    s === "post" ? a.scheduler = (d) => {
      Oe(d, c && c.suspense);
    } : s !== "sync" && (f = true, a.scheduler = (d, h) => {
      h ? d() : ra(d);
    }), a.augmentJob = (d) => {
      t && (d.flags |= 4), f && (d.flags |= 2, c && (d.id = c.uid, d.i = c));
    };
    const p = Xp(e, t, a);
    return or && (u ? u.push(p) : l && p()), p;
  }
  function Nh(e, t, n) {
    const r = this.proxy, o = ke(e) ? e.includes(".") ? tf(r, e) : () => r[e] : e.bind(r, r);
    let s;
    te(t) ? s = t : (s = t.handler, n = t);
    const i = In(this), a = eo(o, s.bind(r), n);
    return i(), a;
  }
  function tf(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  lk = function(e, t, n = ae) {
    const r = tt(), o = ct(t), s = Zt(t), i = nf(e, o), a = us((l, u) => {
      let c, f = ae, p;
      return Ih(() => {
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
  const nf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ct(t)}Modifiers`] || e[`${Zt(t)}Modifiers`];
  function Dh(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ae;
    let o = n;
    const s = t.startsWith("update:"), i = s && nf(r, t.slice(7));
    i && (i.trim && (o = n.map((c) => ke(c) ? c.trim() : c)), i.number && (o = n.map(ai)));
    let a, l = r[a = Cs(t)] || r[a = Cs(ct(t))];
    !l && s && (l = r[a = Cs(Zt(t))]), l && _t(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, _t(u, e, 6, o);
    }
  }
  function rf(e, t, n = false) {
    const r = t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {}, a = false;
    if (!te(e)) {
      const l = (u) => {
        const c = rf(u, t, true);
        c && (a = true, Pe(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !s && !a ? (ye(e) && r.set(e, null), null) : (G(s) ? s.forEach((l) => i[l] = null) : Pe(i, s), ye(e) && r.set(e, i), i);
  }
  function ps(e, t) {
    return !e || !Jr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, Zt(t)) || ue(e, t));
  }
  function Ds(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: p, setupState: d, ctx: h, inheritAttrs: g } = e, S = Fo(e);
    let k, _;
    try {
      if (n.shapeFlag & 4) {
        const v = o || r, w = v;
        k = it(u.call(w, v, c, f, d, p, h)), _ = a;
      } else {
        const v = t;
        k = it(v.length > 1 ? v(f, {
          attrs: a,
          slots: i,
          emit: l
        }) : v(f, null)), _ = t.props ? a : jh(a);
      }
    } catch (v) {
      Lr.length = 0, ur(v, e, 1), k = ge(Ce);
    }
    let m = k;
    if (_ && g !== false) {
      const v = Object.keys(_), { shapeFlag: w } = m;
      v.length && w & 7 && (s && v.some(zi) && (_ = Fh(_, s)), m = lt(m, _, false, true));
    }
    return n.dirs && (m = lt(m, null, false, true), m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs), n.transition && Sn(m, n.transition), k = m, Fo(S), k;
  }
  function Bh(e, t = true) {
    let n;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if ($n(o)) {
        if (o.type !== Ce || o.children === "v-if") {
          if (n) return;
          n = o;
        }
      } else return;
    }
    return n;
  }
  const jh = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Jr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Fh = (e, t) => {
    const n = {};
    for (const r in e) (!zi(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function Hh(e, t, n) {
    const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && l >= 0) {
      if (l & 1024) return true;
      if (l & 16) return r ? Xa(r, i, u) : !!i;
      if (l & 8) {
        const c = t.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const p = c[f];
          if (i[p] !== r[p] && !ps(u, p)) return true;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? true : r === i ? false : r ? i ? Xa(r, i, u) : true : !!i;
    return false;
  }
  function Xa(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (t[s] !== e[s] && !ps(n, s)) return true;
    }
    return false;
  }
  function hs({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const Vo = (e) => e.__isSuspense;
  let vi = 0;
  const Uh = {
    name: "Suspense",
    __isSuspense: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      if (e == null) Vh(t, n, r, o, s, i, a, l, u);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return;
        }
        Wh(e, t, n, r, o, i, a, l, u);
      }
    },
    hydrate: qh,
    normalize: Kh
  }, ua = Uh;
  function Wr(e, t) {
    const n = e.props && e.props[t];
    te(n) && n();
  }
  function Vh(e, t, n, r, o, s, i, a, l) {
    const { p: u, o: { createElement: c } } = l, f = c("div"), p = e.suspense = of(e, o, r, t, f, n, s, i, a, l);
    u(null, p.pendingBranch = e.ssContent, f, null, r, p, s, i), p.deps > 0 ? (Wr(e, "onPending"), Wr(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, s, i), er(p, e.ssFallback)) : p.resolve(false, true);
  }
  function Wh(e, t, n, r, o, s, i, a, { p: l, um: u, o: { createElement: c } }) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const p = t.ssContent, d = t.ssFallback, { activeBranch: h, pendingBranch: g, isInFallback: S, isHydrating: k } = f;
    if (g) f.pendingBranch = p, gt(p, g) ? (l(g, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : S && (k || (l(h, d, n, r, o, null, s, i, a), er(f, d)))) : (f.pendingId = vi++, k ? (f.isHydrating = false, f.activeBranch = g) : u(g, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), S ? (l(null, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : (l(h, d, n, r, o, null, s, i, a), er(f, d))) : h && gt(p, h) ? (l(h, p, n, r, o, f, s, i, a), f.resolve(true)) : (l(null, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
    else if (h && gt(p, h)) l(h, p, n, r, o, f, s, i, a), er(f, p);
    else if (Wr(t, "onPending"), f.pendingBranch = p, p.shapeFlag & 512 ? f.pendingId = p.component.suspenseId : f.pendingId = vi++, l(null, p, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0) f.resolve();
    else {
      const { timeout: _, pendingId: m } = f;
      _ > 0 ? setTimeout(() => {
        f.pendingId === m && f.fallback(d);
      }, _) : _ === 0 && f.fallback(d);
    }
  }
  function of(e, t, n, r, o, s, i, a, l, u, c = false) {
    const { p: f, m: p, um: d, n: h, o: { parentNode: g, remove: S } } = u;
    let k;
    const _ = Gh(e);
    _ && t && t.pendingBranch && (k = t.pendingId, t.deps++);
    const m = e.props ? Wc(e.props.timeout) : void 0, v = s, w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: o,
      deps: 0,
      pendingId: vi++,
      timeout: typeof m == "number" ? m : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: false,
      effects: [],
      resolve(P = false, M = false) {
        const { vnode: N, activeBranch: C, pendingBranch: O, pendingId: E, effects: R, parentComponent: D, container: Z } = w;
        let ee = false;
        w.isHydrating ? w.isHydrating = false : P || (ee = C && O.transition && O.transition.mode === "out-in", ee && (C.transition.afterLeave = () => {
          E === w.pendingId && (p(O, Z, s === v ? h(C) : s, 0), fi(R));
        }), C && (g(C.el) === Z && (s = h(C)), d(C, D, w, true)), ee || p(O, Z, s, 0)), er(w, O), w.pendingBranch = null, w.isInFallback = false;
        let F = w.parent, z = false;
        for (; F; ) {
          if (F.pendingBranch) {
            F.effects.push(...R), z = true;
            break;
          }
          F = F.parent;
        }
        !z && !ee && fi(R), w.effects = [], _ && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), Wr(N, "onResolve");
      },
      fallback(P) {
        if (!w.pendingBranch) return;
        const { vnode: M, activeBranch: N, parentComponent: C, container: O, namespace: E } = w;
        Wr(M, "onFallback");
        const R = h(N), D = () => {
          w.isInFallback && (f(null, P, O, R, C, null, E, a, l), er(w, P));
        }, Z = P.transition && P.transition.mode === "out-in";
        Z && (N.transition.afterLeave = D), w.isInFallback = true, d(N, C, null, true), Z || D();
      },
      move(P, M, N) {
        w.activeBranch && p(w.activeBranch, P, M, N), w.container = P;
      },
      next() {
        return w.activeBranch && h(w.activeBranch);
      },
      registerDep(P, M, N) {
        const C = !!w.pendingBranch;
        C && w.deps++;
        const O = P.vnode.el;
        P.asyncDep.catch((E) => {
          ur(E, P, 0);
        }).then((E) => {
          if (P.isUnmounted || w.isUnmounted || w.pendingId !== P.suspenseId) return;
          P.asyncResolved = true;
          const { vnode: R } = P;
          wi(P, E), O && (R.el = O);
          const D = !O && P.subTree.el;
          M(P, R, g(O || P.subTree.el), O ? null : h(P.subTree), w, i, N), D && S(D), hs(P, R.el), C && --w.deps === 0 && w.resolve();
        });
      },
      unmount(P, M) {
        w.isUnmounted = true, w.activeBranch && d(w.activeBranch, n, P, M), w.pendingBranch && d(w.pendingBranch, n, P, M);
      }
    };
    return w;
  }
  function qh(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = of(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, true), c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(false, true), c;
  }
  function Kh(e) {
    const { shapeFlag: t, children: n } = e, r = t & 32;
    e.ssContent = Za(r ? n.default : n), e.ssFallback = r ? Za(n.fallback) : ge(Ce);
  }
  function Za(e) {
    let t;
    if (te(e)) {
      const n = Mn && e._c;
      n && (e._d = false, q()), e = e(), n && (e._d = true, t = Fe, af());
    }
    return G(e) && (e = Bh(e)), e = it(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function sf(e, t) {
    t && t.pendingBranch ? G(e) ? t.effects.push(...e) : t.effects.push(e) : fi(e);
  }
  function er(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let o = t.el;
    for (; !o && t.component; ) t = t.component.subTree, o = t.el;
    n.el = o, r && r.subTree === n && (r.vnode.el = o, hs(r, o));
  }
  function Gh(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  let On, Or, Lr;
  we = Symbol.for("v-fgt");
  On = Symbol.for("v-txt");
  Ce = Symbol.for("v-cmt");
  Or = Symbol.for("v-stc");
  Lr = [];
  let Fe = null;
  q = function(e = false) {
    Lr.push(Fe = e ? null : []);
  };
  function af() {
    Lr.pop(), Fe = Lr[Lr.length - 1] || null;
  }
  let Mn = 1;
  function el(e, t = false) {
    Mn += e, e < 0 && Fe && t && (Fe.hasOnce = true);
  }
  function lf(e) {
    return e.dynamicChildren = Mn > 0 ? Fe || zn : null, af(), Mn > 0 && Fe && Fe.push(e), e;
  }
  de = function(e, t, n, r, o, s) {
    return lf(st(e, t, n, r, o, s, true));
  };
  oe = function(e, t, n, r, o) {
    return lf(ge(e, t, n, r, o, true));
  };
  function $n(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function gt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const cf = ({ key: e }) => e ?? null, Oo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ke(e) || Se(e) || te(e) ? {
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
      key: t && cf(t),
      ref: t && Oo(t),
      scopeId: _u,
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
    return a ? (fa(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ke(n) ? 8 : 16), Mn > 0 && !i && Fe && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Fe.push(l), l;
  };
  ge = zh;
  function zh(e, t = null, n = null, r = 0, o = null, s = false) {
    if ((!e || e === Nu) && (e = Ce), $n(e)) {
      const a = lt(e, t, true);
      return n && fa(a, n), Mn > 0 && !s && Fe && (a.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = a : Fe.push(a)), a.patchFlag = -2, a;
    }
    if (nm(e) && (e = e.__vccOpts), t) {
      t = uf(t);
      let { class: a, style: l } = t;
      a && !ke(a) && (t.class = Qr(a)), ye(l) && (ta(l) && !G(l) && (l = Pe({}, l)), t.style = ss(l));
    }
    const i = ke(e) ? 1 : Vo(e) ? 128 : Su(e) ? 64 : ye(e) ? 4 : te(e) ? 2 : 0;
    return st(e, t, n, r, o, i, s, true);
  }
  uf = function(e) {
    return e ? ta(e) || qu(e) ? Pe({}, e) : e : null;
  };
  lt = function(e, t, n = false, r = false) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? to(o || {}, t) : o, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && cf(u),
      ref: t && t.ref ? n && s ? G(s) ? s.concat(Oo(t)) : [
        s,
        Oo(t)
      ] : Oo(t) : s,
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
    return l && r && Sn(c, l.clone(c)), c;
  };
  dr = function(e = " ", t = 0) {
    return ge(On, null, e, t);
  };
  Jh = function(e, t) {
    const n = ge(Or, null, e);
    return n.staticCount = t, n;
  };
  nn = function(e = "", t = false) {
    return t ? (q(), oe(Ce, null, e)) : ge(Ce, null, e);
  };
  function it(e) {
    return e == null || typeof e == "boolean" ? ge(Ce) : G(e) ? ge(we, null, e.slice()) : $n(e) ? dn(e) : ge(On, null, String(e));
  }
  function dn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
  }
  function fa(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (G(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), fa(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !qu(t) ? t._ctx = Me : o === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else te(t) ? (t = {
      default: t,
      _ctx: Me
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      dr(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  to = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = Qr([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = ss([
        t.style,
        r.style
      ]);
      else if (Jr(o)) {
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
  const Qh = Uu();
  let Yh = 0;
  function Xh(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || Qh, s = {
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
      scope: new Qc(true),
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
      propsOptions: Gu(r, o),
      emitsOptions: rf(r, o),
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
    }, s.root = t ? t.root : s, s.emit = Dh.bind(null, s), e.ce && e.ce(s), s;
  }
  let Le = null;
  tt = () => Le || Me;
  let Wo, bi;
  {
    const e = os(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
        o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
      };
    };
    Wo = t("__VUE_INSTANCE_SETTERS__", (n) => Le = n), bi = t("__VUE_SSR_SETTERS__", (n) => or = n);
  }
  const In = (e) => {
    const t = Le;
    return Wo(e), e.scope.on(), () => {
      e.scope.off(), Wo(t);
    };
  }, _i = () => {
    Le && Le.scope.off(), Wo(null);
  };
  function ff(e) {
    return e.vnode.shapeFlag & 4;
  }
  let or = false;
  function Zh(e, t = false, n = false) {
    t && bi(t);
    const { props: r, children: o } = e.vnode, s = ff(e);
    Eh(e, r, s, t), Ph(e, o, n || t);
    const i = s ? em(e, t) : void 0;
    return t && bi(false), i;
  }
  function em(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, gh);
    const { setup: r } = n;
    if (r) {
      Jt();
      const o = e.setupContext = r.length > 1 ? pf(e) : null, s = In(e), i = Xr(r, e, 0, [
        e.props,
        o
      ]), a = Qi(i);
      if (Qt(), s(), (a || e.sp) && !_n(e) && sa(e), a) {
        if (i.then(_i, _i), t) return i.then((l) => {
          wi(e, l);
        }).catch((l) => {
          ur(l, e, 0);
        });
        e.asyncDep = i;
      } else wi(e, i);
    } else df(e);
  }
  function wi(e, t, n) {
    te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ye(t) && (e.setupState = mu(t)), df(e);
  }
  function df(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Dt);
    {
      const o = In(e);
      Jt();
      try {
        yh(e);
      } finally {
        Qt(), o();
      }
    }
  }
  const tm = {
    get(e, t) {
      return je(e, "get", ""), e[t];
    }
  };
  function pf(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, tm),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function ms(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(mu(Xn(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in xr) return xr[n](e);
      },
      has(t, n) {
        return n in t || n in xr;
      }
    })) : e.proxy;
  }
  function Si(e, t = true) {
    return te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function nm(e) {
    return te(e) && "__vccOpts" in e;
  }
  K = (e, t) => Qp(e, t, or);
  he = function(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ye(t) && !G(t) ? $n(t) ? ge(e, null, [
      t
    ]) : ge(e, t) : ge(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && $n(n) && (n = [
      n
    ]), ge(e, t, n));
  };
  ck = function(e, t, n, r) {
    const o = n[r];
    if (o && rm(o, e)) return o;
    const s = t();
    return s.memo = e.slice(), s.cacheIndex = r, n[r] = s;
  };
  function rm(e, t) {
    const n = e.memo;
    if (n.length != t.length) return false;
    for (let r = 0; r < n.length; r++) if (Ge(n[r], t[r])) return false;
    return Mn > 0 && Fe && Fe.push(e), true;
  }
  const om = "3.5.14";
  let ki;
  const tl = typeof window < "u" && window.trustedTypes;
  if (tl) try {
    ki = tl.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let hf, sm, im, Ft, nl, am, on, _r, sr, mf, gf, lm, En, rl;
  hf = ki ? (e) => ki.createHTML(e) : (e) => e;
  sm = "http://www.w3.org/2000/svg";
  im = "http://www.w3.org/1998/Math/MathML";
  Ft = typeof document < "u" ? document : null;
  nl = Ft && Ft.createElement("template");
  am = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? Ft.createElementNS(sm, e) : t === "mathml" ? Ft.createElementNS(im, e) : n ? Ft.createElement(e, {
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
        nl.innerHTML = hf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = nl.content;
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
  on = "transition";
  _r = "animation";
  sr = Symbol("_vtc");
  mf = {
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
  gf = Pe({}, Ru, mf);
  lm = (e) => (e.displayName = "Transition", e.props = gf, e);
  cm = lm((e, { slots: t }) => he(rh, yf(e), t));
  En = (e, t = []) => {
    G(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  rl = (e) => e ? G(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function yf(e) {
    const t = {};
    for (const R in e) R in mf || (t[R] = e[R]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: s = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = i, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: d = `${n}-leave-to` } = e, h = um(o), g = h && h[0], S = h && h[1], { onBeforeEnter: k, onEnter: _, onEnterCancelled: m, onLeave: v, onLeaveCancelled: w, onBeforeAppear: P = k, onAppear: M = _, onAppearCancelled: N = m } = t, C = (R, D, Z, ee) => {
      R._enterCancelled = ee, ln(R, D ? c : a), ln(R, D ? u : i), Z && Z();
    }, O = (R, D) => {
      R._isLeaving = false, ln(R, f), ln(R, d), ln(R, p), D && D();
    }, E = (R) => (D, Z) => {
      const ee = R ? M : _, F = () => C(D, R, Z);
      En(ee, [
        D,
        F
      ]), ol(() => {
        ln(D, R ? l : s), At(D, R ? c : a), rl(ee) || sl(D, r, g, F);
      });
    };
    return Pe(t, {
      onBeforeEnter(R) {
        En(k, [
          R
        ]), At(R, s), At(R, i);
      },
      onBeforeAppear(R) {
        En(P, [
          R
        ]), At(R, l), At(R, u);
      },
      onEnter: E(false),
      onAppear: E(true),
      onLeave(R, D) {
        R._isLeaving = true;
        const Z = () => O(R, D);
        At(R, f), R._enterCancelled ? (At(R, p), Ei()) : (Ei(), At(R, p)), ol(() => {
          R._isLeaving && (ln(R, f), At(R, d), rl(v) || sl(R, r, S, Z));
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
  function um(e) {
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
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[sr] || (e[sr] = /* @__PURE__ */ new Set())).add(t);
  }
  function ln(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[sr];
    n && (n.delete(t), n.size || (e[sr] = void 0));
  }
  function ol(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let fm = 0;
  function sl(e, t, n, r) {
    const o = e._endId = ++fm, s = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(s, n);
    const { type: i, timeout: a, propCount: l } = vf(e, t);
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
  function vf(e, t) {
    const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), o = r(`${on}Delay`), s = r(`${on}Duration`), i = il(o, s), a = r(`${_r}Delay`), l = r(`${_r}Duration`), u = il(a, l);
    let c = null, f = 0, p = 0;
    t === on ? i > 0 && (c = on, f = i, p = s.length) : t === _r ? u > 0 && (c = _r, f = u, p = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? on : _r : null, p = c ? c === on ? s.length : l.length : 0);
    const d = c === on && /\b(transform|all)(,|$)/.test(r(`${on}Property`).toString());
    return {
      type: c,
      timeout: f,
      propCount: p,
      hasTransform: d
    };
  }
  function il(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => al(n) + al(e[r])));
  }
  function al(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function Ei() {
    return document.body.offsetHeight;
  }
  function dm(e, t, n) {
    const r = e[sr];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let qo, bf;
  qo = Symbol("_vod");
  bf = Symbol("_vsh");
  uk = {
    beforeMount(e, { value: t }, { transition: n }) {
      e[qo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : wr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), wr(e, true), r.enter(e)) : r.leave(e, () => {
        wr(e, false);
      }) : wr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      wr(e, t);
    }
  };
  function wr(e, t) {
    e.style.display = t ? e[qo] : "none", e[bf] = !t;
  }
  const pm = Symbol(""), hm = /(^|;)\s*display\s*:/;
  function mm(e, t, n) {
    const r = e.style, o = ke(n);
    let s = false;
    if (n && !o) {
      if (t) if (ke(t)) for (const i of t.split(";")) {
        const a = i.slice(0, i.indexOf(":")).trim();
        n[a] == null && Lo(r, a, "");
      }
      else for (const i in t) n[i] == null && Lo(r, i, "");
      for (const i in n) i === "display" && (s = true), Lo(r, i, n[i]);
    } else if (o) {
      if (t !== n) {
        const i = r[pm];
        i && (n += ";" + i), r.cssText = n, s = hm.test(n);
      }
    } else t && e.removeAttribute("style");
    qo in e && (e[qo] = s ? r.display : "", e[bf] && (r.display = "none"));
  }
  const ll = /\s*!important$/;
  function Lo(e, t, n) {
    if (G(n)) n.forEach((r) => Lo(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = gm(e, t);
      ll.test(n) ? e.setProperty(Zt(r), n.replace(ll, ""), "important") : e[r] = n;
    }
  }
  const cl = [
    "Webkit",
    "Moz",
    "ms"
  ], js = {};
  function gm(e, t) {
    const n = js[t];
    if (n) return n;
    let r = ct(t);
    if (r !== "filter" && r in e) return js[t] = r;
    r = rs(r);
    for (let o = 0; o < cl.length; o++) {
      const s = cl[o] + r;
      if (s in e) return js[t] = s;
    }
    return t;
  }
  const ul = "http://www.w3.org/1999/xlink";
  function fl(e, t, n, r, o, s = Sp(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ul, t.slice(6, t.length)) : e.setAttributeNS(ul, t, n) : n == null || s && !Kc(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : bt(n) ? String(n) : n);
  }
  function dl(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? hf(n) : n);
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
      a === "boolean" ? n = Kc(n) : n == null && a === "string" ? (n = "", i = true) : a === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(o || t);
  }
  function mn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function ym(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const pl = Symbol("_vei");
  function vm(e, t, n, r, o = null) {
    const s = e[pl] || (e[pl] = {}), i = s[t];
    if (r && i) i.value = r;
    else {
      const [a, l] = bm(t);
      if (r) {
        const u = s[t] = Sm(r, o);
        mn(e, a, u, l);
      } else i && (ym(e, a, i, l), s[t] = void 0);
    }
  }
  const hl = /(?:Once|Passive|Capture)$/;
  function bm(e) {
    let t;
    if (hl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(hl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : Zt(e.slice(2)),
      t
    ];
  }
  let Fs = 0;
  const _m = Promise.resolve(), wm = () => Fs || (_m.then(() => Fs = 0), Fs = Date.now());
  function Sm(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      _t(km(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = wm(), n;
  }
  function km(e, t) {
    if (G(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const ml = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Em = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? dm(e, r, i) : t === "style" ? mm(e, n, r) : Jr(t) ? zi(t) || vm(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : Tm(e, t, r, i)) ? (dl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && fl(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ke(r)) ? dl(e, ct(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), fl(e, t, r, i));
  };
  function Tm(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ml(t) && te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return ml(t) && ke(n) ? false : t in e;
  }
  let _f, wf, Ko, gl, Rm, Cm;
  _f = /* @__PURE__ */ new WeakMap();
  wf = /* @__PURE__ */ new WeakMap();
  Ko = Symbol("_moveCb");
  gl = Symbol("_enterCb");
  Rm = (e) => (delete e.props.mode, e);
  Cm = Rm({
    name: "TransitionGroup",
    props: Pe({}, gf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = tt(), r = Tu();
      let o, s;
      return ia(() => {
        if (!o.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!Om(o[0].el, n.vnode.el, i)) {
          o = [];
          return;
        }
        o.forEach(Pm), o.forEach(Am);
        const a = o.filter(xm);
        Ei(), a.forEach((l) => {
          const u = l.el, c = u.style;
          At(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[Ko] = (p) => {
            p && p.target !== u || (!p || /transform$/.test(p.propertyName)) && (u.removeEventListener("transitionend", f), u[Ko] = null, ln(u, i));
          };
          u.addEventListener("transitionend", f);
        }), o = [];
      }), () => {
        const i = ie(e), a = yf(i);
        let l = i.tag || we;
        if (o = [], s) for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), Sn(c, Hr(c, a, r, n)), _f.set(c, c.el.getBoundingClientRect()));
        }
        s = t.default ? oa(t.default()) : [];
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.key != null && Sn(c, Hr(c, a, r, n));
        }
        return ge(l, null, s);
      };
    }
  });
  fk = Cm;
  function Pm(e) {
    const t = e.el;
    t[Ko] && t[Ko](), t[gl] && t[gl]();
  }
  function Am(e) {
    wf.set(e, e.el.getBoundingClientRect());
  }
  function xm(e) {
    const t = _f.get(e), n = wf.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
    }
  }
  function Om(e, t, n) {
    const r = e.cloneNode(), o = e[sr];
    o && o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const { hasTransform: i } = vf(r);
    return s.removeChild(r), i;
  }
  const ir = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return G(t) ? (n) => Yn(t, n) : t;
  };
  function Lm(e) {
    e.target.composing = true;
  }
  function yl(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  let zt;
  zt = Symbol("_assign");
  dk = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[zt] = ir(o);
      const s = r || o.props && o.props.type === "number";
      mn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), s && (a = ai(a)), e[zt](a);
      }), n && mn(e, "change", () => {
        e.value = e.value.trim();
      }), t || (mn(e, "compositionstart", Lm), mn(e, "compositionend", yl), mn(e, "change", yl));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
      if (e[zt] = ir(i), e.composing) return;
      const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? ai(e.value) : e.value, l = t ?? "";
      a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
    }
  };
  pk = {
    deep: true,
    created(e, t, n) {
      e[zt] = ir(n), mn(e, "change", () => {
        const r = e._modelValue, o = Sf(e), s = e.checked, i = e[zt];
        if (G(r)) {
          const a = Gc(r, o), l = a !== -1;
          if (s && !l) i(r.concat(o));
          else if (!s && l) {
            const u = [
              ...r
            ];
            u.splice(a, 1), i(u);
          }
        } else if (ts(r)) {
          const a = new Set(r);
          s ? a.add(o) : a.delete(o), i(a);
        } else i(kf(e, s));
      });
    },
    mounted: vl,
    beforeUpdate(e, t, n) {
      e[zt] = ir(n), vl(e, t, n);
    }
  };
  function vl(e, { value: t, oldValue: n }, r) {
    e._modelValue = t;
    let o;
    if (G(t)) o = Gc(t, r.props.value) > -1;
    else if (ts(t)) o = t.has(r.props.value);
    else {
      if (t === n) return;
      o = nr(t, kf(e, true));
    }
    e.checked !== o && (e.checked = o);
  }
  hk = {
    created(e, { value: t }, n) {
      e.checked = nr(t, n.props.value), e[zt] = ir(n), mn(e, "change", () => {
        e[zt](Sf(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      e[zt] = ir(r), t !== n && (e.checked = nr(t, r.props.value));
    }
  };
  function Sf(e) {
    return "_value" in e ? e._value : e.value;
  }
  function kf(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  let Mm, $m, Im, Ef;
  Mm = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  $m = {
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
    exact: (e, t) => Mm.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  mk = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (o, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const a = $m[t[i]];
        if (a && a(o, t)) return;
      }
      return e(o, ...s);
    });
  };
  Im = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  gk = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = (o) => {
      if (!("key" in o)) return;
      const s = Zt(o.key);
      if (t.some((i) => i === s || Im[i] === s)) return e(o);
    });
  };
  Ef = Pe({
    patchProp: Em
  }, am);
  let Mr, bl = false;
  function Tf() {
    return Mr || (Mr = xh(Ef));
  }
  function Nm() {
    return Mr = bl ? Mr : Oh(Ef), bl = true, Mr;
  }
  let Bm;
  yk = (...e) => {
    Tf().render(...e);
  };
  Dm = (...e) => {
    const t = Tf().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = Cf(r);
      if (!o) return;
      const s = t._component;
      !te(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
      const i = n(o, false, Rf(o));
      return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
    }, t;
  };
  Bm = (...e) => {
    const t = Nm().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = Cf(r);
      if (o) return n(o, true, Rf(o));
    }, t;
  };
  function Rf(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function Cf(e) {
    return ke(e) ? document.querySelector(e) : e;
  }
  const jm = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Fm = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Hm = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
  function Um(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
      Vm(e);
      return;
    }
    return t;
  }
  function Vm(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
  }
  function qr(e, t = {}) {
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
    if (!Hm.test(e)) {
      if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
      return e;
    }
    try {
      if (jm.test(e) || Fm.test(e)) {
        if (t.strict) throw new Error("[destr] Possible prototype pollution");
        return JSON.parse(e, Um);
      }
      return JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
  const Pf = /#/g, Af = /&/g, xf = /\//g, Wm = /=/g, qm = /\?/g, gs = /\+/g, Km = /%5e/gi, Gm = /%60/gi, zm = /%7c/gi, Jm = /%20/gi, Qm = /%252f/gi;
  function Of(e) {
    return encodeURI("" + e).replace(zm, "|");
  }
  function Ti(e) {
    return Of(typeof e == "string" ? e : JSON.stringify(e)).replace(gs, "%2B").replace(Jm, "+").replace(Pf, "%23").replace(Af, "%26").replace(Gm, "`").replace(Km, "^").replace(xf, "%2F");
  }
  function Hs(e) {
    return Ti(e).replace(Wm, "%3D");
  }
  Ym = function(e) {
    return Of(e).replace(Pf, "%23").replace(qm, "%3F").replace(Qm, "%2F").replace(Af, "%26").replace(gs, "%2B");
  };
  vk = function(e) {
    return Ym(e).replace(xf, "%2F");
  };
  function Go(e = "") {
    try {
      return decodeURIComponent("" + e);
    } catch {
      return "" + e;
    }
  }
  function Xm(e) {
    return Go(e.replace(gs, " "));
  }
  function Zm(e) {
    return Go(e.replace(gs, " "));
  }
  function da(e = "") {
    const t = /* @__PURE__ */ Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
      const r = n.match(/([^=]+)=?(.*)/) || [];
      if (r.length < 2) continue;
      const o = Xm(r[1]);
      if (o === "__proto__" || o === "constructor") continue;
      const s = Zm(r[2] || "");
      t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [
        t[o],
        s
      ];
    }
    return t;
  }
  function eg(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((n) => `${Hs(e)}=${Ti(n)}`).join("&") : `${Hs(e)}=${Ti(t)}` : Hs(e);
  }
  function Lf(e) {
    return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => eg(t, e[t])).filter(Boolean).join("&");
  }
  const tg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, Mf = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, ng = /^([/\\]\s*){2,}[^/\\]/, rg = /^[\s\0]*(blob|data|javascript|vbscript):$/i, og = /\/$|\/\?|\/#/, sg = /^\.?\//;
  Tt = function(e, t = {}) {
    return typeof t == "boolean" && (t = {
      acceptRelative: t
    }), t.strict ? tg.test(e) : Mf.test(e) || (t.acceptRelative ? ng.test(e) : false);
  };
  function ig(e) {
    return !!e && rg.test(e);
  }
  function Ri(e = "", t) {
    return t ? og.test(e) : e.endsWith("/");
  }
  function Xt(e = "", t) {
    if (!t) return (Ri(e) ? e.slice(0, -1) : e) || "/";
    if (!Ri(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o), r = e.slice(o));
    const [s, ...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function ys(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Ri(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o), r = e.slice(o), !n)) return r;
    const [s, ...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function ag(e = "") {
    return e.startsWith("/");
  }
  lg = function(e = "") {
    return ag(e) ? e : "/" + e;
  };
  function Ci(e, t) {
    if (If(t) || Tt(e)) return e;
    const n = Xt(t);
    return e.startsWith(n) ? e : vs(n, e);
  }
  function _l(e, t) {
    if (If(t)) return e;
    const n = Xt(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r;
  }
  function $f(e, t) {
    const n = bs(e), r = {
      ...da(n.search),
      ...t
    };
    return n.search = Lf(r), pg(n);
  }
  function If(e) {
    return !e || e === "/";
  }
  function cg(e) {
    return e && e !== "/";
  }
  vs = function(e, ...t) {
    let n = e || "";
    for (const r of t.filter((o) => cg(o))) if (n) {
      const o = r.replace(sg, "");
      n = ys(n) + o;
    } else n = r;
    return n;
  };
  function Nf(...e) {
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
  function ug(e) {
    return fg(e, "https://");
  }
  function fg(e, t) {
    let n = e.match(Mf);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e;
  }
  function dg(e, t) {
    return Go(Xt(e)) === Go(Xt(t));
  }
  const Df = Symbol.for("ufo:protocolRelative");
  bs = function(e = "", t) {
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
    })) return wl(e);
    const [, r = "", o, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: l, search: u, hash: c } = wl(a);
    return {
      protocol: r.toLowerCase(),
      auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
      host: i,
      pathname: l,
      search: u,
      hash: c,
      [Df]: !r
    };
  };
  function wl(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
      pathname: t,
      search: n,
      hash: r
    };
  }
  function pg(e) {
    const t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", o = e.auth ? e.auth + "@" : "", s = e.host || "";
    return (e.protocol || e[Df] ? (e.protocol || "") + "//" : "") + o + s + t + n + r;
  }
  class hg extends Error {
    constructor(t, n) {
      super(t, n), this.name = "FetchError", (n == null ? void 0 : n.cause) && !this.cause && (this.cause = n.cause);
    }
  }
  function mg(e) {
    var _a2, _b2, _c2, _d2, _e2;
    const t = ((_a2 = e.error) == null ? void 0 : _a2.message) || ((_b2 = e.error) == null ? void 0 : _b2.toString()) || "", n = ((_c2 = e.request) == null ? void 0 : _c2.method) || ((_d2 = e.options) == null ? void 0 : _d2.method) || "GET", r = ((_e2 = e.request) == null ? void 0 : _e2.url) || String(e.request) || "/", o = `[${n}] ${JSON.stringify(r)}`, s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", i = `${o}: ${s}${t ? ` ${t}` : ""}`, a = new hg(i, e.error ? {
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
  const gg = new Set(Object.freeze([
    "PATCH",
    "POST",
    "PUT",
    "DELETE"
  ]));
  function Sl(e = "GET") {
    return gg.has(e.toUpperCase());
  }
  function yg(e) {
    if (e === void 0) return false;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? true : t !== "object" ? false : Array.isArray(e) ? true : e.buffer ? false : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
  }
  const vg = /* @__PURE__ */ new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html"
  ]), bg = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
  function _g(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return bg.test(t) ? "json" : vg.has(t) || t.startsWith("text/") ? "text" : "blob";
  }
  function wg(e, t, n, r) {
    const o = Sg((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
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
  function Sg(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e) for (const [o, s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(o, s);
    return r;
  }
  async function vo(e, t) {
    if (t) if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
  }
  const kg = /* @__PURE__ */ new Set([
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
        typeof a.options.retry == "number" ? c = a.options.retry : c = Sl(a.options.method) ? 0 : 1;
        const f = a.response && a.response.status || 500;
        if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : kg.has(f))) {
          const p = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
          return p > 0 && await new Promise((d) => setTimeout(d, p)), s(a.request, {
            ...a.options,
            retry: c - 1
          });
        }
      }
      const u = mg(a);
      throw Error.captureStackTrace && Error.captureStackTrace(u, s), u;
    }
    const s = async function(l, u = {}) {
      const c = {
        request: l,
        options: wg(l, u, e.defaults, n),
        response: void 0,
        error: void 0
      };
      c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await vo(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = Ci(c.request, c.options.baseURL)), c.options.query && (c.request = $f(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && Sl(c.options.method) && (yg(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
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
        return c.error = d, c.options.onRequestError && await vo(c, c.options.onRequestError), await o(c);
      } finally {
        f && clearTimeout(f);
      }
      if ((c.response.body || c.response._bodyInit) && !Eg.has(c.response.status) && c.options.method !== "HEAD") {
        const d = (c.options.parseResponse ? "json" : c.options.responseType) || _g(c.response.headers.get("content-type") || "");
        switch (d) {
          case "json": {
            const h = await c.response.text(), g = c.options.parseResponse || qr;
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
      return c.options.onResponse && await vo(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await vo(c, c.options.onResponseError), await o(c)) : c.response;
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
  const zo = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  }(), Tg = zo.fetch ? (...e) => zo.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")), Rg = zo.Headers, Cg = zo.AbortController, Pg = Bf({
    fetch: Tg,
    Headers: Rg,
    AbortController: Cg
  }), Ag = Pg, xg = () => {
    var _a2;
    return ((_a2 = window == null ? void 0 : window.__NUXT__) == null ? void 0 : _a2.config) || {};
  }, pa = () => xg().app, Og = () => pa().baseURL, Lg = () => pa().buildAssetsDir, ha = (...e) => Nf(jf(), Lg(), ...e), jf = (...e) => {
    const t = pa(), n = t.cdnURL || t.baseURL;
    return e.length ? Nf(n, ...e) : n;
  };
  globalThis.__buildAssetsURL = ha, globalThis.__publicAssetsURL = jf;
  globalThis.$fetch || (globalThis.$fetch = Ag.create({
    baseURL: Og()
  }));
  "global" in globalThis || (globalThis.global = globalThis);
  function Pi(e, t = {}, n) {
    for (const r in e) {
      const o = e[r], s = n ? `${n}:${r}` : r;
      typeof o == "object" && o !== null ? Pi(o, t, s) : typeof o == "function" && (t[s] = o);
    }
    return t;
  }
  const Mg = {
    run: (e) => e()
  }, $g = () => Mg, Ff = typeof console.createTask < "u" ? console.createTask : $g;
  function Ig(e, t) {
    const n = t.shift(), r = Ff(n);
    return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve());
  }
  function Ng(e, t) {
    const n = t.shift(), r = Ff(n);
    return Promise.all(e.map((o) => r.run(() => o(...t))));
  }
  function Us(e, t) {
    for (const n of [
      ...e
    ]) n(t);
  }
  class Dg {
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
      const n = Pi(t), r = Object.keys(n).map((o) => this.hook(o, n[o]));
      return () => {
        for (const o of r.splice(0, r.length)) o();
      };
    }
    removeHooks(t) {
      const n = Pi(t);
      for (const r in n) this.removeHook(r, n[r]);
    }
    removeAllHooks() {
      for (const t in this._hooks) delete this._hooks[t];
    }
    callHook(t, ...n) {
      return n.unshift(t), this.callHookWith(Ig, t, ...n);
    }
    callHookParallel(t, ...n) {
      return n.unshift(t), this.callHookWith(Ng, t, ...n);
    }
    callHookWith(t, n, ...r) {
      const o = this._before || this._after ? {
        name: n,
        args: r,
        context: {}
      } : void 0;
      this._before && Us(this._before, o);
      const s = t(n in this._hooks ? [
        ...this._hooks[n]
      ] : [], r);
      return s instanceof Promise ? s.finally(() => {
        this._after && o && Us(this._after, o);
      }) : (this._after && o && Us(this._after, o), s);
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
  function Hf() {
    return new Dg();
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
        Ai.add(u);
        try {
          const c = o ? o.run(i, a) : a();
          return n || (t = void 0), await c;
        } finally {
          Ai.delete(u);
        }
      }
    };
  }
  function jg(e = {}) {
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
  const Jo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}, kl = "__unctx__", Fg = Jo[kl] || (Jo[kl] = jg()), Hg = (e, t = {}) => Fg.get(e, t), El = "__unctx_async_handlers__", Ai = Jo[El] || (Jo[El] = /* @__PURE__ */ new Set());
  function tr(e) {
    const t = [];
    for (const o of Ai) {
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
  let Ug, Tl, Vg, Wg, Rl, qg, Wt, Kg, Gg, Uf, Cl, zg;
  Ug = false;
  Tl = false;
  Vg = true;
  Wg = false;
  Rl = {
    id: "__nuxt-loader"
  };
  qg = {
    componentName: "NuxtLink",
    prefetch: true,
    prefetchOn: {
      visibility: true
    }
  };
  Wt = {
    deep: false
  };
  Kg = void 0;
  bk = {};
  Gg = "#__nuxt";
  Uf = "nuxt-app";
  Cl = 36e5;
  zg = "vite:preloadError";
  function Vf(e = Uf) {
    return Hg(e, {
      asyncContext: false
    });
  }
  const Jg = "__nuxt_plugin";
  function Qg(e) {
    var _a2;
    let t = 0;
    const n = {
      _id: e.id || Uf || "nuxt-app",
      _scope: Yr(),
      provide: void 0,
      globalName: "nuxt",
      versions: {
        get nuxt() {
          return "3.17.7";
        },
        get vue() {
          return n.vueApp.version;
        }
      },
      payload: Nt({
        ...((_a2 = e.ssrContext) == null ? void 0 : _a2.payload) || {},
        data: Nt({}),
        state: Et({}),
        once: /* @__PURE__ */ new Set(),
        _errors: Nt({})
      }),
      static: {
        data: {}
      },
      runWithContext(o) {
        return n._scope.active && !en() ? n._scope.run(() => Pl(n, o)) : Pl(n, o);
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
    n.hooks = Hf(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (o, s) => {
      const i = "$" + o;
      bo(n, i, s), bo(n.vueApp.config.globalProperties, i, s);
    }, bo(n.vueApp, "$nuxt", n), bo(n.vueApp.config.globalProperties, "$nuxt", n);
    {
      window.addEventListener(zg, (s) => {
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
  async function Xg(e, t) {
    if (typeof t == "function") {
      const { provide: n } = await e.runWithContext(() => t(e)) || {};
      if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
    }
  }
  async function Zg(e, t) {
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
        const c = Xg(e, l).then(async () => {
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
      [Jg]: true,
      _name: t
    });
  }
  const Wf = Re;
  function Pl(e, t, n) {
    const r = () => t();
    return Vf(e._id).set(e), e.vueApp.runWithContext(r);
  }
  function ey(e) {
    var _a2;
    let t;
    return fr() && (t = (_a2 = tt()) == null ? void 0 : _a2.appContext.app.$nuxt), t || (t = Vf(e).tryUse()), t || null;
  }
  me = function(e) {
    const t = ey(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t;
  };
  Bt = function(e) {
    return me().$config;
  };
  function bo(e, t, n) {
    Object.defineProperty(e, t, {
      get: () => n
    });
  }
  function ty(e, t) {
    return {
      ctx: {
        table: e
      },
      matchAll: (n) => Kf(n, e)
    };
  }
  function qf(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, o]) => [
      r,
      qf(o)
    ])) : new Map(Object.entries(e[n]));
    return t;
  }
  function ny(e) {
    return ty(qf(e));
  }
  function Kf(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s, i] of Al(t.wildcard)) (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s, i] of Al(t.dynamic)) if (e.startsWith(s + "/")) {
      const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
      r.push(...Kf(a, i));
    }
    const o = t.static.get(e);
    return o && r.push(o), r.filter(Boolean);
  }
  function Al(e) {
    return [
      ...e.entries()
    ].sort((t, n) => t[0].length - n[0].length);
  }
  function Vs(e) {
    if (e === null || typeof e != "object") return false;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? false : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : true;
  }
  function xi(e, t, n = ".", r) {
    if (!Vs(t)) return xi(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
      if (s === "__proto__" || s === "constructor") continue;
      const i = e[s];
      i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [
        ...i,
        ...o[s]
      ] : Vs(i) && Vs(o[s]) ? o[s] = xi(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i));
    }
    return o;
  }
  function ry(e) {
    return (...t) => t.reduce((n, r) => xi(n, r, "", e), {});
  }
  ma = ry();
  function oy(e, t) {
    try {
      return t in e;
    } catch {
      return false;
    }
  }
  class xl extends Error {
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
        statusCode: Oi(this.statusCode, 500)
      };
      return this.statusMessage && (t.statusMessage = Gf(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t;
    }
  }
  __publicField(xl, "__h3_error__", true);
  function sy(e) {
    if (typeof e == "string") return new xl(e);
    if (iy(e)) return e;
    const t = new xl(e.message ?? e.statusMessage ?? "", {
      cause: e.cause || e
    });
    if (oy(e, "stack")) try {
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
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Oi(e.statusCode, t.statusCode) : e.status && (t.statusCode = Oi(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
      const n = t.statusMessage;
      Gf(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t;
  }
  function iy(e) {
    var _a2;
    return ((_a2 = e == null ? void 0 : e.constructor) == null ? void 0 : _a2.__h3_error__) === true;
  }
  const ay = /[^\u0009\u0020-\u007E]/g;
  function Gf(e = "") {
    return e.replace(ay, "");
  }
  function Oi(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
  }
  let zf, Nn;
  zf = Symbol("layout-meta");
  Nn = Symbol("route");
  Ie = () => {
    var _a2;
    return (_a2 = me()) == null ? void 0 : _a2.$router;
  };
  Bn = () => fr() ? Te(Nn, me()._route) : me()._route;
  let ly;
  ly = () => {
    try {
      if (me()._processingMiddleware) return true;
    } catch {
      return false;
    }
    return false;
  };
  cy = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : "path" in e ? Li(e) : Ie().resolve(e).href;
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
      if (l && ig(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const s = ly();
    if (!o && s) {
      if (t == null ? void 0 : t.replace) {
        if (typeof e == "string") {
          const { pathname: l, search: u, hash: c } = bs(e);
          return {
            path: l,
            ...u && {
              query: da(u)
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
  function Li(e) {
    return $f(e.path || "", e.query || {}) + (e.hash || "");
  }
  let Jf, pr, Pn, Qf, Yf, uy;
  Jf = "__nuxt_error";
  pr = () => na(me().payload, "error");
  Pn = (e) => {
    const t = wn(e);
    try {
      const n = me(), r = pr();
      n.hooks.callHook("app:error", t), r.value || (r.value = t);
    } catch {
      throw t;
    }
    return t;
  };
  Qf = async (e = {}) => {
    const t = me(), n = pr();
    t.callHook("app:error:cleared", e), e.redirect && await Ie().replace(e.redirect), n.value = Kg;
  };
  Yf = (e) => !!e && typeof e == "object" && Jf in e;
  wn = (e) => {
    const t = sy(e);
    return Object.defineProperty(t, Jf, {
      value: true,
      configurable: false,
      writable: false
    }), t;
  };
  uy = {
    trailing: true
  };
  function fy(e, t = 25, n = {}) {
    if (n = {
      ...uy,
      ...n
    }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
    let r, o, s = [], i, a;
    const l = (u, c) => (i = dy(e, u, c), i.finally(() => {
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
  async function dy(e, t, n) {
    return await e.apply(t, n);
  }
  let ga;
  const no = (e) => ga = e, py = () => fr() && Te(ya) || ga, ya = Symbol();
  function Mi(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var $r;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })($r || ($r = {}));
  function hy() {
    const e = Yr(true), t = e.run(() => He({}));
    let n = [], r = [];
    const o = Xn({
      install(s) {
        no(o), o._a = s, s.provide(ya, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
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
  const Xf = () => {
  };
  function Ol(e, t, n, r = Xf) {
    e.push(t);
    const o = () => {
      const s = e.indexOf(t);
      s > -1 && (e.splice(s, 1), r());
    };
    return !n && en() && Ln(o), o;
  }
  function Vn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const my = (e) => e(), Ll = Symbol(), Ws = Symbol();
  function $i(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], o = e[n];
      Mi(o) && Mi(r) && e.hasOwnProperty(n) && !Se(r) && !Kt(r) ? e[n] = $i(o, r) : e[n] = r;
    }
    return e;
  }
  const Zf = Symbol();
  function gy(e) {
    return Object.defineProperty(e, Zf, {});
  }
  function yy(e) {
    return !Mi(e) || !Object.prototype.hasOwnProperty.call(e, Zf);
  }
  const { assign: cn } = Object;
  function vy(e) {
    return !!(Se(e) && e.effect);
  }
  function by(e, t, n, r) {
    const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
    let l;
    function u() {
      a || (n.state.value[e] = o ? o() : {});
      const c = Kp(n.state.value[e]);
      return cn(c, s, Object.keys(i || {}).reduce((f, p) => (f[p] = Xn(K(() => {
        no(n);
        const d = n._s.get(e);
        return i[p].call(d, d);
      })), f), {}));
    }
    return l = ed(e, u, t, n, r, true), l;
  }
  function ed(e, t, n = {}, r, o, s) {
    let i;
    const a = cn({
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
        type: $r.patchFunction,
        storeId: e,
        events: d
      }) : ($i(r.state.value[e], N), C = {
        type: $r.patchObject,
        payload: N,
        storeId: e,
        events: d
      });
      const O = g = Symbol();
      wt().then(() => {
        g === O && (u = true);
      }), c = true, Vn(f, C, r.state.value[e]);
    }
    const k = s ? function() {
      const { state: C } = n, O = C ? C() : {};
      this.$patch((E) => {
        cn(E, O);
      });
    } : Xf;
    function _() {
      i.stop(), f = [], p = [], r._s.delete(e);
    }
    const m = (N, C = "") => {
      if (Ll in N) return N[Ws] = C, N;
      const O = function() {
        no(r);
        const E = Array.from(arguments), R = [], D = [];
        function Z(z) {
          R.push(z);
        }
        function ee(z) {
          D.push(z);
        }
        Vn(p, {
          args: E,
          name: O[Ws],
          store: w,
          after: Z,
          onError: ee
        });
        let F;
        try {
          F = N.apply(this && this.$id === e ? this : w, E);
        } catch (z) {
          throw Vn(D, z), z;
        }
        return F instanceof Promise ? F.then((z) => (Vn(R, z), z)).catch((z) => (Vn(D, z), Promise.reject(z))) : (Vn(R, F), F);
      };
      return O[Ll] = true, O[Ws] = C, O;
    }, v = {
      _p: r,
      $id: e,
      $onAction: Ol.bind(null, p),
      $patch: S,
      $reset: k,
      $subscribe(N, C = {}) {
        const O = Ol(f, N, C.detached, () => E()), E = i.run(() => at(() => r.state.value[e], (R) => {
          (C.flush === "sync" ? c : u) && N({
            storeId: e,
            type: $r.direct,
            events: d
          }, R);
        }, cn({}, l, C)));
        return O;
      },
      $dispose: _
    }, w = Et(v);
    r._s.set(e, w);
    const M = (r._a && r._a.runWithContext || my)(() => r._e.run(() => (i = Yr()).run(() => t({
      action: m
    }))));
    for (const N in M) {
      const C = M[N];
      if (Se(C) && !vy(C) || Kt(C)) s || (h && yy(C) && (Se(C) ? C.value = h[N] : $i(C, h[N])), r.state.value[e][N] = C);
      else if (typeof C == "function") {
        const O = m(C, N);
        M[N] = O, a.actions[N] = C;
      }
    }
    return cn(w, M), cn(ie(w), M), Object.defineProperty(w, "$state", {
      get: () => r.state.value[e],
      set: (N) => {
        S((C) => {
          cn(C, N);
        });
      }
    }), r._p.forEach((N) => {
      cn(w, i.run(() => N({
        store: w,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), h && s && n.hydrate && n.hydrate(w.$state, h), u = true, c = true, w;
  }
  function _y(e, t, n) {
    let r;
    const o = typeof t == "function";
    r = o ? n : t;
    function s(i, a) {
      const l = fr();
      return i = i || (l ? Te(ya, null) : null), i && no(i), i = ga, i._s.has(e) || (o ? ed(e, t, r, i) : by(e, r, i)), i._s.get(e);
    }
    return s.$id = e, s;
  }
  function Ml(e) {
    const t = Sy(e), n = new ArrayBuffer(t.length), r = new DataView(n);
    for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
    return n;
  }
  const wy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function Sy(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "", n = 0, r = 0;
    for (let o = 0; o < e.length; o++) n <<= 6, n |= wy.indexOf(e[o]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
  }
  const ky = -1, Ey = -2, Ty = -3, Ry = -4, Cy = -5, Py = -6;
  function Ay(e, t) {
    return xy(JSON.parse(e), t);
  }
  function xy(e, t) {
    if (typeof e == "number") return o(e, true);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e, r = Array(n.length);
    function o(s, i = false) {
      if (s === ky) return;
      if (s === Ty) return NaN;
      if (s === Ry) return 1 / 0;
      if (s === Cy) return -1 / 0;
      if (s === Py) return -0;
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
            const d = globalThis[l], h = a[1], g = Ml(h), S = new d(g);
            r[s] = S;
            break;
          }
          case "ArrayBuffer": {
            const d = a[1], h = Ml(d);
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
  const Oy = /* @__PURE__ */ new Set([
    "link",
    "style",
    "script",
    "noscript"
  ]), Ly = /* @__PURE__ */ new Set([
    "title",
    "titleTemplate",
    "script",
    "style",
    "noscript"
  ]), $l = /* @__PURE__ */ new Set([
    "base",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), My = /* @__PURE__ */ new Set([
    "title",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), $y = /* @__PURE__ */ new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams"
  ]), Iy = /* @__PURE__ */ new Set([
    "key",
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "innerHTML",
    "textContent",
    "processTemplateParams"
  ]), Ny = /* @__PURE__ */ new Set([
    "templateParams",
    "htmlAttrs",
    "bodyAttrs"
  ]), va = /* @__PURE__ */ new Set([
    "theme-color",
    "google-site-verification",
    "og",
    "article",
    "book",
    "profile",
    "twitter",
    "author"
  ]), Kr = {
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
  }, Dy = {
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
  }, td = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({ key: e, value: t }) => `${qt(e)}=${t}`
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
        resolve: ({ key: e, value: t }) => typeof t == "boolean" ? qt(e) : `${qt(e)}:${t}`
      }
    },
    contentSecurityPolicy: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: "; ",
        resolve: ({ key: e, value: t }) => `${qt(e)} ${t}`
      }
    },
    charset: {}
  };
  function qt(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(), n = t.indexOf("-");
    return n === -1 ? t : Kr.META.has(t.slice(0, n)) || Kr.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t;
  }
  function nd(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t));
  }
  function Ii(e) {
    return Array.isArray(e) ? e.map(Ii) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [
      qt(t),
      Ii(n)
    ]));
  }
  function rd(e, t = {}) {
    const { entrySeparator: n = "", keyValueSeparator: r = "", wrapValue: o, resolve: s } = t;
    return Object.entries(e).map(([i, a]) => {
      if (s) {
        const u = s({
          key: i,
          value: a
        });
        if (u !== void 0) return u;
      }
      const l = typeof a == "object" ? rd(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && o ? `${o}${a.replace(new RegExp(o, "g"), `\\${o}`)}${o}` : a;
      return `${i}${r}${l}`;
    }).join(n);
  }
  function Il(e, t) {
    const n = nd(t), r = qt(e), o = od(r);
    if (!va.has(r)) return [
      {
        [o]: r,
        ...n
      }
    ];
    const s = Object.fromEntries(Object.entries(n).map(([i, a]) => [
      `${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`,
      a
    ]));
    return Qo(s || {}).sort((i, a) => {
      var _a2, _b2;
      return (((_a2 = i[o]) == null ? void 0 : _a2.length) || 0) - (((_b2 = a[o]) == null ? void 0 : _b2.length) || 0);
    });
  }
  function od(e) {
    var _a2;
    if (((_a2 = td[e]) == null ? void 0 : _a2.metaKey) === "http-equiv" || Kr.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = qt(e), n = t.indexOf(":");
    return n === -1 ? "name" : Kr.OG.has(t.slice(0, n)) ? "property" : "name";
  }
  function By(e) {
    return Dy[e] || qt(e);
  }
  function jy(e, t) {
    var _a2;
    return t === "refresh" ? `${e.seconds};url=${e.url}` : rd(Ii(e), {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve: ({ value: n, key: r }) => n === null ? "" : typeof n == "boolean" ? r : void 0,
      ...(_a2 = td[t]) == null ? void 0 : _a2.unpack
    });
  }
  function Qo(e) {
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
            const f = `${o}${u === "url" ? "" : `:${u}`}`, p = Qo({
              [f]: c
            });
            (u === "url" ? a : l).push(...p);
          }
          t.push(...a, ...l);
        } else t.push(...typeof i == "string" ? Qo({
          [o]: i
        }) : Il(o, i));
        continue;
      }
      if (typeof s == "object" && s) if (Kr.MEDIA.has(o)) {
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
      } else va.has(qt(o)) ? t.push(...Il(o, s)) : n[o] = nd(s);
      else n[o] = s;
    }
    const r = Object.entries(n).map(([o, s]) => {
      if (o === "charset") return {
        charset: s === null ? "_null" : s
      };
      const i = od(o), a = By(o), l = s === null ? "_null" : typeof s == "object" ? jy(s, o) : typeof s == "number" ? s.toString() : s;
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
  const Fy = {
    key: "flatMeta",
    hooks: {
      "entries:normalize": (e) => {
        const t = [];
        e.tags = e.tags.map((n) => n.tag !== "_flatMeta" ? n : (t.push(Qo(n.props).map((r) => ({
          ...n,
          tag: "meta",
          props: r
        }))), false)).filter(Boolean).concat(...t);
      }
    }
  }, Hy = [
    "name",
    "property",
    "http-equiv"
  ], Uy = /* @__PURE__ */ new Set([
    "viewport",
    "description",
    "keywords",
    "robots"
  ]);
  function sd(e) {
    const t = e.split(":");
    return t.length ? va.has(t[1]) : false;
  }
  function Ni(e) {
    const { props: t, tag: n } = e;
    if ($y.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (e.tag === "meta") {
      for (const r of Hy) if (t[r] !== void 0) {
        const o = t[r], s = o.includes(":"), i = Uy.has(o), l = !(s || i) && e.key ? `:key:${e.key}` : "";
        return `${n}:${o}${l}`;
      }
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (Ly.has(n)) {
      const r = e.textContent || e.innerHTML;
      if (r) return `${n}:content:${r}`;
    }
  }
  function Nl(e) {
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
  function Vy(e, t) {
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
  function id(e, t) {
    return e.props = e.props || {}, t && Object.entries(t).forEach(([n, r]) => {
      if (r === null) {
        e.props[n] = null;
        return;
      }
      if (n === "class" || n === "style") {
        e.props[n] = Vy(n, r);
        return;
      }
      if (Iy.has(n)) {
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
    }, r = id({
      tag: e,
      props: {}
    }, n);
    return r.key && Oy.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map((o) => ({
      ...r,
      props: {
        ...r.props,
        content: o
      }
    })) : r;
  }
  function qy(e, t) {
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
  const Dl = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w, Bl = {
    base: -10,
    title: 10
  }, Ky = {
    critical: -8,
    high: -1,
    low: 2
  }, jl = {
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
  }, Gy = /@import/, Sr = (e) => e === "" || e === true;
  function zy(e, t) {
    var _a2;
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = Ky[t.tagPriority] || 0, o = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : jl;
    if (t.tag in Bl) n = Bl[t.tag];
    else if (t.tag === "meta") {
      const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
      s && (n = jl.meta[s]);
    } else t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? Sr(t.props.async) ? n = o.script.async : t.props.src && !Sr(t.props.defer) && !Sr(t.props.async) && t.props.type !== "module" && !((_a2 = t.props.type) == null ? void 0 : _a2.endsWith("json")) ? n = o.script.sync : Sr(t.props.defer) && t.props.src && !Sr(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && Gy.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r;
  }
  function Fl(e, t) {
    const n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
  }
  function Jy(e = {}) {
    var _a2;
    const t = Hf();
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
      use: (a) => Fl(i, a),
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
              tags: qy(d.input, e.propResolvers || []).map((g) => Object.assign(g, d.options)),
              entry: d
            };
            await t.callHook("entries:normalize", h), d._tags = h.tags.map((g, S) => (g._w = zy(i, g), g._p = (d._i << 10) + S, g._d = Ni(g), g));
          }
        }
        let l = false;
        a.entries.flatMap((p) => (p._tags || []).map((d) => ({
          ...d,
          props: {
            ...d.props
          }
        }))).sort(Dl).reduce((p, d) => {
          const h = String(d._d || d._p);
          if (!p.has(h)) return p.set(h, d);
          const g = p.get(h);
          if (((d == null ? void 0 : d.tagDuplicateStrategy) || (Ny.has(d.tag) ? "merge" : null) || (d.key && d.key === g.key ? "merge" : null)) === "merge") {
            const k = {
              ...g.props
            };
            Object.entries(d.props).forEach(([_, m]) => k[_] = _ === "style" ? new Map([
              ...g.props.style || /* @__PURE__ */ new Map(),
              ...m
            ]) : _ === "class" ? /* @__PURE__ */ new Set([
              ...g.props.class || /* @__PURE__ */ new Set(),
              ...m
            ]) : m), p.set(h, {
              ...d,
              props: k
            });
          } else d._p >> 10 === g._p >> 10 && d.tag === "meta" && sd(h) ? (p.set(h, Object.assign([
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
        a.tags = Array.from(a.tagMap.values()), l && (a.tags = a.tags.flat().sort(Dl)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
        const f = [];
        for (const p of a.tags) {
          const { innerHTML: d, tag: h, props: g } = p;
          if (My.has(h) && !(Object.keys(g).length === 0 && !p.innerHTML && !p.textContent) && !(h === "meta" && !g.content && !g["http-equiv"] && !g.charset)) {
            if (h === "script" && d) {
              if ((_a3 = g.type) == null ? void 0 : _a3.endsWith("json")) {
                const S = typeof d == "string" ? d : JSON.stringify(d);
                p.innerHTML = S.replace(/</g, "\\u003C");
              } else typeof d == "string" && (p.innerHTML = d.replace(new RegExp(`</${h}`, "g"), `<\\/${h}`));
              p._d = Ni(p);
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
    return ((e == null ? void 0 : e.plugins) || []).forEach((a) => Fl(i, a)), i.hooks.callHook("init", i), (_a2 = e.init) == null ? void 0 : _a2.forEach((a) => a && i.push(a)), i;
  }
  const pn = "%separator", Qy = new RegExp(`${pn}(?:\\s*${pn})*`, "g");
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
  function _o(e, t, n, r = false) {
    if (typeof e != "string" || !e.includes("%")) return e;
    let o = e;
    try {
      o = decodeURI(e);
    } catch {
    }
    const s = o.match(/%\w+(?:\.\w+)?/g);
    if (!s) return e;
    const i = e.includes(pn);
    return e = e.replace(/%\w+(?:\.\w+)?/g, (a) => {
      if (a === pn || !s.includes(a)) return a;
      const l = Yy(t, a.slice(1), r);
      return l !== void 0 ? l : a;
    }).trim(), i && (e.endsWith(pn) && (e = e.slice(0, -pn.length)), e.startsWith(pn) && (e = e.slice(pn.length)), e = e.replace(Qy, n || "").trim()), e;
  }
  const Xy = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
  }, Zy = [
    "innerHTML",
    "textContent"
  ], ad = (e) => ({
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
        delete r.separator, r.pageTitle = _o(r.pageTitle || e._title || "", r, o);
        for (const s of n) {
          if (s.processTemplateParams === false) continue;
          const i = Xy[s.tag];
          if (i && typeof s.props[i] == "string") s.props[i] = _o(s.props[i], r, o);
          else if (s.processTemplateParams || s.tag === "titleTemplate" || s.tag === "title") for (const a of Zy) typeof s[a] == "string" && (s[a] = _o(s[a], r, o, s.tag === "script" && s.props.type.endsWith("json")));
        }
        e._templateParams = r, e._separator = o;
      },
      "tags:afterResolve": ({ tagMap: t }) => {
        const n = t.get("title");
        (n == null ? void 0 : n.textContent) && n.processTemplateParams !== false && (n.textContent = _o(n.textContent, e._templateParams, e._separator));
      }
    }
  });
  function ev(e = {}) {
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
  const tv = (e, t) => Se(t) ? Ke(t) : t, ba = "usehead";
  function nv(e) {
    return {
      install(n) {
        n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(ba, e);
      }
    }.install;
  }
  function ld() {
    if (fr()) {
      const e = Te(ba);
      if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function cd(e, t = {}) {
    const n = t.head || ld();
    return n.ssr ? n.push(e || {}, t) : rv(n, e, t);
  }
  function rv(e, t, n = {}) {
    const r = He(false);
    let o;
    return ef(() => {
      const i = r.value ? {} : Yo(t, tv);
      o ? o.patch(i) : o = e.push(i, n);
    }), tt() && (Dn(() => {
      o.dispose();
    }), Ou(() => {
      r.value = true;
    }), xu(() => {
      r.value = false;
    })), o;
  }
  function ov(e = {}, t = {}) {
    (t.head || ld()).use(Fy);
    const { title: r, titleTemplate: o, ...s } = e;
    return cd({
      title: r,
      titleTemplate: o,
      _flatMeta: s
    }, t);
  }
  hr = function(e) {
    var _a2;
    const t = e || me();
    return ((_a2 = t.ssrContext) == null ? void 0 : _a2.head) || t.runWithContext(() => {
      if (fr()) {
        const n = Te(ba);
        if (!n) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
        return n;
      }
    });
  };
  _s = function(e, t = {}) {
    const n = hr(t.nuxt);
    return cd(e, {
      head: n,
      ...t
    });
  };
  ud = function(e, t = {}) {
    const n = hr(t.nuxt);
    return ov(e, {
      head: n,
      ...t
    });
  };
  let sv, iv, Hl;
  sv = "modulepreload";
  iv = function(e, t) {
    return new URL(e, t).href;
  };
  Hl = {};
  gn = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      let i = function(c) {
        return Promise.all(c.map((f) => Promise.resolve(f).then((p) => ({
          status: "fulfilled",
          value: p
        }), (p) => ({
          status: "rejected",
          reason: p
        }))));
      };
      const a = document.getElementsByTagName("link"), l = document.querySelector("meta[property=csp-nonce]"), u = (l == null ? void 0 : l.nonce) || (l == null ? void 0 : l.getAttribute("nonce"));
      o = i(n.map((c) => {
        if (c = iv(c, r), c in Hl) return;
        Hl[c] = true;
        const f = c.endsWith(".css"), p = f ? '[rel="stylesheet"]' : "";
        if (!!r) for (let g = a.length - 1; g >= 0; g--) {
          const S = a[g];
          if (S.href === c && (!f || S.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${p}`)) return;
        const h = document.createElement("link");
        if (h.rel = f ? "stylesheet" : sv, f || (h.as = "script"), h.crossOrigin = "", h.href = c, u && h.setAttribute("nonce", u), document.head.appendChild(h), f) return new Promise((g, S) => {
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
  let Mo, $o;
  function av() {
    return Mo = $fetch(ha(`builds/meta/${Bt().app.buildId}.json`), {
      responseType: "json"
    }), Mo.then((e) => {
      $o = ny(e.matcher);
    }).catch((e) => {
      console.error("[nuxt] Error fetching app manifest.", e);
    }), Mo;
  }
  function ws() {
    return Mo || av();
  }
  async function _a(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await ws(), !$o) return console.error("[nuxt] Error creating app manifest matcher.", $o), {};
    try {
      return ma({}, ...$o.matchAll(t).reverse());
    } catch (n) {
      return console.error("[nuxt] Error matching route rules.", n), {};
    }
  }
  async function Ul(e, t = {}) {
    if (!await dd(e)) return null;
    const r = await cv(e, t);
    return await fd(r) || null;
  }
  const lv = "_payload.json";
  async function cv(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || Tt(n.pathname, {
      acceptRelative: true
    })) throw new Error("Payload URL must not include hostname: " + e);
    const r = Bt(), o = t.hash || (t.fresh ? Date.now() : r.app.buildId), s = r.app.cdnURL, i = s && await dd(e) ? s : r.app.baseURL;
    return vs(i, n.pathname, lv + (o ? `?${o}` : ""));
  }
  async function fd(e) {
    const t = fetch(e, {
      cache: "force-cache"
    }).then((n) => n.text().then(pd));
    try {
      return await t;
    } catch (n) {
      console.warn("[nuxt] Cannot load payload ", e, n);
    }
    return null;
  }
  async function dd(e = Bn().path) {
    const t = me();
    return e = Xt(e), (await ws()).prerendered.includes(e) ? true : t.runWithContext(async () => {
      const r = await _a({
        path: e
      });
      return !!r.prerender && !r.redirect;
    });
  }
  let Tn = null;
  async function uv() {
    var _a2;
    if (Tn) return Tn;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await pd(e.textContent || ""), n = e.dataset.src ? await fd(e.dataset.src) : void 0;
    return Tn = {
      ...t,
      ...n,
      ...window.__NUXT__
    }, ((_a2 = Tn.config) == null ? void 0 : _a2.public) && (Tn.config.public = Et(Tn.config.public)), Tn;
  }
  async function pd(e) {
    return await Ay(e, me()._payloadRevivers);
  }
  function wa(e, t) {
    me()._payloadRevivers[e] = t;
  }
  const fv = Wf(() => {
    wa("skipHydrate", (e) => {
    });
  });
  var hd = class {
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
  function md(e, [t, n, r], o, s = []) {
    e.children ?? (e.children = /* @__PURE__ */ new Map());
    const i = [
      ...s,
      t
    ], a = new hd([], n && o(i, null, ...n));
    if (e.children.set(t, a), r) for (const l of r) md(a, l, o, i);
  }
  function Vl(e, t, n, r) {
    e.addEventListener(t, n, r), en() && Ln(() => {
      e.removeEventListener(t, n);
    });
  }
  var dv = typeof window < "u";
  function Wl(e, ...t) {
    return typeof e == "function" ? e(...t) : e;
  }
  function pv(e) {
    return e && typeof e == "object" ? JSON.stringify(e, Object.keys(e).sort()) : String(e);
  }
  var wo = (e) => e.map(pv), hv = () => {
  }, mv = {
    gcTime: 1e3 * 60
  }, gv = Symbol(), gd = {
    staleTime: 1e3 * 5,
    gcTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
    enabled: true
  }, yd = Symbol(), vd = () => Te(yd, gd);
  function bd(e) {
    return (e == null ? void 0 : e.placeholderData) != null && e.state.value.status === "pending";
  }
  var ql = {}, yv = "_pc_query", Sa = _y(yv, ({ action: e }) => {
    const t = new hd();
    let n;
    const r = gy(us((E, R) => (n = R) && {
      get: () => (E(), t),
      set: hv
    })), o = en(), s = py()._a, i = vd(), a = e((E, R = null, D, Z = null, ee = 0) => o.run(() => {
      const F = Ue({
        data: D,
        error: Z,
        status: Z ? "error" : D !== void 0 ? "success" : "pending"
      }), z = Ue("idle");
      return Xn({
        key: E,
        state: F,
        placeholderData: null,
        when: ee,
        asyncStatus: z,
        pending: null,
        deps: Xn(/* @__PURE__ */ new Set()),
        gcTimeout: void 0,
        ext: ql,
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
      return R ? (R[2].resume(), R[0] = R[0].map((D) => D.options ? S(D.options, D) : D)) : (l = R = [
        [],
        null,
        o.run(() => Yr())
      ], R[1] = s.runWithContext(() => R[2].run(E)), l = null, u.set(E, R)), R;
    });
    function f(E, R) {
      R && (E.deps.add(R), clearTimeout(E.gcTimeout), E.gcTimeout = void 0, n());
    }
    function p(E, R) {
      !R || !E.deps.has(R) || (E.deps.delete(R), n(), d(E));
    }
    function d(E) {
      E.deps.size > 0 || !E.options || (clearTimeout(E.gcTimeout), Number.isFinite(E.options.gcTime) && (E.gcTimeout = setTimeout(() => {
        O(E);
      }, E.options.gcTime)));
    }
    const h = e((E) => Promise.all(g({
      active: true,
      ...E
    }).map((R) => {
      var _a2;
      return _(R), Ke((_a2 = R.options) == null ? void 0 : _a2.enabled) && v(R);
    }))), g = e((E = {}) => {
      const R = E.key ? r.value.find(wo(E.key)) : r.value;
      return R ? (E.exact ? R.value ? [
        R.value
      ] : [] : [
        ...R
      ]).filter((D) => (E.stale == null || D.stale === E.stale) && (E.active == null || D.active === E.active) && (!E.status || D.state.value.status === E.status) && (!E.predicate || E.predicate(D))) : [];
    }), S = e((E, R) => {
      var _a2;
      const D = {
        ...i,
        ...E
      }, Z = wo(Ke(D.key));
      let ee = t.get(Z);
      return ee || (t.set(Z, ee = a(Z, D, (_a2 = D.initialData) == null ? void 0 : _a2.call(D))), D.placeholderData && ee.state.value.status === "pending" && (ee.placeholderData = Wl(D.placeholderData, bd(R) ? R.placeholderData : R == null ? void 0 : R.state.value.data)), n()), ee.options = D, ee.ext === ql && (ee.ext = {}, k(ee)), l == null ? void 0 : l[0].push(ee), ee;
    }), k = e((E) => {
    }), _ = e((E) => {
      E.when = 0, w(E);
    }), m = e(async (E, R = E.options) => {
      var _a2;
      return E.state.value.error || E.stale ? ((_a2 = E.pending) == null ? void 0 : _a2.refreshCall) ?? v(E, R) : E.state.value;
    }), v = e(async (E, R = E.options) => {
      var _a2;
      E.asyncStatus.value = "loading";
      const D = new AbortController(), { signal: Z } = D;
      (_a2 = E.pending) == null ? void 0 : _a2.abortController.abort();
      const ee = E.pending = {
        abortController: D,
        refreshCall: (async () => R.query({
          signal: Z
        }))().then((F) => (ee === E.pending && M(E, {
          data: F,
          error: null,
          status: "success"
        }), E.state.value)).catch((F) => {
          throw ee === E.pending && F && F.name !== "AbortError" && M(E, {
            status: "error",
            data: E.state.value.data,
            error: F
          }), F;
        }).finally(() => {
          E.asyncStatus.value = "idle", ee === E.pending && (E.pending = null, E.state.value.status !== "pending" && (E.placeholderData = null), E.when = Date.now());
        }),
        when: Date.now()
      };
      return ee.refreshCall;
    }), w = e((E, R) => {
      var _a2;
      (_a2 = E.pending) == null ? void 0 : _a2.abortController.abort(R), E.asyncStatus.value = "idle", E.pending = null;
    }), P = e((E, R) => {
      g(E).forEach((D) => w(D, R));
    }), M = e((E, R) => {
      E.state.value = R, E.when = Date.now();
    }), N = e((E, R) => {
      const D = wo(E);
      let Z = t.get(D);
      Z || t.set(D, Z = a(D)), M(Z, {
        error: null,
        status: "success",
        data: Wl(R, Z.state.value.data)
      }), d(Z), n();
    });
    function C(E) {
      var _a2;
      return (_a2 = r.value.get(wo(E))) == null ? void 0 : _a2.state.value.data;
    }
    const O = e((E) => {
      t.set(E.key), n();
    });
    return {
      caches: r,
      ensureDefinedQuery: c,
      _s: Xn(o),
      setQueryData: N,
      getQueryData: C,
      invalidateQueries: h,
      cancelQueries: P,
      invalidate: _,
      fetch: v,
      refresh: m,
      ensure: S,
      extend: k,
      track: f,
      untrack: p,
      cancel: w,
      create: a,
      remove: O,
      setEntryState: M,
      getEntries: g
    };
  });
  function vv(e, t) {
    for (const n of t) md(e.caches, n, e.create);
  }
  _k = function(e) {
    const t = Sa(), n = vd(), r = tt(), o = en(), s = {
      ...n,
      ...e
    }, { refetchOnMount: i, refetchOnReconnect: a, refetchOnWindowFocus: l, enabled: u } = s;
    let c;
    const f = K(() => (o == null ? void 0 : o._isPaused) ? c : c = t.ensure(s, c));
    c = f.value;
    const p = () => f.value.state.value, d = (v) => t.refresh(f.value, s).catch(v || p), h = (v) => t.fetch(f.value, s).catch(v || p), g = K(() => bd(f.value)), S = K(() => g.value ? {
      status: "success",
      data: f.value.placeholderData,
      error: null
    } : f.value.state.value), k = {};
    for (const v in c.ext) k[v] = K({
      get: () => Ke(f.value.ext[v]),
      set(w) {
        const P = f.value.ext[v];
        Se(P) ? P.value = w : f.value.ext[v] = w;
      }
    });
    const _ = {
      ...k,
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
    }), ds(() => {
      t.untrack(c, r);
    })) : (m = true, o && (t.track(c, o), Ln(() => {
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
    }), dv && (l && Vl(document, "visibilitychange", () => {
      const v = Ke(l);
      document.visibilityState === "visible" && Ke(u) && (v === "always" ? h() : v && d());
    }), a && Vl(window, "online", () => {
      if (Ke(u)) {
        const v = Ke(a);
        v === "always" ? h() : v && d();
      }
    })), _;
  };
  var bv = (e, t = {}) => {
    const { pinia: n = e.config.globalProperties.$pinia, plugins: r, queryOptions: o, mutationOptions: s = {} } = t;
    e.provide(yd, {
      ...gd,
      ...o
    }), e.provide(gv, {
      ...mv,
      ...s
    });
    const i = Sa(n);
    r == null ? void 0 : r.forEach((a) => a({
      scope: i._s,
      queryCache: i,
      pinia: n
    }));
  };
  Kl = function(e) {
    return typeof e == "string" ? `'${e}'` : new _v().serialize(e);
  };
  const _v = function() {
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
  wv = function(e, t) {
    return e === t || Kl(e) === Kl(t);
  };
  let qs, Sv, kv, Ev, Tv;
  qs = (e) => typeof e == "function";
  Sv = (e) => e !== null && typeof e == "object";
  kv = (e) => (Sv(e) || qs(e)) && qs(e.then) && qs(e.catch);
  Ev = Object.prototype.toString;
  Tv = (e) => Ev.call(e);
  wk = (e) => Tv(e) === "[object Object]";
  const Kn = typeof document < "u";
  function _d(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function Rv(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && _d(e.default);
  }
  const ce = Object.assign;
  function Ks(e, t) {
    const n = {};
    for (const r in t) {
      const o = t[r];
      n[r] = kt(o) ? o.map(e) : e(o);
    }
    return n;
  }
  const Ir = () => {
  }, kt = Array.isArray, wd = /#/g, Cv = /&/g, Pv = /\//g, Av = /=/g, xv = /\?/g, Sd = /\+/g, Ov = /%5B/g, Lv = /%5D/g, kd = /%5E/g, Mv = /%60/g, Ed = /%7B/g, $v = /%7C/g, Td = /%7D/g, Iv = /%20/g;
  function ka(e) {
    return encodeURI("" + e).replace($v, "|").replace(Ov, "[").replace(Lv, "]");
  }
  function Nv(e) {
    return ka(e).replace(Ed, "{").replace(Td, "}").replace(kd, "^");
  }
  function Di(e) {
    return ka(e).replace(Sd, "%2B").replace(Iv, "+").replace(wd, "%23").replace(Cv, "%26").replace(Mv, "`").replace(Ed, "{").replace(Td, "}").replace(kd, "^");
  }
  function Dv(e) {
    return Di(e).replace(Av, "%3D");
  }
  function Bv(e) {
    return ka(e).replace(wd, "%23").replace(xv, "%3F");
  }
  function jv(e) {
    return e == null ? "" : Bv(e).replace(Pv, "%2F");
  }
  function Gr(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const Fv = /\/$/, Hv = (e) => e.replace(Fv, "");
  function Gs(e, t, n = "/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = qv(r ?? t, n), {
      fullPath: r + (s && "?") + s + i,
      path: r,
      query: o,
      hash: Gr(i)
    };
  }
  function Uv(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Gl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Vv(e, t, n) {
    const r = t.matched.length - 1, o = n.matched.length - 1;
    return r > -1 && r === o && ar(t.matched[r], n.matched[o]) && Rd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function ar(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function Rd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (const n in e) if (!Wv(e[n], t[n])) return false;
    return true;
  }
  function Wv(e, t) {
    return kt(e) ? zl(e, t) : kt(t) ? zl(t, e) : e === t;
  }
  function zl(e, t) {
    return kt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function qv(e, t) {
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
  var zr;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(zr || (zr = {}));
  var Nr;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(Nr || (Nr = {}));
  function Kv(e) {
    if (!e) if (Kn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Hv(e);
  }
  const Gv = /^[^#]+#/;
  function zv(e, t) {
    return e.replace(Gv, "#") + t;
  }
  function Jv(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const Ss = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Qv(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!o) return;
      t = Jv(o, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Jl(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const Bi = /* @__PURE__ */ new Map();
  function Yv(e, t) {
    Bi.set(e, t);
  }
  function Xv(e) {
    const t = Bi.get(e);
    return Bi.delete(e), t;
  }
  let Zv = () => location.protocol + "//" + location.host;
  function Cd(e, t) {
    const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
    if (s > -1) {
      let a = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), Gl(l, "");
    }
    return Gl(n, e) + r + o;
  }
  function eb(e, t, n, r) {
    let o = [], s = [], i = null;
    const a = ({ state: p }) => {
      const d = Cd(e, location), h = n.value, g = t.value;
      let S = 0;
      if (p) {
        if (n.value = d, t.value = p, i && i === h) {
          i = null;
          return;
        }
        S = g ? p.position - g.position : 0;
      } else r(d);
      o.forEach((k) => {
        k(n.value, h, {
          delta: S,
          type: zr.pop,
          direction: S ? S > 0 ? Nr.forward : Nr.back : Nr.unknown
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
        scroll: Ss()
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
  function Ql(e, t, n, r = false, o = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: o ? Ss() : null
    };
  }
  function tb(e) {
    const { history: t, location: n } = window, r = {
      value: Cd(e, n)
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
      const f = e.indexOf("#"), p = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Zv() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](u, "", p), o.value = u;
      } catch (d) {
        console.error(d), n[c ? "replace" : "assign"](p);
      }
    }
    function i(l, u) {
      const c = ce({}, t.state, Ql(o.value.back, l, o.value.forward, true), u, {
        position: o.value.position
      });
      s(l, c, true), r.value = l;
    }
    function a(l, u) {
      const c = ce({}, o.value, t.state, {
        forward: l,
        scroll: Ss()
      });
      s(c.current, c, true);
      const f = ce({}, Ql(r.value, l, null), {
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
  function nb(e) {
    e = Kv(e);
    const t = tb(e), n = eb(e, t.state, t.location, t.replace);
    function r(s, i = true) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = ce({
      location: "",
      base: e,
      go: r,
      createHref: zv.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(o, "state", {
      enumerable: true,
      get: () => t.state.value
    }), o;
  }
  function rb(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function Pd(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const Ad = Symbol("");
  var Yl;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(Yl || (Yl = {}));
  function lr(e, t) {
    return ce(new Error(), {
      type: e,
      [Ad]: true
    }, t);
  }
  function xt(e, t) {
    return e instanceof Error && Ad in e && (t == null || !!(e.type & t));
  }
  const Xl = "[^/]+?", ob = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, sb = /[.+*?^${}()[\]/\\]/g;
  function ib(e, t) {
    const n = ce({}, ob, t), r = [];
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
        if (p.type === 0) f || (o += "/"), o += p.value.replace(sb, "\\$&"), d += 40;
        else if (p.type === 1) {
          const { value: h, repeatable: g, optional: S, regexp: k } = p;
          s.push({
            name: h,
            repeatable: g,
            optional: S
          });
          const _ = k || Xl;
          if (_ !== Xl) {
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
          const { value: h, repeatable: g, optional: S } = d, k = h in u ? u[h] : "";
          if (kt(k) && !g) throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const _ = kt(k) ? k.join("/") : k;
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
  function ab(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function xd(e, t) {
    let n = 0;
    const r = e.score, o = t.score;
    for (; n < r.length && n < o.length; ) {
      const s = ab(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (Zl(r)) return 1;
      if (Zl(o)) return -1;
    }
    return o.length - r.length;
  }
  function Zl(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const lb = {
    type: 0,
    value: ""
  }, cb = /[a-zA-Z0-9_]/;
  function ub(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        lb
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
          l === "(" ? n = 2 : cb.test(l) ? p() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
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
  function fb(e, t, n) {
    const r = ib(ub(e.path), n), o = ce(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
  }
  function db(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = rc({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function o(f) {
      return r.get(f);
    }
    function s(f, p, d) {
      const h = !d, g = tc(f);
      g.aliasOf = d && d.record;
      const S = rc(t, f), k = [
        g
      ];
      if ("alias" in f) {
        const v = typeof f.alias == "string" ? [
          f.alias
        ] : f.alias;
        for (const w of v) k.push(tc(ce({}, g, {
          components: d ? d.record.components : g.components,
          path: w,
          aliasOf: d ? d.record : g
        })));
      }
      let _, m;
      for (const v of k) {
        const { path: w } = v;
        if (p && w[0] !== "/") {
          const P = p.record.path, M = P[P.length - 1] === "/" ? "" : "/";
          v.path = p.record.path + (w && M + w);
        }
        if (_ = fb(v, p, S), d ? d.alias.push(_) : (m = m || _, m !== _ && m.alias.push(_), h && f.name && !nc(_) && i(f.name)), Od(_) && l(_), g.children) {
          const P = g.children;
          for (let M = 0; M < P.length; M++) s(P[M], _, d && d.children[M]);
        }
        d = d || _;
      }
      return m ? () => {
        i(m);
      } : Ir;
    }
    function i(f) {
      if (Pd(f)) {
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
      const p = mb(f, n);
      n.splice(p, 0, f), f.record.name && !nc(f) && r.set(f.record.name, f);
    }
    function u(f, p) {
      let d, h = {}, g, S;
      if ("name" in f && f.name) {
        if (d = r.get(f.name), !d) throw lr(1, {
          location: f
        });
        S = d.record.name, h = ce(ec(p.params, d.keys.filter((m) => !m.optional).concat(d.parent ? d.parent.keys.filter((m) => m.optional) : []).map((m) => m.name)), f.params && ec(f.params, d.keys.map((m) => m.name))), g = d.stringify(h);
      } else if (f.path != null) g = f.path, d = n.find((m) => m.re.test(g)), d && (h = d.parse(g), S = d.record.name);
      else {
        if (d = p.name ? r.get(p.name) : n.find((m) => m.re.test(p.path)), !d) throw lr(1, {
          location: f,
          currentLocation: p
        });
        S = d.record.name, h = ce({}, p.params, f.params), g = d.stringify(h);
      }
      const k = [];
      let _ = d;
      for (; _; ) k.unshift(_.record), _ = _.parent;
      return {
        name: S,
        path: g,
        params: h,
        matched: k,
        meta: hb(k)
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
  function ec(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function tc(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: pb(e),
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
  function pb(e) {
    const t = {}, n = e.props || false;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function nc(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function hb(e) {
    return e.reduce((t, n) => ce(t, n.meta), {});
  }
  function rc(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function mb(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const s = n + r >> 1;
      xd(e, t[s]) < 0 ? r = s : n = s + 1;
    }
    const o = gb(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r;
  }
  function gb(e) {
    let t = e;
    for (; t = t.parent; ) if (Od(t) && xd(e, t) === 0) return t;
  }
  function Od({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function yb(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(Sd, " "), i = s.indexOf("="), a = Gr(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : Gr(s.slice(i + 1));
      if (a in t) {
        let u = t[a];
        kt(u) || (u = t[a] = [
          u
        ]), u.push(l);
      } else t[a] = l;
    }
    return t;
  }
  function oc(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = Dv(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (kt(r) ? r.map((s) => s && Di(s)) : [
        r && Di(r)
      ]).forEach((s) => {
        s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
      });
    }
    return t;
  }
  function vb(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = kt(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
    }
    return t;
  }
  const bb = Symbol(""), sc = Symbol(""), ro = Symbol(""), Ea = Symbol(""), ji = Symbol("");
  function kr() {
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
  function hn(e, t, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, l) => {
      const u = (p) => {
        p === false ? l(lr(4, {
          from: n,
          to: t
        })) : p instanceof Error ? l(p) : rb(p) ? l(lr(2, {
          from: t,
          to: p
        })) : (i && r.enterCallbacks[o] === i && typeof p == "function" && i.push(p), a());
      }, c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((p) => l(p));
    });
  }
  function zs(e, t, n, r, o = (s) => s()) {
    const s = [];
    for (const i of e) for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a])) if (_d(l)) {
        const c = (l.__vccOpts || l)[t];
        c && s.push(hn(c, n, r, i, a, o));
      } else {
        let u = l();
        s.push(() => u.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
          const f = Rv(c) ? c.default : c;
          i.mods[a] = c, i.components[a] = f;
          const d = (f.__vccOpts || f)[t];
          return d && hn(d, n, r, i, a, o)();
        }));
      }
    }
    return s;
  }
  function ic(e) {
    const t = Te(ro), n = Te(Ea), r = K(() => {
      const l = re(e.to);
      return t.resolve(l);
    }), o = K(() => {
      const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const p = f.findIndex(ar.bind(null, c));
      if (p > -1) return p;
      const d = ac(l[u - 2]);
      return u > 1 && ac(c) === d && f[f.length - 1].path !== d ? f.findIndex(ar.bind(null, l[u - 2])) : p;
    }), s = K(() => o.value > -1 && Eb(n.params, r.value.params)), i = K(() => o.value > -1 && o.value === n.matched.length - 1 && Rd(n.params, r.value.params));
    function a(l = {}) {
      if (kb(l)) {
        const u = t[re(e.replace) ? "replace" : "push"](re(e.to)).catch(Ir);
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
  function _b(e) {
    return e.length === 1 ? e[0] : e;
  }
  const wb = pe({
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
    useLink: ic,
    setup(e, { slots: t }) {
      const n = Et(ic(e)), { options: r } = Te(ro), o = K(() => ({
        [lc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [lc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const s = t.default && _b(t.default(n));
        return e.custom ? s : he("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: o.value
        }, s);
      };
    }
  }), Sb = wb;
  function kb(e) {
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
      } else if (!kt(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return false;
    }
    return true;
  }
  function ac(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const lc = (e, t, n) => e ?? t ?? n, Tb = pe({
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
      const r = Te(ji), o = K(() => e.route || r.value), s = Te(sc, 0), i = K(() => {
        let u = re(s);
        const { matched: c } = o.value;
        let f;
        for (; (f = c[u]) && !f.components; ) u++;
        return u;
      }), a = K(() => o.value.matched[i.value]);
      Gt(sc, K(() => i.value + 1)), Gt(bb, a), Gt(ji, o);
      const l = He();
      return at(() => [
        l.value,
        a.value,
        e.name
      ], ([u, c, f], [p, d, h]) => {
        c && (c.instances[f] = u, d && d !== c && u && u === p && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards), c.updateGuards.size || (c.updateGuards = d.updateGuards))), u && c && (!d || !ar(c, d) || !p) && (c.enterCallbacks[f] || []).forEach((g) => g(u));
      }, {
        flush: "post"
      }), () => {
        const u = o.value, c = e.name, f = a.value, p = f && f.components[c];
        if (!p) return cc(n.default, {
          Component: p,
          route: u
        });
        const d = f.props[c], h = d ? d === true ? u.params : typeof d == "function" ? d(u) : d : null, S = he(p, ce({}, h, t, {
          onVnodeUnmounted: (k) => {
            k.component.isUnmounted && (f.instances[c] = null);
          },
          ref: l
        }));
        return cc(n.default, {
          Component: S,
          route: u
        }) || S;
      };
    }
  });
  function cc(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const Ld = Tb;
  function Rb(e) {
    const t = db(e.routes, e), n = e.parseQuery || yb, r = e.stringifyQuery || oc, o = e.history, s = kr(), i = kr(), a = kr(), l = Ue(dt);
    let u = dt;
    Kn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ks.bind(null, (x) => "" + x), f = Ks.bind(null, jv), p = Ks.bind(null, Gr);
    function d(x, W) {
      let U, Q;
      return Pd(x) ? (U = t.getRecordMatcher(x), Q = W) : Q = x, t.addRoute(Q, U);
    }
    function h(x) {
      const W = t.getRecordMatcher(x);
      W && t.removeRoute(W);
    }
    function g() {
      return t.getRoutes().map((x) => x.record);
    }
    function S(x) {
      return !!t.getRecordMatcher(x);
    }
    function k(x, W) {
      if (W = ce({}, W || l.value), typeof x == "string") {
        const b = Gs(n, x, W.path), T = t.resolve({
          path: b.path
        }, W), L = o.createHref(b.fullPath);
        return ce(b, T, {
          params: p(T.params),
          hash: Gr(b.hash),
          redirectedFrom: void 0,
          href: L
        });
      }
      let U;
      if (x.path != null) U = ce({}, x, {
        path: Gs(n, x.path, W.path).path
      });
      else {
        const b = ce({}, x.params);
        for (const T in b) b[T] == null && delete b[T];
        U = ce({}, x, {
          params: f(b)
        }), W.params = f(W.params);
      }
      const Q = t.resolve(U, W), le = x.hash || "";
      Q.params = c(p(Q.params));
      const Ee = Uv(r, ce({}, x, {
        hash: Nv(le),
        path: Q.path
      })), y = o.createHref(Ee);
      return ce({
        fullPath: Ee,
        hash: le,
        query: r === oc ? vb(x.query) : x.query || {}
      }, Q, {
        redirectedFrom: void 0,
        href: y
      });
    }
    function _(x) {
      return typeof x == "string" ? Gs(n, x, l.value.path) : ce({}, x);
    }
    function m(x, W) {
      if (u !== x) return lr(8, {
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
    function P(x) {
      const W = x.matched[x.matched.length - 1];
      if (W && W.redirect) {
        const { redirect: U } = W;
        let Q = typeof U == "function" ? U(x) : U;
        return typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = _(Q) : {
          path: Q
        }, Q.params = {}), ce({
          query: x.query,
          hash: x.hash,
          params: Q.path != null ? {} : x.params
        }, Q);
      }
    }
    function M(x, W) {
      const U = u = k(x), Q = l.value, le = x.state, Ee = x.force, y = x.replace === true, b = P(U);
      if (b) return M(ce(_(b), {
        state: typeof b == "object" ? ce({}, le, b.state) : le,
        force: Ee,
        replace: y
      }), W || U);
      const T = U;
      T.redirectedFrom = W;
      let L;
      return !Ee && Vv(r, Q, U) && (L = lr(16, {
        to: T,
        from: Q
      }), Rt(Q, Q, true, false)), (L ? Promise.resolve(L) : O(T, Q)).catch((A) => xt(A) ? xt(A, 2) ? A : rn(A) : J(A, T, Q)).then((A) => {
        if (A) {
          if (xt(A, 2)) return M(ce({
            replace: y
          }, _(A.to), {
            state: typeof A.to == "object" ? ce({}, le, A.to.state) : le,
            force: Ee
          }), W || T);
        } else A = R(T, Q, true, y, le);
        return E(T, Q, A), A;
      });
    }
    function N(x, W) {
      const U = m(x, W);
      return U ? Promise.reject(U) : Promise.resolve();
    }
    function C(x) {
      const W = Fn.values().next().value;
      return W && typeof W.runWithContext == "function" ? W.runWithContext(x) : x();
    }
    function O(x, W) {
      let U;
      const [Q, le, Ee] = Cb(x, W);
      U = zs(Q.reverse(), "beforeRouteLeave", x, W);
      for (const b of Q) b.leaveGuards.forEach((T) => {
        U.push(hn(T, x, W));
      });
      const y = N.bind(null, x, W);
      return U.push(y), ut(U).then(() => {
        U = [];
        for (const b of s.list()) U.push(hn(b, x, W));
        return U.push(y), ut(U);
      }).then(() => {
        U = zs(le, "beforeRouteUpdate", x, W);
        for (const b of le) b.updateGuards.forEach((T) => {
          U.push(hn(T, x, W));
        });
        return U.push(y), ut(U);
      }).then(() => {
        U = [];
        for (const b of Ee) if (b.beforeEnter) if (kt(b.beforeEnter)) for (const T of b.beforeEnter) U.push(hn(T, x, W));
        else U.push(hn(b.beforeEnter, x, W));
        return U.push(y), ut(U);
      }).then(() => (x.matched.forEach((b) => b.enterCallbacks = {}), U = zs(Ee, "beforeRouteEnter", x, W, C), U.push(y), ut(U))).then(() => {
        U = [];
        for (const b of i.list()) U.push(hn(b, x, W));
        return U.push(y), ut(U);
      }).catch((b) => xt(b, 8) ? b : Promise.reject(b));
    }
    function E(x, W, U) {
      a.list().forEach((Q) => C(() => Q(x, W, U)));
    }
    function R(x, W, U, Q, le) {
      const Ee = m(x, W);
      if (Ee) return Ee;
      const y = W === dt, b = Kn ? history.state : {};
      U && (Q || y ? o.replace(x.fullPath, ce({
        scroll: y && b && b.scroll
      }, le)) : o.push(x.fullPath, le)), l.value = x, Rt(x, W, U, y), rn();
    }
    let D;
    function Z() {
      D || (D = o.listen((x, W, U) => {
        if (!lo.listening) return;
        const Q = k(x), le = P(Q);
        if (le) {
          M(ce(le, {
            replace: true,
            force: true
          }), Q).catch(Ir);
          return;
        }
        u = Q;
        const Ee = l.value;
        Kn && Yv(Jl(Ee.fullPath, U.delta), Ss()), O(Q, Ee).catch((y) => xt(y, 12) ? y : xt(y, 2) ? (M(ce(_(y.to), {
          force: true
        }), Q).then((b) => {
          xt(b, 20) && !U.delta && U.type === zr.pop && o.go(-1, false);
        }).catch(Ir), Promise.reject()) : (U.delta && o.go(-U.delta, false), J(y, Q, Ee))).then((y) => {
          y = y || R(Q, Ee, false), y && (U.delta && !xt(y, 8) ? o.go(-U.delta, false) : U.type === zr.pop && xt(y, 20) && o.go(-1, false)), E(Q, Ee, y);
        }).catch(Ir);
      }));
    }
    let ee = kr(), F = kr(), z;
    function J(x, W, U) {
      rn(x);
      const Q = F.list();
      return Q.length ? Q.forEach((le) => le(x, W, U)) : console.error(x), Promise.reject(x);
    }
    function Ae() {
      return z && l.value !== dt ? Promise.resolve() : new Promise((x, W) => {
        ee.add([
          x,
          W
        ]);
      });
    }
    function rn(x) {
      return z || (z = !x, Z(), ee.list().forEach(([W, U]) => x ? U(x) : W()), ee.reset()), x;
    }
    function Rt(x, W, U, Q) {
      const { scrollBehavior: le } = e;
      if (!Kn || !le) return Promise.resolve();
      const Ee = !U && Xv(Jl(x.fullPath, 0)) || (Q || !U) && history.state && history.state.scroll || null;
      return wt().then(() => le(x, W, Ee)).then((y) => y && Qv(y)).catch((y) => J(y, x, W));
    }
    const Qe = (x) => o.go(x);
    let jn;
    const Fn = /* @__PURE__ */ new Set(), lo = {
      currentRoute: l,
      listening: true,
      addRoute: d,
      removeRoute: h,
      clearRoutes: t.clearRoutes,
      hasRoute: S,
      getRoutes: g,
      resolve: k,
      options: e,
      push: v,
      replace: w,
      go: Qe,
      back: () => Qe(-1),
      forward: () => Qe(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: F.add,
      isReady: Ae,
      install(x) {
        const W = this;
        x.component("RouterLink", Sb), x.component("RouterView", Ld), x.config.globalProperties.$router = W, Object.defineProperty(x.config.globalProperties, "$route", {
          enumerable: true,
          get: () => re(l)
        }), Kn && !jn && l.value === dt && (jn = true, v(o.location).catch((le) => {
        }));
        const U = {};
        for (const le in dt) Object.defineProperty(U, le, {
          get: () => l.value[le],
          enumerable: true
        });
        x.provide(ro, W), x.provide(Ea, Nt(U)), x.provide(ji, l);
        const Q = x.unmount;
        Fn.add(x), x.unmount = function() {
          Fn.delete(x), Fn.size < 1 && (u = dt, D && D(), D = null, l.value = dt, jn = false, z = false), Q();
        };
      }
    };
    function ut(x) {
      return x.reduce((W, U) => W.then(() => C(U)), Promise.resolve());
    }
    return lo;
  }
  function Cb(e, t) {
    const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
      const a = t.matched[i];
      a && (e.matched.find((u) => ar(u, a)) ? r.push(a) : n.push(a));
      const l = e.matched[i];
      l && (t.matched.find((u) => ar(u, l)) || o.push(l));
    }
    return [
      n,
      r,
      o
    ];
  }
  Sk = function() {
    return Te(ro);
  };
  Md = function(e) {
    return Te(Ea);
  };
  const $d = (e, t) => ({
    default: () => {
      var _a2;
      return e ? he(cm, e === true ? {} : e, t) : (_a2 = t.default) == null ? void 0 : _a2.call(t);
    }
  }), Pb = /(:\w+)\([^)]+\)/g, Ab = /(:\w+)[?+*]/g, xb = /:\w+/g;
  function uc(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(Pb, "$1").replace(Ab, "$1").replace(xb, (n) => {
      var _a2;
      return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
    });
    return typeof t == "function" ? t(e) : t;
  }
  function Id(e, t) {
    return e === t || t === dt ? false : uc(e) !== uc(t) ? true : !e.matched.every((r, o) => {
      var _a2, _b2;
      return r.components && r.components.default === ((_b2 = (_a2 = t.matched[o]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default);
    });
  }
  function Ob(e, t = false) {
    if (e) {
      if (e.nodeName === "#comment" && e.nodeValue === "[") return Nd(e, [], t);
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
  function Nd(e, t = [], n = false) {
    var _a2;
    if (e && e.nodeName) {
      if (Mb(e)) return t;
      if (!Lb(e)) {
        const r = e.cloneNode(true);
        n && ((_a2 = r.querySelectorAll) == null ? void 0 : _a2.call(r, "[data-island-slot]").forEach((o) => {
          o.innerHTML = "";
        })), t.push(r.outerHTML);
      }
      Nd(e.nextSibling, t, n);
    }
    return t;
  }
  function Js(e, t) {
    const n = e ? Ob(e) : [
      t
    ];
    return n ? Jh(n.join(""), n.length) : he("div");
  }
  function Lb(e) {
    return e.nodeName === "#comment" && e.nodeValue === "[";
  }
  function Mb(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]";
  }
  let Dd, So, Qs;
  Dd = Symbol.for("nuxt:client-only");
  So = "<div></div>";
  kk = pe({
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
      return o && (o._nuxtClientOnly = true), Gt(Dd, true), () => {
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
  Qs = /* @__PURE__ */ new WeakMap();
  Ek = function(e) {
    if (Qs.has(e)) return Qs.get(e);
    const t = {
      ...e
    };
    return t.render ? t.render = (n, r, o, s, i, a) => {
      var _a2;
      if (s.mounted$ ?? n.mounted$) {
        const l = (_a2 = e.render) == null ? void 0 : _a2.bind(n)(n, r, o, s, i, a);
        return l.children === null || typeof l.children == "string" ? lt(l) : he(l);
      }
      return Js(n._.vnode.el, So);
    } : t.template && (t.template = `
      <template v-if="mounted$">${e.template}</template>
      <template v-else>${So}</template>
    `), t.setup = (n, r) => {
      var _a2;
      const o = me(), s = Ue(o.isHydrating === false), i = tt();
      if (o.isHydrating) {
        const l = {
          ...i.attrs
        }, u = $b(i);
        for (const c in l) delete i.attrs[c];
        St(() => {
          Object.assign(i.attrs, l), i.vnode.dirs = u;
        });
      }
      St(() => {
        s.value = true;
      });
      const a = ((_a2 = e.setup) == null ? void 0 : _a2.call(e, n, r)) || {};
      return kv(a) ? Promise.resolve(a).then((l) => typeof l != "function" ? (l || (l = {}), l.mounted$ = s, l) : (...u) => {
        if (s.value || !o.isHydrating) {
          const c = l(...u);
          return c.children === null || typeof c.children == "string" ? lt(c) : he(c);
        }
        return Js(i == null ? void 0 : i.vnode.el, So);
      }) : typeof a == "function" ? (...l) => {
        if (s.value) {
          const u = a(...l), c = t.inheritAttrs !== false ? r.attrs : void 0;
          return u.children === null || typeof u.children == "string" ? lt(u, c) : he(u, c);
        }
        return Js(i == null ? void 0 : i.vnode.el, So);
      } : Object.assign(a, {
        mounted$: s
      });
    }, Qs.set(e, t), t;
  };
  function $b(e) {
    if (!e || !e.vnode.dirs) return null;
    const t = e.vnode.dirs;
    return e.vnode.dirs = null, t;
  }
  let Fi, Ib, Nb;
  Fi = globalThis.requestIdleCallback || ((e) => {
    const t = Date.now(), n = {
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout(() => {
      e(n);
    }, 1);
  });
  Ib = globalThis.cancelIdleCallback || ((e) => {
    clearTimeout(e);
  });
  mr = (e) => {
    const t = me();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
      Fi(() => e());
    }) : Fi(() => e());
  };
  Nb = (e) => e === "defer" || e === false;
  Tk = function(...e) {
    var _a2;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    Db(e[0], e[1]) && e.unshift(t);
    let [n, r, o = {}] = e;
    const s = K(() => Ke(n));
    if (typeof s.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = me();
    o.server ?? (o.server = true), o.default ?? (o.default = jb), o.getCachedData ?? (o.getCachedData = jd), o.lazy ?? (o.lazy = false), o.immediate ?? (o.immediate = true), o.deep ?? (o.deep = Wt.deep), o.dedupe ?? (o.dedupe = "cancel"), o._functionName, i._asyncData[s.value];
    const a = {
      cause: "initial",
      dedupe: o.dedupe
    };
    ((_a2 = i._asyncData[s.value]) == null ? void 0 : _a2._init) || (a.cachedData = o.getCachedData(s.value, i, {
      cause: "initial"
    }), i._asyncData[s.value] = fc(i, s.value, r, o, a.cachedData));
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
        Mu(() => {
          _.forEach((m) => {
            m();
          }), _.splice(0, _.length);
        }), ds(() => _.splice(0, _.length));
      }
      const g = h && (h._nuxtClientOnly || Te(Dd, false));
      c && i.isHydrating && (l.error.value || l.data.value != null) ? l.status.value = l.error.value ? "error" : "success" : h && (!g && i.payload.serverRendered && i.isHydrating || o.lazy) && o.immediate ? h._nuxtOnBeforeMountCbs.push(u) : o.immediate && u();
      const S = en(), k = at([
        s,
        ...o.watch || []
      ], ([_], [m]) => {
        var _a3, _b2;
        if ((_ || m) && _ !== m) {
          const v = ((_a3 = i._asyncData[m]) == null ? void 0 : _a3.data.value) !== Wt.value, w = i._asyncDataPromises[m] !== void 0;
          m && d(m);
          const P = {
            cause: "initial",
            dedupe: o.dedupe
          };
          ((_b2 = i._asyncData[_]) == null ? void 0 : _b2._init) || (P.cachedData = o.getCachedData(_, i, {
            cause: "initial"
          }), i._asyncData[_] = fc(i, _, r, o, P.cachedData)), i._asyncData[_]._deps++, (o.immediate || v || w) && i._asyncData[_].execute(P);
        } else l._execute({
          cause: "watch",
          dedupe: o.dedupe
        });
      }, {
        flush: "sync"
      });
      S && Ln(() => {
        k(), d(s.value);
      });
    }
    const f = {
      data: ko(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.data;
      }),
      pending: ko(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.pending;
      }),
      status: ko(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.status;
      }),
      error: ko(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.error;
      }),
      refresh: (...d) => i._asyncData[s.value].execute(...d),
      execute: (...d) => i._asyncData[s.value].execute(...d),
      clear: () => Bd(i, s.value)
    }, p = Promise.resolve(i._asyncDataPromises[s.value]).then(() => f);
    return Object.assign(p, f), p;
  };
  function ko(e) {
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
  function Db(e, t) {
    return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function");
  }
  async function Hi(e) {
    await new Promise((n) => mr(n)), await me().hooks.callHookParallel("app:data:refresh", void 0);
  }
  function Bd(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = Wt.errorValue), e._asyncData[t] && (e._asyncData[t].data.value = re(e._asyncData[t]._default()), e._asyncData[t].error.value = Wt.errorValue, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = true), e._asyncDataPromises[t] = void 0);
  }
  function Bb(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function fc(e, t, n, r, o) {
    var _a2;
    (_a2 = e.payload._errors)[t] ?? (_a2[t] = Wt.errorValue);
    const s = r.getCachedData !== jd, i = n, a = r.deep ? He : Ue, l = o != null, u = e.hook("app:data:refresh", async (f) => {
      (!f || f.includes(t)) && await c.execute({
        cause: "refresh:hook"
      });
    }), c = {
      data: a(l ? o : r.default()),
      pending: K(() => c.status.value === "pending"),
      error: na(e.payload._errors, t),
      status: Ue("idle"),
      execute: (...f) => {
        const [p, d = void 0] = f, h = p && d === void 0 && typeof p == "object" ? p : {};
        if (e._asyncDataPromises[t]) {
          if (Nb(h.dedupe ?? r.dedupe)) return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = true;
        }
        {
          const S = "cachedData" in h ? h.cachedData : r.getCachedData(t, e, {
            cause: h.cause ?? "refresh:manual"
          });
          if (S != null) return e.payload.data[t] = c.data.value = S, c.error.value = Wt.errorValue, c.status.value = "success", Promise.resolve(S);
        }
        c.status.value = "pending";
        const g = new Promise((S, k) => {
          try {
            S(i(e));
          } catch (_) {
            k(_);
          }
        }).then(async (S) => {
          if (g.cancelled) return e._asyncDataPromises[t];
          let k = S;
          r.transform && (k = await r.transform(S)), r.pick && (k = Bb(k, r.pick)), e.payload.data[t] = k, c.data.value = k, c.error.value = Wt.errorValue, c.status.value = "success";
        }).catch((S) => {
          if (g.cancelled) return e._asyncDataPromises[t];
          c.error.value = wn(S), c.data.value = re(r.default()), c.status.value = "error";
        }).finally(() => {
          g.cancelled || delete e._asyncDataPromises[t];
        });
        return e._asyncDataPromises[t] = g, e._asyncDataPromises[t];
      },
      _execute: fy((...f) => c.execute(...f), 0, {
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
          ((_a4 = e._asyncData[t]) == null ? void 0 : _a4._init) || (Bd(e, t), c.execute = () => Promise.resolve(), c.data.value = Wt.value);
        });
      }
    };
    return c;
  }
  const jb = () => Wt.value, jd = (e, t, n) => {
    if (t.isHydrating) return t.payload.data[e];
    if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook") return t.static.data[e];
  }, Fb = "$s";
  Fd = function(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = Fb + n, s = me(), i = na(s.payload.state, o);
    if (i.value === void 0 && r) {
      const a = r();
      if (Se(a)) return s.payload.state[o] = a, a;
      i.value = a;
    }
    return i;
  };
  function Hb(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {}, r = t || {}, o = r.decode || Ub;
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
        u.codePointAt(0) === 34 && (u = u.slice(1, -1)), n[l] = Vb(u, o);
      }
      s = a + 1;
    }
    return n;
  }
  function Ub(e) {
    return e.includes("%") ? decodeURIComponent(e) : e;
  }
  function Vb(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  const Eo = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function dc(e, t, n) {
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
      if (!Wb(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
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
  function Wb(e) {
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
  const qb = {
    path: "/",
    watch: true,
    decode: (e) => qr(decodeURIComponent(e)),
    encode: (e) => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
  }, To = window.cookieStore;
  function pc(e, t) {
    var _a2;
    const n = {
      ...qb,
      ...t
    };
    n.filter ?? (n.filter = (u) => u === e);
    const r = hc(n) || {};
    let o;
    n.maxAge !== void 0 ? o = n.maxAge * 1e3 : n.expires && (o = n.expires.getTime() - Date.now());
    const s = o !== void 0 && o <= 0, i = s || r[e] === void 0 || r[e] === null, a = mt(s ? void 0 : r[e] ?? ((_a2 = n.default) == null ? void 0 : _a2.call(n))), l = o && !s ? zb(a, o, n.watch && n.watch !== "shallow") : He(a);
    {
      let u = null;
      try {
        !To && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${e}`));
      } catch {
      }
      const c = (h = false) => {
        !h && (n.readonly || wv(l.value, r[e])) || (Gb(e, l.value, n), r[e] = mt(l.value), u == null ? void 0 : u.postMessage({
          value: n.encode(l.value)
        }));
      }, f = (h) => {
        var _a3;
        const g = h.refresh ? (_a3 = hc(n)) == null ? void 0 : _a3[e] : n.decode(h.value);
        p = true, l.value = g, r[e] = mt(g), wt(() => {
          p = false;
        });
      };
      let p = false;
      const d = !!en();
      if (d && Ln(() => {
        p = true, c(), u == null ? void 0 : u.close();
      }), To) {
        const h = (g) => {
          const S = g.changed.find((_) => _.name === e), k = g.deleted.find((_) => _.name === e);
          S && f({
            value: S.value
          }), k && f({
            value: null
          });
        };
        To.addEventListener("change", h), d && Ln(() => To.removeEventListener("change", h));
      } else u && (u.onmessage = ({ data: h }) => f(h));
      n.watch && at(l, () => {
        p || c();
      }, {
        deep: n.watch !== "shallow"
      }), i && c(i);
    }
    return l;
  }
  function hc(e = {}) {
    return Hb(document.cookie, e);
  }
  function Kb(e, t, n = {}) {
    return t == null ? dc(e, t, {
      ...n,
      maxAge: -1
    }) : dc(e, t, n);
  }
  function Gb(e, t, n = {}) {
    document.cookie = Kb(e, t, n);
  }
  const mc = 2147483647;
  function zb(e, t, n) {
    let r, o, s = 0;
    const i = n ? He(e) : {
      value: e
    };
    return en() && Ln(() => {
      o == null ? void 0 : o(), clearTimeout(r);
    }), us((a, l) => {
      n && (o = at(i, l));
      function u() {
        s = 0, clearTimeout(r);
        const c = t - s, f = c < mc ? c : mc;
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
  function Jb(e) {
    if ((e == null ? void 0 : e.__asyncLoader) && !e.__asyncResolved) return e.__asyncLoader();
  }
  async function Hd(e, t = Ie()) {
    const { path: n, matched: r } = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = /* @__PURE__ */ new Set()), t._routePreloaded.has(n))) return;
    const o = t._preloadPromises || (t._preloadPromises = []);
    if (o.length > 4) return Promise.all(o).then(() => Hd(e, t));
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
  function Qb(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
      n = qr(sessionStorage.getItem("nuxt:reload") || "{}");
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
  const Yb = {
    scrollBehavior(e, t, n) {
      var _a2;
      const r = me(), o = ((_a2 = Ie().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
      if (e.path === t.path) return t.hash && !e.hash ? {
        left: 0,
        top: 0
      } : e.hash ? {
        el: e.hash,
        top: Ud(e.hash),
        behavior: o
      } : false;
      if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === false) return false;
      const i = r._runningTransition ? "page:transition:finish" : "page:loading:end";
      return new Promise((a) => {
        if (t === dt) {
          a(gc(e, t, n, o));
          return;
        }
        r.hooks.hookOnce(i, () => {
          requestAnimationFrame(() => a(gc(e, t, n, o)));
        });
      });
    }
  };
  function Ud(e) {
    try {
      const t = document.querySelector(e);
      if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
    } catch {
    }
    return 0;
  }
  function gc(e, t, n, r) {
    if (n) return n;
    const o = Id(e, t);
    return e.hash ? {
      el: e.hash,
      top: Ud(e.hash),
      behavior: o ? r : "instant"
    } : {
      left: 0,
      top: 0,
      behavior: o ? r : "instant"
    };
  }
  const Xb = {
    scrollBehaviorType: "smooth",
    hashMode: false
  }, sn = {
    ...Xb,
    ...Yb
  }, Zb = (...e) => e.find((t) => t !== void 0);
  function e_(e) {
    const t = e.componentName || "NuxtLink";
    function n(s) {
      return typeof s == "string" && s.startsWith("#");
    }
    function r(s, i, a) {
      const l = a ?? e.trailingSlash;
      if (!s || l !== "append" && l !== "remove") return s;
      if (typeof s == "string") return Ro(s, l);
      const u = "path" in s && s.path !== void 0 ? s.path : i(s).path;
      return {
        ...s,
        name: void 0,
        path: Ro(u, l)
      };
    }
    function o(s) {
      const i = Ie(), a = Bt(), l = K(() => !!s.target && s.target !== "_self"), u = K(() => {
        const S = s.to || s.href || "";
        return typeof S == "string" && Tt(S, {
          acceptRelative: true
        });
      }), c = pi("RouterLink"), f = c && typeof c != "string" ? c.useLink : void 0, p = K(() => {
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
          const k = typeof d.value == "object" && "path" in d.value ? Li(d.value) : d.value, _ = typeof k == "object" ? i.resolve(k).href : k;
          return Ro(_, S);
        }
        return typeof d.value == "object" ? ((_a2 = i.resolve(d.value)) == null ? void 0 : _a2.href) ?? null : Ro(vs(a.app.baseURL, d.value), S);
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
          await cy(g.value, {
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
        function k(m) {
          var _a2, _b2;
          return !h.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === m : ((_a2 = s.prefetchOn) == null ? void 0 : _a2[m]) ?? ((_b2 = e.prefetchOn) == null ? void 0 : _b2[m])) && (s.prefetch ?? e.prefetch) !== false && s.noPrefetch !== true && s.target !== "_blank" && !r_();
        }
        async function _(m = me()) {
          if (h.value) return;
          h.value = true;
          const v = typeof l.value == "string" ? l.value : f.value ? Li(l.value) : a.resolve(l.value).fullPath, w = f.value ? new URL(v, window.location.href).href : v;
          await Promise.all([
            m.hooks.callHook("link:prefetch", w).catch(() => {
            }),
            !f.value && !p.value && Hd(l.value, a).catch(() => {
            })
          ]);
        }
        if (k("visibility")) {
          const m = me();
          let v, w = null;
          St(() => {
            const P = t_();
            mr(() => {
              v = Fi(() => {
                var _a2;
                ((_a2 = g == null ? void 0 : g.value) == null ? void 0 : _a2.tagName) && (w = P.observe(g.value, async () => {
                  w == null ? void 0 : w(), w = null, await _(m);
                }));
              });
            });
          }), Dn(() => {
            v && Ib(v), w == null ? void 0 : w(), w = null;
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
            return s.custom || (k("interaction") && (w.onPointerenter = _.bind(null, void 0), w.onFocus = _.bind(null, void 0)), h.value && (w.class = s.prefetchedClass || e.prefetchedClass), w.rel = s.rel || void 0), he(pi("RouterLink"), w, i.default);
          }
          const m = s.target || null, v = Zb(s.noRel ? "" : s.rel, e.externalRelAttribute, d.value || p.value ? "noopener noreferrer" : "") || null;
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
                  return da(w.search);
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
  Ui = e_(qg);
  function Ro(e, t) {
    const n = t === "append" ? ys : Xt;
    return Tt(e) && !e.startsWith("http") ? e : n(e, true);
  }
  function t_() {
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
  const n_ = /2g/;
  function r_() {
    const e = navigator.connection;
    return !!(e && (e.saveData || n_.test(e.effectiveType)));
  }
  const o_ = Wf(() => {
    wa("PiniaColada_TreeMapNode", (e) => e);
  }), Vd = [
    [
      "NuxtError",
      (e) => wn(e)
    ],
    [
      "EmptyShallowRef",
      (e) => Ue(e === "_" ? void 0 : e === "0n" ? BigInt(0) : qr(e))
    ],
    [
      "EmptyRef",
      (e) => He(e === "_" ? void 0 : e === "0n" ? BigInt(0) : qr(e))
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
      (e) => Et(e)
    ]
  ];
  Vd.push([
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
  const s_ = Re({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, o] of Vd) wa(r, o);
      Object.assign(e.payload, ([t, n] = tr(() => e.runWithContext(uv)), t = await t, n(), t)), window.__NUXT__ = e.payload;
    }
  });
  async function Ta(e, t = {}) {
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
            const S = s.get(g._d) || 0, k = {
              tag: g,
              id: (S ? `${g._d}:${S}` : g._d) || Nl(g),
              shouldRender: true
            };
            return g._d && sd(g._d) && s.set(g._d, S + 1), k;
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
            if (!$l.has(S)) continue;
            const k = id({
              tag: S,
              props: {}
            }, {
              innerHTML: g.innerHTML,
              ...g.getAttributeNames().reduce((_, m) => (_[m] = g.getAttribute(m), _), {}) || {}
            });
            if (k.key = g.getAttribute("data-hid") || void 0, k._d = Ni(k) || Nl(k), a.elMap.has(k._d)) {
              let _ = 1, m = k._d;
              for (; a.elMap.has(m); ) m = `${k._d}:${_++}`;
              a.elMap.set(m, g);
            } else a.elMap.set(k._d, g);
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
        for (const k in g.props) {
          if (!Object.prototype.hasOwnProperty.call(g.props, k)) continue;
          const _ = g.props[k];
          if (k.startsWith("on") && typeof _ == "function") {
            const v = h == null ? void 0 : h.dataset;
            if (v && v[`${k}fired`]) {
              const w = k.slice(0, -5);
              _.call(h, new Event(w.substring(2)));
            }
            h.getAttribute(`data-${k}`) !== "" && ((g.tag === "bodyAttrs" ? n.defaultView : h).addEventListener(k.substring(2), _.bind(h)), h.setAttribute(`data-${k}`, ""));
            continue;
          }
          const m = `attr:${k}`;
          if (k === "class") {
            if (!_) continue;
            for (const v of _) S && l(d, `${m}:${v}`, () => h.classList.remove(v)), !h.classList.contains(v) && h.classList.add(v);
          } else if (k === "style") {
            if (!_) continue;
            for (const [v, w] of _) l(d, `${m}:${v}`, () => {
              h.style.removeProperty(v);
            }), h.style.setProperty(v, w);
          } else _ !== false && _ !== null && (h.getAttribute(k) !== _ && h.setAttribute(k, _ === true ? "" : String(_)), S && l(d, m, () => h.removeAttribute(k)));
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
          d.$el = d.$el || a.elMap.get(S), d.$el ? u(d) : $l.has(h.tag) && c.push(d);
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
  function i_(e = {}) {
    var _a2, _b2, _c2;
    const t = ((_a2 = e.domOptions) == null ? void 0 : _a2.render) || Ta;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((_c2 = (_b2 = e.document) == null ? void 0 : _b2.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _c2.innerHTML) || false;
    return Jy({
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
  function a_(e, t) {
    let n = 0;
    return () => {
      const r = ++n;
      t(() => {
        n === r && e();
      });
    };
  }
  function l_(e = {}) {
    const t = i_({
      domOptions: {
        render: a_(() => Ta(t), (n) => setTimeout(n, 0))
      },
      ...e
    });
    return t.install = nv(t), t;
  }
  const c_ = {
    disableDefaults: true
  }, u_ = Re({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = l_(c_);
      e.vueApp.use(t);
      {
        let n = true;
        const r = async () => {
          n = false, await Ta(t);
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
  }), f_ = /(:\w+)\([^)]+\)/g, d_ = /(:\w+)[?+*]/g, p_ = /:\w+/g, h_ = (e, t) => t.path.replace(f_, "$1").replace(d_, "$1").replace(p_, (n) => {
    var _a2;
    return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  }), Vi = (e, t) => {
    const n = e.route.matched.find((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === e.Component.type;
    }), r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && h_(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  }, m_ = (e, t) => ({
    default: () => e ? he(uh, e === true ? {} : e, t) : t
  });
  function Ra(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const g_ = {
    middleware: [
      async function(e) {
        e.path === "/onepager" && await gn(() => Promise.resolve({}), __vite__mapDeps([0]), import.meta.url);
      }
    ]
  }, Ye = null, Xe = {}, Ys = [
    {
      name: "roadmap",
      path: "/roadmap",
      component: () => gn(() => import("./CE9BTSru.js"), __vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)
    },
    {
      name: "uid",
      path: "/:uid(.*)*",
      meta: g_ || {},
      component: () => gn(() => import("./f2Qfitit.js"), __vite__mapDeps([14,15,4,16,17]), import.meta.url)
    },
    {
      name: "blog-post",
      path: "/blog/:post()",
      component: () => gn(() => import("./c9qYaCo8.js"), __vite__mapDeps([18,19,6,7,8,9,10,20,21,4,22,5,15,23,12,17,11,24]), import.meta.url)
    },
    {
      name: "slice-simulator",
      path: "/slice-simulator",
      component: () => gn(() => import("./QNM9-pvx.js"), __vite__mapDeps([25,26,15]), import.meta.url)
    },
    {
      name: "iframes-albatross-liveview",
      path: "/iframes/albatross-liveview",
      component: () => gn(() => import("./C_kGI6oZ.js"), __vite__mapDeps([27,28,29,21,11,12,30,6,7,8,9,10,23]), import.meta.url)
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/sp",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/sp/freecrypto",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/cplink",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/exchanges",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/community-funding",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/whitepaper-1",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/whitepaper",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/developers/migration/migration-integrators",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/developers/llms-full.md",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/privacy-policy",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/cookie-policy",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/podcast",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/tutorials/ledger",
      component: Xe
    },
    {
      name: Ye == null ? void 0 : Ye.name,
      path: "/styleguide",
      component: Xe
    }
  ], y_ = async (e, t) => {
    var _a2;
    let n, r;
    if (!((_a2 = e.meta) == null ? void 0 : _a2.validate)) return;
    const o = ([n, r] = tr(() => Promise.resolve(e.meta.validate(e))), n = await n, r(), n);
    if (o === true) return;
    const s = wn({
      fatal: true,
      statusCode: o && o.statusCode || 404,
      statusMessage: o && o.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath), s;
  }, v_ = async (e) => {
    let t, n;
    const r = ([t, n] = tr(() => _a({
      path: e.path
    })), t = await t, n(), t);
    if (r.redirect) return Tt(r.redirect, {
      acceptRelative: true
    }) ? (window.location.href = r.redirect, false) : r.redirect;
  }, b_ = [
    y_,
    v_
  ], Wi = {};
  function __(e, t, n) {
    const { pathname: r, search: o, hash: s } = t, i = e.indexOf("#");
    if (i > -1) {
      const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
      let c = s.slice(u);
      return c[0] !== "/" && (c = "/" + c), _l(c, "");
    }
    const a = _l(r, e), l = !n || dg(a, n) ? a : n;
    return l + (l.includes("?") ? "" : o) + s;
  }
  const w_ = Re({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var _a2;
      let t, n, r = Bt().app.baseURL;
      const o = ((_a2 = sn.history) == null ? void 0 : _a2.call(sn, r)) ?? nb(r), s = sn.routes ? ([t, n] = tr(() => sn.routes(Ys)), t = await t, n(), t ?? Ys) : Ys;
      let i;
      const a = Rb({
        ...sn,
        scrollBehavior: (S, k, _) => {
          if (k === dt) {
            i = _;
            return;
          }
          if (sn.scrollBehavior) {
            if (a.options.scrollBehavior = sn.scrollBehavior, "scrollRestoration" in window.history) {
              const m = a.beforeEach(() => {
                m(), window.history.scrollRestoration = "manual";
              });
            }
            return sn.scrollBehavior(S, dt, i || _);
          }
        },
        history: o,
        routes: s
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
      const l = Ue(a.currentRoute.value);
      a.afterEach((S, k) => {
        l.value = k;
      }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const u = __(r, window.location, e.payload.path), c = Ue(a.currentRoute.value), f = () => {
        c.value = a.currentRoute.value;
      };
      e.hook("page:finish", f), a.afterEach((S, k) => {
        var _a3, _b2, _c2, _d2;
        ((_b2 = (_a3 = S.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = k.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default) && f();
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
      const d = pr();
      a.afterEach(async (S, k, _) => {
        delete e._processingMiddleware, !e.isHydrating && d.value && await e.runWithContext(Qf), _ && await e.callHook("page:loading:end");
      });
      try {
        [t, n] = tr(() => a.isReady()), await t, n();
      } catch (S) {
        [t, n] = tr(() => e.runWithContext(() => Pn(S))), await t, n();
      }
      const h = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
      f();
      const g = e.payload.state._layout;
      return a.beforeEach(async (S, k) => {
        var _a3;
        await e.callHook("page:loading:start"), S.meta = Et(S.meta), e.isHydrating && g && !Yt(S.meta.layout) && (S.meta.layout = g), e._processingMiddleware = true;
        {
          const _ = /* @__PURE__ */ new Set([
            ...b_,
            ...e._middleware.global
          ]);
          for (const m of S.matched) {
            const v = m.meta.middleware;
            if (v) for (const w of Ra(v)) _.add(w);
          }
          {
            const m = await e.runWithContext(() => _a({
              path: S.path
            }));
            if (m.appMiddleware) for (const v in m.appMiddleware) m.appMiddleware[v] ? _.add(v) : _.delete(v);
          }
          for (const m of _) {
            const v = typeof m == "string" ? e._middleware.named[m] || await ((_a3 = Wi[m]) == null ? void 0 : _a3.call(Wi).then((w) => w.default || w)) : m;
            if (!v) throw new Error(`Unknown route middleware: '${m}'.`);
            try {
              const w = await e.runWithContext(() => v(S, k));
              if (!e.payload.serverRendered && e.isHydrating && (w === false || w instanceof Error)) {
                const P = w || wn({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${u}`
                });
                return await e.runWithContext(() => Pn(P)), false;
              }
              if (w === true) continue;
              if (w === false) return w;
              if (w) return Yf(w) && w.fatal && await e.runWithContext(() => Pn(w)), w;
            } catch (w) {
              const P = wn(w);
              return P.fatal && await e.runWithContext(() => Pn(P)), P;
            }
          }
        }
      }), a.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end");
      }), a.afterEach(async (S, k) => {
        S.matched.length === 0 && await e.runWithContext(() => Pn(wn({
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
          }), a.options.scrollBehavior = sn.scrollBehavior;
        } catch (S) {
          await e.runWithContext(() => Pn(S));
        }
      }), {
        provide: {
          router: a
        }
      };
    }
  });
  function S_(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !Tt(String(e.url), {
      acceptRelative: true,
      strict: false
    }) && (e.url = ug(String(e.url)));
    const t = Object.keys(e).sort((r, o) => r.localeCompare(o)), n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function k_(e) {
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
      return (s == null ? void 0 : s.skipNormalize) ? i : S_(i);
    }
    return {
      stack: n,
      push: r,
      get: o
    };
  }
  const E_ = Re({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
      var _a2;
      const t = k_(), n = Fd("site-config");
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
  }), T_ = Re({
    name: "nuxt:payload",
    setup(e) {
      const t = /* @__PURE__ */ new Set();
      Ie().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const o = await Ul(n.path);
        if (o) {
          for (const s of t) delete e.static.data[s];
          for (const s in o.data) s in e.static.data || t.add(s), e.static.data[s] = o.data[s];
        }
      }), mr(() => {
        var _a2;
        e.hooks.hook("link:prefetch", async (n) => {
          const { hostname: r } = new URL(n, window.location.href);
          r === window.location.hostname && await Ul(n).catch(() => {
            console.warn("[nuxt] Error preloading payload for", n);
          });
        }), ((_a2 = navigator.connection) == null ? void 0 : _a2.effectiveType) !== "slow-2g" && setTimeout(ws, 1e3);
      });
    }
  }), R_ = Re(() => {
    const e = Ie();
    mr(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100), requestAnimationFrame(() => {
            setTimeout(t, 0);
          });
        });
      });
    });
  }), C_ = Re((e) => {
    let t;
    async function n() {
      const r = await ws();
      t && clearTimeout(t), t = setTimeout(n, Cl);
      try {
        const o = await $fetch(ha("builds/latest.json") + `?${Date.now()}`);
        o.id !== r.id && e.hooks.callHook("app:manifest:update", o);
      } catch {
      }
    }
    mr(() => {
      t = setTimeout(n, Cl);
    });
  }), P_ = Re((e) => {
    if (!document.startViewTransition) return;
    let t, n = false, r, o;
    const s = () => {
      t = void 0, n = false, o = void 0, r = void 0;
    };
    window.addEventListener("popstate", (a) => {
      n = a.hasUAVisualTransition, n && (t == null ? void 0 : t.skipTransition());
    }), Ie().beforeResolve(async (a, l) => {
      const u = a.meta.viewTransition ?? Vg, f = window.matchMedia("(prefers-reduced-motion: reduce)").matches && u !== "always";
      if (u === false || f || n || !Id(a, l)) return;
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
  }), A_ = Re({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Ie(), n = Bt(), r = /* @__PURE__ */ new Set();
      t.beforeEach(() => {
        r.clear();
      }), e.hook("app:chunkError", ({ error: s }) => {
        r.add(s);
      });
      function o(s) {
        const i = vs(n.app.baseURL, s.fullPath);
        Qb({
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
  }), x_ = Re({
    name: "pinia",
    setup(e) {
      const t = hy();
      return e.vueApp.use(t), no(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
        provide: {
          pinia: t
        }
      };
    }
  }), O_ = Re({
    name: "nuxt:global-components"
  }), vn = {
    default: Ka(() => gn(() => import("./B0q1k2WO.js"), __vite__mapDeps([31,4,32,9,33,8,34,35,36,37,38,39,7,11,12,40,19,6,10,5,41,42]), import.meta.url).then((e) => e.default || e)),
    iframe: Ka(() => gn(() => import("./CH-BVmAS.js"), [], import.meta.url).then((e) => e.default || e))
  }, L_ = Re({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Ie();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var _a2;
          const r = (_a2 = n == null ? void 0 : n.meta) == null ? void 0 : _a2.layout;
          r && typeof vn[r] == "function" && await vn[r]();
        });
      }), e.hooks.hook("link:prefetch", (n) => {
        if (Tt(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const o = r.meta.layout;
        let s = Ra(r.meta.middleware);
        s = s.filter((i) => typeof i == "string");
        for (const i of s) typeof Wi[i] == "function" && Wi[i]();
        typeof o == "string" && o in vn && Jb(vn[o]);
      });
    }
  });
  function M_(e) {
    return ({ queryCache: t, scope: n }) => {
      t.$onAction(({ name: r, after: o }) => {
        r === "create" && o((s) => {
          var _a2;
          const i = ((_a2 = s.options) == null ? void 0 : _a2.delay) ?? (e == null ? void 0 : e.delay) ?? 200;
          n.run(() => {
            const a = Ue(false);
            if (s.ext.isDelaying = a, !i) return;
            const l = s.asyncStatus.value;
            s.asyncStatus = us((u, c) => {
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
  const $_ = {
    plugins: [
      M_()
    ]
  }, I_ = Re({
    name: "Pinia Colada",
    dependsOn: [
      "pinia"
    ],
    setup(e) {
      e.vueApp.use(bv, {
        ...$_
      });
      const t = e.vueApp.config.globalProperties.$pinia;
      e.payload && e.payload.pinia_colada && vv(Sa(t), e.payload.pinia_colada);
    }
  }), N_ = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/), D_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, B_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, j_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, F_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function H_(e) {
    return D_.test(e) || B_.test(e.slice(0, 4));
  }
  function U_(e) {
    return j_.test(e) || F_.test(e.slice(0, 4));
  }
  function V_(e) {
    return /iPad|iPhone|iPod/.test(e);
  }
  function W_(e) {
    return /android/i.test(e);
  }
  function q_(e) {
    return /Windows/.test(e);
  }
  function K_(e) {
    return /Mac OS X/.test(e);
  }
  const G_ = [
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
  function z_(e) {
    for (const t of G_) if (t.regex.test(e)) return t.name;
    return "";
  }
  function yc(e, t = {}) {
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
    else n = H_(e), r = U_(e), o = V_(e), s = W_(e);
    const i = q_(e), a = K_(e), l = z_(e), u = l === "Safari", c = l === "Firefox", f = l === "Edge", p = l === "Chrome", d = l === "Samsung", h = N_.test(e);
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
  const J_ = Re(() => {
    const e = Bt(), t = e.public.device.defaultUserAgent;
    let n;
    {
      const r = navigator.userAgent || t;
      n = Et(yc(r)), e.public.device.refreshOnResize && window.addEventListener("resize", () => {
        setTimeout(() => {
          const o = yc(navigator.userAgent || r);
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
  Ca = function(e) {
    const t = Et({});
    return ef(() => {
      const n = me().$nuxtSiteConfig.get(ma({
        resolveRefs: true
      }, e));
      Object.assign(t, n);
    }), delete t._priority, t;
  };
  const Q_ = Re(() => {
    const e = hr();
    if (!e) return;
    const t = Ca(), n = {
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
  }), Y_ = Re(() => {
    const e = hr();
    e && (e.use(ad), e.use(ev()));
  }), X_ = /\d/, Z_ = [
    "-",
    "_",
    "/",
    "."
  ];
  function ew(e = "") {
    if (!X_.test(e)) return e !== e.toLowerCase();
  }
  function tw(e, t) {
    const n = Z_, r = [];
    if (!e || typeof e != "string") return r;
    let o = "", s, i;
    for (const a of e) {
      const l = n.includes(a);
      if (l === true) {
        r.push(o), o = "", s = void 0;
        continue;
      }
      const u = ew(a);
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
  function nw(e) {
    return e ? e[0].toUpperCase() + e.slice(1) : "";
  }
  const rw = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;
  function ow(e, t) {
    return (Array.isArray(e) ? e : tw(e)).filter(Boolean).map((n) => rw.test(n) ? n.toLowerCase() : nw(n)).join(" ");
  }
  let sw, iw, It, Wd, ve, vc, aw, yn, We, lw, qd, bc, _c;
  sw = Re({
    name: "nuxt-seo:fallback-titles",
    env: {
      islands: false
    },
    setup() {
      const e = Bn(), t = pr(), n = K(() => {
        var _a2, _b2, _c2;
        if (t.value && [
          404,
          500
        ].includes((_a2 = t.value) == null ? void 0 : _a2.statusCode)) return `${t.value.statusCode} - ${t.value.message}`;
        if (typeof ((_b2 = e.meta) == null ? void 0 : _b2.title) == "string") return (_c2 = e.meta) == null ? void 0 : _c2.title;
        const s = Xt(e.path || "/").split("/").pop();
        return s ? ow(s) : null;
      });
      _s({
        title: () => n.value
      }, {
        tagPriority: 101
      });
    }
  });
  iw = Re((e) => {
    Bt().public.prismic.preview && window.addEventListener("prismicPreviewUpdate", (n) => {
      n.preventDefault(), Hi();
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
  vc = (e) => {
    const t = ve(e);
    return (r) => t(r);
  };
  aw = (e) => {
    const t = ve(e);
    return (...r) => t("", ...r);
  };
  $t = {
    at: ve("at"),
    not: ve("not"),
    any: ve("any"),
    in: ve("in"),
    fulltext: ve("fulltext"),
    has: vc("has"),
    missing: vc("missing"),
    similar: aw("similar"),
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
  yn = (e) => Array.isArray(e) ? e : [
    e
  ];
  We = (e = {}, t) => ({
    ...e,
    filters: [
      ...e.filters || [],
      ...yn(t)
    ]
  });
  lw = (e) => typeof e == "function" ? e : () => e;
  qd = "7.17.2";
  bc = (e) => `https://prismic.dev/msg/client/v${qd}/${e}`;
  _c = (e) => $t.at("document.tags", yn(e));
  var cw = Object.defineProperty, uw = (e, t, n) => t in e ? cw(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, wc = (e, t, n) => uw(e, typeof t != "symbol" ? t + "" : t, n);
  class yt extends Error {
    constructor(t = "An invalid API response was returned", n, r) {
      super(t), wc(this, "url"), wc(this, "response"), this.url = n, this.response = r;
    }
  }
  const Pa = (e, t) => {
    const n = e.find((r) => t(r));
    if (!n) throw new yt("Ref could not be found.", void 0, void 0);
    return n;
  }, Sc = (e) => Pa(e, (t) => t.isMasterRef), Xs = (e, t) => Pa(e, (n) => n.id === t), Zs = (e, t) => Pa(e, (n) => n.label === t), Kd = "io.prismic.preview", fw = Object.freeze(Object.defineProperty({
    __proto__: null,
    preview: Kd
  }, Symbol.toStringTag, {
    value: "Module"
  })), kc = (e) => e.replace(/%3B/g, ";"), dw = (e) => {
    const t = e.split("; ");
    let n;
    for (const r of t) {
      const o = r.split("=");
      if (kc(o[0]).replace(/%3D/g, "=") === Kd) {
        n = kc(o.slice(1).join("="));
        break;
      }
    }
    return n;
  }, pw = (e) => e.replace(/(\n| )*( |{|})(\n| )*/gm, (t, n, r) => r), Co = (e) => $t.any("document.tags", yn(e)), hw = 5e3;
  let Ec, ei = 0;
  const mw = (e, t = {}) => {
    const { level: n = "log" } = t;
    if (e === Ec && Date.now() - ei < hw) {
      ei = Date.now();
      return;
    }
    ei = Date.now(), Ec = e, console[n](e);
  }, Wn = (e) => $t.at("document.type", e);
  class ks extends yt {
  }
  class qi extends yt {
  }
  class gw extends yt {
  }
  class yw extends ks {
  }
  class Tc extends ks {
  }
  class ti extends ks {
  }
  class vw extends qi {
  }
  let bn, Gd, bw, _w;
  bn = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
  };
  Gd = (e) => {
    var t;
    return {
      link_type: bn.Document,
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
    const n = "link_type" in e ? e : Gd(e), [r] = t;
    let o;
    switch (typeof r == "function" || r == null ? o = {
      linkResolver: r
    } : o = {
      ...r
    }, n.link_type) {
      case bn.Media:
      case bn.Web:
        return "url" in n ? n.url : null;
      case bn.Document: {
        if ("id" in n && o.linkResolver) {
          const s = o.linkResolver(n);
          if (s != null) return s;
        }
        return "url" in n && n.url ? n.url : null;
      }
      case bn.Any:
      default:
        return null;
    }
  };
  bw = (e) => new Promise((t) => setTimeout(t, e));
  _w = ({ interval: e } = {}) => {
    const t = [];
    let n = false, r = 0;
    const o = () => {
      var l;
      !n && t.length > 0 && ((l = t.shift()) == null || l(), n = true);
    }, s = () => {
      n = false, o();
    }, i = async (l, u, c) => {
      const f = Date.now() - r;
      e && f < e && await bw(e - f);
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
  var ww = Object.defineProperty, Sw = (e, t, n) => t in e ? ww(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, Po = (e, t, n) => Sw(e, typeof t != "symbol" ? t + "" : t, n);
  const kw = 1500;
  class Ew {
    constructor(t) {
      if (Po(this, "fetchFn"), Po(this, "fetchOptions"), Po(this, "queuedFetchJobs", {}), Po(this, "dedupedFetchJobs", {}), this.fetchOptions = t.fetchOptions, typeof t.fetch == "function") this.fetchFn = t.fetch;
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
      return this.queuedFetchJobs[r] || (this.queuedFetchJobs[r] = _w({
        interval: kw
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
  const Tw = "x-c", Rw = {
    accessToken: "access_token"
  }, Cw = (e) => typeof e == "string" ? e : e.direction === "desc" ? `${e.field} desc` : e.field, Pw = (e, t) => {
    const { filters: n, predicates: r, ...o } = t, s = new URL("documents/search", `${e}/`);
    if (n) for (const i of yn(n)) s.searchParams.append("q", `[${i}]`);
    if (r) for (const i of yn(r)) s.searchParams.append("q", `[${i}]`);
    for (const i in o) {
      const a = Rw[i] || i;
      let l = o[i];
      if (a === "orderings") {
        const u = o[a];
        u != null && (l = `[${yn(u).map((f) => Cw(f)).join(",")}]`);
      } else a === "routes" && typeof o[a] == "object" && (l = JSON.stringify(yn(o[a])));
      l != null && s.searchParams.set(a, yn(l).join(","));
    }
    return s.searchParams.set(Tw, `js-${qd}`), s.toString();
  }, Aw = (e) => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e), xw = (e) => {
    if (Aw(e)) return `https://${e}.cdn.prismic.io/api/v2`;
    throw new yt(`An invalid Prismic repository name was given: ${e}`, void 0, void 0);
  }, Ow = (e) => {
    try {
      const t = new URL(e).hostname;
      if (t.endsWith("prismic.io") || t.endsWith("wroom.io") || t.endsWith("wroom.test")) return t.split(".")[0];
    } catch {
    }
    throw new yt(`An invalid Prismic Document API endpoint was provided: ${e}`, void 0, void 0);
  }, Rc = (e) => {
    try {
      return new URL(e), true;
    } catch {
      return false;
    }
  };
  var Lw = Object.defineProperty, zd = (e) => {
    throw TypeError(e);
  }, Mw = (e, t, n) => t in e ? Lw(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, an = (e, t, n) => Mw(e, typeof t != "symbol" ? t + "" : t, n), Jd = (e, t, n) => t.has(e) || zd("Cannot " + n), Cc = (e, t, n) => (Jd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $w = (e, t, n) => t.has(e) ? zd("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Iw = (e, t, n, r) => (Jd(e, t, "write to private field"), t.set(e, n), n), Rr;
  const Nw = 100, Dw = 5e3, Bw = 500, jw = 1e3, Fw = 3;
  var Lt;
  (function(e) {
    e.Master = "Master", e.ReleaseID = "ReleaseID", e.ReleaseLabel = "ReleaseLabel", e.Manual = "Manual";
  })(Lt || (Lt = {}));
  class Hw extends Ew {
    constructor(t, n = {}) {
      if (super(n), $w(this, Rr), an(this, "documentAPIEndpoint"), an(this, "accessToken"), an(this, "routes"), an(this, "brokenRoute"), an(this, "defaultParams"), an(this, "refState", {
        mode: Lt.Master,
        autoPreviewsEnabled: true
      }), an(this, "cachedRepository"), an(this, "cachedRepositoryExpiration", 0), n.documentAPIEndpoint || Rc(t), Rc(t)) {
        this.documentAPIEndpoint = t;
        try {
          this.repositoryName = Ow(t);
        } catch {
          console.warn(`[@prismicio/client] A repository name could not be inferred from the provided endpoint (\`${t}\`). Some methods will be disabled. Create the client using a repository name to prevent this warning. For more details, see ${bc("prefer-repository-name")}`);
        }
      } else this.documentAPIEndpoint = n.documentAPIEndpoint || xw(t), this.repositoryName = t;
      this.accessToken = n.accessToken, this.routes = n.routes, this.brokenRoute = n.brokenRoute, this.defaultParams = n.defaultParams, n.ref && this.queryContentFromRef(n.ref), this.graphQLFetch = this.graphQLFetch.bind(this);
    }
    set repositoryName(t) {
      Iw(this, Rr, t);
    }
    get repositoryName() {
      if (!Cc(this, Rr)) throw new yt(`A repository name is required for this method but one could not be inferred from the provided API endpoint (\`${this.documentAPIEndpoint}\`). To fix this error, provide a repository name when creating the client. For more details, see ${bc("prefer-repository-name")}`, void 0, void 0);
      return Cc(this, Rr);
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
      throw new qi("No documents were returned", s, void 0);
    }
    async dangerouslyGetAll(t = {}) {
      var n;
      const { limit: r = 1 / 0, ...o } = t, s = {
        ...o,
        pageSize: Math.min(r, o.pageSize || ((n = this.defaultParams) == null ? void 0 : n.pageSize) || Nw)
      }, i = [];
      let a;
      for (; (!a || a.next_page) && i.length < r; ) {
        const l = a ? a.page + 1 : void 0;
        a = await this.get({
          ...s,
          page: l
        }), i.push(...a.results), a.next_page && await new Promise((u) => setTimeout(u, Bw));
      }
      return i.slice(0, r);
    }
    async getByID(t, n) {
      return await this.getFirst(We(n, $t.at("document.id", t)));
    }
    async getByIDs(t, n) {
      return await this.get(We(n, $t.in("document.id", t)));
    }
    async getAllByIDs(t, n) {
      return await this.dangerouslyGetAll(We(n, $t.in("document.id", t)));
    }
    async getByUID(t, n, r) {
      return await this.getFirst(We(r, [
        Wn(t),
        $t.at(`my.${t}.uid`, n)
      ]));
    }
    async getByUIDs(t, n, r) {
      return await this.get(We(r, [
        Wn(t),
        $t.in(`my.${t}.uid`, n)
      ]));
    }
    async getAllByUIDs(t, n, r) {
      return await this.dangerouslyGetAll(We(r, [
        Wn(t),
        $t.in(`my.${t}.uid`, n)
      ]));
    }
    async getSingle(t, n) {
      return await this.getFirst(We(n, Wn(t)));
    }
    async getByType(t, n) {
      return await this.get(We(n, Wn(t)));
    }
    async getAllByType(t, n) {
      return await this.dangerouslyGetAll(We(n, Wn(t)));
    }
    async getByTag(t, n) {
      return await this.get(We(n, Co(t)));
    }
    async getAllByTag(t, n) {
      return await this.dangerouslyGetAll(We(n, Co(t)));
    }
    async getByEveryTag(t, n) {
      return await this.get(We(n, _c(t)));
    }
    async getAllByEveryTag(t, n) {
      return await this.dangerouslyGetAll(We(n, _c(t)));
    }
    async getBySomeTags(t, n) {
      return await this.get(We(n, Co(t)));
    }
    async getAllBySomeTags(t, n) {
      return await this.dangerouslyGetAll(We(n, Co(t)));
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
      return Xs(r, t);
    }
    async getRefByLabel(t, n) {
      const r = await this.getRefs(n);
      return Zs(r, t);
    }
    async getMasterRef(t) {
      const n = await this.getRefs(t);
      return Sc(n);
    }
    async getReleases(t) {
      return (await this.getRefs(t)).filter((r) => !r.isMasterRef);
    }
    async getReleaseByID(t, n) {
      const r = await this.getReleases(n);
      return Xs(r, t);
    }
    async getReleaseByLabel(t, n) {
      const r = await this.getReleases(n);
      return Zs(r, t);
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
      return Pw(this.documentAPIEndpoint, {
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
      return l && a.searchParams.set("query", pw(l)), await this.fetchFn(a.toString(), {
        ...n,
        headers: i
      });
    }
    async getCachedRepository(t) {
      return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + Dw, this.cachedRepository = await this.getRepository(t)), this.cachedRepository;
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
        if ((n = this.refState.httpRequest) != null && n.headers ? "get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get == "function" ? a = this.refState.httpRequest.headers.get("cookie") : "cookie" in this.refState.httpRequest.headers && (a = this.refState.httpRequest.headers.cookie) : (r = globalThis.document) != null && r.cookie && (a = globalThis.document.cookie), a && (i = dw(a)), i) return i;
      }
      const o = await this.getCachedRepository(t), s = this.refState.mode;
      if (s === Lt.ReleaseID) return Xs(o.refs, this.refState.releaseID).ref;
      if (s === Lt.ReleaseLabel) return Zs(o.refs, this.refState.releaseLabel).ref;
      if (s === Lt.Manual) {
        const i = await lw(this.refState.ref)();
        if (typeof i == "string") return i;
      }
      return Sc(o.refs).ref;
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
        if (!(i instanceof ti || i instanceof Tc) || n >= Fw - 1) throw i;
        (t == null ? void 0 : t.ref) || (this.cachedRepository = void 0);
        const a = (o = (r = i.message.match(/Master ref is: (?<ref>.*)$/)) == null ? void 0 : r.groups) == null ? void 0 : o.ref;
        if (!a) throw i;
        const l = new URL(s).searchParams.get("ref"), u = i instanceof ti ? "invalid" : "expired";
        return mw(`[@prismicio/client] The ref (${l}) was ${u}. Now retrying with the latest master ref (${a}). If you were previewing content, the response will not include draft content.`, {
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
          throw new gw(r.json.message, t, r.json);
        case 401:
        case 403:
          throw new ks(r.json.error || r.json.message, t, r.json);
        case 404:
          throw r.json === void 0 ? new vw(`Prismic repository not found. Check that "${this.documentAPIEndpoint}" is pointing to the correct repository.`, t, t.startsWith(this.documentAPIEndpoint) ? void 0 : r.text) : r.json.type === "api_notfound_error" ? new ti(r.json.message, t, r.json) : r.json.type === "api_security_error" && /preview token.*expired/i.test(r.json.message) ? new yw(r.json.message, t, r.json) : new qi(r.json.message, t, r.json);
        case 410:
          throw new Tc(r.json.message, t, r.json);
        case 429: {
          const o = Number(r.headers.get("retry-after")), s = Number.isNaN(o) ? jw : o;
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
  Rr = /* @__PURE__ */ new WeakMap();
  let Uw, Ve, Aa, Vw, gr, qw, Kw, Gw, zw, Jw, Qw, Qd, Yw, Xw, Zw, e0, Yd, t0, n0, r0, o0, yr, i0, Xd, a0, l0, Oa, oo, so, Ze, c0, u0, f0, ep, d0, Rs;
  Uw = (e, t) => new Hw(e, t);
  Ve = (e) => e != null;
  Aa = (e) => !!e.length;
  xa = (e) => Ve(e) ? e.length === 1 && "text" in e[0] ? !!e[0].text : !!e.length : false;
  Vw = xa;
  gr = (e) => Ve(e) && !!e.url;
  Ww = gr;
  Ts = (e) => Ve(e) && ("id" in e || "url" in e);
  qw = Ts;
  Kw = Ts;
  Gw = Ve;
  zw = Ve;
  Jw = Ve;
  Qw = Ve;
  Qd = (e) => Ve(Qd) && !!e;
  Yw = Ve;
  Xw = (e) => Ve(e) && !!e.embed_url;
  Zw = (e) => Ve(e) && "longitude" in e;
  e0 = Ve;
  Yd = Ve;
  t0 = Yd;
  n0 = (e) => Ve(e) && Aa(e);
  r0 = (e) => Ve(e) && Aa(e);
  o0 = (e) => Ve(e) && Aa(e);
  yr = Object.freeze(Object.defineProperty({
    __proto__: null,
    color: Jw,
    contentRelationship: Kw,
    date: Gw,
    embed: Xw,
    geoPoint: Zw,
    group: r0,
    image: Ww,
    imageThumbnail: gr,
    integrationField: Yd,
    integrationFields: t0,
    keyText: Qd,
    link: Ts,
    linkToMedia: qw,
    number: Qw,
    repeatable: n0,
    richText: xa,
    select: Yw,
    sliceZone: o0,
    table: e0,
    timestamp: zw,
    title: Vw
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  s0 = (e) => e ? e.length === 24 ? new Date(e.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3")) : new Date(e) : null;
  i0 = (e) => {
    const t = /^(\/(?!\/)|#)/.test(e), n = !t && !/^https?:\/\//.test(e);
    return t && !n;
  };
  Xd = (e, t = {}) => {
    if (e && ("link_type" in e ? Ts(e) : e)) {
      const n = "target" in e ? e.target : void 0, r = Es(e, t.linkResolver), o = r ?? void 0, s = typeof o == "string" ? !i0(o) : false, i = t.rel ? t.rel({
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
  a0 = (e, t = " ") => {
    let n = "";
    for (let r = 0; r < e.length; r++) "text" in e[r] && (n += (n ? t : "") + e[r].text);
    return n;
  };
  Zd = (e, ...t) => {
    if (e) {
      const [n] = t;
      let r;
      return typeof n == "string" ? r = {
        separator: n
      } : r = {
        ...n
      }, a0(e, r.separator);
    } else return null;
  };
  l0 = /["'&<>]/;
  Oa = (e) => {
    const t = "" + e, n = l0.exec(t);
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
  oo = (e, t) => {
    const n = {
      ...t
    };
    "direction" in e && e.direction === "rtl" && (n.dir = e.direction), "data" in e && "label" in e.data && e.data.label && (n.class = n.class ? `${n.class} ${e.data.label}` : e.data.label);
    const r = [];
    for (const o in n) {
      const s = n[o];
      s && (typeof s == "boolean" ? r.push(o) : r.push(`${o}="${Oa(s)}"`));
    }
    return r.length && r.unshift(""), r.join(" ");
  };
  so = (e) => e && typeof e != "function" ? e : {};
  Ze = (e, t) => {
    const n = so(t);
    return ({ node: r, children: o }) => `<${e}${oo(r, n)}>${o}</${e}>`;
  };
  c0 = (e) => {
    const t = so(e);
    return ({ node: n }) => `<pre${oo(n, t)}>${Oa(n.text)}</pre>`;
  };
  u0 = (e, t) => {
    const n = so(t);
    return ({ node: r }) => {
      const o = {
        ...n,
        src: r.url,
        alt: r.alt,
        copyright: r.copyright
      };
      let s = `<img${oo(r, o)} />`;
      return r.linkTo && (s = ep(e)({
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
  f0 = (e) => {
    const t = so(e);
    return ({ node: n }) => {
      const r = {
        ...t,
        "data-oembed": n.oembed.embed_url,
        "data-oembed-type": n.oembed.type,
        "data-oembed-provider": n.oembed.provider_name
      };
      return `<div${oo(n, r)}>${n.oembed.html}</div>`;
    };
  };
  ep = (e, t) => {
    const n = so(t);
    return ({ node: r, children: o }) => {
      const s = {
        ...n
      };
      return r.data.link_type === bn.Web ? (s.href = r.data.url, s.target = r.data.target, s.rel = "noopener noreferrer") : r.data.link_type === bn.Document ? s.href = Es(r.data, {
        linkResolver: e
      }) : r.data.link_type === bn.Media && (s.href = r.data.url), `<a${oo(r, s)}>${o}</a>`;
    };
  };
  d0 = () => ({ text: e }) => e ? Oa(e).replace(/\n/g, "<br />") : "";
  Rs = () => (++Rs.i).toString();
  Rs.i = 0;
  let tp, Dr, ni, p0, np, rp, h0, op, m0, g0, y0, ri, v0, sp, b0, io, _0, oi, Pc, ip, S0, ap, La, lp, cp, k0, E0, T0, Ki, R0, C0, P0, A0, x0, O0, L0, M0, $0, I0, N0, D0, B0, j0, F0, H0, U0, V0, W0, q0, Ac, K0, G0, z0, J0, Q0, Y0, X0, Z0, xc, Oc, eS, tS, nS, rS, oS, sS, iS, aS, lS, cS;
  tp = (e) => {
    const t = p0(e), n = [];
    for (let r = 0; r < t.length; r++) n.push(np(t[r]));
    return {
      key: Rs(),
      children: n
    };
  };
  Dr = (e, t = []) => ({
    key: Rs(),
    type: e.type,
    text: "text" in e ? e.text : void 0,
    node: e,
    children: t
  });
  ni = (e) => Dr({
    type: It.span,
    text: e,
    spans: []
  });
  p0 = (e) => {
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
  np = (e) => {
    if ("text" in e) return Dr(e, rp(e.spans, e));
    if ("items" in e) {
      const t = [];
      for (let n = 0; n < e.items.length; n++) t.push(np(e.items[n]));
      return Dr(e, t);
    }
    return Dr(e);
  };
  rp = (e, t, n) => {
    if (!e.length) return [
      ni(t.text)
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
      s === 0 && l > 0 && o.push(ni(t.text.slice(0, l)));
      const p = {
        ...i,
        text: c
      };
      o.push(Dr(p, rp(f, {
        ...t,
        text: c
      }, i))), u < t.text.length && o.push(ni(t.text.slice(u, r[s + 1] ? r[s + 1].start - a : void 0)));
    }
    return o;
  };
  h0 = (e, t) => op(tp(e).children, t);
  op = (e, t) => {
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t(o.type, o.node, o.text, op(o.children, t), o.key);
      s != null && n.push(s);
    }
    return n;
  };
  m0 = {
    [It.listItem]: "listItem",
    [It.oListItem]: "oListItem",
    [It.list]: "list",
    [It.oList]: "oList"
  };
  g0 = (e) => (t, n, r, o, s) => {
    const i = e[m0[t] || t];
    if (i) return i({
      type: t,
      node: n,
      text: r,
      children: o,
      key: s
    });
  };
  y0 = (...e) => (...t) => {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r) {
        const o = r(...t);
        if (o != null) return o;
      }
    }
  };
  ri = (e, t) => {
    const n = (o, s) => typeof o == "function" ? (i) => (o == null ? void 0 : o(i)) || s(i) : s, r = {
      heading1: n(t == null ? void 0 : t.heading1, Ze("h1", t == null ? void 0 : t.heading1)),
      heading2: n(t == null ? void 0 : t.heading2, Ze("h2", t == null ? void 0 : t.heading2)),
      heading3: n(t == null ? void 0 : t.heading3, Ze("h3", t == null ? void 0 : t.heading3)),
      heading4: n(t == null ? void 0 : t.heading4, Ze("h4", t == null ? void 0 : t.heading4)),
      heading5: n(t == null ? void 0 : t.heading5, Ze("h5", t == null ? void 0 : t.heading5)),
      heading6: n(t == null ? void 0 : t.heading6, Ze("h6", t == null ? void 0 : t.heading6)),
      paragraph: n(t == null ? void 0 : t.paragraph, Ze("p", t == null ? void 0 : t.paragraph)),
      preformatted: n(t == null ? void 0 : t.preformatted, c0(t == null ? void 0 : t.preformatted)),
      strong: n(t == null ? void 0 : t.strong, Ze("strong", t == null ? void 0 : t.strong)),
      em: n(t == null ? void 0 : t.em, Ze("em", t == null ? void 0 : t.em)),
      listItem: n(t == null ? void 0 : t.listItem, Ze("li", t == null ? void 0 : t.listItem)),
      oListItem: n(t == null ? void 0 : t.oListItem, Ze("li", t == null ? void 0 : t.oListItem)),
      list: n(t == null ? void 0 : t.list, Ze("ul", t == null ? void 0 : t.list)),
      oList: n(t == null ? void 0 : t.oList, Ze("ol", t == null ? void 0 : t.oList)),
      image: n(t == null ? void 0 : t.image, u0(e, t == null ? void 0 : t.image)),
      embed: n(t == null ? void 0 : t.embed, f0(t == null ? void 0 : t.embed)),
      hyperlink: n(t == null ? void 0 : t.hyperlink, ep(e, t == null ? void 0 : t.hyperlink)),
      label: n(t == null ? void 0 : t.label, Ze("span", t == null ? void 0 : t.label)),
      span: n(t == null ? void 0 : t.span, d0())
    };
    return v0(r);
  };
  v0 = (e) => {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r && (t[n] = (o) => r({
        ...o,
        children: o.children.join("")
      }));
    }
    return g0(t);
  };
  sp = (e, ...t) => {
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
      return o.serializer ? typeof o.serializer == "function" ? s = y0((i, a, l, u, c) => o.serializer(i, a, l, u.join(""), c), ri(o.linkResolver)) : s = ri(o.linkResolver, o.serializer) : s = ri(o.linkResolver), h0(e, s).join("");
    } else return null;
  };
  b0 = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  io = (e, t) => {
    const n = new URL(e);
    for (const o in t) {
      const s = b0(o), i = t[o];
      i === void 0 ? n.searchParams.delete(s) : Array.isArray(i) ? n.searchParams.set(s, i.join(",")) : n.searchParams.set(s, `${i}`);
    }
    const r = n.searchParams.get("s");
    return r && (n.searchParams.delete("s"), n.searchParams.append("s", r)), n.toString();
  };
  _0 = (e, { pixelDensities: t, ...n }) => t.map((r) => `${io(e, {
    ...n,
    dpr: r
  })} ${r}x`).join(", ");
  oi = (e, { widths: t, ...n }) => t.map((r) => `${io(e, {
    ...n,
    w: void 0,
    h: void 0,
    height: void 0,
    width: r
  })} ${r}w`).join(", ");
  w0 = (e, t = {}) => e && gr(e) ? io(e.url, t) : null;
  Pc = [
    640,
    828,
    1200,
    2048,
    3840
  ];
  ip = (e, t = {}) => {
    if (e && gr(e)) {
      let { widths: n = Pc, ...r } = t;
      const { url: o, dimensions: s, id: i, alt: a, copyright: l, edit: u, ...c } = e, f = Object.values(c);
      return n === "thumbnails" && f.length < 1 && (n = Pc), {
        src: io(o, r),
        srcset: n === "thumbnails" ? [
          oi(o, {
            ...r,
            widths: [
              s.width
            ]
          }),
          ...f.map((p) => oi(p.url, {
            ...r,
            widths: [
              p.dimensions.width
            ]
          }))
        ].join(", ") : oi(e.url, {
          ...r,
          widths: n
        })
      };
    } else return null;
  };
  S0 = [
    1,
    2,
    3
  ];
  ap = (e, t = {}) => {
    if (e && gr(e)) {
      const { pixelDensities: n = S0, ...r } = t;
      return {
        src: io(e.url, r),
        srcset: _0(e.url, {
          ...r,
          pixelDensities: n
        })
      };
    } else return null;
  };
  La = pe({
    __name: "Wrapper",
    props: {
      wrapper: {}
    },
    setup(e) {
      return (t, n) => t.wrapper ? (q(), oe(Je(t.wrapper), qc(to({
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
  lp = Symbol("prismic");
  ao = () => Te(lp, {
    options: {
      endpoint: ""
    }
  });
  cp = (e) => {
    const t = /^\/(?!\/)/.test(e), n = !t && !/^https?:\/\//i.test(e);
    return t && !n;
  };
  k0 = "div";
  E0 = pe({
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
      const t = e, { options: n } = ao(), r = K(() => {
        if (!xa(t.field)) return t.fallback ?? "";
        const c = t.linkResolver ?? n.linkResolver, f = t.serializer ?? n.richTextSerializer;
        return sp(t.field, {
          linkResolver: c,
          serializer: f
        });
      }), o = He(null), s = Te(ro, null);
      let i = [];
      const a = function(c) {
        c.preventDefault(), s == null ? void 0 : s.push(this.href);
      }, l = () => {
        const c = o.value && "$el" in o.value ? o.value.$el : o.value;
        c && "querySelectorAll" in c && (i = Array.from(c.querySelectorAll("a")).map((f) => {
          const p = f.getAttribute("href");
          if (p && cp(p)) {
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
      }), Dn(() => {
        u();
      }), (c, f) => re(yr).richText(e.field) || e.fallback ? (q(), oe(Je(e.wrapper || k0), {
        key: 0,
        ref_key: "root",
        ref: o,
        innerHTML: r.value
      }, null, 8, [
        "innerHTML"
      ])) : nn("", true);
    }
  });
  T0 = "div";
  Ki = pe({
    name: "PrismicEmbed",
    __name: "PrismicEmbed",
    props: {
      field: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => re(yr).embed(t.field) ? (q(), oe(Je(t.wrapper || T0), {
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
      ])) : nn("", true);
    }
  });
  R0 = [
    "src",
    "srcset",
    "alt"
  ];
  Xo = pe({
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
      const t = e, { options: n } = ao(), r = K(() => {
        var o, s;
        if (!gr(t.field)) return;
        let i, a;
        if (t.widths || !t.pixelDensities) {
          const l = ip(t.field, {
            ...t.imgixParams,
            widths: t.widths === "defaults" ? (o = n.components) == null ? void 0 : o.imageWidthSrcSetDefaults : t.widths
          });
          i = l.src, a = l.srcset;
        } else if (t.pixelDensities) {
          const l = ap(t.field, {
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
      }, null, 8, R0)) : nn("", true);
    }
  });
  C0 = "router-link";
  P0 = "a";
  A0 = "noreferrer";
  Zo = pe({
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
      const t = e, { options: n } = ao(), r = K(() => Xd(t.field || t.document, {
        linkResolver: t.linkResolver || n.linkResolver,
        rel(i) {
          var a;
          const l = t.rel || ((a = n.components) == null ? void 0 : a.linkRel);
          return l ? typeof l == "function" ? l(i) : l : i.isExternal ? A0 : void 0;
        }
      })), o = K(() => {
        var i, a;
        return cp(r.value.href || "") ? t.internalComponent || ((i = n.components) == null ? void 0 : i.linkInternalComponent) || C0 : t.externalComponent || ((a = n.components) == null ? void 0 : a.linkExternalComponent) || P0;
      }), s = K(() => o.value === "a" ? {
        href: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      } : {
        to: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      });
      return (i, a) => (q(), oe(Je(o.value), qc(uf(s.value)), {
        default: $e(() => [
          xe(i.$slots, "default", {}, () => [
            dr(Ht(t.field && "text" in t.field ? t.field.text : void 0), 1)
          ])
        ]),
        _: 3
      }, 16));
    }
  });
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
  I0 = [
    "dir"
  ];
  N0 = [
    "dir"
  ];
  D0 = {
    key: 7
  };
  B0 = {
    key: 8
  };
  j0 = {
    key: 9
  };
  F0 = [
    "dir"
  ];
  H0 = [
    "dir"
  ];
  U0 = {
    key: 12
  };
  V0 = {
    key: 13
  };
  W0 = {
    key: 14,
    class: "block-img"
  };
  q0 = {
    key: 0
  };
  Ac = pe({
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
      ], 8, x0)) : r.node.type === "heading2" ? (q(), de("h2", {
        key: 1,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, O0)) : r.node.type === "heading3" ? (q(), de("h3", {
        key: 2,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, L0)) : r.node.type === "heading4" ? (q(), de("h4", {
        key: 3,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, M0)) : r.node.type === "heading5" ? (q(), de("h5", {
        key: 4,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, $0)) : r.node.type === "heading6" ? (q(), de("h6", {
        key: 5,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, I0)) : r.node.type === "paragraph" ? (q(), de("p", {
        key: 6,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, N0)) : r.node.type === "preformatted" ? (q(), de("pre", D0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "strong" ? (q(), de("strong", B0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "em" ? (q(), de("em", j0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "list-item" ? (q(), de("li", {
        key: 10,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, F0)) : r.node.type === "o-list-item" ? (q(), de("li", {
        key: 11,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, H0)) : r.node.type === "group-list-item" ? (q(), de("ul", U0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "group-o-list-item" ? (q(), de("ol", V0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "image" ? (q(), de("p", W0, [
        r.node.linkTo ? (q(), oe(Zo, {
          key: 0,
          field: r.node.linkTo
        }, {
          default: $e(() => [
            ge(Xo, {
              field: r.node
            }, null, 8, [
              "field"
            ])
          ]),
          _: 1
        }, 8, [
          "field"
        ])) : (q(), oe(Xo, {
          key: 1,
          field: r.node
        }, null, 8, [
          "field"
        ]))
      ])) : r.node.type === "embed" ? (q(), oe(Ki, {
        key: 15,
        field: r.node.oembed
      }, null, 8, [
        "field"
      ])) : r.node.type === "hyperlink" ? (q(), oe(Zo, {
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
        class: Qr(r.node.data.label)
      }, [
        xe(r.$slots, "default")
      ], 2)) : (q(true), de(we, {
        key: 18
      }, rr(r.node.text.split(`
`), (s, i) => (q(), de(we, {
        key: s
      }, [
        i > 0 ? (q(), de("br", q0)) : nn("", true),
        dr(Ht(s), 1)
      ], 64))), 128));
    }
  });
  K0 = pe({
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
        return ((s = n.components) == null ? void 0 : s[t[o.type] || o.type]) || Ac;
      }
      return (o, s) => {
        const i = pi("PrismicRichTextSerialize", true);
        return q(true), de(we, null, rr(n.children, (a) => (q(), oe(Je(r(a)), {
          key: JSON.stringify(a),
          node: a.node,
          "link-resolver": r(a) === Ac ? n.linkResolver : void 0
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
            ])) : nn("", true)
          ]),
          _: 2
        }, 1032, [
          "node",
          "link-resolver"
        ]))), 128);
      };
    }
  });
  es = pe({
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
      const t = e, { options: n } = ao(), r = K(() => {
        var a;
        return t.components || ((a = n.components) == null ? void 0 : a.richTextComponents);
      }), o = K(() => t.linkResolver || n.linkResolver), s = K(() => tp(t.field || []).children), i = K(() => {
        var a;
        return t.components ? true : t.serializer ? false : (a = n.components) != null && a.richTextComponents ? true : !n.richTextSerializer;
      });
      return (a, l) => i.value && (re(yr).richText(e.field) || e.fallback) ? (q(), oe(La, {
        key: 0,
        wrapper: e.wrapper
      }, {
        default: $e(() => [
          s.value.length ? (q(), oe(K0, {
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
      ])) : i.value ? nn("", true) : (q(), oe(E0, {
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
  G0 = () => ({
    table: {
      type: Object,
      required: true
    }
  });
  z0 = () => ({
    head: {
      type: Object,
      required: true
    }
  });
  J0 = () => ({
    body: {
      type: Object,
      required: true
    }
  });
  Q0 = () => ({
    row: {
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
  X0 = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  Z0 = {
    table: pe({
      props: G0(),
      setup(e, { slots: t }) {
        return () => he("table", t.default ? t.default() : []);
      }
    }),
    thead: pe({
      props: z0(),
      setup(e, { slots: t }) {
        return () => he("thead", t.default ? t.default() : []);
      }
    }),
    tbody: pe({
      props: J0(),
      setup(e, { slots: t }) {
        return () => he("tbody", t.default ? t.default() : []);
      }
    }),
    tr: pe({
      props: Q0(),
      setup(e, { slots: t }) {
        return () => he("tr", t.default ? t.default() : []);
      }
    }),
    th: pe({
      props: Y0(),
      setup(e, { slots: t }) {
        return () => he("th", t.default ? t.default() : []);
      }
    }),
    td: pe({
      props: X0(),
      setup(e, { slots: t }) {
        return () => he("td", t.default ? t.default() : []);
      }
    })
  };
  xc = pe({
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
          (q(true), de(we, null, rr(n.row.cells, (o) => (q(), de(we, {
            key: o.key
          }, [
            o.type === "header" ? (q(), oe(Je(t.components.th), {
              key: 0,
              cell: o
            }, {
              default: $e(() => [
                ge(es, {
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
                ge(es, {
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
  Oc = pe({
    name: "PrismicTable",
    __name: "PrismicTable",
    props: {
      field: {},
      fallback: {},
      components: {}
    },
    setup(e) {
      const t = e, n = K(() => ({
        ...Z0,
        ...t.components
      }));
      return (r, o) => re(yr).table(r.field) ? (q(), oe(Je(n.value.table), to({
        key: 0,
        table: r.field
      }, r.$attrs), {
        default: $e(() => [
          r.field.head ? (q(), oe(Je(n.value.thead), {
            key: 0,
            head: r.field.head
          }, {
            default: $e(() => [
              (q(true), de(we, null, rr(r.field.head.rows, (s) => (q(), oe(xc, {
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
          ])) : nn("", true),
          (q(), oe(Je(n.value.tbody), {
            body: r.field.body
          }, {
            default: $e(() => [
              (q(true), de(we, null, rr(r.field.body.rows, (s) => (q(), oe(xc, {
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
  eS = () => null;
  Lc = pe({
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
      const t = e, { options: n } = ao(), r = K(() => t.slices.map((o, s) => {
        var i, a;
        const l = "slice_type" in o ? o.slice_type : o.type, u = "id" in o && typeof o.id == "string" ? o.id : `${s}-${JSON.stringify(o)}`, c = ((i = t.components) == null ? void 0 : i[l]) || t.defaultComponent || ((a = n.components) == null ? void 0 : a.sliceZoneDefaultComponent);
        if (!c) return {
          is: eS,
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
      return (o, s) => o.slices ? (q(), oe(La, {
        key: 0,
        wrapper: o.wrapper
      }, {
        default: $e(() => [
          (q(true), de(we, null, rr(r.value, (i) => (q(), oe(Je(i.is), to({
            key: i.key,
            ref_for: true
          }, i.props), null, 16))), 128))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : nn("", true);
    }
  });
  Mc = pe({
    name: "PrismicText",
    __name: "PrismicText",
    props: {
      field: {},
      fallback: {},
      separator: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => re(yr).richText(t.field) || t.fallback ? (q(), oe(La, {
        key: 0,
        wrapper: t.wrapper
      }, {
        default: $e(() => [
          dr(Ht(re(Zd)(t.field) || t.fallback), 1)
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : nn("", true);
    }
  });
  tS = (e) => {
    let t;
    return e.client ? t = e.client : t = Uw(e.endpoint, e.clientConfig), {
      options: e,
      ...{
        client: t,
        filter: $t,
        cookie: fw
      },
      ...{
        asText: Zd,
        asHTML: (s, ...i) => {
          const [a, l] = i;
          return sp(s, typeof a == "function" || a == null ? {
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
        asLinkAttrs: (s, i) => Xd(s, {
          linkResolver: e.linkResolver,
          ...i
        }),
        asDate: s0,
        asImageSrc: w0,
        asImageWidthSrcSet: ip,
        asImagePixelDensitySrcSet: ap,
        isFilled: yr,
        documentToLinkField: Gd
      },
      install(s) {
        s.provide(lp, this), s.config.globalProperties.$prismic = this, e.injectComponents !== false && (s.component(Zo.name, Zo), s.component(Ki.name, Ki), s.component(Xo.name, Xo), s.component(Oc.name, Oc), s.component(Mc.name, Mc), s.component(es.name, es), s.component(Lc.name, Lc));
      }
    };
  };
  nS = void 0;
  rS = void 0;
  oS = void 0;
  sS = void 0;
  iS = void 0;
  aS = void 0;
  lS = Re({
    name: "prismic:setup",
    parallel: true,
    async setup(e) {
      var _a2;
      const t = Bt().public.prismic;
      let n;
      n = nS;
      const r = t.environment || t.endpoint || (n == null ? void 0 : n.documentAPIEndpoint) || "", o = tS({
        ...t,
        endpoint: r,
        client: n,
        linkResolver: rS,
        richTextSerializer: oS,
        injectComponents: false,
        components: {
          linkInternalComponent: Ui,
          linkExternalComponent: Ui,
          ...t.components,
          linkRel: sS,
          richTextComponents: iS,
          sliceZoneDefaultComponent: aS
        }
      });
      if (e.vueApp.use(o), t.preview) {
        const s = pc("io.prismic.preview").value;
        if (s) try {
          const i = typeof s == "string" ? JSON.parse(decodeURIComponent(s)) : s;
          if (Object.keys(i).some((a) => a in i && typeof i[a] == "object" && i[a] !== null && "preview" in i[a] && i[a].preview)) {
            let a = false;
            mr(() => {
              a || Hi();
            }), Ie().afterEach(() => {
              a = true, Hi();
            });
          }
        } catch (i) {
          console.warn("Failed to parse Prismic preview cookie", i);
        }
      }
      return t.toolbar && ((_a2 = o.client) == null ? void 0 : _a2.repositoryName) ? _s({
        script: [
          {
            key: "prismic-preview",
            src: `https://static.cdn.prismic.io/prismic.min.js?repo=${o.client.repositoryName}&new=true`,
            async: true,
            defer: true,
            crossorigin: "anonymous"
          }
        ]
      }) : pc("io.prismic.preview").value = null, {
        provide: {
          prismic: o
        }
      };
    }
  });
  cS = Re(() => {
  });
  var $c = (e, t, n) => typeof e == "function" ? e(t, n) : e, Pt = Symbol("loaders"), si = Symbol("loaderEntries"), uS = Symbol(), Rn = Symbol(), Ic = Symbol(), Ao = Symbol(), ii = Symbol(), fS = Symbol();
  function Nc(e) {
    return e && e[uS];
  }
  function Dc(e) {
    e && e.length;
  }
  var dS = Object.assign, pS = Symbol();
  function hS({ router: e, app: t, effect: n, isSSR: r, errors: o = [], selectNavigationResult: s = (i) => i[0].value }) {
    if (e[si] != null) return () => {
    };
    e[si] = /* @__PURE__ */ new WeakMap(), e[Ic] = t, e[fS] = !!r;
    const i = n.run(() => Ue(false));
    t.provide(pS, i);
    const a = e.beforeEach((f) => {
      var _a2;
      e[Rn] && ((_a2 = e[Rn].meta[Ao]) == null ? void 0 : _a2.abort()), e[Rn] = f, f.meta[Pt] = /* @__PURE__ */ new Set(), f.meta[Ao] = new AbortController(), f.meta[ii] = [];
      const p = [];
      for (const d of f.matched) if (!d.meta[Pt]) {
        d.meta[Pt] = new Set(d.meta.loaders || []);
        for (const h in d.components) {
          const g = d.components[h], S = (mS(g) ? g() : Promise.resolve(g)).then((k) => {
            if (typeof k != "function") {
              for (const _ in k) {
                const m = k[_];
                Nc(m) && d.meta[Pt].add(m);
              }
              if (Array.isArray(k.__loaders)) for (const _ of k.__loaders) Nc(_) && d.meta[Pt].add(_);
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
      return Dc([]), i.value = true, Promise.all(d.map((h) => {
        const { server: g, lazy: S, errors: k } = h._.options;
        if (!g && r) return;
        const _ = n.run(() => t.runWithContext(() => h._.load(f, e, p)));
        return !r && $c(S, f, p) ? void 0 : _.catch((m) => {
          if (!k) throw m;
          if (k === true) {
            if (Array.isArray(o) ? o.some((v) => m instanceof v) : o(m)) return;
          } else if (Array.isArray(k) ? k.some((v) => m instanceof v) : k(m)) return;
          throw m;
        });
      })).then(() => {
        if (f.meta[ii].length) return s(f.meta[ii]);
      }).catch((h) => h instanceof gS ? h.value : Promise.reject(h)).finally(() => {
        Dc([]), i.value = false;
      });
    }), u = e.afterEach((f, p, d) => {
      var _a2;
      if (d) {
        if ((_a2 = f.meta[Ao]) == null ? void 0 : _a2.abort(d), xt(d, 16)) for (const h of f.meta[Pt]) h._.getEntry(e).resetPending();
      } else for (const h of f.meta[Pt]) {
        const { commit: g, lazy: S } = h._.options;
        if (g === "after-load") {
          const k = h._.getEntry(e);
          k && (!$c(S, f, p) || !k.isLoading.value) && k.commit(f);
        }
      }
      e[Rn] === f && (e[Rn] = null);
    }), c = e.onError((f, p) => {
      var _a2;
      (_a2 = p.meta[Ao]) == null ? void 0 : _a2.abort(f), e[Rn] === p && (e[Rn] = null);
    });
    return () => {
      delete e[si], delete e[Ic], a(), l(), u(), c();
    };
  }
  function mS(e) {
    return typeof e == "function" && !("displayName" in e) && !("props" in e) && !("emits" in e) && !("__vccOpts" in e);
  }
  var gS = class {
    constructor(e) {
      this.value = e;
    }
  };
  function yS(e, t) {
    const n = Yr(true), r = hS(dS({
      app: e,
      effect: n
    }, t)), { unmount: o } = e;
    e.unmount = () => {
      n.stop(), r(), o.call(e);
    };
  }
  const vS = Re({
    name: "data-loaders",
    dependsOn: [
      "nuxt:router"
    ],
    setup(e) {
      e.vueApp.use(yS, {
        router: e.vueApp.config.globalProperties.$router,
        isSSR: false
      });
    }
  }), bS = Re({
    enforce: "post",
    async setup() {
      const e = hr(), t = Fd("nuxt-seo-utils:routeRules", () => null);
      if (t.value) {
        const { head: n, seoMeta: r } = t.value;
        n && e.push(n), r && ud(r);
      }
    }
  });
  function _S(e, t) {
    let n = e;
    Tt(e, {
      strict: false,
      acceptRelative: true
    }) && (n = bs(e).pathname);
    const r = lg(t.base || "/");
    r !== "/" && n.startsWith(r) && (n = n.slice(r.length));
    let o = Xt(t.absolute ? t.siteUrl : "");
    r !== "/" && o.endsWith(r) && (o = o.slice(0, o.indexOf(r)));
    const s = t.withBase ? Ci(r, o || "/") : o, i = Ci(n, s);
    return n === "/" && !t.withBase ? ys(i) : kS(t.trailingSlash, i);
  }
  const wS = [
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
  function SS(e) {
    var _a2;
    const n = (_a2 = (e.split("/").pop() || e).match(/\.[0-9a-z]+$/i)) == null ? void 0 : _a2[0];
    return n && wS.includes(n.replace(".", ""));
  }
  function kS(e, t) {
    const n = bs(t);
    if (SS(n.pathname)) return t;
    const r = e ? ys(n.pathname) : Xt(n.pathname);
    return `${n.protocol ? `${n.protocol}//` : ""}${n.host || ""}${r}${n.search || ""}${n.hash || ""}`;
  }
  function ES(e) {
    return window.location.origin;
  }
  function TS(e = {}) {
    const t = Ca(), n = ES(), r = Bt().app.baseURL || "/";
    return (o) => K(() => _S(re(o), {
      absolute: re(e.absolute),
      withBase: re(e.withBase),
      siteUrl: re(e.canonical) !== false ? t.url : n,
      trailingSlash: t.trailingSlash,
      base: r
    }));
  }
  function RS() {
    const e = Ca({
      resolveRefs: false
    }), t = () => Ke(e.currentLocale) || Ke(e.defaultLocale) || "en";
    hr().use(ad);
    const { canonicalQueryWhitelist: r, canonicalLowercase: o } = Bt().public["seo-utils"], s = Bn(), i = TS({
      withBase: true,
      absolute: true
    }), a = pr(), l = K(() => {
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
        href: Object.keys(d).length ? `${p}?${Lf(d)}` : p
      };
    }), u = {
      tagPriority: "low"
    };
    _s({
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
    ud(c, u);
  }
  const CS = Re({
    name: "nuxt-seo:defaults",
    order: 999,
    env: {
      islands: false
    },
    setup() {
      RS();
    }
  }), PS = [
    fv,
    o_,
    s_,
    u_,
    w_,
    E_,
    T_,
    R_,
    C_,
    P_,
    A_,
    x_,
    O_,
    L_,
    I_,
    J_,
    Q_,
    Y_,
    sw,
    iw,
    lS,
    cS,
    vS,
    bS,
    CS
  ], up = (e = "RouteProvider") => pe({
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
      return Gt(Nn, Nt(o)), () => t.vnode ? he(t.vnode, {
        ref: t.vnodeRef
      }) : t.vnode;
    }
  }), AS = up(), Bc = /* @__PURE__ */ new WeakMap(), xS = pe({
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
      const o = me(), s = He(), i = Te(Nn, null);
      let a;
      r({
        pageRef: s
      });
      const l = Te(zf, null);
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
        Dn(() => {
          p();
        });
      }
      return () => he(Ld, {
        name: e.name,
        route: e.route,
        ...t
      }, {
        default: (p) => {
          const d = LS(i, p.route, p.Component), h = i && i.matched.length === p.route.matched.length;
          if (!p.Component) {
            if (u && !h) return u;
            c();
            return;
          }
          if (u && l && !l.isCurrent(p.route)) return u;
          if (d && i && (!l || (l == null ? void 0 : l.isCurrent(i)))) return h ? u : null;
          const g = Vi(p, e.pageKey), S = MS(i, p.route, p.Component);
          !o.isHydrating && a === g && !S && wt(() => {
            f = true, o.callHook("page:loading:end");
          }), a = g;
          const k = !!(e.transition ?? p.route.meta.pageTransition ?? Tl), _ = k && OS([
            e.transition,
            p.route.meta.pageTransition,
            Tl,
            {
              onAfterLeave() {
                delete o._runningTransition, o.callHook("page:transition:finish", p.Component);
              }
            }
          ]), m = e.keepalive ?? p.route.meta.keepalive ?? Wg;
          return u = $d(k && _, m_(m, he(ua, {
            suspensible: true,
            onPending: () => {
              k && (o._runningTransition = true), o.callHook("page:start", p.Component);
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
                vnode: n.default ? $S(n.default, p) : p.Component,
                route: p.route,
                renderKey: g || void 0,
                trackRootNodes: k,
                vnodeRef: s
              };
              if (!m) return he(AS, v);
              const w = p.Component.type, P = w;
              let M = Bc.get(P);
              return M || (M = up(w.name || w.__name), Bc.set(P, M)), he(M, v);
            }
          }))).default(), u;
        }
      });
    }
  });
  function OS(e) {
    const t = e.filter(Boolean).map((n) => ({
      ...n,
      onAfterLeave: n.onAfterLeave ? Ra(n.onAfterLeave) : void 0
    }));
    return ma(...t);
  }
  function LS(e, t, n) {
    if (!e) return false;
    const r = t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    });
    return !r || r === -1 ? false : t.matched.slice(0, r).some((o, s) => {
      var _a2, _b2, _c2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) !== ((_c2 = (_b2 = e.matched[s]) == null ? void 0 : _b2.components) == null ? void 0 : _c2.default);
    }) || n && Vi({
      route: t,
      Component: n
    }) !== Vi({
      route: e,
      Component: n
    });
  }
  function MS(e, t, n) {
    return e ? t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    }) < t.matched.length - 1 : false;
  }
  function $S(e, t) {
    const n = e(t);
    return n.length === 1 ? he(n[0]) : he(we, void 0, n);
  }
  let NS;
  IS = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
  NS = {};
  function DS(e, t, n, r, o, s) {
    const i = xS;
    return q(), de("div", null, [
      ge(i)
    ]);
  }
  let BS, jS, FS, US;
  BS = IS(NS, [
    [
      "render",
      DS
    ]
  ]);
  jS = pe({
    name: "LayoutLoader",
    inheritAttrs: false,
    props: {
      name: String,
      layoutProps: Object
    },
    setup(e, t) {
      return () => he(vn[e.name], e.layoutProps, t.slots);
    }
  });
  FS = {
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
  HS = pe({
    name: "NuxtLayout",
    inheritAttrs: false,
    props: FS,
    setup(e, t) {
      const n = me(), r = Te(Nn), s = !r || r === Bn() ? Md() : r, i = K(() => {
        let c = re(e.name) ?? (s == null ? void 0 : s.meta.layout) ?? "default";
        return c && !(c in vn) && e.fallback && (c = re(e.fallback)), c;
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
        const c = i.value && i.value in vn, f = (s == null ? void 0 : s.meta.layoutTransition) ?? Ug, p = u;
        return u = i.value, $d(c && f, {
          default: () => he(ua, {
            suspensible: true,
            onResolve: () => {
              wt(l);
            }
          }, {
            default: () => he(US, {
              layoutProps: to(t.attrs, {
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
  US = pe({
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
      e.shouldProvide && Gt(zf, {
        isCurrent: (s) => n === (s.meta.layout ?? "default")
      });
      const r = Te(Nn);
      if (r && r === Bn()) {
        const s = Md(), i = {};
        for (const a in s) {
          const l = a;
          Object.defineProperty(i, l, {
            enumerable: true,
            get: () => e.isRenderingNewLayout(e.name) ? s[l] : r[l]
          });
        }
        Gt(Nn, Nt(i));
      }
      return () => {
        var _a2, _b2;
        return !n || typeof n == "string" && !(n in vn) ? (_b2 = (_a2 = t.slots).default) == null ? void 0 : _b2.call(_a2) : he(jS, {
          key: n,
          layoutProps: e.layoutProps,
          name: n
        }, t.slots);
      };
    }
  });
  var VS = {};
  const WS = {
    "bg-neutral-100": "",
    "f-pt-2xl": ""
  }, qS = {
    "f-mt-lg": "",
    flex: "~ md:justify-center"
  }, KS = {
    "nq-prose-compact": "",
    "w-full": "",
    "f-mt-lg": ""
  }, GS = {
    bg: "red/10",
    "text-red-1100": "",
    "outline-red-600": ""
  }, zS = {
    bg: "red/10",
    "text-red-1100": "",
    "mt-4": "",
    "outline-red-600": ""
  }, JS = pe({
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
        if (i.value || VS.REDIRECT_ALL_ERRORS === "true") {
          const g = encodeURIComponent(o.fullPath);
          s.push(`/developers/error?original-path=${g}&status=${n.value}`);
        }
      });
      const u = K(() => l.value ? "/blog" : "/"), c = K(() => l.value ? "Browse all articles" : "Back to home"), f = () => Qf({
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
      _s({
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
        const k = Ui, _ = HS;
        return q(), oe(_, null, {
          default: $e(() => [
            st("section", WS, [
              st("h1", null, Ht(re(p)), 1),
              st("p", null, Ht(re(d)), 1),
              st("div", qS, [
                ge(k, {
                  to: re(u),
                  "nq-arrow": "",
                  "nq-pill-lg": "",
                  "nq-pill-blue": "",
                  onClick: f
                }, {
                  default: $e(() => [
                    dr(Ht(re(c)), 1)
                  ]),
                  _: 1
                }, 8, [
                  "to"
                ])
              ]),
              st("div", KS, [
                st("details", null, [
                  S[0] || (S[0] = st("summary", {
                    "w-full": "",
                    "cursor-pointer": "",
                    text: "center neutral-800"
                  }, [
                    st("span", null, "Details")
                  ], -1)),
                  st("pre", GS, Ht(g.error), 1),
                  S[1] || (S[1] = st("span", {
                    "text-red-1100": "",
                    "f-px-sm": "",
                    "f-mt-md": "",
                    "nq-label": ""
                  }, "Stack", -1)),
                  st("pre", zS, Ht(re(h)), 1)
                ])
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  }), QS = {
    key: 0
  }, jc = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null, n = me(), r = n.deferHydration();
      if (n.isHydrating) {
        const u = n.hooks.hookOnce("app:error", r);
        Ie().beforeEach(u);
      }
      const o = false;
      Gt(Nn, Bn()), n.hooks.callHookWith((u) => u.map((c) => c()), "vue:setup");
      const s = pr(), i = false, a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
      $u((u, c, f) => {
        if (n.hooks.callHook("vue:error", u, c, f).catch((p) => console.error("[nuxt] Error in `vue:error` hook", p)), a.test(navigator.userAgent)) return n.hooks.callHook("app:error", u), console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, u), false;
        if (Yf(u) && (u.fatal || u.unhandled)) return n.runWithContext(() => Pn(u)), false;
      });
      const l = false;
      return (u, c) => (q(), oe(ua, {
        onResolve: re(r)
      }, {
        default: $e(() => [
          re(i) ? (q(), de("div", QS)) : re(s) ? (q(), oe(re(JS), {
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
          })) : (q(), oe(re(BS), {
            key: 4
          }))
        ]),
        _: 1
      }, 8, [
        "onResolve"
      ]));
    }
  };
  let Fc;
  {
    let e;
    Fc = async function() {
      var _a2, _b2;
      if (e) return e;
      const n = !!(((_a2 = window.__NUXT__) == null ? void 0 : _a2.serverRendered) ?? ((_b2 = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b2.dataset.ssr) === "true"), r = n ? Bm(jc) : Dm(jc), o = Qg({
        vueApp: r
      });
      async function s(i) {
        var _a3;
        await o.callHook("app:error", i), (_a3 = o.payload).error || (_a3.error = wn(i));
      }
      r.config.errorHandler = s, o.hook("app:suspense:resolve", () => {
        r.config.errorHandler === s && (r.config.errorHandler = void 0);
      }), !n && Rl.id && o.hook("app:suspense:resolve", () => {
        var _a3;
        (_a3 = document.getElementById(Rl.id)) == null ? void 0 : _a3.remove();
      });
      try {
        await Zg(o, PS);
      } catch (i) {
        s(i);
      }
      try {
        await o.hooks.callHook("app:created", r), await o.hooks.callHook("app:beforeMount", r), r.mount(Gg), await o.hooks.callHook("app:mounted", r), await wt();
      } catch (i) {
        s(i);
      }
      return r;
    }, e = Fc().catch((t) => {
      throw console.error("Error while mounting app:", t), t;
    });
  }
})();
export {
  nk as $,
  Lc as A,
  ud as B,
  He as C,
  Mc as D,
  Xo as E,
  we as F,
  St as G,
  ds as H,
  he as I,
  Xn as J,
  Ka as K,
  gn as L,
  me as M,
  en as N,
  Ln as O,
  Ue as P,
  hr as Q,
  xe as R,
  qc as S,
  uf as T,
  Kp as U,
  ef as V,
  gk as W,
  ZS as X,
  at as Y,
  Zo as Z,
  Ui as _,
  __tla,
  ge as a,
  Md as a$,
  mk as a0,
  tt as a1,
  wt as a2,
  Dn as a3,
  cm as a4,
  Te as a5,
  Gt as a6,
  rk as a7,
  Mu as a8,
  dh as a9,
  Ke as aA,
  uk as aB,
  ma as aC,
  lg as aD,
  Tt as aE,
  vs as aF,
  bs as aG,
  vk as aH,
  Ym as aI,
  Zd as aJ,
  Ww as aK,
  w0 as aL,
  Ts as aM,
  Es as aN,
  xa as aO,
  s0 as aP,
  fr as aQ,
  pu as aR,
  us as aS,
  na as aT,
  Yr as aU,
  YS as aV,
  ct as aW,
  ak as aX,
  ok as aY,
  ek as aZ,
  Cs as a_,
  ia as aa,
  Ce as ab,
  lt as ac,
  Ek as ad,
  Fd as ae,
  fk as af,
  sk as ag,
  lk as ah,
  Ie as ai,
  es as aj,
  XS as ak,
  hk as al,
  Se as am,
  $t as an,
  mr as ao,
  kk as ap,
  wv as aq,
  Et as ar,
  Je as as,
  Ih as at,
  ck as au,
  Jh as av,
  ie as aw,
  Dm as ax,
  tk as ay,
  _k as az,
  oe as b,
  Sk as b0,
  dk as b1,
  cy as b2,
  Kl as b3,
  bk as b4,
  wk as b5,
  pk as b6,
  yk as b7,
  de as c,
  pe as d,
  st as e,
  nn as f,
  dr as g,
  ss as h,
  IS as i,
  K as j,
  _s as k,
  HS as l,
  to as m,
  Qr as n,
  q as o,
  Bn as p,
  Bt as q,
  rr as r,
  ao as s,
  Ht as t,
  re as u,
  ik as v,
  $e as w,
  wn as x,
  Ca as y,
  Tk as z
};
