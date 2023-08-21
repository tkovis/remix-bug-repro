import Prometheus from "prom-client";

let metric: Prometheus.Counter<string>;
declare global {
  var signInCounter1: typeof metric;
}

if (global.signInCounter1) {
  metric = global.signInCounter1;
} else {
  metric = new Prometheus.Counter({
    name: "sign_in_1_total",
    help: "A test to see if counters show up in metrics",
  });
  global.signInCounter1 = metric;
}

export const signInCounter1 = metric;
