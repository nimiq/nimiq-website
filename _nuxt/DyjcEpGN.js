import { d as l, u as m, v as p, x as _, w as g, c as f, b as d, e as h, o as x, f as w, g as b, _ as y, h as r, i as v } from "./BdODHn_3.js";
import { c as B } from "./DnAJ4uU1.js";
import { u as N } from "./CvS46tUD.js";
const $ = l({ __name: "index", async setup(C) {
  let e, t;
  const o = m(), a = p(Number(o.query.page) || 1);
  _(() => o.query.page, (n) => {
    a.value = Number(n) || 1;
  });
  const { data: s } = ([e, t] = g(() => N("blog")), e = await e, t(), e);
  if (!s.value) throw f({ statusCode: 404, statusMessage: "Blog page not found", fatal: true });
  const c = s;
  return d({ title: a.value === 1 ? "Blog" : `Blog - Page ${a.value}`, meta: [{ name: "description", content: "Latest articles and insights from the Nimiq team" }] }), (n, P) => {
    const u = y, i = v;
    return x(), h(i, { "footer-bg-color": "grey", "dark-header": false, "show-socials-hexagon-bg": false }, { default: w(() => {
      var _a, _b;
      return [b(u, { wrapper: "main", slices: ((_b = (_a = r(c)) == null ? void 0 : _a.data) == null ? void 0 : _b.slices) ?? [], components: r(B) }, null, 8, ["slices", "components"])];
    }), _: 1 });
  };
} });
export {
  $ as default
};
