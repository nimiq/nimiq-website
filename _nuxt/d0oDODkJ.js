import { _ as g } from "./CDGVCZAD.js";
import { f as l, e as u } from "./DRbUa3ZN.js";
import { g as f } from "./CpsPJSKh.js";
import { d as c, r as y, B as n, o as r, C as t, v as d, h as o, g as m, E as p } from "./B8biU-UE.js";
import "./Fc1-Bd8L.js";
const v = { "bg-neutral-0": "", relative: "", "of-hidden": "" }, b = { stack: "" }, k = ["src"], w = { "f-mt-xl": "", flex: "~ items-center gap-12" }, h = { "font-semibold": "", "f-text-xl": "" }, z = { text: "md:center f-lg", "max-w-32ch": "", "f-mt-xs": "" }, P = c({ __name: "index", props: f(), setup(A) {
  const s = y(false);
  return (e, i) => {
    const a = g;
    return r(), n("section", v, [t("div", b, [t("div", { stack: "", "max-w-none": "", "w-initial": "", style: d(`aspect-ratio: ${("getAspectRatio" in e ? e.getAspectRatio : o(l))(e.slice.primary.backgroundImage)}`) }, [m(a, { loading: "lazy", field: e.slice.primary.backgroundImage }, null, 8, ["field"]), i[1] || (i[1] = t("div", { "bg-gradient": "to-b from-transparent to-neutral-0", "h-200": "", "w-full": "", "pointer-events-none": "", "self-end": "!" }, null, -1))], 4), o(s) ? (r(), n("video", { key: 1, src: ("getUrl" in e ? e.getUrl : o(u))(e.slice.primary.video), style: d(`aspect-ratio: ${("getAspectRatio" in e ? e.getAspectRatio : o(l))(e.slice.primary.poster) * -1}`), autoplay: "", controls: "", loop: "", muted: "", playsinline: "", "rounded-8": "", "bg-neutral-0": "", "max-w-900": "", "w-full": "", shadow: "", "z-1": "" }, null, 12, k)) : (r(), n("button", { key: 0, stack: "", "w-max": "", relative: "", "bg-none": "", onClick: i[0] || (i[0] = (_) => s.value = true) }, [m(a, { loading: "lazy", field: e.slice.primary.poster, "rounded-8": "", "bg-neutral-0": "", "max-w-420": "", "w-full": "", shadow: "" }, null, 8, ["field"]), i[2] || (i[2] = t("div", { bg: "neutral/40", ring: "1.5 neutral/10", stack: "", "rounded-full": "", "size-64": "" }, [t("div", { "text-white": "", "size-32": "", "i-nimiq:triangle-right": "" })], -1))]))]), t("div", w, [i[3] || (i[3] = t("div", { style: { background: "radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" }, stack: "", "rounded-full": "", "shrink-0": "", "size-32": "" }, [t("div", { "i-nimiq:shield": "", text: "f-md white" })], -1)), t("h3", h, p(e.slice.primary.title), 1)]), t("p", z, p(e.slice.primary.subline), 1)]);
  };
} });
export {
  P as default
};
