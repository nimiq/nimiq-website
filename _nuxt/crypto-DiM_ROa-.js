self.document = { currentScript: { src: self.location.href } };
(function() {
  "use strict";
  var i = {}, n;
  function o() {
    if (n) return i;
    n = 1, importScripts("./comlink.min.js", "./crypto-wasm/index.js");
    const { CryptoUtils: r } = wasm_bindgen;
    return async function() {
      console.log("Initializing crypto WASM worker"), await wasm_bindgen("./crypto-wasm/index_bg.wasm"), Comlink.expose(r), self.postMessage("NIMIQ_ONLOAD");
    }(), i;
  }
  o();
})();
