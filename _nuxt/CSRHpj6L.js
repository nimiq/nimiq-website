import { _ as O } from "./9erUq_gT.js";
import { d as B, v as c, a as _, A as D, aM as T, c as x, x as P, j as i, o as a, k as t, F as R, r as J, t as u, l as h, p as Q, n as U, h as v, g as b, f as W, ak as G, ab as H } from "./Dzy_QPZd.js";
import { g as K } from "./CpsPJSKh.js";
import { u as X } from "./CMqLQgad.js";
import { u as Y } from "./E3CMvukU.js";
import "./CR0Fnf8w.js";
const Z = { "max-w": "none lg:$nq-max-width children:none", "w-screen": "", grid: "~ cols-1 lg:cols-[min(calc(100vw-64px),411px)_1fr] gap-x-24" }, tt = { flex: "~ lg:col gap-16", "max-lg": "snap-x snap-mandatory scroll-pl-32 of-x-auto nq-scrollbar-hide py-20 lg:py-40" }, et = ["data-selected"], ot = ["onClick"], nt = { text: "20/26 lg:22/28.6", "font-semibold": "", "text-left": "", "whitespace-nowrap": "" }, st = { flex: "~ gap-12 items-center", mt: "8 md:12", "h-21": "" }, it = { key: 0, flex: "~ gap-6 items-center" }, at = { text: "14 md:15 neutral-800", "font-semibold": "", "whitespace-nowrap": "" }, lt = { key: 1, "bg-neutral-500": "", "w-1": "", "self-stretch": "" }, rt = { text: "14 md:15 neutral-800", "whitespace-nowrap": "" }, ct = { "font-semibold": "" }, pt = { pointer: "", invisible: "", "pointer-events-none": "", "inset-y-0": "", "right-0": "", absolute: "", "of-hidden": "", "md:visible": "" }, dt = { grid: "~ *:col-span-full *:row-span-full", "mx-auto": "", "w-full": "", "self-stretch": "", "justify-self-stretch": "", "max-lg:mt-24": "", "max-lg:px-32": "", "max-lg:w-full": "", "lg:self-stretch": "" }, ut = { key: 0, flex: "~ col gap-8 items-center justify-center", "rounded-8": "", "bg-darkblue": "", "bg-op-80": "", "z-1": "" }, mt = { text: "white min-18 max-24", "font-bold": "" }, ft = { flex: "~ col gap-16 md:items-center", w: "[calc(100%-64px)] lg:full", "px-24": "", "py-32": "", "rounded-b-12": "", "bg-neutral-400": "", "top--8": "", relative: "", "max-lg:mx-32": "", "lg:col-start-2": "", "lg:row-start-2": "" }, wt = B({ __name: "index", props: K(), setup(I) {
  var _a;
  const m = I, l = c(0), y = _(() => m.slice.primary.continents[l.value]), w = c(null), k = c(false);
  X(w, ([e]) => {
    k.value = (e == null ? void 0 : e.isIntersecting) || false;
  }, { threshold: 0.1, rootMargin: "100px" });
  const { cryptoMapSupabase: C } = D().public;
  function S(e) {
    return `${C.url}/rest/v1/rpc/${e}?apikey=${C.key}`;
  }
  const { data: z } = T({ key: () => ["get_stats_for_all_continents"], query: () => $fetch(S("get_stats_for_all_continents")), enabled: k }), E = Y(), L = _(() => new Intl.NumberFormat(E.value, { notation: "compact", maximumFractionDigits: 1 })), q = { Africa: "i-continents:africa selected:text-orange size-160 right--20 top--8", Asia: "i-continents:asia selected:text-red size-200 right--40 top--80", Europe: "i-continents:europe selected:text-gold size-200 right--40 top--90", "North America": "i-continents:north-america selected:text-green size-268 right--40 top--156 rotate-2", Oceania: "i-continents:oceania selected:text-blue size-170 right--15 top--42", "South America": "i-continents:south-america selected:text-purple size-200 right--40 top--8" }, M = _(() => z.value ? m.slice.primary.continents.map((e, o) => {
    var _a2;
    const n = (_a2 = z.value) == null ? void 0 : _a2.find((g) => {
      var _a3;
      return g.continent_name.toLowerCase() === ((_a3 = e.label) == null ? void 0 : _a3.toLowerCase());
    });
    if (!n) throw x(`Continent ${e.label} not found in stats`);
    const s = n.cryptocities_count, r = L.value.format(n.locations_count), d = s > 0, f = n.locations_count > 0;
    if (Object.keys(q).includes(e.label) === false) throw x(`Continent ${e.label} not found in continentsSvg`);
    return { ...e, cryptoCitiesCount: s, locationsCount: r, hasCryptoCities: d, hasLocations: f, svg: q[e.label], selected: l.value === o };
  }) : []), p = c(), N = `https://map.nimiq.com/${(_a = y.value) == null ? void 0 : _a.coordinates}?layout=compact`;
  P([l, p], () => {
    var _a2, _b;
    if (!p.value) return;
    const e = (_a2 = m.slice.primary.continents[l.value]) == null ? void 0 : _a2.coordinates;
    if (!e || !e.includes(",")) throw x("Invalid coordinates");
    const [o, n, s] = e.slice(1).split(",");
    (_b = p.value.contentWindow) == null ? void 0 : _b.postMessage(JSON.stringify({ kind: "map:position", data: { center: { lat: o, lng: n }, zoom: s == null ? void 0 : s.replace("z", "") } }), "*");
  }, { immediate: true });
  const $ = c(false);
  return (e, o) => {
    const n = O, s = H;
    return a(), i("section", { ref_key: "sectionElement", ref: w, "px-0": "", "pb-0": "", "bg-neutral-0": "", "max-lg:mx-0": "", "data-slice-type": "crypto-map-continent-selector" }, [t("div", Z, [t("ul", tt, [(a(true), i(R, null, J(v(M), ({ label: r, hasCryptoCities: d, hasLocations: f, cryptoCitiesCount: g, locationsCount: A, svg: V, selected: j }, F) => (a(), i("li", { key: r, "max-lg": "snap-start shrink-0 first:pl-32 last:pr-32", "rounded-8": "", "data-selected": j ? "" : void 0 }, [t("button", { p: "x-24 y-20", "w-full": "", relative: "", "of-hidden": "", "nq-hoverable": "", "lg:max-w-410": "", "md:min-w-385": "", "max-md:selected:bg-white": "", onClick: (gt) => l.value = F }, [t("p", nt, u(r), 1), t("div", st, [d ? (a(), i("div", it, [o[1] || (o[1] = t("div", { "text-20": "", "i-nimiq:logos-cryptocity": "" }, null, -1)), t("span", at, u(g), 1)])) : h("", true), d && f ? (a(), i("div", lt)) : h("", true), t("p", rt, [t("span", ct, u(A), 1), o[2] || (o[2] = Q(" locations "))])]), t("div", pt, [t("div", { class: U(V), "text-neutral-500": "", "transition-colors": "", relative: "" }, null, 2)])], 8, ot)], 8, et))), 128))]), t("div", dt, [b(G, { "leave-active-class": "transition duration-500 [&_:is(button,p)]:duration-300 ease-nq [&_:is(button,p)]:ease-out [&_:is(button,p)]:transition", "leave-to-class": "op-0 [&_button]:translate-y-96 [&_p]:translate-y--96 [&_:is(button,p)]:op-0", "leave-from-class": "op-100 [&_p]:translate-y-0 [&_button]:translate-y-0 [&_:is(button,p)]:op-100" }, { default: W(() => {
      var _a2;
      return [v($) ? h("", true) : (a(), i("div", ut, [t("p", mt, " Explore in " + u((_a2 = v(y)) == null ? void 0 : _a2.label), 1), t("button", { "gap-12": "", "nq-pill-lg": "", "nq-pill-blue": "", onClick: o[0] || (o[0] = (r) => $.value = true) }, o[3] || (o[3] = [t("div", { "i-nimiq:pin": "" }, null, -1), t("span", { "text-white": "" }, "Let's go!", -1)]))]))];
    }), _: 1 }), t("iframe", { ref_key: "iframe", ref: p, loading: "lazy", aspect: "9/16 lg:initial", "rounded-8": "", "w-full": "", "z-1": "", "lg:h-full": "", "max-lg:max-h-80dvh": "", ring: "1.5 neutral-200", title: "Crypto Map", src: N, sandbox: "allow-scripts allow-same-origin allow-popups", frameborder: "0" }, null, 512)]), t("div", ft, [o[4] || (o[4] = t("div", { "h-32": "", "w-155": "", "i-nimiq:logos-cryptocity-horizontal": "" }, null, -1)), b(n, { wrapper: "div", field: e.slice.primary.cryptocitiesDescription, "max-w-40ch": "", "md:text-center": "" }, null, 8, ["field"]), b(s, { field: e.slice.primary.cryptocitiesCta, "nq-arrow": "", "nq-pill-blue": "" }, null, 8, ["field"])])])], 512);
  };
} });
export {
  wt as default
};
