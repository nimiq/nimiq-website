import { _ as f } from "./B6YpvMVi.js";
import { d as g, p as _, c as l, f as o, u as r, o as s, b as c, w as m, e as t, g as i, t as p } from "./C95QRNzc.js";
const v = { key: 0, flex: "~ items-center gap-16" }, h = { ring: "1.5 white", outline: "1.5 ~ neutral-400", capitalize: "", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-tertiary": "" }, w = { key: 1, title: "This item is a draft in the CMS. This will be hidden in production", ring: "1.5 white", "f-text-2xs": "", "nq-pill-lg": "", "nq-pill-orange": "" }, b = g({ __name: "PageInfo", props: { withEnv: { type: Boolean, default: false }, draft: { type: Boolean, default: false } }, setup(k) {
  const { isProduction: u, name: a } = _().public.environment;
  return (n, e) => {
    const d = f;
    return !r(u) && (n.draft || n.withEnv) ? (s(), l("div", v, [n.withEnv ? (s(), c(d, { key: 0 }, { trigger: m(() => [t("div", h, p(r(a)), 1)]), content: m(() => [t("p", null, [e[0] || (e[0] = i(" You are previewing the ")), t("strong", null, p(r(a)), 1), e[1] || (e[1] = i(" environment. This is a development-only message. "))]), e[2] || (e[2] = t("p", null, [i(" This environment is not intended for production use and may contain incomplete or unstable features. "), t("a", { href: "https://github.com/nimiq/nimiq-website?tab=readme-ov-file#runtime-environments", target: "_blank", "nq-arrow": "" }, "Learn more")], -1))]), _: 1 })) : o("", true), n.draft ? (s(), l("div", w, e[3] || (e[3] = [t("div", { "i-nimiq:locked-lock": "" }, null, -1), i(" Draft ")]))) : o("", true)])) : o("", true);
  };
} }), x = Object.assign(b, { __name: "PageInfo" });
export {
  x as _
};
