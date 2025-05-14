const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BSuBKpxP.js","./7tyaNgEA.js","./entry.DNs0Y1sA.css","./Bz4-DFcF.js","./DSYs-LpM.js","./-SGvg42Q.js","./8Lad1M9Y.js","./qVQu3vrU.js"])))=>i.map(i=>d[i]);
import { d as N, j as m, c, o as l, e as h, u as o, h as $, t as y, a as S, g as U, n as T, i as X, B as C, E as Y, f as F, b as D, a4 as J, a5 as M, q, L as E, F as I, r as P, V as Z, a6 as ee, w as te, J as oe, K as se, __tla as __tla_0 } from "./7tyaNgEA.js";
import { S as K, P as ne } from "./Bz4-DFcF.js";
import { u as re } from "./DSYs-LpM.js";
import { g as ae, h as le, i as ce, j as ie } from "./-SGvg42Q.js";
import { u as ue } from "./8Lad1M9Y.js";
import { u as de } from "./qVQu3vrU.js";
let pt, mt, ht, Ue;
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
  ], ke = {
    absolute: "",
    "left-0": "",
    "top-0": "",
    "size-full": "",
    flex: "",
    "items-center": "",
    "justify-center": "",
    "text-16": "",
    "font-bold": ""
  }, _e = {
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
      const e = t, a = m(() => e.radius - e.strokeWidth * 2), i = m(() => a.value * 2 * Math.PI), n = m(() => `stroke-dashoffset: ${i.value - e.progress * i.value}`);
      return (s, r) => (l(), c("div", be, [
        (l(), c("svg", {
          block: "",
          "rotate--90": "",
          width: s.radius * 2,
          height: s.radius * 2,
          fill: "none"
        }, [
          h("circle", {
            style: $([
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
            "stroke-dasharray": `${o(i)} ${o(i)}`,
            style: $(o(n)),
            cx: s.radius,
            cy: s.radius,
            r: o(a)
          }, null, 12, pe)
        ], 8, me)),
        h("div", ke, [
          s.progress < 1 ? (l(), c("span", _e, y(Math.round(100 * s.progress)) + "% ", 1)) : (l(), c("div", fe))
        ])
      ]));
    }
  }), ge = Object.assign(ve, {
    __name: "AlbatrossLiveviewRadialProgress"
  }), ye = {
    "text-24": "",
    "font-bold": "",
    "lh-none": ""
  }, we = {
    "mb-16": "",
    "text-24": ""
  }, xe = N({
    __name: "MacroBlock.client",
    props: {
      block: {}
    },
    setup(t) {
      const e = t, a = m(() => Math.ceil(K * 2 / 3)), i = m(() => Math.min(e.block.votes / a.value, 1));
      return (n, s) => {
        const r = ge;
        return l(), c("div", {
          class: T({
            accepted: o(i) === 1
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
          h("div", ye, " M" + y(n.block.batch), 1),
          S(r, {
            progress: o(i),
            radius: 36,
            stroke: "#FFFFFFFF",
            "inner-stroke": "#FFFFFF66",
            "stroke-width": 2,
            "inner-stroke-width": 2
          }, null, 8, [
            "progress"
          ]),
          h("div", we, [
            U(y(n.block.votes) + " / " + y(o(K)) + " ", 1),
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
  }), L = [
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
    return "hash" in t ? e = Number.parseInt(t.hash, 16) % L.length : "publicKey" in t ? e = Number.parseInt(t.publicKey.substring(0, 8), 16) % L.length : e = t.nonce % L.length, L[e];
  }
  let W, Te, Ae, Se, $e, Fe, Oe, Le, Ee, Ie, Pe, je, De, We, H, qe, Re;
  mt = (t) => Ne[R(t)];
  ht = (t) => Ce[R(t)];
  W = (t) => Me[R(t)];
  Te = 320;
  Ae = 240;
  Se = N({
    __name: "TransactionCanvas",
    props: {
      nonces: {},
      hashes: {}
    },
    setup(t) {
      const e = t, a = 2 * Math.PI, i = C();
      return Y(() => {
        if (!i.value) return;
        const n = i.value.getContext("2d"), s = e.nonces.length + e.hashes.length;
        let r, k, u;
        s <= 88 ? (r = 8, k = r * 2 + 12, u = 12) : s <= 352 ? (r = 4, k = r * 2 + 6, u = 12) : (r = 2, k = r * 2 + 4, u = 10);
        const _ = Te - u - r, v = Ae - u - r;
        let f = _, p = v;
        for (const b of e.nonces) n.beginPath(), n.arc(f, p, r, 0, a), n.fillStyle = W({
          nonce: b
        }), n.fill(), p -= k, p < r && (p = v, f -= k);
        for (const b of e.hashes) n.beginPath(), n.arc(f, p, r, 0, a), n.fillStyle = W({
          hash: b
        }), n.fill(), p -= k, p < r && (p = v, f -= k);
      }), (n, s) => (l(), c("canvas", {
        ref_key: "canvas",
        ref: i,
        width: "320",
        height: "240"
      }, null, 512));
    }
  });
  $e = Object.assign(Se, {
    __name: "AlbatrossLiveviewTransactionCanvas"
  });
  Fe = {
    title: "Micro Block"
  };
  Oe = {
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
  Ee = {
    key: 0,
    "text-13": "",
    "font-semibold": "",
    "lh-none": ""
  };
  Ie = {
    key: 0,
    text: "neutral-700 13 center",
    "mt-80": "",
    "grow-1": "",
    "font-semibold": ""
  };
  Pe = {
    key: 1,
    "grow-1": ""
  };
  je = {
    flex: "~ items-center justify-between gap-6",
    "w-full": "",
    "pt-2": "",
    text: "neutral-800 12"
  };
  De = {
    "whitespace-nowrap": ""
  };
  We = {
    "whitespace-nowrap": ""
  };
  H = 1102;
  qe = N({
    __name: "MicroBlock",
    props: {
      block: {}
    },
    setup(t) {
      const e = t, a = re(), i = new Intl.NumberFormat(a.value, {
        style: "unit",
        unit: "second",
        unitDisplay: "short",
        maximumFractionDigits: 1
      }), n = m(() => e.block.duration ? i.format(e.block.duration / 1e3) : "?"), s = m(() => e.block.matchedTxs.length + e.block.unmatchedTxs.length), r = m(() => e.block.matchedTxs.slice(0, H)), k = m(() => e.block.unmatchedTxs.slice(0, H - r.value.length)), u = m(() => e.block.number > 999999 ? "text-15/13.5" : e.block.number > 99999 ? "text-17" : e.block.number > 9999 ? "text-20" : "text-24/19");
      return (_, v) => {
        const f = $e;
        return l(), c("div", Fe, [
          _.block.isSkip ? (l(), c("header", Oe, " Skip Block ")) : F("", true),
          h("div", {
            flex: "~ col shrink-0",
            relative: "",
            "size-160": "",
            "bg-neutral": "",
            "text-neutral-0": "",
            class: T(_.block.isSkip ? "rounded-b-8" : "rounded-8")
          }, [
            h("div", Le, [
              h("p", {
                "font-bold": "",
                class: T(o(u))
              }, " #" + y(_.block.number), 3),
              o(s) > 0 ? (l(), c("p", Ee, y(o(s)) + " TX ", 1)) : F("", true)
            ]),
            o(s) ? (l(), c("div", Pe, [
              S(f, {
                origin: "[0_100%]",
                absolute: "",
                "bottom-0": "",
                "left-0": "",
                "scale-50": "",
                nonces: o(r),
                hashes: o(k)
              }, null, 8, [
                "nonces",
                "hashes"
              ])
            ])) : (l(), c("div", Ie, " No Transactions "))
          ], 2),
          h("footer", je, [
            h("p", De, " Slot " + y(_.block.producer.slotNumber), 1),
            h("p", We, y(o(n)) + " block time ", 1)
          ])
        ]);
      };
    }
  });
  Re = Object.assign(qe, {
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
        const i = Ve, n = Re;
        return l(), c("div", ze, [
          a[0] || (a[0] = h("div", {
            relative: "",
            "top--8": "",
            "m-16": "",
            "font-bold": "",
            "i-nimiq:arrow-left-thin": "",
            text: "16 neutral-600"
          }, null, -1)),
          e.block.kind === ("LiveviewBlockType" in e ? e.LiveviewBlockType : o(B)).MacroBlock ? (l(), D(i, {
            key: 0,
            block: e.block
          }, null, 8, [
            "block"
          ])) : e.block.kind === "micro" ? (l(), D(n, {
            key: 1,
            block: e.block
          }, null, 8, [
            "block"
          ])) : e.block.kind === "placeholder" ? (l(), c("div", Ke)) : F("", true)
        ]);
      };
    }
  }), Ge = Object.assign(He, {
    __name: "AlbatrossLiveviewBlock"
  });
  function V() {
    const t = M("albatross-blocks", () => []), e = M("albatross-status", () => "CONNECTING"), a = M("albatross-ws-initialized", () => false);
    if (!a.value) {
      let u = function(d) {
        var _a;
        d.kind === B.PlaceholderBlock && ((_a = t.value.at(-1)) == null ? void 0 : _a.kind) === B.PlaceholderBlock || (t.value = [
          ...t.value,
          d
        ].slice(-180));
      };
      const _ = `${q().public.apiDomain}/albatross/liveview/blocks`, { status: v, data: f } = ae(_, {
        onError() {
          console.error("Error connecting to Albatross Blocks WebSocket"), v.value = "CLOSED";
        },
        onConnected() {
          console.log("Connected to Albatross Blocks WebSocket"), v.value = "OPEN";
        },
        onDisconnected() {
          console.log("Disconnected from Albatross Blocks WebSocket"), v.value = "CLOSED";
        },
        immediate: true,
        autoReconnect: {
          retries: 3,
          delay: 1e3,
          onFailed() {
            console.error("Failed to connect Blocks EventSource after 3 retries");
          }
        }
      }), p = le(), b = C(false);
      E(p, (d) => {
        d === "visible" && b.value ? u({
          kind: B.PlaceholderBlock
        }) : b.value = false;
      }), E(f, (d) => {
        if (!d) return;
        if (p.value === "hidden") {
          b.value = true;
          return;
        }
        d.startsWith("[") && d.endsWith("]") ? t.value = JSON.parse(d) : t.value.length >= Q && u(JSON.parse(d));
      }), a.value = true;
    }
    const i = m(() => t.value.filter((u) => u.kind === B.MicroBlock)), n = m(() => i.value.at(-1)), s = m(() => {
      var _a;
      return ((_a = n.value) == null ? void 0 : _a.batch) || -1;
    }), r = m(() => {
      var _a;
      return ((_a = n.value) == null ? void 0 : _a.number) || -1;
    }), k = m(() => t.value.filter((u) => u.kind === B.MicroBlock).map((u) => u.matchedTxs).flat());
    return {
      status: e,
      blocks: t,
      microblocks: i,
      blockNumber: r,
      batchNumber: s,
      matchedTxs: k
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
      const e = t, a = ne, { microblocks: i } = V();
      function n(b) {
        const d = a + (e.batchNumber - 1) * x + b, g = i.value.find((O) => O.number === d);
        return (g == null ? void 0 : g.producer.publicKey) ? W({
          publicKey: g.producer.publicKey
        }) : "rgb(var(--nq-neutral) / 1)";
      }
      const s = C(false), r = ue(s), k = m(() => {
        if (e.batchNumber <= 0) return Math.max(0, x - 1);
        const b = a + e.batchNumber * x - e.blockNumber - 1;
        return Math.min(Math.max(b, 0), x - 1);
      }), u = m(() => Math.max(x - k.value - 1, 0)), _ = m(() => e.blockNumber > e.batchNumber * x + a), v = m(() => e.blockNumber === e.batchNumber * x + a - 1), f = m(() => {
        const b = [];
        return v.value ? b.push("animate-pulse") : _.value ? b.push("text-neutral op-100") : e.batchNumber > 999 && b.push("text-9"), b.join(" ");
      }), p = m(() => e.batchNumber > 99999 ? "text-7" : e.batchNumber > 9999 ? "text-8" : "text-9");
      return (b, d) => (l(), c("div", {
        "max-w": "[calc(100vw-12px)] md:full",
        flex: "~ justify-between items-start",
        "w-388": "",
        "px-16": "",
        onClick: d[0] || (d[0] = () => o(r)())
      }, [
        h("div", Xe, [
          (l(true), c(I, null, P(o(u), (g) => (l(), c("div", {
            key: `micro-block-${g}`,
            "m-4": "",
            "inline-block": "",
            "size-6": "",
            "rounded-2": "",
            "transition-colors": "",
            style: $({
              backgroundColor: o(s) ? n(g) : "rgb(var(--nq-neutral-800) / 1)"
            })
          }, null, 4))), 128)),
          (l(true), c(I, null, P(o(k), (g) => (l(), c("div", {
            key: `micro-block-${o(u) + g}`,
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
          d[1] || (d[1] = h("span", null, "M", -1)),
          h("span", {
            class: T(o(p))
          }, y(b.batchNumber), 3)
        ], 2)
      ]));
    }
  }), Qe = Object.assign(Je, {
    __name: "AlbatrossLiveviewBatch"
  }), G = () => Math.round(Math.random() * (2 ** 32 - 1));
  Ue = function() {
    const t = M("albatross-can-send-tx", () => false), e = M("albatross-nonce", G), a = M("albatross-animation-active", () => false), { matchedTxs: i, blockNumber: n } = V(), s = `${q().public.apiDomain}/api/albatross/liveview/send-dummy-tx`, { status: r, refresh: k, error: u, clear: _ } = de(s, {
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
    }, "$gIbQl5o093"), v = (d) => new Promise((g) => setTimeout(g, d)), f = 400, p = 6e3;
    async function b() {
      if (r.value !== "idle" || a.value) return;
      a.value = true;
      const d = Date.now(), g = new Promise((A) => {
        const w = E(i, () => {
          i.value.includes(e.value) && (w(), A(true));
        });
      }), O = new Promise((A) => {
        setTimeout(() => A(false), p);
      });
      await k(), await v(Math.max(0, f - (Date.now() - d))), await Promise.race([
        g,
        O
      ]) || console.warn("Transaction matching timed out after", p, "ms"), e.value = G(), _(), a.value = false;
    }
    return {
      canSendTx: t,
      sendTx: b,
      error: u,
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
      const { blocks: e, batchNumber: a, blockNumber: i, status: n } = V(), s = C(0), r = C(e.value.length * j), { pause: k, resume: u } = ce(() => {
        s.value = -Math.floor((52 + r.value) ** rt), r.value += s.value;
      }, {
        immediate: false
      }), _ = C(), v = ie(_), f = m(() => n.value === "OPEN" && e.value.length >= Q && v.value);
      E(e, () => {
        f.value && (r.value += j);
      }, {
        deep: true
      }), Z(() => f.value ? u() : k());
      const { canSendTx: p } = Ue(), b = oe(() => se(() => import("./BSuBKpxP.js"), __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url)), { clientNetwork: d } = q().public;
      return (g, O) => {
        const z = Ge, A = Ye;
        return l(), c("div", {
          ref_key: "target",
          ref: _,
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
            S(ee, {
              tag: "div",
              flex: "~ justify-end items-center",
              "enter-from-class": "op-0",
              "enter-active-class": "transition-opacity duration-400 ease-in",
              style: $({
                transform: `translate3d(${o(r)}px, 0, 0)`
              })
            }, {
              default: te(() => [
                (l(true), c(I, null, P(o(e), (w) => (l(), D(z, {
                  key: `block-${w.number}`,
                  block: w,
                  style: $({
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
            o(p) ? (l(), c("div", Ze, [
              S(o(b))
            ])) : F("", true)
          ], 2),
          o(n) !== "OPEN" || o(e).length === 0 ? (l(), c("div", et, [
            o(n) === "CONNECTING" || o(e).length === 0 ? (l(), c("div", tt, " Loading... ")) : o(n) === "CLOSED" ? (l(), c("div", ot, " We couldn't connect to the " + y(o(d)), 1)) : F("", true)
          ])) : (l(), c("div", st, [
            h("div", nt, [
              (l(), c(I, null, P(7, (w) => S(A, {
                key: `batch-${o(a) - 2 + w - 1}`,
                "batch-number": o(a) - 3 + w - 1,
                "block-number": o(i),
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
  pt = Object.assign(X(at, [
    [
      "__scopeId",
      "data-v-cd6e1237"
    ]
  ]), {
    __name: "AlbatrossLiveviewBlockchain"
  });
});
export {
  pt as _,
  __tla,
  mt as a,
  ht as g,
  Ue as u
};
