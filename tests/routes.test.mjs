import assert from "node:assert/strict";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "out");

function collectHtmlFiles(dir, base = "") {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const rel = join(base, entry);
    if (statSync(full).isDirectory()) {
      files.push(...collectHtmlFiles(full, rel));
    } else if (entry === "index.html") {
      files.push(rel.replace(/\\/g, "/"));
    }
  }
  return files;
}

test("static export includes core routes", () => {
  assert.ok(existsSync(outDir), "Run npm run build before tests");

  const htmlPaths = collectHtmlFiles(outDir);
  const required = [
    "index.html",
    "how-it-works/index.html",
    "services/index.html",
    "blog/index.html",
    "faq/index.html",
    "privacy-policy/index.html",
    "terms/index.html",
    "sitemap.xml",
    "robots.txt"
  ];

  for (const route of required) {
    assert.ok(htmlPaths.includes(route) || existsSync(join(outDir, route)), `Missing export: ${route}`);
  }
});
