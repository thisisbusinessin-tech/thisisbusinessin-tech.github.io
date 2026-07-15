import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

test("organization schema includes required fields", () => {
  const source = readFileSync(join(root, "lib/schema/index.ts"), "utf8");
  assert.match(source, /@type": "Organization"/);
  assert.match(source, /siteConfig\.brand\.name/);
  assert.match(source, /siteConfig\.domain/);
});

test("article schema includes dates and author", () => {
  const source = readFileSync(join(root, "lib/schema/index.ts"), "utf8");
  assert.match(source, /@type": "Article"/);
  assert.match(source, /datePublished/);
  assert.match(source, /dateModified/);
});

test("site config keeps app download in placeholder state", () => {
  const source = readFileSync(join(root, "content/site/config.ts"), "utf8");
  assert.match(source, /url: null/);
  assert.match(source, /status: "placeholder"/);
});
