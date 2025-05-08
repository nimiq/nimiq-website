import { d as h, B as g, E as p, c as y, aW as b, H as f, b1 as v, M as k, a0 as T, b2 as _, an as $ } from "./ClGJWWej.js";
const C = Symbol.for("nuxt:client-only"), c = "<div></div>", H = h({ name: "ClientOnly", inheritAttrs: false, props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"], setup(t, { slots: n, attrs: i }) {
  const o = g(false);
  return p(() => {
    o.value = true;
  }), $(C, true), (a) => {
    var _a;
    if (o.value) return (_a = n.default) == null ? void 0 : _a.call(n);
    const r = n.fallback || n.placeholder;
    if (r) return r();
    const l = a.fallback || a.placeholder || "", s = a.fallbackTag || a.placeholderTag || "span";
    return y(s, i, l);
  };
} }), m = /* @__PURE__ */ new WeakMap();
function I(t) {
  if (m.has(t)) return m.get(t);
  const n = { ...t };
  return n.render ? n.render = (i, o, a, r, l, s) => {
    var _a;
    if (r.mounted$ ?? i.mounted$) {
      const e = (_a = t.render) == null ? void 0 : _a.bind(i)(i, o, a, r, l, s);
      return e.children === null || typeof e.children == "string" ? b(e) : f(e);
    }
    return v(i._.vnode.el, c);
  } : n.template && (n.template = `
      <template v-if="mounted$">${t.template}</template>
      <template v-else>${c}</template>
    `), n.setup = (i, o) => {
    var _a;
    const a = k(), r = g(a.isHydrating === false), l = T();
    if (a.isHydrating) {
      const e = { ...l.attrs }, d = O(l);
      for (const u in e) delete l.attrs[u];
      p(() => {
        Object.assign(l.attrs, e), l.vnode.dirs = d;
      });
    }
    p(() => {
      r.value = true;
    });
    const s = ((_a = t.setup) == null ? void 0 : _a.call(t, i, o)) || {};
    return _(s) ? Promise.resolve(s).then((e) => typeof e != "function" ? (e || (e = {}), e.mounted$ = r, e) : (...d) => {
      if (r.value || !a.isHydrating) {
        const u = e(...d);
        return u.children === null || typeof u.children == "string" ? b(u) : f(u);
      }
      return v(l == null ? void 0 : l.vnode.el, c);
    }) : typeof s == "function" ? (...e) => r.value ? f(s(...e), o.attrs) : v(l == null ? void 0 : l.vnode.el, c) : Object.assign(s, { mounted$: r });
  }, m.set(t, n), n;
}
function O(t) {
  if (!t || !t.vnode.dirs) return null;
  const n = t.vnode.dirs;
  return t.vnode.dirs = null, n;
}
export {
  H as _,
  I as c
};
