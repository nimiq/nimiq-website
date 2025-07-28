var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { l as I, i as R } from "./Cn5kCPLx.js";
import { z as T } from "./DeSMYd_K.js";
import { d as k, ay as C, j as O, C as D, c as S, o as X } from "./BguRs3jF.js";
const u = 6, f = 30 * 1e3, b = 60 * 1e3, z = k({ __name: "FloatingStars.client", props: { color: { default: "#e9b213" } }, setup(w) {
  const s = C("canvas"), h = O(() => {
    var _a;
    return (_a = s.value) == null ? void 0 : _a.getContext("2d");
  }), { pixelRatio: r } = I(), d = Math.PI, M = Math.PI * 2.2, c = Array.from({ length: u * 2 }, () => d + Math.random() * (M - d)), i = D([]);
  function x() {
    if (!(!h.value || !s.value)) {
      if (h.value.clearRect(0, 0, s.value.width, s.value.height), i.value.length < u && Math.random() < 0.03) {
        const n = c[Math.floor(Math.random() * c.length)];
        i.value.push(new p(n));
      }
      for (let n = i.value.length - 1; n >= 0; n--) {
        const e = i.value[n];
        e.update(), e.completed ? i.value.splice(n, 1) : e.draw(h.value);
      }
    }
  }
  const { resume: _ } = R(x, { immediate: false });
  T(h, () => {
    if (!s.value) return;
    s.value.width = s.value.offsetWidth * r.value, s.value.height = s.value.offsetHeight * r.value, h.value.scale(r.value, r.value), i.value = [];
    const n = Math.floor(u * 0.75);
    for (let e = 0; e < n; e++) {
      const t = new p(c[Math.floor(Math.random() * c.length)]), a = Math.random() * 0.8;
      t.startTime = performance.now() - t.duration * a, t.progress = a, t.x = t.originalX + t.dx * a, t.y = t.originalY + t.dy * a, i.value.push(t);
    }
    _();
  });
  const y = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11">
  <path stroke="${w.color}" stroke-linecap="round" stroke-width="2" d="M1.9 5h8M6 9V1"/>
</svg>`, m = new Image();
  m.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(y)}`;
  class p {
    constructor(e) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "originalX", 0);
      __publicField(this, "originalY", 0);
      __publicField(this, "dx", 0);
      __publicField(this, "dy", 0);
      __publicField(this, "startTime", 0);
      __publicField(this, "progress", 0);
      __publicField(this, "size", 0);
      __publicField(this, "angle", 0);
      __publicField(this, "initialOpacity", 0);
      __publicField(this, "duration", 0);
      __publicField(this, "completed", false);
      this.angle = e, this.reset();
    }
    reset() {
      if (!s.value) return;
      const e = s.value.width / r.value, t = s.value.height / r.value, a = e / 2, l = t / 2;
      this.originalX = a, this.originalY = l, this.x = a, this.y = l;
      const o = Math.min(e, t) / 2, g = o * 0.45, A = o * 0.9, v = Math.random() * (A - g) + g;
      this.dx = Math.cos(this.angle) * v, this.dy = Math.sin(this.angle) * v, this.size = Math.random() * 2.5 + 0.75, this.initialOpacity = Math.random() * 0.4 + 0.6, this.duration = Math.random() * (b - f) + f, this.startTime = performance.now(), this.progress = 0, this.completed = false;
    }
    update() {
      const a = (performance.now() - this.startTime) / this.duration;
      if (a >= 1) {
        this.completed = true;
        return;
      }
      this.progress = a, this.x = this.originalX + this.dx * a, this.y = this.originalY + this.dy * a;
    }
    draw(e) {
      const t = performance.now() - this.startTime, a = this.duration - t;
      let l = this.initialOpacity;
      t <= this.duration * 0.1 ? l *= t / (this.duration * 0.1) : a <= this.duration * 0.1 && (l *= a / (this.duration * 0.1)), e.globalAlpha = l;
      const o = this.size * 5;
      e.drawImage(m, this.x - o / 2, this.y - o / 2, o, o), e.globalAlpha = 1;
    }
  }
  return (n, e) => (X(), S("canvas", { ref_key: "canvas", ref: s, "h-400": "", "w-600": "", "pointer-events-none": "", "of-hidden": "" }, null, 512));
} }), N = Object.assign(z, { __name: "AnimatedFloatingStars" });
export {
  N as _
};
