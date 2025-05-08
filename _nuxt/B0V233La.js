import { t as M } from "./YKo2rOHu.js";
import { aZ as O, a_ as Q, aO as k, L as S, as as a, a1 as b } from "./ClGJWWej.js";
const R = /* @__PURE__ */ new WeakMap();
function E(i, f, l = {}) {
  const { mode: q = "replace", route: c = O(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), R.has(o) || R.set(o, /* @__PURE__ */ new Map());
  const u = R.get(o);
  let r = c.params[i];
  M(() => {
    r = void 0;
  });
  let m;
  const h = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 && r !== "" ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) || t === null ? void 0 : t, u.set(i, t === a(f) || t === null ? void 0 : t), y(), b(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: _, hash: d } = c;
      o[a(q)]({ params: { ...w, ...g }, query: _, hash: d });
    }));
  } }));
  return S(() => c.params[i], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), h;
}
const x = /* @__PURE__ */ new WeakMap();
function G(i, f, l = {}) {
  const { mode: q = "replace", route: c = O(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), x.has(o) || x.set(o, /* @__PURE__ */ new Map());
  const u = x.get(o);
  let r = c.query[i];
  M(() => {
    r = void 0;
  });
  let m;
  const h = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) ? void 0 : t, u.set(i, t === a(f) ? void 0 : t), y(), b(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: _, hash: d } = c;
      o[a(q)]({ params: w, query: { ..._, ...g }, hash: d });
    }));
  } }));
  return S(() => c.query[i], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), h;
}
export {
  G as a,
  E as u
};
