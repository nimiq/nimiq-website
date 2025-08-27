import { j as y, o as p, k as t, aw as I, b7 as D, d as C, a as z, v as b, B as P, l as T, h as _, x as R, au as O, Z as q, F as L, r as j, n as $, t as Z, q as x, g as h, b6 as H, C as N, av as S, e as U } from "./BdODHn_3.js";
import { _ as k } from "./DlAUqK2U.js";
import { l as V, q as Q, s as Y } from "./5qd8EHar.js";
import { _ as G } from "./BTvrVf5C.js";
import { g as J } from "./CpsPJSKh.js";
import { e as K } from "./DGIQ2ECZ.js";
import "./BTeZegdw.js";
const X = {}, ee = { "size-full": "", relative: "", "z-2": "" };
function te(o, u) {
  return p(), y("div", ee, u[0] || (u[0] = [t("div", { "size-full": "", "of-x-hidden": "", "of-y-visible": "" }, [t("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-64": "", "w-120": "", hidden: "", "scale-x--100": "", "left--32": "", "top--100": "", absolute: "", "md:block": "", style: { "--to": "300px" } }), t("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-46": "", "w-90": "", "scale-x--100": "", "right--33": "", "top--180": "", absolute: "", "of-hidden": "", style: { "--to": "220px" } }), t("div", { "i-custom:cloud": "", "h-32": "", "w-60": "", "right-25vw": "", "top-200": "", absolute: "", class: "cloud-parallax", style: { "--to": "100px" } })], -1)]));
}
const oe = Object.assign(k(X, [["render", te], ["__scopeId", "data-v-78f6a526"]]), { __name: "AnimatedCloudyBg" });
function W() {
  const o = I("playground-state", () => ({ isConnected: false, currentAddress: null, selectedAction: "idle", isDemoMode: false, isModalOpen: false, openModalType: null })), u = I("playground-iframe-ref", () => null);
  function f(e) {
    return ["demo:ready", "action:open-buy-modal", "action:open-staking-modal", "action:open-swap-modal", "action:close-modal"].includes(e);
  }
  function c(e) {
    var _a;
    ((_a = u.value) == null ? void 0 : _a.sendMessage) ? u.value.sendMessage(e) : console.warn("usePlaygroundIframe: Iframe not available, message not sent:", e.type);
  }
  function g(e) {
    u.value = e;
  }
  function i() {
    c({ type: "action:change", data: { action: o.value.selectedAction, isDemoMode: o.value.isDemoMode } });
  }
  function v(e) {
    o.value.selectedAction = e, c({ type: "action:change", data: { action: e, isDemoMode: o.value.isDemoMode } });
  }
  async function l(e) {
    o.value.isConnected = true, o.value.currentAddress = e;
  }
  function n() {
    o.value.isConnected = false, o.value.currentAddress = null;
  }
  function r() {
    o.value.selectedAction = "idle", o.value.isModalOpen = false, o.value.openModalType = null, c({ type: "action:change", data: { action: "idle", isDemoMode: o.value.isDemoMode } });
  }
  function m(e) {
    o.value.isModalOpen = true, o.value.openModalType = e, o.value.selectedAction = e, c({ type: { buy: "action:open-buy-modal", stake: "action:open-staking-modal", swap: "action:open-swap-modal" }[e] });
  }
  function w() {
    o.value.isModalOpen = false, o.value.openModalType = null, o.value.selectedAction = "idle";
  }
  function s() {
    o.value.isDemoMode = true;
  }
  async function a(e) {
    const d = e.type;
    switch (d) {
      case "demo:ready":
        s();
        break;
      case "action:open-buy-modal":
        m("buy");
        break;
      case "action:open-staking-modal":
        m("stake");
        break;
      case "action:open-swap-modal":
        m("swap");
        break;
      case "action:close-modal":
        w();
        break;
      default:
        console.warn("Unknown message type:", d);
    }
  }
  return { playgroundState: D(o), setIframeRef: g, onIframeReady: i, setSelectedAction: v, resetActionState: r, connectWallet: l, disconnectWallet: n, sendMessage: c, handlePlaygroundMessage: a, openModal: m, closeModal: w, activateDemoMode: s, isStandardizedAction: f };
}
const ne = { "size-full": "", "inline-block": "", relative: "", aspect: "16/9 desktop:9/16" }, ae = ["src", "sandbox", "width", "height"], le = C({ __name: "WalletPlaygroundIframe", props: { playgroundUrl: {}, allowedOrigins: { default: () => [] }, height: { default: "600px" }, width: { default: "100%" }, sandbox: { default: "allow-scripts allow-same-origin" } }, emits: ["message", "ready", "error"], setup(o, { expose: u, emit: f }) {
  const c = f, { setIframeRef: g, onIframeReady: i, handlePlaygroundMessage: v } = W(), l = z(() => {
    try {
      const e = new URL(o.playgroundUrl);
      if (e.protocol !== "https:") throw new Error(`WalletPlaygroundIframe: Only HTTPS URLs are allowed: ${e.href}`);
      return o.playgroundUrl;
    } catch {
      return console.error("WalletPlaygroundIframe: Invalid URL provided"), "";
    }
  }), n = b();
  function r(e) {
    if (o.allowedOrigins.length === 0) try {
      const d = new URL(o.playgroundUrl);
      return e === d.origin;
    } catch {
      return false;
    }
    return o.allowedOrigins.includes(e);
  }
  function m(e) {
    var _a;
    if (!((_a = n.value) == null ? void 0 : _a.contentWindow)) {
      console.warn("WalletPlaygroundIframe: No iframe contentWindow available");
      return;
    }
    try {
      const d = new URL(o.playgroundUrl).origin;
      n.value.contentWindow.postMessage(e, d);
    } catch (d) {
      console.error("WalletPlaygroundIframe: Failed to send message:", d), c("error", new Error(`Failed to send message: ${d}`));
    }
  }
  function w(e) {
    if (console.log("\u{1F504} WalletPlaygroundIframe: Received message from:", e.origin, "Data:", e.data), !r(e.origin)) {
      console.warn("Received message from unauthorized origin:", e.origin);
      return;
    }
    try {
      const d = e.data, M = d.type;
      if (!d || typeof d != "object" || typeof M != "string") {
        console.warn("WalletPlaygroundIframe: Invalid message structure received");
        return;
      }
      if (!["demo:ready", "action:change", "action:open-buy-modal", "action:open-staking-modal", "action:open-swap-modal", "action:close-modal"].includes(M)) {
        console.warn("WalletPlaygroundIframe: Unknown/unauthorized message type:", M);
        return;
      }
      M === "demo:ready" && (c("ready"), i());
      const E = { ...d, type: M };
      v(E), c("message", d);
    } catch (d) {
      console.error("WalletPlaygroundIframe: Failed to process message:", d), c("error", new Error(`Failed to process message: ${d}`));
    }
  }
  function s() {
    m({ type: "action:change", data: { action: "idle", isDemoMode: false } });
  }
  function a() {
    console.error("WalletPlaygroundIframe: Iframe failed to load"), c("error", new Error("Failed to load iframe"));
  }
  return V(window, "message", w), P(() => {
    g({ sendMessage: m });
  }), u({ sendMessage: m }), (e, d) => (p(), y("div", ne, [_(l) ? (p(), y("iframe", { key: 0, ref_key: "iframeRef", ref: n, src: _(l), sandbox: e.sandbox, width: e.width, height: e.height, frameborder: "0", allowtransparency: "true", "outline-none": "", "rounded-8": "", "border-none": "", "size-full": "", "shadow-lg": "", "transition-opacity": "", "duration-300": "", ease: "", onLoad: s, onError: a }, null, 40, ae)) : T("", true)]));
} }), A = Object.assign(le, { __name: "WalletPlaygroundIframe" }), re = { flex: "~ gap-4", "self-end": "!", ring: "1 blue/80", "p-4": "", "rounded-full": "", "bg-white": "", "h-max": "", relative: "", "z-10": "", style: { "--un-shadow": "0 0 32px #0682CA" } }, se = ["data-state", "onClick"], ie = { font: "semibold data-active:bold", text: "data-active:white", "transition-color": "" }, de = C({ __name: "ActionSelector", emits: ["state"], setup(o, { emit: u }) {
  const f = u, { setSelectedAction: c, playgroundState: g } = W(), i = b("idle");
  R(i, (n) => {
    c(n);
  }, { immediate: true }), R(() => g.value.selectedAction, (n) => {
    n !== i.value && (i.value = n);
  }, { immediate: true });
  const v = [{ label: "Stake", value: "stake", icon: "i-nimiq:leaf-2-filled", color: "green" }, { label: "Buy", value: "buy", icon: "i-nimiq:floating-ball", color: "blue" }, { label: "Swap", value: "swap", icon: "i-nimiq:exchange-chevron", color: "purple" }], l = O("pill");
  return q(() => {
    var _a;
    if (l.value) {
      if (i.value === "idle") l.value.style.transform = "scale(0.75)", l.value.style.opacity = "0";
      else {
        const n = l.value.parentElement.getBoundingClientRect(), { width: r, left: m } = ((_a = document.querySelector('button[data-state="active"]')) == null ? void 0 : _a.getBoundingClientRect()) || { width: 0, left: 0 };
        l.value.style.width = `${r}px`, l.value.style.left = `${m - n.left}px`, l.value.style.transform = "scale(1)", l.value.style.opacity = "1";
      }
      f("state", i.value);
    }
  }, { flush: "post" }), (n, r) => (p(), y("ul", re, [t("div", { ref_key: "pill", ref: l, "rounded-full": "", "bg-darkblue": "", "transition-all": "", "duration-400": "", "ease-in-out": "", "inset-y-3": "", absolute: "" }, null, 512), (p(), y(L, null, j(v, ({ icon: m, label: w, value: s, color: a }) => t("li", { key: s, style: x({ "--c": `rgb(var(--nq-${a}) / 1)` }), class: "dark", "scheme-dark": "" }, [t("button", { flex: "~ gap-2 items-center", "p-2": "", "pr-12": "", "rounded-full": "", "bg-transparent": "", "data-state": s === _(i) ? "active" : void 0, onClick: (e) => i.value = s }, [t("div", { class: $(m), text: "neutral-800 data-active:$c", "m-8": "", "transition-color": "" }, null, 2), t("span", ie, Z(w), 1)], 8, se)], 4)), 64)), t("li", { class: $(_(i) === "idle" ? "scale-0 w-0" : "scale-100 w-36"), "h-36": "", transition: "[width,transform]", "duration-300": "", "ease-out": "", "max-sm:hidden": "" }, [t("button", { "bg-transparent": "", onClick: r[0] || (r[0] = (m) => i.value = "idle") }, r[1] || (r[1] = [t("div", { text: "neutral-800", "m-8": "", "i-nimiq:redo": "" }, null, -1)]))], 2)]));
} }), B = Object.assign(de, { __name: "WalletActionSelector" }), ue = {}, ce = { flex: "~ col gap-20 justify-center items-center" };
function me(o, u) {
  return p(), y("div", ce, u[0] || (u[0] = [t("div", { flex: "~ gap-12 items-center", text: "white/40 34" }, [t("div", { "text-32": "", "i-nimiq:logos-nimiq-mono": "", title: "NIM" }), t("div", { "i-nimiq:logos-bitcoin-mono": "", title: "BTC" }), t("div", { "i-nimiq:logos-usdc-mono": "", title: "USDC" }), t("div", { "i-nimiq:logos-usdt-mono": "", title: "USDT" })], -1), t("h2", { text: "white/60 f-xs center", "font-bold": "", "nq-label": "" }, " Supported currencies ", -1)]));
}
const F = Object.assign(k(ue, [["render", me]]), { __name: "WalletCurrencies" }), pe = { "pb-32": "", relative: "" }, fe = { w: "[calc(100%+48px)]", "p-8": "", "rounded-14": "", "size-full": "", "aspect-0.7": "", "left--24": "", relative: "", "f-mt-xl": "" }, ge = { "rounded-8": "", "size-full": "", relative: "", "z-1": "" }, ye = C({ __name: "PlaygroundMobile", props: { playgroundUrl: {} }, setup(o) {
  const { handlePlaygroundMessage: u, onIframeReady: f, setIframeRef: c } = W(), g = b();
  function i() {
    console.log("Playground iframe is ready"), f();
  }
  function v(l) {
    console.error("Playground iframe error:", l);
  }
  return P(() => {
    g.value && c(g.value);
  }), (l, n) => {
    const r = A, m = B, w = F;
    return p(), y("div", pe, [n[1] || (n[1] = t("div", { class: "bg", left: "[calc(var(--px)*-1)]", w: "[calc(100%+var(--px)*2)]", "inset-0": "", "top--160": "", absolute: "", "z--1": "" }, null, -1)), t("div", fe, [n[0] || (n[0] = t("div", { "rounded-14": "", "bg-neutral-300": "", "op-50": "", "inset-0": "", absolute: "", "backdrop-blur-3.5": "", style: { "box-shadow": "inset 0px 0px 40px #FFFFFF" } }, null, -1)), t("div", ge, [h(r, { ref_key: "iframeRef", ref: g, "playground-url": l.playgroundUrl, height: "100%", onMessage: _(u), onReady: i, onError: v }, null, 8, ["playground-url", "onMessage"])])]), h(m, { "mx-auto": "", "w-max": "", "translate-y": "-50%" }), h(w, { "f-mt-2xs": "" })]);
  };
} }), ve = Object.assign(k(ye, [["__scopeId", "data-v-2802423b"]]), { __name: "WalletPlaygroundMobile" }), _e = { class: "metawrapper" }, we = { class: "metacontainer" }, he = C({ __name: "PlaygroundBackground", setup(o) {
  function u() {
    var _a;
    const s = document.createElement("div");
    s.style.visibility = "hidden", s.style.overflow = "scroll", document.body.appendChild(s);
    const a = document.createElement("div");
    s.appendChild(a);
    const e = s.offsetWidth - a.offsetWidth;
    return (_a = s.parentNode) == null ? void 0 : _a.removeChild(s), e;
  }
  const f = b(0);
  function c() {
    f.value = u();
  }
  function g(s, a = 300) {
    let e;
    return function(...d) {
      clearTimeout(e), e = setTimeout(() => s.apply(this, d), a);
    };
  }
  const i = g(c), v = b(null), { y: l } = Q(), n = z(() => {
    var _a;
    const s = (_a = v.value) == null ? void 0 : _a.getBoundingClientRect();
    if (!s) return { one: 0, two: 0, three: 0, four: 0 };
    const a = Math.trunc((l.value - s.top) / window.innerHeight * 50), e = { one: 2, two: 1, three: 3, four: 1 };
    return { one: -a * e.one, two: -a * e.two, three: a * e.three, four: a * e.four };
  }), r = H({ one: 0, two: 0, three: 0, four: 0 });
  let m;
  function w() {
    requestAnimationFrame(w), r.one !== n.value.one && (r.one = n.value.one), r.two !== n.value.two && (r.two = n.value.two), r.three !== n.value.three && (r.three = n.value.three), r.four !== n.value.four && (r.four = n.value.four);
  }
  return P(() => {
    c(), window.addEventListener("resize", i), m = requestAnimationFrame(w);
  }), N(() => {
    window.removeEventListener("resize", i), cancelAnimationFrame(m);
  }), (s, a) => (p(), y("div", { ref_key: "containerRef", ref: v, class: "playground-background", style: x({ "--scrollbar-width": `${_(f)}px` }) }, [t("div", _e, [t("div", we, [(p(), y("svg", { class: "one metacloud", style: x({ "--translate-x": _(r).one }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[0] || (a[0] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (p(), y("svg", { class: "metacloud two", style: x({ "--translate-x": _(r).two }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[1] || (a[1] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (p(), y("svg", { class: "metacloud three", "max-sm:hidden": "", style: x({ "--translate-x": _(r).three }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[2] || (a[2] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (p(), y("svg", { class: "metacloud four", style: x({ "--translate-x": _(r).four }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, a[3] || (a[3] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), a[4] || (a[4] = t("svg", { class: "metarect max-sm:aspect-9/16", viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [t("path", { d: "M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" })], -1))])]), a[5] || (a[5] = t("div", { class: "pb-container" }, [t("div", { class: "rect", "max-sm:hidden": "" }, [t("svg", { viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [t("g", { opacity: "0.5", "max-sm:hidden": "" }, [t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z", fill: "#1F2348" }), t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M37 26C39.7614 26 42 23.7614 42 21C42 18.2386 39.7614 16 37 16C34.2386 16 32 18.2386 32 21C32 23.7614 34.2386 26 37 26Z", fill: "#1F2348" }), t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M53 26C55.7614 26 58 23.7614 58 21C58 18.2386 55.7614 16 53 16C50.2386 16 48 18.2386 48 21C48 23.7614 50.2386 26 53 26Z", fill: "#1F2348" })]), t("g", { opacity: "0.5" }, [t("rect", { x: "368", y: "12", width: "360", height: "14", rx: "7", fill: "#1F2348" })])])])], -1))], 4));
} }), xe = Object.assign(k(he, [["__scopeId", "data-v-44b98479"]]), { __name: "WalletPlaygroundBackground" }), be = S(G), Ce = { relative: "" }, Me = { stack: "", "mx-auto": "", "size-full": "" }, ke = { p: "t-48 x-10 b-10", "size-full": "", "z-1": "" }, Pe = { key: 0, "rounded-4": "", "size-full": "" }, We = { key: 1, "rounded-4": "", "bg-slate-200": "", flex: "", "size-full": "", "items-center": "", "justify-center": "" }, Ie = { "self-start": "!", "justify-self-end": "!", "mr--18": "", "mt-11": "", "w-max": "", relative: "", "z-10": "" }, Re = C({ __name: "PlaygroundDesktop", props: { playgroundUrl: {} }, setup(o) {
  const { handlePlaygroundMessage: u, onIframeReady: f, setIframeRef: c } = W(), g = b();
  function i() {
    console.log("Playground iframe is ready"), f();
  }
  function v(l) {
    console.error("Playground iframe error:", l);
  }
  return P(() => {
    console.log("PlaygroundDesktop: Component mounted, iframe ref:", !!g.value), g.value && (console.log("PlaygroundDesktop: Setting iframe ref in composable"), c(g.value));
  }), (l, n) => {
    const r = xe, m = A, w = be, s = B, a = F;
    return p(), y("div", Ce, [t("div", Me, [n[2] || (n[2] = t("div", { "self-start": "!", "justify-self-end": "!", "aria-hidden": "", "mr--18": "", "mt-48": "", "w-44": "", "origin-bottom-right": "", "rotate--45": "", "z-1": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), h(r), t("div", ke, [l.playgroundUrl ? (p(), y("div", Pe, [h(m, { ref_key: "iframeRef", ref: g, "playground-url": l.playgroundUrl, height: "600px", onMessage: _(u), onReady: i, onError: v }, null, 8, ["playground-url", "onMessage"])])) : (p(), y("div", We, n[0] || (n[0] = [t("p", { text: "center neutral-600" }, " No playground URL configured ", -1)])))]), t("div", Ie, [h(w, { translate: "-50%", absolute: "", left: "50%", top: "50%", "z-1": "" }), n[1] || (n[1] = t("div", { bg: "#E9B213", text: "f-lg white", rounded: "6 br-0", "font-semibold": "", "ml-auto": "", "px-20": "", "py-16": "", "w-max": "", relative: "", "z-2": "" }, " Try live preview ", -1))]), h(s, { "translate-y": "[calc(50%-10px)]" })]), h(a, { "f-mt-lg": "" })]);
  };
} }), $e = Object.assign(k(Re, [["__scopeId", "data-v-5609789d"]]), { __name: "WalletPlaygroundDesktop" }), Ue = S(oe), ze = { "data-slice-type": "wallet-playground", "bg-darkerblue": "", "scheme-dark": "", relative: "", "of-x-clip": "", "md:f-pt-3xl": "", "children:max-w-none": "" }, qe = C({ __name: "index", props: J(), setup(o) {
  const u = Y("(max-width: 768px)", { ssrWidth: 768 }), f = K(o.slice.primary.playgroundUrl);
  if (console.log("WalletPlayground slice: extracted playground URL:", f), !f) throw new Error("Playground URL is required in WalletPlayground slice");
  return (c, g) => {
    const i = Ue, v = ve, l = $e;
    return p(), y("section", ze, [h(i, { h: "[calc(100%+400px)]", "max-w-screen": "", "pointer-events-none": "", "top--400": "" }), _(u) ? (p(), U(v, { key: "mobile", "playground-url": _(f) }, null, 8, ["playground-url"])) : (p(), U(l, { key: "desktop", "w-full": "", "z-1": "", "playground-url": _(f) }, null, 8, ["playground-url"]))]);
  };
} });
export {
  qe as default
};
