import { t as M } from "./DeSMYd_K.js";
import { a$ as Q, b0 as S, aS as b, Y as k, aA as a, a2 as O } from "./BguRs3jF.js";
const R = /* @__PURE__ */ new WeakMap();
function E(i, f, l = {}) {
  const { mode: q = "replace", route: c = Q(), router: o = S(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), R.has(o) || R.set(o, /* @__PURE__ */ new Map());
  const u = R.get(o);
  let r = c.params[i];
  M(() => {
    r = void 0;
  });
  let m;
  const h = b((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 && r !== "" ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) || t === null ? void 0 : t, u.set(i, t === a(f) || t === null ? void 0 : t), y(), O(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: d, hash: _ } = c;
      o[a(q)]({ params: { ...w, ...g }, query: d, hash: _ });
    }));
  } }));
  return k(() => c.params[i], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), h;
}
const x = /* @__PURE__ */ new WeakMap();
function G(i, f, l = {}) {
  const { mode: q = "replace", route: c = Q(), router: o = S(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), x.has(o) || x.set(o, /* @__PURE__ */ new Map());
  const u = x.get(o);
  let r = c.query[i];
  M(() => {
    r = void 0;
  });
  let m;
  const h = b((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 ? r : a(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === a(f) ? void 0 : t, u.set(i, t === a(f) ? void 0 : t), y(), O(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: d, hash: _ } = c;
      o[a(q)]({ params: w, query: { ...d, ...g }, hash: _ });
    }));
  } }));
  return k(() => c.query[i], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), h;
}
export {
  G as a,
  E as u
};
