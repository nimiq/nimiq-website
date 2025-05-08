import { d as w, B as g, c as b, o as y, $ as x, a9 as P, e as d, b3 as $, u, ab as q, f as S, t as M, b4 as I } from "./ClGJWWej.js";
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
var G;
function N(n, e) {
  var _a;
  return (_a = G == null ? void 0 : G.get(n)) == null ? void 0 : _a.get(e);
}
function O(n) {
  var _a, _b;
  const e = typeof n;
  return e === "string" ? `"${n}"` : e === "number" || e === "bigint" || e === "boolean" ? `${n}` : e === "object" || e === "function" ? (n && ((_b = (_a = Object.getPrototypeOf(n)) == null ? void 0 : _a.constructor) == null ? void 0 : _b.name)) ?? "null" : e;
}
function c(n, e, t, r, i) {
  const l = i && "input" in i ? i.input : t.value, s = (i == null ? void 0 : i.expected) ?? n.expects ?? null, o = (i == null ? void 0 : i.received) ?? O(l), a = { kind: n.kind, type: n.type, input: l, expected: s, received: o, message: `Invalid ${e}: ${s ? `Expected ${s} but r` : "R"}eceived ${o}`, requirement: n.requirement, path: i == null ? void 0 : i.path, issues: i == null ? void 0 : i.issues, lang: r.lang, abortEarly: r.abortEarly, abortPipeEarly: r.abortPipeEarly }, f = n.kind === "schema", m = (i == null ? void 0 : i.message) ?? n.message ?? N(n.reference, a.lang) ?? (f ? C(a.lang) : null) ?? r.message ?? z(a.lang);
  m !== void 0 && (a.message = typeof m == "function" ? m(a) : m), f && (t.typed = false), t.issues ? t.issues.push(a) : t.issues = [a];
}
function h(n) {
  return { version: 1, vendor: "valibot", validate(e) {
    return n["~run"]({ value: e }, v());
  } };
}
var R = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;
function E(n) {
  return { kind: "validation", type: "email", reference: E, expects: null, async: false, requirement: R, message: n, "~run"(e, t) {
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
function V(...n) {
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
const T = ["placeholder"], A = ["disabled"], F = { h: "0.5em md:0.75em", "mt-0.25em": "", "pl-0.75em": "", "font-semibold": "", text: "0.875em lg:0.9375em 2xl:1em red mt-0.5em" }, L = { key: 0 }, U = w({ __name: "EmailInput", props: { placeholder: {} }, setup(n) {
  const e = g(""), t = V(k(), _("Please enter your email."), E("Invalid email.")), r = g();
  function i() {
    r.value = "";
    const { success: l, issues: s } = D(t, e.value);
    if (!l && s.length > 0) {
      r.value = s[0].message;
      return;
    }
    I({ path: "/newsletter", query: { email: e.value } });
  }
  return (l, s) => (y(), b("form", { relative: "", "max-w-32em": "", "w-full": "", onSubmit: x(i, ["prevent"]) }, [P(d("input", { "onUpdate:modelValue": s[0] || (s[0] = (o) => q(e) ? e.value = o : null), type: "email", name: "email", required: "", relative: "", "rounded-full": "", "nq-input-box": "", placeholder: l.placeholder || "Enter email address..." }, null, 8, T), [[$, u(e)]]), d("button", { "aria-label": "Submit your email", type: "submit", disabled: !u(e), group: "", absolute: "", "right-0.1875em": "", "top-0.1875em": "", "aspect-1": "", "size-1.6875em": "", "rounded-full": "", "transition-colors": "", "not-disabled:cursor-pointer": "", bg: "not-disabled:gradient-blue hocus:not-disabled:gradient-blue-darkened disabled:!neutral-300", flex: "~ items-center justify-center" }, s[1] || (s[1] = [d("div", { "i-nimiq:arrow-right": "", text: "0.6875em white group-disabled:neutral-600" }, null, -1)]), 8, A), d("div", F, [u(r) && u(e) ? (y(), b("span", L, M(u(r)), 1)) : S("", true)])], 32));
} }), H = Object.assign(U, { __name: "NewsletterEmailInput" });
export {
  H as _
};
