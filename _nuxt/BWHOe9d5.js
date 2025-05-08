import { v as w, h as q, r as b, p as T } from "./DvG5VWlW.js";
import { j as f, B as v, d as D, c as h, o as _, a as C, e as A, R as I, a0 as M, M as N, a2 as V, t as B, m as L } from "./ClGJWWej.js";
import { g as R } from "./DsoEoSLB.js";
import { _ as j } from "./DDjqKod7.js";
function z(t) {
  return f(() => {
    var _a;
    return w(t) ? !!((_a = q(t)) == null ? void 0 : _a.closest("form")) : true;
  });
}
function U(t) {
  const e = b("", 1e3);
  return { search: e, handleTypeaheadSearch: (u, p) => {
    e.value = e.value + u;
    {
      const i = R(), d = p.map((a) => {
        var _a, _b;
        return { ...a, textValue: ((_a = a.value) == null ? void 0 : _a.textValue) ?? ((_b = a.ref.textContent) == null ? void 0 : _b.trim()) ?? "" };
      }), c = d.find((a) => a.ref === i), o = d.map((a) => a.textValue), g = H(o, e.value, c == null ? void 0 : c.textValue), m = d.find((a) => a.textValue === g);
      return m && m.ref.focus(), m == null ? void 0 : m.ref;
    }
  }, resetTypeahead: () => {
    e.value = "";
  } };
}
function k(t, e) {
  return t.map((r, l) => t[(e + l) % t.length]);
}
function H(t, e, r) {
  const u = e.length > 1 && Array.from(e).every((o) => o === e[0]) ? e[0] : e, p = r ? t.indexOf(r) : -1;
  let i = k(t, Math.max(p, 0));
  u.length === 1 && (i = i.filter((o) => o !== r));
  const c = i.find((o) => o.toLowerCase().startsWith(u.toLowerCase()));
  return c !== r ? c : void 0;
}
function G(t) {
  const e = T({ nonce: v() });
  return f(() => {
    var _a;
    return (t == null ? void 0 : t.value) || ((_a = e.nonce) == null ? void 0 : _a.value);
  });
}
const E = { flex: "~ justify-start", "max-w-780px": "", "w-full": "", "px-32": "", "f-mt-xs": "" }, F = D({ __name: "LeftAligned", props: { headline: {}, subline: {} }, setup(t) {
  return (e, r) => {
    const l = j;
    return _(), h("section", null, [C(l, { headline: e.headline, subline: e.subline, "left-align": "", "max-w-780px": "", "w-full": "", "px-32": "" }, null, 8, ["headline", "subline"]), A("div", E, [I(e.$slots, "bottom")])]);
  };
} }), J = Object.assign(F, { __name: "HeroLeftAligned" }), O = ["datetime", "title"], K = { __name: "NuxtTime", props: { locale: { type: String, required: false }, datetime: { type: [String, Number, Date], required: true }, localeMatcher: { type: String, required: false }, weekday: { type: String, required: false }, era: { type: String, required: false }, year: { type: String, required: false }, month: { type: String, required: false }, day: { type: String, required: false }, hour: { type: String, required: false }, minute: { type: String, required: false }, second: { type: String, required: false }, timeZoneName: { type: String, required: false }, formatMatcher: { type: String, required: false }, hour12: { type: Boolean, required: false, default: void 0 }, timeZone: { type: String, required: false }, calendar: { type: String, required: false }, dayPeriod: { type: String, required: false }, numberingSystem: { type: String, required: false }, dateStyle: { type: String, required: false }, timeStyle: { type: String, required: false }, hourCycle: { type: String, required: false }, relative: { type: Boolean, required: false }, title: { type: [Boolean, String], required: false } }, setup(t) {
  var _a;
  const e = t, r = (_a = M()) == null ? void 0 : _a.vnode.el, l = r == null ? void 0 : r.getAttribute("datetime"), u = r == null ? void 0 : r.getAttribute("data-locale"), p = N(), i = f(() => {
    const n = e.datetime;
    return l && p.isHydrating ? new Date(l) : e.datetime ? new Date(n) : /* @__PURE__ */ new Date();
  }), d = v(p.isHydrating && window._nuxtTimeNow ? new Date(window._nuxtTimeNow) : /* @__PURE__ */ new Date());
  if (e.relative) {
    const s = setInterval(() => {
      d.value = /* @__PURE__ */ new Date();
    }, 1e3);
    V(() => clearInterval(s));
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
  }), g = f(() => i.value.toISOString()), m = f(() => e.title === true ? g.value : typeof e.title == "string" ? e.title : void 0), a = {};
  return (n, s) => (_(), h("time", L(a, { datetime: g.value, title: m.value }), B(o.value), 17, O));
} };
export {
  K as _,
  z as a,
  G as b,
  J as c,
  U as u
};
