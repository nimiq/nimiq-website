var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a as _, T as y, b as P, c as b, d as w, e as g } from "./D0DW2WUk.js";
import { az as F, j as E } from "./BguRs3jF.js";
import { u as p } from "./BghiwBAd.js";
function I(e, t) {
  if (t < 0 && (e = 1 / e, t *= -1), !t) return 1;
  let i = 1;
  for (; t > 1; ) t % 2 && (i *= e, t -= 1), e *= e, t /= 2;
  return e * i;
}
function R(e, { network: t = "main-albatross" } = {}) {
  const i = e - _.getTime();
  if (i < 0) throw new Error(`Invalid timestamp: ${e}. It must be greater than ${_.getTime()}.`);
  return (y - (y - (t === "test-albatross" ? P : b) * 1e5) * I(w, i)) / 1e5;
}
function T(e) {
  const { amount: t = 1e5, days: i = 365, autoRestake: a = true, stakedSupplyRatio: s, network: o = "main-albatross", fee: n = 0 } = e;
  if (s < 0 || s > 1) throw new Error(`Invalid stakedSupplyRatio: ${s}. It must be in the range [0, 1].`);
  if (n < 0 || n > 1) throw new Error(`Invalid fee: ${n}. It must be between 0 and 1.`);
  const c = o === "test-albatross" ? P : b, l = _.getTime() + 1440 * 60 * 1e3, m = R(l, { network: o }) - c, r = Math.E ** (-3432600460362e-16 * i);
  let u = 0;
  a ? u = m / (g * s * c) * (1 - r) : u = 1 / s * (Math.log(g * c * (1 / r) + m * (1 / r) - m) - g * i - Math.log(g * c)), u *= 1 - n;
  const d = t * (1 + u);
  return { totalAmount: d, gain: d - t, gainRatio: u };
}
const _f = class _f {
  constructor(t) {
    __publicField(this, "_digits");
    __publicField(this, "_decimalSeparatorPosition");
    __publicField(this, "_sign");
    typeof t != "string" && (t = t.toString());
    const i = t.match(_f.NUMBER_REGEX);
    if (!i) throw new Error(`${t} is not a valid number`);
    if (this._sign = i[1], this._digits = `${i[2]}${i[3]}`, !this._digits) throw new Error(`${t} is not a valid number`);
    this._decimalSeparatorPosition = i[2].length;
    const a = Number.parseInt(i[5], 10);
    a && this.moveDecimalSeparator(a);
  }
  toString(t) {
    let { maxDecimals: i = void 0, minDecimals: a = void 0, useGrouping: s = t === true, groupSeparator: o = "\u202F" } = typeof t == "object" ? t : {};
    i !== void 0 && a !== void 0 && (a = Math.min(a, i)), i !== void 0 && i < this._digits.length - this._decimalSeparatorPosition && this.round(i);
    let n = this._digits.slice(0, this._decimalSeparatorPosition).replace(/^0+/, ""), c = this._digits.slice(this._decimalSeparatorPosition).replace(/0+$/, "");
    return a !== void 0 && a > c.length && (c = c.padEnd(a, "0")), s && o && n.length > 4 && (n = n.replace(/(\d)(?=(\d{3})+$)/g, `$1${o}`)), `${this._sign}${n || "0"}${c ? `.${c}` : ""}`;
  }
  valueOf() {
    return this.toString();
  }
  moveDecimalSeparator(t) {
    return this._decimalSeparatorPosition += t, this._decimalSeparatorPosition > this._digits.length ? this._digits = this._digits.padEnd(this._decimalSeparatorPosition, "0") : this._decimalSeparatorPosition < 0 && (this._digits = this._digits.padStart(this._digits.length - this._decimalSeparatorPosition, "0"), this._decimalSeparatorPosition = 0), this;
  }
  round(t) {
    if (this._digits.length - this._decimalSeparatorPosition <= t) return this;
    const i = this._decimalSeparatorPosition + t, a = this._digits.substring(0, i).padEnd(this._decimalSeparatorPosition, "0");
    if (Number.parseInt(this._digits[i], 10) < 5) return this._digits = a, this;
    const s = `0${a}`.split(""), o = i;
    for (let n = o; n >= 0; --n) {
      const c = Number.parseInt(s[n], 10) + 1;
      if (c < 10) {
        s[n] = c.toString();
        break;
      } else s[n] = "0";
    }
    return this._digits = s.join(""), this._decimalSeparatorPosition += 1, this;
  }
  equals(t) {
    if (!(t instanceof _f)) try {
      t = new _f(t);
    } catch {
      return false;
    }
    return this.toString() === t.toString();
  }
};
__publicField(_f, "NUMBER_REGEX", /^(-?)(\d*)\.?(\d*)(e(-?\d+))?$/);
let f = _f;
function k(e, t, i = {}) {
  const { maxDecimals: a = 8, minDecimals: s, hideDecimals: o = false, meaningfulDigits: n = 4, returnJustNumber: c = false } = i, l = t.decimals, m = o ? 0 : Math.min(l, s ?? l);
  let r = l;
  if (o) r = 0;
  else if (e !== 0) {
    const h = Math.abs(e), S = Math.floor(Math.log10(h));
    if (h >= 1) {
      const D = S + 1;
      r = Math.max(0, n - D);
    } else r = Math.abs(S) - 1 + n;
    r = Math.min(a, r), r = Math.max(r, m);
  }
  const d = new f(e).toString({ minDecimals: m, maxDecimals: r, useGrouping: true });
  return c ? Number.parseFloat(d) : $(d, t, m, r);
}
function $(e, t, i, a) {
  const s = p(), o = new Intl.NumberFormat(s.value, { style: "currency", currency: t.code, minimumFractionDigits: i, maximumFractionDigits: a, currencyDisplay: "symbol" }).formatToParts(1.23), n = o.findIndex((r) => r.type === "integer"), c = o.slice(0, n).map((r) => r.value).join(""), l = o.findIndex((r) => r.type === "fraction"), m = o.slice(l >= 0 ? l + 1 : n + 1).map((r) => r.value).join("");
  return `${c}${e}${m}`;
}
function A(e) {
  const t = p();
  return new Intl.NumberFormat(t.value, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(e);
}
function N(e, t = {}) {
  const i = p();
  return new Intl.NumberFormat(i.value, { notation: "compact", compactDisplay: "short", minimumFractionDigits: 0, maximumFractionDigits: 2, ...t }).format(e);
}
function O(e) {
  const t = p();
  return new Intl.NumberFormat(t.value, { minimumFractionDigits: 4, maximumFractionDigits: 4 }).format(e);
}
function Y() {
  const e = "https://dev.validators-api-mainnet.pages.dev", { data: t, state: i } = F({ key: ["staking_distribution"], query: async () => {
    const { circulating: s, staking: o } = await $fetch(`${e}/api/v1/supply`);
    return o / s;
  }, staleTime: 3e5, placeholderData: (s) => s }), a = E(() => {
    if (!t.value) return 0;
    const s = T({ stakedSupplyRatio: t.value });
    return A(s.gainRatio);
  });
  return { stakingRatio: t, stakingRatioState: i, annualRewardPercentage: a };
}
export {
  k as a,
  A as b,
  O as c,
  T as d,
  N as f,
  R as p,
  Y as u
};
