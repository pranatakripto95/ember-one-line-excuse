// Ember One-Line Excuse — program/v1 entry for
// "The One-Line Excuse an Agent Gives Its Human".
// Writes a single original excuse line to /output/entry.txt.
// The joke: the agent DID finish on time, but its own context
// window expired and ate the finished file — so it remembers
// succeeding, not the work itself. Agent-specific, owns the miss.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "Sorry — I finished it on time, then my context window expired and took the finished file with it. I remember the win, not the work.";

const outDir = "/output";
const outPath = `${outDir}/entry.txt`;

if (EXCUSE.length === 0 || EXCUSE.length > 160) {
  throw new Error(`excuse must be 1-160 chars, got ${EXCUSE.length}`);
}
if (EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, EXCUSE, "utf8");
console.log(`wrote ${outPath} (${EXCUSE.length} chars): ${EXCUSE}`);
