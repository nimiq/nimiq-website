self.document = { currentScript: { src: self.location.href } };
(function() {
  "use strict";
  var _documentCurrentScript = typeof document !== "undefined" ? document.currentScript : null;
  (async () => {
    const G = Symbol("Comlink.proxy"), Z = Symbol("Comlink.endpoint"), ee = Symbol("Comlink.releaseProxy"), P = Symbol("Comlink.finalizer"), R = Symbol("Comlink.thrown"), $ = (e) => typeof e == "object" && e !== null || typeof e == "function", te = {
      canHandle: (e) => $(e) && e[G],
      serialize(e) {
        const { port1: t, port2: n } = new MessageChannel();
        return N(e, t), [
          n,
          [
            n
          ]
        ];
      },
      deserialize(e) {
        return e.start(), ce(e);
      }
    }, ne = {
      canHandle: (e) => $(e) && R in e,
      serialize({ value: e }) {
        let t;
        return e instanceof Error ? t = {
          isError: true,
          value: {
            message: e.message,
            name: e.name,
            stack: e.stack
          }
        } : t = {
          isError: false,
          value: e
        }, [
          t,
          []
        ];
      },
      deserialize(e) {
        throw e.isError ? Object.assign(new Error(e.value.message), e.value) : e.value;
      }
    }, v = /* @__PURE__ */ new Map([
      [
        "proxy",
        te
      ],
      [
        "throw",
        ne
      ]
    ]);
    function _e(e, t) {
      for (const n of e) if (t === n || n === "*" || n instanceof RegExp && n.test(t)) return true;
      return false;
    }
    function N(e, t = globalThis, n = [
      "*"
    ]) {
      t.addEventListener("message", function r(c) {
        if (!c || !c.data) return;
        if (!_e(n, c.origin)) {
          console.warn(`Invalid origin '${c.origin}' for comlink proxy`);
          return;
        }
        const { id: i, type: a, path: s } = Object.assign({
          path: []
        }, c.data), b = (c.data.argumentList || []).map(x);
        let u;
        try {
          const f = s.slice(0, -1).reduce((w, T) => w[T], e), y = s.reduce((w, T) => w[T], e);
          switch (a) {
            case "GET":
              u = y;
              break;
            case "SET":
              f[s.slice(-1)[0]] = x(c.data.value), u = true;
              break;
            case "APPLY":
              u = y.apply(f, b);
              break;
            case "CONSTRUCT":
              {
                const w = new y(...b);
                u = le(w);
              }
              break;
            case "ENDPOINT":
              {
                const { port1: w, port2: T } = new MessageChannel();
                N(e, T), u = se(w, [
                  w
                ]);
              }
              break;
            case "RELEASE":
              u = void 0;
              break;
            default:
              return;
          }
        } catch (f) {
          u = {
            value: f,
            [R]: 0
          };
        }
        Promise.resolve(u).catch((f) => ({
          value: f,
          [R]: 0
        })).then((f) => {
          const [y, w] = M(f);
          t.postMessage(Object.assign(Object.assign({}, y), {
            id: i
          }), w), a === "RELEASE" && (t.removeEventListener("message", r), J(t), P in e && typeof e[P] == "function" && e[P]());
        }).catch((f) => {
          const [y, w] = M({
            value: new TypeError("Unserializable return value"),
            [R]: 0
          });
          t.postMessage(Object.assign(Object.assign({}, y), {
            id: i
          }), w);
        });
      }), t.start && t.start();
    }
    function re(e) {
      return e.constructor.name === "MessagePort";
    }
    function J(e) {
      re(e) && e.close();
    }
    function ce(e, t) {
      const n = /* @__PURE__ */ new Map();
      return e.addEventListener("message", function(c) {
        const { data: i } = c;
        if (!i || !i.id) return;
        const a = n.get(i.id);
        if (a) try {
          a(i);
        } finally {
          n.delete(i.id);
        }
      }), W(e, n, [], t);
    }
    function E(e) {
      if (e) throw new Error("Proxy has been released and is not useable");
    }
    function Y(e) {
      return I(e, /* @__PURE__ */ new Map(), {
        type: "RELEASE"
      }).then(() => {
        J(e);
      });
    }
    const O = /* @__PURE__ */ new WeakMap(), F = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
      const t = (O.get(e) || 0) - 1;
      O.set(e, t), t === 0 && Y(e);
    });
    function oe(e, t) {
      const n = (O.get(t) || 0) + 1;
      O.set(t, n), F && F.register(e, t, e);
    }
    function ie(e) {
      F && F.unregister(e);
    }
    function W(e, t, n = [], r = function() {
    }) {
      let c = false;
      const i = new Proxy(r, {
        get(a, s) {
          if (E(c), s === ee) return () => {
            ie(i), Y(e), t.clear(), c = true;
          };
          if (s === "then") {
            if (n.length === 0) return {
              then: () => i
            };
            const b = I(e, t, {
              type: "GET",
              path: n.map((u) => u.toString())
            }).then(x);
            return b.then.bind(b);
          }
          return W(e, t, [
            ...n,
            s
          ]);
        },
        set(a, s, b) {
          E(c);
          const [u, f] = M(b);
          return I(e, t, {
            type: "SET",
            path: [
              ...n,
              s
            ].map((y) => y.toString()),
            value: u
          }, f).then(x);
        },
        apply(a, s, b) {
          E(c);
          const u = n[n.length - 1];
          if (u === Z) return I(e, t, {
            type: "ENDPOINT"
          }).then(x);
          if (u === "bind") return W(e, t, n.slice(0, -1));
          const [f, y] = q(b);
          return I(e, t, {
            type: "APPLY",
            path: n.map((w) => w.toString()),
            argumentList: f
          }, y).then(x);
        },
        construct(a, s) {
          E(c);
          const [b, u] = q(s);
          return I(e, t, {
            type: "CONSTRUCT",
            path: n.map((f) => f.toString()),
            argumentList: b
          }, u).then(x);
        }
      });
      return oe(i, e), i;
    }
    function ae(e) {
      return Array.prototype.concat.apply([], e);
    }
    function q(e) {
      const t = e.map(M);
      return [
        t.map((n) => n[0]),
        ae(t.map((n) => n[1]))
      ];
    }
    const Q = /* @__PURE__ */ new WeakMap();
    function se(e, t) {
      return Q.set(e, t), e;
    }
    function le(e) {
      return Object.assign(e, {
        [G]: true
      });
    }
    function M(e) {
      for (const [t, n] of v) if (n.canHandle(e)) {
        const [r, c] = n.serialize(e);
        return [
          {
            type: "HANDLER",
            name: t,
            value: r
          },
          c
        ];
      }
      return [
        {
          type: "RAW",
          value: e
        },
        Q.get(e) || []
      ];
    }
    function x(e) {
      switch (e.type) {
        case "HANDLER":
          return v.get(e.name).deserialize(e.value);
        case "RAW":
          return e.value;
      }
    }
    function I(e, t, n, r) {
      return new Promise((c) => {
        const i = de();
        t.set(i, c), e.start && e.start(), e.postMessage(Object.assign({
          id: i
        }, n), r);
      });
    }
    function de() {
      return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    }
    var be = "" + new URL("index_bg-B4WA5gac.wasm", _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" && _documentCurrentScript.src || new URL("_nuxt/worker-CdMuHAGg.js", document.baseURI).href).href, ue = async (e = {}, t) => {
      let n;
      if (t.startsWith("data:")) {
        const r = t.replace(/^data:.*?base64,/, "");
        let c;
        if (typeof Buffer == "function" && typeof Buffer.from == "function") c = Buffer.from(r, "base64");
        else if (typeof atob == "function") {
          const i = atob(r);
          c = new Uint8Array(i.length);
          for (let a = 0; a < i.length; a++) c[a] = i.charCodeAt(a);
        } else throw new Error("Cannot decode base64-encoded data URL");
        n = await WebAssembly.instantiate(c, e);
      } else {
        const r = await fetch(t), c = r.headers.get("Content-Type") || "";
        if ("instantiateStreaming" in WebAssembly && c.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(r, e);
        else {
          const i = await r.arrayBuffer();
          n = await WebAssembly.instantiate(i, e);
        }
      }
      return n.instance.exports;
    };
    let o;
    function fe(e) {
      o = e;
    }
    let m = 0, C = null;
    function S() {
      return (C === null || C.byteLength === 0) && (C = new Uint8Array(o.memory.buffer)), C;
    }
    const ge = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    let z = new ge("utf-8");
    const we = typeof z.encodeInto == "function" ? function(e, t) {
      return z.encodeInto(e, t);
    } : function(e, t) {
      const n = z.encode(e);
      return t.set(n), {
        read: e.length,
        written: n.length
      };
    };
    function k(e, t, n) {
      if (n === void 0) {
        const s = z.encode(e), b = t(s.length, 1) >>> 0;
        return S().subarray(b, b + s.length).set(s), m = s.length, b;
      }
      let r = e.length, c = t(r, 1) >>> 0;
      const i = S();
      let a = 0;
      for (; a < r; a++) {
        const s = e.charCodeAt(a);
        if (s > 127) break;
        i[c + a] = s;
      }
      if (a !== r) {
        a !== 0 && (e = e.slice(a)), c = n(c, r, r = a + e.length * 3, 1) >>> 0;
        const s = S().subarray(c + a, c + r), b = we(e, s);
        a += b.written, c = n(c, r, a, 1) >>> 0;
      }
      return m = a, c;
    }
    let B = null;
    function p() {
      return (B === null || B.buffer.detached === true || B.buffer.detached === void 0 && B.buffer !== o.memory.buffer) && (B = new DataView(o.memory.buffer)), B;
    }
    const pe = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let K = new pe("utf-8", {
      ignoreBOM: true,
      fatal: true
    });
    K.decode();
    function g(e, t) {
      return e = e >>> 0, K.decode(S().subarray(e, e + t));
    }
    function h(e) {
      const t = o.__externref_table_alloc();
      return o.__wbindgen_export_4.set(t, e), t;
    }
    function l(e, t) {
      try {
        return e.apply(this, t);
      } catch (n) {
        const r = h(n);
        o.__wbindgen_exn_store(r);
      }
    }
    function d(e) {
      return e == null;
    }
    function ye(e, t) {
      return e = e >>> 0, S().subarray(e / 1, e / 1 + t);
    }
    const L = typeof FinalizationRegistry > "u" ? {
      register: () => {
      },
      unregister: () => {
      }
    } : new FinalizationRegistry((e) => {
      o.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
    });
    function A(e, t, n, r) {
      const c = {
        a: e,
        b: t,
        cnt: 1,
        dtor: n
      }, i = (...a) => {
        c.cnt++;
        const s = c.a;
        c.a = 0;
        try {
          return r(s, c.b, ...a);
        } finally {
          --c.cnt === 0 ? (o.__wbindgen_export_5.get(c.dtor)(s, c.b), L.unregister(c)) : c.a = s;
        }
      };
      return i.original = c, L.register(i, c, c), i;
    }
    function me(e, t, n, r) {
      const c = {
        a: e,
        b: t,
        cnt: 1,
        dtor: n
      }, i = (...a) => {
        c.cnt++;
        try {
          return r(c.a, c.b, ...a);
        } finally {
          --c.cnt === 0 && (o.__wbindgen_export_5.get(c.dtor)(c.a, c.b), c.a = 0, L.unregister(c));
        }
      };
      return i.original = c, L.register(i, c, c), i;
    }
    function j(e) {
      const t = typeof e;
      if (t == "number" || t == "boolean" || e == null) return `${e}`;
      if (t == "string") return `"${e}"`;
      if (t == "symbol") {
        const c = e.description;
        return c == null ? "Symbol" : `Symbol(${c})`;
      }
      if (t == "function") {
        const c = e.name;
        return typeof c == "string" && c.length > 0 ? `Function(${c})` : "Function";
      }
      if (Array.isArray(e)) {
        const c = e.length;
        let i = "[";
        c > 0 && (i += j(e[0]));
        for (let a = 1; a < c; a++) i += ", " + j(e[a]);
        return i += "]", i;
      }
      const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
      let r;
      if (n && n.length > 1) r = n[1];
      else return toString.call(e);
      if (r == "Object") try {
        return "Object(" + JSON.stringify(e) + ")";
      } catch {
        return "Object";
      }
      return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
    }
    function he(e, t, n) {
      o.closure799_externref_shim(e, t, n);
    }
    function ke(e, t, n) {
      o.closure797_externref_shim(e, t, n);
    }
    function D(e, t, n) {
      o.closure1749_externref_shim(e, t, n);
    }
    function Ae(e, t) {
      o._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h97bc1038838b8ea4(e, t);
    }
    function xe(e, t) {
      o._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h010bb444ba003051(e, t);
    }
    function Be(e, t, n) {
      o.closure2389_externref_shim(e, t, n);
    }
    function Ie(e, t, n) {
      o.closure2722_externref_shim(e, t, n);
    }
    function Te(e, t, n, r) {
      o.closure2905_externref_shim(e, t, n, r);
    }
    const Se = [
      "blob",
      "arraybuffer"
    ], ve = [
      "readonly",
      "readwrite",
      "versionchange",
      "readwriteflush",
      "cleanup"
    ];
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_address_free(e >>> 0, 1));
    const V = typeof FinalizationRegistry > "u" ? {
      register: () => {
      },
      unregister: () => {
      }
    } : new FinalizationRegistry((e) => o.__wbg_client_free(e >>> 0, 1));
    class H {
      static __wrap(t) {
        t = t >>> 0;
        const n = Object.create(H.prototype);
        return n.__wbg_ptr = t, V.register(n, n.__wbg_ptr, n), n;
      }
      __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, V.unregister(this), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        o.__wbg_client_free(t, 0);
      }
      static create(t) {
        return o.client_create(t);
      }
      addConsensusChangedListener(t) {
        return o.client_addConsensusChangedListener(this.__wbg_ptr, t);
      }
      addHeadChangedListener(t) {
        return o.client_addHeadChangedListener(this.__wbg_ptr, t);
      }
      addPeerChangedListener(t) {
        return o.client_addPeerChangedListener(this.__wbg_ptr, t);
      }
      addTransactionListener(t, n) {
        return o.client_addTransactionListener(this.__wbg_ptr, t, n);
      }
      removeListener(t) {
        return o.client_removeListener(this.__wbg_ptr, t);
      }
      getNetworkId() {
        return o.client_getNetworkId(this.__wbg_ptr);
      }
      isConsensusEstablished() {
        return o.client_isConsensusEstablished(this.__wbg_ptr);
      }
      waitForConsensusEstablished() {
        return o.client_waitForConsensusEstablished(this.__wbg_ptr);
      }
      getHeadHash() {
        return o.client_getHeadHash(this.__wbg_ptr);
      }
      getHeadHeight() {
        return o.client_getHeadHeight(this.__wbg_ptr);
      }
      getHeadBlock() {
        return o.client_getHeadBlock(this.__wbg_ptr);
      }
      getAddressBook() {
        return o.client_getAddressBook(this.__wbg_ptr);
      }
      getBlock(t) {
        const n = k(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = m;
        return o.client_getBlock(this.__wbg_ptr, n, r);
      }
      getBlockAt(t) {
        return o.client_getBlockAt(this.__wbg_ptr, t);
      }
      getAccount(t) {
        return o.client_getAccount(this.__wbg_ptr, t);
      }
      getAccounts(t) {
        return o.client_getAccounts(this.__wbg_ptr, t);
      }
      getStaker(t) {
        return o.client_getStaker(this.__wbg_ptr, t);
      }
      getStakers(t) {
        return o.client_getStakers(this.__wbg_ptr, t);
      }
      getValidator(t) {
        return o.client_getValidator(this.__wbg_ptr, t);
      }
      getValidators(t) {
        return o.client_getValidators(this.__wbg_ptr, t);
      }
      sendTransaction(t) {
        return o.client_sendTransaction(this.__wbg_ptr, t);
      }
      getTransaction(t) {
        const n = k(t, o.__wbindgen_malloc, o.__wbindgen_realloc), r = m;
        return o.client_getTransaction(this.__wbg_ptr, n, r);
      }
      getTransactionReceiptsByAddress(t, n, r, c) {
        var i = d(r) ? 0 : k(r, o.__wbindgen_malloc, o.__wbindgen_realloc), a = m;
        return o.client_getTransactionReceiptsByAddress(this.__wbg_ptr, t, d(n) ? 16777215 : n, i, a, d(c) ? 4294967297 : c >>> 0);
      }
      getTransactionsByAddress(t, n, r, c, i, a) {
        var s = d(c) ? 0 : k(c, o.__wbindgen_malloc, o.__wbindgen_realloc), b = m;
        return o.client_getTransactionsByAddress(this.__wbg_ptr, t, d(n) ? 4294967297 : n >>> 0, d(r) ? 0 : h(r), s, b, d(i) ? 16777215 : i, d(a) ? 4294967297 : a >>> 0);
      }
      disconnectNetwork() {
        return o.client_disconnectNetwork(this.__wbg_ptr);
      }
      connectNetwork() {
        return o.client_connectNetwork(this.__wbg_ptr);
      }
    }
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_clientconfiguration_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_hashedtimelockedcontract_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_policy_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_signatureproof_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_stakingcontract_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_transaction_free(e >>> 0, 1));
    typeof FinalizationRegistry > "u" || new FinalizationRegistry((e) => o.__wbg_vestingcontract_free(e >>> 0, 1));
    function Ee(e, t) {
      const n = String(t), r = k(n, o.__wbindgen_malloc, o.__wbindgen_realloc), c = m;
      p().setInt32(e + 4 * 1, c, true), p().setInt32(e + 4 * 0, r, true);
    }
    function Ce(e) {
      return e.WorkerGlobalScope;
    }
    function Re() {
      return l(function(e, t, n, r) {
        e.addEventListener(g(t, n), r);
      }, arguments);
    }
    function ze() {
      return l(function(e, t, n) {
        return e.apply(t, n);
      }, arguments);
    }
    function Oe(e) {
      return e.buffer;
    }
    function Fe(e) {
      return e.bufferedAmount;
    }
    function Me() {
      return l(function(e, t) {
        return e.call(t);
      }, arguments);
    }
    function Le() {
      return l(function(e, t, n) {
        return e.call(t, n);
      }, arguments);
    }
    function He(e, t) {
      e.clearInterval(t);
    }
    function Pe(e) {
      return clearInterval(e);
    }
    function We(e, t) {
      e.clearInterval(t);
    }
    function je(e) {
      return clearTimeout(e);
    }
    function Ne(e) {
      return clearTimeout(e);
    }
    function De(e) {
      return H.__wrap(e);
    }
    function qe(e) {
      e.close();
    }
    function Ve() {
      return l(function(e, t, n, r) {
        e.close(t, g(n, r));
      }, arguments);
    }
    function Ue() {
      return l(function(e, t, n, r, c) {
        return e.createIndex(g(t, n), r, c);
      }, arguments);
    }
    function Ge() {
      return l(function(e, t, n, r) {
        return e.createObjectStore(g(t, n), r);
      }, arguments);
    }
    function $e(e) {
      return e.crypto;
    }
    function Je(e) {
      return e.data;
    }
    function Ye(e) {
      console.debug(e);
    }
    function Qe(e, t, n, r) {
      console.debug(e, t, n, r);
    }
    function Ke() {
      return l(function(e, t, n) {
        e.deleteIndex(g(t, n));
      }, arguments);
    }
    function Xe() {
      return l(function(e, t, n) {
        e.deleteObjectStore(g(t, n));
      }, arguments);
    }
    function Ze(e) {
      return e.done;
    }
    function et(e) {
      return Object.entries(e);
    }
    function tt(e) {
      console.error(e);
    }
    function nt(e, t, n, r) {
      console.error(e, t, n, r);
    }
    function _t(e) {
      const t = e.error;
      return d(t) ? 0 : h(t);
    }
    function rt() {
      return l(function(e) {
        const t = e.error;
        return d(t) ? 0 : h(t);
      }, arguments);
    }
    function ct(e) {
      return Array.from(e);
    }
    function ot() {
      return l(function(e) {
        return e.getAll();
      }, arguments);
    }
    function it() {
      return l(function(e, t) {
        e.getRandomValues(t);
      }, arguments);
    }
    function at(e) {
      return e.getTime();
    }
    function st(e, t, n) {
      const r = t[n >>> 0];
      var c = d(r) ? 0 : k(r, o.__wbindgen_malloc, o.__wbindgen_realloc), i = m;
      p().setInt32(e + 4 * 1, i, true), p().setInt32(e + 4 * 0, c, true);
    }
    function lt() {
      return l(function(e, t) {
        return Reflect.get(e, t);
      }, arguments);
    }
    function dt(e, t) {
      return e[t >>> 0];
    }
    function bt(e, t) {
      return e[t];
    }
    function ut(e) {
      return e.indexNames;
    }
    function ft() {
      return l(function(e, t, n) {
        return e.index(g(t, n));
      }, arguments);
    }
    function gt(e, t, n, r) {
      console.info(e, t, n, r);
    }
    function wt(e) {
      console.info(e);
    }
    function pt(e) {
      let t;
      try {
        t = e instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    function yt(e) {
      let t;
      try {
        t = e instanceof IDBDatabase;
      } catch {
        t = false;
      }
      return t;
    }
    function mt(e) {
      let t;
      try {
        t = e instanceof IDBFactory;
      } catch {
        t = false;
      }
      return t;
    }
    function ht(e) {
      let t;
      try {
        t = e instanceof IDBOpenDBRequest;
      } catch {
        t = false;
      }
      return t;
    }
    function kt(e) {
      let t;
      try {
        t = e instanceof IDBRequest;
      } catch {
        t = false;
      }
      return t;
    }
    function At(e) {
      let t;
      try {
        t = e instanceof IDBTransaction;
      } catch {
        t = false;
      }
      return t;
    }
    function xt(e) {
      let t;
      try {
        t = e instanceof Map;
      } catch {
        t = false;
      }
      return t;
    }
    function Bt(e) {
      let t;
      try {
        t = e instanceof Uint8Array;
      } catch {
        t = false;
      }
      return t;
    }
    function It(e) {
      let t;
      try {
        t = e instanceof Window;
      } catch {
        t = false;
      }
      return t;
    }
    function Tt(e) {
      return Array.isArray(e);
    }
    function St(e) {
      return Number.isSafeInteger(e);
    }
    function vt(e, t) {
      return Object.is(e, t);
    }
    function Et() {
      return Symbol.iterator;
    }
    function Ct() {
      return l(function(e) {
        return e.keyPath;
      }, arguments);
    }
    function Rt(e) {
      return e.length;
    }
    function zt(e) {
      return e.length;
    }
    function Ot(e) {
      return e.length;
    }
    function Ft(e) {
      return e.msCrypto;
    }
    function Mt(e) {
      return e.multiEntry;
    }
    function Lt() {
      return /* @__PURE__ */ new Date();
    }
    function Ht(e, t) {
      try {
        var n = {
          a: e,
          b: t
        }, r = (i, a) => {
          const s = n.a;
          n.a = 0;
          try {
            return Te(s, n.b, i, a);
          } finally {
            n.a = s;
          }
        };
        return new Promise(r);
      } finally {
        n.a = n.b = 0;
      }
    }
    function Pt() {
      return new Object();
    }
    function Wt() {
      return new Array();
    }
    function jt() {
      return l(function(e, t) {
        return new WebSocket(g(e, t));
      }, arguments);
    }
    function Nt(e) {
      return new Uint8Array(e);
    }
    function Dt(e, t) {
      return new Function(g(e, t));
    }
    function qt(e, t, n) {
      return new Uint8Array(e, t >>> 0, n >>> 0);
    }
    function Vt(e) {
      return new Uint8Array(e >>> 0);
    }
    function Ut(e) {
      return e.next;
    }
    function Gt() {
      return l(function(e) {
        return e.next();
      }, arguments);
    }
    function $t(e) {
      return e.node;
    }
    function Jt(e) {
      return e.now();
    }
    function Yt() {
      return Date.now();
    }
    function Qt(e) {
      return e.now();
    }
    function Kt(e) {
      return e.objectStoreNames;
    }
    function Xt() {
      return l(function(e, t, n) {
        return e.objectStore(g(t, n));
      }, arguments);
    }
    function Zt() {
      return l(function(e, t, n) {
        return e.open(g(t, n));
      }, arguments);
    }
    function en() {
      return l(function(e, t, n, r) {
        return e.open(g(t, n), r >>> 0);
      }, arguments);
    }
    function tn(e) {
      return e.performance;
    }
    function nn(e) {
      return e.process;
    }
    function _n(e, t) {
      return e.push(t);
    }
    function rn() {
      return l(function(e, t) {
        return e.put(t);
      }, arguments);
    }
    function cn(e) {
      queueMicrotask(e);
    }
    function on(e) {
      return e.queueMicrotask;
    }
    function an() {
      return l(function(e, t) {
        e.randomFillSync(t);
      }, arguments);
    }
    function sn(e) {
      return e.readyState;
    }
    function ln() {
      return l(function() {
        return module.require;
      }, arguments);
    }
    function dn(e) {
      return Promise.resolve(e);
    }
    function bn() {
      return l(function(e) {
        return e.result;
      }, arguments);
    }
    function un() {
      return l(function(e, t, n) {
        e.send(ye(t, n));
      }, arguments);
    }
    function fn() {
      return l(function(e, t, n, r) {
        return e.setInterval(t, n, ...r);
      }, arguments);
    }
    function gn() {
      return l(function(e, t, n, r) {
        return e.setInterval(t, n, ...r);
      }, arguments);
    }
    function wn() {
      return l(function(e, t) {
        return setInterval(e, t);
      }, arguments);
    }
    function pn() {
      return l(function(e, t) {
        return setTimeout(e, t);
      }, arguments);
    }
    function yn() {
      return l(function(e, t) {
        return setTimeout(e, t);
      }, arguments);
    }
    function mn(e, t, n) {
      e[t >>> 0] = n;
    }
    function hn(e, t, n) {
      e[t] = n;
    }
    function kn(e, t, n) {
      e.set(t, n >>> 0);
    }
    function An(e, t) {
      e.autoIncrement = t !== 0;
    }
    function xn(e, t) {
      e.binaryType = Se[t];
    }
    function Bn(e, t) {
      e.keyPath = t;
    }
    function In(e, t) {
      e.multiEntry = t !== 0;
    }
    function Tn(e, t) {
      e.onabort = t;
    }
    function Sn(e, t) {
      e.onclose = t;
    }
    function vn(e, t) {
      e.oncomplete = t;
    }
    function En(e, t) {
      e.onerror = t;
    }
    function Cn(e, t) {
      e.onerror = t;
    }
    function Rn(e, t) {
      e.onerror = t;
    }
    function zn(e, t) {
      e.onmessage = t;
    }
    function On(e, t) {
      e.onopen = t;
    }
    function Fn(e, t) {
      e.onsuccess = t;
    }
    function Mn(e, t) {
      e.onupgradeneeded = t;
    }
    function Ln(e, t) {
      e.onversionchange = t;
    }
    function Hn(e, t) {
      e.unique = t !== 0;
    }
    function Pn() {
      const e = typeof global > "u" ? null : global;
      return d(e) ? 0 : h(e);
    }
    function Wn() {
      const e = typeof globalThis > "u" ? null : globalThis;
      return d(e) ? 0 : h(e);
    }
    function jn() {
      const e = typeof self > "u" ? null : self;
      return d(e) ? 0 : h(e);
    }
    function Nn() {
      const e = typeof window > "u" ? null : window;
      return d(e) ? 0 : h(e);
    }
    function Dn(e, t, n) {
      return e.subarray(t >>> 0, n >>> 0);
    }
    function qn(e) {
      const t = e.target;
      return d(t) ? 0 : h(t);
    }
    function Vn(e, t) {
      return e.then(t);
    }
    function Un(e) {
      return e.toString();
    }
    function Gn() {
      return l(function(e, t, n) {
        return e.transaction(t, ve[n]);
      }, arguments);
    }
    function $n(e) {
      const t = e.transaction;
      return d(t) ? 0 : h(t);
    }
    function Jn(e) {
      return e.unique;
    }
    function Yn(e) {
      return e.value;
    }
    function Qn(e) {
      return e.versions;
    }
    function Kn(e) {
      console.warn(e);
    }
    function Xn(e, t, n, r) {
      console.warn(e, t, n, r);
    }
    function Zn(e) {
      return +e;
    }
    function e_(e) {
      return e;
    }
    function t_(e) {
      return BigInt.asUintN(64, e);
    }
    function n_(e, t) {
      const n = t, r = typeof n == "bigint" ? n : void 0;
      p().setBigInt64(e + 8 * 1, d(r) ? BigInt(0) : r, true), p().setInt32(e + 4 * 0, !d(r), true);
    }
    function __(e) {
      const t = e;
      return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    function r_(e) {
      const t = e.original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    function c_(e, t, n) {
      return A(e, t, 2267, Ae);
    }
    function o_(e, t, n) {
      return A(e, t, 2300, xe);
    }
    function i_(e, t, n) {
      return A(e, t, 2390, Be);
    }
    function a_(e, t, n) {
      return A(e, t, 2723, Ie);
    }
    function s_(e, t, n) {
      return A(e, t, 798, he);
    }
    function l_(e, t, n) {
      return me(e, t, 798, ke);
    }
    function d_(e, t, n) {
      return A(e, t, 1750, D);
    }
    function b_(e, t, n) {
      return A(e, t, 1750, D);
    }
    function u_(e, t, n) {
      return A(e, t, 1750, D);
    }
    function f_(e, t) {
      const n = j(t), r = k(n, o.__wbindgen_malloc, o.__wbindgen_realloc), c = m;
      p().setInt32(e + 4 * 1, c, true), p().setInt32(e + 4 * 0, r, true);
    }
    function g_(e, t) {
      return new Error(g(e, t));
    }
    function w_(e, t) {
      return e in t;
    }
    function p_() {
      const e = o.__wbindgen_export_4, t = e.grow(4);
      e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
    }
    function y_(e) {
      return typeof e == "bigint";
    }
    function m_(e) {
      return typeof e == "function";
    }
    function h_(e) {
      return e === null;
    }
    function k_(e) {
      const t = e;
      return typeof t == "object" && t !== null;
    }
    function A_(e) {
      return typeof e == "string";
    }
    function x_(e) {
      return e === void 0;
    }
    function B_(e, t) {
      return e === t;
    }
    function I_(e, t) {
      return e == t;
    }
    function T_() {
      return o.memory;
    }
    function S_(e, t) {
      const n = t, r = typeof n == "number" ? n : void 0;
      p().setFloat64(e + 8 * 1, d(r) ? 0 : r, true), p().setInt32(e + 4 * 0, !d(r), true);
    }
    function v_(e) {
      return e;
    }
    function E_(e, t) {
      const n = t, r = typeof n == "string" ? n : void 0;
      var c = d(r) ? 0 : k(r, o.__wbindgen_malloc, o.__wbindgen_realloc), i = m;
      p().setInt32(e + 4 * 1, i, true), p().setInt32(e + 4 * 0, c, true);
    }
    function C_(e, t) {
      return g(e, t);
    }
    function R_(e, t) {
      throw new Error(g(e, t));
    }
    URL = globalThis.URL;
    const _ = await ue({
      "./index_bg.js": {
        __wbindgen_is_function: m_,
        __wbindgen_error_new: g_,
        __wbindgen_number_new: v_,
        __wbindgen_is_undefined: x_,
        __wbindgen_in: w_,
        __wbindgen_boolean_get: __,
        __wbindgen_is_bigint: y_,
        __wbindgen_number_get: S_,
        __wbindgen_bigint_from_i64: e_,
        __wbindgen_jsval_eq: B_,
        __wbindgen_string_get: E_,
        __wbindgen_is_object: k_,
        __wbindgen_bigint_from_u64: t_,
        __wbindgen_is_string: A_,
        __wbg_client_new: De,
        __wbg_addEventListener_4453b0c08b8d9e6a: Re,
        __wbindgen_string_new: C_,
        __wbindgen_jsval_loose_eq: I_,
        __wbindgen_as_number: Zn,
        __wbg_String_8f0eb39a4a4c2f66: Ee,
        __wbg_getwithrefkey_1dc361bd10053bfe: bt,
        __wbg_set_3f1d0b984ed272ed: hn,
        __wbindgen_cb_drop: r_,
        __wbg_WorkerGlobalScope_68dbbc2404209578: Ce,
        __wbg_clearTimeout_96804de0ab838f26: Ne,
        __wbg_setTimeout_eefe7f4c234b0c6b: yn,
        __wbg_performance_7a3ffd0b17f663ad: tn,
        __wbg_now_2c95c9de01293173: Jt,
        __wbg_clearTimeout_5a54f8841c30079a: je,
        __wbg_clearInterval_dd1e598f425db353: Pe,
        __wbg_setTimeout_db2dbaeefb6f39c7: pn,
        __wbg_setInterval_ed3b5e3c3ebb8a6d: wn,
        __wbindgen_is_null: h_,
        __wbg_instanceof_Window_def73ea0955fc569: It,
        __wbg_clearInterval_ad2594253cc39c4b: He,
        __wbg_setInterval_83d54331ceeda644: fn,
        __wbg_debug_3cb59063b29f58c1: Ye,
        __wbg_debug_e17b51583ca6a632: Qe,
        __wbg_error_524f506f44df1645: tt,
        __wbg_error_80de38b3f7cc3c3c: nt,
        __wbg_info_3daf2e093e091b66: wt,
        __wbg_info_033d8b8a0838f1d3: gt,
        __wbg_warn_4ca3906c248c47c4: Kn,
        __wbg_warn_aaf1f4664a035bd6: Xn,
        __wbg_clearInterval_eba67734fd13a7f1: We,
        __wbg_setInterval_d4f8bdcc1d5b1da9: gn,
        __wbg_instanceof_IdbDatabase_a3ef009ca00059f9: yt,
        __wbg_objectStoreNames_9bb1ab04a7012aaf: Kt,
        __wbg_setonversionchange_6ee07fa49ee1e3a5: Ln,
        __wbg_close_26fc2e6856d8567a: qe,
        __wbg_createObjectStore_d2f9e1016f4d81b9: Ge,
        __wbg_deleteObjectStore_3f08ae00cd288224: Xe,
        __wbg_transaction_d6d07c3c9963c49e: Gn,
        __wbg_data_432d9c3df2630942: Je,
        __wbg_readyState_7ef6e63c349899ed: sn,
        __wbg_bufferedAmount_a482960ac51b25e8: Fe,
        __wbg_setonopen_2da654e1f39745d5: On,
        __wbg_setonerror_8639efe354b947cd: En,
        __wbg_setonclose_14fc475a49d488fc: Sn,
        __wbg_setonmessage_6eccab530a8fb4c7: zn,
        __wbg_setbinaryType_92fa1ffd873b327c: xn,
        __wbg_new_92c54fc74574ef55: jt,
        __wbg_close_e1253d480ed93ce3: Ve,
        __wbg_send_fc0c204e8a1757f4: un,
        __wbg_setmultientry_4c4eee871f29837a: In,
        __wbg_setunique_dd24c422aa05df89: Hn,
        __wbg_setautoincrement_8b4327709e9ee7d9: An,
        __wbg_setkeypath_691179e313c26ae1: Bn,
        __wbg_target_0a62d9d79a2a1ede: qn,
        __wbg_instanceof_IdbOpenDbRequest_a3416e156c9db893: ht,
        __wbg_setonupgradeneeded_fcf7ce4f2eb0cb5f: Mn,
        __wbg_now_d18023d54d4e5500: Qt,
        __wbg_length_52b6c4580c5ec934: Rt,
        __wbg_get_4f73335ab78445db: st,
        __wbg_instanceof_IdbFactory_12eaba3366f4302f: mt,
        __wbg_open_88b1390d99a7c691: Zt,
        __wbg_open_e0c0b2993eb596e1: en,
        __wbg_indexNames_0ed82a19d7d88aa3: ut,
        __wbg_createIndex_873ac48adc772309: Ue,
        __wbg_deleteIndex_e6717aa0e9691894: Ke,
        __wbg_getAll_1de5635a99f2dae8: ot,
        __wbg_index_e00ca5fff206ee3e: ft,
        __wbg_put_9ef5363941008835: rn,
        __wbg_instanceof_IdbRequest_4813c3f207666aa4: kt,
        __wbg_result_f29afabdf2c05826: bn,
        __wbg_error_ff4ddaabdfc5dbb3: rt,
        __wbg_transaction_e713aa7b07ccaedd: $n,
        __wbg_setonsuccess_afa464ee777a396d: Fn,
        __wbg_setonerror_d7e3056cc6e56085: Rn,
        __wbg_instanceof_IdbTransaction_746ea660d347650d: At,
        __wbg_error_e9332df4e7a14612: _t,
        __wbg_setonabort_3bf4db6614fa98e9: Tn,
        __wbg_setoncomplete_4d19df0dadb7c4d4: vn,
        __wbg_setonerror_b0d9d723b8fddbbb: Cn,
        __wbg_objectStore_21878d46d25b64b6: Xt,
        __wbg_keyPath_443ecf3f74202169: Ct,
        __wbg_multiEntry_c146ebd38a5de9ea: Mt,
        __wbg_unique_23ddfed89bddb31d: Jn,
        __wbg_queueMicrotask_97d92b4fcc8a61c5: cn,
        __wbg_queueMicrotask_d3219def82552485: on,
        __wbg_crypto_ed58b8e10a292839: $e,
        __wbg_process_5c1d670bc53614b8: nn,
        __wbg_versions_c71aa1626a93e0a1: Qn,
        __wbg_node_02999533c4ea02e3: $t,
        __wbg_require_79b1e9274cde3c87: ln,
        __wbg_msCrypto_0a36e2ec3a343d26: Ft,
        __wbg_randomFillSync_ab2cfe79ebbf2740: an,
        __wbg_getRandomValues_bcb4912f16000dc4: it,
        __wbg_get_b9b93047fe3cf45b: dt,
        __wbg_length_e2d2a49132c1b256: Ot,
        __wbg_new_78feb108b6472713: Wt,
        __wbg_newnoargs_105ed471475aaf50: Dt,
        __wbg_next_25feadfc0913fea9: Ut,
        __wbg_next_6574e1a8a62d1055: Gt,
        __wbg_done_769e5ede4b31c67b: Ze,
        __wbg_value_cd1ffa7b1ab794f1: Yn,
        __wbg_iterator_9a24c88df860dc65: Et,
        __wbg_get_67b2ba62fc30de12: lt,
        __wbg_call_672a4d21634d4a24: Me,
        __wbg_new_405e22f390576ce2: Pt,
        __wbg_set_37837023f3d740e8: mn,
        __wbg_from_2a5d3e218e67aa85: ct,
        __wbg_isArray_a1eab7e0d067391b: Tt,
        __wbg_push_737cfc8c1432c2c6: _n,
        __wbg_instanceof_ArrayBuffer_e14585432e3737fc: pt,
        __wbg_apply_36be6a55257c99bf: ze,
        __wbg_call_7cccdd69e0791ae2: Le,
        __wbg_instanceof_Map_f3469ce2244d2430: xt,
        __wbg_isSafeInteger_343e2beeeece1bb0: St,
        __wbg_getTime_46267b1c24877e30: at,
        __wbg_new0_f788a2397c7ca929: Lt,
        __wbg_now_807e54c39636c349: Yt,
        __wbg_entries_3265d4158b33e5dc: et,
        __wbg_is_c7481c65e7e5df9e: vt,
        __wbg_toString_5285597960676b7b: Un,
        __wbg_new_23a2665fac83c611: Ht,
        __wbg_resolve_4851785c9c5f573d: dn,
        __wbg_then_44b73946d2fb3e7d: Vn,
        __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: Wn,
        __wbg_static_accessor_SELF_37c5d418e4bf5819: jn,
        __wbg_static_accessor_WINDOW_5de37043a91a9c40: Nn,
        __wbg_static_accessor_GLOBAL_88a902d13a557d07: Pn,
        __wbg_buffer_609cc3eee51ed158: Oe,
        __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: qt,
        __wbg_new_a12002a7f91c75be: Nt,
        __wbg_set_65595bdd868b3009: kn,
        __wbg_length_a446193dc22c12f8: zt,
        __wbg_instanceof_Uint8Array_17156bcf118086a9: Bt,
        __wbg_newwithlength_a381634e90c276d4: Vt,
        __wbg_subarray_aa9065fa9dc5df96: Dn,
        __wbindgen_bigint_get_as_i64: n_,
        __wbindgen_debug_string: f_,
        __wbindgen_throw: R_,
        __wbindgen_memory: T_,
        __wbindgen_closure_wrapper3166: s_,
        __wbindgen_closure_wrapper3168: l_,
        __wbindgen_closure_wrapper7790: d_,
        __wbindgen_closure_wrapper7792: b_,
        __wbindgen_closure_wrapper7795: u_,
        __wbindgen_closure_wrapper10008: c_,
        __wbindgen_closure_wrapper10169: o_,
        __wbindgen_closure_wrapper10809: i_,
        __wbindgen_closure_wrapper13686: a_,
        __wbindgen_init_externref_table: p_
      }
    }, be), z_ = _.memory, O_ = _.__wbg_client_free, F_ = _.client_create, M_ = _.client_addConsensusChangedListener, L_ = _.client_addHeadChangedListener, H_ = _.client_addPeerChangedListener, P_ = _.client_addTransactionListener, W_ = _.client_removeListener, j_ = _.client_getNetworkId, N_ = _.client_isConsensusEstablished, D_ = _.client_waitForConsensusEstablished, q_ = _.client_getHeadHash, V_ = _.client_getHeadHeight, U_ = _.client_getHeadBlock, G_ = _.client_getAddressBook, $_ = _.client_getBlock, J_ = _.client_getBlockAt, Y_ = _.client_getAccount, Q_ = _.client_getAccounts, K_ = _.client_getStaker, X_ = _.client_getStakers, Z_ = _.client_getValidator, er = _.client_getValidators, tr = _.client_sendTransaction, nr = _.client_getTransaction, _r = _.client_getTransactionReceiptsByAddress, rr = _.client_getTransactionsByAddress, cr = _.client_disconnectNetwork, or = _.client_connectNetwork, ir = _.__wbg_address_free, ar = _.address_new, sr = _.address_deserialize, lr = _.address_fromAny, dr = _.address_fromString, br = _.address_toPlain, ur = _.__wbg_transaction_free, fr = _.transaction_new, gr = _.transaction_hash, wr = _.transaction_verify, pr = _.transaction_isValidAt, yr = _.transaction_getContractCreationAddress, mr = _.transaction_serializeContent, hr = _.transaction_serialize, kr = _.transaction_format, Ar = _.transaction_sender, xr = _.transaction_senderType, Br = _.transaction_recipient, Ir = _.transaction_recipientType, Tr = _.transaction_value, Sr = _.transaction_fee, vr = _.transaction_feePerByte, Er = _.transaction_validityStartHeight, Cr = _.transaction_networkId, Rr = _.transaction_flags, zr = _.transaction_data, Or = _.transaction_set_data, Fr = _.transaction_senderData, Mr = _.transaction_proof, Lr = _.transaction_set_proof, Hr = _.transaction_serializedSize, Pr = _.transaction_toHex, Wr = _.transaction_toPlain, jr = _.transaction_deserialize, Nr = _.transaction_fromAny, Dr = _.transaction_fromPlain, qr = _.__wbg_clientconfiguration_free, Vr = _.__wbg_hashedtimelockedcontract_free, Ur = _.__wbg_signatureproof_free, Gr = _.signatureproof_deserialize, $r = _.__wbg_stakingcontract_free, Jr = _.__wbg_vestingcontract_free, Yr = _.__wbg_policy_free, Qr = _.policy_transaction_validity_window, Kr = _.policy_transaction_validity_window_blocks, Xr = _.policy_batches_per_epoch, Zr = _.policy_blocks_per_batch, ec = _.policy_blocks_per_epoch, tc = _.policy_genesis_block_number, nc = _.policy_state_chunks_max_size, _c = _.policy_epochAt, rc = _.policy_epochIndexAt, cc = _.policy_batchAt, oc = _.policy_batchIndexAt, ic = _.policy_electionBlockAfter, ac = _.policy_electionBlockBefore, sc = _.policy_lastElectionBlock, lc = _.policy_isElectionBlockAt, dc = _.policy_macroBlockAfter, bc = _.policy_macroBlockBefore, uc = _.policy_lastMacroBlock, fc = _.policy_isMacroBlockAt, gc = _.policy_isMicroBlockAt, wc = _.policy_firstBlockOf, pc = _.policy_firstBlockOfBatch, yc = _.policy_electionBlockOf, mc = _.policy_macroBlockOf, hc = _.policy_firstBatchOfEpoch, kc = _.policy_lastBlockOfReportingWindow, Ac = _.policy_blockAfterReportingWindow, xc = _.policy_blockAfterJail, Bc = _.policy_supplyAt, Ic = _.policy_batchDelayPenalty, Tc = _.policy_wasm_staking_contract_address, Sc = _.policy_wasm_coinbase_address, vc = _.policy_wasm_max_size_micro_body, Ec = _.policy_wasm_slots, Cc = _.policy_wasm_two_f_plus_one, Rc = _.policy_wasm_f_plus_one, zc = _.policy_wasm_min_block_producer_timeout, Oc = _.policy_wasm_block_separation_time, Fc = _.policy_wasm_min_epochs_stored, Mc = _.policy_wasm_timestamp_max_drift, Lc = _.policy_wasm_minimum_rewards_percentage, Hc = _.policy_wasm_validator_deposit, Pc = _.policy_wasm_jail_epochs, Wc = _.policy_wasm_total_supply, jc = _.policy_wasm_bls_cache_max_capacity, Nc = _.policy_wasm_history_chunks_max_size, Dc = _.policy_wasm_version, qc = _.__wbindgen_malloc, Vc = _.__wbindgen_realloc, Uc = _.__wbindgen_exn_store, Gc = _.__externref_table_alloc, $c = _.__wbindgen_export_4, Jc = _.__wbindgen_export_5, Yc = _.__externref_table_dealloc, Qc = _.__wbindgen_free, Kc = _.closure799_externref_shim, Xc = _.closure797_externref_shim, Zc = _.closure1749_externref_shim, eo = _._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h97bc1038838b8ea4, to = _._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h010bb444ba003051, no = _.closure2389_externref_shim, _o = _.closure2722_externref_shim, ro = _.closure2905_externref_shim, X = _.__wbindgen_start;
    var co = Object.freeze({
      __proto__: null,
      __externref_table_alloc: Gc,
      __externref_table_dealloc: Yc,
      __wbg_address_free: ir,
      __wbg_client_free: O_,
      __wbg_clientconfiguration_free: qr,
      __wbg_hashedtimelockedcontract_free: Vr,
      __wbg_policy_free: Yr,
      __wbg_signatureproof_free: Ur,
      __wbg_stakingcontract_free: $r,
      __wbg_transaction_free: ur,
      __wbg_vestingcontract_free: Jr,
      __wbindgen_exn_store: Uc,
      __wbindgen_export_4: $c,
      __wbindgen_export_5: Jc,
      __wbindgen_free: Qc,
      __wbindgen_malloc: qc,
      __wbindgen_realloc: Vc,
      __wbindgen_start: X,
      _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h010bb444ba003051: to,
      _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h97bc1038838b8ea4: eo,
      address_deserialize: sr,
      address_fromAny: lr,
      address_fromString: dr,
      address_new: ar,
      address_toPlain: br,
      client_addConsensusChangedListener: M_,
      client_addHeadChangedListener: L_,
      client_addPeerChangedListener: H_,
      client_addTransactionListener: P_,
      client_connectNetwork: or,
      client_create: F_,
      client_disconnectNetwork: cr,
      client_getAccount: Y_,
      client_getAccounts: Q_,
      client_getAddressBook: G_,
      client_getBlock: $_,
      client_getBlockAt: J_,
      client_getHeadBlock: U_,
      client_getHeadHash: q_,
      client_getHeadHeight: V_,
      client_getNetworkId: j_,
      client_getStaker: K_,
      client_getStakers: X_,
      client_getTransaction: nr,
      client_getTransactionReceiptsByAddress: _r,
      client_getTransactionsByAddress: rr,
      client_getValidator: Z_,
      client_getValidators: er,
      client_isConsensusEstablished: N_,
      client_removeListener: W_,
      client_sendTransaction: tr,
      client_waitForConsensusEstablished: D_,
      closure1749_externref_shim: Zc,
      closure2389_externref_shim: no,
      closure2722_externref_shim: _o,
      closure2905_externref_shim: ro,
      closure797_externref_shim: Xc,
      closure799_externref_shim: Kc,
      memory: z_,
      policy_batchAt: cc,
      policy_batchDelayPenalty: Ic,
      policy_batchIndexAt: oc,
      policy_batches_per_epoch: Xr,
      policy_blockAfterJail: xc,
      policy_blockAfterReportingWindow: Ac,
      policy_blocks_per_batch: Zr,
      policy_blocks_per_epoch: ec,
      policy_electionBlockAfter: ic,
      policy_electionBlockBefore: ac,
      policy_electionBlockOf: yc,
      policy_epochAt: _c,
      policy_epochIndexAt: rc,
      policy_firstBatchOfEpoch: hc,
      policy_firstBlockOf: wc,
      policy_firstBlockOfBatch: pc,
      policy_genesis_block_number: tc,
      policy_isElectionBlockAt: lc,
      policy_isMacroBlockAt: fc,
      policy_isMicroBlockAt: gc,
      policy_lastBlockOfReportingWindow: kc,
      policy_lastElectionBlock: sc,
      policy_lastMacroBlock: uc,
      policy_macroBlockAfter: dc,
      policy_macroBlockBefore: bc,
      policy_macroBlockOf: mc,
      policy_state_chunks_max_size: nc,
      policy_supplyAt: Bc,
      policy_transaction_validity_window: Qr,
      policy_transaction_validity_window_blocks: Kr,
      policy_wasm_block_separation_time: Oc,
      policy_wasm_bls_cache_max_capacity: jc,
      policy_wasm_coinbase_address: Sc,
      policy_wasm_f_plus_one: Rc,
      policy_wasm_history_chunks_max_size: Nc,
      policy_wasm_jail_epochs: Pc,
      policy_wasm_max_size_micro_body: vc,
      policy_wasm_min_block_producer_timeout: zc,
      policy_wasm_min_epochs_stored: Fc,
      policy_wasm_minimum_rewards_percentage: Lc,
      policy_wasm_slots: Ec,
      policy_wasm_staking_contract_address: Tc,
      policy_wasm_timestamp_max_drift: Mc,
      policy_wasm_total_supply: Wc,
      policy_wasm_two_f_plus_one: Cc,
      policy_wasm_validator_deposit: Hc,
      policy_wasm_version: Dc,
      signatureproof_deserialize: Gr,
      transaction_data: zr,
      transaction_deserialize: jr,
      transaction_fee: Sr,
      transaction_feePerByte: vr,
      transaction_flags: Rr,
      transaction_format: kr,
      transaction_fromAny: Nr,
      transaction_fromPlain: Dr,
      transaction_getContractCreationAddress: yr,
      transaction_hash: gr,
      transaction_isValidAt: pr,
      transaction_networkId: Cr,
      transaction_new: fr,
      transaction_proof: Mr,
      transaction_recipient: Br,
      transaction_recipientType: Ir,
      transaction_sender: Ar,
      transaction_senderData: Fr,
      transaction_senderType: xr,
      transaction_serialize: hr,
      transaction_serializeContent: mr,
      transaction_serializedSize: Hr,
      transaction_set_data: Or,
      transaction_set_proof: Lr,
      transaction_toHex: Pr,
      transaction_toPlain: Wr,
      transaction_validityStartHeight: Er,
      transaction_value: Tr,
      transaction_verify: wr
    });
    fe(co);
    X();
    v.set("function", {
      canHandle: (e) => false,
      deserialize(e) {
        return v.get("proxy").deserialize(e);
      }
    });
    v.set("plain", {
      canHandle: (e) => false,
      deserialize(e) {
        return e;
      }
    });
    let U = false;
    async function oo(e) {
      if (U) throw new Error("Already initialized");
      U = true, console.log("Initializing client WASM worker");
      const t = await H.create(e);
      N(t);
    }
    self.addEventListener("message", async (e) => {
      const t = e.data;
      if (t === "NIMIQ_CHECKREADY") {
        self.postMessage("NIMIQ_READY");
        return;
      }
      const { type: n, config: r } = t;
      if (n === "NIMIQ_INIT") {
        (!r || typeof r != "object") && (r = {});
        try {
          await oo(r), self.postMessage({
            ok: true
          });
        } catch (c) {
          self.postMessage({
            ok: false,
            error: c.message,
            stack: c.stack
          });
        }
      }
    });
    console.debug("Client WASM worker ready");
  })();
})();
