import { u as w } from "./DSYs-LpM.js";
import { d as y, j as D, c as T, o as j, e as r, R as S, t as g, u as p } from "./7tyaNgEA.js";
import { g as l, c as $, h as A } from "./CD5FwXF0.js";
const B = { flex: "~ items-center gap-x-16 wrap", text: "12 neutral", "nq-label": "" }, v = ["datetime"], E = { flex: "~ gap-1ch", "not-italic": "" }, I = { "text-blue": "" }, L = y({ __name: "ArticleMetadata", props: { date: {}, authors: {} }, setup(t) {
  const s = w(), a = D(() => new Date(t.date).toLocaleDateString(s.value, { day: "numeric", month: "short", year: new Date(t.date).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? void 0 : "numeric" }));
  return (i, o) => (j(), T("div", B, [r("time", { datetime: p(a) }, g(p(a)), 9, v), r("address", E, [o[0] || (o[0] = r("span", { "text-neutral-800": "" }, "by", -1)), r("span", I, g(i.authors), 1)]), S(i.$slots, "after")]));
} }), q = Object.assign(L, { __name: "ArticleMetadata" });
function C({ data: t, uid: s }) {
  const { body: a, text: i, meta_description: o, meta_title: h, subline: u } = t, n = a.filter((e) => e.slice_type === "rich_text").flatMap((e) => e.primary.richText.map((m) => "text" in m ? m.text : "")).join(" ") || i.filter((e) => e.text).map((e) => "text" in e ? e.text : "").join(" ") || "", f = Math.ceil(n.trim().split(/\s+/).length / 225), x = { title: h || l(t.title), description: o || n.trim().split(new RegExp("(?<=[.?!:;])\\s")).slice(0, 2).join(" ") }, d = l(u).slice(0, 120);
  if (!t.publish_date) throw new Error(`Missing publish_date for ${s}`);
  if (!t.image) throw new Error(`Missing image for ${s}`);
  const _ = `/blog/${s}`, b = new Date(t.publish_date), c = t.image || t.meta_image, M = $(c);
  return { prose: n, readingTime: f, meta: x, abstract: d, uid: s, hasImage: A(t.image), href: `/blog/${s}`, draft: t.draft, image: c, imageURL: M, title: t.title, date: b, authors: t.authors.map((e) => e.name), url: _, titleText: l(t.title) };
}
export {
  q as A,
  C as g
};
