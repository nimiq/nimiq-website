var s;
function u(r, t) {
  const n = {};
  return ["otpKdf"].forEach((e) => {
    n[e] = async function() {
      return s = s || await o(r, t), s[e](...arguments);
    };
  }), n;
}
async function o(r, t) {
  const n = r();
  return await new Promise((e) => {
    const a = (i) => {
      d(n, "message", a), f(i) === "NIMIQ_ONLOAD" && e();
    };
    c(n, "message", a);
  }), console.debug("Have crypto worker remote"), t(n);
}
function c(r, t, n) {
  const e = "addListener" in r ? "addListener" : "addEventListener";
  r[e](t, n);
}
function d(r, t, n) {
  const e = "removeListener" in r ? "removeListener" : "removeEventListener";
  r[e](t, n);
}
function f(r) {
  return typeof r == "object" && "data" in r ? r.data : r;
}
function y(r, t) {
  r.transferHandlers.set("function", { canHandle: (e) => typeof e == "function", serialize(e) {
    return r.transferHandlers.get("proxy").serialize(e);
  } });
  function n(e) {
    return e instanceof t.Address || e instanceof t.Transaction;
  }
  r.transferHandlers.set("plain", { canHandle: (e) => n(e) || Array.isArray(e) && e.some((a) => n(a)), serialize(e) {
    return Array.isArray(e) ? [e.map((a) => n(a) ? a.serialize() : a), []] : [e.serialize(), []];
  } });
}
export {
  u as c,
  y as s
};
