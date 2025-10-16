import { a as f, bA as w, af as q, a6 as I, a5 as b, b3 as N, r as v, d as T, B as h, o as _, g as A, C, l as D, ak as V, Z as M, al as B, E, J as k } from "./B8biU-UE.js";
import { _ as F } from "./RJkaeARB.js";
function $(t) {
  return f(() => {
    var _a;
    return w(t) ? !!((_a = q(t)) == null ? void 0 : _a.closest("form")) : true;
  });
}
function W(t) {
  const e = I("", 1e3);
  return { search: e, handleTypeaheadSearch: (u, m) => {
    e.value = e.value + u;
    {
      const i = b(), d = m.map((r) => {
        var _a, _b;
        return { ...r, textValue: ((_a = r.value) == null ? void 0 : _a.textValue) ?? ((_b = r.ref.textContent) == null ? void 0 : _b.trim()) ?? "" };
      }), c = d.find((r) => r.ref === i), o = d.map((r) => r.textValue), g = H(o, e.value, c == null ? void 0 : c.textValue), p = d.find((r) => r.textValue === g);
      return p && p.ref.focus(), p == null ? void 0 : p.ref;
    }
  }, resetTypeahead: () => {
    e.value = "";
  } };
}
function L(t, e) {
  return t.map((a, l) => t[(e + l) % t.length]);
}
function H(t, e, a) {
  const u = e.length > 1 && Array.from(e).every((o) => o === e[0]) ? e[0] : e, m = a ? t.indexOf(a) : -1;
  let i = L(t, Math.max(m, 0));
  u.length === 1 && (i = i.filter((o) => o !== a));
  const c = i.find((o) => o.toLowerCase().startsWith(u.toLowerCase()));
  return c !== a ? c : void 0;
}
function Y(t) {
  const e = N({ nonce: v() });
  return f(() => {
    var _a;
    return (t == null ? void 0 : t.value) || ((_a = e.nonce) == null ? void 0 : _a.value);
  });
}
function z(t, e = Number.NEGATIVE_INFINITY, a = Number.POSITIVE_INFINITY) {
  return Math.min(a, Math.max(e, t));
}
const O = { flex: "~ justify-start", "px-32": "", "max-w-780px": "", "w-full": "", "f-mt-xs": "" }, P = T({ __name: "LeftAligned", props: { headline: {}, subline: {} }, setup(t) {
  return (e, a) => {
    const l = F;
    return _(), h("section", null, [A(l, { headline: e.headline, subline: e.subline, "left-align": "", "px-32": "", "max-w-780px": "", "w-full": "" }, null, 8, ["headline", "subline"]), C("div", O, [D(e.$slots, "bottom")])]);
  };
} }), G = Object.assign(P, { __name: "HeroLeftAligned" }), R = ["datetime", "title"], J = { __name: "NuxtTime", props: { locale: { type: String, required: false }, datetime: { type: [String, Number, Date], required: true }, localeMatcher: { type: String, required: false }, weekday: { type: String, required: false }, era: { type: String, required: false }, year: { type: String, required: false }, month: { type: String, required: false }, day: { type: String, required: false }, hour: { type: String, required: false }, minute: { type: String, required: false }, second: { type: String, required: false }, timeZoneName: { type: String, required: false }, formatMatcher: { type: String, required: false }, hour12: { type: Boolean, required: false, default: void 0 }, timeZone: { type: String, required: false }, calendar: { type: String, required: false }, dayPeriod: { type: String, required: false }, numberingSystem: { type: String, required: false }, dateStyle: { type: String, required: false }, timeStyle: { type: String, required: false }, hourCycle: { type: String, required: false }, relative: { type: Boolean, required: false }, title: { type: [Boolean, String], required: false } }, setup(t) {
  var _a;
  const e = t, a = (_a = V()) == null ? void 0 : _a.vnode.el, l = a == null ? void 0 : a.getAttribute("datetime"), u = a == null ? void 0 : a.getAttribute("data-locale"), m = M(), i = f(() => {
    const n = e.datetime;
    return l && m.isHydrating ? new Date(l) : e.datetime ? new Date(n) : /* @__PURE__ */ new Date();
  }), d = v(m.isHydrating && window._nuxtTimeNow ? new Date(window._nuxtTimeNow) : /* @__PURE__ */ new Date());
  if (e.relative) {
    const s = setInterval(() => {
      d.value = /* @__PURE__ */ new Date();
    }, 1e3);
    B(() => clearInterval(s));
  }
  const c = f(() => {
    const { locale: n, relative: s, ...y } = e;
    return s ? new Intl.RelativeTimeFormat(u ?? n, y) : new Intl.DateTimeFormat(u ?? n, y);
  }), o = f(() => {
    if (e.relative) {
      const n = (i.value.getTime() - d.value.getTime()) / 1e3, s = [{ unit: "second", value: n }, { unit: "minute", value: n / 60 }, { unit: "hour", value: n / 3600 }, { unit: "day", value: n / 86400 }, { unit: "month", value: n / 2592e3 }, { unit: "year", value: n / 31536e3 }], { unit: y, value: x } = s.find(({ value: S }) => Math.abs(S) < 60) || s[s.length - 1];
      return c.value.format(Math.round(x), y);
    }
    return c.value.format(i.value);
  }), g = f(() => i.value.toISOString()), p = f(() => e.title === true ? g.value : typeof e.title == "string" ? e.title : void 0), r = {};
  return (n, s) => (_(), h("time", k(r, { datetime: g.value, title: p.value }), E(o.value), 17, R));
} };
export {
  J as _,
  $ as a,
  Y as b,
  z as c,
  G as d,
  W as u
};
