import { d as x, r as g, B as y, o as b, A as w, L as P, C as d, O as $, h as u, M as q, x as M, E as S, a$ as I } from "./B8biU-UE.js";
var p;
function v(n) {
  return { lang: (n == null ? void 0 : n.lang) ?? (p == null ? void 0 : p.lang), message: n == null ? void 0 : n.message, abortEarly: (n == null ? void 0 : n.abortEarly) ?? (p == null ? void 0 : p.abortEarly), abortPipeEarly: (n == null ? void 0 : n.abortPipeEarly) ?? (p == null ? void 0 : p.abortPipeEarly) };
}
var j;
function z(n) {
  return j == null ? void 0 : j.get(n);
}
var B;
function C(n) {
  return B == null ? void 0 : B.get(n);
}
var O;
function G(n, e) {
  var _a;
  return (_a = O == null ? void 0 : O.get(n)) == null ? void 0 : _a.get(e);
}
function N(n) {
  var _a, _b;
  const e = typeof n;
  return e === "string" ? `"${n}"` : e === "number" || e === "bigint" || e === "boolean" ? `${n}` : e === "object" || e === "function" ? (n && ((_b = (_a = Object.getPrototypeOf(n)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : e;
}
function c(n, e, r, t, i) {
  const l = i && "input" in i ? i.input : r.value, s = (i == null ? void 0 : i.expected) ?? n.expects ?? null, o = (i == null ? void 0 : i.received) ?? N(l), a = { kind: n.kind, type: n.type, input: l, expected: s, received: o, message: `Invalid ${e}: ${s ? `Expected ${s} but r` : "R"}eceived ${o}`, requirement: n.requirement, path: i == null ? void 0 : i.path, issues: i == null ? void 0 : i.issues, lang: t.lang, abortEarly: t.abortEarly, abortPipeEarly: t.abortPipeEarly }, f = n.kind === "schema", m = (i == null ? void 0 : i.message) ?? n.message ?? G(n.reference, a.lang) ?? (f ? C(a.lang) : null) ?? t.message ?? z(a.lang);
  m !== void 0 && (a.message = typeof m == "function" ? m(a) : m), f && (r.typed = false), r.issues ? r.issues.push(a) : r.issues = [a];
}
function h(n) {
  return { version: 1, vendor: "valibot", validate(e) {
    return n["~run"]({ value: e }, v());
  } };
}
var R = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;
function E(n) {
  return { kind: "validation", type: "email", reference: E, expects: null, async: false, requirement: R, message: n, "~run"(e, r) {
    return e.typed && !this.requirement.test(e.value) && c(this, "email", e, r), e;
  } };
}
function _(n) {
  return { kind: "validation", type: "non_empty", reference: _, async: false, expects: "!0", message: n, "~run"(e, r) {
    return e.typed && e.value.length === 0 && c(this, "length", e, r, { received: "0" }), e;
  } };
}
function k(n) {
  return { kind: "schema", type: "string", reference: k, expects: "string", async: false, message: n, get "~standard"() {
    return h(this);
  }, "~run"(e, r) {
    return typeof e.value == "string" ? e.typed = true : c(this, "type", e, r), e;
  } };
}
function V(...n) {
  return { ...n[0], pipe: n, get "~standard"() {
    return h(this);
  }, "~run"(e, r) {
    for (const t of n) if (t.kind !== "metadata") {
      if (e.issues && (t.kind === "schema" || t.kind === "transformation")) {
        e.typed = false;
        break;
      }
      (!e.issues || !r.abortEarly && !r.abortPipeEarly) && (e = t["~run"](e, r));
    }
    return e;
  } };
}
function A(n, e, r) {
  const t = n["~run"]({ value: e }, v(r));
  return { typed: t.typed, success: !t.issues, output: t.value, issues: t.issues };
}
const D = ["placeholder"], L = ["disabled"], T = { h: "0.5em md:0.75em", "font-semibold": "", "mt-0.25em": "", "pl-0.75em": "", text: "0.875em lg:0.9375em 2xl:1em red mt-0.5em" }, F = { key: 0 }, U = x({ __name: "EmailInput", props: { placeholder: {} }, setup(n) {
  const e = g(""), r = V(k(), _("Please enter your email."), E("Invalid email.")), t = g();
  function i() {
    t.value = "";
    const { success: l, issues: s } = A(r, e.value);
    if (!l && s.length > 0) {
      t.value = s[0].message;
      return;
    }
    I({ path: "/newsletter", query: { email: e.value } });
  }
  return (l, s) => (b(), y("form", { "max-w-32em": "", "w-full": "", relative: "", onSubmit: w(i, ["prevent"]) }, [P(d("input", { "onUpdate:modelValue": s[0] || (s[0] = (o) => q(e) ? e.value = o : null), type: "email", name: "email", required: "", "rounded-full": "", relative: "", "nq-input-box": "", placeholder: l.placeholder || "Enter email address..." }, null, 8, D), [[$, u(e)]]), d("button", { "aria-label": "Submit your email", type: "submit", disabled: !u(e), group: "", "rounded-full": "", "size-1.6875em": "", "aspect-1": "", "transition-colors": "", "right-0.1875em": "", "top-0.1875em": "", absolute: "", "not-disabled:cursor-pointer": "", bg: "not-disabled:gradient-blue hocus:not-disabled:gradient-blue-darkened disabled:!neutral-300", flex: "~ items-center justify-center" }, s[1] || (s[1] = [d("div", { "i-nimiq:arrow-right": "", text: "0.6875em white group-disabled:neutral-600" }, null, -1)]), 8, L), d("div", T, [u(t) && u(e) ? (b(), y("span", F, S(u(t)), 1)) : M("", true)])], 32));
} }), H = Object.assign(U, { __name: "NewsletterEmailInput" });
export {
  H as _
};
