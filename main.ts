// Entry program for news-image-20261119 (Node 22, standard library only).
// The entry image ships in this repository as entry.png; the program copies
// it into the grader's output directory. It needs no network, no fonts and
// no third-party packages, and it writes the same bytes on every run, so the
// grader's two runs agree byte for byte.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

// The image beside this file, and where the grader wants it.
const SOURCE = new URL('./entry.png', import.meta.url);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function copyEntry(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  copyFileSync(SOURCE, join(OUT_DIR, 'entry.png'));
}

copyEntry();
