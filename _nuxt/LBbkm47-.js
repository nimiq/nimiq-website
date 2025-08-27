import { _ as x } from "./Cl6nVLLe.js";
import { d as g, aj as h, w as y, ai as w, c as b, j as a, o as s, k as r, F as k, r as C, g as c, f as P, t as j, ab as B, h as E } from "./BdODHn_3.js";
import { g as A } from "./CpsPJSKh.js";
import "./DFn-vR6U.js";
const v = { "bg-neutral-0": "", "pt-0": "!" }, D = { grid: "~ cols-[repeat(auto-fit,minmax(200px,368px))] gap-16 justify-center" }, F = { "font-semibold": "", "f-text-xl": "" }, I = g({ __name: "index", props: A(), async setup(L) {
  let e, n;
  const { client: i } = h(), { data: l } = ([e, n] = y(async () => w("exchanges", async () => {
    try {
      return await i.getAllByType("exchange").then((t) => t.map((o) => o.data));
    } catch (t) {
      throw console.error("Exchanges not found:", t), b({ statusCode: 404, statusMessage: "Exchanges not found", fatal: true });
    }
  }, { server: true })), e = await e, n(), e);
  return (t, o) => {
    const _ = x, m = B;
    return s(), a("section", v, [r("ul", D, [(s(true), a(k, null, C(E(l), ({ link: p, logo: u, name: f }, d) => (s(), a("li", { key: d }, [c(m, { field: p, flex: "~ row items-center gap-x-16", "nq-hoverable": "", target: "_blank" }, { default: P(() => [c(_, { field: u, "h-full": "", "w-40": "", "object-contain": "", flex: "~ items-center" }, null, 8, ["field"]), r("h3", F, j(f), 1)]), _: 2 }, 1032, ["field"])]))), 128))])]);
  };
} });
export {
  I as default
};
