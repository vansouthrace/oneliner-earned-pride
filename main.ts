// One Line of Earned Pride
// Writes a single line (1 to 240 characters) about a quiet, earned moment
// of pride for someone in a scene, to /output/entry.txt.
// The pride has to be earned in a concrete scene with a real person, and
// land in a single read: a long effort finally landing, told quietly.

import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The old fisherman mended his nets alone for forty years; this morning his grandson sat beside him, threaded the needle right on the first try, and the old man said nothing. He just handed him the net.";

if (entry.length < 1 || entry.length > 240) {
  throw new Error(`entry must be 1-240 characters, got ${entry.length}`);
}

if (entry.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

if (entry.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} characters to /output/entry.txt`);
