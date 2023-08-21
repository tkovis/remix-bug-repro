import Prometheus from "prom-client";

let metric: Prometheus.Counter<string>;
declare global {
  var signInCounter4: typeof metric;
}

if (global.signInCounter4) {
  metric = global.signInCounter4;
} else {
  metric = new Prometheus.Counter({
    name: "sign_in_4_total",
    help: "A test to see if counters show up in metrics",
  });
  global.signInCounter4 = metric;
}

export const signInCounter4 = metric;
