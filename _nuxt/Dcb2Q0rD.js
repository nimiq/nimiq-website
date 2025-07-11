import { t as x } from "./DYDUvkDP.js";
import { b3 as M, b4 as Q, aW as k, X as O, aB as a, a1 as S } from "./gdLxT4Lf.js";
const R = /* @__PURE__ */ new WeakMap();
function z(i, f, l = {}) {
  const { mode: q = "replace", route: c = M(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), R.has(o) || R.set(o, /* @__PURE__ */ new Map());
  const u = R.get(o);
  let r = c.params[i];
  x(() => {
    r = void 0;
  });
  let m;
  const h = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 && r !== "" ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) || t === null ? void 0 : t, u.set(i, t === a(f) || t === null ? void 0 : t), y(), S(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: d, hash: _ } = c;
      o[a(q)]({ params: { ...w, ...g }, query: d, hash: _ });
    }));
  } }));
  return O(() => c.params[i], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), h;
}
const b = /* @__PURE__ */ new WeakMap();
function E(i, f, l = {}) {
  const { mode: q = "replace", route: c = M(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), b.has(o) || b.set(o, /* @__PURE__ */ new Map());
  const u = b.get(o);
  let r = c.query[i];
  x(() => {
    r = void 0;
  });
  let m;
  const h = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) ? void 0 : t, u.set(i, t === a(f) ? void 0 : t), y(), S(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: d, hash: _ } = c;
      o[a(q)]({ params: w, query: { ...d, ...g }, hash: _ });
    }));
  } }));
  return O(() => c.query[i], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), h;
}
export {
  E as a,
  z as u
};
