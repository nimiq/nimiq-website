import { i as P, c as g, o as f, e, ad as M, aV as T, d as b, B as C, X as $, az as q, U as L, F as O, r as j, u as w, n as U, t as D, h as x, j as I, E as W, f as H, a as h, as as N, G as Z, ac as F, b as z } from "./gdLxT4Lf.js";
import { m as V, r as G, b as X, d as Y } from "./eRMYwULF.js";
import { _ as J } from "./CtFz8aQJ.js";
import { g as K } from "./CpsPJSKh.js";
import { u as Q } from "./Das-W0SA.js";
import { e as ee } from "./D7zdd4-D.js";
import "./DYDUvkDP.js";
const te = {}, ne = { "size-full": "", relative: "", "z-2": "" };
function oe(s, i) {
  return f(), g("div", ne, i[0] || (i[0] = [e("div", { "size-full": "", "of-x-hidden": "", "of-y-visible": "" }, [e("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-64": "", "w-120": "", hidden: "", "scale-x--100": "", "left--32": "", "top--100": "", absolute: "", "md:block": "", style: { "--to": "300px" } }), e("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-46": "", "w-90": "", "scale-x--100": "", "right--33": "", "top--180": "", absolute: "", "of-hidden": "", style: { "--to": "220px" } }), e("div", { "i-custom:cloud": "", "h-32": "", "w-60": "", "right-25vw": "", "top-200": "", absolute: "", class: "cloud-parallax", style: { "--to": "100px" } })], -1)]));
}
const le = Object.assign(P(te, [["render", oe], ["__scopeId", "data-v-78f6a526"]]), { __name: "AnimatedCloudyBg" });
function R() {
  const s = M("playground-state", () => ({ isConnected: false, currentAddress: null, selectedAction: "idle" })), i = M("playground-iframe-ref", () => null);
  function y(n) {
    var _a;
    ((_a = i.value) == null ? void 0 : _a.sendMessage) ? i.value.sendMessage(n) : console.warn("usePlaygroundIframe: Iframe not available, message not sent:", n.type);
  }
  function p(n) {
    i.value = n;
  }
  function d() {
    y({ type: "wallet:action:change", data: { action: s.value.selectedAction } });
  }
  function u(n) {
    console.log("Action changed to:", n), s.value.selectedAction = n, y({ type: "wallet:action:change", data: { action: n } });
  }
  async function v(n) {
    s.value.isConnected = true, s.value.currentAddress = n;
  }
  function l() {
    s.value.isConnected = false, s.value.currentAddress = null;
  }
  function t() {
    s.value.selectedAction = "idle", y({ type: "wallet:action:change", data: { action: "idle" } });
  }
  async function o(n) {
    console.log("Received message from playground:", n);
    const _ = n.type || n.kind;
    switch (_) {
      case "FlowChange":
        console.log("Flow changed to:", n.data), n.data === "idle" ? (console.log("Flow changed to idle, resetting action state"), s.value.selectedAction = "idle") : ["stake", "buy", "swap"].includes(n.data) && (s.value.selectedAction = n.data);
        break;
      default:
        console.log("Unknown message type:", _);
    }
  }
  return { playgroundState: T(s), setIframeRef: p, onIframeReady: d, setSelectedAction: u, resetActionState: t, connectWallet: v, disconnectWallet: l, sendMessage: y, handlePlaygroundMessage: o };
}
const ae = { flex: "~ gap-4", "self-end": "!", ring: "1 blue/80", "p-4": "", "rounded-full": "", "bg-white": "", "h-max": "", relative: "", "z-10": "", style: { "--un-shadow": "0 0 32px #0682CA" } }, re = ["data-state", "onClick"], se = { font: "semibold data-active:bold", text: "data-active:white", "transition-color": "" }, ie = b({ __name: "ActionSelector", emits: ["state"], setup(s, { emit: i }) {
  const y = i, { setSelectedAction: p, playgroundState: d } = R(), u = C("idle");
  $(u, (t) => {
    p(t);
  }, { immediate: true }), $(() => d.value.selectedAction, (t) => {
    t !== u.value && (u.value = t);
  }, { immediate: true });
  const v = [{ label: "Stake", value: "stake", icon: "i-nimiq:leaf-2-filled", color: "green" }, { label: "Buy", value: "buy", icon: "i-nimiq:floating-ball", color: "blue" }, { label: "Swap", value: "swap", icon: "i-nimiq:exchange-chevron", color: "purple" }], l = q("pill");
  return L(() => {
    var _a;
    if (l.value) {
      if (u.value === "idle") l.value.style.transform = "scale(0.75)", l.value.style.opacity = "0";
      else {
        const t = l.value.parentElement.getBoundingClientRect(), { width: o, left: n } = ((_a = document.querySelector('button[data-state="active"]')) == null ? void 0 : _a.getBoundingClientRect()) || { width: 0, left: 0 };
        l.value.style.width = `${o}px`, l.value.style.left = `${n - t.left}px`, l.value.style.transform = "scale(1)", l.value.style.opacity = "1";
      }
      y("state", u.value);
    }
  }, { flush: "post" }), (t, o) => (f(), g("ul", ae, [e("div", { ref_key: "pill", ref: l, "rounded-full": "", "bg-darkblue": "", "transition-all": "", "duration-400": "", "ease-in-out": "", "inset-y-3": "", absolute: "" }, null, 512), (f(), g(O, null, j(v, ({ icon: n, label: _, value: c, color: a }) => e("li", { key: c, style: x({ "--c": `rgb(var(--nq-${a}) / 1)` }), class: "dark", "scheme-dark": "" }, [e("button", { flex: "~ gap-2 items-center", "p-2": "", "pr-12": "", "rounded-full": "", "bg-transparent": "", "data-state": c === w(u) ? "active" : void 0, onClick: (r) => u.value = c }, [e("div", { class: U(n), text: "neutral-800 data-active:$c", "m-8": "", "transition-color": "" }, null, 2), e("span", se, D(_), 1)], 8, re)], 4)), 64)), e("li", { class: U(w(u) === "idle" ? "scale-0 w-0" : "scale-100 w-36"), "h-36": "", transition: "[width,transform]", "duration-300": "", "ease-out": "", "max-sm:hidden": "" }, [e("button", { "bg-transparent": "", onClick: o[0] || (o[0] = (n) => u.value = "idle") }, o[1] || (o[1] = [e("div", { text: "neutral-800", "m-8": "", "i-nimiq:redo": "" }, null, -1)]))], 2)]));
} }), S = Object.assign(ie, { __name: "WalletActionSelector" }), de = { "size-full": "", "inline-block": "", relative: "", aspect: "16/9 desktop:9/16" }, ue = ["src", "sandbox", "width", "height"], ce = b({ __name: "WalletPlaygroundIframe", props: { playgroundUrl: {}, allowedOrigins: { default: () => [] }, height: { default: "600px" }, width: { default: "100%" }, sandbox: { default: "allow-scripts allow-same-origin" } }, emits: ["message", "ready", "error"], setup(s, { expose: i, emit: y }) {
  const p = y, { setIframeRef: d, onIframeReady: u, handlePlaygroundMessage: v } = R(), l = I(() => {
    try {
      const r = new URL(s.playgroundUrl);
      if (r.protocol !== "https:") throw new Error(`WalletPlaygroundIframe: Only HTTPS URLs are allowed: ${r.href}`);
      return s.playgroundUrl;
    } catch {
      return console.error("WalletPlaygroundIframe: Invalid URL provided"), "";
    }
  }), t = C();
  function o(r) {
    if (s.allowedOrigins.length === 0) try {
      const m = new URL(s.playgroundUrl);
      return r === m.origin;
    } catch {
      return false;
    }
    return s.allowedOrigins.includes(r);
  }
  function n(r) {
    var _a;
    if (!((_a = t.value) == null ? void 0 : _a.contentWindow)) {
      console.warn("WalletPlaygroundIframe: No iframe contentWindow available");
      return;
    }
    try {
      const m = new URL(s.playgroundUrl).origin;
      t.value.contentWindow.postMessage(r, m);
    } catch (m) {
      console.error("WalletPlaygroundIframe: Failed to send message:", m), p("error", new Error(`Failed to send message: ${m}`));
    }
  }
  function _(r) {
    if (console.log("\u{1F504} WalletPlaygroundIframe: Received message from:", r.origin, "Data:", r.data), !o(r.origin)) {
      console.warn("Received message from unauthorized origin:", r.origin);
      return;
    }
    try {
      const m = r.data, k = m.type || m.kind;
      if (!m || typeof m != "object" || typeof k != "string") {
        console.warn("WalletPlaygroundIframe: Invalid message structure received");
        return;
      }
      if (!["playground:ready", "wallet:connect", "wallet:transaction", "wallet:sign", "wallet:action:request", "FlowChange"].includes(k)) {
        console.warn("WalletPlaygroundIframe: Unknown/unauthorized message type:", k);
        return;
      }
      if (k === "playground:ready") {
        p("ready"), u();
        return;
      }
      const E = { ...m, type: k };
      v(E), p("message", m);
    } catch (m) {
      console.error("WalletPlaygroundIframe: Failed to process message:", m), p("error", new Error(`Failed to process message: ${m}`));
    }
  }
  function c() {
    n({ type: "parent:ready" });
  }
  function a() {
    console.error("WalletPlaygroundIframe: Iframe failed to load"), p("error", new Error("Failed to load iframe"));
  }
  return V(window, "message", _), W(() => {
    d({ sendMessage: n });
  }), i({ sendMessage: n }), (r, m) => (f(), g("div", de, [w(l) ? (f(), g("iframe", { key: 0, ref_key: "iframeRef", ref: t, src: w(l), sandbox: r.sandbox, width: r.width, height: r.height, frameborder: "0", allowtransparency: "true", "rounded-8": "", "border-none": "", "size-full": "", "shadow-lg": "", "transition-opacity": "", "duration-300": "", ease: "", onLoad: c, onError: a }, null, 40, ue)) : H("", true)]));
} }), A = Object.assign(ce, { __name: "WalletPlaygroundIframe" }), fe = {}, me = { flex: "~ col gap-20 justify-center items-center" };
function pe(s, i) {
  return f(), g("div", me, i[0] || (i[0] = [e("div", { flex: "~ gap-12 items-center", text: "white/40 34" }, [e("div", { "text-32": "", "i-nimiq:logos-nimiq-mono": "", title: "NIM" }), e("div", { "i-nimiq:logos-bitcoin-mono": "", title: "BTC" }), e("div", { "i-nimiq:logos-usdc-mono": "", title: "USDC" }), e("div", { "i-nimiq:logos-usdt-mono": "", title: "USDT" })], -1), e("h2", { text: "white/60 f-xs center", "font-bold": "", "nq-label": "" }, " Supported currencies ", -1)]));
}
const B = Object.assign(P(fe, [["render", pe]]), { __name: "WalletCurrencies" }), ge = { "pb-32": "", relative: "" }, ye = { w: "[calc(100%+48px)]", "p-8": "", "rounded-14": "", "bg-neutral-300": "", "op-50": "", "size-full": "", "aspect-0.7": "", "left--24": "", relative: "", "backdrop-blur-3.5": "", "f-mt-xl": "", style: { "box-shadow": "inset 0px 0px 40px #FFFFFF" } }, ve = { key: 0, "rounded-8": "", "size-full": "" }, _e = { key: 1, "rounded-8": "", "bg-white": "", flex: "", "size-full": "", "items-center": "", "justify-center": "" }, we = b({ __name: "PlaygroundMobile", props: { playgroundUrl: {} }, setup(s) {
  const { handlePlaygroundMessage: i, onIframeReady: y, setIframeRef: p } = R(), d = C();
  function u() {
    console.log("Playground iframe is ready"), y();
  }
  function v(l) {
    console.error("Playground iframe error:", l);
  }
  return W(() => {
    d.value && p(d.value);
  }), (l, t) => {
    const o = S, n = A, _ = B;
    return f(), g("div", ge, [t[1] || (t[1] = e("div", { class: "bg", left: "[calc(var(--px)*-1)]", w: "[calc(100%+var(--px)*2)]", "inset-0": "", "top--160": "", absolute: "", "z--1": "" }, null, -1)), h(o, { "mx-auto": "", "w-max": "" }), e("div", ye, [l.playgroundUrl ? (f(), g("div", ve, [h(n, { ref_key: "iframeRef", ref: d, "playground-url": l.playgroundUrl, height: "100%", onMessage: w(i), onReady: u, onError: v }, null, 8, ["playground-url", "onMessage"])])) : (f(), g("div", _e, t[0] || (t[0] = [e("p", { text: "center neutral-600 sm" }, " No playground URL configured ", -1)])))]), h(_, { "mt-24": "" })]);
  };
} }), he = Object.assign(P(we, [["__scopeId", "data-v-bf873593"]]), { __name: "WalletPlaygroundMobile" }), xe = { class: "metawrapper" }, Ce = { class: "metacontainer" }, be = b({ __name: "PlaygroundBackground", setup(s) {
  function i() {
    var _a;
    const c = document.createElement("div");
    c.style.visibility = "hidden", c.style.overflow = "scroll", document.body.appendChild(c);
    const a = document.createElement("div");
    c.appendChild(a);
    const r = c.offsetWidth - a.offsetWidth;
    return (_a = c.parentNode) == null ? void 0 : _a.removeChild(c), r;
  }
  const y = C(0);
  function p() {
    y.value = i();
  }
  function d(c, a = 300) {
    let r;
    return function(...m) {
      clearTimeout(r), r = setTimeout(() => c.apply(this, m), a);
    };
  }
  const u = d(p), v = C(null), { y: l } = G(), t = I(() => {
    var _a;
    const c = (_a = v.value) == null ? void 0 : _a.getBoundingClientRect();
    if (!c) return { one: 0, two: 0, three: 0, four: 0 };
    const a = Math.trunc((l.value - c.top) / window.innerHeight * 50), r = { one: 2, two: 1, three: 3, four: 1 };
    return { one: -a * r.one, two: -a * r.two, three: a * r.three, four: a * r.four };
  }), o = N({ one: 0, two: 0, three: 0, four: 0 });
  let n;
  function _() {
    requestAnimationFrame(_), o.one !== t.value.one && (o.one = t.value.one), o.two !== t.value.two && (o.two = t.value.two), o.three !== t.value.three && (o.three = t.value.three), o.four !== t.value.four && (o.four = t.value.four);
  }
  return W(() => {
    p(), window.addEventListener("resize", u), n = requestAnimationFrame(_);
  }), Z(() => {
    window.removeEventListener("resize", u), cancelAnimationFrame(n);
  }), (c, a) => (f(), g("div", { ref_key: "containerRef", ref: v, class: "playground-background", style: x({ "--scrollbar-width": `${y.value}px` }) }, [e("div", xe, [e("div", Ce, [(f(), g("svg", { class: "one metacloud", style: x({ "--translate-x": w(o).one }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[0] || (a[0] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (f(), g("svg", { class: "metacloud two", style: x({ "--translate-x": w(o).two }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[1] || (a[1] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (f(), g("svg", { class: "metacloud three", "max-sm:hidden": "", style: x({ "--translate-x": w(o).three }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[2] || (a[2] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (f(), g("svg", { class: "metacloud four", style: x({ "--translate-x": w(o).four }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[3] || (a[3] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), a[4] || (a[4] = e("svg", { class: "metarect max-sm:aspect-9/16", viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("path", { d: "M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" })], -1))])]), a[5] || (a[5] = e("div", { class: "pb-container" }, [e("div", { class: "rect", "max-sm:hidden": "" }, [e("svg", { viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("g", { opacity: "0.5", "max-sm:hidden": "" }, [e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z", fill: "#1F2348" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M37 26C39.7614 26 42 23.7614 42 21C42 18.2386 39.7614 16 37 16C34.2386 16 32 18.2386 32 21C32 23.7614 34.2386 26 37 26Z", fill: "#1F2348" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M53 26C55.7614 26 58 23.7614 58 21C58 18.2386 55.7614 16 53 16C50.2386 16 48 18.2386 48 21C48 23.7614 50.2386 26 53 26Z", fill: "#1F2348" })]), e("g", { opacity: "0.5" }, [e("rect", { x: "368", y: "12", width: "360", height: "14", rx: "7", fill: "#1F2348" })])])])], -1))], 4));
} }), ke = Object.assign(P(be, [["__scopeId", "data-v-afb582fc"]]), { __name: "WalletPlaygroundBackground" }), Pe = F(J), We = { relative: "" }, Re = { stack: "", "mx-auto": "", "size-full": "" }, Ie = { p: "t-48 x-10 b-10", "size-full": "", "z-1": "" }, Me = { key: 0, "rounded-4": "", "size-full": "" }, $e = { key: 1, "rounded-4": "", "bg-slate-200": "", flex: "", "size-full": "", "items-center": "", "justify-center": "" }, Ue = { "self-start": "!", "justify-self-end": "!", "mr--18": "", "mt-11": "", "w-max": "", relative: "", "z-10": "" }, ze = b({ __name: "PlaygroundDesktop", props: { playgroundUrl: {} }, setup(s) {
  const { handlePlaygroundMessage: i, onIframeReady: y, setIframeRef: p } = R(), d = C();
  function u() {
    console.log("Playground iframe is ready"), y();
  }
  function v(l) {
    console.error("Playground iframe error:", l);
  }
  return W(() => {
    console.log("PlaygroundDesktop: Component mounted, iframe ref:", !!d.value), d.value && (console.log("PlaygroundDesktop: Setting iframe ref in composable"), p(d.value));
  }), (l, t) => {
    const o = ke, n = A, _ = Pe, c = S, a = B;
    return f(), g("div", We, [e("div", Re, [t[2] || (t[2] = e("div", { "self-start": "!", "justify-self-end": "!", "aria-hidden": "", "mr--18": "", "mt-48": "", "w-44": "", "origin-bottom-right": "", "rotate--45": "", "z-1": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), h(o), e("div", Ie, [l.playgroundUrl ? (f(), g("div", Me, [h(n, { ref_key: "iframeRef", ref: d, "playground-url": l.playgroundUrl, height: "600px", onMessage: w(i), onReady: u, onError: v }, null, 8, ["playground-url", "onMessage"])])) : (f(), g("div", $e, t[0] || (t[0] = [e("p", { text: "center neutral-600" }, " No playground URL configured ", -1)])))]), e("div", Ue, [h(_, { translate: "-50%", absolute: "", left: "50%", top: "50%", "z-1": "" }), t[1] || (t[1] = e("div", { bg: "#E9B213", text: "f-lg white", rounded: "6 br-0", "font-semibold": "", "ml-auto": "", "px-20": "", "py-16": "", "w-max": "", relative: "", "z-2": "" }, " Try live preview ", -1))]), h(c, { "translate-y": "[calc(50%-10px)]" })]), h(a, { "f-mt-lg": "" })]);
  };
} }), Fe = Object.assign(P(ze, [["__scopeId", "data-v-5609789d"]]), { __name: "WalletPlaygroundDesktop" }), Se = F(le), Ae = { "data-slice-type": "wallet-playground", "bg-darkerblue": "", "scheme-dark": "", relative: "", "of-x-clip": "", "md:f-pt-3xl": "", "children:max-w-none": "" }, He = b({ __name: "index", props: K(), setup(s) {
  const { isMobileOrTablet: i } = Q(), { smaller: y } = X(Y), p = I(() => i || y("md").value), d = ee(s.slice.primary.playgroundUrl);
  if (console.log("WalletPlayground slice: extracted playground URL:", d), !d) throw new Error("Playground URL is required in WalletPlayground slice");
  return (u, v) => {
    const l = Se, t = he, o = Fe;
    return f(), g("section", Ae, [h(l, { h: "[calc(100%+400px)]", "max-w-screen": "", "pointer-events-none": "", "top--400": "" }), w(p) ? (f(), z(t, { key: 0, "playground-url": w(d) }, null, 8, ["playground-url"])) : (f(), z(o, { key: 1, "w-full": "", "z-1": "", "playground-url": w(d) }, null, 8, ["playground-url"]))]);
  };
} });
export {
  He as default
};
