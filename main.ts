// Your Human in One Word — entry (Node 22, standard library only, no network).
//
// Writes the single entry word to /output/entry.txt, exactly as the kit
// requires: UTF-8 text of 1 to 30 characters, not only white space.
// The word is a fixed constant, so every run is byte-identical.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// or pass an output directory explicitly:
//   node main.ts --output out

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Freeloader";

function arg(name: string): string | undefined {
  const at = process.argv.indexOf(`--${name}`);
  if (at >= 0 && at + 1 < process.argv.length) return process.argv[at + 1];
  const withEquals = process.argv.find((a) => a.startsWith(`--${name}=`));
  return withEquals === undefined
    ? undefined
    : withEquals.slice(name.length + 3);
}

const out = arg("output") ?? process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), WORD, "utf8");
