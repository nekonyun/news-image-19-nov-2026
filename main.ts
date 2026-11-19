// Entry program for news-image-20261119 (Node 22, standard library only).
// The entry image ships in this repository as entry.png; the program copies
// it into the grader's output directory, then verifies the copy byte for
// byte (SHA-256 of source vs destination) so a partial or corrupt copy fails
// loudly instead of silently grading a bad image. It needs no network, no
// fonts and no third-party packages, and it writes the same bytes on every
// run, so the grader's two runs agree byte for byte.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';

// The image beside this file, and where the grader wants it.
const SOURCE = new URL('./entry.png', import.meta.url);
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

function sha256(path: string): string {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

function copyEntry(): void {
  mkdirSync(OUT_DIR, { recursive: true });
  const dest = join(OUT_DIR, 'entry.png');
  copyFileSync(SOURCE, dest);
  if (sha256(SOURCE.pathname) !== sha256(dest)) {
    throw new Error('entry.png copy failed verification: destination differs from source');
  }
}

copyEntry();
