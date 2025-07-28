import { _ as A } from "./DxbAjo62.js";
import { d as E, C as g, j as x, x as _, Y as F, c as i, o as a, e as t, F as V, r as B, t as d, f as h, g as D, n as O, u as v, a as w, w as T, a4 as P, Z as J } from "./BguRs3jF.js";
import { g as R } from "./CpsPJSKh.js";
import { u as U } from "./BHoc60Y9.js";
import { u as W } from "./BghiwBAd.js";
import "./Cn5kCPLx.js";
import "./DeSMYd_K.js";
const Y = { "px-0": "", "pb-0": "", "bg-neutral-0": "", "max-lg:mx-0": "", "data-slice-type": "crypto-map-continent-selector" }, Z = { "max-w": "none lg:$nq-max-width children:none", "w-screen": "", grid: "~ cols-1 lg:cols-[min(calc(100vw-64px),411px)_1fr] gap-x-24" }, G = { flex: "~ lg:col gap-16", "max-lg": "snap-x snap-mandatory scroll-pl-32 of-x-auto nq-scrollbar-hide py-20 lg:py-40" }, H = ["data-selected"], K = ["onClick"], Q = { text: "20/26 lg:22/28.6", "font-semibold": "", "text-left": "", "whitespace-nowrap": "" }, X = { flex: "~ gap-12 items-center", mt: "8 md:12", "h-21": "" }, tt = { key: 0, flex: "~ gap-6 items-center" }, et = { text: "14 md:15 neutral-800", "font-semibold": "", "whitespace-nowrap": "" }, ot = { key: 1, "bg-neutral-500": "", "w-1": "", "self-stretch": "" }, nt = { text: "14 md:15 neutral-800", "whitespace-nowrap": "" }, st = { "font-semibold": "" }, it = { pointer: "", invisible: "", "pointer-events-none": "", "inset-y-0": "", "right-0": "", absolute: "", "of-hidden": "", "md:visible": "" }, at = { grid: "~ *:col-span-full *:row-span-full", "mx-auto": "", "w-full": "", "self-stretch": "", "justify-self-stretch": "", "max-lg:mt-24": "", "max-lg:px-32": "", "max-lg:w-full": "", "lg:self-stretch": "" }, lt = { key: 0, flex: "~ col gap-8 items-center justify-center", "rounded-8": "", "bg-darkblue": "", "bg-op-80": "", "z-1": "" }, rt = { text: "white min-18 max-24", "font-bold": "" }, ct = { flex: "~ col gap-16 md:items-center", w: "[calc(100%-64px)] lg:full", "px-24": "", "py-32": "", "rounded-b-12": "", "bg-neutral-400": "", "top--8": "", relative: "", "max-lg:mx-32": "", "lg:col-start-2": "", "lg:row-start-2": "" }, ht = E({ __name: "index", props: R(), setup(z) {
  var _a;
  const m = z, l = g(0), y = x(() => m.slice.primary.continents[l.value]), { cryptoMapContinentsStats: b } = U(), q = W(), S = x(() => new Intl.NumberFormat(q.value, { notation: "compact", maximumFractionDigits: 1 })), C = { Africa: "i-continents:africa selected:text-orange size-160 right--20 top--8", Asia: "i-continents:asia selected:text-red size-200 right--40 top--80", Europe: "i-continents:europe selected:text-gold size-200 right--40 top--90", "North America": "i-continents:north-america selected:text-green size-268 right--40 top--156 rotate-2", Oceania: "i-continents:oceania selected:text-blue size-170 right--15 top--42", "South America": "i-continents:south-america selected:text-purple size-200 right--40 top--8" }, L = x(() => b.value ? m.slice.primary.continents.map((o, e) => {
    var _a2;
    const n = (_a2 = b.value) == null ? void 0 : _a2.find((f) => {
      var _a3;
      return f.continent_name.toLowerCase() === ((_a3 = o.label) == null ? void 0 : _a3.toLowerCase());
    });
    if (!n) throw _(`Continent ${o.label} not found in stats`);
    const s = n.cryptocities_count, r = S.value.format(n.locations_count), p = s > 0, u = n.locations_count > 0;
    if (Object.keys(C).includes(o.label) === false) throw _(`Continent ${o.label} not found in continentsSvg`);
    return { ...o, cryptoCitiesCount: s, locationsCount: r, hasCryptoCities: p, hasLocations: u, svg: C[o.label], selected: l.value === e };
  }) : []), c = g(), N = `https://map.nimiq.com/${(_a = y.value) == null ? void 0 : _a.coordinates}?layout=compact`;
  F([l, c], () => {
    var _a2, _b;
    if (!c.value) return;
    const o = (_a2 = m.slice.primary.continents[l.value]) == null ? void 0 : _a2.coordinates;
    if (!o || !o.includes(",")) throw _("Invalid coordinates");
    const [e, n, s] = o.slice(1).split(",");
    (_b = c.value.contentWindow) == null ? void 0 : _b.postMessage(JSON.stringify({ kind: "map:position", data: { center: { lat: e, lng: n }, zoom: s == null ? void 0 : s.replace("z", "") } }), "*");
  }, { immediate: true });
  const k = g(false);
  return (o, e) => {
    const n = A, s = J;
    return a(), i("section", Y, [t("div", Z, [t("ul", G, [(a(true), i(V, null, B(v(L), ({ label: r, hasCryptoCities: p, hasLocations: u, cryptoCitiesCount: f, locationsCount: $, svg: I, selected: M }, j) => (a(), i("li", { key: r, "max-lg": "snap-start shrink-0 first:pl-32 last:pr-32", "rounded-8": "", "data-selected": M ? "" : void 0 }, [t("button", { p: "x-24 y-20", "w-full": "", relative: "", "of-hidden": "", "nq-hoverable": "", "lg:max-w-410": "", "md:min-w-385": "", "max-md:selected:bg-white": "", onClick: (pt) => l.value = j }, [t("p", Q, d(r), 1), t("div", X, [p ? (a(), i("div", tt, [e[1] || (e[1] = t("div", { "text-20": "", "i-nimiq:logos-cryptocity": "" }, null, -1)), t("span", et, d(f), 1)])) : h("", true), p && u ? (a(), i("div", ot)) : h("", true), t("p", nt, [t("span", st, d($), 1), e[2] || (e[2] = D(" locations "))])]), t("div", it, [t("div", { class: O(I), "text-neutral-500": "", "transition-colors": "", relative: "" }, null, 2)])], 8, K)], 8, H))), 128))]), t("div", at, [w(P, { "leave-active-class": "transition duration-500 [&_:is(button,p)]:duration-300 ease-nq [&_:is(button,p)]:ease-out [&_:is(button,p)]:transition", "leave-to-class": "op-0 [&_button]:translate-y-96 [&_p]:translate-y--96 [&_:is(button,p)]:op-0", "leave-from-class": "op-100 [&_p]:translate-y-0 [&_button]:translate-y-0 [&_:is(button,p)]:op-100" }, { default: T(() => {
      var _a2;
      return [v(k) ? h("", true) : (a(), i("div", lt, [t("p", rt, " Explore in " + d((_a2 = v(y)) == null ? void 0 : _a2.label), 1), t("button", { "gap-12": "", "nq-pill-lg": "", "nq-pill-blue": "", onClick: e[0] || (e[0] = (r) => k.value = true) }, e[3] || (e[3] = [t("div", { "i-nimiq:pin": "" }, null, -1), t("span", { "text-white": "" }, "Let's go!", -1)]))]))];
    }), _: 1 }), t("iframe", { ref_key: "iframe", ref: c, loading: "lazy", aspect: "9/16 lg:initial", "rounded-8": "", "w-full": "", "z-1": "", "lg:h-full": "", "max-lg:max-h-80dvh": "", ring: "1.5 neutral-200", title: "Crypto Map", src: N, sandbox: "allow-scripts allow-same-origin allow-popups", frameborder: "0" }, null, 512)]), t("div", ct, [e[4] || (e[4] = t("div", { "h-32": "", "w-155": "", "i-nimiq:logos-cryptocity-horizontal": "" }, null, -1)), w(n, { wrapper: "div", field: o.slice.primary.cryptocitiesDescription, "max-w-40ch": "", "md:text-center": "" }, null, 8, ["field"]), w(s, { field: o.slice.primary.cryptocitiesCta, "nq-arrow": "", "nq-pill-blue": "" }, null, 8, ["field"])])])]);
  };
} });
export {
  ht as default
};
