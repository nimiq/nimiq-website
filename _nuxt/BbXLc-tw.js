import { y as m } from "./ClGJWWej.js";
const d = { "E-commerce": "rgb(var(--nq-blue))", Games: "rgb(var(--nq-purple))", Infrastructure: "rgb(var(--nq-red))", Insights: "rgb(var(--nq-green))", Miner: "rgb(var(--nq-neutral) / 1)", Wallets: "rgb(var(--nq-orange))", Bots: "rgb(var(--nq-gold))", Faucet: "#FA7268", Promotion: "#795548" }, n = ["Nimiq Wallet", "Nimiq Pay App", "Crypto Map"];
function f(t, s) {
  return { ...t, isHighlighted: n.includes(t.name), priorityLevel: n.includes(t.name) ? "high" : "low", developer: t.developer || s, color: t.type ? d[t.type] : "#000" };
}
function h({ labelTeamNimiq: t = "Team Nimiq" } = {}) {
  return m(async () => {
    const s = await $fetch("https://ungh.cc/repos/onmax/nimiq-awesome/files/main/src/data/dist/nimiq-apps.json").then((e) => JSON.parse(e.file.contents));
    if (!s) throw new Error("Failed to fetch apps");
    const p = s.filter((e) => n.includes(e.name)), r = s.filter((e) => !n.includes(e.name));
    p.sort((e, o) => n.indexOf(e.name) - n.indexOf(o.name));
    for (let e = r.length - 1; e > 0; e--) {
      const o = Math.floor(Math.random() * (e + 1)), l = r[e];
      r[e] = r[o], r[o] = l;
    }
    const i = [...p, ...r].map((e) => f(e, t)), a = i.filter((e) => e.developer !== "@nimiq"), c = i.filter((e) => e.developer === "@nimiq");
    return { apps: i, spotLightApps: n, communityApps: a, officialApps: c };
  }, "$FMf5SBY9N2");
}
export {
  h as u
};
