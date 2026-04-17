import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imgDir = join(__dirname, '../public/img');

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else if (/\.(png|jpg|jpeg)$/i.test(entry)) {
      const out = full.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const before = statSync(full).size;
      sharp(full)
        .resize({ width: 800, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(out)
        .then(() => {
          const after = statSync(out).size;
          const saved = (((before - after) / before) * 100).toFixed(1);
          console.log(`✓ ${entry} → webp  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`);
        })
        .catch(err => console.error(`✗ ${full}:`, err.message));
    }
  }
}

walk(imgDir);
