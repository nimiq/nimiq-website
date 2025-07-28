import { s as r, z as e } from "./BguRs3jF.js";
const d = { x: "x", telegram: "telegram", discord: "discord", facebook: "facebook", github: "github", instagram: "instagram", nimiqForum: "nimiqForum", reddit: "reddit", youtube: "youtube" }, s = { x: { color: "oklch(0 0 0)", icon: "i-nimiq:logos-twitter-mono" }, telegram: { color: "oklch(0.6 0.14119 241.5546)", icon: "i-nimiq:logos-telegram-mono scale-97" }, reddit: { color: "oklch(0.66 0.229356 35.4025)", icon: "i-nimiq:logos-reddit-mono scale-105" }, github: { color: "oklch(0.32 0 0)", icon: "i-nimiq:logos-github-mono" }, youtube: { color: "oklch(0.63 0.2577 29.23)", icon: "i-nimiq:logos-youtube-mono scale-85" }, discord: { color: "oklch(0.58 0.2091 273.85)", icon: "i-nimiq:logos-discord-mono scale-86" }, nimiqForum: { color: "oklch(0.79 0.1593 85.61)", icon: "i-nimiq:logos-nimiq-forum-mono" }, facebook: { color: "oklch(0.52 0.1259 262.97)", icon: "i-nimiq:logos-facebook-mono" }, instagram: { color: "oklch(0.56 0.1907 350.4)", icon: "i-nimiq:logos-instagram-mono" } };
function u() {
  const { client: c } = r();
  return e("$socialMedias", async () => {
    const n = await c.getByType("socialMedia").then((o) => o.results);
    if (!(n == null ? void 0 : n.length)) throw new Error("Social media data not found");
    return Object.fromEntries(Object.entries(s).map(([o, t]) => {
      const i = n.find((a) => a.data.platform === o);
      if (!i) throw new Error(`Platform data not found for ${o}`);
      return [o, { ...i.data, id: i.id, ...t }];
    }));
  }, { default() {
    return {};
  } });
}
export {
  d as S,
  u
};
