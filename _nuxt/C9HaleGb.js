import { d as u, B as g, c as a, o as n, e as t, h as r, u as s, a as d, D as f, t as m } from "./C95QRNzc.js";
import { g as c } from "./CpsPJSKh.js";
import { f as p, e as y } from "./CCkBGt8y.js";
const v = { "bg-neutral-0": "", relative: "", "of-hidden": "" }, b = { stack: "" }, k = ["src"], w = { "f-mt-xl": "", flex: "~ items-center gap-12" }, h = { "font-semibold": "", "f-text-xl": "" }, z = { text: "md:center f-lg", "max-w-32ch": "", "f-mt-xs": "" }, x = u({ __name: "index", props: c(), setup(A) {
  const o = g(false);
  return (e, i) => {
    const l = f;
    return n(), a("section", v, [t("div", b, [t("div", { stack: "", "max-w-none": "", "w-initial": "", style: r(`aspect-ratio: ${("getAspectRatio" in e ? e.getAspectRatio : s(p))(e.slice.primary.backgroundImage)}`) }, [d(l, { loading: "lazy", field: e.slice.primary.backgroundImage }, null, 8, ["field"]), i[1] || (i[1] = t("div", { "bg-gradient": "to-b from-transparent to-neutral-0", "h-200": "", "w-full": "", "pointer-events-none": "", "self-end": "!" }, null, -1))], 4), s(o) ? (n(), a("video", { key: 1, src: ("getUrl" in e ? e.getUrl : s(y))(e.slice.primary.video), style: r(`aspect-ratio: ${("getAspectRatio" in e ? e.getAspectRatio : s(p))(e.slice.primary.poster) * -1}`), autoplay: "", controls: "", loop: "", muted: "", playsinline: "", "rounded-8": "", "bg-neutral-0": "", "max-w-900": "", "w-full": "", shadow: "", "z-1": "" }, null, 12, k)) : (n(), a("button", { key: 0, stack: "", "w-max": "", relative: "", "bg-none": "", onClick: i[0] || (i[0] = (R) => o.value = true) }, [d(l, { loading: "lazy", field: e.slice.primary.poster, "rounded-8": "", "bg-neutral-0": "", "max-w-420": "", "w-full": "", shadow: "" }, null, 8, ["field"]), i[2] || (i[2] = t("div", { bg: "neutral/40", ring: "1.5 neutral/10", stack: "", "rounded-full": "", "size-64": "" }, [t("div", { "text-white": "", "size-32": "", "i-nimiq:triangle-right": "" })], -1))]))]), t("div", w, [i[3] || (i[3] = t("div", { style: { background: "radial-gradient(78.95% 73.1% at 12.5% 14.72%, #0582CA 0%, rgba(5, 130, 202, 0.62) 100%)" }, stack: "", "rounded-full": "", "shrink-0": "", "size-32": "" }, [t("div", { "i-nimiq:shield": "", text: "f-md white" })], -1)), t("h3", h, m(e.slice.primary.title), 1)]), t("p", z, m(e.slice.primary.subline), 1)]);
  };
} });
export {
  x as default
};
