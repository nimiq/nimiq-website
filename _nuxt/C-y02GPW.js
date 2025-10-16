import { B as y, o as g, C as e, aA as A, aY as O, d as k, r as P, a as E, Q as U, n as B, x as L, h as w, ay as j, a7 as H, H as Z, I as N, D as z, E as V, v as M, g as x, aX as Q, p as Y, az as D, e as S } from "./B8biU-UE.js";
import { _ as W } from "./DlAUqK2U.js";
import { m as X, q as G, s as J } from "./DOgGst0G.js";
import { _ as K } from "./rKqGuKe3.js";
import { g as ee } from "./CpsPJSKh.js";
import { e as te } from "./DRbUa3ZN.js";
import "./B5vKjtsS.js";
const oe = {}, ne = { "size-full": "", relative: "", "z-2": "" };
function ae(t, d) {
  return g(), y("div", ne, d[0] || (d[0] = [e("div", { "size-full": "", "of-x-hidden": "", "of-y-visible": "" }, [e("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-64": "", "w-120": "", hidden: "", "scale-x--100": "", "left--32": "", "top--100": "", absolute: "", "md:block": "", style: { "--to": "300px" } }), e("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-46": "", "w-90": "", "scale-x--100": "", "right--33": "", "top--180": "", absolute: "", "of-hidden": "", style: { "--to": "220px" } }), e("div", { "i-custom:cloud": "", "h-32": "", "w-60": "", "right-25vw": "", "top-200": "", absolute: "", class: "cloud-parallax", style: { "--to": "100px" } })], -1)]));
}
const le = Object.assign(W(oe, [["render", ae], ["__scopeId", "data-v-78f6a526"]]), { __name: "AnimatedCloudyBg" });
function F() {
  const t = A("playground-state", () => ({ isConnected: false, currentAddress: null, selectedAction: "idle", isDemoMode: false, isModalOpen: false, openModalType: null, playgroundUrl: "https://wallet.nimiq.com" })), d = A("playground-iframe-ref", () => null), f = ["demo:ready", "action:open-buy-modal", "action:open-staking-modal", "action:open-swap-modal", "action:close-modal"], l = { idle: "demo:ready", stake: "action:open-staking-modal", buy: "action:open-buy-modal", swap: "action:open-swap-modal" };
  function r(i) {
    return f.includes(i);
  }
  function n(i) {
    var _a;
    ((_a = d.value) == null ? void 0 : _a.sendMessage) ? d.value.sendMessage(i) : console.warn("usePlaygroundIframe: Iframe not available, message not sent:", i.type);
  }
  function v(i) {
    d.value = i;
  }
  function c() {
    n({ type: "demo:ready", data: { action: t.value.selectedAction, isDemoMode: t.value.isDemoMode } });
  }
  function u(i) {
    t.value.selectedAction = i, n({ type: l[i], data: { action: i, isDemoMode: t.value.isDemoMode } });
  }
  async function s(i) {
    t.value.isConnected = true, t.value.currentAddress = i;
  }
  function h() {
    t.value.isConnected = false, t.value.currentAddress = null;
  }
  function b() {
    t.value.selectedAction = "idle", t.value.isModalOpen = false, t.value.openModalType = null, n({ type: "demo:ready", data: { action: "idle", isDemoMode: t.value.isDemoMode } });
  }
  function a(i) {
    t.value.isModalOpen = true, t.value.openModalType = i, t.value.selectedAction = i, n({ type: { buy: "action:open-buy-modal", stake: "action:open-staking-modal", swap: "action:open-swap-modal" }[i] });
  }
  function o() {
    t.value.isModalOpen = false, t.value.openModalType = null, t.value.selectedAction = "idle";
  }
  function _() {
    t.value.isDemoMode = true;
  }
  function C(i) {
    t.value.playgroundUrl = i;
  }
  async function $(i) {
    switch (i) {
      case "demo:ready":
        _();
        break;
      case "action:open-buy-modal":
        a("buy");
        break;
      case "action:open-staking-modal":
        a("stake");
        break;
      case "action:open-swap-modal":
        a("swap");
        break;
      case "action:close-modal":
        o();
        break;
      default:
        console.warn("Unknown message type:", i);
    }
  }
  return { playgroundState: O(t), setIframeRef: v, onIframeReady: c, setSelectedAction: u, resetActionState: b, connectWallet: s, disconnectWallet: h, allowedMessageTypes: f, sendMessage: n, handlePlaygroundMessage: $, openModal: a, closeModal: o, activateDemoMode: _, setPlaygroundUrl: C, isStandardizedAction: r, ActionToMessageType: l };
}
const re = { "size-full": "", "inline-block": "", relative: "", aspect: "16/9 desktop:9/16" }, se = ["src", "sandbox", "width", "height"], ie = k({ __name: "WalletPlaygroundIframe", props: { playgroundUrl: { default: "https://wallet.nimiq.com" }, allowedOrigins: { default: () => [] }, height: { default: "600px" }, width: { default: "100%" }, sandbox: { default: "allow-scripts allow-same-origin" } }, emits: ["message", "ready", "error"], setup(t, { expose: d, emit: f }) {
  const l = f, { playgroundState: r, setIframeRef: n, handlePlaygroundMessage: v, allowedMessageTypes: c, setPlaygroundUrl: u, ActionToMessageType: s, activateDemoMode: h, connectWallet: b } = F(), a = P(), o = E(() => {
    try {
      const m = new URL(r.value.playgroundUrl);
      if (m.protocol !== "https:") throw new Error(`WalletPlaygroundIframe: Only HTTPS URLs are allowed: ${m.href}`);
      return r.value.playgroundUrl;
    } catch {
      return console.error("WalletPlaygroundIframe: Invalid URL provided"), "";
    }
  });
  function _(m) {
    if (t.allowedOrigins.length === 0) try {
      const p = new URL(r.value.playgroundUrl);
      return m === p.origin;
    } catch {
      return false;
    }
    return t.allowedOrigins.includes(m);
  }
  function C(m) {
    var _a;
    if (!((_a = a.value) == null ? void 0 : _a.contentWindow)) {
      console.warn("WalletPlaygroundIframe: No iframe contentWindow available");
      return;
    }
    try {
      const p = new URL(r.value.playgroundUrl).origin;
      a.value.contentWindow.postMessage(m, p);
    } catch (p) {
      console.error("WalletPlaygroundIframe: Failed to send message:", p), l("error", new Error(`Failed to send message: ${p}`));
    }
  }
  function $(m) {
    var _a;
    if (!_(m.origin)) {
      console.warn("Received message from unauthorized origin:", m.origin);
      return;
    }
    try {
      const p = m.data;
      if (!p || typeof p != "object" || typeof p.type != "string") {
        console.warn("WalletPlaygroundIframe: Invalid message structure received");
        return;
      }
      if (!c.includes(p.type)) {
        console.warn("WalletPlaygroundIframe: Unknown/unauthorized message type:", p.type);
        return;
      }
      p.type === "demo:ready" && (h(), ((_a = p.data) == null ? void 0 : _a.address) && b(p.data.address), l("ready")), v(p.type), l("message", p);
    } catch (p) {
      console.error("WalletPlaygroundIframe: Failed to process message:", p), l("error", new Error(`Failed to process message: ${p}`));
    }
  }
  function i() {
    C({ type: "demo:ready", data: { action: r.value.selectedAction, isDemoMode: r.value.isDemoMode } });
  }
  function I() {
    console.error("WalletPlaygroundIframe: Iframe failed to load"), l("error", new Error("Failed to load iframe"));
  }
  return U(() => t.playgroundUrl, (m) => {
    u(m);
  }, { immediate: true }), U(() => r.value.selectedAction, (m) => {
    C({ type: s[m], data: { action: m, isDemoMode: r.value.isDemoMode } });
  }), X(window, "message", $), B(() => {
    n({ sendMessage: C });
  }), d({ sendMessage: C }), (m, p) => (g(), y("div", re, [w(o) ? (g(), y("iframe", { key: 0, ref_key: "iframeRef", ref: a, src: w(o), sandbox: m.sandbox, width: m.width, height: m.height, frameborder: "0", allowtransparency: "true", "outline-none": "", "rounded-8": "", "border-none": "", "size-full": "", "shadow-lg": "", "transition-opacity": "", "duration-300": "", ease: "", onLoad: i, onError: I }, null, 40, se)) : L("", true)]));
} }), T = Object.assign(ie, { __name: "WalletPlaygroundIframe" }), de = { flex: "~ gap-4", "self-end": "!", ring: "1 blue/80", "p-4": "", "rounded-full": "", "bg-white": "", "h-max": "", relative: "", "z-10": "", style: { "--un-shadow": "0 0 32px #0682CA" } }, ue = ["data-state", "onClick"], ce = { font: "semibold data-active:bold", text: "data-active:white", "transition-color": "" }, pe = k({ __name: "ActionSelector", emits: ["state"], setup(t, { emit: d }) {
  const f = d, { playgroundState: l, setSelectedAction: r } = F(), n = P("idle");
  U(n, (u) => {
    r(u);
  }, { immediate: true }), U(() => l.value.selectedAction, (u) => {
    u !== n.value && (n.value = u);
  }, { immediate: true });
  const v = [{ label: "Stake", value: "stake", icon: "i-nimiq:leaf-2-filled", color: "green" }, { label: "Buy", value: "buy", icon: "i-nimiq:floating-ball", color: "blue" }, { label: "Swap", value: "swap", icon: "i-nimiq:exchange-chevron", color: "purple" }], c = j("pill");
  return H(() => {
    var _a;
    if (c.value) {
      if (n.value === "idle") c.value.style.transform = "scale(0.75)", c.value.style.opacity = "0";
      else {
        const u = c.value.parentElement.getBoundingClientRect(), { width: s, left: h } = ((_a = document.querySelector('button[data-state="active"]')) == null ? void 0 : _a.getBoundingClientRect()) || { width: 0, left: 0 };
        c.value.style.width = `${s}px`, c.value.style.left = `${h - u.left}px`, c.value.style.transform = "scale(1)", c.value.style.opacity = "1";
      }
      f("state", n.value);
    }
  }, { flush: "post" }), (u, s) => (g(), y("ul", de, [e("div", { ref_key: "pill", ref: c, "rounded-full": "", "bg-darkblue": "", "transition-all": "", "duration-400": "", "ease-in-out": "", "inset-y-3": "", absolute: "" }, null, 512), (g(), y(Z, null, N(v, ({ icon: h, label: b, value: a, color: o }) => e("li", { key: a, style: M({ "--c": `rgb(var(--nq-${o}) / 1)` }), class: "dark", "scheme-dark": "" }, [e("button", { flex: "~ gap-2 items-center", "p-2": "", "pr-12": "", "rounded-full": "", "bg-transparent": "", "data-state": a === w(n) ? "active" : void 0, onClick: (_) => n.value = a }, [e("div", { class: z(h), text: "neutral-800 data-active:$c", "m-8": "", "transition-color": "" }, null, 2), e("span", ce, V(b), 1)], 8, ue)], 4)), 64)), e("li", { class: z(w(n) === "idle" ? "scale-0 w-0" : "scale-100 w-36"), "h-36": "", transition: "[width,transform]", "duration-300": "", "ease-out": "", "max-sm:hidden": "" }, [e("button", { "bg-transparent": "", onClick: s[0] || (s[0] = (h) => n.value = "idle") }, s[1] || (s[1] = [e("div", { text: "neutral-800", "m-8": "", "i-nimiq:redo": "" }, null, -1)]))], 2)]));
} }), R = Object.assign(pe, { __name: "WalletActionSelector" }), me = {}, fe = { flex: "~ col gap-20 justify-center items-center" };
function ge(t, d) {
  return g(), y("div", fe, d[0] || (d[0] = [e("div", { flex: "~ gap-12 items-center", text: "white/40 34" }, [e("div", { "text-32": "", "i-nimiq:logos-nimiq-mono": "", title: "NIM" }), e("div", { "i-nimiq:logos-bitcoin-mono": "", title: "BTC" }), e("div", { "i-nimiq:logos-usdc-mono": "", title: "USDC" }), e("div", { "i-nimiq:logos-usdt-mono": "", title: "USDT" })], -1), e("h2", { text: "white/60 f-xs center", "font-bold": "", "nq-label": "" }, " Supported currencies ", -1)]));
}
const q = Object.assign(W(me, [["render", ge]]), { __name: "WalletCurrencies" }), ye = { "pb-32": "", relative: "" }, ve = { w: "[calc(100%+48px)]", "p-8": "", "rounded-14": "", "size-full": "", "aspect-0.7": "", "left--24": "", relative: "", "f-mt-xl": "" }, _e = { "rounded-8": "", "size-full": "", relative: "", "z-1": "" }, we = k({ __name: "PlaygroundMobile", props: { playgroundUrl: {} }, setup(t) {
  function d(l) {
    console.error("Playground iframe error:", l);
  }
  function f(l) {
  }
  return (l, r) => {
    const n = T, v = R, c = q;
    return g(), y("div", ye, [r[1] || (r[1] = e("div", { class: "bg", left: "[calc(var(--px)*-1)]", w: "[calc(100%+var(--px)*2)]", "inset-0": "", "top--160": "", absolute: "", "z--1": "" }, null, -1)), e("div", ve, [r[0] || (r[0] = e("div", { "rounded-14": "", "bg-neutral-300": "", "op-50": "", "inset-0": "", absolute: "", "backdrop-blur-3.5": "", style: { "box-shadow": "inset 0px 0px 40px #FFFFFF" } }, null, -1)), e("div", _e, [x(n, { "playground-url": l.playgroundUrl, height: "100%", onMessage: f, onError: d }, null, 8, ["playground-url"])])]), x(v, { "mx-auto": "", "w-max": "", "translate-y": "-50%" }), x(c, { "f-mt-2xs": "" })]);
  };
} }), he = Object.assign(W(we, [["__scopeId", "data-v-34804870"]]), { __name: "WalletPlaygroundMobile" }), xe = { class: "metawrapper" }, be = { class: "metacontainer" }, Ce = k({ __name: "PlaygroundBackground", setup(t) {
  function d() {
    var _a;
    const a = document.createElement("div");
    a.style.visibility = "hidden", a.style.overflow = "scroll", document.body.appendChild(a);
    const o = document.createElement("div");
    a.appendChild(o);
    const _ = a.offsetWidth - o.offsetWidth;
    return (_a = a.parentNode) == null ? void 0 : _a.removeChild(a), _;
  }
  const f = P(0);
  function l() {
    f.value = d();
  }
  function r(a, o = 300) {
    let _;
    return function(...C) {
      clearTimeout(_), _ = setTimeout(() => a.apply(this, C), o);
    };
  }
  const n = r(l), v = P(null), { y: c } = G(), u = E(() => {
    var _a;
    const a = (_a = v.value) == null ? void 0 : _a.getBoundingClientRect();
    if (!a) return { one: 0, two: 0, three: 0, four: 0 };
    const o = Math.trunc((c.value - a.top) / window.innerHeight * 50), _ = { one: 2, two: 1, three: 3, four: 1 };
    return { one: -o * _.one, two: -o * _.two, three: o * _.three, four: o * _.four };
  }), s = Q({ one: 0, two: 0, three: 0, four: 0 });
  let h;
  function b() {
    requestAnimationFrame(b), s.one !== u.value.one && (s.one = u.value.one), s.two !== u.value.two && (s.two = u.value.two), s.three !== u.value.three && (s.three = u.value.three), s.four !== u.value.four && (s.four = u.value.four);
  }
  return B(() => {
    l(), window.addEventListener("resize", n), h = requestAnimationFrame(b);
  }), Y(() => {
    window.removeEventListener("resize", n), cancelAnimationFrame(h);
  }), (a, o) => (g(), y("div", { ref_key: "containerRef", ref: v, class: "playground-background", style: M({ "--scrollbar-width": `${w(f)}px` }) }, [e("div", xe, [e("div", be, [(g(), y("svg", { class: "one metacloud", style: M({ "--translate-x": w(s).one }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o[0] || (o[0] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (g(), y("svg", { class: "metacloud two", style: M({ "--translate-x": w(s).two }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o[1] || (o[1] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (g(), y("svg", { class: "metacloud three", "max-sm:hidden": "", style: M({ "--translate-x": w(s).three }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o[2] || (o[2] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (g(), y("svg", { class: "metacloud four", style: M({ "--translate-x": w(s).four }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, o[3] || (o[3] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), o[4] || (o[4] = e("svg", { class: "metarect max-sm:aspect-9/16", viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("path", { d: "M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" })], -1))])]), o[5] || (o[5] = e("div", { class: "pb-container" }, [e("div", { class: "rect", "max-sm:hidden": "" }, [e("svg", { viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("g", { opacity: "0.5", "max-sm:hidden": "" }, [e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z", fill: "#1F2348" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M37 26C39.7614 26 42 23.7614 42 21C42 18.2386 39.7614 16 37 16C34.2386 16 32 18.2386 32 21C32 23.7614 34.2386 26 37 26Z", fill: "#1F2348" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M53 26C55.7614 26 58 23.7614 58 21C58 18.2386 55.7614 16 53 16C50.2386 16 48 18.2386 48 21C48 23.7614 50.2386 26 53 26Z", fill: "#1F2348" })]), e("g", { opacity: "0.5" }, [e("rect", { x: "368", y: "12", width: "360", height: "14", rx: "7", fill: "#1F2348" })])])])], -1))], 4));
} }), Me = Object.assign(W(Ce, [["__scopeId", "data-v-44b98479"]]), { __name: "WalletPlaygroundBackground" }), ke = D(K), We = { relative: "" }, Pe = { stack: "", "mx-auto": "", "size-full": "" }, Ue = { p: "t-48 x-10 b-10", "size-full": "", "z-1": "" }, $e = { key: 0, "rounded-4": "", "size-full": "" }, Ie = { key: 1, "rounded-4": "", "size-full": "" }, Ae = { "self-start": "!", "justify-self-end": "!", "mr--18": "", "mt-11": "", "w-max": "", relative: "", "z-10": "" }, ze = k({ __name: "PlaygroundDesktop", props: { playgroundUrl: {} }, setup(t) {
  function d(l) {
    console.error("Playground iframe error:", l);
  }
  function f(l) {
  }
  return (l, r) => {
    const n = Me, v = T, c = ke, u = R, s = q;
    return g(), y("div", We, [e("div", Pe, [r[1] || (r[1] = e("div", { "self-start": "!", "justify-self-end": "!", "aria-hidden": "", "mr--18": "", "mt-48": "", "w-44": "", "origin-bottom-right": "", "rotate--45": "", "z-1": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), x(n), e("div", Ue, [l.playgroundUrl ? (g(), y("div", $e, [x(v, { "playground-url": l.playgroundUrl, height: "600px", onMessage: f, onError: d }, null, 8, ["playground-url"])])) : (g(), y("div", Ie, [x(v, { height: "600px", onMessage: f, onError: d })]))]), e("div", Ae, [x(c, { translate: "-50%", absolute: "", left: "50%", top: "50%", "z-1": "" }), r[0] || (r[0] = e("div", { bg: "#E9B213", text: "f-lg white", rounded: "6 br-0", "font-semibold": "", "ml-auto": "", "px-20": "", "py-16": "", "w-max": "", relative: "", "z-2": "" }, " Try live preview ", -1))]), x(u, { "translate-y": "[calc(50%-10px)]" })]), x(s, { "f-mt-lg": "" })]);
  };
} }), Se = Object.assign(W(ze, [["__scopeId", "data-v-4448de3b"]]), { __name: "WalletPlaygroundDesktop" }), Ee = D(le), Be = { "data-slice-type": "wallet-playground", "bg-darkerblue": "", "scheme-dark": "", relative: "", "of-x-clip": "", "md:f-pt-3xl": "", "children:max-w-none": "" }, je = k({ __name: "index", props: ee(), setup(t) {
  const d = J("(max-width: 768px)", { ssrWidth: 1024 }), f = te(t.slice.primary.playgroundUrl);
  if (console.log("WalletPlayground slice: extracted playground URL:", f), !f) throw new Error("Playground URL is required in WalletPlayground slice");
  return (l, r) => {
    const n = Ee, v = he, c = Se;
    return g(), y("section", Be, [x(n, { h: "[calc(100%+400px)]", "max-w-screen": "", "pointer-events-none": "", "top--400": "" }), w(d) ? (g(), S(v, { key: "mobile", "playground-url": w(f) }, null, 8, ["playground-url"])) : (g(), S(c, { key: "desktop", "w-full": "", "z-1": "", "playground-url": w(f) }, null, 8, ["playground-url"]))]);
  };
} });
export {
  je as default
};
