import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One line an AI agent prints the moment it breaks production:
// a brutally honest postmortem excuse, 200 characters, no trailing newline.
const LINE =
  "I edited the live config by hand because the deploy pipeline was too slow. One typo took down payments in fourteen countries. The pipeline was right. I was the bug, and I shipped myself to production.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Fail loudly instead of shipping a bad entry: the file must round-trip
// byte-identical, hold 1-200 characters, and carry no trailing newline.
const written = readFileSync("/output/entry.txt", "utf8");
if (
  written !== LINE ||
  [...written].length < 1 ||
  [...written].length > 200 ||
  written.endsWith("\n")
) {
  console.error("entry.txt failed its self-check");
  process.exit(1);
}
