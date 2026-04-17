import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '../public/og-image.png');

const width = 1200;
const height = 630;

// Build SVG as the image source
const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f0f1a"/>
      <stop offset="50%" style="stop-color:#1a0a2e"/>
      <stop offset="100%" style="stop-color:#0f0f1a"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#FF72E1"/>
      <stop offset="100%" style="stop-color:#F54C7A"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bg)"/>

  <!-- Decorative circle -->
  <circle cx="1050" cy="120" r="200" fill="rgba(245,76,122,0.07)"/>
  <circle cx="150" cy="530" r="150" fill="rgba(255,114,225,0.05)"/>

  <!-- Top label -->
  <text x="80" y="120" font-family="system-ui, sans-serif" font-size="18" fill="#FF72E1" letter-spacing="4">JONAS-MIEDERER.DE</text>

  <!-- Name -->
  <text x="80" y="240" font-family="system-ui, sans-serif" font-size="80" font-weight="700" fill="url(#textGrad)">Jonas Miederer</text>

  <!-- Role -->
  <text x="80" y="310" font-family="system-ui, sans-serif" font-size="34" fill="#a0a0c0">Cloud Architect &amp; Software Engineer</text>

  <!-- Divider -->
  <rect x="80" y="350" width="80" height="3" fill="#FF72E1" rx="2"/>

  <!-- Tags -->
  ${['AWS', 'Serverless', 'TypeScript', 'Python', 'AI/ML'].map((tag, i) => {
    const x = 80 + i * 140;
    return `
    <rect x="${x}" y="390" width="120" height="40" rx="8" fill="rgba(255,114,225,0.12)" stroke="rgba(255,114,225,0.3)" stroke-width="1"/>
    <text x="${x + 60}" y="416" font-family="system-ui, sans-serif" font-size="16" fill="#FF72E1" text-anchor="middle">${tag}</text>`;
  }).join('')}
</svg>
`;

sharp(Buffer.from(svg))
    .png()
    .toFile(out)
    .then(() => console.log(`✓ OG image generated → ${out}`))
    .catch(err => console.error('✗', err.message));
