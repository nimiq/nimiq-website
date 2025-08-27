import { h as R } from "./BTeZegdw.js";
import { bl as M, bm as Q, b9 as k, aW as i, K as O, x as S } from "./BdODHn_3.js";
const b = /* @__PURE__ */ new WeakMap();
function z(a, f, l = {}) {
  const { mode: h = "replace", route: c = M(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), b.has(o) || b.set(o, /* @__PURE__ */ new Map());
  const u = b.get(o);
  let r = c.params[a];
  R(() => {
    r = void 0;
  });
  let m;
  const q = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 && r !== "" ? r : i(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === i(f) || t === null ? void 0 : t, u.set(a, t === i(f) || t === null ? void 0 : t), y(), O(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: d, hash: _ } = c;
      o[i(h)]({ params: { ...w, ...g }, query: d, hash: _ });
    }));
  } }));
  return S(() => c.params[a], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), q;
}
const x = /* @__PURE__ */ new WeakMap();
function E(a, f, l = {}) {
  const { mode: h = "replace", route: c = M(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), x.has(o) || x.set(o, /* @__PURE__ */ new Map());
  const u = x.get(o);
  let r = c.query[a];
  R(() => {
    r = void 0;
  });
  let m;
  const q = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 ? r : i(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === i(f) ? void 0 : t, u.set(a, t === i(f) ? void 0 : t), y(), O(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: d, hash: _ } = c;
      o[i(h)]({ params: w, query: { ...d, ...g }, hash: _ });
    }));
  } }));
  return S(() => c.query[a], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), q;
}
export {
  E as a,
  z as u
};
