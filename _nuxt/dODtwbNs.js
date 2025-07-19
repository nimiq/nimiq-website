import { i as M, c as y, o as g, e as t, ae as R, aR as D, d as k, j as A, C as b, G as P, f as O, u as h, Y as I, ay as T, V as q, F as L, r as j, n as $, t as H, h as C, a as x, ar as Z, H as N, ad as F, b as U } from "./g1xKa6TI.js";
import { m as V, r as Y, v as G } from "./k4OXxJR1.js";
import { _ as Q } from "./CpdjZK8b.js";
import { g as J } from "./CpsPJSKh.js";
import { e as K } from "./B2NqqgPK.js";
import "./Qjh2__OP.js";
const X = {}, ee = { "size-full": "", relative: "", "z-2": "" };
function te(o, c) {
  return g(), y("div", ee, c[0] || (c[0] = [t("div", { "size-full": "", "of-x-hidden": "", "of-y-visible": "" }, [t("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-64": "", "w-120": "", hidden: "", "scale-x--100": "", "left--32": "", "top--100": "", absolute: "", "md:block": "", style: { "--to": "300px" } }), t("div", { class: "cloud-parallax", "i-custom:cloud": "", "h-46": "", "w-90": "", "scale-x--100": "", "right--33": "", "top--180": "", absolute: "", "of-hidden": "", style: { "--to": "220px" } }), t("div", { "i-custom:cloud": "", "h-32": "", "w-60": "", "right-25vw": "", "top-200": "", absolute: "", class: "cloud-parallax", style: { "--to": "100px" } })], -1)]));
}
const oe = Object.assign(M(X, [["render", te], ["__scopeId", "data-v-78f6a526"]]), { __name: "AnimatedCloudyBg" });
function W() {
  const o = R("playground-state", () => ({ isConnected: false, currentAddress: null, selectedAction: "idle", isDemoMode: false, isModalOpen: false, openModalType: null })), c = R("playground-iframe-ref", () => null);
  function f(e) {
    return ["wallet:demo:ready", "wallet:action:open-buy-demo-nim-modal", "wallet:action:open-staking-modal", "wallet:action:open-swap-modal", "wallet:action:close-modal"].includes(e);
  }
  function m(e) {
    return ["wallet:connect", "wallet:transaction", "wallet:sign", "wallet:action:request", "FlowChange"].includes(e);
  }
  function u(e) {
    var _a;
    ((_a = c.value) == null ? void 0 : _a.sendMessage) ? c.value.sendMessage(e) : console.warn("usePlaygroundIframe: Iframe not available, message not sent:", e.type);
  }
  function d(e) {
    c.value = e;
  }
  function w() {
    u({ type: "wallet:action:change", data: { action: o.value.selectedAction, isDemoMode: o.value.isDemoMode } });
  }
  function r(e) {
    console.log("Action changed to:", e), o.value.selectedAction = e, u({ type: "wallet:action:change", data: { action: e, isDemoMode: o.value.isDemoMode } });
  }
  async function n(e) {
    o.value.isConnected = true, o.value.currentAddress = e;
  }
  function s() {
    o.value.isConnected = false, o.value.currentAddress = null;
  }
  function p() {
    o.value.selectedAction = "idle", o.value.isModalOpen = false, o.value.openModalType = null, u({ type: "wallet:action:change", data: { action: "idle", isDemoMode: o.value.isDemoMode } });
  }
  function v(e) {
    o.value.isModalOpen = true, o.value.openModalType = e, o.value.selectedAction = e, console.log(`Opening ${e} modal`);
  }
  function i() {
    o.value.isModalOpen = false, o.value.openModalType = null, o.value.selectedAction = "idle", console.log("Closing modal");
  }
  function l() {
    o.value.isDemoMode = true, console.log("Demo mode activated");
  }
  async function a(e) {
    console.log("Received message from playground:", e);
    const _ = e.type || e.kind;
    switch (f(_) ? console.log("\u{1F680} Processing future action:", _) : m(_) && console.log("\u26A0\uFE0F  Processing legacy action:", _), _) {
      case "FlowChange":
        console.log("Flow changed to:", e.data), e.data === "idle" ? (console.log("Flow changed to idle, resetting action state"), p()) : ["stake", "buy", "swap"].includes(e.data) && (o.value.selectedAction = e.data);
        break;
      case "wallet:demo:ready":
        l();
        break;
      case "wallet:action:open-buy-demo-nim-modal":
        v("buy");
        break;
      case "wallet:action:open-staking-modal":
        v("stake");
        break;
      case "wallet:action:open-swap-modal":
        v("swap");
        break;
      case "wallet:action:close-modal":
        i();
        break;
      default:
        console.log("Unknown message type:", _);
    }
  }
  return { playgroundState: D(o), setIframeRef: d, onIframeReady: w, setSelectedAction: r, resetActionState: p, connectWallet: n, disconnectWallet: s, sendMessage: u, handlePlaygroundMessage: a, openModal: v, closeModal: i, activateDemoMode: l, isFutureAction: f, isLegacyAction: m };
}
const ne = { "size-full": "", "inline-block": "", relative: "", aspect: "16/9 desktop:9/16" }, le = ["src", "sandbox", "width", "height"], ae = k({ __name: "WalletPlaygroundIframe", props: { playgroundUrl: {}, allowedOrigins: { default: () => [] }, height: { default: "600px" }, width: { default: "100%" }, sandbox: { default: "allow-scripts allow-same-origin" } }, emits: ["message", "ready", "error"], setup(o, { expose: c, emit: f }) {
  const m = f, { setIframeRef: u, onIframeReady: d, handlePlaygroundMessage: w } = W(), r = A(() => {
    try {
      const a = new URL(o.playgroundUrl);
      if (a.protocol !== "https:") throw new Error(`WalletPlaygroundIframe: Only HTTPS URLs are allowed: ${a.href}`);
      return o.playgroundUrl;
    } catch {
      return console.error("WalletPlaygroundIframe: Invalid URL provided"), "";
    }
  }), n = b();
  function s(a) {
    if (o.allowedOrigins.length === 0) try {
      const e = new URL(o.playgroundUrl);
      return a === e.origin;
    } catch {
      return false;
    }
    return o.allowedOrigins.includes(a);
  }
  function p(a) {
    var _a;
    if (!((_a = n.value) == null ? void 0 : _a.contentWindow)) {
      console.warn("WalletPlaygroundIframe: No iframe contentWindow available");
      return;
    }
    try {
      const e = new URL(o.playgroundUrl).origin;
      n.value.contentWindow.postMessage(a, e);
    } catch (e) {
      console.error("WalletPlaygroundIframe: Failed to send message:", e), m("error", new Error(`Failed to send message: ${e}`));
    }
  }
  function v(a) {
    if (console.log("\u{1F504} WalletPlaygroundIframe: Received message from:", a.origin, "Data:", a.data), !s(a.origin)) {
      console.warn("Received message from unauthorized origin:", a.origin);
      return;
    }
    try {
      const e = a.data, _ = e.type || e.kind;
      if (!e || typeof e != "object" || typeof _ != "string") {
        console.warn("WalletPlaygroundIframe: Invalid message structure received");
        return;
      }
      if (!["playground:ready", "wallet:connect", "wallet:transaction", "wallet:sign", "wallet:action:request", "FlowChange", "wallet:demo:ready", "wallet:action:open-buy-demo-nim-modal", "wallet:action:open-staking-modal", "wallet:action:open-swap-modal", "wallet:action:close-modal"].includes(_)) {
        console.warn("WalletPlaygroundIframe: Unknown/unauthorized message type:", _);
        return;
      }
      if (_ === "playground:ready") {
        m("ready"), d();
        return;
      }
      _ === "wallet:demo:ready" && (m("ready"), d());
      const E = { ...e, type: _ };
      w(E), m("message", e);
    } catch (e) {
      console.error("WalletPlaygroundIframe: Failed to process message:", e), m("error", new Error(`Failed to process message: ${e}`));
    }
  }
  function i() {
    p({ type: "parent:ready" });
  }
  function l() {
    console.error("WalletPlaygroundIframe: Iframe failed to load"), m("error", new Error("Failed to load iframe"));
  }
  return V(window, "message", v), P(() => {
    u({ sendMessage: p });
  }), c({ sendMessage: p }), (a, e) => (g(), y("div", ne, [h(r) ? (g(), y("iframe", { key: 0, ref_key: "iframeRef", ref: n, src: h(r), sandbox: a.sandbox, width: a.width, height: a.height, frameborder: "0", allowtransparency: "true", "outline-none": "", "rounded-8": "", "border-none": "", "size-full": "", "shadow-lg": "", "transition-opacity": "", "duration-300": "", ease: "", onLoad: i, onError: l }, null, 40, le)) : O("", true)]));
} }), z = Object.assign(ae, { __name: "WalletPlaygroundIframe" }), re = { flex: "~ gap-4", "self-end": "!", ring: "1 blue/80", "p-4": "", "rounded-full": "", "bg-white": "", "h-max": "", relative: "", "z-10": "", style: { "--un-shadow": "0 0 32px #0682CA" } }, se = ["data-state", "onClick"], ie = { font: "semibold data-active:bold", text: "data-active:white", "transition-color": "" }, de = k({ __name: "ActionSelector", emits: ["state"], setup(o, { emit: c }) {
  const f = c, { setSelectedAction: m, playgroundState: u } = W(), d = b("idle");
  I(d, (n) => {
    m(n);
  }, { immediate: true }), I(() => u.value.selectedAction, (n) => {
    n !== d.value && (d.value = n);
  }, { immediate: true });
  const w = [{ label: "Stake", value: "stake", icon: "i-nimiq:leaf-2-filled", color: "green" }, { label: "Buy", value: "buy", icon: "i-nimiq:floating-ball", color: "blue" }, { label: "Swap", value: "swap", icon: "i-nimiq:exchange-chevron", color: "purple" }], r = T("pill");
  return q(() => {
    var _a;
    if (r.value) {
      if (d.value === "idle") r.value.style.transform = "scale(0.75)", r.value.style.opacity = "0";
      else {
        const n = r.value.parentElement.getBoundingClientRect(), { width: s, left: p } = ((_a = document.querySelector('button[data-state="active"]')) == null ? void 0 : _a.getBoundingClientRect()) || { width: 0, left: 0 };
        r.value.style.width = `${s}px`, r.value.style.left = `${p - n.left}px`, r.value.style.transform = "scale(1)", r.value.style.opacity = "1";
      }
      f("state", d.value);
    }
  }, { flush: "post" }), (n, s) => (g(), y("ul", re, [t("div", { ref_key: "pill", ref: r, "rounded-full": "", "bg-darkblue": "", "transition-all": "", "duration-400": "", "ease-in-out": "", "inset-y-3": "", absolute: "" }, null, 512), (g(), y(L, null, j(w, ({ icon: p, label: v, value: i, color: l }) => t("li", { key: i, style: C({ "--c": `rgb(var(--nq-${l}) / 1)` }), class: "dark", "scheme-dark": "" }, [t("button", { flex: "~ gap-2 items-center", "p-2": "", "pr-12": "", "rounded-full": "", "bg-transparent": "", "data-state": i === h(d) ? "active" : void 0, onClick: (a) => d.value = i }, [t("div", { class: $(p), text: "neutral-800 data-active:$c", "m-8": "", "transition-color": "" }, null, 2), t("span", ie, H(v), 1)], 8, se)], 4)), 64)), t("li", { class: $(h(d) === "idle" ? "scale-0 w-0" : "scale-100 w-36"), "h-36": "", transition: "[width,transform]", "duration-300": "", "ease-out": "", "max-sm:hidden": "" }, [t("button", { "bg-transparent": "", onClick: s[0] || (s[0] = (p) => d.value = "idle") }, s[1] || (s[1] = [t("div", { text: "neutral-800", "m-8": "", "i-nimiq:redo": "" }, null, -1)]))], 2)]));
} }), S = Object.assign(de, { __name: "WalletActionSelector" }), ce = {}, ue = { flex: "~ col gap-20 justify-center items-center" };
function me(o, c) {
  return g(), y("div", ue, c[0] || (c[0] = [t("div", { flex: "~ gap-12 items-center", text: "white/40 34" }, [t("div", { "text-32": "", "i-nimiq:logos-nimiq-mono": "", title: "NIM" }), t("div", { "i-nimiq:logos-bitcoin-mono": "", title: "BTC" }), t("div", { "i-nimiq:logos-usdc-mono": "", title: "USDC" }), t("div", { "i-nimiq:logos-usdt-mono": "", title: "USDT" })], -1), t("h2", { text: "white/60 f-xs center", "font-bold": "", "nq-label": "" }, " Supported currencies ", -1)]));
}
const B = Object.assign(M(ce, [["render", me]]), { __name: "WalletCurrencies" }), fe = { "pb-32": "", relative: "" }, pe = { w: "[calc(100%+48px)]", "p-8": "", "rounded-14": "", "size-full": "", "aspect-0.7": "", "left--24": "", relative: "", "f-mt-xl": "" }, ge = { "rounded-8": "", "size-full": "", relative: "", "z-1": "" }, ye = k({ __name: "PlaygroundMobile", props: { playgroundUrl: {} }, setup(o) {
  const { handlePlaygroundMessage: c, onIframeReady: f, setIframeRef: m } = W(), u = b();
  function d() {
    console.log("Playground iframe is ready"), f();
  }
  function w(r) {
    console.error("Playground iframe error:", r);
  }
  return P(() => {
    u.value && m(u.value);
  }), (r, n) => {
    const s = z, p = S, v = B;
    return g(), y("div", fe, [n[1] || (n[1] = t("div", { class: "bg", left: "[calc(var(--px)*-1)]", w: "[calc(100%+var(--px)*2)]", "inset-0": "", "top--160": "", absolute: "", "z--1": "" }, null, -1)), t("div", pe, [n[0] || (n[0] = t("div", { "rounded-14": "", "bg-neutral-300": "", "op-50": "", "inset-0": "", absolute: "", "backdrop-blur-3.5": "", style: { "box-shadow": "inset 0px 0px 40px #FFFFFF" } }, null, -1)), t("div", ge, [x(s, { ref_key: "iframeRef", ref: u, "playground-url": r.playgroundUrl, height: "100%", onMessage: h(c), onReady: d, onError: w }, null, 8, ["playground-url", "onMessage"])])]), x(p, { "mx-auto": "", "w-max": "", "translate-y": "-50%" }), x(v, { "f-mt-2xs": "" })]);
  };
} }), ve = Object.assign(M(ye, [["__scopeId", "data-v-2802423b"]]), { __name: "WalletPlaygroundMobile" }), we = { class: "metawrapper" }, _e = { class: "metacontainer" }, he = k({ __name: "PlaygroundBackground", setup(o) {
  function c() {
    var _a;
    const i = document.createElement("div");
    i.style.visibility = "hidden", i.style.overflow = "scroll", document.body.appendChild(i);
    const l = document.createElement("div");
    i.appendChild(l);
    const a = i.offsetWidth - l.offsetWidth;
    return (_a = i.parentNode) == null ? void 0 : _a.removeChild(i), a;
  }
  const f = b(0);
  function m() {
    f.value = c();
  }
  function u(i, l = 300) {
    let a;
    return function(...e) {
      clearTimeout(a), a = setTimeout(() => i.apply(this, e), l);
    };
  }
  const d = u(m), w = b(null), { y: r } = Y(), n = A(() => {
    var _a;
    const i = (_a = w.value) == null ? void 0 : _a.getBoundingClientRect();
    if (!i) return { one: 0, two: 0, three: 0, four: 0 };
    const l = Math.trunc((r.value - i.top) / window.innerHeight * 50), a = { one: 2, two: 1, three: 3, four: 1 };
    return { one: -l * a.one, two: -l * a.two, three: l * a.three, four: l * a.four };
  }), s = Z({ one: 0, two: 0, three: 0, four: 0 });
  let p;
  function v() {
    requestAnimationFrame(v), s.one !== n.value.one && (s.one = n.value.one), s.two !== n.value.two && (s.two = n.value.two), s.three !== n.value.three && (s.three = n.value.three), s.four !== n.value.four && (s.four = n.value.four);
  }
  return P(() => {
    m(), window.addEventListener("resize", d), p = requestAnimationFrame(v);
  }), N(() => {
    window.removeEventListener("resize", d), cancelAnimationFrame(p);
  }), (i, l) => (g(), y("div", { ref_key: "containerRef", ref: w, class: "playground-background", style: C({ "--scrollbar-width": `${f.value}px` }) }, [t("div", we, [t("div", _e, [(g(), y("svg", { class: "one metacloud", style: C({ "--translate-x": h(s).one }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, l[0] || (l[0] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (g(), y("svg", { class: "metacloud two", style: C({ "--translate-x": h(s).two }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, l[1] || (l[1] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (g(), y("svg", { class: "metacloud three", "max-sm:hidden": "", style: C({ "--translate-x": h(s).three }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, l[2] || (l[2] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (g(), y("svg", { class: "metacloud four", style: C({ "--translate-x": h(s).four }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, l[3] || (l[3] = [t("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), l[4] || (l[4] = t("svg", { class: "metarect max-sm:aspect-9/16", viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [t("path", { d: "M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" })], -1))])]), l[5] || (l[5] = t("div", { class: "pb-container" }, [t("div", { class: "rect", "max-sm:hidden": "" }, [t("svg", { viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [t("g", { opacity: "0.5", "max-sm:hidden": "" }, [t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z", fill: "#1F2348" }), t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M37 26C39.7614 26 42 23.7614 42 21C42 18.2386 39.7614 16 37 16C34.2386 16 32 18.2386 32 21C32 23.7614 34.2386 26 37 26Z", fill: "#1F2348" }), t("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M53 26C55.7614 26 58 23.7614 58 21C58 18.2386 55.7614 16 53 16C50.2386 16 48 18.2386 48 21C48 23.7614 50.2386 26 53 26Z", fill: "#1F2348" })]), t("g", { opacity: "0.5" }, [t("rect", { x: "368", y: "12", width: "360", height: "14", rx: "7", fill: "#1F2348" })])])])], -1))], 4));
} }), xe = Object.assign(M(he, [["__scopeId", "data-v-afb582fc"]]), { __name: "WalletPlaygroundBackground" }), Ce = F(Q), be = { relative: "" }, ke = { stack: "", "mx-auto": "", "size-full": "" }, Me = { p: "t-48 x-10 b-10", "size-full": "", "z-1": "" }, Pe = { key: 0, "rounded-4": "", "size-full": "" }, We = { key: 1, "rounded-4": "", "bg-slate-200": "", flex: "", "size-full": "", "items-center": "", "justify-center": "" }, Re = { "self-start": "!", "justify-self-end": "!", "mr--18": "", "mt-11": "", "w-max": "", relative: "", "z-10": "" }, Ie = k({ __name: "PlaygroundDesktop", props: { playgroundUrl: {} }, setup(o) {
  const { handlePlaygroundMessage: c, onIframeReady: f, setIframeRef: m } = W(), u = b();
  function d() {
    console.log("Playground iframe is ready"), f();
  }
  function w(r) {
    console.error("Playground iframe error:", r);
  }
  return P(() => {
    console.log("PlaygroundDesktop: Component mounted, iframe ref:", !!u.value), u.value && (console.log("PlaygroundDesktop: Setting iframe ref in composable"), m(u.value));
  }), (r, n) => {
    const s = xe, p = z, v = Ce, i = S, l = B;
    return g(), y("div", be, [t("div", ke, [n[2] || (n[2] = t("div", { "self-start": "!", "justify-self-end": "!", "aria-hidden": "", "mr--18": "", "mt-48": "", "w-44": "", "origin-bottom-right": "", "rotate--45": "", "z-1": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), x(s), t("div", Me, [r.playgroundUrl ? (g(), y("div", Pe, [x(p, { ref_key: "iframeRef", ref: u, "playground-url": r.playgroundUrl, height: "600px", onMessage: h(c), onReady: d, onError: w }, null, 8, ["playground-url", "onMessage"])])) : (g(), y("div", We, n[0] || (n[0] = [t("p", { text: "center neutral-600" }, " No playground URL configured ", -1)])))]), t("div", Re, [x(v, { translate: "-50%", absolute: "", left: "50%", top: "50%", "z-1": "" }), n[1] || (n[1] = t("div", { bg: "#E9B213", text: "f-lg white", rounded: "6 br-0", "font-semibold": "", "ml-auto": "", "px-20": "", "py-16": "", "w-max": "", relative: "", "z-2": "" }, " Try live preview ", -1))]), x(i, { "translate-y": "[calc(50%-10px)]" })]), x(l, { "f-mt-lg": "" })]);
  };
} }), $e = Object.assign(M(Ie, [["__scopeId", "data-v-5609789d"]]), { __name: "WalletPlaygroundDesktop" }), Ue = F(oe), Ae = { "data-slice-type": "wallet-playground", "bg-darkerblue": "", "scheme-dark": "", relative: "", "of-x-clip": "", "md:f-pt-3xl": "", "children:max-w-none": "" }, Te = k({ __name: "index", props: J(), setup(o) {
  const c = G("(max-width: 768px)", { ssrWidth: 768 }), f = K(o.slice.primary.playgroundUrl);
  if (console.log("WalletPlayground slice: extracted playground URL:", f), !f) throw new Error("Playground URL is required in WalletPlayground slice");
  return (m, u) => {
    const d = Ue, w = ve, r = $e;
    return g(), y("section", Ae, [x(d, { h: "[calc(100%+400px)]", "max-w-screen": "", "pointer-events-none": "", "top--400": "" }), h(c) ? (g(), U(w, { key: "mobile", "playground-url": h(f) }, null, 8, ["playground-url"])) : (g(), U(r, { key: "desktop", "w-full": "", "z-1": "", "playground-url": h(f) }, null, 8, ["playground-url"]))]);
  };
} });
export {
  Te as default
};
