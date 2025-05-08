self.document = { currentScript: { src: self.location.href } };
(function() {
  "use strict";
  var _documentCurrentScript = typeof document !== "undefined" ? document.currentScript : null;
  (async () => {
    const W = Symbol("Comlink.proxy"), q = Symbol("Comlink.endpoint"), V = Symbol("Comlink.releaseProxy"), k = Symbol("Comlink.finalizer"), x = Symbol("Comlink.thrown"), z = (e) => typeof e == "object" && e !== null || typeof e == "function", G = {
      canHandle: (e) => z(e) && e[W],
      serialize(e) {
        const { port1: t, port2: n } = new MessageChannel();
        return R(e, t), [
          n,
          [
            n
          ]
        ];
      },
      deserialize(e) {
        return e.start(), $(e);
      }
    }, K = {
      canHandle: (e) => z(e) && x in e,
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
    }, N = /* @__PURE__ */ new Map([
      [
        "proxy",
        G
      ],
      [
        "throw",
        K
      ]
    ]);
    function J(e, t) {
      for (const n of e) if (t === n || n === "*" || n instanceof RegExp && n.test(t)) return true;
      return false;
    }
    function R(e, t = globalThis, n = [
      "*"
    ]) {
      t.addEventListener("message", function s(r) {
        if (!r || !r.data) return;
        if (!J(n, r.origin)) {
          console.warn(`Invalid origin '${r.origin}' for comlink proxy`);
          return;
        }
        const { id: o, type: a, path: _ } = Object.assign({
          path: []
        }, r.data), f = (r.data.argumentList || []).map(b);
        let i;
        try {
          const c = _.slice(0, -1).reduce((l, y) => l[y], e), d = _.reduce((l, y) => l[y], e);
          switch (a) {
            case "GET":
              i = d;
              break;
            case "SET":
              c[_.slice(-1)[0]] = b(r.data.value), i = true;
              break;
            case "APPLY":
              i = d.apply(c, f);
              break;
            case "CONSTRUCT":
              {
                const l = new d(...f);
                i = te(l);
              }
              break;
            case "ENDPOINT":
              {
                const { port1: l, port2: y } = new MessageChannel();
                R(e, y), i = ee(l, [
                  l
                ]);
              }
              break;
            case "RELEASE":
              i = void 0;
              break;
            default:
              return;
          }
        } catch (c) {
          i = {
            value: c,
            [x]: 0
          };
        }
        Promise.resolve(i).catch((c) => ({
          value: c,
          [x]: 0
        })).then((c) => {
          const [d, l] = T(c);
          t.postMessage(Object.assign(Object.assign({}, d), {
            id: o
          }), l), a === "RELEASE" && (t.removeEventListener("message", s), D(t), k in e && typeof e[k] == "function" && e[k]());
        }).catch((c) => {
          const [d, l] = T({
            value: new TypeError("Unserializable return value"),
            [x]: 0
          });
          t.postMessage(Object.assign(Object.assign({}, d), {
            id: o
          }), l);
        });
      }), t.start && t.start();
    }
    function Y(e) {
      return e.constructor.name === "MessagePort";
    }
    function D(e) {
      Y(e) && e.close();
    }
    function $(e, t) {
      const n = /* @__PURE__ */ new Map();
      return e.addEventListener("message", function(r) {
        const { data: o } = r;
        if (!o || !o.id) return;
        const a = n.get(o.id);
        if (a) try {
          a(o);
        } finally {
          n.delete(o.id);
        }
      }), L(e, n, [], t);
    }
    function p(e) {
      if (e) throw new Error("Proxy has been released and is not useable");
    }
    function F(e) {
      return w(e, /* @__PURE__ */ new Map(), {
        type: "RELEASE"
      }).then(() => {
        D(e);
      });
    }
    const M = /* @__PURE__ */ new WeakMap(), A = "FinalizationRegistry" in globalThis && new FinalizationRegistry((e) => {
      const t = (M.get(e) || 0) - 1;
      M.set(e, t), t === 0 && F(e);
    });
    function Q(e, t) {
      const n = (M.get(t) || 0) + 1;
      M.set(t, n), A && A.register(e, t, e);
    }
    function X(e) {
      A && A.unregister(e);
    }
    function L(e, t, n = [], s = function() {
    }) {
      let r = false;
      const o = new Proxy(s, {
        get(a, _) {
          if (p(r), _ === V) return () => {
            X(o), F(e), t.clear(), r = true;
          };
          if (_ === "then") {
            if (n.length === 0) return {
              then: () => o
            };
            const f = w(e, t, {
              type: "GET",
              path: n.map((i) => i.toString())
            }).then(b);
            return f.then.bind(f);
          }
          return L(e, t, [
            ...n,
            _
          ]);
        },
        set(a, _, f) {
          p(r);
          const [i, c] = T(f);
          return w(e, t, {
            type: "SET",
            path: [
              ...n,
              _
            ].map((d) => d.toString()),
            value: i
          }, c).then(b);
        },
        apply(a, _, f) {
          p(r);
          const i = n[n.length - 1];
          if (i === q) return w(e, t, {
            type: "ENDPOINT"
          }).then(b);
          if (i === "bind") return L(e, t, n.slice(0, -1));
          const [c, d] = P(f);
          return w(e, t, {
            type: "APPLY",
            path: n.map((l) => l.toString()),
            argumentList: c
          }, d).then(b);
        },
        construct(a, _) {
          p(r);
          const [f, i] = P(_);
          return w(e, t, {
            type: "CONSTRUCT",
            path: n.map((c) => c.toString()),
            argumentList: f
          }, i).then(b);
        }
      });
      return Q(o, e), o;
    }
    function Z(e) {
      return Array.prototype.concat.apply([], e);
    }
    function P(e) {
      const t = e.map(T);
      return [
        t.map((n) => n[0]),
        Z(t.map((n) => n[1]))
      ];
    }
    const I = /* @__PURE__ */ new WeakMap();
    function ee(e, t) {
      return I.set(e, t), e;
    }
    function te(e) {
      return Object.assign(e, {
        [W]: true
      });
    }
    function T(e) {
      for (const [t, n] of N) if (n.canHandle(e)) {
        const [s, r] = n.serialize(e);
        return [
          {
            type: "HANDLER",
            name: t,
            value: s
          },
          r
        ];
      }
      return [
        {
          type: "RAW",
          value: e
        },
        I.get(e) || []
      ];
    }
    function b(e) {
      switch (e.type) {
        case "HANDLER":
          return N.get(e.name).deserialize(e.value);
        case "RAW":
          return e.value;
      }
    }
    function w(e, t, n, s) {
      return new Promise((r) => {
        const o = ne();
        t.set(o, r), e.start && e.start(), e.postMessage(Object.assign({
          id: o
        }, n), s);
      });
    }
    function ne() {
      return new Array(4).fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
    }
    var re = "" + new URL("index_bg-UJUM4JM1.wasm", _documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === "SCRIPT" && _documentCurrentScript.src || new URL("_nuxt/crypto-StoLfMPs.js", document.baseURI).href).href, oe = async (e = {}, t) => {
      let n;
      if (t.startsWith("data:")) {
        const s = t.replace(/^data:.*?base64,/, "");
        let r;
        if (typeof Buffer == "function" && typeof Buffer.from == "function") r = Buffer.from(s, "base64");
        else if (typeof atob == "function") {
          const o = atob(s);
          r = new Uint8Array(o.length);
          for (let a = 0; a < o.length; a++) r[a] = o.charCodeAt(a);
        } else throw new Error("Cannot decode base64-encoded data URL");
        n = await WebAssembly.instantiate(r, e);
      } else {
        const s = await fetch(t), r = s.headers.get("Content-Type") || "";
        if ("instantiateStreaming" in WebAssembly && r.startsWith("application/wasm")) n = await WebAssembly.instantiateStreaming(s, e);
        else {
          const o = await s.arrayBuffer();
          n = await WebAssembly.instantiate(o, e);
        }
      }
      return n.instance.exports;
    };
    let u;
    function se(e) {
      u = e;
    }
    function m(e) {
      const t = u.__externref_table_alloc();
      return u.__wbindgen_export_2.set(t, e), t;
    }
    function v(e, t) {
      try {
        return e.apply(this, t);
      } catch (n) {
        const s = m(n);
        u.__wbindgen_exn_store(s);
      }
    }
    const _e = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    let H = new _e("utf-8", {
      ignoreBOM: true,
      fatal: true
    });
    H.decode();
    let h = null;
    function B() {
      return (h === null || h.byteLength === 0) && (h = new Uint8Array(u.memory.buffer)), h;
    }
    function C(e, t) {
      return e = e >>> 0, H.decode(B().subarray(e, e + t));
    }
    function S(e) {
      return e == null;
    }
    const U = typeof FinalizationRegistry > "u" ? {
      register: () => {
      },
      unregister: () => {
      }
    } : new FinalizationRegistry((e) => {
      u.__wbindgen_export_3.get(e.dtor)(e.a, e.b);
    });
    function ae(e, t, n, s) {
      const r = {
        a: e,
        b: t,
        cnt: 1,
        dtor: n
      }, o = (...a) => {
        r.cnt++;
        const _ = r.a;
        r.a = 0;
        try {
          return s(_, r.b, ...a);
        } finally {
          --r.cnt === 0 ? (u.__wbindgen_export_3.get(r.dtor)(_, r.b), U.unregister(r)) : r.a = _;
        }
      };
      return o.original = r, U.register(o, r, r), o;
    }
    let E = 0;
    function O(e, t) {
      const n = t(e.length * 1, 1) >>> 0;
      return B().set(e, n / 1), E = e.length, n;
    }
    function ie(e, t, n) {
      u.closure12_externref_shim(e, t, n);
    }
    function ce(e, t, n, s) {
      u.closure25_externref_shim(e, t, n, s);
    }
    const ue = typeof FinalizationRegistry > "u" ? {
      register: () => {
      },
      unregister: () => {
      }
    } : new FinalizationRegistry((e) => u.__wbg_cryptoutils_free(e >>> 0, 1));
    class le {
      __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, ue.unregister(this), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        u.__wbg_cryptoutils_free(t, 0);
      }
      static otpKdf(t, n, s, r) {
        const o = O(t, u.__wbindgen_malloc), a = E, _ = O(n, u.__wbindgen_malloc), f = E, i = O(s, u.__wbindgen_malloc), c = E;
        return u.cryptoutils_otpKdf(o, a, _, f, i, c, r);
      }
    }
    function fe(e) {
      return e.buffer;
    }
    function de() {
      return v(function(e, t) {
        return e.call(t);
      }, arguments);
    }
    function ge() {
      return v(function(e, t, n) {
        return e.call(t, n);
      }, arguments);
    }
    function be(e, t) {
      try {
        var n = {
          a: e,
          b: t
        }, s = (o, a) => {
          const _ = n.a;
          n.a = 0;
          try {
            return ce(_, n.b, o, a);
          } finally {
            n.a = _;
          }
        };
        return new Promise(s);
      } finally {
        n.a = n.b = 0;
      }
    }
    function we(e) {
      return new Uint8Array(e);
    }
    function ye(e, t) {
      return new Function(C(e, t));
    }
    function me(e, t, n) {
      return new Uint8Array(e, t >>> 0, n >>> 0);
    }
    function pe(e) {
      queueMicrotask(e);
    }
    function he(e) {
      return e.queueMicrotask;
    }
    function xe(e) {
      return Promise.resolve(e);
    }
    function Ee() {
      const e = typeof global > "u" ? null : global;
      return S(e) ? 0 : m(e);
    }
    function Me() {
      const e = typeof globalThis > "u" ? null : globalThis;
      return S(e) ? 0 : m(e);
    }
    function Ae() {
      const e = typeof self > "u" ? null : self;
      return S(e) ? 0 : m(e);
    }
    function Te() {
      const e = typeof window > "u" ? null : window;
      return S(e) ? 0 : m(e);
    }
    function Se(e, t) {
      return e.then(t);
    }
    function ke(e) {
      const t = e.original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    function Oe(e, t, n) {
      return ae(e, t, 13, ie);
    }
    function Le(e, t) {
      return new Error(C(e, t));
    }
    function Re() {
      const e = u.__wbindgen_export_2, t = e.grow(4);
      e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
    }
    function Ce(e) {
      return typeof e == "function";
    }
    function Pe(e) {
      return e === void 0;
    }
    function Ue() {
      return u.memory;
    }
    function We(e, t) {
      throw new Error(C(e, t));
    }
    URL = globalThis.URL;
    const g = await oe({
      "./index_bg.js": {
        __wbindgen_error_new: Le,
        __wbindgen_cb_drop: ke,
        __wbg_queueMicrotask_97d92b4fcc8a61c5: pe,
        __wbg_queueMicrotask_d3219def82552485: he,
        __wbindgen_is_function: Ce,
        __wbg_newnoargs_105ed471475aaf50: ye,
        __wbg_call_672a4d21634d4a24: de,
        __wbindgen_is_undefined: Pe,
        __wbg_call_7cccdd69e0791ae2: ge,
        __wbg_new_23a2665fac83c611: be,
        __wbg_resolve_4851785c9c5f573d: xe,
        __wbg_then_44b73946d2fb3e7d: Se,
        __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: Me,
        __wbg_static_accessor_SELF_37c5d418e4bf5819: Ae,
        __wbg_static_accessor_WINDOW_5de37043a91a9c40: Te,
        __wbg_static_accessor_GLOBAL_88a902d13a557d07: Ee,
        __wbg_buffer_609cc3eee51ed158: fe,
        __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: me,
        __wbg_new_a12002a7f91c75be: we,
        __wbindgen_throw: We,
        __wbindgen_memory: Ue,
        __wbindgen_closure_wrapper45: Oe,
        __wbindgen_init_externref_table: Re
      }
    }, re), ze = g.memory, Ne = g.__wbg_cryptoutils_free, De = g.cryptoutils_otpKdf, Fe = g.__wbindgen_exn_store, Ie = g.__externref_table_alloc, ve = g.__wbindgen_export_2, He = g.__wbindgen_export_3, Be = g.__wbindgen_malloc, je = g.closure12_externref_shim, qe = g.closure25_externref_shim, j = g.__wbindgen_start;
    var Ve = Object.freeze({
      __proto__: null,
      __externref_table_alloc: Ie,
      __wbg_cryptoutils_free: Ne,
      __wbindgen_exn_store: Fe,
      __wbindgen_export_2: ve,
      __wbindgen_export_3: He,
      __wbindgen_malloc: Be,
      __wbindgen_start: j,
      closure12_externref_shim: je,
      closure25_externref_shim: qe,
      cryptoutils_otpKdf: De,
      memory: ze
    });
    se(Ve);
    j();
    (async function() {
      console.log("Initializing crypto WASM worker"), R(le), self.postMessage("NIMIQ_ONLOAD");
    })();
  })();
})();
