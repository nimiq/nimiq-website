import { d as b, l as C, p as k, q as P, s as B, v as c, x as D, j as i, b as H, w as M, u as e, k as $, y as I, o as U, a as N, z as S } from "./ClGJWWej.js";
import { c as V } from "./DQfM3PGm.js";
const R = b({ __name: "[...uid]", async setup(q) {
  var _a, _b, _c, _d, _e;
  let s, d;
  const u = C().params, o = typeof u.uid == "string" ? [] : (u == null ? void 0 : u.uid.filter(Boolean)) || [], h = o.length === 2, t = o.at(-1) || "home", l = t === "home", { showDrafts: f } = k().public, { client: g } = P(), { data: a } = ([s, d] = B(() => I("$prismic-page", () => g.getByUID("page", t).catch((n) => {
    throw console.error(`Page with UID "${t}" not found:`, n), c({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }))), s = await s, d(), s);
  if (!a.value || !f && ((_a = a.value) == null ? void 0 : _a.data.draft)) throw console.error(`Page with UID "${t}" not found`), c({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (h) {
    const n = ((_b = a.value) == null ? void 0 : _b.data.parents.length) === o.length - 1, p = (_c = a.value) == null ? void 0 : _c.data.parents.every((r, y) => r.uid === o[y]);
    if (!n || !p) throw c({ statusCode: 404, statusMessage: `The page with UID "${t}" has incorrect parent structure`, fatal: true });
  }
  D({ title: ((_d = a.value) == null ? void 0 : _d.data.meta_title) || "Nimiq Website", meta: [{ name: "description", content: ((_e = a.value) == null ? void 0 : _e.data.meta_description) || "The most accepted crypto in the World" }] });
  const _ = i(() => {
    var _a2;
    return ((_a2 = a.value) == null ? void 0 : _a2.data.darkHeader) || l || t === "supersimpleswap";
  }), w = i(() => {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = (_a2 = a.value) == null ? void 0 : _a2.data.slices.at(-1)) == null ? void 0 : _b2.primary) == null ? void 0 : _c2.bgColor;
  }), v = i(() => {
    var _a2, _b2;
    return ((_a2 = a.value) == null ? void 0 : _a2.data) && "draft" in a.value.data && ((_b2 = a.value) == null ? void 0 : _b2.data.draft);
  }), x = l;
  return (n, p) => {
    const m = S, r = $;
    return U(), H(r, { "footer-bg-color": e(w), "dark-header": e(_), draft: e(v), "show-socials-hexagon-bg": e(x) }, { default: M(() => {
      var _a2;
      return [N(m, { wrapper: "main", slices: ((_a2 = e(a)) == null ? void 0 : _a2.data.slices) ?? [], components: e(V) }, null, 8, ["slices", "components"])];
    }), _: 1 }, 8, ["footer-bg-color", "dark-header", "draft", "show-socials-hexagon-bg"]);
  };
} });
export {
  R as default
};
