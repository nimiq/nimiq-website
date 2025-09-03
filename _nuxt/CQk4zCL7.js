import { _ as c } from "./Dg3srmdY.js";
import { d as v, A as m, j as l, l as r, h as t, o as s, e as _, f as p, k as n, p as i, t as u } from "./BSLliBk6.js";
const h = { key: 0, flex: "~ items-center gap-16" }, b = { ring: "1.5 white", outline: "1.5 ~ neutral-400", capitalize: "", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-tertiary": "" }, w = { key: 1, title: "Prismic Server-Side Rendering is enabled. This will be hidden in production", ring: "1.5 white", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-blue": "" }, k = { key: 2, title: "This item is a draft in the CMS. This will be hidden in production", ring: "1.5 white", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-orange": "" }, q = v({ __name: "PageInfo", props: { withEnv: { type: Boolean, default: false }, draft: { type: Boolean, default: false } }, setup(y) {
  const { isProduction: f, name: a } = m().public.environment, { enablePrismicSSR: d } = m().public;
  return (o, e) => {
    const g = c;
    return !t(f) && (o.draft || o.withEnv || t(d)) ? (s(), l("div", h, [o.withEnv ? (s(), _(g, { key: 0 }, { trigger: p(() => [n("div", b, u(t(a)), 1)]), content: p(() => [n("p", null, [e[0] || (e[0] = i(" You are previewing the ")), n("strong", null, u(t(a)), 1), e[1] || (e[1] = i(" environment. This is a development-only message. "))]), e[2] || (e[2] = n("p", null, [i(" This environment is not intended for production use and may contain incomplete or unstable features. "), n("a", { href: "https://github.com/nimiq/nimiq-website?tab=readme-ov-file#runtime-environments", target: "_blank", "nq-arrow": "" }, "Learn more")], -1))]), _: 1 })) : r("", true), t(d) ? (s(), l("div", w, e[3] || (e[3] = [n("div", { "i-nimiq:server": "" }, null, -1), i(" Prismic SSR ")]))) : r("", true), o.draft ? (s(), l("div", k, e[4] || (e[4] = [n("div", { "i-nimiq:locked-lock": "" }, null, -1), i(" Draft ")]))) : r("", true)])) : r("", true);
  };
} }), T = Object.assign(q, { __name: "PageInfo" });
export {
  T as _
};
