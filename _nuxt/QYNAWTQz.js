import { u as w } from "./uct_JH4F.js";
import { d as y, a as D, B as T, o as B, C as r, l as S, E as g, h as p } from "./B8biU-UE.js";
import { g as l, c as $, h as j } from "./DRbUa3ZN.js";
const A = { flex: "~ items-center gap-x-16 wrap", text: "12 neutral", lh: "[2]", "nq-label": "" }, E = ["datetime"], v = { flex: "~ gap-1ch", "not-italic": "" }, I = { "text-blue": "" }, L = y({ __name: "ArticleMetadata", props: { date: {}, authors: {} }, setup(t) {
  const s = w(), a = D(() => new Date(t.date).toLocaleDateString(s.value, { day: "numeric", month: "short", year: new Date(t.date).getFullYear() === (/* @__PURE__ */ new Date()).getFullYear() ? void 0 : "numeric" }));
  return (i, o) => (B(), T("div", A, [r("time", { datetime: p(a) }, g(p(a)), 9, E), r("address", v, [o[0] || (o[0] = r("span", { "text-neutral-800": "" }, "by", -1)), r("span", I, g(i.authors), 1)]), S(i.$slots, "after")]));
} }), q = Object.assign(L, { __name: "ArticleMetadata" });
function N({ data: t, uid: s }) {
  const { body: a, text: i, meta_description: o, meta_title: h, subline: u } = t, n = a.filter((e) => e.slice_type === "rich_text").flatMap((e) => e.primary.richText.map((m) => "text" in m ? m.text : "")).join(" ") || i.filter((e) => e.text).map((e) => "text" in e ? e.text : "").join(" ") || "", f = Math.ceil(n.trim().split(/\s+/).length / 225), x = { title: h || l(t.title), description: o || n.trim().split(new RegExp("(?<=[.?!:;])\\s")).slice(0, 2).join(" ") }, d = l(u).slice(0, 120);
  if (!t.publish_date) throw new Error(`Missing publish_date for ${s}`);
  if (!t.image) throw new Error(`Missing image for ${s}`);
  const _ = `/blog/${s}`, b = new Date(t.publish_date), c = t.image || t.meta_image, M = $(c);
  return { prose: n, readingTime: f, meta: x, abstract: d, uid: s, hasImage: j(t.image), href: `/blog/${s}`, draft: t.draft, image: c, imageURL: M, title: t.title, date: b, authors: t.authors.map((e) => e.name), url: _, titleText: l(t.title) };
}
export {
  q as A,
  N as g
};
