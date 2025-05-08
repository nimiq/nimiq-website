const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./CVq09srQ.js","./ClGJWWej.js","./entry.DOAdg7pv.css","./CVtsTRWS.js","./Bz4-DFcF.js","./xLWJwwMd.js","./CEBR9iVI.js","./YKo2rOHu.js","./B9j71pJ-.js"])))=>i.map(i=>d[i]);
import { d as N, j as m, c as i, o as l, e as h, u as o, h as S, t as w, a as A, g as U, n as T, i as X, B as C, E as Y, f as I, b as q, a4 as M, p as W, L as F, F as P, r as E, V as Z, a5 as ee, w as te, J as oe, K as se, __tla as __tla_0 } from "./ClGJWWej.js";
import { c as J } from "./CVtsTRWS.js";
import { S as K, P as ne } from "./Bz4-DFcF.js";
import { u as re } from "./xLWJwwMd.js";
import { g as ae, h as le, i as ie, j as ce } from "./CEBR9iVI.js";
import { u as ue } from "./YKo2rOHu.js";
import { u as de } from "./B9j71pJ-.js";
let _t, ht, pt, Ue;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const be = {
    relative: ""
  }, me = [
    "width",
    "height"
  ], he = [
    "stroke",
    "cx",
    "cy",
    "r"
  ], pe = [
    "stroke",
    "stroke-width",
    "stroke-dasharray",
    "cx",
    "cy",
    "r"
  ], _e = {
    absolute: "",
    "left-0": "",
    "top-0": "",
    "size-full": "",
    flex: "",
    "items-center": "",
    "justify-center": "",
    "text-16": "",
    "font-bold": ""
  }, ke = {
    key: 0
  }, fe = {
    key: 1,
    "text-24": "",
    "i-nimiq:check-thin": ""
  }, ve = N({
    __name: "RadialProgress",
    props: {
      progress: {},
      radius: {},
      strokeWidth: {},
      innerStrokeWidth: {},
      innerStroke: {},
      stroke: {}
    },
    setup(t) {
      const e = t, a = m(() => e.radius - e.strokeWidth * 2), c = m(() => a.value * 2 * Math.PI), n = m(() => `stroke-dashoffset: ${c.value - e.progress * c.value}`);
      return (s, r) => (l(), i("div", be, [
        (l(), i("svg", {
          block: "",
          "rotate--90": "",
          width: s.radius * 2,
          height: s.radius * 2,
          fill: "none"
        }, [
          h("circle", {
            style: S([
              {
                transition: "stroke-dashoffset 0.6s var(--nq-ease)"
              },
              {
                "stroke-width": s.innerStrokeWidth
              }
            ]),
            stroke: s.innerStroke,
            cx: s.radius,
            cy: s.radius,
            r: o(a)
          }, null, 12, he),
          h("circle", {
            class: "stroke",
            stroke: s.stroke,
            "stroke-width": s.strokeWidth,
            "stroke-dasharray": `${o(c)} ${o(c)}`,
            style: S(o(n)),
            cx: s.radius,
            cy: s.radius,
            r: o(a)
          }, null, 12, pe)
        ], 8, me)),
        h("div", _e, [
          s.progress < 1 ? (l(), i("span", ke, w(Math.round(100 * s.progress)) + "% ", 1)) : (l(), i("div", fe))
        ])
      ]));
    }
  }), ge = Object.assign(ve, {
    __name: "AlbatrossLiveviewRadialProgress"
  }), we = {
    "text-24": "",
    "font-bold": "",
    "lh-none": ""
  }, ye = {
    "mb-16": "",
    "text-24": ""
  }, xe = N({
    __name: "MacroBlock.client",
    props: {
      block: {}
    },
    setup(t) {
      const e = t, a = m(() => Math.ceil(K * 2 / 3)), c = m(() => Math.min(e.block.votes / a.value, 1));
      return (n, s) => {
        const r = ge;
        return l(), i("div", {
          class: T({
            accepted: o(c) === 1
          }),
          title: "Macro Block",
          flex: "~ col justify-between items-center shrink-0",
          text: "14 white center",
          relative: "",
          "my--24": "",
          "h-208": "",
          "w-160": "",
          "rounded-8": "",
          "bg-green": "",
          "text-white": "",
          "transition-300": ""
        }, [
          s[1] || (s[1] = h("header", {
            "text-11": "",
            "font-bold": "",
            "lh-24": "",
            uppercase: "",
            tracking: "0.1em"
          }, " Macro Block ", -1)),
          h("div", we, " M" + w(n.block.batch), 1),
          A(r, {
            progress: o(c),
            radius: 36,
            stroke: "#FFFFFFFF",
            "inner-stroke": "#FFFFFF66",
            "stroke-width": 2,
            "inner-stroke-width": 2
          }, null, 8, [
            "progress"
          ]),
          h("div", ye, [
            U(w(n.block.votes) + " / " + w(o(K)) + " ", 1),
            s[0] || (s[0] = h("div", {
              "text-12": "",
              "lh-none": ""
            }, " Votes ", -1))
          ])
        ], 2);
      };
    }
  }), Be = Object.assign(X(xe, [
    [
      "__scopeId",
      "data-v-1b963047"
    ]
  ]), {
    __name: "AlbatrossLiveviewMacroBlock"
  }), O = [
    "blue",
    "gold",
    "orange",
    "red",
    "purple",
    "pink",
    "green"
  ], Ne = {
    blue: "bg-blue",
    gold: "bg-gold",
    orange: "bg-orange",
    red: "bg-red",
    purple: "bg-purple",
    pink: "bg-[#FA7268]",
    green: "bg-green"
  }, Ce = {
    blue: "nq-pill-blue",
    gold: "nq-pill-gold",
    orange: "nq-pill-orange",
    red: "nq-pill-red",
    purple: "nq-pill bg-purple hocus:bg-purple/95",
    pink: "nq-pill bg-[#FA7268] hocus:bg-[#FA7268]/95",
    green: "nq-pill-green"
  }, Me = {
    blue: "rgb(var(--nq-blue) / 1)",
    gold: "#E9B213",
    orange: "#FC8702",
    red: "#d94432",
    purple: "#5F4B8B",
    pink: "#FA7268",
    green: "#21BCA5"
  };
  function R(t) {
    let e;
    return "hash" in t ? e = Number.parseInt(t.hash, 16) % O.length : "publicKey" in t ? e = Number.parseInt(t.publicKey.substring(0, 8), 16) % O.length : e = t.nonce % O.length, O[e];
  }
  let D, Te, $e, Ae, Fe, Se, Ie, Le, Oe, Pe, Ee, je, qe, De, H, We, Re;
  ht = (t) => Ne[R(t)];
  pt = (t) => Ce[R(t)];
  D = (t) => Me[R(t)];
  Te = 320;
  $e = 240;
  Ae = N({
    __name: "TransactionCanvas",
    props: {
      nonces: {},
      hashes: {}
    },
    setup(t) {
      const e = t, a = 2 * Math.PI, c = C();
      return Y(() => {
        if (!c.value) return;
        const n = c.value.getContext("2d"), s = e.nonces.length + e.hashes.length;
        let r, _, d;
        s <= 88 ? (r = 8, _ = r * 2 + 12, d = 12) : s <= 352 ? (r = 4, _ = r * 2 + 6, d = 12) : (r = 2, _ = r * 2 + 4, d = 10);
        const k = Te - d - r, g = $e - d - r;
        let f = k, p = g;
        for (const b of e.nonces) n.beginPath(), n.arc(f, p, r, 0, a), n.fillStyle = D({
          nonce: b
        }), n.fill(), p -= _, p < r && (p = g, f -= _);
        for (const b of e.hashes) n.beginPath(), n.arc(f, p, r, 0, a), n.fillStyle = D({
          hash: b
        }), n.fill(), p -= _, p < r && (p = g, f -= _);
      }), (n, s) => (l(), i("canvas", {
        ref_key: "canvas",
        ref: c,
        width: "320",
        height: "240"
      }, null, 512));
    }
  });
  Fe = Object.assign(Ae, {
    __name: "AlbatrossLiveviewTransactionCanvas"
  });
  Se = {
    title: "Micro Block"
  };
  Ie = {
    key: 0,
    text: "12 white center",
    "mt--22": "",
    "w-160": "",
    "rounded-t-8": "",
    "py-4": "",
    "bg-gradient-orange": "",
    "nq-label": ""
  };
  Le = {
    flex: "~ items-center justify-between",
    "px-16": "",
    "pb-10": "",
    "pt-14": "",
    "text-15": ""
  };
  Oe = {
    key: 0,
    "text-13": "",
    "font-semibold": "",
    "lh-none": ""
  };
  Pe = {
    key: 0,
    text: "neutral-700 13 center",
    "mt-80": "",
    "grow-1": "",
    "font-semibold": ""
  };
  Ee = {
    key: 1,
    "grow-1": ""
  };
  je = {
    flex: "~ items-center justify-between gap-6",
    "w-full": "",
    "pt-2": "",
    text: "neutral-800 12"
  };
  qe = {
    "whitespace-nowrap": ""
  };
  De = {
    "whitespace-nowrap": ""
  };
  H = 1102;
  We = N({
    __name: "MicroBlock",
    props: {
      block: {}
    },
    setup(t) {
      const e = t, a = re(), c = new Intl.NumberFormat(a.value, {
        style: "unit",
        unit: "second",
        unitDisplay: "short",
        maximumFractionDigits: 1
      }), n = m(() => e.block.duration ? c.format(e.block.duration / 1e3) : "?"), s = m(() => e.block.matchedTxs.length + e.block.unmatchedTxs.length), r = m(() => e.block.matchedTxs.slice(0, H)), _ = m(() => e.block.unmatchedTxs.slice(0, H - r.value.length)), d = m(() => e.block.number > 999999 ? "text-15/13.5" : e.block.number > 99999 ? "text-17" : e.block.number > 9999 ? "text-20" : "text-24/19");
      return (k, g) => {
        const f = Fe;
        return l(), i("div", Se, [
          k.block.isSkip ? (l(), i("header", Ie, " Skip Block ")) : I("", true),
          h("div", {
            flex: "~ col shrink-0",
            relative: "",
            "size-160": "",
            "bg-neutral": "",
            "text-neutral-0": "",
            class: T(k.block.isSkip ? "rounded-b-8" : "rounded-8")
          }, [
            h("div", Le, [
              h("p", {
                "font-bold": "",
                class: T(o(d))
              }, " #" + w(k.block.number), 3),
              o(s) > 0 ? (l(), i("p", Oe, w(o(s)) + " TX ", 1)) : I("", true)
            ]),
            o(s) ? (l(), i("div", Ee, [
              A(f, {
                origin: "[0_100%]",
                absolute: "",
                "bottom-0": "",
                "left-0": "",
                "scale-50": "",
                nonces: o(r),
                hashes: o(_)
              }, null, 8, [
                "nonces",
                "hashes"
              ])
            ])) : (l(), i("div", Pe, " No Transactions "))
          ], 2),
          h("footer", je, [
            h("p", qe, " Slot " + w(k.block.producer.slotNumber), 1),
            h("p", De, w(o(n)) + " block time ", 1)
          ])
        ]);
      };
    }
  });
  Re = Object.assign(We, {
    __name: "AlbatrossLiveviewMicroBlock"
  });
  var B = ((t) => (t.MicroBlock = "micro", t.MacroBlock = "macro", t.PlaceholderBlock = "placeholder", t))(B || {});
  const Q = 20, Ve = J(Be), ze = {
    flex: "~ justify-end items-center"
  }, Ke = {
    key: 2,
    grid: "~ place-content-center",
    "i-custom:curly": "",
    "h-120pt": "",
    "min-w-120pt": "",
    text: "30pt neutral-700/85"
  }, He = N({
    __name: "Block",
    props: {
      block: {}
    },
    setup(t) {
      return (e, a) => {
        const c = Ve, n = Re;
        return l(), i("div", ze, [
          a[0] || (a[0] = h("div", {
            relative: "",
            "top--8": "",
            "m-16": "",
            "font-bold": "",
            "i-nimiq:arrow-left-thin": "",
            text: "16 neutral-600"
          }, null, -1)),
          e.block.kind === ("LiveviewBlockType" in e ? e.LiveviewBlockType : o(B)).MacroBlock ? (l(), q(c, {
            key: 0,
            block: e.block
          }, null, 8, [
            "block"
          ])) : e.block.kind === "micro" ? (l(), q(n, {
            key: 1,
            block: e.block
          }, null, 8, [
            "block"
          ])) : e.block.kind === "placeholder" ? (l(), i("div", Ke)) : I("", true)
        ]);
      };
    }
  }), Ge = Object.assign(He, {
    __name: "AlbatrossLiveviewBlock"
  });
  function V() {
    const t = M("albatross-blocks", () => []), e = M("albatross-status", () => "CONNECTING"), a = M("albatross-ws-initialized", () => false);
    if (!a.value) {
      let d = function(u) {
        var _a;
        u.kind === B.PlaceholderBlock && ((_a = t.value.at(-1)) == null ? void 0 : _a.kind) === B.PlaceholderBlock || (t.value = [
          ...t.value,
          u
        ].slice(-180));
      };
      const k = `${W().public.apiDomain}/api/albatross/liveview/blocks`, { status: g, data: f } = ae(k, {
        autoReconnect: {
          retries: 3,
          delay: 1e3,
          onFailed() {
            console.error("Failed to connect Blocks EventSource after 3 retries");
          }
        }
      });
      F(g, (u) => {
        e.value = u;
      });
      const p = le(), b = C(false);
      F(p, (u) => {
        u === "visible" && b.value ? d({
          kind: B.PlaceholderBlock
        }) : b.value = false;
      }), F(f, (u) => {
        if (!u) return;
        if (p.value === "hidden") {
          b.value = true;
          return;
        }
        u.startsWith("[") && u.endsWith("]") ? t.value = JSON.parse(u) : t.value.length >= Q && d(JSON.parse(u));
      }), a.value = true;
    }
    const c = m(() => t.value.filter((d) => d.kind === B.MicroBlock)), n = m(() => c.value.at(-1)), s = m(() => {
      var _a;
      return ((_a = n.value) == null ? void 0 : _a.batch) || -1;
    }), r = m(() => {
      var _a;
      return ((_a = n.value) == null ? void 0 : _a.number) || -1;
    }), _ = m(() => t.value.filter((d) => d.kind === B.MicroBlock).map((d) => d.matchedTxs).flat());
    return {
      status: e,
      blocks: t,
      microblocks: c,
      blockNumber: r,
      batchNumber: s,
      matchedTxs: _
    };
  }
  const Xe = {
    flex: "~ col wrap",
    h: "56 md:44"
  }, x = 60, Je = N({
    __name: "Batch.client",
    props: {
      batchNumber: {},
      blockNumber: {}
    },
    setup(t) {
      const e = t, a = ne, { microblocks: c } = V();
      function n(b) {
        const u = a + (e.batchNumber - 1) * x + b, v = c.value.find((L) => L.number === u);
        return (v == null ? void 0 : v.producer.publicKey) ? D({
          publicKey: v.producer.publicKey
        }) : "rgb(var(--nq-neutral) / 1)";
      }
      const s = C(false), r = ue(s), _ = m(() => {
        if (e.batchNumber <= 0) return Math.max(0, x - 1);
        const b = a + e.batchNumber * x - e.blockNumber - 1;
        return Math.min(Math.max(b, 0), x - 1);
      }), d = m(() => Math.max(x - _.value - 1, 0)), k = m(() => e.blockNumber > e.batchNumber * x + a), g = m(() => e.blockNumber === e.batchNumber * x + a - 1), f = m(() => {
        const b = [];
        return g.value ? b.push("animate-pulse") : k.value ? b.push("text-neutral op-100") : e.batchNumber > 999 && b.push("text-9"), b.join(" ");
      }), p = m(() => e.batchNumber > 99999 ? "text-7" : e.batchNumber > 9999 ? "text-8" : "text-9");
      return (b, u) => (l(), i("div", {
        "max-w": "[calc(100vw-12px)] md:full",
        flex: "~ justify-between items-start",
        "w-388": "",
        "px-16": "",
        onClick: u[0] || (u[0] = () => o(r)())
      }, [
        h("div", Xe, [
          (l(true), i(P, null, E(o(d), (v) => (l(), i("div", {
            key: `micro-block-${v}`,
            "m-4": "",
            "inline-block": "",
            "size-6": "",
            "rounded-2": "",
            "transition-colors": "",
            style: S({
              backgroundColor: o(s) ? n(v) : "rgb(var(--nq-neutral-800) / 1)"
            })
          }, null, 4))), 128)),
          (l(true), i(P, null, E(o(_), (v) => (l(), i("div", {
            key: `micro-block-${o(d) + v}`,
            "m-4": "",
            "inline-block": "",
            "size-6": "",
            "rounded-2": "",
            "bg-neutral-500": ""
          }))), 128))
        ]),
        h("div", {
          text: "14 neutral-900 center",
          flex: "~ justify-center col items-center",
          relative: "",
          "ml-4": "",
          "size-44": "",
          "shrink-0": "",
          "rounded-8": "",
          "bg-neutral-600": "",
          "font-bold": "",
          "op-60": "",
          "transition-all": "",
          class: T(o(f))
        }, [
          u[1] || (u[1] = h("span", null, "M", -1)),
          h("span", {
            class: T(o(p))
          }, w(b.batchNumber), 3)
        ], 2)
      ]));
    }
  }), Qe = Object.assign(Je, {
    __name: "AlbatrossLiveviewBatch"
  }), G = () => Math.round(Math.random() * (2 ** 32 - 1));
  Ue = function() {
    const t = M("albatross-can-send-tx", () => false), e = M("albatross-nonce", G), a = M("albatross-animation-active", () => false), { matchedTxs: c, blockNumber: n } = V(), s = `${W().public.apiDomain}/api/albatross/liveview/send-dummy-tx`, { status: r, refresh: _, error: d, clear: k } = de(s, {
      method: "POST",
      body: {
        nonce: e,
        validityStartHeight: n
      },
      timeout: 5e3,
      immediate: false,
      watch: false,
      onRequest() {
        if (!t.value) throw new Error("Cannot send transaction, you need to change `canSendTx` to `true`");
      }
    }, "$gIbQl5o093"), g = (u) => new Promise((v) => setTimeout(v, u)), f = 400, p = 6e3;
    async function b() {
      if (r.value !== "idle" || a.value) return;
      a.value = true;
      const u = Date.now(), v = new Promise(($) => {
        const y = F(c, () => {
          c.value.includes(e.value) && (y(), $(true));
        });
      }), L = new Promise(($) => {
        setTimeout(() => $(false), p);
      });
      await _(), await g(Math.max(0, f - (Date.now() - u))), await Promise.race([
        v,
        L
      ]) || console.warn("Transaction matching timed out after", p, "ms"), e.value = G(), k(), a.value = false;
    }
    return {
      canSendTx: t,
      sendTx: b,
      error: d,
      status: r,
      nonce: e,
      animationActive: a
    };
  };
  let Ye, Ze, et, tt, ot, st, nt, j, rt, at;
  Ye = J(Qe);
  Ze = {
    key: 0,
    absolute: "",
    "right-32": ""
  };
  et = {
    key: 0,
    flex: "~ justify-center items-center",
    absolute: "",
    "inset-0": "",
    "min-h-224": "",
    "font-bold": ""
  };
  tt = {
    key: 0,
    text: "f-lg white"
  };
  ot = {
    key: 1,
    text: "18 white",
    "rounded-4": "",
    "bg-red": "",
    "px-32": "",
    "py-24": "",
    shadow: "",
    ring: "1.5 red/3"
  };
  st = {
    key: 1,
    flex: "~ justify-center",
    "w-full": "",
    "of-hidden": "",
    "px-32": "",
    "f-mt-lg": ""
  };
  nt = {
    flex: "~ justify-center"
  };
  j = 208;
  rt = 0.55;
  at = N({
    __name: "Blockchain",
    setup(t) {
      const { blocks: e, batchNumber: a, blockNumber: c, status: n } = V(), s = C(0), r = C(e.value.length * j), { pause: _, resume: d } = ie(() => {
        s.value = -Math.floor((52 + r.value) ** rt), r.value += s.value;
      }, {
        immediate: false
      }), k = C(), g = ce(k), f = m(() => n.value === "OPEN" && e.value.length >= Q && g.value);
      F(e, () => {
        f.value && (r.value += j);
      }, {
        deep: true
      }), Z(() => f.value ? d() : _());
      const { canSendTx: p } = Ue(), b = oe(() => se(() => import("./CVq09srQ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8]), import.meta.url)), { clientNetwork: u } = W().public;
      return (v, L) => {
        const z = Ge, $ = Ye;
        return l(), i("div", {
          ref_key: "target",
          ref: k,
          relative: "",
          "of-x-clip": ""
        }, [
          h("div", {
            flex: "~ justify-end items-center",
            "min-h-208": "",
            "of-hidden": "",
            "px-24": "",
            class: T({
              "pr-84": o(p)
            })
          }, [
            A(ee, {
              tag: "div",
              flex: "~ justify-end items-center",
              "enter-from-class": "op-0",
              "enter-active-class": "transition-opacity duration-400 ease-in",
              style: S({
                transform: `translate3d(${o(r)}px, 0, 0)`
              })
            }, {
              default: te(() => [
                (l(true), i(P, null, E(o(e), (y) => (l(), q(z, {
                  key: `block-${y.number}`,
                  block: y,
                  style: S({
                    width: j
                  })
                }, null, 8, [
                  "block",
                  "style"
                ]))), 128))
              ]),
              _: 1
            }, 8, [
              "style"
            ]),
            o(p) ? (l(), i("div", Ze, [
              A(o(b))
            ])) : I("", true)
          ], 2),
          o(n) !== "OPEN" || o(e).length === 0 ? (l(), i("div", et, [
            o(n) === "CONNECTING" || o(e).length === 0 ? (l(), i("div", tt, " Loading... ")) : o(n) === "CLOSED" ? (l(), i("div", ot, " We couldn't connect to the " + w(o(u)), 1)) : I("", true)
          ])) : (l(), i("div", st, [
            h("div", nt, [
              (l(), i(P, null, E(7, (y) => A($, {
                key: `batch-${o(a) - 2 + y - 1}`,
                "batch-number": o(a) - 3 + y - 1,
                "block-number": o(c),
                class: "animate-batch-unshift"
              }, null, 8, [
                "batch-number",
                "block-number"
              ])), 64))
            ])
          ]))
        ], 512);
      };
    }
  });
  _t = Object.assign(X(at, [
    [
      "__scopeId",
      "data-v-cd6e1237"
    ]
  ]), {
    __name: "AlbatrossLiveviewBlockchain"
  });
});
export {
  _t as _,
  __tla,
  ht as a,
  pt as g,
  Ue as u
};
