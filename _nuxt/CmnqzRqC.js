import { _ as c } from "./D-k9HlQ8.js";
import { d as h, K as m, B as l, x as r, h as t, o as s, e as v, f as p, C as n, G as i, E as u } from "./B8biU-UE.js";
const _ = { key: 0, flex: "~ items-center gap-16 wrap" }, b = { ring: "1.5 white", outline: "1.5 ~ neutral-400", capitalize: "", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-tertiary": "" }, k = { key: 1, "shrink-0": "", title: "Prismic Server-Side Rendering is enabled. This will be hidden in production", ring: "1.5 white", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-blue": "" }, w = { key: 2, "shrink-0": "", title: "This item is a draft in the CMS. This will be hidden in production", ring: "1.5 white", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-orange": "" }, q = h({ __name: "PageInfo", props: { withEnv: { type: Boolean, default: false }, draft: { type: Boolean, default: false } }, setup(x) {
  const { isProduction: f, name: a } = m().public.environment, { enablePrismicSSR: d } = m().public;
  return (o, e) => {
    const g = c;
    return !t(f) && (o.draft || o.withEnv || t(d)) ? (s(), l("div", _, [o.withEnv ? (s(), v(g, { key: 0, "shrink-0": "" }, { trigger: p(() => [n("div", b, u(t(a)), 1)]), content: p(() => [n("p", null, [e[0] || (e[0] = i(" You are previewing the ")), n("strong", null, u(t(a)), 1), e[1] || (e[1] = i(" environment. This is a development-only message. "))]), e[2] || (e[2] = n("p", null, [i(" This environment is not intended for production use and may contain incomplete or unstable features. "), n("a", { href: "https://github.com/nimiq/nimiq-website?tab=readme-ov-file#runtime-environments", target: "_blank", "nq-arrow": "" }, "Learn more")], -1))]), _: 1 })) : r("", true), t(d) ? (s(), l("div", k, e[3] || (e[3] = [n("div", { "i-nimiq:server": "" }, null, -1), i(" Prismic SSR ")]))) : r("", true), o.draft ? (s(), l("div", w, e[4] || (e[4] = [n("div", { "i-nimiq:locked-lock": "" }, null, -1), i(" Draft ")]))) : r("", true)])) : r("", true);
  };
} }), B = Object.assign(q, { __name: "PageInfo" });
export {
  B as _
};
