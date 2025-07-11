import { d as x, j as b, c as a, o as n, e as h, u as t, h as S, t as p, a as F, g as K, n as A, i as W, B as N, E as H, f as $, b as I, ac as D, ad as X, q as R, X as P, F as L, r as O, U as G, ae as J, w as U } from "./gdLxT4Lf.js";
import { S as T, P as Y } from "./D0DW2WUk.js";
import { u as Z } from "./ZiJUCFG6.js";
import { g as Q, h as ee, i as te, j as oe } from "./eRMYwULF.js";
import { c as se, u as ne } from "./DYDUvkDP.js";
const re = { relative: "" }, ce = ["width", "height"], ae = ["stroke", "cx", "cy", "r"], le = ["stroke", "stroke-width", "stroke-dasharray", "cx", "cy", "r"], ie = { "text-16": "", "font-bold": "", flex: "", "size-full": "", "items-center": "", "left-0": "", "top-0": "", "justify-center": "", absolute: "" }, ue = { key: 0 }, de = { key: 1, "text-24": "", "i-nimiq:check-thin": "" }, be = x({ __name: "RadialProgress", props: { progress: {}, radius: {}, strokeWidth: {}, innerStrokeWidth: {}, innerStroke: {}, stroke: {} }, setup(s) {
  const e = s, l = b(() => e.radius - e.strokeWidth * 2), i = b(() => l.value * 2 * Math.PI), r = b(() => `stroke-dashoffset: ${i.value - e.progress * i.value}`);
  return (o, c) => (n(), a("div", re, [(n(), a("svg", { block: "", "rotate--90": "", width: o.radius * 2, height: o.radius * 2, fill: "none" }, [h("circle", { style: S([{ transition: "stroke-dashoffset 0.6s var(--nq-ease)" }, { "stroke-width": o.innerStrokeWidth }]), stroke: o.innerStroke, cx: o.radius, cy: o.radius, r: t(l) }, null, 12, ae), h("circle", { class: "stroke", stroke: o.stroke, "stroke-width": o.strokeWidth, "stroke-dasharray": `${t(i)} ${t(i)}`, style: S(t(r)), cx: o.radius, cy: o.radius, r: t(l) }, null, 12, le)], 8, ce)), h("div", ie, [o.progress < 1 ? (n(), a("span", ue, p(Math.round(100 * o.progress)) + "% ", 1)) : (n(), a("div", de))])]));
} }), he = Object.assign(be, { __name: "AlbatrossLiveviewRadialProgress" }), me = { "text-24": "", "font-bold": "", "lh-none": "" }, ke = { "text-24": "", "mb-16": "" }, _e = x({ __name: "MacroBlock.client", props: { block: {} }, setup(s) {
  const e = s, l = b(() => Math.ceil(T * 2 / 3)), i = b(() => Math.min(e.block.votes / l.value, 1));
  return (r, o) => {
    const c = he;
    return n(), a("div", { class: A({ accepted: t(i) === 1 }), title: "Macro Block", flex: "~ col justify-between items-center shrink-0", text: "14 white center", "text-white": "", "my--24": "", "rounded-8": "", "bg-green": "", "h-208": "", "w-160": "", "transition-300": "", relative: "" }, [o[1] || (o[1] = h("header", { "text-11": "", "font-bold": "", "lh-24": "", uppercase: "", tracking: "0.1em" }, " Macro Block ", -1)), h("div", me, " M" + p(r.block.batch), 1), F(c, { progress: t(i), radius: 36, stroke: "#FFFFFFFF", "inner-stroke": "#FFFFFF66", "stroke-width": 2, "inner-stroke-width": 2 }, null, 8, ["progress"]), h("div", ke, [K(p(r.block.votes) + " / " + p(t(T)) + " ", 1), o[0] || (o[0] = h("div", { "text-12": "", "lh-none": "" }, " Votes ", -1))])], 2);
  };
} }), pe = Object.assign(W(_e, [["__scopeId", "data-v-35996e10"]]), { __name: "AlbatrossLiveviewMacroBlock" }), M = ["blue", "gold", "orange", "red", "purple", "pink", "green"], ve = { blue: "rgb(var(--nq-blue) / 1)", gold: "#E9B213", orange: "#FC8702", red: "#d94432", purple: "#5F4B8B", pink: "#FA7268", green: "#21BCA5" };
function fe(s) {
  let e;
  return "hash" in s ? e = Number.parseInt(s.hash, 16) % M.length : "publicKey" in s ? e = Number.parseInt(s.publicKey.substring(0, 8), 16) % M.length : e = s.nonce % M.length, M[e];
}
const V = (s) => ve[fe(s)], ge = 320, ye = 240, we = x({ __name: "TransactionCanvas", props: { hashes: {} }, setup(s) {
  const e = s, l = 2 * Math.PI, i = N();
  return H(() => {
    if (!i.value) return;
    const r = i.value.getContext("2d"), o = e.hashes.length;
    let c, m, u;
    o <= 88 ? (c = 8, m = c * 2 + 12, u = 12) : o <= 352 ? (c = 4, m = c * 2 + 6, u = 12) : (c = 2, m = c * 2 + 4, u = 10);
    const v = ge - u - c, _ = ye - u - c;
    let d = v, f = _;
    for (const k of e.hashes) r.beginPath(), r.arc(d, f, c, 0, l), r.fillStyle = V({ hash: k }), r.fill(), f -= m, f < c && (f = _, d -= m);
  }), (r, o) => (n(), a("canvas", { ref_key: "canvas", ref: i, width: "320", height: "240" }, null, 512));
} }), xe = Object.assign(we, { __name: "AlbatrossLiveviewTransactionCanvas" }), Be = { title: "Micro Block" }, Ne = { key: 0, text: "12 white center", "mt--22": "", "py-4": "", "rounded-t-8": "", "w-160": "", "bg-gradient-orange": "", "nq-label": "" }, Ce = { flex: "~ items-center justify-between", "text-15": "", "px-16": "", "pb-10": "", "pt-14": "" }, $e = { key: 0, "text-13": "", "font-semibold": "", "lh-none": "" }, Se = { key: 0, text: "neutral-700 13 center", "font-semibold": "", "mt-80": "", "grow-1": "" }, Ae = { key: 1, "grow-1": "" }, Me = { flex: "~ items-center justify-between gap-6", "pt-2": "", "w-full": "", text: "neutral-800 12" }, Fe = { "whitespace-nowrap": "" }, Le = { key: 0, "whitespace-nowrap": "" }, Oe = 1102, Ee = x({ __name: "MicroBlock", props: { block: {} }, setup(s) {
  const e = s, l = Z(), i = new Intl.NumberFormat(l.value, { style: "unit", unit: "second", unitDisplay: "short", maximumFractionDigits: 1 }), r = b(() => e.block.duration ? i.format(e.block.duration / 1e3) : "?"), o = b(() => e.block.transactions.length), c = b(() => e.block.transactions.slice(0, Oe).map((u) => u.hash.substring(0, 8))), m = b(() => e.block.number > 999999 ? "text-15/13.5" : e.block.number > 99999 ? "text-17" : e.block.number > 9999 ? "text-20" : "text-24/19");
  return (u, v) => {
    const _ = xe;
    return n(), a("div", Be, [u.block.isSkip ? (n(), a("header", Ne, " Skip Block ")) : $("", true), h("div", { flex: "~ col shrink-0", "data-inverted": "", "text-neutral": "", "bg-neutral-0": "", "size-160": "", relative: "", class: A(u.block.isSkip ? "rounded-b-8" : "rounded-8") }, [h("div", Ce, [h("p", { "font-bold": "", class: A(t(m)) }, " #" + p(u.block.number), 3), t(o) > 0 ? (n(), a("p", $e, p(t(o)) + " TX ", 1)) : $("", true)]), t(o) ? (n(), a("div", Ae, [F(_, { origin: "[0_100%]", "scale-50": "", "bottom-0": "", "left-0": "", absolute: "", hashes: t(c) }, null, 8, ["hashes"])])) : (n(), a("div", Se, " No Transactions "))], 2), h("footer", Me, [h("p", Fe, " Slot " + p(u.block.producer.slotNumber), 1), t(r) !== "?" && Number(t(r).replace("s", "")) > 0 ? (n(), a("p", Le, p(t(r)) + " block time ", 1)) : $("", true)])]);
  };
} }), je = Object.assign(Ee, { __name: "AlbatrossLiveviewMicroBlock" });
var B = ((s) => (s.MicroBlock = "micro", s.MacroBlock = "macro", s.PlaceholderBlock = "placeholder", s))(B || {});
const q = 20, Ie = D(pe), Pe = { flex: "~ justify-end items-center" }, Te = { key: 2, grid: "~ place-content-center", "i-custom:curly": "", "h-120pt": "", "min-w-120pt": "", text: "30pt neutral-700/85" }, We = x({ __name: "Block", props: { block: {} }, setup(s) {
  return (e, l) => {
    const i = Ie, r = je;
    return n(), a("div", Pe, [l[0] || (l[0] = h("div", { "font-bold": "", "m-16": "", "top--8": "", relative: "", "i-nimiq:arrow-left-thin": "", text: "16 neutral-600" }, null, -1)), e.block.kind === ("LiveviewBlockType" in e ? e.LiveviewBlockType : t(B)).MacroBlock ? (n(), I(i, { key: 0, block: e.block }, null, 8, ["block"])) : e.block.kind === "micro" ? (n(), I(r, { key: 1, block: e.block }, null, 8, ["block"])) : e.block.kind === "placeholder" ? (n(), a("div", Te)) : $("", true)]);
  };
} }), De = Object.assign(We, { __name: "AlbatrossLiveviewBlock" });
function Re() {
  const s = X("albatross-blocks", () => []), e = `${R().public.apiDomain}/albatross/liveview/blocks`, { status: l, data: i } = Q(e, { onError() {
    console.error("[Albatross Liveview] Error connecting to Albatross Blocks WebSocket"), l.value = "CLOSED";
  }, onConnected() {
    console.log("[Albatross Liveview] Connected to Albatross Blocks WebSocket"), l.value = "OPEN";
  }, onDisconnected() {
    console.log("[Albatross Liveview] Disconnected from Albatross Blocks WebSocket"), l.value = "CLOSED";
  }, immediate: true, autoReconnect: { retries: 3, delay: 1e3, onFailed() {
    console.error("[Albatross Liveview] Failed to connect Blocks EventSource after 3 retries");
  } } });
  function r(d) {
    var _a;
    d.kind === B.PlaceholderBlock && ((_a = s.value.at(-1)) == null ? void 0 : _a.kind) === B.PlaceholderBlock || (s.value = [...s.value, d].slice(-180));
  }
  const o = ee(), c = N(false);
  P(o, (d) => {
    d === "visible" && c.value ? r({ kind: B.PlaceholderBlock }) : c.value = false;
  }), P(i, (d) => {
    if (!d) return;
    if (o.value === "hidden") {
      c.value = true;
      return;
    }
    d.startsWith("[") && d.endsWith("]") ? s.value = JSON.parse(d) : s.value.length >= q && r(JSON.parse(d));
  });
  const m = b(() => s.value.filter((d) => d.kind === B.MicroBlock)), u = b(() => m.value.at(-1)), v = b(() => {
    var _a;
    return ((_a = u.value) == null ? void 0 : _a.batch) || -1;
  }), _ = b(() => {
    var _a;
    return ((_a = u.value) == null ? void 0 : _a.number) || -1;
  });
  return { status: l, blocks: s, microblocks: m, blockNumber: _, batchNumber: v };
}
const z = se(Re), Ve = { flex: "~ col wrap", h: "56 md:44" }, w = 60, qe = x({ __name: "Batch.client", props: { batchNumber: {}, blockNumber: {} }, setup(s) {
  const e = s, l = Y, { microblocks: i } = z();
  function r(k) {
    const y = l + (e.batchNumber - 1) * w + k, g = i.value.find((E) => E.number === y);
    return (g == null ? void 0 : g.producer.publicKey) ? V({ publicKey: g.producer.publicKey }) : "rgb(var(--nq-neutral) / 1)";
  }
  const o = N(false), c = ne(o), m = b(() => {
    if (e.batchNumber <= 0) return Math.max(0, w - 1);
    const k = l + e.batchNumber * w - e.blockNumber - 1;
    return Math.min(Math.max(k, 0), w - 1);
  }), u = b(() => Math.max(w - m.value - 1, 0)), v = b(() => e.blockNumber > e.batchNumber * w + l), _ = b(() => e.blockNumber === e.batchNumber * w + l - 1), d = b(() => {
    const k = [];
    return _.value ? k.push("animate-pulse") : v.value ? k.push("text-neutral op-100") : e.batchNumber > 999 && k.push("text-9"), k.join(" ");
  }), f = b(() => e.batchNumber > 99999 ? "text-7" : e.batchNumber > 9999 ? "text-8" : "text-9");
  return (k, y) => (n(), a("div", { "max-w": "[calc(100vw-12px)] md:full", flex: "~ justify-between items-start", "px-16": "", "w-388": "", onClick: y[0] || (y[0] = () => t(c)()) }, [h("div", Ve, [(n(true), a(L, null, O(t(u), (g) => (n(), a("div", { key: `micro-block-${g}`, "m-4": "", "rounded-2": "", "size-6": "", "inline-block": "", "transition-colors": "", style: S({ backgroundColor: t(o) ? r(g) : "rgb(var(--nq-neutral-800) / 1)" }) }, null, 4))), 128)), (n(true), a(L, null, O(t(m), (g) => (n(), a("div", { key: `micro-block-${t(u) + g}`, "m-4": "", "rounded-2": "", "bg-neutral-500": "", "size-6": "", "inline-block": "" }))), 128))]), h("div", { text: "14 neutral-900 center", flex: "~ justify-center col items-center", "font-bold": "", "ml-4": "", "rounded-8": "", "bg-neutral-600": "", "op-60": "", "shrink-0": "", "size-44": "", "transition-all": "", relative: "", class: A(t(d)) }, [y[1] || (y[1] = h("span", null, "M", -1)), h("span", { class: A(t(f)) }, p(k.batchNumber), 3)], 2)]));
} }), ze = Object.assign(qe, { __name: "AlbatrossLiveviewBatch" }), Ke = D(ze), He = { flex: "~ justify-end items-center", "px-24": "", "min-h-208": "", "of-hidden": "" }, Xe = { key: 0, flex: "~ justify-center items-center", "font-bold": "", "min-h-224": "", "inset-0": "", absolute: "" }, Ge = { key: 0, text: "f-lg white" }, Je = { key: 1, text: "18 white", "px-32": "", "py-24": "", "rounded-4": "", "bg-red": "", shadow: "", ring: "1.5 red/3" }, Ue = { key: 1, flex: "~ justify-center", "px-32": "", "w-full": "", "of-hidden": "", "f-mt-lg": "" }, Ye = { flex: "~ justify-center" }, j = 208, Ze = 0.55, Qe = x({ __name: "Blockchain", setup(s) {
  const { blocks: e, batchNumber: l, blockNumber: i, status: r } = z(), o = N(0), c = N(e.value.length * j), { pause: m, resume: u } = te(() => {
    o.value = -Math.floor((52 + c.value) ** Ze), c.value += o.value;
  }, { immediate: false }), v = N(), _ = oe(v), d = b(() => r.value === "OPEN" && e.value.length >= q && _.value);
  P(e, () => {
    d.value && (c.value += j);
  }, { deep: true }), G(() => d.value ? u() : m());
  const { clientNetwork: f } = R().public;
  return (k, y) => {
    const g = De, E = Ke;
    return n(), a("div", { ref_key: "target", ref: v, relative: "", "of-x-clip": "" }, [h("div", He, [F(J, { tag: "div", flex: "~ justify-end items-center", "enter-from-class": "op-0", "enter-active-class": "transition-opacity duration-400 ease-in", style: S({ transform: `translate3d(${t(c)}px, 0, 0)` }) }, { default: U(() => [(n(true), a(L, null, O(t(e), (C) => (n(), I(g, { key: `block-${C.number}`, block: C, style: S({ width: j }) }, null, 8, ["block", "style"]))), 128))]), _: 1 }, 8, ["style"])]), t(r) !== "OPEN" || t(e).length === 0 ? (n(), a("div", Xe, [t(r) === "CONNECTING" || t(e).length === 0 ? (n(), a("div", Ge, " Loading... ")) : t(r) === "CLOSED" ? (n(), a("div", Je, " We couldn't connect to the " + p(t(f)), 1)) : $("", true)])) : (n(), a("div", Ue, [h("div", Ye, [(n(), a(L, null, O(7, (C) => F(E, { key: `batch-${t(l) - 2 + C - 1}`, "batch-number": t(l) - 3 + C - 1, "block-number": t(i), class: "animate-batch-unshift" }, null, 8, ["batch-number", "block-number"])), 64))])]))], 512);
  };
} }), rt = Object.assign(W(Qe, [["__scopeId", "data-v-bb2ce265"]]), { __name: "AlbatrossLiveviewBlockchain" });
export {
  rt as _
};
