import { h as x } from "./BPgVFFXt.js";
import { by as M, bz as Q, bm as k, b1 as i, N as z, ae as O } from "./C95QRNzc.js";
const _ = /* @__PURE__ */ new WeakMap();
function E(a, f, l = {}) {
  const { mode: h = "replace", route: c = M(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), _.has(o) || _.set(o, /* @__PURE__ */ new Map());
  const u = _.get(o);
  let r = c.params[a];
  x(() => {
    r = void 0;
  });
  let m;
  const q = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 && r !== "" ? r : i(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === i(f) || t === null ? void 0 : t, u.set(a, t === i(f) || t === null ? void 0 : t), y(), z(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: b, hash: d } = c;
      o[i(h)]({ params: { ...w, ...g }, query: b, hash: d });
    }));
  } }));
  return O(() => c.params[a], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), q;
}
const R = /* @__PURE__ */ new WeakMap();
function G(a, f, l = {}) {
  const { mode: h = "replace", route: c = M(), router: o = Q(), transform: s } = l;
  let n = (e) => e, p = (e) => e;
  typeof s == "function" ? n = s : s && (s.get && (n = s.get), s.set && (p = s.set)), R.has(o) || R.set(o, /* @__PURE__ */ new Map());
  const u = R.get(o);
  let r = c.query[a];
  x(() => {
    r = void 0;
  });
  let m;
  const q = k((e, y) => (m = y, { get() {
    return e(), n(r !== void 0 ? r : i(f));
  }, set(t) {
    t = p(t), r !== t && (r = t === i(f) ? void 0 : t, u.set(a, t === i(f) ? void 0 : t), y(), z(() => {
      if (u.size === 0) return;
      const g = Object.fromEntries(u.entries());
      u.clear();
      const { params: w, query: b, hash: d } = c;
      o[i(h)]({ params: w, query: { ...b, ...g }, hash: d });
    }));
  } }));
  return O(() => c.query[a], (e) => {
    r !== n(e) && (r = e, m());
  }, { flush: "sync" }), q;
}
export {
  G as a,
  E as u
};
