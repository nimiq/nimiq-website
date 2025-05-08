import { c as B } from "./CVtsTRWS.js";
import { i as g, c as d, o as r, e, d as y, B as h, at as q, V as M, F as A, r as T, u as f, n as $, t as j, h as C, a as _, j as z, ah as E, E as P, G as I, b as k } from "./ClGJWWej.js";
import { p as O, b as Z, d as H } from "./CEBR9iVI.js";
import { _ as D } from "./C64D3qWn.js";
import { g as R } from "./CpsPJSKh.js";
import { u as V } from "./TWV2KN6z.js";
import "./YKo2rOHu.js";
const N = {}, U = { relative: "", "z-2": "", "size-full": "" };
function L(v, t) {
  return r(), d("div", U, t[0] || (t[0] = [e("div", { "size-full": "", "of-x-hidden": "", "of-y-visible": "" }, [e("div", { class: "cloud-parallax", "i-custom:cloud": "", absolute: "", "left--32": "", "top--100": "", hidden: "", "h-64": "", "w-120": "", "scale-x--100": "", "md:block": "", style: { "--to": "300px" } }), e("div", { class: "cloud-parallax", "i-custom:cloud": "", absolute: "", "right--33": "", "top--180": "", "h-46": "", "w-90": "", "scale-x--100": "", "of-hidden": "", style: { "--to": "220px" } }), e("div", { "i-custom:cloud": "", absolute: "", "right-25vw": "", "top-200": "", "h-32": "", "w-60": "", class: "cloud-parallax", style: { "--to": "100px" } })], -1)]));
}
const G = Object.assign(g(N, [["render", L], ["__scopeId", "data-v-8793b676"]]), { __name: "AnimatedCloudyBg" }), Y = { flex: "~ gap-4", "self-end": "!", ring: "1 blue/80", relative: "", "z-10": "", "h-max": "", "rounded-full": "", "bg-white": "", "p-4": "", style: { "--un-shadow": "0 0 32px #0682CA" } }, J = ["data-state", "onClick"], K = { font: "semibold data-active:bold", text: "data-active:white", "transition-color": "" }, Q = y({ __name: "ActionSelector", emits: ["state"], setup(v, { emit: t }) {
  const c = t, o = h("idle"), x = [{ label: "Stake", value: "stake", icon: "i-nimiq:leaf-2-filled", color: "green" }, { label: "Buy", value: "buy", icon: "i-nimiq:floating-ball", color: "blue" }, { label: "Swap", value: "swap", icon: "i-nimiq:exchange-chevron", color: "purple" }], l = q("pill");
  return M(() => {
    var _a;
    if (l.value) {
      if (o.value === "idle") l.value.style.transform = "scale(0.75)", l.value.style.opacity = "0";
      else {
        const m = l.value.parentElement.getBoundingClientRect(), { width: u, left: s } = ((_a = document.querySelector('button[data-state="active"]')) == null ? void 0 : _a.getBoundingClientRect()) || { width: 0, left: 0 };
        l.value.style.width = `${u}px`, l.value.style.left = `${s - m.left}px`, l.value.style.transform = "scale(1)", l.value.style.opacity = "1";
      }
      c("state", o.value);
    }
  }, { flush: "post" }), (m, u) => (r(), d("ul", Y, [e("div", { ref_key: "pill", ref: l, absolute: "", "inset-y-3": "", "rounded-full": "", "bg-darkblue": "", "transition-all": "", "duration-400": "", "ease-in-out": "" }, null, 512), (r(), d(A, null, T(x, ({ icon: s, label: a, value: w, color: b }) => e("li", { key: w, style: C({ "--c": `rgb(var(--nq-${b}) / 1)` }) }, [e("button", { flex: "~ gap-2 items-center", "rounded-full": "", "bg-transparent": "", "p-2": "", "pr-12": "", "data-state": w === f(o) ? "active" : void 0, onClick: (i) => o.value = w }, [e("div", { class: $(s), text: "neutral-800 data-active:$c", "m-8": "", "transition-color": "" }, null, 2), e("span", K, j(a), 1)], 8, J)], 4)), 64)), e("li", { class: $(f(o) === "idle" ? "scale-0 w-0" : "scale-100 w-36"), "h-36": "", transition: "[width,transform]", "duration-300": "", "ease-out": "", "max-sm:hidden": "" }, [e("button", { "bg-transparent": "", onClick: u[0] || (u[0] = (s) => o.value = "idle") }, u[1] || (u[1] = [e("div", { text: "neutral-800", "m-8": "", "i-nimiq:redo": "" }, null, -1)]))], 2)]));
} }), W = Object.assign(Q, { __name: "WalletActionSelector" }), X = {}, ee = { flex: "~ col gap-20 justify-center items-center" };
function te(v, t) {
  return r(), d("div", ee, t[0] || (t[0] = [e("div", { flex: "~ gap-12 ", text: "white/40 34" }, [e("div", { "text-32": "", "i-nimiq:logos-nimiq-mono": "", title: "NIM" }), e("div", { "i-nimiq:logos-bitcoin-mono": "", title: "BTC" }), e("div", { "i-nimiq:logos-usdc-mono": "", title: "USDC" }), e("div", { "i-nimiq:logos-usdt-mono": "", title: "USDT" })], -1), e("h2", { text: "white/60 f-xs center", "font-bold": "", "nq-label": "" }, " Supported currencies ", -1)]));
}
const F = Object.assign(g(X, [["render", te]]), { __name: "WalletCurrencies" }), ne = {}, oe = { relative: "", "pb-32": "" };
function le(v, t) {
  const c = W, o = F;
  return r(), d("div", oe, [t[0] || (t[0] = e("div", { class: "bg", left: "[calc(var(--px)*-1)]", w: "[calc(100%+var(--px)*2)]", absolute: "", "inset-0": "", "top--160": "", "z--1": "" }, null, -1)), _(c, { "mx-auto": "", "w-max": "" }), t[1] || (t[1] = e("div", { w: "[calc(100%+48px)]", relative: "", "left--24": "", "aspect-0.7": "", "size-full": "", "rounded-14": "", "bg-neutral-300": "", "p-8": "", "op-50": "", "backdrop-blur-3.5": "", "f-mt-xl": "", style: { "box-shadow": "inset 0px 0px 40px #FFFFFF" } }, [e("div", { "size-full": "", "rounded-8": "", "bg-white": "" })], -1)), _(o, { "mt-24": "" })]);
}
const se = Object.assign(g(ne, [["render", le], ["__scopeId", "data-v-1698fb0f"]]), { __name: "WalletPlaygroundMobile" }), ae = { class: "metawrapper" }, ie = { class: "metacontainer" }, re = y({ __name: "PlaygroundBackground", setup(v) {
  function t() {
    var _a;
    const i = document.createElement("div");
    i.style.visibility = "hidden", i.style.overflow = "scroll", document.body.appendChild(i);
    const n = document.createElement("div");
    i.appendChild(n);
    const p = i.offsetWidth - n.offsetWidth;
    return (_a = i.parentNode) == null ? void 0 : _a.removeChild(i), p;
  }
  const c = h(0);
  function o() {
    c.value = t();
  }
  function x(i, n = 300) {
    let p;
    return function(...S) {
      clearTimeout(p), p = setTimeout(() => i.apply(this, S), n);
    };
  }
  const l = x(o), m = h(null), { y: u } = O(), s = z(() => {
    var _a;
    const i = (_a = m.value) == null ? void 0 : _a.getBoundingClientRect();
    if (!i) return { one: 0, two: 0, three: 0, four: 0 };
    const n = Math.trunc((u.value - i.top) / window.innerHeight * 50), p = { one: 2, two: 1, three: 3, four: 1 };
    return { one: -n * p.one, two: -n * p.two, three: n * p.three, four: n * p.four };
  }), a = E({ one: 0, two: 0, three: 0, four: 0 });
  let w;
  function b() {
    requestAnimationFrame(b), a.one !== s.value.one && (a.one = s.value.one), a.two !== s.value.two && (a.two = s.value.two), a.three !== s.value.three && (a.three = s.value.three), a.four !== s.value.four && (a.four = s.value.four);
  }
  return P(() => {
    o(), window.addEventListener("resize", l), w = requestAnimationFrame(b);
  }), I(() => {
    window.removeEventListener("resize", l), cancelAnimationFrame(w);
  }), (i, n) => (r(), d("div", { ref_key: "containerRef", ref: m, class: "playground-background", style: C({ "--scrollbar-width": `${c.value}px` }) }, [e("div", ae, [e("div", ie, [(r(), d("svg", { class: "one metacloud", style: C({ "--translate-x": f(a).one }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, n[0] || (n[0] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (r(), d("svg", { class: "metacloud two", style: C({ "--translate-x": f(a).two }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, n[1] || (n[1] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (r(), d("svg", { class: "metacloud three", "max-sm:hidden": "", style: C({ "--translate-x": f(a).three }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, n[2] || (n[2] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), (r(), d("svg", { class: "metacloud four", style: C({ "--translate-x": f(a).four }), viewBox: "0 0 120 64", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, n[3] || (n[3] = [e("path", { d: "M120 43C120 54.598 110.598 64 99 64H21C9.40202 64 0 54.598 0 43C0 31.402 9.40202 22 21 22C22.4727 22 23.9101 22.1516 25.2972 22.4401C28.7758 15.6484 35.845 11 44 11C48.4407 11 52.5595 12.3783 55.9518 14.7306C58.6183 6.19486 66.5857 0 76 0C87.598 0 97 9.40202 97 21C97 21.3678 96.9905 21.7335 96.9719 22.0967C97.6393 22.0327 98.3158 22 99 22C110.598 22 120 31.402 120 43Z" }, null, -1)]), 4)), n[4] || (n[4] = e("svg", { class: "metarect max-sm:aspect-9/16", viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("path", { d: "M0 7.99999C0 3.58171 3.58172 0 8 0H1088C1092.42 0 1096 3.58172 1096 8V650C1096 654.418 1092.42 658 1088 658H7.99997C3.58169 658 0 654.418 0 650V7.99999Z" })], -1))])]), n[5] || (n[5] = e("div", { class: "pb-container" }, [e("div", { class: "rect", "max-sm:hidden": "" }, [e("svg", { viewBox: "0 0 1096 658", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, [e("g", { opacity: "0.5", "max-sm:hidden": "" }, [e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M21 26C23.7614 26 26 23.7614 26 21C26 18.2386 23.7614 16 21 16C18.2386 16 16 18.2386 16 21C16 23.7614 18.2386 26 21 26Z", fill: "#1F2348" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M37 26C39.7614 26 42 23.7614 42 21C42 18.2386 39.7614 16 37 16C34.2386 16 32 18.2386 32 21C32 23.7614 34.2386 26 37 26Z", fill: "#1F2348" }), e("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M53 26C55.7614 26 58 23.7614 58 21C58 18.2386 55.7614 16 53 16C50.2386 16 48 18.2386 48 21C48 23.7614 50.2386 26 53 26Z", fill: "#1F2348" })]), e("g", { opacity: "0.5" }, [e("rect", { x: "368", y: "12", width: "360", height: "14", rx: "7", fill: "#1F2348" })])])])], -1))], 4));
} }), de = Object.assign(g(re, [["__scopeId", "data-v-307908ca"]]), { __name: "WalletPlaygroundBackground" }), ce = B(D), ue = {}, pe = { relative: "" }, me = { "max-w": "$nq-max-width", "mx-auto": "", "size-full": "", stack: "" }, fe = { "self-start": "!", "justify-self-end": "!", relative: "", "z-10": "", "mr--18": "", "mt-11": "", "w-max": "" };
function _e(v, t) {
  const c = de, o = ce, x = W, l = F;
  return r(), d("div", pe, [e("div", me, [t[1] || (t[1] = e("div", { "self-start": "!", "justify-self-end": "!", "aria-hidden": "", "z-1": "", "mr--18": "", "mt-48": "", "w-44": "", "origin-bottom-right": "", "rotate--45": "", border: "22 x-transparent t-0 #EC991C" }, null, -1)), _(c), t[2] || (t[2] = e("div", { p: "t-48 x-10 b-10", "z-1": "", "size-full": "" }, [e("div", { "size-full": "", "rounded-4": "", "bg-slate-200": "" })], -1)), e("div", fe, [_(o, { translate: "-50%", absolute: "", left: "50%", top: "50%", "z-1": "" }), t[0] || (t[0] = e("div", { bg: "#E9B213", text: "f-lg white", rounded: "6 br-0", relative: "", "z-2": "", "ml-auto": "", "w-max": "", "px-20": "", "py-16": "", "font-semibold": "" }, " Try live preview ", -1))]), _(x, { "translate-y": "[calc(50%-10px)]" })]), _(l, { "f-mt-lg": "" })]);
}
const ve = Object.assign(g(ue, [["render", _e], ["__scopeId", "data-v-188027fa"]]), { __name: "WalletPlaygroundDesktop" }), xe = B(G), we = { relative: "", "of-x-clip": "", "md:f-pt-md": "", "children:max-w-none": "" }, Ce = y({ __name: "index", props: R(), setup(v) {
  const { isMobileOrTablet: t } = V(), { smaller: c } = Z(H), o = z(() => t || c("md").value);
  return (x, l) => {
    const m = xe, u = se, s = ve;
    return r(), d("section", we, [_(m, { h: "[calc(100%+400px)]", "pointer-events-none": "", "top--400": "", "max-w-screen": "" }), f(o) ? (r(), k(u, { key: 0 })) : (r(), k(s, { key: 1, "z-1": "", "w-full": "" }))]);
  };
} }), ze = g(Ce, [["__scopeId", "data-v-bd1270ed"]]);
export {
  ze as default
};
