import { d as B, p as U, q as H, s as N, v as T, x as i, j as d, k as L, b as V, w as j, u as o, l as q, y as A, o as O, a as R, z } from "./7tyaNgEA.js";
import { c as E } from "./CpH_97JW.js";
import { g as v, h as G } from "./CD5FwXF0.js";
import { u as J } from "./BbgBCNXr.js";
import { s as Z } from "./DTqfM-cU.js";
const tt = B({ __name: "[...uid]", async setup(F) {
  var _a, _b, _c, _d, _e, _f, _g;
  let c, p;
  const m = U().params, n = typeof m.uid == "string" ? [] : (m == null ? void 0 : m.uid.filter(Boolean)) || [], y = n.length >= 2, a = n.at(-1) || "home", u = a === "home", { showDrafts: f } = H().public, { client: C } = N(), { data: t } = ([c, p] = T(() => A(`prismic-page-${n.join("-")}`, () => C.getByUID("page", a).catch((s) => {
    throw console.error(`Page with UID "${a}" not found in Prismic:`, s), i({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }))), c = await c, p(), c);
  if (!t.value) throw console.error(`Page with UID "${a}" not found`), i({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (!f && ((_a = t.value) == null ? void 0 : _a.data.draft)) throw console.error(`Page with UID "${a}" is a draft and showDraft is set to \`${f}\``), i({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (t.value.uid !== a) throw console.error(`Page with UID "${a}" not found: ${JSON.stringify(t.value)}`), i({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  if (y) {
    const s = ((_b = t.value) == null ? void 0 : _b.data.parents.length) === n.length - 1, _ = (_c = t.value) == null ? void 0 : _c.data.parents.every((l, k) => l.uid === n[k]);
    if (!s || !_) throw i({ statusCode: 404, statusMessage: `The page with UID "${a}" has incorrect parent structure`, fatal: true });
  }
  const P = d(() => {
    var _a2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data.darkHeader) || u || a === "supersimpleswap";
  }), x = d(() => {
    var _a2, _b2, _c2;
    return (_c2 = (_b2 = (_a2 = t.value) == null ? void 0 : _a2.data.slices.at(-1)) == null ? void 0 : _b2.primary) == null ? void 0 : _c2.bgColor;
  }), D = d(() => {
    var _a2, _b2;
    return ((_a2 = t.value) == null ? void 0 : _a2.data) && "draft" in t.value.data && ((_b2 = t.value) == null ? void 0 : _b2.data.draft);
  }), b = u, e = t.value.data.slices.at(0), { meta_title: I, meta_description: M, meta_image: g } = t.value.data, $ = e ? v(((_d = e.primary) == null ? void 0 : _d.title) || ((_e = e.primary) == null ? void 0 : _e.headline)) : void 0, S = e ? v(((_f = e.primary) == null ? void 0 : _f.description) || ((_g = e.primary) == null ? void 0 : _g.subline)) : void 0, h = I || $ || "Nimiq";
  let r = M || S || "";
  if (u) {
    const { cryptoMapLocationsCount: s } = J();
    r = r.replace(/\{\{\s*locations\s*\}\}/, s.value.toString());
  }
  return L({ title: h, meta: r ? [{ name: "description", content: r }] : [] }), G(g) && Z({ title: h, subline: r, image: g }), (s, _) => {
    const w = z, l = q;
    return O(), V(l, { "footer-bg-color": o(x), "dark-header": o(P), draft: o(D), "show-socials-hexagon-bg": o(b) }, { default: j(() => {
      var _a2;
      return [R(w, { wrapper: "main", slices: ((_a2 = o(t)) == null ? void 0 : _a2.data.slices) ?? [], components: o(E) }, null, 8, ["slices", "components"])];
    }), _: 1 }, 8, ["footer-bg-color", "dark-header", "draft", "show-socials-hexagon-bg"]);
  };
} });
export {
  tt as default
};
