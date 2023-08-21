import Prometheus from "prom-client";

let metric: Prometheus.Counter<string>;
declare global {
  var signInCounter3: typeof metric;
}

if (global.signInCounter3) {
  metric = global.signInCounter3;
} else {
  metric = new Prometheus.Counter({
    name: "sign_in_3_total",
    help: "A test to see if counters show up in metrics",
  });
  global.signInCounter3 = metric;
}

export const signInCounter3 = metric;
