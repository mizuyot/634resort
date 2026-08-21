#!/usr/bin/env node
const urls = [
  process.env.STAGING_URL || "https://634resort-web-staging.mizuyot.workers.dev/api/health",
  process.env.PROD_WORKERS_URL || "https://634resort-web.mizuyot.workers.dev/api/health",
  "https://634resort.com/api/health",
  "https://634resort.com/",
];

const results = [];
for (const url of urls) {
  try {
    const res = await fetch(url, { redirect: "follow" });
    results.push({ url, ok: res.ok, status: res.status });
  } catch (err) {
    results.push({ url, ok: false, error: String(err) });
  }
}

const failed = results.filter((r) => !r.ok);
for (const r of results) {
  console.log(JSON.stringify(r));
}
if (failed.length) {
  process.exit(1);
}
