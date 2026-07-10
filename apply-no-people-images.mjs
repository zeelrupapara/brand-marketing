#!/usr/bin/env node
/**
 * Download all 32 site images — no people, content-matched, professional B2B.
 * Every image must show visible, relevant content (no blank screens or mockups).
 */
import { writeFileSync, mkdirSync } from 'fs';
import { execSync } from 'child_process';

const UA = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36';

const SLOTS = [
  { file: 'images/hero.jpg', pexelsId: 33133736, w: 1920, h: 1080, note: 'Atlanta downtown skyline aerial' },
  { file: 'images/about-hero.jpg', pexelsId: 12181714, w: 1920, h: 1080, note: 'Carnegie building facade, Atlanta' },
  { file: 'images/services-hero.jpg', pexelsId: 9408388, w: 1920, h: 1080, note: 'Americasmart building, Atlanta' },
  { file: 'images/process-bg.jpg', pexelsId: 8761299, w: 1920, h: 1080, note: 'Empty conference room — brand planning process' },
  { file: 'images/contact.jpg', pexelsId: 5855873, w: 1200, h: 1500, note: 'Georgian Terrace Hotel, Atlanta' },
  { file: 'images/industry-hospitality.jpg', pexelsId: 33133743, w: 1920, h: 1080, note: 'Centennial Olympic Park, Atlanta — brand stewardship' },
  { file: 'images/brand-main.jpg', pexelsId: 572056, w: 1200, h: 800, note: 'Professional desk with analytics dashboard — digital brand improvement' },
  { file: 'images/brand-accent.jpg', pexelsId: 35242188, w: 1200, h: 800, note: 'Notebook and keyboard — content planning' },
  { file: 'images/about.jpg', pexelsId: 12786595, w: 1200, h: 800, note: 'Premium desk with monitor — professional brand environment' },
  { file: 'images/philosophy-impressions.jpg', pexelsId: 16229745, w: 1200, h: 800, note: 'Social media app icons — public brand impressions' },
  { file: 'images/engagements-consulting.jpg', pexelsId: 26459042, w: 1200, h: 800, note: '1180 Peachtree skyscraper, Atlanta — customized brand stewardship' },
  { file: 'images/industry-nonprofit.jpg', pexelsId: 38073459, w: 1600, h: 1200, note: 'Millennium Gate monument, Atlanta — civic nonprofits' },
  { file: 'images/industry-professional.jpg', pexelsId: 24247871, w: 1600, h: 1200, note: 'Georgia State Capitol, Atlanta — professional services' },
  { file: 'images/industry-healthcare.jpg', pexelsId: 19447467, w: 1600, h: 1200, note: 'Modern hospital exterior — healthcare' },
  { file: 'images/industry-realestate.jpg', pexelsId: 35344858, w: 1600, h: 1200, note: 'Historic Atlanta home exterior — real estate' },
  { file: 'images/industry-community.jpg', pexelsId: 31378788, w: 1600, h: 1200, note: 'Kennesaw State University building, Georgia — schools and education' },
  { file: 'images/industry-church.jpg', pexelsId: 30371684, w: 1600, h: 1200, note: 'Historic church exterior facade with skyline' },
  { file: 'images/industry-hospitality-business.jpg', pexelsId: 11605717, w: 1600, h: 1200, note: 'Atlanta Marriott Marquis luxury hotel interior' },
  { file: 'images/engagements-community.jpg', pexelsId: 33133727, w: 1600, h: 1200, note: 'Atlanta skyline at dusk — community organizations' },
  { file: 'images/industry-manufacturing.jpg', pexelsId: 30982491, w: 1600, h: 1200, note: 'Atlanta commercial building — private companies' },
  { file: 'images/why-us.jpg', pexelsId: 36149083, w: 1600, h: 1200, note: 'Modern conference room — leadership teams' },
  { file: 'images/industry-builders.jpg', pexelsId: 28715052, w: 1600, h: 1200, note: 'Modern open office with windows — growing organizations' },
  { file: 'images/service-photo.jpg', pexelsId: 6664770, w: 1200, h: 800, note: 'Professional camera and video equipment' },
  { file: 'images/service-brand.jpg', pexelsId: 36444009, w: 1200, h: 800, note: 'Modern conference room — schedule a brand review consultation' },
  { file: 'images/services-card-brand.jpg', pexelsId: 6476588, w: 1600, h: 1067, note: 'Monitor with brand analytics charts — digital brand management' },
  { file: 'images/services-card-social.jpg', pexelsId: 17614477, w: 1600, h: 1067, note: 'Smartphone with social apps on desk' },
  { file: 'images/services-card-messaging.jpg', pexelsId: 303532, w: 1600, h: 1067, note: 'Notebook and pen on desk — brand messaging' },
  { file: 'images/services-card-executive.jpg', pexelsId: 35058546, w: 1600, h: 1067, note: 'Modern executive office — leadership digital presence' },
  { file: 'images/services-card-photo.jpg', pexelsId: 35691842, w: 1600, h: 1067, note: 'Professional camera on tripod' },
  { file: 'images/services-card-video.jpg', pexelsId: 37033778, w: 1600, h: 1067, note: 'Video production cameras and tripods' },
  { file: 'images/services-card-reputation.jpg', pexelsId: 577210, w: 1600, h: 1067, note: 'Laptop with analytics dashboard — reputation monitoring' },
  { file: 'images/services-card-consistency.jpg', pexelsId: 37663439, w: 1600, h: 1067, note: 'Pantone color swatches — brand consistency' },
];

function pexelsUrl(id, w, h) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;
}

mkdirSync('images', { recursive: true });

const ids = SLOTS.map((s) => s.pexelsId);
const uniqueIds = new Set(ids);
if (uniqueIds.size !== ids.length) {
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  console.error('Duplicate Pexels IDs:', [...new Set(dupes)]);
  process.exit(1);
}

console.log(`Downloading ${SLOTS.length} images (${uniqueIds.size} unique Pexels IDs)...\n`);

const hashes = new Set();
for (const slot of SLOTS) {
  const url = pexelsUrl(slot.pexelsId, slot.w, slot.h);
  process.stdout.write(`${slot.file} ← ${slot.pexelsId} ... `);
  try {
    execSync(`curl -sL -A "${UA}" "${url}" -o "${slot.file}"`, { stdio: 'pipe' });
    const hash = execSync(`md5sum "${slot.file}"`).toString().split(' ')[0];
    if (hashes.has(hash)) {
      console.log('DUPLICATE CONTENT');
      process.exit(1);
    }
    hashes.add(hash);
    const size = execSync(`stat -c%s "${slot.file}"`).toString().trim();
    console.log(`OK (${(Number(size) / 1024).toFixed(0)} KB)`);
  } catch {
    console.log('FAILED');
    process.exit(1);
  }
}

writeFileSync(
  'playwright-screenshots/image-candidates/applied-selections.json',
  JSON.stringify(SLOTS.map(({ file, pexelsId, note }) => ({ file, pexelsId, note })), null, 2) + '\n'
);

console.log(`\nDone. ${SLOTS.length} images, ${uniqueIds.size} unique IDs, ${hashes.size} unique files.`);
