import { k as b } from "./B5vKjtsS.js";
import { bn as k, bo as x, a_ as M, aW as a, q as O, Q as S } from "./B8biU-UE.js";
const Q = /* @__PURE__ */ new WeakMap();
function z(i, f, l = {}) {
  const { mode: q = "replace", route: c = k(), router: o = x(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), Q.has(o) || Q.set(o, /* @__PURE__ */ new Map());
  const u = Q.get(o);
  let r = c.params[i];
  b(() => {
    r = void 0;
  });
  let m;
  const h = M((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 && r !== "" ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) || t === null ? void 0 : t, u.set(i, t === a(f) || t === null ? void 0 : t), y(), O(() => {
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
const R = /* @__PURE__ */ new WeakMap();
function E(i, f, l = {}) {
  const { mode: q = "replace", route: c = k(), router: o = x(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), R.has(o) || R.set(o, /* @__PURE__ */ new Map());
  const u = R.get(o);
  let r = c.query[i];
  b(() => {
    r = void 0;
  });
  let m;
  const h = M((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) ? void 0 : t, u.set(i, t === a(f) ? void 0 : t), y(), O(() => {
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
  E as a,
  z as u
};
