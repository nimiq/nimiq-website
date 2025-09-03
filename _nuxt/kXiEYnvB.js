import { d as w, v as g, j as y, o as b, ae as x, aH as P, k as d, aU as q, h as u, aJ as S, l as $, t as M, aV as I } from "./BSLliBk6.js";
var p;
function v(n) {
  return { lang: (n == null ? void 0 : n.lang) ?? (p == null ? void 0 : p.lang), message: n == null ? void 0 : n.message, abortEarly: (n == null ? void 0 : n.abortEarly) ?? (p == null ? void 0 : p.abortEarly), abortPipeEarly: (n == null ? void 0 : n.abortPipeEarly) ?? (p == null ? void 0 : p.abortPipeEarly) };
}
var j;
function z(n) {
  return j == null ? void 0 : j.get(n);
}
var V;
function B(n) {
  return V == null ? void 0 : V.get(n);
}
var C;
function G(n, e) {
  var _a;
  return (_a = C == null ? void 0 : C.get(n)) == null ? void 0 : _a.get(e);
}
function N(n) {
  var _a, _b;
  const e = typeof n;
  return e === "string" ? `"${n}"` : e === "number" || e === "bigint" || e === "boolean" ? `${n}` : e === "object" || e === "function" ? (n && ((_b = (_a = Object.getPrototypeOf(n)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : e;
}
function c(n, e, t, r, i) {
  const l = i && "input" in i ? i.input : t.value, s = (i == null ? void 0 : i.expected) ?? n.expects ?? null, o = (i == null ? void 0 : i.received) ?? N(l), a = { kind: n.kind, type: n.type, input: l, expected: s, received: o, message: `Invalid ${e}: ${s ? `Expected ${s} but r` : "R"}eceived ${o}`, requirement: n.requirement, path: i == null ? void 0 : i.path, issues: i == null ? void 0 : i.issues, lang: r.lang, abortEarly: r.abortEarly, abortPipeEarly: r.abortPipeEarly }, f = n.kind === "schema", m = (i == null ? void 0 : i.message) ?? n.message ?? G(n.reference, a.lang) ?? (f ? B(a.lang) : null) ?? r.message ?? z(a.lang);
  m !== void 0 && (a.message = typeof m == "function" ? m(a) : m), f && (t.typed = false), t.issues ? t.issues.push(a) : t.issues = [a];
}
function h(n) {
  return { version: 1, vendor: "valibot", validate(e) {
    return n["~run"]({ value: e }, v());
  } };
}
var O = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;
function E(n) {
  return { kind: "validation", type: "email", reference: E, expects: null, async: false, requirement: O, message: n, "~run"(e, t) {
    return e.typed && !this.requirement.test(e.value) && c(this, "email", e, t), e;
  } };
}
function _(n) {
  return { kind: "validation", type: "non_empty", reference: _, async: false, expects: "!0", message: n, "~run"(e, t) {
    return e.typed && e.value.length === 0 && c(this, "length", e, t, { received: "0" }), e;
  } };
}
function k(n) {
  return { kind: "schema", type: "string", reference: k, expects: "string", async: false, message: n, get "~standard"() {
    return h(this);
  }, "~run"(e, t) {
    return typeof e.value == "string" ? e.typed = true : c(this, "type", e, t), e;
  } };
}
function R(...n) {
  return { ...n[0], pipe: n, get "~standard"() {
    return h(this);
  }, "~run"(e, t) {
    for (const r of n) if (r.kind !== "metadata") {
      if (e.issues && (r.kind === "schema" || r.kind === "transformation")) {
        e.typed = false;
        break;
      }
      (!e.issues || !t.abortEarly && !t.abortPipeEarly) && (e = r["~run"](e, t));
    }
    return e;
  } };
}
function D(n, e, t) {
  const r = n["~run"]({ value: e }, v(t));
  return { typed: r.typed, success: !r.issues, output: r.value, issues: r.issues };
}
const T = ["placeholder"], U = ["disabled"], A = { h: "0.5em md:0.75em", "font-semibold": "", "mt-0.25em": "", "pl-0.75em": "", text: "0.875em lg:0.9375em 2xl:1em red mt-0.5em" }, F = { key: 0 }, H = w({ __name: "EmailInput", props: { placeholder: {} }, setup(n) {
  const e = g(""), t = R(k(), _("Please enter your email."), E("Invalid email.")), r = g();
  function i() {
    r.value = "";
    const { success: l, issues: s } = D(t, e.value);
    if (!l && s.length > 0) {
      r.value = s[0].message;
      return;
    }
    I({ path: "/newsletter", query: { email: e.value } });
  }
  return (l, s) => (b(), y("form", { "max-w-32em": "", "w-full": "", relative: "", onSubmit: x(i, ["prevent"]) }, [P(d("input", { "onUpdate:modelValue": s[0] || (s[0] = (o) => S(e) ? e.value = o : null), type: "email", name: "email", required: "", "rounded-full": "", relative: "", "nq-input-box": "", placeholder: l.placeholder || "Enter email address..." }, null, 8, T), [[q, u(e)]]), d("button", { "aria-label": "Submit your email", type: "submit", disabled: !u(e), group: "", "rounded-full": "", "size-1.6875em": "", "aspect-1": "", "transition-colors": "", "right-0.1875em": "", "top-0.1875em": "", absolute: "", "not-disabled:cursor-pointer": "", bg: "not-disabled:gradient-blue hocus:not-disabled:gradient-blue-darkened disabled:!neutral-300", flex: "~ items-center justify-center" }, s[1] || (s[1] = [d("div", { "i-nimiq:arrow-right": "", text: "0.6875em white group-disabled:neutral-600" }, null, -1)]), 8, U), d("div", A, [u(r) && u(e) ? (b(), y("span", F, M(u(r)), 1)) : $("", true)])], 32));
} }), L = Object.assign(H, { __name: "NewsletterEmailInput" });
export {
  L as _
};
