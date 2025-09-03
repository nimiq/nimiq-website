self.document = { currentScript: { src: self.location.href } };
(function() {
  "use strict";
  var i = {}, t;
  function d() {
    if (t) return i;
    t = 1, importScripts("./comlink.min.js", "./worker-wasm/index.js");
    const { Client: o } = wasm_bindgen;
    Comlink.transferHandlers.set("function", { canHandle: (e) => false, deserialize(e) {
      return Comlink.transferHandlers.get("proxy").deserialize(e);
    } }), Comlink.transferHandlers.set("plain", { canHandle: (e) => false, deserialize(e) {
      return e;
    } });
    let a = false;
    async function l(e) {
      if (a) throw new Error("Already initialized");
      a = true, console.log("Initializing client WASM worker"), await wasm_bindgen("./worker-wasm/index_bg.wasm");
      const r = await o.create(e);
      Comlink.expose(r);
    }
    return self.addEventListener("message", async (e) => {
      const r = e.data;
      if (r === "NIMIQ_CHECKREADY") {
        self.postMessage("NIMIQ_READY");
        return;
      }
      const { type: c, config: n } = r;
      if (c === "NIMIQ_INIT") {
        (!n || typeof n != "object") && (n = {});
        try {
          await l(n), self.postMessage({ ok: true });
        } catch (s) {
          self.postMessage({ ok: false, error: s.message, stack: s.stack });
        }
      }
    }), console.debug("Client WASM worker ready"), i;
  }
  d();
})();
