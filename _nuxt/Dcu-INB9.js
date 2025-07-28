import { _ as oe } from "./C2NnffCY.js";
import { d as C, b as _, o as i, w as d, R as I, g as $, m as q, u as l, U as ne, j as v, S as le, T as ie, t as L, q as re, p as ue, ai as pe, C as T, Y as A, s as de, V as ce, ae as ge, c as y, f as D, a as h, F as V, r as F, n as S, e as f, E as fe, D as me, h as _e, _ as ve, am as xe, an as be, i as he } from "./BguRs3jF.js";
import { g as Pe } from "./CpsPJSKh.js";
import { g as ye, A as Ce } from "./vPo95uWa.js";
import { u as k, P as B, c as we, a as Re } from "./CMmzeBWC.js";
import "./DSbx5aGI.js";
import "./C8aoRHDt.js";
import "./BIPleKtX.js";
import "./BghiwBAd.js";
import "./BNXriZyS.js";
const $e = C({ __name: "PaginationEllipsis", props: { asChild: { type: Boolean }, as: {} }, setup(o) {
  const a = o;
  return k(), (e, n) => (i(), _(l(B), q(a, { "data-type": "ellipsis" }), { default: d(() => [I(e.$slots, "default", {}, () => [n[0] || (n[0] = $("\u2026"))])]), _: 3 }, 16));
} }), [z, Ie] = we("PaginationRoot"), ke = C({ __name: "PaginationRoot", props: { page: {}, defaultPage: { default: 1 }, itemsPerPage: {}, total: { default: 0 }, siblingCount: { default: 2 }, disabled: { type: Boolean }, showEdges: { type: Boolean, default: false }, asChild: { type: Boolean }, as: { default: "nav" } }, emits: ["update:page"], setup(o, { emit: a }) {
  const e = o, n = a, { siblingCount: s, disabled: t, showEdges: r } = ne(e);
  k();
  const c = Re(e, "page", n, { defaultValue: e.defaultPage, passive: e.page === void 0 }), m = v(() => Math.max(1, Math.ceil(e.total / (e.itemsPerPage || 1))));
  return Ie({ page: c, onPageChange(p) {
    c.value = p;
  }, pageCount: m, siblingCount: s, disabled: t, showEdges: r }), (p, x) => (i(), _(l(B), { as: p.as, "as-child": p.asChild }, { default: d(() => [I(p.$slots, "default", { page: l(c), pageCount: m.value })]), _: 3 }, 8, ["as", "as-child"]));
} });
function P(o, a) {
  const e = a - o + 1;
  return Array.from({ length: e }, (n, s) => s + o);
}
function Be(o) {
  return o.map((a) => typeof a == "number" ? { type: "page", value: a } : { type: "ellipsis" });
}
const E = "ellipsis";
function Me(o, a, e, n) {
  const t = a, r = Math.max(o - e, 1), c = Math.min(o + e, t);
  if (n) {
    const p = Math.min(2 * e + 5, a) - 2, x = r > 3 && Math.abs(t - p - 1 + 1) > 2 && Math.abs(r - 1) > 2, u = c < t - 2 && Math.abs(t - p) > 2 && Math.abs(t - c) > 2;
    if (!x && u) return [...P(1, p), E, t];
    if (x && !u) {
      const w = P(t - p + 1, t);
      return [1, E, ...w];
    }
    if (x && u) {
      const w = P(r, c);
      return [1, E, ...w, E, t];
    }
    return P(1, t);
  } else {
    const m = e * 2 + 1;
    return a < m ? P(1, t) : o <= e + 1 ? P(1, m) : a - o <= e ? P(a - m + 1, t) : P(r, c);
  }
}
const Ne = C({ __name: "PaginationList", props: { asChild: { type: Boolean }, as: {} }, setup(o) {
  const a = o;
  k();
  const e = z(), n = v(() => Be(Me(e.page.value, e.pageCount.value, e.siblingCount.value, e.showEdges.value)));
  return (s, t) => (i(), _(l(B), le(ie(a)), { default: d(() => [I(s.$slots, "default", { items: n.value })]), _: 3 }, 16));
} }), Se = C({ __name: "PaginationListItem", props: { value: {}, asChild: { type: Boolean }, as: { default: "button" } }, setup(o) {
  const a = o;
  k();
  const e = z(), n = v(() => e.page.value === a.value), s = v(() => e.disabled.value);
  return (t, r) => (i(), _(l(B), q(a, { "data-type": "page", "aria-label": `Page ${t.value}`, "aria-current": n.value ? "page" : void 0, "data-selected": n.value ? "true" : void 0, disabled: s.value, type: t.as === "button" ? "button" : void 0, onClick: r[0] || (r[0] = (c) => !s.value && l(e).onPageChange(t.value)) }), { default: d(() => [I(t.$slots, "default", {}, () => [$(L(t.value), 1)])]), _: 3 }, 16, ["aria-label", "aria-current", "data-selected", "disabled", "type"]));
} }), Ee = C({ __name: "PaginationNext", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(o) {
  const a = o;
  k();
  const e = z(), n = v(() => e.page.value === e.pageCount.value || e.disabled.value);
  return (s, t) => (i(), _(l(B), q(a, { "aria-label": "Next Page", type: s.as === "button" ? "button" : void 0, disabled: n.value, onClick: t[0] || (t[0] = (r) => !n.value && l(e).onPageChange(l(e).page.value + 1)) }), { default: d(() => [I(s.$slots, "default", {}, () => [t[1] || (t[1] = $("Next page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), Le = C({ __name: "PaginationPrev", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(o) {
  const a = o;
  k();
  const e = z(), n = v(() => e.page.value === 1 || e.disabled.value);
  return (s, t) => (i(), _(l(B), q(a, { "aria-label": "Previous Page", type: s.as === "button" ? "button" : void 0, disabled: n.value, onClick: t[0] || (t[0] = (r) => !n.value && l(e).onPageChange(l(e).page.value - 1)) }), { default: d(() => [I(s.$slots, "default", {}, () => [t[1] || (t[1] = $("Prev page"))])]), _: 3 }, 16, ["type", "disabled"]));
} }), qe = { "bg-neutral-100": "", "f-pt-3xl": "" }, ze = { key: 0, grid: "~ cols-1 lg:cols-2 xl:cols-3 gap-16", "w-full": "" }, Ve = { "p-4": "" }, je = { key: 1, "text-green-400": "", "py-64": "", "rounded-4": "", "flex-1": "", "size-full": "", "bg-gradient-green": "", grid: "~ place-content-center" }, Te = { flex: "~ col", "p-24": "", "h-full": "" }, Ae = { "mt-8": "", "line-clamp-2": "", text: "16 neutral-900 left" }, De = { "sr-only": "" }, j = 25, Fe = C({ __name: "index", props: Pe(), setup(o) {
  const { showDrafts: a } = re().public, e = ue(), n = pe(), s = T(Number(e.query.page) || 1);
  A(() => e.query.page, (u) => {
    s.value = Number(u) || 1;
  }), A(s, (u) => {
    n.replace({ query: { ...e.query, page: u !== 1 ? u : void 0 } }), window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const { client: t } = de(), r = T();
  ce(async () => {
    const u = await t.getByType("blog_page", { orderings: { field: "my.blog_page.publish_date", direction: "desc" }, filters: a ? void 0 : [be.not("my.blog_page.draft", true)], pageSize: j, page: s.value });
    r.value = u;
  });
  const c = v(() => {
    var _a;
    return ((_a = r.value) == null ? void 0 : _a.results) ?? [];
  }), m = v(() => {
    var _a;
    return ((_a = r.value) == null ? void 0 : _a.total_pages) ?? 1;
  }), p = v(() => c.value.map((u) => ye(u))), x = ge("$1taYRZWpx1");
  return (u, g) => {
    const w = oe, U = fe, Y = me, W = ve, Z = Le, G = Se, H = $e, J = Ee, K = Ne, O = ke;
    return i(), y("section", qe, [l(p).length > 0 ? (i(), y("div", ze, [(i(true), y(V, null, F(l(p), ({ uid: b, href: R, draft: N, image: Q, hasImage: X, title: ee, abstract: te, date: ae, authors: se }, M) => (i(), y("article", { key: b, class: S(l(s) === 1 ? { "md:first:col-span-2": true } : "self-stretch") }, [h(W, { to: R, "p-0": "", "h-full": "", relative: "", "nq-hoverable": "", onClick: (Ue) => x.value = b }, { default: d(() => [h(w, { draft: N, "right-12": "", "top-12": "", absolute: "", "z-10": "" }, null, 8, ["draft"]), f("div", Ve, [X ? (i(), _(U, { key: 0, field: Q, "rounded-6": "", "h-max": "", "w-full": "", "object-cover": "", class: S([M === 1 ? "h-max lg:h-280" : "h-max", { "view-transition-post-img contain-layout": l(x) === b }]), loading: "lazy" }, null, 8, ["field", "class"])) : l(a) ? (i(), y("div", je, g[1] || (g[1] = [f("div", { flex: "~ items-center gap-12" }, [f("div", { "text-32": "", "op-70": "", "i-nimiq:tools-wench-hammer": "" }), f("p", { "font-bold": "", "f-text-xl": "" }, " Image not found ")], -1), f("p", { "font-semibold": "", "mt-8": "", "op-80": "", "max-w-40ch": "" }, " Something great is being redacted just right now and there is no image yet. \u{1F92B} ", -1), f("p", { "op-70": "", italic: "", "f-text-2xs": "", "f-mt-2xs": "" }, " This is a development-only message. ", -1)]))) : D("", true)]), f("div", Te, [h(Y, { wrapper: "h2", "text-left": "", field: ee, class: S({ "view-transition-post-title contain-layout": l(x) === b, "f-text-3xl": M === 0, "f-text-2xl": M === 1, "f-text-xl": M > 1 }) }, null, 8, ["field", "class"]), f("p", Ae, L(te), 1), h(Ce, { style: _e(`--content: '${u.slice.primary.labelLearnMore}'`), class: S(M === 1 ? "mt-4" : "mt-auto"), after: "text-blue content-$content text-16", date: ae, authors: se.join(", "), "pt-16": "", "gap-x-8": "", "h-max": "", "nq-hoverable-cta": "" }, null, 8, ["style", "class", "date", "authors"]), f("span", De, L(u.slice.primary.labelLearnMore), 1)])]), _: 2 }, 1032, ["to", "onClick"])], 2))), 128)), h(O, { page: l(s), "onUpdate:page": g[0] || (g[0] = (b) => xe(s) ? s.value = b : null), total: l(m) * j, "items-per-page": j, "show-edges": "", "mt-32": "", "col-span-full": "" }, { default: d(() => [h(K, { flex: "~ gap-16 items-center justify-center" }, { default: d(({ items: b }) => [h(Z, { class: "item" }, { default: d(() => g[2] || (g[2] = [f("div", { "text-9": "", "op-70": "", "i-nimiq:chevron-left": "" }, null, -1)])), _: 1, __: [2] }), (i(true), y(V, null, F(b, (R, N) => (i(), y(V, null, [R.type === "page" ? (i(), _(G, { key: N, class: "item", value: R.value }, { default: d(() => [$(L(R.value), 1)]), _: 2 }, 1032, ["value"])) : (i(), _(H, { key: R.type, index: N, class: "item" }, { default: d(() => g[3] || (g[3] = [$(" \u2026 ")])), _: 2, __: [3] }, 1032, ["index"]))], 64))), 256)), h(J, { class: "item" }, { default: d(() => g[4] || (g[4] = [f("div", { "text-9": "", "op-70": "", "i-nimiq:chevron-right": "" }, null, -1)])), _: 1, __: [4] })]), _: 1 })]), _: 1 }, 8, ["page", "total"])])) : D("", true)]);
  };
} }), et = he(Fe, [["__scopeId", "data-v-2b4163eb"]]);
export {
  et as default
};
