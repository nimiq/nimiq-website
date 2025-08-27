const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./onepager.BMUVdREQ.css","./Bg2nldgQ.js","./DnAJ4uU1.js","./CvS46tUD.js","./DGIQ2ECZ.js","./DjTTnvi4.js","./CTnqUw6B.js","./T5R3qLKT.js","./BPZnJYPo.js","./CuGdq-3R.js","./DFn-vR6U.js","./UqZ8O5YD.js","./jF-tUr_L.js","./B0fHAcDH.js","./DKBBbajR.js","./DlAUqK2U.js","./Tooltip.BbcNytvo.css","./5qd8EHar.js","./BTeZegdw.js","./DQ8XQL6d.js","./CpsPJSKh.js","./nqfE2F-r.js","./roadmap.D5eBsHDI.css","./DyjcEpGN.js","./KOhr7kEc.js","./D9FqhzvQ.js","./BkJbo92y.js","./Bo9A3gK3.js","./Cl6nVLLe.js","./CiDt83jx.js","./BMU6p9dT.js","./BPn2u3Ki.js","./_post_.C76db4oH.css","./CCyN_IY9.js","./CqkleIqs.js","./BZ5nT3aQ.js","./D008PXCg.js","./D0DW2WUk.js","./Blockchain.CMiywWav.css","./DPKIYy-A.js","./Dbkl2QtV.js","./mTWZ1Bzc.js","./BxNK9b8y.js","./CHIgUVhi.js","./DPSHcICq.js","./C410B2_S.js","./CNyQ-E8Y.js","./BqMu1s5P.js","./default.BZF3ZKO6.css","./BBmG15LB.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
let fl, ut, ot, Ar, de, pr, Te, Tl, wt, $k, _a, je, ye, Gt, Pt, Fe, Jn, ae, Ro, st, Vn, Gn, qt, sC, no, qk, ln, fu, W, Ks, bu, Kk, Ak, vC, qC, Wk, uC, $r, Kh, Yk, He, GC, FC, Yp, Xn, UC, Ps, hk, Pk, _e, Ft, Yn, Mk, Np, Y0, Xs, RS, Qs, al, fS, Tk, Zy, we, _o, Zg, Ot, qs, Tr, Rs, gk, dC, ra, IC, Le, xn, jk, To, eg, Nk, Re, Vt, yk, gf, rm, Na, $e, ct, mk, Bk, _p, kk, bk, Sk, Gs, Ok, Ug, VC, RC, LC, nt, Ye, Ds, Kn, go, El, rt, Tc, Lk, Ik, Rk, xk, Xk, qn, pk, Bs, wk, vk, Fk, Uk, zk, iC, Vk, eC, pp, Dk, vb, HE, Hk, Tm, Ek, Qp, lC, Jk, Fm, ue, Pg, Ck, Gk, Pn, te, Z, ie, le, B, rk, be, qe, zt, ks, mo, j, Ct, ho, _r, We, Xt, zn, fe, _k, Oe, Vd, du;
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
  function ka(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  let pe, cr, Wt, nh, po, Ta, Me, Ra, rh, ge, z, ur, As, hl, oh, oe, Pe, Rt, Se, Pa, ku, Rr, sh, Tu, Aa, fr, xs, ih, ah, cn, Os, es, et, dr, Ru, ji, Pu;
  pe = {};
  cr = [];
  Wt = () => {
  };
  nh = () => false;
  po = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
  Ta = (e) => e.startsWith("onUpdate:");
  Me = Object.assign;
  Ra = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  rh = Object.prototype.hasOwnProperty;
  ge = (e, t) => rh.call(e, t);
  z = Array.isArray;
  ur = (e) => Rr(e) === "[object Map]";
  As = (e) => Rr(e) === "[object Set]";
  hl = (e) => Rr(e) === "[object Date]";
  oh = (e) => Rr(e) === "[object RegExp]";
  oe = (e) => typeof e == "function";
  Pe = (e) => typeof e == "string";
  Rt = (e) => typeof e == "symbol";
  Se = (e) => e !== null && typeof e == "object";
  Pa = (e) => (Se(e) || oe(e)) && oe(e.then) && oe(e.catch);
  ku = Object.prototype.toString;
  Rr = (e) => ku.call(e);
  sh = (e) => Rr(e).slice(8, -1);
  Tu = (e) => Rr(e) === "[object Object]";
  Aa = (e) => Pe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  fr = ka(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  xs = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  ih = /-(\w)/g;
  rt = xs((e) => e.replace(ih, (t, n) => n ? n.toUpperCase() : ""));
  ah = /\B([A-Z])/g;
  cn = xs((e) => e.replace(ah, "-$1").toLowerCase());
  Os = xs((e) => e.charAt(0).toUpperCase() + e.slice(1));
  es = xs((e) => e ? `on${Os(e)}` : "");
  et = (e, t) => !Object.is(e, t);
  dr = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  };
  Ru = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  };
  ji = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  Pu = (e) => {
    const t = Pe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let ml;
  const Ls = () => ml || (ml = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  ho = function(e) {
    if (z(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = Pe(r) ? fh(r) : ho(r);
        if (o) for (const s in o) t[s] = o[s];
      }
      return t;
    } else if (Pe(e) || Se(e)) return e;
  };
  const lh = /;(?![^(]*\))/g, ch = /:([^]+)/, uh = /\/\*[^]*?\*\//g;
  function fh(e) {
    const t = {};
    return e.replace(uh, "").split(lh).forEach((n) => {
      if (n) {
        const r = n.split(ch);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  mo = function(e) {
    let t = "";
    if (Pe(e)) t = e;
    else if (z(e)) for (let n = 0; n < e.length; n++) {
      const r = mo(e[n]);
      r && (t += r + " ");
    }
    else if (Se(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  Vn = function(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !Pe(t) && (e.class = mo(t)), n && (e.style = ho(n)), e;
  };
  const dh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ph = ka(dh);
  function Au(e) {
    return !!e || e === "";
  }
  function hh(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let r = 0; n && r < e.length; r++) n = br(e[r], t[r]);
    return n;
  }
  function br(e, t) {
    if (e === t) return true;
    let n = hl(e), r = hl(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : false;
    if (n = Rt(e), r = Rt(t), n || r) return e === t;
    if (n = z(e), r = z(t), n || r) return n && r ? hh(e, t) : false;
    if (n = Se(e), r = Se(t), n || r) {
      if (!n || !r) return false;
      const o = Object.keys(e).length, s = Object.keys(t).length;
      if (o !== s) return false;
      for (const i in e) {
        const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
        if (a && !l || !a && l || !br(e[i], t[i])) return false;
      }
    }
    return String(e) === String(t);
  }
  function xu(e, t) {
    return e.findIndex((n) => br(n, t));
  }
  let Ou, Lu, ti;
  Ou = (e) => !!(e && e.__v_isRef === true);
  Xt = (e) => Pe(e) ? e : e == null ? "" : z(e) || Se(e) && (e.toString === ku || !oe(e.toString)) ? Ou(e) ? Xt(e.value) : JSON.stringify(e, Lu, 2) : String(e);
  Lu = (e, t) => Ou(t) ? Lu(e, t.value) : ur(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], s) => (n[ti(r, s) + " =>"] = o, n), {})
  } : As(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => ti(n))
  } : Rt(t) ? ti(t) : Se(t) && !z(t) && !Tu(t) ? String(t) : t;
  ti = (e, t = "") => {
    var n;
    return Rt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let Ke;
  class $u {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Ke, !t && Ke && (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1);
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
        const n = Ke;
        try {
          return Ke = this, t();
        } finally {
          Ke = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Ke, Ke = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Ke = this.prevScope, this.prevScope = void 0);
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
  qn = function(e) {
    return new $u(e);
  };
  Gt = function() {
    return Ke;
  };
  Pt = function(e, t = false) {
    Ke && Ke.cleanups.push(e);
  };
  let ke;
  const ni = /* @__PURE__ */ new WeakSet();
  class Mu {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ke && Ke.active && Ke.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, ni.has(this) && (ni.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Du(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, gl(this), Nu(this);
      const t = ke, n = Tt;
      ke = this, Tt = true;
      try {
        return this.fn();
      } finally {
        Bu(this), ke = t, Tt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) La(t);
        this.deps = this.depsTail = void 0, gl(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? ni.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Fi(this) && this.run();
    }
    get dirty() {
      return Fi(this);
    }
  }
  let Iu = 0, Wr, Vr;
  function Du(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = Vr, Vr = e;
      return;
    }
    e.next = Wr, Wr = e;
  }
  function xa() {
    Iu++;
  }
  function Oa() {
    if (--Iu > 0) return;
    if (Vr) {
      let t = Vr;
      for (Vr = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; Wr; ) {
      let t = Wr;
      for (Wr = void 0; t; ) {
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
  function Nu(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Bu(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), La(r), mh(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function Fi(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (ju(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function ju(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === eo) || (e.globalVersion = eo, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Fi(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = ke, r = Tt;
    ke = e, Tt = true;
    try {
      Nu(e);
      const o = e.fn(e._value);
      (t.version === 0 || et(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      ke = n, Tt = r, Bu(e), e.flags &= -3;
    }
  }
  function La(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let s = n.computed.deps; s; s = s.nextDep) La(s, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function mh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let Tt = true;
  const Fu = [];
  function on() {
    Fu.push(Tt), Tt = false;
  }
  function sn() {
    const e = Fu.pop();
    Tt = e === void 0 ? true : e;
  }
  function gl(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = ke;
      ke = void 0;
      try {
        t();
      } finally {
        ke = n;
      }
    }
  }
  let eo = 0;
  class gh {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class $s {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!ke || !Tt || ke === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== ke) n = this.activeLink = new gh(ke, this), ke.deps ? (n.prevDep = ke.depsTail, ke.depsTail.nextDep = n, ke.depsTail = n) : ke.deps = ke.depsTail = n, Hu(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ke.depsTail, n.nextDep = void 0, ke.depsTail.nextDep = n, ke.depsTail = n, ke.deps === n && (ke.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, eo++, this.notify(t);
    }
    notify(t) {
      xa();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Oa();
      }
    }
  }
  function Hu(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Hu(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const ls = /* @__PURE__ */ new WeakMap(), Nn = Symbol(""), Hi = Symbol(""), to = Symbol("");
  function ze(e, t, n) {
    if (Tt && ke) {
      let r = ls.get(e);
      r || ls.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new $s()), o.map = r, o.key = n), o.track();
    }
  }
  function Zt(e, t, n, r, o, s) {
    const i = ls.get(e);
    if (!i) {
      eo++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if (xa(), t === "clear") i.forEach(a);
    else {
      const l = z(e), u = l && Aa(n);
      if (l && n === "length") {
        const c = Number(r);
        i.forEach((f, d) => {
          (d === "length" || d === to || !Rt(d) && d >= c) && a(f);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(to)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Nn)), ur(e) && a(i.get(Hi)));
          break;
        case "delete":
          l || (a(i.get(Nn)), ur(e) && a(i.get(Hi)));
          break;
        case "set":
          ur(e) && a(i.get(Nn));
          break;
      }
    }
    Oa();
  }
  function yh(e, t) {
    const n = ls.get(e);
    return n && n.get(t);
  }
  function tr(e) {
    const t = ue(e);
    return t === e ? t : (ze(t, "iterate", to), vt(e) ? t : t.map(Ue));
  }
  function Ms(e) {
    return ze(e = ue(e), "iterate", to), e;
  }
  const vh = {
    __proto__: null,
    [Symbol.iterator]() {
      return ri(this, Symbol.iterator, Ue);
    },
    concat(...e) {
      return tr(this).concat(...e.map((t) => z(t) ? tr(t) : t));
    },
    entries() {
      return ri(this, "entries", (e) => (e[1] = Ue(e[1]), e));
    },
    every(e, t) {
      return Jt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Jt(this, "filter", e, t, (n) => n.map(Ue), arguments);
    },
    find(e, t) {
      return Jt(this, "find", e, t, Ue, arguments);
    },
    findIndex(e, t) {
      return Jt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Jt(this, "findLast", e, t, Ue, arguments);
    },
    findLastIndex(e, t) {
      return Jt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Jt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return oi(this, "includes", e);
    },
    indexOf(...e) {
      return oi(this, "indexOf", e);
    },
    join(e) {
      return tr(this).join(e);
    },
    lastIndexOf(...e) {
      return oi(this, "lastIndexOf", e);
    },
    map(e, t) {
      return Jt(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return Ir(this, "pop");
    },
    push(...e) {
      return Ir(this, "push", e);
    },
    reduce(e, ...t) {
      return yl(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return yl(this, "reduceRight", e, t);
    },
    shift() {
      return Ir(this, "shift");
    },
    some(e, t) {
      return Jt(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return Ir(this, "splice", e);
    },
    toReversed() {
      return tr(this).toReversed();
    },
    toSorted(e) {
      return tr(this).toSorted(e);
    },
    toSpliced(...e) {
      return tr(this).toSpliced(...e);
    },
    unshift(...e) {
      return Ir(this, "unshift", e);
    },
    values() {
      return ri(this, "values", Ue);
    }
  };
  function ri(e, t, n) {
    const r = Ms(e), o = r[t]();
    return r !== e && !vt(e) && (o._next = o.next, o.next = () => {
      const s = o._next();
      return s.value && (s.value = n(s.value)), s;
    }), o;
  }
  const bh = Array.prototype;
  function Jt(e, t, n, r, o, s) {
    const i = Ms(e), a = i !== e && !vt(e), l = i[t];
    if (l !== bh[t]) {
      const f = l.apply(e, s);
      return a ? Ue(f) : f;
    }
    let u = n;
    i !== e && (a ? u = function(f, d) {
      return n.call(this, Ue(f), d, e);
    } : n.length > 2 && (u = function(f, d) {
      return n.call(this, f, d, e);
    }));
    const c = l.call(i, u, r);
    return a && o ? o(c) : c;
  }
  function yl(e, t, n, r) {
    const o = Ms(e);
    let s = n;
    return o !== e && (vt(e) ? n.length > 3 && (s = function(i, a, l) {
      return n.call(this, i, a, l, e);
    }) : s = function(i, a, l) {
      return n.call(this, i, Ue(a), l, e);
    }), o[t](s, ...r);
  }
  function oi(e, t, n) {
    const r = ue(e);
    ze(r, "iterate", to);
    const o = r[t](...n);
    return (o === -1 || o === false) && $a(n[0]) ? (n[0] = ue(n[0]), r[t](...n)) : o;
  }
  function Ir(e, t, n = []) {
    on(), xa();
    const r = ue(e)[t].apply(e, n);
    return Oa(), sn(), r;
  }
  const _h = ka("__proto__,__v_isRef,__isVue"), Uu = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Rt));
  function wh(e) {
    Rt(e) || (e = String(e));
    const t = ue(this);
    return ze(t, "has", e), t.hasOwnProperty(e);
  }
  class Wu {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw") return r === (o ? s ? Ju : zu : s ? Gu : Ku).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const i = z(t);
      if (!o) {
        let l;
        if (i && (l = vh[n])) return l;
        if (n === "hasOwnProperty") return wh;
      }
      const a = Reflect.get(t, n, _e(t) ? t : r);
      return (Rt(n) ? Uu.has(n) : _h(n)) || (o || ze(t, "get", n), s) ? a : _e(a) ? i && Aa(n) ? a : a.value : Se(a) ? o ? Ds(a) : Ye(a) : a;
    }
  }
  class Vu extends Wu {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, o) {
      let s = t[n];
      if (!this._isShallow) {
        const l = an(s);
        if (!vt(r) && !an(r) && (s = ue(s), r = ue(r)), !z(t) && _e(s) && !_e(r)) return l ? false : (s.value = r, true);
      }
      const i = z(t) && Aa(n) ? Number(n) < t.length : ge(t, n), a = Reflect.set(t, n, r, _e(t) ? t : o);
      return t === ue(o) && (i ? et(r, s) && Zt(t, "set", n, r) : Zt(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = ge(t, n);
      t[n];
      const o = Reflect.deleteProperty(t, n);
      return o && r && Zt(t, "delete", n, void 0), o;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!Rt(n) || !Uu.has(n)) && ze(t, "has", n), r;
    }
    ownKeys(t) {
      return ze(t, "iterate", z(t) ? "length" : Nn), Reflect.ownKeys(t);
    }
  }
  class qu extends Wu {
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
  const Sh = new Vu(), Eh = new qu(), Ch = new Vu(true), kh = new qu(true), Ui = (e) => e, Oo = (e) => Reflect.getPrototypeOf(e);
  function Th(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, s = ue(o), i = ur(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? Ui : t ? cs : Ue;
      return !t && ze(s, "iterate", l ? Hi : Nn), {
        next() {
          const { value: f, done: d } = u.next();
          return d ? {
            value: f,
            done: d
          } : {
            value: a ? [
              c(f[0]),
              c(f[1])
            ] : c(f),
            done: d
          };
        },
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function Lo(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function Rh(e, t) {
    const n = {
      get(o) {
        const s = this.__v_raw, i = ue(s), a = ue(o);
        e || (et(o, a) && ze(i, "get", o), ze(i, "get", a));
        const { has: l } = Oo(i), u = t ? Ui : e ? cs : Ue;
        if (l.call(i, o)) return u(s.get(o));
        if (l.call(i, a)) return u(s.get(a));
        s !== i && s.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && ze(ue(o), "iterate", Nn), Reflect.get(o, "size", o);
      },
      has(o) {
        const s = this.__v_raw, i = ue(s), a = ue(o);
        return e || (et(o, a) && ze(i, "has", o), ze(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
      },
      forEach(o, s) {
        const i = this, a = i.__v_raw, l = ue(a), u = t ? Ui : e ? cs : Ue;
        return !e && ze(l, "iterate", Nn), a.forEach((c, f) => o.call(s, u(c), u(f), i));
      }
    };
    return Me(n, e ? {
      add: Lo("add"),
      set: Lo("set"),
      delete: Lo("delete"),
      clear: Lo("clear")
    } : {
      add(o) {
        !t && !vt(o) && !an(o) && (o = ue(o));
        const s = ue(this);
        return Oo(s).has.call(s, o) || (s.add(o), Zt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !vt(s) && !an(s) && (s = ue(s));
        const i = ue(this), { has: a, get: l } = Oo(i);
        let u = a.call(i, o);
        u || (o = ue(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? et(s, c) && Zt(i, "set", o, s) : Zt(i, "add", o, s), this;
      },
      delete(o) {
        const s = ue(this), { has: i, get: a } = Oo(s);
        let l = i.call(s, o);
        l || (o = ue(o), l = i.call(s, o)), a && a.call(s, o);
        const u = s.delete(o);
        return l && Zt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = ue(this), s = o.size !== 0, i = o.clear();
        return s && Zt(o, "clear", void 0, void 0), i;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((o) => {
      n[o] = Th(o, e, t);
    }), n;
  }
  function Is(e, t) {
    const n = Rh(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ge(n, o) && o in r ? n : r, o, s);
  }
  const Ph = {
    get: Is(false, false)
  }, Ah = {
    get: Is(false, true)
  }, xh = {
    get: Is(true, false)
  }, Oh = {
    get: Is(true, true)
  }, Ku = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), zu = /* @__PURE__ */ new WeakMap(), Ju = /* @__PURE__ */ new WeakMap();
  function Lh(e) {
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
  function $h(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Lh(sh(e));
  }
  Ye = function(e) {
    return an(e) ? e : Ns(e, false, Sh, Ph, Ku);
  };
  function Ut(e) {
    return Ns(e, false, Ch, Ah, Gu);
  }
  Ds = function(e) {
    return Ns(e, true, Eh, xh, zu);
  };
  pk = function(e) {
    return Ns(e, true, kh, Oh, Ju);
  };
  function Ns(e, t, n, r, o) {
    if (!Se(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = $h(e);
    if (s === 0) return e;
    const i = o.get(e);
    if (i) return i;
    const a = new Proxy(e, s === 2 ? r : n);
    return o.set(e, a), a;
  }
  function nn(e) {
    return an(e) ? nn(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function an(e) {
    return !!(e && e.__v_isReadonly);
  }
  function vt(e) {
    return !!(e && e.__v_isShallow);
  }
  function $a(e) {
    return e ? !!e.__v_raw : false;
  }
  ue = function(e) {
    const t = e && e.__v_raw;
    return t ? ue(t) : e;
  };
  pr = function(e) {
    return !ge(e, "__v_skip") && Object.isExtensible(e) && Ru(e, "__v_skip", true), e;
  };
  const Ue = (e) => Se(e) ? Ye(e) : e, cs = (e) => Se(e) ? Ds(e) : e;
  _e = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  fe = function(e) {
    return Yu(e, false);
  };
  Fe = function(e) {
    return Yu(e, true);
  };
  function Yu(e, t) {
    return _e(e) ? e : new Mh(e, t);
  }
  class Mh {
    constructor(t, n) {
      this.dep = new $s(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : ue(t), this._value = n ? t : Ue(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || vt(t) || an(t);
      t = r ? t : ue(t), et(t, n) && (this._rawValue = t, this._value = r ? t : Ue(t), this.dep.trigger());
    }
  }
  B = function(e) {
    return _e(e) ? e.value : e;
  };
  we = function(e) {
    return oe(e) ? e() : B(e);
  };
  const Ih = {
    get: (e, t, n) => t === "__v_raw" ? e : B(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return _e(o) && !_e(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function Qu(e) {
    return nn(e) ? e : new Proxy(e, Ih);
  }
  class Dh {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new $s(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  go = function(e) {
    return new Dh(e);
  };
  no = function(e) {
    const t = z(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = Xu(e, n);
    return t;
  };
  class Nh {
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
      return yh(ue(this._object), this._key);
    }
  }
  class Bh {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  Bs = function(e, t, n) {
    return _e(e) ? e : oe(e) ? new Bh(e) : Se(e) && arguments.length > 1 ? Xu(e, t, n) : fe(e);
  };
  function Xu(e, t, n) {
    const r = e[t];
    return _e(r) ? r : new Nh(e, t, n);
  }
  class jh {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new $s(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = eo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && ke !== this) return Du(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return ju(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Fh(e, t, n = false) {
    let r, o;
    return oe(e) ? r = e : (r = e.get, o = e.set), new jh(r, o, n);
  }
  const $o = {}, us = /* @__PURE__ */ new WeakMap();
  let In;
  function Hh(e, t = false, n = In) {
    if (n) {
      let r = us.get(n);
      r || us.set(n, r = []), r.push(e);
    }
  }
  function Uh(e, t, n = pe) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (y) => o ? y : vt(y) || o === false || o === 0 ? en(y, 1) : en(y);
    let c, f, d, p, h = false, m = false;
    if (_e(e) ? (f = () => e.value, h = vt(e)) : nn(e) ? (f = () => u(e), h = true) : z(e) ? (m = true, h = e.some((y) => nn(y) || vt(y)), f = () => e.map((y) => {
      if (_e(y)) return y.value;
      if (nn(y)) return u(y);
      if (oe(y)) return l ? l(y, 2) : y();
    })) : oe(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (d) {
        on();
        try {
          d();
        } finally {
          sn();
        }
      }
      const y = In;
      In = c;
      try {
        return l ? l(e, 3, [
          p
        ]) : e(p);
      } finally {
        In = y;
      }
    } : f = Wt, t && o) {
      const y = f, E = o === true ? 1 / 0 : o;
      f = () => en(y(), E);
    }
    const b = Gt(), S = () => {
      c.stop(), b && b.active && Ra(b.effects, c);
    };
    if (s && t) {
      const y = t;
      t = (...E) => {
        y(...E), S();
      };
    }
    let w = m ? new Array(e.length).fill($o) : $o;
    const g = (y) => {
      if (!(!(c.flags & 1) || !c.dirty && !y)) if (t) {
        const E = c.run();
        if (o || h || (m ? E.some((P, L) => et(P, w[L])) : et(E, w))) {
          d && d();
          const P = In;
          In = c;
          try {
            const L = [
              E,
              w === $o ? void 0 : m && w[0] === $o ? [] : w,
              p
            ];
            l ? l(t, 3, L) : t(...L), w = E;
          } finally {
            In = P;
          }
        }
      } else c.run();
    };
    return a && a(g), c = new Mu(f), c.scheduler = i ? () => i(g, false) : g, p = (y) => Hh(y, false, c), d = c.onStop = () => {
      const y = us.get(c);
      if (y) {
        if (l) l(y, 4);
        else for (const E of y) E();
        us.delete(c);
      }
    }, t ? r ? g(true) : w = c.run() : i ? i(g.bind(null, true), true) : c.run(), S.pause = c.pause.bind(c), S.resume = c.resume.bind(c), S.stop = S, S;
  }
  function en(e, t = 1 / 0, n) {
    if (t <= 0 || !Se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, _e(e)) en(e.value, t, n);
    else if (z(e)) for (let r = 0; r < e.length; r++) en(e[r], t, n);
    else if (As(e) || ur(e)) e.forEach((r) => {
      en(r, t, n);
    });
    else if (Tu(e)) {
      for (const r in e) en(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && en(e[r], t, n);
    }
    return e;
  }
  function yo(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      Pr(o, t, n);
    }
  }
  function At(e, t, n, r) {
    if (oe(e)) {
      const o = yo(e, t, n, r);
      return o && Pa(o) && o.catch((s) => {
        Pr(s, t, n);
      }), o;
    }
    if (z(e)) {
      const o = [];
      for (let s = 0; s < e.length; s++) o.push(At(e[s], t, n, r));
      return o;
    }
  }
  function Pr(e, t, n, r = true) {
    const o = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: i } = t && t.appContext.config || pe;
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
        on(), yo(s, null, 10, [
          e,
          l,
          u
        ]), sn();
        return;
      }
    }
    Wh(e, n, o, r, i);
  }
  function Wh(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const tt = [];
  let Nt = -1;
  const hr = [];
  let vn = null, ir = 0;
  const Zu = Promise.resolve();
  let fs = null;
  je = function(e) {
    const t = fs || Zu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Vh(e) {
    let t = Nt + 1, n = tt.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = tt[r], s = ro(o);
      s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function Ma(e) {
    if (!(e.flags & 1)) {
      const t = ro(e), n = tt[tt.length - 1];
      !n || !(e.flags & 2) && t >= ro(n) ? tt.push(e) : tt.splice(Vh(t), 0, e), e.flags |= 1, ef();
    }
  }
  function ef() {
    fs || (fs = Zu.then(tf));
  }
  function Wi(e) {
    z(e) ? hr.push(...e) : vn && e.id === -1 ? vn.splice(ir + 1, 0, e) : e.flags & 1 || (hr.push(e), e.flags |= 1), ef();
  }
  function vl(e, t, n = Nt + 1) {
    for (; n < tt.length; n++) {
      const r = tt[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        tt.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function ds(e) {
    if (hr.length) {
      const t = [
        ...new Set(hr)
      ].sort((n, r) => ro(n) - ro(r));
      if (hr.length = 0, vn) {
        vn.push(...t);
        return;
      }
      for (vn = t, ir = 0; ir < vn.length; ir++) {
        const n = vn[ir];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      vn = null, ir = 0;
    }
  }
  const ro = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function tf(e) {
    try {
      for (Nt = 0; Nt < tt.length; Nt++) {
        const t = tt[Nt];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), yo(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Nt < tt.length; Nt++) {
        const t = tt[Nt];
        t && (t.flags &= -2);
      }
      Nt = -1, tt.length = 0, ds(), fs = null, (tt.length || hr.length) && tf();
    }
  }
  let Be = null, nf = null;
  function ps(e) {
    const t = Be;
    return Be = e, nf = e && e.type.__scopeId || null, t;
  }
  ie = function(e, t = Be, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && Ml(-1);
      const s = ps(t);
      let i;
      try {
        i = e(...o);
      } finally {
        ps(s), r._d && Ml(1);
      }
      return i;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  hk = function(e, t) {
    if (Be === null) return e;
    const n = Us(Be), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [s, i, a, l = pe] = t[o];
      s && (oe(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && en(i), r.push({
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
  function jt(e, t, n, r) {
    const o = e.dirs, s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      s && (a.oldValue = s[i].value);
      let l = a.dir[r];
      l && (on(), At(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), sn());
    }
  }
  const rf = Symbol("_vte"), of = (e) => e.__isTeleport, qr = (e) => e && (e.disabled || e.disabled === ""), bl = (e) => e && (e.defer || e.defer === ""), _l = (e) => typeof SVGElement < "u" && e instanceof SVGElement, wl = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Vi = (e, t) => {
    const n = e && e.to;
    return Pe(n) ? t ? t(n) : null : n;
  }, sf = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      const { mc: c, pc: f, pbc: d, o: { insert: p, querySelector: h, createText: m, createComment: b } } = u, S = qr(t.props);
      let { shapeFlag: w, children: g, dynamicChildren: y } = t;
      if (e == null) {
        const E = t.el = m(""), P = t.anchor = m("");
        p(E, n, r), p(P, n, r);
        const L = (R, O) => {
          w & 16 && (o && o.isCE && (o.ce._teleportTarget = R), c(g, R, O, o, s, i, a, l));
        }, D = () => {
          const R = t.target = Vi(t.props, h), O = af(R, t, m, p);
          R && (i !== "svg" && _l(R) ? i = "svg" : i !== "mathml" && wl(R) && (i = "mathml"), S || (L(R, O), ts(t, false)));
        };
        S && (L(n, P), ts(t, true)), bl(t.props) ? De(() => {
          D(), t.el.__isMounted = true;
        }, s) : D();
      } else {
        if (bl(t.props) && !e.el.__isMounted) {
          De(() => {
            sf.process(e, t, n, r, o, s, i, a, l, u), delete e.el.__isMounted;
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const E = t.anchor = e.anchor, P = t.target = e.target, L = t.targetAnchor = e.targetAnchor, D = qr(e.props), R = D ? n : P, O = D ? E : L;
        if (i === "svg" || _l(P) ? i = "svg" : (i === "mathml" || wl(P)) && (i = "mathml"), y ? (d(e.dynamicChildren, y, R, o, s, i, a), Fa(e, t, true)) : l || f(e, t, R, O, o, s, i, a, false), S) D ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Mo(t, n, E, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const C = t.target = Vi(t.props, h);
          C && Mo(t, C, null, u, 0);
        } else D && Mo(t, P, L, u, 1);
        ts(t, S);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, s) {
      const { shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: d } = e;
      if (f && (o(u), o(c)), s && o(l), i & 16) {
        const p = s || !qr(d);
        for (let h = 0; h < a.length; h++) {
          const m = a[h];
          r(m, t, n, p, !!m.dynamicChildren);
        }
      }
    },
    move: Mo,
    hydrate: qh
  };
  function Mo(e, t, n, { o: { insert: r }, m: o }, s = 2) {
    s === 0 && r(e.targetAnchor, t, n);
    const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
    if (f && r(i, t, n), (!f || qr(c)) && l & 16) for (let d = 0; d < u.length; d++) o(u[d], t, n, 2);
    f && r(a, t, n);
  }
  function qh(e, t, n, r, o, s, { o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
    const d = t.target = Vi(t.props, l);
    if (d) {
      const p = qr(t.props), h = d._lpa || d.firstChild;
      if (t.shapeFlag & 16) if (p) t.anchor = f(i(e), t, a(e), n, r, o, s), t.targetStart = h, t.targetAnchor = h && i(h);
      else {
        t.anchor = i(e);
        let m = h;
        for (; m; ) {
          if (m && m.nodeType === 8) {
            if (m.data === "teleport start anchor") t.targetStart = m;
            else if (m.data === "teleport anchor") {
              t.targetAnchor = m, d._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          m = i(m);
        }
        t.targetAnchor || af(d, t, c, u), f(h && i(h), t, d, n, r, o, s);
      }
      ts(t, p);
    }
    return t.anchor && i(t.anchor);
  }
  Kh = sf;
  function ts(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, o;
      for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function af(e, t, n, r) {
    const o = t.targetStart = n(""), s = t.targetAnchor = n("");
    return o[rf] = s, e && (r(o, e), r(s, e)), s;
  }
  const bn = Symbol("_leaveCb"), Io = Symbol("_enterCb");
  function lf() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return ot(() => {
      e.isMounted = true;
    }), xn(() => {
      e.isUnmounting = true;
    }), e;
  }
  const gt = [
    Function,
    Array
  ], cf = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: gt,
    onEnter: gt,
    onAfterEnter: gt,
    onEnterCancelled: gt,
    onBeforeLeave: gt,
    onLeave: gt,
    onAfterLeave: gt,
    onLeaveCancelled: gt,
    onBeforeAppear: gt,
    onAppear: gt,
    onAfterAppear: gt,
    onAppearCancelled: gt
  }, uf = (e) => {
    const t = e.subTree;
    return t.component ? uf(t.component) : t;
  }, Gh = {
    name: "BaseTransition",
    props: cf,
    setup(e, { slots: t }) {
      const n = Le(), r = lf();
      return () => {
        const o = t.default && Ia(t.default(), true);
        if (!o || !o.length) return;
        const s = ff(o), i = ue(e), { mode: a } = i;
        if (r.isLeaving) return si(s);
        const l = Sl(s);
        if (!l) return si(s);
        let u = oo(l, i, r, n, (f) => u = f);
        l.type !== $e && An(l, u);
        let c = n.subTree && Sl(n.subTree);
        if (c && c.type !== $e && !Et(l, c) && uf(n).type !== $e) {
          let f = oo(c, i, r, n);
          if (An(c, f), a === "out-in" && l.type !== $e) return r.isLeaving = true, f.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, si(s);
          a === "in-out" && l.type !== $e ? f.delayLeave = (d, p, h) => {
            const m = df(r, c);
            m[String(c.key)] = c, d[bn] = () => {
              p(), d[bn] = void 0, delete u.delayedLeave, c = void 0;
            }, u.delayedLeave = () => {
              h(), delete u.delayedLeave, c = void 0;
            };
          } : c = void 0;
        } else c && (c = void 0);
        return s;
      };
    }
  };
  function ff(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== $e) {
        t = n;
        break;
      }
    }
    return t;
  }
  const zh = Gh;
  function df(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function oo(e, t, n, r, o) {
    const { appear: s, mode: i, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: d, onLeave: p, onAfterLeave: h, onLeaveCancelled: m, onBeforeAppear: b, onAppear: S, onAfterAppear: w, onAppearCancelled: g } = t, y = String(e.key), E = df(n, e), P = (R, O) => {
      R && At(R, r, 9, O);
    }, L = (R, O) => {
      const C = O[1];
      P(R, O), z(R) ? R.every((T) => T.length <= 1) && C() : R.length <= 1 && C();
    }, D = {
      mode: i,
      persisted: a,
      beforeEnter(R) {
        let O = l;
        if (!n.isMounted) if (s) O = b || l;
        else return;
        R[bn] && R[bn](true);
        const C = E[y];
        C && Et(e, C) && C.el[bn] && C.el[bn](), P(O, [
          R
        ]);
      },
      enter(R) {
        let O = u, C = c, T = f;
        if (!n.isMounted) if (s) O = S || u, C = w || c, T = g || f;
        else return;
        let N = false;
        const ne = R[Io] = (re) => {
          N || (N = true, re ? P(T, [
            R
          ]) : P(C, [
            R
          ]), D.delayedLeave && D.delayedLeave(), R[Io] = void 0);
        };
        O ? L(O, [
          R,
          ne
        ]) : ne();
      },
      leave(R, O) {
        const C = String(e.key);
        if (R[Io] && R[Io](true), n.isUnmounting) return O();
        P(d, [
          R
        ]);
        let T = false;
        const N = R[bn] = (ne) => {
          T || (T = true, O(), ne ? P(m, [
            R
          ]) : P(h, [
            R
          ]), R[bn] = void 0, E[C] === e && delete E[C]);
        };
        E[C] = e, p ? L(p, [
          R,
          N
        ]) : N();
      },
      clone(R) {
        const O = oo(R, t, n, r, o);
        return o && o(O), O;
      }
    };
    return D;
  }
  function si(e) {
    if (vo(e)) return e = ct(e), e.children = null, e;
  }
  function Sl(e) {
    if (!vo(e)) return of(e.type) && e.children ? ff(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && oe(n.default)) return n.default();
    }
  }
  function An(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, An(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Ia(e, t = false, n) {
    let r = [], o = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
      i.type === Te ? (i.patchFlag & 128 && o++, r = r.concat(Ia(i.children, t, a))) : (t || i.type !== $e) && r.push(a != null ? ct(i, {
        key: a
      }) : i);
    }
    if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r;
  }
  te = function(e, t) {
    return oe(e) ? Me({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  El = function() {
    const e = Le();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
  };
  function Da(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  mk = function(e) {
    const t = Le(), n = Fe(null);
    if (t) {
      const o = t.refs === pe ? t.refs = {} : t.refs;
      Object.defineProperty(o, e, {
        enumerable: true,
        get: () => n.value,
        set: (s) => n.value = s
      });
    }
    return n;
  };
  function so(e, t, n, r, o = false) {
    if (z(e)) {
      e.forEach((h, m) => so(h, t && (z(t) ? t[m] : t), n, r, o));
      return;
    }
    if (Rn(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && so(e, t, n, r.component.subTree);
      return;
    }
    const s = r.shapeFlag & 4 ? Us(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === pe ? a.refs = {} : a.refs, f = a.setupState, d = ue(f), p = f === pe ? () => false : (h) => ge(d, h);
    if (u != null && u !== l && (Pe(u) ? (c[u] = null, p(u) && (f[u] = null)) : _e(u) && (u.value = null)), oe(l)) yo(l, a, 12, [
      i,
      c
    ]);
    else {
      const h = Pe(l), m = _e(l);
      if (h || m) {
        const b = () => {
          if (e.f) {
            const S = h ? p(l) ? f[l] : c[l] : l.value;
            o ? z(S) && Ra(S, s) : z(S) ? S.includes(s) || S.push(s) : h ? (c[l] = [
              s
            ], p(l) && (f[l] = c[l])) : (l.value = [
              s
            ], e.k && (c[e.k] = l.value));
          } else h ? (c[l] = i, p(l) && (f[l] = i)) : m && (l.value = i, e.k && (c[e.k] = i));
        };
        i ? (b.id = -1, De(b, n)) : b();
      }
    }
  }
  let Cl = false;
  const nr = () => {
    Cl || (console.error("Hydration completed but contains mismatches."), Cl = true);
  }, Jh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Yh = (e) => e.namespaceURI.includes("MathML"), Do = (e) => {
    if (e.nodeType === 1) {
      if (Jh(e)) return "svg";
      if (Yh(e)) return "mathml";
    }
  }, lr = (e) => e.nodeType === 8;
  function Qh(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: l, createComment: u } } = e, c = (g, y) => {
      if (!y.hasChildNodes()) {
        n(null, g, y), ds(), y._vnode = g;
        return;
      }
      f(y.firstChild, g, null, null, null), ds(), y._vnode = g;
    }, f = (g, y, E, P, L, D = false) => {
      D = D || !!y.dynamicChildren;
      const R = lr(g) && g.data === "[", O = () => m(g, y, E, P, L, R), { type: C, ref: T, shapeFlag: N, patchFlag: ne } = y;
      let re = g.nodeType;
      y.el = g, ne === -2 && (D = false, y.dynamicChildren = null);
      let U = null;
      switch (C) {
        case jn:
          re !== 3 ? y.children === "" ? (l(y.el = o(""), i(g), g), U = g) : U = O() : (g.data !== y.children && (nr(), g.data = y.children), U = s(g));
          break;
        case $e:
          w(g) ? (U = s(g), S(y.el = g.content.firstChild, g, E)) : re !== 8 || R ? U = O() : U = s(g);
          break;
        case Gr:
          if (R && (g = s(g), re = g.nodeType), re === 1 || re === 3) {
            U = g;
            const J = !y.children.length;
            for (let Y = 0; Y < y.staticCount; Y++) J && (y.children += U.nodeType === 1 ? U.outerHTML : U.data), Y === y.staticCount - 1 && (y.anchor = U), U = s(U);
            return R ? s(U) : U;
          } else O();
          break;
        case Te:
          R ? U = h(g, y, E, P, L, D) : U = O();
          break;
        default:
          if (N & 1) (re !== 1 || y.type.toLowerCase() !== g.tagName.toLowerCase()) && !w(g) ? U = O() : U = d(g, y, E, P, L, D);
          else if (N & 6) {
            y.slotScopeIds = L;
            const J = i(g);
            if (R ? U = b(g) : lr(g) && g.data === "teleport start" ? U = b(g, g.data, "teleport end") : U = s(g), t(y, J, null, E, P, Do(J), D), Rn(y) && !y.type.__asyncResolved) {
              let Y;
              R ? (Y = le(Te), Y.anchor = U ? U.previousSibling : J.lastChild) : Y = g.nodeType === 3 ? Ct("") : le("div"), Y.el = g, y.component.subTree = Y;
            }
          } else N & 64 ? re !== 8 ? U = O() : U = y.type.hydrate(g, y, E, P, L, D, e, p) : N & 128 && (U = y.type.hydrate(g, y, E, P, Do(i(g)), L, D, e, f));
      }
      return T != null && so(T, null, P, y), U;
    }, d = (g, y, E, P, L, D) => {
      D = D || !!y.dynamicChildren;
      const { type: R, props: O, patchFlag: C, shapeFlag: T, dirs: N, transition: ne } = y, re = R === "input" || R === "option";
      if (re || C !== -1) {
        N && jt(y, null, E, "created");
        let U = false;
        if (w(g)) {
          U = If(null, ne) && E && E.vnode.props && E.vnode.props.appear;
          const Y = g.content.firstChild;
          U && ne.beforeEnter(Y), S(Y, g, E), y.el = g = Y;
        }
        if (T & 16 && !(O && (O.innerHTML || O.textContent))) {
          let Y = p(g.firstChild, y, g, E, P, L, D);
          for (; Y; ) {
            No(g, 1) || nr();
            const Ie = Y;
            Y = Y.nextSibling, a(Ie);
          }
        } else if (T & 8) {
          let Y = y.children;
          Y[0] === `
` && (g.tagName === "PRE" || g.tagName === "TEXTAREA") && (Y = Y.slice(1)), g.textContent !== Y && (No(g, 0) || nr(), g.textContent = y.children);
        }
        if (O) {
          if (re || !D || C & 48) {
            const Y = g.tagName.includes("-");
            for (const Ie in O) (re && (Ie.endsWith("value") || Ie === "indeterminate") || po(Ie) && !fr(Ie) || Ie[0] === "." || Y) && r(g, Ie, null, O[Ie], void 0, E);
          } else if (O.onClick) r(g, "onClick", null, O.onClick, void 0, E);
          else if (C & 4 && nn(O.style)) for (const Y in O.style) O.style[Y];
        }
        let J;
        (J = O && O.onVnodeBeforeMount) && lt(J, E, y), N && jt(y, null, E, "beforeMount"), ((J = O && O.onVnodeMounted) || N || U) && Hf(() => {
          J && lt(J, E, y), U && ne.enter(g), N && jt(y, null, E, "mounted");
        }, P);
      }
      return g.nextSibling;
    }, p = (g, y, E, P, L, D, R) => {
      R = R || !!y.dynamicChildren;
      const O = y.children, C = O.length;
      for (let T = 0; T < C; T++) {
        const N = R ? O[T] : O[T] = ht(O[T]), ne = N.type === jn;
        g ? (ne && !R && T + 1 < C && ht(O[T + 1]).type === jn && (l(o(g.data.slice(N.children.length)), E, s(g)), g.data = N.children), g = f(g, N, P, L, D, R)) : ne && !N.children ? l(N.el = o(""), E) : (No(E, 1) || nr(), n(null, N, E, null, P, L, Do(E), D));
      }
      return g;
    }, h = (g, y, E, P, L, D) => {
      const { slotScopeIds: R } = y;
      R && (L = L ? L.concat(R) : R);
      const O = i(g), C = p(s(g), y, O, E, P, L, D);
      return C && lr(C) && C.data === "]" ? s(y.anchor = C) : (nr(), l(y.anchor = u("]"), O, C), C);
    }, m = (g, y, E, P, L, D) => {
      if (No(g.parentElement, 1) || nr(), y.el = null, D) {
        const C = b(g);
        for (; ; ) {
          const T = s(g);
          if (T && T !== C) a(T);
          else break;
        }
      }
      const R = s(g), O = i(g);
      return a(g), n(null, y, O, R, E, P, Do(O), L), E && (E.vnode.el = y.el, Hs(E, y.el)), R;
    }, b = (g, y = "[", E = "]") => {
      let P = 0;
      for (; g; ) if (g = s(g), g && lr(g) && (g.data === y && P++, g.data === E)) {
        if (P === 0) return s(g);
        P--;
      }
      return g;
    }, S = (g, y, E) => {
      const P = y.parentNode;
      P && P.replaceChild(g, y);
      let L = E;
      for (; L; ) L.vnode.el === y && (L.vnode.el = L.subTree.el = g), L = L.parent;
    }, w = (g) => g.nodeType === 1 && g.tagName === "TEMPLATE";
    return [
      c,
      f
    ];
  }
  const kl = "data-allow-mismatch", Xh = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };
  function No(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(kl); ) e = e.parentElement;
    const n = e && e.getAttribute(kl);
    if (n == null) return false;
    if (n === "") return true;
    {
      const r = n.split(",");
      return t === 0 && r.includes("children") ? true : n.split(",").includes(Xh[t]);
    }
  }
  Ls().requestIdleCallback;
  Ls().cancelIdleCallback;
  function Zh(e, t) {
    if (lr(e) && e.data === "[") {
      let n = 1, r = e.nextSibling;
      for (; r; ) {
        if (r.nodeType === 1) {
          if (t(r) === false) break;
        } else if (lr(r)) if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
        r = r.nextSibling;
      }
    } else t(e);
  }
  const Rn = (e) => !!e.type.__asyncLoader;
  Tl = function(e) {
    oe(e) && (e = {
      loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: o = 200, hydrate: s, timeout: i, suspensible: a = true, onError: l } = e;
    let u = null, c, f = 0;
    const d = () => (f++, u = null, p()), p = () => {
      let h;
      return u || (h = u = t().catch((m) => {
        if (m = m instanceof Error ? m : new Error(String(m)), l) return new Promise((b, S) => {
          l(m, () => b(d()), () => S(m), f + 1);
        });
        throw m;
      }).then((m) => h !== u && u ? u : (m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), c = m, m)));
    };
    return te({
      name: "AsyncComponentWrapper",
      __asyncLoader: p,
      __asyncHydrate(h, m, b) {
        const S = s ? () => {
          const w = s(b, (g) => Zh(h, g));
          w && (m.bum || (m.bum = [])).push(w);
        } : b;
        c ? S() : p().then(() => !m.isUnmounted && S());
      },
      get __asyncResolved() {
        return c;
      },
      setup() {
        const h = Ne;
        if (Da(h), c) return () => ii(c, h);
        const m = (g) => {
          u = null, Pr(g, h, 13, !r);
        };
        if (a && h.suspense || wr) return p().then((g) => () => ii(g, h)).catch((g) => (m(g), () => r ? le(r, {
          error: g
        }) : null));
        const b = fe(false), S = fe(), w = fe(!!o);
        return o && setTimeout(() => {
          w.value = false;
        }, o), i != null && setTimeout(() => {
          if (!b.value && !S.value) {
            const g = new Error(`Async component timed out after ${i}ms.`);
            m(g), S.value = g;
          }
        }, i), p().then(() => {
          b.value = true, h.parent && vo(h.parent.vnode) && h.parent.update();
        }).catch((g) => {
          m(g), S.value = g;
        }), () => {
          if (b.value && c) return ii(c, h);
          if (S.value && r) return le(r, {
            error: S.value
          });
          if (n && !w.value) return le(n);
        };
      }
    });
  };
  function ii(e, t) {
    const { ref: n, props: r, children: o, ce: s } = t.vnode, i = le(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i;
  }
  const vo = (e) => e.type.__isKeepAlive, em = {
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
      const n = Le(), r = n.ctx;
      if (!r.renderer) return () => {
        const w = t.default && t.default();
        return w && w.length === 1 ? w[0] : w;
      };
      const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      let i = null;
      const a = n.suspense, { renderer: { p: l, m: u, um: c, o: { createElement: f } } } = r, d = f("div");
      r.activate = (w, g, y, E, P) => {
        const L = w.component;
        u(w, g, y, 0, a), l(L.vnode, w, g, y, L, a, E, w.slotScopeIds, P), De(() => {
          L.isDeactivated = false, L.a && dr(L.a);
          const D = w.props && w.props.onVnodeMounted;
          D && lt(D, L.parent, w);
        }, a);
      }, r.deactivate = (w) => {
        const g = w.component;
        ms(g.m), ms(g.a), u(w, d, null, 1, a), De(() => {
          g.da && dr(g.da);
          const y = w.props && w.props.onVnodeUnmounted;
          y && lt(y, g.parent, w), g.isDeactivated = true;
        }, a);
      };
      function p(w) {
        ai(w), c(w, n, a, true);
      }
      function h(w) {
        o.forEach((g, y) => {
          const E = ea(g.type);
          E && !w(E) && m(y);
        });
      }
      function m(w) {
        const g = o.get(w);
        g && (!i || !Et(g, i)) ? p(g) : i && ai(i), o.delete(w), s.delete(w);
      }
      Oe(() => [
        e.include,
        e.exclude
      ], ([w, g]) => {
        w && h((y) => Fr(w, y)), g && h((y) => !Fr(g, y));
      }, {
        flush: "post",
        deep: true
      });
      let b = null;
      const S = () => {
        b != null && (gs(n.subTree.type) ? De(() => {
          o.set(b, Bo(n.subTree));
        }, n.subTree.suspense) : o.set(b, Bo(n.subTree)));
      };
      return ot(S), Na(S), xn(() => {
        o.forEach((w) => {
          const { subTree: g, suspense: y } = n, E = Bo(g);
          if (w.type === E.type && w.key === E.key) {
            ai(E);
            const P = E.component.da;
            P && De(P, y);
            return;
          }
          p(w);
        });
      }), () => {
        if (b = null, !t.default) return i = null;
        const w = t.default(), g = w[0];
        if (w.length > 1) return i = null, w;
        if (!Hn(g) || !(g.shapeFlag & 4) && !(g.shapeFlag & 128)) return i = null, g;
        let y = Bo(g);
        if (y.type === $e) return i = null, y;
        const E = y.type, P = ea(Rn(y) ? y.type.__asyncResolved || {} : E), { include: L, exclude: D, max: R } = e;
        if (L && (!P || !Fr(L, P)) || D && P && Fr(D, P)) return y.shapeFlag &= -257, i = y, g;
        const O = y.key == null ? E : y.key, C = o.get(O);
        return y.el && (y = ct(y), g.shapeFlag & 128 && (g.ssContent = y)), b = O, C ? (y.el = C.el, y.component = C.component, y.transition && An(y, y.transition), y.shapeFlag |= 512, s.delete(O), s.add(O)) : (s.add(O), R && s.size > parseInt(R, 10) && m(s.values().next().value)), y.shapeFlag |= 256, i = y, gs(g.type) ? g : y;
      };
    }
  }, tm = em;
  function Fr(e, t) {
    return z(e) ? e.some((n) => Fr(n, t)) : Pe(e) ? e.split(",").includes(t) : oh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  function pf(e, t) {
    mf(e, "a", t);
  }
  function hf(e, t) {
    mf(e, "da", t);
  }
  function mf(e, t, n = Ne) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (js(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) vo(o.parent.vnode) && nm(r, t, n, o), o = o.parent;
    }
  }
  function nm(e, t, n, r) {
    const o = js(t, e, r, true);
    Ar(() => {
      Ra(r[t], o);
    }, n);
  }
  function ai(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function Bo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function js(e, t, n = Ne, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
        on();
        const a = Un(n), l = At(t, n, e, i);
        return a(), sn(), l;
      });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  let un, om, sm, im;
  un = (e) => (t, n = Ne) => {
    (!wr || e === "sp") && js(e, (...r) => t(...r), n);
  };
  gf = un("bm");
  ot = un("m");
  rm = un("bu");
  Na = un("u");
  xn = un("bum");
  Ar = un("um");
  om = un("sp");
  sm = un("rtg");
  im = un("rtc");
  function yf(e, t = Ne) {
    js("ec", e, t);
  }
  const vf = "components";
  function qi(e, t) {
    return _f(vf, e, true, t) || e;
  }
  const bf = Symbol.for("v-ndc");
  nt = function(e) {
    return Pe(e) ? _f(vf, e, false) || e : e || bf;
  };
  function _f(e, t, n = true, r = false) {
    const o = Be || Ne;
    if (o) {
      const s = o.type;
      {
        const a = ea(s, false);
        if (a && (a === t || a === rt(t) || a === Os(rt(t)))) return s;
      }
      const i = Rl(o[e] || s[e], t) || Rl(o.appContext[e], t);
      return !i && r ? s : i;
    }
  }
  function Rl(e, t) {
    return e && (e[t] || e[rt(t)] || e[Os(rt(t))]);
  }
  _r = function(e, t, n, r) {
    let o;
    const s = n, i = z(e);
    if (i || Pe(e)) {
      const a = i && nn(e);
      let l = false, u = false;
      a && (l = !vt(e), u = an(e), e = Ms(e)), o = new Array(e.length);
      for (let c = 0, f = e.length; c < f; c++) o[c] = t(l ? u ? cs(Ue(e[c])) : Ue(e[c]) : e[c], c, void 0, s);
    } else if (typeof e == "number") {
      o = new Array(e);
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s);
    } else if (Se(e)) if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, s));
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
  ae = function(e, t, n = {}, r, o) {
    if (Be.ce || Be.parent && Rn(Be.parent) && Be.parent.ce) return t !== "default" && (n.name = t), j(), Z(Te, null, [
      le("slot", n, r && r())
    ], 64);
    let s = e[t];
    s && s._c && (s._d = false), j();
    const i = s && wf(s(n)), a = n.key || i && i.key, l = Z(Te, {
      key: (a && !Rt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && l.scopeId && (l.slotScopeIds = [
      l.scopeId + "-s"
    ]), s && s._c && (s._d = true), l;
  };
  function wf(e) {
    return e.some((t) => Hn(t) ? !(t.type === $e || t.type === Te && !wf(t.children)) : true) ? e : null;
  }
  const Ki = (e) => e ? qf(e) ? Us(e) : Ki(e.parent) : null, Kr = Me(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ki(e.parent),
    $root: (e) => Ki(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cf(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ma(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = je.bind(e.proxy)),
    $watch: (e) => Rm.bind(e)
  }), li = (e, t) => e !== pe && !e.__isScriptSetup && ge(e, t), am = {
    get({ _: e }, t) {
      if (t === "__v_skip") return true;
      const { ctx: n, setupState: r, data: o, props: s, accessCache: i, type: a, appContext: l } = e;
      let u;
      if (t[0] !== "$") {
        const p = i[t];
        if (p !== void 0) switch (p) {
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
          if (li(r, t)) return i[t] = 1, r[t];
          if (o !== pe && ge(o, t)) return i[t] = 2, o[t];
          if ((u = e.propsOptions[0]) && ge(u, t)) return i[t] = 3, s[t];
          if (n !== pe && ge(n, t)) return i[t] = 4, n[t];
          Gi && (i[t] = 0);
        }
      }
      const c = Kr[t];
      let f, d;
      if (c) return t === "$attrs" && ze(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== pe && ge(n, t)) return i[t] = 4, n[t];
      if (d = l.config.globalProperties, ge(d, t)) return d[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return li(o, t) ? (o[t] = n, true) : r !== pe && ge(r, t) ? (r[t] = n, true) : ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
      let a;
      return !!n[i] || e !== pe && ge(e, i) || li(t, i) || (a = s[0]) && ge(a, i) || ge(r, i) || ge(Kr, i) || ge(o.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  gk = function() {
    return Sf().slots;
  };
  yk = function() {
    return Sf().attrs;
  };
  function Sf() {
    const e = Le();
    return e.setupContext || (e.setupContext = Gf(e));
  }
  function io(e) {
    return z(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  vk = function(e, t) {
    const n = io(e);
    for (const r in t) {
      if (r.startsWith("__skip")) continue;
      let o = n[r];
      o ? z(o) || oe(o) ? o = n[r] = {
        type: o,
        default: t[r]
      } : o.default = t[r] : o === null && (o = n[r] = {
        default: t[r]
      }), o && t[`__skip_${r}`] && (o.skipFactory = true);
    }
    return n;
  };
  bk = function(e, t) {
    return !e || !t ? e || t : z(e) && z(t) ? e.concat(t) : Me({}, io(e), io(t));
  };
  _k = function(e) {
    const t = Le();
    let n = e();
    return Xi(), Pa(n) && (n = n.catch((r) => {
      throw Un(t), r;
    })), [
      n,
      () => Un(t)
    ];
  };
  let Gi = true;
  function lm(e) {
    const t = Cf(e), n = e.proxy, r = e.ctx;
    Gi = false, t.beforeCreate && Pl(t.beforeCreate, e, "bc");
    const { data: o, computed: s, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: d, beforeUpdate: p, updated: h, activated: m, deactivated: b, beforeDestroy: S, beforeUnmount: w, destroyed: g, unmounted: y, render: E, renderTracked: P, renderTriggered: L, errorCaptured: D, serverPrefetch: R, expose: O, inheritAttrs: C, components: T, directives: N, filters: ne } = t;
    if (u && cm(u, r, null), i) for (const J in i) {
      const Y = i[J];
      oe(Y) && (r[J] = Y.bind(n));
    }
    if (o) {
      const J = o.call(n, n);
      Se(J) && (e.data = Ye(J));
    }
    if (Gi = true, s) for (const J in s) {
      const Y = s[J], Ie = oe(Y) ? Y.bind(n, n) : oe(Y.get) ? Y.get.bind(n, n) : Wt, fn = !oe(Y) && oe(Y.set) ? Y.set.bind(n) : Wt, Lt = W({
        get: Ie,
        set: fn
      });
      Object.defineProperty(r, J, {
        enumerable: true,
        configurable: true,
        get: () => Lt.value,
        set: (it) => Lt.value = it
      });
    }
    if (a) for (const J in a) Ef(a[J], r, n, J);
    if (l) {
      const J = oe(l) ? l.call(n) : l;
      Reflect.ownKeys(J).forEach((Y) => {
        Vt(Y, J[Y]);
      });
    }
    c && Pl(c, e, "c");
    function U(J, Y) {
      z(Y) ? Y.forEach((Ie) => J(Ie.bind(n))) : Y && J(Y.bind(n));
    }
    if (U(gf, f), U(ot, d), U(rm, p), U(Na, h), U(pf, m), U(hf, b), U(yf, D), U(im, P), U(sm, L), U(xn, w), U(Ar, y), U(om, R), z(O)) if (O.length) {
      const J = e.exposed || (e.exposed = {});
      O.forEach((Y) => {
        Object.defineProperty(J, Y, {
          get: () => n[Y],
          set: (Ie) => n[Y] = Ie
        });
      });
    } else e.exposed || (e.exposed = {});
    E && e.render === Wt && (e.render = E), C != null && (e.inheritAttrs = C), T && (e.components = T), N && (e.directives = N), R && Da(e);
  }
  function cm(e, t, n = Wt) {
    z(e) && (e = zi(e));
    for (const r in e) {
      const o = e[r];
      let s;
      Se(o) ? "default" in o ? s = Re(o.from || r, o.default, true) : s = Re(o.from || r) : s = Re(o), _e(s) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (i) => s.value = i
      }) : t[r] = s;
    }
  }
  function Pl(e, t, n) {
    At(z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Ef(e, t, n, r) {
    let o = r.includes(".") ? Nf(n, r) : () => n[r];
    if (Pe(e)) {
      const s = t[e];
      oe(s) && Oe(o, s);
    } else if (oe(e)) Oe(o, e.bind(n));
    else if (Se(e)) if (z(e)) e.forEach((s) => Ef(s, t, n, r));
    else {
      const s = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(s) && Oe(o, s, e);
    }
  }
  function Cf(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach((u) => hs(l, u, i, true)), hs(l, t, i)), Se(t) && s.set(t, l), l;
  }
  function hs(e, t, n, r = false) {
    const { mixins: o, extends: s } = t;
    s && hs(e, s, n, true), o && o.forEach((i) => hs(e, i, n, true));
    for (const i in t) if (!(r && i === "expose")) {
      const a = um[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
    return e;
  }
  const um = {
    data: Al,
    props: xl,
    emits: xl,
    methods: Hr,
    computed: Hr,
    beforeCreate: Ze,
    created: Ze,
    beforeMount: Ze,
    mounted: Ze,
    beforeUpdate: Ze,
    updated: Ze,
    beforeDestroy: Ze,
    beforeUnmount: Ze,
    destroyed: Ze,
    unmounted: Ze,
    activated: Ze,
    deactivated: Ze,
    errorCaptured: Ze,
    serverPrefetch: Ze,
    components: Hr,
    directives: Hr,
    watch: dm,
    provide: Al,
    inject: fm
  };
  function Al(e, t) {
    return t ? e ? function() {
      return Me(oe(e) ? e.call(this, this) : e, oe(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function fm(e, t) {
    return Hr(zi(e), zi(t));
  }
  function zi(e) {
    if (z(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function Ze(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function Hr(e, t) {
    return e ? Me(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function xl(e, t) {
    return e ? z(e) && z(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Me(/* @__PURE__ */ Object.create(null), io(e), io(t ?? {})) : t;
  }
  function dm(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Me(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = Ze(e[r], t[r]);
    return n;
  }
  function kf() {
    return {
      app: null,
      config: {
        isNativeTag: nh,
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
  let pm = 0;
  function hm(e, t) {
    return function(r, o = null) {
      oe(r) || (r = Me({}, r)), o != null && !Se(o) && (o = null);
      const s = kf(), i = /* @__PURE__ */ new WeakSet(), a = [];
      let l = false;
      const u = s.app = {
        _uid: pm++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: Jm,
        get config() {
          return s.config;
        },
        set config(c) {
        },
        use(c, ...f) {
          return i.has(c) || (c && oe(c.install) ? (i.add(c), c.install(u, ...f)) : oe(c) && (i.add(c), c(u, ...f))), u;
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
        mount(c, f, d) {
          if (!l) {
            const p = u._ceVNode || le(r, o);
            return p.appContext = s, d === true ? d = "svg" : d === false && (d = void 0), f && t ? t(p, c) : e(p, c, d), l = true, u._container = c, c.__vue_app__ = u, Us(p.component);
          }
        },
        onUnmount(c) {
          a.push(c);
        },
        unmount() {
          l && (At(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(c, f) {
          return s.provides[c] = f, u;
        },
        runWithContext(c) {
          const f = Bn;
          Bn = u;
          try {
            return c();
          } finally {
            Bn = f;
          }
        }
      };
      return u;
    };
  }
  let Bn = null;
  Vt = function(e, t) {
    if (Ne) {
      let n = Ne.provides;
      const r = Ne.parent && Ne.parent.provides;
      r === n && (n = Ne.provides = Object.create(r)), n[e] = t;
    }
  };
  Re = function(e, t, n = false) {
    const r = Ne || Be;
    if (r || Bn) {
      const o = Bn ? Bn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && oe(t) ? t.call(r && r.proxy) : t;
    }
  };
  Kn = function() {
    return !!(Ne || Be || Bn);
  };
  const Tf = {}, Rf = () => Object.create(Tf), Pf = (e) => Object.getPrototypeOf(e) === Tf;
  function mm(e, t, n, r = false) {
    const o = {}, s = Rf();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Af(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Ut(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
  }
  function gm(e, t, n, r) {
    const { props: o, attrs: s, vnode: { patchFlag: i } } = e, a = ue(o), [l] = e.propsOptions;
    let u = false;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let d = c[f];
          if (Fs(e.emitsOptions, d)) continue;
          const p = t[d];
          if (l) if (ge(s, d)) p !== s[d] && (s[d] = p, u = true);
          else {
            const h = rt(d);
            o[h] = Ji(l, a, h, p, e, false);
          }
          else p !== s[d] && (s[d] = p, u = true);
        }
      }
    } else {
      Af(e, t, o, s) && (u = true);
      let c;
      for (const f in a) (!t || !ge(t, f) && ((c = cn(f)) === f || !ge(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = Ji(l, a, f, void 0, e, true)) : delete o[f]);
      if (s !== a) for (const f in s) (!t || !ge(t, f)) && (delete s[f], u = true);
    }
    u && Zt(e.attrs, "set", "");
  }
  function Af(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = false, a;
    if (t) for (let l in t) {
      if (fr(l)) continue;
      const u = t[l];
      let c;
      o && ge(o, c = rt(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : Fs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = true);
    }
    if (s) {
      const l = ue(n), u = a || pe;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        n[f] = Ji(o, l, f, u[f], e, !ge(u, f));
      }
    }
    return i;
  }
  function Ji(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
      const a = ge(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && oe(l)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const c = Un(o);
            r = u[n] = l.call(null, t), c();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !a ? r = false : i[1] && (r === "" || r === cn(n)) && (r = true));
    }
    return r;
  }
  const ym = /* @__PURE__ */ new WeakMap();
  function xf(e, t, n = false) {
    const r = n ? ym : t.propsCache, o = r.get(e);
    if (o) return o;
    const s = e.props, i = {}, a = [];
    let l = false;
    if (!oe(e)) {
      const c = (f) => {
        l = true;
        const [d, p] = xf(f, t, true);
        Me(i, d), p && a.push(...p);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!s && !l) return Se(e) && r.set(e, cr), cr;
    if (z(s)) for (let c = 0; c < s.length; c++) {
      const f = rt(s[c]);
      Ol(f) && (i[f] = pe);
    }
    else if (s) for (const c in s) {
      const f = rt(c);
      if (Ol(f)) {
        const d = s[c], p = i[f] = z(d) || oe(d) ? {
          type: d
        } : Me({}, d), h = p.type;
        let m = false, b = true;
        if (z(h)) for (let S = 0; S < h.length; ++S) {
          const w = h[S], g = oe(w) && w.name;
          if (g === "Boolean") {
            m = true;
            break;
          } else g === "String" && (b = false);
        }
        else m = oe(h) && h.name === "Boolean";
        p[0] = m, p[1] = b, (m || ge(p, "default")) && a.push(f);
      }
    }
    const u = [
      i,
      a
    ];
    return Se(e) && r.set(e, u), u;
  }
  function Ol(e) {
    return e[0] !== "$" && !fr(e);
  }
  const Ba = (e) => e[0] === "_" || e === "$stable", ja = (e) => z(e) ? e.map(ht) : [
    ht(e)
  ], vm = (e, t, n) => {
    if (t._n) return t;
    const r = ie((...o) => ja(t(...o)), n);
    return r._c = false, r;
  }, Of = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Ba(o)) continue;
      const s = e[o];
      if (oe(s)) t[o] = vm(o, s, r);
      else if (s != null) {
        const i = ja(s);
        t[o] = () => i;
      }
    }
  }, Lf = (e, t) => {
    const n = ja(t);
    e.slots.default = () => n;
  }, $f = (e, t, n) => {
    for (const r in t) (n || !Ba(r)) && (e[r] = t[r]);
  }, bm = (e, t, n) => {
    const r = e.slots = Rf();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? ($f(r, t, n), n && Ru(r, "_", o, true)) : Of(t, r);
    } else t && Lf(e, t);
  }, _m = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = true, i = pe;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? s = false : $f(o, t, n) : (s = !t.$stable, Of(t, o)), i = t;
    } else t && (Lf(e, t), i = {
      default: 1
    });
    if (s) for (const a in o) !Ba(a) && i[a] == null && delete o[a];
  }, De = Hf;
  function wm(e) {
    return Mf(e);
  }
  function Sm(e) {
    return Mf(e, Qh);
  }
  function Mf(e, t) {
    const n = Ls();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: d, setScopeId: p = Wt, insertStaticContent: h } = e, m = (v, _, k, $ = null, A = null, M = null, V = void 0, H = null, F = !!_.dynamicChildren) => {
      if (v === _) return;
      v && !Et(v, _) && ($ = x(v), it(v, A, M, true), v = null), _.patchFlag === -2 && (F = false, _.dynamicChildren = null);
      const { type: I, ref: ee, shapeFlag: K } = _;
      switch (I) {
        case jn:
          b(v, _, k, $);
          break;
        case $e:
          S(v, _, k, $);
          break;
        case Gr:
          v == null && w(_, k, $, V);
          break;
        case Te:
          T(v, _, k, $, A, M, V, H, F);
          break;
        default:
          K & 1 ? E(v, _, k, $, A, M, V, H, F) : K & 6 ? N(v, _, k, $, A, M, V, H, F) : (K & 64 || K & 128) && I.process(v, _, k, $, A, M, V, H, F, Q);
      }
      ee != null && A && so(ee, v && v.ref, M, _ || v, !_);
    }, b = (v, _, k, $) => {
      if (v == null) r(_.el = a(_.children), k, $);
      else {
        const A = _.el = v.el;
        _.children !== v.children && u(A, _.children);
      }
    }, S = (v, _, k, $) => {
      v == null ? r(_.el = l(_.children || ""), k, $) : _.el = v.el;
    }, w = (v, _, k, $) => {
      [v.el, v.anchor] = h(v.children, _, k, $, v.el, v.anchor);
    }, g = ({ el: v, anchor: _ }, k, $) => {
      let A;
      for (; v && v !== _; ) A = d(v), r(v, k, $), v = A;
      r(_, k, $);
    }, y = ({ el: v, anchor: _ }) => {
      let k;
      for (; v && v !== _; ) k = d(v), o(v), v = k;
      o(_);
    }, E = (v, _, k, $, A, M, V, H, F) => {
      _.type === "svg" ? V = "svg" : _.type === "math" && (V = "mathml"), v == null ? P(_, k, $, A, M, V, H, F) : R(v, _, A, M, V, H, F);
    }, P = (v, _, k, $, A, M, V, H) => {
      let F, I;
      const { props: ee, shapeFlag: K, transition: X, dirs: se } = v;
      if (F = v.el = i(v.type, M, ee && ee.is, ee), K & 8 ? c(F, v.children) : K & 16 && D(v.children, F, null, $, A, ci(v, M), V, H), se && jt(v, null, $, "created"), L(F, v, v.scopeId, V, $), ee) {
        for (const Ce in ee) Ce !== "value" && !fr(Ce) && s(F, Ce, null, ee[Ce], M, $);
        "value" in ee && s(F, "value", null, ee.value, M), (I = ee.onVnodeBeforeMount) && lt(I, $, v);
      }
      se && jt(v, null, $, "beforeMount");
      const ce = If(A, X);
      ce && X.beforeEnter(F), r(F, _, k), ((I = ee && ee.onVnodeMounted) || ce || se) && De(() => {
        I && lt(I, $, v), ce && X.enter(F), se && jt(v, null, $, "mounted");
      }, A);
    }, L = (v, _, k, $, A) => {
      if (k && p(v, k), $) for (let M = 0; M < $.length; M++) p(v, $[M]);
      if (A) {
        let M = A.subTree;
        if (_ === M || gs(M.type) && (M.ssContent === _ || M.ssFallback === _)) {
          const V = A.vnode;
          L(v, V, V.scopeId, V.slotScopeIds, A.parent);
        }
      }
    }, D = (v, _, k, $, A, M, V, H, F = 0) => {
      for (let I = F; I < v.length; I++) {
        const ee = v[I] = H ? _n(v[I]) : ht(v[I]);
        m(null, ee, _, k, $, A, M, V, H);
      }
    }, R = (v, _, k, $, A, M, V) => {
      const H = _.el = v.el;
      let { patchFlag: F, dynamicChildren: I, dirs: ee } = _;
      F |= v.patchFlag & 16;
      const K = v.props || pe, X = _.props || pe;
      let se;
      if (k && On(k, false), (se = X.onVnodeBeforeUpdate) && lt(se, k, _, v), ee && jt(_, v, k, "beforeUpdate"), k && On(k, true), (K.innerHTML && X.innerHTML == null || K.textContent && X.textContent == null) && c(H, ""), I ? O(v.dynamicChildren, I, H, k, $, ci(_, A), M) : V || Y(v, _, H, null, k, $, ci(_, A), M, false), F > 0) {
        if (F & 16) C(H, K, X, k, A);
        else if (F & 2 && K.class !== X.class && s(H, "class", null, X.class, A), F & 4 && s(H, "style", K.style, X.style, A), F & 8) {
          const ce = _.dynamicProps;
          for (let Ce = 0; Ce < ce.length; Ce++) {
            const ve = ce[Ce], ft = K[ve], Ve = X[ve];
            (Ve !== ft || ve === "value") && s(H, ve, ft, Ve, A, k);
          }
        }
        F & 1 && v.children !== _.children && c(H, _.children);
      } else !V && I == null && C(H, K, X, k, A);
      ((se = X.onVnodeUpdated) || ee) && De(() => {
        se && lt(se, k, _, v), ee && jt(_, v, k, "updated");
      }, $);
    }, O = (v, _, k, $, A, M, V) => {
      for (let H = 0; H < _.length; H++) {
        const F = v[H], I = _[H], ee = F.el && (F.type === Te || !Et(F, I) || F.shapeFlag & 70) ? f(F.el) : k;
        m(F, I, ee, null, $, A, M, V, true);
      }
    }, C = (v, _, k, $, A) => {
      if (_ !== k) {
        if (_ !== pe) for (const M in _) !fr(M) && !(M in k) && s(v, M, _[M], null, A, $);
        for (const M in k) {
          if (fr(M)) continue;
          const V = k[M], H = _[M];
          V !== H && M !== "value" && s(v, M, H, V, A, $);
        }
        "value" in k && s(v, "value", _.value, k.value, A);
      }
    }, T = (v, _, k, $, A, M, V, H, F) => {
      const I = _.el = v ? v.el : a(""), ee = _.anchor = v ? v.anchor : a("");
      let { patchFlag: K, dynamicChildren: X, slotScopeIds: se } = _;
      se && (H = H ? H.concat(se) : se), v == null ? (r(I, k, $), r(ee, k, $), D(_.children || [], k, ee, A, M, V, H, F)) : K > 0 && K & 64 && X && v.dynamicChildren ? (O(v.dynamicChildren, X, k, A, M, V, H), (_.key != null || A && _ === A.subTree) && Fa(v, _, true)) : Y(v, _, k, ee, A, M, V, H, F);
    }, N = (v, _, k, $, A, M, V, H, F) => {
      _.slotScopeIds = H, v == null ? _.shapeFlag & 512 ? A.ctx.activate(_, k, $, V, F) : ne(_, k, $, A, M, V, F) : re(v, _, F);
    }, ne = (v, _, k, $, A, M, V) => {
      const H = v.component = Wm(v, $, A);
      if (vo(v) && (H.ctx.renderer = Q), Vm(H, false, V), H.asyncDep) {
        if (A && A.registerDep(H, U, V), !v.el) {
          const F = H.subTree = le($e);
          S(null, F, _, k);
        }
      } else U(H, v, _, k, A, M, V);
    }, re = (v, _, k) => {
      const $ = _.component = v.component;
      if (Lm(v, _, k)) if ($.asyncDep && !$.asyncResolved) {
        J($, _, k);
        return;
      } else $.next = _, $.update();
      else _.el = v.el, $.vnode = _;
    }, U = (v, _, k, $, A, M, V) => {
      const H = () => {
        if (v.isMounted) {
          let { next: K, bu: X, u: se, parent: ce, vnode: Ce } = v;
          {
            const dt = Df(v);
            if (dt) {
              K && (K.el = Ce.el, J(v, K, V)), dt.asyncDep.then(() => {
                v.isUnmounted || H();
              });
              return;
            }
          }
          let ve = K, ft;
          On(v, false), K ? (K.el = Ce.el, J(v, K, V)) : K = Ce, X && dr(X), (ft = K.props && K.props.onVnodeBeforeUpdate) && lt(ft, ce, K, Ce), On(v, true);
          const Ve = ui(v), bt = v.subTree;
          v.subTree = Ve, m(bt, Ve, f(bt.el), x(bt), v, A, M), K.el = Ve.el, ve === null && Hs(v, Ve.el), se && De(se, A), (ft = K.props && K.props.onVnodeUpdated) && De(() => lt(ft, ce, K, Ce), A);
        } else {
          let K;
          const { el: X, props: se } = _, { bm: ce, m: Ce, parent: ve, root: ft, type: Ve } = v, bt = Rn(_);
          if (On(v, false), ce && dr(ce), !bt && (K = se && se.onVnodeBeforeMount) && lt(K, ve, _), On(v, true), X && xe) {
            const dt = () => {
              v.subTree = ui(v), xe(X, v.subTree, v, A, null);
            };
            bt && Ve.__asyncHydrate ? Ve.__asyncHydrate(X, v, dt) : dt();
          } else {
            ft.ce && ft.ce._injectChildStyle(Ve);
            const dt = v.subTree = ui(v);
            m(null, dt, k, $, v, A, M), _.el = dt.el;
          }
          if (Ce && De(Ce, A), !bt && (K = se && se.onVnodeMounted)) {
            const dt = _;
            De(() => lt(K, ve, dt), A);
          }
          (_.shapeFlag & 256 || ve && Rn(ve.vnode) && ve.vnode.shapeFlag & 256) && v.a && De(v.a, A), v.isMounted = true, _ = k = $ = null;
        }
      };
      v.scope.on();
      const F = v.effect = new Mu(H);
      v.scope.off();
      const I = v.update = F.run.bind(F), ee = v.job = F.runIfDirty.bind(F);
      ee.i = v, ee.id = v.uid, F.scheduler = () => Ma(ee), On(v, true), I();
    }, J = (v, _, k) => {
      _.component = v;
      const $ = v.vnode.props;
      v.vnode = _, v.next = null, gm(v, _.props, $, k), _m(v, _.children, k), on(), vl(v), sn();
    }, Y = (v, _, k, $, A, M, V, H, F = false) => {
      const I = v && v.children, ee = v ? v.shapeFlag : 0, K = _.children, { patchFlag: X, shapeFlag: se } = _;
      if (X > 0) {
        if (X & 128) {
          fn(I, K, k, $, A, M, V, H, F);
          return;
        } else if (X & 256) {
          Ie(I, K, k, $, A, M, V, H, F);
          return;
        }
      }
      se & 8 ? (ee & 16 && mt(I, A, M), K !== I && c(k, K)) : ee & 16 ? se & 16 ? fn(I, K, k, $, A, M, V, H, F) : mt(I, A, M, true) : (ee & 8 && c(k, ""), se & 16 && D(K, k, $, A, M, V, H, F));
    }, Ie = (v, _, k, $, A, M, V, H, F) => {
      v = v || cr, _ = _ || cr;
      const I = v.length, ee = _.length, K = Math.min(I, ee);
      let X;
      for (X = 0; X < K; X++) {
        const se = _[X] = F ? _n(_[X]) : ht(_[X]);
        m(v[X], se, k, null, A, M, V, H, F);
      }
      I > ee ? mt(v, A, M, true, false, K) : D(_, k, $, A, M, V, H, F, K);
    }, fn = (v, _, k, $, A, M, V, H, F) => {
      let I = 0;
      const ee = _.length;
      let K = v.length - 1, X = ee - 1;
      for (; I <= K && I <= X; ) {
        const se = v[I], ce = _[I] = F ? _n(_[I]) : ht(_[I]);
        if (Et(se, ce)) m(se, ce, k, null, A, M, V, H, F);
        else break;
        I++;
      }
      for (; I <= K && I <= X; ) {
        const se = v[K], ce = _[X] = F ? _n(_[X]) : ht(_[X]);
        if (Et(se, ce)) m(se, ce, k, null, A, M, V, H, F);
        else break;
        K--, X--;
      }
      if (I > K) {
        if (I <= X) {
          const se = X + 1, ce = se < ee ? _[se].el : $;
          for (; I <= X; ) m(null, _[I] = F ? _n(_[I]) : ht(_[I]), k, ce, A, M, V, H, F), I++;
        }
      } else if (I > X) for (; I <= K; ) it(v[I], A, M, true), I++;
      else {
        const se = I, ce = I, Ce = /* @__PURE__ */ new Map();
        for (I = ce; I <= X; I++) {
          const pt = _[I] = F ? _n(_[I]) : ht(_[I]);
          pt.key != null && Ce.set(pt.key, I);
        }
        let ve, ft = 0;
        const Ve = X - ce + 1;
        let bt = false, dt = 0;
        const Mr = new Array(Ve);
        for (I = 0; I < Ve; I++) Mr[I] = 0;
        for (I = se; I <= K; I++) {
          const pt = v[I];
          if (ft >= Ve) {
            it(pt, A, M, true);
            continue;
          }
          let $t;
          if (pt.key != null) $t = Ce.get(pt.key);
          else for (ve = ce; ve <= X; ve++) if (Mr[ve - ce] === 0 && Et(pt, _[ve])) {
            $t = ve;
            break;
          }
          $t === void 0 ? it(pt, A, M, true) : (Mr[$t - ce] = I + 1, $t >= dt ? dt = $t : bt = true, m(pt, _[$t], k, null, A, M, V, H, F), ft++);
        }
        const dl = bt ? Em(Mr) : cr;
        for (ve = dl.length - 1, I = Ve - 1; I >= 0; I--) {
          const pt = ce + I, $t = _[pt], pl = pt + 1 < ee ? _[pt + 1].el : $;
          Mr[I] === 0 ? m(null, $t, k, pl, A, M, V, H, F) : bt && (ve < 0 || I !== dl[ve] ? Lt($t, k, pl, 2) : ve--);
        }
      }
    }, Lt = (v, _, k, $, A = null) => {
      const { el: M, type: V, transition: H, children: F, shapeFlag: I } = v;
      if (I & 6) {
        Lt(v.component.subTree, _, k, $);
        return;
      }
      if (I & 128) {
        v.suspense.move(_, k, $);
        return;
      }
      if (I & 64) {
        V.move(v, _, k, Q);
        return;
      }
      if (V === Te) {
        r(M, _, k);
        for (let K = 0; K < F.length; K++) Lt(F[K], _, k, $);
        r(v.anchor, _, k);
        return;
      }
      if (V === Gr) {
        g(v, _, k);
        return;
      }
      if ($ !== 2 && I & 1 && H) if ($ === 0) H.beforeEnter(M), r(M, _, k), De(() => H.enter(M), A);
      else {
        const { leave: K, delayLeave: X, afterLeave: se } = H, ce = () => {
          v.ctx.isUnmounted ? o(M) : r(M, _, k);
        }, Ce = () => {
          K(M, () => {
            ce(), se && se();
          });
        };
        X ? X(M, ce, Ce) : Ce();
      }
      else r(M, _, k);
    }, it = (v, _, k, $ = false, A = false) => {
      const { type: M, props: V, ref: H, children: F, dynamicChildren: I, shapeFlag: ee, patchFlag: K, dirs: X, cacheIndex: se } = v;
      if (K === -2 && (A = false), H != null && (on(), so(H, null, k, v, true), sn()), se != null && (_.renderCache[se] = void 0), ee & 256) {
        _.ctx.deactivate(v);
        return;
      }
      const ce = ee & 1 && X, Ce = !Rn(v);
      let ve;
      if (Ce && (ve = V && V.onVnodeBeforeUnmount) && lt(ve, _, v), ee & 6) xo(v.component, k, $);
      else {
        if (ee & 128) {
          v.suspense.unmount(k, $);
          return;
        }
        ce && jt(v, null, _, "beforeUnmount"), ee & 64 ? v.type.remove(v, _, k, Q, $) : I && !I.hasOnce && (M !== Te || K > 0 && K & 64) ? mt(I, _, k, false, true) : (M === Te && K & 384 || !A && ee & 16) && mt(F, _, k), $ && Zn(v);
      }
      (Ce && (ve = V && V.onVnodeUnmounted) || ce) && De(() => {
        ve && lt(ve, _, v), ce && jt(v, null, _, "unmounted");
      }, k);
    }, Zn = (v) => {
      const { type: _, el: k, anchor: $, transition: A } = v;
      if (_ === Te) {
        er(k, $);
        return;
      }
      if (_ === Gr) {
        y(v);
        return;
      }
      const M = () => {
        o(k), A && !A.persisted && A.afterLeave && A.afterLeave();
      };
      if (v.shapeFlag & 1 && A && !A.persisted) {
        const { leave: V, delayLeave: H } = A, F = () => V(k, M);
        H ? H(v.el, M, F) : F();
      } else M();
    }, er = (v, _) => {
      let k;
      for (; v !== _; ) k = d(v), o(v), v = k;
      o(_);
    }, xo = (v, _, k) => {
      const { bum: $, scope: A, job: M, subTree: V, um: H, m: F, a: I, parent: ee, slots: { __: K } } = v;
      ms(F), ms(I), $ && dr($), ee && z(K) && K.forEach((X) => {
        ee.renderCache[X] = void 0;
      }), A.stop(), M && (M.flags |= 8, it(V, v, _, k)), H && De(H, _), De(() => {
        v.isUnmounted = true;
      }, _), _ && _.pendingBranch && !_.isUnmounted && v.asyncDep && !v.asyncResolved && v.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve());
    }, mt = (v, _, k, $ = false, A = false, M = 0) => {
      for (let V = M; V < v.length; V++) it(v[V], _, k, $, A);
    }, x = (v) => {
      if (v.shapeFlag & 6) return x(v.component.subTree);
      if (v.shapeFlag & 128) return v.suspense.next();
      const _ = d(v.anchor || v.el), k = _ && _[rf];
      return k ? d(k) : _;
    };
    let G = false;
    const q = (v, _, k) => {
      v == null ? _._vnode && it(_._vnode, null, null, true) : m(_._vnode || null, v, _, null, null, null, k), _._vnode = v, G || (G = true, vl(), ds(), G = false);
    }, Q = {
      p: m,
      um: it,
      m: Lt,
      r: Zn,
      mt: ne,
      mc: D,
      pc: Y,
      pbc: O,
      n: x,
      o: e
    };
    let he, xe;
    return t && ([he, xe] = t(Q)), {
      render: q,
      hydrate: he,
      createApp: hm(q, he)
    };
  }
  function ci({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function On({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function If(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Fa(e, t, n = false) {
    const r = e.children, o = t.children;
    if (z(r) && z(o)) for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = _n(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && Fa(i, a)), a.type === jn && (a.el = i.el), a.type === $e && !a.el && (a.el = i.el);
    }
  }
  function Em(e) {
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
  function Df(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Df(t);
  }
  function ms(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const Cm = Symbol.for("v-scx"), km = () => Re(Cm);
  ln = function(e, t) {
    return bo(e, null, t);
  };
  wk = function(e, t) {
    return bo(e, null, {
      flush: "post"
    });
  };
  Tm = function(e, t) {
    return bo(e, null, {
      flush: "sync"
    });
  };
  Oe = function(e, t, n) {
    return bo(e, t, n);
  };
  function bo(e, t, n = pe) {
    const { immediate: r, deep: o, flush: s, once: i } = n, a = Me({}, n), l = t && r || !t && s !== "post";
    let u;
    if (wr) {
      if (s === "sync") {
        const p = km();
        u = p.__watcherHandles || (p.__watcherHandles = []);
      } else if (!l) {
        const p = () => {
        };
        return p.stop = Wt, p.resume = Wt, p.pause = Wt, p;
      }
    }
    const c = Ne;
    a.call = (p, h, m) => At(p, c, h, m);
    let f = false;
    s === "post" ? a.scheduler = (p) => {
      De(p, c && c.suspense);
    } : s !== "sync" && (f = true, a.scheduler = (p, h) => {
      h ? p() : Ma(p);
    }), a.augmentJob = (p) => {
      t && (p.flags |= 4), f && (p.flags |= 2, c && (p.id = c.uid, p.i = c));
    };
    const d = Uh(e, t, a);
    return wr && (u ? u.push(d) : l && d()), d;
  }
  function Rm(e, t, n) {
    const r = this.proxy, o = Pe(e) ? e.includes(".") ? Nf(r, e) : () => r[e] : e.bind(r, r);
    let s;
    oe(t) ? s = t : (s = t.handler, n = t);
    const i = Un(this), a = bo(o, s.bind(r), n);
    return i(), a;
  }
  function Nf(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  Sk = function(e, t, n = pe) {
    const r = Le(), o = rt(t), s = cn(t), i = Bf(e, o), a = go((l, u) => {
      let c, f = pe, d;
      return Tm(() => {
        const p = e[o];
        et(c, p) && (c = p, u());
      }), {
        get() {
          return l(), n.get ? n.get(c) : c;
        },
        set(p) {
          const h = n.set ? n.set(p) : p;
          if (!et(h, c) && !(f !== pe && et(p, f))) return;
          const m = r.vnode.props;
          m && (t in m || o in m || s in m) && (`onUpdate:${t}` in m || `onUpdate:${o}` in m || `onUpdate:${s}` in m) || (c = p, u()), r.emit(`update:${t}`, h), et(p, h) && et(p, f) && !et(h, d) && u(), f = p, d = h;
        }
      };
    });
    return a[Symbol.iterator] = () => {
      let l = 0;
      return {
        next() {
          return l < 2 ? {
            value: l++ ? i || pe : a,
            done: false
          } : {
            done: true
          };
        }
      };
    }, a;
  };
  const Bf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${rt(t)}Modifiers`] || e[`${cn(t)}Modifiers`];
  function Pm(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || pe;
    let o = n;
    const s = t.startsWith("update:"), i = s && Bf(r, t.slice(7));
    i && (i.trim && (o = n.map((c) => Pe(c) ? c.trim() : c)), i.number && (o = n.map(ji)));
    let a, l = r[a = es(t)] || r[a = es(rt(t))];
    !l && s && (l = r[a = es(cn(t))]), l && At(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, At(u, e, 6, o);
    }
  }
  function jf(e, t, n = false) {
    const r = t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {}, a = false;
    if (!oe(e)) {
      const l = (u) => {
        const c = jf(u, t, true);
        c && (a = true, Me(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !s && !a ? (Se(e) && r.set(e, null), null) : (z(s) ? s.forEach((l) => i[l] = null) : Me(i, s), Se(e) && r.set(e, i), i);
  }
  function Fs(e, t) {
    return !e || !po(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, cn(t)) || ge(e, t));
  }
  function ui(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: d, setupState: p, ctx: h, inheritAttrs: m } = e, b = ps(e);
    let S, w;
    try {
      if (n.shapeFlag & 4) {
        const y = o || r, E = y;
        S = ht(u.call(E, y, c, f, p, d, h)), w = a;
      } else {
        const y = t;
        S = ht(y.length > 1 ? y(f, {
          attrs: a,
          slots: i,
          emit: l
        }) : y(f, null)), w = t.props ? a : xm(a);
      }
    } catch (y) {
      zr.length = 0, Pr(y, e, 1), S = le($e);
    }
    let g = S;
    if (w && m !== false) {
      const y = Object.keys(w), { shapeFlag: E } = g;
      y.length && E & 7 && (s && y.some(Ta) && (w = Om(w, s)), g = ct(g, w, false, true));
    }
    return n.dirs && (g = ct(g, null, false, true), g.dirs = g.dirs ? g.dirs.concat(n.dirs) : n.dirs), n.transition && An(g, n.transition), S = g, ps(b), S;
  }
  function Am(e, t = true) {
    let n;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (Hn(o)) {
        if (o.type !== $e || o.children === "v-if") {
          if (n) return;
          n = o;
        }
      } else return;
    }
    return n;
  }
  const xm = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || po(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Om = (e, t) => {
    const n = {};
    for (const r in e) (!Ta(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function Lm(e, t, n) {
    const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && l >= 0) {
      if (l & 1024) return true;
      if (l & 16) return r ? Ll(r, i, u) : !!i;
      if (l & 8) {
        const c = t.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const d = c[f];
          if (i[d] !== r[d] && !Fs(u, d)) return true;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? true : r === i ? false : r ? i ? Ll(r, i, u) : true : !!i;
    return false;
  }
  function Ll(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (t[s] !== e[s] && !Fs(n, s)) return true;
    }
    return false;
  }
  function Hs({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const gs = (e) => e.__isSuspense;
  let Yi = 0;
  const $m = {
    name: "Suspense",
    __isSuspense: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      if (e == null) Mm(t, n, r, o, s, i, a, l, u);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return;
        }
        Im(e, t, n, r, o, i, a, l, u);
      }
    },
    hydrate: Dm,
    normalize: Nm
  }, Ha = $m;
  function ao(e, t) {
    const n = e.props && e.props[t];
    oe(n) && n();
  }
  function Mm(e, t, n, r, o, s, i, a, l) {
    const { p: u, o: { createElement: c } } = l, f = c("div"), d = e.suspense = Ff(e, o, r, t, f, n, s, i, a, l);
    u(null, d.pendingBranch = e.ssContent, f, null, r, d, s, i), d.deps > 0 ? (ao(e, "onPending"), ao(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, s, i), mr(d, e.ssFallback)) : d.resolve(false, true);
  }
  function Im(e, t, n, r, o, s, i, a, { p: l, um: u, o: { createElement: c } }) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const d = t.ssContent, p = t.ssFallback, { activeBranch: h, pendingBranch: m, isInFallback: b, isHydrating: S } = f;
    if (m) f.pendingBranch = d, Et(d, m) ? (l(m, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : b && (S || (l(h, p, n, r, o, null, s, i, a), mr(f, p)))) : (f.pendingId = Yi++, S ? (f.isHydrating = false, f.activeBranch = m) : u(m, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), b ? (l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : (l(h, p, n, r, o, null, s, i, a), mr(f, p))) : h && Et(d, h) ? (l(h, d, n, r, o, f, s, i, a), f.resolve(true)) : (l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
    else if (h && Et(d, h)) l(h, d, n, r, o, f, s, i, a), mr(f, d);
    else if (ao(t, "onPending"), f.pendingBranch = d, d.shapeFlag & 512 ? f.pendingId = d.component.suspenseId : f.pendingId = Yi++, l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0) f.resolve();
    else {
      const { timeout: w, pendingId: g } = f;
      w > 0 ? setTimeout(() => {
        f.pendingId === g && f.fallback(p);
      }, w) : w === 0 && f.fallback(p);
    }
  }
  function Ff(e, t, n, r, o, s, i, a, l, u, c = false) {
    const { p: f, m: d, um: p, n: h, o: { parentNode: m, remove: b } } = u;
    let S;
    const w = Bm(e);
    w && t && t.pendingBranch && (S = t.pendingId, t.deps++);
    const g = e.props ? Pu(e.props.timeout) : void 0, y = s, E = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: o,
      deps: 0,
      pendingId: Yi++,
      timeout: typeof g == "number" ? g : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: false,
      effects: [],
      resolve(P = false, L = false) {
        const { vnode: D, activeBranch: R, pendingBranch: O, pendingId: C, effects: T, parentComponent: N, container: ne } = E;
        let re = false;
        E.isHydrating ? E.isHydrating = false : P || (re = R && O.transition && O.transition.mode === "out-in", re && (R.transition.afterLeave = () => {
          C === E.pendingId && (d(O, ne, s === y ? h(R) : s, 0), Wi(T));
        }), R && (m(R.el) === ne && (s = h(R)), p(R, N, E, true)), re || d(O, ne, s, 0)), mr(E, O), E.pendingBranch = null, E.isInFallback = false;
        let U = E.parent, J = false;
        for (; U; ) {
          if (U.pendingBranch) {
            U.effects.push(...T), J = true;
            break;
          }
          U = U.parent;
        }
        !J && !re && Wi(T), E.effects = [], w && t && t.pendingBranch && S === t.pendingId && (t.deps--, t.deps === 0 && !L && t.resolve()), ao(D, "onResolve");
      },
      fallback(P) {
        if (!E.pendingBranch) return;
        const { vnode: L, activeBranch: D, parentComponent: R, container: O, namespace: C } = E;
        ao(L, "onFallback");
        const T = h(D), N = () => {
          E.isInFallback && (f(null, P, O, T, R, null, C, a, l), mr(E, P));
        }, ne = P.transition && P.transition.mode === "out-in";
        ne && (D.transition.afterLeave = N), E.isInFallback = true, p(D, R, null, true), ne || N();
      },
      move(P, L, D) {
        E.activeBranch && d(E.activeBranch, P, L, D), E.container = P;
      },
      next() {
        return E.activeBranch && h(E.activeBranch);
      },
      registerDep(P, L, D) {
        const R = !!E.pendingBranch;
        R && E.deps++;
        const O = P.vnode.el;
        P.asyncDep.catch((C) => {
          Pr(C, P, 0);
        }).then((C) => {
          if (P.isUnmounted || E.isUnmounted || E.pendingId !== P.suspenseId) return;
          P.asyncResolved = true;
          const { vnode: T } = P;
          Zi(P, C), O && (T.el = O);
          const N = !O && P.subTree.el;
          L(P, T, m(O || P.subTree.el), O ? null : h(P.subTree), E, i, D), N && b(N), Hs(P, T.el), R && --E.deps === 0 && E.resolve();
        });
      },
      unmount(P, L) {
        E.isUnmounted = true, E.activeBranch && p(E.activeBranch, n, P, L), E.pendingBranch && p(E.pendingBranch, n, P, L);
      }
    };
    return E;
  }
  function Dm(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = Ff(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, true), c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(false, true), c;
  }
  function Nm(e) {
    const { shapeFlag: t, children: n } = e, r = t & 32;
    e.ssContent = $l(r ? n.default : n), e.ssFallback = r ? $l(n.fallback) : le($e);
  }
  function $l(e) {
    let t;
    if (oe(e)) {
      const n = Fn && e._c;
      n && (e._d = false, j()), e = e(), n && (e._d = true, t = Je, Uf());
    }
    return z(e) && (e = Am(e)), e = ht(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function Hf(e, t) {
    t && t.pendingBranch ? z(e) ? t.effects.push(...e) : t.effects.push(e) : Wi(e);
  }
  function mr(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let o = t.el;
    for (; !o && t.component; ) t = t.component.subTree, o = t.el;
    n.el = o, r && r.subTree === n && (r.vnode.el = o, Hs(r, o));
  }
  function Bm(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  let jn, Gr, zr;
  Te = Symbol.for("v-fgt");
  jn = Symbol.for("v-txt");
  $e = Symbol.for("v-cmt");
  Gr = Symbol.for("v-stc");
  zr = [];
  let Je = null;
  j = function(e = false) {
    zr.push(Je = e ? null : []);
  };
  function Uf() {
    zr.pop(), Je = zr[zr.length - 1] || null;
  }
  let Fn = 1;
  function Ml(e, t = false) {
    Fn += e, e < 0 && Je && t && (Je.hasOnce = true);
  }
  function Wf(e) {
    return e.dynamicChildren = Fn > 0 ? Je || cr : null, Uf(), Fn > 0 && Je && Je.push(e), e;
  }
  be = function(e, t, n, r, o, s) {
    return Wf(qe(e, t, n, r, o, s, true));
  };
  Z = function(e, t, n, r, o) {
    return Wf(le(e, t, n, r, o, true));
  };
  function Hn(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function Et(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Vf = ({ key: e }) => e ?? null, ns = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? Pe(e) || _e(e) || oe(e) ? {
    i: Be,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  qe = function(e, t = null, n = null, r = 0, o = null, s = e === Te ? 0 : 1, i = false, a = false) {
    const l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Vf(t),
      ref: t && ns(t),
      scopeId: nf,
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
      ctx: Be
    };
    return a ? (Ua(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= Pe(n) ? 8 : 16), Fn > 0 && !i && Je && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Je.push(l), l;
  };
  le = jm;
  function jm(e, t = null, n = null, r = 0, o = null, s = false) {
    if ((!e || e === bf) && (e = $e), Hn(e)) {
      const a = ct(e, t, true);
      return n && Ua(a, n), Fn > 0 && !s && Je && (a.shapeFlag & 6 ? Je[Je.indexOf(e)] = a : Je.push(a)), a.patchFlag = -2, a;
    }
    if (Gm(e) && (e = e.__vccOpts), t) {
      t = Gn(t);
      let { class: a, style: l } = t;
      a && !Pe(a) && (t.class = mo(a)), Se(l) && ($a(l) && !z(l) && (l = Me({}, l)), t.style = ho(l));
    }
    const i = Pe(e) ? 1 : gs(e) ? 128 : of(e) ? 64 : Se(e) ? 4 : oe(e) ? 2 : 0;
    return qe(e, t, n, r, o, i, s, true);
  }
  Gn = function(e) {
    return e ? $a(e) || Pf(e) ? Me({}, e) : e : null;
  };
  ct = function(e, t, n = false, r = false) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? We(o || {}, t) : o, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && Vf(u),
      ref: t && t.ref ? n && s ? z(s) ? s.concat(ns(t)) : [
        s,
        ns(t)
      ] : ns(t) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: a,
      target: e.target,
      targetStart: e.targetStart,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Te ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ct(e.ssContent),
      ssFallback: e.ssFallback && ct(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return l && r && An(c, l.clone(c)), c;
  };
  Ct = function(e = " ", t = 0) {
    return le(jn, null, e, t);
  };
  Fm = function(e, t) {
    const n = le(Gr, null, e);
    return n.staticCount = t, n;
  };
  zt = function(e = "", t = false) {
    return t ? (j(), Z($e, null, e)) : le($e, null, e);
  };
  function ht(e) {
    return e == null || typeof e == "boolean" ? le($e) : z(e) ? le(Te, null, e.slice()) : Hn(e) ? _n(e) : le(jn, null, String(e));
  }
  function _n(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : ct(e);
  }
  function Ua(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (z(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), Ua(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Pf(t) ? t._ctx = Be : o === 3 && Be && (Be.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else oe(t) ? (t = {
      default: t,
      _ctx: Be
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      Ct(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  We = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = mo([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = ho([
        t.style,
        r.style
      ]);
      else if (po(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(z(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
    }
    return t;
  };
  function lt(e, t, n, r = null) {
    At(e, t, 7, [
      n,
      r
    ]);
  }
  const Hm = kf();
  let Um = 0;
  function Wm(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || Hm, s = {
      uid: Um++,
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
      scope: new $u(true),
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
      propsOptions: xf(r, o),
      emitsOptions: jf(r, o),
      emit: null,
      emitted: null,
      propsDefaults: pe,
      inheritAttrs: r.inheritAttrs,
      ctx: pe,
      data: pe,
      props: pe,
      attrs: pe,
      slots: pe,
      refs: pe,
      setupState: pe,
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
    }, s.root = t ? t.root : s, s.emit = Pm.bind(null, s), e.ce && e.ce(s), s;
  }
  let Ne = null;
  Le = () => Ne || Be;
  let ys, Qi;
  {
    const e = Ls(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
        o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
      };
    };
    ys = t("__VUE_INSTANCE_SETTERS__", (n) => Ne = n), Qi = t("__VUE_SSR_SETTERS__", (n) => wr = n);
  }
  const Un = (e) => {
    const t = Ne;
    return ys(e), e.scope.on(), () => {
      e.scope.off(), ys(t);
    };
  }, Xi = () => {
    Ne && Ne.scope.off(), ys(null);
  };
  function qf(e) {
    return e.vnode.shapeFlag & 4;
  }
  let wr = false;
  function Vm(e, t = false, n = false) {
    t && Qi(t);
    const { props: r, children: o } = e.vnode, s = qf(e);
    mm(e, r, s, t), bm(e, o, n || t);
    const i = s ? qm(e, t) : void 0;
    return t && Qi(false), i;
  }
  function qm(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, am);
    const { setup: r } = n;
    if (r) {
      on();
      const o = e.setupContext = r.length > 1 ? Gf(e) : null, s = Un(e), i = yo(r, e, 0, [
        e.props,
        o
      ]), a = Pa(i);
      if (sn(), s(), (a || e.sp) && !Rn(e) && Da(e), a) {
        if (i.then(Xi, Xi), t) return i.then((l) => {
          Zi(e, l);
        }).catch((l) => {
          Pr(l, e, 0);
        });
        e.asyncDep = i;
      } else Zi(e, i);
    } else Kf(e);
  }
  function Zi(e, t, n) {
    oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Se(t) && (e.setupState = Qu(t)), Kf(e);
  }
  function Kf(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Wt);
    {
      const o = Un(e);
      on();
      try {
        lm(e);
      } finally {
        sn(), o();
      }
    }
  }
  const Km = {
    get(e, t) {
      return ze(e, "get", ""), e[t];
    }
  };
  function Gf(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Km),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Us(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Qu(pr(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Kr) return Kr[n](e);
      },
      has(t, n) {
        return n in t || n in Kr;
      }
    })) : e.proxy;
  }
  function ea(e, t = true) {
    return oe(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Gm(e) {
    return oe(e) && "__vccOpts" in e;
  }
  W = (e, t) => Fh(e, t, wr);
  de = function(e, t, n) {
    const r = arguments.length;
    return r === 2 ? Se(t) && !z(t) ? Hn(t) ? le(e, null, [
      t
    ]) : le(e, t) : le(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Hn(n) && (n = [
      n
    ]), le(e, t, n));
  };
  Ek = function(e, t, n, r) {
    const o = n[r];
    if (o && zm(o, e)) return o;
    const s = t();
    return s.memo = e.slice(), s.cacheIndex = r, n[r] = s;
  };
  function zm(e, t) {
    const n = e.memo;
    if (n.length != t.length) return false;
    for (let r = 0; r < n.length; r++) if (et(n[r], t[r])) return false;
    return Fn > 0 && Je && Je.push(e), true;
  }
  const Jm = "3.5.14";
  let ta;
  const Il = typeof window < "u" && window.trustedTypes;
  if (Il) try {
    ta = Il.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let zf, Ym, Qm, Qt, Dl, Xm, dn, Dr, Sr, Jf, Yf, Zm, Ln, Nl;
  zf = ta ? (e) => ta.createHTML(e) : (e) => e;
  Ym = "http://www.w3.org/2000/svg";
  Qm = "http://www.w3.org/1998/Math/MathML";
  Qt = typeof document < "u" ? document : null;
  Dl = Qt && Qt.createElement("template");
  Xm = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? Qt.createElementNS(Ym, e) : t === "mathml" ? Qt.createElementNS(Qm, e) : n ? Qt.createElement(e, {
        is: n
      }) : Qt.createElement(e);
      return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
    },
    createText: (e) => Qt.createTextNode(e),
    createComment: (e) => Qt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Qt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === s || !(o = o.nextSibling)); ) ;
      else {
        Dl.innerHTML = zf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = Dl.content;
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
  dn = "transition";
  Dr = "animation";
  Sr = Symbol("_vtc");
  Jf = {
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
  Yf = Me({}, cf, Jf);
  Zm = (e) => (e.displayName = "Transition", e.props = Yf, e);
  eg = Zm((e, { slots: t }) => de(zh, Qf(e), t));
  Ln = (e, t = []) => {
    z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  Nl = (e) => e ? z(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function Qf(e) {
    const t = {};
    for (const T in e) T in Jf || (t[T] = e[T]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: s = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = i, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, h = tg(o), m = h && h[0], b = h && h[1], { onBeforeEnter: S, onEnter: w, onEnterCancelled: g, onLeave: y, onLeaveCancelled: E, onBeforeAppear: P = S, onAppear: L = w, onAppearCancelled: D = g } = t, R = (T, N, ne, re) => {
      T._enterCancelled = re, mn(T, N ? c : a), mn(T, N ? u : i), ne && ne();
    }, O = (T, N) => {
      T._isLeaving = false, mn(T, f), mn(T, p), mn(T, d), N && N();
    }, C = (T) => (N, ne) => {
      const re = T ? L : w, U = () => R(N, T, ne);
      Ln(re, [
        N,
        U
      ]), Bl(() => {
        mn(N, T ? l : s), It(N, T ? c : a), Nl(re) || jl(N, r, m, U);
      });
    };
    return Me(t, {
      onBeforeEnter(T) {
        Ln(S, [
          T
        ]), It(T, s), It(T, i);
      },
      onBeforeAppear(T) {
        Ln(P, [
          T
        ]), It(T, l), It(T, u);
      },
      onEnter: C(false),
      onAppear: C(true),
      onLeave(T, N) {
        T._isLeaving = true;
        const ne = () => O(T, N);
        It(T, f), T._enterCancelled ? (It(T, d), na()) : (na(), It(T, d)), Bl(() => {
          T._isLeaving && (mn(T, f), It(T, p), Nl(y) || jl(T, r, b, ne));
        }), Ln(y, [
          T,
          ne
        ]);
      },
      onEnterCancelled(T) {
        R(T, false, void 0, true), Ln(g, [
          T
        ]);
      },
      onAppearCancelled(T) {
        R(T, true, void 0, true), Ln(D, [
          T
        ]);
      },
      onLeaveCancelled(T) {
        O(T), Ln(E, [
          T
        ]);
      }
    });
  }
  function tg(e) {
    if (e == null) return null;
    if (Se(e)) return [
      fi(e.enter),
      fi(e.leave)
    ];
    {
      const t = fi(e);
      return [
        t,
        t
      ];
    }
  }
  function fi(e) {
    return Pu(e);
  }
  function It(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Sr] || (e[Sr] = /* @__PURE__ */ new Set())).add(t);
  }
  function mn(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Sr];
    n && (n.delete(t), n.size || (e[Sr] = void 0));
  }
  function Bl(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let ng = 0;
  function jl(e, t, n, r) {
    const o = e._endId = ++ng, s = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(s, n);
    const { type: i, timeout: a, propCount: l } = Xf(e, t);
    if (!i) return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
      e.removeEventListener(u, d), s();
    }, d = (p) => {
      p.target === e && ++c >= l && f();
    };
    setTimeout(() => {
      c < l && f();
    }, a + 1), e.addEventListener(u, d);
  }
  function Xf(e, t) {
    const n = window.getComputedStyle(e), r = (h) => (n[h] || "").split(", "), o = r(`${dn}Delay`), s = r(`${dn}Duration`), i = Fl(o, s), a = r(`${Dr}Delay`), l = r(`${Dr}Duration`), u = Fl(a, l);
    let c = null, f = 0, d = 0;
    t === dn ? i > 0 && (c = dn, f = i, d = s.length) : t === Dr ? u > 0 && (c = Dr, f = u, d = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? dn : Dr : null, d = c ? c === dn ? s.length : l.length : 0);
    const p = c === dn && /\b(transform|all)(,|$)/.test(r(`${dn}Property`).toString());
    return {
      type: c,
      timeout: f,
      propCount: d,
      hasTransform: p
    };
  }
  function Fl(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => Hl(n) + Hl(e[r])));
  }
  function Hl(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function na() {
    return document.body.offsetHeight;
  }
  function rg(e, t, n) {
    const r = e[Sr];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let vs, Zf;
  vs = Symbol("_vod");
  Zf = Symbol("_vsh");
  Ck = {
    beforeMount(e, { value: t }, { transition: n }) {
      e[vs] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Nr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), Nr(e, true), r.enter(e)) : r.leave(e, () => {
        Nr(e, false);
      }) : Nr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Nr(e, t);
    }
  };
  function Nr(e, t) {
    e.style.display = t ? e[vs] : "none", e[Zf] = !t;
  }
  const og = Symbol(""), sg = /(^|;)\s*display\s*:/;
  function ig(e, t, n) {
    const r = e.style, o = Pe(n);
    let s = false;
    if (n && !o) {
      if (t) if (Pe(t)) for (const i of t.split(";")) {
        const a = i.slice(0, i.indexOf(":")).trim();
        n[a] == null && rs(r, a, "");
      }
      else for (const i in t) n[i] == null && rs(r, i, "");
      for (const i in n) i === "display" && (s = true), rs(r, i, n[i]);
    } else if (o) {
      if (t !== n) {
        const i = r[og];
        i && (n += ";" + i), r.cssText = n, s = sg.test(n);
      }
    } else t && e.removeAttribute("style");
    vs in e && (e[vs] = s ? r.display : "", e[Zf] && (r.display = "none"));
  }
  const Ul = /\s*!important$/;
  function rs(e, t, n) {
    if (z(n)) n.forEach((r) => rs(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = ag(e, t);
      Ul.test(n) ? e.setProperty(cn(r), n.replace(Ul, ""), "important") : e[r] = n;
    }
  }
  const Wl = [
    "Webkit",
    "Moz",
    "ms"
  ], di = {};
  function ag(e, t) {
    const n = di[t];
    if (n) return n;
    let r = rt(t);
    if (r !== "filter" && r in e) return di[t] = r;
    r = Os(r);
    for (let o = 0; o < Wl.length; o++) {
      const s = Wl[o] + r;
      if (s in e) return di[t] = s;
    }
    return t;
  }
  const Vl = "http://www.w3.org/1999/xlink";
  function ql(e, t, n, r, o, s = ph(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Vl, t.slice(6, t.length)) : e.setAttributeNS(Vl, t, n) : n == null || s && !Au(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : Rt(n) ? String(n) : n);
  }
  function Kl(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? zf(n) : n);
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
      a === "boolean" ? n = Au(n) : n == null && a === "string" ? (n = "", i = true) : a === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(o || t);
  }
  function En(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function lg(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const Gl = Symbol("_vei");
  function cg(e, t, n, r, o = null) {
    const s = e[Gl] || (e[Gl] = {}), i = s[t];
    if (r && i) i.value = r;
    else {
      const [a, l] = ug(t);
      if (r) {
        const u = s[t] = pg(r, o);
        En(e, a, u, l);
      } else i && (lg(e, a, i, l), s[t] = void 0);
    }
  }
  const zl = /(?:Once|Passive|Capture)$/;
  function ug(e) {
    let t;
    if (zl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(zl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : cn(e.slice(2)),
      t
    ];
  }
  let pi = 0;
  const fg = Promise.resolve(), dg = () => pi || (fg.then(() => pi = 0), pi = Date.now());
  function pg(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      At(hg(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = dg(), n;
  }
  function hg(e, t) {
    if (z(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const Jl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, mg = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? rg(e, r, i) : t === "style" ? ig(e, n, r) : po(t) ? Ta(t) || cg(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : gg(e, t, r, i)) ? (Kl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ql(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Pe(r)) ? Kl(e, rt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ql(e, t, r, i));
  };
  function gg(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Jl(t) && oe(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return Jl(t) && Pe(n) ? false : t in e;
  }
  let ed, td, bs, Yl, yg, vg;
  ed = /* @__PURE__ */ new WeakMap();
  td = /* @__PURE__ */ new WeakMap();
  bs = Symbol("_moveCb");
  Yl = Symbol("_enterCb");
  yg = (e) => (delete e.props.mode, e);
  vg = yg({
    name: "TransitionGroup",
    props: Me({}, Yf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = Le(), r = lf();
      let o, s;
      return Na(() => {
        if (!o.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!Sg(o[0].el, n.vnode.el, i)) {
          o = [];
          return;
        }
        o.forEach(bg), o.forEach(_g);
        const a = o.filter(wg);
        na(), a.forEach((l) => {
          const u = l.el, c = u.style;
          It(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[bs] = (d) => {
            d && d.target !== u || (!d || /transform$/.test(d.propertyName)) && (u.removeEventListener("transitionend", f), u[bs] = null, mn(u, i));
          };
          u.addEventListener("transitionend", f);
        }), o = [];
      }), () => {
        const i = ue(e), a = Qf(i);
        let l = i.tag || Te;
        if (o = [], s) for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), An(c, oo(c, a, r, n)), ed.set(c, c.el.getBoundingClientRect()));
        }
        s = t.default ? Ia(t.default()) : [];
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.key != null && An(c, oo(c, a, r, n));
        }
        return le(l, null, s);
      };
    }
  });
  kk = vg;
  function bg(e) {
    const t = e.el;
    t[bs] && t[bs](), t[Yl] && t[Yl]();
  }
  function _g(e) {
    td.set(e, e.el.getBoundingClientRect());
  }
  function wg(e) {
    const t = ed.get(e), n = td.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
    }
  }
  function Sg(e, t, n) {
    const r = e.cloneNode(), o = e[Sr];
    o && o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const { hasTransform: i } = Xf(r);
    return s.removeChild(r), i;
  }
  const Er = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return z(t) ? (n) => dr(t, n) : t;
  };
  function Eg(e) {
    e.target.composing = true;
  }
  function Ql(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  let rn;
  rn = Symbol("_assign");
  Tk = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[rn] = Er(o);
      const s = r || o.props && o.props.type === "number";
      En(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), s && (a = ji(a)), e[rn](a);
      }), n && En(e, "change", () => {
        e.value = e.value.trim();
      }), t || (En(e, "compositionstart", Eg), En(e, "compositionend", Ql), En(e, "change", Ql));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
      if (e[rn] = Er(i), e.composing) return;
      const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? ji(e.value) : e.value, l = t ?? "";
      a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
    }
  };
  Rk = {
    deep: true,
    created(e, t, n) {
      e[rn] = Er(n), En(e, "change", () => {
        const r = e._modelValue, o = nd(e), s = e.checked, i = e[rn];
        if (z(r)) {
          const a = xu(r, o), l = a !== -1;
          if (s && !l) i(r.concat(o));
          else if (!s && l) {
            const u = [
              ...r
            ];
            u.splice(a, 1), i(u);
          }
        } else if (As(r)) {
          const a = new Set(r);
          s ? a.add(o) : a.delete(o), i(a);
        } else i(rd(e, s));
      });
    },
    mounted: Xl,
    beforeUpdate(e, t, n) {
      e[rn] = Er(n), Xl(e, t, n);
    }
  };
  function Xl(e, { value: t, oldValue: n }, r) {
    e._modelValue = t;
    let o;
    if (z(t)) o = xu(t, r.props.value) > -1;
    else if (As(t)) o = t.has(r.props.value);
    else {
      if (t === n) return;
      o = br(t, rd(e, true));
    }
    e.checked !== o && (e.checked = o);
  }
  Pk = {
    created(e, { value: t }, n) {
      e.checked = br(t, n.props.value), e[rn] = Er(n), En(e, "change", () => {
        e[rn](nd(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      e[rn] = Er(r), t !== n && (e.checked = br(t, r.props.value));
    }
  };
  function nd(e) {
    return "_value" in e ? e._value : e.value;
  }
  function rd(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  let Cg, kg, Tg, od;
  Cg = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  kg = {
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
    exact: (e, t) => Cg.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  ra = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (o, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const a = kg[t[i]];
        if (a && a(o, t)) return;
      }
      return e(o, ...s);
    });
  };
  Tg = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  Ak = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = (o) => {
      if (!("key" in o)) return;
      const s = cn(o.key);
      if (t.some((i) => i === s || Tg[i] === s)) return e(o);
    });
  };
  od = Me({
    patchProp: mg
  }, Xm);
  let Jr, Zl = false;
  function sd() {
    return Jr || (Jr = wm(od));
  }
  function Rg() {
    return Jr = Zl ? Jr : Sm(od), Zl = true, Jr;
  }
  let Ag;
  xk = (...e) => {
    sd().render(...e);
  };
  Pg = (...e) => {
    const t = sd().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = ad(r);
      if (!o) return;
      const s = t._component;
      !oe(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
      const i = n(o, false, id(o));
      return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
    }, t;
  };
  Ag = (...e) => {
    const t = Rg().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = ad(r);
      if (o) return n(o, true, id(o));
    }, t;
  };
  function id(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function ad(e) {
    return Pe(e) ? document.querySelector(e) : e;
  }
  const xg = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Og = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, Lg = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
  function $g(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
      Mg(e);
      return;
    }
    return t;
  }
  function Mg(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
  }
  function lo(e, t = {}) {
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
    if (!Lg.test(e)) {
      if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
      return e;
    }
    try {
      if (xg.test(e) || Og.test(e)) {
        if (t.strict) throw new Error("[destr] Possible prototype pollution");
        return JSON.parse(e, $g);
      }
      return JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
  const ld = /#/g, cd = /&/g, ud = /\//g, Ig = /=/g, Dg = /\?/g, Ws = /\+/g, Ng = /%5e/gi, Bg = /%60/gi, jg = /%7c/gi, Fg = /%20/gi, Hg = /%252f/gi;
  function fd(e) {
    return encodeURI("" + e).replace(jg, "|");
  }
  function oa(e) {
    return fd(typeof e == "string" ? e : JSON.stringify(e)).replace(Ws, "%2B").replace(Fg, "+").replace(ld, "%23").replace(cd, "%26").replace(Bg, "`").replace(Ng, "^").replace(ud, "%2F");
  }
  function hi(e) {
    return oa(e).replace(Ig, "%3D");
  }
  Ug = function(e) {
    return fd(e).replace(ld, "%23").replace(Dg, "%3F").replace(Hg, "%2F").replace(cd, "%26").replace(Ws, "%2B");
  };
  Ok = function(e) {
    return Ug(e).replace(ud, "%2F");
  };
  function _s(e = "") {
    try {
      return decodeURIComponent("" + e);
    } catch {
      return "" + e;
    }
  }
  function Wg(e) {
    return _s(e.replace(Ws, " "));
  }
  function Vg(e) {
    return _s(e.replace(Ws, " "));
  }
  function Wa(e = "") {
    const t = /* @__PURE__ */ Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
      const r = n.match(/([^=]+)=?(.*)/) || [];
      if (r.length < 2) continue;
      const o = Wg(r[1]);
      if (o === "__proto__" || o === "constructor") continue;
      const s = Vg(r[2] || "");
      t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [
        t[o],
        s
      ];
    }
    return t;
  }
  function qg(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((n) => `${hi(e)}=${oa(n)}`).join("&") : `${hi(e)}=${oa(t)}` : hi(e);
  }
  function dd(e) {
    return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => qg(t, e[t])).filter(Boolean).join("&");
  }
  const Kg = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, pd = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, Gg = /^([/\\]\s*){2,}[^/\\]/, zg = /^[\s\0]*(blob|data|javascript|vbscript):$/i, Jg = /\/$|\/\?|\/#/, Yg = /^\.?\//;
  Ot = function(e, t = {}) {
    return typeof t == "boolean" && (t = {
      acceptRelative: t
    }), t.strict ? Kg.test(e) : pd.test(e) || (t.acceptRelative ? Gg.test(e) : false);
  };
  function Qg(e) {
    return !!e && zg.test(e);
  }
  function sa(e = "", t) {
    return t ? Jg.test(e) : e.endsWith("/");
  }
  function Kt(e = "", t) {
    if (!t) return (sa(e) ? e.slice(0, -1) : e) || "/";
    if (!sa(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o), r = e.slice(o));
    const [s, ...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function Vs(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (sa(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o), r = e.slice(o), !n)) return r;
    const [s, ...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function Xg(e = "") {
    return e.startsWith("/");
  }
  Zg = function(e = "") {
    return Xg(e) ? e : "/" + e;
  };
  function gr(e, t) {
    if (hd(t) || Ot(e)) return e;
    const n = Kt(t);
    return e.startsWith(n) ? e : qs(n, e);
  }
  function ec(e, t) {
    if (hd(t)) return e;
    const n = Kt(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r;
  }
  function Va(e, t) {
    const n = Ks(e), r = {
      ...Wa(n.search),
      ...t
    };
    return n.search = dd(r), ry(n);
  }
  function hd(e) {
    return !e || e === "/";
  }
  function ey(e) {
    return e && e !== "/";
  }
  qs = function(e, ...t) {
    let n = e || "";
    for (const r of t.filter((o) => ey(o))) if (n) {
      const o = r.replace(Yg, "");
      n = Vs(n) + o;
    } else n = r;
    return n;
  };
  function md(...e) {
    var _a2, _b2, _c2, _d2;
    const t = /\/(?!\/)/, n = e.filter(Boolean), r = [];
    let o = 0;
    for (const i of n) if (!(!i || i === "/")) {
      for (const [a, l] of i.split(t).entries()) if (!(!l || l === ".")) {
        if (l === "..") {
          if (r.length === 1 && Ot(r[0])) continue;
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
  function os(e) {
    return gd(e, "https://");
  }
  function ty(e) {
    return gd(e, "");
  }
  function gd(e, t) {
    let n = e.match(pd);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e;
  }
  function ny(e, t) {
    return _s(Kt(e)) === _s(Kt(t));
  }
  const yd = Symbol.for("ufo:protocolRelative");
  Ks = function(e = "", t) {
    const n = e.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
    if (n) {
      const [, f, d = ""] = n;
      return {
        protocol: f.toLowerCase(),
        pathname: d,
        href: f + d,
        auth: "",
        host: "",
        search: "",
        hash: ""
      };
    }
    if (!Ot(e, {
      acceptRelative: true
    })) return tc(e);
    const [, r = "", o, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: l, search: u, hash: c } = tc(a);
    return {
      protocol: r.toLowerCase(),
      auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
      host: i,
      pathname: l,
      search: u,
      hash: c,
      [yd]: !r
    };
  };
  function tc(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
      pathname: t,
      search: n,
      hash: r
    };
  }
  function ry(e) {
    const t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", o = e.auth ? e.auth + "@" : "", s = e.host || "";
    return (e.protocol || e[yd] ? (e.protocol || "") + "//" : "") + o + s + t + n + r;
  }
  class oy extends Error {
    constructor(t, n) {
      super(t, n), this.name = "FetchError", (n == null ? void 0 : n.cause) && !this.cause && (this.cause = n.cause);
    }
  }
  function sy(e) {
    var _a2, _b2, _c2, _d2, _e2;
    const t = ((_a2 = e.error) == null ? void 0 : _a2.message) || ((_b2 = e.error) == null ? void 0 : _b2.toString()) || "", n = ((_c2 = e.request) == null ? void 0 : _c2.method) || ((_d2 = e.options) == null ? void 0 : _d2.method) || "GET", r = ((_e2 = e.request) == null ? void 0 : _e2.url) || String(e.request) || "/", o = `[${n}] ${JSON.stringify(r)}`, s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", i = `${o}: ${s}${t ? ` ${t}` : ""}`, a = new oy(i, e.error ? {
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
  const iy = new Set(Object.freeze([
    "PATCH",
    "POST",
    "PUT",
    "DELETE"
  ]));
  function nc(e = "GET") {
    return iy.has(e.toUpperCase());
  }
  function ay(e) {
    if (e === void 0) return false;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? true : t !== "object" ? false : Array.isArray(e) ? true : e.buffer ? false : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
  }
  const ly = /* @__PURE__ */ new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html"
  ]), cy = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
  function uy(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return cy.test(t) ? "json" : ly.has(t) || t.startsWith("text/") ? "text" : "blob";
  }
  function fy(e, t, n, r) {
    const o = dy((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
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
  function dy(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e) for (const [o, s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(o, s);
    return r;
  }
  async function jo(e, t) {
    if (t) if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
  }
  const py = /* @__PURE__ */ new Set([
    408,
    409,
    425,
    429,
    500,
    502,
    503,
    504
  ]), hy = /* @__PURE__ */ new Set([
    101,
    204,
    205,
    304
  ]);
  function vd(e = {}) {
    const { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: r = globalThis.AbortController } = e;
    async function o(a) {
      const l = a.error && a.error.name === "AbortError" && !a.options.timeout || false;
      if (a.options.retry !== false && !l) {
        let c;
        typeof a.options.retry == "number" ? c = a.options.retry : c = nc(a.options.method) ? 0 : 1;
        const f = a.response && a.response.status || 500;
        if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : py.has(f))) {
          const d = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
          return d > 0 && await new Promise((p) => setTimeout(p, d)), s(a.request, {
            ...a.options,
            retry: c - 1
          });
        }
      }
      const u = sy(a);
      throw Error.captureStackTrace && Error.captureStackTrace(u, s), u;
    }
    const s = async function(l, u = {}) {
      const c = {
        request: l,
        options: fy(l, u, e.defaults, n),
        response: void 0,
        error: void 0
      };
      c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await jo(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = gr(c.request, c.options.baseURL)), c.options.query && (c.request = Va(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && nc(c.options.method) && (ay(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
      let f;
      if (!c.options.signal && c.options.timeout) {
        const p = new r();
        f = setTimeout(() => {
          const h = new Error("[TimeoutError]: The operation was aborted due to timeout");
          h.name = "TimeoutError", h.code = 23, p.abort(h);
        }, c.options.timeout), c.options.signal = p.signal;
      }
      try {
        c.response = await t(c.request, c.options);
      } catch (p) {
        return c.error = p, c.options.onRequestError && await jo(c, c.options.onRequestError), await o(c);
      } finally {
        f && clearTimeout(f);
      }
      if ((c.response.body || c.response._bodyInit) && !hy.has(c.response.status) && c.options.method !== "HEAD") {
        const p = (c.options.parseResponse ? "json" : c.options.responseType) || uy(c.response.headers.get("content-type") || "");
        switch (p) {
          case "json": {
            const h = await c.response.text(), m = c.options.parseResponse || lo;
            c.response._data = m(h);
            break;
          }
          case "stream": {
            c.response._data = c.response.body || c.response._bodyInit;
            break;
          }
          default:
            c.response._data = await c.response[p]();
        }
      }
      return c.options.onResponse && await jo(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await jo(c, c.options.onResponseError), await o(c)) : c.response;
    }, i = async function(l, u) {
      return (await s(l, u))._data;
    };
    return i.raw = s, i.native = (...a) => t(...a), i.create = (a = {}, l = {}) => vd({
      ...e,
      ...l,
      defaults: {
        ...e.defaults,
        ...l.defaults,
        ...a
      }
    }), i;
  }
  const ws = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  }(), my = ws.fetch ? (...e) => ws.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")), gy = ws.Headers, yy = ws.AbortController, vy = vd({
    fetch: my,
    Headers: gy,
    AbortController: yy
  }), by = vy, _y = () => {
    var _a2, _b2, _c2;
    return ((_a2 = window == null ? void 0 : window.__NUXT__) == null ? void 0 : _a2.config) || ((_c2 = (_b2 = window == null ? void 0 : window.useNuxtApp) == null ? void 0 : _b2.call(window).payload) == null ? void 0 : _c2.config);
  }, qa = () => _y().app, wy = () => qa().baseURL, Sy = () => qa().buildAssetsDir, Ka = (...e) => md(bd(), Sy(), ...e), bd = (...e) => {
    const t = qa(), n = t.cdnURL || t.baseURL;
    return e.length ? md(n, ...e) : n;
  };
  globalThis.__buildAssetsURL = Ka, globalThis.__publicAssetsURL = bd;
  globalThis.$fetch || (globalThis.$fetch = by.create({
    baseURL: wy()
  }));
  "global" in globalThis || (globalThis.global = globalThis);
  function ia(e, t = {}, n) {
    for (const r in e) {
      const o = e[r], s = n ? `${n}:${r}` : r;
      typeof o == "object" && o !== null ? ia(o, t, s) : typeof o == "function" && (t[s] = o);
    }
    return t;
  }
  const Ey = {
    run: (e) => e()
  }, Cy = () => Ey, _d = typeof console.createTask < "u" ? console.createTask : Cy;
  function ky(e, t) {
    const n = t.shift(), r = _d(n);
    return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve());
  }
  function Ty(e, t) {
    const n = t.shift(), r = _d(n);
    return Promise.all(e.map((o) => r.run(() => o(...t))));
  }
  function mi(e, t) {
    for (const n of [
      ...e
    ]) n(t);
  }
  class Ry {
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
      const n = ia(t), r = Object.keys(n).map((o) => this.hook(o, n[o]));
      return () => {
        for (const o of r.splice(0, r.length)) o();
      };
    }
    removeHooks(t) {
      const n = ia(t);
      for (const r in n) this.removeHook(r, n[r]);
    }
    removeAllHooks() {
      for (const t in this._hooks) delete this._hooks[t];
    }
    callHook(t, ...n) {
      return n.unshift(t), this.callHookWith(ky, t, ...n);
    }
    callHookParallel(t, ...n) {
      return n.unshift(t), this.callHookWith(Ty, t, ...n);
    }
    callHookWith(t, n, ...r) {
      const o = this._before || this._after ? {
        name: n,
        args: r,
        context: {}
      } : void 0;
      this._before && mi(this._before, o);
      const s = t(n in this._hooks ? [
        ...this._hooks[n]
      ] : [], r);
      return s instanceof Promise ? s.finally(() => {
        this._after && o && mi(this._after, o);
      }) : (this._after && o && mi(this._after, o), s);
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
  function wd() {
    return new Ry();
  }
  function Py(e = {}) {
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
        aa.add(u);
        try {
          const c = o ? o.run(i, a) : a();
          return n || (t = void 0), await c;
        } finally {
          aa.delete(u);
        }
      }
    };
  }
  function Ay(e = {}) {
    const t = {};
    return {
      get(n, r = {}) {
        return t[n] || (t[n] = Py({
          ...e,
          ...r
        })), t[n];
      }
    };
  }
  const Ss = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}, rc = "__unctx__", xy = Ss[rc] || (Ss[rc] = Ay()), Oy = (e, t = {}) => xy.get(e, t), oc = "__unctx_async_handlers__", aa = Ss[oc] || (Ss[oc] = /* @__PURE__ */ new Set());
  function yr(e) {
    const t = [];
    for (const o of aa) {
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
  let Ly, sc, $y, My, ic, Iy, Dy, Ny, Sd, ac, By;
  Ly = false;
  sc = false;
  $y = true;
  My = false;
  ic = {
    id: "__nuxt-loader"
  };
  Iy = {
    componentName: "NuxtLink",
    prefetch: true,
    prefetchOn: {
      visibility: true
    }
  };
  Dy = {
    deep: false
  };
  Lk = {};
  Ny = "#__nuxt";
  Sd = "nuxt-app";
  ac = 36e5;
  By = "vite:preloadError";
  function Ed(e = Sd) {
    return Oy(e, {
      asyncContext: false
    });
  }
  const jy = "__nuxt_plugin";
  function Fy(e) {
    var _a2;
    let t = 0;
    const n = {
      _id: e.id || Sd || "nuxt-app",
      _scope: qn(),
      provide: void 0,
      versions: {
        get nuxt() {
          return "4.0.1";
        },
        get vue() {
          return n.vueApp.version;
        }
      },
      payload: Ut({
        ...((_a2 = e.ssrContext) == null ? void 0 : _a2.payload) || {},
        data: Ut({}),
        state: Ye({}),
        once: /* @__PURE__ */ new Set(),
        _errors: Ut({})
      }),
      static: {
        data: {}
      },
      runWithContext(o) {
        return n._scope.active && !Gt() ? n._scope.run(() => lc(n, o)) : lc(n, o);
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
      _asyncData: Ut({}),
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
    n.hooks = wd(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (o, s) => {
      const i = "$" + o;
      Fo(n, i, s), Fo(n.vueApp.config.globalProperties, i, s);
    }, Fo(n.vueApp, "$nuxt", n), Fo(n.vueApp.config.globalProperties, "$nuxt", n);
    {
      window.addEventListener(By, (s) => {
        n.callHook("app:chunkError", {
          error: s.payload
        }), s.payload.message.includes("Unable to preload CSS") && s.preventDefault();
      }), window.useNuxtApp || (window.useNuxtApp = ye);
      const o = n.hook("app:error", (...s) => {
        console.error("[nuxt] error caught during app initialization", ...s);
      });
      n.hook("app:mounted", o);
    }
    const r = n.payload.config;
    return n.provide("config", r), n;
  }
  function Hy(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks);
  }
  async function Uy(e, t) {
    if (typeof t == "function") {
      const { provide: n } = await e.runWithContext(() => t(e)) || {};
      if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
    }
  }
  async function Wy(e, t) {
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
        const c = Uy(e, l).then(async () => {
          l._name && (n.add(l._name), await Promise.all(r.map(async ([f, d]) => {
            f.has(l._name) && (f.delete(l._name), f.size === 0 && (i++, await a(d)));
          })));
        });
        l.parallel ? o.push(c.catch((f) => s.push(f))) : await c;
      }
    }
    for (const l of t) Hy(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(o), i) for (let l = 0; l < i; l++) await Promise.all(o);
    if (s.length) throw s[0];
  }
  function Ae(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {
    }), e, {
      [jy]: true,
      _name: t
    });
  }
  const Cd = Ae;
  function lc(e, t, n) {
    const r = () => t();
    return Ed(e._id).set(e), e.vueApp.runWithContext(r);
  }
  function Vy(e) {
    var _a2;
    let t;
    return Kn() && (t = (_a2 = Le()) == null ? void 0 : _a2.appContext.app.$nuxt), t || (t = Ed(e).tryUse()), t || null;
  }
  ye = function(e) {
    const t = Vy(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t;
  };
  ut = function(e) {
    return ye().$config;
  };
  function Fo(e, t, n) {
    Object.defineProperty(e, t, {
      get: () => n
    });
  }
  function qy(e, t) {
    return {
      ctx: {
        table: e
      },
      matchAll: (n) => Td(n, e)
    };
  }
  function kd(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, o]) => [
      r,
      kd(o)
    ])) : new Map(Object.entries(e[n]));
    return t;
  }
  function Ky(e) {
    return qy(kd(e));
  }
  function Td(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s, i] of cc(t.wildcard)) (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s, i] of cc(t.dynamic)) if (e.startsWith(s + "/")) {
      const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
      r.push(...Td(a, i));
    }
    const o = t.static.get(e);
    return o && r.push(o), r.filter(Boolean);
  }
  function cc(e) {
    return [
      ...e.entries()
    ].sort((t, n) => t[0].length - n[0].length);
  }
  function gi(e) {
    if (e === null || typeof e != "object") return false;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? false : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : true;
  }
  function la(e, t, n = ".", r) {
    if (!gi(t)) return la(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
      if (s === "__proto__" || s === "constructor") continue;
      const i = e[s];
      i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [
        ...i,
        ...o[s]
      ] : gi(i) && gi(o[s]) ? o[s] = la(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i));
    }
    return o;
  }
  function Gy(e) {
    return (...t) => t.reduce((n, r) => la(n, r, "", e), {});
  }
  _o = Gy();
  function zy(e, t) {
    try {
      return t in e;
    } catch {
      return false;
    }
  }
  class uc extends Error {
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
        statusCode: ca(this.statusCode, 500)
      };
      return this.statusMessage && (t.statusMessage = Rd(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t;
    }
  }
  __publicField(uc, "__h3_error__", true);
  function Jy(e) {
    if (typeof e == "string") return new uc(e);
    if (Yy(e)) return e;
    const t = new uc(e.message ?? e.statusMessage ?? "", {
      cause: e.cause || e
    });
    if (zy(e, "stack")) try {
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
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = ca(e.statusCode, t.statusCode) : e.status && (t.statusCode = ca(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
      const n = t.statusMessage;
      Rd(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t;
  }
  function Yy(e) {
    var _a2;
    return ((_a2 = e == null ? void 0 : e.constructor) == null ? void 0 : _a2.__h3_error__) === true;
  }
  const Qy = /[^\u0009\u0020-\u007E]/g;
  function Rd(e = "") {
    return e.replace(Qy, "");
  }
  function ca(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
  }
  let Pd, Wn;
  Pd = Symbol("layout-meta");
  Wn = Symbol("route");
  He = () => {
    var _a2;
    return (_a2 = ye()) == null ? void 0 : _a2.$router;
  };
  zn = () => Kn() ? Re(Wn, ye()._route) : ye()._route;
  $k = function(e) {
    return e;
  };
  let Xy;
  Xy = () => {
    try {
      if (ye()._processingMiddleware) return true;
    } catch {
      return false;
    }
    return false;
  };
  Zy = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : "path" in e ? ua(e) : He().resolve(e).href;
    if (t == null ? void 0 : t.open) {
      const { target: l = "_blank", windowFeatures: u = {} } = t.open, c = Object.entries(u).filter(([f, d]) => d !== void 0).map(([f, d]) => `${f.toLowerCase()}=${d}`).join(", ");
      return open(n, l, c), Promise.resolve();
    }
    const r = Ot(n, {
      acceptRelative: true
    }), o = (t == null ? void 0 : t.external) || r;
    if (o) {
      if (!(t == null ? void 0 : t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const { protocol: l } = new URL(n, window.location.href);
      if (l && Qg(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const s = Xy();
    if (!o && s) {
      if (t == null ? void 0 : t.replace) {
        if (typeof e == "string") {
          const { pathname: l, search: u, hash: c } = Ks(e);
          return {
            path: l,
            ...u && {
              query: Wa(u)
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
    const i = He(), a = ye();
    return o ? (a._scope.stop(), (t == null ? void 0 : t.replace) ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {
    }) : false : Promise.resolve()) : (t == null ? void 0 : t.replace) ? i.replace(e) : i.push(e);
  };
  function ua(e) {
    return Va(e.path || "", e.query || {}) + (e.hash || "");
  }
  let Ad, xr, Dn, xd, Od, ev;
  Ad = "__nuxt_error";
  xr = () => Bs(ye().payload, "error");
  Dn = (e) => {
    const t = Pn(e);
    try {
      const n = ye(), r = xr();
      n.hooks.callHook("app:error", t), r.value || (r.value = t);
    } catch {
      throw t;
    }
    return t;
  };
  xd = async (e = {}) => {
    const t = ye(), n = xr();
    t.callHook("app:error:cleared", e), e.redirect && await He().replace(e.redirect), n.value = void 0;
  };
  Od = (e) => !!e && typeof e == "object" && Ad in e;
  Pn = (e) => {
    const t = Jy(e);
    return Object.defineProperty(t, Ad, {
      value: true,
      configurable: false,
      writable: false
    }), t;
  };
  ev = {
    trailing: true
  };
  function tv(e, t = 25, n = {}) {
    if (n = {
      ...ev,
      ...n
    }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
    let r, o, s = [], i, a;
    const l = (u, c) => (i = nv(e, u, c), i.finally(() => {
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
          const d = n.leading ? r : l(this, u);
          for (const p of s) p(d);
          s = [];
        }, t), f ? (r = l(this, u), c(r)) : s.push(c);
      });
    };
  }
  async function nv(e, t, n) {
    return await e.apply(t, n);
  }
  let Ga;
  const wo = (e) => Ga = e, rv = () => Kn() && Re(za) || Ga, za = Symbol();
  function fa(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Yr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Yr || (Yr = {}));
  function ov() {
    const e = qn(true), t = e.run(() => fe({}));
    let n = [], r = [];
    const o = pr({
      install(s) {
        wo(o), o._a = s, s.provide(za, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
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
  const Ld = () => {
  };
  function fc(e, t, n, r = Ld) {
    e.push(t);
    const o = () => {
      const s = e.indexOf(t);
      s > -1 && (e.splice(s, 1), r());
    };
    return !n && Gt() && Pt(o), o;
  }
  function rr(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const sv = (e) => e(), dc = Symbol(), yi = Symbol();
  function da(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], o = e[n];
      fa(o) && fa(r) && e.hasOwnProperty(n) && !_e(r) && !nn(r) ? e[n] = da(o, r) : e[n] = r;
    }
    return e;
  }
  const $d = Symbol();
  function iv(e) {
    return Object.defineProperty(e, $d, {});
  }
  function av(e) {
    return !fa(e) || !Object.prototype.hasOwnProperty.call(e, $d);
  }
  const { assign: gn } = Object;
  function lv(e) {
    return !!(_e(e) && e.effect);
  }
  function cv(e, t, n, r) {
    const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
    let l;
    function u() {
      a || (n.state.value[e] = o ? o() : {});
      const c = no(n.state.value[e]);
      return gn(c, s, Object.keys(i || {}).reduce((f, d) => (f[d] = pr(W(() => {
        wo(n);
        const p = n._s.get(e);
        return i[d].call(p, p);
      })), f), {}));
    }
    return l = Md(e, u, t, n, r, true), l;
  }
  function Md(e, t, n = {}, r, o, s) {
    let i;
    const a = gn({
      actions: {}
    }, n), l = {
      deep: true
    };
    let u, c, f = [], d = [], p;
    const h = r.state.value[e];
    !s && !h && (r.state.value[e] = {}), fe({});
    let m;
    function b(D) {
      let R;
      u = c = false, typeof D == "function" ? (D(r.state.value[e]), R = {
        type: Yr.patchFunction,
        storeId: e,
        events: p
      }) : (da(r.state.value[e], D), R = {
        type: Yr.patchObject,
        payload: D,
        storeId: e,
        events: p
      });
      const O = m = Symbol();
      je().then(() => {
        m === O && (u = true);
      }), c = true, rr(f, R, r.state.value[e]);
    }
    const S = s ? function() {
      const { state: R } = n, O = R ? R() : {};
      this.$patch((C) => {
        gn(C, O);
      });
    } : Ld;
    function w() {
      i.stop(), f = [], d = [], r._s.delete(e);
    }
    const g = (D, R = "") => {
      if (dc in D) return D[yi] = R, D;
      const O = function() {
        wo(r);
        const C = Array.from(arguments), T = [], N = [];
        function ne(J) {
          T.push(J);
        }
        function re(J) {
          N.push(J);
        }
        rr(d, {
          args: C,
          name: O[yi],
          store: E,
          after: ne,
          onError: re
        });
        let U;
        try {
          U = D.apply(this && this.$id === e ? this : E, C);
        } catch (J) {
          throw rr(N, J), J;
        }
        return U instanceof Promise ? U.then((J) => (rr(T, J), J)).catch((J) => (rr(N, J), Promise.reject(J))) : (rr(T, U), U);
      };
      return O[dc] = true, O[yi] = R, O;
    }, y = {
      _p: r,
      $id: e,
      $onAction: fc.bind(null, d),
      $patch: b,
      $reset: S,
      $subscribe(D, R = {}) {
        const O = fc(f, D, R.detached, () => C()), C = i.run(() => Oe(() => r.state.value[e], (T) => {
          (R.flush === "sync" ? c : u) && D({
            storeId: e,
            type: Yr.direct,
            events: p
          }, T);
        }, gn({}, l, R)));
        return O;
      },
      $dispose: w
    }, E = Ye(y);
    r._s.set(e, E);
    const L = (r._a && r._a.runWithContext || sv)(() => r._e.run(() => (i = qn()).run(() => t({
      action: g
    }))));
    for (const D in L) {
      const R = L[D];
      if (_e(R) && !lv(R) || nn(R)) s || (h && av(R) && (_e(R) ? R.value = h[D] : da(R, h[D])), r.state.value[e][D] = R);
      else if (typeof R == "function") {
        const O = g(R, D);
        L[D] = O, a.actions[D] = R;
      }
    }
    return gn(E, L), gn(ue(E), L), Object.defineProperty(E, "$state", {
      get: () => r.state.value[e],
      set: (D) => {
        b((R) => {
          gn(R, D);
        });
      }
    }), r._p.forEach((D) => {
      gn(E, i.run(() => D({
        store: E,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), h && s && n.hydrate && n.hydrate(E.$state, h), u = true, c = true, E;
  }
  function uv(e, t, n) {
    let r;
    const o = typeof t == "function";
    r = o ? n : t;
    function s(i, a) {
      const l = Kn();
      return i = i || (l ? Re(za, null) : null), i && wo(i), i = Ga, i._s.has(e) || (o ? Md(e, t, r, i) : cv(e, r, i)), i._s.get(e);
    }
    return s.$id = e, s;
  }
  function pc(e) {
    const t = dv(e), n = new ArrayBuffer(t.length), r = new DataView(n);
    for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
    return n;
  }
  const fv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function dv(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "", n = 0, r = 0;
    for (let o = 0; o < e.length; o++) n <<= 6, n |= fv.indexOf(e[o]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
  }
  const pv = -1, hv = -2, mv = -3, gv = -4, yv = -5, vv = -6;
  function bv(e, t) {
    return _v(JSON.parse(e), t);
  }
  function _v(e, t) {
    if (typeof e == "number") return o(e, true);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e, r = Array(n.length);
    function o(s, i = false) {
      if (s === pv) return;
      if (s === mv) return NaN;
      if (s === gv) return 1 / 0;
      if (s === yv) return -1 / 0;
      if (s === vv) return -0;
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
            for (let p = 1; p < a.length; p += 1) c.add(o(a[p]));
            break;
          case "Map":
            const f = /* @__PURE__ */ new Map();
            r[s] = f;
            for (let p = 1; p < a.length; p += 2) f.set(o(a[p]), o(a[p + 1]));
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
            const d = /* @__PURE__ */ Object.create(null);
            r[s] = d;
            for (let p = 1; p < a.length; p += 2) d[a[p]] = o(a[p + 1]);
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
            const p = globalThis[l], h = a[1], m = pc(h), b = new p(m);
            r[s] = b;
            break;
          }
          case "ArrayBuffer": {
            const p = a[1], h = pc(p);
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
          c !== hv && (l[u] = o(c));
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
  const wv = /* @__PURE__ */ new Set([
    "link",
    "style",
    "script",
    "noscript"
  ]), Sv = /* @__PURE__ */ new Set([
    "title",
    "titleTemplate",
    "script",
    "style",
    "noscript"
  ]), hc = /* @__PURE__ */ new Set([
    "base",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), Ev = /* @__PURE__ */ new Set([
    "title",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), Cv = /* @__PURE__ */ new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams"
  ]), kv = /* @__PURE__ */ new Set([
    "key",
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "innerHTML",
    "textContent",
    "processTemplateParams"
  ]), Tv = /* @__PURE__ */ new Set([
    "onload",
    "onerror"
  ]), Rv = /* @__PURE__ */ new Set([
    "templateParams",
    "htmlAttrs",
    "bodyAttrs"
  ]), Ja = /* @__PURE__ */ new Set([
    "theme-color",
    "google-site-verification",
    "og",
    "article",
    "book",
    "profile",
    "twitter",
    "author"
  ]), co = {
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
  }, Pv = {
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
  }, Id = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({ key: e, value: t }) => `${tn(e)}=${t}`
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
        resolve: ({ key: e, value: t }) => typeof t == "boolean" ? tn(e) : `${tn(e)}:${t}`
      }
    },
    contentSecurityPolicy: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: "; ",
        resolve: ({ key: e, value: t }) => `${tn(e)} ${t}`
      }
    },
    charset: {}
  };
  function tn(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(), n = t.indexOf("-");
    return n === -1 ? t : co.META.has(t.slice(0, n)) || co.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t;
  }
  function Dd(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t));
  }
  function pa(e) {
    return Array.isArray(e) ? e.map(pa) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [
      tn(t),
      pa(n)
    ]));
  }
  function Nd(e, t = {}) {
    const { entrySeparator: n = "", keyValueSeparator: r = "", wrapValue: o, resolve: s } = t;
    return Object.entries(e).map(([i, a]) => {
      if (s) {
        const u = s({
          key: i,
          value: a
        });
        if (u !== void 0) return u;
      }
      const l = typeof a == "object" ? Nd(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && o ? `${o}${a.replace(new RegExp(o, "g"), `\\${o}`)}${o}` : a;
      return `${i}${r}${l}`;
    }).join(n);
  }
  function mc(e, t) {
    const n = Dd(t), r = tn(e), o = Bd(r);
    if (!Ja.has(r)) return [
      {
        [o]: r,
        ...n
      }
    ];
    const s = Object.fromEntries(Object.entries(n).map(([i, a]) => [
      `${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`,
      a
    ]));
    return Es(s || {}).sort((i, a) => {
      var _a2, _b2;
      return (((_a2 = i[o]) == null ? void 0 : _a2.length) || 0) - (((_b2 = a[o]) == null ? void 0 : _b2.length) || 0);
    });
  }
  function Bd(e) {
    var _a2;
    if (((_a2 = Id[e]) == null ? void 0 : _a2.metaKey) === "http-equiv" || co.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = tn(e), n = t.indexOf(":");
    return n === -1 ? "name" : co.OG.has(t.slice(0, n)) ? "property" : "name";
  }
  function Av(e) {
    return Pv[e] || tn(e);
  }
  function xv(e, t) {
    var _a2;
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Nd(pa(e), {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve: ({ value: n, key: r }) => n === null ? "" : typeof n == "boolean" ? r : void 0,
      ...(_a2 = Id[t]) == null ? void 0 : _a2.unpack
    });
  }
  function Es(e) {
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
            const f = `${o}${u === "url" ? "" : `:${u}`}`, d = Es({
              [f]: c
            });
            (u === "url" ? a : l).push(...d);
          }
          t.push(...a, ...l);
        } else t.push(...typeof i == "string" ? Es({
          [o]: i
        }) : mc(o, i));
        continue;
      }
      if (typeof s == "object" && s) if (co.MEDIA.has(o)) {
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
      } else Ja.has(tn(o)) ? t.push(...mc(o, s)) : n[o] = Dd(s);
      else n[o] = s;
    }
    const r = Object.entries(n).map(([o, s]) => {
      if (o === "charset") return {
        charset: s === null ? "_null" : s
      };
      const i = Bd(o), a = Av(o), l = s === null ? "_null" : typeof s == "object" ? xv(s, o) : typeof s == "number" ? s.toString() : s;
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
  const Ov = {
    key: "flatMeta",
    hooks: {
      "entries:normalize": (e) => {
        const t = [];
        e.tags = e.tags.map((n) => n.tag !== "_flatMeta" ? n : (t.push(Es(n.props).map((r) => ({
          ...n,
          tag: "meta",
          props: r
        }))), false)).filter(Boolean).concat(...t);
      }
    }
  }, Lv = [
    "name",
    "property",
    "http-equiv"
  ], $v = /* @__PURE__ */ new Set([
    "viewport",
    "description",
    "keywords",
    "robots"
  ]);
  function jd(e) {
    const t = e.split(":");
    return t.length ? Ja.has(t[1]) : false;
  }
  function ha(e) {
    const { props: t, tag: n } = e;
    if (Cv.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (e.tag === "meta") {
      for (const r of Lv) if (t[r] !== void 0) {
        const o = t[r], s = o.includes(":"), i = $v.has(o), l = !(s || i) && e.key ? `:key:${e.key}` : "";
        return `${n}:${o}${l}`;
      }
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (Sv.has(n)) {
      const r = e.textContent || e.innerHTML;
      if (r) return `${n}:content:${r}`;
    }
  }
  function gc(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([r, o]) => `${r}:${String(o)}`).join(",")}`;
  }
  function Cs(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let o;
    if (t && (o = t(n, e)), Array.isArray(o)) return o.map((s) => Cs(s, t));
    if ((o == null ? void 0 : o.constructor) === Object) {
      const s = {};
      for (const i of Object.keys(o)) s[i] = Cs(o[i], t, i);
      return s;
    }
    return o;
  }
  function Mv(e, t) {
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
  function Fd(e, t) {
    return e.props = e.props || {}, t && Object.entries(t).forEach(([n, r]) => {
      if (r === null) {
        e.props[n] = null;
        return;
      }
      if (n === "class" || n === "style") {
        e.props[n] = Mv(n, r);
        return;
      }
      if (kv.has(n)) {
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
  function Iv(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
      [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, r = Fd({
      tag: e,
      props: {}
    }, n);
    return r.key && wv.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map((o) => ({
      ...r,
      props: {
        ...r.props,
        content: o
      }
    })) : r;
  }
  function Dv(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (o, s) => {
      for (let i = 0; i < t.length; i++) s = t[i](o, s);
      return s;
    };
    e = n(void 0, e);
    const r = [];
    return e = Cs(e, n), Object.entries(e || {}).forEach(([o, s]) => {
      if (s !== void 0) for (const i of Array.isArray(s) ? s : [
        s
      ]) r.push(Iv(o, i));
    }), r.flat();
  }
  const yc = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w, vc = {
    base: -10,
    title: 10
  }, Nv = {
    critical: -8,
    high: -1,
    low: 2
  }, bc = {
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
  }, Bv = /@import/, Br = (e) => e === "" || e === true;
  function jv(e, t) {
    var _a2;
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = Nv[t.tagPriority] || 0, o = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : bc;
    if (t.tag in vc) n = vc[t.tag];
    else if (t.tag === "meta") {
      const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
      s && (n = bc.meta[s]);
    } else t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? Br(t.props.async) ? n = o.script.async : t.props.src && !Br(t.props.defer) && !Br(t.props.async) && t.props.type !== "module" && !((_a2 = t.props.type) == null ? void 0 : _a2.endsWith("json")) ? n = o.script.sync : Br(t.props.defer) && t.props.src && !Br(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && Bv.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r;
  }
  function _c(e, t) {
    const n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
  }
  function Fv(e = {}) {
    var _a2;
    const t = wd();
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
      use: (a) => _c(i, a),
      push(a, l) {
        const u = {
          ...l || {}
        };
        delete u.head;
        const c = u._index ?? i._entryCount++, f = {
          _i: c,
          input: a,
          options: u
        }, d = {
          _poll(p = false) {
            i.dirty = true, !p && s.add(c), t.callHook("entries:updated", i);
          },
          dispose() {
            r.delete(c) && i.invalidate();
          },
          patch(p) {
            (!u.mode || u.mode === "server" && n || u.mode === "client" && !n) && (f.input = p, r.set(c, f), d._poll());
          }
        };
        return d.patch(a), d;
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
          const d = s.values().next().value;
          s.delete(d);
          const p = r.get(d);
          if (p) {
            const h = {
              tags: Dv(p.input, e.propResolvers || []).map((m) => Object.assign(m, p.options)),
              entry: p
            };
            await t.callHook("entries:normalize", h), p._tags = h.tags.map((m, b) => (m._w = jv(i, m), m._p = (p._i << 10) + b, m._d = ha(m), m));
          }
        }
        let l = false;
        a.entries.flatMap((d) => (d._tags || []).map((p) => ({
          ...p,
          props: {
            ...p.props
          }
        }))).sort(yc).reduce((d, p) => {
          const h = String(p._d || p._p);
          if (!d.has(h)) return d.set(h, p);
          const m = d.get(h);
          if (((p == null ? void 0 : p.tagDuplicateStrategy) || (Rv.has(p.tag) ? "merge" : null) || (p.key && p.key === m.key ? "merge" : null)) === "merge") {
            const S = {
              ...m.props
            };
            Object.entries(p.props).forEach(([w, g]) => S[w] = w === "style" ? new Map([
              ...m.props.style || /* @__PURE__ */ new Map(),
              ...g
            ]) : w === "class" ? /* @__PURE__ */ new Set([
              ...m.props.class || /* @__PURE__ */ new Set(),
              ...g
            ]) : g), d.set(h, {
              ...p,
              props: S
            });
          } else p._p >> 10 === m._p >> 10 && p.tag === "meta" && jd(h) ? (d.set(h, Object.assign([
            ...Array.isArray(m) ? m : [
              m
            ],
            p
          ], p)), l = true) : (p._w === m._w ? p._p > m._p : (p == null ? void 0 : p._w) < (m == null ? void 0 : m._w)) && d.set(h, p);
          return d;
        }, a.tagMap);
        const u = a.tagMap.get("title"), c = a.tagMap.get("titleTemplate");
        if (i._title = u == null ? void 0 : u.textContent, c) {
          const d = c == null ? void 0 : c.textContent;
          if (i._titleTemplate = d, d) {
            let p = typeof d == "function" ? d(u == null ? void 0 : u.textContent) : d;
            typeof p == "string" && !i.plugins.has("template-params") && (p = p.replace("%s", (u == null ? void 0 : u.textContent) || "")), u ? p === null ? a.tagMap.delete("title") : a.tagMap.set("title", {
              ...u,
              textContent: p
            }) : (c.tag = "title", c.textContent = p);
          }
        }
        a.tags = Array.from(a.tagMap.values()), l && (a.tags = a.tags.flat().sort(yc)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
        const f = [];
        for (const d of a.tags) {
          const { innerHTML: p, tag: h, props: m } = d;
          if (Ev.has(h) && !(Object.keys(m).length === 0 && !d.innerHTML && !d.textContent) && !(h === "meta" && !m.content && !m["http-equiv"] && !m.charset)) {
            if (h === "script" && p) {
              if ((_a3 = m.type) == null ? void 0 : _a3.endsWith("json")) {
                const b = typeof p == "string" ? p : JSON.stringify(p);
                d.innerHTML = b.replace(/</g, "\\u003C");
              } else typeof p == "string" && (d.innerHTML = p.replace(new RegExp(`</${h}`, "g"), `<\\/${h}`));
              d._d = ha(d);
            }
            f.push(d);
          }
        }
        return f;
      },
      invalidate() {
        for (const a of r.values()) s.add(a._i);
        i.dirty = true, t.callHook("entries:updated", i);
      }
    };
    return ((e == null ? void 0 : e.plugins) || []).forEach((a) => _c(i, a)), i.hooks.callHook("init", i), (_a2 = e.init) == null ? void 0 : _a2.forEach((a) => a && i.push(a)), i;
  }
  function Hv(e = {}) {
    const t = [];
    let n = -1;
    const r = (o = false) => ({
      get(s, i, a) {
        if (!o) {
          const l = Reflect.get(s, i, a);
          if (typeof l < "u") return l;
          n++, t[n] = [];
        }
        return t[n].push({
          type: "get",
          key: i
        }), new Proxy(() => {
        }, r(true));
      },
      apply(s, i, a) {
        t[n].push({
          type: "apply",
          key: "",
          args: a
        });
      }
    });
    return {
      proxy: new Proxy(e || {}, r()),
      stack: t
    };
  }
  function Uv(e) {
    const t = {
      get(n, r, o) {
        const s = Reflect.get(n, r, o);
        return typeof s == "object" ? new Proxy(s, t) : s;
      },
      apply(n, r, o) {
        Reflect.apply(n, r, o);
      }
    };
    return new Proxy(e, t);
  }
  function Wv(e, t) {
    t.forEach((n) => {
      let r = e, o = e;
      n.forEach(({ type: s, key: i, args: a }) => {
        s === "get" ? (o = r, r = r[i]) : s === "apply" && (r = r.call(o, ...a));
      });
    });
  }
  function Vv(e) {
    return e.key || e.src || (typeof e.innerHTML == "string" ? e.innerHTML : "");
  }
  const qv = [
    "preconnect",
    "dns-prefetch"
  ];
  function Kv(e, t, n) {
    var _a2, _b2, _c2;
    const r = typeof t == "string" ? {
      src: t
    } : t, o = n || {}, s = Vv(r), i = (_a2 = e._scripts) == null ? void 0 : _a2[s];
    if (i) return i.setupTriggerHandler(o.trigger), i;
    (_b2 = o.beforeInit) == null ? void 0 : _b2.call(o);
    const a = (h) => {
      d.status = h, e.hooks.callHook("script:updated", p);
    };
    Tv.forEach((h) => {
      const m = h, b = typeof r[m] == "function" ? r[m].bind(o.eventContext) : null;
      r[m] = (S) => {
        a(h === "onload" ? "loaded" : h === "onerror" ? "error" : "loading"), b == null ? void 0 : b(S);
      };
    });
    const l = {
      loaded: [],
      error: []
    }, u = /* @__PURE__ */ new Set(), c = (h, m, b) => {
      if (!e.ssr) {
        if (b == null ? void 0 : b.key) {
          const S = `${b == null ? void 0 : b.key}:${b.key}`;
          if (u.has(S)) return;
          u.add(S);
        }
        if (l[h]) {
          const S = l[h].push(m);
          return () => {
            var _a3;
            return (_a3 = l[h]) == null ? void 0 : _a3.splice(S - 1, 1);
          };
        }
        return m(d.instance), () => {
        };
      }
    }, f = new Promise((h) => {
      if (e.ssr) return;
      const m = (S) => requestAnimationFrame(() => h(S)), b = e.hooks.hook("script:updated", ({ script: S }) => {
        const w = S.status;
        if (S.id === s && (w === "loaded" || w === "error")) {
          if (w === "loaded") if (typeof o.use == "function") {
            const g = o.use();
            g && m(g);
          } else m({});
          else w === "error" && h(false);
          b();
        }
      });
    }), d = {
      _loadPromise: f,
      instance: !e.ssr && ((_c2 = o == null ? void 0 : o.use) == null ? void 0 : _c2.call(o)) || null,
      proxy: null,
      id: s,
      status: "awaitingLoad",
      remove() {
        var _a3, _b3, _c3;
        return (_a3 = d._triggerAbortController) == null ? void 0 : _a3.abort(), d._triggerPromises = [], (_b3 = d._warmupEl) == null ? void 0 : _b3.dispose(), d.entry ? (d.entry.dispose(), d.entry = void 0, a("removed"), (_c3 = e._scripts) == null ? true : delete _c3[s], true) : false;
      },
      warmup(h) {
        const { src: m } = r, b = !m.startsWith("/") || m.startsWith("//"), S = h && qv.includes(h);
        let w = m;
        if (!h || S && !b) return;
        if (S) {
          const y = new URL(m);
          w = `${y.protocol}//${y.host}`;
        }
        const g = {
          href: w,
          rel: h,
          crossorigin: typeof r.crossorigin < "u" ? r.crossorigin : b ? "anonymous" : void 0,
          referrerpolicy: typeof r.referrerpolicy < "u" ? r.referrerpolicy : b ? "no-referrer" : void 0,
          fetchpriority: typeof r.fetchpriority < "u" ? r.fetchpriority : "low",
          integrity: r.integrity,
          as: h === "preload" ? "script" : void 0
        };
        return d._warmupEl = e.push({
          link: [
            g
          ]
        }, {
          head: e,
          tagPriority: "high"
        }), d._warmupEl;
      },
      load(h) {
        var _a3;
        if ((_a3 = d._triggerAbortController) == null ? void 0 : _a3.abort(), d._triggerPromises = [], !d.entry) {
          a("loading");
          const m = {
            defer: true,
            fetchpriority: "low"
          };
          r.src && (r.src.startsWith("http") || r.src.startsWith("//")) && (m.crossorigin = "anonymous", m.referrerpolicy = "no-referrer"), d.entry = e.push({
            script: [
              {
                ...m,
                ...r
              }
            ]
          }, o);
        }
        return h && c("loaded", h), f;
      },
      onLoaded(h, m) {
        return c("loaded", h, m);
      },
      onError(h, m) {
        return c("error", h, m);
      },
      setupTriggerHandler(h) {
        if (d.status === "awaitingLoad") if ((typeof h > "u" || h === "client") && !e.ssr || h === "server") d.load();
        else if (h instanceof Promise) {
          if (e.ssr) return;
          d._triggerAbortController || (d._triggerAbortController = new AbortController(), d._triggerAbortPromise = new Promise((b) => {
            d._triggerAbortController.signal.addEventListener("abort", () => {
              d._triggerAbortController = null, b();
            });
          })), d._triggerPromises = d._triggerPromises || [];
          const m = d._triggerPromises.push(Promise.race([
            h.then((b) => typeof b > "u" || b ? d.load : void 0),
            d._triggerAbortPromise
          ]).catch(() => {
          }).then((b) => {
            b == null ? void 0 : b();
          }).finally(() => {
            var _a3;
            (_a3 = d._triggerPromises) == null ? void 0 : _a3.splice(m, 1);
          }));
        } else typeof h == "function" && h(d.load);
      },
      _cbs: l
    };
    f.then((h) => {
      var _a3, _b3;
      h !== false ? (d.instance = h, (_a3 = l.loaded) == null ? void 0 : _a3.forEach((m) => m(h)), l.loaded = null) : ((_b3 = l.error) == null ? void 0 : _b3.forEach((m) => m()), l.error = null);
    });
    const p = {
      script: d
    };
    if (d.setupTriggerHandler(o.trigger), o.use) {
      const { proxy: h, stack: m } = Hv(e.ssr ? {} : o.use() || {});
      d.proxy = h, d.onLoaded((b) => {
        Wv(b, m), d.proxy = Uv(b);
      });
    }
    return !o.warmupStrategy && (typeof o.trigger > "u" || o.trigger === "client") && (o.warmupStrategy = "preload"), o.warmupStrategy && d.warmup(o.warmupStrategy), e._scripts = Object.assign(e._scripts || {}, {
      [s]: d
    }), d;
  }
  const wn = "%separator", Gv = new RegExp(`${wn}(?:\\s*${wn})*`, "g");
  function zv(e, t, n = false) {
    var _a2;
    let r;
    if (t === "s" || t === "pageTitle") r = e.pageTitle;
    else if (t.includes(".")) {
      const o = t.indexOf(".");
      r = (_a2 = e[t.substring(0, o)]) == null ? void 0 : _a2[t.substring(o + 1)];
    } else r = e[t];
    if (r !== void 0) return n ? (r || "").replace(/\\/g, "\\\\").replace(/</g, "\\u003C").replace(/"/g, '\\"') : r || "";
  }
  function Ho(e, t, n, r = false) {
    if (typeof e != "string" || !e.includes("%")) return e;
    let o = e;
    try {
      o = decodeURI(e);
    } catch {
    }
    const s = o.match(/%\w+(?:\.\w+)?/g);
    if (!s) return e;
    const i = e.includes(wn);
    return e = e.replace(/%\w+(?:\.\w+)?/g, (a) => {
      if (a === wn || !s.includes(a)) return a;
      const l = zv(t, a.slice(1), r);
      return l !== void 0 ? l : a;
    }).trim(), i && (e.endsWith(wn) && (e = e.slice(0, -wn.length)), e.startsWith(wn) && (e = e.slice(wn.length)), e = e.replace(Gv, n || "").trim()), e;
  }
  const Jv = {
    meta: "content",
    link: "href",
    htmlAttrs: "lang"
  }, Yv = [
    "innerHTML",
    "textContent"
  ], Hd = (e) => ({
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
        delete r.separator, r.pageTitle = Ho(r.pageTitle || e._title || "", r, o);
        for (const s of n) {
          if (s.processTemplateParams === false) continue;
          const i = Jv[s.tag];
          if (i && typeof s.props[i] == "string") s.props[i] = Ho(s.props[i], r, o);
          else if (s.processTemplateParams || s.tag === "titleTemplate" || s.tag === "title") for (const a of Yv) typeof s[a] == "string" && (s[a] = Ho(s[a], r, o, s.tag === "script" && s.props.type.endsWith("json")));
        }
        e._templateParams = r, e._separator = o;
      },
      "tags:afterResolve": ({ tagMap: t }) => {
        const n = t.get("title");
        (n == null ? void 0 : n.textContent) && n.processTemplateParams !== false && (n.textContent = Ho(n.textContent, e._templateParams, e._separator));
      }
    }
  });
  function Qv(e = {}) {
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
  const Xv = (e, t) => _e(t) ? we(t) : t, Ya = "usehead";
  function Zv(e) {
    return {
      install(n) {
        n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(Ya, e);
      }
    }.install;
  }
  function Ud() {
    if (Kn()) {
      const e = Re(Ya);
      if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function Wd(e, t = {}) {
    const n = t.head || Ud();
    return n.ssr ? n.push(e || {}, t) : eb(n, e, t);
  }
  function eb(e, t, n = {}) {
    const r = fe(false);
    let o;
    return ln(() => {
      const i = r.value ? {} : Cs(t, Xv);
      o ? o.patch(i) : o = e.push(i, n);
    }), Le() && (xn(() => {
      o.dispose();
    }), hf(() => {
      r.value = true;
    }), pf(() => {
      r.value = false;
    })), o;
  }
  function tb(e = {}, t = {}) {
    (t.head || Ud()).use(Ov);
    const { title: r, titleTemplate: o, ...s } = e;
    return Wd({
      title: r,
      titleTemplate: o,
      _flatMeta: s
    }, t);
  }
  Jn = function(e) {
    var _a2;
    const t = e || ye();
    return ((_a2 = t.ssrContext) == null ? void 0 : _a2.head) || t.runWithContext(() => {
      if (Kn()) {
        const n = Re(Ya);
        if (!n) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
        return n;
      }
    });
  };
  Gs = function(e, t = {}) {
    const n = Jn(t.nuxt);
    return Wd(e, {
      head: n,
      ...t
    });
  };
  Vd = function(e, t = {}) {
    const n = Jn(t.nuxt);
    return tb(e, {
      head: n,
      ...t
    });
  };
  let nb, rb, wc;
  nb = "modulepreload";
  rb = function(e, t) {
    return new URL(e, t).href;
  };
  wc = {};
  wt = function(t, n, r) {
    let o = Promise.resolve();
    if (n && n.length > 0) {
      let u = function(c) {
        return Promise.all(c.map((f) => Promise.resolve(f).then((d) => ({
          status: "fulfilled",
          value: d
        }), (d) => ({
          status: "rejected",
          reason: d
        }))));
      };
      const i = document.getElementsByTagName("link"), a = document.querySelector("meta[property=csp-nonce]"), l = (a == null ? void 0 : a.nonce) || (a == null ? void 0 : a.getAttribute("nonce"));
      o = u(n.map((c) => {
        if (c = rb(c, r), c in wc) return;
        wc[c] = true;
        const f = c.endsWith(".css"), d = f ? '[rel="stylesheet"]' : "";
        if (!!r) for (let m = i.length - 1; m >= 0; m--) {
          const b = i[m];
          if (b.href === c && (!f || b.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${d}`)) return;
        const h = document.createElement("link");
        if (h.rel = f ? "stylesheet" : nb, f || (h.as = "script"), h.crossOrigin = "", h.href = c, l && h.setAttribute("nonce", l), document.head.appendChild(h), f) return new Promise((m, b) => {
          h.addEventListener("load", m), h.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${c}`)));
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
  let ss, is;
  function ob() {
    return ss = $fetch(Ka(`builds/meta/${ut().app.buildId}.json`), {
      responseType: "json"
    }), ss.then((e) => {
      is = Ky(e.matcher);
    }).catch((e) => {
      console.error("[nuxt] Error fetching app manifest.", e);
    }), ss;
  }
  function zs() {
    return ss || ob();
  }
  async function Qa(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await zs(), !is) return console.error("[nuxt] Error creating app manifest matcher.", is), {};
    try {
      return _o({}, ...is.matchAll(t).reverse());
    } catch (n) {
      return console.error("[nuxt] Error matching route rules.", n), {};
    }
  }
  async function Sc(e, t = {}) {
    if (!await Kd(e)) return null;
    const r = await ib(e, t);
    return await qd(r) || null;
  }
  const sb = "_payload.json";
  async function ib(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || Ot(n.pathname, {
      acceptRelative: true
    })) throw new Error("Payload URL must not include hostname: " + e);
    const r = ut(), o = t.hash || (t.fresh ? Date.now() : r.app.buildId), s = r.app.cdnURL, i = s && await Kd(e) ? s : r.app.baseURL;
    return qs(i, n.pathname, sb + (o ? `?${o}` : ""));
  }
  async function qd(e) {
    const t = fetch(e, {
      cache: "force-cache"
    }).then((n) => n.text().then(Gd));
    try {
      return await t;
    } catch (n) {
      console.warn("[nuxt] Cannot load payload ", e, n);
    }
    return null;
  }
  async function Kd(e = zn().path) {
    const t = ye();
    return e = Kt(e), (await zs()).prerendered.includes(e) ? true : t.runWithContext(async () => {
      const r = await Qa({
        path: e
      });
      return !!r.prerender && !r.redirect;
    });
  }
  let $n = null;
  async function ab() {
    var _a2;
    if ($n) return $n;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await Gd(e.textContent || ""), n = e.dataset.src ? await qd(e.dataset.src) : void 0;
    return $n = {
      ...t,
      ...n,
      ...window.__NUXT__
    }, ((_a2 = $n.config) == null ? void 0 : _a2.public) && ($n.config.public = Ye($n.config.public)), $n;
  }
  async function Gd(e) {
    return await bv(e, ye()._payloadRevivers);
  }
  function Xa(e, t) {
    ye()._payloadRevivers[e] = t;
  }
  const lb = Cd(() => {
    Xa("skipHydrate", (e) => {
    });
  });
  var zd = class {
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
  function Jd(e, [t, n, r], o, s = []) {
    e.children ?? (e.children = /* @__PURE__ */ new Map());
    const i = [
      ...s,
      t
    ], a = new zd([], n && o(i, null, ...n));
    if (e.children.set(t, a), r) for (const l of r) Jd(a, l, o, i);
  }
  function Ec(e, t, n, r) {
    e.addEventListener(t, n, r), Gt() && Pt(() => {
      e.removeEventListener(t, n);
    });
  }
  var cb = typeof window < "u";
  function Cc(e, ...t) {
    return typeof e == "function" ? e(...t) : e;
  }
  function ub(e) {
    return e && typeof e == "object" ? JSON.stringify(e, Object.keys(e).sort()) : String(e);
  }
  var Uo = (e) => e.map(ub), fb = () => {
  }, db = {
    gcTime: 1e3 * 60
  }, pb = Symbol(), Yd = {
    staleTime: 1e3 * 5,
    gcTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
    enabled: true
  }, Qd = Symbol(), Xd = () => Re(Qd, Yd);
  function Zd(e) {
    return (e == null ? void 0 : e.placeholderData) != null && e.state.value.status === "pending";
  }
  var kc = {}, hb = "_pc_query", Za = uv(hb, ({ action: e }) => {
    const t = new zd();
    let n;
    const r = iv(go((C, T) => (n = T) && {
      get: () => (C(), t),
      set: fb
    })), o = Gt(), s = rv()._a, i = Xd(), a = e((C, T = null, N, ne = null, re = 0) => o.run(() => {
      const U = Fe({
        data: N,
        error: ne,
        status: ne ? "error" : N !== void 0 ? "success" : "pending"
      }), J = Fe("idle");
      return pr({
        key: C,
        state: U,
        placeholderData: null,
        when: re,
        asyncStatus: J,
        pending: null,
        deps: pr(/* @__PURE__ */ new Set()),
        gcTimeout: void 0,
        ext: kc,
        options: T,
        get stale() {
          return !this.options || !this.when || Date.now() >= this.when + this.options.staleTime;
        },
        get active() {
          return this.deps.size > 0;
        }
      });
    }));
    let l;
    const u = /* @__PURE__ */ new WeakMap(), c = e((C) => {
      let T = u.get(C);
      return T ? (T[2].resume(), T[0] = T[0].map((N) => N.options ? b(N.options, N) : N)) : (l = T = [
        [],
        null,
        o.run(() => qn())
      ], T[1] = s.runWithContext(() => T[2].run(C)), l = null, u.set(C, T)), T;
    });
    function f(C, T) {
      T && (C.deps.add(T), clearTimeout(C.gcTimeout), C.gcTimeout = void 0, n());
    }
    function d(C, T) {
      !T || !C.deps.has(T) || (C.deps.delete(T), n(), p(C));
    }
    function p(C) {
      C.deps.size > 0 || !C.options || (clearTimeout(C.gcTimeout), Number.isFinite(C.options.gcTime) && (C.gcTimeout = setTimeout(() => {
        O(C);
      }, C.options.gcTime)));
    }
    const h = e((C) => Promise.all(m({
      active: true,
      ...C
    }).map((T) => {
      var _a2;
      return w(T), we((_a2 = T.options) == null ? void 0 : _a2.enabled) && y(T);
    }))), m = e((C = {}) => {
      const T = C.key ? r.value.find(Uo(C.key)) : r.value;
      return T ? (C.exact ? T.value ? [
        T.value
      ] : [] : [
        ...T
      ]).filter((N) => (C.stale == null || N.stale === C.stale) && (C.active == null || N.active === C.active) && (!C.status || N.state.value.status === C.status) && (!C.predicate || C.predicate(N))) : [];
    }), b = e((C, T) => {
      var _a2;
      const N = {
        ...i,
        ...C
      }, ne = Uo(we(N.key));
      let re = t.get(ne);
      return re || (t.set(ne, re = a(ne, N, (_a2 = N.initialData) == null ? void 0 : _a2.call(N))), N.placeholderData && re.state.value.status === "pending" && (re.placeholderData = Cc(N.placeholderData, Zd(T) ? T.placeholderData : T == null ? void 0 : T.state.value.data)), n()), re.options = N, re.ext === kc && (re.ext = {}, S(re)), l == null ? void 0 : l[0].push(re), re;
    }), S = e((C) => {
    }), w = e((C) => {
      C.when = 0, E(C);
    }), g = e(async (C, T = C.options) => {
      var _a2;
      return C.state.value.error || C.stale ? ((_a2 = C.pending) == null ? void 0 : _a2.refreshCall) ?? y(C, T) : C.state.value;
    }), y = e(async (C, T = C.options) => {
      var _a2;
      C.asyncStatus.value = "loading";
      const N = new AbortController(), { signal: ne } = N;
      (_a2 = C.pending) == null ? void 0 : _a2.abortController.abort();
      const re = C.pending = {
        abortController: N,
        refreshCall: (async () => T.query({
          signal: ne
        }))().then((U) => (re === C.pending && L(C, {
          data: U,
          error: null,
          status: "success"
        }), C.state.value)).catch((U) => {
          throw re === C.pending && U && U.name !== "AbortError" && L(C, {
            status: "error",
            data: C.state.value.data,
            error: U
          }), U;
        }).finally(() => {
          C.asyncStatus.value = "idle", re === C.pending && (C.pending = null, C.state.value.status !== "pending" && (C.placeholderData = null), C.when = Date.now());
        }),
        when: Date.now()
      };
      return re.refreshCall;
    }), E = e((C, T) => {
      var _a2;
      (_a2 = C.pending) == null ? void 0 : _a2.abortController.abort(T), C.asyncStatus.value = "idle", C.pending = null;
    }), P = e((C, T) => {
      m(C).forEach((N) => E(N, T));
    }), L = e((C, T) => {
      C.state.value = T, C.when = Date.now();
    }), D = e((C, T) => {
      const N = Uo(C);
      let ne = t.get(N);
      ne || t.set(N, ne = a(N)), L(ne, {
        error: null,
        status: "success",
        data: Cc(T, ne.state.value.data)
      }), p(ne), n();
    });
    function R(C) {
      var _a2;
      return (_a2 = r.value.get(Uo(C))) == null ? void 0 : _a2.state.value.data;
    }
    const O = e((C) => {
      t.set(C.key), n();
    });
    return {
      caches: r,
      ensureDefinedQuery: c,
      _s: pr(o),
      setQueryData: D,
      getQueryData: R,
      invalidateQueries: h,
      cancelQueries: P,
      invalidate: w,
      fetch: y,
      refresh: g,
      ensure: b,
      extend: S,
      track: f,
      untrack: d,
      cancel: E,
      create: a,
      remove: O,
      setEntryState: L,
      getEntries: m
    };
  });
  function mb(e, t) {
    for (const n of t) Jd(e.caches, n, e.create);
  }
  Mk = function(e) {
    const t = Za(), n = Xd(), r = Le(), o = Gt(), s = {
      ...n,
      ...e
    }, { refetchOnMount: i, refetchOnReconnect: a, refetchOnWindowFocus: l, enabled: u } = s;
    let c;
    const f = W(() => (o == null ? void 0 : o._isPaused) ? c : c = t.ensure(s, c));
    c = f.value;
    const d = () => f.value.state.value, p = (y) => t.refresh(f.value, s).catch(y || d), h = (y) => t.fetch(f.value, s).catch(y || d), m = W(() => Zd(f.value)), b = W(() => m.value ? {
      status: "success",
      data: f.value.placeholderData,
      error: null
    } : f.value.state.value), S = {};
    for (const y in c.ext) S[y] = W({
      get: () => we(f.value.ext[y]),
      set(E) {
        const P = f.value.ext[y];
        _e(P) ? P.value = E : f.value.ext[y] = E;
      }
    });
    const w = {
      ...S,
      state: b,
      status: W(() => b.value.status),
      data: W(() => b.value.data),
      error: W(() => f.value.state.value.error),
      asyncStatus: W(() => f.value.asyncStatus.value),
      isPlaceholderData: m,
      isPending: W(() => b.value.status === "pending"),
      isLoading: W(() => f.value.asyncStatus.value === "loading"),
      refresh: p,
      refetch: h
    };
    let g = false;
    return r ? (ot(() => {
      g = true, t.track(c, r);
    }), Ar(() => {
      t.untrack(c, r);
    })) : (g = true, o && (t.track(c, o), Pt(() => {
      t.untrack(c, o);
    }))), Oe(f, (y, E) => {
      g && (E && (t.untrack(E, r), t.untrack(E, o)), t.track(y, r), t.track(y, o), we(u) && p());
    }, {
      immediate: true
    }), typeof u != "boolean" && Oe(u, (y) => {
      y && p();
    }), r && ot(() => {
      if (we(u)) {
        const y = we(i);
        y === "always" ? h() : (y || w.status.value === "pending") && p();
      }
    }), cb && (l && Ec(document, "visibilitychange", () => {
      const y = we(l);
      document.visibilityState === "visible" && we(u) && (y === "always" ? h() : y && p());
    }), a && Ec(window, "online", () => {
      if (we(u)) {
        const y = we(a);
        y === "always" ? h() : y && p();
      }
    })), w;
  };
  var gb = (e, t = {}) => {
    const { pinia: n = e.config.globalProperties.$pinia, plugins: r, queryOptions: o, mutationOptions: s = {} } = t;
    e.provide(Qd, {
      ...Yd,
      ...o
    }), e.provide(pb, {
      ...db,
      ...s
    });
    const i = Za(n);
    r == null ? void 0 : r.forEach((a) => a({
      scope: i._s,
      queryCache: i,
      pinia: n
    }));
  };
  Tc = function(e) {
    return typeof e == "string" ? `'${e}'` : new yb().serialize(e);
  };
  const yb = function() {
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
  vb = function(e, t) {
    return e === t || Tc(e) === Tc(t);
  };
  let vi, bb, _b, wb, Sb;
  vi = (e) => typeof e == "function";
  bb = (e) => e !== null && typeof e == "object";
  _b = (e) => (bb(e) || vi(e)) && vi(e.then) && vi(e.catch);
  wb = Object.prototype.toString;
  Sb = (e) => wb.call(e);
  Ik = (e) => Sb(e) === "[object Object]";
  const ar = typeof document < "u";
  function ep(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function Eb(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ep(e.default);
  }
  const me = Object.assign;
  function bi(e, t) {
    const n = {};
    for (const r in t) {
      const o = t[r];
      n[r] = xt(o) ? o.map(e) : e(o);
    }
    return n;
  }
  const Qr = () => {
  }, xt = Array.isArray, tp = /#/g, Cb = /&/g, kb = /\//g, Tb = /=/g, Rb = /\?/g, np = /\+/g, Pb = /%5B/g, Ab = /%5D/g, rp = /%5E/g, xb = /%60/g, op = /%7B/g, Ob = /%7C/g, sp = /%7D/g, Lb = /%20/g;
  function el(e) {
    return encodeURI("" + e).replace(Ob, "|").replace(Pb, "[").replace(Ab, "]");
  }
  function $b(e) {
    return el(e).replace(op, "{").replace(sp, "}").replace(rp, "^");
  }
  function ma(e) {
    return el(e).replace(np, "%2B").replace(Lb, "+").replace(tp, "%23").replace(Cb, "%26").replace(xb, "`").replace(op, "{").replace(sp, "}").replace(rp, "^");
  }
  function Mb(e) {
    return ma(e).replace(Tb, "%3D");
  }
  function Ib(e) {
    return el(e).replace(tp, "%23").replace(Rb, "%3F");
  }
  function Db(e) {
    return e == null ? "" : Ib(e).replace(kb, "%2F");
  }
  function uo(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const Nb = /\/$/, Bb = (e) => e.replace(Nb, "");
  function _i(e, t, n = "/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = Ub(r ?? t, n), {
      fullPath: r + (s && "?") + s + i,
      path: r,
      query: o,
      hash: uo(i)
    };
  }
  function jb(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Rc(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Fb(e, t, n) {
    const r = t.matched.length - 1, o = n.matched.length - 1;
    return r > -1 && r === o && Cr(t.matched[r], n.matched[o]) && ip(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function Cr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function ip(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (const n in e) if (!Hb(e[n], t[n])) return false;
    return true;
  }
  function Hb(e, t) {
    return xt(e) ? Pc(e, t) : xt(t) ? Pc(t, e) : e === t;
  }
  function Pc(e, t) {
    return xt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function Ub(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, a;
    for (i = 0; i < r.length; i++) if (a = r[i], a !== ".") if (a === "..") s > 1 && s--;
    else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
  }
  const yt = {
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
  var fo;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(fo || (fo = {}));
  var Xr;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(Xr || (Xr = {}));
  function Wb(e) {
    if (!e) if (ar) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Bb(e);
  }
  const Vb = /^[^#]+#/;
  function qb(e, t) {
    return e.replace(Vb, "#") + t;
  }
  function Kb(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const Js = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Gb(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!o) return;
      t = Kb(o, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Ac(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const ga = /* @__PURE__ */ new Map();
  function zb(e, t) {
    ga.set(e, t);
  }
  function Jb(e) {
    const t = ga.get(e);
    return ga.delete(e), t;
  }
  let Yb = () => location.protocol + "//" + location.host;
  function ap(e, t) {
    const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
    if (s > -1) {
      let a = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), Rc(l, "");
    }
    return Rc(n, e) + r + o;
  }
  function Qb(e, t, n, r) {
    let o = [], s = [], i = null;
    const a = ({ state: d }) => {
      const p = ap(e, location), h = n.value, m = t.value;
      let b = 0;
      if (d) {
        if (n.value = p, t.value = d, i && i === h) {
          i = null;
          return;
        }
        b = m ? d.position - m.position : 0;
      } else r(p);
      o.forEach((S) => {
        S(n.value, h, {
          delta: b,
          type: fo.pop,
          direction: b ? b > 0 ? Xr.forward : Xr.back : Xr.unknown
        });
      });
    };
    function l() {
      i = n.value;
    }
    function u(d) {
      o.push(d);
      const p = () => {
        const h = o.indexOf(d);
        h > -1 && o.splice(h, 1);
      };
      return s.push(p), p;
    }
    function c() {
      const { history: d } = window;
      d.state && d.replaceState(me({}, d.state, {
        scroll: Js()
      }), "");
    }
    function f() {
      for (const d of s) d();
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
  function xc(e, t, n, r = false, o = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: o ? Js() : null
    };
  }
  function Xb(e) {
    const { history: t, location: n } = window, r = {
      value: ap(e, n)
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
      const f = e.indexOf("#"), d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Yb() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](u, "", d), o.value = u;
      } catch (p) {
        console.error(p), n[c ? "replace" : "assign"](d);
      }
    }
    function i(l, u) {
      const c = me({}, t.state, xc(o.value.back, l, o.value.forward, true), u, {
        position: o.value.position
      });
      s(l, c, true), r.value = l;
    }
    function a(l, u) {
      const c = me({}, o.value, t.state, {
        forward: l,
        scroll: Js()
      });
      s(c.current, c, true);
      const f = me({}, xc(r.value, l, null), {
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
  function Zb(e) {
    e = Wb(e);
    const t = Xb(e), n = Qb(e, t.state, t.location, t.replace);
    function r(s, i = true) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = me({
      location: "",
      base: e,
      go: r,
      createHref: qb.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(o, "state", {
      enumerable: true,
      get: () => t.state.value
    }), o;
  }
  function e_(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function lp(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const cp = Symbol("");
  var Oc;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(Oc || (Oc = {}));
  function kr(e, t) {
    return me(new Error(), {
      type: e,
      [cp]: true
    }, t);
  }
  function Dt(e, t) {
    return e instanceof Error && cp in e && (t == null || !!(e.type & t));
  }
  const Lc = "[^/]+?", t_ = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, n_ = /[.+*?^${}()[\]/\\]/g;
  function r_(e, t) {
    const n = me({}, t_, t), r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const u of e) {
      const c = u.length ? [] : [
        90
      ];
      n.strict && !u.length && (o += "/");
      for (let f = 0; f < u.length; f++) {
        const d = u[f];
        let p = 40 + (n.sensitive ? 0.25 : 0);
        if (d.type === 0) f || (o += "/"), o += d.value.replace(n_, "\\$&"), p += 40;
        else if (d.type === 1) {
          const { value: h, repeatable: m, optional: b, regexp: S } = d;
          s.push({
            name: h,
            repeatable: m,
            optional: b
          });
          const w = S || Lc;
          if (w !== Lc) {
            p += 10;
            try {
              new RegExp(`(${w})`);
            } catch (y) {
              throw new Error(`Invalid custom RegExp for param "${h}" (${w}): ` + y.message);
            }
          }
          let g = m ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
          f || (g = b && u.length < 2 ? `(?:/${g})` : "/" + g), b && (g += "?"), o += g, p += 20, b && (p += -8), m && (p += -20), w === ".*" && (p += -50);
        }
        c.push(p);
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
      for (let d = 1; d < c.length; d++) {
        const p = c[d] || "", h = s[d - 1];
        f[h.name] = p && h.repeatable ? p.split("/") : p;
      }
      return f;
    }
    function l(u) {
      let c = "", f = false;
      for (const d of e) {
        (!f || !c.endsWith("/")) && (c += "/"), f = false;
        for (const p of d) if (p.type === 0) c += p.value;
        else if (p.type === 1) {
          const { value: h, repeatable: m, optional: b } = p, S = h in u ? u[h] : "";
          if (xt(S) && !m) throw new Error(`Provided param "${h}" is an array but it is not repeatable (* or + modifiers)`);
          const w = xt(S) ? S.join("/") : S;
          if (!w) if (b) d.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
          else throw new Error(`Missing required param "${h}"`);
          c += w;
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
  function o_(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function up(e, t) {
    let n = 0;
    const r = e.score, o = t.score;
    for (; n < r.length && n < o.length; ) {
      const s = o_(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if ($c(r)) return 1;
      if ($c(o)) return -1;
    }
    return o.length - r.length;
  }
  function $c(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const s_ = {
    type: 0,
    value: ""
  }, i_ = /[a-zA-Z0-9_]/;
  function a_(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        s_
      ]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
    function t(p) {
      throw new Error(`ERR (${n})/"${u}": ${p}`);
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
    function d() {
      u += l;
    }
    for (; a < e.length; ) {
      if (l = e[a++], l === "\\" && n !== 2) {
        r = n, n = 4;
        continue;
      }
      switch (n) {
        case 0:
          l === "/" ? (u && f(), i()) : l === ":" ? (f(), n = 1) : d();
          break;
        case 4:
          d(), n = r;
          break;
        case 1:
          l === "(" ? n = 2 : i_.test(l) ? d() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
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
  function l_(e, t, n) {
    const r = r_(a_(e.path), n), o = me(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
  }
  function c_(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = Nc({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function o(f) {
      return r.get(f);
    }
    function s(f, d, p) {
      const h = !p, m = Ic(f);
      m.aliasOf = p && p.record;
      const b = Nc(t, f), S = [
        m
      ];
      if ("alias" in f) {
        const y = typeof f.alias == "string" ? [
          f.alias
        ] : f.alias;
        for (const E of y) S.push(Ic(me({}, m, {
          components: p ? p.record.components : m.components,
          path: E,
          aliasOf: p ? p.record : m
        })));
      }
      let w, g;
      for (const y of S) {
        const { path: E } = y;
        if (d && E[0] !== "/") {
          const P = d.record.path, L = P[P.length - 1] === "/" ? "" : "/";
          y.path = d.record.path + (E && L + E);
        }
        if (w = l_(y, d, b), p ? p.alias.push(w) : (g = g || w, g !== w && g.alias.push(w), h && f.name && !Dc(w) && i(f.name)), fp(w) && l(w), m.children) {
          const P = m.children;
          for (let L = 0; L < P.length; L++) s(P[L], w, p && p.children[L]);
        }
        p = p || w;
      }
      return g ? () => {
        i(g);
      } : Qr;
    }
    function i(f) {
      if (lp(f)) {
        const d = r.get(f);
        d && (r.delete(f), n.splice(n.indexOf(d), 1), d.children.forEach(i), d.alias.forEach(i));
      } else {
        const d = n.indexOf(f);
        d > -1 && (n.splice(d, 1), f.record.name && r.delete(f.record.name), f.children.forEach(i), f.alias.forEach(i));
      }
    }
    function a() {
      return n;
    }
    function l(f) {
      const d = d_(f, n);
      n.splice(d, 0, f), f.record.name && !Dc(f) && r.set(f.record.name, f);
    }
    function u(f, d) {
      let p, h = {}, m, b;
      if ("name" in f && f.name) {
        if (p = r.get(f.name), !p) throw kr(1, {
          location: f
        });
        b = p.record.name, h = me(Mc(d.params, p.keys.filter((g) => !g.optional).concat(p.parent ? p.parent.keys.filter((g) => g.optional) : []).map((g) => g.name)), f.params && Mc(f.params, p.keys.map((g) => g.name))), m = p.stringify(h);
      } else if (f.path != null) m = f.path, p = n.find((g) => g.re.test(m)), p && (h = p.parse(m), b = p.record.name);
      else {
        if (p = d.name ? r.get(d.name) : n.find((g) => g.re.test(d.path)), !p) throw kr(1, {
          location: f,
          currentLocation: d
        });
        b = p.record.name, h = me({}, d.params, f.params), m = p.stringify(h);
      }
      const S = [];
      let w = p;
      for (; w; ) S.unshift(w.record), w = w.parent;
      return {
        name: b,
        path: m,
        params: h,
        matched: S,
        meta: f_(S)
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
  function Mc(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function Ic(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: u_(e),
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
  function u_(e) {
    const t = {}, n = e.props || false;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function Dc(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function f_(e) {
    return e.reduce((t, n) => me(t, n.meta), {});
  }
  function Nc(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function d_(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const s = n + r >> 1;
      up(e, t[s]) < 0 ? r = s : n = s + 1;
    }
    const o = p_(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r;
  }
  function p_(e) {
    let t = e;
    for (; t = t.parent; ) if (fp(t) && up(e, t) === 0) return t;
  }
  function fp({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function h_(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(np, " "), i = s.indexOf("="), a = uo(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : uo(s.slice(i + 1));
      if (a in t) {
        let u = t[a];
        xt(u) || (u = t[a] = [
          u
        ]), u.push(l);
      } else t[a] = l;
    }
    return t;
  }
  function Bc(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = Mb(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (xt(r) ? r.map((s) => s && ma(s)) : [
        r && ma(r)
      ]).forEach((s) => {
        s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
      });
    }
    return t;
  }
  function m_(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = xt(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
    }
    return t;
  }
  const g_ = Symbol(""), jc = Symbol(""), So = Symbol(""), tl = Symbol(""), ya = Symbol("");
  function jr() {
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
  function Sn(e, t, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, l) => {
      const u = (d) => {
        d === false ? l(kr(4, {
          from: n,
          to: t
        })) : d instanceof Error ? l(d) : e_(d) ? l(kr(2, {
          from: t,
          to: d
        })) : (i && r.enterCallbacks[o] === i && typeof d == "function" && i.push(d), a());
      }, c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((d) => l(d));
    });
  }
  function wi(e, t, n, r, o = (s) => s()) {
    const s = [];
    for (const i of e) for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a])) if (ep(l)) {
        const c = (l.__vccOpts || l)[t];
        c && s.push(Sn(c, n, r, i, a, o));
      } else {
        let u = l();
        s.push(() => u.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
          const f = Eb(c) ? c.default : c;
          i.mods[a] = c, i.components[a] = f;
          const p = (f.__vccOpts || f)[t];
          return p && Sn(p, n, r, i, a, o)();
        }));
      }
    }
    return s;
  }
  function Fc(e) {
    const t = Re(So), n = Re(tl), r = W(() => {
      const l = B(e.to);
      return t.resolve(l);
    }), o = W(() => {
      const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const d = f.findIndex(Cr.bind(null, c));
      if (d > -1) return d;
      const p = Hc(l[u - 2]);
      return u > 1 && Hc(c) === p && f[f.length - 1].path !== p ? f.findIndex(Cr.bind(null, l[u - 2])) : d;
    }), s = W(() => o.value > -1 && w_(n.params, r.value.params)), i = W(() => o.value > -1 && o.value === n.matched.length - 1 && ip(n.params, r.value.params));
    function a(l = {}) {
      if (__(l)) {
        const u = t[B(e.replace) ? "replace" : "push"](B(e.to)).catch(Qr);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: W(() => r.value.href),
      isActive: s,
      isExactActive: i,
      navigate: a
    };
  }
  function y_(e) {
    return e.length === 1 ? e[0] : e;
  }
  const v_ = te({
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
    useLink: Fc,
    setup(e, { slots: t }) {
      const n = Ye(Fc(e)), { options: r } = Re(So), o = W(() => ({
        [Uc(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [Uc(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const s = t.default && y_(t.default(n));
        return e.custom ? s : de("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: o.value
        }, s);
      };
    }
  }), b_ = v_;
  function __(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function w_(e, t) {
    for (const n in t) {
      const r = t[n], o = e[n];
      if (typeof r == "string") {
        if (r !== o) return false;
      } else if (!xt(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return false;
    }
    return true;
  }
  function Hc(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const Uc = (e, t, n) => e ?? t ?? n, S_ = te({
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
      const r = Re(ya), o = W(() => e.route || r.value), s = Re(jc, 0), i = W(() => {
        let u = B(s);
        const { matched: c } = o.value;
        let f;
        for (; (f = c[u]) && !f.components; ) u++;
        return u;
      }), a = W(() => o.value.matched[i.value]);
      Vt(jc, W(() => i.value + 1)), Vt(g_, a), Vt(ya, o);
      const l = fe();
      return Oe(() => [
        l.value,
        a.value,
        e.name
      ], ([u, c, f], [d, p, h]) => {
        c && (c.instances[f] = u, p && p !== c && u && u === d && (c.leaveGuards.size || (c.leaveGuards = p.leaveGuards), c.updateGuards.size || (c.updateGuards = p.updateGuards))), u && c && (!p || !Cr(c, p) || !d) && (c.enterCallbacks[f] || []).forEach((m) => m(u));
      }, {
        flush: "post"
      }), () => {
        const u = o.value, c = e.name, f = a.value, d = f && f.components[c];
        if (!d) return Wc(n.default, {
          Component: d,
          route: u
        });
        const p = f.props[c], h = p ? p === true ? u.params : typeof p == "function" ? p(u) : p : null, b = de(d, me({}, h, t, {
          onVnodeUnmounted: (S) => {
            S.component.isUnmounted && (f.instances[c] = null);
          },
          ref: l
        }));
        return Wc(n.default, {
          Component: b,
          route: u
        }) || b;
      };
    }
  });
  function Wc(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const dp = S_;
  function E_(e) {
    const t = c_(e.routes, e), n = e.parseQuery || h_, r = e.stringifyQuery || Bc, o = e.history, s = jr(), i = jr(), a = jr(), l = Fe(yt);
    let u = yt;
    ar && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = bi.bind(null, (x) => "" + x), f = bi.bind(null, Db), d = bi.bind(null, uo);
    function p(x, G) {
      let q, Q;
      return lp(x) ? (q = t.getRecordMatcher(x), Q = G) : Q = x, t.addRoute(Q, q);
    }
    function h(x) {
      const G = t.getRecordMatcher(x);
      G && t.removeRoute(G);
    }
    function m() {
      return t.getRoutes().map((x) => x.record);
    }
    function b(x) {
      return !!t.getRecordMatcher(x);
    }
    function S(x, G) {
      if (G = me({}, G || l.value), typeof x == "string") {
        const _ = _i(n, x, G.path), k = t.resolve({
          path: _.path
        }, G), $ = o.createHref(_.fullPath);
        return me(_, k, {
          params: d(k.params),
          hash: uo(_.hash),
          redirectedFrom: void 0,
          href: $
        });
      }
      let q;
      if (x.path != null) q = me({}, x, {
        path: _i(n, x.path, G.path).path
      });
      else {
        const _ = me({}, x.params);
        for (const k in _) _[k] == null && delete _[k];
        q = me({}, x, {
          params: f(_)
        }), G.params = f(G.params);
      }
      const Q = t.resolve(q, G), he = x.hash || "";
      Q.params = c(d(Q.params));
      const xe = jb(r, me({}, x, {
        hash: $b(he),
        path: Q.path
      })), v = o.createHref(xe);
      return me({
        fullPath: xe,
        hash: he,
        query: r === Bc ? m_(x.query) : x.query || {}
      }, Q, {
        redirectedFrom: void 0,
        href: v
      });
    }
    function w(x) {
      return typeof x == "string" ? _i(n, x, l.value.path) : me({}, x);
    }
    function g(x, G) {
      if (u !== x) return kr(8, {
        from: G,
        to: x
      });
    }
    function y(x) {
      return L(x);
    }
    function E(x) {
      return y(me(w(x), {
        replace: true
      }));
    }
    function P(x) {
      const G = x.matched[x.matched.length - 1];
      if (G && G.redirect) {
        const { redirect: q } = G;
        let Q = typeof q == "function" ? q(x) : q;
        return typeof Q == "string" && (Q = Q.includes("?") || Q.includes("#") ? Q = w(Q) : {
          path: Q
        }, Q.params = {}), me({
          query: x.query,
          hash: x.hash,
          params: Q.path != null ? {} : x.params
        }, Q);
      }
    }
    function L(x, G) {
      const q = u = S(x), Q = l.value, he = x.state, xe = x.force, v = x.replace === true, _ = P(q);
      if (_) return L(me(w(_), {
        state: typeof _ == "object" ? me({}, he, _.state) : he,
        force: xe,
        replace: v
      }), G || q);
      const k = q;
      k.redirectedFrom = G;
      let $;
      return !xe && Fb(r, Q, q) && ($ = kr(16, {
        to: k,
        from: Q
      }), Lt(Q, Q, true, false)), ($ ? Promise.resolve($) : O(k, Q)).catch((A) => Dt(A) ? Dt(A, 2) ? A : fn(A) : Y(A, k, Q)).then((A) => {
        if (A) {
          if (Dt(A, 2)) return L(me({
            replace: v
          }, w(A.to), {
            state: typeof A.to == "object" ? me({}, he, A.to.state) : he,
            force: xe
          }), G || k);
        } else A = T(k, Q, true, v, he);
        return C(k, Q, A), A;
      });
    }
    function D(x, G) {
      const q = g(x, G);
      return q ? Promise.reject(q) : Promise.resolve();
    }
    function R(x) {
      const G = er.values().next().value;
      return G && typeof G.runWithContext == "function" ? G.runWithContext(x) : x();
    }
    function O(x, G) {
      let q;
      const [Q, he, xe] = C_(x, G);
      q = wi(Q.reverse(), "beforeRouteLeave", x, G);
      for (const _ of Q) _.leaveGuards.forEach((k) => {
        q.push(Sn(k, x, G));
      });
      const v = D.bind(null, x, G);
      return q.push(v), mt(q).then(() => {
        q = [];
        for (const _ of s.list()) q.push(Sn(_, x, G));
        return q.push(v), mt(q);
      }).then(() => {
        q = wi(he, "beforeRouteUpdate", x, G);
        for (const _ of he) _.updateGuards.forEach((k) => {
          q.push(Sn(k, x, G));
        });
        return q.push(v), mt(q);
      }).then(() => {
        q = [];
        for (const _ of xe) if (_.beforeEnter) if (xt(_.beforeEnter)) for (const k of _.beforeEnter) q.push(Sn(k, x, G));
        else q.push(Sn(_.beforeEnter, x, G));
        return q.push(v), mt(q);
      }).then(() => (x.matched.forEach((_) => _.enterCallbacks = {}), q = wi(xe, "beforeRouteEnter", x, G, R), q.push(v), mt(q))).then(() => {
        q = [];
        for (const _ of i.list()) q.push(Sn(_, x, G));
        return q.push(v), mt(q);
      }).catch((_) => Dt(_, 8) ? _ : Promise.reject(_));
    }
    function C(x, G, q) {
      a.list().forEach((Q) => R(() => Q(x, G, q)));
    }
    function T(x, G, q, Q, he) {
      const xe = g(x, G);
      if (xe) return xe;
      const v = G === yt, _ = ar ? history.state : {};
      q && (Q || v ? o.replace(x.fullPath, me({
        scroll: v && _ && _.scroll
      }, he)) : o.push(x.fullPath, he)), l.value = x, Lt(x, G, q, v), fn();
    }
    let N;
    function ne() {
      N || (N = o.listen((x, G, q) => {
        if (!xo.listening) return;
        const Q = S(x), he = P(Q);
        if (he) {
          L(me(he, {
            replace: true,
            force: true
          }), Q).catch(Qr);
          return;
        }
        u = Q;
        const xe = l.value;
        ar && zb(Ac(xe.fullPath, q.delta), Js()), O(Q, xe).catch((v) => Dt(v, 12) ? v : Dt(v, 2) ? (L(me(w(v.to), {
          force: true
        }), Q).then((_) => {
          Dt(_, 20) && !q.delta && q.type === fo.pop && o.go(-1, false);
        }).catch(Qr), Promise.reject()) : (q.delta && o.go(-q.delta, false), Y(v, Q, xe))).then((v) => {
          v = v || T(Q, xe, false), v && (q.delta && !Dt(v, 8) ? o.go(-q.delta, false) : q.type === fo.pop && Dt(v, 20) && o.go(-1, false)), C(Q, xe, v);
        }).catch(Qr);
      }));
    }
    let re = jr(), U = jr(), J;
    function Y(x, G, q) {
      fn(x);
      const Q = U.list();
      return Q.length ? Q.forEach((he) => he(x, G, q)) : console.error(x), Promise.reject(x);
    }
    function Ie() {
      return J && l.value !== yt ? Promise.resolve() : new Promise((x, G) => {
        re.add([
          x,
          G
        ]);
      });
    }
    function fn(x) {
      return J || (J = !x, ne(), re.list().forEach(([G, q]) => x ? q(x) : G()), re.reset()), x;
    }
    function Lt(x, G, q, Q) {
      const { scrollBehavior: he } = e;
      if (!ar || !he) return Promise.resolve();
      const xe = !q && Jb(Ac(x.fullPath, 0)) || (Q || !q) && history.state && history.state.scroll || null;
      return je().then(() => he(x, G, xe)).then((v) => v && Gb(v)).catch((v) => Y(v, x, G));
    }
    const it = (x) => o.go(x);
    let Zn;
    const er = /* @__PURE__ */ new Set(), xo = {
      currentRoute: l,
      listening: true,
      addRoute: p,
      removeRoute: h,
      clearRoutes: t.clearRoutes,
      hasRoute: b,
      getRoutes: m,
      resolve: S,
      options: e,
      push: y,
      replace: E,
      go: it,
      back: () => it(-1),
      forward: () => it(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: U.add,
      isReady: Ie,
      install(x) {
        const G = this;
        x.component("RouterLink", b_), x.component("RouterView", dp), x.config.globalProperties.$router = G, Object.defineProperty(x.config.globalProperties, "$route", {
          enumerable: true,
          get: () => B(l)
        }), ar && !Zn && l.value === yt && (Zn = true, y(o.location).catch((he) => {
        }));
        const q = {};
        for (const he in yt) Object.defineProperty(q, he, {
          get: () => l.value[he],
          enumerable: true
        });
        x.provide(So, G), x.provide(tl, Ut(q)), x.provide(ya, l);
        const Q = x.unmount;
        er.add(x), x.unmount = function() {
          er.delete(x), er.size < 1 && (u = yt, N && N(), N = null, l.value = yt, Zn = false, J = false), Q();
        };
      }
    };
    function mt(x) {
      return x.reduce((G, q) => G.then(() => R(q)), Promise.resolve());
    }
    return xo;
  }
  function C_(e, t) {
    const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
      const a = t.matched[i];
      a && (e.matched.find((u) => Cr(u, a)) ? r.push(a) : n.push(a));
      const l = e.matched[i];
      l && (t.matched.find((u) => Cr(u, l)) || o.push(l));
    }
    return [
      n,
      r,
      o
    ];
  }
  Dk = function() {
    return Re(So);
  };
  pp = function(e) {
    return Re(tl);
  };
  const hp = (e, t) => ({
    default: () => {
      var _a2;
      return e ? de(eg, e === true ? {} : e, t) : (_a2 = t.default) == null ? void 0 : _a2.call(t);
    }
  }), k_ = /(:\w+)\([^)]+\)/g, T_ = /(:\w+)[?+*]/g, R_ = /:\w+/g;
  function Vc(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(k_, "$1").replace(T_, "$1").replace(R_, (n) => {
      var _a2;
      return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
    });
    return typeof t == "function" ? t(e) : t;
  }
  function mp(e, t) {
    return e === t || t === yt ? false : Vc(e) !== Vc(t) ? true : !e.matched.every((r, o) => {
      var _a2, _b2;
      return r.components && r.components.default === ((_b2 = (_a2 = t.matched[o]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default);
    });
  }
  function P_(e, t = false) {
    if (e) {
      if (e.nodeName === "#comment" && e.nodeValue === "[") return gp(e, [], t);
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
  function gp(e, t = [], n = false) {
    var _a2;
    if (e && e.nodeName) {
      if (x_(e)) return t;
      if (!A_(e)) {
        const r = e.cloneNode(true);
        n && ((_a2 = r.querySelectorAll) == null ? void 0 : _a2.call(r, "[data-island-slot]").forEach((o) => {
          o.innerHTML = "";
        })), t.push(r.outerHTML);
      }
      gp(e.nextSibling, t, n);
    }
    return t;
  }
  function Si(e, t) {
    const n = e ? P_(e) : [
      t
    ];
    return n ? Fm(n.join(""), n.length) : de("div");
  }
  function A_(e) {
    return e.nodeName === "#comment" && e.nodeValue === "[";
  }
  function x_(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]";
  }
  let yp, Wo, Ei;
  yp = Symbol.for("nuxt:client-only");
  Wo = "<div></div>";
  Nk = te({
    name: "ClientOnly",
    inheritAttrs: false,
    props: [
      "fallback",
      "placeholder",
      "placeholderTag",
      "fallbackTag"
    ],
    setup(e, { slots: t, attrs: n }) {
      const r = Fe(false);
      ot(() => {
        r.value = true;
      });
      const o = Le();
      return o && (o._nuxtClientOnly = true), Vt(yp, true), () => {
        var _a2;
        if (r.value) {
          const l = (_a2 = t.default) == null ? void 0 : _a2.call(t);
          return l && l.length === 1 ? [
            ct(l[0], n)
          ] : l;
        }
        const s = t.fallback || t.placeholder;
        if (s) return de(s);
        const i = e.fallback || e.placeholder || "", a = e.fallbackTag || e.placeholderTag || "span";
        return be(a, n, i);
      };
    }
  });
  Ei = /* @__PURE__ */ new WeakMap();
  Bk = function(e) {
    if (Ei.has(e)) return Ei.get(e);
    const t = {
      ...e
    };
    return t.render ? t.render = (n, r, o, s, i, a) => {
      var _a2;
      if (s.mounted$ ?? n.mounted$) {
        const l = (_a2 = e.render) == null ? void 0 : _a2.bind(n)(n, r, o, s, i, a);
        return l.children === null || typeof l.children == "string" ? ct(l) : de(l);
      }
      return Si(n._.vnode.el, Wo);
    } : t.template && (t.template = `
      <template v-if="mounted$">${e.template}</template>
      <template v-else>${Wo}</template>
    `), t.setup = (n, r) => {
      var _a2;
      const o = ye(), s = Fe(o.isHydrating === false), i = Le();
      if (o.isHydrating) {
        const l = {
          ...i.attrs
        }, u = O_(i);
        for (const c in l) delete i.attrs[c];
        ot(() => {
          Object.assign(i.attrs, l), i.vnode.dirs = u;
        });
      }
      ot(() => {
        s.value = true;
      });
      const a = ((_a2 = e.setup) == null ? void 0 : _a2.call(e, n, r)) || {};
      return _b(a) ? Promise.resolve(a).then((l) => typeof l != "function" ? (l || (l = {}), l.mounted$ = s, l) : (...u) => {
        if (s.value || !o.isHydrating) {
          const c = l(...u);
          return c.children === null || typeof c.children == "string" ? ct(c) : de(c);
        }
        return Si(i == null ? void 0 : i.vnode.el, Wo);
      }) : typeof a == "function" ? (...l) => {
        if (s.value) {
          const u = a(...l), c = t.inheritAttrs !== false ? r.attrs : void 0;
          return u.children === null || typeof u.children == "string" ? ct(u, c) : de(u, c);
        }
        return Si(i == null ? void 0 : i.vnode.el, Wo);
      } : Object.assign(a, {
        mounted$: s
      });
    }, Ei.set(e, t), t;
  };
  function O_(e) {
    if (!e || !e.vnode.dirs) return null;
    const t = e.vnode.dirs;
    return e.vnode.dirs = null, t;
  }
  let va, L_;
  va = globalThis.requestIdleCallback || ((e) => {
    const t = Date.now(), n = {
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout(() => {
      e(n);
    }, 1);
  });
  L_ = globalThis.cancelIdleCallback || ((e) => {
    clearTimeout(e);
  });
  Yn = (e) => {
    const t = ye();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
      va(() => e());
    }) : va(() => e());
  };
  jk = function(...e) {
    var _a2;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    $_(e[0], e[1]) && e.unshift(t);
    let [n, r, o = {}] = e;
    const s = W(() => we(n));
    if (typeof s.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = ye();
    o.server ?? (o.server = true), o.default ?? (o.default = I_), o.getCachedData ?? (o.getCachedData = bp), o.lazy ?? (o.lazy = false), o.immediate ?? (o.immediate = true), o.deep ?? (o.deep = Dy.deep), o.dedupe ?? (o.dedupe = "cancel"), o._functionName, i._asyncData[s.value];
    const a = {
      cause: "initial",
      dedupe: o.dedupe
    };
    ((_a2 = i._asyncData[s.value]) == null ? void 0 : _a2._init) || (a.cachedData = o.getCachedData(s.value, i, {
      cause: "initial"
    }), i._asyncData[s.value] = qc(i, s.value, r, o, a.cachedData));
    const l = i._asyncData[s.value];
    l._deps++;
    const u = () => i._asyncData[s.value].execute(a), c = o.server !== false && i.payload.serverRendered;
    {
      let p = function(w) {
        const g = i._asyncData[w];
        (g == null ? void 0 : g._deps) && (g._deps--, g._deps === 0 && (g == null ? void 0 : g._off()));
      };
      const h = Le();
      if (h && c && o.immediate && !h.sp && (h.sp = []), h && !h._nuxtOnBeforeMountCbs) {
        h._nuxtOnBeforeMountCbs = [];
        const w = h._nuxtOnBeforeMountCbs;
        gf(() => {
          w.forEach((g) => {
            g();
          }), w.splice(0, w.length);
        }), Ar(() => w.splice(0, w.length));
      }
      const m = h && (h._nuxtClientOnly || Re(yp, false));
      c && i.isHydrating && (l.error.value || l.data.value !== void 0) ? l.status.value = l.error.value ? "error" : "success" : h && (!m && i.payload.serverRendered && i.isHydrating || o.lazy) && o.immediate ? h._nuxtOnBeforeMountCbs.push(u) : o.immediate && l.status.value !== "success" && u();
      const b = Gt(), S = Oe([
        s,
        ...o.watch || []
      ], ([w], [g]) => {
        var _a3, _b2, _c2;
        if ((w || g) && w !== g) {
          const y = ((_a3 = i._asyncData[g]) == null ? void 0 : _a3.data.value) !== void 0, E = i._asyncDataPromises[g] !== void 0;
          g && p(g);
          const P = {
            cause: "initial",
            dedupe: o.dedupe
          };
          if (!((_b2 = i._asyncData[w]) == null ? void 0 : _b2._init)) {
            let L;
            g && y ? L = (_c2 = i._asyncData[g]) == null ? void 0 : _c2.data.value : (L = o.getCachedData(w, i, {
              cause: "initial"
            }), P.cachedData = L), i._asyncData[w] = qc(i, w, r, o, L);
          }
          i._asyncData[w]._deps++, (o.immediate || y || E) && i._asyncData[w].execute(P);
        } else l._execute({
          cause: "watch",
          dedupe: o.dedupe
        });
      }, {
        flush: "sync"
      });
      b && Pt(() => {
        S(), p(s.value);
      });
    }
    const f = {
      data: Vo(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.data;
      }),
      pending: Vo(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.pending;
      }),
      status: Vo(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.status;
      }),
      error: Vo(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.error;
      }),
      refresh: (...p) => i._asyncData[s.value].execute(...p),
      execute: (...p) => i._asyncData[s.value].execute(...p),
      clear: () => vp(i, s.value)
    }, d = Promise.resolve(i._asyncDataPromises[s.value]).then(() => f);
    return Object.assign(d, f), d;
  };
  function Vo(e) {
    return W({
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
  function $_(e, t) {
    return !(typeof e == "string" || typeof e == "object" && e !== null || typeof e == "function" && typeof t == "function");
  }
  async function ba(e) {
    await new Promise((n) => Yn(n)), await ye().hooks.callHookParallel("app:data:refresh", void 0);
  }
  function vp(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = void 0), e._asyncData[t] && (e._asyncData[t].data.value = B(e._asyncData[t]._default()), e._asyncData[t].error.value = void 0, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = true), e._asyncDataPromises[t] = void 0);
  }
  function M_(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function qc(e, t, n, r, o) {
    var _a2;
    (_a2 = e.payload._errors)[t] ?? (_a2[t] = void 0);
    const s = r.getCachedData !== bp, i = n, a = r.deep ? fe : Fe, l = o !== void 0, u = e.hook("app:data:refresh", async (f) => {
      (!f || f.includes(t)) && await c.execute({
        cause: "refresh:hook"
      });
    }), c = {
      data: a(l ? o : r.default()),
      pending: W(() => c.status.value === "pending"),
      error: Bs(e.payload._errors, t),
      status: Fe("idle"),
      execute: (...f) => {
        const [d, p = void 0] = f, h = d && p === void 0 && typeof d == "object" ? d : {};
        if (e._asyncDataPromises[t]) {
          if ((h.dedupe ?? r.dedupe) === "defer") return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = true;
        }
        {
          const b = "cachedData" in h ? h.cachedData : r.getCachedData(t, e, {
            cause: h.cause ?? "refresh:manual"
          });
          if (b !== void 0) return e.payload.data[t] = c.data.value = b, c.error.value = void 0, c.status.value = "success", Promise.resolve(b);
        }
        c.status.value = "pending";
        const m = new Promise((b, S) => {
          try {
            b(i(e));
          } catch (w) {
            S(w);
          }
        }).then(async (b) => {
          if (m.cancelled) return e._asyncDataPromises[t];
          let S = b;
          r.transform && (S = await r.transform(b)), r.pick && (S = M_(S, r.pick)), e.payload.data[t] = S, c.data.value = S, c.error.value = void 0, c.status.value = "success";
        }).catch((b) => {
          if (m.cancelled) return e._asyncDataPromises[t];
          c.error.value = Pn(b), c.data.value = B(r.default()), c.status.value = "error";
        }).finally(() => {
          m.cancelled || delete e._asyncDataPromises[t];
        });
        return e._asyncDataPromises[t] = m, e._asyncDataPromises[t];
      },
      _execute: tv((...f) => c.execute(...f), 0, {
        leading: true
      }),
      _default: r.default,
      _deps: 0,
      _init: true,
      _hash: void 0,
      _off: () => {
        var _a3;
        u(), ((_a3 = e._asyncData[t]) == null ? void 0 : _a3._init) && (e._asyncData[t]._init = false), s || je(() => {
          var _a4;
          ((_a4 = e._asyncData[t]) == null ? void 0 : _a4._init) || (vp(e, t), c.execute = () => Promise.resolve());
        });
      }
    };
    return c;
  }
  const I_ = () => {
  }, bp = (e, t, n) => {
    if (t.isHydrating) return t.payload.data[e];
    if (n.cause !== "refresh:manual" && n.cause !== "refresh:hook") return t.static.data[e];
  }, D_ = "$s";
  _p = function(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = D_ + n, s = ye(), i = Bs(s.payload.state, o);
    if (i.value === void 0 && r) {
      const a = r();
      if (_e(a)) return s.payload.state[o] = a, a;
      i.value = a;
    }
    return i;
  };
  function N_(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {}, r = t || {}, o = r.decode || B_;
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
        u.codePointAt(0) === 34 && (u = u.slice(1, -1)), n[l] = j_(u, o);
      }
      s = a + 1;
    }
    return n;
  }
  function B_(e) {
    return e.includes("%") ? decodeURIComponent(e) : e;
  }
  function j_(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  const qo = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function Kc(e, t, n) {
    const r = n || {}, o = r.encode || encodeURIComponent;
    if (typeof o != "function") throw new TypeError("option encode is invalid");
    if (!qo.test(e)) throw new TypeError("argument name is invalid");
    const s = o(t);
    if (s && !qo.test(s)) throw new TypeError("argument val is invalid");
    let i = e + "=" + s;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
      const a = r.maxAge - 0;
      if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
      i += "; Max-Age=" + Math.floor(a);
    }
    if (r.domain) {
      if (!qo.test(r.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!qo.test(r.path)) throw new TypeError("option path is invalid");
      i += "; Path=" + r.path;
    }
    if (r.expires) {
      if (!F_(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
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
  function F_(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
  }
  function _t(e) {
    if (typeof e != "object") return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
      if (e.constructor !== Object && typeof e.constructor == "function") {
        n = new e.constructor();
        for (t in e) e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = _t(e[t]));
      } else {
        n = {};
        for (t in e) t === "__proto__" ? Object.defineProperty(n, t, {
          value: _t(e[t]),
          configurable: true,
          enumerable: true,
          writable: true
        }) : n[t] = _t(e[t]);
      }
      return n;
    }
    if (r === "[object Array]") {
      for (t = e.length, n = Array(t); t--; ) n[t] = _t(e[t]);
      return n;
    }
    return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(o) {
      n.add(_t(o));
    }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(o, s) {
      n.set(_t(s), _t(o));
    }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(_t(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
  }
  const H_ = {
    path: "/",
    watch: true,
    decode: (e) => lo(decodeURIComponent(e)),
    encode: (e) => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
  }, Ko = window.cookieStore;
  _a = function(e, t) {
    var _a2;
    const n = {
      ...H_,
      ...t
    };
    n.filter ?? (n.filter = (u) => u === e);
    const r = Gc(n) || {};
    let o;
    n.maxAge !== void 0 ? o = n.maxAge * 1e3 : n.expires && (o = n.expires.getTime() - Date.now());
    const s = o !== void 0 && o <= 0, i = s || r[e] === void 0 || r[e] === null, a = _t(s ? void 0 : r[e] ?? ((_a2 = n.default) == null ? void 0 : _a2.call(n))), l = o && !s ? V_(a, o, n.watch && n.watch !== "shallow") : fe(a);
    {
      let u = null;
      try {
        !Ko && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${e}`));
      } catch {
      }
      const c = (h = false) => {
        !h && (n.readonly || vb(l.value, r[e])) || (W_(e, l.value, n), r[e] = _t(l.value), u == null ? void 0 : u.postMessage({
          value: n.encode(l.value)
        }));
      }, f = (h) => {
        var _a3;
        const m = h.refresh ? (_a3 = Gc(n)) == null ? void 0 : _a3[e] : n.decode(h.value);
        d = true, l.value = m, r[e] = _t(m), je(() => {
          d = false;
        });
      };
      let d = false;
      const p = !!Gt();
      if (p && Pt(() => {
        d = true, c(), u == null ? void 0 : u.close();
      }), Ko) {
        const h = (m) => {
          const b = m.changed.find((w) => w.name === e), S = m.deleted.find((w) => w.name === e);
          b && f({
            value: b.value
          }), S && f({
            value: null
          });
        };
        Ko.addEventListener("change", h), p && Pt(() => Ko.removeEventListener("change", h));
      } else u && (u.onmessage = ({ data: h }) => f(h));
      n.watch && Oe(l, () => {
        d || c();
      }, {
        deep: n.watch !== "shallow"
      }), i && c(i);
    }
    return l;
  };
  function Gc(e = {}) {
    return N_(document.cookie, e);
  }
  function U_(e, t, n = {}) {
    return t == null ? Kc(e, t, {
      ...n,
      maxAge: -1
    }) : Kc(e, t, n);
  }
  function W_(e, t, n = {}) {
    document.cookie = U_(e, t, n);
  }
  const zc = 2147483647;
  function V_(e, t, n) {
    let r, o, s = 0;
    const i = n ? fe(e) : {
      value: e
    };
    return Gt() && Pt(() => {
      o == null ? void 0 : o(), clearTimeout(r);
    }), go((a, l) => {
      n && (o = Oe(i, l));
      function u() {
        s = 0, clearTimeout(r);
        const c = t - s, f = c < zc ? c : zc;
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
  function q_(e) {
    if ((e == null ? void 0 : e.__asyncLoader) && !e.__asyncResolved) return e.__asyncLoader();
  }
  async function wp(e, t = He()) {
    const { path: n, matched: r } = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = /* @__PURE__ */ new Set()), t._routePreloaded.has(n))) return;
    const o = t._preloadPromises || (t._preloadPromises = []);
    if (o.length > 4) return Promise.all(o).then(() => wp(e, t));
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
  function K_(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
      n = lo(sessionStorage.getItem("nuxt:reload") || "{}");
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
  const G_ = {
    scrollBehavior(e, t, n) {
      var _a2;
      const r = ye(), o = ((_a2 = He().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
      if (e.path === t.path) return t.hash && !e.hash ? {
        left: 0,
        top: 0
      } : e.hash ? {
        el: e.hash,
        top: Sp(e.hash),
        behavior: o
      } : false;
      if ((typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop) === false) return false;
      const i = r._runningTransition ? "page:transition:finish" : "page:loading:end";
      return new Promise((a) => {
        if (t === yt) {
          a(Jc(e, t, n, o));
          return;
        }
        r.hooks.hookOnce(i, () => {
          requestAnimationFrame(() => a(Jc(e, t, n, o)));
        });
      });
    }
  };
  function Sp(e) {
    try {
      const t = document.querySelector(e);
      if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
    } catch {
    }
    return 0;
  }
  function Jc(e, t, n, r) {
    if (n) return n;
    const o = mp(e, t);
    return e.hash ? {
      el: e.hash,
      top: Sp(e.hash),
      behavior: o ? r : "instant"
    } : {
      left: 0,
      top: 0
    };
  }
  const z_ = {
    scrollBehaviorType: "smooth",
    hashMode: false
  }, pn = {
    ...z_,
    ...G_
  }, J_ = (...e) => e.find((t) => t !== void 0);
  function Y_(e) {
    const t = e.componentName || "NuxtLink";
    function n(s) {
      return typeof s == "string" && s.startsWith("#");
    }
    function r(s, i, a) {
      const l = a ?? e.trailingSlash;
      if (!s || l !== "append" && l !== "remove") return s;
      if (typeof s == "string") return Go(s, l);
      const u = "path" in s && s.path !== void 0 ? s.path : i(s).path;
      return {
        ...s,
        name: void 0,
        path: Go(u, l)
      };
    }
    function o(s) {
      const i = He(), a = ut(), l = W(() => !!s.target && s.target !== "_self"), u = W(() => {
        const b = s.to || s.href || "";
        return typeof b == "string" && Ot(b, {
          acceptRelative: true
        });
      }), c = qi("RouterLink"), f = c && typeof c != "string" ? c.useLink : void 0, d = W(() => {
        if (s.external) return true;
        const b = s.to || s.href || "";
        return typeof b == "object" ? false : b === "" || u.value;
      }), p = W(() => {
        const b = s.to || s.href || "";
        return d.value ? b : r(b, i.resolve, s.trailingSlash);
      }), h = d.value ? void 0 : f == null ? void 0 : f({
        ...s,
        to: p
      }), m = W(() => {
        var _a2;
        const b = s.trailingSlash ?? e.trailingSlash;
        if (!p.value || u.value || n(p.value)) return p.value;
        if (d.value) {
          const S = typeof p.value == "object" && "path" in p.value ? ua(p.value) : p.value, w = typeof S == "object" ? i.resolve(S).href : S;
          return Go(w, b);
        }
        return typeof p.value == "object" ? ((_a2 = i.resolve(p.value)) == null ? void 0 : _a2.href) ?? null : Go(qs(a.app.baseURL, p.value), b);
      });
      return {
        to: p,
        hasTarget: l,
        isAbsoluteUrl: u,
        isExternal: d,
        href: m,
        isActive: (h == null ? void 0 : h.isActive) ?? W(() => p.value === i.currentRoute.value.path),
        isExactActive: (h == null ? void 0 : h.isExactActive) ?? W(() => p.value === i.currentRoute.value.path),
        route: (h == null ? void 0 : h.route) ?? W(() => i.resolve(p.value)),
        async navigate(b) {
          await Zy(m.value, {
            replace: s.replace,
            external: d.value || l.value
          });
        }
      };
    }
    return te({
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
        const a = He(), { to: l, href: u, navigate: c, isExternal: f, hasTarget: d, isAbsoluteUrl: p } = o(s), h = Fe(false), m = fe(null), b = (g) => {
          var _a2;
          m.value = s.custom ? (_a2 = g == null ? void 0 : g.$el) == null ? void 0 : _a2.nextElementSibling : g == null ? void 0 : g.$el;
        };
        function S(g) {
          var _a2, _b2;
          return !h.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === g : ((_a2 = s.prefetchOn) == null ? void 0 : _a2[g]) ?? ((_b2 = e.prefetchOn) == null ? void 0 : _b2[g])) && (s.prefetch ?? e.prefetch) !== false && s.noPrefetch !== true && s.target !== "_blank" && !Z_();
        }
        async function w(g = ye()) {
          if (h.value) return;
          h.value = true;
          const y = typeof l.value == "string" ? l.value : f.value ? ua(l.value) : a.resolve(l.value).fullPath, E = f.value ? new URL(y, window.location.href).href : y;
          await Promise.all([
            g.hooks.callHook("link:prefetch", E).catch(() => {
            }),
            !f.value && !d.value && wp(l.value, a).catch(() => {
            })
          ]);
        }
        if (S("visibility")) {
          const g = ye();
          let y, E = null;
          ot(() => {
            const P = Q_();
            Yn(() => {
              y = va(() => {
                var _a2;
                ((_a2 = m == null ? void 0 : m.value) == null ? void 0 : _a2.tagName) && (E = P.observe(m.value, async () => {
                  E == null ? void 0 : E(), E = null, await w(g);
                }));
              });
            });
          }), xn(() => {
            y && L_(y), E == null ? void 0 : E(), E = null;
          });
        }
        return () => {
          var _a2;
          if (!f.value && !d.value && !n(l.value)) {
            const E = {
              ref: b,
              to: l.value,
              activeClass: s.activeClass || e.activeClass,
              exactActiveClass: s.exactActiveClass || e.exactActiveClass,
              replace: s.replace,
              ariaCurrentValue: s.ariaCurrentValue,
              custom: s.custom
            };
            return s.custom || (S("interaction") && (E.onPointerenter = w.bind(null, void 0), E.onFocus = w.bind(null, void 0)), h.value && (E.class = s.prefetchedClass || e.prefetchedClass), E.rel = s.rel || void 0), de(qi("RouterLink"), E, i.default);
          }
          const g = s.target || null, y = J_(s.noRel ? "" : s.rel, e.externalRelAttribute, p.value || d.value ? "noopener noreferrer" : "") || null;
          return s.custom ? i.default ? i.default({
            href: u.value,
            navigate: c,
            prefetch: w,
            get route() {
              if (!u.value) return;
              const E = new URL(u.value, window.location.href);
              return {
                path: E.pathname,
                fullPath: E.pathname,
                get query() {
                  return Wa(E.search);
                },
                hash: E.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: u.value
              };
            },
            rel: y,
            target: g,
            isExternal: f.value || d.value,
            isActive: false,
            isExactActive: false
          }) : null : de("a", {
            ref: m,
            href: u.value || null,
            rel: y,
            target: g,
            onClick: (E) => {
              if (!(f.value || d.value)) return E.preventDefault(), s.replace ? a.replace(u.value) : a.push(u.value);
            }
          }, (_a2 = i.default) == null ? void 0 : _a2.call(i));
        };
      }
    });
  }
  ks = Y_(Iy);
  function Go(e, t) {
    const n = t === "append" ? Vs : Kt;
    return Ot(e) && !e.startsWith("http") ? e : n(e, true);
  }
  function Q_() {
    const e = ye();
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
  const X_ = /2g/;
  function Z_() {
    const e = navigator.connection;
    return !!(e && (e.saveData || X_.test(e.effectiveType)));
  }
  const ew = Cd(() => {
    Xa("PiniaColada_TreeMapNode", (e) => e);
  }), Ep = [
    [
      "NuxtError",
      (e) => Pn(e)
    ],
    [
      "EmptyShallowRef",
      (e) => Fe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : lo(e))
    ],
    [
      "EmptyRef",
      (e) => fe(e === "_" ? void 0 : e === "0n" ? BigInt(0) : lo(e))
    ],
    [
      "ShallowRef",
      (e) => Fe(e)
    ],
    [
      "ShallowReactive",
      (e) => Ut(e)
    ],
    [
      "Ref",
      (e) => fe(e)
    ],
    [
      "Reactive",
      (e) => Ye(e)
    ]
  ];
  Ep.push([
    "Island",
    ({ key: e, params: t, result: n }) => {
      var _a2;
      const r = ye();
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
  const tw = Ae({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, o] of Ep) Xa(r, o);
      Object.assign(e.payload, ([t, n] = yr(() => e.runWithContext(ab)), t = await t, n(), t)), delete window.__NUXT__;
    }
  });
  async function nl(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
      shouldRender: true,
      tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async (o) => {
      var _a2;
      const s = /* @__PURE__ */ new Map(), i = new Promise((p) => {
        e.resolveTags().then((h) => {
          p(h.map((m) => {
            const b = s.get(m._d) || 0, S = {
              tag: m,
              id: (b ? `${m._d}:${b}` : m._d) || gc(m),
              shouldRender: true
            };
            return m._d && jd(m._d) && s.set(m._d, b + 1), S;
          }));
        });
      });
      let a = e._dom;
      if (!a) {
        a = {
          title: n.title,
          elMap: (/* @__PURE__ */ new Map()).set("htmlAttrs", n.documentElement).set("bodyAttrs", n.body)
        };
        for (const p of [
          "body",
          "head"
        ]) {
          const h = (_a2 = n[p]) == null ? void 0 : _a2.children;
          for (const m of h) {
            const b = m.tagName.toLowerCase();
            if (!hc.has(b)) continue;
            const S = Fd({
              tag: b,
              props: {}
            }, {
              innerHTML: m.innerHTML,
              ...m.getAttributeNames().reduce((w, g) => (w[g] = m.getAttribute(g), w), {}) || {}
            });
            if (S.key = m.getAttribute("data-hid") || void 0, S._d = ha(S) || gc(S), a.elMap.has(S._d)) {
              let w = 1, g = S._d;
              for (; a.elMap.has(g); ) g = `${S._d}:${w++}`;
              a.elMap.set(g, m);
            } else a.elMap.set(S._d, m);
          }
        }
      }
      a.pendingSideEffects = {
        ...a.sideEffects
      }, a.sideEffects = {};
      function l(p, h, m) {
        const b = `${p}:${h}`;
        a.sideEffects[b] = m, delete a.pendingSideEffects[b];
      }
      function u({ id: p, $el: h, tag: m }) {
        const b = m.tag.endsWith("Attrs");
        a.elMap.set(p, h), b || (m.textContent && m.textContent !== h.textContent && (h.textContent = m.textContent), m.innerHTML && m.innerHTML !== h.innerHTML && (h.innerHTML = m.innerHTML), l(p, "el", () => {
          h == null ? void 0 : h.remove(), a.elMap.delete(p);
        }));
        for (const S in m.props) {
          if (!Object.prototype.hasOwnProperty.call(m.props, S)) continue;
          const w = m.props[S];
          if (S.startsWith("on") && typeof w == "function") {
            const y = h == null ? void 0 : h.dataset;
            if (y && y[`${S}fired`]) {
              const E = S.slice(0, -5);
              w.call(h, new Event(E.substring(2)));
            }
            h.getAttribute(`data-${S}`) !== "" && ((m.tag === "bodyAttrs" ? n.defaultView : h).addEventListener(S.substring(2), w.bind(h)), h.setAttribute(`data-${S}`, ""));
            continue;
          }
          const g = `attr:${S}`;
          if (S === "class") {
            if (!w) continue;
            for (const y of w) b && l(p, `${g}:${y}`, () => h.classList.remove(y)), !h.classList.contains(y) && h.classList.add(y);
          } else if (S === "style") {
            if (!w) continue;
            for (const [y, E] of w) l(p, `${g}:${y}`, () => {
              h.style.removeProperty(y);
            }), h.style.setProperty(y, E);
          } else w !== false && w !== null && (h.getAttribute(S) !== w && h.setAttribute(S, w === true ? "" : String(w)), b && l(p, g, () => h.removeAttribute(S)));
        }
      }
      const c = [], f = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      }, d = await i;
      for (const p of d) {
        const { tag: h, shouldRender: m, id: b } = p;
        if (m) {
          if (h.tag === "title") {
            n.title = h.textContent, l("title", "", () => n.title = a.title);
            continue;
          }
          p.$el = p.$el || a.elMap.get(b), p.$el ? u(p) : hc.has(h.tag) && c.push(p);
        }
      }
      for (const p of c) {
        const h = p.tag.tagPosition || "head";
        p.$el = n.createElement(p.tag.tag), u(p), f[h] = f[h] || n.createDocumentFragment(), f[h].appendChild(p.$el);
      }
      for (const p of d) await e.hooks.callHook("dom:renderTag", p, n, l);
      f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose);
      for (const p in a.pendingSideEffects) a.pendingSideEffects[p]();
      e._dom = a, await e.hooks.callHook("dom:rendered", {
        renders: d
      }), o();
    }).finally(() => {
      e._domUpdatePromise = void 0, e.dirty = false;
    })), e._domUpdatePromise;
  }
  function nw(e = {}) {
    var _a2, _b2, _c2;
    const t = ((_a2 = e.domOptions) == null ? void 0 : _a2.render) || nl;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((_c2 = (_b2 = e.document) == null ? void 0 : _b2.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _c2.innerHTML) || false;
    return Fv({
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
  function rw(e, t) {
    let n = 0;
    return () => {
      const r = ++n;
      t(() => {
        n === r && e();
      });
    };
  }
  function ow(e = {}) {
    const t = nw({
      domOptions: {
        render: rw(() => nl(t), (n) => setTimeout(n, 0))
      },
      ...e
    });
    return t.install = Zv(t), t;
  }
  const sw = {
    disableDefaults: true
  }, iw = Ae({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = ow(sw);
      e.vueApp.use(t);
      {
        let n = true;
        const r = async () => {
          n = false, await nl(t);
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
  }), aw = /(:\w+)\([^)]+\)/g, lw = /(:\w+)[?+*]/g, cw = /:\w+/g, uw = (e, t) => t.path.replace(aw, "$1").replace(lw, "$1").replace(cw, (n) => {
    var _a2;
    return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  }), wa = (e, t) => {
    const n = e.route.matched.find((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === e.Component.type;
    }), r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && uw(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  }, fw = (e, t) => ({
    default: () => e ? de(tm, e === true ? {} : e, t) : t
  });
  function rl(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const dw = {
    middleware: [
      async function(e) {
        e.path === "/onepager" && await wt(() => Promise.resolve({}), __vite__mapDeps([0]), import.meta.url);
      }
    ]
  }, Ci = [
    {
      name: "uid",
      path: "/:uid()",
      meta: dw || {},
      component: () => wt(() => import("./Bg2nldgQ.js"), __vite__mapDeps([1,2,3,4,5]), import.meta.url)
    },
    {
      name: "index",
      path: "/",
      meta: {
        middleware: []
      },
      component: () => wt(() => import("./CTnqUw6B.js"), __vite__mapDeps([6,2,3,4,7,5]), import.meta.url)
    },
    {
      name: "roadmap",
      path: "/roadmap",
      component: () => wt(() => import("./BPZnJYPo.js"), __vite__mapDeps([8,9,10,4,11,12,13,14,15,16,17,18,19,20,21,5,22]), import.meta.url)
    },
    {
      name: "blog",
      path: "/blog",
      component: () => wt(() => import("./DyjcEpGN.js"), __vite__mapDeps([23,2,3]), import.meta.url)
    },
    {
      name: "blog-post",
      path: "/blog/:post()",
      component: () => wt(() => import("./KOhr7kEc.js"), __vite__mapDeps([24,25,12,13,14,15,16,26,27,4,28,10,29,17,18,30,11,2,31,3,5,32]), import.meta.url)
    },
    {
      name: "slice-simulator",
      path: "/slice-simulator",
      component: () => wt(() => import("./CCyN_IY9.js"), __vite__mapDeps([33,34,2]), import.meta.url)
    },
    {
      name: "iframes-albatross-liveview",
      path: "/iframes/albatross-liveview",
      component: () => wt(() => import("./BZ5nT3aQ.js"), __vite__mapDeps([35,36,37,15,27,17,18,38,12,13,14,16,31]), import.meta.url)
    }
  ], pw = async (e, t) => {
    var _a2;
    let n, r;
    if (!((_a2 = e.meta) == null ? void 0 : _a2.validate)) return;
    const o = ([n, r] = yr(() => Promise.resolve(e.meta.validate(e))), n = await n, r(), n);
    if (o === true) return;
    const s = Pn({
      fatal: true,
      statusCode: o && o.statusCode || 404,
      statusMessage: o && o.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath), s;
  }, hw = async (e) => {
    let t, n;
    const r = ([t, n] = yr(() => Qa({
      path: e.path
    })), t = await t, n(), t);
    if (r.redirect) return Ot(r.redirect, {
      acceptRelative: true
    }) ? (window.location.href = r.redirect, false) : r.redirect;
  }, mw = [
    pw,
    hw
  ], Sa = {
    "matomo-client": () => wt(() => import("./B4WecA8s.js"), [], import.meta.url)
  };
  function gw(e, t, n) {
    const { pathname: r, search: o, hash: s } = t, i = e.indexOf("#");
    if (i > -1) {
      const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
      let c = s.slice(u);
      return c[0] !== "/" && (c = "/" + c), ec(c, "");
    }
    const a = ec(r, e), l = !n || ny(a, n) ? a : n;
    return l + (l.includes("?") ? "" : o) + s;
  }
  const yw = Ae({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var _a2;
      let t, n, r = ut().app.baseURL;
      const o = ((_a2 = pn.history) == null ? void 0 : _a2.call(pn, r)) ?? Zb(r), s = pn.routes ? ([t, n] = yr(() => pn.routes(Ci)), t = await t, n(), t ?? Ci) : Ci;
      let i;
      const a = E_({
        ...pn,
        scrollBehavior: (b, S, w) => {
          if (S === yt) {
            i = w;
            return;
          }
          if (pn.scrollBehavior) {
            if (a.options.scrollBehavior = pn.scrollBehavior, "scrollRestoration" in window.history) {
              const g = a.beforeEach(() => {
                g(), window.history.scrollRestoration = "manual";
              });
            }
            return pn.scrollBehavior(b, yt, i || w);
          }
        },
        history: o,
        routes: s
      });
      "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
      const l = Fe(a.currentRoute.value);
      a.afterEach((b, S) => {
        l.value = S;
      }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const u = gw(r, window.location, e.payload.path), c = Fe(a.currentRoute.value), f = () => {
        c.value = a.currentRoute.value;
      };
      e.hook("page:finish", f), a.afterEach((b, S) => {
        var _a3, _b2, _c2, _d2;
        ((_b2 = (_a3 = b.matched[0]) == null ? void 0 : _a3.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = S.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default) && f();
      });
      const d = {};
      for (const b in c.value) Object.defineProperty(d, b, {
        get: () => c.value[b],
        enumerable: true
      });
      e._route = Ut(d), e._middleware || (e._middleware = {
        global: [],
        named: {}
      });
      const p = xr();
      a.afterEach(async (b, S, w) => {
        delete e._processingMiddleware, !e.isHydrating && p.value && await e.runWithContext(xd), w && await e.callHook("page:loading:end");
      });
      try {
        [t, n] = yr(() => a.isReady()), await t, n();
      } catch (b) {
        [t, n] = yr(() => e.runWithContext(() => Dn(b))), await t, n();
      }
      const h = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
      f();
      const m = e.payload.state._layout;
      return a.beforeEach(async (b, S) => {
        var _a3;
        await e.callHook("page:loading:start"), b.meta = Ye(b.meta), e.isHydrating && m && !an(b.meta.layout) && (b.meta.layout = m), e._processingMiddleware = true;
        {
          const w = /* @__PURE__ */ new Set([
            ...mw,
            ...e._middleware.global
          ]);
          for (const g of b.matched) {
            const y = g.meta.middleware;
            if (y) for (const E of rl(y)) w.add(E);
          }
          {
            const g = await e.runWithContext(() => Qa({
              path: b.path
            }));
            if (g.appMiddleware) for (const y in g.appMiddleware) g.appMiddleware[y] ? w.add(y) : w.delete(y);
          }
          for (const g of w) {
            const y = typeof g == "string" ? e._middleware.named[g] || await ((_a3 = Sa[g]) == null ? void 0 : _a3.call(Sa).then((E) => E.default || E)) : g;
            if (!y) throw new Error(`Unknown route middleware: '${g}'.`);
            try {
              const E = await e.runWithContext(() => y(b, S));
              if (!e.payload.serverRendered && e.isHydrating && (E === false || E instanceof Error)) {
                const P = E || Pn({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${u}`
                });
                return await e.runWithContext(() => Dn(P)), false;
              }
              if (E === true) continue;
              if (E === false) return E;
              if (E) return Od(E) && E.fatal && await e.runWithContext(() => Dn(E)), E;
            } catch (E) {
              const P = Pn(E);
              return P.fatal && await e.runWithContext(() => Dn(P)), P;
            }
          }
        }
      }), a.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end");
      }), a.afterEach(async (b, S) => {
        b.matched.length === 0 && await e.runWithContext(() => Dn(Pn({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${b.fullPath}`,
          data: {
            path: b.fullPath
          }
        })));
      }), e.hooks.hookOnce("app:created", async () => {
        try {
          "name" in h && (h.name = void 0), await a.replace({
            ...h,
            force: true
          }), a.options.scrollBehavior = pn.scrollBehavior;
        } catch (b) {
          await e.runWithContext(() => Dn(b));
        }
      }), {
        provide: {
          router: a
        }
      };
    }
  });
  function vw(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !Ot(String(e.url), {
      acceptRelative: true,
      strict: false
    }) && (e.url = os(String(e.url)));
    const t = Object.keys(e).sort((r, o) => r.localeCompare(o)), n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function bw(e) {
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
        const u = l, c = (s == null ? void 0 : s.resolveRefs) ? we(n[a][l]) : n[a][l];
        !l.startsWith("_") && typeof c < "u" && c !== "" && (i[l] = c, typeof n[a]._priority < "u" && n[a]._priority !== -1 && (i._priority[u] = n[a]._priority), (s == null ? void 0 : s.debug) && (i._context[u] = ((_a2 = n[a]._context) == null ? void 0 : _a2[u]) || n[a]._context || "anonymous"));
      }
      return (s == null ? void 0 : s.skipNormalize) ? i : vw(i);
    }
    return {
      stack: n,
      push: r,
      get: o
    };
  }
  const _w = Ae({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
      var _a2;
      const t = bw(), n = _p("site-config");
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
  }), ww = Ae({
    name: "nuxt:payload",
    setup(e) {
      const t = /* @__PURE__ */ new Set();
      He().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const o = await Sc(n.path);
        if (o) {
          for (const s of t) delete e.static.data[s];
          for (const s in o.data) s in e.static.data || t.add(s), e.static.data[s] = o.data[s];
        }
      }), Yn(() => {
        var _a2;
        e.hooks.hook("link:prefetch", async (n) => {
          const { hostname: r } = new URL(n, window.location.href);
          r === window.location.hostname && await Sc(n).catch(() => {
            console.warn("[nuxt] Error preloading payload for", n);
          });
        }), ((_a2 = navigator.connection) == null ? void 0 : _a2.effectiveType) !== "slow-2g" && setTimeout(zs, 1e3);
      });
    }
  }), Sw = Ae(() => {
    const e = He();
    Yn(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100), requestAnimationFrame(() => {
            setTimeout(t, 0);
          });
        });
      });
    });
  }), Ew = Ae((e) => {
    let t;
    async function n() {
      const r = await zs();
      t && clearTimeout(t), t = setTimeout(n, ac);
      try {
        const o = await $fetch(Ka("builds/latest.json") + `?${Date.now()}`);
        o.id !== r.id && e.hooks.callHook("app:manifest:update", o);
      } catch {
      }
    }
    Yn(() => {
      t = setTimeout(n, ac);
    });
  }), Cw = Ae((e) => {
    if (!document.startViewTransition) return;
    let t, n = false, r, o;
    const s = () => {
      t = void 0, n = false, o = void 0, r = void 0;
    };
    window.addEventListener("popstate", (a) => {
      n = a.hasUAVisualTransition, n && (t == null ? void 0 : t.skipTransition());
    }), He().beforeResolve(async (a, l) => {
      const u = a.meta.viewTransition ?? $y, f = window.matchMedia("(prefers-reduced-motion: reduce)").matches && u !== "always";
      if (u === false || f || n || !mp(a, l)) return;
      const d = new Promise((m, b) => {
        r = m, o = b;
      });
      let p;
      const h = new Promise((m) => p = m);
      return t = document.startViewTransition(() => (p(), d)), t.finished.then(s), await e.callHook("page:view-transition:start", t), h;
    }), e.hook("vue:error", () => {
      o == null ? void 0 : o(), s();
    }), e.hook("page:finish", () => {
      r == null ? void 0 : r(), s();
    });
  }), kw = Ae({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = He(), n = ut(), r = /* @__PURE__ */ new Set();
      t.beforeEach(() => {
        r.clear();
      }), e.hook("app:chunkError", ({ error: s }) => {
        r.add(s);
      });
      function o(s) {
        const i = qs(n.app.baseURL, s.fullPath);
        K_({
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
  }), Tw = "usehead";
  function Rw() {
    if (Kn()) {
      const e = Re(Tw);
      if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function Pw(e, t) {
    if (!t) return;
    const n = (r, o) => {
      if (!e._cbs[r]) return o(e.instance), () => {
      };
      let s = e._cbs[r].push(o);
      const i = () => {
        var _a2;
        s && ((_a2 = e._cbs[r]) == null ? void 0 : _a2.splice(s - 1, 1), s = null);
      };
      return Pt(i), i;
    };
    e.onLoaded = (r) => n("loaded", r), e.onError = (r) => n("error", r), Pt(() => {
      var _a2;
      (_a2 = e._triggerAbortController) == null ? void 0 : _a2.abort();
    });
  }
  function Aw(e, t) {
    const n = typeof e == "string" ? {
      src: e
    } : e, r = t || {}, o = (r == null ? void 0 : r.head) || Rw();
    r.head = o;
    const s = Le();
    if (r.eventContext = s, s && typeof r.trigger > "u") r.trigger = ot;
    else if (_e(r.trigger)) {
      const a = r.trigger;
      let l;
      r.trigger = new Promise((u) => {
        l = Oe(a, (c) => {
          c && u(true);
        }, {
          immediate: true
        }), Pt(() => u(false), true);
      }).then((u) => (l == null ? void 0 : l(), u));
    }
    o._scriptStatusWatcher = o._scriptStatusWatcher || o.hooks.hook("script:updated", ({ script: a }) => {
      a._statusRef.value = a.status;
    });
    const i = Kv(o, n, r);
    return i._statusRef = i._statusRef || fe(i.status), Pw(i, s), new Proxy(i, {
      get(a, l, u) {
        return Reflect.get(a, l === "status" ? "_statusRef" : l, u);
      }
    });
  }
  function xw() {
    return ut().public["nuxt-scripts"];
  }
  function Ow(e) {
    return e.key || e.src || (typeof e.innerHTML == "string" ? e.innerHTML : "");
  }
  function Lw(e, t) {
    var _a2, _b2;
    e = typeof e == "string" ? {
      src: e
    } : e, t = _o(t, (_a2 = xw()) == null ? void 0 : _a2.defaultScriptOptions);
    const n = String(Ow(e)), r = ye();
    if (t.head = t.head || Jn(), !t.head) throw new Error("useScript() has been called without Nuxt context.");
    r.$scripts = r.$scripts || Ye({}), (_b2 = r.$scripts) == null ? void 0 : _b2[n], (t.trigger === "onNuxtReady" || t.trigger === "client") && (t.warmupStrategy || (t.warmupStrategy = "preload"), t.trigger === "onNuxtReady" && (t.trigger = Yn));
    const o = Aw(e, t), s = o.remove;
    return o.remove = () => (r.$scripts[n] = void 0, s()), r.$scripts[n] = o, o;
  }
  const Qn = Object.freeze(Object.assign(() => {
  }, {
    __mock__: true
  })), Cp = Qn, St = Qn, $w = Qn, vr = Qn, Ge = Qn, ki = Qn, as = Qn;
  function Mw(e) {
    return (ut().public.scripts || {})[e];
  }
  function kp(e, t, n) {
    const r = Mw(e), o = Object.assign(n || {}, typeof r == "object" ? r : {}), s = t(o), i = _o(o.scriptInput, s.scriptInput, {
      key: e
    }), a = Object.assign((o == null ? void 0 : o.scriptOptions) || {}, s.scriptOptions || {}), l = a.beforeInit;
    return a.beforeInit = () => {
      var _a2;
      l == null ? void 0 : l(), (_a2 = s.clientInit) == null ? void 0 : _a2.call(s);
    }, Lw(i, a);
  }
  Cp({
    id: St(),
    l: Ge(St()),
    auth: Ge(St()),
    preview: Ge(St()),
    cookiesWin: Ge(as([
      vr(),
      ki("x")
    ])),
    debug: Ge(as([
      vr(),
      ki("x")
    ])),
    npa: Ge(as([
      vr(),
      ki("1")
    ])),
    dataLayer: Ge(St()),
    envName: Ge(St()),
    authReferrerPolicy: Ge(St())
  });
  function Tp(e) {
    return kp((e == null ? void 0 : e.key) || "googleTagManager", (t) => {
      const n = (t == null ? void 0 : t.l) ?? (t == null ? void 0 : t.dataLayer) ?? "dataLayer";
      return {
        scriptInput: {
          src: Va("https://www.googletagmanager.com/gtm.js", {
            id: t.id,
            l: t.l,
            gtm_auth: t.auth,
            gtm_preview: t.preview,
            gtm_cookies_win: t.cookiesWin ? "x" : void 0,
            gtm_debug: t.debug ? "x" : void 0,
            gtm_npa: t.npa ? "1" : void 0,
            gtm_data_layer: t.dataLayer,
            gtm_env: t.envName,
            gtm_auth_referrer_policy: t.authReferrerPolicy
          })
        },
        schema: void 0,
        scriptOptions: {
          use: () => ({
            dataLayer: window[n],
            google_tag_manager: window.google_tag_manager
          }),
          performanceMarkFeature: "nuxt-third-parties-gtm",
          tagPriority: 1
        },
        clientInit: () => {
          var _a2;
          window[n] = window[n] || [];
          function r(...o) {
            window[n].push(o);
          }
          (_a2 = e == null ? void 0 : e.onBeforeGtmStart) == null ? void 0 : _a2.call(e, r), window[n].push({
            "gtm.start": (/* @__PURE__ */ new Date()).getTime(),
            event: "gtm.js"
          });
        }
      };
    }, e);
  }
  Cp({
    matomoUrl: Ge(St()),
    siteId: Ge(as([
      St(),
      $w()
    ])),
    cloudId: Ge(St()),
    trackerUrl: Ge(St()),
    trackPageView: Ge(vr()),
    enableLinkTracking: Ge(vr()),
    disableCookies: Ge(vr())
  });
  function Rp(e) {
    return kp("matomoAnalytics", (t) => {
      const n = (t == null ? void 0 : t.cloudId) ? Kt(ty(t.cloudId)) : void 0, r = (t == null ? void 0 : t.matomoUrl) ? t.matomoUrl : `https://cdn.matomo.cloud/${n}/`, o = window._paq = window._paq || [];
      return {
        scriptInput: {
          src: gr("/matomo.js", r),
          crossorigin: false
        },
        schema: void 0,
        scriptOptions: {
          use() {
            return {
              _paq: window._paq
            };
          }
        },
        clientInit: () => {
          (t == null ? void 0 : t.enableLinkTracking) && o.push([
            "enableLinkTracking"
          ]), (t == null ? void 0 : t.disableCookies) && o.push([
            "disableCookies"
          ]), (t == null ? void 0 : t.trackerUrl) || (t == null ? void 0 : t.matomoUrl) ? o.push([
            "setTrackerUrl",
            (t == null ? void 0 : t.trackerUrl) ? os(t.trackerUrl) : gr("/matomo.php", os((t == null ? void 0 : t.matomoUrl) || ""))
          ]) : n && o.push([
            "setTrackerUrl",
            gr("/matomo.php", os(n))
          ]), o.push([
            "setSiteId",
            String(t == null ? void 0 : t.siteId) || "1"
          ]), (t == null ? void 0 : t.trackPageView) && o.push([
            "trackPageView"
          ]);
        }
      };
    }, e);
  }
  const Iw = Ae({
    name: "scripts:init",
    env: {
      islands: false
    },
    parallel: true,
    setup() {
      const e = Rp({
        matomoUrl: "https://stats.nimiq-network.com",
        siteId: 1,
        trackPageView: true,
        enableLinkTracking: true
      }), t = Tp({
        id: "GTM-NQ9RN8W"
      });
      return {
        provide: {
          $scripts: {
            matomoAnalytics: e,
            googleTagManager: t
          }
        }
      };
    }
  }), Dw = Ae({
    name: "pinia",
    setup(e) {
      const t = ov();
      return e.vueApp.use(t), wo(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
        provide: {
          pinia: t
        }
      };
    }
  }), Nw = Ae({
    name: "nuxt:global-components"
  }), kn = {
    default: Tl(() => wt(() => import("./DPKIYy-A.js"), __vite__mapDeps([39,4,40,41,14,42,43,44,45,15,28,10,18,46,17,47,25,12,13,16,11,21,48]), import.meta.url).then((e) => e.default || e)),
    iframe: Tl(() => wt(() => import("./BBmG15LB.js"), __vite__mapDeps([49,15]), import.meta.url).then((e) => e.default || e))
  }, Bw = Ae({
    name: "nuxt:prefetch",
    setup(e) {
      const t = He();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var _a2;
          const r = (_a2 = n == null ? void 0 : n.meta) == null ? void 0 : _a2.layout;
          r && typeof kn[r] == "function" && await kn[r]();
        });
      }), e.hooks.hook("link:prefetch", (n) => {
        if (Ot(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const o = r.meta.layout;
        let s = rl(r.meta.middleware);
        s = s.filter((i) => typeof i == "string");
        for (const i of s) typeof Sa[i] == "function" && Sa[i]();
        typeof o == "string" && o in kn && q_(kn[o]);
      });
    }
  });
  function ol(e) {
    const t = Ye({});
    return ln(() => {
      const n = ye().$nuxtSiteConfig.get(_o({
        resolveRefs: true
      }, e));
      Object.assign(t, n);
    }), delete t._priority, t;
  }
  const jw = Ae(() => {
    const e = Jn();
    if (!e) return;
    const t = ol(), n = {
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
  }), Fw = Ae(() => {
    const e = Jn();
    e && (e.use(Hd), e.use(Qv()));
  }), Hw = /\d/, Uw = [
    "-",
    "_",
    "/",
    "."
  ];
  function Ww(e = "") {
    if (!Hw.test(e)) return e !== e.toLowerCase();
  }
  function Vw(e, t) {
    const n = Uw, r = [];
    if (!e || typeof e != "string") return r;
    let o = "", s, i;
    for (const a of e) {
      const l = n.includes(a);
      if (l === true) {
        r.push(o), o = "", s = void 0;
        continue;
      }
      const u = Ww(a);
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
  function qw(e) {
    return e ? e[0].toUpperCase() + e.slice(1) : "";
  }
  const Kw = /^(a|an|and|as|at|but|by|for|if|in|is|nor|of|on|or|the|to|with)$/i;
  function Gw(e, t) {
    return (Array.isArray(e) ? e : Vw(e)).filter(Boolean).map((n) => Kw.test(n) ? n.toLowerCase() : qw(n)).join(" ");
  }
  const zw = Ae({
    name: "nuxt-seo:fallback-titles",
    env: {
      islands: false
    },
    setup() {
      const e = zn(), t = xr(), n = W(() => {
        var _a2, _b2, _c2;
        if (t.value && [
          404,
          500
        ].includes((_a2 = t.value) == null ? void 0 : _a2.statusCode)) return `${t.value.statusCode} - ${t.value.message}`;
        if (typeof ((_b2 = e.meta) == null ? void 0 : _b2.title) == "string") return (_c2 = e.meta) == null ? void 0 : _c2.title;
        const s = Kt(e.path || "/").split("/").pop();
        return s ? Gw(s) : null;
      });
      Gs({
        title: () => n.value
      }, {
        tagPriority: 101
      });
    }
  });
  function Jw(e) {
    return ({ queryCache: t, scope: n }) => {
      t.$onAction(({ name: r, after: o }) => {
        r === "create" && o((s) => {
          var _a2;
          const i = ((_a2 = s.options) == null ? void 0 : _a2.delay) ?? (e == null ? void 0 : e.delay) ?? 200;
          n.run(() => {
            const a = Fe(false);
            if (s.ext.isDelaying = a, !i) return;
            const l = s.asyncStatus.value;
            s.asyncStatus = go((u, c) => {
              let f = l, d;
              return {
                get() {
                  return u(), f;
                },
                set(p) {
                  clearTimeout(d), p === "loading" ? (a.value = true, d = setTimeout(() => {
                    a.value = false, f = p, c();
                  }, i)) : (a.value = false, f = p, c());
                }
              };
            });
          });
        });
      });
    };
  }
  const Yw = {
    plugins: [
      Jw()
    ]
  }, Qw = Ae({
    name: "Pinia Colada",
    dependsOn: [
      "pinia"
    ],
    setup(e) {
      e.vueApp.use(gb, {
        ...Yw
      });
      const t = e.vueApp.config.globalProperties.$pinia;
      e.payload && e.payload.pinia_colada && mb(Za(t), e.payload.pinia_colada);
    }
  }), Xw = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/), Zw = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, e0 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, t0 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, n0 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function r0(e) {
    return Zw.test(e) || e0.test(e.slice(0, 4));
  }
  function o0(e) {
    return t0.test(e) || n0.test(e.slice(0, 4));
  }
  function s0(e) {
    return /iPad|iPhone|iPod/.test(e);
  }
  function i0(e) {
    return /android/i.test(e);
  }
  function a0(e) {
    return /Windows/.test(e);
  }
  function l0(e) {
    return /Mac OS X/.test(e);
  }
  const c0 = [
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
  function u0(e) {
    for (const t of c0) if (t.regex.test(e)) return t.name;
    return "";
  }
  function Yc(e, t = {}) {
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
    else n = r0(e), r = o0(e), o = s0(e), s = i0(e);
    const i = a0(e), a = l0(e), l = u0(e), u = l === "Safari", c = l === "Firefox", f = l === "Edge", d = l === "Chrome", p = l === "Samsung", h = Xw.test(e);
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
      isChrome: d,
      isSamsung: p,
      isCrawler: h
    };
  }
  let f0, d0, Ht, Pp, Ee, Qc, p0, Cn, Xe, h0, Ap, Xc, Zc;
  f0 = Ae(() => {
    const e = ut(), t = e.public.device.defaultUserAgent;
    let n;
    {
      const r = navigator.userAgent || t;
      n = Ye(Yc(r)), e.public.device.refreshOnResize && window.addEventListener("resize", () => {
        setTimeout(() => {
          const o = Yc(navigator.userAgent || r);
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
  d0 = Ae((e) => {
    ut().public.prismic.preview && window.addEventListener("prismicPreviewUpdate", (n) => {
      n.preventDefault(), ba();
    });
  });
  Ht = {
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    span: "span"
  };
  Pp = (e) => Array.isArray(e) ? `[${e.map(Pp).join(", ")}]` : typeof e == "string" ? `"${e}"` : e instanceof Date ? `${e.getTime()}` : `${e}`;
  Ee = (e) => (n, ...r) => {
    const o = r.map(Pp).join(", "), s = n && r.length ? ", " : "";
    return `[${e}(${n}${s}${o})]`;
  };
  Qc = (e) => {
    const t = Ee(e);
    return (r) => t(r);
  };
  p0 = (e) => {
    const t = Ee(e);
    return (...r) => t("", ...r);
  };
  Ft = {
    at: Ee("at"),
    not: Ee("not"),
    any: Ee("any"),
    in: Ee("in"),
    fulltext: Ee("fulltext"),
    has: Qc("has"),
    missing: Qc("missing"),
    similar: p0("similar"),
    geopointNear: Ee("geopoint.near"),
    numberLessThan: Ee("number.lt"),
    numberGreaterThan: Ee("number.gt"),
    numberInRange: Ee("number.inRange"),
    dateAfter: Ee("date.after"),
    dateBefore: Ee("date.before"),
    dateBetween: Ee("date.between"),
    dateDayOfMonth: Ee("date.day-of-month"),
    dateDayOfMonthAfter: Ee("date.day-of-month-after"),
    dateDayOfMonthBefore: Ee("date.day-of-month-before"),
    dateDayOfWeek: Ee("date.day-of-week"),
    dateDayOfWeekAfter: Ee("date.day-of-week-after"),
    dateDayOfWeekBefore: Ee("date.day-of-week-before"),
    dateMonth: Ee("date.month"),
    dateMonthAfter: Ee("date.month-after"),
    dateMonthBefore: Ee("date.month-before"),
    dateYear: Ee("date.year"),
    dateHour: Ee("date.hour"),
    dateHourAfter: Ee("date.hour-after"),
    dateHourBefore: Ee("date.hour-before")
  };
  Cn = (e) => Array.isArray(e) ? e : [
    e
  ];
  Xe = (e = {}, t) => ({
    ...e,
    filters: [
      ...e.filters || [],
      ...Cn(t)
    ]
  });
  h0 = (e) => typeof e == "function" ? e : () => e;
  Ap = "7.17.2";
  Xc = (e) => `https://prismic.dev/msg/client/v${Ap}/${e}`;
  Zc = (e) => Ft.at("document.tags", Cn(e));
  var m0 = Object.defineProperty, g0 = (e, t, n) => t in e ? m0(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, eu = (e, t, n) => g0(e, typeof t != "symbol" ? t + "" : t, n);
  class kt extends Error {
    constructor(t = "An invalid API response was returned", n, r) {
      super(t), eu(this, "url"), eu(this, "response"), this.url = n, this.response = r;
    }
  }
  const sl = (e, t) => {
    const n = e.find((r) => t(r));
    if (!n) throw new kt("Ref could not be found.", void 0, void 0);
    return n;
  }, tu = (e) => sl(e, (t) => t.isMasterRef), Ti = (e, t) => sl(e, (n) => n.id === t), Ri = (e, t) => sl(e, (n) => n.label === t), xp = "io.prismic.preview", y0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    preview: xp
  }, Symbol.toStringTag, {
    value: "Module"
  })), nu = (e) => e.replace(/%3B/g, ";"), v0 = (e) => {
    const t = e.split("; ");
    let n;
    for (const r of t) {
      const o = r.split("=");
      if (nu(o[0]).replace(/%3D/g, "=") === xp) {
        n = nu(o.slice(1).join("="));
        break;
      }
    }
    return n;
  }, b0 = (e) => e.replace(/(\n| )*( |{|})(\n| )*/gm, (t, n, r) => r), zo = (e) => Ft.any("document.tags", Cn(e)), _0 = 5e3;
  let ru, Pi = 0;
  const w0 = (e, t = {}) => {
    const { level: n = "log" } = t;
    if (e === ru && Date.now() - Pi < _0) {
      Pi = Date.now();
      return;
    }
    Pi = Date.now(), ru = e, console[n](e);
  }, or = (e) => Ft.at("document.type", e);
  class Ys extends kt {
  }
  class Ea extends kt {
  }
  class S0 extends kt {
  }
  class E0 extends Ys {
  }
  class ou extends Ys {
  }
  class Ai extends Ys {
  }
  class C0 extends Ea {
  }
  let Tn, Op, k0, T0;
  Tn = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
  };
  Op = (e) => {
    var t;
    return {
      link_type: Tn.Document,
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
  Qs = (e, ...t) => {
    if (!e) return null;
    const n = "link_type" in e ? e : Op(e), [r] = t;
    let o;
    switch (typeof r == "function" || r == null ? o = {
      linkResolver: r
    } : o = {
      ...r
    }, n.link_type) {
      case Tn.Media:
      case Tn.Web:
        return "url" in n ? n.url : null;
      case Tn.Document: {
        if ("id" in n && o.linkResolver) {
          const s = o.linkResolver(n);
          if (s != null) return s;
        }
        return "url" in n && n.url ? n.url : null;
      }
      case Tn.Any:
      default:
        return null;
    }
  };
  k0 = (e) => new Promise((t) => setTimeout(t, e));
  T0 = ({ interval: e } = {}) => {
    const t = [];
    let n = false, r = 0;
    const o = () => {
      var l;
      !n && t.length > 0 && ((l = t.shift()) == null || l(), n = true);
    }, s = () => {
      n = false, o();
    }, i = async (l, u, c) => {
      const f = Date.now() - r;
      e && f < e && await k0(e - f);
      const d = (async () => l(...c))();
      u(d);
      try {
        await d;
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
  var R0 = Object.defineProperty, P0 = (e, t, n) => t in e ? R0(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, Jo = (e, t, n) => P0(e, typeof t != "symbol" ? t + "" : t, n);
  const A0 = 1500;
  class x0 {
    constructor(t) {
      if (Jo(this, "fetchFn"), Jo(this, "fetchOptions"), Jo(this, "queuedFetchJobs", {}), Jo(this, "dedupedFetchJobs", {}), this.fetchOptions = t.fetchOptions, typeof t.fetch == "function") this.fetchFn = t.fetch;
      else if (typeof globalThis.fetch == "function") this.fetchFn = globalThis.fetch;
      else throw new kt("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.", void 0, void 0);
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
      return this.queuedFetchJobs[r] || (this.queuedFetchJobs[r] = T0({
        interval: A0
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
  const O0 = "x-c", L0 = {
    accessToken: "access_token"
  }, $0 = (e) => typeof e == "string" ? e : e.direction === "desc" ? `${e.field} desc` : e.field, M0 = (e, t) => {
    const { filters: n, predicates: r, ...o } = t, s = new URL("documents/search", `${e}/`);
    if (n) for (const i of Cn(n)) s.searchParams.append("q", `[${i}]`);
    if (r) for (const i of Cn(r)) s.searchParams.append("q", `[${i}]`);
    for (const i in o) {
      const a = L0[i] || i;
      let l = o[i];
      if (a === "orderings") {
        const u = o[a];
        u != null && (l = `[${Cn(u).map((f) => $0(f)).join(",")}]`);
      } else a === "routes" && typeof o[a] == "object" && (l = JSON.stringify(Cn(o[a])));
      l != null && s.searchParams.set(a, Cn(l).join(","));
    }
    return s.searchParams.set(O0, `js-${Ap}`), s.toString();
  }, I0 = (e) => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e), D0 = (e) => {
    if (I0(e)) return `https://${e}.cdn.prismic.io/api/v2`;
    throw new kt(`An invalid Prismic repository name was given: ${e}`, void 0, void 0);
  }, N0 = (e) => {
    try {
      const t = new URL(e).hostname;
      if (t.endsWith("prismic.io") || t.endsWith("wroom.io") || t.endsWith("wroom.test")) return t.split(".")[0];
    } catch {
    }
    throw new kt(`An invalid Prismic Document API endpoint was provided: ${e}`, void 0, void 0);
  }, su = (e) => {
    try {
      return new URL(e), true;
    } catch {
      return false;
    }
  };
  var B0 = Object.defineProperty, Lp = (e) => {
    throw TypeError(e);
  }, j0 = (e, t, n) => t in e ? B0(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, hn = (e, t, n) => j0(e, typeof t != "symbol" ? t + "" : t, n), $p = (e, t, n) => t.has(e) || Lp("Cannot " + n), iu = (e, t, n) => ($p(e, t, "read from private field"), n ? n.call(e) : t.get(e)), F0 = (e, t, n) => t.has(e) ? Lp("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), H0 = (e, t, n, r) => ($p(e, t, "write to private field"), t.set(e, n), n), Ur;
  const U0 = 100, W0 = 5e3, V0 = 500, q0 = 1e3, K0 = 3;
  var Bt;
  (function(e) {
    e.Master = "Master", e.ReleaseID = "ReleaseID", e.ReleaseLabel = "ReleaseLabel", e.Manual = "Manual";
  })(Bt || (Bt = {}));
  class G0 extends x0 {
    constructor(t, n = {}) {
      if (super(n), F0(this, Ur), hn(this, "documentAPIEndpoint"), hn(this, "accessToken"), hn(this, "routes"), hn(this, "brokenRoute"), hn(this, "defaultParams"), hn(this, "refState", {
        mode: Bt.Master,
        autoPreviewsEnabled: true
      }), hn(this, "cachedRepository"), hn(this, "cachedRepositoryExpiration", 0), n.documentAPIEndpoint || su(t), su(t)) {
        this.documentAPIEndpoint = t;
        try {
          this.repositoryName = N0(t);
        } catch {
          console.warn(`[@prismicio/client] A repository name could not be inferred from the provided endpoint (\`${t}\`). Some methods will be disabled. Create the client using a repository name to prevent this warning. For more details, see ${Xc("prefer-repository-name")}`);
        }
      } else this.documentAPIEndpoint = n.documentAPIEndpoint || D0(t), this.repositoryName = t;
      this.accessToken = n.accessToken, this.routes = n.routes, this.brokenRoute = n.brokenRoute, this.defaultParams = n.defaultParams, n.ref && this.queryContentFromRef(n.ref), this.graphQLFetch = this.graphQLFetch.bind(this);
    }
    set repositoryName(t) {
      H0(this, Ur, t);
    }
    get repositoryName() {
      if (!iu(this, Ur)) throw new kt(`A repository name is required for this method but one could not be inferred from the provided API endpoint (\`${this.documentAPIEndpoint}\`). To fix this error, provide a repository name when creating the client. For more details, see ${Xc("prefer-repository-name")}`, void 0, void 0);
      return iu(this, Ur);
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
      throw new Ea("No documents were returned", s, void 0);
    }
    async dangerouslyGetAll(t = {}) {
      var n;
      const { limit: r = 1 / 0, ...o } = t, s = {
        ...o,
        pageSize: Math.min(r, o.pageSize || ((n = this.defaultParams) == null ? void 0 : n.pageSize) || U0)
      }, i = [];
      let a;
      for (; (!a || a.next_page) && i.length < r; ) {
        const l = a ? a.page + 1 : void 0;
        a = await this.get({
          ...s,
          page: l
        }), i.push(...a.results), a.next_page && await new Promise((u) => setTimeout(u, V0));
      }
      return i.slice(0, r);
    }
    async getByID(t, n) {
      return await this.getFirst(Xe(n, Ft.at("document.id", t)));
    }
    async getByIDs(t, n) {
      return await this.get(Xe(n, Ft.in("document.id", t)));
    }
    async getAllByIDs(t, n) {
      return await this.dangerouslyGetAll(Xe(n, Ft.in("document.id", t)));
    }
    async getByUID(t, n, r) {
      return await this.getFirst(Xe(r, [
        or(t),
        Ft.at(`my.${t}.uid`, n)
      ]));
    }
    async getByUIDs(t, n, r) {
      return await this.get(Xe(r, [
        or(t),
        Ft.in(`my.${t}.uid`, n)
      ]));
    }
    async getAllByUIDs(t, n, r) {
      return await this.dangerouslyGetAll(Xe(r, [
        or(t),
        Ft.in(`my.${t}.uid`, n)
      ]));
    }
    async getSingle(t, n) {
      return await this.getFirst(Xe(n, or(t)));
    }
    async getByType(t, n) {
      return await this.get(Xe(n, or(t)));
    }
    async getAllByType(t, n) {
      return await this.dangerouslyGetAll(Xe(n, or(t)));
    }
    async getByTag(t, n) {
      return await this.get(Xe(n, zo(t)));
    }
    async getAllByTag(t, n) {
      return await this.dangerouslyGetAll(Xe(n, zo(t)));
    }
    async getByEveryTag(t, n) {
      return await this.get(Xe(n, Zc(t)));
    }
    async getAllByEveryTag(t, n) {
      return await this.dangerouslyGetAll(Xe(n, Zc(t)));
    }
    async getBySomeTags(t, n) {
      return await this.get(Xe(n, zo(t)));
    }
    async getAllBySomeTags(t, n) {
      return await this.dangerouslyGetAll(Xe(n, zo(t)));
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
      return Ti(r, t);
    }
    async getRefByLabel(t, n) {
      const r = await this.getRefs(n);
      return Ri(r, t);
    }
    async getMasterRef(t) {
      const n = await this.getRefs(t);
      return tu(n);
    }
    async getReleases(t) {
      return (await this.getRefs(t)).filter((r) => !r.isMasterRef);
    }
    async getReleaseByID(t, n) {
      const r = await this.getReleases(n);
      return Ti(r, t);
    }
    async getReleaseByLabel(t, n) {
      const r = await this.getReleases(n);
      return Ri(r, t);
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
      return M0(this.documentAPIEndpoint, {
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
        }), a = Qs(i, {
          linkResolver: t.linkResolver
        });
        if (typeof a == "string") return a;
      }
      return t.defaultURL;
    }
    queryLatestContent() {
      this.refState.mode = Bt.Master;
    }
    queryContentFromReleaseByID(t) {
      this.refState = {
        ...this.refState,
        mode: Bt.ReleaseID,
        releaseID: t
      };
    }
    queryContentFromReleaseByLabel(t) {
      this.refState = {
        ...this.refState,
        mode: Bt.ReleaseLabel,
        releaseLabel: t
      };
    }
    queryContentFromRef(t) {
      this.refState = {
        ...this.refState,
        mode: Bt.Manual,
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
      return l && a.searchParams.set("query", b0(l)), await this.fetchFn(a.toString(), {
        ...n,
        headers: i
      });
    }
    async getCachedRepository(t) {
      return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + W0, this.cachedRepository = await this.getRepository(t)), this.cachedRepository;
    }
    async getCachedRepositoryForm(t, n) {
      const o = (await this.getCachedRepository(n)).forms[t];
      if (!o) throw new kt(`Form with name "${t}" could not be found`, void 0, void 0);
      return o;
    }
    async getResolvedRefString(t) {
      var n, r;
      if (this.refState.autoPreviewsEnabled) {
        let i, a;
        if ((n = this.refState.httpRequest) != null && n.headers ? "get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get == "function" ? a = this.refState.httpRequest.headers.get("cookie") : "cookie" in this.refState.httpRequest.headers && (a = this.refState.httpRequest.headers.cookie) : (r = globalThis.document) != null && r.cookie && (a = globalThis.document.cookie), a && (i = v0(a)), i) return i;
      }
      const o = await this.getCachedRepository(t), s = this.refState.mode;
      if (s === Bt.ReleaseID) return Ti(o.refs, this.refState.releaseID).ref;
      if (s === Bt.ReleaseLabel) return Ri(o.refs, this.refState.releaseLabel).ref;
      if (s === Bt.Manual) {
        const i = await h0(this.refState.ref)();
        if (typeof i == "string") return i;
      }
      return tu(o.refs).ref;
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
        if (!(i instanceof Ai || i instanceof ou) || n >= K0 - 1) throw i;
        (t == null ? void 0 : t.ref) || (this.cachedRepository = void 0);
        const a = (o = (r = i.message.match(/Master ref is: (?<ref>.*)$/)) == null ? void 0 : r.groups) == null ? void 0 : o.ref;
        if (!a) throw i;
        const l = new URL(s).searchParams.get("ref"), u = i instanceof Ai ? "invalid" : "expired";
        return w0(`[@prismicio/client] The ref (${l}) was ${u}. Now retrying with the latest master ref (${a}). If you were previewing content, the response will not include draft content.`, {
          level: "warn"
        }), await this._get({
          ...t,
          ref: a
        }, n + 1);
      }
    }
    async fetch(t, n = {}) {
      const r = await super.fetch(t, n);
      if (r.status !== 404 && r.status !== 429 && r.json == null) throw new kt(void 0, t, r.json || r.text);
      switch (r.status) {
        case 200:
        case 201:
          return r.json;
        case 400:
          throw new S0(r.json.message, t, r.json);
        case 401:
        case 403:
          throw new Ys(r.json.error || r.json.message, t, r.json);
        case 404:
          throw r.json === void 0 ? new C0(`Prismic repository not found. Check that "${this.documentAPIEndpoint}" is pointing to the correct repository.`, t, t.startsWith(this.documentAPIEndpoint) ? void 0 : r.text) : r.json.type === "api_notfound_error" ? new Ai(r.json.message, t, r.json) : r.json.type === "api_security_error" && /preview token.*expired/i.test(r.json.message) ? new E0(r.json.message, t, r.json) : new Ea(r.json.message, t, r.json);
        case 410:
          throw new ou(r.json.message, t, r.json);
        case 429: {
          const o = Number(r.headers.get("retry-after")), s = Number.isNaN(o) ? q0 : o;
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
      throw new kt(void 0, t, r.json);
    }
  }
  Ur = /* @__PURE__ */ new WeakMap();
  let z0, Qe, il, J0, Or, Q0, X0, Z0, eS, tS, nS, Mp, rS, oS, sS, iS, Ip, aS, lS, cS, uS, Lr, dS, Dp, pS, hS, ll, Eo, Co, at, mS, gS, yS, Bp, vS, Zs;
  z0 = (e, t) => new G0(e, t);
  Qe = (e) => e != null;
  il = (e) => !!e.length;
  al = (e) => Qe(e) ? e.length === 1 && "text" in e[0] ? !!e[0].text : !!e.length : false;
  J0 = al;
  Or = (e) => Qe(e) && !!e.url;
  Y0 = Or;
  Xs = (e) => Qe(e) && ("id" in e || "url" in e);
  Q0 = Xs;
  X0 = Xs;
  Z0 = Qe;
  eS = Qe;
  tS = Qe;
  nS = Qe;
  Mp = (e) => Qe(Mp) && !!e;
  rS = Qe;
  oS = (e) => Qe(e) && !!e.embed_url;
  sS = (e) => Qe(e) && "longitude" in e;
  iS = Qe;
  Ip = Qe;
  aS = Ip;
  lS = (e) => Qe(e) && il(e);
  cS = (e) => Qe(e) && il(e);
  uS = (e) => Qe(e) && il(e);
  Lr = Object.freeze(Object.defineProperty({
    __proto__: null,
    color: tS,
    contentRelationship: X0,
    date: Z0,
    embed: oS,
    geoPoint: sS,
    group: cS,
    image: Y0,
    imageThumbnail: Or,
    integrationField: Ip,
    integrationFields: aS,
    keyText: Mp,
    link: Xs,
    linkToMedia: Q0,
    number: nS,
    repeatable: lS,
    richText: al,
    select: rS,
    sliceZone: uS,
    table: iS,
    timestamp: eS,
    title: J0
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  fS = (e) => e ? e.length === 24 ? new Date(e.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3")) : new Date(e) : null;
  dS = (e) => {
    const t = /^(\/(?!\/)|#)/.test(e), n = !t && !/^https?:\/\//.test(e);
    return t && !n;
  };
  Dp = (e, t = {}) => {
    if (e && ("link_type" in e ? Xs(e) : e)) {
      const n = "target" in e ? e.target : void 0, r = Qs(e, t.linkResolver), o = r ?? void 0, s = typeof o == "string" ? !dS(o) : false, i = t.rel ? t.rel({
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
  pS = (e, t = " ") => {
    let n = "";
    for (let r = 0; r < e.length; r++) "text" in e[r] && (n += (n ? t : "") + e[r].text);
    return n;
  };
  Np = (e, ...t) => {
    if (e) {
      const [n] = t;
      let r;
      return typeof n == "string" ? r = {
        separator: n
      } : r = {
        ...n
      }, pS(e, r.separator);
    } else return null;
  };
  hS = /["'&<>]/;
  ll = (e) => {
    const t = "" + e, n = hS.exec(t);
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
  Eo = (e, t) => {
    const n = {
      ...t
    };
    "direction" in e && e.direction === "rtl" && (n.dir = e.direction), "data" in e && "label" in e.data && e.data.label && (n.class = n.class ? `${n.class} ${e.data.label}` : e.data.label);
    const r = [];
    for (const o in n) {
      const s = n[o];
      s && (typeof s == "boolean" ? r.push(o) : r.push(`${o}="${ll(s)}"`));
    }
    return r.length && r.unshift(""), r.join(" ");
  };
  Co = (e) => e && typeof e != "function" ? e : {};
  at = (e, t) => {
    const n = Co(t);
    return ({ node: r, children: o }) => `<${e}${Eo(r, n)}>${o}</${e}>`;
  };
  mS = (e) => {
    const t = Co(e);
    return ({ node: n }) => `<pre${Eo(n, t)}>${ll(n.text)}</pre>`;
  };
  gS = (e, t) => {
    const n = Co(t);
    return ({ node: r }) => {
      const o = {
        ...n,
        src: r.url,
        alt: r.alt,
        copyright: r.copyright
      };
      let s = `<img${Eo(r, o)} />`;
      return r.linkTo && (s = Bp(e)({
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
  yS = (e) => {
    const t = Co(e);
    return ({ node: n }) => {
      const r = {
        ...t,
        "data-oembed": n.oembed.embed_url,
        "data-oembed-type": n.oembed.type,
        "data-oembed-provider": n.oembed.provider_name
      };
      return `<div${Eo(n, r)}>${n.oembed.html}</div>`;
    };
  };
  Bp = (e, t) => {
    const n = Co(t);
    return ({ node: r, children: o }) => {
      const s = {
        ...n
      };
      return r.data.link_type === Tn.Web ? (s.href = r.data.url, s.target = r.data.target, s.rel = "noopener noreferrer") : r.data.link_type === Tn.Document ? s.href = Qs(r.data, {
        linkResolver: e
      }) : r.data.link_type === Tn.Media && (s.href = r.data.url), `<a${Eo(r, s)}>${o}</a>`;
    };
  };
  vS = () => ({ text: e }) => e ? ll(e).replace(/\n/g, "<br />") : "";
  Zs = () => (++Zs.i).toString();
  Zs.i = 0;
  let jp, Zr, xi, bS, Fp, Hp, _S, Up, wS, SS, ES, Oi, CS, Wp, kS, ko, TS, Li, au, Vp, PS, qp, cl, Kp, Gp, AS, xS, OS, Ca, LS, Ts, $S, MS, IS, DS, NS, BS, jS, FS, HS, US, WS, VS, qS, KS, GS, zS, JS, YS, QS, lu, XS, ZS, eE, tE, nE, rE, oE, sE, cu, uu, iE, aE, lE, cE, uE, fE, dE, pE, hE, mE;
  jp = (e) => {
    const t = bS(e), n = [];
    for (let r = 0; r < t.length; r++) n.push(Fp(t[r]));
    return {
      key: Zs(),
      children: n
    };
  };
  Zr = (e, t = []) => ({
    key: Zs(),
    type: e.type,
    text: "text" in e ? e.text : void 0,
    node: e,
    children: t
  });
  xi = (e) => Zr({
    type: Ht.span,
    text: e,
    spans: []
  });
  bS = (e) => {
    const t = e.slice(0);
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (r.type === Ht.listItem || r.type === Ht.oListItem) {
        const o = [
          r
        ];
        for (; t[n + 1] && t[n + 1].type === r.type; ) o.push(t[n + 1]), t.splice(n, 1);
        r.type === Ht.listItem ? t[n] = {
          type: Ht.list,
          items: o
        } : t[n] = {
          type: Ht.oList,
          items: o
        };
      }
    }
    return t;
  };
  Fp = (e) => {
    if ("text" in e) return Zr(e, Hp(e.spans, e));
    if ("items" in e) {
      const t = [];
      for (let n = 0; n < e.items.length; n++) t.push(Fp(e.items[n]));
      return Zr(e, t);
    }
    return Zr(e);
  };
  Hp = (e, t, n) => {
    if (!e.length) return [
      xi(t.text)
    ];
    const r = e.slice(0);
    r.sort((s, i) => s.start - i.start || i.end - s.end);
    const o = [];
    for (let s = 0; s < r.length; s++) {
      const i = r[s], a = n && n.start || 0, l = i.start - a, u = i.end - a, c = t.text.slice(l, u), f = [];
      for (let p = s; p < r.length; p++) {
        const h = r[p];
        h !== i && (h.start >= i.start && h.end <= i.end ? (f.push(h), r.splice(p, 1), p--) : h.start < i.end && h.end > i.start && (f.push({
          ...h,
          end: i.end
        }), r[p] = {
          ...h,
          start: i.end
        }));
      }
      s === 0 && l > 0 && o.push(xi(t.text.slice(0, l)));
      const d = {
        ...i,
        text: c
      };
      o.push(Zr(d, Hp(f, {
        ...t,
        text: c
      }, i))), u < t.text.length && o.push(xi(t.text.slice(u, r[s + 1] ? r[s + 1].start - a : void 0)));
    }
    return o;
  };
  _S = (e, t) => Up(jp(e).children, t);
  Up = (e, t) => {
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t(o.type, o.node, o.text, Up(o.children, t), o.key);
      s != null && n.push(s);
    }
    return n;
  };
  wS = {
    [Ht.listItem]: "listItem",
    [Ht.oListItem]: "oListItem",
    [Ht.list]: "list",
    [Ht.oList]: "oList"
  };
  SS = (e) => (t, n, r, o, s) => {
    const i = e[wS[t] || t];
    if (i) return i({
      type: t,
      node: n,
      text: r,
      children: o,
      key: s
    });
  };
  ES = (...e) => (...t) => {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r) {
        const o = r(...t);
        if (o != null) return o;
      }
    }
  };
  Oi = (e, t) => {
    const n = (o, s) => typeof o == "function" ? (i) => (o == null ? void 0 : o(i)) || s(i) : s, r = {
      heading1: n(t == null ? void 0 : t.heading1, at("h1", t == null ? void 0 : t.heading1)),
      heading2: n(t == null ? void 0 : t.heading2, at("h2", t == null ? void 0 : t.heading2)),
      heading3: n(t == null ? void 0 : t.heading3, at("h3", t == null ? void 0 : t.heading3)),
      heading4: n(t == null ? void 0 : t.heading4, at("h4", t == null ? void 0 : t.heading4)),
      heading5: n(t == null ? void 0 : t.heading5, at("h5", t == null ? void 0 : t.heading5)),
      heading6: n(t == null ? void 0 : t.heading6, at("h6", t == null ? void 0 : t.heading6)),
      paragraph: n(t == null ? void 0 : t.paragraph, at("p", t == null ? void 0 : t.paragraph)),
      preformatted: n(t == null ? void 0 : t.preformatted, mS(t == null ? void 0 : t.preformatted)),
      strong: n(t == null ? void 0 : t.strong, at("strong", t == null ? void 0 : t.strong)),
      em: n(t == null ? void 0 : t.em, at("em", t == null ? void 0 : t.em)),
      listItem: n(t == null ? void 0 : t.listItem, at("li", t == null ? void 0 : t.listItem)),
      oListItem: n(t == null ? void 0 : t.oListItem, at("li", t == null ? void 0 : t.oListItem)),
      list: n(t == null ? void 0 : t.list, at("ul", t == null ? void 0 : t.list)),
      oList: n(t == null ? void 0 : t.oList, at("ol", t == null ? void 0 : t.oList)),
      image: n(t == null ? void 0 : t.image, gS(e, t == null ? void 0 : t.image)),
      embed: n(t == null ? void 0 : t.embed, yS(t == null ? void 0 : t.embed)),
      hyperlink: n(t == null ? void 0 : t.hyperlink, Bp(e, t == null ? void 0 : t.hyperlink)),
      label: n(t == null ? void 0 : t.label, at("span", t == null ? void 0 : t.label)),
      span: n(t == null ? void 0 : t.span, vS())
    };
    return CS(r);
  };
  CS = (e) => {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r && (t[n] = (o) => r({
        ...o,
        children: o.children.join("")
      }));
    }
    return SS(t);
  };
  Wp = (e, ...t) => {
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
      return o.serializer ? typeof o.serializer == "function" ? s = ES((i, a, l, u, c) => o.serializer(i, a, l, u.join(""), c), Oi(o.linkResolver)) : s = Oi(o.linkResolver, o.serializer) : s = Oi(o.linkResolver), _S(e, s).join("");
    } else return null;
  };
  kS = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  ko = (e, t) => {
    const n = new URL(e);
    for (const o in t) {
      const s = kS(o), i = t[o];
      i === void 0 ? n.searchParams.delete(s) : Array.isArray(i) ? n.searchParams.set(s, i.join(",")) : n.searchParams.set(s, `${i}`);
    }
    const r = n.searchParams.get("s");
    return r && (n.searchParams.delete("s"), n.searchParams.append("s", r)), n.toString();
  };
  TS = (e, { pixelDensities: t, ...n }) => t.map((r) => `${ko(e, {
    ...n,
    dpr: r
  })} ${r}x`).join(", ");
  Li = (e, { widths: t, ...n }) => t.map((r) => `${ko(e, {
    ...n,
    w: void 0,
    h: void 0,
    height: void 0,
    width: r
  })} ${r}w`).join(", ");
  RS = (e, t = {}) => e && Or(e) ? ko(e.url, t) : null;
  au = [
    640,
    828,
    1200,
    2048,
    3840
  ];
  Vp = (e, t = {}) => {
    if (e && Or(e)) {
      let { widths: n = au, ...r } = t;
      const { url: o, dimensions: s, id: i, alt: a, copyright: l, edit: u, ...c } = e, f = Object.values(c);
      return n === "thumbnails" && f.length < 1 && (n = au), {
        src: ko(o, r),
        srcset: n === "thumbnails" ? [
          Li(o, {
            ...r,
            widths: [
              s.width
            ]
          }),
          ...f.map((d) => Li(d.url, {
            ...r,
            widths: [
              d.dimensions.width
            ]
          }))
        ].join(", ") : Li(e.url, {
          ...r,
          widths: n
        })
      };
    } else return null;
  };
  PS = [
    1,
    2,
    3
  ];
  qp = (e, t = {}) => {
    if (e && Or(e)) {
      const { pixelDensities: n = PS, ...r } = t;
      return {
        src: ko(e.url, r),
        srcset: TS(e.url, {
          ...r,
          pixelDensities: n
        })
      };
    } else return null;
  };
  cl = te({
    __name: "Wrapper",
    props: {
      wrapper: {}
    },
    setup(e) {
      return (t, n) => t.wrapper ? (j(), Z(nt(t.wrapper), Vn(We({
        key: 0
      }, t.$attrs)), {
        default: ie(() => [
          ae(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : ae(t.$slots, "default", {
        key: 1
      });
    }
  });
  Kp = Symbol("prismic");
  To = () => Re(Kp, {
    options: {
      endpoint: ""
    }
  });
  Gp = (e) => {
    const t = /^\/(?!\/)/.test(e), n = !t && !/^https?:\/\//i.test(e);
    return t && !n;
  };
  AS = "div";
  xS = te({
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
      const t = e, { options: n } = To(), r = W(() => {
        if (!al(t.field)) return t.fallback ?? "";
        const c = t.linkResolver ?? n.linkResolver, f = t.serializer ?? n.richTextSerializer;
        return Wp(t.field, {
          linkResolver: c,
          serializer: f
        });
      }), o = fe(null), s = Re(So, null);
      let i = [];
      const a = function(c) {
        c.preventDefault(), s == null ? void 0 : s.push(this.href);
      }, l = () => {
        const c = o.value && "$el" in o.value ? o.value.$el : o.value;
        c && "querySelectorAll" in c && (i = Array.from(c.querySelectorAll("a")).map((f) => {
          const d = f.getAttribute("href");
          if (d && Gp(d)) {
            const p = a.bind({
              href: d
            });
            return f.addEventListener("click", p), {
              element: f,
              listener: p
            };
          } else return false;
        }).filter((f) => f));
      }, u = () => {
        i.forEach(({ element: c, listener: f }) => c.removeEventListener("click", f)), i = [];
      };
      return ot(() => {
        u(), je(l);
      }), Oe(r, () => {
        u(), je(l);
      }), xn(() => {
        u();
      }), (c, f) => B(Lr).richText(e.field) || e.fallback ? (j(), Z(nt(e.wrapper || AS), {
        key: 0,
        ref_key: "root",
        ref: o,
        innerHTML: r.value
      }, null, 8, [
        "innerHTML"
      ])) : zt("", true);
    }
  });
  OS = "div";
  Ca = te({
    name: "PrismicEmbed",
    __name: "PrismicEmbed",
    props: {
      field: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => B(Lr).embed(t.field) ? (j(), Z(nt(t.wrapper || OS), {
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
  LS = [
    "src",
    "srcset",
    "alt"
  ];
  Ts = te({
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
      const t = e, { options: n } = To(), r = W(() => {
        var o, s;
        if (!Or(t.field)) return;
        let i, a;
        if (t.widths || !t.pixelDensities) {
          const l = Vp(t.field, {
            ...t.imgixParams,
            widths: t.widths === "defaults" ? (o = n.components) == null ? void 0 : o.imageWidthSrcSetDefaults : t.widths
          });
          i = l.src, a = l.srcset;
        } else if (t.pixelDensities) {
          const l = qp(t.field, {
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
      return (o, s) => r.value ? (j(), be("img", {
        key: 0,
        src: r.value.src,
        srcset: r.value.srcSet,
        alt: r.value.alt
      }, null, 8, LS)) : zt("", true);
    }
  });
  $S = "router-link";
  MS = "a";
  IS = "noreferrer";
  Rs = te({
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
      const t = e, { options: n } = To(), r = W(() => Dp(t.field || t.document, {
        linkResolver: t.linkResolver || n.linkResolver,
        rel(i) {
          var a;
          const l = t.rel || ((a = n.components) == null ? void 0 : a.linkRel);
          return l ? typeof l == "function" ? l(i) : l : i.isExternal ? IS : void 0;
        }
      })), o = W(() => {
        var i, a;
        return Gp(r.value.href || "") ? t.internalComponent || ((i = n.components) == null ? void 0 : i.linkInternalComponent) || $S : t.externalComponent || ((a = n.components) == null ? void 0 : a.linkExternalComponent) || MS;
      }), s = W(() => o.value === "a" ? {
        href: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      } : {
        to: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      });
      return (i, a) => (j(), Z(nt(o.value), Vn(Gn(s.value)), {
        default: ie(() => [
          ae(i.$slots, "default", {}, () => [
            Ct(Xt(t.field && "text" in t.field ? t.field.text : void 0), 1)
          ])
        ]),
        _: 3
      }, 16));
    }
  });
  DS = [
    "dir"
  ];
  NS = [
    "dir"
  ];
  BS = [
    "dir"
  ];
  jS = [
    "dir"
  ];
  FS = [
    "dir"
  ];
  HS = [
    "dir"
  ];
  US = [
    "dir"
  ];
  WS = {
    key: 7
  };
  VS = {
    key: 8
  };
  qS = {
    key: 9
  };
  KS = [
    "dir"
  ];
  GS = [
    "dir"
  ];
  zS = {
    key: 12
  };
  JS = {
    key: 13
  };
  YS = {
    key: 14,
    class: "block-img"
  };
  QS = {
    key: 0
  };
  lu = te({
    name: "PrismicRichTextDefaultComponent",
    __name: "PrismicRichTextDefaultComponent",
    props: {
      node: {},
      linkResolver: {}
    },
    setup(e) {
      const t = e, n = W(() => "direction" in t.node && t.node.direction === "rtl" ? "rtl" : void 0);
      return (r, o) => r.node.type === "heading1" ? (j(), be("h1", {
        key: 0,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, DS)) : r.node.type === "heading2" ? (j(), be("h2", {
        key: 1,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, NS)) : r.node.type === "heading3" ? (j(), be("h3", {
        key: 2,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, BS)) : r.node.type === "heading4" ? (j(), be("h4", {
        key: 3,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, jS)) : r.node.type === "heading5" ? (j(), be("h5", {
        key: 4,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, FS)) : r.node.type === "heading6" ? (j(), be("h6", {
        key: 5,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, HS)) : r.node.type === "paragraph" ? (j(), be("p", {
        key: 6,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, US)) : r.node.type === "preformatted" ? (j(), be("pre", WS, [
        ae(r.$slots, "default")
      ])) : r.node.type === "strong" ? (j(), be("strong", VS, [
        ae(r.$slots, "default")
      ])) : r.node.type === "em" ? (j(), be("em", qS, [
        ae(r.$slots, "default")
      ])) : r.node.type === "list-item" ? (j(), be("li", {
        key: 10,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, KS)) : r.node.type === "o-list-item" ? (j(), be("li", {
        key: 11,
        dir: n.value
      }, [
        ae(r.$slots, "default")
      ], 8, GS)) : r.node.type === "group-list-item" ? (j(), be("ul", zS, [
        ae(r.$slots, "default")
      ])) : r.node.type === "group-o-list-item" ? (j(), be("ol", JS, [
        ae(r.$slots, "default")
      ])) : r.node.type === "image" ? (j(), be("p", YS, [
        r.node.linkTo ? (j(), Z(Rs, {
          key: 0,
          field: r.node.linkTo
        }, {
          default: ie(() => [
            le(Ts, {
              field: r.node
            }, null, 8, [
              "field"
            ])
          ]),
          _: 1
        }, 8, [
          "field"
        ])) : (j(), Z(Ts, {
          key: 1,
          field: r.node
        }, null, 8, [
          "field"
        ]))
      ])) : r.node.type === "embed" ? (j(), Z(Ca, {
        key: 15,
        field: r.node.oembed
      }, null, 8, [
        "field"
      ])) : r.node.type === "hyperlink" ? (j(), Z(Rs, {
        key: 16,
        field: r.node.data,
        "link-resolver": r.linkResolver
      }, {
        default: ie(() => [
          ae(r.$slots, "default")
        ]),
        _: 3
      }, 8, [
        "field",
        "link-resolver"
      ])) : r.node.type === "label" ? (j(), be("span", {
        key: 17,
        class: mo(r.node.data.label)
      }, [
        ae(r.$slots, "default")
      ], 2)) : (j(true), be(Te, {
        key: 18
      }, _r(r.node.text.split(`
`), (s, i) => (j(), be(Te, {
        key: s
      }, [
        i > 0 ? (j(), be("br", QS)) : zt("", true),
        Ct(Xt(s), 1)
      ], 64))), 128));
    }
  });
  XS = te({
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
        return ((s = n.components) == null ? void 0 : s[t[o.type] || o.type]) || lu;
      }
      return (o, s) => {
        const i = qi("PrismicRichTextSerialize", true);
        return j(true), be(Te, null, _r(n.children, (a) => (j(), Z(nt(r(a)), {
          key: JSON.stringify(a),
          node: a.node,
          "link-resolver": r(a) === lu ? n.linkResolver : void 0
        }, {
          default: ie(() => [
            a.children.length ? (j(), Z(i, {
              key: 0,
              children: a.children,
              components: o.components,
              "link-resolver": o.linkResolver
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
  Ps = te({
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
      const t = e, { options: n } = To(), r = W(() => {
        var a;
        return t.components || ((a = n.components) == null ? void 0 : a.richTextComponents);
      }), o = W(() => t.linkResolver || n.linkResolver), s = W(() => jp(t.field || []).children), i = W(() => {
        var a;
        return t.components ? true : t.serializer ? false : (a = n.components) != null && a.richTextComponents ? true : !n.richTextSerializer;
      });
      return (a, l) => i.value && (B(Lr).richText(e.field) || e.fallback) ? (j(), Z(cl, {
        key: 0,
        wrapper: e.wrapper
      }, {
        default: ie(() => [
          s.value.length ? (j(), Z(XS, {
            key: 0,
            children: s.value,
            components: r.value,
            "link-resolver": o.value
          }, null, 8, [
            "children",
            "components",
            "link-resolver"
          ])) : (j(), Z(nt(e.fallback), {
            key: 1
          }))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : i.value ? zt("", true) : (j(), Z(xS, {
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
  ZS = () => ({
    table: {
      type: Object,
      required: true
    }
  });
  eE = () => ({
    head: {
      type: Object,
      required: true
    }
  });
  tE = () => ({
    body: {
      type: Object,
      required: true
    }
  });
  nE = () => ({
    row: {
      type: Object,
      required: true
    }
  });
  rE = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  oE = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  sE = {
    table: te({
      props: ZS(),
      setup(e, { slots: t }) {
        return () => de("table", t.default ? t.default() : []);
      }
    }),
    thead: te({
      props: eE(),
      setup(e, { slots: t }) {
        return () => de("thead", t.default ? t.default() : []);
      }
    }),
    tbody: te({
      props: tE(),
      setup(e, { slots: t }) {
        return () => de("tbody", t.default ? t.default() : []);
      }
    }),
    tr: te({
      props: nE(),
      setup(e, { slots: t }) {
        return () => de("tr", t.default ? t.default() : []);
      }
    }),
    th: te({
      props: rE(),
      setup(e, { slots: t }) {
        return () => de("th", t.default ? t.default() : []);
      }
    }),
    td: te({
      props: oE(),
      setup(e, { slots: t }) {
        return () => de("td", t.default ? t.default() : []);
      }
    })
  };
  cu = te({
    name: "PrismicTableRow",
    __name: "PrismicTableRow",
    props: {
      row: {},
      components: {}
    },
    setup(e) {
      const t = e;
      return (n, r) => (j(), Z(nt(t.components.tr), {
        row: n.row
      }, {
        default: ie(() => [
          (j(true), be(Te, null, _r(n.row.cells, (o) => (j(), be(Te, {
            key: o.key
          }, [
            o.type === "header" ? (j(), Z(nt(t.components.th), {
              key: 0,
              cell: o
            }, {
              default: ie(() => [
                le(Ps, {
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
            ])) : (j(), Z(nt(t.components.td), {
              key: 1,
              cell: o
            }, {
              default: ie(() => [
                le(Ps, {
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
  uu = te({
    name: "PrismicTable",
    __name: "PrismicTable",
    props: {
      field: {},
      fallback: {},
      components: {}
    },
    setup(e) {
      const t = e, n = W(() => ({
        ...sE,
        ...t.components
      }));
      return (r, o) => B(Lr).table(r.field) ? (j(), Z(nt(n.value.table), We({
        key: 0,
        table: r.field
      }, r.$attrs), {
        default: ie(() => [
          r.field.head ? (j(), Z(nt(n.value.thead), {
            key: 0,
            head: r.field.head
          }, {
            default: ie(() => [
              (j(true), be(Te, null, _r(r.field.head.rows, (s) => (j(), Z(cu, {
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
          ])) : zt("", true),
          (j(), Z(nt(n.value.tbody), {
            body: r.field.body
          }, {
            default: ie(() => [
              (j(true), be(Te, null, _r(r.field.body.rows, (s) => (j(), Z(cu, {
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
      ])) : (j(), Z(nt(r.fallback), {
        key: 1
      }));
    }
  });
  iE = () => null;
  fu = te({
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
      const t = e, { options: n } = To(), r = W(() => t.slices.map((o, s) => {
        var i, a;
        const l = "slice_type" in o ? o.slice_type : o.type, u = "id" in o && typeof o.id == "string" ? o.id : `${s}-${JSON.stringify(o)}`, c = ((i = t.components) == null ? void 0 : i[l]) || t.defaultComponent || ((a = n.components) == null ? void 0 : a.sliceZoneDefaultComponent);
        if (!c) return {
          is: iE,
          key: u,
          props: {
            slice: o
          }
        };
        if (o.__mapped) {
          const { __mapped: f, ...d } = o;
          return {
            is: c,
            key: u,
            props: d
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
      return (o, s) => o.slices ? (j(), Z(cl, {
        key: 0,
        wrapper: o.wrapper
      }, {
        default: ie(() => [
          (j(true), be(Te, null, _r(r.value, (i) => (j(), Z(nt(i.is), We({
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
  du = te({
    name: "PrismicText",
    __name: "PrismicText",
    props: {
      field: {},
      fallback: {},
      separator: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => B(Lr).richText(t.field) || t.fallback ? (j(), Z(cl, {
        key: 0,
        wrapper: t.wrapper
      }, {
        default: ie(() => [
          Ct(Xt(B(Np)(t.field) || t.fallback), 1)
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : zt("", true);
    }
  });
  aE = (e) => {
    let t;
    return e.client ? t = e.client : t = z0(e.endpoint, e.clientConfig), {
      options: e,
      ...{
        client: t,
        filter: Ft,
        cookie: y0
      },
      ...{
        asText: Np,
        asHTML: (s, ...i) => {
          const [a, l] = i;
          return Wp(s, typeof a == "function" || a == null ? {
            linkResolver: a || e.linkResolver,
            serializer: l || e.richTextSerializer
          } : {
            linkResolver: e.linkResolver,
            serializer: e.richTextSerializer,
            ...a
          });
        },
        asLink: (s, i) => Qs(s, typeof i == "function" ? {
          linkResolver: i
        } : {
          linkResolver: e.linkResolver,
          ...i
        }),
        asLinkAttrs: (s, i) => Dp(s, {
          linkResolver: e.linkResolver,
          ...i
        }),
        asDate: fS,
        asImageSrc: RS,
        asImageWidthSrcSet: Vp,
        asImagePixelDensitySrcSet: qp,
        isFilled: Lr,
        documentToLinkField: Op
      },
      install(s) {
        s.provide(Kp, this), s.config.globalProperties.$prismic = this, e.injectComponents !== false && (s.component(Rs.name, Rs), s.component(Ca.name, Ca), s.component(Ts.name, Ts), s.component(uu.name, uu), s.component(du.name, du), s.component(Ps.name, Ps), s.component(fu.name, fu));
      }
    };
  };
  lE = void 0;
  cE = void 0;
  uE = void 0;
  fE = void 0;
  dE = void 0;
  pE = void 0;
  hE = Ae({
    name: "prismic:setup",
    parallel: true,
    async setup(e) {
      var _a2;
      const t = ut().public.prismic;
      let n;
      n = lE;
      const r = t.environment || t.endpoint || (n == null ? void 0 : n.documentAPIEndpoint) || "", o = aE({
        ...t,
        endpoint: r,
        client: n,
        linkResolver: cE,
        richTextSerializer: uE,
        injectComponents: false,
        components: {
          linkInternalComponent: ks,
          linkExternalComponent: ks,
          ...t.components,
          linkRel: fE,
          richTextComponents: dE,
          sliceZoneDefaultComponent: pE
        }
      });
      if (e.vueApp.use(o), t.preview) {
        const s = _a("io.prismic.preview").value;
        if (s) try {
          const i = typeof s == "string" ? JSON.parse(decodeURIComponent(s)) : s;
          if (Object.keys(i).some((a) => a in i && typeof i[a] == "object" && i[a] !== null && "preview" in i[a] && i[a].preview)) {
            let a = false;
            Yn(() => {
              a || ba();
            }), He().afterEach(() => {
              a = true, ba();
            });
          }
        } catch (i) {
          console.warn("Failed to parse Prismic preview cookie", i);
        }
      }
      return t.toolbar && ((_a2 = o.client) == null ? void 0 : _a2.repositoryName) ? Gs({
        script: [
          {
            key: "prismic-preview",
            src: `https://static.cdn.prismic.io/prismic.min.js?repo=${o.client.repositoryName}&new=true`,
            async: true,
            defer: true,
            crossorigin: "anonymous"
          }
        ]
      }) : _a("io.prismic.preview").value = null, {
        provide: {
          prismic: o
        }
      };
    }
  });
  mE = Ae(() => {
  });
  var pu = (e, t, n) => typeof e == "function" ? e(t, n) : e, Mt = Symbol("loaders"), $i = Symbol("loaderEntries"), gE = Symbol(), Mn = Symbol(), hu = Symbol(), Yo = Symbol(), Mi = Symbol(), yE = Symbol();
  function mu(e) {
    return e && e[gE];
  }
  function gu(e) {
    e && e.length;
  }
  var vE = Object.assign, bE = Symbol();
  function _E({ router: e, app: t, effect: n, isSSR: r, errors: o = [], selectNavigationResult: s = (i) => i[0].value }) {
    if (e[$i] != null) return () => {
    };
    e[$i] = /* @__PURE__ */ new WeakMap(), e[hu] = t, e[yE] = !!r;
    const i = n.run(() => Fe(false));
    t.provide(bE, i);
    const a = e.beforeEach((f) => {
      var _a2;
      e[Mn] && ((_a2 = e[Mn].meta[Yo]) == null ? void 0 : _a2.abort()), e[Mn] = f, f.meta[Mt] = /* @__PURE__ */ new Set(), f.meta[Yo] = new AbortController(), f.meta[Mi] = [];
      const d = [];
      for (const p of f.matched) if (!p.meta[Mt]) {
        p.meta[Mt] = new Set(p.meta.loaders || []);
        for (const h in p.components) {
          const m = p.components[h], b = (wE(m) ? m() : Promise.resolve(m)).then((S) => {
            if (typeof S != "function") {
              for (const w in S) {
                const g = S[w];
                mu(g) && p.meta[Mt].add(g);
              }
              if (Array.isArray(S.__loaders)) for (const w of S.__loaders) mu(w) && p.meta[Mt].add(w);
            }
          });
          d.push(b);
        }
      }
      return Promise.all(d).then(() => {
        for (const p of f.matched) for (const h of p.meta[Mt]) f.meta[Mt].add(h);
      });
    }), l = e.beforeResolve((f, d) => {
      const p = Array.from(f.meta[Mt]);
      return gu([]), i.value = true, Promise.all(p.map((h) => {
        const { server: m, lazy: b, errors: S } = h._.options;
        if (!m && r) return;
        const w = n.run(() => t.runWithContext(() => h._.load(f, e, d)));
        return !r && pu(b, f, d) ? void 0 : w.catch((g) => {
          if (!S) throw g;
          if (S === true) {
            if (Array.isArray(o) ? o.some((y) => g instanceof y) : o(g)) return;
          } else if (Array.isArray(S) ? S.some((y) => g instanceof y) : S(g)) return;
          throw g;
        });
      })).then(() => {
        if (f.meta[Mi].length) return s(f.meta[Mi]);
      }).catch((h) => h instanceof SE ? h.value : Promise.reject(h)).finally(() => {
        gu([]), i.value = false;
      });
    }), u = e.afterEach((f, d, p) => {
      var _a2;
      if (p) {
        if ((_a2 = f.meta[Yo]) == null ? void 0 : _a2.abort(p), Dt(p, 16)) for (const h of f.meta[Mt]) h._.getEntry(e).resetPending();
      } else for (const h of f.meta[Mt]) {
        const { commit: m, lazy: b } = h._.options;
        if (m === "after-load") {
          const S = h._.getEntry(e);
          S && (!pu(b, f, d) || !S.isLoading.value) && S.commit(f);
        }
      }
      e[Mn] === f && (e[Mn] = null);
    }), c = e.onError((f, d) => {
      var _a2;
      (_a2 = d.meta[Yo]) == null ? void 0 : _a2.abort(f), e[Mn] === d && (e[Mn] = null);
    });
    return () => {
      delete e[$i], delete e[hu], a(), l(), u(), c();
    };
  }
  function wE(e) {
    return typeof e == "function" && !("displayName" in e) && !("props" in e) && !("emits" in e) && !("__vccOpts" in e);
  }
  var SE = class {
    constructor(e) {
      this.value = e;
    }
  };
  function EE(e, t) {
    const n = qn(true), r = _E(vE({
      app: e,
      effect: n
    }, t)), { unmount: o } = e;
    e.unmount = () => {
      n.stop(), r(), o.call(e);
    };
  }
  const CE = Ae({
    name: "data-loaders",
    dependsOn: [
      "nuxt:router"
    ],
    setup(e) {
      e.vueApp.use(EE, {
        router: e.vueApp.config.globalProperties.$router,
        isSSR: false
      });
    }
  }), kE = Ae({
    enforce: "post",
    async setup() {
      const e = Jn(), t = _p("nuxt-seo-utils:routeRules", () => null);
      if (t.value) {
        const { head: n, seoMeta: r } = t.value;
        n && e.push(n), r && Vd(r);
      }
    }
  });
  function TE(e, t) {
    let n = e;
    Ot(e, {
      strict: false,
      acceptRelative: true
    }) && (n = Ks(e).pathname);
    const r = Zg(t.base || "/");
    r !== "/" && n.startsWith(r) && (n = n.slice(r.length));
    let o = Kt(t.absolute ? t.siteUrl : "");
    r !== "/" && o.endsWith(r) && (o = o.slice(0, o.indexOf(r)));
    const s = t.withBase ? gr(r, o || "/") : o, i = gr(n, s);
    return n === "/" && !t.withBase ? Vs(i) : AE(t.trailingSlash, i);
  }
  const RE = [
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
  function PE(e) {
    var _a2;
    const n = (_a2 = (e.split("/").pop() || e).match(/\.[0-9a-z]+$/i)) == null ? void 0 : _a2[0];
    return n && RE.includes(n.replace(".", ""));
  }
  function AE(e, t) {
    const n = Ks(t);
    if (PE(n.pathname)) return t;
    const r = e ? Vs(n.pathname) : Kt(n.pathname);
    return `${n.protocol ? `${n.protocol}//` : ""}${n.host || ""}${r}${n.search || ""}${n.hash || ""}`;
  }
  function xE(e) {
    return window.location.origin;
  }
  function OE(e = {}) {
    const t = ol(), n = xE(), r = ut().app.baseURL || "/";
    return (o) => W(() => TE(B(o), {
      absolute: B(e.absolute),
      withBase: B(e.withBase),
      siteUrl: B(e.canonical) !== false ? t.url : n,
      trailingSlash: t.trailingSlash,
      base: r
    }));
  }
  function LE() {
    const e = ol({
      resolveRefs: false
    }), t = () => we(e.currentLocale) || we(e.defaultLocale) || "en";
    Jn().use(Hd);
    const { canonicalQueryWhitelist: r, canonicalLowercase: o } = ut().public["seo-utils"], s = zn(), i = OE({
      withBase: true,
      absolute: true
    }), a = xr(), l = W(() => {
      if (a.value) return false;
      const { query: f } = s;
      let d = i(s.path || "/").value || s.path;
      if (o) try {
        d = d.toLocaleLowerCase(t());
      } catch {
        d = d.toLowerCase();
      }
      const p = Object.fromEntries(Object.entries(f).filter(([m]) => r.includes(m)).sort(([m], [b]) => m.localeCompare(b)));
      return {
        rel: "canonical",
        href: Object.keys(p).length ? `${d}?${dd(p)}` : d
      };
    }), u = {
      tagPriority: "low"
    };
    Gs({
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
          const d = f.replace("-", "_");
          if (d.includes("_")) return d;
        }
        return false;
      },
      ogSiteName: e.name
    };
    if (e.description && (c.description = e.description), e.twitter) {
      const f = e.twitter.startsWith("@") ? e.twitter : `@${e.twitter}`;
      c.twitterCreator = f, c.twitterSite = f;
    }
    Vd(c, u);
  }
  const $E = Ae({
    name: "nuxt-seo:defaults",
    order: 999,
    env: {
      islands: false
    },
    setup() {
      LE();
    }
  }), ME = [
    lb,
    ew,
    tw,
    iw,
    yw,
    _w,
    ww,
    Sw,
    Ew,
    Cw,
    kw,
    Iw,
    Dw,
    Nw,
    Bw,
    jw,
    Fw,
    zw,
    Qw,
    f0,
    d0,
    hE,
    mE,
    CE,
    kE,
    $E
  ], zp = (e = "RouteProvider") => te({
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
      return Vt(Wn, Ut(o)), () => t.vnode ? de(t.vnode, {
        ref: t.vnodeRef
      }) : t.vnode;
    }
  }), IE = zp(), yu = /* @__PURE__ */ new WeakMap(), DE = te({
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
      const o = ye(), s = fe(), i = Re(Wn, null);
      let a;
      r({
        pageRef: s
      });
      const l = Re(Pd, null);
      let u;
      const c = o.deferHydration();
      if (o.isHydrating) {
        const d = o.hooks.hookOnce("app:error", c);
        He().beforeEach(d);
      }
      e.pageKey && Oe(() => e.pageKey, (d, p) => {
        d !== p && o.callHook("page:loading:start");
      });
      let f = false;
      {
        const d = He().beforeResolve(() => {
          f = false;
        });
        xn(() => {
          d();
        });
      }
      return () => de(dp, {
        name: e.name,
        route: e.route,
        ...t
      }, {
        default: (d) => {
          const p = BE(i, d.route, d.Component), h = i && i.matched.length === d.route.matched.length;
          if (!d.Component) {
            if (u && !h) return u;
            c();
            return;
          }
          if (u && l && !l.isCurrent(d.route)) return u;
          if (p && i && (!l || (l == null ? void 0 : l.isCurrent(i)))) return h ? u : null;
          const m = wa(d, e.pageKey), b = jE(i, d.route, d.Component);
          !o.isHydrating && a === m && !b && je(() => {
            f = true, o.callHook("page:loading:end");
          }), a = m;
          const S = !!(e.transition ?? d.route.meta.pageTransition ?? sc), w = S && NE([
            e.transition,
            d.route.meta.pageTransition,
            sc,
            {
              onAfterLeave() {
                delete o._runningTransition, o.callHook("page:transition:finish", d.Component);
              }
            }
          ]), g = e.keepalive ?? d.route.meta.keepalive ?? My;
          return u = hp(S && w, fw(g, de(Ha, {
            suspensible: true,
            onPending: () => {
              S && (o._runningTransition = true), o.callHook("page:start", d.Component);
            },
            onResolve: () => {
              je(() => o.callHook("page:finish", d.Component).then(() => {
                if (!f && !b) return f = true, o.callHook("page:loading:end");
              }).finally(c));
            }
          }, {
            default: () => {
              const y = {
                key: m || void 0,
                vnode: n.default ? FE(n.default, d) : d.Component,
                route: d.route,
                renderKey: m || void 0,
                trackRootNodes: S,
                vnodeRef: s
              };
              if (!g) return de(IE, y);
              const E = d.Component.type, P = E;
              let L = yu.get(P);
              return L || (L = zp(E.name || E.__name), yu.set(P, L)), de(L, y);
            }
          }))).default(), u;
        }
      });
    }
  });
  function NE(e) {
    const t = e.filter(Boolean).map((n) => ({
      ...n,
      onAfterLeave: n.onAfterLeave ? rl(n.onAfterLeave) : void 0
    }));
    return _o(...t);
  }
  function BE(e, t, n) {
    if (!e) return false;
    const r = t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    });
    return !r || r === -1 ? false : t.matched.slice(0, r).some((o, s) => {
      var _a2, _b2, _c2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) !== ((_c2 = (_b2 = e.matched[s]) == null ? void 0 : _b2.components) == null ? void 0 : _c2.default);
    }) || n && wa({
      route: t,
      Component: n
    }) !== wa({
      route: e,
      Component: n
    });
  }
  function jE(e, t, n) {
    return e ? t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    }) < t.matched.length - 1 : false;
  }
  function FE(e, t) {
    const n = e(t);
    return n.length === 1 ? de(n[0]) : de(Te, void 0, n);
  }
  function ul(e) {
    return e ? e.flatMap((t) => t.type === Te ? ul(t.children) : [
      t
    ]) : [];
  }
  let UE;
  HE = te({
    name: "PrimitiveSlot",
    inheritAttrs: false,
    setup(e, { attrs: t, slots: n }) {
      return () => {
        var _a2, _b2;
        if (!n.default) return null;
        const r = ul(n.default()), o = r.findIndex((l) => l.type !== $e);
        if (o === -1) return r;
        const s = r[o];
        (_a2 = s.props) == null ? true : delete _a2.ref;
        const i = s.props ? We(t, s.props) : t;
        t.class && ((_b2 = s.props) == null ? void 0 : _b2.class) && delete s.props.class;
        const a = ct(s, i);
        for (const l in i) l.startsWith("on") && (a.props || (a.props = {}), a.props[l] = i[l]);
        return r.length === 1 ? a : (r[o] = a, r);
      };
    }
  });
  UE = [
    "area",
    "img",
    "input"
  ];
  Ro = te({
    name: "Primitive",
    inheritAttrs: false,
    props: {
      asChild: {
        type: Boolean,
        default: false
      },
      as: {
        type: [
          String,
          Object
        ],
        default: "div"
      }
    },
    setup(e, { attrs: t, slots: n }) {
      const r = e.asChild ? "template" : e.as;
      return typeof r == "string" && UE.includes(r) ? () => de(r, t) : r !== "template" ? () => de(e.as, t, {
        default: n.default
      }) : () => de(HE, t, {
        default: n.default
      });
    }
  });
  Fk = function(e, t) {
    var n;
    const r = Fe();
    return ln(() => {
      r.value = e();
    }, {
      ...t,
      flush: (n = void 0) != null ? n : "sync"
    }), Ds(r);
  };
  function Po(e) {
    return Gt() ? (Pt(e), true) : false;
  }
  Hk = function() {
    const e = /* @__PURE__ */ new Set(), t = (s) => {
      e.delete(s);
    };
    return {
      on: (s) => {
        e.add(s);
        const i = () => t(s);
        return Po(i), {
          off: i
        };
      },
      off: t,
      trigger: (...s) => Promise.all(Array.from(e).map((i) => i(...s))),
      clear: () => {
        e.clear();
      }
    };
  };
  function WE(e) {
    let t = false, n;
    const r = qn(true);
    return (...o) => (t || (n = r.run(() => e(...o)), t = true), n);
  }
  Uk = function(e) {
    let t = 0, n, r;
    const o = () => {
      t -= 1, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
    };
    return (...s) => (t += 1, r || (r = qn(true), n = r.run(() => e(...s))), Po(o), n);
  };
  function VE(e) {
    if (!_e(e)) return Ye(e);
    const t = new Proxy({}, {
      get(n, r, o) {
        return B(Reflect.get(e.value, r, o));
      },
      set(n, r, o) {
        return _e(e.value[r]) && !_e(o) ? e.value[r].value = o : e.value[r] = o, true;
      },
      deleteProperty(n, r) {
        return Reflect.deleteProperty(e.value, r);
      },
      has(n, r) {
        return Reflect.has(e.value, r);
      },
      ownKeys() {
        return Object.keys(e.value);
      },
      getOwnPropertyDescriptor() {
        return {
          enumerable: true,
          configurable: true
        };
      }
    });
    return Ye(t);
  }
  function qE(e) {
    return VE(W(e));
  }
  Wk = function(e, ...t) {
    const n = t.flat(), r = n[0];
    return qE(() => Object.fromEntries(typeof r == "function" ? Object.entries(no(e)).filter(([o, s]) => !r(we(s), o)) : Object.entries(no(e)).filter((o) => !n.includes(o[0]))));
  };
  $r = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  let KE, GE, zE, vu;
  KE = (e) => typeof e < "u";
  GE = Object.prototype.toString;
  zE = (e) => GE.call(e) === "[object Object]";
  vu = () => {
  };
  Vk = JE();
  function JE() {
    var e, t;
    return $r && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }
  function YE(e, t) {
    function n(...r) {
      return new Promise((o, s) => {
        Promise.resolve(e(() => t.apply(this, r), {
          fn: t,
          thisArg: this,
          args: r
        })).then(o).catch(s);
      });
    }
    return n;
  }
  function QE(e, t = {}) {
    let n, r, o = vu;
    const s = (l) => {
      clearTimeout(l), o(), o = vu;
    };
    let i;
    return (l) => {
      const u = we(e), c = we(t.maxWait);
      return n && s(n), u <= 0 || c !== void 0 && c <= 0 ? (r && (s(r), r = null), Promise.resolve(l())) : new Promise((f, d) => {
        o = t.rejectOnCancel ? d : f, i = l, c && !r && (r = setTimeout(() => {
          n && s(n), r = null, f(i());
        }, c)), n = setTimeout(() => {
          r && s(r), r = null, f(l());
        }, u);
      });
    };
  }
  function XE(e) {
    return Le();
  }
  function Ii(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  qk = function(e, t = 1e4) {
    return go((n, r) => {
      let o = we(e), s;
      const i = () => setTimeout(() => {
        o = we(e), r();
      }, we(t));
      return Po(() => {
        clearTimeout(s);
      }), {
        get() {
          return n(), o;
        },
        set(a) {
          o = a, r(), clearTimeout(s), s = i();
        }
      };
    });
  };
  Kk = function(e, t = 200, n = {}) {
    return YE(QE(t, n), e);
  };
  Gk = we;
  zk = function(e, t) {
    XE() && xn(e, t);
  };
  function ZE(e, t, n) {
    return Oe(e, t, {
      ...n,
      immediate: true
    });
  }
  Jk = function(e, t, n) {
    const r = Oe(e, (...o) => (je(() => r()), t(...o)), n);
    return r;
  };
  const ei = $r ? window : void 0;
  Tr = function(e) {
    var t;
    const n = we(e);
    return (t = n == null ? void 0 : n.$el) != null ? t : n;
  };
  eC = function(...e) {
    const t = [], n = () => {
      t.forEach((a) => a()), t.length = 0;
    }, r = (a, l, u, c) => (a.addEventListener(l, u, c), () => a.removeEventListener(l, u, c)), o = W(() => {
      const a = Ii(we(e[0])).filter((l) => l != null);
      return a.every((l) => typeof l != "string") ? a : void 0;
    }), s = ZE(() => {
      var a, l;
      return [
        (l = (a = o.value) == null ? void 0 : a.map((u) => Tr(u))) != null ? l : [
          ei
        ].filter((u) => u != null),
        Ii(we(o.value ? e[1] : e[0])),
        Ii(B(o.value ? e[2] : e[1])),
        we(o.value ? e[3] : e[2])
      ];
    }, ([a, l, u, c]) => {
      if (n(), !(a == null ? void 0 : a.length) || !(l == null ? void 0 : l.length) || !(u == null ? void 0 : u.length)) return;
      const f = zE(c) ? {
        ...c
      } : c;
      t.push(...a.flatMap((d) => l.flatMap((p) => u.map((h) => r(d, p, h, f)))));
    }, {
      flush: "post"
    }), i = () => {
      s(), n();
    };
    return Po(n), i;
  };
  function Jp() {
    const e = Fe(false), t = Le();
    return t && ot(() => {
      e.value = true;
    }, t), e;
  }
  function tC(e) {
    const t = Jp();
    return W(() => (t.value, !!e()));
  }
  function nC(e) {
    return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => true;
  }
  function rC(...e) {
    let t, n, r = {};
    e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = true, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = true, n = e[0]);
    const { target: o = ei, eventName: s = "keydown", passive: i = false, dedupe: a = false } = r, l = nC(t);
    return eC(o, s, (c) => {
      c.repeat && we(a) || l(c) && n(c);
    }, i);
  }
  function oC(e) {
    return JSON.parse(JSON.stringify(e));
  }
  Yk = function(e, t, n = {}) {
    const { window: r = ei, ...o } = n;
    let s;
    const i = tC(() => r && "ResizeObserver" in r), a = () => {
      s && (s.disconnect(), s = void 0);
    }, l = W(() => {
      const f = we(e);
      return Array.isArray(f) ? f.map((d) => Tr(d)) : [
        Tr(f)
      ];
    }), u = Oe(l, (f) => {
      if (a(), i.value && r) {
        s = new ResizeObserver(t);
        for (const d of f) d && s.observe(d, o);
      }
    }, {
      immediate: true,
      flush: "post"
    }), c = () => {
      a(), u();
    };
    return Po(c), {
      isSupported: i,
      stop: c
    };
  };
  sC = function(e, t, n, r = {}) {
    var o, s, i;
    const { clone: a = false, passive: l = false, eventName: u, deep: c = false, defaultValue: f, shouldEmit: d } = r, p = Le(), h = n || (p == null ? void 0 : p.emit) || ((o = p == null ? void 0 : p.$emit) == null ? void 0 : o.bind(p)) || ((i = (s = p == null ? void 0 : p.proxy) == null ? void 0 : s.$emit) == null ? void 0 : i.bind(p == null ? void 0 : p.proxy));
    let m = u;
    t || (t = "modelValue"), m = m || `update:${t.toString()}`;
    const b = (g) => a ? typeof a == "function" ? a(g) : oC(g) : g, S = () => KE(e[t]) ? b(e[t]) : f, w = (g) => {
      d ? d(g) && h(m, g) : h(m, g);
    };
    if (l) {
      const g = S(), y = fe(g);
      let E = false;
      return Oe(() => e[t], (P) => {
        E || (E = true, y.value = b(P), je(() => E = false));
      }), Oe(y, (P) => {
        !E && (P !== e[t] || c) && w(P);
      }, {
        deep: c
      }), y;
    } else return W({
      get() {
        return S();
      },
      set(g) {
        w(g);
      }
    });
  };
  fl = function(e, t) {
    const n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
    return [
      (i) => {
        const a = Re(r, i);
        if (a || a === null) return a;
        throw new Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
      },
      (i) => (Vt(r, i), i)
    ];
  };
  let Qk;
  [iC, Qk] = fl("ConfigProvider");
  st = function() {
    const e = Le(), t = fe(), n = W(() => {
      var _a2, _b2;
      return [
        "#text",
        "#comment"
      ].includes((_a2 = t.value) == null ? void 0 : _a2.$el.nodeName) ? (_b2 = t.value) == null ? void 0 : _b2.$el.nextElementSibling : Tr(t);
    }), r = Object.assign({}, e.exposed), o = {};
    for (const i in e.props) Object.defineProperty(o, i, {
      enumerable: true,
      configurable: true,
      get: () => e.props[i]
    });
    if (Object.keys(r).length > 0) for (const i in r) Object.defineProperty(o, i, {
      enumerable: true,
      configurable: true,
      get: () => r[i]
    });
    Object.defineProperty(o, "$el", {
      enumerable: true,
      configurable: true,
      get: () => e.vnode.el
    }), e.exposed = o;
    function s(i) {
      t.value = i, i && (Object.defineProperty(o, "$el", {
        enumerable: true,
        configurable: true,
        get: () => i instanceof Element ? i : i.$el
      }), e.exposed = o);
    }
    return {
      forwardRef: s,
      currentRef: t,
      currentElement: n
    };
  };
  let aC = 0;
  bu = function(e, t = "reka") {
    if (e) return e;
    const n = iC({
      useId: void 0
    });
    return El ? `${t}-${El()}` : n.useId ? `${t}-${n.useId()}` : `${t}-${++aC}`;
  };
  lC = function(e, t) {
    const n = fe(e);
    function r(s) {
      return t[n.value][s] ?? n.value;
    }
    return {
      state: n,
      dispatch: (s) => {
        n.value = r(s);
      }
    };
  };
  function cC(e, t) {
    var _a2;
    const n = fe({}), r = fe("none"), o = fe(e), s = e.value ? "mounted" : "unmounted";
    let i;
    const a = ((_a2 = t.value) == null ? void 0 : _a2.ownerDocument.defaultView) ?? ei, { state: l, dispatch: u } = lC(s, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    }), c = (b) => {
      var _a3;
      if ($r) {
        const S = new CustomEvent(b, {
          bubbles: false,
          cancelable: false
        });
        (_a3 = t.value) == null ? void 0 : _a3.dispatchEvent(S);
      }
    };
    Oe(e, async (b, S) => {
      var _a3;
      const w = S !== b;
      if (await je(), w) {
        const g = r.value, y = Qo(t.value);
        b ? (u("MOUNT"), c("enter"), y === "none" && c("after-enter")) : y === "none" || y === "undefined" || ((_a3 = n.value) == null ? void 0 : _a3.display) === "none" ? (u("UNMOUNT"), c("leave"), c("after-leave")) : S && g !== y ? (u("ANIMATION_OUT"), c("leave")) : (u("UNMOUNT"), c("after-leave"));
      }
    }, {
      immediate: true
    });
    const f = (b) => {
      const S = Qo(t.value), w = S.includes(b.animationName), g = l.value === "mounted" ? "enter" : "leave";
      if (b.target === t.value && w && (c(`after-${g}`), u("ANIMATION_END"), !o.value)) {
        const y = t.value.style.animationFillMode;
        t.value.style.animationFillMode = "forwards", i = a == null ? void 0 : a.setTimeout(() => {
          var _a3;
          ((_a3 = t.value) == null ? void 0 : _a3.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = y);
        });
      }
      b.target === t.value && S === "none" && u("ANIMATION_END");
    }, d = (b) => {
      b.target === t.value && (r.value = Qo(t.value));
    }, p = Oe(t, (b, S) => {
      b ? (n.value = getComputedStyle(b), b.addEventListener("animationstart", d), b.addEventListener("animationcancel", f), b.addEventListener("animationend", f)) : (u("ANIMATION_END"), i !== void 0 && (a == null ? void 0 : a.clearTimeout(i)), S == null ? void 0 : S.removeEventListener("animationstart", d), S == null ? void 0 : S.removeEventListener("animationcancel", f), S == null ? void 0 : S.removeEventListener("animationend", f));
    }, {
      immediate: true
    }), h = Oe(l, () => {
      const b = Qo(t.value);
      r.value = l.value === "mounted" ? b : "none";
    });
    return Ar(() => {
      p(), h();
    }), {
      isPresent: W(() => [
        "mounted",
        "unmountSuspended"
      ].includes(l.value))
    };
  }
  function Qo(e) {
    return e && getComputedStyle(e).animationName || "none";
  }
  let fC, pC;
  uC = te({
    name: "Presence",
    props: {
      present: {
        type: Boolean,
        required: true
      },
      forceMount: {
        type: Boolean
      }
    },
    slots: {},
    setup(e, { slots: t, expose: n }) {
      var _a2;
      const { present: r, forceMount: o } = no(e), s = fe(), { isPresent: i } = cC(r, s);
      n({
        present: i
      });
      let a = t.default({
        present: i.value
      });
      a = ul(a || []);
      const l = Le();
      if (a && (a == null ? void 0 : a.length) > 1) {
        const u = ((_a2 = l == null ? void 0 : l.parent) == null ? void 0 : _a2.type.name) ? `<${l.parent.type.name} />` : "component";
        throw new Error([
          `Detected an invalid children for \`${u}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((c) => `  - ${c}`).join(`
`)
        ].join(`
`));
      }
      return () => o.value || r.value || i.value ? de(t.default({
        present: i.value
      })[0], {
        ref: (u) => {
          const c = Tr(u);
          return typeof (c == null ? void 0 : c.hasAttribute) > "u" || ((c == null ? void 0 : c.hasAttribute("data-reka-popper-content-wrapper")) ? s.value = c.firstElementChild : s.value = c), c;
        }
      }) : null;
    }
  });
  [Xn, fC] = fl("DialogRoot");
  dC = te({
    inheritAttrs: false,
    __name: "DialogRoot",
    props: {
      open: {
        type: Boolean,
        default: void 0
      },
      defaultOpen: {
        type: Boolean,
        default: false
      },
      modal: {
        type: Boolean,
        default: true
      }
    },
    emits: [
      "update:open"
    ],
    setup(e, { emit: t }) {
      const n = e, o = sC(n, "open", t, {
        defaultValue: n.defaultOpen,
        passive: n.open === void 0
      }), s = fe(), i = fe(), { modal: a } = no(n);
      return fC({
        open: o,
        modal: a,
        openModal: () => {
          o.value = true;
        },
        onOpenChange: (l) => {
          o.value = l;
        },
        onOpenToggle: () => {
          o.value = !o.value;
        },
        contentId: "",
        titleId: "",
        descriptionId: "",
        triggerElement: s,
        contentElement: i
      }), (l, u) => ae(l.$slots, "default", {
        open: B(o)
      });
    }
  });
  Yp = te({
    __name: "DialogClose",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(e) {
      const t = e;
      st();
      const n = Xn();
      return (r, o) => (j(), Z(B(Ro), We(t, {
        type: r.as === "button" ? "button" : void 0,
        onClick: o[0] || (o[0] = (s) => B(n).onOpenChange(false))
      }), {
        default: ie(() => [
          ae(r.$slots, "default")
        ]),
        _: 3
      }, 16, [
        "type"
      ]));
    }
  });
  pC = te({
    __name: "AlertDialogAction",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(e) {
      const t = e;
      return st(), (n, r) => (j(), Z(B(Yp), Vn(Gn(t)), {
        default: ie(() => [
          ae(n.$slots, "default")
        ]),
        _: 3
      }, 16));
    }
  });
  function Ao(e) {
    const t = Le(), n = t == null ? void 0 : t.type.emits, r = {};
    return (n == null ? void 0 : n.length) || console.warn(`No emitted event found. Please check component: ${t == null ? void 0 : t.type.__name}`), n == null ? void 0 : n.forEach((o) => {
      r[es(rt(o))] = (...s) => e(o, ...s);
    }), r;
  }
  Qp = function(e, t, n) {
    const r = n.originalEvent.target, o = new CustomEvent(e, {
      bubbles: false,
      cancelable: true,
      detail: n
    });
    t && r.addEventListener(e, t, {
      once: true
    }), r.dispatchEvent(o);
  };
  const hC = "dismissableLayer.pointerDownOutside", mC = "dismissableLayer.focusOutside";
  function Xp(e, t) {
    const n = t.closest("[data-dismissable-layer]"), r = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), o = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
    return !!(n && (r === n || o.indexOf(r) < o.indexOf(n)));
  }
  function gC(e, t) {
    var _a2;
    const n = ((_a2 = t == null ? void 0 : t.value) == null ? void 0 : _a2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = fe(false), o = fe(() => {
    });
    return ln((s) => {
      if (!$r) return;
      const i = async (l) => {
        const u = l.target;
        if (!(!(t == null ? void 0 : t.value) || !u)) {
          if (Xp(t.value, u)) {
            r.value = false;
            return;
          }
          if (l.target && !r.value) {
            let c = function() {
              Qp(hC, e, f);
            };
            const f = {
              originalEvent: l
            };
            l.pointerType === "touch" ? (n.removeEventListener("click", o.value), o.value = c, n.addEventListener("click", o.value, {
              once: true
            })) : c();
          } else n.removeEventListener("click", o.value);
          r.value = false;
        }
      }, a = window.setTimeout(() => {
        n.addEventListener("pointerdown", i);
      }, 0);
      s(() => {
        window.clearTimeout(a), n.removeEventListener("pointerdown", i), n.removeEventListener("click", o.value);
      });
    }), {
      onPointerDownCapture: () => r.value = true
    };
  }
  function yC(e, t) {
    var _a2;
    const n = ((_a2 = t == null ? void 0 : t.value) == null ? void 0 : _a2.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), r = fe(false);
    return ln((o) => {
      if (!$r) return;
      const s = async (i) => {
        if (!(t == null ? void 0 : t.value)) return;
        await je(), await je();
        const a = i.target;
        !t.value || !a || Xp(t.value, a) || i.target && !r.value && Qp(mC, e, {
          originalEvent: i
        });
      };
      n.addEventListener("focusin", s), o(() => n.removeEventListener("focusin", s));
    }), {
      onFocusCapture: () => r.value = true,
      onBlurCapture: () => r.value = false
    };
  }
  let Yt;
  Yt = Ye({
    layersRoot: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  });
  vC = te({
    __name: "DismissableLayer",
    props: {
      disableOutsidePointerEvents: {
        type: Boolean,
        default: false
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "dismiss"
    ],
    setup(e, { emit: t }) {
      const n = e, r = t, { forwardRef: o, currentElement: s } = st(), i = W(() => {
        var _a2;
        return ((_a2 = s.value) == null ? void 0 : _a2.ownerDocument) ?? globalThis.document;
      }), a = W(() => Yt.layersRoot), l = W(() => s.value ? Array.from(a.value).indexOf(s.value) : -1), u = W(() => Yt.layersWithOutsidePointerEventsDisabled.size > 0), c = W(() => {
        const h = Array.from(a.value), [m] = [
          ...Yt.layersWithOutsidePointerEventsDisabled
        ].slice(-1), b = h.indexOf(m);
        return l.value >= b;
      }), f = gC(async (h) => {
        const m = [
          ...Yt.branches
        ].some((b) => b == null ? void 0 : b.contains(h.target));
        !c.value || m || (r("pointerDownOutside", h), r("interactOutside", h), await je(), h.defaultPrevented || r("dismiss"));
      }, s), d = yC((h) => {
        [
          ...Yt.branches
        ].some((b) => b == null ? void 0 : b.contains(h.target)) || (r("focusOutside", h), r("interactOutside", h), h.defaultPrevented || r("dismiss"));
      }, s);
      rC("Escape", (h) => {
        l.value === a.value.size - 1 && (r("escapeKeyDown", h), h.defaultPrevented || r("dismiss"));
      });
      let p;
      return ln((h) => {
        s.value && (n.disableOutsidePointerEvents && (Yt.layersWithOutsidePointerEventsDisabled.size === 0 && (p = i.value.body.style.pointerEvents, i.value.body.style.pointerEvents = "none"), Yt.layersWithOutsidePointerEventsDisabled.add(s.value)), a.value.add(s.value), h(() => {
          n.disableOutsidePointerEvents && Yt.layersWithOutsidePointerEventsDisabled.size === 1 && (i.value.body.style.pointerEvents = p);
        }));
      }), ln((h) => {
        h(() => {
          s.value && (a.value.delete(s.value), Yt.layersWithOutsidePointerEventsDisabled.delete(s.value));
        });
      }), (h, m) => (j(), Z(B(Ro), {
        ref: B(o),
        "as-child": h.asChild,
        as: h.as,
        "data-dismissable-layer": "",
        style: ho({
          pointerEvents: u.value ? c.value ? "auto" : "none" : void 0
        }),
        onFocusCapture: B(d).onFocusCapture,
        onBlurCapture: B(d).onBlurCapture,
        onPointerdownCapture: B(f).onPointerDownCapture
      }, {
        default: ie(() => [
          ae(h.$slots, "default")
        ]),
        _: 3
      }, 8, [
        "as-child",
        "as",
        "style",
        "onFocusCapture",
        "onBlurCapture",
        "onPointerdownCapture"
      ]));
    }
  });
  qt = function() {
    let e = document.activeElement;
    if (e == null) return null;
    for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
    return e;
  };
  function bC(e) {
    return e ? "open" : "closed";
  }
  Xk = function(e) {
    const t = qt();
    for (const n of e) if (n === t || (n.focus(), qt() !== t)) return;
  };
  const _C = WE(() => fe([]));
  function wC() {
    const e = _C();
    return {
      add(t) {
        const n = e.value[0];
        t !== n && (n == null ? void 0 : n.pause()), e.value = _u(e.value, t), e.value.unshift(t);
      },
      remove(t) {
        var _a2;
        e.value = _u(e.value, t), (_a2 = e.value[0]) == null ? void 0 : _a2.resume();
      }
    };
  }
  function _u(e, t) {
    const n = [
      ...e
    ], r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n;
  }
  function SC(e) {
    return e.filter((t) => t.tagName !== "A");
  }
  const Di = "focusScope.autoFocusOnMount", Ni = "focusScope.autoFocusOnUnmount", wu = {
    bubbles: false,
    cancelable: true
  };
  function EC(e, { select: t = false } = {}) {
    const n = qt();
    for (const r of e) if (yn(r, {
      select: t
    }), qt() !== n) return true;
  }
  function CC(e) {
    const t = Zp(e), n = Su(t, e), r = Su(t.reverse(), e);
    return [
      n,
      r
    ];
  }
  function Zp(e) {
    const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
  }
  function Su(e, t) {
    for (const n of e) if (!kC(n, {
      upTo: t
    })) return n;
  }
  function kC(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return true;
    for (; e; ) {
      if (t !== void 0 && e === t) return false;
      if (getComputedStyle(e).display === "none") return true;
      e = e.parentElement;
    }
    return false;
  }
  function TC(e) {
    return e instanceof HTMLInputElement && "select" in e;
  }
  function yn(e, { select: t = false } = {}) {
    if (e && e.focus) {
      const n = qt();
      e.focus({
        preventScroll: true
      }), e !== n && TC(e) && t && e.select();
    }
  }
  let eh;
  RC = te({
    __name: "FocusScope",
    props: {
      loop: {
        type: Boolean,
        default: false
      },
      trapped: {
        type: Boolean,
        default: false
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "mountAutoFocus",
      "unmountAutoFocus"
    ],
    setup(e, { emit: t }) {
      const n = e, r = t, { currentRef: o, currentElement: s } = st(), i = fe(null), a = wC(), l = Ye({
        paused: false,
        pause() {
          this.paused = true;
        },
        resume() {
          this.paused = false;
        }
      });
      ln((c) => {
        if (!$r) return;
        const f = s.value;
        if (!n.trapped) return;
        function d(b) {
          if (l.paused || !f) return;
          const S = b.target;
          f.contains(S) ? i.value = S : yn(i.value, {
            select: true
          });
        }
        function p(b) {
          if (l.paused || !f) return;
          const S = b.relatedTarget;
          S !== null && (f.contains(S) || yn(i.value, {
            select: true
          }));
        }
        function h(b) {
          f.contains(i.value) || yn(f);
        }
        document.addEventListener("focusin", d), document.addEventListener("focusout", p);
        const m = new MutationObserver(h);
        f && m.observe(f, {
          childList: true,
          subtree: true
        }), c(() => {
          document.removeEventListener("focusin", d), document.removeEventListener("focusout", p), m.disconnect();
        });
      }), ln(async (c) => {
        const f = s.value;
        if (await je(), !f) return;
        a.add(l);
        const d = qt();
        if (!f.contains(d)) {
          const h = new CustomEvent(Di, wu);
          f.addEventListener(Di, (m) => r("mountAutoFocus", m)), f.dispatchEvent(h), h.defaultPrevented || (EC(SC(Zp(f)), {
            select: true
          }), qt() === d && yn(f));
        }
        c(() => {
          f.removeEventListener(Di, (b) => r("mountAutoFocus", b));
          const h = new CustomEvent(Ni, wu), m = (b) => {
            r("unmountAutoFocus", b);
          };
          f.addEventListener(Ni, m), f.dispatchEvent(h), setTimeout(() => {
            h.defaultPrevented || yn(d ?? document.body, {
              select: true
            }), f.removeEventListener(Ni, m), a.remove(l);
          }, 0);
        });
      });
      function u(c) {
        if (!n.loop && !n.trapped || l.paused) return;
        const f = c.key === "Tab" && !c.altKey && !c.ctrlKey && !c.metaKey, d = qt();
        if (f && d) {
          const p = c.currentTarget, [h, m] = CC(p);
          h && m ? !c.shiftKey && d === m ? (c.preventDefault(), n.loop && yn(h, {
            select: true
          })) : c.shiftKey && d === h && (c.preventDefault(), n.loop && yn(m, {
            select: true
          })) : d === p && c.preventDefault();
        }
      }
      return (c, f) => (j(), Z(B(Ro), {
        ref_key: "currentRef",
        ref: o,
        tabindex: "-1",
        "as-child": c.asChild,
        as: c.as,
        onKeydown: u
      }, {
        default: ie(() => [
          ae(c.$slots, "default")
        ]),
        _: 3
      }, 8, [
        "as-child",
        "as"
      ]));
    }
  });
  eh = te({
    __name: "DialogContentImpl",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(e, { emit: t }) {
      const n = e, r = t, o = Xn(), { forwardRef: s, currentElement: i } = st();
      return o.titleId || (o.titleId = bu(void 0, "reka-dialog-title")), o.descriptionId || (o.descriptionId = bu(void 0, "reka-dialog-description")), ot(() => {
        o.contentElement = i, qt() !== document.body && (o.triggerElement.value = qt());
      }), (a, l) => (j(), Z(B(RC), {
        "as-child": "",
        loop: "",
        trapped: n.trapFocus,
        onMountAutoFocus: l[5] || (l[5] = (u) => r("openAutoFocus", u)),
        onUnmountAutoFocus: l[6] || (l[6] = (u) => r("closeAutoFocus", u))
      }, {
        default: ie(() => [
          le(B(vC), We({
            id: B(o).contentId,
            ref: B(s),
            as: a.as,
            "as-child": a.asChild,
            "disable-outside-pointer-events": a.disableOutsidePointerEvents,
            role: "dialog",
            "aria-describedby": B(o).descriptionId,
            "aria-labelledby": B(o).titleId,
            "data-state": B(bC)(B(o).open.value)
          }, a.$attrs, {
            onDismiss: l[0] || (l[0] = (u) => B(o).onOpenChange(false)),
            onEscapeKeyDown: l[1] || (l[1] = (u) => r("escapeKeyDown", u)),
            onFocusOutside: l[2] || (l[2] = (u) => r("focusOutside", u)),
            onInteractOutside: l[3] || (l[3] = (u) => r("interactOutside", u)),
            onPointerDownOutside: l[4] || (l[4] = (u) => r("pointerDownOutside", u))
          }), {
            default: ie(() => [
              ae(a.$slots, "default")
            ]),
            _: 3
          }, 16, [
            "id",
            "as",
            "as-child",
            "disable-outside-pointer-events",
            "aria-describedby",
            "aria-labelledby",
            "data-state"
          ])
        ]),
        _: 3
      }, 8, [
        "trapped"
      ]));
    }
  });
  var PC = function(e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  }, sr = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), Zo = {}, Bi = 0, th = function(e) {
    return e && (e.host || th(e.parentNode));
  }, AC = function(e, t) {
    return t.map(function(n) {
      if (e.contains(n)) return n;
      var r = th(n);
      return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
    }).filter(function(n) {
      return !!n;
    });
  }, xC = function(e, t, n, r) {
    var o = AC(t, Array.isArray(e) ? e : [
      e
    ]);
    Zo[n] || (Zo[n] = /* @__PURE__ */ new WeakMap());
    var s = Zo[n], i = [], a = /* @__PURE__ */ new Set(), l = new Set(o), u = function(f) {
      !f || a.has(f) || (a.add(f), u(f.parentNode));
    };
    o.forEach(u);
    var c = function(f) {
      !f || l.has(f) || Array.prototype.forEach.call(f.children, function(d) {
        if (a.has(d)) c(d);
        else try {
          var p = d.getAttribute(r), h = p !== null && p !== "false", m = (sr.get(d) || 0) + 1, b = (s.get(d) || 0) + 1;
          sr.set(d, m), s.set(d, b), i.push(d), m === 1 && h && Xo.set(d, true), b === 1 && d.setAttribute(n, "true"), h || d.setAttribute(r, "true");
        } catch (S) {
          console.error("aria-hidden: cannot operate on ", d, S);
        }
      });
    };
    return c(t), a.clear(), Bi++, function() {
      i.forEach(function(f) {
        var d = sr.get(f) - 1, p = s.get(f) - 1;
        sr.set(f, d), s.set(f, p), d || (Xo.has(f) || f.removeAttribute(r), Xo.delete(f)), p || f.removeAttribute(n);
      }), Bi--, Bi || (sr = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), Xo = /* @__PURE__ */ new WeakMap(), Zo = {});
    };
  }, OC = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [
      e
    ]), o = PC(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), xC(r, o, n, "aria-hidden")) : function() {
      return null;
    };
  };
  LC = function(e) {
    let t;
    Oe(() => Tr(e), (n) => {
      n ? t = OC(n) : t && t();
    }), Ar(() => {
      t && t();
    });
  };
  let $C, MC, DC, NC, BC, jC, HC, WC;
  $C = te({
    __name: "DialogContentModal",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(e, { emit: t }) {
      const n = e, r = t, o = Xn(), s = Ao(r), { forwardRef: i, currentElement: a } = st();
      return LC(a), (l, u) => (j(), Z(eh, We({
        ...n,
        ...B(s)
      }, {
        ref: B(i),
        "trap-focus": B(o).open.value,
        "disable-outside-pointer-events": true,
        onCloseAutoFocus: u[0] || (u[0] = (c) => {
          var _a2;
          c.defaultPrevented || (c.preventDefault(), (_a2 = B(o).triggerElement.value) == null ? void 0 : _a2.focus());
        }),
        onPointerDownOutside: u[1] || (u[1] = (c) => {
          const f = c.detail.originalEvent, d = f.button === 0 && f.ctrlKey === true;
          (f.button === 2 || d) && c.preventDefault();
        }),
        onFocusOutside: u[2] || (u[2] = (c) => {
          c.preventDefault();
        })
      }), {
        default: ie(() => [
          ae(l.$slots, "default")
        ]),
        _: 3
      }, 16, [
        "trap-focus"
      ]));
    }
  });
  MC = te({
    __name: "DialogContentNonModal",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(e, { emit: t }) {
      const n = e, o = Ao(t);
      st();
      const s = Xn(), i = fe(false), a = fe(false);
      return (l, u) => (j(), Z(eh, We({
        ...n,
        ...B(o)
      }, {
        "trap-focus": false,
        "disable-outside-pointer-events": false,
        onCloseAutoFocus: u[0] || (u[0] = (c) => {
          var _a2;
          c.defaultPrevented || (i.value || ((_a2 = B(s).triggerElement.value) == null ? void 0 : _a2.focus()), c.preventDefault()), i.value = false, a.value = false;
        }),
        onInteractOutside: u[1] || (u[1] = (c) => {
          var _a2;
          c.defaultPrevented || (i.value = true, c.detail.originalEvent.type === "pointerdown" && (a.value = true));
          const f = c.target;
          ((_a2 = B(s).triggerElement.value) == null ? void 0 : _a2.contains(f)) && c.preventDefault(), c.detail.originalEvent.type === "focusin" && a.value && c.preventDefault();
        })
      }), {
        default: ie(() => [
          ae(l.$slots, "default")
        ]),
        _: 3
      }, 16));
    }
  });
  IC = te({
    __name: "DialogContent",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(e, { emit: t }) {
      const n = e, r = t, o = Xn(), s = Ao(r), { forwardRef: i } = st();
      return (a, l) => (j(), Z(B(uC), {
        present: a.forceMount || B(o).open.value
      }, {
        default: ie(() => [
          B(o).modal.value ? (j(), Z($C, We({
            key: 0,
            ref: B(i)
          }, {
            ...n,
            ...B(s),
            ...a.$attrs
          }), {
            default: ie(() => [
              ae(a.$slots, "default")
            ]),
            _: 3
          }, 16)) : (j(), Z(MC, We({
            key: 1,
            ref: B(i)
          }, {
            ...n,
            ...B(s),
            ...a.$attrs
          }), {
            default: ie(() => [
              ae(a.$slots, "default")
            ]),
            _: 3
          }, 16))
        ]),
        _: 3
      }, 8, [
        "present"
      ]));
    }
  });
  [DC, NC] = fl("AlertDialogContent");
  BC = te({
    __name: "AlertDialogContent",
    props: {
      forceMount: {
        type: Boolean
      },
      trapFocus: {
        type: Boolean
      },
      disableOutsidePointerEvents: {
        type: Boolean
      },
      asChild: {
        type: Boolean
      },
      as: {}
    },
    emits: [
      "escapeKeyDown",
      "pointerDownOutside",
      "focusOutside",
      "interactOutside",
      "openAutoFocus",
      "closeAutoFocus"
    ],
    setup(e, { emit: t }) {
      const n = e, o = Ao(t);
      st();
      const s = fe();
      return NC({
        onCancelElementChange: (i) => {
          s.value = i;
        }
      }), (i, a) => (j(), Z(B(IC), We({
        ...n,
        ...B(o)
      }, {
        role: "alertdialog",
        onPointerDownOutside: a[0] || (a[0] = ra(() => {
        }, [
          "prevent"
        ])),
        onInteractOutside: a[1] || (a[1] = ra(() => {
        }, [
          "prevent"
        ])),
        onOpenAutoFocus: a[2] || (a[2] = () => {
          je(() => {
            var _a2;
            (_a2 = s.value) == null ? void 0 : _a2.focus({
              preventScroll: true
            });
          });
        })
      }), {
        default: ie(() => [
          ae(i.$slots, "default")
        ]),
        _: 3
      }, 16));
    }
  });
  jC = te({
    __name: "AlertDialogCancel",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "button"
      }
    },
    setup(e) {
      const t = e, n = DC(), { forwardRef: r, currentElement: o } = st();
      return ot(() => {
        n.onCancelElementChange(o.value);
      }), (s, i) => (j(), Z(B(Yp), We(t, {
        ref: B(r)
      }), {
        default: ie(() => [
          ae(s.$slots, "default")
        ]),
        _: 3
      }, 16));
    }
  });
  FC = te({
    __name: "DialogDescription",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "p"
      }
    },
    setup(e) {
      const t = e;
      st();
      const n = Xn();
      return (r, o) => (j(), Z(B(Ro), We(t, {
        id: B(n).descriptionId
      }), {
        default: ie(() => [
          ae(r.$slots, "default")
        ]),
        _: 3
      }, 16, [
        "id"
      ]));
    }
  });
  HC = te({
    __name: "AlertDialogDescription",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "p"
      }
    },
    setup(e) {
      const t = e;
      return st(), (n, r) => (j(), Z(B(FC), Vn(Gn(t)), {
        default: ie(() => [
          ae(n.$slots, "default")
        ]),
        _: 3
      }, 16));
    }
  });
  UC = te({
    __name: "Teleport",
    props: {
      to: {
        default: "body"
      },
      disabled: {
        type: Boolean
      },
      defer: {
        type: Boolean
      },
      forceMount: {
        type: Boolean
      }
    },
    setup(e) {
      const t = Jp();
      return (n, r) => B(t) || n.forceMount ? (j(), Z(Kh, {
        key: 0,
        to: n.to,
        disabled: n.disabled,
        defer: n.defer
      }, [
        ae(n.$slots, "default")
      ], 8, [
        "to",
        "disabled",
        "defer"
      ])) : zt("", true);
    }
  });
  WC = te({
    __name: "AlertDialogPortal",
    props: {
      to: {},
      disabled: {
        type: Boolean
      },
      defer: {
        type: Boolean
      },
      forceMount: {
        type: Boolean
      }
    },
    setup(e) {
      const t = e;
      return (n, r) => (j(), Z(B(UC), Vn(Gn(t)), {
        default: ie(() => [
          ae(n.$slots, "default")
        ]),
        _: 3
      }, 16));
    }
  });
  VC = function(e) {
    const t = Le(), n = Object.keys((t == null ? void 0 : t.type.props) ?? {}).reduce((o, s) => {
      const i = (t == null ? void 0 : t.type.props[s]).default;
      return i !== void 0 && (o[s] = i), o;
    }, {}), r = Bs(e);
    return W(() => {
      const o = {}, s = (t == null ? void 0 : t.vnode.props) ?? {};
      return Object.keys(s).forEach((i) => {
        o[rt(i)] = s[i];
      }), Object.keys({
        ...n,
        ...o
      }).reduce((i, a) => (r.value[a] !== void 0 && (i[a] = r.value[a]), i), {});
    });
  };
  qC = function(e, t) {
    const n = VC(e), r = t ? Ao(t) : {};
    return W(() => ({
      ...n.value,
      ...r
    }));
  };
  let KC, zC;
  KC = te({
    __name: "AlertDialogRoot",
    props: {
      open: {
        type: Boolean
      },
      defaultOpen: {
        type: Boolean
      }
    },
    emits: [
      "update:open"
    ],
    setup(e, { emit: t }) {
      const o = qC(e, t);
      return st(), (s, i) => (j(), Z(B(dC), We(B(o), {
        modal: true
      }), {
        default: ie((a) => [
          ae(s.$slots, "default", Vn(Gn(a)))
        ]),
        _: 3
      }, 16));
    }
  });
  GC = te({
    __name: "DialogTitle",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "h2"
      }
    },
    setup(e) {
      const t = e, n = Xn();
      return st(), (r, o) => (j(), Z(B(Ro), We(t, {
        id: B(n).titleId
      }), {
        default: ie(() => [
          ae(r.$slots, "default")
        ]),
        _: 3
      }, 16, [
        "id"
      ]));
    }
  });
  zC = te({
    __name: "AlertDialogTitle",
    props: {
      asChild: {
        type: Boolean
      },
      as: {
        default: "h2"
      }
    },
    setup(e) {
      const t = e;
      return st(), (n, r) => (j(), Z(B(GC), Vn(Gn(t)), {
        default: ie(() => [
          ae(n.$slots, "default")
        ]),
        _: 3
      }, 16));
    }
  });
  function JC() {
    const { public: { environment: t, enableDevAnalytics: n } } = ut(), r = t.name === "local" && n, o = () => null, s = 3600 * 24 * 100, i = _a("nimiq-consent", {
      default: o,
      maxAge: s
    }), { proxy: a } = Rp(), { proxy: l } = Tp();
    function u() {
      if (i.value = {
        accepted: true,
        version: "1.0",
        timestamp: Date.now()
      }, r) {
        console.log("\u{1F4CA} [DEV] Analytics consent accepted - would initialize download tracking");
        return;
      }
      (a == null ? void 0 : a._paq) && a._paq.push([
        "addDownloadExtensions",
        "deb|rpm|msi|sha256|asc|pub"
      ]);
    }
    function c() {
      if (i.value = {
        accepted: false,
        version: "1.0",
        timestamp: Date.now()
      }, r) {
        console.log("\u{1F4CA} [DEV] Analytics consent rejected - would opt out user");
        return;
      }
      (a == null ? void 0 : a._paq) && a._paq.push([
        "optUserOut"
      ]), (l == null ? void 0 : l.dataLayer) && l.dataLayer.push({
        event: "consent_rejected"
      });
    }
    function f(d) {
      var _a2;
      if (!((_a2 = i.value) == null ? void 0 : _a2.accepted)) return;
      const { eventName: p, eventCategory: h = "Custom", eventAction: m = p, label: b = "" } = d;
      if (r) {
        const S = `trackEvent: ${h} > ${m} > ${b}`;
        console.log("\u{1F4CA} [DEV] Would track event:", {
          eventName: p,
          eventCategory: h,
          eventAction: m,
          label: b,
          matomo: S,
          gtm: {
            event: p,
            event_category: h,
            event_action: m,
            event_label: b
          }
        });
        return;
      }
      if ((a == null ? void 0 : a._paq) && a._paq.push([
        "trackEvent",
        h,
        m,
        b
      ]), l == null ? void 0 : l.dataLayer) {
        const S = p, w = h, g = m, y = b;
        l.dataLayer.push({
          event: S,
          event_category: w,
          event_action: g,
          event_label: y
        });
      }
    }
    return {
      consent: Ds(i),
      acceptConsent: u,
      rejectConsent: c,
      trackEvent: f
    };
  }
  let YC, QC, XC, ZC, ek, tk, nk, ok;
  YC = {
    flex: "~ gap-16",
    "mx-0": "",
    "w-max": "",
    "translate-x--13": "",
    "f-mt-sm": ""
  };
  QC = "1.0";
  XC = te({
    __name: "ConsentBanner",
    setup(e) {
      const { consent: t, acceptConsent: n, rejectConsent: r } = JC(), o = W(() => {
        var _a2;
        const s = (_a2 = t.value) == null ? void 0 : _a2.version;
        return !s || s !== QC;
      });
      return (s, i) => {
        const a = zC, l = ks, u = HC, c = jC, f = pC, d = BC, p = WC, h = KC;
        return j(), Z(h, {
          open: B(o),
          modal: false,
          onOpenAutoFocus: i[0] || (i[0] = ra(() => {
          }, [
            "prevent"
          ]))
        }, {
          default: ie(() => [
            le(p, null, {
              default: ie(() => [
                le(d, {
                  outline: "~ 1.5 neutral/10",
                  class: "nq-prose-compact",
                  "mx-auto": "",
                  "rounded-8": "",
                  "bg-neutral-0": "",
                  "max-w-none": "",
                  shadow: "",
                  "transition-all": "",
                  "duration-300": "",
                  "ease-out": "",
                  "inset-x-12": "",
                  "bottom-12": "",
                  fixed: "",
                  "z-101": "",
                  "f-p-lg": "",
                  flex: "~ col",
                  style: {
                    "box-shadow": `0 4px 6px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 6%, transparent),
        0 -4px 6px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 6%, transparent),
        0 -8px 12px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 4%, transparent),
        0 8px 12px 0 color-mix(in srgb, var(--colors-neutral-DEFAULT) 4%, transparent)`
                  }
                }, {
                  default: ie(() => [
                    le(a, {
                      text: "f-xl neutral-900",
                      "font-semibold": "",
                      "leading-tight": "",
                      "my-0": "",
                      "ml-0": ""
                    }, {
                      default: ie(() => i[1] || (i[1] = [
                        Ct(" Cookie Consent ")
                      ])),
                      _: 1,
                      __: [
                        1
                      ]
                    }),
                    le(u, {
                      text: "f-sm neutral-700",
                      "leading-relaxed": "",
                      "mx-0": "",
                      "f-mt-xs": ""
                    }, {
                      default: ie(() => [
                        i[3] || (i[3] = Ct(" We use cookies and similar technologies to enhance your experience. By continuing to browse, you agree to our use of cookies for analytics and tracking. ")),
                        le(l, {
                          to: "/privacy-policy",
                          target: "_blank",
                          "nq-arrow": ""
                        }, {
                          default: ie(() => i[2] || (i[2] = [
                            Ct(" Learn more ")
                          ])),
                          _: 1,
                          __: [
                            2
                          ]
                        })
                      ]),
                      _: 1,
                      __: [
                        3
                      ]
                    }),
                    qe("div", YC, [
                      le(c, {
                        "op-85": "",
                        "cursor-pointer": "",
                        "transition-colors": "",
                        "nq-pill-tertiary": "",
                        "hocus:bg-neutral-300": "",
                        onClick: B(r)
                      }, {
                        default: ie(() => i[4] || (i[4] = [
                          qe("div", {
                            "mr-8": "",
                            "op-80": "",
                            "scale-60": "",
                            "i-nimiq:cross": ""
                          }, null, -1),
                          Ct(" Reject ")
                        ])),
                        _: 1,
                        __: [
                          4
                        ]
                      }, 8, [
                        "onClick"
                      ]),
                      le(f, {
                        "cursor-pointer": "",
                        "nq-pill-blue": "",
                        onClick: B(n)
                      }, {
                        default: ie(() => i[5] || (i[5] = [
                          qe("div", {
                            "mr-8": "",
                            "op-80": "",
                            "scale-90": "",
                            "i-nimiq:check": ""
                          }, null, -1),
                          Ct(" Accept ")
                        ])),
                        _: 1,
                        __: [
                          5
                        ]
                      }, 8, [
                        "onClick"
                      ])
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, [
          "open"
        ]);
      };
    }
  });
  ZC = Object.assign(XC, {
    __name: "ConsentBanner"
  });
  ek = te({
    __name: "app",
    setup(e) {
      const { environment: t, enableDevAnalytics: n } = ut().public;
      return t.isProduction, (r, o) => {
        const s = DE, i = ZC;
        return j(), be("div", null, [
          le(s),
          (j(), Z(i, {
            key: 0
          }))
        ]);
      };
    }
  });
  tk = te({
    name: "LayoutLoader",
    inheritAttrs: false,
    props: {
      name: String,
      layoutProps: Object
    },
    setup(e, t) {
      return () => de(kn[e.name], e.layoutProps, t.slots);
    }
  });
  nk = {
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
  rk = te({
    name: "NuxtLayout",
    inheritAttrs: false,
    props: nk,
    setup(e, t) {
      const n = ye(), r = Re(Wn), s = !r || r === zn() ? pp() : r, i = W(() => {
        let c = B(e.name) ?? (s == null ? void 0 : s.meta.layout) ?? "default";
        return c && !(c in kn) && e.fallback && (c = B(e.fallback)), c;
      }), a = Fe();
      t.expose({
        layoutRef: a
      });
      const l = n.deferHydration();
      if (n.isHydrating) {
        const c = n.hooks.hookOnce("app:error", l);
        He().beforeEach(c);
      }
      let u;
      return () => {
        const c = i.value && i.value in kn, f = (s == null ? void 0 : s.meta.layoutTransition) ?? Ly, d = u;
        return u = i.value, hp(c && f, {
          default: () => de(Ha, {
            suspensible: true,
            onResolve: () => {
              je(l);
            }
          }, {
            default: () => de(ok, {
              layoutProps: We(t.attrs, {
                ref: a
              }),
              key: i.value || void 0,
              name: i.value,
              shouldProvide: !e.name,
              isRenderingNewLayout: (p) => p !== d && p === i.value,
              hasTransition: !!f
            }, t.slots)
          })
        }).default();
      };
    }
  });
  ok = te({
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
      e.shouldProvide && Vt(Pd, {
        isCurrent: (s) => n === (s.meta.layout ?? "default")
      });
      const r = Re(Wn);
      if (r && r === zn()) {
        const s = pp(), i = {};
        for (const a in s) {
          const l = a;
          Object.defineProperty(i, l, {
            enumerable: true,
            get: () => e.isRenderingNewLayout(e.name) ? s[l] : r[l]
          });
        }
        Vt(Wn, Ut(i));
      }
      return () => {
        var _a2, _b2;
        return !n || typeof n == "string" && !(n in kn) ? (_b2 = (_a2 = t.slots).default) == null ? void 0 : _b2.call(_a2) : de(tk, {
          key: n,
          layoutProps: e.layoutProps,
          name: n
        }, t.slots);
      };
    }
  });
  var sk = {};
  const ik = {
    "bg-neutral-100": "",
    "f-pt-2xl": ""
  }, ak = {
    "f-mt-lg": "",
    flex: "~ md:justify-center"
  }, lk = {
    "nq-prose-compact": "",
    "w-full": "",
    "f-mt-lg": ""
  }, ck = {
    bg: "red/10",
    "text-red-1100": "",
    "outline-red-600": ""
  }, uk = {
    bg: "red/10",
    "text-red-1100": "",
    "mt-4": "",
    "outline-red-600": ""
  }, fk = te({
    __name: "error",
    props: {
      error: {}
    },
    setup(e) {
      const t = e, n = W(() => t.error.statusCode || 404), r = W(() => {
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
      }), o = zn(), s = He(), i = W(() => o.path.startsWith("/developer") || o.path.startsWith("/developers") || o.path.includes("/dev/") || o.path.includes("/docs/")), a = W(() => t.error.message === "Article not found"), l = W(() => o.path.startsWith("/blog") || a.value);
      ot(() => {
        if (i.value || sk.REDIRECT_ALL_ERRORS === "true") {
          const m = encodeURIComponent(o.fullPath);
          s.push(`/developers/error?original-path=${m}&status=${n.value}`);
        }
      });
      const u = W(() => l.value ? "/blog" : "/"), c = W(() => l.value ? "Browse all articles" : "Back to home"), f = () => xd({
        redirect: u.value
      }), d = W(() => a.value ? "Article not found" : `${n.value} - ${r.value}`), p = W(() => {
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
      Gs({
        title: a.value ? "Article not found" : `${n.value} - ${r.value}`,
        meta: [
          {
            name: "description",
            content: W(() => p.value)
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
            content: W(() => p.value)
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
            content: W(() => p.value)
          }
        ]
      });
      const h = t.error.stack;
      return delete t.error.stack, console.error(t.error), (m, b) => {
        const S = ks, w = rk;
        return j(), Z(w, null, {
          default: ie(() => [
            qe("section", ik, [
              qe("h1", null, Xt(B(d)), 1),
              qe("p", null, Xt(B(p)), 1),
              qe("div", ak, [
                le(S, {
                  to: B(u),
                  "nq-arrow": "",
                  "nq-pill-lg": "",
                  "nq-pill-blue": "",
                  onClick: f
                }, {
                  default: ie(() => [
                    Ct(Xt(B(c)), 1)
                  ]),
                  _: 1
                }, 8, [
                  "to"
                ])
              ]),
              qe("div", lk, [
                qe("details", null, [
                  b[0] || (b[0] = qe("summary", {
                    "w-full": "",
                    "cursor-pointer": "",
                    text: "center neutral-800"
                  }, [
                    qe("span", null, "Details")
                  ], -1)),
                  qe("pre", ck, Xt(m.error), 1),
                  b[1] || (b[1] = qe("span", {
                    "text-red-1100": "",
                    "f-px-sm": "",
                    "f-mt-md": "",
                    "nq-label": ""
                  }, "Stack", -1)),
                  qe("pre", uk, Xt(B(h)), 1)
                ])
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  }), dk = {
    key: 0
  }, Eu = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null, n = ye(), r = n.deferHydration();
      if (n.isHydrating) {
        const u = n.hooks.hookOnce("app:error", r);
        He().beforeEach(u);
      }
      const o = false;
      Vt(Wn, zn()), n.hooks.callHookWith((u) => u.map((c) => c()), "vue:setup");
      const s = xr(), i = false, a = /bot\b|chrome-lighthouse|facebookexternalhit|google\b/i;
      yf((u, c, f) => {
        if (n.hooks.callHook("vue:error", u, c, f).catch((d) => console.error("[nuxt] Error in `vue:error` hook", d)), a.test(navigator.userAgent)) return n.hooks.callHook("app:error", u), console.error(`[nuxt] Not rendering error page for bot with user agent \`${navigator.userAgent}\`:`, u), false;
        if (Od(u) && (u.fatal || u.unhandled)) return n.runWithContext(() => Dn(u)), false;
      });
      const l = false;
      return (u, c) => (j(), Z(Ha, {
        onResolve: B(r)
      }, {
        default: ie(() => [
          B(i) ? (j(), be("div", dk)) : B(s) ? (j(), Z(B(fk), {
            key: 1,
            error: B(s)
          }, null, 8, [
            "error"
          ])) : B(l) ? (j(), Z(B(t), {
            key: 2,
            context: B(l)
          }, null, 8, [
            "context"
          ])) : B(o) ? (j(), Z(nt(B(o)), {
            key: 3
          })) : (j(), Z(B(ek), {
            key: 4
          }))
        ]),
        _: 1
      }, 8, [
        "onResolve"
      ]));
    }
  };
  let Cu;
  {
    let e;
    Cu = async function() {
      var _a2, _b2;
      if (e) return e;
      const n = !!(((_a2 = window.__NUXT__) == null ? void 0 : _a2.serverRendered) ?? ((_b2 = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b2.dataset.ssr) === "true"), r = n ? Ag(Eu) : Pg(Eu), o = Fy({
        vueApp: r
      });
      async function s(i) {
        var _a3;
        await o.callHook("app:error", i), (_a3 = o.payload).error || (_a3.error = Pn(i));
      }
      r.config.errorHandler = s, o.hook("app:suspense:resolve", () => {
        r.config.errorHandler === s && (r.config.errorHandler = void 0);
      }), !n && ic.id && o.hook("app:suspense:resolve", () => {
        var _a3;
        (_a3 = document.getElementById(ic.id)) == null ? void 0 : _a3.remove();
      });
      try {
        await Wy(o, ME);
      } catch (i) {
        s(i);
      }
      try {
        await o.hooks.callHook("app:created", r), await o.hooks.callHook("app:beforeMount", r), r.mount(Ny), await o.hooks.callHook("app:mounted", r), await je();
      } catch (i) {
        s(i);
      }
      return r;
    }, e = Cu().catch((t) => {
      throw console.error("Error while mounting app:", t), t;
    });
  }
})();
export {
  fl as $,
  ut as A,
  ot as B,
  Ar as C,
  de as D,
  pr as E,
  Te as F,
  Tl as G,
  wt as H,
  $k as I,
  _a as J,
  je as K,
  ye as L,
  Gt as M,
  Pt as N,
  Fe as O,
  Jn as P,
  ae as Q,
  Ro as R,
  st as S,
  Vn as T,
  Gn as U,
  qt as V,
  sC as W,
  no as X,
  qk as Y,
  ln as Z,
  fu as _,
  __tla,
  W as a,
  Ks as a$,
  bu as a0,
  Kk as a1,
  Ak as a2,
  vC as a3,
  qC as a4,
  Wk as a5,
  uC as a6,
  $r as a7,
  Kh as a8,
  Yk as a9,
  He as aA,
  GC as aB,
  FC as aC,
  Yp as aD,
  Xn as aE,
  UC as aF,
  Ps as aG,
  hk as aH,
  Pk as aI,
  _e as aJ,
  Ft as aK,
  Yn as aL,
  Mk as aM,
  Np as aN,
  Y0 as aO,
  Xs as aP,
  RS as aQ,
  Qs as aR,
  al as aS,
  fS as aT,
  Tk as aU,
  Zy as aV,
  we as aW,
  _o as aX,
  Zg as aY,
  Ot as aZ,
  qs as a_,
  Tr as aa,
  Rs as ab,
  gk as ac,
  dC as ad,
  ra as ae,
  IC as af,
  Le as ag,
  xn as ah,
  jk as ai,
  To as aj,
  eg as ak,
  Nk as al,
  Re as am,
  Vt as an,
  yk as ao,
  gf as ap,
  rm as aq,
  Na as ar,
  $e as as,
  ct as at,
  mk as au,
  Bk as av,
  _p as aw,
  kk as ax,
  bk as ay,
  Sk as az,
  Gs as b,
  Ok as b0,
  Ug as b1,
  VC as b2,
  RC as b3,
  LC as b4,
  nt as b5,
  Ye as b6,
  Ds as b7,
  Kn as b8,
  go as b9,
  El as bA,
  rt as bB,
  Tc as bC,
  Lk as bD,
  Ik as bE,
  Rk as bF,
  xk as bG,
  Xk as bH,
  qn as ba,
  pk as bb,
  Bs as bc,
  wk as bd,
  vk as be,
  Fk as bf,
  Uk as bg,
  zk as bh,
  iC as bi,
  Vk as bj,
  eC as bk,
  pp as bl,
  Dk as bm,
  vb as bn,
  HE as bo,
  Hk as bp,
  Tm as bq,
  Ek as br,
  Qp as bs,
  lC as bt,
  Jk as bu,
  Fm as bv,
  ue as bw,
  Pg as bx,
  Ck as by,
  Gk as bz,
  Pn as c,
  te as d,
  Z as e,
  ie as f,
  le as g,
  B as h,
  rk as i,
  be as j,
  qe as k,
  zt as l,
  ks as m,
  mo as n,
  j as o,
  Ct as p,
  ho as q,
  _r as r,
  We as s,
  Xt as t,
  zn as u,
  fe as v,
  _k as w,
  Oe as x,
  Vd as y,
  du as z
};
