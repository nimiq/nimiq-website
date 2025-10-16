import { _ as x } from "./CDGVCZAD.js";
import { d as g, an as h, w as y, am as w, c as C, B as a, o as n, C as r, H as b, I as k, g as c, f as B, E, ag as P, h as A } from "./B8biU-UE.js";
import { g as j } from "./CpsPJSKh.js";
import "./Fc1-Bd8L.js";
const v = { "bg-neutral-0": "", "pt-0": "!" }, D = { grid: "~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center" }, I = { "font-semibold": "", "f-text-xl": "" }, F = g({ __name: "index", props: j(), async setup(L) {
  let e, s;
  const { client: i } = h(), { data: l } = ([e, s] = y(async () => w("exchanges", async () => {
    try {
      return await i.getAllByType("exchange").then((t) => t.map((o) => o.data));
    } catch (t) {
      throw console.error("Exchanges not found:", t), C({ statusCode: 404, statusMessage: "Exchanges not found", fatal: true });
    }
  }, { server: true })), e = await e, s(), e);
  return (t, o) => {
    const _ = x, m = P;
    return n(), a("section", v, [r("ul", D, [(n(true), a(b, null, k(A(l), ({ link: p, logo: u, name: f }, d) => (n(), a("li", { key: d }, [c(m, { field: p, flex: "~ row items-center gap-x-16", "nq-hoverable": "", target: "_blank" }, { default: B(() => [c(_, { field: u, "h-full": "", "w-40": "", "object-contain": "", flex: "~ items-center" }, null, 8, ["field"]), r("h3", I, E(f), 1)]), _: 2 }, 1032, ["field"])]))), 128))])]);
  };
} });
export {
  F as default
};
