import { u as w } from "./Bo9A3gK3.js";
import { d as y, a as D, j as T, o as j, k as r, Q as S, t as g, h as p } from "./BdODHn_3.js";
import { g as l, c as $, h as A } from "./DGIQ2ECZ.js";
const B = { flex: "~ items-center gap-x-16 wrap", text: "12 neutral", lh: "[2]", "nq-label": "" }, k = ["datetime"], v = { flex: "~ gap-1ch", "not-italic": "" }, E = { "text-blue": "" }, I = y({ __name: "ArticleMetadata", props: { date: {}, authors: {} }, setup(t) {
  const s = w(), a = D(() => new Date(t.date).toLocaleDateString(s.value, { day: "numeric", month: "short", year: new Date(t.date).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? void 0 : "numeric" }));
  return (i, o) => (j(), T("div", B, [r("time", { datetime: p(a) }, g(p(a)), 9, k), r("address", v, [o[0] || (o[0] = r("span", { "text-neutral-800": "" }, "by", -1)), r("span", E, g(i.authors), 1)]), S(i.$slots, "after")]));
} }), C = Object.assign(I, { __name: "ArticleMetadata" });
function N({ data: t, uid: s }) {
  const { body: a, text: i, meta_description: o, meta_title: h, subline: u } = t, n = a.filter((e) => e.slice_type === "rich_text").flatMap((e) => e.primary.richText.map((m) => "text" in m ? m.text : "")).join(" ") || i.filter((e) => e.text).map((e) => "text" in e ? e.text : "").join(" ") || "", f = Math.ceil(n.trim().split(/\s+/).length / 225), x = { title: h || l(t.title), description: o || n.trim().split(new RegExp("(?<=[.?!:;])\\s")).slice(0, 2).join(" ") }, d = l(u).slice(0, 120);
  if (!t.publish_date) throw new Error(`Missing publish_date for ${s}`);
  if (!t.image) throw new Error(`Missing image for ${s}`);
  const _ = `/blog/${s}`, b = new Date(t.publish_date), c = t.image || t.meta_image, M = $(c);
  return { prose: n, readingTime: f, meta: x, abstract: d, uid: s, hasImage: A(t.image), href: `/blog/${s}`, draft: t.draft, image: c, imageURL: M, title: t.title, date: b, authors: t.authors.map((e) => e.name), url: _, titleText: l(t.title) };
}
export {
  C as A,
  N as g
};
