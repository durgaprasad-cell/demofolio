const test = require("node:test");
const assert = require("node:assert");
const app = require("../server");

test("health, plans and portfolio endpoints respond", async () => {
  const server = app.listen(0);
  const base = `http://localhost:${server.address().port}`;
  try {
    assert.strictEqual((await (await fetch(base + "/health")).json()).status, "ok");
    const plans = await (await fetch(base + "/api/plans")).json();
    assert.ok(plans.disclaimer && plans.plans.length === 2);
    assert.strictEqual((await (await fetch(base + "/api/portfolio")).json()).simulated, true);
  } finally { server.close(); }
});
