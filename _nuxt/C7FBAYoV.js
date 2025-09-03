import { I as l, A as s, J as c, K as u } from "./BSLliBk6.js";
const p = l((e) => {
  var _a;
  const { public: { environment: o, enableDevAnalytics: n } } = s(), a = o.name === "local" && n, t = c("nimiq-consent", { default: () => null, maxAge: 3600 * 24 * 100 });
  if (((_a = t.value) == null ? void 0 : _a.accepted) && t.value.version === "1.0") {
    if (a) {
      console.log("\u{1F4CA} [DEV] Would track page view:", { url: e.fullPath, title: (document == null ? void 0 : document.title) || "Loading...", matomo: `setCustomUrl: ${e.fullPath}, setDocumentTitle: ${(document == null ? void 0 : document.title) || "Loading..."}, trackPageView` });
      return;
    }
    u(() => {
      if (window._paq) try {
        window._paq.push(["setCustomUrl", e.fullPath]), window._paq.push(["setDocumentTitle", document.title]), window._paq.push(["trackPageView"]);
      } catch (i) {
        console.error("Failed to track page view:", i);
      }
    });
  }
});
export {
  p as default
};
