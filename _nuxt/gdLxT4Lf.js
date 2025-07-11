const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./onepager.BMUVdREQ.css","./B0c03Pz8.js","./PbyW9z4c.js","./BpR0sf--.js","./D7zdd4-D.js","./DzQE7UG-.js","./DMT-qPN2.js","./De1jwUL-.js","./ViQ2U2w0.js","./BI3535uL.js","./Tooltip.D6mGYcHM.css","./eRMYwULF.js","./DYDUvkDP.js","./roadmap.D5eBsHDI.css","./CVLTLgFR.js","./Bvmk-0R2.js","./YC087HFc.js","./B56Ni7Ok.js","./BkD-9BkF.js","./CLg1Ps0o.js","./YVdRCWya.js","./ZiJUCFG6.js","./DgLsviBm.js","./Dcb2Q0rD.js","./_post_.Bq3qrgvB.css","./BjZV1MlI.js","./CqkleIqs.js","./DWPI3UO7.js","./Cvfmqeyy.js","./D0DW2WUk.js","./Blockchain.BxxfcmTf.css","./Cv2xV2PH.js","./BQZN2xSV.js","./DzxZsifD.js","./B8QP58w5.js","./BBT8-0pw.js","./CHIgUVhi.js","./BgZlBkZ2.js","./CGZYdvc8.js","./CQe4QTkE.js","./Das-W0SA.js","./DnoBqyUI.js","./default.DykzsU7F.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
let xS, wc, Ce, Sc, Ko, vt, Se, ls, pe, Kn, $a, un, ye, Jt, yn, ut, Xf, xe, Ic, Qu, Mh, Sp, OS, pS, Qe, Go, yS, Ni, me, SS, Xe, Mt, Ln, Qp, Re, mn, vS, Su, Zh, Xi, jS, rt, RS, $f, IS, $t, ps, oa, Sf, $S, Qm, MS, jm, Fd, pw, qw, ws, _s, ba, Aw, ir, nu, ss, is, Wr, dS, st, Te, bt, US, _b, TS, _S, kS, Ne, zo, hS, AS, we, At, lr, cy, BS, HS, ov, It, Ge, kp, ES, Bp, re, Rm, gS, oe, bS, mS, ks, ab, FS, CS, Xg, $l, NS, Oc, PS, LS, de, he, nt, Qt, ar, es, Y0, Q, Zf, nS, zr, Vr, q, ms, bn, Qn, to, Dt, ie, wS, $e, gn, DS, VS;
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
  function Hi(e) {
    const t = /* @__PURE__ */ Object.create(null);
    for (const n of e.split(",")) t[n] = 1;
    return (n) => n in t;
  }
  let ae, Un, Ot, Xd, Ur, Ui, Pe, Vi, Zd, ue, K, Vn, Jo, Ea, eh, te, ke, gt, ge, Yo, xc, or, th, Wi, Wn, Qo, nh, rh, zt, Xo, qe, qn, Lc, ni, Mc;
  ae = {};
  Un = [];
  Ot = () => {
  };
  Xd = () => false;
  Ur = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97);
  Ui = (e) => e.startsWith("onUpdate:");
  Pe = Object.assign;
  Vi = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
  Zd = Object.prototype.hasOwnProperty;
  ue = (e, t) => Zd.call(e, t);
  K = Array.isArray;
  Vn = (e) => or(e) === "[object Map]";
  Jo = (e) => or(e) === "[object Set]";
  Ea = (e) => or(e) === "[object Date]";
  eh = (e) => or(e) === "[object RegExp]";
  te = (e) => typeof e == "function";
  ke = (e) => typeof e == "string";
  gt = (e) => typeof e == "symbol";
  ge = (e) => e !== null && typeof e == "object";
  Yo = (e) => (ge(e) || te(e)) && te(e.then) && te(e.catch);
  xc = Object.prototype.toString;
  or = (e) => xc.call(e);
  th = (e) => or(e).slice(8, -1);
  Oc = (e) => or(e) === "[object Object]";
  Wi = (e) => ke(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e;
  Wn = Hi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  Qo = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  };
  nh = /-(\w)/g;
  st = Qo((e) => e.replace(nh, (t, n) => n ? n.toUpperCase() : ""));
  rh = /\B([A-Z])/g;
  zt = Qo((e) => e.replace(rh, "-$1").toLowerCase());
  Xo = Qo((e) => e.charAt(0).toUpperCase() + e.slice(1));
  ks = Qo((e) => e ? `on${Xo(e)}` : "");
  qe = (e, t) => !Object.is(e, t);
  qn = (e, ...t) => {
    for (let n = 0; n < e.length; n++) e[n](...t);
  };
  Lc = (e, t, n, r = false) => {
    Object.defineProperty(e, t, {
      configurable: true,
      enumerable: false,
      writable: r,
      value: n
    });
  };
  ni = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
  Mc = (e) => {
    const t = ke(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let Ra;
  const Zo = () => Ra || (Ra = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  es = function(e) {
    if (K(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], o = ke(r) ? ah(r) : es(r);
        if (o) for (const s in o) t[s] = o[s];
      }
      return t;
    } else if (ke(e) || ge(e)) return e;
  };
  const oh = /;(?![^(]*\))/g, sh = /:([^]+)/, ih = /\/\*[^]*?\*\//g;
  function ah(e) {
    const t = {};
    return e.replace(ih, "").split(oh).forEach((n) => {
      if (n) {
        const r = n.split(sh);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  Vr = function(e) {
    let t = "";
    if (ke(e)) t = e;
    else if (K(e)) for (let n = 0; n < e.length; n++) {
      const r = Vr(e[n]);
      r && (t += r + " ");
    }
    else if (ge(e)) for (const n in e) e[n] && (t += n + " ");
    return t.trim();
  };
  Ic = function(e) {
    if (!e) return null;
    let { class: t, style: n } = e;
    return t && !ke(t) && (e.class = Vr(t)), n && (e.style = es(n)), e;
  };
  const lh = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ch = Hi(lh);
  function $c(e) {
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
    let n = Ea(e), r = Ea(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : false;
    if (n = gt(e), r = gt(t), n || r) return e === t;
    if (n = K(e), r = K(t), n || r) return n && r ? uh(e, t) : false;
    if (n = ge(e), r = ge(t), n || r) {
      if (!n || !r) return false;
      const o = Object.keys(e).length, s = Object.keys(t).length;
      if (o !== s) return false;
      for (const i in e) {
        const a = e.hasOwnProperty(i), l = t.hasOwnProperty(i);
        if (a && !l || !a && l || !Yn(e[i], t[i])) return false;
      }
    }
    return String(e) === String(t);
  }
  function Nc(e, t) {
    return e.findIndex((n) => Yn(n, t));
  }
  let Bc, Dc, Es;
  Bc = (e) => !!(e && e.__v_isRef === true);
  Dt = (e) => ke(e) ? e : e == null ? "" : K(e) || ge(e) && (e.toString === xc || !te(e.toString)) ? Bc(e) ? Dt(e.value) : JSON.stringify(e, Dc, 2) : String(e);
  Dc = (e, t) => Bc(t) ? Dc(e, t.value) : Vn(t) ? {
    [`Map(${t.size})`]: [
      ...t.entries()
    ].reduce((n, [r, o], s) => (n[Es(r, s) + " =>"] = o, n), {})
  } : Jo(t) ? {
    [`Set(${t.size})`]: [
      ...t.values()
    ].map((n) => Es(n))
  } : gt(t) ? Es(t) : ge(t) && !K(t) && !Oc(t) ? String(t) : t;
  Es = (e, t = "") => {
    var n;
    return gt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e;
  };
  let je;
  class jc {
    constructor(t = false) {
      this.detached = t, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = je, !t && je && (this.index = (je.scopes || (je.scopes = [])).push(this) - 1);
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
        const n = je;
        try {
          return je = this, t();
        } finally {
          je = n;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = je, je = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (je = this.prevScope, this.prevScope = void 0);
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
  Wr = function(e) {
    return new jc(e);
  };
  Jt = function() {
    return je;
  };
  yn = function(e, t = false) {
    je && je.cleanups.push(e);
  };
  let _e;
  const Rs = /* @__PURE__ */ new WeakSet();
  class Fc {
    constructor(t) {
      this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && je.active && je.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, Rs.has(this) && (Rs.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Uc(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, Ta(this), Vc(this);
      const t = _e, n = mt;
      _e = this, mt = true;
      try {
        return this.fn();
      } finally {
        Wc(this), _e = t, mt = n, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let t = this.deps; t; t = t.nextDep) Gi(t);
        this.deps = this.depsTail = void 0, Ta(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? Rs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      ri(this) && this.run();
    }
    get dirty() {
      return ri(this);
    }
  }
  let Hc = 0, _r, wr;
  function Uc(e, t = false) {
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
  function Vc(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
  }
  function Wc(e) {
    let t, n = e.depsTail, r = n;
    for (; r; ) {
      const o = r.prevDep;
      r.version === -1 ? (r === n && (n = o), Gi(r), fh(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
    }
    e.deps = t, e.depsTail = n;
  }
  function ri(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (qc(t.dep.computed) || t.dep.version !== t.version)) return true;
    return !!e._dirty;
  }
  function qc(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Or) || (e.globalVersion = Or, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ri(e)))) return;
    e.flags |= 2;
    const t = e.dep, n = _e, r = mt;
    _e = e, mt = true;
    try {
      Vc(e);
      const o = e.fn(e._value);
      (t.version === 0 || qe(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
    } catch (o) {
      throw t.version++, o;
    } finally {
      _e = n, mt = r, Wc(e), e.flags &= -3;
    }
  }
  function Gi(e, t = false) {
    const { dep: n, prevSub: r, nextSub: o } = e;
    if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
      n.computed.flags &= -5;
      for (let s = n.computed.deps; s; s = s.nextDep) Gi(s, true);
    }
    !t && !--n.sc && n.map && n.map.delete(n.key);
  }
  function fh(e) {
    const { prevDep: t, nextDep: n } = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
  }
  let mt = true;
  const Kc = [];
  function qt() {
    Kc.push(mt), mt = false;
  }
  function Kt() {
    const e = Kc.pop();
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
  class ts {
    constructor(t) {
      this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0;
    }
    track(t) {
      if (!_e || !mt || _e === this.computed) return;
      let n = this.activeLink;
      if (n === void 0 || n.sub !== _e) n = this.activeLink = new dh(_e, this), _e.deps ? (n.prevDep = _e.depsTail, _e.depsTail.nextDep = n, _e.depsTail = n) : _e.deps = _e.depsTail = n, Gc(n);
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
  function Gc(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
      const t = e.dep.computed;
      if (t && !e.dep.subs) {
        t.flags |= 20;
        for (let r = t.deps; r; r = r.nextDep) Gc(r);
      }
      const n = e.dep.subs;
      n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
    }
  }
  const Po = /* @__PURE__ */ new WeakMap(), Tn = Symbol(""), oi = Symbol(""), Lr = Symbol("");
  function Fe(e, t, n) {
    if (mt && _e) {
      let r = Po.get(e);
      r || Po.set(e, r = /* @__PURE__ */ new Map());
      let o = r.get(n);
      o || (r.set(n, o = new ts()), o.map = r, o.key = n), o.track();
    }
  }
  function jt(e, t, n, r, o, s) {
    const i = Po.get(e);
    if (!i) {
      Or++;
      return;
    }
    const a = (l) => {
      l && l.trigger();
    };
    if (qi(), t === "clear") i.forEach(a);
    else {
      const l = K(e), u = l && Wi(n);
      if (l && n === "length") {
        const c = Number(r);
        i.forEach((f, h) => {
          (h === "length" || h === Lr || !gt(h) && h >= c) && a(f);
        });
      } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), u && a(i.get(Lr)), t) {
        case "add":
          l ? u && a(i.get("length")) : (a(i.get(Tn)), Vn(e) && a(i.get(oi)));
          break;
        case "delete":
          l || (a(i.get(Tn)), Vn(e) && a(i.get(oi)));
          break;
        case "set":
          Vn(e) && a(i.get(Tn));
          break;
      }
    }
    Ki();
  }
  function hh(e, t) {
    const n = Po.get(e);
    return n && n.get(t);
  }
  function $n(e) {
    const t = re(e);
    return t === e ? t : (Fe(t, "iterate", Lr), ct(e) ? t : t.map(Be));
  }
  function ns(e) {
    return Fe(e = re(e), "iterate", Lr), e;
  }
  const ph = {
    __proto__: null,
    [Symbol.iterator]() {
      return Ts(this, Symbol.iterator, Be);
    },
    concat(...e) {
      return $n(this).concat(...e.map((t) => K(t) ? $n(t) : t));
    },
    entries() {
      return Ts(this, "entries", (e) => (e[1] = Be(e[1]), e));
    },
    every(e, t) {
      return Nt(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
      return Nt(this, "filter", e, t, (n) => n.map(Be), arguments);
    },
    find(e, t) {
      return Nt(this, "find", e, t, Be, arguments);
    },
    findIndex(e, t) {
      return Nt(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
      return Nt(this, "findLast", e, t, Be, arguments);
    },
    findLastIndex(e, t) {
      return Nt(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
      return Nt(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
      return Cs(this, "includes", e);
    },
    indexOf(...e) {
      return Cs(this, "indexOf", e);
    },
    join(e) {
      return $n(this).join(e);
    },
    lastIndexOf(...e) {
      return Cs(this, "lastIndexOf", e);
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
      return Ca(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
      return Ca(this, "reduceRight", e, t);
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
      return Ts(this, "values", Be);
    }
  };
  function Ts(e, t, n) {
    const r = ns(e), o = r[t]();
    return r !== e && !ct(e) && (o._next = o.next, o.next = () => {
      const s = o._next();
      return s.value && (s.value = n(s.value)), s;
    }), o;
  }
  const mh = Array.prototype;
  function Nt(e, t, n, r, o, s) {
    const i = ns(e), a = i !== e && !ct(e), l = i[t];
    if (l !== mh[t]) {
      const f = l.apply(e, s);
      return a ? Be(f) : f;
    }
    let u = n;
    i !== e && (a ? u = function(f, h) {
      return n.call(this, Be(f), h, e);
    } : n.length > 2 && (u = function(f, h) {
      return n.call(this, f, h, e);
    }));
    const c = l.call(i, u, r);
    return a && o ? o(c) : c;
  }
  function Ca(e, t, n, r) {
    const o = ns(e);
    let s = n;
    return o !== e && (ct(e) ? n.length > 3 && (s = function(i, a, l) {
      return n.call(this, i, a, l, e);
    }) : s = function(i, a, l) {
      return n.call(this, i, Be(a), l, e);
    }), o[t](s, ...r);
  }
  function Cs(e, t, n) {
    const r = re(e);
    Fe(r, "iterate", Lr);
    const o = r[t](...n);
    return (o === -1 || o === false) && zi(n[0]) ? (n[0] = re(n[0]), r[t](...n)) : o;
  }
  function dr(e, t, n = []) {
    qt(), qi();
    const r = re(e)[t].apply(e, n);
    return Ki(), Kt(), r;
  }
  const gh = Hi("__proto__,__v_isRef,__isVue"), zc = new Set(Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(gt));
  function yh(e) {
    gt(e) || (e = String(e));
    const t = re(this);
    return Fe(t, "has", e), t.hasOwnProperty(e);
  }
  class Jc {
    constructor(t = false, n = false) {
      this._isReadonly = t, this._isShallow = n;
    }
    get(t, n, r) {
      if (n === "__v_skip") return t.__v_skip;
      const o = this._isReadonly, s = this._isShallow;
      if (n === "__v_isReactive") return !o;
      if (n === "__v_isReadonly") return o;
      if (n === "__v_isShallow") return s;
      if (n === "__v_raw") return r === (o ? s ? tu : eu : s ? Zc : Xc).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
      const i = K(t);
      if (!o) {
        let l;
        if (i && (l = ph[n])) return l;
        if (n === "hasOwnProperty") return yh;
      }
      const a = Reflect.get(t, n, we(t) ? t : r);
      return (gt(n) ? zc.has(n) : gh(n)) || (o || Fe(t, "get", n), s) ? a : we(a) ? i && Wi(n) ? a : a.value : ge(a) ? o ? nu(a) : It(a) : a;
    }
  }
  class Yc extends Jc {
    constructor(t = false) {
      super(false, t);
    }
    set(t, n, r, o) {
      let s = t[n];
      if (!this._isShallow) {
        const l = Gt(s);
        if (!ct(r) && !Gt(r) && (s = re(s), r = re(r)), !K(t) && we(s) && !we(r)) return l ? false : (s.value = r, true);
      }
      const i = K(t) && Wi(n) ? Number(n) < t.length : ue(t, n), a = Reflect.set(t, n, r, we(t) ? t : o);
      return t === re(o) && (i ? qe(r, s) && jt(t, "set", n, r) : jt(t, "add", n, r)), a;
    }
    deleteProperty(t, n) {
      const r = ue(t, n);
      t[n];
      const o = Reflect.deleteProperty(t, n);
      return o && r && jt(t, "delete", n, void 0), o;
    }
    has(t, n) {
      const r = Reflect.has(t, n);
      return (!gt(n) || !zc.has(n)) && Fe(t, "has", n), r;
    }
    ownKeys(t) {
      return Fe(t, "iterate", K(t) ? "length" : Tn), Reflect.ownKeys(t);
    }
  }
  class Qc extends Jc {
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
  const vh = new Yc(), bh = new Qc(), _h = new Yc(true), wh = new Qc(true), si = (e) => e, ro = (e) => Reflect.getPrototypeOf(e);
  function Sh(e, t, n) {
    return function(...r) {
      const o = this.__v_raw, s = re(o), i = Vn(s), a = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, u = o[e](...r), c = n ? si : t ? Ao : Be;
      return !t && Fe(s, "iterate", l ? oi : Tn), {
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
  function kh(e, t) {
    const n = {
      get(o) {
        const s = this.__v_raw, i = re(s), a = re(o);
        e || (qe(o, a) && Fe(i, "get", o), Fe(i, "get", a));
        const { has: l } = ro(i), u = t ? si : e ? Ao : Be;
        if (l.call(i, o)) return u(s.get(o));
        if (l.call(i, a)) return u(s.get(a));
        s !== i && s.get(o);
      },
      get size() {
        const o = this.__v_raw;
        return !e && Fe(re(o), "iterate", Tn), Reflect.get(o, "size", o);
      },
      has(o) {
        const s = this.__v_raw, i = re(s), a = re(o);
        return e || (qe(o, a) && Fe(i, "has", o), Fe(i, "has", a)), o === a ? s.has(o) : s.has(o) || s.has(a);
      },
      forEach(o, s) {
        const i = this, a = i.__v_raw, l = re(a), u = t ? si : e ? Ao : Be;
        return !e && Fe(l, "iterate", Tn), a.forEach((c, f) => o.call(s, u(c), u(f), i));
      }
    };
    return Pe(n, e ? {
      add: oo("add"),
      set: oo("set"),
      delete: oo("delete"),
      clear: oo("clear")
    } : {
      add(o) {
        !t && !ct(o) && !Gt(o) && (o = re(o));
        const s = re(this);
        return ro(s).has.call(s, o) || (s.add(o), jt(s, "add", o, o)), this;
      },
      set(o, s) {
        !t && !ct(s) && !Gt(s) && (s = re(s));
        const i = re(this), { has: a, get: l } = ro(i);
        let u = a.call(i, o);
        u || (o = re(o), u = a.call(i, o));
        const c = l.call(i, o);
        return i.set(o, s), u ? qe(s, c) && jt(i, "set", o, s) : jt(i, "add", o, s), this;
      },
      delete(o) {
        const s = re(this), { has: i, get: a } = ro(s);
        let l = i.call(s, o);
        l || (o = re(o), l = i.call(s, o)), a && a.call(s, o);
        const u = s.delete(o);
        return l && jt(s, "delete", o, void 0), u;
      },
      clear() {
        const o = re(this), s = o.size !== 0, i = o.clear();
        return s && jt(o, "clear", void 0, void 0), i;
      }
    }), [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ].forEach((o) => {
      n[o] = Sh(o, e, t);
    }), n;
  }
  function rs(e, t) {
    const n = kh(e, t);
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(ue(n, o) && o in r ? n : r, o, s);
  }
  const Eh = {
    get: rs(false, false)
  }, Rh = {
    get: rs(false, true)
  }, Th = {
    get: rs(true, false)
  }, Ch = {
    get: rs(true, true)
  }, Xc = /* @__PURE__ */ new WeakMap(), Zc = /* @__PURE__ */ new WeakMap(), eu = /* @__PURE__ */ new WeakMap(), tu = /* @__PURE__ */ new WeakMap();
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
    return Gt(e) ? e : os(e, false, vh, Eh, Xc);
  };
  function Ht(e) {
    return os(e, false, _h, Rh, Zc);
  }
  nu = function(e) {
    return os(e, true, bh, Th, eu);
  };
  dS = function(e) {
    return os(e, true, wh, Ch, tu);
  };
  function os(e, t, n, r, o) {
    if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = Ah(e);
    if (s === 0) return e;
    const i = o.get(e);
    if (i) return i;
    const a = new Proxy(e, s === 2 ? r : n);
    return o.set(e, a), a;
  }
  function Lt(e) {
    return Gt(e) ? Lt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function Gt(e) {
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
    return !ue(e, "__v_skip") && Object.isExtensible(e) && Lc(e, "__v_skip", true), e;
  };
  const Be = (e) => ge(e) ? It(e) : e, Ao = (e) => ge(e) ? nu(e) : e;
  we = function(e) {
    return e ? e.__v_isRef === true : false;
  };
  Ce = function(e) {
    return ru(e, false);
  };
  ut = function(e) {
    return ru(e, true);
  };
  function ru(e, t) {
    return we(e) ? e : new xh(e, t);
  }
  class xh {
    constructor(t, n) {
      this.dep = new ts(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = n ? t : re(t), this._value = n ? t : Be(t), this.__v_isShallow = n;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(t) {
      const n = this._rawValue, r = this.__v_isShallow || ct(t) || Gt(t);
      t = r ? t : re(t), qe(t, n) && (this._rawValue = t, this._value = r ? t : Be(t), this.dep.trigger());
    }
  }
  ie = function(e) {
    return we(e) ? e.value : e;
  };
  rt = function(e) {
    return te(e) ? e() : ie(e);
  };
  const Oh = {
    get: (e, t, n) => t === "__v_raw" ? e : ie(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const o = e[t];
      return we(o) && !we(n) ? (o.value = n, true) : Reflect.set(e, t, n, r);
    }
  };
  function ou(e) {
    return Lt(e) ? e : new Proxy(e, Oh);
  }
  class Lh {
    constructor(t) {
      this.__v_isRef = true, this._value = void 0;
      const n = this.dep = new ts(), { get: r, set: o } = t(n.track.bind(n), n.trigger.bind(n));
      this._get = r, this._set = o;
    }
    get value() {
      return this._value = this._get();
    }
    set value(t) {
      this._set(t);
    }
  }
  ss = function(e) {
    return new Lh(e);
  };
  Mh = function(e) {
    const t = K(e) ? new Array(e.length) : {};
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
  is = function(e, t, n) {
    return we(e) ? e : te(e) ? new $h(e) : ge(e) && arguments.length > 1 ? su(e, t, n) : Ce(e);
  };
  function su(e, t, n) {
    const r = e[t];
    return we(r) ? r : new Ih(e, t, n);
  }
  class Nh {
    constructor(t, n, r) {
      this.fn = t, this.setter = n, this._value = void 0, this.dep = new ts(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Or - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && _e !== this) return Uc(this, true), true;
    }
    get value() {
      const t = this.dep.track();
      return qc(this), t && (t.version = this.dep.version), this._value;
    }
    set value(t) {
      this.setter && this.setter(t);
    }
  }
  function Bh(e, t, n = false) {
    let r, o;
    return te(e) ? r = e : (r = e.get, o = e.set), new Nh(r, o, n);
  }
  const so = {}, xo = /* @__PURE__ */ new WeakMap();
  let En;
  function Dh(e, t = false, n = En) {
    if (n) {
      let r = xo.get(n);
      r || xo.set(n, r = []), r.push(e);
    }
  }
  function jh(e, t, n = ae) {
    const { immediate: r, deep: o, once: s, scheduler: i, augmentJob: a, call: l } = n, u = (v) => o ? v : ct(v) || o === false || o === 0 ? Ft(v, 1) : Ft(v);
    let c, f, h, d, p = false, y = false;
    if (we(e) ? (f = () => e.value, p = ct(e)) : Lt(e) ? (f = () => u(e), p = true) : K(e) ? (y = true, p = e.some((v) => Lt(v) || ct(v)), f = () => e.map((v) => {
      if (we(v)) return v.value;
      if (Lt(v)) return u(v);
      if (te(v)) return l ? l(v, 2) : v();
    })) : te(e) ? t ? f = l ? () => l(e, 2) : e : f = () => {
      if (h) {
        qt();
        try {
          h();
        } finally {
          Kt();
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
    } : f = Ot, t && o) {
      const v = f, w = o === true ? 1 / 0 : o;
      f = () => Ft(v(), w);
    }
    const S = Jt(), k = () => {
      c.stop(), S && S.active && Vi(S.effects, c);
    };
    if (s && t) {
      const v = t;
      t = (...w) => {
        v(...w), k();
      };
    }
    let _ = y ? new Array(e.length).fill(so) : so;
    const m = (v) => {
      if (!(!(c.flags & 1) || !c.dirty && !v)) if (t) {
        const w = c.run();
        if (o || p || (y ? w.some((A, M) => qe(A, _[M])) : qe(w, _))) {
          h && h();
          const A = En;
          En = c;
          try {
            const M = [
              w,
              _ === so ? void 0 : y && _[0] === so ? [] : _,
              d
            ];
            l ? l(t, 3, M) : t(...M), _ = w;
          } finally {
            En = A;
          }
        }
      } else c.run();
    };
    return a && a(m), c = new Fc(f), c.scheduler = i ? () => i(m, false) : m, d = (v) => Dh(v, false, c), h = c.onStop = () => {
      const v = xo.get(c);
      if (v) {
        if (l) l(v, 4);
        else for (const w of v) w();
        xo.delete(c);
      }
    }, t ? r ? m(true) : _ = c.run() : i ? i(m.bind(null, true), true) : c.run(), k.pause = c.pause.bind(c), k.resume = c.resume.bind(c), k.stop = k, k;
  }
  function Ft(e, t = 1 / 0, n) {
    if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e))) return e;
    if (n.add(e), t--, we(e)) Ft(e.value, t, n);
    else if (K(e)) for (let r = 0; r < e.length; r++) Ft(e[r], t, n);
    else if (Jo(e) || Vn(e)) e.forEach((r) => {
      Ft(r, t, n);
    });
    else if (Oc(e)) {
      for (const r in e) Ft(e[r], t, n);
      for (const r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && Ft(e[r], t, n);
    }
    return e;
  }
  function qr(e, t, n, r) {
    try {
      return r ? e(...r) : e();
    } catch (o) {
      sr(o, t, n);
    }
  }
  function yt(e, t, n, r) {
    if (te(e)) {
      const o = qr(e, t, n, r);
      return o && Yo(o) && o.catch((s) => {
        sr(s, t, n);
      }), o;
    }
    if (K(e)) {
      const o = [];
      for (let s = 0; s < e.length; s++) o.push(yt(e[s], t, n, r));
      return o;
    }
  }
  function sr(e, t, n, r = true) {
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
        qt(), qr(s, null, 10, [
          e,
          l,
          u
        ]), Kt();
        return;
      }
    }
    Fh(e, n, o, r, i);
  }
  function Fh(e, t, n, r = true, o = false) {
    if (o) throw e;
    console.error(e);
  }
  const Ke = [];
  let Tt = -1;
  const Gn = [];
  let on = null, jn = 0;
  const iu = Promise.resolve();
  let Oo = null;
  Mt = function(e) {
    const t = Oo || iu;
    return e ? t.then(this ? e.bind(this) : e) : t;
  };
  function Hh(e) {
    let t = Tt + 1, n = Ke.length;
    for (; t < n; ) {
      const r = t + n >>> 1, o = Ke[r], s = Mr(o);
      s < e || s === e && o.flags & 2 ? t = r + 1 : n = r;
    }
    return t;
  }
  function Ji(e) {
    if (!(e.flags & 1)) {
      const t = Mr(e), n = Ke[Ke.length - 1];
      !n || !(e.flags & 2) && t >= Mr(n) ? Ke.push(e) : Ke.splice(Hh(t), 0, e), e.flags |= 1, au();
    }
  }
  function au() {
    Oo || (Oo = iu.then(lu));
  }
  function ii(e) {
    K(e) ? Gn.push(...e) : on && e.id === -1 ? on.splice(jn + 1, 0, e) : e.flags & 1 || (Gn.push(e), e.flags |= 1), au();
  }
  function Pa(e, t, n = Tt + 1) {
    for (; n < Ke.length; n++) {
      const r = Ke[n];
      if (r && r.flags & 2) {
        if (e && r.id !== e.uid) continue;
        Ke.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
      }
    }
  }
  function Lo(e) {
    if (Gn.length) {
      const t = [
        ...new Set(Gn)
      ].sort((n, r) => Mr(n) - Mr(r));
      if (Gn.length = 0, on) {
        on.push(...t);
        return;
      }
      for (on = t, jn = 0; jn < on.length; jn++) {
        const n = on[jn];
        n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
      }
      on = null, jn = 0;
    }
  }
  const Mr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
  function lu(e) {
    try {
      for (Tt = 0; Tt < Ke.length; Tt++) {
        const t = Ke[Tt];
        t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), qr(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2));
      }
    } finally {
      for (; Tt < Ke.length; Tt++) {
        const t = Ke[Tt];
        t && (t.flags &= -2);
      }
      Tt = -1, Ke.length = 0, Lo(), Oo = null, (Ke.length || Gn.length) && lu();
    }
  }
  let Me = null, cu = null;
  function Mo(e) {
    const t = Me;
    return Me = e, cu = e && e.type.__scopeId || null, t;
  }
  $e = function(e, t = Me, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
      r._d && Va(-1);
      const s = Mo(t);
      let i;
      try {
        i = e(...o);
      } finally {
        Mo(s), r._d && Va(1);
      }
      return i;
    };
    return r._n = true, r._c = true, r._d = true, r;
  };
  hS = function(e, t) {
    if (Me === null) return e;
    const n = fs(Me), r = e.dirs || (e.dirs = []);
    for (let o = 0; o < t.length; o++) {
      let [s, i, a, l = ae] = t[o];
      s && (te(s) && (s = {
        mounted: s,
        updated: s
      }), s.deep && Ft(i), r.push({
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
  function Pt(e, t, n, r) {
    const o = e.dirs, s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      s && (a.oldValue = s[i].value);
      let l = a.dir[r];
      l && (qt(), yt(l, n, 8, [
        e.el,
        a,
        e,
        t
      ]), Kt());
    }
  }
  const uu = Symbol("_vte"), fu = (e) => e.__isTeleport, Sr = (e) => e && (e.disabled || e.disabled === ""), Aa = (e) => e && (e.defer || e.defer === ""), xa = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Oa = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ai = (e, t) => {
    const n = e && e.to;
    return ke(n) ? t ? t(n) : null : n;
  }, du = {
    name: "Teleport",
    __isTeleport: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      const { mc: c, pc: f, pbc: h, o: { insert: d, querySelector: p, createText: y, createComment: S } } = u, k = Sr(t.props);
      let { shapeFlag: _, children: m, dynamicChildren: v } = t;
      if (e == null) {
        const w = t.el = y(""), A = t.anchor = y("");
        d(w, n, r), d(A, n, r);
        const M = (C, O) => {
          _ & 16 && (o && o.isCE && (o.ce._teleportTarget = C), c(m, C, O, o, s, i, a, l));
        }, N = () => {
          const C = t.target = ai(t.props, p), O = hu(C, t, y, d);
          C && (i !== "svg" && xa(C) ? i = "svg" : i !== "mathml" && Oa(C) && (i = "mathml"), k || (M(C, O), ko(t, false)));
        };
        k && (M(n, A), ko(t, true)), Aa(t.props) ? Oe(() => {
          N(), t.el.__isMounted = true;
        }, s) : N();
      } else {
        if (Aa(t.props) && !e.el.__isMounted) {
          Oe(() => {
            du.process(e, t, n, r, o, s, i, a, l, u), delete e.el.__isMounted;
          }, s);
          return;
        }
        t.el = e.el, t.targetStart = e.targetStart;
        const w = t.anchor = e.anchor, A = t.target = e.target, M = t.targetAnchor = e.targetAnchor, N = Sr(e.props), C = N ? n : A, O = N ? w : M;
        if (i === "svg" || xa(A) ? i = "svg" : (i === "mathml" || Oa(A)) && (i = "mathml"), v ? (h(e.dynamicChildren, v, C, o, s, i, a), ta(e, t, true)) : l || f(e, t, C, O, o, s, i, a, false), k) N ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : io(t, n, w, u, 1);
        else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
          const E = t.target = ai(t.props, p);
          E && io(t, E, null, u, 0);
        } else N && io(t, A, M, u, 1);
        ko(t, k);
      }
    },
    remove(e, t, n, { um: r, o: { remove: o } }, s) {
      const { shapeFlag: i, children: a, anchor: l, targetStart: u, targetAnchor: c, target: f, props: h } = e;
      if (f && (o(u), o(c)), s && o(l), i & 16) {
        const d = s || !Sr(h);
        for (let p = 0; p < a.length; p++) {
          const y = a[p];
          r(y, t, n, d, !!y.dynamicChildren);
        }
      }
    },
    move: io,
    hydrate: Uh
  };
  function io(e, t, n, { o: { insert: r }, m: o }, s = 2) {
    s === 0 && r(e.targetAnchor, t, n);
    const { el: i, anchor: a, shapeFlag: l, children: u, props: c } = e, f = s === 2;
    if (f && r(i, t, n), (!f || Sr(c)) && l & 16) for (let h = 0; h < u.length; h++) o(u[h], t, n, 2);
    f && r(a, t, n);
  }
  function Uh(e, t, n, r, o, s, { o: { nextSibling: i, parentNode: a, querySelector: l, insert: u, createText: c } }, f) {
    const h = t.target = ai(t.props, l);
    if (h) {
      const d = Sr(t.props), p = h._lpa || h.firstChild;
      if (t.shapeFlag & 16) if (d) t.anchor = f(i(e), t, a(e), n, r, o, s), t.targetStart = p, t.targetAnchor = p && i(p);
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
        t.targetAnchor || hu(h, t, c, u), f(p && i(p), t, h, n, r, o, s);
      }
      ko(t, d);
    }
    return t.anchor && i(t.anchor);
  }
  pS = du;
  function ko(e, t) {
    const n = e.ctx;
    if (n && n.ut) {
      let r, o;
      for (t ? (r = e.el, o = e.anchor) : (r = e.targetStart, o = e.targetAnchor); r && r !== o; ) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
      n.ut();
    }
  }
  function hu(e, t, n, r) {
    const o = t.targetStart = n(""), s = t.targetAnchor = n("");
    return o[uu] = s, e && (r(o, e), r(s, e)), s;
  }
  const sn = Symbol("_leaveCb"), ao = Symbol("_enterCb");
  function pu() {
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
  ], mu = {
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
  }, gu = (e) => {
    const t = e.subTree;
    return t.component ? gu(t.component) : t;
  }, Vh = {
    name: "BaseTransition",
    props: mu,
    setup(e, { slots: t }) {
      const n = Xe(), r = pu();
      return () => {
        const o = t.default && Yi(t.default(), true);
        if (!o || !o.length) return;
        const s = yu(o), i = re(e), { mode: a } = i;
        if (r.isLeaving) return Ps(s);
        const l = La(s);
        if (!l) return Ps(s);
        let u = Ir(l, i, r, n, (f) => u = f);
        l.type !== Te && vn(l, u);
        let c = n.subTree && La(n.subTree);
        if (c && c.type !== Te && !ht(l, c) && gu(n).type !== Te) {
          let f = Ir(c, i, r, n);
          if (vn(c, f), a === "out-in" && l.type !== Te) return r.isLeaving = true, f.afterLeave = () => {
            r.isLeaving = false, n.job.flags & 8 || n.update(), delete f.afterLeave, c = void 0;
          }, Ps(s);
          a === "in-out" && l.type !== Te ? f.delayLeave = (h, d, p) => {
            const y = vu(r, c);
            y[String(c.key)] = c, h[sn] = () => {
              d(), h[sn] = void 0, delete u.delayedLeave, c = void 0;
            }, u.delayedLeave = () => {
              p(), delete u.delayedLeave, c = void 0;
            };
          } : c = void 0;
        } else c && (c = void 0);
        return s;
      };
    }
  };
  function yu(e) {
    let t = e[0];
    if (e.length > 1) {
      for (const n of e) if (n.type !== Te) {
        t = n;
        break;
      }
    }
    return t;
  }
  const Wh = Vh;
  function vu(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function Ir(e, t, n, r, o) {
    const { appear: s, mode: i, persisted: a = false, onBeforeEnter: l, onEnter: u, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: h, onLeave: d, onAfterLeave: p, onLeaveCancelled: y, onBeforeAppear: S, onAppear: k, onAfterAppear: _, onAppearCancelled: m } = t, v = String(e.key), w = vu(n, e), A = (C, O) => {
      C && yt(C, r, 9, O);
    }, M = (C, O) => {
      const E = O[1];
      A(C, O), K(C) ? C.every((T) => T.length <= 1) && E() : C.length <= 1 && E();
    }, N = {
      mode: i,
      persisted: a,
      beforeEnter(C) {
        let O = l;
        if (!n.isMounted) if (s) O = S || l;
        else return;
        C[sn] && C[sn](true);
        const E = w[v];
        E && ht(e, E) && E.el[sn] && E.el[sn](), A(O, [
          C
        ]);
      },
      enter(C) {
        let O = u, E = c, T = f;
        if (!n.isMounted) if (s) O = k || u, E = _ || c, T = m || f;
        else return;
        let B = false;
        const Z = C[ao] = (ee) => {
          B || (B = true, ee ? A(T, [
            C
          ]) : A(E, [
            C
          ]), N.delayedLeave && N.delayedLeave(), C[ao] = void 0);
        };
        O ? M(O, [
          C,
          Z
        ]) : Z();
      },
      leave(C, O) {
        const E = String(e.key);
        if (C[ao] && C[ao](true), n.isUnmounting) return O();
        A(h, [
          C
        ]);
        let T = false;
        const B = C[sn] = (Z) => {
          T || (T = true, O(), Z ? A(y, [
            C
          ]) : A(p, [
            C
          ]), C[sn] = void 0, w[E] === e && delete w[E]);
        };
        w[E] = e, d ? M(d, [
          C,
          B
        ]) : B();
      },
      clone(C) {
        const O = Ir(C, t, n, r, o);
        return o && o(O), O;
      }
    };
    return N;
  }
  function Ps(e) {
    if (Kr(e)) return e = bt(e), e.children = null, e;
  }
  function La(e) {
    if (!Kr(e)) return fu(e.type) && e.children ? yu(e.children) : e;
    if (e.component) return e.component.subTree;
    const { shapeFlag: t, children: n } = e;
    if (n) {
      if (t & 16) return n[0];
      if (t & 32 && te(n.default)) return n.default();
    }
  }
  function vn(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, vn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function Yi(e, t = false, n) {
    let r = [], o = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
      i.type === Se ? (i.patchFlag & 128 && o++, r = r.concat(Yi(i.children, t, a))) : (t || i.type !== Te) && r.push(a != null ? bt(i, {
        key: a
      }) : i);
    }
    if (o > 1) for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r;
  }
  he = function(e, t) {
    return te(e) ? Pe({
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
      const o = t.refs === ae ? t.refs = {} : t.refs;
      Object.defineProperty(o, e, {
        enumerable: true,
        get: () => n.value,
        set: (s) => n.value = s
      });
    }
    return n;
  };
  function $r(e, t, n, r, o = false) {
    if (K(e)) {
      e.forEach((p, y) => $r(p, t && (K(t) ? t[y] : t), n, r, o));
      return;
    }
    if (pn(r) && !o) {
      r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && $r(e, t, n, r.component.subTree);
      return;
    }
    const s = r.shapeFlag & 4 ? fs(r.component) : r.el, i = o ? null : s, { i: a, r: l } = e, u = t && t.r, c = a.refs === ae ? a.refs = {} : a.refs, f = a.setupState, h = re(f), d = f === ae ? () => false : (p) => ue(h, p);
    if (u != null && u !== l && (ke(u) ? (c[u] = null, d(u) && (f[u] = null)) : we(u) && (u.value = null)), te(l)) qr(l, a, 12, [
      i,
      c
    ]);
    else {
      const p = ke(l), y = we(l);
      if (p || y) {
        const S = () => {
          if (e.f) {
            const k = p ? d(l) ? f[l] : c[l] : l.value;
            o ? K(k) && Vi(k, s) : K(k) ? k.includes(s) || k.push(s) : p ? (c[l] = [
              s
            ], d(l) && (f[l] = c[l])) : (l.value = [
              s
            ], e.k && (c[e.k] = l.value));
          } else p ? (c[l] = i, d(l) && (f[l] = i)) : y && (l.value = i, e.k && (c[e.k] = i));
        };
        i ? (S.id = -1, Oe(S, n)) : S();
      }
    }
  }
  let Ma = false;
  const Nn = () => {
    Ma || (console.error("Hydration completed but contains mismatches."), Ma = true);
  }, qh = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Kh = (e) => e.namespaceURI.includes("MathML"), lo = (e) => {
    if (e.nodeType === 1) {
      if (qh(e)) return "svg";
      if (Kh(e)) return "mathml";
    }
  }, Hn = (e) => e.nodeType === 8;
  function Gh(e) {
    const { mt: t, p: n, o: { patchProp: r, createText: o, nextSibling: s, parentNode: i, remove: a, insert: l, createComment: u } } = e, c = (m, v) => {
      if (!v.hasChildNodes()) {
        n(null, m, v), Lo(), v._vnode = m;
        return;
      }
      f(v.firstChild, m, null, null, null), Lo(), v._vnode = m;
    }, f = (m, v, w, A, M, N = false) => {
      N = N || !!v.dynamicChildren;
      const C = Hn(m) && m.data === "[", O = () => y(m, v, w, A, M, C), { type: E, ref: T, shapeFlag: B, patchFlag: Z } = v;
      let ee = m.nodeType;
      v.el = m, Z === -2 && (N = false, v.dynamicChildren = null);
      let F = null;
      switch (E) {
        case Pn:
          ee !== 3 ? v.children === "" ? (l(v.el = o(""), i(m), m), F = m) : F = O() : (m.data !== v.children && (Nn(), m.data = v.children), F = s(m));
          break;
        case Te:
          _(m) ? (F = s(m), k(v.el = m.content.firstChild, m, w)) : ee !== 8 || C ? F = O() : F = s(m);
          break;
        case Er:
          if (C && (m = s(m), ee = m.nodeType), ee === 1 || ee === 3) {
            F = m;
            const G = !v.children.length;
            for (let z = 0; z < v.staticCount; z++) G && (v.children += F.nodeType === 1 ? F.outerHTML : F.data), z === v.staticCount - 1 && (v.anchor = F), F = s(F);
            return C ? s(F) : F;
          } else O();
          break;
        case Se:
          C ? F = p(m, v, w, A, M, N) : F = O();
          break;
        default:
          if (B & 1) (ee !== 1 || v.type.toLowerCase() !== m.tagName.toLowerCase()) && !_(m) ? F = O() : F = h(m, v, w, A, M, N);
          else if (B & 6) {
            v.slotScopeIds = M;
            const G = i(m);
            if (C ? F = S(m) : Hn(m) && m.data === "teleport start" ? F = S(m, m.data, "teleport end") : F = s(m), t(v, G, null, w, A, lo(G), N), pn(v) && !v.type.__asyncResolved) {
              let z;
              C ? (z = me(Se), z.anchor = F ? F.previousSibling : G.lastChild) : z = m.nodeType === 3 ? ar("") : me("div"), z.el = m, v.component.subTree = z;
            }
          } else B & 64 ? ee !== 8 ? F = O() : F = v.type.hydrate(m, v, w, A, M, N, e, d) : B & 128 && (F = v.type.hydrate(m, v, w, A, lo(i(m)), M, N, e, f));
      }
      return T != null && $r(T, null, A, v), F;
    }, h = (m, v, w, A, M, N) => {
      N = N || !!v.dynamicChildren;
      const { type: C, props: O, patchFlag: E, shapeFlag: T, dirs: B, transition: Z } = v, ee = C === "input" || C === "option";
      if (ee || E !== -1) {
        B && Pt(v, null, w, "created");
        let F = false;
        if (_(m)) {
          F = Hu(null, Z) && w && w.vnode.props && w.vnode.props.appear;
          const z = m.content.firstChild;
          F && Z.beforeEnter(z), k(z, m, w), v.el = m = z;
        }
        if (T & 16 && !(O && (O.innerHTML || O.textContent))) {
          let z = d(m.firstChild, v, m, w, A, M, N);
          for (; z; ) {
            co(m, 1) || Nn();
            const Ae = z;
            z = z.nextSibling, a(Ae);
          }
        } else if (T & 8) {
          let z = v.children;
          z[0] === `
` && (m.tagName === "PRE" || m.tagName === "TEXTAREA") && (z = z.slice(1)), m.textContent !== z && (co(m, 0) || Nn(), m.textContent = v.children);
        }
        if (O) {
          if (ee || !N || E & 48) {
            const z = m.tagName.includes("-");
            for (const Ae in O) (ee && (Ae.endsWith("value") || Ae === "indeterminate") || Ur(Ae) && !Wn(Ae) || Ae[0] === "." || z) && r(m, Ae, null, O[Ae], void 0, w);
          } else if (O.onClick) r(m, "onClick", null, O.onClick, void 0, w);
          else if (E & 4 && Lt(O.style)) for (const z in O.style) O.style[z];
        }
        let G;
        (G = O && O.onVnodeBeforeMount) && Ye(G, w, v), B && Pt(v, null, w, "beforeMount"), ((G = O && O.onVnodeMounted) || B || F) && Gu(() => {
          G && Ye(G, w, v), F && Z.enter(m), B && Pt(v, null, w, "mounted");
        }, A);
      }
      return m.nextSibling;
    }, d = (m, v, w, A, M, N, C) => {
      C = C || !!v.dynamicChildren;
      const O = v.children, E = O.length;
      for (let T = 0; T < E; T++) {
        const B = C ? O[T] : O[T] = ot(O[T]), Z = B.type === Pn;
        m ? (Z && !C && T + 1 < E && ot(O[T + 1]).type === Pn && (l(o(m.data.slice(B.children.length)), w, s(m)), m.data = B.children), m = f(m, B, A, M, N, C)) : Z && !B.children ? l(B.el = o(""), w) : (co(w, 1) || Nn(), n(null, B, w, null, A, M, lo(w), N));
      }
      return m;
    }, p = (m, v, w, A, M, N) => {
      const { slotScopeIds: C } = v;
      C && (M = M ? M.concat(C) : C);
      const O = i(m), E = d(s(m), v, O, w, A, M, N);
      return E && Hn(E) && E.data === "]" ? s(v.anchor = E) : (Nn(), l(v.anchor = u("]"), O, E), E);
    }, y = (m, v, w, A, M, N) => {
      if (co(m.parentElement, 1) || Nn(), v.el = null, N) {
        const E = S(m);
        for (; ; ) {
          const T = s(m);
          if (T && T !== E) a(T);
          else break;
        }
      }
      const C = s(m), O = i(m);
      return a(m), n(null, v, O, C, w, A, lo(O), M), w && (w.vnode.el = v.el, us(w, v.el)), C;
    }, S = (m, v = "[", w = "]") => {
      let A = 0;
      for (; m; ) if (m = s(m), m && Hn(m) && (m.data === v && A++, m.data === w)) {
        if (A === 0) return s(m);
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
  const Ia = "data-allow-mismatch", zh = {
    0: "text",
    1: "children",
    2: "class",
    3: "style",
    4: "attribute"
  };
  function co(e, t) {
    if (t === 0 || t === 1) for (; e && !e.hasAttribute(Ia); ) e = e.parentElement;
    const n = e && e.getAttribute(Ia);
    if (n == null) return false;
    if (n === "") return true;
    {
      const r = n.split(",");
      return t === 0 && r.includes("children") ? true : n.split(",").includes(zh[t]);
    }
  }
  Zo().requestIdleCallback;
  Zo().cancelIdleCallback;
  function Jh(e, t) {
    if (Hn(e) && e.data === "[") {
      let n = 1, r = e.nextSibling;
      for (; r; ) {
        if (r.nodeType === 1) {
          if (t(r) === false) break;
        } else if (Hn(r)) if (r.data === "]") {
          if (--n === 0) break;
        } else r.data === "[" && n++;
        r = r.nextSibling;
      }
    } else t(e);
  }
  const pn = (e) => !!e.type.__asyncLoader;
  $a = function(e) {
    te(e) && (e = {
      loader: e
    });
    const { loader: t, loadingComponent: n, errorComponent: r, delay: o = 200, hydrate: s, timeout: i, suspensible: a = true, onError: l } = e;
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
        const k = s ? () => {
          const _ = s(S, (m) => Jh(p, m));
          _ && (y.bum || (y.bum = [])).push(_);
        } : S;
        c ? k() : d().then(() => !y.isUnmounted && k());
      },
      get __asyncResolved() {
        return c;
      },
      setup() {
        const p = Le;
        if (Qi(p), c) return () => As(c, p);
        const y = (m) => {
          u = null, sr(m, p, 13, !r);
        };
        if (a && p.suspense || Xn) return d().then((m) => () => As(m, p)).catch((m) => (y(m), () => r ? me(r, {
          error: m
        }) : null));
        const S = Ce(false), k = Ce(), _ = Ce(!!o);
        return o && setTimeout(() => {
          _.value = false;
        }, o), i != null && setTimeout(() => {
          if (!S.value && !k.value) {
            const m = new Error(`Async component timed out after ${i}ms.`);
            y(m), k.value = m;
          }
        }, i), d().then(() => {
          S.value = true, p.parent && Kr(p.parent.vnode) && p.parent.update();
        }).catch((m) => {
          y(m), k.value = m;
        }), () => {
          if (S.value && c) return As(c, p);
          if (k.value && r) return me(r, {
            error: k.value
          });
          if (n && !_.value) return me(n);
        };
      }
    });
  };
  function As(e, t) {
    const { ref: n, props: r, children: o, ce: s } = t.vnode, i = me(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i;
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
      const o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Set();
      let i = null;
      const a = n.suspense, { renderer: { p: l, m: u, um: c, o: { createElement: f } } } = r, h = f("div");
      r.activate = (_, m, v, w, A) => {
        const M = _.component;
        u(_, m, v, 0, a), l(M.vnode, _, m, v, M, a, w, _.slotScopeIds, A), Oe(() => {
          M.isDeactivated = false, M.a && qn(M.a);
          const N = _.props && _.props.onVnodeMounted;
          N && Ye(N, M.parent, _);
        }, a);
      }, r.deactivate = (_) => {
        const m = _.component;
        $o(m.m), $o(m.a), u(_, h, null, 1, a), Oe(() => {
          m.da && qn(m.da);
          const v = _.props && _.props.onVnodeUnmounted;
          v && Ye(v, m.parent, _), m.isDeactivated = true;
        }, a);
      };
      function d(_) {
        xs(_), c(_, n, a, true);
      }
      function p(_) {
        o.forEach((m, v) => {
          const w = yi(m.type);
          w && !_(w) && y(v);
        });
      }
      function y(_) {
        const m = o.get(_);
        m && (!i || !ht(m, i)) ? d(m) : i && xs(i), o.delete(_), s.delete(_);
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
        S != null && (No(n.subTree.type) ? Oe(() => {
          o.set(S, uo(n.subTree));
        }, n.subTree.suspense) : o.set(S, uo(n.subTree)));
      };
      return vt(k), Xi(k), Ln(() => {
        o.forEach((_) => {
          const { subTree: m, suspense: v } = n, w = uo(m);
          if (_.type === w.type && _.key === w.key) {
            xs(w);
            const A = w.component.da;
            A && Oe(A, v);
            return;
          }
          d(_);
        });
      }), () => {
        if (S = null, !t.default) return i = null;
        const _ = t.default(), m = _[0];
        if (_.length > 1) return i = null, _;
        if (!xn(m) || !(m.shapeFlag & 4) && !(m.shapeFlag & 128)) return i = null, m;
        let v = uo(m);
        if (v.type === Te) return i = null, v;
        const w = v.type, A = yi(pn(v) ? v.type.__asyncResolved || {} : w), { include: M, exclude: N, max: C } = e;
        if (M && (!A || !yr(M, A)) || N && A && yr(N, A)) return v.shapeFlag &= -257, i = v, m;
        const O = v.key == null ? w : v.key, E = o.get(O);
        return v.el && (v = bt(v), m.shapeFlag & 128 && (m.ssContent = v)), S = O, E ? (v.el = E.el, v.component = E.component, v.transition && vn(v, v.transition), v.shapeFlag |= 512, s.delete(O), s.add(O)) : (s.add(O), C && s.size > parseInt(C, 10) && y(s.values().next().value)), v.shapeFlag |= 256, i = v, No(m.type) ? m : v;
      };
    }
  }, Qh = Yh;
  function yr(e, t) {
    return K(e) ? e.some((n) => yr(n, t)) : ke(e) ? e.split(",").includes(t) : eh(e) ? (e.lastIndex = 0, e.test(t)) : false;
  }
  function bu(e, t) {
    wu(e, "a", t);
  }
  function _u(e, t) {
    wu(e, "da", t);
  }
  function wu(e, t, n = Le) {
    const r = e.__wdc || (e.__wdc = () => {
      let o = n;
      for (; o; ) {
        if (o.isDeactivated) return;
        o = o.parent;
      }
      return e();
    });
    if (as(t, r, n), n) {
      let o = n.parent;
      for (; o && o.parent; ) Kr(o.parent.vnode) && Xh(r, t, n, o), o = o.parent;
    }
  }
  function Xh(e, t, n, r) {
    const o = as(t, e, r, true);
    ls(() => {
      Vi(r[t], o);
    }, n);
  }
  function xs(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513;
  }
  function uo(e) {
    return e.shapeFlag & 128 ? e.ssContent : e;
  }
  function as(e, t, n = Le, r = false) {
    if (n) {
      const o = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
        qt();
        const a = On(n), l = yt(t, n, e, i);
        return a(), Kt(), l;
      });
      return r ? o.unshift(s) : o.push(s), s;
    }
  }
  let Yt, ep, tp, np;
  Yt = (e) => (t, n = Le) => {
    (!Xn || e === "sp") && as(e, (...r) => t(...r), n);
  };
  Su = Yt("bm");
  vt = Yt("m");
  Zh = Yt("bu");
  Xi = Yt("u");
  Ln = Yt("bum");
  ls = Yt("um");
  ep = Yt("sp");
  tp = Yt("rtg");
  np = Yt("rtc");
  function ku(e, t = Le) {
    as("ec", e, t);
  }
  const Eu = "components";
  function li(e, t) {
    return Tu(Eu, e, true, t) || e;
  }
  const Ru = Symbol.for("v-ndc");
  Ge = function(e) {
    return ke(e) ? Tu(Eu, e, false) || e : e || Ru;
  };
  function Tu(e, t, n = true, r = false) {
    const o = Me || Le;
    if (o) {
      const s = o.type;
      {
        const a = yi(s, false);
        if (a && (a === t || a === st(t) || a === Xo(st(t)))) return s;
      }
      const i = Na(o[e] || s[e], t) || Na(o.appContext[e], t);
      return !i && r ? s : i;
    }
  }
  function Na(e, t) {
    return e && (e[t] || e[st(t)] || e[Xo(st(t))]);
  }
  Qn = function(e, t, n, r) {
    let o;
    const s = n, i = K(e);
    if (i || ke(e)) {
      const a = i && Lt(e);
      let l = false, u = false;
      a && (l = !ct(e), u = Gt(e), e = ns(e)), o = new Array(e.length);
      for (let c = 0, f = e.length; c < f; c++) o[c] = t(l ? u ? Ao(Be(e[c])) : Be(e[c]) : e[c], c, void 0, s);
    } else if (typeof e == "number") {
      o = new Array(e);
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, s);
    } else if (ge(e)) if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, s));
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
    if (Me.ce || Me.parent && pn(Me.parent) && Me.parent.ce) return t !== "default" && (n.name = t), q(), oe(Se, null, [
      me("slot", n, r && r())
    ], 64);
    let s = e[t];
    s && s._c && (s._d = false), q();
    const i = s && Cu(s(n)), a = n.key || i && i.key, l = oe(Se, {
      key: (a && !gt(a) ? a : `_${t}`) + (!i && r ? "_fb" : "")
    }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && l.scopeId && (l.slotScopeIds = [
      l.scopeId + "-s"
    ]), s && s._c && (s._d = true), l;
  };
  function Cu(e) {
    return e.some((t) => xn(t) ? !(t.type === Te || t.type === Se && !Cu(t.children)) : true) ? e : null;
  }
  const ci = (e) => e ? Xu(e) ? fs(e) : ci(e.parent) : null, kr = Pe(/* @__PURE__ */ Object.create(null), {
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
    $options: (e) => xu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ji(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Mt.bind(e.proxy)),
    $watch: (e) => Ep.bind(e)
  }), Os = (e, t) => e !== ae && !e.__isScriptSetup && ue(e, t), rp = {
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
          if (Os(r, t)) return i[t] = 1, r[t];
          if (o !== ae && ue(o, t)) return i[t] = 2, o[t];
          if ((u = e.propsOptions[0]) && ue(u, t)) return i[t] = 3, s[t];
          if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
          ui && (i[t] = 0);
        }
      }
      const c = kr[t];
      let f, h;
      if (c) return t === "$attrs" && Fe(e.attrs, "get", ""), c(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== ae && ue(n, t)) return i[t] = 4, n[t];
      if (h = l.config.globalProperties, ue(h, t)) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: o, ctx: s } = e;
      return Os(o, t) ? (o[t] = n, true) : r !== ae && ue(r, t) ? (r[t] = n, true) : ue(e.props, t) || t[0] === "$" && t.slice(1) in e ? false : (s[t] = n, true);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, propsOptions: s } }, i) {
      let a;
      return !!n[i] || e !== ae && ue(e, i) || Os(t, i) || (a = s[0]) && ue(a, i) || ue(r, i) || ue(kr, i) || ue(o.config.globalProperties, i);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : ue(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  yS = function() {
    return Pu().slots;
  };
  vS = function() {
    return Pu().attrs;
  };
  function Pu() {
    const e = Xe();
    return e.setupContext || (e.setupContext = ef(e));
  }
  function Nr(e) {
    return K(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e;
  }
  bS = function(e, t) {
    const n = Nr(e);
    for (const r in t) {
      if (r.startsWith("__skip")) continue;
      let o = n[r];
      o ? K(o) || te(o) ? o = n[r] = {
        type: o,
        default: t[r]
      } : o.default = t[r] : o === null && (o = n[r] = {
        default: t[r]
      }), o && t[`__skip_${r}`] && (o.skipFactory = true);
    }
    return n;
  };
  _S = function(e, t) {
    return !e || !t ? e || t : K(e) && K(t) ? e.concat(t) : Pe({}, Nr(e), Nr(t));
  };
  wS = function(e) {
    const t = Xe();
    let n = e();
    return mi(), Yo(n) && (n = n.catch((r) => {
      throw On(t), r;
    })), [
      n,
      () => On(t)
    ];
  };
  let ui = true;
  function op(e) {
    const t = xu(e), n = e.proxy, r = e.ctx;
    ui = false, t.beforeCreate && Ba(t.beforeCreate, e, "bc");
    const { data: o, computed: s, methods: i, watch: a, provide: l, inject: u, created: c, beforeMount: f, mounted: h, beforeUpdate: d, updated: p, activated: y, deactivated: S, beforeDestroy: k, beforeUnmount: _, destroyed: m, unmounted: v, render: w, renderTracked: A, renderTriggered: M, errorCaptured: N, serverPrefetch: C, expose: O, inheritAttrs: E, components: T, directives: B, filters: Z } = t;
    if (u && sp(u, r, null), i) for (const G in i) {
      const z = i[G];
      te(z) && (r[G] = z.bind(n));
    }
    if (o) {
      const G = o.call(n, n);
      ge(G) && (e.data = It(G));
    }
    if (ui = true, s) for (const G in s) {
      const z = s[G], Ae = te(z) ? z.bind(n, n) : te(z.get) ? z.get.bind(n, n) : Ot, Xt = !te(z) && te(z.set) ? z.set.bind(n) : Ot, wt = Q({
        get: Ae,
        set: Xt
      });
      Object.defineProperty(r, G, {
        enumerable: true,
        configurable: true,
        get: () => wt.value,
        set: (ze) => wt.value = ze
      });
    }
    if (a) for (const G in a) Au(a[G], r, n, G);
    if (l) {
      const G = te(l) ? l.call(n) : l;
      Reflect.ownKeys(G).forEach((z) => {
        mn(z, G[z]);
      });
    }
    c && Ba(c, e, "c");
    function F(G, z) {
      K(z) ? z.forEach((Ae) => G(Ae.bind(n))) : z && G(z.bind(n));
    }
    if (F(Su, f), F(vt, h), F(Zh, d), F(Xi, p), F(bu, y), F(_u, S), F(ku, N), F(np, A), F(tp, M), F(Ln, _), F(ls, v), F(ep, C), K(O)) if (O.length) {
      const G = e.exposed || (e.exposed = {});
      O.forEach((z) => {
        Object.defineProperty(G, z, {
          get: () => n[z],
          set: (Ae) => n[z] = Ae
        });
      });
    } else e.exposed || (e.exposed = {});
    w && e.render === Ot && (e.render = w), E != null && (e.inheritAttrs = E), T && (e.components = T), B && (e.directives = B), C && Qi(e);
  }
  function sp(e, t, n = Ot) {
    K(e) && (e = fi(e));
    for (const r in e) {
      const o = e[r];
      let s;
      ge(o) ? "default" in o ? s = Re(o.from || r, o.default, true) : s = Re(o.from || r) : s = Re(o), we(s) ? Object.defineProperty(t, r, {
        enumerable: true,
        configurable: true,
        get: () => s.value,
        set: (i) => s.value = i
      }) : t[r] = s;
    }
  }
  function Ba(e, t, n) {
    yt(K(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Au(e, t, n, r) {
    let o = r.includes(".") ? Vu(n, r) : () => n[r];
    if (ke(e)) {
      const s = t[e];
      te(s) && Qe(o, s);
    } else if (te(e)) Qe(o, e.bind(n));
    else if (ge(e)) if (K(e)) e.forEach((s) => Au(s, t, n, r));
    else {
      const s = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(s) && Qe(o, s, e);
    }
  }
  function xu(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: o, optionsCache: s, config: { optionMergeStrategies: i } } = e.appContext, a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach((u) => Io(l, u, i, true)), Io(l, t, i)), ge(t) && s.set(t, l), l;
  }
  function Io(e, t, n, r = false) {
    const { mixins: o, extends: s } = t;
    s && Io(e, s, n, true), o && o.forEach((i) => Io(e, i, n, true));
    for (const i in t) if (!(r && i === "expose")) {
      const a = ip[i] || n && n[i];
      e[i] = a ? a(e[i], t[i]) : t[i];
    }
    return e;
  }
  const ip = {
    data: Da,
    props: ja,
    emits: ja,
    methods: vr,
    computed: vr,
    beforeCreate: We,
    created: We,
    beforeMount: We,
    mounted: We,
    beforeUpdate: We,
    updated: We,
    beforeDestroy: We,
    beforeUnmount: We,
    destroyed: We,
    unmounted: We,
    activated: We,
    deactivated: We,
    errorCaptured: We,
    serverPrefetch: We,
    components: vr,
    directives: vr,
    watch: lp,
    provide: Da,
    inject: ap
  };
  function Da(e, t) {
    return t ? e ? function() {
      return Pe(te(e) ? e.call(this, this) : e, te(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function ap(e, t) {
    return vr(fi(e), fi(t));
  }
  function fi(e) {
    if (K(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function We(e, t) {
    return e ? [
      ...new Set([].concat(e, t))
    ] : t;
  }
  function vr(e, t) {
    return e ? Pe(/* @__PURE__ */ Object.create(null), e, t) : t;
  }
  function ja(e, t) {
    return e ? K(e) && K(t) ? [
      .../* @__PURE__ */ new Set([
        ...e,
        ...t
      ])
    ] : Pe(/* @__PURE__ */ Object.create(null), Nr(e), Nr(t ?? {})) : t;
  }
  function lp(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Pe(/* @__PURE__ */ Object.create(null), e);
    for (const r in t) n[r] = We(e[r], t[r]);
    return n;
  }
  function Ou() {
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
    return function(r, o = null) {
      te(r) || (r = Pe({}, r)), o != null && !ge(o) && (o = null);
      const s = Ou(), i = /* @__PURE__ */ new WeakSet(), a = [];
      let l = false;
      const u = s.app = {
        _uid: cp++,
        _component: r,
        _props: o,
        _container: null,
        _context: s,
        _instance: null,
        version: Kp,
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
        mount(c, f, h) {
          if (!l) {
            const d = u._ceVNode || me(r, o);
            return d.appContext = s, h === true ? h = "svg" : h === false && (h = void 0), f && t ? t(d, c) : e(d, c, h), l = true, u._container = c, c.__vue_app__ = u, fs(d.component);
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
  mn = function(e, t) {
    if (Le) {
      let n = Le.provides;
      const r = Le.parent && Le.parent.provides;
      r === n && (n = Le.provides = Object.create(r)), n[e] = t;
    }
  };
  Re = function(e, t, n = false) {
    const r = Le || Me;
    if (r || Cn) {
      const o = Cn ? Cn._context.provides : r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
      if (o && e in o) return o[e];
      if (arguments.length > 1) return n && te(t) ? t.call(r && r.proxy) : t;
    }
  };
  ir = function() {
    return !!(Le || Me || Cn);
  };
  const Lu = {}, Mu = () => Object.create(Lu), Iu = (e) => Object.getPrototypeOf(e) === Lu;
  function fp(e, t, n, r = false) {
    const o = {}, s = Mu();
    e.propsDefaults = /* @__PURE__ */ Object.create(null), $u(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Ht(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s;
  }
  function dp(e, t, n, r) {
    const { props: o, attrs: s, vnode: { patchFlag: i } } = e, a = re(o), [l] = e.propsOptions;
    let u = false;
    if ((r || i > 0) && !(i & 16)) {
      if (i & 8) {
        const c = e.vnode.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          let h = c[f];
          if (cs(e.emitsOptions, h)) continue;
          const d = t[h];
          if (l) if (ue(s, h)) d !== s[h] && (s[h] = d, u = true);
          else {
            const p = st(h);
            o[p] = di(l, a, p, d, e, false);
          }
          else d !== s[h] && (s[h] = d, u = true);
        }
      }
    } else {
      $u(e, t, o, s) && (u = true);
      let c;
      for (const f in a) (!t || !ue(t, f) && ((c = zt(f)) === f || !ue(t, c))) && (l ? n && (n[f] !== void 0 || n[c] !== void 0) && (o[f] = di(l, a, f, void 0, e, true)) : delete o[f]);
      if (s !== a) for (const f in s) (!t || !ue(t, f)) && (delete s[f], u = true);
    }
    u && jt(e.attrs, "set", "");
  }
  function $u(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = false, a;
    if (t) for (let l in t) {
      if (Wn(l)) continue;
      const u = t[l];
      let c;
      o && ue(o, c = st(l)) ? !s || !s.includes(c) ? n[c] = u : (a || (a = {}))[c] = u : cs(e.emitsOptions, l) || (!(l in r) || u !== r[l]) && (r[l] = u, i = true);
    }
    if (s) {
      const l = re(n), u = a || ae;
      for (let c = 0; c < s.length; c++) {
        const f = s[c];
        n[f] = di(o, l, f, u[f], e, !ue(u, f));
      }
    }
    return i;
  }
  function di(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
      const a = ue(i, "default");
      if (a && r === void 0) {
        const l = i.default;
        if (i.type !== Function && !i.skipFactory && te(l)) {
          const { propsDefaults: u } = o;
          if (n in u) r = u[n];
          else {
            const c = On(o);
            r = u[n] = l.call(null, t), c();
          }
        } else r = l;
        o.ce && o.ce._setProp(n, r);
      }
      i[0] && (s && !a ? r = false : i[1] && (r === "" || r === zt(n)) && (r = true));
    }
    return r;
  }
  const hp = /* @__PURE__ */ new WeakMap();
  function Nu(e, t, n = false) {
    const r = n ? hp : t.propsCache, o = r.get(e);
    if (o) return o;
    const s = e.props, i = {}, a = [];
    let l = false;
    if (!te(e)) {
      const c = (f) => {
        l = true;
        const [h, d] = Nu(f, t, true);
        Pe(i, h), d && a.push(...d);
      };
      !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
    }
    if (!s && !l) return ge(e) && r.set(e, Un), Un;
    if (K(s)) for (let c = 0; c < s.length; c++) {
      const f = st(s[c]);
      Fa(f) && (i[f] = ae);
    }
    else if (s) for (const c in s) {
      const f = st(c);
      if (Fa(f)) {
        const h = s[c], d = i[f] = K(h) || te(h) ? {
          type: h
        } : Pe({}, h), p = d.type;
        let y = false, S = true;
        if (K(p)) for (let k = 0; k < p.length; ++k) {
          const _ = p[k], m = te(_) && _.name;
          if (m === "Boolean") {
            y = true;
            break;
          } else m === "String" && (S = false);
        }
        else y = te(p) && p.name === "Boolean";
        d[0] = y, d[1] = S, (y || ue(d, "default")) && a.push(f);
      }
    }
    const u = [
      i,
      a
    ];
    return ge(e) && r.set(e, u), u;
  }
  function Fa(e) {
    return e[0] !== "$" && !Wn(e);
  }
  const Zi = (e) => e[0] === "_" || e === "$stable", ea = (e) => K(e) ? e.map(ot) : [
    ot(e)
  ], pp = (e, t, n) => {
    if (t._n) return t;
    const r = $e((...o) => ea(t(...o)), n);
    return r._c = false, r;
  }, Bu = (e, t, n) => {
    const r = e._ctx;
    for (const o in e) {
      if (Zi(o)) continue;
      const s = e[o];
      if (te(s)) t[o] = pp(o, s, r);
      else if (s != null) {
        const i = ea(s);
        t[o] = () => i;
      }
    }
  }, Du = (e, t) => {
    const n = ea(t);
    e.slots.default = () => n;
  }, ju = (e, t, n) => {
    for (const r in t) (n || !Zi(r)) && (e[r] = t[r]);
  }, mp = (e, t, n) => {
    const r = e.slots = Mu();
    if (e.vnode.shapeFlag & 32) {
      const o = t._;
      o ? (ju(r, t, n), n && Lc(r, "_", o, true)) : Bu(t, r);
    } else t && Du(e, t);
  }, gp = (e, t, n) => {
    const { vnode: r, slots: o } = e;
    let s = true, i = ae;
    if (r.shapeFlag & 32) {
      const a = t._;
      a ? n && a === 1 ? s = false : ju(o, t, n) : (s = !t.$stable, Bu(t, o)), i = t;
    } else t && (Du(e, t), i = {
      default: 1
    });
    if (s) for (const a in o) !Zi(a) && i[a] == null && delete o[a];
  }, Oe = Gu;
  function yp(e) {
    return Fu(e);
  }
  function vp(e) {
    return Fu(e, Gh);
  }
  function Fu(e, t) {
    const n = Zo();
    n.__VUE__ = true;
    const { insert: r, remove: o, patchProp: s, createElement: i, createText: a, createComment: l, setText: u, setElementText: c, parentNode: f, nextSibling: h, setScopeId: d = Ot, insertStaticContent: p } = e, y = (g, b, R, L = null, P = null, I = null, H = void 0, j = null, D = !!b.dynamicChildren) => {
      if (g === b) return;
      g && !ht(g, b) && (L = x(g), ze(g, P, I, true), g = null), b.patchFlag === -2 && (D = false, b.dynamicChildren = null);
      const { type: $, ref: X, shapeFlag: V } = b;
      switch ($) {
        case Pn:
          S(g, b, R, L);
          break;
        case Te:
          k(g, b, R, L);
          break;
        case Er:
          g == null && _(b, R, L, H);
          break;
        case Se:
          T(g, b, R, L, P, I, H, j, D);
          break;
        default:
          V & 1 ? w(g, b, R, L, P, I, H, j, D) : V & 6 ? B(g, b, R, L, P, I, H, j, D) : (V & 64 || V & 128) && $.process(g, b, R, L, P, I, H, j, D, J);
      }
      X != null && P && $r(X, g && g.ref, I, b || g, !b);
    }, S = (g, b, R, L) => {
      if (g == null) r(b.el = a(b.children), R, L);
      else {
        const P = b.el = g.el;
        b.children !== g.children && u(P, b.children);
      }
    }, k = (g, b, R, L) => {
      g == null ? r(b.el = l(b.children || ""), R, L) : b.el = g.el;
    }, _ = (g, b, R, L) => {
      [g.el, g.anchor] = p(g.children, b, R, L, g.el, g.anchor);
    }, m = ({ el: g, anchor: b }, R, L) => {
      let P;
      for (; g && g !== b; ) P = h(g), r(g, R, L), g = P;
      r(b, R, L);
    }, v = ({ el: g, anchor: b }) => {
      let R;
      for (; g && g !== b; ) R = h(g), o(g), g = R;
      o(b);
    }, w = (g, b, R, L, P, I, H, j, D) => {
      b.type === "svg" ? H = "svg" : b.type === "math" && (H = "mathml"), g == null ? A(b, R, L, P, I, H, j, D) : C(g, b, P, I, H, j, D);
    }, A = (g, b, R, L, P, I, H, j) => {
      let D, $;
      const { props: X, shapeFlag: V, transition: Y, dirs: ne } = g;
      if (D = g.el = i(g.type, I, X && X.is, X), V & 8 ? c(D, g.children) : V & 16 && N(g.children, D, null, L, P, Ls(g, I), H, j), ne && Pt(g, null, L, "created"), M(D, g, g.scopeId, H, L), X) {
        for (const be in X) be !== "value" && !Wn(be) && s(D, be, null, X[be], I, L);
        "value" in X && s(D, "value", null, X.value, I), ($ = X.onVnodeBeforeMount) && Ye($, L, g);
      }
      ne && Pt(g, null, L, "beforeMount");
      const se = Hu(P, Y);
      se && Y.beforeEnter(D), r(D, b, R), (($ = X && X.onVnodeMounted) || se || ne) && Oe(() => {
        $ && Ye($, L, g), se && Y.enter(D), ne && Pt(g, null, L, "mounted");
      }, P);
    }, M = (g, b, R, L, P) => {
      if (R && d(g, R), L) for (let I = 0; I < L.length; I++) d(g, L[I]);
      if (P) {
        let I = P.subTree;
        if (b === I || No(I.type) && (I.ssContent === b || I.ssFallback === b)) {
          const H = P.vnode;
          M(g, H, H.scopeId, H.slotScopeIds, P.parent);
        }
      }
    }, N = (g, b, R, L, P, I, H, j, D = 0) => {
      for (let $ = D; $ < g.length; $++) {
        const X = g[$] = j ? an(g[$]) : ot(g[$]);
        y(null, X, b, R, L, P, I, H, j);
      }
    }, C = (g, b, R, L, P, I, H) => {
      const j = b.el = g.el;
      let { patchFlag: D, dynamicChildren: $, dirs: X } = b;
      D |= g.patchFlag & 16;
      const V = g.props || ae, Y = b.props || ae;
      let ne;
      if (R && _n(R, false), (ne = Y.onVnodeBeforeUpdate) && Ye(ne, R, b, g), X && Pt(b, g, R, "beforeUpdate"), R && _n(R, true), (V.innerHTML && Y.innerHTML == null || V.textContent && Y.textContent == null) && c(j, ""), $ ? O(g.dynamicChildren, $, j, R, L, Ls(b, P), I) : H || z(g, b, j, null, R, L, Ls(b, P), I, false), D > 0) {
        if (D & 16) E(j, V, Y, R, P);
        else if (D & 2 && V.class !== Y.class && s(j, "class", null, Y.class, P), D & 4 && s(j, "style", V.style, Y.style, P), D & 8) {
          const se = b.dynamicProps;
          for (let be = 0; be < se.length; be++) {
            const fe = se[be], Ze = V[fe], De = Y[fe];
            (De !== Ze || fe === "value") && s(j, fe, Ze, De, P, R);
          }
        }
        D & 1 && g.children !== b.children && c(j, b.children);
      } else !H && $ == null && E(j, V, Y, R, P);
      ((ne = Y.onVnodeUpdated) || X) && Oe(() => {
        ne && Ye(ne, R, b, g), X && Pt(b, g, R, "updated");
      }, L);
    }, O = (g, b, R, L, P, I, H) => {
      for (let j = 0; j < b.length; j++) {
        const D = g[j], $ = b[j], X = D.el && (D.type === Se || !ht(D, $) || D.shapeFlag & 70) ? f(D.el) : R;
        y(D, $, X, null, L, P, I, H, true);
      }
    }, E = (g, b, R, L, P) => {
      if (b !== R) {
        if (b !== ae) for (const I in b) !Wn(I) && !(I in R) && s(g, I, b[I], null, P, L);
        for (const I in R) {
          if (Wn(I)) continue;
          const H = R[I], j = b[I];
          H !== j && I !== "value" && s(g, I, j, H, P, L);
        }
        "value" in R && s(g, "value", b.value, R.value, P);
      }
    }, T = (g, b, R, L, P, I, H, j, D) => {
      const $ = b.el = g ? g.el : a(""), X = b.anchor = g ? g.anchor : a("");
      let { patchFlag: V, dynamicChildren: Y, slotScopeIds: ne } = b;
      ne && (j = j ? j.concat(ne) : ne), g == null ? (r($, R, L), r(X, R, L), N(b.children || [], R, X, P, I, H, j, D)) : V > 0 && V & 64 && Y && g.dynamicChildren ? (O(g.dynamicChildren, Y, R, P, I, H, j), (b.key != null || P && b === P.subTree) && ta(g, b, true)) : z(g, b, R, X, P, I, H, j, D);
    }, B = (g, b, R, L, P, I, H, j, D) => {
      b.slotScopeIds = j, g == null ? b.shapeFlag & 512 ? P.ctx.activate(b, R, L, H, D) : Z(b, R, L, P, I, H, D) : ee(g, b, D);
    }, Z = (g, b, R, L, P, I, H) => {
      const j = g.component = Fp(g, L, P);
      if (Kr(g) && (j.ctx.renderer = J), Hp(j, false, H), j.asyncDep) {
        if (P && P.registerDep(j, F, H), !g.el) {
          const D = j.subTree = me(Te);
          k(null, D, b, R);
        }
      } else F(j, g, b, R, P, I, H);
    }, ee = (g, b, R) => {
      const L = b.component = g.component;
      if (Ap(g, b, R)) if (L.asyncDep && !L.asyncResolved) {
        G(L, b, R);
        return;
      } else L.next = b, L.update();
      else b.el = g.el, L.vnode = b;
    }, F = (g, b, R, L, P, I, H) => {
      const j = () => {
        if (g.isMounted) {
          let { next: V, bu: Y, u: ne, parent: se, vnode: be } = g;
          {
            const et = Uu(g);
            if (et) {
              V && (V.el = be.el, G(g, V, H)), et.asyncDep.then(() => {
                g.isUnmounted || j();
              });
              return;
            }
          }
          let fe = V, Ze;
          _n(g, false), V ? (V.el = be.el, G(g, V, H)) : V = be, Y && qn(Y), (Ze = V.props && V.props.onVnodeBeforeUpdate) && Ye(Ze, se, V, be), _n(g, true);
          const De = Ms(g), ft = g.subTree;
          g.subTree = De, y(ft, De, f(ft.el), x(ft), g, P, I), V.el = De.el, fe === null && us(g, De.el), ne && Oe(ne, P), (Ze = V.props && V.props.onVnodeUpdated) && Oe(() => Ye(Ze, se, V, be), P);
        } else {
          let V;
          const { el: Y, props: ne } = b, { bm: se, m: be, parent: fe, root: Ze, type: De } = g, ft = pn(b);
          if (_n(g, false), se && qn(se), !ft && (V = ne && ne.onVnodeBeforeMount) && Ye(V, fe, b), _n(g, true), Y && Ee) {
            const et = () => {
              g.subTree = Ms(g), Ee(Y, g.subTree, g, P, null);
            };
            ft && De.__asyncHydrate ? De.__asyncHydrate(Y, g, et) : et();
          } else {
            Ze.ce && Ze.ce._injectChildStyle(De);
            const et = g.subTree = Ms(g);
            y(null, et, R, L, g, P, I), b.el = et.el;
          }
          if (be && Oe(be, P), !ft && (V = ne && ne.onVnodeMounted)) {
            const et = b;
            Oe(() => Ye(V, fe, et), P);
          }
          (b.shapeFlag & 256 || fe && pn(fe.vnode) && fe.vnode.shapeFlag & 256) && g.a && Oe(g.a, P), g.isMounted = true, b = R = L = null;
        }
      };
      g.scope.on();
      const D = g.effect = new Fc(j);
      g.scope.off();
      const $ = g.update = D.run.bind(D), X = g.job = D.runIfDirty.bind(D);
      X.i = g, X.id = g.uid, D.scheduler = () => Ji(X), _n(g, true), $();
    }, G = (g, b, R) => {
      b.component = g;
      const L = g.vnode.props;
      g.vnode = b, g.next = null, dp(g, b.props, L, R), gp(g, b.children, R), qt(), Pa(g), Kt();
    }, z = (g, b, R, L, P, I, H, j, D = false) => {
      const $ = g && g.children, X = g ? g.shapeFlag : 0, V = b.children, { patchFlag: Y, shapeFlag: ne } = b;
      if (Y > 0) {
        if (Y & 128) {
          Xt($, V, R, L, P, I, H, j, D);
          return;
        } else if (Y & 256) {
          Ae($, V, R, L, P, I, H, j, D);
          return;
        }
      }
      ne & 8 ? (X & 16 && it($, P, I), V !== $ && c(R, V)) : X & 16 ? ne & 16 ? Xt($, V, R, L, P, I, H, j, D) : it($, P, I, true) : (X & 8 && c(R, ""), ne & 16 && N(V, R, L, P, I, H, j, D));
    }, Ae = (g, b, R, L, P, I, H, j, D) => {
      g = g || Un, b = b || Un;
      const $ = g.length, X = b.length, V = Math.min($, X);
      let Y;
      for (Y = 0; Y < V; Y++) {
        const ne = b[Y] = D ? an(b[Y]) : ot(b[Y]);
        y(g[Y], ne, R, null, P, I, H, j, D);
      }
      $ > X ? it(g, P, I, true, false, V) : N(b, R, L, P, I, H, j, D, V);
    }, Xt = (g, b, R, L, P, I, H, j, D) => {
      let $ = 0;
      const X = b.length;
      let V = g.length - 1, Y = X - 1;
      for (; $ <= V && $ <= Y; ) {
        const ne = g[$], se = b[$] = D ? an(b[$]) : ot(b[$]);
        if (ht(ne, se)) y(ne, se, R, null, P, I, H, j, D);
        else break;
        $++;
      }
      for (; $ <= V && $ <= Y; ) {
        const ne = g[V], se = b[Y] = D ? an(b[Y]) : ot(b[Y]);
        if (ht(ne, se)) y(ne, se, R, null, P, I, H, j, D);
        else break;
        V--, Y--;
      }
      if ($ > V) {
        if ($ <= Y) {
          const ne = Y + 1, se = ne < X ? b[ne].el : L;
          for (; $ <= Y; ) y(null, b[$] = D ? an(b[$]) : ot(b[$]), R, se, P, I, H, j, D), $++;
        }
      } else if ($ > Y) for (; $ <= V; ) ze(g[$], P, I, true), $++;
      else {
        const ne = $, se = $, be = /* @__PURE__ */ new Map();
        for ($ = se; $ <= Y; $++) {
          const tt = b[$] = D ? an(b[$]) : ot(b[$]);
          tt.key != null && be.set(tt.key, $);
        }
        let fe, Ze = 0;
        const De = Y - se + 1;
        let ft = false, et = 0;
        const fr = new Array(De);
        for ($ = 0; $ < De; $++) fr[$] = 0;
        for ($ = ne; $ <= V; $++) {
          const tt = g[$];
          if (Ze >= De) {
            ze(tt, P, I, true);
            continue;
          }
          let St;
          if (tt.key != null) St = be.get(tt.key);
          else for (fe = se; fe <= Y; fe++) if (fr[fe - se] === 0 && ht(tt, b[fe])) {
            St = fe;
            break;
          }
          St === void 0 ? ze(tt, P, I, true) : (fr[St - se] = $ + 1, St >= et ? et = St : ft = true, y(tt, b[St], R, null, P, I, H, j, D), Ze++);
        }
        const Sa = ft ? bp(fr) : Un;
        for (fe = Sa.length - 1, $ = De - 1; $ >= 0; $--) {
          const tt = se + $, St = b[tt], ka = tt + 1 < X ? b[tt + 1].el : L;
          fr[$] === 0 ? y(null, St, R, ka, P, I, H, j, D) : ft && (fe < 0 || $ !== Sa[fe] ? wt(St, R, ka, 2) : fe--);
        }
      }
    }, wt = (g, b, R, L, P = null) => {
      const { el: I, type: H, transition: j, children: D, shapeFlag: $ } = g;
      if ($ & 6) {
        wt(g.component.subTree, b, R, L);
        return;
      }
      if ($ & 128) {
        g.suspense.move(b, R, L);
        return;
      }
      if ($ & 64) {
        H.move(g, b, R, J);
        return;
      }
      if (H === Se) {
        r(I, b, R);
        for (let V = 0; V < D.length; V++) wt(D[V], b, R, L);
        r(g.anchor, b, R);
        return;
      }
      if (H === Er) {
        m(g, b, R);
        return;
      }
      if (L !== 2 && $ & 1 && j) if (L === 0) j.beforeEnter(I), r(I, b, R), Oe(() => j.enter(I), P);
      else {
        const { leave: V, delayLeave: Y, afterLeave: ne } = j, se = () => {
          g.ctx.isUnmounted ? o(I) : r(I, b, R);
        }, be = () => {
          V(I, () => {
            se(), ne && ne();
          });
        };
        Y ? Y(I, se, be) : be();
      }
      else r(I, b, R);
    }, ze = (g, b, R, L = false, P = false) => {
      const { type: I, props: H, ref: j, children: D, dynamicChildren: $, shapeFlag: X, patchFlag: V, dirs: Y, cacheIndex: ne } = g;
      if (V === -2 && (P = false), j != null && (qt(), $r(j, null, R, g, true), Kt()), ne != null && (b.renderCache[ne] = void 0), X & 256) {
        b.ctx.deactivate(g);
        return;
      }
      const se = X & 1 && Y, be = !pn(g);
      let fe;
      if (be && (fe = H && H.onVnodeBeforeUnmount) && Ye(fe, b, g), X & 6) no(g.component, R, L);
      else {
        if (X & 128) {
          g.suspense.unmount(R, L);
          return;
        }
        se && Pt(g, null, b, "beforeUnmount"), X & 64 ? g.type.remove(g, b, R, J, L) : $ && !$.hasOnce && (I !== Se || V > 0 && V & 64) ? it($, b, R, false, true) : (I === Se && V & 384 || !P && X & 16) && it(D, b, R), L && Mn(g);
      }
      (be && (fe = H && H.onVnodeUnmounted) || se) && Oe(() => {
        fe && Ye(fe, b, g), se && Pt(g, null, b, "unmounted");
      }, R);
    }, Mn = (g) => {
      const { type: b, el: R, anchor: L, transition: P } = g;
      if (b === Se) {
        In(R, L);
        return;
      }
      if (b === Er) {
        v(g);
        return;
      }
      const I = () => {
        o(R), P && !P.persisted && P.afterLeave && P.afterLeave();
      };
      if (g.shapeFlag & 1 && P && !P.persisted) {
        const { leave: H, delayLeave: j } = P, D = () => H(R, I);
        j ? j(g.el, I, D) : D();
      } else I();
    }, In = (g, b) => {
      let R;
      for (; g !== b; ) R = h(g), o(g), g = R;
      o(b);
    }, no = (g, b, R) => {
      const { bum: L, scope: P, job: I, subTree: H, um: j, m: D, a: $, parent: X, slots: { __: V } } = g;
      $o(D), $o($), L && qn(L), X && K(V) && V.forEach((Y) => {
        X.renderCache[Y] = void 0;
      }), P.stop(), I && (I.flags |= 8, ze(H, g, b, R)), j && Oe(j, b), Oe(() => {
        g.isUnmounted = true;
      }, b), b && b.pendingBranch && !b.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === b.pendingId && (b.deps--, b.deps === 0 && b.resolve());
    }, it = (g, b, R, L = false, P = false, I = 0) => {
      for (let H = I; H < g.length; H++) ze(g[H], b, R, L, P);
    }, x = (g) => {
      if (g.shapeFlag & 6) return x(g.component.subTree);
      if (g.shapeFlag & 128) return g.suspense.next();
      const b = h(g.anchor || g.el), R = b && b[uu];
      return R ? h(R) : b;
    };
    let W = false;
    const U = (g, b, R) => {
      g == null ? b._vnode && ze(b._vnode, null, null, true) : y(b._vnode || null, g, b, null, null, null, R), b._vnode = g, W || (W = true, Pa(), Lo(), W = false);
    }, J = {
      p: y,
      um: ze,
      m: wt,
      r: Mn,
      mt: Z,
      mc: N,
      pc: z,
      pbc: O,
      n: x,
      o: e
    };
    let le, Ee;
    return t && ([le, Ee] = t(J)), {
      render: U,
      hydrate: le,
      createApp: up(U, le)
    };
  }
  function Ls({ type: e, props: t }, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
  }
  function _n({ effect: e, job: t }, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
  }
  function Hu(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted;
  }
  function ta(e, t, n = false) {
    const r = e.children, o = t.children;
    if (K(r) && K(o)) for (let s = 0; s < r.length; s++) {
      const i = r[s];
      let a = o[s];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = an(o[s]), a.el = i.el), !n && a.patchFlag !== -2 && ta(i, a)), a.type === Pn && (a.el = i.el), a.type === Te && !a.el && (a.el = i.el);
    }
  }
  function bp(e) {
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
  function Uu(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Uu(t);
  }
  function $o(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
  }
  const _p = Symbol.for("v-scx"), wp = () => Re(_p);
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
    const { immediate: r, deep: o, flush: s, once: i } = n, a = Pe({}, n), l = t && r || !t && s !== "post";
    let u;
    if (Xn) {
      if (s === "sync") {
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
    s === "post" ? a.scheduler = (d) => {
      Oe(d, c && c.suspense);
    } : s !== "sync" && (f = true, a.scheduler = (d, p) => {
      p ? d() : Ji(d);
    }), a.augmentJob = (d) => {
      t && (d.flags |= 4), f && (d.flags |= 2, c && (d.id = c.uid, d.i = c));
    };
    const h = jh(e, t, a);
    return Xn && (u ? u.push(h) : l && h()), h;
  }
  function Ep(e, t, n) {
    const r = this.proxy, o = ke(e) ? e.includes(".") ? Vu(r, e) : () => r[e] : e.bind(r, r);
    let s;
    te(t) ? s = t : (s = t.handler, n = t);
    const i = On(this), a = Gr(o, s.bind(r), n);
    return i(), a;
  }
  function Vu(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let o = 0; o < n.length && r; o++) r = r[n[o]];
      return r;
    };
  }
  kS = function(e, t, n = ae) {
    const r = Xe(), o = st(t), s = zt(t), i = Wu(e, o), a = ss((l, u) => {
      let c, f = ae, h;
      return kp(() => {
        const d = e[o];
        qe(c, d) && (c = d, u());
      }), {
        get() {
          return l(), n.get ? n.get(c) : c;
        },
        set(d) {
          const p = n.set ? n.set(d) : d;
          if (!qe(p, c) && !(f !== ae && qe(d, f))) return;
          const y = r.vnode.props;
          y && (t in y || o in y || s in y) && (`onUpdate:${t}` in y || `onUpdate:${o}` in y || `onUpdate:${s}` in y) || (c = d, u()), r.emit(`update:${t}`, p), qe(d, p) && qe(d, f) && !qe(p, h) && u(), f = d, h = p;
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
  const Wu = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${st(t)}Modifiers`] || e[`${zt(t)}Modifiers`];
  function Rp(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ae;
    let o = n;
    const s = t.startsWith("update:"), i = s && Wu(r, t.slice(7));
    i && (i.trim && (o = n.map((c) => ke(c) ? c.trim() : c)), i.number && (o = n.map(ni)));
    let a, l = r[a = ks(t)] || r[a = ks(st(t))];
    !l && s && (l = r[a = ks(zt(t))]), l && yt(l, e, 6, o);
    const u = r[a + "Once"];
    if (u) {
      if (!e.emitted) e.emitted = {};
      else if (e.emitted[a]) return;
      e.emitted[a] = true, yt(u, e, 6, o);
    }
  }
  function qu(e, t, n = false) {
    const r = t.emitsCache, o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {}, a = false;
    if (!te(e)) {
      const l = (u) => {
        const c = qu(u, t, true);
        c && (a = true, Pe(i, c));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !s && !a ? (ge(e) && r.set(e, null), null) : (K(s) ? s.forEach((l) => i[l] = null) : Pe(i, s), ge(e) && r.set(e, i), i);
  }
  function cs(e, t) {
    return !e || !Ur(t) ? false : (t = t.slice(2).replace(/Once$/, ""), ue(e, t[0].toLowerCase() + t.slice(1)) || ue(e, zt(t)) || ue(e, t));
  }
  function Ms(e) {
    const { type: t, vnode: n, proxy: r, withProxy: o, propsOptions: [s], slots: i, attrs: a, emit: l, render: u, renderCache: c, props: f, data: h, setupState: d, ctx: p, inheritAttrs: y } = e, S = Mo(e);
    let k, _;
    try {
      if (n.shapeFlag & 4) {
        const v = o || r, w = v;
        k = ot(u.call(w, v, c, f, d, h, p)), _ = a;
      } else {
        const v = t;
        k = ot(v.length > 1 ? v(f, {
          attrs: a,
          slots: i,
          emit: l
        }) : v(f, null)), _ = t.props ? a : Cp(a);
      }
    } catch (v) {
      Rr.length = 0, sr(v, e, 1), k = me(Te);
    }
    let m = k;
    if (_ && y !== false) {
      const v = Object.keys(_), { shapeFlag: w } = m;
      v.length && w & 7 && (s && v.some(Ui) && (_ = Pp(_, s)), m = bt(m, _, false, true));
    }
    return n.dirs && (m = bt(m, null, false, true), m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs), n.transition && vn(m, n.transition), k = m, Mo(S), k;
  }
  function Tp(e, t = true) {
    let n;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      if (xn(o)) {
        if (o.type !== Te || o.children === "v-if") {
          if (n) return;
          n = o;
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
    const { props: r, children: o, component: s } = e, { props: i, children: a, patchFlag: l } = t, u = s.emitsOptions;
    if (t.dirs || t.transition) return true;
    if (n && l >= 0) {
      if (l & 1024) return true;
      if (l & 16) return r ? Ha(r, i, u) : !!i;
      if (l & 8) {
        const c = t.dynamicProps;
        for (let f = 0; f < c.length; f++) {
          const h = c[f];
          if (i[h] !== r[h] && !cs(u, h)) return true;
        }
      }
    } else return (o || a) && (!a || !a.$stable) ? true : r === i ? false : r ? i ? Ha(r, i, u) : true : !!i;
    return false;
  }
  function Ha(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return true;
    for (let o = 0; o < r.length; o++) {
      const s = r[o];
      if (t[s] !== e[s] && !cs(n, s)) return true;
    }
    return false;
  }
  function us({ vnode: e, parent: t }, n) {
    for (; t; ) {
      const r = t.subTree;
      if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent;
      else break;
    }
  }
  const No = (e) => e.__isSuspense;
  let hi = 0;
  const xp = {
    name: "Suspense",
    __isSuspense: true,
    process(e, t, n, r, o, s, i, a, l, u) {
      if (e == null) Op(t, n, r, o, s, i, a, l, u);
      else {
        if (s && s.deps > 0 && !e.suspense.isInFallback) {
          t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
          return;
        }
        Lp(e, t, n, r, o, i, a, l, u);
      }
    },
    hydrate: Mp,
    normalize: Ip
  }, na = xp;
  function Br(e, t) {
    const n = e.props && e.props[t];
    te(n) && n();
  }
  function Op(e, t, n, r, o, s, i, a, l) {
    const { p: u, o: { createElement: c } } = l, f = c("div"), h = e.suspense = Ku(e, o, r, t, f, n, s, i, a, l);
    u(null, h.pendingBranch = e.ssContent, f, null, r, h, s, i), h.deps > 0 ? (Br(e, "onPending"), Br(e, "onFallback"), u(null, e.ssFallback, t, n, r, null, s, i), zn(h, e.ssFallback)) : h.resolve(false, true);
  }
  function Lp(e, t, n, r, o, s, i, a, { p: l, um: u, o: { createElement: c } }) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const h = t.ssContent, d = t.ssFallback, { activeBranch: p, pendingBranch: y, isInFallback: S, isHydrating: k } = f;
    if (y) f.pendingBranch = h, ht(h, y) ? (l(y, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : S && (k || (l(p, d, n, r, o, null, s, i, a), zn(f, d)))) : (f.pendingId = hi++, k ? (f.isHydrating = false, f.activeBranch = y) : u(y, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = c("div"), S ? (l(null, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : (l(p, d, n, r, o, null, s, i, a), zn(f, d))) : p && ht(h, p) ? (l(p, h, n, r, o, f, s, i, a), f.resolve(true)) : (l(null, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
    else if (p && ht(h, p)) l(p, h, n, r, o, f, s, i, a), zn(f, h);
    else if (Br(t, "onPending"), f.pendingBranch = h, h.shapeFlag & 512 ? f.pendingId = h.component.suspenseId : f.pendingId = hi++, l(null, h, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0) f.resolve();
    else {
      const { timeout: _, pendingId: m } = f;
      _ > 0 ? setTimeout(() => {
        f.pendingId === m && f.fallback(d);
      }, _) : _ === 0 && f.fallback(d);
    }
  }
  function Ku(e, t, n, r, o, s, i, a, l, u, c = false) {
    const { p: f, m: h, um: d, n: p, o: { parentNode: y, remove: S } } = u;
    let k;
    const _ = $p(e);
    _ && t && t.pendingBranch && (k = t.pendingId, t.deps++);
    const m = e.props ? Mc(e.props.timeout) : void 0, v = s, w = {
      vnode: e,
      parent: t,
      parentComponent: n,
      namespace: i,
      container: r,
      hiddenContainer: o,
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
        const { vnode: N, activeBranch: C, pendingBranch: O, pendingId: E, effects: T, parentComponent: B, container: Z } = w;
        let ee = false;
        w.isHydrating ? w.isHydrating = false : A || (ee = C && O.transition && O.transition.mode === "out-in", ee && (C.transition.afterLeave = () => {
          E === w.pendingId && (h(O, Z, s === v ? p(C) : s, 0), ii(T));
        }), C && (y(C.el) === Z && (s = p(C)), d(C, B, w, true)), ee || h(O, Z, s, 0)), zn(w, O), w.pendingBranch = null, w.isInFallback = false;
        let F = w.parent, G = false;
        for (; F; ) {
          if (F.pendingBranch) {
            F.effects.push(...T), G = true;
            break;
          }
          F = F.parent;
        }
        !G && !ee && ii(T), w.effects = [], _ && t && t.pendingBranch && k === t.pendingId && (t.deps--, t.deps === 0 && !M && t.resolve()), Br(N, "onResolve");
      },
      fallback(A) {
        if (!w.pendingBranch) return;
        const { vnode: M, activeBranch: N, parentComponent: C, container: O, namespace: E } = w;
        Br(M, "onFallback");
        const T = p(N), B = () => {
          w.isInFallback && (f(null, A, O, T, C, null, E, a, l), zn(w, A));
        }, Z = A.transition && A.transition.mode === "out-in";
        Z && (N.transition.afterLeave = B), w.isInFallback = true, d(N, C, null, true), Z || B();
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
          sr(E, A, 0);
        }).then((E) => {
          if (A.isUnmounted || w.isUnmounted || w.pendingId !== A.suspenseId) return;
          A.asyncResolved = true;
          const { vnode: T } = A;
          gi(A, E), O && (T.el = O);
          const B = !O && A.subTree.el;
          M(A, T, y(O || A.subTree.el), O ? null : p(A.subTree), w, i, N), B && S(B), us(A, T.el), C && --w.deps === 0 && w.resolve();
        });
      },
      unmount(A, M) {
        w.isUnmounted = true, w.activeBranch && d(w.activeBranch, n, A, M), w.pendingBranch && d(w.pendingBranch, n, A, M);
      }
    };
    return w;
  }
  function Mp(e, t, n, r, o, s, i, a, l) {
    const u = t.suspense = Ku(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, true), c = l(e, u.pendingBranch = t.ssContent, n, u, s, i);
    return u.deps === 0 && u.resolve(false, true), c;
  }
  function Ip(e) {
    const { shapeFlag: t, children: n } = e, r = t & 32;
    e.ssContent = Ua(r ? n.default : n), e.ssFallback = r ? Ua(n.fallback) : me(Te);
  }
  function Ua(e) {
    let t;
    if (te(e)) {
      const n = An && e._c;
      n && (e._d = false, q()), e = e(), n && (e._d = true, t = He, zu());
    }
    return K(e) && (e = Tp(e)), e = ot(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((n) => n !== e)), e;
  }
  function Gu(e, t) {
    t && t.pendingBranch ? K(e) ? t.effects.push(...e) : t.effects.push(e) : ii(e);
  }
  function zn(e, t) {
    e.activeBranch = t;
    const { vnode: n, parentComponent: r } = e;
    let o = t.el;
    for (; !o && t.component; ) t = t.component.subTree, o = t.el;
    n.el = o, r && r.subTree === n && (r.vnode.el = o, us(r, o));
  }
  function $p(e) {
    const t = e.props && e.props.suspensible;
    return t != null && t !== false;
  }
  let Pn, Er, Rr;
  Se = Symbol.for("v-fgt");
  Pn = Symbol.for("v-txt");
  Te = Symbol.for("v-cmt");
  Er = Symbol.for("v-stc");
  Rr = [];
  let He = null;
  q = function(e = false) {
    Rr.push(He = e ? null : []);
  };
  function zu() {
    Rr.pop(), He = Rr[Rr.length - 1] || null;
  }
  let An = 1;
  function Va(e, t = false) {
    An += e, e < 0 && He && t && (He.hasOnce = true);
  }
  function Ju(e) {
    return e.dynamicChildren = An > 0 ? He || Un : null, zu(), An > 0 && He && He.push(e), e;
  }
  de = function(e, t, n, r, o, s) {
    return Ju(nt(e, t, n, r, o, s, true));
  };
  oe = function(e, t, n, r, o) {
    return Ju(me(e, t, n, r, o, true));
  };
  function xn(e) {
    return e ? e.__v_isVNode === true : false;
  }
  function ht(e, t) {
    return e.type === t.type && e.key === t.key;
  }
  const Yu = ({ key: e }) => e ?? null, Eo = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e != null ? ke(e) || we(e) || te(e) ? {
    i: Me,
    r: e,
    k: t,
    f: !!n
  } : e : null);
  nt = function(e, t = null, n = null, r = 0, o = null, s = e === Se ? 0 : 1, i = false, a = false) {
    const l = {
      __v_isVNode: true,
      __v_skip: true,
      type: e,
      props: t,
      key: t && Yu(t),
      ref: t && Eo(t),
      scopeId: cu,
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
    return a ? (ra(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ke(n) ? 8 : 16), An > 0 && !i && He && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && He.push(l), l;
  };
  me = Np;
  function Np(e, t = null, n = null, r = 0, o = null, s = false) {
    if ((!e || e === Ru) && (e = Te), xn(e)) {
      const a = bt(e, t, true);
      return n && ra(a, n), An > 0 && !s && He && (a.shapeFlag & 6 ? He[He.indexOf(e)] = a : He.push(a)), a.patchFlag = -2, a;
    }
    if (Wp(e) && (e = e.__vccOpts), t) {
      t = Qu(t);
      let { class: a, style: l } = t;
      a && !ke(a) && (t.class = Vr(a)), ge(l) && (zi(l) && !K(l) && (l = Pe({}, l)), t.style = es(l));
    }
    const i = ke(e) ? 1 : No(e) ? 128 : fu(e) ? 64 : ge(e) ? 4 : te(e) ? 2 : 0;
    return nt(e, t, n, r, o, i, s, true);
  }
  Qu = function(e) {
    return e ? zi(e) || Iu(e) ? Pe({}, e) : e : null;
  };
  bt = function(e, t, n = false, r = false) {
    const { props: o, ref: s, patchFlag: i, children: a, transition: l } = e, u = t ? zr(o || {}, t) : o, c = {
      __v_isVNode: true,
      __v_skip: true,
      type: e.type,
      props: u,
      key: u && Yu(u),
      ref: t && t.ref ? n && s ? K(s) ? s.concat(Eo(t)) : [
        s,
        Eo(t)
      ] : Eo(t) : s,
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
    return l && r && vn(c, l.clone(c)), c;
  };
  ar = function(e = " ", t = 0) {
    return me(Pn, null, e, t);
  };
  Bp = function(e, t) {
    const n = me(Er, null, e);
    return n.staticCount = t, n;
  };
  Qt = function(e = "", t = false) {
    return t ? (q(), oe(Te, null, e)) : me(Te, null, e);
  };
  function ot(e) {
    return e == null || typeof e == "boolean" ? me(Te) : K(e) ? me(Se, null, e.slice()) : xn(e) ? an(e) : me(Pn, null, String(e));
  }
  function an(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : bt(e);
  }
  function ra(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null) t = null;
    else if (K(t)) n = 16;
    else if (typeof t == "object") if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = false), ra(e, o()), o._c && (o._d = true));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Iu(t) ? t._ctx = Me : o === 3 && Me && (Me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
    else te(t) ? (t = {
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
      for (const o in r) if (o === "class") t.class !== r.class && (t.class = Vr([
        t.class,
        r.class
      ]));
      else if (o === "style") t.style = es([
        t.style,
        r.style
      ]);
      else if (Ur(o)) {
        const s = t[o], i = r[o];
        i && s !== i && !(K(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i);
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
  const Dp = Ou();
  let jp = 0;
  function Fp(e, t, n) {
    const r = e.type, o = (t ? t.appContext : e.appContext) || Dp, s = {
      uid: jp++,
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
      scope: new jc(true),
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
      propsOptions: Nu(r, o),
      emitsOptions: qu(r, o),
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
    }, s.root = t ? t.root : s, s.emit = Rp.bind(null, s), e.ce && e.ce(s), s;
  }
  let Le = null;
  Xe = () => Le || Me;
  let Bo, pi;
  {
    const e = Zo(), t = (n, r) => {
      let o;
      return (o = e[n]) || (o = e[n] = []), o.push(r), (s) => {
        o.length > 1 ? o.forEach((i) => i(s)) : o[0](s);
      };
    };
    Bo = t("__VUE_INSTANCE_SETTERS__", (n) => Le = n), pi = t("__VUE_SSR_SETTERS__", (n) => Xn = n);
  }
  const On = (e) => {
    const t = Le;
    return Bo(e), e.scope.on(), () => {
      e.scope.off(), Bo(t);
    };
  }, mi = () => {
    Le && Le.scope.off(), Bo(null);
  };
  function Xu(e) {
    return e.vnode.shapeFlag & 4;
  }
  let Xn = false;
  function Hp(e, t = false, n = false) {
    t && pi(t);
    const { props: r, children: o } = e.vnode, s = Xu(e);
    fp(e, r, s, t), mp(e, o, n || t);
    const i = s ? Up(e, t) : void 0;
    return t && pi(false), i;
  }
  function Up(e, t) {
    const n = e.type;
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, rp);
    const { setup: r } = n;
    if (r) {
      qt();
      const o = e.setupContext = r.length > 1 ? ef(e) : null, s = On(e), i = qr(r, e, 0, [
        e.props,
        o
      ]), a = Yo(i);
      if (Kt(), s(), (a || e.sp) && !pn(e) && Qi(e), a) {
        if (i.then(mi, mi), t) return i.then((l) => {
          gi(e, l);
        }).catch((l) => {
          sr(l, e, 0);
        });
        e.asyncDep = i;
      } else gi(e, i);
    } else Zu(e);
  }
  function gi(e, t, n) {
    te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = ou(t)), Zu(e);
  }
  function Zu(e, t, n) {
    const r = e.type;
    e.render || (e.render = r.render || Ot);
    {
      const o = On(e);
      qt();
      try {
        op(e);
      } finally {
        Kt(), o();
      }
    }
  }
  const Vp = {
    get(e, t) {
      return Fe(e, "get", ""), e[t];
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
  function fs(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ou(Kn(e.exposed)), {
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
    return te(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function Wp(e) {
    return te(e) && "__vccOpts" in e;
  }
  Q = (e, t) => Bh(e, t, Xn);
  pe = function(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ge(t) && !K(t) ? xn(t) ? me(e, null, [
      t
    ]) : me(e, t) : me(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && xn(n) && (n = [
      n
    ]), me(e, t, n));
  };
  ES = function(e, t, n, r) {
    const o = n[r];
    if (o && qp(o, e)) return o;
    const s = t();
    return s.memo = e.slice(), s.cacheIndex = r, n[r] = s;
  };
  function qp(e, t) {
    const n = e.memo;
    if (n.length != t.length) return false;
    for (let r = 0; r < n.length; r++) if (qe(n[r], t[r])) return false;
    return An > 0 && He && He.push(e), true;
  }
  const Kp = "3.5.14";
  let vi;
  const Wa = typeof window < "u" && window.trustedTypes;
  if (Wa) try {
    vi = Wa.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
  let tf, Gp, zp, Bt, qa, Jp, Zt, hr, Zn, nf, rf, Yp, wn, Ka;
  tf = vi ? (e) => vi.createHTML(e) : (e) => e;
  Gp = "http://www.w3.org/2000/svg";
  zp = "http://www.w3.org/1998/Math/MathML";
  Bt = typeof document < "u" ? document : null;
  qa = Bt && Bt.createElement("template");
  Jp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const o = t === "svg" ? Bt.createElementNS(Gp, e) : t === "mathml" ? Bt.createElementNS(zp, e) : n ? Bt.createElement(e, {
        is: n
      }) : Bt.createElement(e);
      return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
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
    insertStaticContent(e, t, n, r, o, s) {
      const i = n ? n.previousSibling : t.lastChild;
      if (o && (o === s || o.nextSibling)) for (; t.insertBefore(o.cloneNode(true), n), !(o === s || !(o = o.nextSibling)); ) ;
      else {
        qa.innerHTML = tf(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
        const a = qa.content;
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
  Zt = "transition";
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
  rf = Pe({}, mu, nf);
  Yp = (e) => (e.displayName = "Transition", e.props = rf, e);
  Qp = Yp((e, { slots: t }) => pe(Wh, of(e), t));
  wn = (e, t = []) => {
    K(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  };
  Ka = (e) => e ? K(e) ? e.some((t) => t.length > 1) : e.length > 1 : false;
  function of(e) {
    const t = {};
    for (const T in e) T in nf || (t[T] = e[T]);
    if (e.css === false) return t;
    const { name: n = "v", type: r, duration: o, enterFromClass: s = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: a = `${n}-enter-to`, appearFromClass: l = s, appearActiveClass: u = i, appearToClass: c = a, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: h = `${n}-leave-active`, leaveToClass: d = `${n}-leave-to` } = e, p = Xp(o), y = p && p[0], S = p && p[1], { onBeforeEnter: k, onEnter: _, onEnterCancelled: m, onLeave: v, onLeaveCancelled: w, onBeforeAppear: A = k, onAppear: M = _, onAppearCancelled: N = m } = t, C = (T, B, Z, ee) => {
      T._enterCancelled = ee, nn(T, B ? c : a), nn(T, B ? u : i), Z && Z();
    }, O = (T, B) => {
      T._isLeaving = false, nn(T, f), nn(T, d), nn(T, h), B && B();
    }, E = (T) => (B, Z) => {
      const ee = T ? M : _, F = () => C(B, T, Z);
      wn(ee, [
        B,
        F
      ]), Ga(() => {
        nn(B, T ? l : s), Et(B, T ? c : a), Ka(ee) || za(B, r, y, F);
      });
    };
    return Pe(t, {
      onBeforeEnter(T) {
        wn(k, [
          T
        ]), Et(T, s), Et(T, i);
      },
      onBeforeAppear(T) {
        wn(A, [
          T
        ]), Et(T, l), Et(T, u);
      },
      onEnter: E(false),
      onAppear: E(true),
      onLeave(T, B) {
        T._isLeaving = true;
        const Z = () => O(T, B);
        Et(T, f), T._enterCancelled ? (Et(T, h), bi()) : (bi(), Et(T, h)), Ga(() => {
          T._isLeaving && (nn(T, f), Et(T, d), Ka(v) || za(T, r, S, Z));
        }), wn(v, [
          T,
          Z
        ]);
      },
      onEnterCancelled(T) {
        C(T, false, void 0, true), wn(m, [
          T
        ]);
      },
      onAppearCancelled(T) {
        C(T, true, void 0, true), wn(N, [
          T
        ]);
      },
      onLeaveCancelled(T) {
        O(T), wn(w, [
          T
        ]);
      }
    });
  }
  function Xp(e) {
    if (e == null) return null;
    if (ge(e)) return [
      Is(e.enter),
      Is(e.leave)
    ];
    {
      const t = Is(e);
      return [
        t,
        t
      ];
    }
  }
  function Is(e) {
    return Mc(e);
  }
  function Et(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Zn] || (e[Zn] = /* @__PURE__ */ new Set())).add(t);
  }
  function nn(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const n = e[Zn];
    n && (n.delete(t), n.size || (e[Zn] = void 0));
  }
  function Ga(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Zp = 0;
  function za(e, t, n, r) {
    const o = e._endId = ++Zp, s = () => {
      o === e._endId && r();
    };
    if (n != null) return setTimeout(s, n);
    const { type: i, timeout: a, propCount: l } = sf(e, t);
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
  function sf(e, t) {
    const n = window.getComputedStyle(e), r = (p) => (n[p] || "").split(", "), o = r(`${Zt}Delay`), s = r(`${Zt}Duration`), i = Ja(o, s), a = r(`${hr}Delay`), l = r(`${hr}Duration`), u = Ja(a, l);
    let c = null, f = 0, h = 0;
    t === Zt ? i > 0 && (c = Zt, f = i, h = s.length) : t === hr ? u > 0 && (c = hr, f = u, h = l.length) : (f = Math.max(i, u), c = f > 0 ? i > u ? Zt : hr : null, h = c ? c === Zt ? s.length : l.length : 0);
    const d = c === Zt && /\b(transform|all)(,|$)/.test(r(`${Zt}Property`).toString());
    return {
      type: c,
      timeout: f,
      propCount: h,
      hasTransform: d
    };
  }
  function Ja(e, t) {
    for (; e.length < t.length; ) e = e.concat(e);
    return Math.max(...t.map((n, r) => Ya(n) + Ya(e[r])));
  }
  function Ya(e) {
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
  let Do, af;
  Do = Symbol("_vod");
  af = Symbol("_vsh");
  RS = {
    beforeMount(e, { value: t }, { transition: n }) {
      e[Do] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : pr(e, t);
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
    e.style.display = t ? e[Do] : "none", e[af] = !t;
  }
  const tm = Symbol(""), nm = /(^|;)\s*display\s*:/;
  function rm(e, t, n) {
    const r = e.style, o = ke(n);
    let s = false;
    if (n && !o) {
      if (t) if (ke(t)) for (const i of t.split(";")) {
        const a = i.slice(0, i.indexOf(":")).trim();
        n[a] == null && Ro(r, a, "");
      }
      else for (const i in t) n[i] == null && Ro(r, i, "");
      for (const i in n) i === "display" && (s = true), Ro(r, i, n[i]);
    } else if (o) {
      if (t !== n) {
        const i = r[tm];
        i && (n += ";" + i), r.cssText = n, s = nm.test(n);
      }
    } else t && e.removeAttribute("style");
    Do in e && (e[Do] = s ? r.display : "", e[af] && (r.display = "none"));
  }
  const Qa = /\s*!important$/;
  function Ro(e, t, n) {
    if (K(n)) n.forEach((r) => Ro(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
      const r = om(e, t);
      Qa.test(n) ? e.setProperty(zt(r), n.replace(Qa, ""), "important") : e[r] = n;
    }
  }
  const Xa = [
    "Webkit",
    "Moz",
    "ms"
  ], $s = {};
  function om(e, t) {
    const n = $s[t];
    if (n) return n;
    let r = st(t);
    if (r !== "filter" && r in e) return $s[t] = r;
    r = Xo(r);
    for (let o = 0; o < Xa.length; o++) {
      const s = Xa[o] + r;
      if (s in e) return $s[t] = s;
    }
    return t;
  }
  const Za = "http://www.w3.org/1999/xlink";
  function el(e, t, n, r, o, s = ch(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Za, t.slice(6, t.length)) : e.setAttributeNS(Za, t, n) : n == null || s && !$c(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : gt(n) ? String(n) : n);
  }
  function tl(e, t, n, r, o) {
    if (t === "innerHTML" || t === "textContent") {
      n != null && (e[t] = t === "innerHTML" ? tf(n) : n);
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
      a === "boolean" ? n = $c(n) : n == null && a === "string" ? (n = "", i = true) : a === "number" && (n = 0, i = true);
    }
    try {
      e[t] = n;
    } catch {
    }
    i && e.removeAttribute(o || t);
  }
  function cn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function sm(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  const nl = Symbol("_vei");
  function im(e, t, n, r, o = null) {
    const s = e[nl] || (e[nl] = {}), i = s[t];
    if (r && i) i.value = r;
    else {
      const [a, l] = am(t);
      if (r) {
        const u = s[t] = um(r, o);
        cn(e, a, u, l);
      } else i && (sm(e, a, i, l), s[t] = void 0);
    }
  }
  const rl = /(?:Once|Passive|Capture)$/;
  function am(e) {
    let t;
    if (rl.test(e)) {
      t = {};
      let r;
      for (; r = e.match(rl); ) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = true;
    }
    return [
      e[2] === ":" ? e.slice(3) : zt(e.slice(2)),
      t
    ];
  }
  let Ns = 0;
  const lm = Promise.resolve(), cm = () => Ns || (lm.then(() => Ns = 0), Ns = Date.now());
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
    if (K(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = true;
      }, t.map((r) => (o) => !o._stopped && r && r(o));
    } else return t;
  }
  const ol = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dm = (e, t, n, r, o, s) => {
    const i = o === "svg";
    t === "class" ? em(e, r, i) : t === "style" ? rm(e, n, r) : Ur(t) ? Ui(t) || im(e, t, n, r, s) : (t[0] === "." ? (t = t.slice(1), true) : t[0] === "^" ? (t = t.slice(1), false) : hm(e, t, r, i)) ? (tl(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && el(e, t, r, i, s, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !ke(r)) ? tl(e, st(t), r, s, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), el(e, t, r, i));
  };
  function hm(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && ol(t) && te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return false;
    if (t === "width" || t === "height") {
      const o = e.tagName;
      if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return false;
    }
    return ol(t) && ke(n) ? false : t in e;
  }
  let lf, cf, jo, sl, pm, mm;
  lf = /* @__PURE__ */ new WeakMap();
  cf = /* @__PURE__ */ new WeakMap();
  jo = Symbol("_moveCb");
  sl = Symbol("_enterCb");
  pm = (e) => (delete e.props.mode, e);
  mm = pm({
    name: "TransitionGroup",
    props: Pe({}, rf, {
      tag: String,
      moveClass: String
    }),
    setup(e, { slots: t }) {
      const n = Xe(), r = pu();
      let o, s;
      return Xi(() => {
        if (!o.length) return;
        const i = e.moveClass || `${e.name || "v"}-move`;
        if (!bm(o[0].el, n.vnode.el, i)) {
          o = [];
          return;
        }
        o.forEach(gm), o.forEach(ym);
        const a = o.filter(vm);
        bi(), a.forEach((l) => {
          const u = l.el, c = u.style;
          Et(u, i), c.transform = c.webkitTransform = c.transitionDuration = "";
          const f = u[jo] = (h) => {
            h && h.target !== u || (!h || /transform$/.test(h.propertyName)) && (u.removeEventListener("transitionend", f), u[jo] = null, nn(u, i));
          };
          u.addEventListener("transitionend", f);
        }), o = [];
      }), () => {
        const i = re(e), a = of(i);
        let l = i.tag || Se;
        if (o = [], s) for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.el && c.el instanceof Element && (o.push(c), vn(c, Ir(c, a, r, n)), lf.set(c, c.el.getBoundingClientRect()));
        }
        s = t.default ? Yi(t.default()) : [];
        for (let u = 0; u < s.length; u++) {
          const c = s[u];
          c.key != null && vn(c, Ir(c, a, r, n));
        }
        return me(l, null, s);
      };
    }
  });
  TS = mm;
  function gm(e) {
    const t = e.el;
    t[jo] && t[jo](), t[sl] && t[sl]();
  }
  function ym(e) {
    cf.set(e, e.el.getBoundingClientRect());
  }
  function vm(e) {
    const t = lf.get(e), n = cf.get(e), r = t.left - n.left, o = t.top - n.top;
    if (r || o) {
      const s = e.el.style;
      return s.transform = s.webkitTransform = `translate(${r}px,${o}px)`, s.transitionDuration = "0s", e;
    }
  }
  function bm(e, t, n) {
    const r = e.cloneNode(), o = e[Zn];
    o && o.forEach((a) => {
      a.split(/\s+/).forEach((l) => l && r.classList.remove(l));
    }), n.split(/\s+/).forEach((a) => a && r.classList.add(a)), r.style.display = "none";
    const s = t.nodeType === 1 ? t : t.parentNode;
    s.appendChild(r);
    const { hasTransform: i } = sf(r);
    return s.removeChild(r), i;
  }
  const er = (e) => {
    const t = e.props["onUpdate:modelValue"] || false;
    return K(t) ? (n) => qn(t, n) : t;
  };
  function _m(e) {
    e.target.composing = true;
  }
  function il(e) {
    const t = e.target;
    t.composing && (t.composing = false, t.dispatchEvent(new Event("input")));
  }
  let Wt;
  Wt = Symbol("_assign");
  CS = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
      e[Wt] = er(o);
      const s = r || o.props && o.props.type === "number";
      cn(e, t ? "change" : "input", (i) => {
        if (i.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), s && (a = ni(a)), e[Wt](a);
      }), n && cn(e, "change", () => {
        e.value = e.value.trim();
      }), t || (cn(e, "compositionstart", _m), cn(e, "compositionend", il), cn(e, "change", il));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: s } }, i) {
      if (e[Wt] = er(i), e.composing) return;
      const a = (s || e.type === "number") && !/^0\d/.test(e.value) ? ni(e.value) : e.value, l = t ?? "";
      a !== l && (document.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === l) || (e.value = l));
    }
  };
  PS = {
    deep: true,
    created(e, t, n) {
      e[Wt] = er(n), cn(e, "change", () => {
        const r = e._modelValue, o = uf(e), s = e.checked, i = e[Wt];
        if (K(r)) {
          const a = Nc(r, o), l = a !== -1;
          if (s && !l) i(r.concat(o));
          else if (!s && l) {
            const u = [
              ...r
            ];
            u.splice(a, 1), i(u);
          }
        } else if (Jo(r)) {
          const a = new Set(r);
          s ? a.add(o) : a.delete(o), i(a);
        } else i(ff(e, s));
      });
    },
    mounted: al,
    beforeUpdate(e, t, n) {
      e[Wt] = er(n), al(e, t, n);
    }
  };
  function al(e, { value: t, oldValue: n }, r) {
    e._modelValue = t;
    let o;
    if (K(t)) o = Nc(t, r.props.value) > -1;
    else if (Jo(t)) o = t.has(r.props.value);
    else {
      if (t === n) return;
      o = Yn(t, ff(e, true));
    }
    e.checked !== o && (e.checked = o);
  }
  AS = {
    created(e, { value: t }, n) {
      e.checked = Yn(t, n.props.value), e[Wt] = er(n), cn(e, "change", () => {
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
    return n[r] || (n[r] = (o, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const a = Sm[t[i]];
        if (a && a(o, t)) return;
      }
      return e(o, ...s);
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
    return n[r] || (n[r] = (o) => {
      if (!("key" in o)) return;
      const s = zt(o.key);
      if (t.some((i) => i === s || km[i] === s)) return e(o);
    });
  };
  df = Pe({
    patchProp: dm
  }, Jp);
  let Tr, ll = false;
  function hf() {
    return Tr || (Tr = yp(df));
  }
  function Em() {
    return Tr = ll ? Tr : vp(df), ll = true, Tr;
  }
  let Tm;
  LS = (...e) => {
    hf().render(...e);
  };
  Rm = (...e) => {
    const t = hf().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = mf(r);
      if (!o) return;
      const s = t._component;
      !te(s) && !s.render && !s.template && (s.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
      const i = n(o, false, pf(o));
      return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
    }, t;
  };
  Tm = (...e) => {
    const t = Em().createApp(...e), { mount: n } = t;
    return t.mount = (r) => {
      const o = mf(r);
      if (o) return n(o, true, pf(o));
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
  const gf = /#/g, yf = /&/g, vf = /\//g, Lm = /=/g, Mm = /\?/g, ds = /\+/g, Im = /%5e/gi, $m = /%60/gi, Nm = /%7c/gi, Bm = /%20/gi, Dm = /%252f/gi;
  function bf(e) {
    return encodeURI("" + e).replace(Nm, "|");
  }
  function _i(e) {
    return bf(typeof e == "string" ? e : JSON.stringify(e)).replace(ds, "%2B").replace(Bm, "+").replace(gf, "%23").replace(yf, "%26").replace($m, "`").replace(Im, "^").replace(vf, "%2F");
  }
  function Bs(e) {
    return _i(e).replace(Lm, "%3D");
  }
  jm = function(e) {
    return bf(e).replace(gf, "%23").replace(Mm, "%3F").replace(Dm, "%2F").replace(yf, "%26").replace(ds, "%2B");
  };
  MS = function(e) {
    return jm(e).replace(vf, "%2F");
  };
  function Fo(e = "") {
    try {
      return decodeURIComponent("" + e);
    } catch {
      return "" + e;
    }
  }
  function Fm(e) {
    return Fo(e.replace(ds, " "));
  }
  function Hm(e) {
    return Fo(e.replace(ds, " "));
  }
  function hs(e = "") {
    const t = /* @__PURE__ */ Object.create(null);
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
      const r = n.match(/([^=]+)=?(.*)/) || [];
      if (r.length < 2) continue;
      const o = Fm(r[1]);
      if (o === "__proto__" || o === "constructor") continue;
      const s = Hm(r[2] || "");
      t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [
        t[o],
        s
      ];
    }
    return t;
  }
  function Um(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map((n) => `${Bs(e)}=${_i(n)}`).join("&") : `${Bs(e)}=${_i(t)}` : Bs(e);
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
    const o = e.indexOf("#");
    o !== -1 && (n = e.slice(0, o), r = e.slice(o));
    const [s, ...i] = n.split("?");
    return ((s.endsWith("/") ? s.slice(0, -1) : s) || "/") + (i.length > 0 ? `?${i.join("?")}` : "") + r;
  }
  function wf(e = "", t) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (wi(e, true)) return e || "/";
    let n = e, r = "";
    const o = e.indexOf("#");
    if (o !== -1 && (n = e.slice(0, o), r = e.slice(o), !n)) return r;
    const [s, ...i] = n.split("?");
    return s + "/" + (i.length > 0 ? `?${i.join("?")}` : "") + r;
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
    return e.startsWith(n) ? e : ps(n, e);
  };
  function cl(e, t) {
    if (kf(t)) return e;
    const n = tr(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r;
  }
  Sf = function(e, t) {
    const n = oa(e), r = {
      ...hs(n.search),
      ...t
    };
    return n.search = Vm(r), ng(n);
  };
  $S = function(e) {
    return hs(oa(e).search);
  };
  function kf(e) {
    return !e || e === "/";
  }
  function Xm(e) {
    return e && e !== "/";
  }
  ps = function(e, ...t) {
    let n = e || "";
    for (const r of t.filter((o) => Xm(o))) if (n) {
      const o = r.replace(zm, "");
      n = wf(n) + o;
    } else n = r;
    return n;
  };
  function Ef(...e) {
    var _a2, _b2, _c2, _d2;
    const t = /\/(?!\/)/, n = e.filter(Boolean), r = [];
    let o = 0;
    for (const i of n) if (!(!i || i === "/")) {
      for (const [a, l] of i.split(t).entries()) if (!(!l || l === ".")) {
        if (l === "..") {
          if (r.length === 1 && $t(r[0])) continue;
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
  function Zm(e) {
    return eg(e, "https://");
  }
  function eg(e, t) {
    let n = e.match(_f);
    return n || (n = e.match(/^\/{2,}/)), n ? t + e.slice(n[0].length) : t + e;
  }
  function tg(e, t) {
    return Fo(tr(e)) === Fo(tr(t));
  }
  const Rf = Symbol.for("ufo:protocolRelative");
  oa = function(e = "", t) {
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
    })) return ul(e);
    const [, r = "", o, s = ""] = e.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
    let [, i = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
    r === "file:" && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
    const { pathname: l, search: u, hash: c } = ul(a);
    return {
      protocol: r.toLowerCase(),
      auth: o ? o.slice(0, Math.max(0, o.length - 1)) : "",
      host: i,
      pathname: l,
      search: u,
      hash: c,
      [Rf]: !r
    };
  };
  function ul(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
      pathname: t,
      search: n,
      hash: r
    };
  }
  function ng(e) {
    const t = e.pathname || "", n = e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "", r = e.hash || "", o = e.auth ? e.auth + "@" : "", s = e.host || "";
    return (e.protocol || e[Rf] ? (e.protocol || "") + "//" : "") + o + s + t + n + r;
  }
  class rg extends Error {
    constructor(t, n) {
      super(t, n), this.name = "FetchError", (n == null ? void 0 : n.cause) && !this.cause && (this.cause = n.cause);
    }
  }
  function og(e) {
    var _a2, _b2, _c2, _d2, _e2;
    const t = ((_a2 = e.error) == null ? void 0 : _a2.message) || ((_b2 = e.error) == null ? void 0 : _b2.toString()) || "", n = ((_c2 = e.request) == null ? void 0 : _c2.method) || ((_d2 = e.options) == null ? void 0 : _d2.method) || "GET", r = ((_e2 = e.request) == null ? void 0 : _e2.url) || String(e.request) || "/", o = `[${n}] ${JSON.stringify(r)}`, s = e.response ? `${e.response.status} ${e.response.statusText}` : "<no response>", i = `${o}: ${s}${t ? ` ${t}` : ""}`, a = new rg(i, e.error ? {
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
  const sg = new Set(Object.freeze([
    "PATCH",
    "POST",
    "PUT",
    "DELETE"
  ]));
  function fl(e = "GET") {
    return sg.has(e.toUpperCase());
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
    const o = fg((t == null ? void 0 : t.headers) ?? (e == null ? void 0 : e.headers), n == null ? void 0 : n.headers, r);
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
  function fg(e, t, n) {
    if (!t) return new n(e);
    const r = new n(t);
    if (e) for (const [o, s] of Symbol.iterator in e || Array.isArray(e) ? e : new n(e)) r.set(o, s);
    return r;
  }
  async function fo(e, t) {
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
  function Tf(e = {}) {
    const { fetch: t = globalThis.fetch, Headers: n = globalThis.Headers, AbortController: r = globalThis.AbortController } = e;
    async function o(a) {
      const l = a.error && a.error.name === "AbortError" && !a.options.timeout || false;
      if (a.options.retry !== false && !l) {
        let c;
        typeof a.options.retry == "number" ? c = a.options.retry : c = fl(a.options.method) ? 0 : 1;
        const f = a.response && a.response.status || 500;
        if (c > 0 && (Array.isArray(a.options.retryStatusCodes) ? a.options.retryStatusCodes.includes(f) : dg.has(f))) {
          const h = typeof a.options.retryDelay == "function" ? a.options.retryDelay(a) : a.options.retryDelay || 0;
          return h > 0 && await new Promise((d) => setTimeout(d, h)), s(a.request, {
            ...a.options,
            retry: c - 1
          });
        }
      }
      const u = og(a);
      throw Error.captureStackTrace && Error.captureStackTrace(u, s), u;
    }
    const s = async function(l, u = {}) {
      const c = {
        request: l,
        options: ug(l, u, e.defaults, n),
        response: void 0,
        error: void 0
      };
      c.options.method && (c.options.method = c.options.method.toUpperCase()), c.options.onRequest && await fo(c, c.options.onRequest), typeof c.request == "string" && (c.options.baseURL && (c.request = Qm(c.request, c.options.baseURL)), c.options.query && (c.request = Sf(c.request, c.options.query), delete c.options.query), "query" in c.options && delete c.options.query, "params" in c.options && delete c.options.params), c.options.body && fl(c.options.method) && (ig(c.options.body) ? (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")) : ("pipeTo" in c.options.body && typeof c.options.body.pipeTo == "function" || typeof c.options.body.pipe == "function") && ("duplex" in c.options || (c.options.duplex = "half")));
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
        return c.error = d, c.options.onRequestError && await fo(c, c.options.onRequestError), await o(c);
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
      return c.options.onResponse && await fo(c, c.options.onResponse), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await fo(c, c.options.onResponseError), await o(c)) : c.response;
    }, i = async function(l, u) {
      return (await s(l, u))._data;
    };
    return i.raw = s, i.native = (...a) => t(...a), i.create = (a = {}, l = {}) => Tf({
      ...e,
      ...l,
      defaults: {
        ...e.defaults,
        ...l.defaults,
        ...a
      }
    }), i;
  }
  const Ho = function() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof self < "u") return self;
    if (typeof window < "u") return window;
    if (typeof global < "u") return global;
    throw new Error("unable to locate global object");
  }(), pg = Ho.fetch ? (...e) => Ho.fetch(...e) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!")), mg = Ho.Headers, gg = Ho.AbortController, yg = Tf({
    fetch: pg,
    Headers: mg,
    AbortController: gg
  }), vg = yg, bg = () => {
    var _a2;
    return ((_a2 = window == null ? void 0 : window.__NUXT__) == null ? void 0 : _a2.config) || {};
  }, Uo = bg().app, _g = () => Uo.baseURL, wg = () => Uo.buildAssetsDir, sa = (...e) => Ef(Cf(), wg(), ...e), Cf = (...e) => {
    const t = Uo.cdnURL || Uo.baseURL;
    return e.length ? Ef(t, ...e) : t;
  };
  globalThis.__buildAssetsURL = sa, globalThis.__publicAssetsURL = Cf;
  globalThis.$fetch || (globalThis.$fetch = vg.create({
    baseURL: _g()
  }));
  function Si(e, t = {}, n) {
    for (const r in e) {
      const o = e[r], s = n ? `${n}:${r}` : r;
      typeof o == "object" && o !== null ? Si(o, t, s) : typeof o == "function" && (t[s] = o);
    }
    return t;
  }
  const Sg = {
    run: (e) => e()
  }, kg = () => Sg, Pf = typeof console.createTask < "u" ? console.createTask : kg;
  function Eg(e, t) {
    const n = t.shift(), r = Pf(n);
    return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve());
  }
  function Rg(e, t) {
    const n = t.shift(), r = Pf(n);
    return Promise.all(e.map((o) => r.run(() => o(...t))));
  }
  function Ds(e, t) {
    for (const n of [
      ...e
    ]) n(t);
  }
  class Tg {
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
      const n = Si(t), r = Object.keys(n).map((o) => this.hook(o, n[o]));
      return () => {
        for (const o of r.splice(0, r.length)) o();
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
      return n.unshift(t), this.callHookWith(Rg, t, ...n);
    }
    callHookWith(t, n, ...r) {
      const o = this._before || this._after ? {
        name: n,
        args: r,
        context: {}
      } : void 0;
      this._before && Ds(this._before, o);
      const s = t(n in this._hooks ? [
        ...this._hooks[n]
      ] : [], r);
      return s instanceof Promise ? s.finally(() => {
        this._after && o && Ds(this._after, o);
      }) : (this._after && o && Ds(this._after, o), s);
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
    return new Tg();
  }
  function Cg(e = {}) {
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
        ki.add(u);
        try {
          const c = o ? o.run(i, a) : a();
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
  const Vo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {}, dl = "__unctx__", Ag = Vo[dl] || (Vo[dl] = Pg()), xg = (e, t = {}) => Ag.get(e, t), hl = "__unctx_async_handlers__", ki = Vo[hl] || (Vo[hl] = /* @__PURE__ */ new Set());
  function Jn(e) {
    const t = [];
    for (const o of ki) {
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
  let Og, pl, Lg, Mg, ml, Ig, Ut, $g, Ng, xf, gl, Bg;
  Og = false;
  pl = false;
  Lg = true;
  Mg = false;
  ml = {
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
  gl = 36e5;
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
      payload: Ht({
        ...((_a2 = e.ssrContext) == null ? void 0 : _a2.payload) || {},
        data: Ht({}),
        state: It({}),
        once: /* @__PURE__ */ new Set(),
        _errors: Ht({})
      }),
      static: {
        data: {}
      },
      runWithContext(o) {
        return n._scope.active && !Jt() ? n._scope.run(() => yl(n, o)) : yl(n, o);
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
      _asyncData: Ht({}),
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
    n.hooks = Af(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (o, s) => {
      const i = "$" + o;
      ho(n, i, s), ho(n.vueApp.config.globalProperties, i, s);
    }, ho(n.vueApp, "$nuxt", n), ho(n.vueApp.config.globalProperties, "$nuxt", n);
    {
      window.addEventListener(Bg, (s) => {
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
  function Fg(e, t) {
    t.hooks && e.hooks.addHooks(t.hooks);
  }
  async function Hg(e, t) {
    if (typeof t == "function") {
      const { provide: n } = await e.runWithContext(() => t(e)) || {};
      if (n && typeof n == "object") for (const r in n) e.provide(r, n[r]);
    }
  }
  async function Ug(e, t) {
    const n = [], r = [], o = [], s = [];
    let i = 0;
    async function a(l) {
      var _a2;
      const u = ((_a2 = l.dependsOn) == null ? void 0 : _a2.filter((c) => t.some((f) => f._name === c) && !n.includes(c))) ?? [];
      if (u.length > 0) r.push([
        new Set(u),
        l
      ]);
      else {
        const c = Hg(e, l).then(async () => {
          l._name && (n.push(l._name), await Promise.all(r.map(async ([f, h]) => {
            f.has(l._name) && (f.delete(l._name), f.size === 0 && (i++, await a(h)));
          })));
        });
        l.parallel ? o.push(c.catch((f) => s.push(f))) : await c;
      }
    }
    for (const l of t) Fg(e, l);
    for (const l of t) await a(l);
    if (await Promise.all(o), i) for (let l = 0; l < i; l++) await Promise.all(o);
    if (s.length) throw s[0];
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
  function yl(e, t, n) {
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
  function ho(e, t, n) {
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
    for (const n in e) t[n] = n === "dynamic" ? new Map(Object.entries(e[n]).map(([r, o]) => [
      r,
      Mf(o)
    ])) : new Map(Object.entries(e[n]));
    return t;
  }
  function qg(e) {
    return Wg(Mf(e));
  }
  function If(e, t, n) {
    e.endsWith("/") && (e = e.slice(0, -1) || "/");
    const r = [];
    for (const [s, i] of vl(t.wildcard)) (e === s || e.startsWith(s + "/")) && r.push(i);
    for (const [s, i] of vl(t.dynamic)) if (e.startsWith(s + "/")) {
      const a = "/" + e.slice(s.length).split("/").splice(2).join("/");
      r.push(...If(a, i));
    }
    const o = t.static.get(e);
    return o && r.push(o), r.filter(Boolean);
  }
  function vl(e) {
    return [
      ...e.entries()
    ].sort((t, n) => t[0].length - n[0].length);
  }
  function js(e) {
    if (e === null || typeof e != "object") return false;
    const t = Object.getPrototypeOf(e);
    return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? false : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : true;
  }
  function Ei(e, t, n = ".", r) {
    if (!js(t)) return Ei(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
      if (s === "__proto__" || s === "constructor") continue;
      const i = e[s];
      i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [
        ...i,
        ...o[s]
      ] : js(i) && js(o[s]) ? o[s] = Ei(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i));
    }
    return o;
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
  class bl extends Error {
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
        statusCode: Ri(this.statusCode, 500)
      };
      return this.statusMessage && (t.statusMessage = Nf(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t;
    }
  }
  __publicField(bl, "__h3_error__", true);
  function zg(e) {
    if (typeof e == "string") return new bl(e);
    if (Jg(e)) return e;
    const t = new bl(e.message ?? e.statusMessage ?? "", {
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
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = Ri(e.statusCode, t.statusCode) : e.status && (t.statusCode = Ri(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
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
  function Ri(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e;
  }
  let Bf, Jr;
  Bf = Symbol("layout-meta");
  Jr = Symbol("route");
  Ne = () => {
    var _a2;
    return (_a2 = ye()) == null ? void 0 : _a2.$router;
  };
  ms = () => ir() ? Re(Jr, ye()._route) : ye()._route;
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
    const n = typeof e == "string" ? e : "path" in e ? Ti(e) : Ne().resolve(e).href;
    if (t == null ? void 0 : t.open) {
      const { target: l = "_blank", windowFeatures: u = {} } = t.open, c = Object.entries(u).filter(([f, h]) => h !== void 0).map(([f, h]) => `${f.toLowerCase()}=${h}`).join(", ");
      return open(n, l, c), Promise.resolve();
    }
    const r = $t(n, {
      acceptRelative: true
    }), o = (t == null ? void 0 : t.external) || r;
    if (o) {
      if (!(t == null ? void 0 : t.external)) throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
      const { protocol: l } = new URL(n, window.location.href);
      if (l && Jm(l)) throw new Error(`Cannot navigate to a URL with '${l}' protocol.`);
    }
    const s = Qg();
    if (!o && s) {
      if (t == null ? void 0 : t.replace) {
        if (typeof e == "string") {
          const { pathname: l, search: u, hash: c } = oa(e);
          return {
            path: l,
            ...u && {
              query: hs(u)
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
    return o ? (a._scope.stop(), (t == null ? void 0 : t.replace) ? location.replace(n) : location.href = n, s ? a.isHydrating ? new Promise(() => {
    }) : false : Promise.resolve()) : (t == null ? void 0 : t.replace) ? i.replace(e) : i.push(e);
  };
  function Ti(e) {
    return Sf(e.path || "", e.query || {}) + (e.hash || "");
  }
  let Df, gs, Rn, jf, Ff, Zg;
  Df = "__nuxt_error";
  gs = () => is(ye().payload, "error");
  Rn = (e) => {
    const t = gn(e);
    try {
      const n = ye(), r = gs();
      n.hooks.callHook("app:error", t), r.value || (r.value = t);
    } catch {
      throw t;
    }
    return t;
  };
  jf = async (e = {}) => {
    const t = ye(), n = gs();
    t.callHook("app:error:cleared", e), e.redirect && await Ne().replace(e.redirect), n.value = $g;
  };
  Ff = (e) => !!e && typeof e == "object" && Df in e;
  gn = (e) => {
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
    let r, o, s = [], i, a;
    const l = (u, c) => (i = ty(e, u, c), i.finally(() => {
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
  async function ty(e, t, n) {
    return await e.apply(t, n);
  }
  let ia;
  const Yr = (e) => ia = e, ny = () => ir() && Re(aa) || ia, aa = Symbol();
  function Ci(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Cr;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Cr || (Cr = {}));
  function ry() {
    const e = Wr(true), t = e.run(() => Ce({}));
    let n = [], r = [];
    const o = Kn({
      install(s) {
        Yr(o), o._a = s, s.provide(aa, o), s.config.globalProperties.$pinia = o, r.forEach((i) => n.push(i)), r = [];
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
  const Hf = () => {
  };
  function _l(e, t, n, r = Hf) {
    e.push(t);
    const o = () => {
      const s = e.indexOf(t);
      s > -1 && (e.splice(s, 1), r());
    };
    return !n && Jt() && yn(o), o;
  }
  function Bn(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  const oy = (e) => e(), wl = Symbol(), Fs = Symbol();
  function Pi(e, t) {
    e instanceof Map && t instanceof Map ? t.forEach((n, r) => e.set(r, n)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n)) continue;
      const r = t[n], o = e[n];
      Ci(o) && Ci(r) && e.hasOwnProperty(n) && !we(r) && !Lt(r) ? e[n] = Pi(o, r) : e[n] = r;
    }
    return e;
  }
  const Uf = Symbol();
  function sy(e) {
    return Object.defineProperty(e, Uf, {});
  }
  function iy(e) {
    return !Ci(e) || !Object.prototype.hasOwnProperty.call(e, Uf);
  }
  const { assign: rn } = Object;
  function ay(e) {
    return !!(we(e) && e.effect);
  }
  function ly(e, t, n, r) {
    const { state: o, actions: s, getters: i } = t, a = n.state.value[e];
    let l;
    function u() {
      a || (n.state.value[e] = o ? o() : {});
      const c = Mh(n.state.value[e]);
      return rn(c, s, Object.keys(i || {}).reduce((f, h) => (f[h] = Kn(Q(() => {
        Yr(n);
        const d = n._s.get(e);
        return i[h].call(d, d);
      })), f), {}));
    }
    return l = Vf(e, u, t, n, r, true), l;
  }
  function Vf(e, t, n = {}, r, o, s) {
    let i;
    const a = rn({
      actions: {}
    }, n), l = {
      deep: true
    };
    let u, c, f = [], h = [], d;
    const p = r.state.value[e];
    !s && !p && (r.state.value[e] = {}), Ce({});
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
    const k = s ? function() {
      const { state: C } = n, O = C ? C() : {};
      this.$patch((E) => {
        rn(E, O);
      });
    } : Hf;
    function _() {
      i.stop(), f = [], h = [], r._s.delete(e);
    }
    const m = (N, C = "") => {
      if (wl in N) return N[Fs] = C, N;
      const O = function() {
        Yr(r);
        const E = Array.from(arguments), T = [], B = [];
        function Z(G) {
          T.push(G);
        }
        function ee(G) {
          B.push(G);
        }
        Bn(h, {
          args: E,
          name: O[Fs],
          store: w,
          after: Z,
          onError: ee
        });
        let F;
        try {
          F = N.apply(this && this.$id === e ? this : w, E);
        } catch (G) {
          throw Bn(B, G), G;
        }
        return F instanceof Promise ? F.then((G) => (Bn(T, G), G)).catch((G) => (Bn(B, G), Promise.reject(G))) : (Bn(T, F), F);
      };
      return O[wl] = true, O[Fs] = C, O;
    }, v = {
      _p: r,
      $id: e,
      $onAction: _l.bind(null, h),
      $patch: S,
      $reset: k,
      $subscribe(N, C = {}) {
        const O = _l(f, N, C.detached, () => E()), E = i.run(() => Qe(() => r.state.value[e], (T) => {
          (C.flush === "sync" ? c : u) && N({
            storeId: e,
            type: Cr.direct,
            events: d
          }, T);
        }, rn({}, l, C)));
        return O;
      },
      $dispose: _
    }, w = It(v);
    r._s.set(e, w);
    const M = (r._a && r._a.runWithContext || oy)(() => r._e.run(() => (i = Wr()).run(() => t({
      action: m
    }))));
    for (const N in M) {
      const C = M[N];
      if (we(C) && !ay(C) || Lt(C)) s || (p && iy(C) && (we(C) ? C.value = p[N] : Pi(C, p[N])), r.state.value[e][N] = C);
      else if (typeof C == "function") {
        const O = m(C, N);
        M[N] = O, a.actions[N] = C;
      }
    }
    return rn(w, M), rn(re(w), M), Object.defineProperty(w, "$state", {
      get: () => r.state.value[e],
      set: (N) => {
        S((C) => {
          rn(C, N);
        });
      }
    }), r._p.forEach((N) => {
      rn(w, i.run(() => N({
        store: w,
        app: r._a,
        pinia: r,
        options: a
      })));
    }), p && s && n.hydrate && n.hydrate(w.$state, p), u = true, c = true, w;
  }
  cy = function(e, t, n) {
    let r;
    const o = typeof t == "function";
    r = o ? n : t;
    function s(i, a) {
      const l = ir();
      return i = i || (l ? Re(aa, null) : null), i && Yr(i), i = ia, i._s.has(e) || (o ? Vf(e, t, r, i) : ly(e, r, i)), i._s.get(e);
    }
    return s.$id = e, s;
  };
  BS = function(e) {
    const t = re(e), n = {};
    for (const r in t) {
      const o = t[r];
      o.effect ? n[r] = Q({
        get: () => e[r],
        set(s) {
          e[r] = s;
        }
      }) : (we(o) || Lt(o)) && (n[r] = is(e, r));
    }
    return n;
  };
  function Sl(e) {
    const t = fy(e), n = new ArrayBuffer(t.length), r = new DataView(n);
    for (let o = 0; o < n.byteLength; o++) r.setUint8(o, t.charCodeAt(o));
    return n;
  }
  const uy = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  function fy(e) {
    e.length % 4 === 0 && (e = e.replace(/==?$/, ""));
    let t = "", n = 0, r = 0;
    for (let o = 0; o < e.length; o++) n <<= 6, n |= uy.indexOf(e[o]), r += 6, r === 24 && (t += String.fromCharCode((n & 16711680) >> 16), t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255), n = r = 0);
    return r === 12 ? (n >>= 4, t += String.fromCharCode(n)) : r === 18 && (n >>= 2, t += String.fromCharCode((n & 65280) >> 8), t += String.fromCharCode(n & 255)), t;
  }
  const dy = -1, hy = -2, py = -3, my = -4, gy = -5, yy = -6;
  function vy(e, t) {
    return by(JSON.parse(e), t);
  }
  function by(e, t) {
    if (typeof e == "number") return o(e, true);
    if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
    const n = e, r = Array(n.length);
    function o(s, i = false) {
      if (s === dy) return;
      if (s === py) return NaN;
      if (s === my) return 1 / 0;
      if (s === gy) return -1 / 0;
      if (s === yy) return -0;
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
            const d = globalThis[l], p = a[1], y = Sl(p), S = new d(y);
            r[s] = S;
            break;
          }
          case "ArrayBuffer": {
            const d = a[1], p = Sl(d);
            r[s] = p;
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
          c !== hy && (l[u] = o(c));
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
  ]), kl = /* @__PURE__ */ new Set([
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
  ]), Ry = /* @__PURE__ */ new Set([
    "templateParams",
    "htmlAttrs",
    "bodyAttrs"
  ]), la = /* @__PURE__ */ new Set([
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
  }, Ty = {
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
    const { entrySeparator: n = "", keyValueSeparator: r = "", wrapValue: o, resolve: s } = t;
    return Object.entries(e).map(([i, a]) => {
      if (s) {
        const u = s({
          key: i,
          value: a
        });
        if (u !== void 0) return u;
      }
      const l = typeof a == "object" ? Kf(a, t) : typeof a == "number" ? a.toString() : typeof a == "string" && o ? `${o}${a.replace(new RegExp(o, "g"), `\\${o}`)}${o}` : a;
      return `${i}${r}${l}`;
    }).join(n);
  }
  function El(e, t) {
    const n = qf(t), r = Vt(e), o = Gf(r);
    if (!la.has(r)) return [
      {
        [o]: r,
        ...n
      }
    ];
    const s = Object.fromEntries(Object.entries(n).map(([i, a]) => [
      `${e}${i === "url" ? "" : `${i[0].toUpperCase()}${i.slice(1)}`}`,
      a
    ]));
    return Wo(s || {}).sort((i, a) => {
      var _a2, _b2;
      return (((_a2 = i[o]) == null ? void 0 : _a2.length) || 0) - (((_b2 = a[o]) == null ? void 0 : _b2.length) || 0);
    });
  }
  function Gf(e) {
    var _a2;
    if (((_a2 = Wf[e]) == null ? void 0 : _a2.metaKey) === "http-equiv" || jr.HTTP_EQUIV.has(e)) return "http-equiv";
    const t = Vt(e), n = t.indexOf(":");
    return n === -1 ? "name" : jr.OG.has(t.slice(0, n)) ? "property" : "name";
  }
  function Cy(e) {
    return Ty[e] || Vt(e);
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
  function Wo(e) {
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
            const f = `${o}${u === "url" ? "" : `:${u}`}`, h = Wo({
              [f]: c
            });
            (u === "url" ? a : l).push(...h);
          }
          t.push(...a, ...l);
        } else t.push(...typeof i == "string" ? Wo({
          [o]: i
        }) : El(o, i));
        continue;
      }
      if (typeof s == "object" && s) if (jr.MEDIA.has(o)) {
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
      } else la.has(Vt(o)) ? t.push(...El(o, s)) : n[o] = qf(s);
      else n[o] = s;
    }
    const r = Object.entries(n).map(([o, s]) => {
      if (o === "charset") return {
        charset: s === null ? "_null" : s
      };
      const i = Gf(o), a = Cy(o), l = s === null ? "_null" : typeof s == "object" ? Py(s, o) : typeof s == "number" ? s.toString() : s;
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
  const Ay = {
    key: "flatMeta",
    hooks: {
      "entries:normalize": (e) => {
        const t = [];
        e.tags = e.tags.map((n) => n.tag !== "_flatMeta" ? n : (t.push(Wo(n.props).map((r) => ({
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
    return la.has(t);
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
  function Rl(e) {
    const t = e._h || e._d;
    if (t) return t;
    const n = e.textContent || e.innerHTML;
    return n || `${e.tag}:${Object.entries(e.props).map(([r, o]) => `${r}:${String(o)}`).join(",")}`;
  }
  function qo(e, t, n) {
    typeof e === "function" && (!n || n !== "titleTemplate" && !(n[0] === "o" && n[1] === "n")) && (e = e());
    let o;
    if (t && (o = t(n, e)), Array.isArray(o)) return o.map((s) => qo(s, t));
    if ((o == null ? void 0 : o.constructor) === Object) {
      const s = {};
      for (const i of Object.keys(o)) s[i] = qo(o[i], t, i);
      return s;
    }
    return o;
  }
  function Oy(e, t) {
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
      const o = String(r), s = n.startsWith("data-");
      o === "true" || o === "" ? e.props[n] = s ? o : true : !r && s && o === "false" ? e.props[n] = "false" : r !== void 0 && (e.props[n] = r);
    }), e;
  }
  function Ly(e, t) {
    const n = typeof t == "object" && typeof t != "function" ? t : {
      [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t
    }, r = Jf({
      tag: e,
      props: {}
    }, n);
    return r.key && _y.has(r.tag) && (r.props["data-hid"] = r._h = r.key), r.tag === "script" && typeof r.innerHTML == "object" && (r.innerHTML = JSON.stringify(r.innerHTML), r.props.type = r.props.type || "application/json"), Array.isArray(r.props.content) ? r.props.content.map((o) => ({
      ...r,
      props: {
        ...r.props,
        content: o
      }
    })) : r;
  }
  function My(e, t) {
    if (!e) return [];
    typeof e == "function" && (e = e());
    const n = (o, s) => {
      for (let i = 0; i < t.length; i++) s = t[i](o, s);
      return s;
    };
    e = n(void 0, e);
    const r = [];
    return e = qo(e, n), Object.entries(e || {}).forEach(([o, s]) => {
      if (s !== void 0) for (const i of Array.isArray(s) ? s : [
        s
      ]) r.push(Ly(o, i));
    }), r.flat();
  }
  const Tl = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w, Cl = {
    base: -10,
    title: 10
  }, Iy = {
    critical: -8,
    high: -1,
    low: 2
  }, Pl = {
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
    const r = Iy[t.tagPriority] || 0, o = e.resolvedOptions.disableCapoSorting ? {
      link: {},
      script: {},
      style: {}
    } : Pl;
    if (t.tag in Cl) n = Cl[t.tag];
    else if (t.tag === "meta") {
      const s = t.props["http-equiv"] === "content-security-policy" ? "content-security-policy" : t.props.charset ? "charset" : t.props.name === "viewport" ? "viewport" : null;
      s && (n = Pl.meta[s]);
    } else t.tag === "link" && t.props.rel ? n = o.link[t.props.rel] : t.tag === "script" ? mr(t.props.async) ? n = o.script.async : t.props.src && !mr(t.props.defer) && !mr(t.props.async) && t.props.type !== "module" && !((_a2 = t.props.type) == null ? void 0 : _a2.endsWith("json")) ? n = o.script.sync : mr(t.props.defer) && t.props.src && !mr(t.props.async) && (n = o.script.defer) : t.tag === "style" && (n = t.innerHTML && $y.test(t.innerHTML) ? o.style.imported : o.style.sync);
    return (n || 100) + r;
  }
  function Al(e, t) {
    const n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
    e.plugins.get(r) || (e.plugins.set(r, n), e.hooks.addHooks(n.hooks || {}));
  }
  function By(e = {}) {
    var _a2;
    const t = Af();
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
      use: (a) => Al(i, a),
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
        var _a3;
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
          if (((d == null ? void 0 : d.tagDuplicateStrategy) || (Ry.has(d.tag) ? "merge" : null) || (d.key && d.key === y.key ? "merge" : null)) === "merge") {
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
    return ((e == null ? void 0 : e.plugins) || []).forEach((a) => Al(i, a)), i.hooks.callHook("init", i), (_a2 = e.init) == null ? void 0 : _a2.forEach((a) => a && i.push(a)), i;
  }
  const Dy = (e, t) => we(t) ? rt(t) : t, ca = "usehead";
  function jy(e) {
    return {
      install(n) {
        n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(ca, e);
      }
    }.install;
  }
  function Yf() {
    if (ir()) {
      const e = Re(ca);
      if (!e) throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
      return e;
    }
    throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");
  }
  function Qf(e, t = {}) {
    const n = t.head || Yf();
    return n.ssr ? n.push(e || {}, t) : Fy(n, e, t);
  }
  function Fy(e, t, n = {}) {
    const r = Ce(false);
    let o;
    return Sp(() => {
      const i = r.value ? {} : qo(t, Dy);
      o ? o.patch(i) : o = e.push(i, n);
    }), Xe() && (Ln(() => {
      o.dispose();
    }), _u(() => {
      r.value = true;
    }), bu(() => {
      r.value = false;
    })), o;
  }
  function Hy(e = {}, t = {}) {
    (t.head || Yf()).use(Ay);
    const { title: r, titleTemplate: o, ...s } = e;
    return Qf({
      title: r,
      titleTemplate: o,
      _flatMeta: s
    }, t);
  }
  Xf = function(e) {
    var _a2;
    const t = e || ye();
    return ((_a2 = t.ssrContext) == null ? void 0 : _a2.head) || t.runWithContext(() => {
      if (ir()) {
        const n = Re(ca);
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
    return Hy(e, {
      head: n,
      ...t
    });
  };
  let Uy, Vy, xl;
  Uy = "modulepreload";
  Vy = function(e, t) {
    return new URL(e, t).href;
  };
  xl = {};
  un = function(t, n, r) {
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
        if (c = Vy(c, r), c in xl) return;
        xl[c] = true;
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
  function Wy() {
    return To = $fetch(sa(`builds/meta/${bn().app.buildId}.json`), {
      responseType: "json"
    }), To.then((e) => {
      Co = qg(e.matcher);
    }).catch((e) => {
      console.error("[nuxt] Error fetching app manifest.", e);
    }), To;
  }
  function ys() {
    return To || Wy();
  }
  async function ua(e) {
    const t = typeof e == "string" ? e : e.path;
    if (await ys(), !Co) return console.error("[nuxt] Error creating app manifest matcher.", Co), {};
    try {
      return $f({}, ...Co.matchAll(t).reverse());
    } catch (n) {
      return console.error("[nuxt] Error matching route rules.", n), {};
    }
  }
  async function Ol(e, t = {}) {
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
    const r = bn(), o = t.hash || (t.fresh ? Date.now() : r.app.buildId), s = r.app.cdnURL, i = s && await td(e) ? s : r.app.baseURL;
    return ps(i, n.pathname, qy + (o ? `?${o}` : ""));
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
  async function td(e = ms().path) {
    const t = ye();
    return e = tr(e), (await ys()).prerendered.includes(e) ? true : t.runWithContext(async () => {
      const r = await ua({
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
  function fa(e, t) {
    ye()._payloadRevivers[e] = t;
  }
  const zy = Lf(() => {
    fa("skipHydrate", (e) => {
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
  function od(e, [t, n, r], o, s = []) {
    e.children ?? (e.children = /* @__PURE__ */ new Map());
    const i = [
      ...s,
      t
    ], a = new rd([], n && o(i, null, ...n));
    if (e.children.set(t, a), r) for (const l of r) od(a, l, o, i);
  }
  function Ll(e, t, n, r) {
    e.addEventListener(t, n, r), Jt() && yn(() => {
      e.removeEventListener(t, n);
    });
  }
  var Jy = typeof window < "u";
  function Ml(e, ...t) {
    return typeof e == "function" ? e(...t) : e;
  }
  function Yy(e) {
    return e && typeof e == "object" ? JSON.stringify(e, Object.keys(e).sort()) : String(e);
  }
  var po = (e) => e.map(Yy), Qy = () => {
  }, Xy = {
    gcTime: 1e3 * 60
  }, Zy = Symbol(), sd = {
    staleTime: 1e3 * 5,
    gcTime: 1e3 * 60 * 5,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchOnMount: true,
    enabled: true
  }, id = Symbol(), ad = () => Re(id, sd);
  function ld(e) {
    return (e == null ? void 0 : e.placeholderData) != null && e.state.value.status === "pending";
  }
  var Il = {}, ev = "_pc_query", da = cy(ev, ({ action: e }) => {
    const t = new rd();
    let n;
    const r = sy(ss((E, T) => (n = T) && {
      get: () => (E(), t),
      set: Qy
    })), o = Jt(), s = ny()._a, i = ad(), a = e((E, T = null, B, Z = null, ee = 0) => o.run(() => {
      const F = ut({
        data: B,
        error: Z,
        status: Z ? "error" : B !== void 0 ? "success" : "pending"
      }), G = ut("idle");
      return Kn({
        key: E,
        state: F,
        placeholderData: null,
        when: ee,
        asyncStatus: G,
        pending: null,
        deps: Kn(/* @__PURE__ */ new Set()),
        gcTimeout: void 0,
        ext: Il,
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
        o.run(() => Wr())
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
    const p = e((E) => Promise.all(y({
      active: true,
      ...E
    }).map((T) => {
      var _a2;
      return _(T), rt((_a2 = T.options) == null ? void 0 : _a2.enabled) && v(T);
    }))), y = e((E = {}) => {
      const T = E.key ? r.value.find(po(E.key)) : r.value;
      return T ? (E.exact ? T.value ? [
        T.value
      ] : [] : [
        ...T
      ]).filter((B) => (E.stale == null || B.stale === E.stale) && (E.active == null || B.active === E.active) && (!E.status || B.state.value.status === E.status) && (!E.predicate || E.predicate(B))) : [];
    }), S = e((E, T) => {
      var _a2;
      const B = {
        ...i,
        ...E
      }, Z = po(rt(B.key));
      let ee = t.get(Z);
      return ee || (t.set(Z, ee = a(Z, B, (_a2 = B.initialData) == null ? void 0 : _a2.call(B))), B.placeholderData && ee.state.value.status === "pending" && (ee.placeholderData = Ml(B.placeholderData, ld(T) ? T.placeholderData : T == null ? void 0 : T.state.value.data)), n()), ee.options = B, ee.ext === Il && (ee.ext = {}, k(ee)), l == null ? void 0 : l[0].push(ee), ee;
    }), k = e((E) => {
    }), _ = e((E) => {
      E.when = 0, w(E);
    }), m = e(async (E, T = E.options) => {
      var _a2;
      return E.state.value.error || E.stale ? ((_a2 = E.pending) == null ? void 0 : _a2.refreshCall) ?? v(E, T) : E.state.value;
    }), v = e(async (E, T = E.options) => {
      var _a2;
      E.asyncStatus.value = "loading";
      const B = new AbortController(), { signal: Z } = B;
      (_a2 = E.pending) == null ? void 0 : _a2.abortController.abort();
      const ee = E.pending = {
        abortController: B,
        refreshCall: (async () => T.query({
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
    }), w = e((E, T) => {
      var _a2;
      (_a2 = E.pending) == null ? void 0 : _a2.abortController.abort(T), E.asyncStatus.value = "idle", E.pending = null;
    }), A = e((E, T) => {
      y(E).forEach((B) => w(B, T));
    }), M = e((E, T) => {
      E.state.value = T, E.when = Date.now();
    }), N = e((E, T) => {
      const B = po(E);
      let Z = t.get(B);
      Z || t.set(B, Z = a(B)), M(Z, {
        error: null,
        status: "success",
        data: Ml(T, Z.state.value.data)
      }), d(Z), n();
    });
    function C(E) {
      var _a2;
      return (_a2 = r.value.get(po(E))) == null ? void 0 : _a2.state.value.data;
    }
    const O = e((E) => {
      t.set(E.key), n();
    });
    return {
      caches: r,
      ensureDefinedQuery: c,
      _s: Kn(o),
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
    for (const n of t) od(e.caches, n, e.create);
  }
  jS = function(e) {
    const t = da(), n = ad(), r = Xe(), o = Jt(), s = {
      ...n,
      ...e
    }, { refetchOnMount: i, refetchOnReconnect: a, refetchOnWindowFocus: l, enabled: u } = s;
    let c;
    const f = Q(() => (o == null ? void 0 : o._isPaused) ? c : c = t.ensure(s, c));
    c = f.value;
    const h = () => f.value.state.value, d = (v) => t.refresh(f.value, s).catch(v || h), p = (v) => t.fetch(f.value, s).catch(v || h), y = Q(() => ld(f.value)), S = Q(() => y.value ? {
      status: "success",
      data: f.value.placeholderData,
      error: null
    } : f.value.state.value), k = {};
    for (const v in c.ext) k[v] = Q({
      get: () => rt(f.value.ext[v]),
      set(w) {
        const A = f.value.ext[v];
        we(A) ? A.value = w : f.value.ext[v] = w;
      }
    });
    const _ = {
      ...k,
      state: S,
      status: Q(() => S.value.status),
      data: Q(() => S.value.data),
      error: Q(() => f.value.state.value.error),
      asyncStatus: Q(() => f.value.asyncStatus.value),
      isPlaceholderData: y,
      isPending: Q(() => S.value.status === "pending"),
      isLoading: Q(() => f.value.asyncStatus.value === "loading"),
      refresh: d,
      refetch: p
    };
    let m = false;
    return r ? (vt(() => {
      m = true, t.track(c, r);
    }), ls(() => {
      t.untrack(c, r);
    })) : (m = true, o && (t.track(c, o), yn(() => {
      t.untrack(c, o);
    }))), Qe(f, (v, w) => {
      m && (w && (t.untrack(w, r), t.untrack(w, o)), t.track(v, r), t.track(v, o), rt(u) && d());
    }, {
      immediate: true
    }), typeof u != "boolean" && Qe(u, (v) => {
      v && d();
    }), r && vt(() => {
      if (rt(u)) {
        const v = rt(i);
        v === "always" ? p() : (v || _.status.value === "pending") && d();
      }
    }), Jy && (l && Ll(document, "visibilitychange", () => {
      const v = rt(l);
      document.visibilityState === "visible" && rt(u) && (v === "always" ? p() : v && d());
    }), a && Ll(window, "online", () => {
      if (rt(u)) {
        const v = rt(a);
        v === "always" ? p() : v && d();
      }
    })), _;
  };
  var nv = (e, t = {}) => {
    const { pinia: n = e.config.globalProperties.$pinia, plugins: r, queryOptions: o, mutationOptions: s = {} } = t;
    e.provide(id, {
      ...sd,
      ...o
    }), e.provide(Zy, {
      ...Xy,
      ...s
    });
    const i = da(n);
    r == null ? void 0 : r.forEach((a) => a({
      scope: i._s,
      queryCache: i,
      pinia: n
    }));
  };
  $l = function(e) {
    return typeof e == "string" ? `'${e}'` : new rv().serialize(e);
  };
  const rv = function() {
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
  ov = function(e, t) {
    return e === t || $l(e) === $l(t);
  };
  const Fn = typeof document < "u";
  function cd(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
  }
  function sv(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && cd(e.default);
  }
  const ce = Object.assign;
  function Hs(e, t) {
    const n = {};
    for (const r in t) {
      const o = t[r];
      n[r] = _t(o) ? o.map(e) : e(o);
    }
    return n;
  }
  const Pr = () => {
  }, _t = Array.isArray, ud = /#/g, iv = /&/g, av = /\//g, lv = /=/g, cv = /\?/g, fd = /\+/g, uv = /%5B/g, fv = /%5D/g, dd = /%5E/g, dv = /%60/g, hd = /%7B/g, hv = /%7C/g, pd = /%7D/g, pv = /%20/g;
  function ha(e) {
    return encodeURI("" + e).replace(hv, "|").replace(uv, "[").replace(fv, "]");
  }
  function mv(e) {
    return ha(e).replace(hd, "{").replace(pd, "}").replace(dd, "^");
  }
  function Oi(e) {
    return ha(e).replace(fd, "%2B").replace(pv, "+").replace(ud, "%23").replace(iv, "%26").replace(dv, "`").replace(hd, "{").replace(pd, "}").replace(dd, "^");
  }
  function gv(e) {
    return Oi(e).replace(lv, "%3D");
  }
  function yv(e) {
    return ha(e).replace(ud, "%23").replace(cv, "%3F");
  }
  function vv(e) {
    return e == null ? "" : yv(e).replace(av, "%2F");
  }
  function Fr(e) {
    try {
      return decodeURIComponent("" + e);
    } catch {
    }
    return "" + e;
  }
  const bv = /\/$/, _v = (e) => e.replace(bv, "");
  function Us(e, t, n = "/") {
    let r, o = {}, s = "", i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = Ev(r ?? t, n), {
      fullPath: r + (s && "?") + s + i,
      path: r,
      query: o,
      hash: Fr(i)
    };
  }
  function wv(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "");
  }
  function Nl(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
  }
  function Sv(e, t, n) {
    const r = t.matched.length - 1, o = n.matched.length - 1;
    return r > -1 && r === o && nr(t.matched[r], n.matched[o]) && md(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
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
    return _t(e) ? Bl(e, t) : _t(t) ? Bl(t, e) : e === t;
  }
  function Bl(e, t) {
    return _t(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t;
  }
  function Ev(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"), r = e.split("/"), o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1, i, a;
    for (i = 0; i < r.length; i++) if (a = r[i], a !== ".") if (a === "..") s > 1 && s--;
    else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i).join("/");
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
  var Hr;
  (function(e) {
    e.pop = "pop", e.push = "push";
  })(Hr || (Hr = {}));
  var Ar;
  (function(e) {
    e.back = "back", e.forward = "forward", e.unknown = "";
  })(Ar || (Ar = {}));
  function Rv(e) {
    if (!e) if (Fn) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), _v(e);
  }
  const Tv = /^[^#]+#/;
  function Cv(e, t) {
    return e.replace(Tv, "#") + t;
  }
  function Pv(e, t) {
    const n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
    return {
      behavior: t.behavior,
      left: r.left - n.left - (t.left || 0),
      top: r.top - n.top - (t.top || 0)
    };
  }
  const vs = () => ({
    left: window.scrollX,
    top: window.scrollY
  });
  function Av(e) {
    let t;
    if ("el" in e) {
      const n = e.el, r = typeof n == "string" && n.startsWith("#"), o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
      if (!o) return;
      t = Pv(o, e);
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
  }
  function Dl(e, t) {
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
    const { pathname: n, search: r, hash: o } = t, s = e.indexOf("#");
    if (s > -1) {
      let a = o.includes(e.slice(s)) ? e.slice(s).length : 1, l = o.slice(a);
      return l[0] !== "/" && (l = "/" + l), Nl(l, "");
    }
    return Nl(n, e) + r + o;
  }
  function Mv(e, t, n, r) {
    let o = [], s = [], i = null;
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
      o.forEach((k) => {
        k(n.value, p, {
          delta: S,
          type: Hr.pop,
          direction: S ? S > 0 ? Ar.forward : Ar.back : Ar.unknown
        });
      });
    };
    function l() {
      i = n.value;
    }
    function u(h) {
      o.push(h);
      const d = () => {
        const p = o.indexOf(h);
        p > -1 && o.splice(p, 1);
      };
      return s.push(d), d;
    }
    function c() {
      const { history: h } = window;
      h.state && h.replaceState(ce({}, h.state, {
        scroll: vs()
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
  function jl(e, t, n, r = false, o = false) {
    return {
      back: e,
      current: t,
      forward: n,
      replaced: r,
      position: window.history.length,
      scroll: o ? vs() : null
    };
  }
  function Iv(e) {
    const { history: t, location: n } = window, r = {
      value: gd(e, n)
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
      const f = e.indexOf("#"), h = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Lv() + e + l;
      try {
        t[c ? "replaceState" : "pushState"](u, "", h), o.value = u;
      } catch (d) {
        console.error(d), n[c ? "replace" : "assign"](h);
      }
    }
    function i(l, u) {
      const c = ce({}, t.state, jl(o.value.back, l, o.value.forward, true), u, {
        position: o.value.position
      });
      s(l, c, true), r.value = l;
    }
    function a(l, u) {
      const c = ce({}, o.value, t.state, {
        forward: l,
        scroll: vs()
      });
      s(c.current, c, true);
      const f = ce({}, jl(r.value, l, null), {
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
  function $v(e) {
    e = Rv(e);
    const t = Iv(e), n = Mv(e, t.state, t.location, t.replace);
    function r(s, i = true) {
      i || n.pauseListeners(), history.go(s);
    }
    const o = ce({
      location: "",
      base: e,
      go: r,
      createHref: Cv.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
      enumerable: true,
      get: () => t.location.value
    }), Object.defineProperty(o, "state", {
      enumerable: true,
      get: () => t.state.value
    }), o;
  }
  function Nv(e) {
    return typeof e == "string" || e && typeof e == "object";
  }
  function yd(e) {
    return typeof e == "string" || typeof e == "symbol";
  }
  const vd = Symbol("");
  var Fl;
  (function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
  })(Fl || (Fl = {}));
  function rr(e, t) {
    return ce(new Error(), {
      type: e,
      [vd]: true
    }, t);
  }
  function Rt(e, t) {
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
        if (h.type === 0) f || (o += "/"), o += h.value.replace(Dv, "\\$&"), d += 40;
        else if (h.type === 1) {
          const { value: p, repeatable: y, optional: S, regexp: k } = h;
          s.push({
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
          f || (m = S && u.length < 2 ? `(?:/${m})` : "/" + m), S && (m += "?"), o += m, d += 20, S && (d += -8), y && (d += -20), _ === ".*" && (d += -50);
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
        const d = c[h] || "", p = s[h - 1];
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
      keys: s,
      parse: a,
      stringify: l
    };
  }
  function Fv(e, t) {
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
    const r = e.score, o = t.score;
    for (; n < r.length && n < o.length; ) {
      const s = Fv(r[n], o[n]);
      if (s) return s;
      n++;
    }
    if (Math.abs(o.length - r.length) === 1) {
      if (Ul(r)) return 1;
      if (Ul(o)) return -1;
    }
    return o.length - r.length;
  }
  function Ul(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0;
  }
  const Hv = {
    type: 0,
    value: ""
  }, Uv = /[a-zA-Z0-9_]/;
  function Vv(e) {
    if (!e) return [
      []
    ];
    if (e === "/") return [
      [
        Hv
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
    return n === 2 && t(`Unfinished custom RegExp for param "${u}"`), f(), i(), o;
  }
  function Wv(e, t, n) {
    const r = jv(Vv(e.path), n), o = ce(r, {
      record: e,
      parent: t,
      children: [],
      alias: []
    });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o;
  }
  function qv(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    t = Kl({
      strict: false,
      end: true,
      sensitive: false
    }, t);
    function o(f) {
      return r.get(f);
    }
    function s(f, h, d) {
      const p = !d, y = Wl(f);
      y.aliasOf = d && d.record;
      const S = Kl(t, f), k = [
        y
      ];
      if ("alias" in f) {
        const v = typeof f.alias == "string" ? [
          f.alias
        ] : f.alias;
        for (const w of v) k.push(Wl(ce({}, y, {
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
        if (_ = Wv(v, h, S), d ? d.alias.push(_) : (m = m || _, m !== _ && m.alias.push(_), p && f.name && !ql(_) && i(f.name)), _d(_) && l(_), y.children) {
          const A = y.children;
          for (let M = 0; M < A.length; M++) s(A[M], _, d && d.children[M]);
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
      n.splice(h, 0, f), f.record.name && !ql(f) && r.set(f.record.name, f);
    }
    function u(f, h) {
      let d, p = {}, y, S;
      if ("name" in f && f.name) {
        if (d = r.get(f.name), !d) throw rr(1, {
          location: f
        });
        S = d.record.name, p = ce(Vl(h.params, d.keys.filter((m) => !m.optional).concat(d.parent ? d.parent.keys.filter((m) => m.optional) : []).map((m) => m.name)), f.params && Vl(f.params, d.keys.map((m) => m.name))), y = d.stringify(p);
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
  function Vl(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n;
  }
  function Wl(e) {
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
  function ql(e) {
    for (; e; ) {
      if (e.record.aliasOf) return true;
      e = e.parent;
    }
    return false;
  }
  function Gv(e) {
    return e.reduce((t, n) => ce(t, n.meta), {});
  }
  function Kl(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n;
  }
  function zv(e, t) {
    let n = 0, r = t.length;
    for (; n !== r; ) {
      const s = n + r >> 1;
      bd(e, t[s]) < 0 ? r = s : n = s + 1;
    }
    const o = Jv(e);
    return o && (r = t.lastIndexOf(o, r - 1)), r;
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
    for (let o = 0; o < r.length; ++o) {
      const s = r[o].replace(fd, " "), i = s.indexOf("="), a = Fr(i < 0 ? s : s.slice(0, i)), l = i < 0 ? null : Fr(s.slice(i + 1));
      if (a in t) {
        let u = t[a];
        _t(u) || (u = t[a] = [
          u
        ]), u.push(l);
      } else t[a] = l;
    }
    return t;
  }
  function Gl(e) {
    let t = "";
    for (let n in e) {
      const r = e[n];
      if (n = gv(n), r == null) {
        r !== void 0 && (t += (t.length ? "&" : "") + n);
        continue;
      }
      (_t(r) ? r.map((s) => s && Oi(s)) : [
        r && Oi(r)
      ]).forEach((s) => {
        s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s));
      });
    }
    return t;
  }
  function Qv(e) {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r !== void 0 && (t[n] = _t(r) ? r.map((o) => o == null ? null : "" + o) : r == null ? r : "" + r);
    }
    return t;
  }
  const Xv = Symbol(""), zl = Symbol(""), Qr = Symbol(""), pa = Symbol(""), Mi = Symbol("");
  function gr() {
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
  function ln(e, t, n, r, o, s = (i) => i()) {
    const i = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((a, l) => {
      const u = (h) => {
        h === false ? l(rr(4, {
          from: n,
          to: t
        })) : h instanceof Error ? l(h) : Nv(h) ? l(rr(2, {
          from: t,
          to: h
        })) : (i && r.enterCallbacks[o] === i && typeof h == "function" && i.push(h), a());
      }, c = s(() => e.call(r && r.instances[o], t, n, u));
      let f = Promise.resolve(c);
      e.length < 3 && (f = f.then(u)), f.catch((h) => l(h));
    });
  }
  function Vs(e, t, n, r, o = (s) => s()) {
    const s = [];
    for (const i of e) for (const a in i.components) {
      let l = i.components[a];
      if (!(t !== "beforeRouteEnter" && !i.instances[a])) if (cd(l)) {
        const c = (l.__vccOpts || l)[t];
        c && s.push(ln(c, n, r, i, a, o));
      } else {
        let u = l();
        s.push(() => u.then((c) => {
          if (!c) throw new Error(`Couldn't resolve component "${a}" at "${i.path}"`);
          const f = sv(c) ? c.default : c;
          i.mods[a] = c, i.components[a] = f;
          const d = (f.__vccOpts || f)[t];
          return d && ln(d, n, r, i, a, o)();
        }));
      }
    }
    return s;
  }
  function Jl(e) {
    const t = Re(Qr), n = Re(pa), r = Q(() => {
      const l = ie(e.to);
      return t.resolve(l);
    }), o = Q(() => {
      const { matched: l } = r.value, { length: u } = l, c = l[u - 1], f = n.matched;
      if (!c || !f.length) return -1;
      const h = f.findIndex(nr.bind(null, c));
      if (h > -1) return h;
      const d = Yl(l[u - 2]);
      return u > 1 && Yl(c) === d && f[f.length - 1].path !== d ? f.findIndex(nr.bind(null, l[u - 2])) : h;
    }), s = Q(() => o.value > -1 && rb(n.params, r.value.params)), i = Q(() => o.value > -1 && o.value === n.matched.length - 1 && md(n.params, r.value.params));
    function a(l = {}) {
      if (nb(l)) {
        const u = t[ie(e.replace) ? "replace" : "push"](ie(e.to)).catch(Pr);
        return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => u), u;
      }
      return Promise.resolve();
    }
    return {
      route: r,
      href: Q(() => r.value.href),
      isActive: s,
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
    useLink: Jl,
    setup(e, { slots: t }) {
      const n = It(Jl(e)), { options: r } = Re(Qr), o = Q(() => ({
        [Ql(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
        [Ql(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
      }));
      return () => {
        const s = t.default && Zv(t.default(n));
        return e.custom ? s : pe("a", {
          "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
          href: n.href,
          onClick: n.navigate,
          class: o.value
        }, s);
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
      const r = t[n], o = e[n];
      if (typeof r == "string") {
        if (r !== o) return false;
      } else if (!_t(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return false;
    }
    return true;
  }
  function Yl(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
  }
  const Ql = (e, t, n) => e ?? t ?? n, ob = he({
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
      const r = Re(Mi), o = Q(() => e.route || r.value), s = Re(zl, 0), i = Q(() => {
        let u = ie(s);
        const { matched: c } = o.value;
        let f;
        for (; (f = c[u]) && !f.components; ) u++;
        return u;
      }), a = Q(() => o.value.matched[i.value]);
      mn(zl, Q(() => i.value + 1)), mn(Xv, a), mn(Mi, o);
      const l = Ce();
      return Qe(() => [
        l.value,
        a.value,
        e.name
      ], ([u, c, f], [h, d, p]) => {
        c && (c.instances[f] = u, d && d !== c && u && u === h && (c.leaveGuards.size || (c.leaveGuards = d.leaveGuards), c.updateGuards.size || (c.updateGuards = d.updateGuards))), u && c && (!d || !nr(c, d) || !h) && (c.enterCallbacks[f] || []).forEach((y) => y(u));
      }, {
        flush: "post"
      }), () => {
        const u = o.value, c = e.name, f = a.value, h = f && f.components[c];
        if (!h) return Xl(n.default, {
          Component: h,
          route: u
        });
        const d = f.props[c], p = d ? d === true ? u.params : typeof d == "function" ? d(u) : d : null, S = pe(h, ce({}, p, t, {
          onVnodeUnmounted: (k) => {
            k.component.isUnmounted && (f.instances[c] = null);
          },
          ref: l
        }));
        return Xl(n.default, {
          Component: S,
          route: u
        }) || S;
      };
    }
  });
  function Xl(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n;
  }
  const wd = ob;
  function sb(e) {
    const t = qv(e.routes, e), n = e.parseQuery || Yv, r = e.stringifyQuery || Gl, o = e.history, s = gr(), i = gr(), a = gr(), l = ut(lt);
    let u = lt;
    Fn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const c = Hs.bind(null, (x) => "" + x), f = Hs.bind(null, vv), h = Hs.bind(null, Fr);
    function d(x, W) {
      let U, J;
      return yd(x) ? (U = t.getRecordMatcher(x), J = W) : J = x, t.addRoute(J, U);
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
        const b = Us(n, x, W.path), R = t.resolve({
          path: b.path
        }, W), L = o.createHref(b.fullPath);
        return ce(b, R, {
          params: h(R.params),
          hash: Fr(b.hash),
          redirectedFrom: void 0,
          href: L
        });
      }
      let U;
      if (x.path != null) U = ce({}, x, {
        path: Us(n, x.path, W.path).path
      });
      else {
        const b = ce({}, x.params);
        for (const R in b) b[R] == null && delete b[R];
        U = ce({}, x, {
          params: f(b)
        }), W.params = f(W.params);
      }
      const J = t.resolve(U, W), le = x.hash || "";
      J.params = c(h(J.params));
      const Ee = wv(r, ce({}, x, {
        hash: mv(le),
        path: J.path
      })), g = o.createHref(Ee);
      return ce({
        fullPath: Ee,
        hash: le,
        query: r === Gl ? Qv(x.query) : x.query || {}
      }, J, {
        redirectedFrom: void 0,
        href: g
      });
    }
    function _(x) {
      return typeof x == "string" ? Us(n, x, l.value.path) : ce({}, x);
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
        let J = typeof U == "function" ? U(x) : U;
        return typeof J == "string" && (J = J.includes("?") || J.includes("#") ? J = _(J) : {
          path: J
        }, J.params = {}), ce({
          query: x.query,
          hash: x.hash,
          params: J.path != null ? {} : x.params
        }, J);
      }
    }
    function M(x, W) {
      const U = u = k(x), J = l.value, le = x.state, Ee = x.force, g = x.replace === true, b = A(U);
      if (b) return M(ce(_(b), {
        state: typeof b == "object" ? ce({}, le, b.state) : le,
        force: Ee,
        replace: g
      }), W || U);
      const R = U;
      R.redirectedFrom = W;
      let L;
      return !Ee && Sv(r, J, U) && (L = rr(16, {
        to: R,
        from: J
      }), wt(J, J, true, false)), (L ? Promise.resolve(L) : O(R, J)).catch((P) => Rt(P) ? Rt(P, 2) ? P : Xt(P) : z(P, R, J)).then((P) => {
        if (P) {
          if (Rt(P, 2)) return M(ce({
            replace: g
          }, _(P.to), {
            state: typeof P.to == "object" ? ce({}, le, P.to.state) : le,
            force: Ee
          }), W || R);
        } else P = T(R, J, true, g, le);
        return E(R, J, P), P;
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
      const [J, le, Ee] = ib(x, W);
      U = Vs(J.reverse(), "beforeRouteLeave", x, W);
      for (const b of J) b.leaveGuards.forEach((R) => {
        U.push(ln(R, x, W));
      });
      const g = N.bind(null, x, W);
      return U.push(g), it(U).then(() => {
        U = [];
        for (const b of s.list()) U.push(ln(b, x, W));
        return U.push(g), it(U);
      }).then(() => {
        U = Vs(le, "beforeRouteUpdate", x, W);
        for (const b of le) b.updateGuards.forEach((R) => {
          U.push(ln(R, x, W));
        });
        return U.push(g), it(U);
      }).then(() => {
        U = [];
        for (const b of Ee) if (b.beforeEnter) if (_t(b.beforeEnter)) for (const R of b.beforeEnter) U.push(ln(R, x, W));
        else U.push(ln(b.beforeEnter, x, W));
        return U.push(g), it(U);
      }).then(() => (x.matched.forEach((b) => b.enterCallbacks = {}), U = Vs(Ee, "beforeRouteEnter", x, W, C), U.push(g), it(U))).then(() => {
        U = [];
        for (const b of i.list()) U.push(ln(b, x, W));
        return U.push(g), it(U);
      }).catch((b) => Rt(b, 8) ? b : Promise.reject(b));
    }
    function E(x, W, U) {
      a.list().forEach((J) => C(() => J(x, W, U)));
    }
    function T(x, W, U, J, le) {
      const Ee = m(x, W);
      if (Ee) return Ee;
      const g = W === lt, b = Fn ? history.state : {};
      U && (J || g ? o.replace(x.fullPath, ce({
        scroll: g && b && b.scroll
      }, le)) : o.push(x.fullPath, le)), l.value = x, wt(x, W, U, g), Xt();
    }
    let B;
    function Z() {
      B || (B = o.listen((x, W, U) => {
        if (!no.listening) return;
        const J = k(x), le = A(J);
        if (le) {
          M(ce(le, {
            replace: true,
            force: true
          }), J).catch(Pr);
          return;
        }
        u = J;
        const Ee = l.value;
        Fn && xv(Dl(Ee.fullPath, U.delta), vs()), O(J, Ee).catch((g) => Rt(g, 12) ? g : Rt(g, 2) ? (M(ce(_(g.to), {
          force: true
        }), J).then((b) => {
          Rt(b, 20) && !U.delta && U.type === Hr.pop && o.go(-1, false);
        }).catch(Pr), Promise.reject()) : (U.delta && o.go(-U.delta, false), z(g, J, Ee))).then((g) => {
          g = g || T(J, Ee, false), g && (U.delta && !Rt(g, 8) ? o.go(-U.delta, false) : U.type === Hr.pop && Rt(g, 20) && o.go(-1, false)), E(J, Ee, g);
        }).catch(Pr);
      }));
    }
    let ee = gr(), F = gr(), G;
    function z(x, W, U) {
      Xt(x);
      const J = F.list();
      return J.length ? J.forEach((le) => le(x, W, U)) : console.error(x), Promise.reject(x);
    }
    function Ae() {
      return G && l.value !== lt ? Promise.resolve() : new Promise((x, W) => {
        ee.add([
          x,
          W
        ]);
      });
    }
    function Xt(x) {
      return G || (G = !x, Z(), ee.list().forEach(([W, U]) => x ? U(x) : W()), ee.reset()), x;
    }
    function wt(x, W, U, J) {
      const { scrollBehavior: le } = e;
      if (!Fn || !le) return Promise.resolve();
      const Ee = !U && Ov(Dl(x.fullPath, 0)) || (J || !U) && history.state && history.state.scroll || null;
      return Mt().then(() => le(x, W, Ee)).then((g) => g && Av(g)).catch((g) => z(g, x, W));
    }
    const ze = (x) => o.go(x);
    let Mn;
    const In = /* @__PURE__ */ new Set(), no = {
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
      beforeEach: s.add,
      beforeResolve: i.add,
      afterEach: a.add,
      onError: F.add,
      isReady: Ae,
      install(x) {
        const W = this;
        x.component("RouterLink", tb), x.component("RouterView", wd), x.config.globalProperties.$router = W, Object.defineProperty(x.config.globalProperties, "$route", {
          enumerable: true,
          get: () => ie(l)
        }), Fn && !Mn && l.value === lt && (Mn = true, v(o.location).catch((le) => {
        }));
        const U = {};
        for (const le in lt) Object.defineProperty(U, le, {
          get: () => l.value[le],
          enumerable: true
        });
        x.provide(Qr, W), x.provide(pa, Ht(U)), x.provide(Mi, l);
        const J = x.unmount;
        In.add(x), x.unmount = function() {
          In.delete(x), In.size < 1 && (u = lt, B && B(), B = null, l.value = lt, Mn = false, G = false), J();
        };
      }
    };
    function it(x) {
      return x.reduce((W, U) => W.then(() => C(U)), Promise.resolve());
    }
    return no;
  }
  function ib(e, t) {
    const n = [], r = [], o = [], s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
      const a = t.matched[i];
      a && (e.matched.find((u) => nr(u, a)) ? r.push(a) : n.push(a));
      const l = e.matched[i];
      l && (t.matched.find((u) => nr(u, l)) || o.push(l));
    }
    return [
      n,
      r,
      o
    ];
  }
  FS = function() {
    return Re(Qr);
  };
  ab = function(e) {
    return Re(pa);
  };
  const Sd = (e, t) => ({
    default: () => {
      var _a2;
      return e ? pe(Qp, e === true ? {} : e, t) : (_a2 = t.default) == null ? void 0 : _a2.call(t);
    }
  }), lb = /(:\w+)\([^)]+\)/g, cb = /(:\w+)[?+*]/g, ub = /:\w+/g;
  function Zl(e) {
    const t = (e == null ? void 0 : e.meta.key) ?? e.path.replace(lb, "$1").replace(cb, "$1").replace(ub, (n) => {
      var _a2;
      return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
    });
    return typeof t == "function" ? t(e) : t;
  }
  function kd(e, t) {
    return e === t || t === lt ? false : Zl(e) !== Zl(t) ? true : !e.matched.every((r, o) => {
      var _a2, _b2;
      return r.components && r.components.default === ((_b2 = (_a2 = t.matched[o]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default);
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
        n && ((_a2 = r.querySelectorAll) == null ? void 0 : _a2.call(r, "[data-island-slot]").forEach((o) => {
          o.innerHTML = "";
        })), t.push(r.outerHTML);
      }
      Ed(e.nextSibling, t, n);
    }
    return t;
  }
  function Ws(e, t) {
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
  let Rd, mo, qs;
  Rd = Symbol.for("nuxt:client-only");
  mo = "<div></div>";
  HS = he({
    name: "ClientOnly",
    inheritAttrs: false,
    props: [
      "fallback",
      "placeholder",
      "placeholderTag",
      "fallbackTag"
    ],
    setup(e, { slots: t, attrs: n }) {
      const r = Ce(false);
      vt(() => {
        r.value = true;
      });
      const o = Xe();
      return o && (o._nuxtClientOnly = true), mn(Rd, true), (s) => {
        var _a2;
        if (r.value) return (_a2 = t.default) == null ? void 0 : _a2.call(t);
        const i = t.fallback || t.placeholder;
        if (i) return i();
        const a = s.fallback || s.placeholder || "", l = s.fallbackTag || s.placeholderTag || "span";
        return de(l, n, a);
      };
    }
  });
  qs = /* @__PURE__ */ new WeakMap();
  US = function(e) {
    if (qs.has(e)) return qs.get(e);
    const t = {
      ...e
    };
    return t.render ? t.render = (n, r, o, s, i, a) => {
      var _a2;
      if (s.mounted$ ?? n.mounted$) {
        const l = (_a2 = e.render) == null ? void 0 : _a2.bind(n)(n, r, o, s, i, a);
        return l.children === null || typeof l.children == "string" ? bt(l) : pe(l);
      }
      return Ws(n._.vnode.el, mo);
    } : t.template && (t.template = `
      <template v-if="mounted$">${e.template}</template>
      <template v-else>${mo}</template>
    `), t.setup = (n, r) => {
      var _a2;
      const o = ye(), s = Ce(o.isHydrating === false), i = Xe();
      if (o.isHydrating) {
        const l = {
          ...i.attrs
        }, u = pb(i);
        for (const c in l) delete i.attrs[c];
        vt(() => {
          Object.assign(i.attrs, l), i.vnode.dirs = u;
        });
      }
      vt(() => {
        s.value = true;
      });
      const a = ((_a2 = e.setup) == null ? void 0 : _a2.call(e, n, r)) || {};
      return Yo(a) ? Promise.resolve(a).then((l) => typeof l != "function" ? (l || (l = {}), l.mounted$ = s, l) : (...u) => {
        if (s.value || !o.isHydrating) {
          const c = l(...u);
          return c.children === null || typeof c.children == "string" ? bt(c) : pe(c);
        }
        return Ws(i == null ? void 0 : i.vnode.el, mo);
      }) : typeof a == "function" ? (...l) => s.value ? pe(a(...l), r.attrs) : Ws(i == null ? void 0 : i.vnode.el, mo) : Object.assign(a, {
        mounted$: s
      });
    }, qs.set(e, t), t;
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
    let [n, r, o = {}] = e;
    const s = Q(() => rt(n));
    if (typeof s.value != "string") throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
    if (typeof r != "function") throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
    const i = ye();
    o.server ?? (o.server = true), o.default ?? (o.default = vb), o.getCachedData ?? (o.getCachedData = Cd), o.lazy ?? (o.lazy = false), o.immediate ?? (o.immediate = true), o.deep ?? (o.deep = Ut.deep), o.dedupe ?? (o.dedupe = "cancel"), o._functionName, i._asyncData[s.value];
    const a = o.getCachedData(s.value, i, {
      cause: "initial"
    });
    ((_a2 = i._asyncData[s.value]) == null ? void 0 : _a2._init) || (i._asyncData[s.value] = ec(i, s.value, r, o, a));
    const l = i._asyncData[s.value];
    l._deps++;
    const u = () => i._asyncData[s.value].execute({
      cause: "initial",
      dedupe: o.dedupe
    }), c = o.server !== false && i.payload.serverRendered;
    {
      let d = function(_) {
        const m = i._asyncData[_];
        (m == null ? void 0 : m._deps) && (m._deps--, m._deps === 0 && (m == null ? void 0 : m._off()));
      };
      const p = Xe();
      if (p && c && o.immediate && !p.sp && (p.sp = []), p && !p._nuxtOnBeforeMountCbs) {
        p._nuxtOnBeforeMountCbs = [];
        const _ = p._nuxtOnBeforeMountCbs;
        Su(() => {
          _.forEach((m) => {
            m();
          }), _.splice(0, _.length);
        }), ls(() => _.splice(0, _.length));
      }
      const y = p && (p._nuxtClientOnly || Re(Rd, false));
      c && i.isHydrating && (l.error.value || a != null) ? l.status.value = l.error.value ? "error" : "success" : p && !y && (i.payload.serverRendered && i.isHydrating || o.lazy) && o.immediate ? p._nuxtOnBeforeMountCbs.push(u) : o.immediate && u();
      const S = Jt();
      if (o.watch) {
        const _ = Qe(o.watch, () => {
          l._execute({
            cause: "watch",
            dedupe: o.dedupe
          });
        }, {
          flush: "post"
        });
        S && yn(() => _());
      }
      const k = Qe(s, (_, m) => {
        var _a3, _b2;
        const v = ((_a3 = i._asyncData[m]) == null ? void 0 : _a3.data.value) !== Ut.value;
        m && d(m), ((_b2 = i._asyncData[_]) == null ? void 0 : _b2._init) || (i._asyncData[_] = ec(i, _, r, o, o.getCachedData(_, i, {
          cause: "initial"
        }))), i._asyncData[_]._deps++, (o.immediate || v) && i._asyncData[_].execute({
          cause: "initial",
          dedupe: o.dedupe
        });
      }, {
        flush: "sync"
      });
      S && yn(() => {
        k(), d(s.value);
      });
    }
    const f = {
      data: go(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.data;
      }),
      pending: go(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.pending;
      }),
      status: go(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.status;
      }),
      error: go(() => {
        var _a3;
        return (_a3 = i._asyncData[s.value]) == null ? void 0 : _a3.error;
      }),
      refresh: (...d) => i._asyncData[s.value].execute(...d),
      execute: (...d) => i._asyncData[s.value].execute(...d),
      clear: () => Td(i, s.value)
    }, h = Promise.resolve(i._asyncDataPromises[s.value]).then(() => f);
    return Object.assign(h, f), h;
  };
  function go(e) {
    return Q({
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
  function Td(e, t) {
    t in e.payload.data && (e.payload.data[t] = void 0), t in e.payload._errors && (e.payload._errors[t] = Ut.errorValue), e._asyncData[t] && (e._asyncData[t].data.value = ie(e._asyncData[t]._default()), e._asyncData[t].error.value = Ut.errorValue, e._asyncData[t].status.value = "idle"), t in e._asyncDataPromises && (e._asyncDataPromises[t] && (e._asyncDataPromises[t].cancelled = true), e._asyncDataPromises[t] = void 0);
  }
  function yb(e, t) {
    const n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function ec(e, t, n, r, o) {
    var _a2;
    (_a2 = e.payload._errors)[t] ?? (_a2[t] = Ut.errorValue);
    const s = r.getCachedData !== Cd, i = n, a = r.deep ? Ce : ut, l = o != null, u = e.hook("app:data:refresh", async (f) => {
      (!f || f.includes(t)) && await c.execute({
        cause: "refresh:hook"
      });
    }), c = {
      data: a(l ? o : r.default()),
      pending: Q(() => c.status.value === "pending"),
      error: is(e.payload._errors, t),
      status: ut("idle"),
      execute: (f = {}) => {
        if (e._asyncDataPromises[t]) {
          if (gb(f.dedupe ?? r.dedupe)) return e._asyncDataPromises[t];
          e._asyncDataPromises[t].cancelled = true;
        }
        {
          const d = f.cause === "initial" ? o : r.getCachedData(t, e, {
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
          c.error.value = gn(d), c.data.value = ie(r.default()), c.status.value = "error";
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
        u(), c._init = false, s || (Td(e, t), c.execute = () => Promise.resolve(), c.data.value = Ut.value);
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
    const o = bb + n, s = ye(), i = is(s.payload.state, o);
    if (i.value === void 0 && r) {
      const a = r();
      if (we(a)) return s.payload.state[o] = a, a;
      i.value = a;
    }
    return i;
  };
  function wb(e, t) {
    if (typeof e != "string") throw new TypeError("argument str must be a string");
    const n = {}, r = t || {}, o = r.decode || Sb;
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
        u.codePointAt(0) === 34 && (u = u.slice(1, -1)), n[l] = kb(u, o);
      }
      s = a + 1;
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
  const yo = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
  function tc(e, t, n) {
    const r = n || {}, o = r.encode || encodeURIComponent;
    if (typeof o != "function") throw new TypeError("option encode is invalid");
    if (!yo.test(e)) throw new TypeError("argument name is invalid");
    const s = o(t);
    if (s && !yo.test(s)) throw new TypeError("argument val is invalid");
    let i = e + "=" + s;
    if (r.maxAge !== void 0 && r.maxAge !== null) {
      const a = r.maxAge - 0;
      if (Number.isNaN(a) || !Number.isFinite(a)) throw new TypeError("option maxAge is invalid");
      i += "; Max-Age=" + Math.floor(a);
    }
    if (r.domain) {
      if (!yo.test(r.domain)) throw new TypeError("option domain is invalid");
      i += "; Domain=" + r.domain;
    }
    if (r.path) {
      if (!yo.test(r.path)) throw new TypeError("option path is invalid");
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
    return r === "[object Set]" ? (n = /* @__PURE__ */ new Set(), e.forEach(function(o) {
      n.add(dt(o));
    }), n) : r === "[object Map]" ? (n = /* @__PURE__ */ new Map(), e.forEach(function(o, s) {
      n.set(dt(s), dt(o));
    }), n) : r === "[object Date]" ? /* @__PURE__ */ new Date(+e) : r === "[object RegExp]" ? (n = new RegExp(e.source, e.flags), n.lastIndex = e.lastIndex, n) : r === "[object DataView]" ? new e.constructor(dt(e.buffer)) : r === "[object ArrayBuffer]" ? e.slice(0) : r.slice(-6) === "Array]" ? new e.constructor(e) : e;
  }
  const Rb = {
    path: "/",
    watch: true,
    decode: (e) => Dr(decodeURIComponent(e)),
    encode: (e) => encodeURIComponent(typeof e == "string" ? e : JSON.stringify(e))
  }, vo = window.cookieStore;
  function nc(e, t) {
    var _a2;
    const n = {
      ...Rb,
      ...t
    };
    n.filter ?? (n.filter = (u) => u === e);
    const r = rc(n) || {};
    let o;
    n.maxAge !== void 0 ? o = n.maxAge * 1e3 : n.expires && (o = n.expires.getTime() - Date.now());
    const s = o !== void 0 && o <= 0, i = s || r[e] === void 0 || r[e] === null, a = dt(s ? void 0 : r[e] ?? ((_a2 = n.default) == null ? void 0 : _a2.call(n))), l = o && !s ? Pb(a, o, n.watch && n.watch !== "shallow") : Ce(a);
    {
      let u = null;
      try {
        !vo && typeof BroadcastChannel < "u" && (u = new BroadcastChannel(`nuxt:cookies:${e}`));
      } catch {
      }
      const c = (p = false) => {
        !p && (n.readonly || ov(l.value, r[e])) || (Cb(e, l.value, n), r[e] = dt(l.value), u == null ? void 0 : u.postMessage({
          value: n.encode(l.value)
        }));
      }, f = (p) => {
        var _a3;
        const y = p.refresh ? (_a3 = rc(n)) == null ? void 0 : _a3[e] : n.decode(p.value);
        h = true, l.value = y, r[e] = dt(y), Mt(() => {
          h = false;
        });
      };
      let h = false;
      const d = !!Jt();
      if (d && yn(() => {
        h = true, c(), u == null ? void 0 : u.close();
      }), vo) {
        const p = (y) => {
          const S = y.changed.find((_) => _.name === e), k = y.deleted.find((_) => _.name === e);
          S && f({
            value: S.value
          }), k && f({
            value: null
          });
        };
        vo.addEventListener("change", p), d && yn(() => vo.removeEventListener("change", p));
      } else u && (u.onmessage = ({ data: p }) => f(p));
      n.watch && Qe(l, () => {
        h || c();
      }, {
        deep: n.watch !== "shallow"
      }), i && c(i);
    }
    return l;
  }
  function rc(e = {}) {
    return wb(document.cookie, e);
  }
  function Tb(e, t, n = {}) {
    return t == null ? tc(e, t, {
      ...n,
      maxAge: -1
    }) : tc(e, t, n);
  }
  function Cb(e, t, n = {}) {
    document.cookie = Tb(e, t, n);
  }
  const oc = 2147483647;
  function Pb(e, t, n) {
    let r, o, s = 0;
    const i = n ? Ce(e) : {
      value: e
    };
    return Jt() && yn(() => {
      o == null ? void 0 : o(), clearTimeout(r);
    }), ss((a, l) => {
      n && (o = Qe(i, l));
      function u() {
        s = 0, clearTimeout(r);
        const c = t - s, f = c < oc ? c : oc;
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
  function Ab(e) {
    if ((e == null ? void 0 : e.__asyncLoader) && !e.__asyncResolved) return e.__asyncLoader();
  }
  async function Pd(e, t = Ne()) {
    const { path: n, matched: r } = t.resolve(e);
    if (!r.length || (t._routePreloaded || (t._routePreloaded = /* @__PURE__ */ new Set()), t._routePreloaded.has(n))) return;
    const o = t._preloadPromises || (t._preloadPromises = []);
    if (o.length > 4) return Promise.all(o).then(() => Pd(e, t));
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
      const r = ye(), o = ((_a2 = Ne().options) == null ? void 0 : _a2.scrollBehaviorType) ?? "auto";
      if (e.path === t.path) return t.hash && !e.hash ? {
        left: 0,
        top: 0
      } : e.hash ? {
        el: e.hash,
        top: Ad(e.hash),
        behavior: o
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
  }, en = {
    ...Lb,
    ...Ob
  }, Mb = (...e) => e.find((t) => t !== void 0);
  function Ib(e) {
    const t = e.componentName || "NuxtLink";
    function n(s) {
      return typeof s == "string" && s.startsWith("#");
    }
    function r(s, i, a) {
      const l = a ?? e.trailingSlash;
      if (!s || l !== "append" && l !== "remove") return s;
      if (typeof s == "string") return bo(s, l);
      const u = "path" in s && s.path !== void 0 ? s.path : i(s).path;
      return {
        ...s,
        name: void 0,
        path: bo(u, l)
      };
    }
    function o(s) {
      const i = Ne(), a = bn(), l = Q(() => !!s.target && s.target !== "_self"), u = Q(() => {
        const S = s.to || s.href || "";
        return typeof S == "string" && $t(S, {
          acceptRelative: true
        });
      }), c = li("RouterLink"), f = c && typeof c != "string" ? c.useLink : void 0, h = Q(() => {
        if (s.external) return true;
        const S = s.to || s.href || "";
        return typeof S == "object" ? false : S === "" || u.value;
      }), d = Q(() => {
        const S = s.to || s.href || "";
        return h.value ? S : r(S, i.resolve, s.trailingSlash);
      }), p = h.value ? void 0 : f == null ? void 0 : f({
        ...s,
        to: d
      }), y = Q(() => {
        var _a2;
        const S = s.trailingSlash ?? e.trailingSlash;
        if (!d.value || u.value || n(d.value)) return d.value;
        if (h.value) {
          const k = typeof d.value == "object" && "path" in d.value ? Ti(d.value) : d.value, _ = typeof k == "object" ? i.resolve(k).href : k;
          return bo(_, S);
        }
        return typeof d.value == "object" ? ((_a2 = i.resolve(d.value)) == null ? void 0 : _a2.href) ?? null : bo(ps(a.app.baseURL, d.value), S);
      });
      return {
        to: d,
        hasTarget: l,
        isAbsoluteUrl: u,
        isExternal: h,
        href: y,
        isActive: (p == null ? void 0 : p.isActive) ?? Q(() => d.value === i.currentRoute.value.path),
        isExactActive: (p == null ? void 0 : p.isExactActive) ?? Q(() => d.value === i.currentRoute.value.path),
        route: (p == null ? void 0 : p.route) ?? Q(() => i.resolve(d.value)),
        async navigate(S) {
          await Xg(y.value, {
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
        const a = Ne(), { to: l, href: u, navigate: c, isExternal: f, hasTarget: h, isAbsoluteUrl: d } = o(s), p = Ce(false), y = Ce(null), S = (m) => {
          var _a2;
          y.value = s.custom ? (_a2 = m == null ? void 0 : m.$el) == null ? void 0 : _a2.nextElementSibling : m == null ? void 0 : m.$el;
        };
        function k(m) {
          var _a2, _b2;
          return !p.value && (typeof s.prefetchOn == "string" ? s.prefetchOn === m : ((_a2 = s.prefetchOn) == null ? void 0 : _a2[m]) ?? ((_b2 = e.prefetchOn) == null ? void 0 : _b2[m])) && (s.prefetch ?? e.prefetch) !== false && s.noPrefetch !== true && s.target !== "_blank" && !Bb();
        }
        async function _(m = ye()) {
          if (p.value) return;
          p.value = true;
          const v = typeof l.value == "string" ? l.value : f.value ? Ti(l.value) : a.resolve(l.value).fullPath, w = f.value ? new URL(v, window.location.href).href : v;
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
              activeClass: s.activeClass || e.activeClass,
              exactActiveClass: s.exactActiveClass || e.exactActiveClass,
              replace: s.replace,
              ariaCurrentValue: s.ariaCurrentValue,
              custom: s.custom
            };
            return s.custom || (k("interaction") && (w.onPointerenter = _.bind(null, void 0), w.onFocus = _.bind(null, void 0)), p.value && (w.class = s.prefetchedClass || e.prefetchedClass), w.rel = s.rel || void 0), pe(li("RouterLink"), w, i.default);
          }
          const m = s.target || null, v = Mb(s.noRel ? "" : s.rel, e.externalRelAttribute, d.value || h.value ? "noopener noreferrer" : "") || null;
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
                  return hs(w.search);
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
  function bo(e, t) {
    const n = t === "append" ? wf : tr;
    return $t(e) && !e.startsWith("http") ? e : n(e, true);
  }
  function $b() {
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
  const Nb = /2g/;
  function Bb() {
    const e = navigator.connection;
    return !!(e && (e.saveData || Nb.test(e.effectiveType)));
  }
  const Db = Lf(() => {
    fa("PiniaColada_TreeMapNode", (e) => e);
  }), xd = [
    [
      "NuxtError",
      (e) => gn(e)
    ],
    [
      "EmptyShallowRef",
      (e) => ut(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Dr(e))
    ],
    [
      "EmptyRef",
      (e) => Ce(e === "_" ? void 0 : e === "0n" ? BigInt(0) : Dr(e))
    ],
    [
      "ShallowRef",
      (e) => ut(e)
    ],
    [
      "ShallowReactive",
      (e) => Ht(e)
    ],
    [
      "Ref",
      (e) => Ce(e)
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
      }).then((o) => (r.payload.data[e] = o, o)))), {
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
      for (const [r, o] of xd) fa(r, o);
      Object.assign(e.payload, ([t, n] = Jn(() => e.runWithContext(Gy)), t = await t, n(), t)), window.__NUXT__ = e.payload;
    }
  });
  async function ma(e, t = {}) {
    const n = t.document || e.resolvedOptions.document;
    if (!n || !e.dirty) return;
    const r = {
      shouldRender: true,
      tags: []
    };
    if (await e.hooks.callHook("dom:beforeRender", r), !!r.shouldRender) return e._domUpdatePromise || (e._domUpdatePromise = new Promise(async (o) => {
      var _a2;
      const s = /* @__PURE__ */ new Map(), i = new Promise((d) => {
        e.resolveTags().then((p) => {
          d(p.map((y) => {
            const S = s.get(y._d) || 0, k = {
              tag: y,
              id: (S ? `${y._d}:${S}` : y._d) || Rl(y),
              shouldRender: true
            };
            return y._d && zf(y._d) && s.set(y._d, S + 1), k;
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
            if (!kl.has(S)) continue;
            const k = Jf({
              tag: S,
              props: {}
            }, {
              innerHTML: y.innerHTML,
              ...y.getAttributeNames().reduce((_, m) => (_[m] = y.getAttribute(m), _), {}) || {}
            });
            if (k.key = y.getAttribute("data-hid") || void 0, k._d = xi(k) || Rl(k), a.elMap.has(k._d)) {
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
          d.$el = d.$el || a.elMap.get(S), d.$el ? u(d) : kl.has(p.tag) && c.push(d);
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
      }), o();
    }).finally(() => {
      e._domUpdatePromise = void 0, e.dirty = false;
    })), e._domUpdatePromise;
  }
  function Fb(e = {}) {
    var _a2, _b2, _c2;
    const t = ((_a2 = e.domOptions) == null ? void 0 : _a2.render) || ma;
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
  function Hb(e, t) {
    let n = 0;
    return () => {
      const r = ++n;
      t(() => {
        n === r && e();
      });
    };
  }
  function Ub(e = {}) {
    const t = Fb({
      domOptions: {
        render: Hb(() => ma(t), (n) => setTimeout(n, 0))
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
          n = false, await ma(t);
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
  }), qb = /(:\w+)\([^)]+\)/g, Kb = /(:\w+)[?+*]/g, Gb = /:\w+/g, zb = (e, t) => t.path.replace(qb, "$1").replace(Kb, "$1").replace(Gb, (n) => {
    var _a2;
    return ((_a2 = e.params[n.slice(1)]) == null ? void 0 : _a2.toString()) || "";
  }), Bi = (e, t) => {
    const n = e.route.matched.find((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === e.Component.type;
    }), r = t ?? (n == null ? void 0 : n.meta.key) ?? (n && zb(e.route, n));
    return typeof r == "function" ? r(e.route) : r;
  }, Jb = (e, t) => ({
    default: () => e ? pe(Qh, e === true ? {} : e, t) : t
  });
  function ga(e) {
    return Array.isArray(e) ? e : [
      e
    ];
  }
  const Yb = {
    middleware: [
      async function(e) {
        e.path === "/onepager" && await un(() => Promise.resolve({}), __vite__mapDeps([0]), import.meta.url);
      }
    ]
  }, Ks = [
    {
      name: "roadmap",
      path: "/roadmap",
      component: () => un(() => import("./B0c03Pz8.js"), __vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12,13]), import.meta.url)
    },
    {
      name: "uid",
      path: "/:uid(.*)*",
      meta: Yb || {},
      component: () => un(() => import("./CVLTLgFR.js"), __vite__mapDeps([14,15,4,16,17]), import.meta.url)
    },
    {
      name: "blog-post",
      path: "/blog/:post()",
      component: () => un(() => import("./BkD-9BkF.js"), __vite__mapDeps([18,19,6,7,8,9,10,20,21,4,22,5,15,23,12,17,11,24]), import.meta.url)
    },
    {
      name: "slice-simulator",
      path: "/slice-simulator",
      component: () => un(() => import("./BjZV1MlI.js"), __vite__mapDeps([25,26,15]), import.meta.url)
    },
    {
      name: "iframes-albatross-liveview",
      path: "/iframes/albatross-liveview",
      component: () => un(() => import("./DWPI3UO7.js"), __vite__mapDeps([27,28,29,21,11,12,30,6,7,8,9,10,23]), import.meta.url)
    }
  ], Qb = async (e, t) => {
    var _a2;
    let n, r;
    if (!((_a2 = e.meta) == null ? void 0 : _a2.validate)) return;
    const o = ([n, r] = Jn(() => Promise.resolve(e.meta.validate(e))), n = await n, r(), n);
    if (o === true) return;
    const s = gn({
      fatal: true,
      statusCode: o && o.statusCode || 404,
      statusMessage: o && o.statusMessage || `Page Not Found: ${e.fullPath}`,
      data: {
        path: e.fullPath
      }
    });
    return typeof window < "u" && window.history.pushState({}, "", t.fullPath), s;
  }, Xb = async (e) => {
    let t, n;
    const r = ([t, n] = Jn(() => ua({
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
    const { pathname: r, search: o, hash: s } = t, i = e.indexOf("#");
    if (i > -1) {
      const u = s.includes(e.slice(i)) ? e.slice(i).length : 1;
      let c = s.slice(u);
      return c[0] !== "/" && (c = "/" + c), cl(c, "");
    }
    const a = cl(r, e), l = !n || tg(a, n) ? a : n;
    return l + (l.includes("?") ? "" : o) + s;
  }
  const t_ = Ie({
    name: "nuxt:router",
    enforce: "pre",
    async setup(e) {
      var _a2;
      let t, n, r = bn().app.baseURL;
      const o = ((_a2 = en.history) == null ? void 0 : _a2.call(en, r)) ?? $v(r), s = en.routes ? ([t, n] = Jn(() => en.routes(Ks)), t = await t, n(), t ?? Ks) : Ks;
      let i;
      const a = sb({
        ...en,
        scrollBehavior: (S, k, _) => {
          if (k === lt) {
            i = _;
            return;
          }
          if (en.scrollBehavior) {
            if (a.options.scrollBehavior = en.scrollBehavior, "scrollRestoration" in window.history) {
              const m = a.beforeEach(() => {
                m(), window.history.scrollRestoration = "manual";
              });
            }
            return en.scrollBehavior(S, lt, i || _);
          }
        },
        history: o,
        routes: s
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
      e._route = Ht(h), e._middleware || (e._middleware = {
        global: [],
        named: {}
      });
      const d = gs();
      a.afterEach(async (S, k, _) => {
        delete e._processingMiddleware, !e.isHydrating && d.value && await e.runWithContext(jf), _ && await e.callHook("page:loading:end");
      });
      try {
        [t, n] = Jn(() => a.isReady()), await t, n();
      } catch (S) {
        [t, n] = Jn(() => e.runWithContext(() => Rn(S))), await t, n();
      }
      const p = u !== a.currentRoute.value.fullPath ? a.resolve(u) : a.currentRoute.value;
      f();
      const y = e.payload.state._layout;
      return a.beforeEach(async (S, k) => {
        var _a3;
        await e.callHook("page:loading:start"), S.meta = It(S.meta), e.isHydrating && y && !Gt(S.meta.layout) && (S.meta.layout = y), e._processingMiddleware = true;
        {
          const _ = /* @__PURE__ */ new Set([
            ...Zb,
            ...e._middleware.global
          ]);
          for (const m of S.matched) {
            const v = m.meta.middleware;
            if (v) for (const w of ga(v)) _.add(w);
          }
          {
            const m = await e.runWithContext(() => ua({
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
                const A = w || gn({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${u}`
                });
                return await e.runWithContext(() => Rn(A)), false;
              }
              if (w === true) continue;
              if (w === false) return w;
              if (w) return Ff(w) && w.fatal && await e.runWithContext(() => Rn(w)), w;
            } catch (w) {
              const A = gn(w);
              return A.fatal && await e.runWithContext(() => Rn(A)), A;
            }
          }
        }
      }), a.onError(async () => {
        delete e._processingMiddleware, await e.callHook("page:loading:end");
      }), a.afterEach(async (S, k) => {
        S.matched.length === 0 && await e.runWithContext(() => Rn(gn({
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
          }), a.options.scrollBehavior = en.scrollBehavior;
        } catch (S) {
          await e.runWithContext(() => Rn(S));
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
    const t = Object.keys(e).sort((r, o) => r.localeCompare(o)), n = {};
    for (const r of t) n[r] = e[r];
    return n;
  }
  function r_(e) {
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
        const u = l, c = (s == null ? void 0 : s.resolveRefs) ? rt(n[a][l]) : n[a][l];
        !l.startsWith("_") && typeof c < "u" && c !== "" && (i[l] = c, typeof n[a]._priority < "u" && n[a]._priority !== -1 && (i._priority[u] = n[a]._priority), (s == null ? void 0 : s.debug) && (i._context[u] = ((_a2 = n[a]._context) == null ? void 0 : _a2[u]) || n[a]._context || "anonymous"));
      }
      return (s == null ? void 0 : s.skipNormalize) ? i : n_(i);
    }
    return {
      stack: n,
      push: r,
      get: o
    };
  }
  const o_ = Ie({
    name: "nuxt-site-config:init",
    enforce: "pre",
    async setup(e) {
      var _a2;
      const t = r_(), n = _b("site-config");
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
  }), s_ = Ie({
    name: "nuxt:payload",
    setup(e) {
      const t = /* @__PURE__ */ new Set();
      Ne().beforeResolve(async (n, r) => {
        if (n.path === r.path) return;
        const o = await Ol(n.path);
        if (o) {
          for (const s of t) delete e.static.data[s];
          for (const s in o.data) s in e.static.data || t.add(s), e.static.data[s] = o.data[s];
        }
      }), lr(() => {
        var _a2;
        e.hooks.hook("link:prefetch", async (n) => {
          const { hostname: r } = new URL(n, window.location.href);
          r === window.location.hostname && await Ol(n).catch(() => {
            console.warn("[nuxt] Error preloading payload for", n);
          });
        }), ((_a2 = navigator.connection) == null ? void 0 : _a2.effectiveType) !== "slow-2g" && setTimeout(ys, 1e3);
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
      const r = await ys();
      t && clearTimeout(t), t = setTimeout(n, gl);
      try {
        const o = await $fetch(sa("builds/latest.json") + `?${Date.now()}`);
        o.id !== r.id && e.hooks.callHook("app:manifest:update", o);
      } catch {
      }
    }
    lr(() => {
      t = setTimeout(n, gl);
    });
  }), l_ = Ie((e) => {
    if (!document.startViewTransition) return;
    let t, n = false, r, o;
    const s = () => {
      t = void 0, n = false, o = void 0, r = void 0;
    };
    window.addEventListener("popstate", (a) => {
      n = a.hasUAVisualTransition, n && (t == null ? void 0 : t.skipTransition());
    }), Ne().beforeResolve(async (a, l) => {
      const u = a.meta.viewTransition ?? Lg, f = window.matchMedia("(prefers-reduced-motion: reduce)").matches && u !== "always";
      if (u === false || f || n || !kd(a, l)) return;
      const h = new Promise((y, S) => {
        r = y, o = S;
      });
      let d;
      const p = new Promise((y) => d = y);
      return t = document.startViewTransition(() => (d(), h)), t.finished.then(s), await e.callHook("page:view-transition:start", t), p;
    }), e.hook("vue:error", () => {
      o == null ? void 0 : o(), s();
    }), e.hook("page:finish", () => {
      r == null ? void 0 : r(), s();
    });
  }), c_ = Ie({
    name: "nuxt:chunk-reload",
    setup(e) {
      const t = Ne(), n = bn(), r = /* @__PURE__ */ new Set();
      t.beforeEach(() => {
        r.clear();
      }), e.hook("app:chunkError", ({ error: s }) => {
        r.add(s);
      });
      function o(s) {
        const a = "href" in s && s.href[0] === "#" ? n.app.baseURL + s.href : ps(n.app.baseURL, s.fullPath);
        xb({
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
  }), dn = {
    default: $a(() => un(() => import("./Cv2xV2PH.js"), __vite__mapDeps([31,4,32,9,33,8,34,35,36,37,38,39,7,11,12,40,19,6,10,5,41,42]), import.meta.url).then((e) => e.default || e)),
    iframe: $a(() => un(() => import("./Bx-Y-hLN.js"), [], import.meta.url).then((e) => e.default || e))
  }, d_ = Ie({
    name: "nuxt:prefetch",
    setup(e) {
      const t = Ne();
      e.hooks.hook("app:mounted", () => {
        t.beforeEach(async (n) => {
          var _a2;
          const r = (_a2 = n == null ? void 0 : n.meta) == null ? void 0 : _a2.layout;
          r && typeof dn[r] == "function" && await dn[r]();
        });
      }), e.hooks.hook("link:prefetch", (n) => {
        if ($t(n)) return;
        const r = t.resolve(n);
        if (!r) return;
        const o = r.meta.layout;
        let s = ga(r.meta.middleware);
        s = s.filter((i) => typeof i == "string");
        for (const i of s) typeof Di[i] == "function" && Di[i]();
        typeof o == "string" && o in dn && Ab(dn[o]);
      });
    }
  });
  function h_(e) {
    return ({ queryCache: t, scope: n }) => {
      t.$onAction(({ name: r, after: o }) => {
        r === "create" && o((s) => {
          var _a2;
          const i = ((_a2 = s.options) == null ? void 0 : _a2.delay) ?? (e == null ? void 0 : e.delay) ?? 200;
          n.run(() => {
            const a = ut(false);
            if (s.ext.isDelaying = a, !i) return;
            const l = s.asyncStatus.value;
            s.asyncStatus = ss((u, c) => {
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
      e.payload && e.payload.pinia_colada && tv(da(t), e.payload.pinia_colada);
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
  function R_(e) {
    return /Windows/.test(e);
  }
  function T_(e) {
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
  function ic(e, t = {}) {
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
    else n = w_(e), r = S_(e), o = k_(e), s = E_(e);
    const i = R_(e), a = T_(e), l = P_(e), u = l === "Safari", c = l === "Firefox", f = l === "Edge", h = l === "Chrome", d = l === "Samsung", p = g_.test(e);
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
      isCrawler: p
    };
  }
  let A_, x_, xt, Od, ve, ac, O_, fn, Ve, L_, Ld, lc, cc;
  A_ = Ie(() => {
    const e = bn(), t = e.public.device.defaultUserAgent;
    let n;
    {
      const r = navigator.userAgent || t;
      n = It(ic(r)), e.public.device.refreshOnResize && window.addEventListener("resize", () => {
        setTimeout(() => {
          const o = ic(navigator.userAgent || r);
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
    const o = r.map(Od).join(", "), s = n && r.length ? ", " : "";
    return `[${e}(${n}${s}${o})]`;
  };
  ac = (e) => {
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
    has: ac("has"),
    missing: ac("missing"),
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
  fn = (e) => Array.isArray(e) ? e : [
    e
  ];
  Ve = (e = {}, t) => ({
    ...e,
    filters: [
      ...e.filters || [],
      ...fn(t)
    ]
  });
  L_ = (e) => typeof e == "function" ? e : () => e;
  Ld = "7.17.2";
  lc = (e) => `https://prismic.dev/msg/client/v${Ld}/${e}`;
  cc = (e) => At.at("document.tags", fn(e));
  var M_ = Object.defineProperty, I_ = (e, t, n) => t in e ? M_(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, uc = (e, t, n) => I_(e, typeof t != "symbol" ? t + "" : t, n);
  class pt extends Error {
    constructor(t = "An invalid API response was returned", n, r) {
      super(t), uc(this, "url"), uc(this, "response"), this.url = n, this.response = r;
    }
  }
  const ya = (e, t) => {
    const n = e.find((r) => t(r));
    if (!n) throw new pt("Ref could not be found.", void 0, void 0);
    return n;
  }, fc = (e) => ya(e, (t) => t.isMasterRef), Gs = (e, t) => ya(e, (n) => n.id === t), zs = (e, t) => ya(e, (n) => n.label === t), Md = "io.prismic.preview", $_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    preview: Md
  }, Symbol.toStringTag, {
    value: "Module"
  })), dc = (e) => e.replace(/%3B/g, ";"), N_ = (e) => {
    const t = e.split("; ");
    let n;
    for (const r of t) {
      const o = r.split("=");
      if (dc(o[0]).replace(/%3D/g, "=") === Md) {
        n = dc(o.slice(1).join("="));
        break;
      }
    }
    return n;
  }, B_ = (e) => e.replace(/(\n| )*( |{|})(\n| )*/gm, (t, n, r) => r), _o = (e) => At.any("document.tags", fn(e)), D_ = 5e3;
  let hc, Js = 0;
  const j_ = (e, t = {}) => {
    const { level: n = "log" } = t;
    if (e === hc && Date.now() - Js < D_) {
      Js = Date.now();
      return;
    }
    Js = Date.now(), hc = e, console[n](e);
  }, Dn = (e) => At.at("document.type", e);
  class bs extends pt {
  }
  class ji extends pt {
  }
  class F_ extends pt {
  }
  class H_ extends bs {
  }
  class pc extends bs {
  }
  class Ys extends bs {
  }
  class U_ extends ji {
  }
  let hn, Id, V_, W_;
  hn = {
    Any: "Any",
    Document: "Document",
    Media: "Media",
    Web: "Web"
  };
  Id = (e) => {
    var t;
    return {
      link_type: hn.Document,
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
  _s = (e, ...t) => {
    if (!e) return null;
    const n = "link_type" in e ? e : Id(e), [r] = t;
    let o;
    switch (typeof r == "function" || r == null ? o = {
      linkResolver: r
    } : o = {
      ...r
    }, n.link_type) {
      case hn.Media:
      case hn.Web:
        return "url" in n ? n.url : null;
      case hn.Document: {
        if ("id" in n && o.linkResolver) {
          const s = o.linkResolver(n);
          if (s != null) return s;
        }
        return "url" in n && n.url ? n.url : null;
      }
      case hn.Any:
      default:
        return null;
    }
  };
  V_ = (e) => new Promise((t) => setTimeout(t, e));
  W_ = ({ interval: e } = {}) => {
    const t = [];
    let n = false, r = 0;
    const o = () => {
      var l;
      !n && t.length > 0 && ((l = t.shift()) == null || l(), n = true);
    }, s = () => {
      n = false, o();
    }, i = async (l, u, c) => {
      const f = Date.now() - r;
      e && f < e && await V_(e - f);
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
  var q_ = Object.defineProperty, K_ = (e, t, n) => t in e ? q_(e, t, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: n
  }) : e[t] = n, wo = (e, t, n) => K_(e, typeof t != "symbol" ? t + "" : t, n);
  const G_ = 1500;
  class z_ {
    constructor(t) {
      if (wo(this, "fetchFn"), wo(this, "fetchOptions"), wo(this, "queuedFetchJobs", {}), wo(this, "dedupedFetchJobs", {}), this.fetchOptions = t.fetchOptions, typeof t.fetch == "function") this.fetchFn = t.fetch;
      else if (typeof globalThis.fetch == "function") this.fetchFn = globalThis.fetch;
      else throw new pt("A valid fetch implementation was not provided. In environments where fetch is not available (including Node.js), a fetch implementation must be provided via a polyfill or the `fetch` option.", void 0, void 0);
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
      return this.queuedFetchJobs[r] || (this.queuedFetchJobs[r] = W_({
        interval: G_
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
  const J_ = "x-c", Y_ = {
    accessToken: "access_token"
  }, Q_ = (e) => typeof e == "string" ? e : e.direction === "desc" ? `${e.field} desc` : e.field, X_ = (e, t) => {
    const { filters: n, predicates: r, ...o } = t, s = new URL("documents/search", `${e}/`);
    if (n) for (const i of fn(n)) s.searchParams.append("q", `[${i}]`);
    if (r) for (const i of fn(r)) s.searchParams.append("q", `[${i}]`);
    for (const i in o) {
      const a = Y_[i] || i;
      let l = o[i];
      if (a === "orderings") {
        const u = o[a];
        u != null && (l = `[${fn(u).map((f) => Q_(f)).join(",")}]`);
      } else a === "routes" && typeof o[a] == "object" && (l = JSON.stringify(fn(o[a])));
      l != null && s.searchParams.set(a, fn(l).join(","));
    }
    return s.searchParams.set(J_, `js-${Ld}`), s.toString();
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
  }, mc = (e) => {
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
  }) : e[t] = n, tn = (e, t, n) => rw(e, typeof t != "symbol" ? t + "" : t, n), Nd = (e, t, n) => t.has(e) || $d("Cannot " + n), gc = (e, t, n) => (Nd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), ow = (e, t, n) => t.has(e) ? $d("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), sw = (e, t, n, r) => (Nd(e, t, "write to private field"), t.set(e, n), n), br;
  const iw = 100, aw = 5e3, lw = 500, cw = 1e3, uw = 3;
  var Ct;
  (function(e) {
    e.Master = "Master", e.ReleaseID = "ReleaseID", e.ReleaseLabel = "ReleaseLabel", e.Manual = "Manual";
  })(Ct || (Ct = {}));
  class fw extends z_ {
    constructor(t, n = {}) {
      if (super(n), ow(this, br), tn(this, "documentAPIEndpoint"), tn(this, "accessToken"), tn(this, "routes"), tn(this, "brokenRoute"), tn(this, "defaultParams"), tn(this, "refState", {
        mode: Ct.Master,
        autoPreviewsEnabled: true
      }), tn(this, "cachedRepository"), tn(this, "cachedRepositoryExpiration", 0), n.documentAPIEndpoint || mc(t), mc(t)) {
        this.documentAPIEndpoint = t;
        try {
          this.repositoryName = tw(t);
        } catch {
          console.warn(`[@prismicio/client] A repository name could not be inferred from the provided endpoint (\`${t}\`). Some methods will be disabled. Create the client using a repository name to prevent this warning. For more details, see ${lc("prefer-repository-name")}`);
        }
      } else this.documentAPIEndpoint = n.documentAPIEndpoint || ew(t), this.repositoryName = t;
      this.accessToken = n.accessToken, this.routes = n.routes, this.brokenRoute = n.brokenRoute, this.defaultParams = n.defaultParams, n.ref && this.queryContentFromRef(n.ref), this.graphQLFetch = this.graphQLFetch.bind(this);
    }
    set repositoryName(t) {
      sw(this, br, t);
    }
    get repositoryName() {
      if (!gc(this, br)) throw new pt(`A repository name is required for this method but one could not be inferred from the provided API endpoint (\`${this.documentAPIEndpoint}\`). To fix this error, provide a repository name when creating the client. For more details, see ${lc("prefer-repository-name")}`, void 0, void 0);
      return gc(this, br);
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
      throw new ji("No documents were returned", s, void 0);
    }
    async dangerouslyGetAll(t = {}) {
      var n;
      const { limit: r = 1 / 0, ...o } = t, s = {
        ...o,
        pageSize: Math.min(r, o.pageSize || ((n = this.defaultParams) == null ? void 0 : n.pageSize) || iw)
      }, i = [];
      let a;
      for (; (!a || a.next_page) && i.length < r; ) {
        const l = a ? a.page + 1 : void 0;
        a = await this.get({
          ...s,
          page: l
        }), i.push(...a.results), a.next_page && await new Promise((u) => setTimeout(u, lw));
      }
      return i.slice(0, r);
    }
    async getByID(t, n) {
      return await this.getFirst(Ve(n, At.at("document.id", t)));
    }
    async getByIDs(t, n) {
      return await this.get(Ve(n, At.in("document.id", t)));
    }
    async getAllByIDs(t, n) {
      return await this.dangerouslyGetAll(Ve(n, At.in("document.id", t)));
    }
    async getByUID(t, n, r) {
      return await this.getFirst(Ve(r, [
        Dn(t),
        At.at(`my.${t}.uid`, n)
      ]));
    }
    async getByUIDs(t, n, r) {
      return await this.get(Ve(r, [
        Dn(t),
        At.in(`my.${t}.uid`, n)
      ]));
    }
    async getAllByUIDs(t, n, r) {
      return await this.dangerouslyGetAll(Ve(r, [
        Dn(t),
        At.in(`my.${t}.uid`, n)
      ]));
    }
    async getSingle(t, n) {
      return await this.getFirst(Ve(n, Dn(t)));
    }
    async getByType(t, n) {
      return await this.get(Ve(n, Dn(t)));
    }
    async getAllByType(t, n) {
      return await this.dangerouslyGetAll(Ve(n, Dn(t)));
    }
    async getByTag(t, n) {
      return await this.get(Ve(n, _o(t)));
    }
    async getAllByTag(t, n) {
      return await this.dangerouslyGetAll(Ve(n, _o(t)));
    }
    async getByEveryTag(t, n) {
      return await this.get(Ve(n, cc(t)));
    }
    async getAllByEveryTag(t, n) {
      return await this.dangerouslyGetAll(Ve(n, cc(t)));
    }
    async getBySomeTags(t, n) {
      return await this.get(Ve(n, _o(t)));
    }
    async getAllBySomeTags(t, n) {
      return await this.dangerouslyGetAll(Ve(n, _o(t)));
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
      return Gs(r, t);
    }
    async getRefByLabel(t, n) {
      const r = await this.getRefs(n);
      return zs(r, t);
    }
    async getMasterRef(t) {
      const n = await this.getRefs(t);
      return fc(n);
    }
    async getReleases(t) {
      return (await this.getRefs(t)).filter((r) => !r.isMasterRef);
    }
    async getReleaseByID(t, n) {
      const r = await this.getReleases(n);
      return Gs(r, t);
    }
    async getReleaseByLabel(t, n) {
      const r = await this.getReleases(n);
      return zs(r, t);
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
      return X_(this.documentAPIEndpoint, {
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
        }), a = _s(i, {
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
      return l && a.searchParams.set("query", B_(l)), await this.fetchFn(a.toString(), {
        ...n,
        headers: i
      });
    }
    async getCachedRepository(t) {
      return (!this.cachedRepository || Date.now() >= this.cachedRepositoryExpiration) && (this.cachedRepositoryExpiration = Date.now() + aw, this.cachedRepository = await this.getRepository(t)), this.cachedRepository;
    }
    async getCachedRepositoryForm(t, n) {
      const o = (await this.getCachedRepository(n)).forms[t];
      if (!o) throw new pt(`Form with name "${t}" could not be found`, void 0, void 0);
      return o;
    }
    async getResolvedRefString(t) {
      var n, r;
      if (this.refState.autoPreviewsEnabled) {
        let i, a;
        if ((n = this.refState.httpRequest) != null && n.headers ? "get" in this.refState.httpRequest.headers && typeof this.refState.httpRequest.headers.get == "function" ? a = this.refState.httpRequest.headers.get("cookie") : "cookie" in this.refState.httpRequest.headers && (a = this.refState.httpRequest.headers.cookie) : (r = globalThis.document) != null && r.cookie && (a = globalThis.document.cookie), a && (i = N_(a)), i) return i;
      }
      const o = await this.getCachedRepository(t), s = this.refState.mode;
      if (s === Ct.ReleaseID) return Gs(o.refs, this.refState.releaseID).ref;
      if (s === Ct.ReleaseLabel) return zs(o.refs, this.refState.releaseLabel).ref;
      if (s === Ct.Manual) {
        const i = await L_(this.refState.ref)();
        if (typeof i == "string") return i;
      }
      return fc(o.refs).ref;
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
        if (!(i instanceof Ys || i instanceof pc) || n >= uw - 1) throw i;
        (t == null ? void 0 : t.ref) || (this.cachedRepository = void 0);
        const a = (o = (r = i.message.match(/Master ref is: (?<ref>.*)$/)) == null ? void 0 : r.groups) == null ? void 0 : o.ref;
        if (!a) throw i;
        const l = new URL(s).searchParams.get("ref"), u = i instanceof Ys ? "invalid" : "expired";
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
          throw new F_(r.json.message, t, r.json);
        case 401:
        case 403:
          throw new bs(r.json.error || r.json.message, t, r.json);
        case 404:
          throw r.json === void 0 ? new U_(`Prismic repository not found. Check that "${this.documentAPIEndpoint}" is pointing to the correct repository.`, t, t.startsWith(this.documentAPIEndpoint) ? void 0 : r.text) : r.json.type === "api_notfound_error" ? new Ys(r.json.message, t, r.json) : r.json.type === "api_security_error" && /preview token.*expired/i.test(r.json.message) ? new H_(r.json.message, t, r.json) : new ji(r.json.message, t, r.json);
        case 410:
          throw new pc(r.json.message, t, r.json);
        case 429: {
          const o = Number(r.headers.get("retry-after")), s = Number.isNaN(o) ? cw : o;
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
      throw new pt(void 0, t, r.json);
    }
  }
  br = /* @__PURE__ */ new WeakMap();
  let dw, Ue, va, hw, cr, mw, gw, yw, vw, bw, _w, Bd, ww, Sw, kw, Ew, Dd, Rw, Tw, Cw, Pw, ur, xw, jd, Ow, Lw, _a, Xr, Zr, Je, Mw, Iw, $w, Hd, Nw, Ss;
  dw = (e, t) => new fw(e, t);
  Ue = (e) => e != null;
  va = (e) => !!e.length;
  ba = (e) => Ue(e) ? e.length === 1 && "text" in e[0] ? !!e[0].text : !!e.length : false;
  hw = ba;
  cr = (e) => Ue(e) && !!e.url;
  pw = cr;
  ws = (e) => Ue(e) && ("id" in e || "url" in e);
  mw = ws;
  gw = ws;
  yw = Ue;
  vw = Ue;
  bw = Ue;
  _w = Ue;
  Bd = (e) => Ue(Bd) && !!e;
  ww = Ue;
  Sw = (e) => Ue(e) && !!e.embed_url;
  kw = (e) => Ue(e) && "longitude" in e;
  Ew = Ue;
  Dd = Ue;
  Rw = Dd;
  Tw = (e) => Ue(e) && va(e);
  Cw = (e) => Ue(e) && va(e);
  Pw = (e) => Ue(e) && va(e);
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
    integrationFields: Rw,
    keyText: Bd,
    link: ws,
    linkToMedia: mw,
    number: _w,
    repeatable: Tw,
    richText: ba,
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
    if (e && ("link_type" in e ? ws(e) : e)) {
      const n = "target" in e ? e.target : void 0, r = _s(e, t.linkResolver), o = r ?? void 0, s = typeof o == "string" ? !xw(o) : false, i = t.rel ? t.rel({
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
  Ow = (e, t = " ") => {
    let n = "";
    for (let r = 0; r < e.length; r++) "text" in e[r] && (n += (n ? t : "") + e[r].text);
    return n;
  };
  Fd = (e, ...t) => {
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
  _a = (e) => {
    const t = "" + e, n = Lw.exec(t);
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
      s && (typeof s == "boolean" ? r.push(o) : r.push(`${o}="${_a(s)}"`));
    }
    return r.length && r.unshift(""), r.join(" ");
  };
  Zr = (e) => e && typeof e != "function" ? e : {};
  Je = (e, t) => {
    const n = Zr(t);
    return ({ node: r, children: o }) => `<${e}${Xr(r, n)}>${o}</${e}>`;
  };
  Mw = (e) => {
    const t = Zr(e);
    return ({ node: n }) => `<pre${Xr(n, t)}>${_a(n.text)}</pre>`;
  };
  Iw = (e, t) => {
    const n = Zr(t);
    return ({ node: r }) => {
      const o = {
        ...n,
        src: r.url,
        alt: r.alt,
        copyright: r.copyright
      };
      let s = `<img${Xr(r, o)} />`;
      return r.linkTo && (s = Hd(e)({
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
  Hd = (e, t) => {
    const n = Zr(t);
    return ({ node: r, children: o }) => {
      const s = {
        ...n
      };
      return r.data.link_type === hn.Web ? (s.href = r.data.url, s.target = r.data.target, s.rel = "noopener noreferrer") : r.data.link_type === hn.Document ? s.href = _s(r.data, {
        linkResolver: e
      }) : r.data.link_type === hn.Media && (s.href = r.data.url), `<a${Xr(r, s)}>${o}</a>`;
    };
  };
  Nw = () => ({ text: e }) => e ? _a(e).replace(/\n/g, "<br />") : "";
  Ss = () => (++Ss.i).toString();
  Ss.i = 0;
  let Ud, xr, Qs, Bw, Vd, Wd, Dw, qd, jw, Fw, Hw, Xs, Uw, Kd, Vw, eo, Ww, Zs, yc, Gd, Kw, zd, wa, Jd, Yd, Gw, zw, Jw, Fi, Yw, Qw, Xw, Zw, e0, t0, n0, r0, o0, s0, i0, a0, l0, c0, u0, f0, d0, h0, p0, m0, vc, g0, y0, v0, b0, _0, w0, S0, k0, bc, _c, E0, R0, T0, C0, P0, A0, x0, O0, L0, M0;
  Ud = (e) => {
    const t = Bw(e), n = [];
    for (let r = 0; r < t.length; r++) n.push(Vd(t[r]));
    return {
      key: Ss(),
      children: n
    };
  };
  xr = (e, t = []) => ({
    key: Ss(),
    type: e.type,
    text: "text" in e ? e.text : void 0,
    node: e,
    children: t
  });
  Qs = (e) => xr({
    type: xt.span,
    text: e,
    spans: []
  });
  Bw = (e) => {
    const t = e.slice(0);
    for (let n = 0; n < t.length; n++) {
      const r = t[n];
      if (r.type === xt.listItem || r.type === xt.oListItem) {
        const o = [
          r
        ];
        for (; t[n + 1] && t[n + 1].type === r.type; ) o.push(t[n + 1]), t.splice(n, 1);
        r.type === xt.listItem ? t[n] = {
          type: xt.list,
          items: o
        } : t[n] = {
          type: xt.oList,
          items: o
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
      Qs(t.text)
    ];
    const r = e.slice(0);
    r.sort((s, i) => s.start - i.start || i.end - s.end);
    const o = [];
    for (let s = 0; s < r.length; s++) {
      const i = r[s], a = n && n.start || 0, l = i.start - a, u = i.end - a, c = t.text.slice(l, u), f = [];
      for (let d = s; d < r.length; d++) {
        const p = r[d];
        p !== i && (p.start >= i.start && p.end <= i.end ? (f.push(p), r.splice(d, 1), d--) : p.start < i.end && p.end > i.start && (f.push({
          ...p,
          end: i.end
        }), r[d] = {
          ...p,
          start: i.end
        }));
      }
      s === 0 && l > 0 && o.push(Qs(t.text.slice(0, l)));
      const h = {
        ...i,
        text: c
      };
      o.push(xr(h, Wd(f, {
        ...t,
        text: c
      }, i))), u < t.text.length && o.push(Qs(t.text.slice(u, r[s + 1] ? r[s + 1].start - a : void 0)));
    }
    return o;
  };
  Dw = (e, t) => qd(Ud(e).children, t);
  qd = (e, t) => {
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t(o.type, o.node, o.text, qd(o.children, t), o.key);
      s != null && n.push(s);
    }
    return n;
  };
  jw = {
    [xt.listItem]: "listItem",
    [xt.oListItem]: "oListItem",
    [xt.list]: "list",
    [xt.oList]: "oList"
  };
  Fw = (e) => (t, n, r, o, s) => {
    const i = e[jw[t] || t];
    if (i) return i({
      type: t,
      node: n,
      text: r,
      children: o,
      key: s
    });
  };
  Hw = (...e) => (...t) => {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (r) {
        const o = r(...t);
        if (o != null) return o;
      }
    }
  };
  Xs = (e, t) => {
    const n = (o, s) => typeof o == "function" ? (i) => (o == null ? void 0 : o(i)) || s(i) : s, r = {
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
      hyperlink: n(t == null ? void 0 : t.hyperlink, Hd(e, t == null ? void 0 : t.hyperlink)),
      label: n(t == null ? void 0 : t.label, Je("span", t == null ? void 0 : t.label)),
      span: n(t == null ? void 0 : t.span, Nw())
    };
    return Uw(r);
  };
  Uw = (e) => {
    const t = {};
    for (const n in e) {
      const r = e[n];
      r && (t[n] = (o) => r({
        ...o,
        children: o.children.join("")
      }));
    }
    return Fw(t);
  };
  Kd = (e, ...t) => {
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
      return o.serializer ? typeof o.serializer == "function" ? s = Hw((i, a, l, u, c) => o.serializer(i, a, l, u.join(""), c), Xs(o.linkResolver)) : s = Xs(o.linkResolver, o.serializer) : s = Xs(o.linkResolver), Dw(e, s).join("");
    } else return null;
  };
  Vw = (e) => e.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  eo = (e, t) => {
    const n = new URL(e);
    for (const o in t) {
      const s = Vw(o), i = t[o];
      i === void 0 ? n.searchParams.delete(s) : Array.isArray(i) ? n.searchParams.set(s, i.join(",")) : n.searchParams.set(s, `${i}`);
    }
    const r = n.searchParams.get("s");
    return r && (n.searchParams.delete("s"), n.searchParams.append("s", r)), n.toString();
  };
  Ww = (e, { pixelDensities: t, ...n }) => t.map((r) => `${eo(e, {
    ...n,
    dpr: r
  })} ${r}x`).join(", ");
  Zs = (e, { widths: t, ...n }) => t.map((r) => `${eo(e, {
    ...n,
    w: void 0,
    h: void 0,
    height: void 0,
    width: r
  })} ${r}w`).join(", ");
  qw = (e, t = {}) => e && cr(e) ? eo(e.url, t) : null;
  yc = [
    640,
    828,
    1200,
    2048,
    3840
  ];
  Gd = (e, t = {}) => {
    if (e && cr(e)) {
      let { widths: n = yc, ...r } = t;
      const { url: o, dimensions: s, id: i, alt: a, copyright: l, edit: u, ...c } = e, f = Object.values(c);
      return n === "thumbnails" && f.length < 1 && (n = yc), {
        src: eo(o, r),
        srcset: n === "thumbnails" ? [
          Zs(o, {
            ...r,
            widths: [
              s.width
            ]
          }),
          ...f.map((h) => Zs(h.url, {
            ...r,
            widths: [
              h.dimensions.width
            ]
          }))
        ].join(", ") : Zs(e.url, {
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
        src: eo(e.url, r),
        srcset: Ww(e.url, {
          ...r,
          pixelDensities: n
        })
      };
    } else return null;
  };
  wa = he({
    __name: "Wrapper",
    props: {
      wrapper: {}
    },
    setup(e) {
      return (t, n) => t.wrapper ? (q(), oe(Ge(t.wrapper), Ic(zr({
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
  Jd = Symbol("prismic");
  to = () => Re(Jd, {
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
      const t = e, { options: n } = to(), r = Q(() => {
        if (!ba(t.field)) return t.fallback ?? "";
        const c = t.linkResolver ?? n.linkResolver, f = t.serializer ?? n.richTextSerializer;
        return Kd(t.field, {
          linkResolver: c,
          serializer: f
        });
      }), o = Ce(null), s = Re(Qr, null);
      let i = [];
      const a = function(c) {
        c.preventDefault(), s == null ? void 0 : s.push(this.href);
      }, l = () => {
        const c = o.value && "$el" in o.value ? o.value.$el : o.value;
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
      }), (c, f) => ie(ur).richText(e.field) || e.fallback ? (q(), oe(Ge(e.wrapper || Gw), {
        key: 0,
        ref_key: "root",
        ref: o,
        innerHTML: r.value
      }, null, 8, [
        "innerHTML"
      ])) : Qt("", true);
    }
  });
  Jw = "div";
  Fi = he({
    name: "PrismicEmbed",
    __name: "PrismicEmbed",
    props: {
      field: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => ie(ur).embed(t.field) ? (q(), oe(Ge(t.wrapper || Jw), {
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
      ])) : Qt("", true);
    }
  });
  Yw = [
    "src",
    "srcset",
    "alt"
  ];
  Ko = he({
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
      const t = e, { options: n } = to(), r = Q(() => {
        var o, s;
        if (!cr(t.field)) return;
        let i, a;
        if (t.widths || !t.pixelDensities) {
          const l = Gd(t.field, {
            ...t.imgixParams,
            widths: t.widths === "defaults" ? (o = n.components) == null ? void 0 : o.imageWidthSrcSetDefaults : t.widths
          });
          i = l.src, a = l.srcset;
        } else if (t.pixelDensities) {
          const l = zd(t.field, {
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
      }, null, 8, Yw)) : Qt("", true);
    }
  });
  Qw = "router-link";
  Xw = "a";
  Zw = "noreferrer";
  Go = he({
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
      const t = e, { options: n } = to(), r = Q(() => jd(t.field || t.document, {
        linkResolver: t.linkResolver || n.linkResolver,
        rel(i) {
          var a;
          const l = t.rel || ((a = n.components) == null ? void 0 : a.linkRel);
          return l ? typeof l == "function" ? l(i) : l : i.isExternal ? Zw : void 0;
        }
      })), o = Q(() => {
        var i, a;
        return Yd(r.value.href || "") ? t.internalComponent || ((i = n.components) == null ? void 0 : i.linkInternalComponent) || Qw : t.externalComponent || ((a = n.components) == null ? void 0 : a.linkExternalComponent) || Xw;
      }), s = Q(() => o.value === "a" ? {
        href: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      } : {
        to: r.value.href,
        target: r.value.target,
        rel: r.value.rel
      });
      return (i, a) => (q(), oe(Ge(o.value), Ic(Qu(s.value)), {
        default: $e(() => [
          xe(i.$slots, "default", {}, () => [
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
  o0 = [
    "dir"
  ];
  s0 = [
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
  vc = he({
    name: "PrismicRichTextDefaultComponent",
    __name: "PrismicRichTextDefaultComponent",
    props: {
      node: {},
      linkResolver: {}
    },
    setup(e) {
      const t = e, n = Q(() => "direction" in t.node && t.node.direction === "rtl" ? "rtl" : void 0);
      return (r, o) => r.node.type === "heading1" ? (q(), de("h1", {
        key: 0,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, e0)) : r.node.type === "heading2" ? (q(), de("h2", {
        key: 1,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, t0)) : r.node.type === "heading3" ? (q(), de("h3", {
        key: 2,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, n0)) : r.node.type === "heading4" ? (q(), de("h4", {
        key: 3,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, r0)) : r.node.type === "heading5" ? (q(), de("h5", {
        key: 4,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, o0)) : r.node.type === "heading6" ? (q(), de("h6", {
        key: 5,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, s0)) : r.node.type === "paragraph" ? (q(), de("p", {
        key: 6,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, i0)) : r.node.type === "preformatted" ? (q(), de("pre", a0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "strong" ? (q(), de("strong", l0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "em" ? (q(), de("em", c0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "list-item" ? (q(), de("li", {
        key: 10,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, u0)) : r.node.type === "o-list-item" ? (q(), de("li", {
        key: 11,
        dir: n.value
      }, [
        xe(r.$slots, "default")
      ], 8, f0)) : r.node.type === "group-list-item" ? (q(), de("ul", d0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "group-o-list-item" ? (q(), de("ol", h0, [
        xe(r.$slots, "default")
      ])) : r.node.type === "image" ? (q(), de("p", p0, [
        r.node.linkTo ? (q(), oe(Go, {
          key: 0,
          field: r.node.linkTo
        }, {
          default: $e(() => [
            me(Ko, {
              field: r.node
            }, null, 8, [
              "field"
            ])
          ]),
          _: 1
        }, 8, [
          "field"
        ])) : (q(), oe(Ko, {
          key: 1,
          field: r.node
        }, null, 8, [
          "field"
        ]))
      ])) : r.node.type === "embed" ? (q(), oe(Fi, {
        key: 15,
        field: r.node.oembed
      }, null, 8, [
        "field"
      ])) : r.node.type === "hyperlink" ? (q(), oe(Go, {
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
        class: Vr(r.node.data.label)
      }, [
        xe(r.$slots, "default")
      ], 2)) : (q(true), de(Se, {
        key: 18
      }, Qn(r.node.text.split(`
`), (s, i) => (q(), de(Se, {
        key: s
      }, [
        i > 0 ? (q(), de("br", m0)) : Qt("", true),
        ar(Dt(s), 1)
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
      function r(o) {
        var s;
        return ((s = n.components) == null ? void 0 : s[t[o.type] || o.type]) || vc;
      }
      return (o, s) => {
        const i = li("PrismicRichTextSerialize", true);
        return q(true), de(Se, null, Qn(n.children, (a) => (q(), oe(Ge(r(a)), {
          key: JSON.stringify(a),
          node: a.node,
          "link-resolver": r(a) === vc ? n.linkResolver : void 0
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
            ])) : Qt("", true)
          ]),
          _: 2
        }, 1032, [
          "node",
          "link-resolver"
        ]))), 128);
      };
    }
  });
  zo = he({
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
      const t = e, { options: n } = to(), r = Q(() => {
        var a;
        return t.components || ((a = n.components) == null ? void 0 : a.richTextComponents);
      }), o = Q(() => t.linkResolver || n.linkResolver), s = Q(() => Ud(t.field || []).children), i = Q(() => {
        var a;
        return t.components ? true : t.serializer ? false : (a = n.components) != null && a.richTextComponents ? true : !n.richTextSerializer;
      });
      return (a, l) => i.value && (ie(ur).richText(e.field) || e.fallback) ? (q(), oe(wa, {
        key: 0,
        wrapper: e.wrapper
      }, {
        default: $e(() => [
          s.value.length ? (q(), oe(g0, {
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
      ])) : i.value ? Qt("", true) : (q(), oe(zw, {
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
  bc = he({
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
        default: $e(() => [
          (q(true), de(Se, null, Qn(n.row.cells, (o) => (q(), de(Se, {
            key: o.key
          }, [
            o.type === "header" ? (q(), oe(Ge(t.components.th), {
              key: 0,
              cell: o
            }, {
              default: $e(() => [
                me(zo, {
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
              default: $e(() => [
                me(zo, {
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
  _c = he({
    name: "PrismicTable",
    __name: "PrismicTable",
    props: {
      field: {},
      fallback: {},
      components: {}
    },
    setup(e) {
      const t = e, n = Q(() => ({
        ...k0,
        ...t.components
      }));
      return (r, o) => ie(ur).table(r.field) ? (q(), oe(Ge(n.value.table), zr({
        key: 0,
        table: r.field
      }, r.$attrs), {
        default: $e(() => [
          r.field.head ? (q(), oe(Ge(n.value.thead), {
            key: 0,
            head: r.field.head
          }, {
            default: $e(() => [
              (q(true), de(Se, null, Qn(r.field.head.rows, (s) => (q(), oe(bc, {
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
          ])) : Qt("", true),
          (q(), oe(Ge(n.value.tbody), {
            body: r.field.body
          }, {
            default: $e(() => [
              (q(true), de(Se, null, Qn(r.field.body.rows, (s) => (q(), oe(bc, {
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
  E0 = () => null;
  wc = he({
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
      const t = e, { options: n } = to(), r = Q(() => t.slices.map((o, s) => {
        var i, a;
        const l = "slice_type" in o ? o.slice_type : o.type, u = "id" in o && typeof o.id == "string" ? o.id : `${s}-${JSON.stringify(o)}`, c = ((i = t.components) == null ? void 0 : i[l]) || t.defaultComponent || ((a = n.components) == null ? void 0 : a.sliceZoneDefaultComponent);
        if (!c) return {
          is: E0,
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
      return (o, s) => o.slices ? (q(), oe(wa, {
        key: 0,
        wrapper: o.wrapper
      }, {
        default: $e(() => [
          (q(true), de(Se, null, Qn(r.value, (i) => (q(), oe(Ge(i.is), zr({
            key: i.key,
            ref_for: true
          }, i.props), null, 16))), 128))
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : Qt("", true);
    }
  });
  Sc = he({
    name: "PrismicText",
    __name: "PrismicText",
    props: {
      field: {},
      fallback: {},
      separator: {},
      wrapper: {}
    },
    setup(e) {
      return (t, n) => ie(ur).richText(t.field) || t.fallback ? (q(), oe(wa, {
        key: 0,
        wrapper: t.wrapper
      }, {
        default: $e(() => [
          ar(Dt(ie(Fd)(t.field) || t.fallback), 1)
        ]),
        _: 1
      }, 8, [
        "wrapper"
      ])) : Qt("", true);
    }
  });
  R0 = (e) => {
    let t;
    return e.client ? t = e.client : t = dw(e.endpoint, e.clientConfig), {
      options: e,
      ...{
        client: t,
        filter: At,
        cookie: $_
      },
      ...{
        asText: Fd,
        asHTML: (s, ...i) => {
          const [a, l] = i;
          return Kd(s, typeof a == "function" || a == null ? {
            linkResolver: a || e.linkResolver,
            serializer: l || e.richTextSerializer
          } : {
            linkResolver: e.linkResolver,
            serializer: e.richTextSerializer,
            ...a
          });
        },
        asLink: (s, i) => _s(s, typeof i == "function" ? {
          linkResolver: i
        } : {
          linkResolver: e.linkResolver,
          ...i
        }),
        asLinkAttrs: (s, i) => jd(s, {
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
      install(s) {
        s.provide(Jd, this), s.config.globalProperties.$prismic = this, e.injectComponents !== false && (s.component(Go.name, Go), s.component(Fi.name, Fi), s.component(Ko.name, Ko), s.component(_c.name, _c), s.component(Sc.name, Sc), s.component(zo.name, zo), s.component(wc.name, wc));
      }
    };
  };
  T0 = void 0;
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
      n = T0;
      const r = t.environment || t.endpoint || (n == null ? void 0 : n.documentAPIEndpoint) || "", o = R0({
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
      if (e.vueApp.use(o), t.preview) {
        const s = nc("io.prismic.preview").value;
        if (s) try {
          const i = typeof s == "string" ? JSON.parse(decodeURIComponent(s)) : s;
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
      return t.toolbar && ((_a2 = o.client) == null ? void 0 : _a2.repositoryName) ? Zf({
        script: [
          {
            key: "prismic-preview",
            src: `https://static.cdn.prismic.io/prismic.min.js?repo=${o.client.repositoryName}&new=true`,
            async: true,
            defer: true,
            crossorigin: "anonymous"
          }
        ]
      }) : nc("io.prismic.preview").value = null, {
        provide: {
          prismic: o
        }
      };
    }
  });
  M0 = Ie(() => {
  });
  var kc = (e, t, n) => typeof e == "function" ? e(t, n) : e, kt = Symbol("loaders"), ei = Symbol("loaderEntries"), I0 = Symbol(), kn = Symbol(), Ec = Symbol(), So = Symbol(), ti = Symbol(), $0 = Symbol();
  function Rc(e) {
    return e && e[I0];
  }
  function Tc(e) {
    e && e.length;
  }
  var N0 = Object.assign, B0 = Symbol();
  function D0({ router: e, app: t, effect: n, isSSR: r, errors: o = [], selectNavigationResult: s = (i) => i[0].value }) {
    if (e[ei] != null) return () => {
    };
    e[ei] = /* @__PURE__ */ new WeakMap(), e[Ec] = t, e[$0] = !!r;
    const i = n.run(() => ut(false));
    t.provide(B0, i);
    const a = e.beforeEach((f) => {
      var _a2;
      e[kn] && ((_a2 = e[kn].meta[So]) == null ? void 0 : _a2.abort()), e[kn] = f, f.meta[kt] = /* @__PURE__ */ new Set(), f.meta[So] = new AbortController(), f.meta[ti] = [];
      const h = [];
      for (const d of f.matched) if (!d.meta[kt]) {
        d.meta[kt] = new Set(d.meta.loaders || []);
        for (const p in d.components) {
          const y = d.components[p], S = (j0(y) ? y() : Promise.resolve(y)).then((k) => {
            if (typeof k != "function") {
              for (const _ in k) {
                const m = k[_];
                Rc(m) && d.meta[kt].add(m);
              }
              if (Array.isArray(k.__loaders)) for (const _ of k.__loaders) Rc(_) && d.meta[kt].add(_);
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
        return !r && kc(S, f, h) ? void 0 : _.catch((m) => {
          if (!k) throw m;
          if (k === true) {
            if (Array.isArray(o) ? o.some((v) => m instanceof v) : o(m)) return;
          } else if (Array.isArray(k) ? k.some((v) => m instanceof v) : k(m)) return;
          throw m;
        });
      })).then(() => {
        if (f.meta[ti].length) return s(f.meta[ti]);
      }).catch((p) => p instanceof F0 ? p.value : Promise.reject(p)).finally(() => {
        Tc([]), i.value = false;
      });
    }), u = e.afterEach((f, h, d) => {
      var _a2;
      if (d) {
        if ((_a2 = f.meta[So]) == null ? void 0 : _a2.abort(d), Rt(d, 16)) for (const p of f.meta[kt]) p._.getEntry(e).resetPending();
      } else for (const p of f.meta[kt]) {
        const { commit: y, lazy: S } = p._.options;
        if (y === "after-load") {
          const k = p._.getEntry(e);
          k && (!kc(S, f, h) || !k.isLoading.value) && k.commit(f);
        }
      }
      e[kn] === f && (e[kn] = null);
    }), c = e.onError((f, h) => {
      var _a2;
      (_a2 = h.meta[So]) == null ? void 0 : _a2.abort(f), e[kn] === h && (e[kn] = null);
    });
    return () => {
      delete e[ei], delete e[Ec], a(), l(), u(), c();
    };
  }
  function j0(e) {
    return typeof e == "function" && !("displayName" in e) && !("props" in e) && !("emits" in e) && !("__vccOpts" in e);
  }
  var F0 = class {
    constructor(e) {
      this.value = e;
    }
  };
  function H0(e, t) {
    const n = Wr(true), r = D0(N0({
      app: e,
      effect: n
    }, t)), { unmount: o } = e;
    e.unmount = () => {
      n.stop(), r(), o.call(e);
    };
  }
  const U0 = Ie({
    name: "data-loaders",
    dependsOn: [
      "nuxt:router"
    ],
    setup(e) {
      e.vueApp.use(H0, {
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
    o_,
    s_,
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
      const n = t.renderKey, r = t.route, o = {};
      for (const s in t.route) Object.defineProperty(o, s, {
        get: () => n === t.renderKey ? t.route[s] : r[s],
        enumerable: true
      });
      return mn(Jr, Ht(o)), () => pe(t.vnode, {
        ref: t.vnodeRef
      });
    }
  }), W0 = Qd(), Cc = /* @__PURE__ */ new WeakMap(), q0 = he({
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
      const o = ye(), s = Ce(), i = Re(Jr, null);
      let a;
      r({
        pageRef: s
      });
      const l = Re(Bf, null);
      let u;
      const c = o.deferHydration();
      if (o.isHydrating) {
        const h = o.hooks.hookOnce("app:error", c);
        Ne().beforeEach(h);
      }
      e.pageKey && Qe(() => e.pageKey, (h, d) => {
        h !== d && o.callHook("page:loading:start");
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
          !o.isHydrating && a === y && !S && Mt(() => {
            f = true, o.callHook("page:loading:end");
          }), a = y;
          const k = !!(e.transition ?? h.route.meta.pageTransition ?? pl), _ = k && K0([
            e.transition,
            h.route.meta.pageTransition,
            pl,
            {
              onBeforeLeave() {
                o._runningTransition = true;
              },
              onAfterLeave() {
                delete o._runningTransition, o.callHook("page:transition:finish", h.Component);
              }
            }
          ]), m = e.keepalive ?? h.route.meta.keepalive ?? Mg;
          return u = Sd(k && _, Jb(m, pe(na, {
            suspensible: true,
            onPending: () => o.callHook("page:start", h.Component),
            onResolve: () => {
              Mt(() => o.callHook("page:finish", h.Component).then(() => {
                if (!f && !S) return f = true, o.callHook("page:loading:end");
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
                vnodeRef: s
              };
              if (!m) return pe(W0, v);
              const w = h.Component.type, A = w;
              let M = Cc.get(A);
              return M || (M = Qd(w.name || w.__name), Cc.set(A, M)), pe(M, v);
            }
          }))).default(), u;
        }
      });
    }
  });
  function K0(e) {
    const t = e.filter(Boolean).map((n) => ({
      ...n,
      onAfterLeave: n.onAfterLeave ? ga(n.onAfterLeave) : void 0
    }));
    return $f(...t);
  }
  function G0(e, t, n) {
    if (!e) return false;
    const r = t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    });
    return !r || r === -1 ? false : t.matched.slice(0, r).some((o, s) => {
      var _a2, _b2, _c2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) !== ((_c2 = (_b2 = e.matched[s]) == null ? void 0 : _b2.components) == null ? void 0 : _c2.default);
    }) || n && Bi({
      route: t,
      Component: n
    }) !== Bi({
      route: e,
      Component: n
    });
  }
  function z0(e, t, n) {
    return e ? t.matched.findIndex((o) => {
      var _a2;
      return ((_a2 = o.components) == null ? void 0 : _a2.default) === (n == null ? void 0 : n.type);
    }) < t.matched.length - 1 : false;
  }
  function J0(e, t) {
    const n = e(t);
    return n.length === 1 ? pe(n[0]) : pe(Se, void 0, n);
  }
  let Q0;
  Y0 = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, o] of t) n[r] = o;
    return n;
  };
  Q0 = {};
  function X0(e, t, n, r, o, s) {
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
      return () => pe(dn[e.name], e.layoutProps, t.slots);
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
      const n = ye(), r = Re(Jr), o = r === ms() ? ab() : r, s = Q(() => {
        let l = ie(e.name) ?? o.meta.layout ?? "default";
        return l && !(l in dn) && e.fallback && (l = ie(e.fallback)), l;
      }), i = Ce();
      t.expose({
        layoutRef: i
      });
      const a = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", a);
        Ne().beforeEach(l);
      }
      return () => {
        const l = s.value && s.value in dn, u = o.meta.layoutTransition ?? Og;
        return Sd(l && u, {
          default: () => pe(na, {
            suspensible: true,
            onResolve: () => {
              Mt(a);
            }
          }, {
            default: () => pe(rS, {
              layoutProps: zr(t.attrs, {
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
      return e.shouldProvide && mn(Bf, {
        isCurrent: (r) => n === (r.meta.layout ?? "default")
      }), () => {
        var _a2, _b2;
        return !n || typeof n == "string" && !(n in dn) ? (_b2 = (_a2 = t.slots).default) == null ? void 0 : _b2.call(_a2) : pe(eS, {
          key: n,
          layoutProps: e.layoutProps,
          name: n
        }, t.slots);
      };
    }
  });
  var oS = {};
  const sS = {
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
    "text-red-1100": "",
    "mt-4": "",
    "outline-red-600": ""
  }, uS = he({
    __name: "error",
    props: {
      error: {}
    },
    setup(e) {
      const t = e, n = Q(() => t.error.statusCode || 404), r = Q(() => {
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
      }), o = ms(), s = Ne(), i = Q(() => o.path.startsWith("/developer") || o.path.startsWith("/developers") || o.path.includes("/dev/") || o.path.includes("/docs/")), a = Q(() => t.error.message === "Article not found"), l = Q(() => o.path.startsWith("/blog") || a.value);
      vt(() => {
        if (i.value || oS.REDIRECT_ALL_ERRORS === "true") {
          const y = encodeURIComponent(o.fullPath);
          s.push(`/developers/error?original-path=${y}&status=${n.value}`);
        }
      });
      const u = Q(() => l.value ? "/blog" : "/"), c = Q(() => l.value ? "Browse all articles" : "Back to home"), f = () => jf({
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
      const h = Q(() => a.value ? "Article not found" : `${n.value} - ${r.value}`), d = Q(() => {
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
        return q(), oe(_, null, {
          default: $e(() => [
            nt("section", sS, [
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
                    "f-px-sm": "",
                    "f-mt-md": "",
                    "nq-label": ""
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
  }, Pc = {
    __name: "nuxt-root",
    setup(e) {
      const t = () => null, n = ye(), r = n.deferHydration();
      if (n.isHydrating) {
        const l = n.hooks.hookOnce("app:error", r);
        Ne().beforeEach(l);
      }
      const o = false;
      mn(Jr, ms()), n.hooks.callHookWith((l) => l.map((u) => u()), "vue:setup");
      const s = gs(), i = false;
      ku((l, u, c) => {
        if (n.hooks.callHook("vue:error", l, u, c).catch((f) => console.error("[nuxt] Error in `vue:error` hook", f)), Ff(l) && (l.fatal || l.unhandled)) return n.runWithContext(() => Rn(l)), false;
      });
      const a = false;
      return (l, u) => (q(), oe(na, {
        onResolve: ie(r)
      }, {
        default: $e(() => [
          ie(i) ? (q(), de("div", fS)) : ie(s) ? (q(), oe(ie(uS), {
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
          })) : (q(), oe(ie(Z0), {
            key: 4
          }))
        ]),
        _: 1
      }, 8, [
        "onResolve"
      ]));
    }
  };
  let Ac;
  {
    let e;
    Ac = async function() {
      var _a2, _b2;
      if (e) return e;
      const n = !!(((_a2 = window.__NUXT__) == null ? void 0 : _a2.serverRendered) ?? ((_b2 = document.getElementById("__NUXT_DATA__")) == null ? void 0 : _b2.dataset.ssr) === "true"), r = n ? Tm(Pc) : Rm(Pc), o = jg({
        vueApp: r
      });
      async function s(i) {
        var _a3;
        await o.callHook("app:error", i), (_a3 = o.payload).error || (_a3.error = gn(i));
      }
      r.config.errorHandler = s, o.hook("app:suspense:resolve", () => {
        r.config.errorHandler === s && (r.config.errorHandler = void 0);
      }), !n && ml.id && o.hook("app:suspense:resolve", () => {
        var _a3;
        (_a3 = document.getElementById(ml.id)) == null ? void 0 : _a3.remove();
      });
      try {
        await Ug(o, V0);
      } catch (i) {
        s(i);
      }
      try {
        await o.hooks.callHook("app:created", r), await o.hooks.callHook("app:beforeMount", r), r.mount(Ng), await o.hooks.callHook("app:mounted", r), await Mt();
      } catch (i) {
        s(i);
      }
      return r;
    }, e = Ac().catch((t) => {
      throw console.error("Error while mounting app:", t), t;
    });
  }
})();
export {
  xS as $,
  wc as A,
  Ce as B,
  Sc as C,
  Ko as D,
  vt as E,
  Se as F,
  ls as G,
  pe as H,
  Kn as I,
  $a as J,
  un as K,
  ye as L,
  Jt as M,
  yn as N,
  ut as O,
  Xf as P,
  xe as Q,
  Ic as R,
  Qu as S,
  Mh as T,
  Sp as U,
  OS as V,
  pS as W,
  Qe as X,
  Go as Y,
  yS as Z,
  Ni as _,
  __tla,
  me as a,
  SS as a$,
  Xe as a0,
  Mt as a1,
  Ln as a2,
  Qp as a3,
  Re as a4,
  mn as a5,
  vS as a6,
  Su as a7,
  Zh as a8,
  Xi as a9,
  jS as aA,
  rt as aB,
  RS as aC,
  $f as aD,
  IS as aE,
  $t as aF,
  ps as aG,
  oa as aH,
  Sf as aI,
  $S as aJ,
  Qm as aK,
  MS as aL,
  jm as aM,
  Fd as aN,
  pw as aO,
  qw as aP,
  ws as aQ,
  _s as aR,
  ba as aS,
  Aw as aT,
  ir as aU,
  nu as aV,
  ss as aW,
  is as aX,
  Wr as aY,
  dS as aZ,
  st as a_,
  Te as aa,
  bt as ab,
  US as ac,
  _b as ad,
  TS as ae,
  _S as af,
  kS as ag,
  Ne as ah,
  zo as ai,
  hS as aj,
  AS as ak,
  we as al,
  At as am,
  lr as an,
  cy as ao,
  BS as ap,
  HS as aq,
  ov as ar,
  It as as,
  Ge as at,
  kp as au,
  ES as av,
  Bp as aw,
  re as ax,
  Rm as ay,
  gS as az,
  oe as b,
  bS as b0,
  mS as b1,
  ks as b2,
  ab as b3,
  FS as b4,
  CS as b5,
  Xg as b6,
  $l as b7,
  NS as b8,
  Oc as b9,
  PS as ba,
  LS as bb,
  de as c,
  he as d,
  nt as e,
  Qt as f,
  ar as g,
  es as h,
  Y0 as i,
  Q as j,
  Zf as k,
  nS as l,
  zr as m,
  Vr as n,
  q as o,
  ms as p,
  bn as q,
  Qn as r,
  to as s,
  Dt as t,
  ie as u,
  wS as v,
  $e as w,
  gn as x,
  DS as y,
  VS as z
};
