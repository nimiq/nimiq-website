import { d as N, a as h, B as i, o as r, C as m, h as n, v as F, E as g, g as L, G, D as M, r as C, n as X, x as $, e as I, az as W, aA as U, K as D, Q as P, H as O, I as E, a7 as J, al as Q, f as Y, aB as Z } from "./B8biU-UE.js";
import { S as T, P as ee } from "./D0DW2WUk.js";
import { _ as R } from "./DlAUqK2U.js";
import { u as te } from "./uct_JH4F.js";
import { g as oe, h as ne, i as se } from "./DOgGst0G.js";
import { c as re, u as ie } from "./B5vKjtsS.js";
const le = { relative: "" }, ae = ["width", "height"], ce = ["stroke", "cx", "cy", "r"], ue = ["stroke", "stroke-width", "stroke-dasharray", "cx", "cy", "r"], de = { "text-16": "", "font-bold": "", flex: "", "size-full": "", "items-center": "", "left-0": "", "top-0": "", "justify-center": "", absolute: "" }, be = { key: 0 }, me = { key: 1, "text-24": "", "i-nimiq:check-thin": "" }, he = N({ __name: "RadialProgress", props: { progress: {}, radius: {}, strokeWidth: {}, innerStrokeWidth: {}, innerStroke: {}, stroke: {} }, setup(t) {
  const e = t, u = h(() => e.radius - e.strokeWidth * 2), c = h(() => u.value * 2 * Math.PI), l = h(() => `stroke-dashoffset: ${c.value - e.progress * c.value}`);
  return (o, a) => (r(), i("div", le, [(r(), i("svg", { block: "", "rotate--90": "", width: o.radius * 2, height: o.radius * 2, fill: "none" }, [m("circle", { style: F([{ transition: "stroke-dashoffset 0.6s var(--nq-ease)" }, { "stroke-width": o.innerStrokeWidth }]), stroke: o.innerStroke, cx: o.radius, cy: o.radius, r: n(u) }, null, 12, ce), m("circle", { class: "stroke", stroke: o.stroke, "stroke-width": o.strokeWidth, "stroke-dasharray": `${n(c)} ${n(c)}`, style: F(n(l)), cx: o.radius, cy: o.radius, r: n(u) }, null, 12, ue)], 8, ae)), m("div", de, [o.progress < 1 ? (r(), i("span", be, g(Math.round(100 * o.progress)) + "% ", 1)) : (r(), i("div", me))])]));
} }), ke = Object.assign(he, { __name: "AlbatrossLiveviewRadialProgress" }), _e = { "text-24": "", "font-bold": "", "lh-none": "" }, pe = { "text-24": "", "mb-16": "" }, fe = N({ __name: "MacroBlock.client", props: { block: {} }, setup(t) {
  const e = t, u = h(() => Math.ceil(T * 2 / 3)), c = h(() => Math.min(e.block.votes / u.value, 1));
  return (l, o) => {
    const a = ke;
    return r(), i("div", { class: M({ accepted: n(c) === 1 }), title: "Macro Block", flex: "~ col justify-between items-center shrink-0", text: "14 white center", "text-white": "", "my--24": "", "rounded-8": "", "bg-green": "", "h-208": "", "w-160": "", "transition-300": "", relative: "" }, [o[1] || (o[1] = m("header", { "text-11": "", "font-bold": "", "lh-24": "", uppercase: "", tracking: "0.1em" }, " Macro Block ", -1)), m("div", _e, " M" + g(l.block.batch), 1), L(a, { progress: n(c), radius: 36, stroke: "#FFFFFFFF", "inner-stroke": "#FFFFFF66", "stroke-width": 2, "inner-stroke-width": 2 }, null, 8, ["progress"]), m("div", pe, [G(g(l.block.votes) + " / " + g(n(T)) + " ", 1), o[0] || (o[0] = m("div", { "text-12": "", "lh-none": "" }, " Votes ", -1))])], 2);
  };
} }), ve = Object.assign(R(fe, [["__scopeId", "data-v-35996e10"]]), { __name: "AlbatrossLiveviewMacroBlock" }), S = ["blue", "gold", "orange", "red", "purple", "pink", "green"], ge = { blue: "rgb(var(--nq-blue) / 1)", gold: "#E9B213", orange: "#FC8702", red: "#d94432", purple: "#5F4B8B", pink: "#FA7268", green: "#21BCA5" };
function ye(t) {
  let e;
  return "hash" in t ? e = Number.parseInt(t.hash, 16) % S.length : "publicKey" in t ? e = Number.parseInt(t.publicKey.substring(0, 8), 16) % S.length : e = t.nonce % S.length, S[e];
}
const z = (t) => ge[ye(t)], we = 320, xe = 240, Be = N({ __name: "TransactionCanvas", props: { hashes: {} }, setup(t) {
  const e = t, u = 2 * Math.PI, c = C();
  return X(() => {
    if (!c.value) return;
    const l = c.value.getContext("2d"), o = e.hashes.length;
    let a, b, d;
    o <= 88 ? (a = 8, b = a * 2 + 12, d = 12) : o <= 352 ? (a = 4, b = a * 2 + 6, d = 12) : (a = 2, b = a * 2 + 4, d = 10);
    const p = we - d - a, f = xe - d - a;
    let _ = p, s = f;
    for (const k of e.hashes) l.beginPath(), l.arc(_, s, a, 0, u), l.fillStyle = z({ hash: k }), l.fill(), s -= b, s < a && (s = f, _ -= b);
  }), (l, o) => (r(), i("canvas", { ref_key: "canvas", ref: c, width: "320", height: "240" }, null, 512));
} }), Ce = Object.assign(Be, { __name: "AlbatrossLiveviewTransactionCanvas" }), Ne = { title: "Micro Block" }, Ae = { key: 0, text: "12 white center", "mt--22": "", "py-4": "", "rounded-t-8": "", "w-160": "", "bg-gradient-orange": "", "nq-label": "" }, $e = { flex: "~ items-center justify-between", "text-15": "", "px-16": "", "pb-10": "", "pt-14": "" }, Me = { key: 0, "text-13": "", "font-semibold": "", "lh-none": "" }, Se = { key: 0, text: "neutral-700 13 center", "font-semibold": "", "mt-80": "", "grow-1": "" }, Fe = { key: 1, "grow-1": "" }, Le = { flex: "~ items-center justify-between gap-6", "pt-2": "", "w-full": "", text: "neutral-800 12" }, Oe = { "whitespace-nowrap": "" }, Ee = { key: 0, "whitespace-nowrap": "" }, je = 1102, Ie = N({ __name: "MicroBlock", props: { block: {} }, setup(t) {
  const e = t, u = te(), c = new Intl.NumberFormat(u.value, { style: "unit", unit: "second", unitDisplay: "short", maximumFractionDigits: 1 }), l = h(() => e.block.duration ? c.format(e.block.duration / 1e3) : "?"), o = h(() => e.block.transactions.length), a = h(() => e.block.transactions.slice(0, je).map((d) => d.hash.substring(0, 8))), b = h(() => e.block.number > 999999 ? "text-15/13.5" : e.block.number > 99999 ? "text-17" : e.block.number > 9999 ? "text-20" : "text-24/19");
  return (d, p) => {
    const f = Ce;
    return r(), i("div", Ne, [d.block.isSkip ? (r(), i("header", Ae, " Skip Block ")) : $("", true), m("div", { flex: "~ col shrink-0", "data-inverted": "", "text-neutral": "", "bg-neutral-0": "", "size-160": "", relative: "", class: M(d.block.isSkip ? "rounded-b-8" : "rounded-8") }, [m("div", $e, [m("p", { "font-bold": "", class: M(n(b)) }, " #" + g(d.block.number), 3), n(o) > 0 ? (r(), i("p", Me, g(n(o)) + " TX ", 1)) : $("", true)]), n(o) ? (r(), i("div", Fe, [L(f, { origin: "[0_100%]", "scale-50": "", "bottom-0": "", "left-0": "", absolute: "", hashes: n(a) }, null, 8, ["hashes"])])) : (r(), i("div", Se, " No Transactions "))], 2), m("footer", Le, [m("p", Oe, " Slot " + g(d.block.producer.slotNumber), 1), n(l) !== "?" && Number(n(l).replace("s", "")) > 0 ? (r(), i("p", Ee, g(n(l)) + " block time ", 1)) : $("", true)])]);
  };
} }), Pe = Object.assign(Ie, { __name: "AlbatrossLiveviewMicroBlock" });
var B = ((t) => (t.MicroBlock = "micro", t.MacroBlock = "macro", t.PlaceholderBlock = "placeholder", t))(B || {});
const K = 20, Te = W(ve), We = { flex: "~ justify-end items-center" }, De = { key: 2, grid: "~ place-content-center", "i-custom:curly": "", "h-120pt": "", "min-w-120pt": "", text: "30pt neutral-700/85" }, Re = N({ __name: "Block", props: { block: {} }, setup(t) {
  return (e, u) => {
    const c = Te, l = Pe;
    return r(), i("div", We, [u[0] || (u[0] = m("div", { "font-bold": "", "m-16": "", "top--8": "", relative: "", "i-nimiq:arrow-left-thin": "", text: "16 neutral-600" }, null, -1)), e.block.kind === ("LiveviewBlockType" in e ? e.LiveviewBlockType : n(B)).MacroBlock ? (r(), I(c, { key: 0, block: e.block }, null, 8, ["block"])) : e.block.kind === "micro" ? (r(), I(l, { key: 1, block: e.block }, null, 8, ["block"])) : e.block.kind === "placeholder" ? (r(), i("div", De)) : $("", true)]);
  };
} }), ze = Object.assign(Re, { __name: "AlbatrossLiveviewBlock" });
function Ke() {
  const t = U("albatross-blocks", () => []), { apiDomain: e } = D().public, u = new URL("/albatross-blocks", e), { status: c, data: l } = oe(u, { onError() {
    console.error("[Albatross Liveview] Error connecting to Albatross Blocks WebSocket"), c.value = "CLOSED";
  }, onConnected() {
    console.log("[Albatross Liveview] Connected to Albatross Blocks WebSocket"), c.value = "OPEN";
  }, onDisconnected() {
    console.log("[Albatross Liveview] Disconnected from Albatross Blocks WebSocket"), c.value = "CLOSED";
  }, immediate: true, autoReconnect: { retries: 3, delay: 1e3, onFailed() {
    console.error("[Albatross Liveview] Failed to connect Blocks EventSource after 3 retries");
  } } });
  function o(s) {
    var _a;
    s.kind === B.PlaceholderBlock && ((_a = t.value.at(-1)) == null ? void 0 : _a.kind) === B.PlaceholderBlock || (t.value = [...t.value, s].slice(-180));
  }
  const a = ne(), b = C(false);
  P(a, (s) => {
    s === "visible" && b.value ? o({ kind: B.PlaceholderBlock }) : b.value = false;
  }), P(l, (s) => {
    if (!s) return;
    if (a.value === "hidden") {
      b.value = true;
      return;
    }
    s.startsWith("[") && s.endsWith("]") ? t.value = JSON.parse(s) : t.value.length >= K && o(JSON.parse(s));
  });
  const d = h(() => {
    var _a;
    for (let s = t.value.length - 1; s >= 0; s--) if (((_a = t.value[s]) == null ? void 0 : _a.kind) === B.MicroBlock) return t.value[s];
  }), p = h(() => t.value.filter((s) => s.kind === B.MicroBlock)), f = h(() => {
    var _a;
    return ((_a = d.value) == null ? void 0 : _a.batch) || -1;
  }), _ = h(() => {
    var _a;
    return ((_a = d.value) == null ? void 0 : _a.number) || -1;
  });
  return { status: c, blocks: t, microblocks: p, blockNumber: _, batchNumber: f };
}
const V = re(Ke), Ve = { flex: "~ col wrap", h: "56 md:44" }, x = 60, qe = N({ __name: "Batch.client", props: { batchNumber: {}, blockNumber: {} }, setup(t) {
  const e = t, u = ee, { microblocks: c } = V();
  function l(k) {
    const y = u + (e.batchNumber - 1) * x + k, w = c.value.find((v) => v.number === y);
    return (w == null ? void 0 : w.producer.publicKey) ? z({ publicKey: w.producer.publicKey }) : "rgb(var(--nq-neutral) / 1)";
  }
  const o = C(false), a = ie(o), b = h(() => {
    if (e.batchNumber <= 0) return Math.max(0, x - 1);
    const k = u + e.batchNumber * x - e.blockNumber - 1;
    return Math.min(Math.max(k, 0), x - 1);
  }), d = h(() => Math.max(x - b.value - 1, 0)), p = h(() => e.blockNumber > e.batchNumber * x + u), f = h(() => e.blockNumber === e.batchNumber * x + u - 1), _ = h(() => {
    const k = [];
    return f.value ? k.push("animate-pulse") : p.value ? k.push("text-neutral op-100") : e.batchNumber > 999 && k.push("text-9"), k.join(" ");
  }), s = h(() => e.batchNumber > 99999 ? "text-7" : e.batchNumber > 9999 ? "text-8" : "text-9");
  return (k, y) => (r(), i("div", { "max-w": "[calc(100vw-12px)] md:full", flex: "~ justify-between items-start", "px-16": "", "w-388": "", onClick: y[0] || (y[0] = () => n(a)()) }, [m("div", Ve, [(r(true), i(O, null, E(n(d), (w) => (r(), i("div", { key: `micro-block-${w}`, "m-4": "", "rounded-2": "", "size-6": "", "inline-block": "", "transition-colors": "", style: F({ backgroundColor: n(o) ? l(w) : "rgb(var(--nq-neutral-800) / 1)" }) }, null, 4))), 128)), (r(true), i(O, null, E(n(b), (w) => (r(), i("div", { key: `micro-block-${n(d) + w}`, "m-4": "", "rounded-2": "", "bg-neutral-500": "", "size-6": "", "inline-block": "" }))), 128))]), m("div", { text: "14 neutral-900 center", flex: "~ justify-center col items-center", "font-bold": "", "ml-4": "", "rounded-8": "", "bg-neutral-600": "", "op-60": "", "shrink-0": "", "size-44": "", "transition-all": "", relative: "", class: M(n(_)) }, [y[1] || (y[1] = m("span", null, "M", -1)), m("span", { class: M(n(s)) }, g(k.batchNumber), 3)], 2)]));
} }), He = Object.assign(qe, { __name: "AlbatrossLiveviewBatch" }), Ge = W(He), Xe = { flex: "~ justify-end items-center", "px-24": "", "min-h-208": "", "of-hidden": "" }, Ue = { key: 0, flex: "~ justify-center items-center", "font-bold": "", "min-h-224": "", "inset-0": "", absolute: "" }, Je = { key: 0, text: "f-lg white" }, Qe = { key: 1, text: "18 white", "px-32": "", "py-24": "", "rounded-4": "", "bg-red": "", shadow: "", ring: "1.5 red/3" }, Ye = { key: 1, flex: "~ justify-center", "px-32": "", "w-full": "", "of-hidden": "", "f-mt-lg": "" }, Ze = { flex: "~ justify-center" }, j = 208, et = 0.55, tt = N({ __name: "Blockchain", setup(t) {
  const { blocks: e, batchNumber: u, blockNumber: c, status: l } = V();
  let o = 0, a = e.value.length * j, b = null;
  const d = C(), p = C(), f = se(d), _ = C(false), s = C(false);
  function k() {
    if (b || !_.value) return;
    function v() {
      b = requestAnimationFrame(v), o = -Math.floor((52 + a) ** et), a += o, p.value && (p.value.style.transform = `translate3d(${a}px, 0, 0)`);
    }
    s.value = true, v();
  }
  function y() {
    b && (cancelAnimationFrame(b), b = null, s.value = false);
  }
  J(() => {
    const v = l.value === "OPEN" && e.value.length >= K && f.value;
    _.value !== v && (_.value = v, v && !s.value ? k() : !v && s.value && y());
  }), Q(() => {
    y();
  }), P(() => e.value.length, () => {
    _.value && (a += j);
  });
  const { clientNetwork: w } = D().public;
  return (v, ot) => {
    const q = ze, H = Ge;
    return r(), i("div", { ref_key: "target", ref: d, relative: "", "of-x-clip": "" }, [m("div", Xe, [m("div", { ref_key: "chainElement", ref: p, flex: "~ justify-end items-center", style: { "will-change": "transform" } }, [L(Z, { tag: "div", flex: "~ justify-end items-center", "enter-from-class": "op-0", "enter-active-class": "transition-opacity duration-400 ease-in" }, { default: Y(() => [(r(true), i(O, null, E(n(e), (A) => (r(), I(q, { key: `block-${A.number}`, block: A, style: F({ width: j }) }, null, 8, ["block", "style"]))), 128))]), _: 1 })], 512)]), n(l) !== "OPEN" || n(e).length === 0 ? (r(), i("div", Ue, [n(l) === "CONNECTING" || n(e).length === 0 ? (r(), i("div", Je, " Loading... ")) : n(l) === "CLOSED" ? (r(), i("div", Qe, " We couldn't connect to the " + g(n(w)), 1)) : $("", true)])) : (r(), i("div", Ye, [m("div", Ze, [(r(), i(O, null, E(7, (A) => L(H, { key: `batch-${n(u) - 2 + A - 1}`, "batch-number": n(u) - 3 + A - 1, "block-number": n(c), class: "animate-batch-unshift" }, null, 8, ["batch-number", "block-number"])), 64))])]))], 512);
  };
} }), ct = Object.assign(R(tt, [["__scopeId", "data-v-71e611b2"]]), { __name: "AlbatrossLiveviewBlockchain" });
export {
  ct as _
};
