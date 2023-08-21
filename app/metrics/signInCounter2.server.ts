import Prometheus from "prom-client";

let metric: Prometheus.Counter<string>;
declare global {
  var signInCounter2: typeof metric;
}

if (global.signInCounter2) {
  metric = global.signInCounter2;
} else {
  metric = new Prometheus.Counter({
    name: "sign_in_2_total",
    help: "A test to see if counters show up in metrics",
  });
  global.signInCounter2 = metric;
}

export const signInCounter2 = metric;
