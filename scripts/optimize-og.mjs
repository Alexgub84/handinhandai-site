import sharp from 'sharp';
import fs from 'fs';

async function optimize() {
  const files = [
    'public/og/fitness-studio/og.jpg',
    'public/og/fitness-chain/og.jpg'
  ];
  
  for (const file of files) {
    const beforeStats = fs.statSync(file);
    const before = beforeStats.size;
    
    await sharp(file)
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(file + '.tmp');
    
    const afterStats = fs.statSync(file + '.tmp');
    const after = afterStats.size;
    
    // Replace original
    fs.renameSync(file + '.tmp', file);
    
    const status = after < 300 * 1024 ? '✓' : '⚠';
    console.log(`${status} ${file}: ${(before/1024).toFixed(1)}KB → ${(after/1024).toFixed(1)}KB`);
  }
}

optimize();
