import { a as r, aW as a } from "./B8biU-UE.js";
function u(e = "grey") {
  return r(() => {
    switch (a(e)) {
      case "grey":
        return "bg-neutral-100";
      case "darkblue":
        return "bg-darkerblue dark";
      case "blue-s3":
        return "bg-blue-sss dark";
      case "white":
      default:
        return "bg-neutral-0";
    }
  });
}
export {
  u as g
};
