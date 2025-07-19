import { z as m } from "./g1xKa6TI.js";
const d = { "E-commerce": "rgb(var(--nq-blue))", Games: "rgb(var(--nq-purple))", Infrastructure: "rgb(var(--nq-red))", Insights: "rgb(var(--nq-green))", Miner: "rgb(var(--nq-neutral) / 1)", Wallets: "rgb(var(--nq-orange))", Bots: "rgb(var(--nq-gold))", Faucet: "#FA7268", Promotion: "#795548" }, r = ["Nimiq Wallet", "Nimiq Pay App", "Crypto Map"];
function u(t, o) {
  return { ...t, isHighlighted: r.includes(t.name), priorityLevel: r.includes(t.name) ? "high" : "low", developer: t.developer || o, color: t.type ? d[t.type] : "#000" };
}
function h({ labelTeamNimiq: t = "Team Nimiq" } = {}) {
  return m(async () => {
    const o = await $fetch("https://raw.githubusercontent.com/onmax/nimiq-awesome/main/src/data/dist/nimiq-apps.json").then((e) => JSON.parse(e));
    if (!o) throw new Error("Failed to fetch apps");
    const a = o.filter((e) => r.includes(e.name)), n = o.filter((e) => !r.includes(e.name));
    a.sort((e, s) => r.indexOf(e.name) - r.indexOf(s.name));
    for (let e = n.length - 1; e > 0; e--) {
      const s = Math.floor(Math.random() * (e + 1)), l = n[e];
      n[e] = n[s], n[s] = l;
    }
    const i = [...a, ...n].map((e) => u(e, t)), p = i.filter((e) => e.developer !== "@nimiq"), c = i.filter((e) => e.developer === "@nimiq");
    return { apps: i, spotLightApps: r, communityApps: p, officialApps: c };
  }, "$FMf5SBY9N2");
}
export {
  h as u
};
