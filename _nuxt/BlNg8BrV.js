import { t as b } from "./8Lad1M9Y.js";
import { b0 as x, b1 as M, aQ as k, L as O, au as a, a1 as S } from "./7tyaNgEA.js";
const Q = /* @__PURE__ */ new WeakMap();
function E(i, f, l = {}) {
  const { mode: q = "replace", route: c = x(), router: o = M(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), Q.has(o) || Q.set(o, /* @__PURE__ */ new Map());
  const u = Q.get(o);
  let r = c.params[i];
  b(() => {
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
const R = /* @__PURE__ */ new WeakMap();
function G(i, f, l = {}) {
  const { mode: q = "replace", route: c = x(), router: o = M(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), R.has(o) || R.set(o, /* @__PURE__ */ new Map());
  const u = R.get(o);
  let r = c.query[i];
  b(() => {
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
  G as a,
  E as u
};
