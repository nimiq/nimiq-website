import { _ as ae } from "./CmnqzRqC.js";
import { _ as oe } from "./CDGVCZAD.js";
import { d as C, s as R, e as x, o as i, f as r, l as k, G as I, J as q, h as o, P as B, k as se, t as ne, j as le, a as v, a3 as ie, a4 as re, E as j, u as ue, K as de, w as pe, aA as ce, B as y, x as D, g as f, H as A, I as F, D as L, C as m, S as ge, v as fe, F as me } from "./B8biU-UE.js";
import { g as _e } from "./CpsPJSKh.js";
import { g as ve, A as xe } from "./QYNAWTQz.js";
import { b as he } from "./DWbXAw--.js";
import { _ as be } from "./DlAUqK2U.js";
import "./D-k9HlQ8.js";
import "./DBRxGtFx.js";
import "./CoPlYyca.js";
import "./Fc1-Bd8L.js";
import "./uct_JH4F.js";
import "./DRbUa3ZN.js";
const Pe = C({ __name: "PaginationEllipsis", props: { asChild: { type: Boolean }, as: {} }, setup(n) {
  const a = n;
  return R(), (e, l) => (i(), x(o(B), q(a, { "data-type": "ellipsis" }), { default: r(() => [k(e.$slots, "default", {}, () => [l[0] || (l[0] = I("\u2026"))])]), _: 3 }, 16));
} }), [V, ye] = se("PaginationRoot"), Ce = C({ __name: "PaginationRoot", props: { page: {}, defaultPage: { default: 1 }, itemsPerPage: {}, total: { default: 0 }, siblingCount: { default: 2 }, disabled: { type: Boolean }, showEdges: { type: Boolean, default: false }, asChild: { type: Boolean }, as: { default: "nav" } }, emits: ["update:page"], setup(n, { emit: a }) {
  const e = n, l = a, { siblingCount: s, disabled: t, showEdges: u } = ne(e);
  R();
  const d = le(e, "page", l, { defaultValue: e.defaultPage, passive: e.page === void 0 }), _ = v(() => Math.max(1, Math.ceil(e.total / (e.itemsPerPage || 1))));
  return ye({ page: d, onPageChange(p) {
    d.value = p;
  }, pageCount: _, siblingCount: s, disabled: t, showEdges: u }), (p, h) => (i(), x(o(B), { as: p.as, "as-child": p.asChild }, { default: r(() => [k(p.$slots, "default", { page: o(d), pageCount: _.value })]), _: 3 }, 8, ["as", "as-child"]));
} });
function P(n, a) {
  const e = a - n + 1;
  return Array.from({ length: e }, (l, s) => s + n);
}
function $e(n) {
  return n.map((a) => typeof a == "number" ? { type: "page", value: a } : { type: "ellipsis" });
}
const z = "ellipsis";
function we(n, a, e, l) {
  const t = a, u = Math.max(n - e, 1), d = Math.min(n + e, t);
  if (l) {
    const p = Math.min(2 * e + 5, a) - 2, h = u > 3 && Math.abs(t - p - 1 + 1) > 2 && Math.abs(u - 1) > 2, c = d < t - 2 && Math.abs(t - p) > 2 && Math.abs(t - d) > 2;
    if (!h && c) return [...P(1, p), z, t];
    if (h && !c) {
      const $ = P(t - p + 1, t);
      return [1, z, ...$];
    }
    if (h && c) {
      const $ = P(u, d);
      return [1, z, ...$, z, t];
    }
    return P(1, t);
  } else {
    const _ = e * 2 + 1;
    return a < _ ? P(1, t) : n <= e + 1 ? P(1, _) : a - n <= e ? P(a - _ + 1, t) : P(u, d);
  }
}
const Ie = C({ __name: "PaginationList", props: { asChild: { type: Boolean }, as: {} }, setup(n) {
  const a = n;
  R();
  const e = V(), l = v(() => $e(we(e.page.value, e.pageCount.value, e.siblingCount.value, e.showEdges.value)));
  return (s, t) => (i(), x(o(B), ie(re(a)), { default: r(() => [k(s.$slots, "default", { items: l.value })]), _: 3 }, 16));
} }), Re = C({ __name: "PaginationListItem", props: { value: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const a = n;
  R();
  const e = V(), l = v(() => e.page.value === a.value), s = v(() => e.disabled.value);
  return (t, u) => (i(), x(o(B), q(a, { "data-type": "page", "aria-label": `Page ${t.value}`, "aria-current": l.value ? "page" : void 0, "data-selected": l.value ? "true" : void 0, disabled: s.value, type: t.as === "button" ? "button" : void 0, onClick: u[0] || (u[0] = (d) => !s.value && o(e).onPageChange(t.value)) }), { default: r(() => [k(t.$slots, "default", {}, () => [I(j(t.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
} }), ke = C({ __name: "PaginationNext", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const a = n;
  R();
  const e = V(), l = v(() => e.page.value === e.pageCount.value || e.disabled.value);
  return (s, t) => (i(), x(o(B), q(a, { "aria-label": "Next Page", type: s.as === "button" ? "button" : void 0, disabled: l.value, onClick: t[0] || (t[0] = (u) => !l.value && o(e).onPageChange(o(e).page.value + 1)) }), { default: r(() => [k(s.$slots, "default", {}, () => [t[1] || (t[1] = I("Next page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), Be = C({ __name: "PaginationPrev", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(n) {
  const a = n;
  R();
  const e = V(), l = v(() => e.page.value === 1 || e.disabled.value);
  return (s, t) => (i(), x(o(B), q(a, { "aria-label": "Previous Page", type: s.as === "button" ? "button" : void 0, disabled: l.value, onClick: t[0] || (t[0] = (u) => !l.value && o(e).onPageChange(o(e).page.value - 1)) }), { default: r(() => [k(s.$slots, "default", {}, () => [t[1] || (t[1] = I("Prev page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), Me = { "bg-neutral-100": "", "f-pt-3xl": "" }, Se = { key: 0, grid: "~ cols-1 lg:cols-2 xl:cols-3 gap-16", "w-full": "" }, Ne = { "p-4": "" }, Ee = { key: 1, "text-green-400": "", "py-64": "", "rounded-4": "", "flex-1": "", "size-full": "", "bg-gradient-green": "", grid: "~ place-content-center" }, Le = { flex: "~ col", "p-24": "", "h-full": "" }, ze = { "mt-8": "", "line-clamp-2": "", text: "16 neutral-900 left" }, je = { "sr-only": "" }, S = 25, qe = C({ __name: "index", props: _e(), async setup(n) {
  let a, e;
  const l = ue(), s = v(() => Number(l.query.page) || 1), { showDrafts: t } = de().public, { data: u } = ([a, e] = pe(() => he({ orderings: { field: "my.blog_page.publish_date", direction: "desc" }, pageSize: 100 })), a = await a, e(), a), d = v(() => u.value ? u.value.map((c) => ve(c)) : []), _ = v(() => Math.ceil(d.value.length / S)), p = v(() => {
    if (!d.value.length) return [];
    const c = (s.value - 1) * S, g = c + S;
    return d.value.slice(c, g);
  }), h = ce("active-blog-post", () => "");
  return (c, g) => {
    const $ = ae, T = oe, G = ge, N = me, H = Be, J = Re, K = Pe, O = ke, Q = Ie, U = Ce;
    return i(), y("section", Me, [o(p).length > 0 ? (i(), y("div", Se, [(i(true), y(A, null, F(o(p), ({ uid: w, href: b, draft: E, image: W, hasImage: X, title: Y, abstract: Z, date: ee, authors: te }, M) => (i(), y("article", { key: w, class: L(o(s) === 1 ? { "md:first:col-span-2": true } : "self-stretch") }, [f(N, { to: b, "p-0": "", "h-full": "", relative: "", "nq-hoverable": "", onClick: (Ve) => h.value = w }, { default: r(() => [f($, { draft: E, "right-12": "", "top-12": "", absolute: "", "z-10": "" }, null, 8, ["draft"]), m("div", Ne, [X ? (i(), x(T, { key: 0, field: W, "rounded-6": "", "h-max": "", "w-full": "", "object-cover": "", class: L([M === 1 ? "h-max lg:h-280" : "h-max", { "view-transition-post-img contain-layout": o(h) === w }]), loading: "lazy" }, null, 8, ["field", "class"])) : o(t) ? (i(), y("div", Ee, g[0] || (g[0] = [m("div", { flex: "~ items-center gap-12" }, [m("div", { "text-32": "", "op-70": "", "i-nimiq:tools-wench-hammer": "" }), m("p", { "font-bold": "", "f-text-xl": "" }, " Image not found ")], -1), m("p", { "font-semibold": "", "mt-8": "", "op-80": "", "max-w-40ch": "" }, " Something great is being redacted just right now and there is no image yet. \u{1F92B} ", -1), m("p", { "op-70": "", italic: "", "f-text-2xs": "", "f-mt-2xs": "" }, " This is a development-only message. ", -1)]))) : D("", true)]), m("div", Le, [f(G, { wrapper: "h2", "text-left": "", field: Y, class: L({ "view-transition-post-title contain-layout": o(h) === w, "f-text-3xl": M === 0, "f-text-2xl": M === 1, "f-text-xl": M > 1 }) }, null, 8, ["field", "class"]), m("p", ze, j(Z), 1), f(xe, { style: fe(`--content: '${c.slice.primary.labelLearnMore}'`), class: L(M === 1 ? "mt-4" : "mt-auto"), after: "text-blue content-$content text-16", date: ee, authors: te.join(", "), "pt-16": "", "gap-x-8": "", "h-max": "", "nq-hoverable-cta": "" }, null, 8, ["style", "class", "date", "authors"]), m("span", je, j(c.slice.primary.labelLearnMore), 1)])]), _: 2 }, 1032, ["to", "onClick"])], 2))), 128)), f(U, { page: o(s), total: o(_) * S, "items-per-page": S, "show-edges": "", "mt-32": "", "col-span-full": "" }, { default: r(() => [f(Q, { flex: "~ gap-16 items-center justify-center" }, { default: r(({ items: w }) => [f(H, { "as-child": "", class: "item" }, { default: r(() => [f(N, { to: o(s) > 1 ? o(s) === 2 ? "/blog" : `/blog?page=${o(s) - 1}` : void 0 }, { default: r(() => g[1] || (g[1] = [m("div", { "text-9": "", "op-70": "", "i-nimiq:chevron-left": "" }, null, -1)])), _: 1, __: [1] }, 8, ["to"])]), _: 1 }), (i(true), y(A, null, F(w, (b, E) => (i(), y(A, null, [b.type === "page" ? (i(), x(J, { key: E, value: b.value, "as-child": "", class: "item" }, { default: r(() => [f(N, { to: b.value === 1 ? "/blog" : `/blog?page=${b.value}` }, { default: r(() => [I(j(b.value), 1)]), _: 2 }, 1032, ["to"])]), _: 2 }, 1032, ["value"])) : (i(), x(K, { key: b.type, index: E, class: "item" }, { default: r(() => g[2] || (g[2] = [I(" \u2026 ")])), _: 2, __: [2] }, 1032, ["index"]))], 64))), 256)), f(O, { "as-child": "", class: "item" }, { default: r(() => [f(N, { to: o(s) < o(_) ? `/blog?page=${o(s) + 1}` : void 0 }, { default: r(() => g[3] || (g[3] = [m("div", { "text-9": "", "op-70": "", "i-nimiq:chevron-right": "" }, null, -1)])), _: 1, __: [3] }, 8, ["to"])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["page", "total"])])) : D("", true)]);
  };
} }), Ye = be(qe, [["__scopeId", "data-v-1fe64830"]]);
export {
  Ye as default
};
