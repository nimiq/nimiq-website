const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./bg-blue-sss.BqPlA7jk.css","./onepager.BMUVdREQ.css","./BqhkN64D.js","./CHSTKM5u.js","./DBd8fsAv.js","./SvaN8giD.js","./Dxc61GTl.js","./BVy4Ey-L.js","./ZXfttXAr.js","./DsoEoSLB.js","./DvG5VWlW.js","./Tooltip.Cgw-zEuc.css","./CEBR9iVI.js","./YKo2rOHu.js","./roadmap.CYyI30Vv.css","./CrCEHL8S.js","./DQfM3PGm.js","./sIJHNHza.js","./D2oR6gL8.js","./aGufb5sz.js","./xLWJwwMd.js","./zyrJ5Oe-.js","./bWEtUbjf.js","./B0V233La.js","./_post_.CiM571Ci.css","./CGi-SWSF.js","./CqkleIqs.js","./CyKveLbZ.js","./OyFcecuz.js","./CVtsTRWS.js","./Bz4-DFcF.js","./B9j71pJ-.js","./Blockchain.DgtOpVGp.css","./hgE_6TKD.js","./CNR68Ipz.js","./BlGBlRxG.js","./FVrYAlZa.js","./Bu3WqqYb.js","./CHIgUVhi.js","./ZsnPzy3h.js","./Pl2CaGPD.js","./Bygj8hOA.js","./TWV2KN6z.js","./B5soDbN4.js","./default.W_LG_VQq.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
let wS, AS, $e, bc, qo, pn, we, ss, Se, qn, Ma, jt, nt, ye, Kt, Cn, gt, Yf, Pe, Oc, Ju, Ch, gp, SS, sS, Ko, lS, Mi, pe, Ll, lt, Vt, On, qp, nv, yS, fS, pS, Me, oS, TS, qm, Mm, ES, cS, Id, Nw, sw, vs, ys, ya, _w, sr, Zc, Gi, Qi, rs, rS, rt, hS, uS, xe, Wt, Vr, _s, pb, LS, _S, _e, Pt, ar, ny, PS, Qy, Lt, yp, Ge, mS, Op, re, Rn, Re, bm, iS, xS, it, aS, Mf, RS, Mt, fs, na, _f, oe, CS, MS, Hi, vS, qg, Go, bS, kS, gS, de, he, et, zt, ir, Xo, H0, Y, G0, ds, Gr, Ur, q, yn, to, Yn, dS, Nt, ie, Jr, Ne, Qf, OS, vc;
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
  function Di(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  let ae, Hn, xt, Kd, Hr, ji, Te, Fi, Gd, ue, J, Un, zo, Sa, zd, ee, ke, mt, me, Cc, rr, Jd, Pc, Ui, Vn, Jo, Yd, Qd, qt, Yo, qe, Wn, Ac, Qs, xc;
  ae = {};
  Hn = [];
  xt = () => {
  };
  Kd = () => false;
  Hr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
  ji = (e) => e.startsWith("onUpdate:");
  Te = Object.assign;
  Fi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  Gd = Object.prototype.hasOwnProperty;
  ue = (e, t) => Gd.call(e, t);
  J = Array.isArray;
  Un = (e) => rr(e) === "[object Map]";
  zo = (e) => rr(e) === "[object Set]";
  Sa = (e) => rr(e) === "[object Date]";
  zd = (e) => rr(e) === "[object RegExp]";
  ee = (e) => typeof e == "function";
  ke = (e) => typeof e == "string";
  mt = (e) => typeof e == "symbol";
  me = (e) => e !== null && typeof e == "object";
  Hi = (e) => (me(e) || ee(e)) && ee(e.then) && ee(e.catch);
  Cc = Object.prototype.toString;
  rr = (e) => Cc.call(e);
  Jd = (e) => rr(e).slice(8, -1);
  Pc = (e) => rr(e) === "[object Object]";
  Ui = (e) => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  Vn = Di(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  Jo = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  Yd = /-(\w)/g;
  rt = Jo((e) => e.replace(Yd, (t, n) => n ? n.toUpperCase() : ""));
  Qd = /\B([A-Z])/g;
  qt = Jo((e) => e.replace(Qd, "-$1").toLowerCase());
  Yo = Jo((e) => e.charAt(0).toUpperCase() + e.slice(1));
  _s = Jo((e) => e ? `on${Yo(e)}` : "");
  qe = (e, t) => !Object.is(e, t);
  Wn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  };
  Ac = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  };
  Qs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  xc = (e) => {
    const t = ke(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let ka;
  const Qo = () => ka || (ka = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  Xo = function(e) {
    if (J(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = ke(r) ? th(r) : Xo(r);
        if (o) for (const s in o) t[s] = o[s];
      }
      return t;
    } else if (ke(e) || me(e)) return e;
  };
  const Xd = /;(?![^(]*\))/g, Zd = /:([^]+)/, eh = /\/\*[^]*?\*\//g;
  function th(e) {
    const t = {};
    return e.replace(eh, "").split(Xd).forEach((n) => {
      if (n) {
        const r = n.split(Zd);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  Ur = function(e) {
    let t = "";
    if (ke(e)) t = e;
    else if (J(e)) for (let n = 0; n < e.length; n++) {
      const r = Ur(e[n]);
      r && (t += r + " ");
    }
    else if (me(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  Oc = function(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !ke(t) && (e.class = Ur(t)), n && (e.style = Xo(n)), e;
  };
  const nh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", rh = Di(nh);
  function Lc(e) {
    return !!e || e === "";
  }
  function oh(e, t) {
    if (e.length !== t.length) return false;
    let n = true;
    for (let r = 0; n && r < e.length; r++) n = Jn(e[r], t[r]);
    return n;
  }
  function Jn(e, t) {
    if (e === t) return true;
    let n = Sa(e), r = Sa(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : false;
    if (n = mt(e), r = mt(t), n || r) return e === t;
    if (n = J(e), r = J(t), n || r) return n && r ? oh(e, t) : false;
    if (n = me(e), r = me(t), n || r) {
      if (!n || !r) return false;
      const o = Object.keys(e).length, s = Object.keys(t).length;
      if (o !== s) return false;
      for (const i in e) {
        const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
        if (a && !l || !a && l || !Jn(e[i], t[i])) return false;
      }
    }
    return String(e) === String(t);
  }
  function Mc(e, t) {
    return e.findIndex((n) => Jn(n, t));
  }
  let Ic, $c, ws;
  Ic = (e) => !!(e && e.__v_isRef === true);
  Nt = (e) => ke(e) ? e : e == null ? "" : J(e) || me(e) && (e.toString === Cc || !ee(e.toString)) ? Ic(e) ? Nt(e.value) : JSON.stringify(e, $c, 2) : String(e);
  $c = (e, t) => Ic(t) ? $c(e, t.value) : Un(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], s) => (n[ws(r, s) + " =>"] = o, n), {})
  } : zo(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => ws(n))
  } : mt(t) ? ws(t) : me(t) && !J(t) && !Pc(t) ? String(t) : t;
  ws = (e, t = "") => {
    var n;
    return mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let We;
  class Nc {
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
          const o = this.parent.scopes.pop();
          o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
        }
        this.parent = void 0;
      }
    }
  }
  Vr = function(e) {
    return new Nc(e);
  };
  Kt = function() {
    return We;
  };
  Cn = function(e, t = false) {
    We && We.cleanups.push(e);
  };
  let be;
  const Ss = /* @__PURE__ */ new WeakSet();
  class Bc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, We && We.active && We.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Ss.has(this) && (Ss.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || jc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ea(this), Fc(this);
      const t = be, n = pt;
      be = this, pt = true;
      try {
        return this.fn();
      } finally {
        Hc(this), be = t, pt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) qi(t);
        this.deps = this.depsTail = void 0, Ea(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Ss.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Xs(this) && this.run();
    }
    get dirty() {
      return Xs(this);
    }
  }
  let Dc = 0, br, _r;
  function jc(e, t = false) {
    if (e.flags |= 8, t) {
      e.next = _r, _r = e;
      return;
    }
    e.next = br, br = e;
  }
  function Vi() {
    Dc++;
  }
  function Wi() {
    if (--Dc > 0) return;
    if (_r) {
      let t = _r;
      for (_r = void 0; t; ) {
        const n = t.next;
        t.next = void 0, t.flags &= -9, t = n;
      }
    }
    let e;
    for (; br; ) {
      let t = br;
      for (br = void 0; t; ) {
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
  function Fc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Hc(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), qi(r), sh(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function Xs(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Uc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function Uc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === xr)) return;
    e.globalVersion = xr;
    const t = e.dep;
    if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Xs(e)) {
      e.flags &= -3;
      return;
    }
    const n = be, r = pt;
    be = e, pt = true;
    try {
      Fc(e);
      const o = e.fn(e._value);
      (t.version === 0 || qe(o, e._value)) && (e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      be = n, pt = r, Hc(e), e.flags &= -3;
    }
  }
  function qi(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let s = n.computed.deps; s; s = s.nextDep) qi(s, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function sh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let pt = true;
  const Vc = [];
  function mn() {
    Vc.push(pt), pt = false;
  }
  function gn() {
    const e = Vc.pop();
    pt = e === void 0 ? true : e;
  }
  function Ea(e) {
    const { cleanup: t } = e;
    if (e.cleanup = void 0, t) {
      const n = be;
      be = void 0;
      try {
        t();
      } finally {
        be = n;
      }
    }
  }
  let xr = 0;
  class ih {
    constructor(t, n) {
      this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  }
  class Zo {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!be || !pt || be === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== be) n = this.activeLink = new ih(be, this), be.deps ? (n.prevDep = be.depsTail, be.depsTail.nextDep = n, be.depsTail = n) : be.deps = be.depsTail = n, Wc(n);
      else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
        const r = n.nextDep;
        r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = be.depsTail, n.nextDep = void 0, be.depsTail.nextDep = n, be.depsTail = n, be.deps === n && (be.deps = r);
      }
      return n;
    }
    trigger(t) {
      this.version++, xr++, this.notify(t);
    }
    notify(t) {
      Vi();
      try {
        for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify();
      } finally {
        Wi();
      }
    }
  }
  function Wc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Wc(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Po = /* @__PURE__ */ new WeakMap(), kn = Symbol(""), Zs = Symbol(""), Or = Symbol("");
  function De(e, t, n) {
    if (pt && be) {
      let r = Po.get(e);
      r || Po.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new Zo()), o.map = r, o.key = n), o.track();
    }
  }
  function Bt(e, t, n, r, o, s) {
    const i = Po.get(e);
    if (!i) {
      xr++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if (Vi(), t === "clear") i.forEach(a);
    else {
      const l = J(e), u = l && Ui(n);
      if (l && n === "length") {
        const c = Number(r);
        i.forEach((f, h) => {
          (h === "length" || h === Or || !mt(h) && h >= c) && a(f);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Or)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(kn)), Un(e) && a(i.get(Zs)));
          break;
        case "delete":
          l || (a(i.get(kn)), Un(e) && a(i.get(Zs)));
          break;
        case "set":
          Un(e) && a(i.get(kn));
          break;
      }
    }
    Wi();
  }
  function ah(e, t) {
    const n = Po.get(e);
    return n && n.get(t);
  }
  function In(e) {
    const t = re(e);
    return t === e ? t : (De(t, "iterate", Or), at(e) ? t : t.map(je));
  }
  function es(e) {
    return De(e = re(e), "iterate", Or), e;
  }
  const lh = {
    __proto__: null,
    [Symbol.iterator]() {
      return ks(this, Symbol.iterator, je);
    },
    concat(...e) {
      return In(this).concat(...e.map((t) => J(t) ? In(t) : t));
    },
    entries() {
      return ks(this, "entries", (e) => (e[1] = je(e[1]), e));
    },
    every(e, t) {
      return It(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return It(this, "filter", e, t, (n) => n.map(je), arguments);
    },
    find(e, t) {
      return It(this, "find", e, t, je, arguments);
    },
    findIndex(e, t) {
      return It(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return It(this, "findLast", e, t, je, arguments);
    },
    findLastIndex(e, t) {
      return It(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return It(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Es(this, "includes", e);
    },
    indexOf(...e) {
      return Es(this, "indexOf", e);
    },
    join(e) {
      return In(this).join(e);
    },
    lastIndexOf(...e) {
      return Es(this, "lastIndexOf", e);
    },
    map(e, t) {
      return It(this, "map", e, t, void 0, arguments);
    },
    pop() {
      return fr(this, "pop");
    },
    push(...e) {
      return fr(this, "push", e);
    },
    reduce(e, ...t) {
      return Ra(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ra(this, "reduceRight", e, t);
    },
    shift() {
      return fr(this, "shift");
    },
    some(e, t) {
      return It(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
      return fr(this, "splice", e);
    },
    toReversed() {
      return In(this).toReversed();
    },
    toSorted(e) {
      return In(this).toSorted(e);
    },
    toSpliced(...e) {
      return In(this).toSpliced(...e);
    },
    unshift(...e) {
      return fr(this, "unshift", e);
    },
    values() {
      return ks(this, "values", je);
    }
  };
  function ks(e, t, n) {
    const r = es(e), o = r[t]();
    return r !== e && !at(e) && (o._next = o.next, o.next = () => {
      const s = o._next();
      return s.value && (s.value = n(s.value)), s;
    }), o;
  }
  const ch = Array.prototype;
  function It(e, t, n, r, o, s) {
    const i = es(e), a = i !== e && !at(e), l = i[t];
    if (l !== ch[t]) {
      const f = l.apply(e, s);
      return a ? je(f) : f;
    }
    let u = n;
    i !== e && (a ? u = function(f, h) {
      return n.call(this, je(f), h, e);
    } : n.length > 2 && (u = function(f, h) {
      return n.call(this, f, h, e);
    }));
    const c = l.call(i, u, r);
    return a && o ? o(c) : c;
  }
  function Ra(e, t, n, r) {
    const o = es(e);
    let s = n;
    return o !== e && (at(e) ? n.length > 3 && (s = function(i, a, l) {
      return n.call(this, i, a, l, e);
    }) : s = function(i, a, l) {
      return n.call(this, i, je(a), l, e);
    }), o[t](s, ...r);
  }
  function Es(e, t, n) {
    const r = re(e);
    De(r, "iterate", Or);
    const o = r[t](...n);
    return (o === -1 || o === false) && Ki(n[0]) ? (n[0] = re(n[0]), r[t](...n)) : o;
  }
  function fr(e, t, n = []) {
    mn(), Vi();
    const r = re(e)[t].apply(e, n);
    return Wi(), gn(), r;
  }
  const uh = Di("__proto__,__v_isRef,__isVue"), qc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(mt));
  function fh(e) {
    mt(e) || (e = String(e));
    const t = re(this);
    return De(t, "has", e), t.hasOwnProperty(e);
  }
  class Kc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw") return r === (o ? s ? Xc : Qc : s ? Yc : Jc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const i = J(t);
      if (!o) {
        let l;
        if (i && (l = lh[n])) return l;
        if (n === "hasOwnProperty") return fh;
      }
      const a = Reflect.get(t, n, _e(t) ? t : r);
      return (mt(n) ? qc.has(n) : uh(n)) || (o || De(t, "get", n), s) ? a : _e(a) ? i && Ui(n) ? a : a.value : me(a) ? o ? Zc(a) : Lt(a) : a;
    }
  }
  class Gc extends Kc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, o) {
      let s = t[n];
      if (!this._isShallow) {
        const l = dn(s);
        if (!at(r) && !dn(r) && (s = re(s), r = re(r)), !J(t) && _e(s) && !_e(r)) return l ? false : (s.value = r, true);
      }
      const i = J(t) && Ui(n) ? Number(n) < t.length : ue(t, n), a = Reflect.set(t, n, r, _e(t) ? t : o);
      return t === re(o) && (i ? qe(r, s) && Bt(t, "set", n, r) : Bt(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = ue(t, n);
      t[n];
      const o = Reflect.deleteProperty(t, n);
      return o && r && Bt(t, "delete", n, void 0), o;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!mt(n) || !qc.has(n)) && De(t, "has", n), r;
    }
    ownKeys(t) {
      return De(t, "iterate", J(t) ? "length" : kn), Reflect.ownKeys(t);
    }
  }
  class zc extends Kc {
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
  const dh = new Gc(), hh = new zc(), ph = new Gc(true), mh = new zc(true), ei = (e) => e, ro = (e) => Reflect.getPrototypeOf(e);
  function gh(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, s = re(o), i = Un(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? ei : t ? ti : je;
      return !t && De(s, "iterate", l ? Zs : kn), {
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
  function oo(e) {
    return function(...t) {
      return e === "delete" ? false : e === "clear" ? void 0 : this;
    };
  }
  function yh(e, t) {
    const n = {
      get(o) {
        const s = this.__v_raw, i = re(s), a = re(o);
        e || (qe(o, a) && De(i, "get", o), De(i, "get", a));
        const { has: l } = ro(i), u = t ? ei : e ? ti : je;
        if (l.call(i, o)) return u(s.get(o));
        if (l.call(i, a)) return u(s.get(a));
        s !== i && s.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && De(re(o), "iterate", kn), Reflect.get(o, "size", o);
      },
      has(o) {
        const s = this.__v_raw, i = re(s), a = re(o);
        return e || (qe(o, a) && De(i, "has", o), De(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
      },
      forEach(o, s) {
        const i = this, a = i.__v_raw, l = re(a), u = t ? ei : e ? ti : je;
        return !e && De(l, "iterate", kn), a.forEach((c, f) => o.call(s, u(c), u(f), i));
      }
    };
    return Te(n, e ? {
      add: oo("add"),
      set: oo("set"),
      delete: oo("delete"),
      clear: oo("clear")
    } : {
      add(o) {
        !t && !at(o) && !dn(o) && (o = re(o));
        const s = re(this);
        return ro(s).has.call(s, o) || (s.add(o), Bt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !at(s) && !dn(s) && (s = re(s));
        const i = re(this), { has: a, get: l } = ro(i);
        let u = a.call(i, o);
        u || (o = re(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? qe(s, c) && Bt(i, "set", o, s) : Bt(i, "add", o, s), this;
      },
      delete(o) {
        const s = re(this), { has: i, get: a } = ro(s);
        let l = i.call(s, o);
        l || (o = re(o), l = i.call(s, o)), a && a.call(s, o);
        const u = s.delete(o);
        return l && Bt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = re(this), s = o.size !== 0, i = o.clear();
        return s && Bt(o, "clear", void 0, void 0), i;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((o) => {
      n[o] = gh(o, e, t);
    }), n;
  }
  function ts(e, t) {
    const n = yh(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ue(n, o) && o in r ? n : r, o, s);
  }
  const vh = {
    get: ts(false, false)
  }, bh = {
    get: ts(false, true)
  }, _h = {
    get: ts(true, false)
  }, wh = {
    get: ts(true, true)
  }, Jc = /* @__PURE__ */ new WeakMap(), Yc = /* @__PURE__ */ new WeakMap(), Qc = /* @__PURE__ */ new WeakMap(), Xc = /* @__PURE__ */ new WeakMap();
  function Sh(e) {
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
  function kh(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Sh(Jd(e));
  }
  Lt = function(e) {
    return dn(e) ? e : ns(e, false, dh, vh, Jc);
  };
  function Ft(e) {
    return ns(e, false, ph, bh, Yc);
  }
  Zc = function(e) {
    return ns(e, true, hh, _h, Qc);
  };
  rS = function(e) {
    return ns(e, true, mh, wh, Xc);
  };
  function ns(e, t, n, r, o) {
    if (!me(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = o.get(e);
    if (s) return s;
    const i = kh(e);
    if (i === 0) return e;
    const a = new Proxy(e, i === 2 ? r : n);
    return o.set(e, a), a;
  }
  function Ot(e) {
    return dn(e) ? Ot(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function dn(e) {
    return !!(e && e.__v_isReadonly);
  }
  function at(e) {
    return !!(e && e.__v_isShallow);
  }
  function Ki(e) {
    return e ? !!e.__v_raw : false;
  }
  re = function(e) {
    const t = e && e.__v_raw;
    return t ? re(t) : e;
  };
  qn = function(e) {
    return !ue(e, "__v_skip") && Object.isExtensible(e) && Ac(e, "__v_skip", true), e;
  };
  const je = (e) => me(e) ? Lt(e) : e, ti = (e) => me(e) ? Zc(e) : e;
  _e = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  $e = function(e) {
    return eu(e, false);
  };
  gt = function(e) {
    return eu(e, true);
  };
  function eu(e, t) {
    return _e(e) ? e : new Eh(e, t);
  }
  class Eh {
    constructor(t, n) {
      this.dep = new Zo(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : re(t), this._value = n ? t : je(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || at(t) || dn(t);
      t = r ? t : re(t), qe(t, n) && (this._rawValue = t, this._value = r ? t : je(t), this.dep.trigger());
    }
  }
  ie = function(e) {
    return _e(e) ? e.value : e;
  };
  it = function(e) {
    return ee(e) ? e() : ie(e);
  };
  const Rh = {
    get: (e, t, n) => t === "__v_raw" ? e : ie(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return _e(o) && !_e(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function tu(e) {
    return Ot(e) ? e : new Proxy(e, Rh);
  }
  class Th {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new Zo(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  Gi = function(e) {
    return new Th(e);
  };
  Ch = function(e) {
    const t = J(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = nu(e, n);
    return t;
  };
  class Ph {
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
      return ah(re(this._object), this._key);
    }
  }
  class Ah {
    constructor(t) {
      this._getter = t, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  }
  rs = function(e, t, n) {
    return _e(e) ? e : ee(e) ? new Ah(e) : me(e) && arguments.length > 1 ? nu(e, t, n) : $e(e);
  };
  function nu(e, t, n) {
    const r = e[t];
    return _e(r) ? r : new Ph(e, t, n);
  }
  class xh {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zo(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = xr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && be !== this) return jc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return Uc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Oh(e, t, n = false) {
    let r, o;
    return ee(e) ? r = e : (r = e.get, o = e.set), new xh(r, o, n);
  }
  const so = {}, Ao = /* @__PURE__ */ new WeakMap();
  let Sn;
  function Lh(e, t = false, n = Sn) {
    if (n) {
      let r = Ao.get(n);
      r || Ao.set(n, r = []), r.push(e);
    }
  }
  function Mh(e, t, n = ae) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (v) => o ? v : at(v) || o === false || o === 0 ? Dt(v, 1) : Dt(v);
    let c, f, h, d, m = false, g = false;
    if (_e(e) ? (f = () => e.value, m = at(e)) : Ot(e) ? (f = () => u(e), m = true) : J(e) ? (g = true, m = e.some((v) => Ot(v) || at(v)), f = () => e.map((v) => {
      if (_e(v)) return v.value;
      if (Ot(v)) return u(v);
      if (ee(v)) return l ? l(v, 2) : v();
    })) : ee(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (h) {
        mn();
        try {
          h();
        } finally {
          gn();
        }
      }
      const v = Sn;
      Sn = c;
      try {
        return l ? l(e, 3, [
          d
        ]) : e(d);
      } finally {
        Sn = v;
      }
    } : f = xt, t && o) {
      const v = f, _ = o === true ? 1 / 0 : o;
      f = () => Dt(v(), _);
    }
    const S = Kt(), k = () => {
      c.stop(), S && S.active && Fi(S.effects, c);
    };
    if (s && t) {
      const v = t;
      t = (..._) => {
        v(..._), k();
      };
    }
    let w = g ? new Array(e.length).fill(so) : so;
    const p = (v) => {
      if (!(!(c.flags & 1) || !c.dirty && !v)) if (t) {
        const _ = c.run();
        if (o || m || (g ? _.some((A, M) => qe(A, w[M])) : qe(_, w))) {
          h && h();
          const A = Sn;
          Sn = c;
          try {
            const M = [
              _,
              w === so ? void 0 : g && w[0] === so ? [] : w,
              d
            ];
            l ? l(t, 3, M) : t(...M), w = _;
          } finally {
            Sn = A;
          }
        }
      } else c.run();
    };
    return a && a(p), c = new Bc(f), c.scheduler = i ? () => i(p, false) : p, d = (v) => Lh(v, false, c), h = c.onStop = () => {
      const v = Ao.get(c);
      if (v) {
        if (l) l(v, 4);
        else for (const _ of v) _();
        Ao.delete(c);
      }
    }, t ? r ? p(true) : w = c.run() : i ? i(p.bind(null, true), true) : c.run(), k.pause = c.pause.bind(c), k.resume = c.resume.bind(c), k.stop = k, k;
  }
  function Dt(e, t = 1 / 0, n) {
    if (t <= 0 || !me(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, _e(e)) Dt(e.value, t, n);
    else if (J(e)) for (let r = 0; r < e.length; r++) Dt(e[r], t, n);
    else if (zo(e) || Un(e)) e.forEach((r) => {
      Dt(r, t, n);
    });
    else if (Pc(e)) {
      for (const r in e) Dt(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Dt(e[r], t, n);
    }
    return e;
  }
  function Wr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      or(o, t, n);
    }
  }
  function yt(e, t, n, r) {
    if (ee(e)) {
      const o = Wr(e, t, n, r);
      return o && Hi(o) && o.catch((s) => {
        or(s, t, n);
      }), o;
    }
    if (J(e)) {
      const o = [];
      for (let s = 0; s < e.length; s++) o.push(yt(e[s], t, n, r));
      return o;
    }
  }
  function or(e, t, n, r = true) {
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
        mn(), Wr(s, null, 10, [
          e,
          l,
          u
        ]), gn();
        return;
      }
    }
    Ih(e, n, o, r, i);
  }
  function Ih(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const Ke = [];
  let Rt = -1;
  const Kn = [];
  let en = null, Dn = 0;
  const ru = Promise.resolve();
  let xo = null;
  Vt = function(e) {
    const t = xo || ru;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function $h(e) {
    let t = Rt + 1, n = Ke.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = Ke[r], s = Lr(o);
      s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function zi(e) {
    if (!(e.flags & 1)) {
      const t = Lr(e), n = Ke[Ke.length - 1];
      !n || !(e.flags & 2) && t >= Lr(n) ? Ke.push(e) : Ke.splice($h(t), 0, e), e.flags |= 1, ou();
    }
  }
  function ou() {
    xo || (xo = ru.then(su));
  }
  function ni(e) {
    J(e) ? Kn.push(...e) : en && e.id === -1 ? en.splice(Dn + 1, 0, e) : e.flags & 1 || (Kn.push(e), e.flags |= 1), ou();
  }
  function Ta(e, t, n = Rt + 1) {
    for (; n < Ke.length; n++) {
      const r = Ke[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Oo(e) {
    if (Kn.length) {
      const t = [
        ...new Set(Kn)
      ].sort((n, r) => Lr(n) - Lr(r));
      if (Kn.length = 0, en) {
        en.push(...t);
        return;
      }
      for (en = t, Dn = 0; Dn < en.length; Dn++) {
        const n = en[Dn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      en = null, Dn = 0;
    }
  }
  const Lr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function su(e) {
    try {
      for (Rt = 0; Rt < Ke.length; Rt++) {
        const t = Ke[Rt];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Wr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Rt < Ke.length; Rt++) {
        const t = Ke[Rt];
        t && (t.flags &= -2);
      }
      Rt = -1, Ke.length = 0, Oo(), xo = null, (Ke.length || Kn.length) && su();
    }
  }
  let Le = null, iu = null;
  function Lo(e) {
    const t = Le;
    return Le = e, iu = e && e.type.__scopeId || null, t;
  }
  Ne = function(e, t = Le, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && Ha(-1);
      const s = Lo(t);
      let i;
      try {
        i = e(...o);
      } finally {
        Lo(s), r._d && Ha(1);
      }
      return i;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  oS = function(e, t) {
    if (Le === null) return e;
    const n = ls(Le), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [s, i, a, l = ae] = t[o];
      s && (ee(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && Dt(i), r.push({
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
  function Ct(e, t, n, r) {
    const o = e.dirs, s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      s && (a.oldValue = s[i].value);
      let l = a.dir[r];
      l && (mn(), yt(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), gn());
    }
  }
  const au = Symbol("_vte"), lu = (e) => e.__isTeleport, wr = (e) => e && (e.disabled || e.disabled === ""), Ca = (e) => e && (e.defer || e.defer === ""), Pa = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Aa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ri = (e, t) => {
    const n = e && e.to;
    return ke(n) ? t ? t(n) : null : n;
  }, cu = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      const { mc: c, pc: f, pbc: h, o: { insert: d, querySelector: m, createText: g, createComment: S } } = u, k = wr(t.props);
      let { shapeFlag: w, children: p, dynamicChildren: v } = t;
      if (e == null) {
        const _ = t.el = g(""), A = t.anchor = g("");
        d(_, n, r), d(A, n, r);
        const M = (C, O) => {
          w & 16 && (o && o.isCE && (o.ce._teleportTarget = C), c(p, C, O, o, s, i, a, l));
        }, N = () => {
          const C = t.target = ri(t.props, m), O = uu(C, t, g, d);
          C && (i !== "svg" && Pa(C) ? i = "svg" : i !== "mathml" && Aa(C) && (i = "mathml"), k || (M(C, O), So(t, false)));
        };
        k && (M(n, A), So(t, true)), Ca(t.props) ? Ae(() => {
          N(), t.el.__isMounted = true;
        }, s) : N();
      } else {
        if (Ca(t.props) && !e.el.__isMounted) {
          Ae(() => {
            cu.process(e, t, n, r, o, s, i, a, l, u), delete e.el.__isMounted;
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const _ = t.anchor = e.anchor, A = t.target = e.target, M = t.targetAnchor = e.targetAnchor, N = wr(e.props), C = N ? n : A, O = N ? _ : M;
        if (i === "svg" || Pa(A) ? i = "svg" : (i === "mathml" || Aa(A)) && (i = "mathml"), v ? (h(e.dynamicChildren, v, C, o, s, i, a), Zi(e, t, true)) : l || f(e, t, C, O, o, s, i, a, false), k) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : io(t, n, _, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const E = t.target = ri(t.props, m);
          E && io(t, E, null, u, 0);
        } else N && io(t, A, M, u, 1);
        So(t, k);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, s) {
      const { shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: h } = e;
      if (f && (o(u), o(c)), s && o(l), i & 16) {
        const d = s || !wr(h);
        for (let m = 0; m < a.length; m++) {
          const g = a[m];
          r(g, t, n, d, !!g.dynamicChildren);
        }
      }
    },
    move: io,
    hydrate: Nh
  };
  function io(e, t, n, { o: { insert: r }, m: o }, s = 2) {
    s === 0 && r(e.targetAnchor, t, n);
    const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
    if (f && r(i, t, n), (!f || wr(c)) && l & 16) for (let h = 0; h < u.length; h++) o(u[h], t, n, 2);
    f && r(a, t, n);
  }
  function Nh(e, t, n, r, o, s, { o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
    const h = t.target = ri(t.props, l);
    if (h) {
      const d = wr(t.props), m = h._lpa || h.firstChild;
      if (t.shapeFlag & 16) if (d) t.anchor = f(i(e), t, a(e), n, r, o, s), t.targetStart = m, t.targetAnchor = m && i(m);
      else {
        t.anchor = i(e);
        let g = m;
        for (; g; ) {
          if (g && g.nodeType === 8) {
            if (g.data === "teleport start anchor") t.targetStart = g;
            else if (g.data === "teleport anchor") {
              t.targetAnchor = g, h._lpa = t.targetAnchor && i(t.targetAnchor);
              break;
            }
          }
          g = i(g);
        }
        t.targetAnchor || uu(h, t, c, u), f(m && i(m), t, h, n, r, o, s);
      }
      So(t, d);
    }
    return t.anchor && i(t.anchor);
  }
  sS = cu;
  function So(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, o;
      for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function uu(e, t, n, r) {
    const o = t.targetStart = n(""), s = t.targetAnchor = n("");
    return o[au] = s, e && (r(o, e), r(s, e)), s;
  }
  const tn = Symbol("_leaveCb"), ao = Symbol("_enterCb");
  function fu() {
    const e = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return pn(() => {
      e.isMounted = true;
    }), On(() => {
      e.isUnmounting = true;
    }), e;
  }
  const st = [
    Function,
    Array
  ], du = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: st,
    onEnter: st,
    onAfterEnter: st,
    onEnterCancelled: st,
    onBeforeLeave: st,
    onLeave: st,
    onAfterLeave: st,
    onLeaveCancelled: st,
    onBeforeAppear: st,
    onAppear: st,
    onAfterAppear: st,
    onAppearCancelled: st
  }, hu = (e) => {
    const t = e.subTree;
    return t.component ? hu(t.component) : t;
  }, Bh = {
    name: "BaseTransition",
    props: du,
    setup(e, { slots: t }) {
      const n = lt(), r = fu();
      return () => {
        const o = t.default && Ji(t.default(), true);
        if (!o || !o.length) return;
        const s = pu(o), i = re(e), { mode: a } = i;
        if (r.isLeaving) return Rs(s);
        const l = xa(s);
        if (!l) return Rs(s);
        let u = Mr(l, i, r, n, (f) => u = f);
        l.type !== xe && hn(l, u);
        let c = n.subTree && xa(n.subTree);
        if (c && c.type !== xe && !dt(l, c) && hu(n).type !== xe) {
          let f = Mr(c, i, r, n);
          if (hn(c, f), a === "out-in" && l.type !== xe) return r.isLeaving = true, f.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Rs(s);
          a === "in-out" && l.type !== xe ? f.delayLeave = (h, d, m) => {
            const g = mu(r, c);
            g[String(c.key)] = c, h[tn] = () => {
              d(), h[tn] = void 0, delete u.delayedLeave, c = void 0;
            }, u.delayedLeave = () => {
              m(), delete u.delayedLeave, c = void 0;
            };
          } : c = void 0;
        } else c && (c = void 0);
        return s;
      };
    }
  };
  function pu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== xe) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Dh = Bh;
  function mu(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Mr(e, t, n, r, o) {
    const { appear: s, mode: i, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: h, onLeave: d, onAfterLeave: m, onLeaveCancelled: g, onBeforeAppear: S, onAppear: k, onAfterAppear: w, onAppearCancelled: p } = t, v = String(e.key), _ = mu(n, e), A = (C, O) => {
      C && yt(C, r, 9, O);
    }, M = (C, O) => {
      const E = O[1];
      A(C, O), J(C) ? C.every((T) => T.length <= 1) && E() : C.length <= 1 && E();
    }, N = {
      mode: i,
      persisted: a,
      beforeEnter(C) {
        let O = l;
        if (!n.isMounted) if (s) O = S || l;
        else return;
        C[tn] && C[tn](true);
        const E = _[v];
        E && dt(e, E) && E.el[tn] && E.el[tn](), A(O, [
          C
        ]);
      },
      enter(C) {
        let O = u, E = c, T = f;
        if (!n.isMounted) if (s) O = k || u, E = w || c, T = p || f;
        else return;
        let B = false;
        const X = C[ao] = (Z) => {
          B || (B = true, Z ? A(T, [
            C
          ]) : A(E, [
            C
          ]), N.delayedLeave && N.delayedLeave(), C[ao] = void 0);
        };
        O ? M(O, [
          C,
          X
        ]) : X();
      },
      leave(C, O) {
        const E = String(e.key);
        if (C[ao] && C[ao](true), n.isUnmounting) return O();
        A(h, [
          C
        ]);
        let T = false;
        const B = C[tn] = (X) => {
          T || (T = true, O(), X ? A(g, [
            C
          ]) : A(m, [
            C
          ]), C[tn] = void 0, _[E] === e && delete _[E]);
        };
        _[E] = e, d ? M(d, [
          C,
          B
        ]) : B();
      },
      clone(C) {
        const O = Mr(C, t, n, r, o);
        return o && o(O), O;
      }
    };
    return N;
  }
  function Rs(e) {
    if (qr(e)) return e = Wt(e), e.children = null, e;
  }
  function xa(e) {
    if (!qr(e)) return lu(e.type) && e.children ? pu(e.children) : e;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && ee(n.default)) return n.default();
    }
  }
  function hn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, hn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Ji(e, t = false, n) {
    let r = [], o = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
      i.type === we ? (i.patchFlag & 128 && o++, r = r.concat(Ji(i.children, t, a))) : (t || i.type !== xe) && r.push(a != null ? Wt(i, {
        key: a
      }) : i);
    }
    if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r;
  }
  he = function(e, t) {
    return ee(e) ? Te({
      name: e.name
    }, t, {
      setup: e
    }) : e;
  };
  iS = function() {
    const e = lt();
    return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
  };
  function Yi(e) {
    e.ids = [
      e.ids[0] + e.ids[2]++ + "-",
      0,
      0
    ];
  }
  aS = function(e) {
    const t = lt(), n = gt(null);
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
  function Ir(e, t, n, r, o = false) {
    if (J(e)) {
      e.forEach((m, g) => Ir(m, t && (J(t) ? t[g] : t), n, r, o));
      return;
    }
    if (un(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ir(e, t, n, r.component.subTree);
      return;
    }
    const s = r.shapeFlag & 4 ? ls(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === ae ? a.refs = {} : a.refs, f = a.setupState, h = re(f), d = f === ae ? () => false : (m) => ue(h, m);
    if (u != null && u !== l && (ke(u) ? (c[u] = null, d(u) && (f[u] = null)) : _e(u) && (u.value = null)), ee(l)) Wr(l, a, 12, [
      i,
      c
    ]);
    else {
      const m = ke(l), g = _e(l);
      if (m || g) {
        const S = () => {
          if (e.f) {
            const k = m ? d(l) ? f[l] : c[l] : l.value;
            o ? J(k) && Fi(k, s) : J(k) ? k.includes(s) || k.push(s) : m ? (c[l] = [
              s
            ], d(l) && (f[l] = c[l])) : (l.value = [
              s
            ], e.k && (c[e.k] = l.value));
          } else m ? (c[l] = i, d(l) && (f[l] = i)) : g && (l.value = i, e.k && (c[e.k] = i));
        };
        i ? (S.id = -1, Ae(S, n)) : S();
      }
    }
  }
  let Oa = false;
  const $n = () => {
    Oa || (console.error("Hydration completed but contains mismatches."), Oa = true);
  }, jh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Fh = (e) => e.namespaceURI.includes("MathML"), lo = (e) => {
    if (e.nodeType === 1) {
      if (jh(e)) return "svg";
      if (Fh(e)) return "mathml";
    }
  }, Fn = (e) => e.nodeType === 8;
  function Hh(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: l, createComment: u } } = e, c = (p, v) => {
      if (!v.hasChildNodes()) {
        n(null, p, v), Oo(), v._vnode = p;
        return;
      }
      f(v.firstChild, p, null, null, null), Oo(), v._vnode = p;
    }, f = (p, v, _, A, M, N = false) => {
      N = N || !!v.dynamicChildren;
      const C = Fn(p) && p.data === "[", O = () => g(p, v, _, A, M, C), { type: E, ref: T, shapeFlag: B, patchFlag: X } = v;
      let Z = p.nodeType;
      v.el = p, X === -2 && (N = false, v.dynamicChildren = null);
      let F = null;
      switch (E) {
        case Tn:
          Z !== 3 ? v.children === "" ? (l(v.el = o(""), i(p), p), F = p) : F = O() : (p.data !== v.children && ($n(), p.data = v.children), F = s(p));
          break;
        case xe:
          w(p) ? (F = s(p), k(v.el = p.content.firstChild, p, _)) : Z !== 8 || C ? F = O() : F = s(p);
          break;
        case kr:
          if (C && (p = s(p), Z = p.nodeType), Z === 1 || Z === 3) {
            F = p;
            const K = !v.children.length;
            for (let G = 0; G < v.staticCount; G++) K && (v.children += F.nodeType === 1 ? F.outerHTML : F.data), G === v.staticCount - 1 && (v.anchor = F), F = s(F);
            return C ? s(F) : F;
          } else O();
          break;
        case we:
          C ? F = m(p, v, _, A, M, N) : F = O();
          break;
        default:
          if (B & 1) (Z !== 1 || v.type.toLowerCase() !== p.tagName.toLowerCase()) && !w(p) ? F = O() : F = h(p, v, _, A, M, N);
          else if (B & 6) {
            v.slotScopeIds = M;
            const K = i(p);
            if (C ? F = S(p) : Fn(p) && p.data === "teleport start" ? F = S(p, p.data, "teleport end") : F = s(p), t(v, K, null, _, A, lo(K), N), un(v) && !v.type.__asyncResolved) {
              let G;
              C ? (G = pe(we), G.anchor = F ? F.previousSibling : K.lastChild) : G = p.nodeType === 3 ? ir("") : pe("div"), G.el = p, v.component.subTree = G;
            }
          } else B & 64 ? Z !== 8 ? F = O() : F = v.type.hydrate(p, v, _, A, M, N, e, d) : B & 128 && (F = v.type.hydrate(p, v, _, A, lo(i(p)), M, N, e, f));
      }
      return T != null && Ir(T, null, A, v), F;
    }, h = (p, v, _, A, M, N) => {
      N = N || !!v.dynamicChildren;
      const { type: C, props: O, patchFlag: E, shapeFlag: T, dirs: B, transition: X } = v, Z = C === "input" || C === "option";
      if (Z || E !== -1) {
        B && Ct(v, null, _, "created");
        let F = false;
        if (w(p)) {
          F = ju(null, X) && _ && _.vnode.props && _.vnode.props.appear;
          const G = p.content.firstChild;
          F && X.beforeEnter(G), k(G, p, _), v.el = p = G;
        }
        if (T & 16 && !(O && (O.innerHTML || O.textContent))) {
          let G = d(p.firstChild, v, p, _, A, M, N);
          for (; G; ) {
            co(p, 1) || $n();
            const Ce = G;
            G = G.nextSibling, a(Ce);
          }
        } else if (T & 8) {
          let G = v.children;
          G[0] === `
` && (p.tagName === "PRE" || p.tagName === "TEXTAREA") && (G = G.slice(1)), p.textContent !== G && (co(p, 0) || $n(), p.textContent = v.children);
        }
        if (O) {
          if (Z || !N || E & 48) {
            const G = p.tagName.includes("-");
            for (const Ce in O) (Z && (Ce.endsWith("value") || Ce === "indeterminate") || Hr(Ce) && !Vn(Ce) || Ce[0] === "." || G) && r(p, Ce, null, O[Ce], void 0, _);
          } else if (O.onClick) r(p, "onClick", null, O.onClick, void 0, _);
          else if (E & 4 && Ot(O.style)) for (const G in O.style) O.style[G];
        }
        let K;
        (K = O && O.onVnodeBeforeMount) && Ye(K, _, v), B && Ct(v, null, _, "beforeMount"), ((K = O && O.onVnodeMounted) || B || F) && qu(() => {
          K && Ye(K, _, v), F && X.enter(p), B && Ct(v, null, _, "mounted");
        }, A);
      }
      return p.nextSibling;
    }, d = (p, v, _, A, M, N, C) => {
      C = C || !!v.dynamicChildren;
      const O = v.children, E = O.length;
      for (let T = 0; T < E; T++) {
        const B = C ? O[T] : O[T] = tt(O[T]), X = B.type === Tn;
        p ? (X && !C && T + 1 < E && tt(O[T + 1]).type === Tn && (l(o(p.data.slice(B.children.length)), _, s(p)), p.data = B.children), p = f(p, B, A, M, N, C)) : X && !B.children ? l(B.el = o(""), _) : (co(_, 1) || $n(), n(null, B, _, null, A, M, lo(_), N));
      }
      return p;
    }, m = (p, v, _, A, M, N) => {
      const { slotScopeIds: C } = v;
      C && (M = M ? M.concat(C) : C);
      const O = i(p), E = d(s(p), v, O, _, A, M, N);
      return E && Fn(E) && E.data === "]" ? s(v.anchor = E) : ($n(), l(v.anchor = u("]"), O, E), E);
    }, g = (p, v, _, A, M, N) => {
      if (co(p.parentElement, 1) || $n(), v.el = null, N) {
        const E = S(p);
        for (; ; ) {
          const T = s(p);
          if (T && T !== E) a(T);
          else break;
        }
      }
      const C = s(p), O = i(p);
      return a(p), n(null, v, O, C, _, A, lo(O), M), _ && (_.vnode.el = v.el, as(_, v.el)), C;
    }, S = (p, v = "[", _ = "]") => {
      let A = 0;
      for (; p; ) if (p = s(p), p && Fn(p) && (p.data === v && A++, p.data === _)) {
        if (A === 0) return s(p);
        A--;
      }
      return p;
    }, k = (p, v, _) => {
      const A = v.parentNode;
      A && A.replaceChild(p, v);
      let M = _;
      for (; M; ) M.vnode.el === v && (M.vnode.el = M.subTree.el = p), M = M.parent;
    }, w = (p) => p.nodeType === 1 && p.tagName === "TEMPLATE";
    return [
      c,
      f
    ];
  }
  const La = "data-allow-mismatch", Uh = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };
  function co(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(La); ) e = e.parentElement;
    const n = e && e.getAttribute(La);
    if (n == null) return false;
    if (n === "") return true;
    {
      const r = n.split(",");
      return t === 0 && r.includes("children") ? true : n.split(",").includes(Uh[t]);
    }
  }
  Qo().requestIdleCallback;
  Qo().cancelIdleCallback;
  function Vh(e, t) {
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
  const un = (e) => !!e.type.__asyncLoader;
  Ma = function(e) {
    ee(e) && (e = {
      loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: o = 200, hydrate: s, timeout: i, suspensible: a = true, onError: l } = e;
    let u = null, c, f = 0;
    const h = () => (f++, u = null, d()), d = () => {
      let m;
      return u || (m = u = t().catch((g) => {
        if (g = g instanceof Error ? g : new Error(String(g)), l) return new Promise((S, k) => {
          l(g, () => S(h()), () => k(g), f + 1);
        });
        throw g;
      }).then((g) => m !== u && u ? u : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)));
    };
    return he({
      name: "AsyncComponentWrapper",
      __asyncLoader: d,
      __asyncHydrate(m, g, S) {
        const k = s ? () => {
          const w = s(S, (p) => Vh(m, p));
          w && (g.bum || (g.bum = [])).push(w);
        } : S;
        c ? k() : d().then(() => !g.isUnmounted && k());
      },
      get __asyncResolved() {
        return c;
      },
      setup() {
        const m = Oe;
        if (Yi(m), c) return () => Ts(c, m);
        const g = (p) => {
          u = null, or(p, m, 13, !r);
        };
        if (a && m.suspense || Qn) return d().then((p) => () => Ts(p, m)).catch((p) => (g(p), () => r ? pe(r, {
          error: p
        }) : null));
        const S = $e(false), k = $e(), w = $e(!!o);
        return o && setTimeout(() => {
          w.value = false;
        }, o), i != null && setTimeout(() => {
          if (!S.value && !k.value) {
            const p = new Error(`Async component timed out after ${i}ms.`);
            g(p), k.value = p;
          }
        }, i), d().then(() => {
          S.value = true, m.parent && qr(m.parent.vnode) && m.parent.update();
        }).catch((p) => {
          g(p), k.value = p;
        }), () => {
          if (S.value && c) return Ts(c, m);
          if (k.value && r) return pe(r, {
            error: k.value
          });
          if (n && !w.value) return pe(n);
        };
      }
    });
  };
  function Ts(e, t) {
    const { ref: n, props: r, children: o, ce: s } = t.vnode, i = pe(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i;
  }
  const qr = (e) => e.type.__isKeepAlive, Wh = {
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
      const n = lt(), r = n.ctx;
      if (!r.renderer) return () => {
        const w = t.default && t.default();
        return w && w.length === 1 ? w[0] : w;
      };
      const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      let i = null;
      const a = n.suspense, { renderer: { p: l, m: u, um: c, o: { createElement: f } } } = r, h = f("div");
      r.activate = (w, p, v, _, A) => {
        const M = w.component;
        u(w, p, v, 0, a), l(M.vnode, w, p, v, M, a, _, w.slotScopeIds, A), Ae(() => {
          M.isDeactivated = false, M.a && Wn(M.a);
          const N = w.props && w.props.onVnodeMounted;
          N && Ye(N, M.parent, w);
        }, a);
      }, r.deactivate = (w) => {
        const p = w.component;
        Io(p.m), Io(p.a), u(w, h, null, 1, a), Ae(() => {
          p.da && Wn(p.da);
          const v = w.props && w.props.onVnodeUnmounted;
          v && Ye(v, p.parent, w), p.isDeactivated = true;
        }, a);
      };
      function d(w) {
        Cs(w), c(w, n, a, true);
      }
      function m(w) {
        o.forEach((p, v) => {
          const _ = hi(p.type);
          _ && !w(_) && g(v);
        });
      }
      function g(w) {
        const p = o.get(w);
        p && (!i || !dt(p, i)) ? d(p) : i && Cs(i), o.delete(w), s.delete(w);
      }
      nt(() => [
        e.include,
        e.exclude
      ], ([w, p]) => {
        w && m((v) => gr(w, v)), p && m((v) => !gr(p, v));
      }, {
        flush: "post",
        deep: true
      });
      let S = null;
      const k = () => {
        S != null && ($o(n.subTree.type) ? Ae(() => {
          o.set(S, uo(n.subTree));
        }, n.subTree.suspense) : o.set(S, uo(n.subTree)));
      };
      return pn(k), Qi(k), On(() => {
        o.forEach((w) => {
          const { subTree: p, suspense: v } = n, _ = uo(p);
          if (w.type === _.type && w.key === _.key) {
            Cs(_);
            const A = _.component.da;
            A && Ae(A, v);
            return;
          }
          d(w);
        });
      }), () => {
        if (S = null, !t.default) return i = null;
        const w = t.default(), p = w[0];
        if (w.length > 1) return i = null, w;
        if (!An(p) || !(p.shapeFlag & 4) && !(p.shapeFlag & 128)) return i = null, p;
        let v = uo(p);
        if (v.type === xe) return i = null, v;
        const _ = v.type, A = hi(un(v) ? v.type.__asyncResolved || {} : _), { include: M, exclude: N, max: C } = e;
        if (M && (!A || !gr(M, A)) || N && A && gr(N, A)) return v.shapeFlag &= -257, i = v, p;
        const O = v.key == null ? _ : v.key, E = o.get(O);
        return v.el && (v = Wt(v), p.shapeFlag & 128 && (p.ssContent = v)), S = O, E ? (v.el = E.el, v.component = E.component, v.transition && hn(v, v.transition), v.shapeFlag |= 512, s.delete(O), s.add(O)) : (s.add(O), C && s.size > parseInt(C, 10) && g(s.values().next().value)), v.shapeFlag |= 256, i = v, $o(p.type) ? p : v;
      };
    }
  }, qh = Wh;
  function gr(e, t) {
    return J(e) ? e.some((n) => gr(n, t)) : ke(e) ? e.split(",").includes(t) : zd(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  function gu(e, t) {
    vu(e, "a", t);
  }
  function yu(e, t) {
    vu(e, "da", t);
  }
  function vu(e, t, n = Oe) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (os(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) qr(o.parent.vnode) && Kh(r, t, n, o), o = o.parent;
    }
  }
  function Kh(e, t, n, r) {
    const o = os(t, e, r, true);
    ss(() => {
      Fi(r[t], o);
    }, n);
  }
  function Cs(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function uo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function os(e, t, n = Oe, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
        mn();
        const a = xn(n), l = yt(t, n, e, i);
        return a(), gn(), l;
      });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  let Gt, bu, Gh, zh, Jh, Yh;
  Gt = (e) => (t, n = Oe) => {
    (!Qn || e === "sp") && os(e, (...r) => t(...r), n);
  };
  bu = Gt("bm");
  pn = Gt("m");
  Gh = Gt("bu");
  Qi = Gt("u");
  On = Gt("bum");
  ss = Gt("um");
  zh = Gt("sp");
  Jh = Gt("rtg");
  Yh = Gt("rtc");
  function _u(e, t = Oe) {
    os("ec", e, t);
  }
  const wu = "components";
  function oi(e, t) {
    return ku(wu, e, true, t) || e;
  }
  const Su = Symbol.for("v-ndc");
  Ge = function(e) {
    return ke(e) ? ku(wu, e, false) || e : e || Su;
  };
  function ku(e, t, n = true, r = false) {
    const o = Le || Oe;
    if (o) {
      const s = o.type;
      {
        const a = hi(s, false);
        if (a && (a === t || a === rt(t) || a === Yo(rt(t)))) return s;
      }
      const i = Ia(o[e] || s[e], t) || Ia(o.appContext[e], t);
      return !i && r ? s : i;
    }
  }
  function Ia(e, t) {
    return e && (e[t] || e[rt(t)] || e[Yo(rt(t))]);
  }
  Yn = function(e, t, n, r) {
    let o;
    const s = n, i = J(e);
    if (i || ke(e)) {
      const a = i && Ot(e);
      let l = false;
      a && (l = !at(e), e = es(e)), o = new Array(e.length);
      for (let u = 0, c = e.length; u < c; u++) o[u] = t(l ? je(e[u]) : e[u], u, void 0, s);
    } else if (typeof e == "number") {
      o = new Array(e);
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s);
    } else if (me(e)) if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, s));
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
  Pe = function(e, t, n = {}, r, o) {
    if (Le.ce || Le.parent && un(Le.parent) && Le.parent.ce) return t !== "default" && (n.name = t), q(), oe(we, null, [
      pe("slot", n, r && r())
    ], 64);
    let s = e[t];
    s && s._c && (s._d = false), q();
    const i = s && Eu(s(n)), a = n.key || i && i.key, l = oe(we, {
      key: (a && !mt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && l.scopeId && (l.slotScopeIds = [
      l.scopeId + "-s"
    ]), s && s._c && (s._d = true), l;
  };
  function Eu(e) {
    return e.some((t) => An(t) ? !(t.type === xe || t.type === we && !Eu(t.children)) : true) ? e : null;
  }
  const si = (e) => e ? Yu(e) ? ls(e) : si(e.parent) : null, Sr = Te(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => si(e.parent),
    $root: (e) => si(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Cu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Vt.bind(e.proxy)),
    $watch: (e) => vp.bind(e)
  }), Ps = (e, t) => e !== ae && !e.__isScriptSetup && ue(e, t), Qh = {
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
          if (Ps(r, t)) return i[t] = 1, r[t];
          if (o !== ae && ue(o, t)) return i[t] = 2, o[t];
          if ((u = e.propsOptions[0]) && ue(u, t)) return i[t] = 3, s[t];
          if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
          ii && (i[t] = 0);
        }
      }
      const c = Sr[t];
      let f, h;
      if (c) return t === "$attrs" && De(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
      if (h = l.config.globalProperties, ue(h, t)) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return Ps(o, t) ? (o[t] = n, true) : r !== ae && ue(r, t) ? (r[t] = n, true) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
      let a;
      return !!n[i] || e !== ae && ue(e, i) || Ps(t, i) || (a = s[0]) && ue(a, i) || ue(r, i) || ue(Sr, i) || ue(o.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  lS = function() {
    return Ru().slots;
  };
  cS = function() {
    return Ru().attrs;
  };
  function Ru() {
    const e = lt();
    return e.setupContext || (e.setupContext = Xu(e));
  }
  function $r(e) {
    return J(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  uS = function(e, t) {
    const n = $r(e);
    for (const r in t) {
      if (r.startsWith("__skip")) continue;
      let o = n[r];
      o ? J(o) || ee(o) ? o = n[r] = {
        type: o,
        default: t[r]
      } : o.default = t[r] : o === null && (o = n[r] = {
        default: t[r]
      }), o && t[`__skip_${r}`] && (o.skipFactory = true);
    }
    return n;
  };
  fS = function(e, t) {
    return !e || !t ? e || t : J(e) && J(t) ? e.concat(t) : Te({}, $r(e), $r(t));
  };
  dS = function(e) {
    const t = lt();
    let n = e();
    return fi(), Hi(n) && (n = n.catch((r) => {
      throw xn(t), r;
    })), [
      n,
      () => xn(t)
    ];
  };
  let ii = true;
  function Xh(e) {
    const t = Cu(e), n = e.proxy, r = e.ctx;
    ii = false, t.beforeCreate && $a(t.beforeCreate, e, "bc");
    const { data: o, computed: s, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: h, beforeUpdate: d, updated: m, activated: g, deactivated: S, beforeDestroy: k, beforeUnmount: w, destroyed: p, unmounted: v, render: _, renderTracked: A, renderTriggered: M, errorCaptured: N, serverPrefetch: C, expose: O, inheritAttrs: E, components: T, directives: B, filters: X } = t;
    if (u && Zh(u, r, null), i) for (const K in i) {
      const G = i[K];
      ee(G) && (r[K] = G.bind(n));
    }
    if (o) {
      const K = o.call(n, n);
      me(K) && (e.data = Lt(K));
    }
    if (ii = true, s) for (const K in s) {
      const G = s[K], Ce = ee(G) ? G.bind(n, n) : ee(G.get) ? G.get.bind(n, n) : xt, Jt = !ee(G) && ee(G.set) ? G.set.bind(n) : xt, bt = Y({
        get: Ce,
        set: Jt
      });
      Object.defineProperty(r, K, {
        enumerable: true,
        configurable: true,
        get: () => bt.value,
        set: (ze) => bt.value = ze
      });
    }
    if (a) for (const K in a) Tu(a[K], r, n, K);
    if (l) {
      const K = ee(l) ? l.call(n) : l;
      Reflect.ownKeys(K).forEach((G) => {
        Rn(G, K[G]);
      });
    }
    c && $a(c, e, "c");
    function F(K, G) {
      J(G) ? G.forEach((Ce) => K(Ce.bind(n))) : G && K(G.bind(n));
    }
    if (F(bu, f), F(pn, h), F(Gh, d), F(Qi, m), F(gu, g), F(yu, S), F(_u, N), F(Yh, A), F(Jh, M), F(On, w), F(ss, v), F(zh, C), J(O)) if (O.length) {
      const K = e.exposed || (e.exposed = {});
      O.forEach((G) => {
        Object.defineProperty(K, G, {
          get: () => n[G],
          set: (Ce) => n[G] = Ce
        });
      });
    } else e.exposed || (e.exposed = {});
    _ && e.render === xt && (e.render = _), E != null && (e.inheritAttrs = E), T && (e.components = T), B && (e.directives = B), C && Yi(e);
  }
  function Zh(e, t, n = xt) {
    J(e) && (e = ai(e));
    for (const r in e) {
      const o = e[r];
      let s;
      me(o) ? "default" in o ? s = Re(o.from || r, o.default, true) : s = Re(o.from || r) : s = Re(o), _e(s) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (i) => s.value = i
      }) : t[r] = s;
    }
  }
  function $a(e, t, n) {
    yt(J(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Tu(e, t, n, r) {
    let o = r.includes(".") ? Hu(n, r) : () => n[r];
    if (ke(e)) {
      const s = t[e];
      ee(s) && nt(o, s);
    } else if (ee(e)) nt(o, e.bind(n));
    else if (me(e)) if (J(e)) e.forEach((s) => Tu(s, t, n, r));
    else {
      const s = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(s) && nt(o, s, e);
    }
  }
  function Cu(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach((u) => Mo(l, u, i, true)), Mo(l, t, i)), me(t) && s.set(t, l), l;
  }
  function Mo(e, t, n, r = false) {
    const { mixins: o, extends: s } = t;
    s && Mo(e, s, n, true), o && o.forEach((i) => Mo(e, i, n, true));
    for (const i in t) if (!(r && i === "expose")) {
      const a = ep[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
    return e;
  }
  const ep = {
    data: Na,
    props: Ba,
    emits: Ba,
    methods: yr,
    computed: yr,
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
    components: yr,
    directives: yr,
    watch: np,
    provide: Na,
    inject: tp
  };
  function Na(e, t) {
    return t ? e ? function() {
      return Te(ee(e) ? e.call(this, this) : e, ee(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function tp(e, t) {
    return yr(ai(e), ai(t));
  }
  function ai(e) {
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
  function yr(e, t) {
    return e ? Te(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function Ba(e, t) {
    return e ? J(e) && J(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Te(/* @__PURE__ */ Object.create(null), $r(e), $r(t ?? {})) : t;
  }
  function np(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Te(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = Ve(e[r], t[r]);
    return n;
  }
  function Pu() {
    return {
      app: null,
      config: {
        isNativeTag: Kd,
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
  let rp = 0;
  function op(e, t) {
    return function(r, o = null) {
      ee(r) || (r = Te({}, r)), o != null && !me(o) && (o = null);
      const s = Pu(), i = /* @__PURE__ */ new WeakSet(), a = [];
      let l = false;
      const u = s.app = {
        _uid: rp++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: Fp,
        get config() {
          return s.config;
        },
        set config(c) {
        },
        use(c, ...f) {
          return i.has(c) || (c && ee(c.install) ? (i.add(c), c.install(u, ...f)) : ee(c) && (i.add(c), c(u, ...f))), u;
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
        mount(c, f, h) {
          if (!l) {
            const d = u._ceVNode || pe(r, o);
            return d.appContext = s, h === true ? h = "svg" : h === false && (h = void 0), f && t ? t(d, c) : e(d, c, h), l = true, u._container = c, c.__vue_app__ = u, ls(d.component);
          }
        },
        onUnmount(c) {
          a.push(c);
        },
        unmount() {
          l && (yt(a, u._instance, 16), e(null, u._container), delete u._container.__vue_app__);
        },
        provide(c, f) {
          return s.provides[c] = f, u;
        },
        runWithContext(c) {
          const f = En;
          En = u;
          try {
            return c();
          } finally {
            En = f;
          }
        }
      };
      return u;
    };
  }
  let En = null;
  Rn = function(e, t) {
    if (Oe) {
      let n = Oe.provides;
      const r = Oe.parent && Oe.parent.provides;
      r === n && (n = Oe.provides = Object.create(r)), n[e] = t;
    }
  };
  Re = function(e, t, n = false) {
    const r = Oe || Le;
    if (r || En) {
      const o = En ? En._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && ee(t) ? t.call(r && r.proxy) : t;
    }
  };
  sr = function() {
    return !!(Oe || Le || En);
  };
  const Au = {}, xu = () => Object.create(Au), Ou = (e) => Object.getPrototypeOf(e) === Au;
  function sp(e, t, n, r = false) {
    const o = {}, s = xu();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), Lu(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Ft(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
  }
  function ip(e, t, n, r) {
    const { props: o, attrs: s, vnode: { patchFlag: i } } = e, a = re(o), [l] = e.propsOptions;
    let u = false;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let h = c[f];
          if (is(e.emitsOptions, h)) continue;
          const d = t[h];
          if (l) if (ue(s, h)) d !== s[h] && (s[h] = d, u = true);
          else {
            const m = rt(h);
            o[m] = li(l, a, m, d, e, false);
          }
          else d !== s[h] && (s[h] = d, u = true);
        }
      }
    } else {
      Lu(e, t, o, s) && (u = true);
      let c;
      for (const f in a) (!t || !ue(t, f) && ((c = qt(f)) === f || !ue(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = li(l, a, f, void 0, e, true)) : delete o[f]);
      if (s !== a) for (const f in s) (!t || !ue(t, f)) && (delete s[f], u = true);
    }
    u && Bt(e.attrs, "set", "");
  }
  function Lu(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = false, a;
    if (t) for (let l in t) {
      if (Vn(l)) continue;
      const u = t[l];
      let c;
      o && ue(o, c = rt(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : is(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = true);
    }
    if (s) {
      const l = re(n), u = a || ae;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        n[f] = li(o, l, f, u[f], e, !ue(u, f));
      }
    }
    return i;
  }
  function li(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
      const a = ue(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && ee(l)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const c = xn(o);
            r = u[n] = l.call(null, t), c();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !a ? r = false : i[1] && (r === "" || r === qt(n)) && (r = true));
    }
    return r;
  }
  const ap = /* @__PURE__ */ new WeakMap();
  function Mu(e, t, n = false) {
    const r = n ? ap : t.propsCache, o = r.get(e);
    if (o) return o;
    const s = e.props, i = {}, a = [];
    let l = false;
    if (!ee(e)) {
      const c = (f) => {
        l = true;
        const [h, d] = Mu(f, t, true);
        Te(i, h), d && a.push(...d);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!s && !l) return me(e) && r.set(e, Hn), Hn;
    if (J(s)) for (let c = 0; c < s.length; c++) {
      const f = rt(s[c]);
      Da(f) && (i[f] = ae);
    }
    else if (s) for (const c in s) {
      const f = rt(c);
      if (Da(f)) {
        const h = s[c], d = i[f] = J(h) || ee(h) ? {
          type: h
        } : Te({}, h), m = d.type;
        let g = false, S = true;
        if (J(m)) for (let k = 0; k < m.length; ++k) {
          const w = m[k], p = ee(w) && w.name;
          if (p === "Boolean") {
            g = true;
            break;
          } else p === "String" && (S = false);
        }
        else g = ee(m) && m.name === "Boolean";
        d[0] = g, d[1] = S, (g || ue(d, "default")) && a.push(f);
      }
    }
    const u = [
      i,
      a
    ];
    return me(e) && r.set(e, u), u;
  }
  function Da(e) {
    return e[0] !== "$" && !Vn(e);
  }
  const Iu = (e) => e[0] === "_" || e === "$stable", Xi = (e) => J(e) ? e.map(tt) : [
    tt(e)
  ], lp = (e, t, n) => {
    if (t._n) return t;
    const r = Ne((...o) => Xi(t(...o)), n);
    return r._c = false, r;
  }, $u = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Iu(o)) continue;
      const s = e[o];
      if (ee(s)) t[o] = lp(o, s, r);
      else if (s != null) {
        const i = Xi(s);
        t[o] = () => i;
      }
    }
  }, Nu = (e, t) => {
    const n = Xi(t);
    e.slots.default = () => n;
  }, Bu = (e, t, n) => {
    for (const r in t) (n || r !== "_") && (e[r] = t[r]);
  }, cp = (e, t, n) => {
    const r = e.slots = xu();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (Bu(r, t, n), n && Ac(r, "_", o, true)) : $u(t, r);
    } else t && Nu(e, t);
  }, up = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = true, i = ae;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? s = false : Bu(o, t, n) : (s = !t.$stable, $u(t, o)), i = t;
    } else t && (Nu(e, t), i = {
      default: 1
    });
    if (s) for (const a in o) !Iu(a) && i[a] == null && delete o[a];
  }, Ae = qu;
  function fp(e) {
    return Du(e);
  }
  function dp(e) {
    return Du(e, Hh);
  }
  function Du(e, t) {
    const n = Qo();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: h, setScopeId: d = xt, insertStaticContent: m } = e, g = (y, b, R, L = null, P = null, I = null, H = void 0, j = null, D = !!b.dynamicChildren) => {
      if (y === b) return;
      y && !dt(y, b) && (L = x(y), ze(y, P, I, true), y = null), b.patchFlag === -2 && (D = false, b.dynamicChildren = null);
      const { type: $, ref: te, shapeFlag: V } = b;
      switch ($) {
        case Tn:
          S(y, b, R, L);
          break;
        case xe:
          k(y, b, R, L);
          break;
        case kr:
          y == null && w(b, R, L, H);
          break;
        case we:
          T(y, b, R, L, P, I, H, j, D);
          break;
        default:
          V & 1 ? _(y, b, R, L, P, I, H, j, D) : V & 6 ? B(y, b, R, L, P, I, H, j, D) : (V & 64 || V & 128) && $.process(y, b, R, L, P, I, H, j, D, z);
      }
      te != null && P && Ir(te, y && y.ref, I, b || y, !b);
    }, S = (y, b, R, L) => {
      if (y == null) r(b.el = a(b.children), R, L);
      else {
        const P = b.el = y.el;
        b.children !== y.children && u(P, b.children);
      }
    }, k = (y, b, R, L) => {
      y == null ? r(b.el = l(b.children || ""), R, L) : b.el = y.el;
    }, w = (y, b, R, L) => {
      [y.el, y.anchor] = m(y.children, b, R, L, y.el, y.anchor);
    }, p = ({ el: y, anchor: b }, R, L) => {
      let P;
      for (; y && y !== b; ) P = h(y), r(y, R, L), y = P;
      r(b, R, L);
    }, v = ({ el: y, anchor: b }) => {
      let R;
      for (; y && y !== b; ) R = h(y), o(y), y = R;
      o(b);
    }, _ = (y, b, R, L, P, I, H, j, D) => {
      b.type === "svg" ? H = "svg" : b.type === "math" && (H = "mathml"), y == null ? A(b, R, L, P, I, H, j, D) : C(y, b, P, I, H, j, D);
    }, A = (y, b, R, L, P, I, H, j) => {
      let D, $;
      const { props: te, shapeFlag: V, transition: Q, dirs: ne } = y;
      if (D = y.el = i(y.type, I, te && te.is, te), V & 8 ? c(D, y.children) : V & 16 && N(y.children, D, null, L, P, As(y, I), H, j), ne && Ct(y, null, L, "created"), M(D, y, y.scopeId, H, L), te) {
        for (const ve in te) ve !== "value" && !Vn(ve) && s(D, ve, null, te[ve], I, L);
        "value" in te && s(D, "value", null, te.value, I), ($ = te.onVnodeBeforeMount) && Ye($, L, y);
      }
      ne && Ct(y, null, L, "beforeMount");
      const se = ju(P, Q);
      se && Q.beforeEnter(D), r(D, b, R), (($ = te && te.onVnodeMounted) || se || ne) && Ae(() => {
        $ && Ye($, L, y), se && Q.enter(D), ne && Ct(y, null, L, "mounted");
      }, P);
    }, M = (y, b, R, L, P) => {
      if (R && d(y, R), L) for (let I = 0; I < L.length; I++) d(y, L[I]);
      if (P) {
        let I = P.subTree;
        if (b === I || $o(I.type) && (I.ssContent === b || I.ssFallback === b)) {
          const H = P.vnode;
          M(y, H, H.scopeId, H.slotScopeIds, P.parent);
        }
      }
    }, N = (y, b, R, L, P, I, H, j, D = 0) => {
      for (let $ = D; $ < y.length; $++) {
        const te = y[$] = j ? nn(y[$]) : tt(y[$]);
        g(null, te, b, R, L, P, I, H, j);
      }
    }, C = (y, b, R, L, P, I, H) => {
      const j = b.el = y.el;
      let { patchFlag: D, dynamicChildren: $, dirs: te } = b;
      D |= y.patchFlag & 16;
      const V = y.props || ae, Q = b.props || ae;
      let ne;
      if (R && vn(R, false), (ne = Q.onVnodeBeforeUpdate) && Ye(ne, R, b, y), te && Ct(b, y, R, "beforeUpdate"), R && vn(R, true), (V.innerHTML && Q.innerHTML == null || V.textContent && Q.textContent == null) && c(j, ""), $ ? O(y.dynamicChildren, $, j, R, L, As(b, P), I) : H || G(y, b, j, null, R, L, As(b, P), I, false), D > 0) {
        if (D & 16) E(j, V, Q, R, P);
        else if (D & 2 && V.class !== Q.class && s(j, "class", null, Q.class, P), D & 4 && s(j, "style", V.style, Q.style, P), D & 8) {
          const se = b.dynamicProps;
          for (let ve = 0; ve < se.length; ve++) {
            const fe = se[ve], Qe = V[fe], Be = Q[fe];
            (Be !== Qe || fe === "value") && s(j, fe, Qe, Be, P, R);
          }
        }
        D & 1 && y.children !== b.children && c(j, b.children);
      } else !H && $ == null && E(j, V, Q, R, P);
      ((ne = Q.onVnodeUpdated) || te) && Ae(() => {
        ne && Ye(ne, R, b, y), te && Ct(b, y, R, "updated");
      }, L);
    }, O = (y, b, R, L, P, I, H) => {
      for (let j = 0; j < b.length; j++) {
        const D = y[j], $ = b[j], te = D.el && (D.type === we || !dt(D, $) || D.shapeFlag & 70) ? f(D.el) : R;
        g(D, $, te, null, L, P, I, H, true);
      }
    }, E = (y, b, R, L, P) => {
      if (b !== R) {
        if (b !== ae) for (const I in b) !Vn(I) && !(I in R) && s(y, I, b[I], null, P, L);
        for (const I in R) {
          if (Vn(I)) continue;
          const H = R[I], j = b[I];
          H !== j && I !== "value" && s(y, I, j, H, P, L);
        }
        "value" in R && s(y, "value", b.value, R.value, P);
      }
    }, T = (y, b, R, L, P, I, H, j, D) => {
      const $ = b.el = y ? y.el : a(""), te = b.anchor = y ? y.anchor : a("");
      let { patchFlag: V, dynamicChildren: Q, slotScopeIds: ne } = b;
      ne && (j = j ? j.concat(ne) : ne), y == null ? (r($, R, L), r(te, R, L), N(b.children || [], R, te, P, I, H, j, D)) : V > 0 && V & 64 && Q && y.dynamicChildren ? (O(y.dynamicChildren, Q, R, P, I, H, j), (b.key != null || P && b === P.subTree) && Zi(y, b, true)) : G(y, b, R, te, P, I, H, j, D);
    }, B = (y, b, R, L, P, I, H, j, D) => {
      b.slotScopeIds = j, y == null ? b.shapeFlag & 512 ? P.ctx.activate(b, R, L, H, D) : X(b, R, L, P, I, H, D) : Z(y, b, D);
    }, X = (y, b, R, L, P, I, H) => {
      const j = y.component = Ip(y, L, P);
      if (qr(y) && (j.ctx.renderer = z), $p(j, false, H), j.asyncDep) {
        if (P && P.registerDep(j, F, H), !y.el) {
          const D = j.subTree = pe(xe);
          k(null, D, b, R);
        }
      } else F(j, y, b, R, P, I, H);
    }, Z = (y, b, R) => {
      const L = b.component = y.component;
      if (kp(y, b, R)) if (L.asyncDep && !L.asyncResolved) {
        K(L, b, R);
        return;
      } else L.next = b, L.update();
      else b.el = y.el, L.vnode = b;
    }, F = (y, b, R, L, P, I, H) => {
      const j = () => {
        if (y.isMounted) {
          let { next: V, bu: Q, u: ne, parent: se, vnode: ve } = y;
          {
            const Xe = Fu(y);
            if (Xe) {
              V && (V.el = ve.el, K(y, V, H)), Xe.asyncDep.then(() => {
                y.isUnmounted || j();
              });
              return;
            }
          }
          let fe = V, Qe;
          vn(y, false), V ? (V.el = ve.el, K(y, V, H)) : V = ve, Q && Wn(Q), (Qe = V.props && V.props.onVnodeBeforeUpdate) && Ye(Qe, se, V, ve), vn(y, true);
          const Be = xs(y), ct = y.subTree;
          y.subTree = Be, g(ct, Be, f(ct.el), x(ct), y, P, I), V.el = Be.el, fe === null && as(y, Be.el), ne && Ae(ne, P), (Qe = V.props && V.props.onVnodeUpdated) && Ae(() => Ye(Qe, se, V, ve), P);
        } else {
          let V;
          const { el: Q, props: ne } = b, { bm: se, m: ve, parent: fe, root: Qe, type: Be } = y, ct = un(b);
          if (vn(y, false), se && Wn(se), !ct && (V = ne && ne.onVnodeBeforeMount) && Ye(V, fe, b), vn(y, true), Q && Ee) {
            const Xe = () => {
              y.subTree = xs(y), Ee(Q, y.subTree, y, P, null);
            };
            ct && Be.__asyncHydrate ? Be.__asyncHydrate(Q, y, Xe) : Xe();
          } else {
            Qe.ce && Qe.ce._injectChildStyle(Be);
            const Xe = y.subTree = xs(y);
            g(null, Xe, R, L, y, P, I), b.el = Xe.el;
          }
          if (ve && Ae(ve, P), !ct && (V = ne && ne.onVnodeMounted)) {
            const Xe = b;
            Ae(() => Ye(V, fe, Xe), P);
          }
          (b.shapeFlag & 256 || fe && un(fe.vnode) && fe.vnode.shapeFlag & 256) && y.a && Ae(y.a, P), y.isMounted = true, b = R = L = null;
        }
      };
      y.scope.on();
      const D = y.effect = new Bc(j);
      y.scope.off();
      const $ = y.update = D.run.bind(D), te = y.job = D.runIfDirty.bind(D);
      te.i = y, te.id = y.uid, D.scheduler = () => zi(te), vn(y, true), $();
    }, K = (y, b, R) => {
      b.component = y;
      const L = y.vnode.props;
      y.vnode = b, y.next = null, ip(y, b.props, L, R), up(y, b.children, R), mn(), Ta(y), gn();
    }, G = (y, b, R, L, P, I, H, j, D = false) => {
      const $ = y && y.children, te = y ? y.shapeFlag : 0, V = b.children, { patchFlag: Q, shapeFlag: ne } = b;
      if (Q > 0) {
        if (Q & 128) {
          Jt($, V, R, L, P, I, H, j, D);
          return;
        } else if (Q & 256) {
          Ce($, V, R, L, P, I, H, j, D);
          return;
        }
      }
      ne & 8 ? (te & 16 && ot($, P, I), V !== $ && c(R, V)) : te & 16 ? ne & 16 ? Jt($, V, R, L, P, I, H, j, D) : ot($, P, I, true) : (te & 8 && c(R, ""), ne & 16 && N(V, R, L, P, I, H, j, D));
    }, Ce = (y, b, R, L, P, I, H, j, D) => {
      y = y || Hn, b = b || Hn;
      const $ = y.length, te = b.length, V = Math.min($, te);
      let Q;
      for (Q = 0; Q < V; Q++) {
        const ne = b[Q] = D ? nn(b[Q]) : tt(b[Q]);
        g(y[Q], ne, R, null, P, I, H, j, D);
      }
      $ > te ? ot(y, P, I, true, false, V) : N(b, R, L, P, I, H, j, D, V);
    }, Jt = (y, b, R, L, P, I, H, j, D) => {
      let $ = 0;
      const te = b.length;
      let V = y.length - 1, Q = te - 1;
      for (; $ <= V && $ <= Q; ) {
        const ne = y[$], se = b[$] = D ? nn(b[$]) : tt(b[$]);
        if (dt(ne, se)) g(ne, se, R, null, P, I, H, j, D);
        else break;
        $++;
      }
      for (; $ <= V && $ <= Q; ) {
        const ne = y[V], se = b[Q] = D ? nn(b[Q]) : tt(b[Q]);
        if (dt(ne, se)) g(ne, se, R, null, P, I, H, j, D);
        else break;
        V--, Q--;
      }
      if ($ > V) {
        if ($ <= Q) {
          const ne = Q + 1, se = ne < te ? b[ne].el : L;
          for (; $ <= Q; ) g(null, b[$] = D ? nn(b[$]) : tt(b[$]), R, se, P, I, H, j, D), $++;
        }
      } else if ($ > Q) for (; $ <= V; ) ze(y[$], P, I, true), $++;
      else {
        const ne = $, se = $, ve = /* @__PURE__ */ new Map();
        for ($ = se; $ <= Q; $++) {
          const Ze = b[$] = D ? nn(b[$]) : tt(b[$]);
          Ze.key != null && ve.set(Ze.key, $);
        }
        let fe, Qe = 0;
        const Be = Q - se + 1;
        let ct = false, Xe = 0;
        const ur = new Array(Be);
        for ($ = 0; $ < Be; $++) ur[$] = 0;
        for ($ = ne; $ <= V; $++) {
          const Ze = y[$];
          if (Qe >= Be) {
            ze(Ze, P, I, true);
            continue;
          }
          let _t;
          if (Ze.key != null) _t = ve.get(Ze.key);
          else for (fe = se; fe <= Q; fe++) if (ur[fe - se] === 0 && dt(Ze, b[fe])) {
            _t = fe;
            break;
          }
          _t === void 0 ? ze(Ze, P, I, true) : (ur[_t - se] = $ + 1, _t >= Xe ? Xe = _t : ct = true, g(Ze, b[_t], R, null, P, I, H, j, D), Qe++);
        }
        const _a = ct ? hp(ur) : Hn;
        for (fe = _a.length - 1, $ = Be - 1; $ >= 0; $--) {
          const Ze = se + $, _t = b[Ze], wa = Ze + 1 < te ? b[Ze + 1].el : L;
          ur[$] === 0 ? g(null, _t, R, wa, P, I, H, j, D) : ct && (fe < 0 || $ !== _a[fe] ? bt(_t, R, wa, 2) : fe--);
        }
      }
    }, bt = (y, b, R, L, P = null) => {
      const { el: I, type: H, transition: j, children: D, shapeFlag: $ } = y;
      if ($ & 6) {
        bt(y.component.subTree, b, R, L);
        return;
      }
      if ($ & 128) {
        y.suspense.move(b, R, L);
        return;
      }
      if ($ & 64) {
        H.move(y, b, R, z);
        return;
      }
      if (H === we) {
        r(I, b, R);
        for (let V = 0; V < D.length; V++) bt(D[V], b, R, L);
        r(y.anchor, b, R);
        return;
      }
      if (H === kr) {
        p(y, b, R);
        return;
      }
      if (L !== 2 && $ & 1 && j) if (L === 0) j.beforeEnter(I), r(I, b, R), Ae(() => j.enter(I), P);
      else {
        const { leave: V, delayLeave: Q, afterLeave: ne } = j, se = () => r(I, b, R), ve = () => {
          V(I, () => {
            se(), ne && ne();
          });
        };
        Q ? Q(I, se, ve) : ve();
      }
      else r(I, b, R);
    }, ze = (y, b, R, L = false, P = false) => {
      const { type: I, props: H, ref: j, children: D, dynamicChildren: $, shapeFlag: te, patchFlag: V, dirs: Q, cacheIndex: ne } = y;
      if (V === -2 && (P = false), j != null && Ir(j, null, R, y, true), ne != null && (b.renderCache[ne] = void 0), te & 256) {
        b.ctx.deactivate(y);
        return;
      }
      const se = te & 1 && Q, ve = !un(y);
      let fe;
      if (ve && (fe = H && H.onVnodeBeforeUnmount) && Ye(fe, b, y), te & 6) no(y.component, R, L);
      else {
        if (te & 128) {
          y.suspense.unmount(R, L);
          return;
        }
        se && Ct(y, null, b, "beforeUnmount"), te & 64 ? y.type.remove(y, b, R, z, L) : $ && !$.hasOnce && (I !== we || V > 0 && V & 64) ? ot($, b, R, false, true) : (I === we && V & 384 || !P && te & 16) && ot(D, b, R), L && Ln(y);
      }
      (ve && (fe = H && H.onVnodeUnmounted) || se) && Ae(() => {
        fe && Ye(fe, b, y), se && Ct(y, null, b, "unmounted");
      }, R);
    }, Ln = (y) => {
      const { type: b, el: R, anchor: L, transition: P } = y;
      if (b === we) {
        Mn(R, L);
        return;
      }
      if (b === kr) {
        v(y);
        return;
      }
      const I = () => {
        o(R), P && !P.persisted && P.afterLeave && P.afterLeave();
      };
      if (y.shapeFlag & 1 && P && !P.persisted) {
        const { leave: H, delayLeave: j } = P, D = () => H(R, I);
        j ? j(y.el, I, D) : D();
      } else I();
    }, Mn = (y, b) => {
      let R;
      for (; y !== b; ) R = h(y), o(y), y = R;
      o(b);
    }, no = (y, b, R) => {
      const { bum: L, scope: P, job: I, subTree: H, um: j, m: D, a: $ } = y;
      Io(D), Io($), L && Wn(L), P.stop(), I && (I.flags |= 8, ze(H, y, b, R)), j && Ae(j, b), Ae(() => {
        y.isUnmounted = true;
      }, b), b && b.pendingBranch && !b.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve());
    }, ot = (y, b, R, L = false, P = false, I = 0) => {
      for (let H = I; H < y.length; H++) ze(y[H], b, R, L, P);
    }, x = (y) => {
      if (y.shapeFlag & 6) return x(y.component.subTree);
      if (y.shapeFlag & 128) return y.suspense.next();
      const b = h(y.anchor || y.el), R = b && b[au];
      return R ? h(R) : b;
    };
    let W = false;
    const U = (y, b, R) => {
      y == null ? b._vnode && ze(b._vnode, null, null, true) : g(b._vnode || null, y, b, null, null, null, R), b._vnode = y, W || (W = true, Ta(), Oo(), W = false);
    }, z = {
      p: g,
      um: ze,
      m: bt,
      r: Ln,
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
      createApp: op(U, le)
    };
  }
  function As({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function vn({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function ju(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function Zi(e, t, n = false) {
    const r = e.children, o = t.children;
    if (J(r) && J(o)) for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = nn(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && Zi(i, a)), a.type === Tn && (a.el = i.el);
    }
  }
  function hp(e) {
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
  function Fu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Fu(t);
  }
  function Io(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const pp = Symbol.for("v-scx"), mp = () => Re(pp);
  gp = function(e, t) {
    return Kr(e, null, t);
  };
  hS = function(e, t) {
    return Kr(e, null, {
      flush: "post"
    });
  };
  yp = function(e, t) {
    return Kr(e, null, {
      flush: "sync"
    });
  };
  nt = function(e, t, n) {
    return Kr(e, t, n);
  };
  function Kr(e, t, n = ae) {
    const { immediate: r, deep: o, flush: s, once: i } = n, a = Te({}, n), l = t && r || !t && s !== "post";
    let u;
    if (Qn) {
      if (s === "sync") {
        const d = mp();
        u = d.__watcherHandles || (d.__watcherHandles = []);
      } else if (!l) {
        const d = () => {
        };
        return d.stop = xt, d.resume = xt, d.pause = xt, d;
      }
    }
    const c = Oe;
    a.call = (d, m, g) => yt(d, c, m, g);
    let f = false;
    s === "post" ? a.scheduler = (d) => {
      Ae(d, c && c.suspense);
    } : s !== "sync" && (f = true, a.scheduler = (d, m) => {
      m ? d() : zi(d);
    }), a.augmentJob = (d) => {
      t && (d.flags |= 4), f && (d.flags |= 2, c && (d.id = c.uid, d.i = c));
    };
    const h = Mh(e, t, a);
    return Qn && (u ? u.push(h) : l && h()), h;
  }
  function vp(e, t, n) {
    const r = this.proxy, o = ke(e) ? e.includes(".") ? Hu(r, e) : () => r[e] : e.bind(r, r);
    let s;
    ee(t) ? s = t : (s = t.handler, n = t);
    const i = xn(this), a = Kr(o, s.bind(r), n);
    return i(), a;
  }
  function Hu(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  pS = function(e, t, n = ae) {
    const r = lt(), o = rt(t), s = qt(t), i = Uu(e, o), a = Gi((l, u) => {
      let c, f = ae, h;
      return yp(() => {
        const d = e[o];
        qe(c, d) && (c = d, u());
      }), {
        get() {
          return l(), n.get ? n.get(c) : c;
        },
        set(d) {
          const m = n.set ? n.set(d) : d;
          if (!qe(m, c) && !(f !== ae && qe(d, f))) return;
          const g = r.vnode.props;
          g && (t in g || o in g || s in g) && (`onUpdate:${t}` in g || `onUpdate:${o}` in g || `onUpdate:${s}` in g) || (c = d, u()), r.emit(`update:${t}`, m), qe(d, m) && qe(d, f) && !qe(m, h) && u(), f = d, h = m;
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
  const Uu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${rt(t)}Modifiers`] || e[`${qt(t)}Modifiers`];
  function bp(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ae;
    let o = n;
    const s = t.startsWith("update:"), i = s && Uu(r, t.slice(7));
    i && (i.trim && (o = n.map((c) => ke(c) ? c.trim() : c)), i.number && (o = n.map(Qs)));
    let a, l = r[a = _s(t)] || r[a = _s(rt(t))];
    !l && s && (l = r[a = _s(qt(t))]), l && yt(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, yt(u, e, 6, o);
    }
  }
  function Vu(e, t, n = false) {
    const r = t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {}, a = false;
    if (!ee(e)) {
      const l = (u) => {
        const c = Vu(u, t, true);
        c && (a = true, Te(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !s && !a ? (me(e) && r.set(e, null), null) : (J(s) ? s.forEach((l) => i[l] = null) : Te(i, s), me(e) && r.set(e, i), i);
  }
  function is(e, t) {
    return !e || !Hr(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, qt(t)) || ue(e, t));
  }
  function xs(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: h, setupState: d, ctx: m, inheritAttrs: g } = e, S = Lo(e);
    let k, w;
    try {
      if (n.shapeFlag & 4) {
        const v = o || r, _ = v;
        k = tt(u.call(_, v, c, f, d, h, m)), w = a;
      } else {
        const v = t;
        k = tt(v.length > 1 ? v(f, {
          attrs: a,
          slots: i,
          emit: l
        }) : v(f, null)), w = t.props ? a : wp(a);
      }
    } catch (v) {
      Er.length = 0, or(v, e, 1), k = pe(xe);
    }
    let p = k;
    if (w && g !== false) {
      const v = Object.keys(w), { shapeFlag: _ } = p;
      v.length && _ & 7 && (s && v.some(ji) && (w = Sp(w, s)), p = Wt(p, w, false, true));
    }
    return n.dirs && (p = Wt(p, null, false, true), p.dirs = p.dirs ? p.dirs.concat(n.dirs) : n.dirs), n.transition && hn(p, n.transition), k = p, Lo(S), k;
  }
  function _p(e, t = true) {
    let n;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (An(o)) {
        if (o.type !== xe || o.children === "v-if") {
          if (n) return;
          n = o;
        }
      } else return;
    }
    return n;
  }
  const wp = (e) => {
    let t;
    for (const n in e) (n === "class" || n === "style" || Hr(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, Sp = (e, t) => {
    const n = {};
    for (const r in e) (!ji(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  };
  function kp(e, t, n) {
    const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && l >= 0) {
      if (l & 1024) return true;
      if (l & 16) return r ? ja(r, i, u) : !!i;
      if (l & 8) {
        const c = t.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const h = c[f];
          if (i[h] !== r[h] && !is(u, h)) return true;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? true : r === i ? false : r ? i ? ja(r, i, u) : true : !!i;
    return false;
  }
  function ja(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (t[s] !== e[s] && !is(n, s)) return true;
    }
    return false;
  }
  function as({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const $o = (e) => e.__isSuspense;
  let ci = 0;
  const Ep = {
    name: "Suspense",
    __isSuspense: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      if (e == null) Rp(t, n, r, o, s, i, a, l, u);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return;
        }
        Tp(e, t, n, r, o, i, a, l, u);
      }
    },
    hydrate: Cp,
    normalize: Pp
  }, ea = Ep;
  function Nr(e, t) {
    const n = e.props && e.props[t];
    ee(n) && n();
  }
  function Rp(e, t, n, r, o, s, i, a, l) {
    const { p: u, o: { createElement: c } } = l, f = c("div"), h = e.suspense = Wu(e, o, r, t, f, n, s, i, a, l);
    u(null, h.pendingBranch = e.ssContent, f, null, r, h, s, i), h.deps > 0 ? (Nr(e, "onPending"), Nr(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, s, i), Gn(h, e.ssFallback)) : h.resolve(false, true);
  }
  function Tp(e, t, n, r, o, s, i, a, { p: l, um: u, o: { createElement: c } }) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const h = t.ssContent, d = t.ssFallback, { activeBranch: m, pendingBranch: g, isInFallback: S, isHydrating: k } = f;
    if (g) f.pendingBranch = h, dt(h, g) ? (l(g, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : S && (k || (l(m, d, n, r, o, null, s, i, a), Gn(f, d)))) : (f.pendingId = ci++, k ? (f.isHydrating = false, f.activeBranch = g) : u(g, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), S ? (l(null, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : (l(m, d, n, r, o, null, s, i, a), Gn(f, d))) : m && dt(h, m) ? (l(m, h, n, r, o, f, s, i, a), f.resolve(true)) : (l(null, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
    else if (m && dt(h, m)) l(m, h, n, r, o, f, s, i, a), Gn(f, h);
    else if (Nr(t, "onPending"), f.pendingBranch = h, h.shapeFlag & 512 ? f.pendingId = h.component.suspenseId : f.pendingId = ci++, l(null, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0) f.resolve();
    else {
      const { timeout: w, pendingId: p } = f;
      w > 0 ? setTimeout(() => {
        f.pendingId === p && f.fallback(d);
      }, w) : w === 0 && f.fallback(d);
    }
  }
  function Wu(e, t, n, r, o, s, i, a, l, u, c = false) {
    const { p: f, m: h, um: d, n: m, o: { parentNode: g, remove: S } } = u;
    let k;
    const w = Ap(e);
    w && t && t.pendingBranch && (k = t.pendingId, t.deps++);
    const p = e.props ? xc(e.props.timeout) : void 0, v = s, _ = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: o,
      deps: 0,
      pendingId: ci++,
      timeout: typeof p == "number" ? p : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !c,
      isHydrating: c,
      isUnmounted: false,
      effects: [],
      resolve(A = false, M = false) {
        const { vnode: N, activeBranch: C, pendingBranch: O, pendingId: E, effects: T, parentComponent: B, container: X } = _;
        let Z = false;
        _.isHydrating ? _.isHydrating = false : A || (Z = C && O.transition && O.transition.mode === "out-in", Z && (C.transition.afterLeave = () => {
          E === _.pendingId && (h(O, X, s === v ? m(C) : s, 0), ni(T));
        }), C && (g(C.el) === X && (s = m(C)), d(C, B, _, true)), Z || h(O, X, s, 0)), Gn(_, O), _.pendingBranch = null, _.isInFallback = false;
        let F = _.parent, K = false;
        for (; F; ) {
          if (F.pendingBranch) {
            F.effects.push(...T), K = true;
            break;
          }
          F = F.parent;
        }
        !K && !Z && ni(T), _.effects = [], w && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), Nr(N, "onResolve");
      },
      fallback(A) {
        if (!_.pendingBranch) return;
        const { vnode: M, activeBranch: N, parentComponent: C, container: O, namespace: E } = _;
        Nr(M, "onFallback");
        const T = m(N), B = () => {
          _.isInFallback && (f(null, A, O, T, C, null, E, a, l), Gn(_, A));
        }, X = A.transition && A.transition.mode === "out-in";
        X && (N.transition.afterLeave = B), _.isInFallback = true, d(N, C, null, true), X || B();
      },
      move(A, M, N) {
        _.activeBranch && h(_.activeBranch, A, M, N), _.container = A;
      },
      next() {
        return _.activeBranch && m(_.activeBranch);
      },
      registerDep(A, M, N) {
        const C = !!_.pendingBranch;
        C && _.deps++;
        const O = A.vnode.el;
        A.asyncDep.catch((E) => {
          or(E, A, 0);
        }).then((E) => {
          if (A.isUnmounted || _.isUnmounted || _.pendingId !== A.suspenseId) return;
          A.asyncResolved = true;
          const { vnode: T } = A;
          di(A, E), O && (T.el = O);
          const B = !O && A.subTree.el;
          M(A, T, g(O || A.subTree.el), O ? null : m(A.subTree), _, i, N), B && S(B), as(A, T.el), C && --_.deps === 0 && _.resolve();
        });
      },
      unmount(A, M) {
        _.isUnmounted = true, _.activeBranch && d(_.activeBranch, n, A, M), _.pendingBranch && d(_.pendingBranch, n, A, M);
      }
    };
    return _;
  }
  function Cp(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = Wu(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, true), c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(false, true), c;
  }
  function Pp(e) {
    const { shapeFlag: t, children: n } = e, r = t & 32;
    e.ssContent = Fa(r ? n.default : n), e.ssFallback = r ? Fa(n.fallback) : pe(xe);
  }
  function Fa(e) {
    let t;
    if (ee(e)) {
      const n = Pn && e._c;
      n && (e._d = false, q()), e = e(), n && (e._d = true, t = Fe, Ku());
    }
    return J(e) && (e = _p(e)), e = tt(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function qu(e, t) {
    t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : ni(e);
  }
  function Gn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let o = t.el;
    for (; !o && t.component; ) t = t.component.subTree, o = t.el;
    n.el = o, r && r.subTree === n && (r.vnode.el = o, as(r, o));
  }
  function Ap(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  let Tn, kr, Er;
  we = Symbol.for("v-fgt");
  Tn = Symbol.for("v-txt");
  xe = Symbol.for("v-cmt");
  kr = Symbol.for("v-stc");
  Er = [];
  let Fe = null;
  q = function(e = false) {
    Er.push(Fe = e ? null : []);
  };
  function Ku() {
    Er.pop(), Fe = Er[Er.length - 1] || null;
  }
  let Pn = 1;
  function Ha(e, t = false) {
    Pn += e, e < 0 && Fe && t && (Fe.hasOnce = true);
  }
  function Gu(e) {
    return e.dynamicChildren = Pn > 0 ? Fe || Hn : null, Ku(), Pn > 0 && Fe && Fe.push(e), e;
  }
  de = function(e, t, n, r, o, s) {
    return Gu(et(e, t, n, r, o, s, true));
  };
  oe = function(e, t, n, r, o) {
    return Gu(pe(e, t, n, r, o, true));
  };
  function An(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function dt(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const zu = ({ key: e }) => e ?? null, ko = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ke(e) || _e(e) || ee(e) ? {
    i: Le,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  et = function(e, t = null, n = null, r = 0, o = null, s = e === we ? 0 : 1, i = false, a = false) {
    const l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && zu(t),
      ref: t && ko(t),
      scopeId: iu,
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
      ctx: Le
    };
    return a ? (ta(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ke(n) ? 8 : 16), Pn > 0 && !i && Fe && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Fe.push(l), l;
  };
  pe = xp;
  function xp(e, t = null, n = null, r = 0, o = null, s = false) {
    if ((!e || e === Su) && (e = xe), An(e)) {
      const a = Wt(e, t, true);
      return n && ta(a, n), Pn > 0 && !s && Fe && (a.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = a : Fe.push(a)), a.patchFlag = -2, a;
    }
    if (Dp(e) && (e = e.__vccOpts), t) {
      t = Ju(t);
      let { class: a, style: l } = t;
      a && !ke(a) && (t.class = Ur(a)), me(l) && (Ki(l) && !J(l) && (l = Te({}, l)), t.style = Xo(l));
    }
    const i = ke(e) ? 1 : $o(e) ? 128 : lu(e) ? 64 : me(e) ? 4 : ee(e) ? 2 : 0;
    return et(e, t, n, r, o, i, s, true);
  }
  Ju = function(e) {
    return e ? Ki(e) || Ou(e) ? Te({}, e) : e : null;
  };
  Wt = function(e, t, n = false, r = false) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? Gr(o || {}, t) : o, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && zu(u),
      ref: t && t.ref ? n && s ? J(s) ? s.concat(ko(t)) : [
        s,
        ko(t)
      ] : ko(t) : s,
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
      ssContent: e.ssContent && Wt(e.ssContent),
      ssFallback: e.ssFallback && Wt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
    return l && r && hn(c, l.clone(c)), c;
  };
  ir = function(e = " ", t = 0) {
    return pe(Tn, null, e, t);
  };
  Op = function(e, t) {
    const n = pe(kr, null, e);
    return n.staticCount = t, n;
  };
  zt = function(e = "", t = false) {
    return t ? (q(), oe(xe, null, e)) : pe(xe, null, e);
  };
  function tt(e) {
    return e == null || typeof e == "boolean" ? pe(xe) : J(e) ? pe(we, null, e.slice()) : An(e) ? nn(e) : pe(Tn, null, String(e));
  }
  function nn(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Wt(e);
  }
  function ta(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (J(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), ta(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Ou(t) ? t._ctx = Le : o === 3 && Le && (Le.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else ee(t) ? (t = {
      default: t,
      _ctx: Le
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [
      ir(t)
    ]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  Gr = function(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = Ur([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = Xo([
        t.style,
        r.style
      ]);
      else if (Hr(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(J(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
      } else o !== "" && (t[o] = r[o]);
    }
    return t;
  };
  function Ye(e, t, n, r = null) {
    yt(e, t, 7, [
      n,
      r
    ]);
  }
  const Lp = Pu();
  let Mp = 0;
  function Ip(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || Lp, s = {
      uid: Mp++,
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
      scope: new Nc(true),
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
      propsOptions: Mu(r, o),
      emitsOptions: Vu(r, o),
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
    }, s.root = t ? t.root : s, s.emit = bp.bind(null, s), e.ce && e.ce(s), s;
  }
  let Oe = null;
  lt = () => Oe || Le;
  let No, ui;
  {
    const e = Qo(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
        o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
      };
    };
    No = t("__VUE_INSTANCE_SETTERS__", (n) => Oe = n), ui = t("__VUE_SSR_SETTERS__", (n) => Qn = n);
  }
  const xn = (e) => {
    const t = Oe;
    return No(e), e.scope.on(), () => {
      e.scope.off(), No(t);
    };
  }, fi = () => {
    Oe && Oe.scope.off(), No(null);
  };
  function Yu(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Qn = false;
  function $p(e, t = false, n = false) {
    t && ui(t);
    const { props: r, children: o } = e.vnode, s = Yu(e);
    sp(e, r, s, t), cp(e, o, n);
    const i = s ? Np(e, t) : void 0;
    return t && ui(false), i;
  }
  function Np(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qh);
    const { setup: r } = n;
    if (r) {
      mn();
      const o = e.setupContext = r.length > 1 ? Xu(e) : null, s = xn(e), i = Wr(r, e, 0, [
        e.props,
        o
      ]), a = Hi(i);
      if (gn(), s(), (a || e.sp) && !un(e) && Yi(e), a) {
        if (i.then(fi, fi), t) return i.then((l) => {
          di(e, l);
        }).catch((l) => {
          or(l, e, 0);
        });
        e.asyncDep = i;
      } else di(e, i);
    } else Qu(e);
  }
  function di(e, t, n) {
    ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : me(t) && (e.setupState = tu(t)), Qu(e);
  }
  function Qu(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || xt);
    {
      const o = xn(e);
      mn();
      try {
        Xh(e);
      } finally {
        gn(), o();
      }
    }
  }
  const Bp = {
    get(e, t) {
      return De(e, "get", ""), e[t];
    }
  };
  function Xu(e) {
    const t = (n) => {
      e.exposed = n || {};
    };
    return {
      attrs: new Proxy(e.attrs, Bp),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function ls(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(tu(qn(e.exposed)), {
      get(t, n) {
        if (n in t) return t[n];
        if (n in Sr) return Sr[n](e);
      },
      has(t, n) {
        return n in t || n in Sr;
      }
    })) : e.proxy;
  }
  function hi(e, t = true) {
    return ee(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Dp(e) {
    return ee(e) && "__vccOpts" in e;
  }
  Y = (e, t) => Oh(e, t, Qn);
  Se = function(e, t, n) {
    const r = arguments.length;
    return r === 2 ? me(t) && !J(t) ? An(t) ? pe(e, null, [
      t
    ]) : pe(e, t) : pe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && An(n) && (n = [
      n
    ]), pe(e, t, n));
  };
  mS = function(e, t, n, r) {
    const o = n[r];
    if (o && jp(o, e)) return o;
    const s = t();
    return s.memo = e.slice(), s.cacheIndex = r, n[r] = s;
  };
  function jp(e, t) {
    const n = e.memo;
    if (n.length != t.length) return false;
    for (let r = 0; r < n.length; r++) if (qe(n[r], t[r])) return false;
    return Pn > 0 && Fe && Fe.push(e), true;
  }
  const Fp = "3.5.13";
  let pi;
  const Ua = typeof window < "u" && window.trustedTypes;
  if (Ua) try {
    pi = Ua.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let Zu, Hp, Up, $t, Va, Vp, Yt, dr, Xn, ef, tf, Wp, bn, Wa;
  Zu = pi ? (e) => pi.createHTML(e) : (e) => e;
  Hp = "http://www.w3.org/2000/svg";
  Up = "http://www.w3.org/1998/Math/MathML";
  $t = typeof document < "u" ? document : null;
  Va = $t && $t.createElement("template");
  Vp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? $t.createElementNS(Hp, e) : t === "mathml" ? $t.createElementNS(Up, e) : n ? $t.createElement(e, {
        is: n
      }) : $t.createElement(e);
      return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
    },
    createText: (e) => $t.createTextNode(e),
    createComment: (e) => $t.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => $t.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === s || !(o = o.nextSibling)); ) ;
      else {
        Va.innerHTML = Zu(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = Va.content;
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
  dr = "animation";
  Xn = Symbol("_vtc");
  ef = {
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
  tf = Te({}, du, ef);
  Wp = (e) => (e.displayName = "Transition", e.props = tf, e);
  qp = Wp((e, { slots: t }) => Se(Dh, nf(e), t));
  bn = (e, t = []) => {
    J(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  Wa = (e) => e ? J(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function nf(e) {
    const t = {};
    for (const T in e) T in ef || (t[T] = e[T]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: s = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = i, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: d = `${n}-leave-to` } = e, m = Kp(o), g = m && m[0], S = m && m[1], { onBeforeEnter: k, onEnter: w, onEnterCancelled: p, onLeave: v, onLeaveCancelled: _, onBeforeAppear: A = k, onAppear: M = w, onAppearCancelled: N = p } = t, C = (T, B, X, Z) => {
      T._enterCancelled = Z, Xt(T, B ? c : a), Xt(T, B ? u : i), X && X();
    }, O = (T, B) => {
      T._isLeaving = false, Xt(T, f), Xt(T, d), Xt(T, h), B && B();
    }, E = (T) => (B, X) => {
      const Z = T ? M : w, F = () => C(B, T, X);
      bn(Z, [
        B,
        F
      ]), qa(() => {
        Xt(B, T ? l : s), kt(B, T ? c : a), Wa(Z) || Ka(B, r, g, F);
      });
    };
    return Te(t, {
      onBeforeEnter(T) {
        bn(k, [
          T
        ]), kt(T, s), kt(T, i);
      },
      onBeforeAppear(T) {
        bn(A, [
          T
        ]), kt(T, l), kt(T, u);
      },
      onEnter: E(false),
      onAppear: E(true),
      onLeave(T, B) {
        T._isLeaving = true;
        const X = () => O(T, B);
        kt(T, f), T._enterCancelled ? (kt(T, h), mi()) : (mi(), kt(T, h)), qa(() => {
          T._isLeaving && (Xt(T, f), kt(T, d), Wa(v) || Ka(T, r, S, X));
        }), bn(v, [
          T,
          X
        ]);
      },
      onEnterCancelled(T) {
        C(T, false, void 0, true), bn(p, [
          T
        ]);
      },
      onAppearCancelled(T) {
        C(T, true, void 0, true), bn(N, [
          T
        ]);
      },
      onLeaveCancelled(T) {
        O(T), bn(_, [
          T
        ]);
      }
    });
  }
  function Kp(e) {
    if (e == null) return null;
    if (me(e)) return [
      Os(e.enter),
      Os(e.leave)
    ];
    {
      const t = Os(e);
      return [
        t,
        t
      ];
    }
  }
  function Os(e) {
    return xc(e);
  }
  function kt(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Xn] || (e[Xn] = /* @__PURE__ */ new Set())).add(t);
  }
  function Xt(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Xn];
    n && (n.delete(t), n.size || (e[Xn] = void 0));
  }
  function qa(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Gp = 0;
  function Ka(e, t, n, r) {
    const o = e._endId = ++Gp, s = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(s, n);
    const { type: i, timeout: a, propCount: l } = rf(e, t);
    if (!i) return r();
    const u = i + "end";
    let c = 0;
    const f = () => {
      e.removeEventListener(u, h), s();
    }, h = (d) => {
      d.target === e && ++c >= l && f();
    };
    setTimeout(() => {
      c < l && f();
    }, a + 1), e.addEventListener(u, h);
  }
  function rf(e, t) {
    const n = window.getComputedStyle(e), r = (m) => (n[m] || "").split(", "), o = r(`${Yt}Delay`), s = r(`${Yt}Duration`), i = Ga(o, s), a = r(`${dr}Delay`), l = r(`${dr}Duration`), u = Ga(a, l);
    let c = null, f = 0, h = 0;
    t === Yt ? i > 0 && (c = Yt, f = i, h = s.length) : t === dr ? u > 0 && (c = dr, f = u, h = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Yt : dr : null, h = c ? c === Yt ? s.length : l.length : 0);
    const d = c === Yt && /\b(transform|all)(,|$)/.test(r(`${Yt}Property`).toString());
    return {
      type: c,
      timeout: f,
      propCount: h,
      hasTransform: d
    };
  }
  function Ga(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => za(n) + za(e[r])));
  }
  function za(e) {
    return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function mi() {
    return document.body.offsetHeight;
  }
  function zp(e, t, n) {
    const r = e[Xn];
    r && (t = (t ? [
      t,
      ...r
    ] : [
      ...r
    ]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  let Bo, of;
  Bo = Symbol("_vod");
  of = Symbol("_vsh");
  gS = {
    beforeMount(e, { value: t }, { transition: n }) {
      e[Bo] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : hr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), hr(e, true), r.enter(e)) : r.leave(e, () => {
        hr(e, false);
      }) : hr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      hr(e, t);
    }
  };
  function hr(e, t) {
    e.style.display = t ? e[Bo] : "none", e[of] = !t;
  }
  const Jp = Symbol(""), Yp = /(^|;)\s*display\s*:/;
  function Qp(e, t, n) {
    const r = e.style, o = ke(n);
    let s = false;
    if (n && !o) {
      if (t) if (ke(t)) for (const i of t.split(";")) {
        const a = i.slice(0, i.indexOf(":")).trim();
        n[a] == null && Eo(r, a, "");
      }
      else for (const i in t) n[i] == null && Eo(r, i, "");
      for (const i in n) i === "display" && (s = true), Eo(r, i, n[i]);
    } else if (o) {
      if (t !== n) {
        const i = r[Jp];
        i && (n += ";" + i), r.cssText = n, s = Yp.test(n);
      }
    } else t && e.removeAttribute("style");
    Bo in e && (e[Bo] = s ? r.display : "", e[of] && (r.display = "none"));
  }
  const Ja = /\s*!important$/;
  function Eo(e, t, n) {
    if (J(n)) n.forEach((r) => Eo(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = Xp(e, t);
      Ja.test(n) ? e.setProperty(qt(r), n.replace(Ja, ""), "important") : e[r] = n;
    }
  }
  const Ya = [
    "Webkit",
    "Moz",
    "ms"
  ], Ls = {};
  function Xp(e, t) {
    const n = Ls[t];
    if (n) return n;
    let r = rt(t);
    if (r !== "filter" && r in e) return Ls[t] = r;
    r = Yo(r);
    for (let o = 0; o < Ya.length; o++) {
      const s = Ya[o] + r;
      if (s in e) return Ls[t] = s;
    }
    return t;
  }
  const Qa = "http://www.w3.org/1999/xlink";
  function Xa(e, t, n, r, o, s = rh(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qa, t.slice(6, t.length)) : e.setAttributeNS(Qa, t, n) : n == null || s && !Lc(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : mt(n) ? String(n) : n);
  }
  function Za(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? Zu(n) : n);
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
      a === "boolean" ? n = Lc(n) : n == null && a === "string" ? (n = "", i = true) : a === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(o || t);
  }
  function sn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function Zp(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const el = Symbol("_vei");
  function em(e, t, n, r, o = null) {
    const s = e[el] || (e[el] = {}), i = s[t];
    if (r && i) i.value = r;
    else {
      const [a, l] = tm(t);
      if (r) {
        const u = s[t] = om(r, o);
        sn(e, a, u, l);
      } else i && (Zp(e, a, i, l), s[t] = void 0);
    }
  }
  const tl = /(?:Once|Passive|Capture)$/;
  function tm(e) {
    let t;
    if (tl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(tl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : qt(e.slice(2)),
      t
    ];
  }
  let Ms = 0;
  const nm = Promise.resolve(), rm = () => Ms || (nm.then(() => Ms = 0), Ms = Date.now());
  function om(e, t) {
    const n = (r) => {
      if (!r._vts) r._vts = Date.now();
      else if (r._vts <= n.attached) return;
      yt(sm(r, n.value), t, 5, [
        r
      ]);
    };
    return n.value = e, n.attached = rm(), n;
  }
  function sm(e, t) {
    if (J(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const nl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, im = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? zp(e, r, i) : t === "style" ? Qp(e, n, r) : Hr(t) ? ji(t) || em(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : am(e, t, r, i)) ? (Za(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Xa(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ke(r)) ? Za(e, rt(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Xa(e, t, r, i));
  };
  function am(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && nl(t) && ee(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return nl(t) && ke(n) ? false : t in e;
  }
  let sf, af, Do, rl, lm, cm;
  sf = /* @__PURE__ */ new WeakMap();
  af = /* @__PURE__ */ new WeakMap();
  Do = Symbol("_moveCb");
  rl = Symbol("_enterCb");
  lm = (e) => (delete e.props.mode, e);
  cm = lm({
    name: "TransitionGroup",
    props: Te({}, tf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = lt(), r = fu();
      let o, s;
      return Qi(() => {
        if (!o.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!hm(o[0].el, n.vnode.el, i)) return;
        o.forEach(um), o.forEach(fm);
        const a = o.filter(dm);
        mi(), a.forEach((l) => {
          const u = l.el, c = u.style;
          kt(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[Do] = (h) => {
            h && h.target !== u || (!h || /transform$/.test(h.propertyName)) && (u.removeEventListener("transitionend", f), u[Do] = null, Xt(u, i));
          };
          u.addEventListener("transitionend", f);
        });
      }), () => {
        const i = re(e), a = nf(i);
        let l = i.tag || we;
        if (o = [], s) for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), hn(c, Mr(c, a, r, n)), sf.set(c, c.el.getBoundingClientRect()));
        }
        s = t.default ? Ji(t.default()) : [];
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.key != null && hn(c, Mr(c, a, r, n));
        }
        return pe(l, null, s);
      };
    }
  });
  yS = cm;
  function um(e) {
    const t = e.el;
    t[Do] && t[Do](), t[rl] && t[rl]();
  }
  function fm(e) {
    af.set(e, e.el.getBoundingClientRect());
  }
  function dm(e) {
    const t = sf.get(e), n = af.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
    }
  }
  function hm(e, t, n) {
    const r = e.cloneNode(), o = e[Xn];
    o && o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const { hasTransform: i } = rf(r);
    return s.removeChild(r), i;
  }
  const Zn = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return J(t) ? (n) => Wn(t, n) : t;
  };
  function pm(e) {
    e.target.composing = true;
  }
  function ol(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  let Ut;
  Ut = Symbol("_assign");
  vS = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[Ut] = Zn(o);
      const s = r || o.props && o.props.type === "number";
      sn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), s && (a = Qs(a)), e[Ut](a);
      }), n && sn(e, "change", () => {
        e.value = e.value.trim();
      }), t || (sn(e, "compositionstart", pm), sn(e, "compositionend", ol), sn(e, "change", ol));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
      if (e[Ut] = Zn(i), e.composing) return;
      const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? Qs(e.value) : e.value, l = t ?? "";
      a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
    }
  };
  bS = {
    deep: true,
    created(e, t, n) {
      e[Ut] = Zn(n), sn(e, "change", () => {
        const r = e._modelValue, o = lf(e), s = e.checked, i = e[Ut];
        if (J(r)) {
          const a = Mc(r, o), l = a !== -1;
          if (s && !l) i(r.concat(o));
          else if (!s && l) {
            const u = [
              ...r
            ];
            u.splice(a, 1), i(u);
          }
        } else if (zo(r)) {
          const a = new Set(r);
          s ? a.add(o) : a.delete(o), i(a);
        } else i(cf(e, s));
      });
    },
    mounted: sl,
    beforeUpdate(e, t, n) {
      e[Ut] = Zn(n), sl(e, t, n);
    }
  };
  function sl(e, { value: t, oldValue: n }, r) {
    e._modelValue = t;
    let o;
    if (J(t)) o = Mc(t, r.props.value) > -1;
    else if (zo(t)) o = t.has(r.props.value);
    else {
      if (t === n) return;
      o = Jn(t, cf(e, true));
    }
    e.checked !== o && (e.checked = o);
  }
  _S = {
    created(e, { value: t }, n) {
      e.checked = Jn(t, n.props.value), e[Ut] = Zn(n), sn(e, "change", () => {
        e[Ut](lf(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      e[Ut] = Zn(r), t !== n && (e.checked = Jn(t, r.props.value));
    }
  };
  function lf(e) {
    return "_value" in e ? e._value : e.value;
  }
  function cf(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  let mm, gm, ym, uf;
  mm = [
    "ctrl",
    "shift",
    "alt",
    "meta"
  ];
  gm = {
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
    exact: (e, t) => mm.some((n) => e[`${n}Key`] && !t.includes(n))
  };
  wS = (e, t) => {
    const n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = (o, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const a = gm[t[i]];
        if (a && a(o, t)) return;
      }
      return e(o, ...s);
    });
  };
  ym = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  };
  SS = (e, t) => {
    const n = e._withKeys || (e._withKeys = {}), r = t.join(".");
    return n[r] || (n[r] = (o) => {
      if (!("key" in o)) return;
      const s = qt(o.key);
      if (t.some((i) => i === s || ym[i] === s)) return e(o);
    });
  };
  uf = Te({
    patchProp: im
  }, Vp);
  let Rr, il = false;
  function ff() {
    return Rr || (Rr = fp(uf));
  }
  function vm() {
    return Rr = il ? Rr : dp(uf), il = true, Rr;
  }
  let _m;
  kS = (...e) => {
    ff().render(...e);
  };
  bm = (...e) => {
    const t = ff().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = hf(r);
      if (!o) return;
      const s = t._component;
      !ee(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
      const i = n(o, false, df(o));
      return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
    }, t;
  };
  _m = (...e) => {
    const t = vm().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = hf(r);
      if (o) return n(o, true, df(o));
    }, t;
  };
  function df(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
  }
  function hf(e) {
    return ke(e) ? document.querySelector(e) : e;
  }
  const wm = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/, Sm = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/, km = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
  function Em(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
      Rm(e);
      return;
    }
    return t;
  }
  function Rm(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
  }
  function Br(e, t = {}) {
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
    if (!km.test(e)) {
      if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
      return e;
    }
    try {
      if (wm.test(e) || Sm.test(e)) {
        if (t.strict) throw new Error("[destr] Possible prototype pollution");
        return JSON.parse(e, Em);
      }
      return JSON.parse(e);
    } catch (r) {
      if (t.strict) throw r;
      return e;
    }
  }
  const pf = /#/g, mf = /&/g, gf = /\//g, Tm = /=/g, Cm = /\?/g, cs = /\+/g, Pm = /%5e/gi, Am = /%60/gi, xm = /%7c/gi, Om = /%20/gi, Lm = /%252f/gi;
  function yf(e) {
    return encodeURI("" + e).replace(xm, "|");
  }
  function gi(e) {
    return yf(typeof e == "string" ? e : JSON.stringify(e)).replace(cs, "%2B").replace(Om, "+").replace(pf, "%23").replace(mf, "%26").replace(Am, "`").replace(Pm, "^").replace(gf, "%2F");
  }
  function Is(e) {
    return gi(e).replace(Tm, "%3D");
  }
  Mm = function(e) {
    return yf(e).replace(pf, "%23").replace(Cm, "%3F").replace(Lm, "%2F").replace(mf, "%26").replace(cs, "%2B");
  };
  ES = function(e) {
    return Mm(e).replace(gf, "%2F");
  };
  function jo(e = "") {
    try {
      return decodeURIComponent("" + e);
    } catch {
      return "" + e;
    }
  }
  function Im(e) {
    return jo(e.replace(cs, " "));
  }
  function $m(e) {
    return jo(e.replace(cs, " "));
  }
  function us(e = "") {
    const t = /* @__PURE__ */ Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
      const r = n.match(/([^=]+)=?(.*)/) || [];
      if (r.length < 2) continue;
      const o = Im(r[1]);
      if (o === "__proto__" || o === "constructor") continue;
      const s = $m(r[2] || "");
      t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [
        t[o],
        s
      ];
    }
    return t;
  }
  function Nm(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((n) => `${Is(e)}=${gi(n)}`).join("&") : `${Is(e)}=${gi(t)}` : Is(e);
  }
  function Bm(e) {
    return Object.keys(e).filter((t) => e[t] !== void 0).map((t) => Nm(t, e[t])).filter(Boolean).join("&");
  }
  const Dm = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/, vf = /^[\s\w\0+.-]{2,}:([/\\]{2})?/, jm = /^([/\\]\s*){2,}[^/\\]/, Fm = /^[\s\0]*(blob|data|javascript|vbscript):$/i, Hm = /\/$|\/\?|\/#/, Um = /^\.?\//;
  Mt = function(e, t = {}) {
    return typeof t == "boolean" && (t = {
      acceptRelative: t
    }), t.strict ? Dm.test(e) : vf.test(e) || (t.acceptRelative ? jm.test(e) : false);
  };
  function Vm(e) {
    return !!e && Fm.test(e);
  }
  function yi(e = "", t) {
    return t ? Hm.test(e) : e.endsWith("/");
  }
  function er(e = "", t) {
    if (!t) return (yi(e) ? e.slice(0, -1) : e) || "/";
    if (!yi(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o), r = e.slice(o));
    const [s, ...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function bf(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (yi(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o), r = e.slice(o), !n)) return r;
    const [s, ...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function Wm(e = "") {
    return e.startsWith("/");
  }
  RS = function(e = "") {
    return Wm(e) ? e : "/" + e;
  };
  qm = function(e, t) {
    if (wf(t) || Mt(e)) return e;
    const n = er(t);
    return e.startsWith(n) ? e : fs(n, e);
  };
  function al(e, t) {
    if (wf(t)) return e;
    const n = er(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r;
  }
  _f = function(e, t) {
    const n = na(e), r = {
      ...us(n.search),
      ...t
    };
    return n.search = Bm(r), Ym(n);
  };
  TS = function(e) {
    return us(na(e).search);
  };
  function wf(e) {
    return !e || e === "/";
  }
  function Km(e) {
    return e && e !== "/";
  }
  fs = function(e, ...t) {
    let n = e || "";
    for (const r of t.filter((o) => Km(o))) if (n) {
      const o = r.replace(Um, "");
      n = bf(n) + o;
    } else n = r;
    return n;
  };
  function Sf(...e) {
    var _a, _b2, _c2, _d2;
    const t = /\/(?!\/)/, n = e.filter(Boolean), r = [];
    let o = 0;
    for (const i of n) if (!(!i || i === "/")) {
      for (const [a, l] of i.split(t).entries()) if (!(!l || l === ".")) {
        if (l === "..") {
          if (r.length === 1 && Mt(r[0])) continue;
          r.pop(), o--;
          continue;
        }
        if (a === 1 && ((_a = r[r.length - 1]) == null ? void 0 : _a.endsWith(":/"))) {
          r[r.length - 1] += "/" + l;
          continue;
        }
        r.push(l), o++;
      }
    }
    let s = r.join("/");
    return o >= 0 ? ((_b2 = n[0]) == null ? void 0 : _b2.startsWith("/")) && !s.startsWith("/") ? s = "/" + s : ((_c2 = n[0]) == null ? void 0 : _c2.startsWith("./")) && !s.startsWith("./") && (s = "./" + s) : s = "../".repeat(-1 * o) + s, ((_d2 = n[n.length - 1]) == null ? void 0 : _d2.endsWith("/")) && !s.endsWith("/") && (s += "/"), s;
  }
  function Gm(e) {
    return zm(e, "https://");
  }
  function zm(e, t) {
    let n = e.match(vf);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e;
  }
  function Jm(e, t) {
    return jo(er(e)) === jo(er(t));
  }
  const kf = Symbol.for("ufo:protocolRelative");
  na = function(e = "", t) {
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
    if (!Mt(e, {
      acceptRelative: true
    })) return ll(e);
    const [, r = "", o, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: l, search: u, hash: c } = ll(a);
    return {
      protocol: r.toLowerCase(),
      auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
      host: i,
      pathname: l,
      search: u,
      hash: c,
      [kf]: !r
    };
  };
  function ll(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
      pathname: t,
      search: n,
      hash: r
    };
  }
  function Ym(e) {
    const t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", o = e.auth ? e.auth + "@" : "", s = e.host || "";
    return (e.protocol || e[kf] ? (e.protocol || "") + "//" : "") + o + s + t + n + r;
  }
  class Qm extends Error {
    constructor(t, n) {
      super(t, n), this.name = "FetchError", (n == null ? void 0 : n.cause) && !this.cause && (this.cause = n.cause);
    }
  }
  function Xm(e) {
    var _a, _b2, _c2, _d2, _e2;
    const t = ((_a = e.error) == null ? void 0 : _a.message) || ((_b2 = e.error) == null ? void 0 : _b2.toString()) || "", n = ((_c2 = e.request) == null ? void 0 : _c2.method) || ((_d2 = e.options) == null ? void 0 : _d2.method) || "GET", r = ((_e2 = e.request) == null ? void 0 : _e2.url) || String(e.request) || "/", o = `[${n}] ${JSON.stringify(r)}`, s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", i = `${o}: ${s}${t ? ` ${t}` : ""}`, a = new Qm(i, e.error ? {
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
  const Zm = new Set(Object.freeze([
    "PATCH",
    "POST",
    "PUT",
    "DELETE"
  ]));
  function cl(e = "GET") {
    return Zm.has(e.toUpperCase());
  }
  function eg(e) {
    if (e === void 0) return false;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? true : t !== "object" ? false : Array.isArray(e) ? true : e.buffer ? false : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function";
  }
  const tg = /* @__PURE__ */ new Set([
    "image/svg",
    "application/xml",
    "application/xhtml",
    "application/html"
  ]), ng = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
  function rg(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return ng.test(t) ? "json" : tg.has(t) || t.startsWith("text/") ? "text" : "blob";
  }
  function og(e, t, n, r) {
    const o = sg((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
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
  function sg(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e) for (const [o, s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(o, s);
    return r;
  }
  async function fo(e, t) {
    if (t) if (Array.isArray(t)) for (const n of t) await n(e);
    else await t(e);
  }
  const ig = /* @__PURE__ */ new Set([
    408,
    409,
    425,
    429,
    500,
    502,
    503,
    504
  ]), ag = /* @__PURE__ */ new Set([
    101,
    204,
    205,
    304
  ]);
  function Ef(e = {}) {
    const { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: r = globalThis.AbortController } = e;
    async function o(a) {
      const l = a.error && a.error.name === "AbortError" && !a.options.timeout || false;
      if (a.options.retry !== false && !l) {
        let c;
        typeof a.options.retry == "number" ? c = a.options.retry : c = cl(a.options.method) ? 0 : 1;
        const f = a.response && a.response.status || 500;
        if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : ig.has(f))) {
          const h = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
          return h > 0 && await new Promise((d) => setTimeout(d, h)), s(a.request, {
            ...a.options,
            retry: c - 1
          });
        }
      }
      const u = Xm(a);
      throw Error.captureStackTrace && Error.captureStackTrace(u, s), u;
    }
    const s = async function(l, u = {}) {
      const c = {
        request: l,
        options: og(l, u, e.defaults, n),
        response: void 0,
        error: void 0
      };
      c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await fo(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = qm(c.request, c.options.baseURL)), c.options.query && (c.request = _f(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && cl(c.options.method) && (eg(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
      let f;
      if (!c.options.signal && c.options.timeout) {
        const d = new r();
        f = setTimeout(() => {
          const m = new Error("[TimeoutError]: The operation was aborted due to timeout");
          m.name = "TimeoutError", m.code = 23, d.abort(m);
        }, c.options.timeout), c.options.signal = d.signal;
      }
      try {
        c.response = await t(c.request, c.options);
      } catch (d) {
        return c.error = d, c.options.onRequestError && await fo(c, c.options.onRequestError), await o(c);
      } finally {
        f && clearTimeout(f);
      }
      if ((c.response.body || c.response._bodyInit) && !ag.has(c.response.status) && c.options.method !== "HEAD") {
        const d = (c.options.parseResponse ? "json" : c.options.responseType) || rg(c.response.headers.get("content-type") || "");
        switch (d) {
          case "json": {
            const m = await c.response.text(), g = c.options.parseResponse || Br;
            c.response._data = g(m);
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
      return c.options.onResponse && await fo(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await fo(c, c.options.onResponseError), await o(c)) : c.response;
    }, i = async function(l, u) {
      return (await s(l, u))._data;
    };
    return i.raw = s, i.native = (...a) => t(...a), i.create = (a = {}, l = {}) => Ef({
      ...e,
      ...l,
      defaults: {
        ...e.defaults,
        ...l.defaults,
        ...a
      }
    }), i;
  }
  const Fo = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  }(), lg = Fo.fetch ? (...e) => Fo.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")), cg = Fo.Headers, ug = Fo.AbortController, fg = Ef({
    fetch: lg,
    Headers: cg,
    AbortController: ug
  }), dg = fg, hg = () => {
    var _a;
    return ((_a = window == null ? void 0 : window.__NUXT__) == null ? void 0 : _a.config) || {};
  }, Ho = hg().app, pg = () => Ho.baseURL, mg = () => Ho.buildAssetsDir, ra = (...e) => Sf(Rf(), mg(), ...e), Rf = (...e) => {
    const t = Ho.cdnURL || Ho.baseURL;
    return e.length ? Sf(t, ...e) : t;
  };
  globalThis.__buildAssetsURL = ra, globalThis.__publicAssetsURL = Rf;
  globalThis.$fetch || (globalThis.$fetch = dg.create({
    baseURL: pg()
  }));
  function vi(e, t = {}, n) {
    for (const r in e) {
      const o = e[r], s = n ? `${n}:${r}` : r;
      typeof o == "object" && o !== null ? vi(o, t, s) : typeof o == "function" && (t[s] = o);
    }
    return t;
  }
  const gg = {
    run: (e) => e()
  }, yg = () => gg, Tf = typeof console.createTask < "u" ? console.createTask : yg;
  function vg(e, t) {
    const n = t.shift(), r = Tf(n);
    return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve());
  }
  function bg(e, t) {
    const n = t.shift(), r = Tf(n);
    return Promise.all(e.map((o) => r.run(() => o(...t))));
  }
  function $s(e, t) {
    for (const n of [
      ...e
    ]) n(t);
  }
  class _g {
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
      const n = vi(t), r = Object.keys(n).map((o) => this.hook(o, n[o]));
      return () => {
        for (const o of r.splice(0, r.length)) o();
      };
    }
    removeHooks(t) {
      const n = vi(t);
      for (const r in n) this.removeHook(r, n[r]);
    }
    removeAllHooks() {
      for (const t in this._hooks) delete this._hooks[t];
    }
    callHook(t, ...n) {
      return n.unshift(t), this.callHookWith(vg, t, ...n);
    }
    callHookParallel(t, ...n) {
      return n.unshift(t), this.callHookWith(bg, t, ...n);
    }
    callHookWith(t, n, ...r) {
      const o = this._before || this._after ? {
        name: n,
        args: r,
        context: {}
      } : void 0;
      this._before && $s(this._before, o);
      const s = t(n in this._hooks ? [
        ...this._hooks[n]
      ] : [], r);
      return s instanceof Promise ? s.finally(() => {
        this._after && o && $s(this._after, o);
      }) : (this._after && o && $s(this._after, o), s);
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
  function Cf() {
    return new _g();
  }
  function wg(e = {}) {
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
        bi.add(u);
        try {
          const c = o ? o.run(i, a) : a();
          return n || (t = void 0), await c;
        } finally {
          bi.delete(u);
        }
      }
    };
  }
  function Sg(e = {}) {
    const t = {};
    return {
      get(n, r = {}) {
        return t[n] || (t[n] = wg({
          ...e,
          ...r
        })), t[n];
      }
    };
  }
  const Uo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}, ul = "__unctx__", kg = Uo[ul] || (Uo[ul] = Sg()), Eg = (e, t = {}) => kg.get(e, t), fl = "__unctx_async_handlers__", bi = Uo[fl] || (Uo[fl] = /* @__PURE__ */ new Set());
  function zn(e) {
    const t = [];
    for (const o of bi) {
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
  let Rg, _i, Tg, Cg, dl, Pg, fn, Ag, xg, Pf, hl, Og;
  Rg = false;
  _i = false;
  Tg = true;
  Cg = false;
  dl = {
    id: "__nuxt-loader"
  };
  Pg = {
    componentName: "NuxtLink",
    prefetch: true,
    prefetchOn: {
      visibility: true
    }
  };
  fn = {
    deep: false
  };
  Ag = void 0;
  CS = {};
  xg = "#__nuxt";
  Pf = "nuxt-app";
  hl = 36e5;
  Og = "vite:preloadError";
  function Af(e = Pf) {
    return Eg(e, {
      asyncContext: false
    });
  }
  const Lg = "__nuxt_plugin";
  function Mg(e) {
    var _a;
    let t = 0;
    const n = {
      _id: e.id || Pf || "nuxt-app",
      _scope: Vr(),
      provide: void 0,
      globalName: "nuxt",
      versions: {
        get nuxt() {
          return "3.17.1";
        },
        get vue() {
          return n.vueApp.version;
        }
      },
      payload: Ft({
        ...((_a = e.ssrContext) == null ? void 0 : _a.payload) || {},
        data: Ft({}),
        state: Lt({}),
        once: /* @__PURE__ */ new Set(),
        _errors: Ft({})
      }),
      static: {
        data: {}
      },
      runWithContext(o) {
        return n._scope.active && !Kt() ? n._scope.run(() => pl(n, o)) : pl(n, o);
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
      _asyncData: Ft({}),
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
    n.hooks = Cf(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (o, s) => {
      const i = "$" + o;
      ho(n, i, s), ho(n.vueApp.config.globalProperties, i, s);
    }, ho(n.vueApp, "$nuxt", n), ho(n.vueApp.config.globalProperties, "$nuxt", n);
    {
      window.addEventListener(Og, (s) => {
        n.callHook("app:chunkError", {
          error: s.payload
        }), (n.isHydrating || s.payload.message.includes("Unable to preload CSS")) && s.preventDefault();
      }), window.useNuxtApp || (window.useNuxtApp = ye);
      const o = n.hook("app:error", (...s) => {
        console.error("[nuxt] error caught during app initialization", ...s);
      });
      n.hook("app:mounted", o);
    }
    const r = n.payload.config;
    return n.provide("config", r), n;
  }
  function Ig(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks);
  }
  async function $g(e, t) {
    if (typeof t == "function") {
      const { provide: n } = await e.runWithContext(() => t(e)) || {};
      if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
    }
  }
  async function Ng(e, t) {
    const n = [], r = [], o = [], s = [];
    let i = 0;
    async function a(l) {
      var _a;
      const u = ((_a = l.dependsOn) == null ? void 0 : _a.filter((c) => t.some((f) => f._name === c) && !n.includes(c))) ?? [];
      if (u.length > 0) r.push([
        new Set(u),
        l
      ]);
      else {
        const c = $g(e, l).then(async () => {
          l._name && (n.push(l._name), await Promise.all(r.map(async ([f, h]) => {
            f.has(l._name) && (f.delete(l._name), f.size === 0 && (i++, await a(h)));
          })));
        });
        l.parallel ? o.push(c.catch((f) => s.push(f))) : await c;
      }
    }
    for (const l of t) Ig(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(o), i) for (let l = 0; l < i; l++) await Promise.all(o);
    if (s.length) throw s[0];
  }
  function Ie(e) {
    if (typeof e == "function") return e;
    const t = e._name || e.name;
    return delete e.name, Object.assign(e.setup || (() => {
    }), e, {
      [Lg]: true,
      _name: t
    });
  }
  const xf = Ie;
  function pl(e, t, n) {
    const r = () => t();
    return Af(e._id).set(e), e.vueApp.runWithContext(r);
  }
  function Bg(e) {
    var _a;
    let t;
    return sr() && (t = (_a = lt()) == null ? void 0 : _a.appContext.app.$nuxt), t || (t = Af(e).tryUse()), t || null;
  }
  ye = function(e) {
    const t = Bg(e);
    if (!t) throw new Error("[nuxt] instance unavailable");
    return t;
  };
  yn = function(e) {
    return ye().$config;
  };
  function ho(e, t, n) {
    Object.defineProperty(e, t, {
      get: () => n
    });
  }
  function Dg(e, t) {
    return {
      ctx: {
        table: e
      },
      matchAll: (n) => Lf(n, e)
    };
  }
  function Of(e) {
    const t = {};
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, o]) => [
      r,
      Of(o)
    ])) : new Map(Object.entries(e[n]));
    return t;
  }
  function jg(e) {
    return Dg(Of(e));
  }
  function Lf(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s, i] of ml(t.wildcard)) (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s, i] of ml(t.dynamic)) if (e.startsWith(s + "/")) {
      const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
      r.push(...Lf(a, i));
    }
    const o = t.static.get(e);
    return o && r.push(o), r.filter(Boolean);
  }
  function ml(e) {
    return [
      ...e.entries()
    ].sort((t, n) => t[0].length - n[0].length);
  }
  function Ns(e) {
    if (e === null || typeof e != "object") return false;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? false : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : true;
  }
  function wi(e, t, n = ".", r) {
    if (!Ns(t)) return wi(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
      if (s === "__proto__" || s === "constructor") continue;
      const i = e[s];
      i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [
        ...i,
        ...o[s]
      ] : Ns(i) && Ns(o[s]) ? o[s] = wi(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i));
    }
    return o;
  }
  function Fg(e) {
    return (...t) => t.reduce((n, r) => wi(n, r, "", e), {});
  }
  Mf = Fg();
  function Hg(e, t) {
    try {
      return t in e;
    } catch {
      return false;
    }
  }
  class gl extends Error {
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
        statusCode: Si(this.statusCode, 500)
      };
      return this.statusMessage && (t.statusMessage = If(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t;
    }
  }
  __publicField(gl, "__h3_error__", true);
  function Ro(e) {
    if (typeof e == "string") return new gl(e);
    if (Ug(e)) return e;
    const t = new gl(e.message ?? e.statusMessage ?? "", {
      cause: e.cause || e
    });
    if (Hg(e, "stack")) try {
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
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Si(e.statusCode, t.statusCode) : e.status && (t.statusCode = Si(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
      const n = t.statusMessage;
      If(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.");
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t;
  }
  function Ug(e) {
    var _a;
    return ((_a = e == null ? void 0 : e.constructor) == null ? void 0 : _a.__h3_error__) === true;
  }
  const Vg = /[^\u0009\u0020-\u007E]/g;
  function If(e = "") {
    return e.replace(Vg, "");
  }
  function Si(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
  }
  let $f, zr;
  $f = Symbol("layout-meta");
  zr = Symbol("route");
  Me = () => {
    var _a;
    return (_a = ye()) == null ? void 0 : _a.$router;
  };
  ds = () => sr() ? Re(zr, ye()._route) : ye()._route;
  let Wg;
  Wg = () => {
    try {
      if (ye()._processingMiddleware) return true;
    } catch {
      return false;
    }
    return false;
  };
  qg = (e, t) => {
    e || (e = "/");
    const n = typeof e == "string" ? e : "path" in e ? ki(e) : Me().resolve(e).href;
    if (t == null ? void 0 : t.open) {
      const { target: l = "_blank", windowFeatures: u = {} } = t.open, c = Object.entries(u).filter(([f, h]) => h !== void 0).map(([f, h]) => `${f.toLowerCase()}=${h}`).join(", ");
      return open(n, l, c), Promise.resolve();
    }
    const r = Mt(n, {
      acceptRelative: true
    }), o = (t == null ? void 0 : t.external) || r;
    if (o) {
      if (!(t == null ? void 0 : t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const { protocol: l } = new URL(n, window.location.href);
      if (l && Vm(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const s = Wg();
    if (!o && s) {
      if (t == null ? void 0 : t.replace) {
        if (typeof e == "string") {
          const { pathname: l, search: u, hash: c } = na(e);
          return {
            path: l,
            ...u && {
              query: us(u)
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
    const i = Me(), a = ye();
    return o ? (a._scope.stop(), (t == null ? void 0 : t.replace) ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {
    }) : false : Promise.resolve()) : (t == null ? void 0 : t.replace) ? i.replace(e) : i.push(e);
  };
  function ki(e) {
    return _f(e.path || "", e.query || {}) + (e.hash || "");
  }
  let Nf, hs, rn, Bf, Df, Kg;
  Nf = "__nuxt_error";
  hs = () => rs(ye().payload, "error");
  rn = (e) => {
    const t = Jr(e);
    try {
      const n = ye(), r = hs();
      n.hooks.callHook("app:error", t), r.value || (r.value = t);
    } catch {
      throw t;
    }
    return t;
  };
  Bf = async (e = {}) => {
    const t = ye(), n = hs();
    t.callHook("app:error:cleared", e), e.redirect && await Me().replace(e.redirect), n.value = Ag;
  };
  Df = (e) => !!e && typeof e == "object" && Nf in e;
  Jr = (e) => {
    const t = Ro(e);
    return Object.defineProperty(t, Nf, {
      value: true,
      configurable: false,
      writable: false
    }), t;
  };
  Kg = {
    trailing: true
  };
  function Gg(e, t = 25, n = {}) {
    if (n = {
      ...Kg,
      ...n
    }, !Number.isFinite(t)) throw new TypeError("Expected `wait` to be a finite number");
    let r, o, s = [], i, a;
    const l = (u, c) => (i = zg(e, u, c), i.finally(() => {
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
          const h = n.leading ? r : l(this, u);
          for (const d of s) d(h);
          s = [];
        }, t), f ? (r = l(this, u), c(r)) : s.push(c);
      });
    };
  }
  async function zg(e, t, n) {
    return await e.apply(t, n);
  }
  let oa;
  const Yr = (e) => oa = e, Jg = () => sr() && Re(sa) || oa, sa = Symbol();
  function Ei(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Tr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Tr || (Tr = {}));
  function Yg() {
    const e = Vr(true), t = e.run(() => $e({}));
    let n = [], r = [];
    const o = qn({
      install(s) {
        Yr(o), o._a = s, s.provide(sa, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
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
  const jf = () => {
  };
  function yl(e, t, n, r = jf) {
    e.push(t);
    const o = () => {
      const s = e.indexOf(t);
      s > -1 && (e.splice(s, 1), r());
    };
    return !n && Kt() && Cn(o), o;
  }
  function Nn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const Qg = (e) => e(), vl = Symbol(), Bs = Symbol();
  function Ri(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], o = e[n];
      Ei(o) && Ei(r) && e.hasOwnProperty(n) && !_e(r) && !Ot(r) ? e[n] = Ri(o, r) : e[n] = r;
    }
    return e;
  }
  const Ff = Symbol();
  function Xg(e) {
    return Object.defineProperty(e, Ff, {});
  }
  function Zg(e) {
    return !Ei(e) || !Object.prototype.hasOwnProperty.call(e, Ff);
  }
  const { assign: Zt } = Object;
  function ey(e) {
    return !!(_e(e) && e.effect);
  }
  function ty(e, t, n, r) {
    const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
    let l;
    function u() {
      a || (n.state.value[e] = o ? o() : {});
      const c = Ch(n.state.value[e]);
      return Zt(c, s, Object.keys(i || {}).reduce((f, h) => (f[h] = qn(Y(() => {
        Yr(n);
        const d = n._s.get(e);
        return i[h].call(d, d);
      })), f), {}));
    }
    return l = Hf(e, u, t, n, r, true), l;
  }
  function Hf(e, t, n = {}, r, o, s) {
    let i;
    const a = Zt({
      actions: {}
    }, n), l = {
      deep: true
    };
    let u, c, f = [], h = [], d;
    const m = r.state.value[e];
    !s && !m && (r.state.value[e] = {}), $e({});
    let g;
    function S(N) {
      let C;
      u = c = false, typeof N == "function" ? (N(r.state.value[e]), C = {
        type: Tr.patchFunction,
        storeId: e,
        events: d
      }) : (Ri(r.state.value[e], N), C = {
        type: Tr.patchObject,
        payload: N,
        storeId: e,
        events: d
      });
      const O = g = Symbol();
      Vt().then(() => {
        g === O && (u = true);
      }), c = true, Nn(f, C, r.state.value[e]);
    }
    const k = s ? function() {
      const { state: C } = n, O = C ? C() : {};
      this.$patch((E) => {
        Zt(E, O);
      });
    } : jf;
    function w() {
      i.stop(), f = [], h = [], r._s.delete(e);
    }
    const p = (N, C = "") => {
      if (vl in N) return N[Bs] = C, N;
      const O = function() {
        Yr(r);
        const E = Array.from(arguments), T = [], B = [];
        function X(K) {
          T.push(K);
        }
        function Z(K) {
          B.push(K);
        }
        Nn(h, {
          args: E,
          name: O[Bs],
          store: _,
          after: X,
          onError: Z
        });
        let F;
        try {
          F = N.apply(this && this.$id === e ? this : _, E);
        } catch (K) {
          throw Nn(B, K), K;
        }
        return F instanceof Promise ? F.then((K) => (Nn(T, K), K)).catch((K) => (Nn(B, K), Promise.reject(K))) : (Nn(T, F), F);
      };
      return O[vl] = true, O[Bs] = C, O;
    }, v = {
      _p: r,
      $id: e,
      $onAction: yl.bind(null, h),
      $patch: S,
      $reset: k,
      $subscribe(N, C = {}) {
        const O = yl(f, N, C.detached, () => E()), E = i.run(() => nt(() => r.state.value[e], (T) => {
          (C.flush === "sync" ? c : u) && N({
            storeId: e,
            type: Tr.direct,
            events: d
          }, T);
        }, Zt({}, l, C)));
        return O;
      },
      $dispose: w
    }, _ = Lt(v);
    r._s.set(e, _);
    const M = (r._a && r._a.runWithContext || Qg)(() => r._e.run(() => (i = Vr()).run(() => t({
      action: p
    }))));
    for (const N in M) {
      const C = M[N];
      if (_e(C) && !ey(C) || Ot(C)) s || (m && Zg(C) && (_e(C) ? C.value = m[N] : Ri(C, m[N])), r.state.value[e][N] = C);
      else if (typeof C == "function") {
        const O = p(C, N);
        M[N] = O, a.actions[N] = C;
      }
    }
    return Zt(_, M), Zt(re(_), M), Object.defineProperty(_, "$state", {
      get: () => r.state.value[e],
      set: (N) => {
        S((C) => {
          Zt(C, N);
        });
      }
    }), r._p.forEach((N) => {
      Zt(_, i.run(() => N({
        store: _,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), m && s && n.hydrate && n.hydrate(_.$state, m), u = true, c = true, _;
  }
  ny = function(e, t, n) {
    let r;
    const o = typeof t == "function";
    r = o ? n : t;
    function s(i, a) {
      const l = sr();
      return i = i || (l ? Re(sa, null) : null), i && Yr(i), i = oa, i._s.has(e) || (o ? Hf(e, t, r, i) : ty(e, r, i)), i._s.get(e);
    }
    return s.$id = e, s;
  };
  PS = function(e) {
    const t = re(e), n = {};
    for (const r in t) {
      const o = t[r];
      o.effect ? n[r] = Y({
        get: () => e[r],
        set(s) {
          e[r] = s;
        }
      }) : (_e(o) || Ot(o)) && (n[r] = rs(e, r));
    }
    return n;
  };
  function bl(e) {
    const t = oy(e), n = new ArrayBuffer(t.length), r = new DataView(n);
    for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
    return n;
  }
  const ry = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function oy(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "", n = 0, r = 0;
    for (let o = 0; o < e.length; o++) n <<= 6, n |= ry.indexOf(e[o]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
  }
  const sy = -1, iy = -2, ay = -3, ly = -4, cy = -5, uy = -6;
  function fy(e, t) {
    return dy(JSON.parse(e), t);
  }
  function dy(e, t) {
    if (typeof e == "number") return o(e, true);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e, r = Array(n.length);
    function o(s, i = false) {
      if (s === sy) return;
      if (s === ay) return NaN;
      if (s === ly) return 1 / 0;
      if (s === cy) return -1 / 0;
      if (s === uy) return -0;
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
            const h = /* @__PURE__ */ Object.create(null);
            r[s] = h;
            for (let d = 1; d < a.length; d += 2) h[a[d]] = o(a[d + 1]);
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
            const d = globalThis[l], m = a[1], g = bl(m), S = new d(g);
            r[s] = S;
            break;
          }
          case "ArrayBuffer": {
            const d = a[1], m = bl(d);
            r[s] = m;
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
          c !== iy && (l[u] = o(c));
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
  const hy = /* @__PURE__ */ new Set([
    "link",
    "style",
    "script",
    "noscript"
  ]), py = /* @__PURE__ */ new Set([
    "title",
    "titleTemplate",
    "script",
    "style",
    "noscript"
  ]), _l = /* @__PURE__ */ new Set([
    "base",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), my = /* @__PURE__ */ new Set([
    "title",
    "base",
    "htmlAttrs",
    "bodyAttrs",
    "meta",
    "link",
    "style",
    "script",
    "noscript"
  ]), gy = /* @__PURE__ */ new Set([
    "base",
    "title",
    "titleTemplate",
    "bodyAttrs",
    "htmlAttrs",
    "templateParams"
  ]), yy = /* @__PURE__ */ new Set([
    "key",
    "tagPosition",
    "tagPriority",
    "tagDuplicateStrategy",
    "innerHTML",
    "textContent",
    "processTemplateParams"
  ]), vy = /* @__PURE__ */ new Set([
    "templateParams",
    "htmlAttrs",
    "bodyAttrs"
  ]), ia = /* @__PURE__ */ new Set([
    "theme-color",
    "google-site-verification",
    "og",
    "article",
    "book",
    "profile",
    "twitter",
    "author"
  ]), Dr = {
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
  }, by = {
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
  }, Uf = {
    appleItunesApp: {
      unpack: {
        entrySeparator: ", ",
        resolve: ({ key: e, value: t }) => `${Ht(e)}=${t}`
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
        resolve: ({ key: e, value: t }) => typeof t == "boolean" ? Ht(e) : `${Ht(e)}:${t}`
      }
    },
    contentSecurityPolicy: {
      metaKey: "http-equiv",
      unpack: {
        entrySeparator: "; ",
        resolve: ({ key: e, value: t }) => `${Ht(e)} ${t}`
      }
    },
    charset: {}
  };
  function Ht(e) {
    const t = e.replace(/([A-Z])/g, "-$1").toLowerCase(), n = t.indexOf("-");
    return n === -1 ? t : Dr.META.has(t.slice(0, n)) || Dr.OG.has(t.slice(0, n)) ? e.replace(/([A-Z])/g, ":$1").toLowerCase() : t;
  }
  function Vf(e) {
    return Object.fromEntries(Object.entries(e).filter(([t, n]) => String(n) !== "false" && t));
  }
  function Ti(e) {
    return Array.isArray(e) ? e.map(Ti) : !e || typeof e != "object" ? e : Object.fromEntries(Object.entries(e).map(([t, n]) => [
      Ht(t),
      Ti(n)
    ]));
  }
  function Wf(e, t = {}) {
    const { entrySeparator: n = "", keyValueSeparator: r = "", wrapValue: o, resolve: s } = t;
    return Object.entries(e).map(([i, a]) => {
      if (s) {
        const u = s({
          key: i,
          value: a
        });
        if (u !== void 0) return u;
      }
      const l = typeof a == "object" ? Wf(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && o ? `${o}${a.replace(new RegExp(o, "g"), `\\${o}`)}${o}` : a;
      return `${i}${r}${l}`;
    }).join(n);
  }
  function wl(e, t) {
    const n = Vf(t), r = Ht(e), o = qf(r);
    if (!ia.has(r)) return [
      {
        [o]: r,
        ...n
      }
    ];
    const s = Object.fromEntries(Object.entries(n).map(([i, a]) => [
      `${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`,
      a
    ]));
    return Vo(s || {}).sort((i, a) => {
      var _a, _b2;
      return (((_a = i[o]) == null ? void 0 : _a.length) || 0) - (((_b2 = a[o]) == null ? void 0 : _b2.length) || 0);
    });
  }
  function qf(e) {
    var _a;
    if (((_a = Uf[e]) == null ? void 0 : _a.metaKey) === "http-equiv" || Dr.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = Ht(e), n = t.indexOf(":");
    return n === -1 ? "name" : Dr.OG.has(t.slice(0, n)) ? "property" : "name";
  }
  function _y(e) {
    return by[e] || Ht(e);
  }
  function wy(e, t) {
    var _a;
    return t === "refresh" ? `${e.seconds};url=${e.url}` : Wf(Ti(e), {
      keyValueSeparator: "=",
      entrySeparator: ", ",
      resolve: ({ value: n, key: r }) => n === null ? "" : typeof n == "boolean" ? r : void 0,
      ...(_a = Uf[t]) == null ? void 0 : _a.unpack
    });
  }
  function Vo(e) {
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
            const f = `${o}${u === "url" ? "" : `:${u}`}`, h = Vo({
              [f]: c
            });
            (u === "url" ? a : l).push(...h);
          }
          t.push(...a, ...l);
        } else t.push(...typeof i == "string" ? Vo({
          [o]: i
        }) : wl(o, i));
        continue;
      }
      if (typeof s == "object" && s) if (Dr.MEDIA.has(o)) {
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
      } else ia.has(Ht(o)) ? t.push(...wl(o, s)) : n[o] = Vf(s);
      else n[o] = s;
    }
    const r = Object.entries(n).map(([o, s]) => {
      if (o === "charset") return {
        charset: s === null ? "_null" : s
      };
      const i = qf(o), a = _y(o), l = s === null ? "_null" : typeof s == "object" ? wy(s, o) : typeof s == "number" ? s.toString() : s;
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
  const Sy = {
    key: "flatMeta",
    hooks: {
      "entries:normalize": (e) => {
        const t = [];
        e.tags = e.tags.map((n) => n.tag !== "_flatMeta" ? n : (t.push(Vo(n.props).map((r) => ({
          ...n,
          tag: "meta",
          props: r
        }))), false)).filter(Boolean).concat(...t);
      }
    }
  }, ky = [
    "name",
    "property",
    "http-equiv"
  ];
  function Kf(e) {
    const t = e.split(":")[1];
    return ia.has(t);
  }
  function Ci(e) {
    const { props: t, tag: n } = e;
    if (gy.has(n)) return n;
    if (n === "link" && t.rel === "canonical") return "canonical";
    if (t.charset) return "charset";
    if (e.tag === "meta") {
      for (const r of ky) if (t[r] !== void 0) return `${n}:${t[r]}`;
    }
    if (e.key) return `${n}:key:${e.key}`;
    if (t.id) return `${n}:id:${t.id}`;
    if (py.has(n)) {
      const r = e.textContent || e.innerHTML;
      if (r) return `${n}:content:${r}`;
    }
  }
  function Sl(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([r, o]) => `${r}:${String(o)}`).join(",")}`;
  }
  function Wo(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let o;
    if (t && (o = t(n, e)), Array.isArray(o)) return o.map((s) => Wo(s, t));
    if ((o == null ? void 0 : o.constructor) === Object) {
      const s = {};
      for (const i of Object.keys(o)) s[i] = Wo(o[i], t, i);
      return s;
    }
    return o;
  }
  function Ey(e, t) {
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
  function Gf(e, t) {
    return e.props = e.props || {}, t && Object.entries(t).forEach(([n, r]) => {
      if (r === null) {
        e.props[n] = null;
        return;
      }
      if (n === "class" || n === "style") {
        e.props[n] = Ey(n, r);
        return;
      }
      if (yy.has(n)) {
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
  function Ry(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
      [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, r = Gf({
      tag: e,
      props: {}
    }, n);
    return r.key && hy.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map((o) => ({
      ...r,
      props: {
        ...r.props,
        content: o
      }
    })) : r;
  }
  function Ty(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (o, s) => {
      for (let i = 0; i < t.length; i++) s = t[i](o, s);
      return s;
    };
    e = n(void 0, e);
    const r = [];
    return e = Wo(e, n), Object.entries(e || {}).forEach(([o, s]) => {
      if (s !== void 0) for (const i of Array.isArray(s) ? s : [
        s
      ]) r.push(Ry(o, i));
    }), r.flat();
  }
  const kl = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w, El = {
    base: -10,
    title: 10
  }, Cy = {
    critical: -8,
    high: -1,
    low: 2
  }, Rl = {
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
  }, Py = /@import/, pr = (e) => e === "" || e === true;
  function Ay(e, t) {
    var _a;
    if (typeof t.tagPriority == "number") return t.tagPriority;
    let n = 100;
    const r = Cy[t.tagPriority] || 0, o = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : Rl;
    if (t.tag in El) n = El[t.tag];
    else if (t.tag === "meta") {
      const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
      s && (n = Rl.meta[s]);
    } else t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? pr(t.props.async) ? n = o.script.async : t.props.src && !pr(t.props.defer) && !pr(t.props.async) && t.props.type !== "module" && !((_a = t.props.type) == null ? void 0 : _a.endsWith("json")) ? n = o.script.sync : pr(t.props.defer) && t.props.src && !pr(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && Py.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r;
  }
  function Tl(e, t) {
    const n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
  }
  function xy(e = {}) {
    var _a;
    const t = Cf();
    t.addHooks(e.hooks || {});
    const n = !e.document, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = [], i = {
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
      use: (a) => Tl(i, a),
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
            i.dirty = true, !d && s.push(c), t.callHook("entries:updated", i);
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
        var _a2;
        const a = {
          tagMap: /* @__PURE__ */ new Map(),
          tags: [],
          entries: [
            ...i.entries.values()
          ]
        };
        for (await t.callHook("entries:resolve", a); s.length; ) {
          const h = s.shift(), d = r.get(h);
          if (d) {
            const m = {
              tags: Ty(d.input, e.propResolvers || []).map((g) => Object.assign(g, d.options)),
              entry: d
            };
            await t.callHook("entries:normalize", m), d._tags = m.tags.map((g, S) => (g._w = Ay(i, g), g._p = (d._i << 10) + S, g._d = Ci(g), g));
          }
        }
        let l = false;
        a.entries.flatMap((h) => (h._tags || []).map((d) => ({
          ...d,
          props: {
            ...d.props
          }
        }))).sort(kl).reduce((h, d) => {
          const m = String(d._d || d._p);
          if (!h.has(m)) return h.set(m, d);
          const g = h.get(m);
          if (((d == null ? void 0 : d.tagDuplicateStrategy) || (vy.has(d.tag) ? "merge" : null) || (d.key && d.key === g.key ? "merge" : null)) === "merge") {
            const k = {
              ...g.props
            };
            Object.entries(d.props).forEach(([w, p]) => k[w] = w === "style" ? new Map([
              ...g.props.style || /* @__PURE__ */ new Map(),
              ...p
            ]) : w === "class" ? /* @__PURE__ */ new Set([
              ...g.props.class || /* @__PURE__ */ new Set(),
              ...p
            ]) : p), h.set(m, {
              ...d,
              props: k
            });
          } else d._p >> 10 === g._p >> 10 && Kf(d._d) ? (h.set(m, Object.assign([
            ...Array.isArray(g) ? g : [
              g
            ],
            d
          ], d)), l = true) : (d._w === g._w ? d._p > g._p : (d == null ? void 0 : d._w) < (g == null ? void 0 : g._w)) && h.set(m, d);
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
        a.tags = Array.from(a.tagMap.values()), l && (a.tags = a.tags.flat().sort(kl)), await t.callHook("tags:beforeResolve", a), await t.callHook("tags:resolve", a), await t.callHook("tags:afterResolve", a);
        const f = [];
        for (const h of a.tags) {
          const { innerHTML: d, tag: m, props: g } = h;
          if (my.has(m) && !(Object.keys(g).length === 0 && !h.innerHTML && !h.textContent) && !(m === "meta" && !g.content && !g["http-equiv"] && !g.charset)) {
            if (m === "script" && d) {
              if ((_a2 = g.type) == null ? void 0 : _a2.endsWith("json")) {
                const S = typeof d == "string" ? d : JSON.stringify(d);
                h.innerHTML = S.replace(/</g, "\\u003C");
              } else typeof d == "string" && (h.innerHTML = d.replace(new RegExp(`</${m}`, "g"), `<\\/${m}`));
              h._d = Ci(h);
            }
            f.push(h);
          }
        }
        return f;
      }
    };
    return ((e == null ? void 0 : e.plugins) || []).forEach((a) => Tl(i, a)), i.hooks.callHook("init", i), (_a = e.init) == null ? void 0 : _a.forEach((a) => a && i.push(a)), i;
  }
  const Oy = (e, t) => _e(t) ? it(t) : t, aa = "usehead";
  function Ly(e) {
    return {
      install(n) {
        n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(aa, e);
      }
    }.install;
  }
  function zf() {
    if (sr()) {
      const e = Re(aa);
      if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function Jf(e, t = {}) {
    const n = t.head || zf();
    return n.ssr ? n.push(e || {}, t) : My(n, e, t);
  }
  function My(e, t, n = {}) {
    const r = $e(false);
    let o;
    return gp(() => {
      const i = r.value ? {} : Wo(t, Oy);
      o ? o.patch(i) : o = e.push(i, n);
    }), lt() && (On(() => {
      o.dispose();
    }), yu(() => {
      r.value = true;
    }), gu(() => {
      r.value = false;
    })), o;
  }
  function Iy(e = {}, t = {}) {
    (t.head || zf()).use(Sy);
    const { title: r, titleTemplate: o, ...s } = e;
    return Jf({
      title: r,
      titleTemplate: o,
      _flatMeta: s
    }, t);
  }
  Yf = function(e) {
    var _a;
    const t = e || ye();
    return ((_a = t.ssrContext) == null ? void 0 : _a.head) || t.runWithContext(() => {
      if (sr()) {
        const n = Re(aa);
        if (!n) throw new Error("[nuxt] [unhead] Missing Unhead instance.");
        return n;
      }
    });
  };
  Qf = function(e, t = {}) {
    const n = Yf(t.nuxt);
    return Jf(e, {
      head: n,
      ...t
    });
  };
  AS = function(e, t = {}) {
    const n = Yf(t.nuxt);
    return Iy(e, {
      head: n,
      ...t
    });
  };
  let $y, Ny, Cl;
  $y = "modulepreload";
  Ny = function(e, t) {
    return new URL(e, t).href;
  };
  Cl = {};
  jt = function(t, n, r) {
    let o = Promise.resolve();
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
      o = i(n.map((c) => {
        if (c = Ny(c, r), c in Cl) return;
        Cl[c] = true;
        const f = c.endsWith(".css"), h = f ? '[rel="stylesheet"]' : "";
        if (!!r) for (let g = a.length - 1; g >= 0; g--) {
          const S = a[g];
          if (S.href === c && (!f || S.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${c}"]${h}`)) return;
        const m = document.createElement("link");
        if (m.rel = f ? "stylesheet" : $y, f || (m.as = "script"), m.crossOrigin = "", m.href = c, u && m.setAttribute("nonce", u), document.head.appendChild(m), f) return new Promise((g, S) => {
          m.addEventListener("load", g), m.addEventListener("error", () => S(new Error(`Unable to preload CSS for ${c}`)));
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
  let To, Co;
  function By() {
    return To = $fetch(ra(`builds/meta/${yn().app.buildId}.json`), {
      responseType: "json"
    }), To.then((e) => {
      Co = jg(e.matcher);
    }).catch((e) => {
      console.error("[nuxt] Error fetching app manifest.", e);
    }), To;
  }
  function ps() {
    return To || By();
  }
  async function la(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await ps(), !Co) return console.error("[nuxt] Error creating app manifest matcher.", Co), {};
    try {
      return Mf({}, ...Co.matchAll(t).reverse());
    } catch (n) {
      return console.error("[nuxt] Error matching route rules.", n), {};
    }
  }
  async function Pl(e, t = {}) {
    if (!await Zf(e)) return null;
    const r = await jy(e, t);
    return await Xf(r) || null;
  }
  const Dy = "_payload.json";
  async function jy(e, t = {}) {
    const n = new URL(e, "http://localhost");
    if (n.host !== "localhost" || Mt(n.pathname, {
      acceptRelative: true
    })) throw new Error("Payload URL must not include hostname: " + e);
    const r = yn(), o = t.hash || (t.fresh ? Date.now() : r.app.buildId), s = r.app.cdnURL, i = s && await Zf(e) ? s : r.app.baseURL;
    return fs(i, n.pathname, Dy + (o ? `?${o}` : ""));
  }
  async function Xf(e) {
    const t = fetch(e, {
      cache: "force-cache"
    }).then((n) => n.text().then(ed));
    try {
      return await t;
    } catch (n) {
      console.warn("[nuxt] Cannot load payload ", e, n);
    }
    return null;
  }
  async function Zf(e = ds().path) {
    const t = ye();
    return e = er(e), (await ps()).prerendered.includes(e) ? true : t.runWithContext(async () => {
      const r = await la({
        path: e
      });
      return !!r.prerender && !r.redirect;
    });
  }
  let _n = null;
  async function Fy() {
    var _a;
    if (_n) return _n;
    const e = document.getElementById("__NUXT_DATA__");
    if (!e) return {};
    const t = await ed(e.textContent || ""), n = e.dataset.src ? await Xf(e.dataset.src) : void 0;
    return _n = {
      ...t,
      ...n,
      ...window.__NUXT__
    }, ((_a = _n.config) == null ? void 0 : _a.public) && (_n.config.public = Lt(_n.config.public)), _n;
  }
  async function ed(e) {
    return await fy(e, ye()._payloadRevivers);
  }
  function ca(e, t) {
    ye()._payloadRevivers[e] = t;
  }
  const Hy = xf(() => {
    ca("skipHydrate", (e) => {
    });
  });
  var td = class {
    constructor(...e) {
      __publicField(this, "value");
      __publicField(this, "children");
      __publicField(this, "parent");
      e.length && this.set(...e);
    }
    set([e, ...t], n) {
      var _a, _b2;
      if (e) {
        let r = (_a = this.children) == null ? void 0 : _a.get(e);
        r ? r.set(t, n) : (this.children ?? (this.children = /* @__PURE__ */ new Map()), r = new this.constructor(t, n), r.parent = this, this.children.set(e, r));
      } else if (this.value = n, n == null) {
        let r = this;
        for (; r == null ? void 0 : r.isEmpty(); ) (_b2 = r.children) == null ? void 0 : _b2.clear(), r = r.parent;
      }
    }
    isEmpty() {
      var _a;
      return this.value == null && Array.from(((_a = this.children) == null ? void 0 : _a.values()) || []).every((e) => e.isEmpty());
    }
    find([e, ...t]) {
      var _a, _b2;
      return e ? (_b2 = (_a = this.children) == null ? void 0 : _a.get(e)) == null ? void 0 : _b2.find(t) : this;
    }
    get(e) {
      var _a;
      return (_a = this.find(e)) == null ? void 0 : _a.value;
    }
    *[Symbol.iterator]() {
      if (this.value != null && (yield this.value), this.children) for (const e of this.children.values()) yield* e;
    }
  };
  function nd(e, [t, n, r], o, s = []) {
    e.children ?? (e.children = /* @__PURE__ */ new Map());
    const i = [
      ...s,
      t
    ], a = new td([], n && o(i, null, ...n));
    if (e.children.set(t, a), r) for (const l of r) nd(a, l, o, i);
  }
  function Al(e, t, n, r) {
    e.addEventListener(t, n, r), Kt() && Cn(() => {
      e.removeEventListener(t, n);
    });
  }
  var Uy = typeof window < "u";
  function xl(e, ...t) {
    return typeof e == "function" ? e(...t) : e;
  }
  function Vy(e) {
    return e && typeof e == "object" ? JSON.stringify(e, Object.keys(e).sort()) : String(e);
  }
  var po = (e) => e.map(Vy), Wy = () => {
  }, qy = {
    gcTime: 1e3 * 60
  }, Ky = Symbol(), rd = {
    staleTime: 1e3 * 5,
    gcTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
    enabled: true
  }, od = Symbol(), sd = () => Re(od, rd);
  function id(e) {
    return (e == null ? void 0 : e.placeholderData) != null && e.state.value.status === "pending";
  }
  var Ol = {}, Gy = "_pc_query", ua = ny(Gy, ({ action: e }) => {
    const t = new td();
    let n;
    const r = Xg(Gi((E, T) => (n = T) && {
      get: () => (E(), t),
      set: Wy
    })), o = Kt(), s = Jg()._a, i = sd(), a = e((E, T = null, B, X = null, Z = 0) => o.run(() => {
      const F = gt({
        data: B,
        error: X,
        status: X ? "error" : B !== void 0 ? "success" : "pending"
      }), K = gt("idle");
      return qn({
        key: E,
        state: F,
        placeholderData: null,
        when: Z,
        asyncStatus: K,
        pending: null,
        deps: qn(/* @__PURE__ */ new Set()),
        gcTimeout: void 0,
        ext: Ol,
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
    const u = /* @__PURE__ */ new WeakMap(), c = e((E) => {
      let T = u.get(E);
      return T ? (T[2].resume(), T[0] = T[0].map((B) => B.options ? S(B.options, B) : B)) : (l = T = [
        [],
        null,
        o.run(() => Vr())
      ], T[1] = s.runWithContext(() => T[2].run(E)), l = null, u.set(E, T)), T;
    });
    function f(E, T) {
      T && (E.deps.add(T), clearTimeout(E.gcTimeout), E.gcTimeout = void 0, n());
    }
    function h(E, T) {
      !T || !E.deps.has(T) || (E.deps.delete(T), n(), d(E));
    }
    function d(E) {
      E.deps.size > 0 || !E.options || (clearTimeout(E.gcTimeout), Number.isFinite(E.options.gcTime) && (E.gcTimeout = setTimeout(() => {
        O(E);
      }, E.options.gcTime)));
    }
    const m = e((E) => Promise.all(g({
      active: true,
      ...E
    }).map((T) => {
      var _a;
      return w(T), it((_a = T.options) == null ? void 0 : _a.enabled) && v(T);
    }))), g = e((E = {}) => {
      const T = E.key ? r.value.find(po(E.key)) : r.value;
      return T ? (E.exact ? T.value ? [
        T.value
      ] : [] : [
        ...T
      ]).filter((B) => (E.stale == null || B.stale === E.stale) && (E.active == null || B.active === E.active) && (!E.status || B.state.value.status === E.status) && (!E.predicate || E.predicate(B))) : [];
    }), S = e((E, T) => {
      var _a;
      const B = {
        ...i,
        ...E
      }, X = po(it(B.key));
      let Z = t.get(X);
      return Z || (t.set(X, Z = a(X, B, (_a = B.initialData) == null ? void 0 : _a.call(B))), B.placeholderData && Z.state.value.status === "pending" && (Z.placeholderData = xl(B.placeholderData, id(T) ? T.placeholderData : T == null ? void 0 : T.state.value.data)), n()), Z.options = B, Z.ext === Ol && (Z.ext = {}, k(Z)), l == null ? void 0 : l[0].push(Z), Z;
    }), k = e((E) => {
    }), w = e((E) => {
      E.when = 0, _(E);
    }), p = e(async (E, T = E.options) => {
      var _a;
      return E.state.value.error || E.stale ? ((_a = E.pending) == null ? void 0 : _a.refreshCall) ?? v(E, T) : E.state.value;
    }), v = e(async (E, T = E.options) => {
      var _a;
      E.asyncStatus.value = "loading";
      const B = new AbortController(), { signal: X } = B;
      (_a = E.pending) == null ? void 0 : _a.abortController.abort();
      const Z = E.pending = {
        abortController: B,
        refreshCall: (async () => T.query({
          signal: X
        }))().then((F) => (Z === E.pending && M(E, {
          data: F,
          error: null,
          status: "success"
        }), E.state.value)).catch((F) => {
          throw Z === E.pending && F && F.name !== "AbortError" && M(E, {
            status: "error",
            data: E.state.value.data,
            error: F
          }), F;
        }).finally(() => {
          E.asyncStatus.value = "idle", Z === E.pending && (E.pending = null, E.state.value.status !== "pending" && (E.placeholderData = null), E.when = Date.now());
        }),
        when: Date.now()
      };
      return Z.refreshCall;
    }), _ = e((E, T) => {
      var _a;
      (_a = E.pending) == null ? void 0 : _a.abortController.abort(T), E.asyncStatus.value = "idle", E.pending = null;
    }), A = e((E, T) => {
      g(E).forEach((B) => _(B, T));
    }), M = e((E, T) => {
      E.state.value = T, E.when = Date.now();
    }), N = e((E, T) => {
      const B = po(E);
      let X = t.get(B);
      X || t.set(B, X = a(B)), M(X, {
        error: null,
        status: "success",
        data: xl(T, X.state.value.data)
      }), d(X), n();
    });
    function C(E) {
      var _a;
      return (_a = r.value.get(po(E))) == null ? void 0 : _a.state.value.data;
    }
    const O = e((E) => {
      t.set(E.key), n();
    });
    return {
      caches: r,
      ensureDefinedQuery: c,
      _s: qn(o),
      setQueryData: N,
      getQueryData: C,
      invalidateQueries: m,
      cancelQueries: A,
      invalidate: w,
      fetch: v,
      refresh: p,
      ensure: S,
      extend: k,
      track: f,
      untrack: h,
      cancel: _,
      create: a,
      remove: O,
      setEntryState: M,
      getEntries: g
    };
  });
  function zy(e, t) {
    for (const n of t) nd(e.caches, n, e.create);
  }
  xS = function(e) {
    const t = ua(), n = sd(), r = lt(), o = Kt(), s = {
      ...n,
      ...e
    }, { refetchOnMount: i, refetchOnReconnect: a, refetchOnWindowFocus: l, enabled: u } = s;
    let c;
    const f = Y(() => (o == null ? void 0 : o._isPaused) ? c : c = t.ensure(s, c));
    c = f.value;
    const h = () => f.value.state.value, d = (v) => t.refresh(f.value, s).catch(v || h), m = (v) => t.fetch(f.value, s).catch(v || h), g = Y(() => id(f.value)), S = Y(() => g.value ? {
      status: "success",
      data: f.value.placeholderData,
      error: null
    } : f.value.state.value), k = {};
    for (const v in c.ext) k[v] = Y({
      get: () => it(f.value.ext[v]),
      set(_) {
        const A = f.value.ext[v];
        _e(A) ? A.value = _ : f.value.ext[v] = _;
      }
    });
    const w = {
      ...k,
      state: S,
      status: Y(() => S.value.status),
      data: Y(() => S.value.data),
      error: Y(() => f.value.state.value.error),
      asyncStatus: Y(() => f.value.asyncStatus.value),
      isPlaceholderData: g,
      isPending: Y(() => S.value.status === "pending"),
      isLoading: Y(() => f.value.asyncStatus.value === "loading"),
      refresh: d,
      refetch: m
    };
    let p = false;
    return r ? (pn(() => {
      p = true, t.track(c, r);
    }), ss(() => {
      t.untrack(c, r);
    })) : (p = true, o && (t.track(c, o), Cn(() => {
      t.untrack(c, o);
    }))), nt(f, (v, _) => {
      p && (_ && (t.untrack(_, r), t.untrack(_, o)), t.track(v, r), t.track(v, o), it(u) && d());
    }, {
      immediate: true
    }), typeof u != "boolean" && nt(u, (v) => {
      v && d();
    }), r && pn(() => {
      (i || w.status.value === "pending") && it(u) && (i === "always" ? m() : d());
    }), Uy && (l && Al(document, "visibilitychange", () => {
      document.visibilityState === "visible" && it(u) && (it(l) === "always" ? m() : d());
    }), a && Al(window, "online", () => {
      it(u) && (it(a) === "always" ? m() : d());
    })), w;
  };
  var Jy = (e, t = {}) => {
    const { pinia: n = e.config.globalProperties.$pinia, plugins: r, queryOptions: o, mutationOptions: s = {} } = t;
    e.provide(od, {
      ...rd,
      ...o
    }), e.provide(Ky, {
      ...qy,
      ...s
    });
    const i = ua(n);
    r == null ? void 0 : r.forEach((a) => a({
      scope: i._s,
      queryCache: i,
      pinia: n
    }));
  };
  Ll = function(e) {
    return typeof e == "string" ? `'${e}'` : new Yy().serialize(e);
  };
  const Yy = function() {
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
  Qy = function(e, t) {
    return e === t || Ll(e) === Ll(t);
  };
  let Pi, Xy, Zy;
  Pi = globalThis.requestIdleCallback || ((e) => {
    const t = Date.now(), n = {
      didTimeout: false,
      timeRemaining: () => Math.max(0, 50 - (Date.now() - t))
    };
    return setTimeout(() => {
      e(n);
    }, 1);
  });
  Xy = globalThis.cancelIdleCallback || ((e) => {
    clearTimeout(e);
  });
  ar = (e) => {
    const t = ye();
    t.isHydrating ? t.hooks.hookOnce("app:suspense:resolve", () => {
      Pi(() => e());
    }) : Pi(() => e());
  };
  Zy = (e) => e === "defer" || e === false;
  OS = function(...e) {
    var _a;
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && typeof e[0] != "object" && !(typeof e[0] == "function" && typeof e[1] == "function") && e.unshift(t);
    let [n, r, o = {}] = e;
    const s = Y(() => it(n));
    if (typeof s.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = ye(), a = () => fn.value, l = (g, S, k) => {
      if (S.isHydrating) return S.payload.data[g];
      if (k.cause !== "refresh:manual" && k.cause !== "refresh:hook") return S.static.data[g];
    };
    o.server ?? (o.server = true), o.default ?? (o.default = a), o.getCachedData ?? (o.getCachedData = l), o.lazy ?? (o.lazy = false), o.immediate ?? (o.immediate = true), o.deep ?? (o.deep = fn.deep), o.dedupe ?? (o.dedupe = "cancel"), o._functionName, i._asyncData[s.value];
    const u = o.getCachedData(s.value, i, {
      cause: "initial"
    });
    ((_a = i._asyncData[s.value]) == null ? void 0 : _a._deps) || (i._asyncData[s.value] = Il(i, s.value, r, o, u));
    const c = i._asyncData[s.value];
    c._deps++;
    const f = () => i._asyncData[s.value].execute({
      cause: "initial",
      dedupe: o.dedupe
    }), h = o.server !== false && i.payload.serverRendered;
    {
      let g = function(p) {
        const v = i._asyncData[p];
        (v == null ? void 0 : v._deps) && (v._deps--, v._deps === 0 && (v == null ? void 0 : v._off(), Ml(i, p), v.execute = () => Promise.resolve(), i._asyncData[p].data.value = fn.value));
      };
      const S = lt();
      if (S && h && o.immediate && !S.sp && (S.sp = []), S && !S._nuxtOnBeforeMountCbs) {
        S._nuxtOnBeforeMountCbs = [];
        const p = S._nuxtOnBeforeMountCbs;
        bu(() => {
          p.forEach((v) => {
            v();
          }), p.splice(0, p.length);
        }), ss(() => p.splice(0, p.length));
      }
      h && i.isHydrating && (c.error.value || u != null) ? c.status.value = c.error.value ? "error" : "success" : S && (i.payload.serverRendered && i.isHydrating || o.lazy) && o.immediate ? S._nuxtOnBeforeMountCbs.push(f) : o.immediate && f();
      const k = Kt(), w = nt([
        s,
        ...o.watch || []
      ], ([p], [v]) => {
        var _a2;
        if (v === p) {
          c._execute({
            cause: "watch",
            dedupe: o.dedupe
          });
          return;
        }
        v && g(v), ((_a2 = i._asyncData[p]) == null ? void 0 : _a2._deps) || (i._asyncData[p] = Il(i, p, r, o, o.getCachedData(p, i, {
          cause: "initial"
        }))), i._asyncData[p]._deps++, o.immediate && i._asyncData[p].execute({
          cause: "initial",
          dedupe: o.dedupe
        });
      });
      k && Cn(() => {
        w(), g(s.value);
      });
    }
    const d = {
      data: mo(() => i._asyncData[s.value].data),
      pending: mo(() => i._asyncData[s.value].pending),
      status: mo(() => i._asyncData[s.value].status),
      error: mo(() => i._asyncData[s.value].error),
      refresh: (...g) => i._asyncData[s.value].execute(...g),
      execute: (...g) => i._asyncData[s.value].execute(...g),
      clear: () => Ml(i, s.value)
    }, m = Promise.resolve(i._asyncDataPromises[s.value]).then(() => d);
    return Object.assign(m, d), m;
  };
  function mo(e) {
    return Y({
      get() {
        return e().value;
      },
      set(t) {
        e().value = t;
      }
    });
  }
  async function Ai(e) {
    await new Promise((n) => ar(n)), await ye().hooks.callHookParallel("app:data:refresh", void 0);
  }
  function Ml(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = fn.errorValue), e._asyncData[t] && (e._asyncData[t].data.value = ie(e._asyncData[t]._default()), e._asyncData[t].error.value = fn.errorValue, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = true), e._asyncDataPromises[t] = void 0);
  }
  function ev(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function Il(e, t, n, r, o) {
    var _a;
    (_a = e.payload._errors)[t] ?? (_a[t] = fn.errorValue);
    const s = n, i = r.deep ? $e : gt, a = o != null, l = {
      data: i(a ? o : r.default()),
      pending: Y(() => l.status.value === "pending"),
      error: rs(e.payload._errors, t),
      status: gt("idle"),
      execute: (u = {}) => {
        if (e._asyncDataPromises[t]) {
          if (Zy(u.dedupe ?? r.dedupe)) return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = true;
        }
        {
          const f = u.cause === "initial" ? o : r.getCachedData(t, e, {
            cause: u.cause ?? "refresh:manual"
          });
          if (f != null) return e.payload.data[t] = l.data.value = f, l.error.value = fn.errorValue, l.status.value = "success", Promise.resolve(f);
        }
        l.status.value = "pending";
        const c = new Promise((f, h) => {
          try {
            f(s(e));
          } catch (d) {
            h(d);
          }
        }).then(async (f) => {
          if (c.cancelled) return e._asyncDataPromises[t];
          let h = f;
          r.transform && (h = await r.transform(f)), r.pick && (h = ev(h, r.pick)), e.payload.data[t] = h, l.data.value = h, l.error.value = fn.errorValue, l.status.value = "success";
        }).catch((f) => {
          if (c.cancelled) return e._asyncDataPromises[t];
          l.error.value = Jr(f), l.data.value = ie(r.default()), l.status.value = "error";
        }).finally(() => {
          c.cancelled || delete e._asyncDataPromises[t];
        });
        return e._asyncDataPromises[t] = c, e._asyncDataPromises[t];
      },
      _execute: Gg((...u) => l.execute(...u), 0, {
        leading: true
      }),
      _default: r.default,
      _deps: 0,
      _hash: void 0,
      _off: e.hook("app:data:refresh", async (u) => {
        (!u || u.includes(t)) && await l.execute({
          cause: "refresh:hook"
        });
      })
    };
    return l;
  }
  const tv = "$s";
  nv = function(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = tv + n, s = ye(), i = rs(s.payload.state, o);
    if (i.value === void 0 && r) {
      const a = r();
      if (_e(a)) return s.payload.state[o] = a, a;
      i.value = a;
    }
    return i;
  };
  function rv(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {}, r = t || {}, o = r.decode || ov;
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
        u.codePointAt(0) === 34 && (u = u.slice(1, -1)), n[l] = sv(u, o);
      }
      s = a + 1;
    }
    return n;
  }
  function ov(e) {
    return e.includes("%") ? decodeURIComponent(e) : e;
  }
  function sv(e, t) {
    try {
      return t(e);
    } catch {
      return e;
    }
  }
  const go = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function $l(e, t, n) {
    const r = n || {}, o = r.encode || encodeURIComponent;
    if (typeof o != "function") throw new TypeError("option encode is invalid");
    if (!go.test(e)) throw new TypeError("argument name is invalid");
    const s = o(t);
    if (s && !go.test(s)) throw new TypeError("argument val is invalid");
    let i = e + "=" + s;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
      const a = r.maxAge - 0;
      if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
      i += "; Max-Age=" + Math.floor(a);
    }
    if (r.domain) {
      if (!go.test(r.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!go.test(r.path)) throw new TypeError("option path is invalid");
      i += "; Path=" + r.path;
    }
    if (r.expires) {
      if (!iv(r.expires) || Number.isNaN(r.expires.valueOf())) throw new TypeError("option expires is invalid");
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
  function iv(e) {
    return Object.prototype.toString.call(e) === "[object Date]" || e instanceof Date;
  }
  function ut(e) {
    if (typeof e != "object") return e;
    var t, n, r = Object.prototype.toString.call(e);
    if (r === "[object Object]") {
      if (e.constructor !== Object && typeof e.constructor == "function") {
        n = new e.constructor();
        for (t in e) e.hasOwnProperty(t) && n[t] !== e[t] && (n[t] = ut(e[t]));
      } else {
        n = {};
        for (t in e) t === "__proto__" ? Object.defineProperty(n, t, {
          value: ut(e[t]),
          configurable: true,
          enumerable: true,
          writable: true
        }) : n[t] = ut(e[t]);
      }
      return n;
    }
    if (r === "[object Array]") {
      for (t = e.length, n = Array(t); t--; ) n[t] = ut(e[t]);
      return n;
    }
    return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(o) {
      n.add(ut(o));
    }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(o, s) {
      n.set(ut(s), ut(o));
    }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(ut(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
  }
  const av = {
    path: "/",
    watch: true,
    decode: (e) => Br(decodeURIComponent(e)),
    encode: (e) => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
  }, yo = window.cookieStore;
  function Nl(e, t) {
    var _a;
    const n = {
      ...av,
      ...t
    };
    n.filter ?? (n.filter = (u) => u === e);
    const r = Bl(n) || {};
    let o;
    n.maxAge !== void 0 ? o = n.maxAge * 1e3 : n.expires && (o = n.expires.getTime() - Date.now());
    const s = o !== void 0 && o <= 0, i = s || r[e] === void 0 || r[e] === null, a = ut(s ? void 0 : r[e] ?? ((_a = n.default) == null ? void 0 : _a.call(n))), l = o && !s ? uv(a, o, n.watch && n.watch !== "shallow") : $e(a);
    {
      let u = null;
      try {
        !yo && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${e}`));
      } catch {
      }
      const c = (m = false) => {
        !m && (n.readonly || Qy(l.value, r[e])) || (cv(e, l.value, n), r[e] = ut(l.value), u == null ? void 0 : u.postMessage({
          value: n.encode(l.value)
        }));
      }, f = (m) => {
        var _a2;
        const g = m.refresh ? (_a2 = Bl(n)) == null ? void 0 : _a2[e] : n.decode(m.value);
        h = true, l.value = g, r[e] = ut(g), Vt(() => {
          h = false;
        });
      };
      let h = false;
      const d = !!Kt();
      if (d && Cn(() => {
        h = true, c(), u == null ? void 0 : u.close();
      }), yo) {
        const m = (g) => {
          const S = g.changed.find((w) => w.name === e), k = g.deleted.find((w) => w.name === e);
          S && f({
            value: S.value
          }), k && f({
            value: null
          });
        };
        yo.addEventListener("change", m), d && Cn(() => yo.removeEventListener("change", m));
      } else u && (u.onmessage = ({ data: m }) => f(m));
      n.watch && nt(l, () => {
        h || c();
      }, {
        deep: n.watch !== "shallow"
      }), i && c(i);
    }
    return l;
  }
  function Bl(e = {}) {
    return rv(document.cookie, e);
  }
  function lv(e, t, n = {}) {
    return t == null ? $l(e, t, {
      ...n,
      maxAge: -1
    }) : $l(e, t, n);
  }
  function cv(e, t, n = {}) {
    document.cookie = lv(e, t, n);
  }
  const Dl = 2147483647;
  function uv(e, t, n) {
    let r, o, s = 0;
    const i = n ? $e(e) : {
      value: e
    };
    return Kt() && Cn(() => {
      o == null ? void 0 : o(), clearTimeout(r);
    }), Gi((a, l) => {
      n && (o = nt(i, l));
      function u() {
        s = 0, clearTimeout(r);
        const c = t - s, f = c < Dl ? c : Dl;
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
  async function ad(e, t = Me()) {
    const { path: n, matched: r } = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = /* @__PURE__ */ new Set()), t._routePreloaded.has(n))) return;
    const o = t._preloadPromises || (t._preloadPromises = []);
    if (o.length > 4) return Promise.all(o).then(() => ad(e, t));
    t._routePreloaded.add(n);
    const s = r.map((i) => {
      var _a;
      return (_a = i.components) == null ? void 0 : _a.default;
    }).filter((i) => typeof i == "function");
    for (const i of s) {
      const a = Promise.resolve(i()).catch(() => {
      }).finally(() => o.splice(o.indexOf(a)));
      o.push(a);
    }
    await Promise.all(o);
  }
  function fv(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
      n = Br(sessionStorage.getItem("nuxt:reload") || "{}");
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
  const jn = typeof document < "u";
  function ld(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function dv(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && ld(e.default);
  }
  const ce = Object.assign;
  function Ds(e, t) {
    const n = {};
    for (const r in t) {
      const o = t[r];
      n[r] = vt(o) ? o.map(e) : e(o);
    }
    return n;
  }
  const Cr = () => {
  }, vt = Array.isArray, cd = /#/g, hv = /&/g, pv = /\//g, mv = /=/g, gv = /\?/g, ud = /\+/g, yv = /%5B/g, vv = /%5D/g, fd = /%5E/g, bv = /%60/g, dd = /%7B/g, _v = /%7C/g, hd = /%7D/g, wv = /%20/g;
  function fa(e) {
    return encodeURI("" + e).replace(_v, "|").replace(yv, "[").replace(vv, "]");
  }
  function Sv(e) {
    return fa(e).replace(dd, "{").replace(hd, "}").replace(fd, "^");
  }
  function xi(e) {
    return fa(e).replace(ud, "%2B").replace(wv, "+").replace(cd, "%23").replace(hv, "%26").replace(bv, "`").replace(dd, "{").replace(hd, "}").replace(fd, "^");
  }
  function kv(e) {
    return xi(e).replace(mv, "%3D");
  }
  function Ev(e) {
    return fa(e).replace(cd, "%23").replace(gv, "%3F");
  }
  function Rv(e) {
    return e == null ? "" : Ev(e).replace(pv, "%2F");
  }
  function jr(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const Tv = /\/$/, Cv = (e) => e.replace(Tv, "");
  function js(e, t, n = "/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = Ov(r ?? t, n), {
      fullPath: r + (s && "?") + s + i,
      path: r,
      query: o,
      hash: jr(i)
    };
  }
  function Pv(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function jl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Av(e, t, n) {
    const r = t.matched.length - 1, o = n.matched.length - 1;
    return r > -1 && r === o && tr(t.matched[r], n.matched[o]) && pd(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
  }
  function tr(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t);
  }
  function pd(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return false;
    for (const n in e) if (!xv(e[n], t[n])) return false;
    return true;
  }
  function xv(e, t) {
    return vt(e) ? Fl(e, t) : vt(t) ? Fl(t, e) : e === t;
  }
  function Fl(e, t) {
    return vt(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function Ov(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, a;
    for (i = 0; i < r.length; i++) if (a = r[i], a !== ".") if (a === "..") s > 1 && s--;
    else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
  }
  const ft = {
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
  var Pr;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(Pr || (Pr = {}));
  function Lv(e) {
    if (!e) if (jn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Cv(e);
  }
  const Mv = /^[^#]+#/;
  function Iv(e, t) {
    return e.replace(Mv, "#") + t;
  }
  function $v(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const ms = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Nv(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!o) return;
      t = $v(o, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Hl(e, t) {
    return (history.state ? history.state.position - t : -1) + e;
  }
  const Oi = /* @__PURE__ */ new Map();
  function Bv(e, t) {
    Oi.set(e, t);
  }
  function Dv(e) {
    const t = Oi.get(e);
    return Oi.delete(e), t;
  }
  let jv = () => location.protocol + "//" + location.host;
  function md(e, t) {
    const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
    if (s > -1) {
      let a = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), jl(l, "");
    }
    return jl(n, e) + r + o;
  }
  function Fv(e, t, n, r) {
    let o = [], s = [], i = null;
    const a = ({ state: h }) => {
      const d = md(e, location), m = n.value, g = t.value;
      let S = 0;
      if (h) {
        if (n.value = d, t.value = h, i && i === m) {
          i = null;
          return;
        }
        S = g ? h.position - g.position : 0;
      } else r(d);
      o.forEach((k) => {
        k(n.value, m, {
          delta: S,
          type: Fr.pop,
          direction: S ? S > 0 ? Pr.forward : Pr.back : Pr.unknown
        });
      });
    };
    function l() {
      i = n.value;
    }
    function u(h) {
      o.push(h);
      const d = () => {
        const m = o.indexOf(h);
        m > -1 && o.splice(m, 1);
      };
      return s.push(d), d;
    }
    function c() {
      const { history: h } = window;
      h.state && h.replaceState(ce({}, h.state, {
        scroll: ms()
      }), "");
    }
    function f() {
      for (const h of s) h();
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
  function Ul(e, t, n, r = false, o = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: o ? ms() : null
    };
  }
  function Hv(e) {
    const { history: t, location: n } = window, r = {
      value: md(e, n)
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
      const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : jv() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](u, "", h), o.value = u;
      } catch (d) {
        console.error(d), n[c ? "replace" : "assign"](h);
      }
    }
    function i(l, u) {
      const c = ce({}, t.state, Ul(o.value.back, l, o.value.forward, true), u, {
        position: o.value.position
      });
      s(l, c, true), r.value = l;
    }
    function a(l, u) {
      const c = ce({}, o.value, t.state, {
        forward: l,
        scroll: ms()
      });
      s(c.current, c, true);
      const f = ce({}, Ul(r.value, l, null), {
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
  function Uv(e) {
    e = Lv(e);
    const t = Hv(e), n = Fv(e, t.state, t.location, t.replace);
    function r(s, i = true) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = ce({
      location: "",
      base: e,
      go: r,
      createHref: Iv.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(o, "state", {
      enumerable: true,
      get: () => t.state.value
    }), o;
  }
  function Vv(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function gd(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const yd = Symbol("");
  var Vl;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(Vl || (Vl = {}));
  function nr(e, t) {
    return ce(new Error(), {
      type: e,
      [yd]: true
    }, t);
  }
  function Et(e, t) {
    return e instanceof Error && yd in e && (t == null || !!(e.type & t));
  }
  const Wl = "[^/]+?", Wv = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  }, qv = /[.+*?^${}()[\]/\\]/g;
  function Kv(e, t) {
    const n = ce({}, Wv, t), r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const u of e) {
      const c = u.length ? [] : [
        90
      ];
      n.strict && !u.length && (o += "/");
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        let d = 40 + (n.sensitive ? 0.25 : 0);
        if (h.type === 0) f || (o += "/"), o += h.value.replace(qv, "\\$&"), d += 40;
        else if (h.type === 1) {
          const { value: m, repeatable: g, optional: S, regexp: k } = h;
          s.push({
            name: m,
            repeatable: g,
            optional: S
          });
          const w = k || Wl;
          if (w !== Wl) {
            d += 10;
            try {
              new RegExp(`(${w})`);
            } catch (v) {
              throw new Error(`Invalid custom RegExp for param "${m}" (${w}): ` + v.message);
            }
          }
          let p = g ? `((?:${w})(?:/(?:${w}))*)` : `(${w})`;
          f || (p = S && u.length < 2 ? `(?:/${p})` : "/" + p), S && (p += "?"), o += p, d += 20, S && (d += -8), g && (d += -20), w === ".*" && (d += -50);
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
      for (let h = 1; h < c.length; h++) {
        const d = c[h] || "", m = s[h - 1];
        f[m.name] = d && m.repeatable ? d.split("/") : d;
      }
      return f;
    }
    function l(u) {
      let c = "", f = false;
      for (const h of e) {
        (!f || !c.endsWith("/")) && (c += "/"), f = false;
        for (const d of h) if (d.type === 0) c += d.value;
        else if (d.type === 1) {
          const { value: m, repeatable: g, optional: S } = d, k = m in u ? u[m] : "";
          if (vt(k) && !g) throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);
          const w = vt(k) ? k.join("/") : k;
          if (!w) if (S) h.length < 2 && (c.endsWith("/") ? c = c.slice(0, -1) : f = true);
          else throw new Error(`Missing required param "${m}"`);
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
  function Gv(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length; ) {
      const r = t[n] - e[n];
      if (r) return r;
      n++;
    }
    return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
  }
  function vd(e, t) {
    let n = 0;
    const r = e.score, o = t.score;
    for (; n < r.length && n < o.length; ) {
      const s = Gv(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (ql(r)) return 1;
      if (ql(o)) return -1;
    }
    return o.length - r.length;
  }
  function ql(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const zv = {
    type: 0,
    value: ""
  }, Jv = /[a-zA-Z0-9_]/;
  function Yv(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        zv
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
          l === "(" ? n = 2 : Jv.test(l) ? h() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
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
  function Qv(e, t, n) {
    const r = Kv(Yv(e.path), n), o = ce(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
  }
  function Xv(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = Jl({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function o(f) {
      return r.get(f);
    }
    function s(f, h, d) {
      const m = !d, g = Gl(f);
      g.aliasOf = d && d.record;
      const S = Jl(t, f), k = [
        g
      ];
      if ("alias" in f) {
        const v = typeof f.alias == "string" ? [
          f.alias
        ] : f.alias;
        for (const _ of v) k.push(Gl(ce({}, g, {
          components: d ? d.record.components : g.components,
          path: _,
          aliasOf: d ? d.record : g
        })));
      }
      let w, p;
      for (const v of k) {
        const { path: _ } = v;
        if (h && _[0] !== "/") {
          const A = h.record.path, M = A[A.length - 1] === "/" ? "" : "/";
          v.path = h.record.path + (_ && M + _);
        }
        if (w = Qv(v, h, S), d ? d.alias.push(w) : (p = p || w, p !== w && p.alias.push(w), m && f.name && !zl(w) && i(f.name)), bd(w) && l(w), g.children) {
          const A = g.children;
          for (let M = 0; M < A.length; M++) s(A[M], w, d && d.children[M]);
        }
        d = d || w;
      }
      return p ? () => {
        i(p);
      } : Cr;
    }
    function i(f) {
      if (gd(f)) {
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
      const h = tb(f, n);
      n.splice(h, 0, f), f.record.name && !zl(f) && r.set(f.record.name, f);
    }
    function u(f, h) {
      let d, m = {}, g, S;
      if ("name" in f && f.name) {
        if (d = r.get(f.name), !d) throw nr(1, {
          location: f
        });
        S = d.record.name, m = ce(Kl(h.params, d.keys.filter((p) => !p.optional).concat(d.parent ? d.parent.keys.filter((p) => p.optional) : []).map((p) => p.name)), f.params && Kl(f.params, d.keys.map((p) => p.name))), g = d.stringify(m);
      } else if (f.path != null) g = f.path, d = n.find((p) => p.re.test(g)), d && (m = d.parse(g), S = d.record.name);
      else {
        if (d = h.name ? r.get(h.name) : n.find((p) => p.re.test(h.path)), !d) throw nr(1, {
          location: f,
          currentLocation: h
        });
        S = d.record.name, m = ce({}, h.params, f.params), g = d.stringify(m);
      }
      const k = [];
      let w = d;
      for (; w; ) k.unshift(w.record), w = w.parent;
      return {
        name: S,
        path: g,
        params: m,
        matched: k,
        meta: eb(k)
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
  function Kl(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function Gl(e) {
    const t = {
      path: e.path,
      redirect: e.redirect,
      name: e.name,
      meta: e.meta || {},
      aliasOf: e.aliasOf,
      beforeEnter: e.beforeEnter,
      props: Zv(e),
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
  function Zv(e) {
    const t = {}, n = e.props || false;
    if ("component" in e) t.default = n;
    else for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t;
  }
  function zl(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function eb(e) {
    return e.reduce((t, n) => ce(t, n.meta), {});
  }
  function Jl(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function tb(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const s = n + r >> 1;
      vd(e, t[s]) < 0 ? r = s : n = s + 1;
    }
    const o = nb(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r;
  }
  function nb(e) {
    let t = e;
    for (; t = t.parent; ) if (bd(t) && vd(e, t) === 0) return t;
  }
  function bd({ record: e }) {
    return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
  }
  function rb(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(ud, " "), i = s.indexOf("="), a = jr(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : jr(s.slice(i + 1));
      if (a in t) {
        let u = t[a];
        vt(u) || (u = t[a] = [
          u
        ]), u.push(l);
      } else t[a] = l;
    }
    return t;
  }
  function Yl(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = kv(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (vt(r) ? r.map((s) => s && xi(s)) : [
        r && xi(r)
      ]).forEach((s) => {
        s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
      });
    }
    return t;
  }
  function ob(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = vt(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
    }
    return t;
  }
  const sb = Symbol(""), Ql = Symbol(""), Qr = Symbol(""), da = Symbol(""), Li = Symbol("");
  function mr() {
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
  function on(e, t, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, l) => {
      const u = (h) => {
        h === false ? l(nr(4, {
          from: n,
          to: t
        })) : h instanceof Error ? l(h) : Vv(h) ? l(nr(2, {
          from: t,
          to: h
        })) : (i && r.enterCallbacks[o] === i && typeof h == "function" && i.push(h), a());
      }, c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((h) => l(h));
    });
  }
  function Fs(e, t, n, r, o = (s) => s()) {
    const s = [];
    for (const i of e) for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a])) if (ld(l)) {
        const c = (l.__vccOpts || l)[t];
        c && s.push(on(c, n, r, i, a, o));
      } else {
        let u = l();
        s.push(() => u.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
          const f = dv(c) ? c.default : c;
          i.mods[a] = c, i.components[a] = f;
          const d = (f.__vccOpts || f)[t];
          return d && on(d, n, r, i, a, o)();
        }));
      }
    }
    return s;
  }
  function Xl(e) {
    const t = Re(Qr), n = Re(da), r = Y(() => {
      const l = ie(e.to);
      return t.resolve(l);
    }), o = Y(() => {
      const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const h = f.findIndex(tr.bind(null, c));
      if (h > -1) return h;
      const d = Zl(l[u - 2]);
      return u > 1 && Zl(c) === d && f[f.length - 1].path !== d ? f.findIndex(tr.bind(null, l[u - 2])) : h;
    }), s = Y(() => o.value > -1 && ub(n.params, r.value.params)), i = Y(() => o.value > -1 && o.value === n.matched.length - 1 && pd(n.params, r.value.params));
    function a(l = {}) {
      if (cb(l)) {
        const u = t[ie(e.replace) ? "replace" : "push"](ie(e.to)).catch(Cr);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: Y(() => r.value.href),
      isActive: s,
      isExactActive: i,
      navigate: a
    };
  }
  function ib(e) {
    return e.length === 1 ? e[0] : e;
  }
  const ab = he({
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
    useLink: Xl,
    setup(e, { slots: t }) {
      const n = Lt(Xl(e)), { options: r } = Re(Qr), o = Y(() => ({
        [ec(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [ec(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const s = t.default && ib(t.default(n));
        return e.custom ? s : Se("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: o.value
        }, s);
      };
    }
  }), lb = ab;
  function cb(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
      if (e.currentTarget && e.currentTarget.getAttribute) {
        const t = e.currentTarget.getAttribute("target");
        if (/\b_blank\b/i.test(t)) return;
      }
      return e.preventDefault && e.preventDefault(), true;
    }
  }
  function ub(e, t) {
    for (const n in t) {
      const r = t[n], o = e[n];
      if (typeof r == "string") {
        if (r !== o) return false;
      } else if (!vt(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return false;
    }
    return true;
  }
  function Zl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const ec = (e, t, n) => e ?? t ?? n, fb = he({
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
      const r = Re(Li), o = Y(() => e.route || r.value), s = Re(Ql, 0), i = Y(() => {
        let u = ie(s);
        const { matched: c } = o.value;
        let f;
        for (; (f = c[u]) && !f.components; ) u++;
        return u;
      }), a = Y(() => o.value.matched[i.value]);
      Rn(Ql, Y(() => i.value + 1)), Rn(sb, a), Rn(Li, o);
      const l = $e();
      return nt(() => [
        l.value,
        a.value,
        e.name
      ], ([u, c, f], [h, d, m]) => {
        c && (c.instances[f] = u, d && d !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards), c.updateGuards.size || (c.updateGuards = d.updateGuards))), u && c && (!d || !tr(c, d) || !h) && (c.enterCallbacks[f] || []).forEach((g) => g(u));
      }, {
        flush: "post"
      }), () => {
        const u = o.value, c = e.name, f = a.value, h = f && f.components[c];
        if (!h) return tc(n.default, {
          Component: h,
          route: u
        });
        const d = f.props[c], m = d ? d === true ? u.params : typeof d == "function" ? d(u) : d : null, S = Se(h, ce({}, m, t, {
          onVnodeUnmounted: (k) => {
            k.component.isUnmounted && (f.instances[c] = null);
          },
          ref: l
        }));
        return tc(n.default, {
          Component: S,
          route: u
        }) || S;
      };
    }
  });
  function tc(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const _d = fb;
  function db(e) {
    const t = Xv(e.routes, e), n = e.parseQuery || rb, r = e.stringifyQuery || Yl, o = e.history, s = mr(), i = mr(), a = mr(), l = gt(ft);
    let u = ft;
    jn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Ds.bind(null, (x) => "" + x), f = Ds.bind(null, Rv), h = Ds.bind(null, jr);
    function d(x, W) {
      let U, z;
      return gd(x) ? (U = t.getRecordMatcher(x), z = W) : z = x, t.addRoute(z, U);
    }
    function m(x) {
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
        const b = js(n, x, W.path), R = t.resolve({
          path: b.path
        }, W), L = o.createHref(b.fullPath);
        return ce(b, R, {
          params: h(R.params),
          hash: jr(b.hash),
          redirectedFrom: void 0,
          href: L
        });
      }
      let U;
      if (x.path != null) U = ce({}, x, {
        path: js(n, x.path, W.path).path
      });
      else {
        const b = ce({}, x.params);
        for (const R in b) b[R] == null && delete b[R];
        U = ce({}, x, {
          params: f(b)
        }), W.params = f(W.params);
      }
      const z = t.resolve(U, W), le = x.hash || "";
      z.params = c(h(z.params));
      const Ee = Pv(r, ce({}, x, {
        hash: Sv(le),
        path: z.path
      })), y = o.createHref(Ee);
      return ce({
        fullPath: Ee,
        hash: le,
        query: r === Yl ? ob(x.query) : x.query || {}
      }, z, {
        redirectedFrom: void 0,
        href: y
      });
    }
    function w(x) {
      return typeof x == "string" ? js(n, x, l.value.path) : ce({}, x);
    }
    function p(x, W) {
      if (u !== x) return nr(8, {
        from: W,
        to: x
      });
    }
    function v(x) {
      return M(x);
    }
    function _(x) {
      return v(ce(w(x), {
        replace: true
      }));
    }
    function A(x) {
      const W = x.matched[x.matched.length - 1];
      if (W && W.redirect) {
        const { redirect: U } = W;
        let z = typeof U == "function" ? U(x) : U;
        return typeof z == "string" && (z = z.includes("?") || z.includes("#") ? z = w(z) : {
          path: z
        }, z.params = {}), ce({
          query: x.query,
          hash: x.hash,
          params: z.path != null ? {} : x.params
        }, z);
      }
    }
    function M(x, W) {
      const U = u = k(x), z = l.value, le = x.state, Ee = x.force, y = x.replace === true, b = A(U);
      if (b) return M(ce(w(b), {
        state: typeof b == "object" ? ce({}, le, b.state) : le,
        force: Ee,
        replace: y
      }), W || U);
      const R = U;
      R.redirectedFrom = W;
      let L;
      return !Ee && Av(r, z, U) && (L = nr(16, {
        to: R,
        from: z
      }), bt(z, z, true, false)), (L ? Promise.resolve(L) : O(R, z)).catch((P) => Et(P) ? Et(P, 2) ? P : Jt(P) : G(P, R, z)).then((P) => {
        if (P) {
          if (Et(P, 2)) return M(ce({
            replace: y
          }, w(P.to), {
            state: typeof P.to == "object" ? ce({}, le, P.to.state) : le,
            force: Ee
          }), W || R);
        } else P = T(R, z, true, y, le);
        return E(R, z, P), P;
      });
    }
    function N(x, W) {
      const U = p(x, W);
      return U ? Promise.reject(U) : Promise.resolve();
    }
    function C(x) {
      const W = Mn.values().next().value;
      return W && typeof W.runWithContext == "function" ? W.runWithContext(x) : x();
    }
    function O(x, W) {
      let U;
      const [z, le, Ee] = hb(x, W);
      U = Fs(z.reverse(), "beforeRouteLeave", x, W);
      for (const b of z) b.leaveGuards.forEach((R) => {
        U.push(on(R, x, W));
      });
      const y = N.bind(null, x, W);
      return U.push(y), ot(U).then(() => {
        U = [];
        for (const b of s.list()) U.push(on(b, x, W));
        return U.push(y), ot(U);
      }).then(() => {
        U = Fs(le, "beforeRouteUpdate", x, W);
        for (const b of le) b.updateGuards.forEach((R) => {
          U.push(on(R, x, W));
        });
        return U.push(y), ot(U);
      }).then(() => {
        U = [];
        for (const b of Ee) if (b.beforeEnter) if (vt(b.beforeEnter)) for (const R of b.beforeEnter) U.push(on(R, x, W));
        else U.push(on(b.beforeEnter, x, W));
        return U.push(y), ot(U);
      }).then(() => (x.matched.forEach((b) => b.enterCallbacks = {}), U = Fs(Ee, "beforeRouteEnter", x, W, C), U.push(y), ot(U))).then(() => {
        U = [];
        for (const b of i.list()) U.push(on(b, x, W));
        return U.push(y), ot(U);
      }).catch((b) => Et(b, 8) ? b : Promise.reject(b));
    }
    function E(x, W, U) {
      a.list().forEach((z) => C(() => z(x, W, U)));
    }
    function T(x, W, U, z, le) {
      const Ee = p(x, W);
      if (Ee) return Ee;
      const y = W === ft, b = jn ? history.state : {};
      U && (z || y ? o.replace(x.fullPath, ce({
        scroll: y && b && b.scroll
      }, le)) : o.push(x.fullPath, le)), l.value = x, bt(x, W, U, y), Jt();
    }
    let B;
    function X() {
      B || (B = o.listen((x, W, U) => {
        if (!no.listening) return;
        const z = k(x), le = A(z);
        if (le) {
          M(ce(le, {
            replace: true,
            force: true
          }), z).catch(Cr);
          return;
        }
        u = z;
        const Ee = l.value;
        jn && Bv(Hl(Ee.fullPath, U.delta), ms()), O(z, Ee).catch((y) => Et(y, 12) ? y : Et(y, 2) ? (M(ce(w(y.to), {
          force: true
        }), z).then((b) => {
          Et(b, 20) && !U.delta && U.type === Fr.pop && o.go(-1, false);
        }).catch(Cr), Promise.reject()) : (U.delta && o.go(-U.delta, false), G(y, z, Ee))).then((y) => {
          y = y || T(z, Ee, false), y && (U.delta && !Et(y, 8) ? o.go(-U.delta, false) : U.type === Fr.pop && Et(y, 20) && o.go(-1, false)), E(z, Ee, y);
        }).catch(Cr);
      }));
    }
    let Z = mr(), F = mr(), K;
    function G(x, W, U) {
      Jt(x);
      const z = F.list();
      return z.length ? z.forEach((le) => le(x, W, U)) : console.error(x), Promise.reject(x);
    }
    function Ce() {
      return K && l.value !== ft ? Promise.resolve() : new Promise((x, W) => {
        Z.add([
          x,
          W
        ]);
      });
    }
    function Jt(x) {
      return K || (K = !x, X(), Z.list().forEach(([W, U]) => x ? U(x) : W()), Z.reset()), x;
    }
    function bt(x, W, U, z) {
      const { scrollBehavior: le } = e;
      if (!jn || !le) return Promise.resolve();
      const Ee = !U && Dv(Hl(x.fullPath, 0)) || (z || !U) && history.state && history.state.scroll || null;
      return Vt().then(() => le(x, W, Ee)).then((y) => y && Nv(y)).catch((y) => G(y, x, W));
    }
    const ze = (x) => o.go(x);
    let Ln;
    const Mn = /* @__PURE__ */ new Set(), no = {
      currentRoute: l,
      listening: true,
      addRoute: d,
      removeRoute: m,
      clearRoutes: t.clearRoutes,
      hasRoute: S,
      getRoutes: g,
      resolve: k,
      options: e,
      push: v,
      replace: _,
      go: ze,
      back: () => ze(-1),
      forward: () => ze(1),
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: F.add,
      isReady: Ce,
      install(x) {
        const W = this;
        x.component("RouterLink", lb), x.component("RouterView", _d), x.config.globalProperties.$router = W, Object.defineProperty(x.config.globalProperties, "$route", {
          enumerable: true,
          get: () => ie(l)
        }), jn && !Ln && l.value === ft && (Ln = true, v(o.location).catch((le) => {
        }));
        const U = {};
        for (const le in ft) Object.defineProperty(U, le, {
          get: () => l.value[le],
          enumerable: true
        });
        x.provide(Qr, W), x.provide(da, Ft(U)), x.provide(Li, l);
        const z = x.unmount;
        Mn.add(x), x.unmount = function() {
          Mn.delete(x), Mn.size < 1 && (u = ft, B && B(), B = null, l.value = ft, Ln = false, K = false), z();
        };
      }
    };
    function ot(x) {
      return x.reduce((W, U) => W.then(() => C(U)), Promise.resolve());
    }
    return no;
  }
  function hb(e, t) {
    const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
      const a = t.matched[i];
      a && (e.matched.find((u) => tr(u, a)) ? r.push(a) : n.push(a));
      const l = e.matched[i];
      l && (t.matched.find((u) => tr(u, l)) || o.push(l));
    }
    return [
      n,
      r,
      o
    ];
  }
  LS = function() {
    return Re(Qr);
  };
  pb = function(e) {
    return Re(da);
  };
  const wd = (e, t) => ({
    default: () => {
      var _a;
      return e ? Se(qp, e === true ? {} : e, t) : (_a = t.default) == null ? void 0 : _a.call(t);
    }
  }), mb = /(:\w+)\([^)]+\)/g, gb = /(:\w+)[?+*]/g, yb = /:\w+/g;
  function nc(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(mb, "$1").replace(gb, "$1").replace(yb, (n) => {
      var _a;
      return ((_a = e.params[n.slice(1)]) == null ? void 0 : _a.toString()) || "";
    });
    return typeof t == "function" ? t(e) : t;
  }
  function Sd(e, t) {
    return e === t || t === ft ? false : nc(e) !== nc(t) ? true : !e.matched.every((r, o) => {
      var _a, _b2;
      return r.components && r.components.default === ((_b2 = (_a = t.matched[o]) == null ? void 0 : _a.components) == null ? void 0 : _b2.default);
    });
  }
  function vb(e, t = false) {
    if (e) {
      if (e.nodeName === "#comment" && e.nodeValue === "[") return kd(e, [], t);
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
  function kd(e, t = [], n = false) {
    var _a;
    if (e && e.nodeName) {
      if (_b(e)) return t;
      if (!bb(e)) {
        const r = e.cloneNode(true);
        n && ((_a = r.querySelectorAll) == null ? void 0 : _a.call(r, "[data-island-slot]").forEach((o) => {
          o.innerHTML = "";
        })), t.push(r.outerHTML);
      }
      kd(e.nextSibling, t, n);
    }
    return t;
  }
  MS = function(e, t) {
    const n = e ? vb(e) : [
      t
    ];
    return n ? Op(n.join(""), n.length) : Se("div");
  };
  function bb(e) {
    return e.nodeName === "#comment" && e.nodeValue === "[";
  }
  function _b(e) {
    return e.nodeName === "#comment" && e.nodeValue === "]";
  }
  const wb = {
    scrollBehavior(e, t, n) {
      var _a;
      const r = ye(), o = ((_a = Me().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
      let s = n || void 0;
      const i = typeof e.meta.scrollToTop == "function" ? e.meta.scrollToTop(e, t) : e.meta.scrollToTop;
      if (!s && t && e && i !== false && Sd(e, t) && (s = {
        left: 0,
        top: 0
      }), e.path === t.path) return t.hash && !e.hash ? {
        left: 0,
        top: 0
      } : e.hash ? {
        el: e.hash,
        top: Ed(e.hash),
        behavior: o
      } : false;
      const a = (u) => !!(u.meta.pageTransition ?? _i), l = a(t) && a(e) ? "page:transition:finish" : "page:loading:end";
      return new Promise((u) => {
        r.hooks.hookOnce(l, () => {
          requestAnimationFrame(() => u(Sb(e, "instant", s)));
        });
      });
    }
  };
  function Ed(e) {
    try {
      const t = document.querySelector(e);
      if (t) return (Number.parseFloat(getComputedStyle(t).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0);
    } catch {
    }
    return 0;
  }
  function Sb(e, t, n) {
    return n || (e.hash ? {
      el: e.hash,
      top: Ed(e.hash),
      behavior: t
    } : {
      left: 0,
      top: 0,
      behavior: t
    });
  }
  const kb = {
    scrollBehaviorType: "smooth",
    hashMode: false
  }, wt = {
    ...kb,
    ...wb
  }, Eb = (...e) => e.find((t) => t !== void 0);
  function Rb(e) {
    const t = e.componentName || "NuxtLink";
    function n(s) {
      return typeof s == "string" && s.startsWith("#");
    }
    function r(s, i, a) {
      const l = a ?? e.trailingSlash;
      if (!s || l !== "append" && l !== "remove") return s;
      if (typeof s == "string") return vo(s, l);
      const u = "path" in s && s.path !== void 0 ? s.path : i(s).path;
      return {
        ...s,
        name: void 0,
        path: vo(u, l)
      };
    }
    function o(s) {
      const i = Me(), a = yn(), l = Y(() => !!s.target && s.target !== "_self"), u = Y(() => {
        const S = s.to || s.href || "";
        return typeof S == "string" && Mt(S, {
          acceptRelative: true
        });
      }), c = oi("RouterLink"), f = c && typeof c != "string" ? c.useLink : void 0, h = Y(() => {
        if (s.external) return true;
        const S = s.to || s.href || "";
        return typeof S == "object" ? false : S === "" || u.value;
      }), d = Y(() => {
        const S = s.to || s.href || "";
        return h.value ? S : r(S, i.resolve, s.trailingSlash);
      }), m = h.value ? void 0 : f == null ? void 0 : f({
        ...s,
        to: d
      }), g = Y(() => {
        var _a;
        const S = s.trailingSlash ?? e.trailingSlash;
        if (!d.value || u.value || n(d.value)) return d.value;
        if (h.value) {
          const k = typeof d.value == "object" && "path" in d.value ? ki(d.value) : d.value, w = typeof k == "object" ? i.resolve(k).href : k;
          return vo(w, S);
        }
        return typeof d.value == "object" ? ((_a = i.resolve(d.value)) == null ? void 0 : _a.href) ?? null : vo(fs(a.app.baseURL, d.value), S);
      });
      return {
        to: d,
        hasTarget: l,
        isAbsoluteUrl: u,
        isExternal: h,
        href: g,
        isActive: (m == null ? void 0 : m.isActive) ?? Y(() => d.value === i.currentRoute.value.path),
        isExactActive: (m == null ? void 0 : m.isExactActive) ?? Y(() => d.value === i.currentRoute.value.path),
        route: (m == null ? void 0 : m.route) ?? Y(() => i.resolve(d.value)),
        async navigate(S) {
          await qg(g.value, {
            replace: s.replace,
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
      useLink: o,
      setup(s, { slots: i }) {
        const a = Me(), { to: l, href: u, navigate: c, isExternal: f, hasTarget: h, isAbsoluteUrl: d } = o(s), m = $e(false), g = $e(null), S = (p) => {
          var _a;
          g.value = s.custom ? (_a = p == null ? void 0 : p.$el) == null ? void 0 : _a.nextElementSibling : p == null ? void 0 : p.$el;
        };
        function k(p) {
          var _a, _b2;
          return !m.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === p : ((_a = s.prefetchOn) == null ? void 0 : _a[p]) ?? ((_b2 = e.prefetchOn) == null ? void 0 : _b2[p])) && (s.prefetch ?? e.prefetch) !== false && s.noPrefetch !== true && s.target !== "_blank" && !Pb();
        }
        async function w(p = ye()) {
          if (m.value) return;
          m.value = true;
          const v = typeof l.value == "string" ? l.value : f.value ? ki(l.value) : a.resolve(l.value).fullPath, _ = f.value ? new URL(v, window.location.href).href : v;
          await Promise.all([
            p.hooks.callHook("link:prefetch", _).catch(() => {
            }),
            !f.value && !h.value && ad(l.value, a).catch(() => {
            })
          ]);
        }
        if (k("visibility")) {
          const p = ye();
          let v, _ = null;
          pn(() => {
            const A = Tb();
            ar(() => {
              v = Pi(() => {
                var _a;
                ((_a = g == null ? void 0 : g.value) == null ? void 0 : _a.tagName) && (_ = A.observe(g.value, async () => {
                  _ == null ? void 0 : _(), _ = null, await w(p);
                }));
              });
            });
          }), On(() => {
            v && Xy(v), _ == null ? void 0 : _(), _ = null;
          });
        }
        return () => {
          var _a;
          if (!f.value && !h.value && !n(l.value)) {
            const _ = {
              ref: S,
              to: l.value,
              activeClass: s.activeClass || e.activeClass,
              exactActiveClass: s.exactActiveClass || e.exactActiveClass,
              replace: s.replace,
              ariaCurrentValue: s.ariaCurrentValue,
              custom: s.custom
            };
            return s.custom || (k("interaction") && (_.onPointerenter = w.bind(null, void 0), _.onFocus = w.bind(null, void 0)), m.value && (_.class = s.prefetchedClass || e.prefetchedClass), _.rel = s.rel || void 0), Se(oi("RouterLink"), _, i.default);
          }
          const p = s.target || null, v = Eb(s.noRel ? "" : s.rel, e.externalRelAttribute, d.value || h.value ? "noopener noreferrer" : "") || null;
          return s.custom ? i.default ? i.default({
            href: u.value,
            navigate: c,
            prefetch: w,
            get route() {
              if (!u.value) return;
              const _ = new URL(u.value, window.location.href);
              return {
                path: _.pathname,
                fullPath: _.pathname,
                get query() {
                  return us(_.search);
                },
                hash: _.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: u.value
              };
            },
            rel: v,
            target: p,
            isExternal: f.value || h.value,
            isActive: false,
            isExactActive: false
          }) : null : Se("a", {
            ref: g,
            href: u.value || null,
            rel: v,
            target: p
          }, (_a = i.default) == null ? void 0 : _a.call(i));
        };
      }
    });
  }
  Mi = Rb(Pg);
  function vo(e, t) {
    const n = t === "append" ? bf : er;
    return Mt(e) && !e.startsWith("http") ? e : n(e, true);
  }
  function Tb() {
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
  const Cb = /2g/;
  function Pb() {
    const e = navigator.connection;
    return !!(e && (e.saveData || Cb.test(e.effectiveType)));
  }
  const Ab = xf(() => {
    ca("PiniaColada_TreeMapNode", (e) => e);
  }), xb = [
    [
      "NuxtError",
      (e) => Jr(e)
    ],
    [
      "EmptyShallowRef",
      (e) => gt(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Br(e))
    ],
    [
      "EmptyRef",
      (e) => $e(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Br(e))
    ],
    [
      "ShallowRef",
      (e) => gt(e)
    ],
    [
      "ShallowReactive",
      (e) => Ft(e)
    ],
    [
      "Ref",
      (e) => $e(e)
    ],
    [
      "Reactive",
      (e) => Lt(e)
    ]
  ], Ob = Ie({
    name: "nuxt:revive-payload:client",
    order: -30,
    async setup(e) {
      let t, n;
      for (const [r, o] of xb) ca(r, o);
      Object.assign(e.payload, ([t, n] = zn(() => e.runWithContext(Fy)), t = await t, n(), t)), window.__NUXT__ = e.payload;
    }
  });
  async function ha(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
      shouldRender: true,
      tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async (o) => {
      var _a;
      const s = /* @__PURE__ */ new Map(), i = new Promise((d) => {
        e.resolveTags().then((m) => {
          d(m.map((g) => {
            const S = s.get(g._d) || 0, k = {
              tag: g,
              id: (S ? `${g._d}:${S}` : g._d) || Sl(g),
              shouldRender: true
            };
            return g._d && Kf(g._d) && s.set(g._d, S + 1), k;
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
          const m = (_a = n[d]) == null ? void 0 : _a.children;
          for (const g of m) {
            const S = g.tagName.toLowerCase();
            if (!_l.has(S)) continue;
            const k = Gf({
              tag: S,
              props: {}
            }, {
              innerHTML: g.innerHTML,
              ...g.getAttributeNames().reduce((w, p) => (w[p] = g.getAttribute(p), w), {}) || {}
            });
            if (k.key = g.getAttribute("data-hid") || void 0, k._d = Ci(k) || Sl(k), a.elMap.has(k._d)) {
              let w = 1, p = k._d;
              for (; a.elMap.has(p); ) p = `${k._d}:${w++}`;
              a.elMap.set(p, g);
            } else a.elMap.set(k._d, g);
          }
        }
      }
      a.pendingSideEffects = {
        ...a.sideEffects
      }, a.sideEffects = {};
      function l(d, m, g) {
        const S = `${d}:${m}`;
        a.sideEffects[S] = g, delete a.pendingSideEffects[S];
      }
      function u({ id: d, $el: m, tag: g }) {
        const S = g.tag.endsWith("Attrs");
        a.elMap.set(d, m), S || (g.textContent && g.textContent !== m.textContent && (m.textContent = g.textContent), g.innerHTML && g.innerHTML !== m.innerHTML && (m.innerHTML = g.innerHTML), l(d, "el", () => {
          m == null ? void 0 : m.remove(), a.elMap.delete(d);
        }));
        for (const k in g.props) {
          if (!Object.prototype.hasOwnProperty.call(g.props, k)) continue;
          const w = g.props[k];
          if (k.startsWith("on") && typeof w == "function") {
            const v = m == null ? void 0 : m.dataset;
            if (v && v[`${k}fired`]) {
              const _ = k.slice(0, -5);
              w.call(m, new Event(_.substring(2)));
            }
            m.getAttribute(`data-${k}`) !== "" && ((g.tag === "bodyAttrs" ? n.defaultView : m).addEventListener(k.substring(2), w.bind(m)), m.setAttribute(`data-${k}`, ""));
            continue;
          }
          const p = `attr:${k}`;
          if (k === "class") {
            if (!w) continue;
            for (const v of w) S && l(d, `${p}:${v}`, () => m.classList.remove(v)), !m.classList.contains(v) && m.classList.add(v);
          } else if (k === "style") {
            if (!w) continue;
            for (const [v, _] of w) l(d, `${p}:${v}`, () => {
              m.style.removeProperty(v);
            }), m.style.setProperty(v, _);
          } else w !== false && w !== null && (m.getAttribute(k) !== w && m.setAttribute(k, w === true ? "" : String(w)), S && l(d, p, () => m.removeAttribute(k)));
        }
      }
      const c = [], f = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
      }, h = await i;
      for (const d of h) {
        const { tag: m, shouldRender: g, id: S } = d;
        if (g) {
          if (m.tag === "title") {
            n.title = m.textContent, l("title", "", () => n.title = a.title);
            continue;
          }
          d.$el = d.$el || a.elMap.get(S), d.$el ? u(d) : _l.has(m.tag) && c.push(d);
        }
      }
      for (const d of c) {
        const m = d.tag.tagPosition || "head";
        d.$el = n.createElement(d.tag.tag), u(d), f[m] = f[m] || n.createDocumentFragment(), f[m].appendChild(d.$el);
      }
      for (const d of h) await e.hooks.callHook("dom:renderTag", d, n, l);
      f.head && n.head.appendChild(f.head), f.bodyOpen && n.body.insertBefore(f.bodyOpen, n.body.firstChild), f.bodyClose && n.body.appendChild(f.bodyClose);
      for (const d in a.pendingSideEffects) a.pendingSideEffects[d]();
      e._dom = a, await e.hooks.callHook("dom:rendered", {
        renders: h
      }), o();
    }).finally(() => {
      e._domUpdatePromise = void 0, e.dirty = false;
    })), e._domUpdatePromise;
  }
  function Lb(e = {}) {
    var _a, _b2, _c2;
    const t = ((_a = e.domOptions) == null ? void 0 : _a.render) || ha;
    e.document = e.document || (typeof window < "u" ? document : void 0);
    const n = ((_c2 = (_b2 = e.document) == null ? void 0 : _b2.head.querySelector('script[id="unhead:payload"]')) == null ? void 0 : _c2.innerHTML) || false;
    return xy({
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
  function Mb(e, t) {
    let n = 0;
    return () => {
      const r = ++n;
      t(() => {
        n === r && e();
      });
    };
  }
  function Ib(e = {}) {
    const t = Lb({
      domOptions: {
        render: Mb(() => ha(t), (n) => setTimeout(n, 0))
      },
      ...e
    });
    return t.install = Ly(t), t;
  }
  const $b = {
    disableDefaults: true
  }, Nb = Ie({
    name: "nuxt:head",
    enforce: "pre",
    setup(e) {
      const t = Ib($b);
      e.vueApp.use(t);
      {
        let n = true;
        const r = async () => {
          n = false, await ha(t);
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
  }), Bb = /(:\w+)\([^)]+\)/g, Db = /(:\w+)[?+*]/g, jb = /:\w+/g, Fb = (e, t) => t.path.replace(Bb, "$1").replace(Db, "$1").replace(jb, (n) => {
    var _a;
    return ((_a = e.params[n.slice(1)]) == null ? void 0 : _a.toString()) || "";
  }), Ii = (e, t) => {
    const n = e.route.matched.find((o) => {
      var _a;
      return ((_a = o.components) == null ? void 0 : _a.default) === e.Component.type;
    }), r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && Fb(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  }, Hb = (e, t) => ({
    default: () => e ? Se(qh, e === true ? {} : e, t) : t
  });
  function pa(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const Ub = {
    middleware: [
      async function(e) {
        e.path === "/supersimpleswap" && await jt(() => Promise.resolve({}), __vite__mapDeps([0]), import.meta.url), e.path === "/onepager" && await jt(() => Promise.resolve({}), __vite__mapDeps([1]), import.meta.url);
      }
    ]
  };
  const Hs = [
    {
      name: "roadmap",
      path: "/roadmap",
      component: () => jt(() => import("./BqhkN64D.js"), __vite__mapDeps([2,3,4,5,6,7,8,9,10,11,12,13,14]), import.meta.url)
    },
    {
      name: "uid",
      path: "/:uid(.*)*",
      meta: Ub || {},
      component: () => jt(() => import("./CrCEHL8S.js"), __vite__mapDeps([15,16]), import.meta.url)
    },
    {
      name: "blog-post",
      path: "/blog/:post()",
      component: () => jt(() => import("./sIJHNHza.js"), __vite__mapDeps([17,18,7,8,9,10,11,19,20,5,21,6,22,16,23,13,12,24]), import.meta.url)
    },
    {
      name: "slice-simulator",
      path: "/slice-simulator",
      component: () => jt(() => import("./CGi-SWSF.js"), __vite__mapDeps([25,26,16]), import.meta.url)
    },
    {
      name: "iframes-albatross-liveview",
      path: "/iframes/albatross-liveview",
      component: () => jt(() => import("./CyKveLbZ.js"), __vite__mapDeps([27,28,29,30,20,12,13,31,32,7,8,9,10,11,23]), import.meta.url)
    }
  ], Vb = async (e) => {
    var _a;
    let t, n;
    if (!((_a = e.meta) == null ? void 0 : _a.validate)) return;
    const r = ye(), o = Me(), s = ([t, n] = zn(() => Promise.resolve(e.meta.validate(e))), t = await t, n(), t);
    if (s === true) return;
    const i = Jr({
      statusCode: s && s.statusCode || 404,
      statusMessage: s && s.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    }), a = o.beforeResolve((l) => {
      if (a(), l === e) {
        const u = o.afterEach(async () => {
          u(), await r.runWithContext(() => rn(i)), window == null ? void 0 : window.history.pushState({}, "", e.fullPath);
        });
        return false;
      }
    });
  }, Wb = async (e) => {
    let t, n;
    const r = ([t, n] = zn(() => la({
      path: e.path
    })), t = await t, n(), t);
    if (r.redirect) return Mt(r.redirect, {
      acceptRelative: true
    }) ? (window.location.href = r.redirect, false) : r.redirect;
  }, qb = [
    Vb,
    Wb
  ], $i = {};
  function Kb(e, t, n) {
    const { pathname: r, search: o, hash: s } = t, i = e.indexOf("#");
    if (i > -1) {
      const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
      let c = s.slice(u);
      return c[0] !== "/" && (c = "/" + c), al(c, "");
    }
    const a = al(r, e), l = !n || Jm(a, n) ? a : n;
    return l + (l.includes("?") ? "" : o) + s;
  }
  const Gb = Ie({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var _a;
      let t, n, r = yn().app.baseURL;
      const o = ((_a = wt.history) == null ? void 0 : _a.call(wt, r)) ?? Uv(r), s = wt.routes ? ([t, n] = zn(() => wt.routes(Hs)), t = await t, n(), t ?? Hs) : Hs;
      let i;
      const a = db({
        ...wt,
        scrollBehavior: (S, k, w) => {
          if (k === ft) {
            i = w;
            return;
          }
          if (wt.scrollBehavior) {
            if (a.options.scrollBehavior = wt.scrollBehavior, "scrollRestoration" in window.history) {
              const p = a.beforeEach(() => {
                p(), window.history.scrollRestoration = "manual";
              });
            }
            return wt.scrollBehavior(S, ft, i || w);
          }
        },
        history: o,
        routes: s
      });
      wt.routes && wt.routes, "scrollRestoration" in window.history && (window.history.scrollRestoration = "auto"), e.vueApp.use(a);
      const l = gt(a.currentRoute.value);
      a.afterEach((S, k) => {
        l.value = k;
      }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
        get: () => l.value
      });
      const u = Kb(r, window.location, e.payload.path), c = gt(a.currentRoute.value), f = () => {
        c.value = a.currentRoute.value;
      };
      e.hook("page:finish", f), a.afterEach((S, k) => {
        var _a2, _b2, _c2, _d2;
        ((_b2 = (_a2 = S.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d2 = (_c2 = k.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d2.default) && f();
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
      const d = hs();
      a.afterEach(async (S, k, w) => {
        delete e._processingMiddleware, !e.isHydrating && d.value && await e.runWithContext(Bf), w && await e.callHook("page:loading:end");
      });
      try {
        [t, n] = zn(() => a.isReady()), await t, n();
      } catch (S) {
        [t, n] = zn(() => e.runWithContext(() => rn(S))), await t, n();
      }
      const m = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
      f();
      const g = e.payload.state._layout;
      return a.beforeEach(async (S, k) => {
        var _a2;
        await e.callHook("page:loading:start"), S.meta = Lt(S.meta), e.isHydrating && g && !dn(S.meta.layout) && (S.meta.layout = g), e._processingMiddleware = true;
        {
          const w = /* @__PURE__ */ new Set([
            ...qb,
            ...e._middleware.global
          ]);
          for (const p of S.matched) {
            const v = p.meta.middleware;
            if (v) for (const _ of pa(v)) w.add(_);
          }
          {
            const p = await e.runWithContext(() => la({
              path: S.path
            }));
            if (p.appMiddleware) for (const v in p.appMiddleware) p.appMiddleware[v] ? w.add(v) : w.delete(v);
          }
          for (const p of w) {
            const v = typeof p == "string" ? e._middleware.named[p] || await ((_a2 = $i[p]) == null ? void 0 : _a2.call($i).then((_) => _.default || _)) : p;
            if (!v) throw new Error(`Unknown route middleware: '${p}'.`);
            try {
              const _ = await e.runWithContext(() => v(S, k));
              if (!e.payload.serverRendered && e.isHydrating && (_ === false || _ instanceof Error)) {
                const A = _ || Ro({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${u}`
                });
                return await e.runWithContext(() => rn(A)), false;
              }
              if (_ === true) continue;
              if (_ === false) return _;
              if (_) return Df(_) && _.fatal && await e.runWithContext(() => rn(_)), _;
            } catch (_) {
              const A = Ro(_);
              return A.fatal && await e.runWithContext(() => rn(A)), A;
            }
          }
        }
      }), a.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end");
      }), a.afterEach(async (S, k) => {
        S.matched.length === 0 && await e.runWithContext(() => rn(Ro({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${S.fullPath}`,
          data: {
            path: S.fullPath
          }
        })));
      }), e.hooks.hookOnce("app:created", async () => {
        try {
          "name" in m && (m.name = void 0), await a.replace({
            ...m,
            force: true
          }), a.options.scrollBehavior = wt.scrollBehavior;
        } catch (S) {
          await e.runWithContext(() => rn(S));
        }
      }), {
        provide: {
          router: a
        }
      };
    }
  });
  function zb(e) {
    typeof e.indexable < "u" && (e.indexable = String(e.indexable) !== "false"), typeof e.trailingSlash < "u" && !e.trailingSlash && (e.trailingSlash = String(e.trailingSlash) !== "false"), e.url && !Mt(String(e.url), {
      acceptRelative: true,
      strict: false
    }) && (e.url = Gm(String(e.url)));
    const t = Object.keys(e).sort((r, o) => r.localeCompare(o)), n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function Jb(e) {
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
      var _a;
      const i = {};
      (s == null ? void 0 : s.debug) && (i._context = {}), i._priority = {};
      for (const a in n.sort((l, u) => (l._priority || 0) - (u._priority || 0))) for (const l in n[a]) {
        const u = l, c = (s == null ? void 0 : s.resolveRefs) ? it(n[a][l]) : n[a][l];
        !l.startsWith("_") && typeof c < "u" && c !== "" && (i[l] = c, typeof n[a]._priority < "u" && n[a]._priority !== -1 && (i._priority[u] = n[a]._priority), (s == null ? void 0 : s.debug) && (i._context[u] = ((_a = n[a]._context) == null ? void 0 : _a[u]) || n[a]._context || "anonymous"));
      }
      return (s == null ? void 0 : s.skipNormalize) ? i : zb(i);
    }
    return {
      stack: n,
      push: r,
      get: o
    };
  }
  const Yb = Ie({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
      var _a;
      const t = Jb(), n = nv("site-config");
      {
        const r = n.value || window.__NUXT_SITE_CONFIG__ || {};
        for (const o in r) o[0] !== "_" && t.push({
          [o]: r[o],
          _priority: ((_a = r._priority) == null ? void 0 : _a[o]) || -1
        });
      }
      return {
        provide: {
          nuxtSiteConfig: t
        }
      };
    }
  }), Qb = Ie({
    name: "nuxt:payload",
    setup(e) {
      const t = /* @__PURE__ */ new Set();
      Me().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const o = await Pl(n.path);
        if (o) {
          for (const s of t) delete e.static.data[s];
          for (const s in o.data) s in e.static.data || t.add(s), e.static.data[s] = o.data[s];
        }
      }), ar(() => {
        var _a;
        e.hooks.hook("link:prefetch", async (n) => {
          const { hostname: r } = new URL(n, window.location.href);
          r === window.location.hostname && await Pl(n).catch(() => {
            console.warn("[nuxt] Error preloading payload for", n);
          });
        }), ((_a = navigator.connection) == null ? void 0 : _a.effectiveType) !== "slow-2g" && setTimeout(ps, 1e3);
      });
    }
  }), Xb = Ie(() => {
    const e = Me();
    ar(() => {
      e.beforeResolve(async () => {
        await new Promise((t) => {
          setTimeout(t, 100), requestAnimationFrame(() => {
            setTimeout(t, 0);
          });
        });
      });
    });
  }), Zb = Ie((e) => {
    let t;
    async function n() {
      const r = await ps();
      t && clearTimeout(t), t = setTimeout(n, hl);
      try {
        const o = await $fetch(ra("builds/latest.json") + `?${Date.now()}`);
        o.id !== r.id && e.hooks.callHook("app:manifest:update", o);
      } catch {
      }
    }
    ar(() => {
      t = setTimeout(n, hl);
    });
  }), e_ = Ie((e) => {
    if (!document.startViewTransition) return;
    let t, n, r;
    window.addEventListener("popstate", (s) => {
      s.hasUAVisualTransition && t && t.skipTransition();
    }), Me().beforeResolve(async (s, i) => {
      const a = s.meta.viewTransition ?? Tg, u = window.matchMedia("(prefers-reduced-motion: reduce)").matches && a !== "always";
      if (a === false || u || !Sd(s, i)) return;
      const c = new Promise((d, m) => {
        n = d, r = m;
      });
      let f;
      const h = new Promise((d) => f = d);
      return t = document.startViewTransition(() => (f(), c)), t.finished.then(() => {
        r = void 0, n = void 0;
      }), await e.callHook("page:view-transition:start", t), h;
    }), e.hook("vue:error", () => {
      r == null ? void 0 : r(), r = void 0;
    }), e.hook("page:finish", () => {
      n == null ? void 0 : n(), n = void 0;
    });
  }), t_ = Ie({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Me(), n = yn(), r = /* @__PURE__ */ new Set();
      t.beforeEach(() => {
        r.clear();
      }), e.hook("app:chunkError", ({ error: s }) => {
        r.add(s);
      });
      function o(s) {
        const a = "href" in s && s.href[0] === "#" ? n.app.baseURL + s.href : fs(n.app.baseURL, s.fullPath);
        fv({
          path: a,
          persistState: true
        });
      }
      e.hook("app:manifest:update", () => {
        t.beforeResolve(o);
      }), t.onError((s, i) => {
        r.has(s) && o(i);
      });
    }
  }), n_ = Ie({
    name: "pinia",
    setup(e) {
      const t = Yg();
      return e.vueApp.use(t), Yr(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
        provide: {
          pinia: t
        }
      };
    }
  }), r_ = Ie({
    name: "nuxt:global-components"
  }), ln = {
    default: Ma(() => jt(() => import("./hgE_6TKD.js"), __vite__mapDeps([33,29,5,34,10,35,9,36,37,38,39,40,4,41,8,12,13,42,18,7,11,6,43,44]), import.meta.url).then((e) => e.default || e)),
    iframe: Ma(() => jt(() => import("./BXBjs0ep.js"), [], import.meta.url).then((e) => e.default || e))
  }, o_ = Ie({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Me();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var _a;
          const r = (_a = n == null ? void 0 : n.meta) == null ? void 0 : _a.layout;
          r && typeof ln[r] == "function" && await ln[r]();
        });
      }), e.hooks.hook("link:prefetch", (n) => {
        if (Mt(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const o = r.meta.layout;
        let s = pa(r.meta.middleware);
        s = s.filter((i) => typeof i == "string");
        for (const i of s) typeof $i[i] == "function" && $i[i]();
        o && typeof ln[o] == "function" && ln[o]();
      });
    }
  }), s_ = {}, i_ = Ie({
    name: "Pinia Colada",
    dependsOn: [
      "pinia"
    ],
    setup(e) {
      e.vueApp.use(Jy, {
        ...s_
      });
      const t = e.vueApp.config.globalProperties.$pinia;
      e.payload && e.payload.pinia_colada && zy(ua(t), e.payload.pinia_colada);
    }
  }), a_ = new RegExp(/Googlebot\/|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video|AdsBot-Google([^-]|$)|AdsBot-Google-Mobile|Feedfetcher-Google|Mediapartners-Google|Mediapartners \(Googlebot\)|APIs-Google|Google-InspectionTool|Storebot-Google|GoogleOther|bingbot|Slurp|[wW]get|LinkedInBot|Python-urllib|python-requests|aiohttp|httpx|libwww-perl|httpunit|Nutch|Go-http-client|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|BIGLOTRON|Teoma|convera|seekbot|Gigabot|Gigablast|exabot|ia_archiver|GingerCrawler|webmon |HTTrack|grub\.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|findlink|msrbot|panscient|yacybot|AISearchBot|ips-agent|tagoobot|MJ12bot|woriobot|yanga|buzzbot|mlbot|yandex\.com\/bots|purebot|Linguee Bot|CyberPatrol|voilabot|Baiduspider|citeseerxbot|spbot|twengabot|postrank|Turnitin|scribdbot|page2rss|sitebot|linkdex|Adidxbot|ezooms|dotbot|Mail\.RU_Bot|discobot|heritrix|findthatfile|europarchive\.org|NerdByNature\.Bot|(sistrix|SISTRIX) [cC]rawler|Ahrefs(Bot|SiteAudit)|fuelbot|CrunchBot|IndeedBot|mappydata|woobot|ZoominfoBot|PrivacyAwareBot|Multiviewbot|SWIMGBot|Grobbot|eright|Apercite|semanticbot|Aboundex|domaincrawler|wbsearchbot|summify|CCBot|edisterbot|SeznamBot|ec2linkfinder|gslfbot|aiHitBot|intelium_bot|facebookexternalhit|Yeti|RetrevoPageAnalyzer|lb-spider|Sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net\.com\.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|it2media-domain-crawler|ip-web-crawler\.com|siteexplorer\.info|elisabot|proximic|changedetection|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|CC Metadata Scaper|g00g1e\.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Twitterbot|cXensebot|smtbot|bnf\.fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot\/|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive\.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|S[eE][mM]rushBot|yoozBot|lipperhey|Y!J|Domain Re-Animator Bot|AddThis|Screaming Frog SEO Spider|MetaURI|Scrapy|Livelap[bB]ot|OpenHoseBot|CapsuleChecker|collection@infegy\.com|IstellaBot|DeuSu\/|betaBot|Cliqzbot\/|MojeekBot\/|netEstate NE Crawler|SafeSearch microdata crawler|Gluten Free Crawler\/|Sonic|Sysomos|Trove|deadlinkchecker|Slack-ImgProxy|Embedly|RankActiveLinkBot|iskanie|SafeDNSBot|SkypeUriPreview|Veoozbot|Slackbot|redditbot|datagnionbot|Google-Adwords-Instant|adbeat_bot|WhatsApp|contxbot|pinterest\.com\/bot|electricmonk|GarlikCrawler|BingPreview\/|vebidoobot|FemtosearchBot|Yahoo Link Preview|MetaJobBot|DomainStatsBot|mindUpBot|Daum\/|Jugendschutzprogramm-Crawler|Xenu Link Sleuth|Pcore-HTTP|moatbot|KosmioBot|[pP]ingdom|AppInsights|PhantomJS|Gowikibot|PiplBot|Discordbot|TelegramBot|Jetslide|newsharecounts|James BOT|Bark[rR]owler|TinEye|SocialRankIOBot|trendictionbot|Ocarinabot|epicbot|Primalbot|DuckDuckGo-Favicons-Bot|GnowitNewsbot|Leikibot|LinkArchiver|YaK\/|PaperLiBot|Digg Deeper|dcrawl|Snacktory|AndersPinkBot|Fyrebot|EveryoneSocialBot|Mediatoolkitbot|Luminator-robots|ExtLinksBot|SurveyBot|NING\/|okhttp|Nuzzel|omgili|PocketParser|YisouSpider|um-LN|ToutiaoSpider|MuckRack|Jamie's Spider|AHC\/|NetcraftSurveyAgent|Laserlikebot|^Apache-HttpClient|AppEngine-Google|Jetty|Upflow|Thinklab|Traackr\.com|Twurly|Mastodon|http_get|DnyzBot|botify|007ac9 Crawler|BehloolBot|BrandVerity|check_http|BDCbot|ZumBot|EZID|ICC-Crawler|ArchiveBot|^LCC |filterdb\.iss\.net\/crawler|BLP_bbot|BomboraBot|Buck\/|Companybook-Crawler|Genieo|magpie-crawler|MeltwaterNews|Moreover|newspaper\/|ScoutJet|(^| )sentry\/|StorygizeBot|UptimeRobot|OutclicksBot|seoscanners|Hatena|Google Web Preview|MauiBot|AlphaBot|SBL-BOT|IAS crawler|adscanner|Netvibes|acapbot|Baidu-YunGuanCe|bitlybot|blogmuraBot|Bot\.AraTurka\.com|bot-pge\.chlooe\.com|BoxcarBot|BTWebClient|ContextAd Bot|Digincore bot|Disqus|Feedly|Fetch\/|Fever|Flamingo_SearchEngine|FlipboardProxy|g2reader-bot|G2 Web Services|imrbot|K7MLWCBot|Kemvibot|Landau-Media-Spider|linkapediabot|vkShare|Siteimprove\.com|BLEXBot\/|DareBoost|ZuperlistBot\/|Miniflux\/|Feedspot|Diffbot\/|SEOkicks|tracemyfile|Nimbostratus-Bot|zgrab|PR-CY\.RU|AdsTxtCrawler|Datafeedwatch|Zabbix|TangibleeBot|google-xrawler|axios|Amazon CloudFront|Pulsepoint|CloudFlare-AlwaysOnline|Google-Structured-Data-Testing-Tool|WordupInfoSearch|WebDataStats|HttpUrlConnection|ZoomBot|VelenPublicWebCrawler|MoodleBot|jpg-newsbot|outbrain|W3C_Validator|Validator\.nu|W3C-checklink|W3C-mobileOK|W3C_I18n-Checker|FeedValidator|W3C_CSS_Validator|W3C_Unicorn|Google-PhysicalWeb|Blackboard|ICBot\/|BazQux|Twingly|Rivva|Experibot|awesomecrawler|Dataprovider\.com|GroupHigh\/|theoldreader\.com|AnyEvent|Uptimebot\.org|Nmap Scripting Engine|2ip\.ru|Clickagy|Caliperbot|MBCrawler|online-webceo-bot|B2B Bot|AddSearchBot|Google Favicon|HubSpot|Chrome-Lighthouse|HeadlessChrome|CheckMarkNetwork\/|www\.uptime\.com|Streamline3Bot\/|serpstatbot\/|MixnodeCache\/|^curl|SimpleScraper|RSSingBot|Jooblebot|fedoraplanet|Friendica|NextCloud|Tiny Tiny RSS|RegionStuttgartBot|Bytespider|Datanyze|Google-Site-Verification|TrendsmapResolver|tweetedtimes|NTENTbot|Gwene|SimplePie|SearchAtlas|Superfeedr|feedbot|UT-Dorkbot|Amazonbot|SerendeputyBot|Eyeotabot|officestorebot|Neticle Crawler|SurdotlyBot|LinkisBot|AwarioSmartBot|AwarioRssBot|RyteBot|FreeWebMonitoring SiteChecker|AspiegelBot|NAVER Blog Rssbot|zenback bot|SentiBot|Domains Project\/|Pandalytics|VKRobot|bidswitchbot|tigerbot|NIXStatsbot|Atom Feed Robot|[Cc]urebot|PagePeeker\/|Vigil\/|rssbot\/|startmebot\/|JobboerseBot|seewithkids|NINJA bot|Cutbot|BublupBot|BrandONbot|RidderBot|Taboolabot|Dubbotbot|FindITAnswersbot|infoobot|Refindbot|BlogTraffic\/\d\.\d+ Feed-Fetcher|SeobilityBot|Cincraw|Dragonbot|VoluumDSP-content-bot|FreshRSS|BitBot|^PHP-Curl-Class|Google-Certificates-Bridge|centurybot|Viber|e\.ventures Investment Crawler|evc-batch|PetalBot|virustotal|(^| )PTST\/|minicrawler|Cookiebot|trovitBot|seostar\.co|IonCrawl|Uptime-Kuma|Seekport|FreshpingBot|Feedbin|CriteoBot|Snap URL Preview Service|Better Uptime Bot|RuxitSynthetic|Google-Read-Aloud|Valve\/Steam|OdklBot\/|GPTBot|ChatGPT-User|YandexRenderResourcesBot\/|LightspeedSystemsCrawler|ev-crawler\/|BitSightBot\/|woorankreview\/|Google-Safety|AwarioBot|DataForSeoBot|Linespider|WellKnownBot|A Patent Crawler|StractBot|search\.marginalia\.nu|YouBot|Nicecrawler|Neevabot|BrightEdge Crawler|SiteCheckerBotCrawler|TombaPublicWebCrawler|CrawlyProjectCrawler|KomodiaBot|KStandBot|CISPA Webcrawler|MTRobot|hyscore\.io|AlexandriaOrgBot|2ip bot|Yellowbrandprotectionbot|SEOlizer|vuhuvBot|INETDEX-BOT|Synapse|t3versionsBot|deepnoc|Cocolyzebot|hypestat|ReverseEngineeringBot|sempi\.tech|Iframely|MetaInspector|node-fetch|lkxscan|python-opengraph|OpenGraphCheck|developers\.google\.com\/\+\/web\/snippet|SenutoBot|MaCoCu|NewsBlur|inoreader|NetSystemsResearch|PageThing|WordPress\/|PhxBot|ImagesiftBot|Expanse|InternetMeasurement|^BW\/|GeedoBot|Audisto Crawler|PerplexityBot\/|[cC]laude[bB]ot|Monsidobot|GroupMeBot|Vercelbot|vercel-screenshot/), l_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, c_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u_ = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|FBAN|FBAV|fennec|hiptop|iemobile|ip(hone|od)|Instagram|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, f_ = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
  function d_(e) {
    return l_.test(e) || c_.test(e.slice(0, 4));
  }
  function h_(e) {
    return u_.test(e) || f_.test(e.slice(0, 4));
  }
  function p_(e) {
    return /iPad|iPhone|iPod/.test(e);
  }
  function m_(e) {
    return /android/i.test(e);
  }
  function g_(e) {
    return /Windows/.test(e);
  }
  function y_(e) {
    return /Mac OS X/.test(e);
  }
  const v_ = [
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
  function b_(e) {
    for (const t of v_) if (t.regex.test(e)) return t.name;
    return "";
  }
  function rc(e, t = {}) {
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
    else n = d_(e), r = h_(e), o = p_(e), s = m_(e);
    const i = g_(e), a = y_(e), l = b_(e), u = l === "Safari", c = l === "Firefox", f = l === "Edge", h = l === "Chrome", d = l === "Samsung", m = a_.test(e);
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
      isChrome: h,
      isSamsung: d,
      isCrawler: m
    };
  }
  let __, w_, At, Rd, ge, oc, S_, an, Ue, k_, Td, sc, ic;
  __ = Ie(() => {
    const e = yn(), t = e.public.device.defaultUserAgent;
    let n;
    {
      const r = navigator.userAgent || t;
      n = Lt(rc(r)), e.public.device.refreshOnResize && window.addEventListener("resize", () => {
        setTimeout(() => {
          const o = rc(navigator.userAgent || r);
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
  w_ = Ie((e) => {
    yn().public.prismic.preview && window.addEventListener("prismicPreviewUpdate", (n) => {
      n.preventDefault(), Ai();
    });
  });
  At = {
    listItem: "list-item",
    oListItem: "o-list-item",
    list: "group-list-item",
    oList: "group-o-list-item",
    span: "span"
  };
  Rd = (e) => Array.isArray(e) ? `[${e.map(Rd).join(", ")}]` : typeof e == "string" ? `"${e}"` : e instanceof Date ? `${e.getTime()}` : `${e}`;
  ge = (e) => (n, ...r) => {
    const o = r.map(Rd).join(", "), s = n && r.length ? ", " : "";
    return `[${e}(${n}${s}${o})]`;
  };
  oc = (e) => {
    const t = ge(e);
    return (r) => t(r);
  };
  S_ = (e) => {
    const t = ge(e);
    return (...r) => t("", ...r);
  };
  Pt = {
    at: ge("at"),
    not: ge("not"),
    any: ge("any"),
    in: ge("in"),
    fulltext: ge("fulltext"),
    has: oc("has"),
    missing: oc("missing"),
    similar: S_("similar"),
    geopointNear: ge("geopoint.near"),
    numberLessThan: ge("number.lt"),
    numberGreaterThan: ge("number.gt"),
    numberInRange: ge("number.inRange"),
    dateAfter: ge("date.after"),
    dateBefore: ge("date.before"),
    dateBetween: ge("date.between"),
    dateDayOfMonth: ge("date.day-of-month"),
    dateDayOfMonthAfter: ge("date.day-of-month-after"),
    dateDayOfMonthBefore: ge("date.day-of-month-before"),
    dateDayOfWeek: ge("date.day-of-week"),
    dateDayOfWeekAfter: ge("date.day-of-week-after"),
    dateDayOfWeekBefore: ge("date.day-of-week-before"),
    dateMonth: ge("date.month"),
    dateMonthAfter: ge("date.month-after"),
    dateMonthBefore: ge("date.month-before"),
    dateYear: ge("date.year"),
    dateHour: ge("date.hour"),
    dateHourAfter: ge("date.hour-after"),
    dateHourBefore: ge("date.hour-before")
  };
  an = (e) => Array.isArray(e) ? e : [
    e
  ];
  Ue = (e = {}, t) => ({
    ...e,
    filters: [
      ...e.filters || [],
      ...an(t)
    ]
  });
  k_ = (e) => typeof e == "function" ? e : () => e;
  Td = "7.17.2";
  sc = (e) => `https://prismic.dev/msg/client/v${Td}/${e}`;
  ic = (e) => Pt.at("document.tags", an(e));
  var E_ = Object.defineProperty, R_ = (e, t, n) => t in e ? E_(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, ac = (e, t, n) => R_(e, typeof t != "symbol" ? t + "" : t, n);
  class ht extends Error {
    constructor(t = "An invalid API response was returned", n, r) {
      super(t), ac(this, "url"), ac(this, "response"), this.url = n, this.response = r;
    }
  }
  const ma = (e, t) => {
    const n = e.find((r) => t(r));
    if (!n) throw new ht("Ref could not be found.", void 0, void 0);
    return n;
  }, lc = (e) => ma(e, (t) => t.isMasterRef), Us = (e, t) => ma(e, (n) => n.id === t), Vs = (e, t) => ma(e, (n) => n.label === t), Cd = "io.prismic.preview", T_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    preview: Cd
  }, Symbol.toStringTag, {
    value: "Module"
  })), cc = (e) => e.replace(/%3B/g, ";"), C_ = (e) => {
    const t = e.split("; ");
    let n;
    for (const r of t) {
      const o = r.split("=");
      if (cc(o[0]).replace(/%3D/g, "=") === Cd) {
        n = cc(o.slice(1).join("="));
        break;
      }
    }
    return n;
  }, P_ = (e) => e.replace(/(\n| )*( |{|})(\n| )*/gm, (t, n, r) => r), bo = (e) => Pt.any("document.tags", an(e)), A_ = 5e3;
  let uc, Ws = 0;
  const x_ = (e, t = {}) => {
    const { level: n = "log" } = t;
    if (e === uc && Date.now() - Ws < A_) {
      Ws = Date.now();
      return;
    }
    Ws = Date.now(), uc = e, console[n](e);
  }, Bn = (e) => Pt.at("document.type", e);
  class gs extends ht {
  }
  class Ni extends ht {
  }
  class O_ extends ht {
  }
  class L_ extends gs {
  }
  class fc extends gs {
  }
  class qs extends gs {
  }
  class M_ extends Ni {
  }
  let cn, Pd, I_, $_;
  cn = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
  };
  Pd = (e) => {
    var t;
    return {
      link_type: cn.Document,
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
  ys = (e, ...t) => {
    if (!e) return null;
    const n = "link_type" in e ? e : Pd(e), [r] = t;
    let o;
    switch (typeof r == "function" || r == null ? o = {
      linkResolver: r
    } : o = {
      ...r
    }, n.link_type) {
      case cn.Media:
      case cn.Web:
        return "url" in n ? n.url : null;
      case cn.Document: {
        if ("id" in n && o.linkResolver) {
          const s = o.linkResolver(n);
          if (s != null) return s;
        }
        return "url" in n && n.url ? n.url : null;
      }
      case cn.Any:
      default:
        return null;
    }
  };
  I_ = (e) => new Promise((t) => setTimeout(t, e));
  $_ = ({ interval: e } = {}) => {
    const t = [];
    let n = false, r = 0;
    const o = () => {
      var l;
      !n && t.length > 0 && ((l = t.shift()) == null || l(), n = true);
    }, s = () => {
      n = false, o();
    }, i = async (l, u, c) => {
      const f = Date.now() - r;
      e && f < e && await I_(e - f);
      const h = (async () => l(...c))();
      u(h);
      try {
        await h;
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
  var N_ = Object.defineProperty, B_ = (e, t, n) => t in e ? N_(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, _o = (e, t, n) => B_(e, typeof t != "symbol" ? t + "" : t, n);
  const D_ = 1500;
  class j_ {
    constructor(t) {
      if (_o(this, "fetchFn"), _o(this, "fetchOptions"), _o(this, "queuedFetchJobs", {}), _o(this, "dedupedFetchJobs", {}), this.fetchOptions = t.fetchOptions, typeof t.fetch == "function") this.fetchFn = t.fetch;
      else if (typeof globalThis.fetch == "function") this.fetchFn = globalThis.fetch;
      else throw new ht("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.", void 0, void 0);
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
      return this.queuedFetchJobs[r] || (this.queuedFetchJobs[r] = $_({
        interval: D_
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
  const F_ = "x-c", H_ = {
    accessToken: "access_token"
  }, U_ = (e) => typeof e == "string" ? e : e.direction === "desc" ? `${e.field} desc` : e.field, V_ = (e, t) => {
    const { filters: n, predicates: r, ...o } = t, s = new URL("documents/search", `${e}/`);
    if (n) for (const i of an(n)) s.searchParams.append("q", `[${i}]`);
    if (r) for (const i of an(r)) s.searchParams.append("q", `[${i}]`);
    for (const i in o) {
      const a = H_[i] || i;
      let l = o[i];
      if (a === "orderings") {
        const u = o[a];
        u != null && (l = `[${an(u).map((f) => U_(f)).join(",")}]`);
      } else a === "routes" && typeof o[a] == "object" && (l = JSON.stringify(an(o[a])));
      l != null && s.searchParams.set(a, an(l).join(","));
    }
    return s.searchParams.set(F_, `js-${Td}`), s.toString();
  }, W_ = (e) => /^[a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]$/.test(e), q_ = (e) => {
    if (W_(e)) return `https://${e}.cdn.prismic.io/api/v2`;
    throw new ht(`An invalid Prismic repository name was given: ${e}`, void 0, void 0);
  }, K_ = (e) => {
    try {
      const t = new URL(e).hostname;
      if (t.endsWith("prismic.io") || t.endsWith("wroom.io") || t.endsWith("wroom.test")) return t.split(".")[0];
    } catch {
    }
    throw new ht(`An invalid Prismic Document API endpoint was provided: ${e}`, void 0, void 0);
  }, dc = (e) => {
    try {
      return new URL(e), true;
    } catch {
      return false;
    }
  };
  var G_ = Object.defineProperty, Ad = (e) => {
    throw TypeError(e);
  }, z_ = (e, t, n) => t in e ? G_(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, Qt = (e, t, n) => z_(e, typeof t != "symbol" ? t + "" : t, n), xd = (e, t, n) => t.has(e) || Ad("Cannot " + n), hc = (e, t, n) => (xd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), J_ = (e, t, n) => t.has(e) ? Ad("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Y_ = (e, t, n, r) => (xd(e, t, "write to private field"), t.set(e, n), n), vr;
  const Q_ = 100, X_ = 5e3, Z_ = 500, ew = 1e3, tw = 3;
  var Tt;
  (function(e) {
    e.Master = "Master", e.ReleaseID = "ReleaseID", e.ReleaseLabel = "ReleaseLabel", e.Manual = "Manual";
  })(Tt || (Tt = {}));
  class nw extends j_ {
    constructor(t, n = {}) {
      if (super(n), J_(this, vr), Qt(this, "documentAPIEndpoint"), Qt(this, "accessToken"), Qt(this, "routes"), Qt(this, "brokenRoute"), Qt(this, "defaultParams"), Qt(this, "refState", {
        mode: Tt.Master,
        autoPreviewsEnabled: true
      }), Qt(this, "cachedRepository"), Qt(this, "cachedRepositoryExpiration", 0), n.documentAPIEndpoint || dc(t), dc(t)) {
        this.documentAPIEndpoint = t;
        try {
          this.repositoryName = K_(t);
        } catch {
          console.warn(`[@prismicio/client] A repository name could not be inferred from the provided endpoint (\`${t}\`). Some methods will be disabled. Create the client using a repository name to prevent this warning. For more details, see ${sc("prefer-repository-name")}`);
        }
      } else this.documentAPIEndpoint = n.documentAPIEndpoint || q_(t), this.repositoryName = t;
      this.accessToken = n.accessToken, this.routes = n.routes, this.brokenRoute = n.brokenRoute, this.defaultParams = n.defaultParams, n.ref && this.queryContentFromRef(n.ref), this.graphQLFetch = this.graphQLFetch.bind(this);
    }
    set repositoryName(t) {
      Y_(this, vr, t);
    }
    get repositoryName() {
      if (!hc(this, vr)) throw new ht(`A repository name is required for this method but one could not be inferred from the provided API endpoint (\`${this.documentAPIEndpoint}\`). To fix this error, provide a repository name when creating the client. For more details, see ${sc("prefer-repository-name")}`, void 0, void 0);
      return hc(this, vr);
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
      throw new Ni("No documents were returned", s, void 0);
    }
    async dangerouslyGetAll(t = {}) {
      var n;
      const { limit: r = 1 / 0, ...o } = t, s = {
        ...o,
        pageSize: Math.min(r, o.pageSize || ((n = this.defaultParams) == null ? void 0 : n.pageSize) || Q_)
      }, i = [];
      let a;
      for (; (!a || a.next_page) && i.length < r; ) {
        const l = a ? a.page + 1 : void 0;
        a = await this.get({
          ...s,
          page: l
        }), i.push(...a.results), a.next_page && await new Promise((u) => setTimeout(u, Z_));
      }
      return i.slice(0, r);
    }
    async getByID(t, n) {
      return await this.getFirst(Ue(n, Pt.at("document.id", t)));
    }
    async getByIDs(t, n) {
      return await this.get(Ue(n, Pt.in("document.id", t)));
    }
    async getAllByIDs(t, n) {
      return await this.dangerouslyGetAll(Ue(n, Pt.in("document.id", t)));
    }
    async getByUID(t, n, r) {
      return await this.getFirst(Ue(r, [
        Bn(t),
        Pt.at(`my.${t}.uid`, n)
      ]));
    }
    async getByUIDs(t, n, r) {
      return await this.get(Ue(r, [
        Bn(t),
        Pt.in(`my.${t}.uid`, n)
      ]));
    }
    async getAllByUIDs(t, n, r) {
      return await this.dangerouslyGetAll(Ue(r, [
        Bn(t),
        Pt.in(`my.${t}.uid`, n)
      ]));
    }
    async getSingle(t, n) {
      return await this.getFirst(Ue(n, Bn(t)));
    }
    async getByType(t, n) {
      return await this.get(Ue(n, Bn(t)));
    }
    async getAllByType(t, n) {
      return await this.dangerouslyGetAll(Ue(n, Bn(t)));
    }
    async getByTag(t, n) {
      return await this.get(Ue(n, bo(t)));
    }
    async getAllByTag(t, n) {
      return await this.dangerouslyGetAll(Ue(n, bo(t)));
    }
    async getByEveryTag(t, n) {
      return await this.get(Ue(n, ic(t)));
    }
    async getAllByEveryTag(t, n) {
      return await this.dangerouslyGetAll(Ue(n, ic(t)));
    }
    async getBySomeTags(t, n) {
      return await this.get(Ue(n, bo(t)));
    }
    async getAllBySomeTags(t, n) {
      return await this.dangerouslyGetAll(Ue(n, bo(t)));
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
      return Us(r, t);
    }
    async getRefByLabel(t, n) {
      const r = await this.getRefs(n);
      return Vs(r, t);
    }
    async getMasterRef(t) {
      const n = await this.getRefs(t);
      return lc(n);
    }
    async getReleases(t) {
      return (await this.getRefs(t)).filter((r) => !r.isMasterRef);
    }
    async getReleaseByID(t, n) {
      const r = await this.getReleases(n);
      return Us(r, t);
    }
    async getReleaseByLabel(t, n) {
      const r = await this.getReleases(n);
      return Vs(r, t);
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
      return V_(this.documentAPIEndpoint, {
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
        }), a = ys(i, {
          linkResolver: t.linkResolver
        });
        if (typeof a == "string") return a;
      }
      return t.defaultURL;
    }
    queryLatestContent() {
      this.refState.mode = Tt.Master;
    }
    queryContentFromReleaseByID(t) {
      this.refState = {
        ...this.refState,
        mode: Tt.ReleaseID,
        releaseID: t
      };
    }
    queryContentFromReleaseByLabel(t) {
      this.refState = {
        ...this.refState,
        mode: Tt.ReleaseLabel,
        releaseLabel: t
      };
    }
    queryContentFromRef(t) {
      this.refState = {
        ...this.refState,
        mode: Tt.Manual,
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
      return l && a.searchParams.set("query", P_(l)), await this.fetchFn(a.toString(), {
        ...n,
        headers: i
      });
    }
    async getCachedRepository(t) {
      return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + X_, this.cachedRepository = await this.getRepository(t)), this.cachedRepository;
    }
    async getCachedRepositoryForm(t, n) {
      const o = (await this.getCachedRepository(n)).forms[t];
      if (!o) throw new ht(`Form with name "${t}" could not be found`, void 0, void 0);
      return o;
    }
    async getResolvedRefString(t) {
      var n, r;
      if (this.refState.autoPreviewsEnabled) {
        let i, a;
        if ((n = this.refState.httpRequest) != null && n.headers ? "get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get == "function" ? a = this.refState.httpRequest.headers.get("cookie") : "cookie" in this.refState.httpRequest.headers && (a = this.refState.httpRequest.headers.cookie) : (r = globalThis.document) != null && r.cookie && (a = globalThis.document.cookie), a && (i = C_(a)), i) return i;
      }
      const o = await this.getCachedRepository(t), s = this.refState.mode;
      if (s === Tt.ReleaseID) return Us(o.refs, this.refState.releaseID).ref;
      if (s === Tt.ReleaseLabel) return Vs(o.refs, this.refState.releaseLabel).ref;
      if (s === Tt.Manual) {
        const i = await k_(this.refState.ref)();
        if (typeof i == "string") return i;
      }
      return lc(o.refs).ref;
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
        if (!(i instanceof qs || i instanceof fc) || n >= tw - 1) throw i;
        (t == null ? void 0 : t.ref) || (this.cachedRepository = void 0);
        const a = (o = (r = i.message.match(/Master ref is: (?<ref>.*)$/)) == null ? void 0 : r.groups) == null ? void 0 : o.ref;
        if (!a) throw i;
        const l = new URL(s).searchParams.get("ref"), u = i instanceof qs ? "invalid" : "expired";
        return x_(`[@prismicio/client] The ref (${l}) was ${u}. Now retrying with the latest master ref (${a}). If you were previewing content, the response will not include draft content.`, {
          level: "warn"
        }), await this._get({
          ...t,
          ref: a
        }, n + 1);
      }
    }
    async fetch(t, n = {}) {
      const r = await super.fetch(t, n);
      if (r.status !== 404 && r.status !== 429 && r.json == null) throw new ht(void 0, t, r.json || r.text);
      switch (r.status) {
        case 200:
        case 201:
          return r.json;
        case 400:
          throw new O_(r.json.message, t, r.json);
        case 401:
        case 403:
          throw new gs(r.json.error || r.json.message, t, r.json);
        case 404:
          throw r.json === void 0 ? new M_(`Prismic repository not found. Check that "${this.documentAPIEndpoint}" is pointing to the correct repository.`, t, t.startsWith(this.documentAPIEndpoint) ? void 0 : r.text) : r.json.type === "api_notfound_error" ? new qs(r.json.message, t, r.json) : r.json.type === "api_security_error" && /preview token.*expired/i.test(r.json.message) ? new L_(r.json.message, t, r.json) : new Ni(r.json.message, t, r.json);
        case 410:
          throw new fc(r.json.message, t, r.json);
        case 429: {
          const o = Number(r.headers.get("retry-after")), s = Number.isNaN(o) ? ew : o;
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
      throw new ht(void 0, t, r.json);
    }
  }
  vr = /* @__PURE__ */ new WeakMap();
  let rw, He, ga, ow, lr, iw, aw, lw, cw, uw, fw, Od, dw, hw, pw, mw, Ld, gw, yw, vw, bw, cr, ww, Md, Sw, kw, va, Xr, Zr, Je, Ew, Rw, Tw, $d, Cw, bs;
  rw = (e, t) => new nw(e, t);
  He = (e) => e != null;
  ga = (e) => !!e.length;
  ya = (e) => He(e) ? e.length === 1 && "text" in e[0] ? !!e[0].text : !!e.length : false;
  ow = ya;
  lr = (e) => He(e) && !!e.url;
  sw = lr;
  vs = (e) => He(e) && ("id" in e || "url" in e);
  iw = vs;
  aw = vs;
  lw = He;
  cw = He;
  uw = He;
  fw = He;
  Od = (e) => He(Od) && !!e;
  dw = He;
  hw = (e) => He(e) && !!e.embed_url;
  pw = (e) => He(e) && "longitude" in e;
  mw = He;
  Ld = He;
  gw = Ld;
  yw = (e) => He(e) && ga(e);
  vw = (e) => He(e) && ga(e);
  bw = (e) => He(e) && ga(e);
  cr = Object.freeze(Object.defineProperty({
    __proto__: null,
    color: uw,
    contentRelationship: aw,
    date: lw,
    embed: hw,
    geoPoint: pw,
    group: vw,
    image: sw,
    imageThumbnail: lr,
    integrationField: Ld,
    integrationFields: gw,
    keyText: Od,
    link: vs,
    linkToMedia: iw,
    number: fw,
    repeatable: yw,
    richText: ya,
    select: dw,
    sliceZone: bw,
    table: mw,
    timestamp: cw,
    title: ow
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  _w = (e) => e ? e.length === 24 ? new Date(e.replace(/(\+|-)(\d{2})(\d{2})$/, ".000$1$2:$3")) : new Date(e) : null;
  ww = (e) => {
    const t = /^(\/(?!\/)|#)/.test(e), n = !t && !/^https?:\/\//.test(e);
    return t && !n;
  };
  Md = (e, t = {}) => {
    if (e && ("link_type" in e ? vs(e) : e)) {
      const n = "target" in e ? e.target : void 0, r = ys(e, t.linkResolver), o = r ?? void 0, s = typeof o == "string" ? !ww(o) : false, i = t.rel ? t.rel({
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
  Sw = (e, t = " ") => {
    let n = "";
    for (let r = 0; r < e.length; r++) "text" in e[r] && (n += (n ? t : "") + e[r].text);
    return n;
  };
  Id = (e, ...t) => {
    if (e) {
      const [n] = t;
      let r;
      return typeof n == "string" ? r = {
        separator: n
      } : r = {
        ...n
      }, Sw(e, r.separator);
    } else return null;
  };
  kw = /["'&<>]/;
  va = (e) => {
    const t = "" + e, n = kw.exec(t);
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
  Xr = (e, t) => {
    const n = {
      ...t
    };
    "direction" in e && e.direction === "rtl" && (n.dir = e.direction), "data" in e && "label" in e.data && e.data.label && (n.class = n.class ? `${n.class} ${e.data.label}` : e.data.label);
    const r = [];
    for (const o in n) {
      const s = n[o];
      s && (typeof s == "boolean" ? r.push(o) : r.push(`${o}="${va(s)}"`));
    }
    return r.length && r.unshift(""), r.join(" ");
  };
  Zr = (e) => e && typeof e != "function" ? e : {};
  Je = (e, t) => {
    const n = Zr(t);
    return ({ node: r, children: o }) => `<${e}${Xr(r, n)}>${o}</${e}>`;
  };
  Ew = (e) => {
    const t = Zr(e);
    return ({ node: n }) => `<pre${Xr(n, t)}>${va(n.text)}</pre>`;
  };
  Rw = (e, t) => {
    const n = Zr(t);
    return ({ node: r }) => {
      const o = {
        ...n,
        src: r.url,
        alt: r.alt,
        copyright: r.copyright
      };
      let s = `<img${Xr(r, o)} />`;
      return r.linkTo && (s = $d(e)({
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
  Tw = (e) => {
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
  $d = (e, t) => {
    const n = Zr(t);
    return ({ node: r, children: o }) => {
      const s = {
        ...n
      };
      return r.data.link_type === cn.Web ? (s.href = r.data.url, s.target = r.data.target, s.rel = "noopener noreferrer") : r.data.link_type === cn.Document ? s.href = ys(r.data, {
        linkResolver: e
      }) : r.data.link_type === cn.Media && (s.href = r.data.url), `<a${Xr(r, s)}>${o}</a>`;
    };
  };
  Cw = () => ({ text: e }) => e ? va(e).replace(/\n/g, "<br />") : "";
  bs = () => (++bs.i).toString();
  bs.i = 0;
  let Nd, Ar, Ks, Pw, Bd, Dd, Aw, jd, xw, Ow, Lw, Gs, Mw, Fd, Iw, eo, $w, zs, pc, Hd, Bw, Ud, ba, Vd, Wd, Dw, jw, Fw, Bi, Hw, Uw, Vw, Ww, qw, Kw, Gw, zw, Jw, Yw, Qw, Xw, Zw, e0, t0, n0, r0, o0, s0, i0, mc, a0, l0, c0, u0, f0, d0, h0, p0, gc, yc, m0, g0, y0, v0, b0, _0, w0, S0, k0, E0;
  Nd = (e) => {
    const t = Pw(e), n = [];
    for (let r = 0; r < t.length; r++) n.push(Bd(t[r]));
    return {
      key: bs(),
      children: n
    };
  };
  Ar = (e, t = []) => ({
    key: bs(),
    type: e.type,
    text: "text" in e ? e.text : void 0,
    node: e,
    children: t
  });
  Ks = (e) => Ar({
    type: At.span,
    text: e,
    spans: []
  });
  Pw = (e) => {
    const t = e.slice(0);
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (r.type === At.listItem || r.type === At.oListItem) {
        const o = [
          r
        ];
        for (; t[n + 1] && t[n + 1].type === r.type; ) o.push(t[n + 1]), t.splice(n, 1);
        r.type === At.listItem ? t[n] = {
          type: At.list,
          items: o
        } : t[n] = {
          type: At.oList,
          items: o
        };
      }
    }
    return t;
  };
  Bd = (e) => {
    if ("text" in e) return Ar(e, Dd(e.spans, e));
    if ("items" in e) {
      const t = [];
      for (let n = 0; n < e.items.length; n++) t.push(Bd(e.items[n]));
      return Ar(e, t);
    }
    return Ar(e);
  };
  Dd = (e, t, n) => {
    if (!e.length) return [
      Ks(t.text)
    ];
    const r = e.slice(0);
    r.sort((s, i) => s.start - i.start || i.end - s.end);
    const o = [];
    for (let s = 0; s < r.length; s++) {
      const i = r[s], a = n && n.start || 0, l = i.start - a, u = i.end - a, c = t.text.slice(l, u), f = [];
      for (let d = s; d < r.length; d++) {
        const m = r[d];
        m !== i && (m.start >= i.start && m.end <= i.end ? (f.push(m), r.splice(d, 1), d--) : m.start < i.end && m.end > i.start && (f.push({
          ...m,
          end: i.end
        }), r[d] = {
          ...m,
          start: i.end
        }));
      }
      s === 0 && l > 0 && o.push(Ks(t.text.slice(0, l)));
      const h = {
        ...i,
        text: c
      };
      o.push(Ar(h, Dd(f, {
        ...t,
        text: c
      }, i))), u < t.text.length && o.push(Ks(t.text.slice(u, r[s + 1] ? r[s + 1].start - a : void 0)));
    }
    return o;
  };
  Aw = (e, t) => jd(Nd(e).children, t);
  jd = (e, t) => {
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t(o.type, o.node, o.text, jd(o.children, t), o.key);
      s != null && n.push(s);
    }
    return n;
  };
  xw = {
    [At.listItem]: "listItem",
    [At.oListItem]: "oListItem",
    [At.list]: "list",
    [At.oList]: "oList"
  };
  Ow = (e) => (t, n, r, o, s) => {
    const i = e[xw[t] || t];
    if (i) return i({
      type: t,
      node: n,
      text: r,
      children: o,
      key: s
    });
  };
  Lw = (...e) => (...t) => {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r) {
        const o = r(...t);
        if (o != null) return o;
      }
    }
  };
  Gs = (e, t) => {
    const n = (o, s) => typeof o == "function" ? (i) => (o == null ? void 0 : o(i)) || s(i) : s, r = {
      heading1: n(t == null ? void 0 : t.heading1, Je("h1", t == null ? void 0 : t.heading1)),
      heading2: n(t == null ? void 0 : t.heading2, Je("h2", t == null ? void 0 : t.heading2)),
      heading3: n(t == null ? void 0 : t.heading3, Je("h3", t == null ? void 0 : t.heading3)),
      heading4: n(t == null ? void 0 : t.heading4, Je("h4", t == null ? void 0 : t.heading4)),
      heading5: n(t == null ? void 0 : t.heading5, Je("h5", t == null ? void 0 : t.heading5)),
      heading6: n(t == null ? void 0 : t.heading6, Je("h6", t == null ? void 0 : t.heading6)),
      paragraph: n(t == null ? void 0 : t.paragraph, Je("p", t == null ? void 0 : t.paragraph)),
      preformatted: n(t == null ? void 0 : t.preformatted, Ew(t == null ? void 0 : t.preformatted)),
      strong: n(t == null ? void 0 : t.strong, Je("strong", t == null ? void 0 : t.strong)),
      em: n(t == null ? void 0 : t.em, Je("em", t == null ? void 0 : t.em)),
      listItem: n(t == null ? void 0 : t.listItem, Je("li", t == null ? void 0 : t.listItem)),
      oListItem: n(t == null ? void 0 : t.oListItem, Je("li", t == null ? void 0 : t.oListItem)),
      list: n(t == null ? void 0 : t.list, Je("ul", t == null ? void 0 : t.list)),
      oList: n(t == null ? void 0 : t.oList, Je("ol", t == null ? void 0 : t.oList)),
      image: n(t == null ? void 0 : t.image, Rw(e, t == null ? void 0 : t.image)),
      embed: n(t == null ? void 0 : t.embed, Tw(t == null ? void 0 : t.embed)),
      hyperlink: n(t == null ? void 0 : t.hyperlink, $d(e, t == null ? void 0 : t.hyperlink)),
      label: n(t == null ? void 0 : t.label, Je("span", t == null ? void 0 : t.label)),
      span: n(t == null ? void 0 : t.span, Cw())
    };
    return Mw(r);
  };
  Mw = (e) => {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r && (t[n] = (o) => r({
        ...o,
        children: o.children.join("")
      }));
    }
    return Ow(t);
  };
  Fd = (e, ...t) => {
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
      return o.serializer ? typeof o.serializer == "function" ? s = Lw((i, a, l, u, c) => o.serializer(i, a, l, u.join(""), c), Gs(o.linkResolver)) : s = Gs(o.linkResolver, o.serializer) : s = Gs(o.linkResolver), Aw(e, s).join("");
    } else return null;
  };
  Iw = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  eo = (e, t) => {
    const n = new URL(e);
    for (const o in t) {
      const s = Iw(o), i = t[o];
      i === void 0 ? n.searchParams.delete(s) : Array.isArray(i) ? n.searchParams.set(s, i.join(",")) : n.searchParams.set(s, `${i}`);
    }
    const r = n.searchParams.get("s");
    return r && (n.searchParams.delete("s"), n.searchParams.append("s", r)), n.toString();
  };
  $w = (e, { pixelDensities: t, ...n }) => t.map((r) => `${eo(e, {
    ...n,
    dpr: r
  })} ${r}x`).join(", ");
  zs = (e, { widths: t, ...n }) => t.map((r) => `${eo(e, {
    ...n,
    w: void 0,
    h: void 0,
    height: void 0,
    width: r
  })} ${r}w`).join(", ");
  Nw = (e, t = {}) => e && lr(e) ? eo(e.url, t) : null;
  pc = [
    640,
    828,
    1200,
    2048,
    3840
  ];
  Hd = (e, t = {}) => {
    if (e && lr(e)) {
      let { widths: n = pc, ...r } = t;
      const { url: o, dimensions: s, id: i, alt: a, copyright: l, edit: u, ...c } = e, f = Object.values(c);
      return n === "thumbnails" && f.length < 1 && (n = pc), {
        src: eo(o, r),
        srcset: n === "thumbnails" ? [
          zs(o, {
            ...r,
            widths: [
              s.width
            ]
          }),
          ...f.map((h) => zs(h.url, {
            ...r,
            widths: [
              h.dimensions.width
            ]
          }))
        ].join(", ") : zs(e.url, {
          ...r,
          widths: n
        })
      };
    } else return null;
  };
  Bw = [
    1,
    2,
    3
  ];
  Ud = (e, t = {}) => {
    if (e && lr(e)) {
      const { pixelDensities: n = Bw, ...r } = t;
      return {
        src: eo(e.url, r),
        srcset: $w(e.url, {
          ...r,
          pixelDensities: n
        })
      };
    } else return null;
  };
  ba = he({
    __name: "Wrapper",
    props: {
      wrapper: {}
    },
    setup(e) {
      return (t, n) => t.wrapper ? (q(), oe(Ge(t.wrapper), Oc(Gr({
        key: 0
      }, t.$attrs)), {
        default: Ne(() => [
          Pe(t.$slots, "default")
        ]),
        _: 3
      }, 16)) : Pe(t.$slots, "default", {
        key: 1
      });
    }
  });
  Vd = Symbol("prismic");
  to = () => Re(Vd, {
    options: {
      endpoint: ""
    }
  });
  Wd = (e) => {
    const t = /^\/(?!\/)/.test(e), n = !t && !/^https?:\/\//i.test(e);
    return t && !n;
  };
  Dw = "div";
  jw = he({
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
      const t = e, { options: n } = to(), r = Y(() => {
        if (!ya(t.field)) return t.fallback ?? "";
        const c = t.linkResolver ?? n.linkResolver, f = t.serializer ?? n.richTextSerializer;
        return Fd(t.field, {
          linkResolver: c,
          serializer: f
        });
      }), o = $e(null), s = Re(Qr, null);
      let i = [];
      const a = function(c) {
        c.preventDefault(), s == null ? void 0 : s.push(this.href);
      }, l = () => {
        const c = o.value && "$el" in o.value ? o.value.$el : o.value;
        c && "querySelectorAll" in c && (i = Array.from(c.querySelectorAll("a")).map((f) => {
          const h = f.getAttribute("href");
          if (h && Wd(h)) {
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
      return pn(() => {
        u(), Vt(l);
      }), nt(r, () => {
        u(), Vt(l);
      }), On(() => {
        u();
      }), (c, f) => ie(cr).richText(e.field) || e.fallback ? (q(), oe(Ge(e.wrapper || Dw), {
        key: 0,
        ref_key: "root",
        ref: o,
        innerHTML: r.value
      }, null, 8, [
        "innerHTML"
      ])) : zt("", true);
    }
  });
  Fw = "div";
  Bi = he({
    name: "PrismicEmbed",
    __name: "PrismicEmbed",
    props: {
      field: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => ie(cr).embed(t.field) ? (q(), oe(Ge(t.wrapper || Fw), {
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
  Hw = [
    "src",
    "srcset",
    "alt"
  ];
  qo = he({
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
      const t = e, { options: n } = to(), r = Y(() => {
        var o, s;
        if (!lr(t.field)) return;
        let i, a;
        if (t.widths || !t.pixelDensities) {
          const l = Hd(t.field, {
            ...t.imgixParams,
            widths: t.widths === "defaults" ? (o = n.components) == null ? void 0 : o.imageWidthSrcSetDefaults : t.widths
          });
          i = l.src, a = l.srcset;
        } else if (t.pixelDensities) {
          const l = Ud(t.field, {
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
      }, null, 8, Hw)) : zt("", true);
    }
  });
  Uw = "router-link";
  Vw = "a";
  Ww = "noreferrer";
  Ko = he({
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
      const t = e, { options: n } = to(), r = Y(() => Md(t.field || t.document, {
        linkResolver: t.linkResolver || n.linkResolver,
        rel(i) {
          var a;
          const l = t.rel || ((a = n.components) == null ? void 0 : a.linkRel);
          return l ? typeof l == "function" ? l(i) : l : i.isExternal ? Ww : void 0;
        }
      })), o = Y(() => {
        var i, a;
        return Wd(r.value.href || "") ? t.internalComponent || ((i = n.components) == null ? void 0 : i.linkInternalComponent) || Uw : t.externalComponent || ((a = n.components) == null ? void 0 : a.linkExternalComponent) || Vw;
      }), s = Y(() => o.value === "a" ? {
        href: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      } : {
        to: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      });
      return (i, a) => (q(), oe(Ge(o.value), Oc(Ju(s.value)), {
        default: Ne(() => [
          Pe(i.$slots, "default", {}, () => [
            ir(Nt(t.field && "text" in t.field ? t.field.text : void 0), 1)
          ])
        ]),
        _: 3
      }, 16));
    }
  });
  qw = [
    "dir"
  ];
  Kw = [
    "dir"
  ];
  Gw = [
    "dir"
  ];
  zw = [
    "dir"
  ];
  Jw = [
    "dir"
  ];
  Yw = [
    "dir"
  ];
  Qw = [
    "dir"
  ];
  Xw = {
    key: 7
  };
  Zw = {
    key: 8
  };
  e0 = {
    key: 9
  };
  t0 = [
    "dir"
  ];
  n0 = [
    "dir"
  ];
  r0 = {
    key: 12
  };
  o0 = {
    key: 13
  };
  s0 = {
    key: 14,
    class: "block-img"
  };
  i0 = {
    key: 0
  };
  mc = he({
    name: "PrismicRichTextDefaultComponent",
    __name: "PrismicRichTextDefaultComponent",
    props: {
      node: {},
      linkResolver: {}
    },
    setup(e) {
      const t = e, n = Y(() => "direction" in t.node && t.node.direction === "rtl" ? "rtl" : void 0);
      return (r, o) => r.node.type === "heading1" ? (q(), de("h1", {
        key: 0,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, qw)) : r.node.type === "heading2" ? (q(), de("h2", {
        key: 1,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, Kw)) : r.node.type === "heading3" ? (q(), de("h3", {
        key: 2,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, Gw)) : r.node.type === "heading4" ? (q(), de("h4", {
        key: 3,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, zw)) : r.node.type === "heading5" ? (q(), de("h5", {
        key: 4,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, Jw)) : r.node.type === "heading6" ? (q(), de("h6", {
        key: 5,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, Yw)) : r.node.type === "paragraph" ? (q(), de("p", {
        key: 6,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, Qw)) : r.node.type === "preformatted" ? (q(), de("pre", Xw, [
        Pe(r.$slots, "default")
      ])) : r.node.type === "strong" ? (q(), de("strong", Zw, [
        Pe(r.$slots, "default")
      ])) : r.node.type === "em" ? (q(), de("em", e0, [
        Pe(r.$slots, "default")
      ])) : r.node.type === "list-item" ? (q(), de("li", {
        key: 10,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, t0)) : r.node.type === "o-list-item" ? (q(), de("li", {
        key: 11,
        dir: n.value
      }, [
        Pe(r.$slots, "default")
      ], 8, n0)) : r.node.type === "group-list-item" ? (q(), de("ul", r0, [
        Pe(r.$slots, "default")
      ])) : r.node.type === "group-o-list-item" ? (q(), de("ol", o0, [
        Pe(r.$slots, "default")
      ])) : r.node.type === "image" ? (q(), de("p", s0, [
        r.node.linkTo ? (q(), oe(Ko, {
          key: 0,
          field: r.node.linkTo
        }, {
          default: Ne(() => [
            pe(qo, {
              field: r.node
            }, null, 8, [
              "field"
            ])
          ]),
          _: 1
        }, 8, [
          "field"
        ])) : (q(), oe(qo, {
          key: 1,
          field: r.node
        }, null, 8, [
          "field"
        ]))
      ])) : r.node.type === "embed" ? (q(), oe(Bi, {
        key: 15,
        field: r.node.oembed
      }, null, 8, [
        "field"
      ])) : r.node.type === "hyperlink" ? (q(), oe(Ko, {
        key: 16,
        field: r.node.data,
        "link-resolver": r.linkResolver
      }, {
        default: Ne(() => [
          Pe(r.$slots, "default")
        ]),
        _: 3
      }, 8, [
        "field",
        "link-resolver"
      ])) : r.node.type === "label" ? (q(), de("span", {
        key: 17,
        class: Ur(r.node.data.label)
      }, [
        Pe(r.$slots, "default")
      ], 2)) : (q(true), de(we, {
        key: 18
      }, Yn(r.node.text.split(`
`), (s, i) => (q(), de(we, {
        key: s
      }, [
        i > 0 ? (q(), de("br", i0)) : zt("", true),
        ir(Nt(s), 1)
      ], 64))), 128));
    }
  });
  a0 = he({
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
        return ((s = n.components) == null ? void 0 : s[t[o.type] || o.type]) || mc;
      }
      return (o, s) => {
        const i = oi("PrismicRichTextSerialize", true);
        return q(true), de(we, null, Yn(n.children, (a) => (q(), oe(Ge(r(a)), {
          key: JSON.stringify(a),
          node: a.node,
          "link-resolver": r(a) === mc ? n.linkResolver : void 0
        }, {
          default: Ne(() => [
            a.children.length ? (q(), oe(i, {
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
  Go = he({
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
      const t = e, { options: n } = to(), r = Y(() => {
        var a;
        return t.components || ((a = n.components) == null ? void 0 : a.richTextComponents);
      }), o = Y(() => t.linkResolver || n.linkResolver), s = Y(() => Nd(t.field || []).children), i = Y(() => {
        var a;
        return t.components ? true : t.serializer ? false : (a = n.components) != null && a.richTextComponents ? true : !n.richTextSerializer;
      });
      return (a, l) => i.value && (ie(cr).richText(e.field) || e.fallback) ? (q(), oe(ba, {
        key: 0,
        wrapper: e.wrapper
      }, {
        default: Ne(() => [
          s.value.length ? (q(), oe(a0, {
            key: 0,
            children: s.value,
            components: r.value,
            "link-resolver": o.value
          }, null, 8, [
            "children",
            "components",
            "link-resolver"
          ])) : (q(), oe(Ge(e.fallback), {
            key: 1
          }))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : i.value ? zt("", true) : (q(), oe(jw, {
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
  l0 = () => ({
    table: {
      type: Object,
      required: true
    }
  });
  c0 = () => ({
    head: {
      type: Object,
      required: true
    }
  });
  u0 = () => ({
    body: {
      type: Object,
      required: true
    }
  });
  f0 = () => ({
    row: {
      type: Object,
      required: true
    }
  });
  d0 = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  h0 = () => ({
    cell: {
      type: Object,
      required: true
    }
  });
  p0 = {
    table: he({
      props: l0(),
      setup(e, { slots: t }) {
        return () => Se("table", t.default ? t.default() : []);
      }
    }),
    thead: he({
      props: c0(),
      setup(e, { slots: t }) {
        return () => Se("thead", t.default ? t.default() : []);
      }
    }),
    tbody: he({
      props: u0(),
      setup(e, { slots: t }) {
        return () => Se("tbody", t.default ? t.default() : []);
      }
    }),
    tr: he({
      props: f0(),
      setup(e, { slots: t }) {
        return () => Se("tr", t.default ? t.default() : []);
      }
    }),
    th: he({
      props: d0(),
      setup(e, { slots: t }) {
        return () => Se("th", t.default ? t.default() : []);
      }
    }),
    td: he({
      props: h0(),
      setup(e, { slots: t }) {
        return () => Se("td", t.default ? t.default() : []);
      }
    })
  };
  gc = he({
    name: "PrismicTableRow",
    __name: "PrismicTableRow",
    props: {
      row: {},
      components: {}
    },
    setup(e) {
      const t = e;
      return (n, r) => (q(), oe(Ge(t.components.tr), {
        row: n.row
      }, {
        default: Ne(() => [
          (q(true), de(we, null, Yn(n.row.cells, (o) => (q(), de(we, {
            key: o.key
          }, [
            o.type === "header" ? (q(), oe(Ge(t.components.th), {
              key: 0,
              cell: o
            }, {
              default: Ne(() => [
                pe(Go, {
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
            ])) : (q(), oe(Ge(t.components.td), {
              key: 1,
              cell: o
            }, {
              default: Ne(() => [
                pe(Go, {
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
  yc = he({
    name: "PrismicTable",
    __name: "PrismicTable",
    props: {
      field: {},
      fallback: {},
      components: {}
    },
    setup(e) {
      const t = e, n = Y(() => ({
        ...p0,
        ...t.components
      }));
      return (r, o) => ie(cr).table(r.field) ? (q(), oe(Ge(n.value.table), Gr({
        key: 0,
        table: r.field
      }, r.$attrs), {
        default: Ne(() => [
          r.field.head ? (q(), oe(Ge(n.value.thead), {
            key: 0,
            head: r.field.head
          }, {
            default: Ne(() => [
              (q(true), de(we, null, Yn(r.field.head.rows, (s) => (q(), oe(gc, {
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
          (q(), oe(Ge(n.value.tbody), {
            body: r.field.body
          }, {
            default: Ne(() => [
              (q(true), de(we, null, Yn(r.field.body.rows, (s) => (q(), oe(gc, {
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
      ])) : (q(), oe(Ge(r.fallback), {
        key: 1
      }));
    }
  });
  m0 = () => null;
  vc = he({
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
      const t = e, { options: n } = to(), r = Y(() => t.slices.map((o, s) => {
        var i, a;
        const l = "slice_type" in o ? o.slice_type : o.type, u = "id" in o && typeof o.id == "string" ? o.id : `${s}-${JSON.stringify(o)}`, c = ((i = t.components) == null ? void 0 : i[l]) || t.defaultComponent || ((a = n.components) == null ? void 0 : a.sliceZoneDefaultComponent);
        if (!c) return {
          is: m0,
          key: u,
          props: {
            slice: o
          }
        };
        if (o.__mapped) {
          const { __mapped: f, ...h } = o;
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
            slice: o,
            index: s,
            context: t.context,
            slices: t.slices
          }
        };
      }));
      return (o, s) => o.slices ? (q(), oe(ba, {
        key: 0,
        wrapper: o.wrapper
      }, {
        default: Ne(() => [
          (q(true), de(we, null, Yn(r.value, (i) => (q(), oe(Ge(i.is), Gr({
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
  bc = he({
    name: "PrismicText",
    __name: "PrismicText",
    props: {
      field: {},
      fallback: {},
      separator: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => ie(cr).richText(t.field) || t.fallback ? (q(), oe(ba, {
        key: 0,
        wrapper: t.wrapper
      }, {
        default: Ne(() => [
          ir(Nt(ie(Id)(t.field) || t.fallback), 1)
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : zt("", true);
    }
  });
  g0 = (e) => {
    let t;
    return e.client ? t = e.client : t = rw(e.endpoint, e.clientConfig), {
      options: e,
      ...{
        client: t,
        filter: Pt,
        cookie: T_
      },
      ...{
        asText: Id,
        asHTML: (s, ...i) => {
          const [a, l] = i;
          return Fd(s, typeof a == "function" || a == null ? {
            linkResolver: a || e.linkResolver,
            serializer: l || e.richTextSerializer
          } : {
            linkResolver: e.linkResolver,
            serializer: e.richTextSerializer,
            ...a
          });
        },
        asLink: (s, i) => ys(s, typeof i == "function" ? {
          linkResolver: i
        } : {
          linkResolver: e.linkResolver,
          ...i
        }),
        asLinkAttrs: (s, i) => Md(s, {
          linkResolver: e.linkResolver,
          ...i
        }),
        asDate: _w,
        asImageSrc: Nw,
        asImageWidthSrcSet: Hd,
        asImagePixelDensitySrcSet: Ud,
        isFilled: cr,
        documentToLinkField: Pd
      },
      install(s) {
        s.provide(Vd, this), s.config.globalProperties.$prismic = this, e.injectComponents !== false && (s.component(Ko.name, Ko), s.component(Bi.name, Bi), s.component(qo.name, qo), s.component(yc.name, yc), s.component(bc.name, bc), s.component(Go.name, Go), s.component(vc.name, vc));
      }
    };
  };
  y0 = void 0;
  v0 = void 0;
  b0 = void 0;
  _0 = void 0;
  w0 = void 0;
  S0 = void 0;
  k0 = Ie({
    name: "prismic:setup",
    parallel: true,
    async setup(e) {
      var _a;
      const t = yn().public.prismic;
      let n;
      n = y0;
      const r = t.environment || t.endpoint || (n == null ? void 0 : n.documentAPIEndpoint) || "", o = g0({
        ...t,
        endpoint: r,
        client: n,
        linkResolver: v0,
        richTextSerializer: b0,
        injectComponents: false,
        components: {
          linkInternalComponent: Mi,
          linkExternalComponent: Mi,
          ...t.components,
          linkRel: _0,
          richTextComponents: w0,
          sliceZoneDefaultComponent: S0
        }
      });
      if (e.vueApp.use(o), t.preview) {
        const s = Nl("io.prismic.preview").value;
        if (s) try {
          const i = typeof s == "string" ? JSON.parse(decodeURIComponent(s)) : s;
          if (Object.keys(i).some((a) => a in i && typeof i[a] == "object" && i[a] !== null && "preview" in i[a] && i[a].preview)) {
            let a = false;
            ar(() => {
              a || Ai();
            }), Me().afterEach(() => {
              a = true, Ai();
            });
          }
        } catch (i) {
          console.warn("Failed to parse Prismic preview cookie", i);
        }
      }
      return t.toolbar && ((_a = o.client) == null ? void 0 : _a.repositoryName) ? Qf({
        script: [
          {
            key: "prismic-preview",
            src: `https://static.cdn.prismic.io/prismic.min.js?repo=${o.client.repositoryName}&new=true`,
            async: true,
            defer: true,
            crossorigin: "anonymous"
          }
        ]
      }) : Nl("io.prismic.preview").value = null, {
        provide: {
          prismic: o
        }
      };
    }
  });
  E0 = Ie(() => {
  });
  var _c = (e, t, n) => typeof e == "function" ? e(t, n) : e, St = Symbol("loaders"), Js = Symbol("loaderEntries"), R0 = Symbol(), wn = Symbol(), wc = Symbol(), wo = Symbol(), Ys = Symbol(), T0 = Symbol();
  function Sc(e) {
    return e && e[R0];
  }
  function kc(e) {
    e && e.length;
  }
  var C0 = Object.assign, P0 = Symbol();
  function A0({ router: e, app: t, effect: n, isSSR: r, errors: o = [], selectNavigationResult: s = (i) => i[0].value }) {
    if (e[Js] != null) return () => {
    };
    e[Js] = /* @__PURE__ */ new WeakMap(), e[wc] = t, e[T0] = !!r;
    const i = n.run(() => gt(false));
    t.provide(P0, i);
    const a = e.beforeEach((f) => {
      var _a;
      e[wn] && ((_a = e[wn].meta[wo]) == null ? void 0 : _a.abort()), e[wn] = f, f.meta[St] = /* @__PURE__ */ new Set(), f.meta[wo] = new AbortController(), f.meta[Ys] = [];
      const h = [];
      for (const d of f.matched) if (!d.meta[St]) {
        d.meta[St] = new Set(d.meta.loaders || []);
        for (const m in d.components) {
          const g = d.components[m], S = (x0(g) ? g() : Promise.resolve(g)).then((k) => {
            if (typeof k != "function") {
              for (const w in k) {
                const p = k[w];
                Sc(p) && d.meta[St].add(p);
              }
              if (Array.isArray(k.__loaders)) for (const w of k.__loaders) Sc(w) && d.meta[St].add(w);
            }
          });
          h.push(S);
        }
      }
      return Promise.all(h).then(() => {
        for (const d of f.matched) for (const m of d.meta[St]) f.meta[St].add(m);
      });
    }), l = e.beforeResolve((f, h) => {
      const d = Array.from(f.meta[St]);
      return kc([]), i.value = true, Promise.all(d.map((m) => {
        const { server: g, lazy: S, errors: k } = m._.options;
        if (!g && r) return;
        const w = n.run(() => t.runWithContext(() => m._.load(f, e, h)));
        return !r && _c(S, f, h) ? void 0 : w.catch((p) => {
          if (!k) throw p;
          if (k === true) {
            if (Array.isArray(o) ? o.some((v) => p instanceof v) : o(p)) return;
          } else if (Array.isArray(k) ? k.some((v) => p instanceof v) : k(p)) return;
          throw p;
        });
      })).then(() => {
        if (f.meta[Ys].length) return s(f.meta[Ys]);
      }).catch((m) => m instanceof O0 ? m.value : Promise.reject(m)).finally(() => {
        kc([]), i.value = false;
      });
    }), u = e.afterEach((f, h, d) => {
      var _a;
      if (d) {
        if ((_a = f.meta[wo]) == null ? void 0 : _a.abort(d), Et(d, 16)) for (const m of f.meta[St]) m._.getEntry(e).resetPending();
      } else for (const m of f.meta[St]) {
        const { commit: g, lazy: S } = m._.options;
        if (g === "after-load") {
          const k = m._.getEntry(e);
          k && (!_c(S, f, h) || !k.isLoading.value) && k.commit(f);
        }
      }
      e[wn] === f && (e[wn] = null);
    }), c = e.onError((f, h) => {
      var _a;
      (_a = h.meta[wo]) == null ? void 0 : _a.abort(f), e[wn] === h && (e[wn] = null);
    });
    return () => {
      delete e[Js], delete e[wc], a(), l(), u(), c();
    };
  }
  function x0(e) {
    return typeof e == "function" && !("displayName" in e) && !("props" in e) && !("emits" in e) && !("__vccOpts" in e);
  }
  var O0 = class {
    constructor(e) {
      this.value = e;
    }
  };
  function L0(e, t) {
    const n = Vr(true), r = A0(C0({
      app: e,
      effect: n
    }, t)), { unmount: o } = e;
    e.unmount = () => {
      n.stop(), r(), o.call(e);
    };
  }
  const M0 = Ie({
    name: "data-loaders",
    dependsOn: [
      "nuxt:router"
    ],
    setup(e) {
      e.vueApp.use(L0, {
        router: e.vueApp.config.globalProperties.$router,
        isSSR: false
      });
    }
  }), I0 = [
    Hy,
    Ab,
    Ob,
    Nb,
    Gb,
    Yb,
    Qb,
    Xb,
    Zb,
    e_,
    t_,
    n_,
    r_,
    o_,
    i_,
    __,
    w_,
    k0,
    E0,
    M0
  ], qd = (e = "RouteProvider") => he({
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
      const n = t.renderKey, r = t.route, o = {};
      for (const s in t.route) Object.defineProperty(o, s, {
        get: () => n === t.renderKey ? t.route[s] : r[s],
        enumerable: true
      });
      return Rn(zr, Ft(o)), () => Se(t.vnode, {
        ref: t.vnodeRef
      });
    }
  }), $0 = qd(), Ec = /* @__PURE__ */ new WeakMap(), N0 = he({
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
      const o = ye(), s = $e(), i = Re(zr, null);
      let a;
      r({
        pageRef: s
      });
      const l = Re($f, null);
      let u;
      const c = o.deferHydration();
      if (o.isHydrating) {
        const h = o.hooks.hookOnce("app:error", c);
        Me().beforeEach(h);
      }
      e.pageKey && nt(() => e.pageKey, (h, d) => {
        h !== d && o.callHook("page:loading:start");
      });
      let f = false;
      {
        const h = Me().beforeResolve(() => {
          f = false;
        });
        On(() => {
          h();
        });
      }
      return () => Se(_d, {
        name: e.name,
        route: e.route,
        ...t
      }, {
        default: (h) => {
          const d = D0(i, h.route, h.Component), m = i && i.matched.length === h.route.matched.length;
          if (!h.Component) {
            if (u && !m) return u;
            c();
            return;
          }
          if (u && l && !l.isCurrent(h.route)) return u;
          if (d && i && (!l || (l == null ? void 0 : l.isCurrent(i)))) return m ? u : null;
          const g = Ii(h, e.pageKey), S = j0(i, h.route, h.Component);
          !o.isHydrating && a === g && !S && (o.callHook("page:loading:end"), f = true), a = g;
          const k = !!(e.transition ?? h.route.meta.pageTransition ?? _i), w = k && B0([
            e.transition,
            h.route.meta.pageTransition,
            _i,
            {
              onAfterLeave: () => {
                o.callHook("page:transition:finish", h.Component);
              }
            }
          ]), p = e.keepalive ?? h.route.meta.keepalive ?? Cg;
          return u = wd(k && w, Hb(p, Se(ea, {
            suspensible: true,
            onPending: () => o.callHook("page:start", h.Component),
            onResolve: () => {
              Vt(() => o.callHook("page:finish", h.Component).then(() => {
                if (!f && !S) return f = true, o.callHook("page:loading:end");
              }).finally(c));
            }
          }, {
            default: () => {
              const v = {
                key: g || void 0,
                vnode: n.default ? F0(n.default, h) : h.Component,
                route: h.route,
                renderKey: g || void 0,
                trackRootNodes: k,
                vnodeRef: s
              };
              if (!p) return Se($0, v);
              const _ = h.Component.type, A = _;
              let M = Ec.get(A);
              return M || (M = qd(_.name || _.__name), Ec.set(A, M)), Se(M, v);
            }
          }))).default(), u;
        }
      });
    }
  });
  function B0(e) {
    const t = e.filter(Boolean).map((n) => ({
      ...n,
      onAfterLeave: n.onAfterLeave ? pa(n.onAfterLeave) : void 0
    }));
    return Mf(...t);
  }
  function D0(e, t, n) {
    if (!e) return false;
    const r = t.matched.findIndex((o) => {
      var _a;
      return ((_a = o.components) == null ? void 0 : _a.default) === (n == null ? void 0 : n.type);
    });
    return !r || r === -1 ? false : t.matched.slice(0, r).some((o, s) => {
      var _a, _b2, _c2;
      return ((_a = o.components) == null ? void 0 : _a.default) !== ((_c2 = (_b2 = e.matched[s]) == null ? void 0 : _b2.components) == null ? void 0 : _c2.default);
    }) || n && Ii({
      route: t,
      Component: n
    }) !== Ii({
      route: e,
      Component: n
    });
  }
  function j0(e, t, n) {
    return e ? t.matched.findIndex((o) => {
      var _a;
      return ((_a = o.components) == null ? void 0 : _a.default) === (n == null ? void 0 : n.type);
    }) < t.matched.length - 1 : false;
  }
  function F0(e, t) {
    const n = e(t);
    return n.length === 1 ? Se(n[0]) : Se(we, void 0, n);
  }
  let U0;
  H0 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
  U0 = {};
  function V0(e, t, n, r, o, s) {
    const i = N0;
    return q(), de("div", null, [
      pe(i)
    ]);
  }
  let W0, q0, K0, z0;
  W0 = H0(U0, [
    [
      "render",
      V0
    ]
  ]);
  q0 = he({
    name: "LayoutLoader",
    inheritAttrs: false,
    props: {
      name: String,
      layoutProps: Object
    },
    setup(e, t) {
      return () => Se(ln[e.name], e.layoutProps, t.slots);
    }
  });
  K0 = {
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
  G0 = he({
    name: "NuxtLayout",
    inheritAttrs: false,
    props: K0,
    setup(e, t) {
      const n = ye(), r = Re(zr), o = r === ds() ? pb() : r, s = Y(() => {
        let l = ie(e.name) ?? o.meta.layout ?? "default";
        return l && !(l in ln) && e.fallback && (l = ie(e.fallback)), l;
      }), i = $e();
      t.expose({
        layoutRef: i
      });
      const a = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", a);
        Me().beforeEach(l);
      }
      return () => {
        const l = s.value && s.value in ln, u = o.meta.layoutTransition ?? Rg;
        return wd(l && u, {
          default: () => Se(ea, {
            suspensible: true,
            onResolve: () => {
              Vt(a);
            }
          }, {
            default: () => Se(z0, {
              layoutProps: Gr(t.attrs, {
                ref: i
              }),
              key: s.value || void 0,
              name: s.value,
              shouldProvide: !e.name,
              hasTransition: !!u
            }, t.slots)
          })
        }).default();
      };
    }
  });
  z0 = he({
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
      return e.shouldProvide && Rn($f, {
        isCurrent: (r) => n === (r.meta.layout ?? "default")
      }), () => {
        var _a, _b2;
        return !n || typeof n == "string" && !(n in ln) ? (_b2 = (_a = t.slots).default) == null ? void 0 : _b2.call(_a) : Se(q0, {
          key: n,
          layoutProps: e.layoutProps,
          name: n
        }, t.slots);
      };
    }
  });
  var J0 = {};
  const Y0 = {
    "bg-neutral-100": "",
    "f-pt-2xl": ""
  }, Q0 = {
    "f-mt-lg": "",
    flex: "~ md:justify-center"
  }, X0 = {
    "nq-prose-compact": "",
    "w-full": "",
    "f-mt-lg": ""
  }, Z0 = {
    bg: "red/10",
    "text-red-1100": "",
    "outline-red-600": ""
  }, eS = {
    bg: "red/10",
    "mt-4": "",
    "text-red-1100": "",
    "outline-red-600": ""
  }, tS = he({
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
      }), o = ds(), s = Me(), i = Y(() => o.path.startsWith("/developer") || o.path.startsWith("/developers") || o.path.includes("/dev/") || o.path.includes("/docs/")), a = Y(() => t.error.message === "Article not found"), l = Y(() => o.path.startsWith("/blog") || a.value);
      pn(() => {
        if (i.value || J0.REDIRECT_ALL_ERRORS === "true") {
          const g = encodeURIComponent(o.fullPath);
          s.push(`/developers/error?original-path=${g}&status=${n.value}`);
        }
      });
      const u = Y(() => l.value ? "/blog" : "/"), c = Y(() => l.value ? "Browse all articles" : "Back to home"), f = () => Bf({
        redirect: u.value
      });
      Qf({
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
      }), m = t.error.stack;
      return delete t.error.stack, (g, S) => {
        const k = Mi, w = G0;
        return q(), oe(w, null, {
          default: Ne(() => [
            et("section", Y0, [
              et("h1", null, Nt(ie(h)), 1),
              et("p", null, Nt(ie(d)), 1),
              et("div", Q0, [
                pe(k, {
                  to: ie(u),
                  "nq-arrow": "",
                  "nq-pill-lg": "",
                  "nq-pill-blue": "",
                  onClick: f
                }, {
                  default: Ne(() => [
                    ir(Nt(ie(c)), 1)
                  ]),
                  _: 1
                }, 8, [
                  "to"
                ])
              ]),
              et("div", X0, [
                et("details", null, [
                  S[0] || (S[0] = et("summary", {
                    "w-full": "",
                    "cursor-pointer": "",
                    text: "center neutral-800"
                  }, [
                    et("span", null, "Details")
                  ], -1)),
                  et("pre", Z0, Nt(g.error), 1),
                  S[1] || (S[1] = et("span", {
                    "text-red-1100": "",
                    "nq-label": "",
                    "f-px-sm": "",
                    "f-mt-md": ""
                  }, "Stack", -1)),
                  et("pre", eS, Nt(ie(m)), 1)
                ])
              ])
            ])
          ]),
          _: 1
        });
      };
    }
  }), nS = {
    key: 0
  }, Rc = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null, n = ye(), r = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", r);
        Me().beforeEach(l);
      }
      const o = false;
      Rn(zr, ds()), n.hooks.callHookWith((l) => l.map((u) => u()), "vue:setup");
      const s = hs(), i = false;
      _u((l, u, c) => {
        if (n.hooks.callHook("vue:error", l, u, c).catch((f) => console.error("[nuxt] Error in `vue:error` hook", f)), Df(l) && (l.fatal || l.unhandled)) return n.runWithContext(() => rn(l)), false;
      });
      const a = false;
      return (l, u) => (q(), oe(ea, {
        onResolve: ie(r)
      }, {
        default: Ne(() => [
          ie(i) ? (q(), de("div", nS)) : ie(s) ? (q(), oe(ie(tS), {
            key: 1,
            error: ie(s)
          }, null, 8, [
            "error"
          ])) : ie(a) ? (q(), oe(ie(t), {
            key: 2,
            context: ie(a)
          }, null, 8, [
            "context"
          ])) : ie(o) ? (q(), oe(Ge(ie(o)), {
            key: 3
          })) : (q(), oe(ie(W0), {
            key: 4
          }))
        ]),
        _: 1
      }, 8, [
        "onResolve"
      ]));
    }
  };
  let Tc;
  {
    let e;
    Tc = async function() {
      var _a, _b2;
      if (e) return e;
      const n = !!(((_a = window.__NUXT__) == null ? void 0 : _a.serverRendered) ?? ((_b2 = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b2.dataset.ssr) === "true"), r = n ? _m(Rc) : bm(Rc), o = Mg({
        vueApp: r
      });
      async function s(i) {
        var _a2;
        await o.callHook("app:error", i), (_a2 = o.payload).error || (_a2.error = Jr(i));
      }
      r.config.errorHandler = s, o.hook("app:suspense:resolve", () => {
        r.config.errorHandler === s && (r.config.errorHandler = void 0);
      }), !n && dl.id && o.hook("app:suspense:resolve", () => {
        var _a2;
        (_a2 = document.getElementById(dl.id)) == null ? void 0 : _a2.remove();
      });
      try {
        await Ng(o, I0);
      } catch (i) {
        s(i);
      }
      try {
        await o.hooks.callHook("app:created", r), await o.hooks.callHook("app:beforeMount", r), r.mount(xg), await o.hooks.callHook("app:mounted", r), await Vt();
      } catch (i) {
        s(i);
      }
      return r;
    }, e = Tc().catch((t) => {
      throw console.error("Error while mounting app:", t), t;
    });
  }
})();
export {
  wS as $,
  AS as A,
  $e as B,
  bc as C,
  qo as D,
  pn as E,
  we as F,
  ss as G,
  Se as H,
  qn as I,
  Ma as J,
  jt as K,
  nt as L,
  ye as M,
  Kt as N,
  Cn as O,
  gt as P,
  Yf as Q,
  Pe as R,
  Oc as S,
  Ju as T,
  Ch as U,
  gp as V,
  SS as W,
  sS as X,
  Ko as Y,
  lS as Z,
  Mi as _,
  __tla,
  pe as a,
  Ll as a$,
  lt as a0,
  Vt as a1,
  On as a2,
  qp as a3,
  nv as a4,
  yS as a5,
  fS as a6,
  pS as a7,
  Me as a8,
  oS as a9,
  TS as aA,
  qm as aB,
  Mm as aC,
  ES as aD,
  cS as aE,
  Id as aF,
  Nw as aG,
  sw as aH,
  vs as aI,
  ys as aJ,
  ya as aK,
  _w as aL,
  sr as aM,
  Zc as aN,
  Gi as aO,
  Qi as aP,
  rs as aQ,
  rS as aR,
  rt as aS,
  hS as aT,
  uS as aU,
  xe as aV,
  Wt as aW,
  Vr as aX,
  _s as aY,
  pb as aZ,
  LS as a_,
  _S as aa,
  _e as ab,
  Pt as ac,
  ar as ad,
  ny as ae,
  PS as af,
  Qy as ag,
  Lt as ah,
  yp as ai,
  Ge as aj,
  mS as ak,
  Op as al,
  re as am,
  Rn as an,
  Re as ao,
  bm as ap,
  iS as aq,
  xS as ar,
  it as as,
  aS as at,
  Mf as au,
  RS as av,
  Mt as aw,
  fs as ax,
  na as ay,
  _f as az,
  oe as b,
  CS as b0,
  MS as b1,
  Hi as b2,
  vS as b3,
  qg as b4,
  Go as b5,
  bS as b6,
  kS as b7,
  gS as b8,
  de as c,
  he as d,
  et as e,
  zt as f,
  ir as g,
  Xo as h,
  H0 as i,
  Y as j,
  G0 as k,
  ds as l,
  Gr as m,
  Ur as n,
  q as o,
  yn as p,
  to as q,
  Yn as r,
  dS as s,
  Nt as t,
  ie as u,
  Jr as v,
  Ne as w,
  Qf as x,
  OS as y,
  vc as z
};
