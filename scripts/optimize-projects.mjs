import sharp from "sharp";
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, "..", "public", "projects");

async function main() {
  const files = (await readdir(dir)).filter((f) => f.endsWith(".png"));
  let savedBefore = 0;
  let savedAfter = 0;

  for (const f of files) {
    const src = path.join(dir, f);
    const dest = path.join(dir, f.replace(/\.png$/, ".webp"));
    const before = (await stat(src)).size;

    await sharp(src)
      .resize({ width: 1280, withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(dest);

    const after = (await stat(dest)).size;
    savedBefore += before;
    savedAfter += after;

    await unlink(src);
    console.log(
      `${f.padEnd(28)} ${(before / 1024).toFixed(0).padStart(5)} KB → ${(
        after / 1024
      )
        .toFixed(0)
        .padStart(5)} KB`,
    );
  }

  console.log(
    `\nTotal: ${(savedBefore / 1024 / 1024).toFixed(2)} MB → ${(
      savedAfter /
      1024 /
      1024
    ).toFixed(2)} MB (-${(((savedBefore - savedAfter) / savedBefore) * 100).toFixed(
      0,
    )}%)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
