import { d as l, u as m, r as p, Q as _, w as g, c as f, b as d, e as h, o as x, f as w, g as b, _ as y, h as r, i as B } from "./B8biU-UE.js";
import { c as N } from "./ClMfwJO2.js";
import { u as v } from "./DWbXAw--.js";
const $ = l({ __name: "index", async setup(C) {
  let e, t;
  const o = m(), a = p(Number(o.query.page) || 1);
  _(() => o.query.page, (n) => {
    a.value = Number(n) || 1;
  });
  const { data: s } = ([e, t] = g(() => v("blog")), e = await e, t(), e);
  if (!s.value) throw f({ statusCode: 404, statusMessage: "Blog page not found", fatal: true });
  const c = s;
  return d({ title: a.value === 1 ? "Blog" : `Blog - Page ${a.value}`, meta: [{ name: "description", content: "Latest articles and insights from the Nimiq team" }] }), (n, P) => {
    const u = y, i = B;
    return x(), h(i, { "footer-bg-color": "grey", "dark-header": false, "show-socials-hexagon-bg": false }, { default: w(() => {
      var _a, _b;
      return [b(u, { wrapper: "main", slices: ((_b = (_a = r(c)) == null ? void 0 : _a.data) == null ? void 0 : _b.slices) ?? [], components: r(N) }, null, 8, ["slices", "components"])];
    }), _: 1 });
  };
} });
export {
  $ as default
};
