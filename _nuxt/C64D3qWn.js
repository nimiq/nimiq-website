var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { l as I, i as T } from "./CEBR9iVI.js";
import { d as A, at as S, j as k, B as O, c as P, o as R } from "./ClGJWWej.js";
import { x as X } from "./YKo2rOHu.js";
const u = 12, Y = A({ __name: "FloatingStars.client", props: { color: { default: "#e9b213" } }, setup(v) {
  const a = S("canvas"), h = k(() => {
    var _a;
    return (_a = a.value) == null ? void 0 : _a.getContext("2d");
  }), { pixelRatio: l } = I(), g = Math.PI / 2, w = Math.PI * 1.5, c = Array.from({ length: u * 2 }, () => g + Math.random() * (w - g)), r = O([]);
  function x() {
    if (h.value.clearRect(0, 0, a.value.width, a.value.height), r.value.length < u && Math.random() < 0.03) {
      const s = Math.floor(Math.random() * c.length);
      r.value.push(new f(c[s]));
    }
    for (let s = r.value.length - 1; s >= 0; s--) {
      const e = r.value[s];
      e.update(), e.completed ? r.value.splice(s, 1) : e.draw(h.value);
    }
  }
  const { resume: M } = T(x, { immediate: false });
  X(h, () => {
    a.value.width = a.value.offsetWidth * l.value, a.value.height = a.value.offsetHeight * l.value, h.value.scale(l.value, l.value), r.value = [];
    const s = Math.floor(u * 0.75);
    for (let e = 0; e < s; e++) {
      const t = new f(c[Math.floor(Math.random() * c.length)]), n = Math.random() * 0.8, o = t.duration * n;
      t.startTime = performance.now() - o;
      const i = o / 1e3;
      t.x = t.originalX + t.dx * i, t.y = t.originalY + t.dy * i, r.value.push(t);
    }
    M();
  });
  const y = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 11">
  <path stroke="${v.color}" stroke-linecap="round" stroke-width="2" d="M1.9 5h8M6 9V1"/>
</svg>`, p = new Image();
  p.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(y)}`;
  class f {
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
      __publicField(this, "speed", 0);
      __publicField(this, "initialOpacity", 0);
      __publicField(this, "duration", 0);
      __publicField(this, "completed", false);
      this.angle = e, this.reset();
    }
    reset() {
      if (!a.value) return;
      const e = a.value.width / l.value, t = a.value.height / l.value, n = e * 0.85, o = t * 0.15;
      this.originalX = n + (Math.random() * 30 - 15), this.originalY = o + (Math.random() * 30 - 15), this.x = this.originalX, this.y = this.originalY;
      const i = 1.2, d = 2.5;
      this.speed = Math.random() * (d - i) + i, this.dx = Math.cos(this.angle) * this.speed, this.dy = Math.sin(this.angle) * this.speed, this.size = Math.random() * 2.5 + 1.5, this.initialOpacity = Math.random() * 0.4 + 0.6, this.duration = Math.random() * 1e4 + 15e3, this.startTime = performance.now(), this.completed = false;
    }
    update() {
      const t = performance.now() - this.startTime;
      if (this.progress = t / this.duration, this.progress >= 1) {
        this.completed = true;
        return;
      }
      const n = t / 1e3;
      this.x = this.originalX + this.dx * n, this.y = this.originalY + this.dy * n;
    }
    draw(e) {
      const t = performance.now() - this.startTime, n = this.duration - t;
      let o = this.initialOpacity;
      if (t <= this.duration * 0.1) {
        const m = t / (this.duration * 0.1);
        o = this.initialOpacity * m;
      } else if (n <= this.duration * 0.1) {
        const m = n / (this.duration * 0.1);
        o = this.initialOpacity * m;
      }
      e.globalAlpha = o;
      const i = this.size * 5, d = this.x - i / 2, _ = this.y - i / 2;
      e.drawImage(p, d, _, i, i), e.globalAlpha = 1;
    }
  }
  return (s, e) => (R(), P("canvas", { ref_key: "canvas", ref: a, "pointer-events-none": "", "h-400": "", "w-600": "", "of-hidden": "" }, null, 512));
} }), B = Object.assign(Y, { __name: "AnimatedFloatingStars" });
export {
  B as _
};
