import { bj as g, a as u, bk as p, r as i, b3 as b, Q as h, ac as w, b4 as B, bl as c, bm as S, q as k } from "./B8biU-UE.js";
const x = g(() => {
  const t = i(/* @__PURE__ */ new Map()), e = i(), o = u(() => {
    for (const s of t.value.values()) if (s) return true;
    return false;
  }), n = b({ scrollBody: i(true) });
  let a = null;
  const m = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = e.value ?? "", c && (a == null ? void 0 : a()), e.value = void 0;
  };
  return h(o, (s, y) => {
    var _a;
    if (!w) return;
    if (!s) {
      y && m();
      return;
    }
    e.value === void 0 && (e.value = document.body.style.overflow);
    const l = window.innerWidth - document.documentElement.clientWidth, d = { padding: l, margin: 0 }, r = ((_a = n.scrollBody) == null ? void 0 : _a.value) ? typeof n.scrollBody.value == "object" ? B({ padding: n.scrollBody.value.padding === true ? l : n.scrollBody.value.padding, margin: n.scrollBody.value.margin === true ? l : n.scrollBody.value.margin }, d) : d : { padding: 0, margin: 0 };
    l > 0 && (document.body.style.paddingRight = typeof r.padding == "number" ? `${r.padding}px` : String(r.padding), document.body.style.marginRight = typeof r.margin == "number" ? `${r.margin}px` : String(r.margin), document.body.style.setProperty("--scrollbar-width", `${l}px`), document.body.style.overflow = "hidden"), c && (a = S(document, "touchmove", (v) => C(v), { passive: false })), k(() => {
      document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
    });
  }, { immediate: true, flush: "sync" }), t;
});
function O(t) {
  const e = Math.random().toString(36).substring(2, 7), o = x();
  o.value.set(e, t ?? false);
  const n = u({ get: () => o.value.get(e) ?? false, set: (a) => o.value.set(e, a) });
  return p(() => {
    o.value.delete(e);
  }), n;
}
function f(t) {
  const e = window.getComputedStyle(t);
  if (e.overflowX === "scroll" || e.overflowY === "scroll" || e.overflowX === "auto" && t.clientWidth < t.scrollWidth || e.overflowY === "auto" && t.clientHeight < t.scrollHeight) return true;
  {
    const o = t.parentNode;
    return !(o instanceof Element) || o.tagName === "BODY" ? false : f(o);
  }
}
function C(t) {
  const e = t || window.event, o = e.target;
  return o instanceof Element && f(o) ? false : e.touches.length > 1 ? true : (e.preventDefault && e.cancelable && e.preventDefault(), false);
}
export {
  O as u
};
