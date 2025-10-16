var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { an as d, K as _, am as m, aM as w, c as f } from "./B8biU-UE.js";
const c = { fatal: 0, error: 0, warn: 1, log: 2, info: 3, success: 3, fail: 3, debug: 4, trace: 5, verbose: Number.POSITIVE_INFINITY }, L = { silent: { level: -1 }, fatal: { level: c.fatal }, error: { level: c.error }, warn: { level: c.warn }, log: { level: c.log }, info: { level: c.info }, success: { level: c.success }, fail: { level: c.fail }, ready: { level: c.info }, start: { level: c.info }, box: { level: c.info }, debug: { level: c.debug }, trace: { level: c.trace }, verbose: { level: c.verbose } };
function u(r) {
  if (r === null || typeof r != "object") return false;
  const t = Object.getPrototypeOf(r);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in r ? false : Symbol.toStringTag in r ? Object.prototype.toString.call(r) === "[object Module]" : true;
}
function y(r, t, o = ".", i) {
  if (!u(t)) return y(r, {}, o);
  const e = Object.assign({}, t);
  for (const s in r) {
    if (s === "__proto__" || s === "constructor") continue;
    const n = r[s];
    n != null && (Array.isArray(n) && Array.isArray(e[s]) ? e[s] = [...n, ...e[s]] : u(n) && u(e[s]) ? e[s] = y(n, e[s], (o ? `${o}.` : "") + s.toString()) : e[s] = n);
  }
  return e;
}
function C(r) {
  return (...t) => t.reduce((o, i) => y(o, i, ""), {});
}
const P = C();
function A(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function F(r) {
  return !(!A(r) || !r.message && !r.args || r.stack);
}
let g = false;
const S = [];
class l {
  constructor(t = {}) {
    __publicField(this, "options");
    __publicField(this, "_lastLog");
    __publicField(this, "_mockFn");
    const o = t.types || L;
    this.options = P({ ...t, defaults: { ...t.defaults }, level: h(t.level, o), reporters: [...t.reporters || []] }, { types: L, throttle: 1e3, throttleMin: 5, formatOptions: { date: true, colors: false, compact: true } });
    for (const i in o) {
      const e = { type: i, ...this.options.defaults, ...o[i] };
      this[i] = this._wrapLogFn(e), this[i].raw = this._wrapLogFn(e, true);
    }
    this.options.mockFn && this.mockTypes(), this._lastLog = {};
  }
  get level() {
    return this.options.level;
  }
  set level(t) {
    this.options.level = h(t, this.options.types, this.options.level);
  }
  prompt(t, o) {
    if (!this.options.prompt) throw new Error("prompt is not supported!");
    return this.options.prompt(t, o);
  }
  create(t) {
    const o = new l({ ...this.options, ...t });
    return this._mockFn && o.mockTypes(this._mockFn), o;
  }
  withDefaults(t) {
    return this.create({ ...this.options, defaults: { ...this.options.defaults, ...t } });
  }
  withTag(t) {
    return this.withDefaults({ tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + t : t });
  }
  addReporter(t) {
    return this.options.reporters.push(t), this;
  }
  removeReporter(t) {
    if (t) {
      const o = this.options.reporters.indexOf(t);
      if (o !== -1) return this.options.reporters.splice(o, 1);
    } else this.options.reporters.splice(0);
    return this;
  }
  setReporters(t) {
    return this.options.reporters = Array.isArray(t) ? t : [t], this;
  }
  wrapAll() {
    this.wrapConsole(), this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole(), this.restoreStd();
  }
  wrapConsole() {
    for (const t in this.options.types) console["__" + t] || (console["__" + t] = console[t]), console[t] = this[t].raw;
  }
  restoreConsole() {
    for (const t in this.options.types) console["__" + t] && (console[t] = console["__" + t], delete console["__" + t]);
  }
  wrapStd() {
    this._wrapStream(this.options.stdout, "log"), this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(t, o) {
    t && (t.__write || (t.__write = t.write), t.write = (i) => {
      this[o].raw(String(i).trim());
    });
  }
  restoreStd() {
    this._restoreStream(this.options.stdout), this._restoreStream(this.options.stderr);
  }
  _restoreStream(t) {
    t && t.__write && (t.write = t.__write, delete t.__write);
  }
  pauseLogs() {
    g = true;
  }
  resumeLogs() {
    g = false;
    const t = S.splice(0);
    for (const o of t) o[0]._logFn(o[1], o[2]);
  }
  mockTypes(t) {
    const o = t || this.options.mockFn;
    if (this._mockFn = o, typeof o == "function") for (const i in this.options.types) this[i] = o(i, this.options.types[i]) || this[i], this[i].raw = this[i];
  }
  _wrapLogFn(t, o) {
    return (...i) => {
      if (g) {
        S.push([this, t, i, o]);
        return;
      }
      return this._logFn(t, i, o);
    };
  }
  _logFn(t, o, i) {
    if ((t.level || 0) > this.level) return false;
    const e = { date: /* @__PURE__ */ new Date(), args: [], ...t, level: h(t.level, this.options.types) };
    !i && o.length === 1 && F(o[0]) ? Object.assign(e, o[0]) : e.args = [...o], e.message && (e.args.unshift(e.message), delete e.message), e.additional && (Array.isArray(e.additional) || (e.additional = e.additional.split(`
`)), e.args.push(`
` + e.additional.join(`
`)), delete e.additional), e.type = typeof e.type == "string" ? e.type.toLowerCase() : "log", e.tag = typeof e.tag == "string" ? e.tag : "";
    const s = (a = false) => {
      const p = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && p > 0) {
        const b = [...this._lastLog.object.args];
        p > 1 && b.push(`(repeated ${p} times)`), this._log({ ...this._lastLog.object, args: b }), this._lastLog.count = 1;
      }
      a && (this._lastLog.object = e, this._log(e));
    };
    clearTimeout(this._lastLog.timeout);
    const n = this._lastLog.time && e.date ? e.date.getTime() - this._lastLog.time.getTime() : 0;
    if (this._lastLog.time = e.date, n < this.options.throttle) try {
      const a = JSON.stringify([e.type, e.tag, e.args]), p = this._lastLog.serialized === a;
      if (this._lastLog.serialized = a, p && (this._lastLog.count = (this._lastLog.count || 0) + 1, this._lastLog.count > this.options.throttleMin)) {
        this._lastLog.timeout = setTimeout(s, this.options.throttle);
        return;
      }
    } catch {
    }
    s(true);
  }
  _log(t) {
    for (const o of this.options.reporters) o.log(t, { options: this.options });
  }
}
function h(r, t = {}, o = 3) {
  return r === void 0 ? o : typeof r == "number" ? r : t[r] && t[r].level !== void 0 ? t[r].level : o;
}
l.prototype.add = l.prototype.addReporter;
l.prototype.remove = l.prototype.removeReporter;
l.prototype.clear = l.prototype.removeReporter;
l.prototype.withScope = l.prototype.withTag;
l.prototype.mock = l.prototype.mockTypes;
l.prototype.pause = l.prototype.pauseLogs;
l.prototype.resume = l.prototype.resumeLogs;
function B(r = {}) {
  return new l(r);
}
class M {
  constructor(t) {
    __publicField(this, "options");
    __publicField(this, "defaultColor");
    __publicField(this, "levelColorMap");
    __publicField(this, "typeColorMap");
    this.options = { ...t }, this.defaultColor = "#7f8c8d", this.levelColorMap = { 0: "#c0392b", 1: "#f39c12", 3: "#00BCD4" }, this.typeColorMap = { success: "#2ecc71" };
  }
  _getLogFn(t) {
    return t < 1 ? console.__error || console.error : t === 1 ? console.__warn || console.warn : console.__log || console.log;
  }
  log(t) {
    const o = this._getLogFn(t.level), i = t.type === "log" ? "" : t.type, e = t.tag || "", n = `
      background: ${this.typeColorMap[t.type] || this.levelColorMap[t.level] || this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `, a = `%c${[e, i].filter(Boolean).join(":")}`;
    typeof t.args[0] == "string" ? o(`${a}%c ${t.args[0]}`, n, "", ...t.args.slice(1)) : o(a, n, ...t.args);
  }
}
function T(r = {}) {
  return B({ reporters: r.reporters || [new M({})], prompt(o, i = {}) {
    return i.type === "confirm" ? Promise.resolve(confirm(o)) : Promise.resolve(prompt(o));
  }, ...r });
}
const v = T();
function D(r, t) {
  const { client: o } = d(), { enablePrismicSSR: i, showDrafts: e } = _().public;
  return m(`prismic-page-${r}`, async () => {
    try {
      const s = (t == null ? void 0 : t.filters) || [], n = e ? Array.isArray(s) ? s : [s].filter(Boolean) : (() => {
        const p = w.not("my.page.draft", true);
        return Array.isArray(s) ? [...s, p] : [s, p].filter(Boolean);
      })(), a = await o.getByUID("page", r, { ...t, filters: n });
      if (!a.data) throw f({ statusCode: 404, statusMessage: "Page not found", fatal: true });
      return a;
    } catch (s) {
      throw v.error(`Page with UID "${r}" not found in Prismic:`, s), f({ statusCode: 404, statusMessage: "Page not found", fatal: true });
    }
  }, { server: !!i || false });
}
function $(r, t) {
  const { client: o } = d(), { enablePrismicSSR: i, showDrafts: e } = _().public;
  return m(`prismic-blog_post-${r}`, async () => {
    try {
      const s = (t == null ? void 0 : t.filters) || [], n = e ? Array.isArray(s) ? s : [s].filter(Boolean) : (() => {
        const p = w.not("my.blog_page.draft", true);
        return Array.isArray(s) ? [...s, p] : [s, p].filter(Boolean);
      })(), a = await o.getByUID("blog_page", r, { ...t, filters: n });
      if (!a.data) throw f({ statusCode: 404, statusMessage: "Post not found", fatal: true });
      return a;
    } catch (s) {
      throw v.error(`Blog post with UID "${r}" not found in Prismic:`, s), f({ statusCode: 404, statusMessage: "Post not found", fatal: true });
    }
  }, { server: !!i || false });
}
function j(r) {
  const { enablePrismicSSR: t, showDrafts: o } = _().public;
  return m("prismic-collection-blog_page", async () => {
    const { client: i } = d();
    try {
      const e = (r == null ? void 0 : r.filters) || [], s = o ? Array.isArray(e) ? e : [e].filter(Boolean) : (() => {
        const a = w.not("my.blog_page.draft", true);
        return Array.isArray(e) ? [...e, a] : [e, a].filter(Boolean);
      })(), n = await i.getByType("blog_page", { ...r, filters: s });
      if (!n.results) throw f({ statusCode: 404, statusMessage: "Posts not found", fatal: true });
      return n.results;
    } catch (e) {
      throw v.error('Collection "blog_page" not found in Prismic:', e), new Error("blog_page collection not found");
    }
  }, { server: !!t || false });
}
export {
  $ as a,
  j as b,
  D as u
};
