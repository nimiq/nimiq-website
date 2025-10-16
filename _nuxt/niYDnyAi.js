var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a as h, T as y, b, c as w, d as F, e as f } from "./D0DW2WUk.js";
import { aO as E, a as P, aW as I } from "./B8biU-UE.js";
import { u as R } from "./uct_JH4F.js";
function T(a, t) {
  if (t < 0 && (a = 1 / a, t *= -1), !t) return 1;
  let i = 1;
  for (; t > 1; ) t % 2 && (i *= a, t -= 1), a *= a, t /= 2;
  return a * i;
}
function $(a, { network: t = "main-albatross" } = {}) {
  const i = a - h.getTime();
  if (i < 0) throw new Error(`Invalid timestamp: ${a}. It must be greater than ${h.getTime()}.`);
  return (y - (y - (t === "test-albatross" ? b : w) * 1e5) * T(F, i)) / 1e5;
}
function A(a) {
  const { amount: t = 1e5, days: i = 365, autoRestake: s = true, stakedSupplyRatio: r, network: o = "main-albatross", fee: e = 0 } = a;
  if (r < 0 || r > 1) throw new Error(`Invalid stakedSupplyRatio: ${r}. It must be in the range [0, 1].`);
  if (e < 0 || e > 1) throw new Error(`Invalid fee: ${e}. It must be between 0 and 1.`);
  const n = o === "test-albatross" ? b : w, u = h.getTime() + 1440 * 60 * 1e3, l = $(u, { network: o }) - n, c = Math.E ** (-3432600460362e-16 * i);
  let m = 0;
  s ? m = l / (f * r * n) * (1 - c) : m = 1 / r * (Math.log(f * n * (1 / c) + l * (1 / c) - l) - f * i - Math.log(f * n)), m *= 1 - e;
  const g = t * (1 + m);
  return { totalAmount: g, gain: g - t, gainRatio: m };
}
const _d = class _d {
  constructor(t) {
    __publicField(this, "_digits");
    __publicField(this, "_decimalSeparatorPosition");
    __publicField(this, "_sign");
    typeof t != "string" && (t = t.toString());
    const i = t.match(_d.NUMBER_REGEX);
    if (!i) throw new Error(`${t} is not a valid number`);
    if (this._sign = i[1], this._digits = `${i[2]}${i[3]}`, !this._digits) throw new Error(`${t} is not a valid number`);
    this._decimalSeparatorPosition = i[2].length;
    const s = Number.parseInt(i[5], 10);
    s && this.moveDecimalSeparator(s);
  }
  toString(t) {
    let { maxDecimals: i = void 0, minDecimals: s = void 0, useGrouping: r = t === true, groupSeparator: o = "\u202F" } = typeof t == "object" ? t : {};
    i !== void 0 && s !== void 0 && (s = Math.min(s, i)), i !== void 0 && i < this._digits.length - this._decimalSeparatorPosition && this.round(i);
    let e = this._digits.slice(0, this._decimalSeparatorPosition).replace(/^0+/, ""), n = this._digits.slice(this._decimalSeparatorPosition).replace(/0+$/, "");
    return s !== void 0 && s > n.length && (n = n.padEnd(s, "0")), r && o && e.length > 4 && (e = e.replace(/(\d)(?=(\d{3})+$)/g, `$1${o}`)), `${this._sign}${e || "0"}${n ? `.${n}` : ""}`;
  }
  valueOf() {
    return this.toString();
  }
  moveDecimalSeparator(t) {
    return this._decimalSeparatorPosition += t, this._decimalSeparatorPosition > this._digits.length ? this._digits = this._digits.padEnd(this._decimalSeparatorPosition, "0") : this._decimalSeparatorPosition < 0 && (this._digits = this._digits.padStart(this._digits.length - this._decimalSeparatorPosition, "0"), this._decimalSeparatorPosition = 0), this;
  }
  round(t) {
    if (this._digits.length - this._decimalSeparatorPosition <= t) return this;
    const i = this._decimalSeparatorPosition + t, s = this._digits.substring(0, i).padEnd(this._decimalSeparatorPosition, "0");
    if (Number.parseInt(this._digits[i], 10) < 5) return this._digits = s, this;
    const r = `0${s}`.split(""), o = i;
    for (let e = o; e >= 0; --e) {
      const n = Number.parseInt(r[e], 10) + 1;
      if (n < 10) {
        r[e] = n.toString();
        break;
      } else r[e] = "0";
    }
    return this._digits = r.join(""), this._decimalSeparatorPosition += 1, this;
  }
  equals(t) {
    if (!(t instanceof _d)) try {
      t = new _d(t);
    } catch {
      return false;
    }
    return this.toString() === t.toString();
  }
};
__publicField(_d, "NUMBER_REGEX", /^(-?)(\d*)\.?(\d*)(e(-?\d+))?$/);
let d = _d;
function v(a, t, i, s = {}) {
  const { maxDecimals: r = 8, minDecimals: o, hideDecimals: e = false, meaningfulDigits: n = 4, returnJustNumber: u = false } = s, l = t.decimals, c = e ? 0 : Math.min(l, o ?? l);
  let m = l;
  if (e) m = 0;
  else if (a !== 0) {
    const _ = Math.abs(a), S = Math.floor(Math.log10(_));
    if (_ >= 1) {
      const D = S + 1;
      m = Math.max(0, n - D);
    } else m = Math.abs(S) - 1 + n;
    m = Math.min(r, m), m = Math.max(m, c);
  }
  const p = new d(a).toString({ minDecimals: c, maxDecimals: m, useGrouping: true });
  return u ? Number.parseFloat(p) : M(p, t, i, c, m);
}
function M(a, t, i, s, r) {
  const o = new Intl.NumberFormat(i, { style: "currency", currency: t.code, minimumFractionDigits: s, maximumFractionDigits: r, currencyDisplay: "symbol" }).formatToParts(1.23), e = o.findIndex((c) => c.type === "integer"), n = o.slice(0, e).map((c) => c.value).join(""), u = o.findIndex((c) => c.type === "fraction"), l = o.slice(u >= 0 ? u + 1 : e + 1).map((c) => c.value).join("");
  return `${n}${a}${l}`;
}
function x(a, t) {
  return new Intl.NumberFormat(t, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(a);
}
function Y(a, t, i = {}) {
  return new Intl.NumberFormat(t, { notation: "compact", compactDisplay: "short", minimumFractionDigits: 0, maximumFractionDigits: 2, ...i }).format(a);
}
function G(a, t) {
  return new Intl.NumberFormat(t, { minimumFractionDigits: 4, maximumFractionDigits: 4 }).format(a);
}
function L(a = {}) {
  const t = "https://validators-api-mainnet.pages.dev", { data: i, state: s } = E({ key: ["staking_distribution"], query: async () => {
    const { circulating: e, staking: n } = await $fetch(`${t}/api/v1/supply`);
    return n / e;
  }, staleTime: 3e5, placeholderData: (e) => e, enabled: P(() => I(a.enabled) ?? true) }), r = R(), o = P(() => {
    if (!i.value) return 0;
    const e = A({ stakedSupplyRatio: i.value });
    return x(e.gainRatio, r.value);
  });
  return { stakingRatio: i, stakingRatioState: s, annualRewardPercentage: o };
}
export {
  v as a,
  x as b,
  G as c,
  A as d,
  Y as f,
  $ as p,
  L as u
};
