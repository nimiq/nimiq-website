import { _ as c } from "./CinM0rzx.js";
import { d as h, A as p, j as l, l as r, h as t, o as s, e as v, f as m, k as n, p as i, t as u } from "./Dzy_QPZd.js";
const _ = { key: 0, flex: "~ items-center gap-16 wrap" }, k = { ring: "1.5 white", outline: "1.5 ~ neutral-400", capitalize: "", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-tertiary": "" }, b = { key: 1, "shrink-0": "", title: "Prismic Server-Side Rendering is enabled. This will be hidden in production", ring: "1.5 white", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-blue": "" }, w = { key: 2, "shrink-0": "", title: "This item is a draft in the CMS. This will be hidden in production", ring: "1.5 white", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-orange": "" }, q = h({ __name: "PageInfo", props: { withEnv: { type: Boolean, default: false }, draft: { type: Boolean, default: false } }, setup(y) {
  const { isProduction: f, name: a } = p().public.environment, { enablePrismicSSR: d } = p().public;
  return (o, e) => {
    const g = c;
    return !t(f) && (o.draft || o.withEnv || t(d)) ? (s(), l("div", _, [o.withEnv ? (s(), v(g, { key: 0, "shrink-0": "" }, { trigger: m(() => [n("div", k, u(t(a)), 1)]), content: m(() => [n("p", null, [e[0] || (e[0] = i(" You are previewing the ")), n("strong", null, u(t(a)), 1), e[1] || (e[1] = i(" environment. This is a development-only message. "))]), e[2] || (e[2] = n("p", null, [i(" This environment is not intended for production use and may contain incomplete or unstable features. "), n("a", { href: "https://github.com/nimiq/nimiq-website?tab=readme-ov-file#runtime-environments", target: "_blank", "nq-arrow": "" }, "Learn more")], -1))]), _: 1 })) : r("", true), t(d) ? (s(), l("div", b, e[3] || (e[3] = [n("div", { "i-nimiq:server": "" }, null, -1), i(" Prismic SSR ")]))) : r("", true), o.draft ? (s(), l("div", w, e[4] || (e[4] = [n("div", { "i-nimiq:locked-lock": "" }, null, -1), i(" Draft ")]))) : r("", true)])) : r("", true);
  };
} }), T = Object.assign(q, { __name: "PageInfo" });
export {
  T as _
};
