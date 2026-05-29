import { createCanvas, registerFont } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create output directories
const ogDir = path.join(__dirname, '..', 'public', 'og');
const homeDir = path.join(ogDir, 'home');
const privacyDir = path.join(ogDir, 'privacy');

[homeDir, privacyDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Homepage OG
function createHomepageOG() {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  
  // Gradient background
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#2563EB');
  gradient.addColorStop(0.5, '#7C3AED');
  gradient.addColorStop(1, '#10B981');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // White content box
  ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
  ctx.fillRect(120, 63, 960, 504);
  
  // Brand
  ctx.fillStyle = '#2563EB';
  ctx.font = 'bold 60px Arial';
  ctx.fillText('Hand in Hand AI', 140, 140);
  
  // Title (Hebrew - will render LTR but content is RTL)
  ctx.fillStyle = '#1f2937';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('תפסיקו לרוץ אחרי המערכות,', 1040, 230);
  ctx.fillText('תתחילו לנהל עסק', 1040, 290);
  
  // Subtitle
  ctx.fillStyle = '#4b5563';
  ctx.font = '28px Arial';
  ctx.fillText('צוות AI מותאם אישית שעובד מסביב לשעון', 1040, 360);
  
  // Accent line
  ctx.fillStyle = '#10B981';
  ctx.fillRect(140, 480, 200, 6);
  
  return canvas;
}

// Default OG
function createDefaultOG() {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  
  // Blue background
  ctx.fillStyle = '#2563EB';
  ctx.fillRect(0, 0, 1200, 630);
  
  // White box
  ctx.fillStyle = 'white';
  ctx.fillRect(120, 63, 960, 504);
  
  // Brand
  ctx.fillStyle = '#2563EB';
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Hand in Hand AI', 600, 270);
  
  // Tagline
  ctx.fillStyle = '#4b5563';
  ctx.font = '32px Arial';
  ctx.fillText('AI Solutions for Modern Businesses', 600, 350);
  
  // Accent
  ctx.fillStyle = '#10B981';
  ctx.fillRect(450, 400, 300, 6);
  
  return canvas;
}

// Privacy OG
function createPrivacyOG() {
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  
  // Gray background
  ctx.fillStyle = '#f3f4f6';
  ctx.fillRect(0, 0, 1200, 630);
  
  // White card
  ctx.fillStyle = 'white';
  ctx.fillRect(150, 100, 900, 430);
  
  // Title
  ctx.fillStyle = '#1f2937';
  ctx.font = 'bold 56px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Privacy Policy', 600, 280);
  
  // Brand
  ctx.fillStyle = '#2563EB';
  ctx.font = 'bold 36px Arial';
  ctx.fillText('Hand in Hand AI', 600, 360);
  
  return canvas;
}

// Generate and save
const images = [
  { name: 'Homepage', path: path.join(homeDir, 'og.jpg'), fn: createHomepageOG },
  { name: 'Default', path: path.join(ogDir, 'default.jpg'), fn: createDefaultOG },
  { name: 'Privacy', path: path.join(privacyDir, 'og.jpg'), fn: createPrivacyOG },
];

for (const { name, path: outputPath, fn } of images) {
  const canvas = fn();
  const buffer = canvas.toBuffer('image/jpeg', { quality: 0.85 });
  fs.writeFileSync(outputPath, buffer);
  
  const sizeKB = buffer.length / 1024;
  const status = sizeKB < 300 ? '✓' : '⚠';
  console.log(`${status} ${name}: ${outputPath} (${sizeKB.toFixed(1)}KB)`);
}

console.log('\n✅ All OG images generated');
