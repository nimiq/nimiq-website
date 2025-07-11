import { d as T, B as x, E as G, G as V, H as g, b as J, w as Y, u as $, o as j, a as X, A as Q } from "./gdLxT4Lf.js";
import { g as W } from "./CqkleIqs.js";
import { c as K } from "./Bvmk-0R2.js";
const A = (s, e = 16) => {
  let t = 0, i = null;
  return function(...r) {
    const n = Date.now(), o = n - t;
    o >= e ? (s.apply(this, r), t = n) : (i && clearTimeout(i), i = setTimeout(() => {
      s.apply(this, r), t = Date.now();
    }, e - o));
  };
};
var _;
(function(s) {
  s.SetActiveSlice = "setActiveSlice", s.SetSliceZoneSize = "setSliceZoneSize";
})(_ || (_ = {}));
var h;
(function(s) {
  s.Ping = "ping", s.SetSliceZone = "setSliceZone", s.ScrollToSlice = "scrollToSlice";
})(h || (h = {}));
var c;
(function(s) {
  s.Slices = "slices", s.ActiveSlice = "activeSlice", s.Message = "message";
})(c || (c = {}));
const k = { 100: "Continue", 101: "Switching Protocols", 102: "Processing", 103: "Early Hints", 200: "OK", 201: "Created", 202: "Accepted", 203: "Non-Authoritative Information", 204: "No Content", 205: "Reset Content", 206: "Partial Content", 207: "Multi-Status", 208: "Already Reported", 226: "IM Used", 300: "Multiple Choices", 301: "Moved Permanently", 302: "Found", 303: "See Other", 304: "Not Modified", 305: "Use Proxy", 307: "Temporary Redirect", 308: "Permanent Redirect", 400: "Bad Request", 401: "Unauthorized", 402: "Payment Required", 403: "Forbidden", 404: "Not Found", 405: "Method Not Allowed", 406: "Not Acceptable", 407: "Proxy Authentication Required", 408: "Request Timeout", 409: "Conflict", 410: "Gone", 411: "Length Required", 412: "Precondition Failed", 413: "Payload Too Large", 414: "URI Too Long", 415: "Unsupported Media Type", 416: "Range Not Satisfiable", 417: "Expectation Failed", 418: "I'm a Teapot", 421: "Misdirected Request", 422: "Unprocessable Entity", 423: "Locked", 424: "Failed Dependency", 425: "Too Early", 426: "Upgrade Required", 428: "Precondition Required", 429: "Too Many Requests", 431: "Request Header Fields Too Large", 451: "Unavailable For Legal Reasons", 500: "Internal Server Error", 501: "Not Implemented", 502: "Bad Gateway", 503: "Service Unavailable", 504: "Gateway Timeout", 505: "HTTP Version Not Supported", 506: "Variant Also Negotiates", 507: "Insufficient Storage", 508: "Loop Detected", 509: "Bandwidth Limit Exceeded", 510: "Not Extended", 511: "Network Authentication Required" };
/*!
* statuses
* Copyright(c) 2014 Jonathan Ong
* Copyright(c) 2016 Douglas Christopher Wilson
* MIT Licensed
*/
var v, M;
function ee() {
  if (M) return v;
  M = 1;
  var s = k;
  v = n, n.message = s, n.code = e(s), n.codes = t(s), n.redirect = { 300: true, 301: true, 302: true, 303: true, 305: true, 307: true, 308: true }, n.empty = { 204: true, 205: true, 304: true }, n.retry = { 502: true, 503: true, 504: true };
  function e(o) {
    var a = {};
    return Object.keys(o).forEach(function(P) {
      var U = o[P], B = Number(P);
      a[U.toLowerCase()] = B;
    }), a;
  }
  function t(o) {
    return Object.keys(o).map(function(l) {
      return Number(l);
    });
  }
  function i(o) {
    var a = o.toLowerCase();
    if (!Object.prototype.hasOwnProperty.call(n.code, a)) throw new Error('invalid status message: "' + o + '"');
    return n.code[a];
  }
  function r(o) {
    if (!Object.prototype.hasOwnProperty.call(n.message, o)) throw new Error("invalid status code: " + o);
    return n.message[o];
  }
  function n(o) {
    if (typeof o == "number") return r(o);
    if (typeof o != "string") throw new TypeError("code must be a number or string");
    var a = parseInt(o, 10);
    return isNaN(a) ? i(o) : r(a);
  }
  return v;
}
var te = ee();
const C = W(te);
var b;
(function(s) {
  s.Connect = "connect";
})(b || (b = {}));
var y;
(function(s) {
  s.Ready = "ready";
})(y || (y = {}));
var se = Object.defineProperty, ie = (s, e, t) => e in s ? se(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, R = (s, e, t) => (ie(s, typeof e != "symbol" ? e + "" : e, t), t);
class q extends Error {
  constructor(e) {
    super(e.msg), R(this, "response"), this.response = e;
  }
}
class re extends Error {
  constructor(e) {
    super("Too many concurrent requests"), R(this, "request"), this.request = e;
  }
}
class oe extends Error {
  constructor(e) {
    super(`Request \`${e.requestID}\` timed out`), R(this, "request"), this.request = e;
  }
}
class ne extends Error {
}
class ae extends Error {
  constructor() {
    super("Port is not set");
  }
}
let ce = 0;
const le = (s, e, t = "") => ({ requestID: `${t}${ce++}`, type: s, data: e }), N = (s, e, t = 200) => {
  var i;
  if (t >= 400) throw new TypeError(`Invalid success status code, expected status to be within \`[100;400[\`, got \`${t}\``);
  return { requestID: s, status: t, msg: ((i = C.message[t]) == null ? void 0 : i.replace(/\.$/, "").toLowerCase()) ?? "", data: e };
}, f = (s, e, t = 400) => {
  var i;
  if (t < 400) throw new TypeError(`Invalid error status code, expected status to be within \`[500;600[\`, got \`${t}\``);
  return { requestID: s, status: t, msg: ((i = C.message[t]) == null ? void 0 : i.replace(/\.$/, "").toLowerCase()) ?? "", error: e };
}, O = (s) => {
  if (typeof s != "object" || s === null) throw new TypeError(`Invalid message received, expected message to be of type \`object\`, got \`${typeof s}\``);
  if (Object.keys(s).every((e) => ["requestID", "type", "data", "status", "msg", "error"].includes(e))) {
    if (typeof s.requestID != "string") throw new TypeError(`Invalid message received, expected \`message.requestID\` to be of type \`string\`, got \`${typeof s.id}\``);
  } else throw new TypeError(`Invalid message received: ${JSON.stringify(s)}`);
  return s;
}, z = (s) => "type" in s, ue = (s) => !("type" in s), _e = (s) => ue(s) && !("error" in s);
var de = Object.defineProperty, he = (s, e, t) => e in s ? de(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, p = (s, e, t) => (he(s, typeof e != "symbol" ? e + "" : e, t), t);
const pe = { debug: false, maximumRequestConcurrency: 20, defaultTimeout: 5e3, requestIDPrefix: "channel-" };
class fe {
  constructor(e, t) {
    p(this, "requestHandlers"), p(this, "options"), p(this, "_port", null), p(this, "_pendingRequests", /* @__PURE__ */ new Map()), this.requestHandlers = e, this.options = { ...pe, ...t };
  }
  get port() {
    if (!this._port) throw new ae();
    return this._port;
  }
  set port(e) {
    this._port && (this._port.onmessage = null), this._port = e, this._port && (this._port.onmessage = this.onMessage.bind(this));
  }
  createRequestMessage(e, t) {
    return le(e, t, this.options.requestIDPrefix);
  }
  async onMessage(e) {
    this.options.debug && console.debug(e.data);
    try {
      const t = O(e.data);
      if (z(t)) if (!this.requestHandlers[t.type]) this.postResponse(f(t.requestID, void 0, 501));
      else try {
        const i = await this.requestHandlers[t.type](t, { success: N.bind(this, t.requestID), error: f.bind(this, t.requestID) });
        this.postResponse(i);
      } catch (i) {
        this.postResponse(f(t.requestID, i, 500));
      }
      else this._pendingRequests.has(t.requestID) ? (this._pendingRequests.get(t.requestID)(t), this._pendingRequests.delete(t.requestID)) : console.error(`Unknown request ID received in response: ${JSON.stringify(t)}`);
    } catch (t) {
      if (t instanceof TypeError) console.warn(t.message);
      else throw t;
    }
  }
  postRequest(e, t = (r) => this.port.postMessage(r), i = {}) {
    if (this.options.debug && console.debug(e), this._pendingRequests.size >= this.options.maximumRequestConcurrency) throw new re(e);
    return new Promise((r, n) => {
      const o = setTimeout(() => {
        this._pendingRequests.has(e.requestID) && this._pendingRequests.delete(e.requestID), n(new oe(e));
      }, i.timeout || this.options.defaultTimeout);
      this._pendingRequests.set(e.requestID, (a) => {
        clearTimeout(o), _e(a) ? r(a) : n(new q(a));
      }), t(e);
    });
  }
  postResponse(e, t = (i) => this.port.postMessage(i)) {
    return this.options.debug && console.debug(e), t(e), e;
  }
}
var me = Object.defineProperty, ge = (s, e, t) => e in s ? me(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, ve = (s, e, t) => (ge(s, e + "", t), t);
const Se = { readyTimeout: 2e4, requestIDPrefix: "receiver-" };
class we extends fe {
  constructor(e, t) {
    super(e, { ...Se, ...t }), ve(this, "_ready", false), window.addEventListener("message", (i) => {
      this._onPublicMessage(i);
    });
  }
  async ready() {
    if (window.parent === window) throw new Error("Receiver is currently not embedded as an iframe");
    this._ready = false;
    const e = this.createRequestMessage(y.Ready, void 0), t = await this.postRequest(e, (i) => {
      window.parent.postMessage(i, "*");
    }, { timeout: this.options.readyTimeout });
    return this._ready = true, t;
  }
  _onPublicMessage(e) {
    try {
      const t = O(e.data);
      if (z(t)) switch (this.options.debug && console.debug(e.data), t.type) {
        case b.Connect:
          this.port = e.ports[0];
          const { data: i } = t;
          this.options = { ...this.options, ...i, debug: this.options.debug, requestIDPrefix: this.options.requestIDPrefix, readyTimeout: this.options.readyTimeout };
          const r = N(t.requestID, void 0);
          this.postResponse(r);
          break;
        default:
          this.postResponse(f(t.requestID, void 0), (n) => {
            e.source.postMessage(n, e.origin);
          });
          break;
      }
      else this._ready || this.onMessage(e);
    } catch (t) {
      if (!(t instanceof TypeError)) throw t;
    }
  }
  postFormattedRequest(e, t, i = {}) {
    if (!this._ready) throw new ne("Receiver is not ready, use `ChannelReceiver.ready()` first");
    return this.postRequest(this.createRequestMessage(e, t), void 0, i);
  }
}
var be = Object.defineProperty, ye = (s, e, t) => e in s ? be(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, D = (s, e, t) => (ye(s, typeof e != "symbol" ? e + "" : e, t), t), F, L;
const qe = { requestIDPrefix: "api-", activeSliceAPI: false, sliceZoneSizeAPI: false };
class Re extends we {
  constructor(e, t) {
    var i, r;
    const n = (t == null ? void 0 : t.debug) || /[?&]debug=true/i.test(decodeURIComponent(window.location.search));
    super({ [h.Ping]: (o, a) => a.success("pong"), ...e }, { ...qe, ...t, debug: n }), D(this, F, async (o) => await this.postFormattedRequest(_.SetActiveSlice, o)), D(this, L, async (o) => await this.postFormattedRequest(_.SetSliceZoneSize, o)), n && (window.prismic || (window.prismic = {}), (i = window.prismic).sliceSimulator || (i.sliceSimulator = {}), (r = window.prismic.sliceSimulator).api || (r.api = []), window.prismic.sliceSimulator.api.push(this));
  }
}
F = _.SetActiveSlice, L = _.SetSliceZoneSize;
var Ie = Object.defineProperty, Pe = (s, e, t) => e in s ? Ie(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, xe = (s, e, t) => (Pe(s, e + "", t), t);
class $e {
  constructor() {
    xe(this, "_listeners", {});
  }
  on(e, t, i = null) {
    this._listeners[e] = [...this._listeners[e] ?? [], [t, i]];
  }
  off(e, t) {
    this._listeners[e] = (this._listeners[e] ?? []).filter(([i, r]) => typeof t == "function" ? i !== t : r !== t);
  }
  emit(e, t) {
    (this._listeners[e] ?? []).forEach((i) => i[0](t));
  }
}
const m = "slice-simulator", I = "slice-simulator--root", Me = () => document.querySelector(`.${m}`), De = () => document.querySelector(`.${I}`), Z = (s) => {
  let e = document.querySelector(`.${m} [data-slice-zone]`);
  if (e) return e.children.length !== s && console.warn(`Flagged SliceZone has an unexpected number of children, found ${e.children.length} but expected ${s}. This might lead to unexpected behaviors. Are you sure you tagged the right element?`), e;
  if (e = document.querySelector(`.${m} .${I}`), !e) return null;
  const t = 5;
  for (let i = 0; i < t; i++) {
    if (e.children.length === s) return e;
    if (e.children.length) e = e.children[0];
    else break;
  }
  return null;
}, Ee = (s, e) => {
  const t = document.elementsFromPoint(e.x, e.y).reverse(), i = t.indexOf(s);
  if (i === -1) return null;
  const r = t[i + 1];
  return r || null;
}, E = () => ({ zIndex: 100, background: "#ffffff" }), H = () => [], Te = () => "";
var Ae = Object.defineProperty, Ce = (s, e, t) => e in s ? Ae(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, u = (s, e, t) => (Ce(s, typeof e != "symbol" ? e + "" : e, t), t);
class Ne extends $e {
  constructor(e) {
    super(), u(this, "_slices"), u(this, "_activeSlice"), u(this, "_message"), u(this, "_mouse"), u(this, "_setActiveSlice", () => {
      if (this.slices.length === 0) {
        this.activeSlice = null;
        return;
      }
      const t = Z(this.slices.length);
      if (!t) {
        this.activeSlice = null;
        return;
      }
      const i = Ee(t, this._mouse);
      if (!i) {
        this.activeSlice = null;
        return;
      }
      const r = Array.prototype.indexOf.call(t.children, i);
      this.activeSlice = { rect: i.getBoundingClientRect(), sliceID: this.slices[r].slice_type, variationID: this.slices[r].variation, index: r };
    }), u(this, "setActiveSlice", A(this._setActiveSlice, 16)), this._slices = (e == null ? void 0 : e.slices) || H(), this._activeSlice = null, this._message = "", this._mouse = { x: 0, y: 0 };
  }
  set slices(e) {
    this._slices = e, this.message = "", this.emit(c.Slices, e);
  }
  get slices() {
    return this._slices;
  }
  set activeSlice(e) {
    this._activeSlice = e, this.emit(c.ActiveSlice, e);
  }
  get activeSlice() {
    return this._activeSlice;
  }
  set message(e) {
    this._message = e, this.emit(c.Message, e);
  }
  get message() {
    return this._message;
  }
  async init() {
    window.addEventListener("mousemove", (e) => {
      this._mouse = { x: e.clientX, y: e.clientY };
    });
  }
  setSliceZone(e) {
    this.slices = e;
  }
}
const Oe = (s) => `<div style="word-spacing: initial; white-space: pre; line-height: initial; font-family: monospace; color: #ffffff; mix-blend-mode: difference; padding: 1rem; font-size: 1rem;">${s}</div>`, S = (s, e) => `<a href="${s}" style="text-decoration: underline;">${s}<a>`, ze = `   _____ ___          _____ _                 __      __            
  / ___// (_)_______ / ___/(_)___ ___  __  __/ /___ _/ /_____  _____
  \\__ \\/ / / ___/ _ \\\\__ \\/ / __ \`__ \\/ / / / / __ \`/ __/ __ \\/ ___/
 ___/ / / / /__/  __/__/ / / / / / / / /_/ / / /_/ / /_/ /_/ / /    
/____/_/_/\\___/\\___/____/_/_/ /_/ /_/\\__,_/_/\\__,_/\\__/\\____/_/     
                  / /_  __  __   / __ \\_____(_)________ ___  (_)____
                 / __ \\/ / / /  / /_/ / ___/ / ___/ __ \`__ \\/ / ___/
                / /_/ / /_/ /  / ____/ /  / (__  ) / / / / / / /__  
               /_.___/\\__, /  /_/   /_/  /_/____/_/ /_/ /_/_/\\___/  
                     /____/

`, Fe = `





                                                - The Prismic team`, Le = Oe([ze, `You're seeing this page because you're accessing Slice simulator
directly, e.g:

  - ${S("http://localhost:3000/slice-simulator")}



The Slice simulator can only be accessed through Slice Machine or the
Page Builder. To preview your Slices, head over to Slice Machine:

  - ${S("http://localhost:9999")}



If you believe this is an error, please reach out to us:

  - ${S("https://github.com/prismicio/slice-machine/issues/new/choose")}`, Fe].join(""));
var Ze = Object.defineProperty, He = (s, e, t) => e in s ? Ze(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t, w = (s, e, t) => (He(s, typeof e != "symbol" ? e + "" : e, t), t);
class Ue {
  constructor(e) {
    w(this, "state"), w(this, "_api"), w(this, "_initialized"), this.state = new Ne(e), this._api = null, this._initialized = false;
  }
  async init() {
    if (!this._initialized) {
      this._initialized = true, await this.state.init();
      try {
        await this._initAPI();
      } catch (e) {
        e instanceof Error && e.message === "Receiver is currently not embedded as an iframe" && !this.state.slices.length && (this.state.message = Le), console.error(e);
        return;
      }
      this._initListeners();
    }
  }
  async _initAPI() {
    this._api = new Re({ [h.SetSliceZone]: (e, t) => (this.state.setSliceZone(e.data), t.success()), [h.ScrollToSlice]: (e, t) => {
      var i;
      if (e.data.sliceIndex < 0) return t.error("`sliceIndex` must be > 0", 400);
      if (e.data.sliceIndex >= this.state.slices.length) return t.error(`\`sliceIndex\` must be < ${this.state.slices.length} (\`<SliceZone />\` current length)`, 400);
      const r = Z(this.state.slices.length);
      if (!r) return t.error("Failed to find `<SliceZone />`", 500);
      this.state.activeSlice = null;
      const n = r.children[e.data.sliceIndex];
      return n ? (n.scrollIntoView({ behavior: e.data.behavior, block: e.data.block, inline: e.data.inline }), (i = this._api) != null && i.options.activeSliceAPI && setTimeout(this.state.setActiveSlice, 750), t.success()) : t.error("Failed fo find slice at index $`{req.data.sliceIndex}` in `<SliceZone />`", 500);
    } }), await this._api.ready();
  }
  _initListeners() {
    var e, t;
    if ((e = this._api) != null && e.options.activeSliceAPI && (window.addEventListener("mousemove", () => {
      this.state.setActiveSlice();
    }), window.addEventListener("resize", () => {
      this.state.setActiveSlice();
    }), window.addEventListener("mousewheel", () => {
      setTimeout(this.state.setActiveSlice, 200);
    }), this.state.on(c.Slices, () => {
      this.state.setActiveSlice();
    }), this.state.on(c.ActiveSlice, async (i) => {
      if (this._api) try {
        await this._api.setActiveSlice(i);
      } catch (r) {
        if (r instanceof q && r.response.status === 400) console.error(r.response);
        else throw r;
      }
    })), (t = this._api) != null && t.options.sliceZoneSizeAPI) {
      const i = new ResizeObserver(A(async (o) => {
        const [a] = o;
        if (this._api && a) try {
          await this._api.setSliceZoneSize({ rect: a.contentRect });
        } catch (l) {
          if (l instanceof q && l.response.status === 400) console.error(l.response);
          else throw l;
        }
      }, 16)), r = () => {
        const o = De();
        i.disconnect(), o && i.observe(o);
      };
      new MutationObserver(r).observe(Me(), { subtree: false, childList: true });
    }
  }
}
const Be = (s) => {
  s.preventDefault(), s.stopPropagation();
}, Ge = (s) => {
  s.path && s.path.slice(0, 5).some((e) => e instanceof HTMLAnchorElement) && (s.preventDefault(), s.stopPropagation());
}, d = new Ue(), Ve = T({ name: "SliceSimulator", props: { zIndex: { type: Number, default: E().zIndex, required: false }, background: { type: String, default: E().background, required: false } }, setup(s, { slots: e }) {
  const t = x(H()), i = x(Te());
  return G(() => {
    d.state.on(c.Slices, (r) => {
      t.value = r;
    }, "simulator-slices"), d.state.on(c.Message, (r) => {
      i.value = r;
    }, "simulator-message"), d.init();
  }), V(() => {
    d.state.off(c.Slices, "simulator-slices"), d.state.off(c.Message, "simulator-message");
  }), () => {
    const r = [];
    return i.value ? r.push(g("article", { innerHTML: i.value })) : t.value.length && e.default && r.push(g("div", { id: "root", class: I, onClickCapture: Ge, onSubmitCapture: Be }, [e.default({ slices: t.value })])), g("div", { class: m, style: { zIndex: s.zIndex, position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", overflow: "auto", background: s.background } }, r);
  };
} }), Je = Ve, Qe = T({ __name: "slice-simulator", setup(s) {
  return (e, t) => {
    const i = Q;
    return j(), J($(Je), null, { default: Y(({ slices: r }) => [X(i, { slices: r, components: $(K) }, null, 8, ["slices", "components"])]), _: 1 });
  };
} });
export {
  Qe as default
};
