import { _ as oe } from "./CDi0xZhw.js";
import { d as C, V as I, b as _, o as i, w as d, T as B, g as R, m as q, u as l, U as k, a2 as ne, $ as le, Z as ie, i as v, W as re, X as ue, t as E, p as pe, l as de, aB as ce, B as j, ae as A, q as ge, a1 as fe, aL as me, ax as _e, c as y, f as D, a as h, F as V, r as F, n as L, e as f, D as ve, C as xe, h as be, _ as he, aK as Pe } from "./C95QRNzc.js";
import { g as ye } from "./CpsPJSKh.js";
import { g as Ce, A as we } from "./Dlnh2lNC.js";
import { _ as $e } from "./DlAUqK2U.js";
import "./B6YpvMVi.js";
import "./UtPS5osl.js";
import "./DCDih-ug.js";
import "./BhpWC2zv.js";
import "./CCkBGt8y.js";
const Re = C({ __name: "PaginationEllipsis", props: { asChild: { type: Boolean }, as: {} }, setup(o) {
  const a = o;
  return I(), (e, n) => (i(), _(l(k), q(a, { "data-type": "ellipsis" }), { default: d(() => [B(e.$slots, "default", {}, () => [n[0] || (n[0] = R("\u2026"))])]), _: 3 }, 16));
} }), [z, Ie] = ne("PaginationRoot"), Be = C({ __name: "PaginationRoot", props: { page: {}, defaultPage: { default: 1 }, itemsPerPage: {}, total: { default: 0 }, siblingCount: { default: 2 }, disabled: { type: Boolean }, showEdges: { type: Boolean, default: false }, asChild: { type: Boolean }, as: { default: "nav" } }, emits: ["update:page"], setup(o, { emit: a }) {
  const e = o, n = a, { siblingCount: s, disabled: t, showEdges: r } = le(e);
  I();
  const c = ie(e, "page", n, { defaultValue: e.defaultPage, passive: e.page === void 0 }), m = v(() => Math.max(1, Math.ceil(e.total / (e.itemsPerPage || 1))));
  return Ie({ page: c, onPageChange(p) {
    c.value = p;
  }, pageCount: m, siblingCount: s, disabled: t, showEdges: r }), (p, x) => (i(), _(l(k), { as: p.as, "as-child": p.asChild }, { default: d(() => [B(p.$slots, "default", { page: l(c), pageCount: m.value })]), _: 3 }, 8, ["as", "as-child"]));
} });
function P(o, a) {
  const e = a - o + 1;
  return Array.from({ length: e }, (n, s) => s + o);
}
function ke(o) {
  return o.map((a) => typeof a == "number" ? { type: "page", value: a } : { type: "ellipsis" });
}
const S = "ellipsis";
function Me(o, a, e, n) {
  const t = a, r = Math.max(o - e, 1), c = Math.min(o + e, t);
  if (n) {
    const p = Math.min(2 * e + 5, a) - 2, x = r > 3 && Math.abs(t - p - 1 + 1) > 2 && Math.abs(r - 1) > 2, u = c < t - 2 && Math.abs(t - p) > 2 && Math.abs(t - c) > 2;
    if (!x && u) return [...P(1, p), S, t];
    if (x && !u) {
      const w = P(t - p + 1, t);
      return [1, S, ...w];
    }
    if (x && u) {
      const w = P(r, c);
      return [1, S, ...w, S, t];
    }
    return P(1, t);
  } else {
    const m = e * 2 + 1;
    return a < m ? P(1, t) : o <= e + 1 ? P(1, m) : a - o <= e ? P(a - m + 1, t) : P(r, c);
  }
}
const Ne = C({ __name: "PaginationList", props: { asChild: { type: Boolean }, as: {} }, setup(o) {
  const a = o;
  I();
  const e = z(), n = v(() => ke(Me(e.page.value, e.pageCount.value, e.siblingCount.value, e.showEdges.value)));
  return (s, t) => (i(), _(l(k), re(ue(a)), { default: d(() => [B(s.$slots, "default", { items: n.value })]), _: 3 }, 16));
} }), Le = C({ __name: "PaginationListItem", props: { value: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(o) {
  const a = o;
  I();
  const e = z(), n = v(() => e.page.value === a.value), s = v(() => e.disabled.value);
  return (t, r) => (i(), _(l(k), q(a, { "data-type": "page", "aria-label": `Page ${t.value}`, "aria-current": n.value ? "page" : void 0, "data-selected": n.value ? "true" : void 0, disabled: s.value, type: t.as === "button" ? "button" : void 0, onClick: r[0] || (r[0] = (c) => !s.value && l(e).onPageChange(t.value)) }), { default: d(() => [B(t.$slots, "default", {}, () => [R(E(t.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
} }), Se = C({ __name: "PaginationNext", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(o) {
  const a = o;
  I();
  const e = z(), n = v(() => e.page.value === e.pageCount.value || e.disabled.value);
  return (s, t) => (i(), _(l(k), q(a, { "aria-label": "Next Page", type: s.as === "button" ? "button" : void 0, disabled: n.value, onClick: t[0] || (t[0] = (r) => !n.value && l(e).onPageChange(l(e).page.value + 1)) }), { default: d(() => [B(s.$slots, "default", {}, () => [t[1] || (t[1] = R("Next page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), Ee = C({ __name: "PaginationPrev", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(o) {
  const a = o;
  I();
  const e = z(), n = v(() => e.page.value === 1 || e.disabled.value);
  return (s, t) => (i(), _(l(k), q(a, { "aria-label": "Previous Page", type: s.as === "button" ? "button" : void 0, disabled: n.value, onClick: t[0] || (t[0] = (r) => !n.value && l(e).onPageChange(l(e).page.value - 1)) }), { default: d(() => [B(s.$slots, "default", {}, () => [t[1] || (t[1] = R("Prev page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), qe = { "bg-neutral-100": "", "f-pt-3xl": "" }, ze = { key: 0, grid: "~ cols-1 lg:cols-2 xl:cols-3 gap-16", "w-full": "" }, Ve = { "p-4": "" }, Te = { key: 1, "text-green-400": "", "py-64": "", "rounded-4": "", "flex-1": "", "size-full": "", "bg-gradient-green": "", grid: "~ place-content-center" }, je = { flex: "~ col", "p-24": "", "h-full": "" }, Ae = { "mt-8": "", "line-clamp-2": "", text: "16 neutral-900 left" }, De = { "sr-only": "" }, T = 25, Fe = C({ __name: "index", props: ye(), setup(o) {
  const { showDrafts: a } = pe().public, e = de(), n = ce(), s = j(Number(e.query.page) || 1);
  A(() => e.query.page, (u) => {
    s.value = Number(u) || 1;
  }), A(s, (u) => {
    n.replace({ query: { ...e.query, page: u !== 1 ? u : void 0 } }), window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const { client: t } = ge(), r = j();
  fe(async () => {
    const u = await t.getByType("blog_page", { orderings: { field: "my.blog_page.publish_date", direction: "desc" }, filters: a ? void 0 : [me.not("my.blog_page.draft", true)], pageSize: T, page: s.value });
    r.value = u;
  });
  const c = v(() => {
    var _a;
    return ((_a = r.value) == null ? void 0 : _a.results) ?? [];
  }), m = v(() => {
    var _a;
    return ((_a = r.value) == null ? void 0 : _a.total_pages) ?? 1;
  }), p = v(() => c.value.map((u) => Ce(u))), x = _e("$1taYRZWpx1");
  return (u, g) => {
    const w = oe, U = ve, W = xe, Z = he, K = Ee, X = Le, Y = Re, G = Se, H = Ne, J = Be;
    return i(), y("section", qe, [l(p).length > 0 ? (i(), y("div", ze, [(i(true), y(V, null, F(l(p), ({ uid: b, href: $, draft: N, image: O, hasImage: Q, title: ee, abstract: te, date: ae, authors: se }, M) => (i(), y("article", { key: b, class: L(l(s) === 1 ? { "md:first:col-span-2": true } : "self-stretch") }, [h(Z, { to: $, "p-0": "", "h-full": "", relative: "", "nq-hoverable": "", onClick: (Ue) => x.value = b }, { default: d(() => [h(w, { draft: N, "right-12": "", "top-12": "", absolute: "", "z-10": "" }, null, 8, ["draft"]), f("div", Ve, [Q ? (i(), _(U, { key: 0, field: O, "rounded-6": "", "h-max": "", "w-full": "", "object-cover": "", class: L([M === 1 ? "h-max lg:h-280" : "h-max", { "view-transition-post-img contain-layout": l(x) === b }]), loading: "lazy" }, null, 8, ["field", "class"])) : l(a) ? (i(), y("div", Te, g[1] || (g[1] = [f("div", { flex: "~ items-center gap-12" }, [f("div", { "text-32": "", "op-70": "", "i-nimiq:tools-wench-hammer": "" }), f("p", { "font-bold": "", "f-text-xl": "" }, " Image not found ")], -1), f("p", { "font-semibold": "", "mt-8": "", "op-80": "", "max-w-40ch": "" }, " Something great is being redacted just right now and there is no image yet. \u{1F92B} ", -1), f("p", { "op-70": "", italic: "", "f-text-2xs": "", "f-mt-2xs": "" }, " This is a development-only message. ", -1)]))) : D("", true)]), f("div", je, [h(W, { wrapper: "h2", "text-left": "", field: ee, class: L({ "view-transition-post-title contain-layout": l(x) === b, "f-text-3xl": M === 0, "f-text-2xl": M === 1, "f-text-xl": M > 1 }) }, null, 8, ["field", "class"]), f("p", Ae, E(te), 1), h(we, { style: be(`--content: '${u.slice.primary.labelLearnMore}'`), class: L(M === 1 ? "mt-4" : "mt-auto"), after: "text-blue content-$content text-16", date: ae, authors: se.join(", "), "pt-16": "", "gap-x-8": "", "h-max": "", "nq-hoverable-cta": "" }, null, 8, ["style", "class", "date", "authors"]), f("span", De, E(u.slice.primary.labelLearnMore), 1)])]), _: 2 }, 1032, ["to", "onClick"])], 2))), 128)), h(J, { page: l(s), "onUpdate:page": g[0] || (g[0] = (b) => Pe(s) ? s.value = b : null), total: l(m) * T, "items-per-page": T, "show-edges": "", "mt-32": "", "col-span-full": "" }, { default: d(() => [h(H, { flex: "~ gap-16 items-center justify-center" }, { default: d(({ items: b }) => [h(K, { class: "item" }, { default: d(() => g[2] || (g[2] = [f("div", { "text-9": "", "op-70": "", "i-nimiq:chevron-left": "" }, null, -1)])), _: 1, __: [2] }), (i(true), y(V, null, F(b, ($, N) => (i(), y(V, null, [$.type === "page" ? (i(), _(X, { key: N, class: "item", value: $.value }, { default: d(() => [R(E($.value), 1)]), _: 2 }, 1032, ["value"])) : (i(), _(Y, { key: $.type, index: N, class: "item" }, { default: d(() => g[3] || (g[3] = [R(" \u2026 ")])), _: 2, __: [3] }, 1032, ["index"]))], 64))), 256)), h(G, { class: "item" }, { default: d(() => g[4] || (g[4] = [f("div", { "text-9": "", "op-70": "", "i-nimiq:chevron-right": "" }, null, -1)])), _: 1, __: [4] })]), _: 1 })]), _: 1 }, 8, ["page", "total"])])) : D("", true)]);
  };
} }), et = $e(Fe, [["__scopeId", "data-v-2b4163eb"]]);
export {
  et as default
};
