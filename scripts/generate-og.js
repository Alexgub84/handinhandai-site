#!/usr/bin/env node

/**
 * Generate OG images for Hand in Hand AI website
 * Uses Playwright to render HTML canvas and save as PNG/JPG
 */

import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOGImages() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Load the HTML generator
  const htmlPath = path.join(__dirname, 'generate-og-images.html');
  await page.goto(`file://${htmlPath}`);
  
  // Wait for canvas to be ready
  await page.waitForTimeout(1000);
  
  // Create output directories
  const ogDir = path.join(__dirname, '..', 'public', 'og');
  const homeDir = path.join(ogDir, 'home');
  const privacyDir = path.join(ogDir, 'privacy');
  
  [homeDir, privacyDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
  
  // Screenshot each canvas
  const canvases = [
    { id: 'homepage', path: path.join(homeDir, 'og.jpg') },
    { id: 'default', path: path.join(ogDir, 'default.jpg') },
    { id: 'privacy', path: path.join(privacyDir, 'og.jpg') },
  ];
  
  for (const { id, path: outputPath } of canvases) {
    const canvas = await page.locator(`#${id}`);
    await canvas.screenshot({ 
      path: outputPath,
      type: 'jpeg',
      quality: 85
    });
    console.log(`✓ Generated: ${outputPath}`);
    
    // Check file size
    const stats = fs.statSync(outputPath);
    const sizeKB = stats.size / 1024;
    if (sizeKB > 300) {
      console.warn(`  ⚠ Warning: ${outputPath} is ${sizeKB.toFixed(0)}KB (should be <300KB for WhatsApp)`);
    } else {
      console.log(`  Size: ${sizeKB.toFixed(0)}KB ✓`);
    }
  }
  
  await browser.close();
  console.log('\n✅ All OG images generated successfully');
}

generateOGImages().catch(console.error);
