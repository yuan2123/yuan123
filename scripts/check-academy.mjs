import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const posts = JSON.parse(readFileSync(resolve(root, "data/academy-posts.json"), "utf8"));
assert.equal(posts.length, 45);
for (const topic of ["knowledge", "companionship", "growth", "protection", "medical"]) {
  assert.equal(posts.filter(p => p.topic === topic).length, 9, topic);
}
assert.equal(new Set(posts.map(p => p.slug)).size, 45);
assert.equal(new Set(posts.map(p => p.cover)).size, 45);
for (const slug of ["family-asset-allocation", "high-income-cash-flow-security", "risk-before-return", "family-goals-before-products", "needs-and-wants-for-children", "family-emergency-reserve", "inflation-and-compounding", "business-and-family-money-boundary", "wealth-legacy-starts-with-consensus"]) {
  assert(posts.some(p => p.slug === slug), "Existing article URL lost: " + slug);
}
for (const post of posts) {
  assert(existsSync(resolve(root, "public" + post.cover)), "Missing cover: " + post.cover);
  assert(post.blocks.some(b => b.type === "heading"), post.id);
  const body = JSON.stringify(post.blocks);
  const visibleText = post.blocks.map(b => b.type === "table" ? b.rows.flat().join("") : b.text).join("").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\s/g, "");
  assert(visibleText.length >= 800, "Article too thin: " + post.id);
  for (const block of post.blocks) {
    if (block.type === "table") {
      assert(block.rows.length > 1, post.id);
      assert(block.rows.every(row => row.length === block.rows[0].length), post.id);
    }
  }
  for (const match of body.matchAll(/\]\(([^)]+)\)/g)) {
    assert.equal(new URL(match[1]).protocol, "https:", post.id);
  }
  if (post.coverKind === "diagram") {
    const svg = readFileSync(resolve(root, "public" + post.cover), "utf8");
    assert(!/<script|<foreignObject|\son\w+=|href=/i.test(svg), "Unsafe SVG: " + post.id);
  }
}
assert.equal(21000 - 16000 - 2000 - 1500 - 1000, 500);
assert.equal(3000 - 1500 - 800 - 300 - 800, -400);
assert.equal(100000 - 30000 - 60000, 10000);
assert.equal((35000 - 15000) - (50000 - 40000), 10000);
assert.equal(60000 - 18000, 42000);
assert.equal(42000 - 25000, 17000);
assert.equal(12000 * 3 + 10000, 46000);
assert.equal(10000 * 4 + 10000, 50000);
assert.equal(12 / 3, 20 / 5);
assert.equal(Math.round(10000 * 1.03 ** 10), 13439);
assert.equal(Math.round(10000 * 1.01 ** 10), 11046);
assert.equal(Math.round(10000 * 1.03 ** 10 - 3000 * 1.03 ** 5), 9961);
assert.equal(Math.round(10000 * 1.03 ** 2), 10609);
assert.equal(10000 * 1.2 * .86, 10320);
const compound = posts.find(p => p.id === "G05");
assert(JSON.stringify(compound).includes("9,961"), "Withdrawal result missing in published copy");
const allocation = posts.find(p => p.id === "K01");
const allocationText = JSON.stringify(allocation.blocks);
assert(allocationText.includes("三个月后") && allocationText.includes("预计十年后"), "Approved time-based example missing");
assert(allocationText.includes("日常开支和备用金都已另外留好"), "Example boundary missing");
assert(!allocationText.includes("尚待责任确认") && !allocationText.includes("200,000"), "Old allocation example remains");
console.log("Academy checks passed: 45 articles, 9 per topic, existing URLs, covers, table integrity and example arithmetic.");
