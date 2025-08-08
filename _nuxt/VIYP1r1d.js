import { d as x, i as b, c as r, o as n, e as h, u as t, h as S, t as v, a as F, g as q, n as A, B as N, E as H, f as $, b as I, aw as W, ax as G, p as D, ae as P, F as L, r as O, a1 as X, w as J, ay as U } from "./C95QRNzc.js";
import { S as T, P as Y } from "./D0DW2WUk.js";
import { _ as R } from "./DlAUqK2U.js";
import { u as Z } from "./BhpWC2zv.js";
import { f as Q, g as ee, h as te, i as oe } from "./DEpc-rVb.js";
import { c as se, u as ne } from "./BPgVFFXt.js";
const re = { relative: "" }, ce = ["width", "height"], ae = ["stroke", "cx", "cy", "r"], le = ["stroke", "stroke-width", "stroke-dasharray", "cx", "cy", "r"], ie = { "text-16": "", "font-bold": "", flex: "", "size-full": "", "items-center": "", "left-0": "", "top-0": "", "justify-center": "", absolute: "" }, ue = { key: 0 }, de = { key: 1, "text-24": "", "i-nimiq:check-thin": "" }, be = x({ __name: "RadialProgress", props: { progress: {}, radius: {}, strokeWidth: {}, innerStrokeWidth: {}, innerStroke: {}, stroke: {} }, setup(s) {
  const e = s, i = b(() => e.radius - e.strokeWidth * 2), l = b(() => i.value * 2 * Math.PI), c = b(() => `stroke-dashoffset: ${l.value - e.progress * l.value}`);
  return (o, a) => (n(), r("div", re, [(n(), r("svg", { block: "", "rotate--90": "", width: o.radius * 2, height: o.radius * 2, fill: "none" }, [h("circle", { style: S([{ transition: "stroke-dashoffset 0.6s var(--nq-ease)" }, { "stroke-width": o.innerStrokeWidth }]), stroke: o.innerStroke, cx: o.radius, cy: o.radius, r: t(i) }, null, 12, ae), h("circle", { class: "stroke", stroke: o.stroke, "stroke-width": o.strokeWidth, "stroke-dasharray": `${t(l)} ${t(l)}`, style: S(t(c)), cx: o.radius, cy: o.radius, r: t(i) }, null, 12, le)], 8, ce)), h("div", ie, [o.progress < 1 ? (n(), r("span", ue, v(Math.round(100 * o.progress)) + "% ", 1)) : (n(), r("div", de))])]));
} }), he = Object.assign(be, { __name: "AlbatrossLiveviewRadialProgress" }), me = { "text-24": "", "font-bold": "", "lh-none": "" }, ke = { "text-24": "", "mb-16": "" }, _e = x({ __name: "MacroBlock.client", props: { block: {} }, setup(s) {
  const e = s, i = b(() => Math.ceil(T * 2 / 3)), l = b(() => Math.min(e.block.votes / i.value, 1));
  return (c, o) => {
    const a = he;
    return n(), r("div", { class: A({ accepted: t(l) === 1 }), title: "Macro Block", flex: "~ col justify-between items-center shrink-0", text: "14 white center", "text-white": "", "my--24": "", "rounded-8": "", "bg-green": "", "h-208": "", "w-160": "", "transition-300": "", relative: "" }, [o[1] || (o[1] = h("header", { "text-11": "", "font-bold": "", "lh-24": "", uppercase: "", tracking: "0.1em" }, " Macro Block ", -1)), h("div", me, " M" + v(c.block.batch), 1), F(a, { progress: t(l), radius: 36, stroke: "#FFFFFFFF", "inner-stroke": "#FFFFFF66", "stroke-width": 2, "inner-stroke-width": 2 }, null, 8, ["progress"]), h("div", ke, [q(v(c.block.votes) + " / " + v(t(T)) + " ", 1), o[0] || (o[0] = h("div", { "text-12": "", "lh-none": "" }, " Votes ", -1))])], 2);
  };
} }), pe = Object.assign(R(_e, [["__scopeId", "data-v-35996e10"]]), { __name: "AlbatrossLiveviewMacroBlock" }), M = ["blue", "gold", "orange", "red", "purple", "pink", "green"], ve = { blue: "rgb(var(--nq-blue) / 1)", gold: "#E9B213", orange: "#FC8702", red: "#d94432", purple: "#5F4B8B", pink: "#FA7268", green: "#21BCA5" };
function fe(s) {
  let e;
  return "hash" in s ? e = Number.parseInt(s.hash, 16) % M.length : "publicKey" in s ? e = Number.parseInt(s.publicKey.substring(0, 8), 16) % M.length : e = s.nonce % M.length, M[e];
}
const V = (s) => ve[fe(s)], ge = 320, ye = 240, we = x({ __name: "TransactionCanvas", props: { hashes: {} }, setup(s) {
  const e = s, i = 2 * Math.PI, l = N();
  return H(() => {
    if (!l.value) return;
    const c = l.value.getContext("2d"), o = e.hashes.length;
    let a, m, d;
    o <= 88 ? (a = 8, m = a * 2 + 12, d = 12) : o <= 352 ? (a = 4, m = a * 2 + 6, d = 12) : (a = 2, m = a * 2 + 4, d = 10);
    const _ = ge - d - a, p = ye - d - a;
    let f = _, u = p;
    for (const k of e.hashes) c.beginPath(), c.arc(f, u, a, 0, i), c.fillStyle = V({ hash: k }), c.fill(), u -= m, u < a && (u = p, f -= m);
  }), (c, o) => (n(), r("canvas", { ref_key: "canvas", ref: l, width: "320", height: "240" }, null, 512));
} }), xe = Object.assign(we, { __name: "AlbatrossLiveviewTransactionCanvas" }), Be = { title: "Micro Block" }, Ne = { key: 0, text: "12 white center", "mt--22": "", "py-4": "", "rounded-t-8": "", "w-160": "", "bg-gradient-orange": "", "nq-label": "" }, Ce = { flex: "~ items-center justify-between", "text-15": "", "px-16": "", "pb-10": "", "pt-14": "" }, $e = { key: 0, "text-13": "", "font-semibold": "", "lh-none": "" }, Se = { key: 0, text: "neutral-700 13 center", "font-semibold": "", "mt-80": "", "grow-1": "" }, Ae = { key: 1, "grow-1": "" }, Me = { flex: "~ items-center justify-between gap-6", "pt-2": "", "w-full": "", text: "neutral-800 12" }, Fe = { "whitespace-nowrap": "" }, Le = { key: 0, "whitespace-nowrap": "" }, Oe = 1102, Ee = x({ __name: "MicroBlock", props: { block: {} }, setup(s) {
  const e = s, i = Z(), l = new Intl.NumberFormat(i.value, { style: "unit", unit: "second", unitDisplay: "short", maximumFractionDigits: 1 }), c = b(() => e.block.duration ? l.format(e.block.duration / 1e3) : "?"), o = b(() => e.block.transactions.length), a = b(() => e.block.transactions.slice(0, Oe).map((d) => d.hash.substring(0, 8))), m = b(() => e.block.number > 999999 ? "text-15/13.5" : e.block.number > 99999 ? "text-17" : e.block.number > 9999 ? "text-20" : "text-24/19");
  return (d, _) => {
    const p = xe;
    return n(), r("div", Be, [d.block.isSkip ? (n(), r("header", Ne, " Skip Block ")) : $("", true), h("div", { flex: "~ col shrink-0", "data-inverted": "", "text-neutral": "", "bg-neutral-0": "", "size-160": "", relative: "", class: A(d.block.isSkip ? "rounded-b-8" : "rounded-8") }, [h("div", Ce, [h("p", { "font-bold": "", class: A(t(m)) }, " #" + v(d.block.number), 3), t(o) > 0 ? (n(), r("p", $e, v(t(o)) + " TX ", 1)) : $("", true)]), t(o) ? (n(), r("div", Ae, [F(p, { origin: "[0_100%]", "scale-50": "", "bottom-0": "", "left-0": "", absolute: "", hashes: t(a) }, null, 8, ["hashes"])])) : (n(), r("div", Se, " No Transactions "))], 2), h("footer", Me, [h("p", Fe, " Slot " + v(d.block.producer.slotNumber), 1), t(c) !== "?" && Number(t(c).replace("s", "")) > 0 ? (n(), r("p", Le, v(t(c)) + " block time ", 1)) : $("", true)])]);
  };
} }), je = Object.assign(Ee, { __name: "AlbatrossLiveviewMicroBlock" });
var B = ((s) => (s.MicroBlock = "micro", s.MacroBlock = "macro", s.PlaceholderBlock = "placeholder", s))(B || {});
const z = 20, Ie = W(pe), Pe = { flex: "~ justify-end items-center" }, Te = { key: 2, grid: "~ place-content-center", "i-custom:curly": "", "h-120pt": "", "min-w-120pt": "", text: "30pt neutral-700/85" }, We = x({ __name: "Block", props: { block: {} }, setup(s) {
  return (e, i) => {
    const l = Ie, c = je;
    return n(), r("div", Pe, [i[0] || (i[0] = h("div", { "font-bold": "", "m-16": "", "top--8": "", relative: "", "i-nimiq:arrow-left-thin": "", text: "16 neutral-600" }, null, -1)), e.block.kind === ("LiveviewBlockType" in e ? e.LiveviewBlockType : t(B)).MacroBlock ? (n(), I(l, { key: 0, block: e.block }, null, 8, ["block"])) : e.block.kind === "micro" ? (n(), I(c, { key: 1, block: e.block }, null, 8, ["block"])) : e.block.kind === "placeholder" ? (n(), r("div", Te)) : $("", true)]);
  };
} }), De = Object.assign(We, { __name: "AlbatrossLiveviewBlock" });
function Re() {
  const s = G("albatross-blocks", () => []), { apiDomain: e } = D().public, i = new URL("/albatross/liveview/blocks", e), { status: l, data: c } = Q(i, { onError() {
    console.error("[Albatross Liveview] Error connecting to Albatross Blocks WebSocket"), l.value = "CLOSED";
  }, onConnected() {
    console.log("[Albatross Liveview] Connected to Albatross Blocks WebSocket"), l.value = "OPEN";
  }, onDisconnected() {
    console.log("[Albatross Liveview] Disconnected from Albatross Blocks WebSocket"), l.value = "CLOSED";
  }, immediate: true, autoReconnect: { retries: 3, delay: 1e3, onFailed() {
    console.error("[Albatross Liveview] Failed to connect Blocks EventSource after 3 retries");
  } } });
  function o(u) {
    var _a;
    u.kind === B.PlaceholderBlock && ((_a = s.value.at(-1)) == null ? void 0 : _a.kind) === B.PlaceholderBlock || (s.value = [...s.value, u].slice(-180));
  }
  const a = ee(), m = N(false);
  P(a, (u) => {
    u === "visible" && m.value ? o({ kind: B.PlaceholderBlock }) : m.value = false;
  }), P(c, (u) => {
    if (!u) return;
    if (a.value === "hidden") {
      m.value = true;
      return;
    }
    u.startsWith("[") && u.endsWith("]") ? s.value = JSON.parse(u) : s.value.length >= z && o(JSON.parse(u));
  });
  const d = b(() => s.value.filter((u) => u.kind === B.MicroBlock)), _ = b(() => d.value.at(-1)), p = b(() => {
    var _a;
    return ((_a = _.value) == null ? void 0 : _a.batch) || -1;
  }), f = b(() => {
    var _a;
    return ((_a = _.value) == null ? void 0 : _a.number) || -1;
  });
  return { status: l, blocks: s, microblocks: d, blockNumber: f, batchNumber: p };
}
const K = se(Re), Ve = { flex: "~ col wrap", h: "56 md:44" }, w = 60, ze = x({ __name: "Batch.client", props: { batchNumber: {}, blockNumber: {} }, setup(s) {
  const e = s, i = Y, { microblocks: l } = K();
  function c(k) {
    const y = i + (e.batchNumber - 1) * w + k, g = l.value.find((E) => E.number === y);
    return (g == null ? void 0 : g.producer.publicKey) ? V({ publicKey: g.producer.publicKey }) : "rgb(var(--nq-neutral) / 1)";
  }
  const o = N(false), a = ne(o), m = b(() => {
    if (e.batchNumber <= 0) return Math.max(0, w - 1);
    const k = i + e.batchNumber * w - e.blockNumber - 1;
    return Math.min(Math.max(k, 0), w - 1);
  }), d = b(() => Math.max(w - m.value - 1, 0)), _ = b(() => e.blockNumber > e.batchNumber * w + i), p = b(() => e.blockNumber === e.batchNumber * w + i - 1), f = b(() => {
    const k = [];
    return p.value ? k.push("animate-pulse") : _.value ? k.push("text-neutral op-100") : e.batchNumber > 999 && k.push("text-9"), k.join(" ");
  }), u = b(() => e.batchNumber > 99999 ? "text-7" : e.batchNumber > 9999 ? "text-8" : "text-9");
  return (k, y) => (n(), r("div", { "max-w": "[calc(100vw-12px)] md:full", flex: "~ justify-between items-start", "px-16": "", "w-388": "", onClick: y[0] || (y[0] = () => t(a)()) }, [h("div", Ve, [(n(true), r(L, null, O(t(d), (g) => (n(), r("div", { key: `micro-block-${g}`, "m-4": "", "rounded-2": "", "size-6": "", "inline-block": "", "transition-colors": "", style: S({ backgroundColor: t(o) ? c(g) : "rgb(var(--nq-neutral-800) / 1)" }) }, null, 4))), 128)), (n(true), r(L, null, O(t(m), (g) => (n(), r("div", { key: `micro-block-${t(d) + g}`, "m-4": "", "rounded-2": "", "bg-neutral-500": "", "size-6": "", "inline-block": "" }))), 128))]), h("div", { text: "14 neutral-900 center", flex: "~ justify-center col items-center", "font-bold": "", "ml-4": "", "rounded-8": "", "bg-neutral-600": "", "op-60": "", "shrink-0": "", "size-44": "", "transition-all": "", relative: "", class: A(t(f)) }, [y[1] || (y[1] = h("span", null, "M", -1)), h("span", { class: A(t(u)) }, v(k.batchNumber), 3)], 2)]));
} }), Ke = Object.assign(ze, { __name: "AlbatrossLiveviewBatch" }), qe = W(Ke), He = { flex: "~ justify-end items-center", "px-24": "", "min-h-208": "", "of-hidden": "" }, Ge = { key: 0, flex: "~ justify-center items-center", "font-bold": "", "min-h-224": "", "inset-0": "", absolute: "" }, Xe = { key: 0, text: "f-lg white" }, Je = { key: 1, text: "18 white", "px-32": "", "py-24": "", "rounded-4": "", "bg-red": "", shadow: "", ring: "1.5 red/3" }, Ue = { key: 1, flex: "~ justify-center", "px-32": "", "w-full": "", "of-hidden": "", "f-mt-lg": "" }, Ye = { flex: "~ justify-center" }, j = 208, Ze = 0.55, Qe = x({ __name: "Blockchain", setup(s) {
  const { blocks: e, batchNumber: i, blockNumber: l, status: c } = K(), o = N(0), a = N(e.value.length * j), { pause: m, resume: d } = te(() => {
    o.value = -Math.floor((52 + a.value) ** Ze), a.value += o.value;
  }, { immediate: false }), _ = N(), p = oe(_), f = b(() => c.value === "OPEN" && e.value.length >= z && p.value);
  P(e, () => {
    f.value && (a.value += j);
  }, { deep: true }), X(() => f.value ? d() : m());
  const { clientNetwork: u } = D().public;
  return (k, y) => {
    const g = De, E = qe;
    return n(), r("div", { ref_key: "target", ref: _, relative: "", "of-x-clip": "" }, [h("div", He, [F(U, { tag: "div", flex: "~ justify-end items-center", "enter-from-class": "op-0", "enter-active-class": "transition-opacity duration-400 ease-in", style: S({ transform: `translate3d(${t(a)}px, 0, 0)` }) }, { default: J(() => [(n(true), r(L, null, O(t(e), (C) => (n(), I(g, { key: `block-${C.number}`, block: C, style: S({ width: j }) }, null, 8, ["block", "style"]))), 128))]), _: 1 }, 8, ["style"])]), t(c) !== "OPEN" || t(e).length === 0 ? (n(), r("div", Ge, [t(c) === "CONNECTING" || t(e).length === 0 ? (n(), r("div", Xe, " Loading... ")) : t(c) === "CLOSED" ? (n(), r("div", Je, " We couldn't connect to the " + v(t(u)), 1)) : $("", true)])) : (n(), r("div", Ue, [h("div", Ye, [(n(), r(L, null, O(7, (C) => F(E, { key: `batch-${t(i) - 2 + C - 1}`, "batch-number": t(i) - 3 + C - 1, "block-number": t(l), class: "animate-batch-unshift" }, null, 8, ["batch-number", "block-number"])), 64))])]))], 512);
  };
} }), ct = Object.assign(R(Qe, [["__scopeId", "data-v-bb2ce265"]]), { __name: "AlbatrossLiveviewBlockchain" });
export {
  ct as _
};
