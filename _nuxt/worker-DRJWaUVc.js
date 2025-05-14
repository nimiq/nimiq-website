self.document = { currentScript: { src: self.location.href } };
(function() {
  "use strict";
  var _documentCurrentScript = typeof document !== "undefined" ? document.currentScript : null;
  (async () => {
    const G = Symbol("Comlink.proxy"), ee = Symbol("Comlink.endpoint"), te = Symbol("Comlink.releaseProxy"), P = Symbol("Comlink.finalizer"), R = Symbol("Comlink.thrown"), $ = (e) => typeof e == "object" && e !== null || typeof e == "function", ne = {
      canHandle: (e) => $(e) && e[G],
      serialize(e) {
        const { port1: t, port2: n } = new MessageChannel();
        return W(e, t), [
          n,
          [
            n
          ]
        ];
      },
      deserialize(e) {
        return e.start(), oe(e);
      }
    }, _e = {
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
        ne
      ],
      [
        "throw",
        _e
      ]
    ]);
    function re(e, t) {
      for (const n of e) if (t === n || n === "*" || n instanceof RegExp && n.test(t)) return true;
      return false;
    }
    function W(e, t = globalThis, n = [
      "*"
    ]) {
      t.addEventListener("message", function r(c) {
        if (!c || !c.data) return;
        if (!re(n, c.origin)) {
          console.warn(`Invalid origin '${c.origin}' for comlink proxy`);
          return;
        }
        const { id: i, type: a, path: s } = Object.assign({
          path: []
        }, c.data), b = (c.data.argumentList || []).map(x);
        let u;
        try {
          const f = s.slice(0, -1).reduce((w, I) => w[I], e), y = s.reduce((w, I) => w[I], e);
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
                u = de(w);
              }
              break;
            case "ENDPOINT":
              {
                const { port1: w, port2: I } = new MessageChannel();
                W(e, I), u = le(w, [
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
    function ce(e) {
      return e.constructor.name === "MessagePort";
    }
    function J(e) {
      ce(e) && e.close();
    }
    function oe(e, t) {
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
      }), j(e, n, [], t);
    }
    function E(e) {
      if (e) throw new Error("Proxy has been released and is not useable");
    }
    function Y(e) {
      return T(e, /* @__PURE__ */ new Map(), {
        type: "RELEASE"
      }).then(() => {
        J(e);
      });
    }
    const O = /* @__PURE__ */ new WeakMap(), F = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
      const t = (O.get(e) || 0) - 1;
      O.set(e, t), t === 0 && Y(e);
    });
    function ie(e, t) {
      const n = (O.get(t) || 0) + 1;
      O.set(t, n), F && F.register(e, t, e);
    }
    function ae(e) {
      F && F.unregister(e);
    }
    function j(e, t, n = [], r = function() {
    }) {
      let c = false;
      const i = new Proxy(r, {
        get(a, s) {
          if (E(c), s === te) return () => {
            ae(i), Y(e), t.clear(), c = true;
          };
          if (s === "then") {
            if (n.length === 0) return {
              then: () => i
            };
            const b = T(e, t, {
              type: "GET",
              path: n.map((u) => u.toString())
            }).then(x);
            return b.then.bind(b);
          }
          return j(e, t, [
            ...n,
            s
          ]);
        },
        set(a, s, b) {
          E(c);
          const [u, f] = M(b);
          return T(e, t, {
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
          if (u === ee) return T(e, t, {
            type: "ENDPOINT"
          }).then(x);
          if (u === "bind") return j(e, t, n.slice(0, -1));
          const [f, y] = V(b);
          return T(e, t, {
            type: "APPLY",
            path: n.map((w) => w.toString()),
            argumentList: f
          }, y).then(x);
        },
        construct(a, s) {
          E(c);
          const [b, u] = V(s);
          return T(e, t, {
            type: "CONSTRUCT",
            path: n.map((f) => f.toString()),
            argumentList: b
          }, u).then(x);
        }
      });
      return ie(i, e), i;
    }
    function se(e) {
      return Array.prototype.concat.apply([], e);
    }
    function V(e) {
      const t = e.map(M);
      return [
        t.map((n) => n[0]),
        se(t.map((n) => n[1]))
      ];
    }
    const Q = /* @__PURE__ */ new WeakMap();
    function le(e, t) {
      return Q.set(e, t), e;
    }
    function de(e) {
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
    function T(e, t, n, r) {
      return new Promise((c) => {
        const i = be();
        t.set(i, c), e.start && e.start(), e.postMessage(Object.assign({
          id: i
        }, n), r);
      });
    }
    function be() {
      return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    }
    var ue = "" + new URL("index_bg-D3rNvEyB.wasm", _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" && _documentCurrentScript.src || new URL("_nuxt/worker-DRJWaUVc.js", document.baseURI).href).href, fe = async (e = {}, t) => {
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
    function ge(e) {
      o = e;
    }
    let m = 0, C = null;
    function S() {
      return (C === null || C.byteLength === 0) && (C = new Uint8Array(o.memory.buffer)), C;
    }
    const we = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    let z = new we("utf-8");
    const pe = typeof z.encodeInto == "function" ? function(e, t) {
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
        const s = S().subarray(c + a, c + r), b = pe(e, s);
        a += b.written, c = n(c, r, a, 1) >>> 0;
      }
      return m = a, c;
    }
    let B = null;
    function p() {
      return (B === null || B.buffer.detached === true || B.buffer.detached === void 0 && B.buffer !== o.memory.buffer) && (B = new DataView(o.memory.buffer)), B;
    }
    const ye = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let K = new ye("utf-8", {
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
    function X(e, t) {
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
    function N(e) {
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
        c > 0 && (i += N(e[0]));
        for (let a = 1; a < c; a++) i += ", " + N(e[a]);
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
      o.closure861_externref_shim(e, t, n);
    }
    function ke(e, t, n) {
      o.closure863_externref_shim(e, t, n);
    }
    function D(e, t, n) {
      o.closure1730_externref_shim(e, t, n);
    }
    function Ae(e, t) {
      o._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h57a3662dbb3c4669(e, t);
    }
    function xe(e, t) {
      o._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc72e56d240b9010b(e, t);
    }
    function Be(e, t, n) {
      o.closure2369_externref_shim(e, t, n);
    }
    function Te(e, t, n) {
      o.closure2692_externref_shim(e, t, n);
    }
    function Ie(e, t, n, r) {
      o.closure2877_externref_shim(e, t, n, r);
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
    const q = typeof FinalizationRegistry > "u" ? {
      register: () => {
      },
      unregister: () => {
      }
    } : new FinalizationRegistry((e) => o.__wbg_client_free(e >>> 0, 1));
    class H {
      static __wrap(t) {
        t = t >>> 0;
        const n = Object.create(H.prototype);
        return n.__wbg_ptr = t, q.register(n, n.__wbg_ptr, n), n;
      }
      __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, q.unregister(this), t;
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
    function je(e, t) {
      e.clearInterval(t);
    }
    function Ne(e) {
      return clearTimeout(e);
    }
    function We(e) {
      return clearTimeout(e);
    }
    function De(e) {
      return H.__wrap(e);
    }
    function Ve(e) {
      e.close();
    }
    function qe() {
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
        globalThis.crypto.getRandomValues(X(e, t));
      }, arguments);
    }
    function at() {
      return l(function(e, t) {
        e.getRandomValues(t);
      }, arguments);
    }
    function st(e) {
      return e.getTime();
    }
    function lt(e, t, n) {
      const r = t[n >>> 0];
      var c = d(r) ? 0 : k(r, o.__wbindgen_malloc, o.__wbindgen_realloc), i = m;
      p().setInt32(e + 4 * 1, i, true), p().setInt32(e + 4 * 0, c, true);
    }
    function dt() {
      return l(function(e, t) {
        return Reflect.get(e, t);
      }, arguments);
    }
    function bt(e, t) {
      return e[t >>> 0];
    }
    function ut(e, t) {
      return e[t];
    }
    function ft(e) {
      return e.indexNames;
    }
    function gt() {
      return l(function(e, t, n) {
        return e.index(g(t, n));
      }, arguments);
    }
    function wt(e, t, n, r) {
      console.info(e, t, n, r);
    }
    function pt(e) {
      console.info(e);
    }
    function yt(e) {
      let t;
      try {
        t = e instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    function mt(e) {
      let t;
      try {
        t = e instanceof IDBDatabase;
      } catch {
        t = false;
      }
      return t;
    }
    function ht(e) {
      let t;
      try {
        t = e instanceof IDBFactory;
      } catch {
        t = false;
      }
      return t;
    }
    function kt(e) {
      let t;
      try {
        t = e instanceof IDBOpenDBRequest;
      } catch {
        t = false;
      }
      return t;
    }
    function At(e) {
      let t;
      try {
        t = e instanceof IDBRequest;
      } catch {
        t = false;
      }
      return t;
    }
    function xt(e) {
      let t;
      try {
        t = e instanceof IDBTransaction;
      } catch {
        t = false;
      }
      return t;
    }
    function Bt(e) {
      let t;
      try {
        t = e instanceof Map;
      } catch {
        t = false;
      }
      return t;
    }
    function Tt(e) {
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
    function St(e) {
      return Array.isArray(e);
    }
    function vt(e) {
      return Number.isSafeInteger(e);
    }
    function Et(e, t) {
      return Object.is(e, t);
    }
    function Ct() {
      return Symbol.iterator;
    }
    function Rt() {
      return l(function(e) {
        return e.keyPath;
      }, arguments);
    }
    function zt(e) {
      return e.length;
    }
    function Ot(e) {
      return e.length;
    }
    function Ft(e) {
      return e.length;
    }
    function Mt(e) {
      return e.msCrypto;
    }
    function Lt(e) {
      return e.multiEntry;
    }
    function Ht() {
      return /* @__PURE__ */ new Date();
    }
    function Pt(e, t) {
      try {
        var n = {
          a: e,
          b: t
        }, r = (i, a) => {
          const s = n.a;
          n.a = 0;
          try {
            return Ie(s, n.b, i, a);
          } finally {
            n.a = s;
          }
        };
        return new Promise(r);
      } finally {
        n.a = n.b = 0;
      }
    }
    function jt() {
      return new Object();
    }
    function Nt() {
      return new Array();
    }
    function Wt() {
      return l(function(e, t) {
        return new WebSocket(g(e, t));
      }, arguments);
    }
    function Dt(e) {
      return new Uint8Array(e);
    }
    function Vt(e, t) {
      return new Function(g(e, t));
    }
    function qt(e, t, n) {
      return new Uint8Array(e, t >>> 0, n >>> 0);
    }
    function Ut(e) {
      return new Uint8Array(e >>> 0);
    }
    function Gt(e) {
      return e.next;
    }
    function $t() {
      return l(function(e) {
        return e.next();
      }, arguments);
    }
    function Jt(e) {
      return e.node;
    }
    function Yt(e) {
      return e.now();
    }
    function Qt() {
      return Date.now();
    }
    function Kt(e) {
      return e.now();
    }
    function Xt(e) {
      return e.objectStoreNames;
    }
    function Zt() {
      return l(function(e, t, n) {
        return e.objectStore(g(t, n));
      }, arguments);
    }
    function en() {
      return l(function(e, t, n) {
        return e.open(g(t, n));
      }, arguments);
    }
    function tn() {
      return l(function(e, t, n, r) {
        return e.open(g(t, n), r >>> 0);
      }, arguments);
    }
    function nn(e) {
      return e.performance;
    }
    function _n(e) {
      return e.process;
    }
    function rn(e, t) {
      return e.push(t);
    }
    function cn() {
      return l(function(e, t) {
        return e.put(t);
      }, arguments);
    }
    function on(e) {
      queueMicrotask(e);
    }
    function an(e) {
      return e.queueMicrotask;
    }
    function sn() {
      return l(function(e, t) {
        e.randomFillSync(t);
      }, arguments);
    }
    function ln(e) {
      return e.readyState;
    }
    function dn() {
      return l(function() {
        return module.require;
      }, arguments);
    }
    function bn(e) {
      return Promise.resolve(e);
    }
    function un() {
      return l(function(e) {
        return e.result;
      }, arguments);
    }
    function fn() {
      return l(function(e, t, n) {
        e.send(X(t, n));
      }, arguments);
    }
    function gn() {
      return l(function(e, t, n, r) {
        return e.setInterval(t, n, ...r);
      }, arguments);
    }
    function wn() {
      return l(function(e, t, n, r) {
        return e.setInterval(t, n, ...r);
      }, arguments);
    }
    function pn() {
      return l(function(e, t) {
        return setInterval(e, t);
      }, arguments);
    }
    function yn() {
      return l(function(e, t) {
        return setTimeout(e, t);
      }, arguments);
    }
    function mn() {
      return l(function(e, t) {
        return setTimeout(e, t);
      }, arguments);
    }
    function hn(e, t, n) {
      e[t >>> 0] = n;
    }
    function kn(e, t, n) {
      e[t] = n;
    }
    function An(e, t, n) {
      e.set(t, n >>> 0);
    }
    function xn(e, t) {
      e.autoIncrement = t !== 0;
    }
    function Bn(e, t) {
      e.binaryType = Se[t];
    }
    function Tn(e, t) {
      e.keyPath = t;
    }
    function In(e, t) {
      e.multiEntry = t !== 0;
    }
    function Sn(e, t) {
      e.onabort = t;
    }
    function vn(e, t) {
      e.onclose = t;
    }
    function En(e, t) {
      e.oncomplete = t;
    }
    function Cn(e, t) {
      e.onerror = t;
    }
    function Rn(e, t) {
      e.onerror = t;
    }
    function zn(e, t) {
      e.onerror = t;
    }
    function On(e, t) {
      e.onmessage = t;
    }
    function Fn(e, t) {
      e.onopen = t;
    }
    function Mn(e, t) {
      e.onsuccess = t;
    }
    function Ln(e, t) {
      e.onupgradeneeded = t;
    }
    function Hn(e, t) {
      e.onversionchange = t;
    }
    function Pn(e, t) {
      e.unique = t !== 0;
    }
    function jn() {
      const e = typeof global > "u" ? null : global;
      return d(e) ? 0 : h(e);
    }
    function Nn() {
      const e = typeof globalThis > "u" ? null : globalThis;
      return d(e) ? 0 : h(e);
    }
    function Wn() {
      const e = typeof self > "u" ? null : self;
      return d(e) ? 0 : h(e);
    }
    function Dn() {
      const e = typeof window > "u" ? null : window;
      return d(e) ? 0 : h(e);
    }
    function Vn(e, t, n) {
      return e.subarray(t >>> 0, n >>> 0);
    }
    function qn(e) {
      const t = e.target;
      return d(t) ? 0 : h(t);
    }
    function Un(e, t) {
      return e.then(t);
    }
    function Gn(e) {
      return e.toString();
    }
    function $n() {
      return l(function(e, t, n) {
        return e.transaction(t, ve[n]);
      }, arguments);
    }
    function Jn(e) {
      const t = e.transaction;
      return d(t) ? 0 : h(t);
    }
    function Yn(e) {
      return e.unique;
    }
    function Qn(e) {
      return e.value;
    }
    function Kn(e) {
      return e.versions;
    }
    function Xn(e) {
      console.warn(e);
    }
    function Zn(e, t, n, r) {
      console.warn(e, t, n, r);
    }
    function e_(e) {
      return +e;
    }
    function t_(e) {
      return e;
    }
    function n_(e) {
      return BigInt.asUintN(64, e);
    }
    function __(e, t) {
      const n = t, r = typeof n == "bigint" ? n : void 0;
      p().setBigInt64(e + 8 * 1, d(r) ? BigInt(0) : r, true), p().setInt32(e + 4 * 0, !d(r), true);
    }
    function r_(e) {
      const t = e;
      return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    function c_(e) {
      const t = e.original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    function o_(e, t, n) {
      return A(e, t, 2269, xe);
    }
    function i_(e, t, n) {
      return A(e, t, 2370, Be);
    }
    function a_(e, t, n) {
      return A(e, t, 2693, Te);
    }
    function s_(e, t, n) {
      return A(e, t, 862, he);
    }
    function l_(e, t, n) {
      return me(e, t, 862, ke);
    }
    function d_(e, t, n) {
      return A(e, t, 1731, D);
    }
    function b_(e, t, n) {
      return A(e, t, 1731, D);
    }
    function u_(e, t, n) {
      return A(e, t, 1731, D);
    }
    function f_(e, t, n) {
      return A(e, t, 2236, Ae);
    }
    function g_(e, t) {
      const n = N(t), r = k(n, o.__wbindgen_malloc, o.__wbindgen_realloc), c = m;
      p().setInt32(e + 4 * 1, c, true), p().setInt32(e + 4 * 0, r, true);
    }
    function w_(e, t) {
      return new Error(g(e, t));
    }
    function p_(e, t) {
      return e in t;
    }
    function y_() {
      const e = o.__wbindgen_export_4, t = e.grow(4);
      e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
    }
    function m_(e) {
      return typeof e == "bigint";
    }
    function h_(e) {
      return typeof e == "function";
    }
    function k_(e) {
      return e === null;
    }
    function A_(e) {
      const t = e;
      return typeof t == "object" && t !== null;
    }
    function x_(e) {
      return typeof e == "string";
    }
    function B_(e) {
      return e === void 0;
    }
    function T_(e, t) {
      return e === t;
    }
    function I_(e, t) {
      return e == t;
    }
    function S_() {
      return o.memory;
    }
    function v_(e, t) {
      const n = t, r = typeof n == "number" ? n : void 0;
      p().setFloat64(e + 8 * 1, d(r) ? 0 : r, true), p().setInt32(e + 4 * 0, !d(r), true);
    }
    function E_(e) {
      return e;
    }
    function C_(e, t) {
      const n = t, r = typeof n == "string" ? n : void 0;
      var c = d(r) ? 0 : k(r, o.__wbindgen_malloc, o.__wbindgen_realloc), i = m;
      p().setInt32(e + 4 * 1, i, true), p().setInt32(e + 4 * 0, c, true);
    }
    function R_(e, t) {
      return g(e, t);
    }
    function z_(e, t) {
      throw new Error(g(e, t));
    }
    URL = globalThis.URL;
    const _ = await fe({
      "./index_bg.js": {
        __wbindgen_is_function: h_,
        __wbindgen_error_new: w_,
        __wbindgen_number_new: E_,
        __wbindgen_string_new: R_,
        __wbindgen_is_undefined: B_,
        __wbindgen_in: p_,
        __wbindgen_boolean_get: r_,
        __wbindgen_is_bigint: m_,
        __wbindgen_number_get: v_,
        __wbindgen_bigint_from_i64: t_,
        __wbindgen_jsval_eq: T_,
        __wbindgen_string_get: C_,
        __wbindgen_is_object: A_,
        __wbindgen_bigint_from_u64: n_,
        __wbindgen_is_string: x_,
        __wbg_client_new: De,
        __wbg_addEventListener_80a602a44dbd0d06: Re,
        __wbindgen_cb_drop: c_,
        __wbg_WorkerGlobalScope_68dbbc2404209578: Ce,
        __wbg_clearTimeout_96804de0ab838f26: We,
        __wbg_setTimeout_eefe7f4c234b0c6b: mn,
        __wbg_performance_7a3ffd0b17f663ad: nn,
        __wbg_now_2c95c9de01293173: Yt,
        __wbg_clearTimeout_5a54f8841c30079a: Ne,
        __wbg_clearInterval_dd1e598f425db353: Pe,
        __wbg_setTimeout_db2dbaeefb6f39c7: yn,
        __wbg_setInterval_ed3b5e3c3ebb8a6d: pn,
        __wbindgen_is_null: k_,
        __wbg_instanceof_Window_def73ea0955fc569: It,
        __wbg_clearInterval_ad2594253cc39c4b: He,
        __wbg_setInterval_83d54331ceeda644: gn,
        __wbg_debug_3cb59063b29f58c1: Ye,
        __wbg_debug_e17b51583ca6a632: Qe,
        __wbg_error_524f506f44df1645: tt,
        __wbg_error_80de38b3f7cc3c3c: nt,
        __wbg_info_3daf2e093e091b66: pt,
        __wbg_info_033d8b8a0838f1d3: wt,
        __wbg_warn_4ca3906c248c47c4: Xn,
        __wbg_warn_aaf1f4664a035bd6: Zn,
        __wbg_clearInterval_eba67734fd13a7f1: je,
        __wbg_setInterval_d4f8bdcc1d5b1da9: wn,
        __wbg_instanceof_IdbDatabase_a3ef009ca00059f9: mt,
        __wbg_objectStoreNames_9bb1ab04a7012aaf: Xt,
        __wbg_setonversionchange_6ee07fa49ee1e3a5: Hn,
        __wbg_close_26fc2e6856d8567a: Ve,
        __wbg_createObjectStore_d2f9e1016f4d81b9: Ge,
        __wbg_deleteObjectStore_3f08ae00cd288224: Xe,
        __wbg_transaction_d6d07c3c9963c49e: $n,
        __wbg_data_432d9c3df2630942: Je,
        __wbg_readyState_7ef6e63c349899ed: ln,
        __wbg_bufferedAmount_a482960ac51b25e8: Fe,
        __wbg_setonopen_2da654e1f39745d5: Fn,
        __wbg_setonerror_8639efe354b947cd: Cn,
        __wbg_setonclose_14fc475a49d488fc: vn,
        __wbg_setonmessage_6eccab530a8fb4c7: On,
        __wbg_setbinaryType_92fa1ffd873b327c: Bn,
        __wbg_new_92c54fc74574ef55: Wt,
        __wbg_close_e1253d480ed93ce3: qe,
        __wbg_send_fc0c204e8a1757f4: fn,
        __wbg_setmultientry_4c4eee871f29837a: In,
        __wbg_setunique_dd24c422aa05df89: Pn,
        __wbg_setautoincrement_8b4327709e9ee7d9: xn,
        __wbg_setkeypath_691179e313c26ae1: Tn,
        __wbg_target_0a62d9d79a2a1ede: qn,
        __wbg_instanceof_IdbOpenDbRequest_a3416e156c9db893: kt,
        __wbg_setonupgradeneeded_fcf7ce4f2eb0cb5f: Ln,
        __wbg_now_d18023d54d4e5500: Kt,
        __wbg_length_52b6c4580c5ec934: zt,
        __wbg_get_4f73335ab78445db: lt,
        __wbg_instanceof_IdbFactory_12eaba3366f4302f: ht,
        __wbg_open_88b1390d99a7c691: en,
        __wbg_open_e0c0b2993eb596e1: tn,
        __wbg_indexNames_0ed82a19d7d88aa3: ft,
        __wbg_createIndex_873ac48adc772309: Ue,
        __wbg_deleteIndex_e6717aa0e9691894: Ke,
        __wbg_getAll_1de5635a99f2dae8: ot,
        __wbg_index_e00ca5fff206ee3e: gt,
        __wbg_put_9ef5363941008835: cn,
        __wbg_instanceof_IdbRequest_4813c3f207666aa4: At,
        __wbg_result_f29afabdf2c05826: un,
        __wbg_error_ff4ddaabdfc5dbb3: rt,
        __wbg_transaction_e713aa7b07ccaedd: Jn,
        __wbg_setonsuccess_afa464ee777a396d: Mn,
        __wbg_setonerror_d7e3056cc6e56085: zn,
        __wbg_instanceof_IdbTransaction_746ea660d347650d: xt,
        __wbg_error_e9332df4e7a14612: _t,
        __wbg_setonabort_3bf4db6614fa98e9: Sn,
        __wbg_setoncomplete_4d19df0dadb7c4d4: En,
        __wbg_setonerror_b0d9d723b8fddbbb: Rn,
        __wbg_objectStore_21878d46d25b64b6: Zt,
        __wbg_keyPath_443ecf3f74202169: Rt,
        __wbg_multiEntry_c146ebd38a5de9ea: Lt,
        __wbg_unique_23ddfed89bddb31d: Yn,
        __wbindgen_jsval_loose_eq: I_,
        __wbindgen_as_number: e_,
        __wbg_String_8f0eb39a4a4c2f66: Ee,
        __wbg_getwithrefkey_1dc361bd10053bfe: ut,
        __wbg_set_3f1d0b984ed272ed: kn,
        __wbg_queueMicrotask_97d92b4fcc8a61c5: on,
        __wbg_queueMicrotask_d3219def82552485: an,
        __wbg_crypto_ed58b8e10a292839: $e,
        __wbg_process_5c1d670bc53614b8: _n,
        __wbg_versions_c71aa1626a93e0a1: Kn,
        __wbg_node_02999533c4ea02e3: Jt,
        __wbg_require_79b1e9274cde3c87: dn,
        __wbg_msCrypto_0a36e2ec3a343d26: Mt,
        __wbg_randomFillSync_ab2cfe79ebbf2740: sn,
        __wbg_getRandomValues_bcb4912f16000dc4: at,
        __wbg_get_b9b93047fe3cf45b: bt,
        __wbg_length_e2d2a49132c1b256: Ft,
        __wbg_new_78feb108b6472713: Nt,
        __wbg_newnoargs_105ed471475aaf50: Vt,
        __wbg_next_25feadfc0913fea9: Gt,
        __wbg_next_6574e1a8a62d1055: $t,
        __wbg_done_769e5ede4b31c67b: Ze,
        __wbg_value_cd1ffa7b1ab794f1: Qn,
        __wbg_iterator_9a24c88df860dc65: Ct,
        __wbg_get_67b2ba62fc30de12: dt,
        __wbg_call_672a4d21634d4a24: Me,
        __wbg_new_405e22f390576ce2: jt,
        __wbg_set_37837023f3d740e8: hn,
        __wbg_from_2a5d3e218e67aa85: ct,
        __wbg_isArray_a1eab7e0d067391b: St,
        __wbg_push_737cfc8c1432c2c6: rn,
        __wbg_instanceof_ArrayBuffer_e14585432e3737fc: yt,
        __wbg_apply_36be6a55257c99bf: ze,
        __wbg_call_7cccdd69e0791ae2: Le,
        __wbg_instanceof_Map_f3469ce2244d2430: Bt,
        __wbg_isSafeInteger_343e2beeeece1bb0: vt,
        __wbg_getTime_46267b1c24877e30: st,
        __wbg_new0_f788a2397c7ca929: Ht,
        __wbg_now_807e54c39636c349: Qt,
        __wbg_entries_3265d4158b33e5dc: et,
        __wbg_is_c7481c65e7e5df9e: Et,
        __wbg_toString_5285597960676b7b: Gn,
        __wbg_new_23a2665fac83c611: Pt,
        __wbg_resolve_4851785c9c5f573d: bn,
        __wbg_then_44b73946d2fb3e7d: Un,
        __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: Nn,
        __wbg_static_accessor_SELF_37c5d418e4bf5819: Wn,
        __wbg_static_accessor_WINDOW_5de37043a91a9c40: Dn,
        __wbg_static_accessor_GLOBAL_88a902d13a557d07: jn,
        __wbg_buffer_609cc3eee51ed158: Oe,
        __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: qt,
        __wbg_new_a12002a7f91c75be: Dt,
        __wbg_set_65595bdd868b3009: An,
        __wbg_length_a446193dc22c12f8: Ot,
        __wbg_instanceof_Uint8Array_17156bcf118086a9: Tt,
        __wbg_newwithlength_a381634e90c276d4: Ut,
        __wbg_subarray_aa9065fa9dc5df96: Vn,
        __wbg_getRandomValues_21a0191e74d0e1d3: it,
        __wbindgen_bigint_get_as_i64: __,
        __wbindgen_debug_string: g_,
        __wbindgen_throw: z_,
        __wbindgen_memory: S_,
        __wbindgen_closure_wrapper3766: s_,
        __wbindgen_closure_wrapper3768: l_,
        __wbindgen_closure_wrapper7683: d_,
        __wbindgen_closure_wrapper7685: b_,
        __wbindgen_closure_wrapper7689: u_,
        __wbindgen_closure_wrapper9865: f_,
        __wbindgen_closure_wrapper10019: o_,
        __wbindgen_closure_wrapper10703: i_,
        __wbindgen_closure_wrapper13614: a_,
        __wbindgen_init_externref_table: y_
      }
    }, ue), O_ = _.memory, F_ = _.__wbg_clientconfiguration_free, M_ = _.__wbg_address_free, L_ = _.address_new, H_ = _.address_deserialize, P_ = _.address_fromAny, j_ = _.address_fromString, N_ = _.address_toPlain, W_ = _.__wbg_hashedtimelockedcontract_free, D_ = _.__wbg_signatureproof_free, V_ = _.signatureproof_deserialize, q_ = _.__wbg_stakingcontract_free, U_ = _.__wbg_vestingcontract_free, G_ = _.__wbg_client_free, $_ = _.client_create, J_ = _.client_addConsensusChangedListener, Y_ = _.client_addHeadChangedListener, Q_ = _.client_addPeerChangedListener, K_ = _.client_addTransactionListener, X_ = _.client_removeListener, Z_ = _.client_getNetworkId, er = _.client_isConsensusEstablished, tr = _.client_waitForConsensusEstablished, nr = _.client_getHeadHash, _r = _.client_getHeadHeight, rr = _.client_getHeadBlock, cr = _.client_getAddressBook, or = _.client_getBlock, ir = _.client_getBlockAt, ar = _.client_getAccount, sr = _.client_getAccounts, lr = _.client_getStaker, dr = _.client_getStakers, br = _.client_getValidator, ur = _.client_getValidators, fr = _.client_sendTransaction, gr = _.client_getTransaction, wr = _.client_getTransactionReceiptsByAddress, pr = _.client_getTransactionsByAddress, yr = _.client_disconnectNetwork, mr = _.client_connectNetwork, hr = _.__wbg_transaction_free, kr = _.transaction_new, Ar = _.transaction_hash, xr = _.transaction_verify, Br = _.transaction_isValidAt, Tr = _.transaction_getContractCreationAddress, Ir = _.transaction_serializeContent, Sr = _.transaction_serialize, vr = _.transaction_format, Er = _.transaction_sender, Cr = _.transaction_senderType, Rr = _.transaction_recipient, zr = _.transaction_recipientType, Or = _.transaction_value, Fr = _.transaction_fee, Mr = _.transaction_feePerByte, Lr = _.transaction_validityStartHeight, Hr = _.transaction_networkId, Pr = _.transaction_flags, jr = _.transaction_data, Nr = _.transaction_set_data, Wr = _.transaction_senderData, Dr = _.transaction_proof, Vr = _.transaction_set_proof, qr = _.transaction_serializedSize, Ur = _.transaction_toHex, Gr = _.transaction_toPlain, $r = _.transaction_deserialize, Jr = _.transaction_fromAny, Yr = _.transaction_fromPlain, Qr = _.__wbg_policy_free, Kr = _.policy_transaction_validity_window, Xr = _.policy_transaction_validity_window_blocks, Zr = _.policy_batches_per_epoch, ec = _.policy_blocks_per_batch, tc = _.policy_blocks_per_epoch, nc = _.policy_genesis_block_number, _c = _.policy_state_chunks_max_size, rc = _.policy_epochAt, cc = _.policy_epochIndexAt, oc = _.policy_batchAt, ic = _.policy_batchIndexAt, ac = _.policy_electionBlockAfter, sc = _.policy_electionBlockBefore, lc = _.policy_lastElectionBlock, dc = _.policy_isElectionBlockAt, bc = _.policy_macroBlockAfter, uc = _.policy_macroBlockBefore, fc = _.policy_lastMacroBlock, gc = _.policy_isMacroBlockAt, wc = _.policy_isMicroBlockAt, pc = _.policy_firstBlockOf, yc = _.policy_firstBlockOfBatch, mc = _.policy_electionBlockOf, hc = _.policy_macroBlockOf, kc = _.policy_firstBatchOfEpoch, Ac = _.policy_lastBlockOfReportingWindow, xc = _.policy_blockAfterReportingWindow, Bc = _.policy_blockAfterJail, Tc = _.policy_supplyAt, Ic = _.policy_batchDelayPenalty, Sc = _.policy_wasm_staking_contract_address, vc = _.policy_wasm_coinbase_address, Ec = _.policy_wasm_max_size_micro_body, Cc = _.policy_wasm_slots, Rc = _.policy_wasm_two_f_plus_one, zc = _.policy_wasm_f_plus_one, Oc = _.policy_wasm_min_block_producer_timeout, Fc = _.policy_wasm_block_separation_time, Mc = _.policy_wasm_min_epochs_stored, Lc = _.policy_wasm_timestamp_max_drift, Hc = _.policy_wasm_minimum_rewards_percentage, Pc = _.policy_wasm_validator_deposit, jc = _.policy_wasm_jail_epochs, Nc = _.policy_wasm_total_supply, Wc = _.policy_wasm_bls_cache_max_capacity, Dc = _.policy_wasm_history_chunks_max_size, Vc = _.policy_wasm_version, qc = _.__wbindgen_malloc, Uc = _.__wbindgen_realloc, Gc = _.__wbindgen_exn_store, $c = _.__externref_table_alloc, Jc = _.__wbindgen_export_4, Yc = _.__wbindgen_export_5, Qc = _.__externref_table_dealloc, Kc = _.__wbindgen_free, Xc = _.closure861_externref_shim, Zc = _.closure863_externref_shim, eo = _.closure1730_externref_shim, to = _._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h57a3662dbb3c4669, no = _._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc72e56d240b9010b, _o = _.closure2369_externref_shim, ro = _.closure2692_externref_shim, co = _.closure2877_externref_shim, Z = _.__wbindgen_start;
    var oo = Object.freeze({
      __proto__: null,
      __externref_table_alloc: $c,
      __externref_table_dealloc: Qc,
      __wbg_address_free: M_,
      __wbg_client_free: G_,
      __wbg_clientconfiguration_free: F_,
      __wbg_hashedtimelockedcontract_free: W_,
      __wbg_policy_free: Qr,
      __wbg_signatureproof_free: D_,
      __wbg_stakingcontract_free: q_,
      __wbg_transaction_free: hr,
      __wbg_vestingcontract_free: U_,
      __wbindgen_exn_store: Gc,
      __wbindgen_export_4: Jc,
      __wbindgen_export_5: Yc,
      __wbindgen_free: Kc,
      __wbindgen_malloc: qc,
      __wbindgen_realloc: Uc,
      __wbindgen_start: Z,
      _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h57a3662dbb3c4669: to,
      _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hc72e56d240b9010b: no,
      address_deserialize: H_,
      address_fromAny: P_,
      address_fromString: j_,
      address_new: L_,
      address_toPlain: N_,
      client_addConsensusChangedListener: J_,
      client_addHeadChangedListener: Y_,
      client_addPeerChangedListener: Q_,
      client_addTransactionListener: K_,
      client_connectNetwork: mr,
      client_create: $_,
      client_disconnectNetwork: yr,
      client_getAccount: ar,
      client_getAccounts: sr,
      client_getAddressBook: cr,
      client_getBlock: or,
      client_getBlockAt: ir,
      client_getHeadBlock: rr,
      client_getHeadHash: nr,
      client_getHeadHeight: _r,
      client_getNetworkId: Z_,
      client_getStaker: lr,
      client_getStakers: dr,
      client_getTransaction: gr,
      client_getTransactionReceiptsByAddress: wr,
      client_getTransactionsByAddress: pr,
      client_getValidator: br,
      client_getValidators: ur,
      client_isConsensusEstablished: er,
      client_removeListener: X_,
      client_sendTransaction: fr,
      client_waitForConsensusEstablished: tr,
      closure1730_externref_shim: eo,
      closure2369_externref_shim: _o,
      closure2692_externref_shim: ro,
      closure2877_externref_shim: co,
      closure861_externref_shim: Xc,
      closure863_externref_shim: Zc,
      memory: O_,
      policy_batchAt: oc,
      policy_batchDelayPenalty: Ic,
      policy_batchIndexAt: ic,
      policy_batches_per_epoch: Zr,
      policy_blockAfterJail: Bc,
      policy_blockAfterReportingWindow: xc,
      policy_blocks_per_batch: ec,
      policy_blocks_per_epoch: tc,
      policy_electionBlockAfter: ac,
      policy_electionBlockBefore: sc,
      policy_electionBlockOf: mc,
      policy_epochAt: rc,
      policy_epochIndexAt: cc,
      policy_firstBatchOfEpoch: kc,
      policy_firstBlockOf: pc,
      policy_firstBlockOfBatch: yc,
      policy_genesis_block_number: nc,
      policy_isElectionBlockAt: dc,
      policy_isMacroBlockAt: gc,
      policy_isMicroBlockAt: wc,
      policy_lastBlockOfReportingWindow: Ac,
      policy_lastElectionBlock: lc,
      policy_lastMacroBlock: fc,
      policy_macroBlockAfter: bc,
      policy_macroBlockBefore: uc,
      policy_macroBlockOf: hc,
      policy_state_chunks_max_size: _c,
      policy_supplyAt: Tc,
      policy_transaction_validity_window: Kr,
      policy_transaction_validity_window_blocks: Xr,
      policy_wasm_block_separation_time: Fc,
      policy_wasm_bls_cache_max_capacity: Wc,
      policy_wasm_coinbase_address: vc,
      policy_wasm_f_plus_one: zc,
      policy_wasm_history_chunks_max_size: Dc,
      policy_wasm_jail_epochs: jc,
      policy_wasm_max_size_micro_body: Ec,
      policy_wasm_min_block_producer_timeout: Oc,
      policy_wasm_min_epochs_stored: Mc,
      policy_wasm_minimum_rewards_percentage: Hc,
      policy_wasm_slots: Cc,
      policy_wasm_staking_contract_address: Sc,
      policy_wasm_timestamp_max_drift: Lc,
      policy_wasm_total_supply: Nc,
      policy_wasm_two_f_plus_one: Rc,
      policy_wasm_validator_deposit: Pc,
      policy_wasm_version: Vc,
      signatureproof_deserialize: V_,
      transaction_data: jr,
      transaction_deserialize: $r,
      transaction_fee: Fr,
      transaction_feePerByte: Mr,
      transaction_flags: Pr,
      transaction_format: vr,
      transaction_fromAny: Jr,
      transaction_fromPlain: Yr,
      transaction_getContractCreationAddress: Tr,
      transaction_hash: Ar,
      transaction_isValidAt: Br,
      transaction_networkId: Hr,
      transaction_new: kr,
      transaction_proof: Dr,
      transaction_recipient: Rr,
      transaction_recipientType: zr,
      transaction_sender: Er,
      transaction_senderData: Wr,
      transaction_senderType: Cr,
      transaction_serialize: Sr,
      transaction_serializeContent: Ir,
      transaction_serializedSize: qr,
      transaction_set_data: Nr,
      transaction_set_proof: Vr,
      transaction_toHex: Ur,
      transaction_toPlain: Gr,
      transaction_validityStartHeight: Lr,
      transaction_value: Or,
      transaction_verify: xr
    });
    ge(oo);
    Z();
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
    async function io(e) {
      if (U) throw new Error("Already initialized");
      U = true, console.log("Initializing client WASM worker");
      const t = await H.create(e);
      W(t);
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
          await io(r), self.postMessage({
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
