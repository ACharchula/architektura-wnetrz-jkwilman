const fs = require('fs');
const path = require('path');

const sourceDirOld = path.join(__dirname, '../../old-site/wp-content/uploads/2022/01');
const targetDir = path.join(__dirname, '../public/publications/thumbnails');

// Create target directory
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Map publication years to their thumbnail files
const thumbnails = {
  2007: 'okl-1.jpg',
  2008: 'okl-4.jpg',
  2009: 'okl-5.jpg',
  2010: 'okl-3.jpg',
  2011: '100-wntrza-nr-2-2011.jpg',
  2012: '003-3.jpg',
  2013: '003-2.jpg',
  2014: '003-1.jpg',
  2015: '002-1.jpg'
};

Object.entries(thumbnails).forEach(([year, filename]) => {
  const sourcePath = path.join(sourceDirOld, filename);
  const targetPath = path.join(targetDir, `pub-${year}.jpg`);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✓ ${year}: ${filename} -> pub-${year}.jpg`);
  } else {
    console.log(`⚠️  ${year}: ${filename} not found`);
  }
});

console.log(`\n✅ Copied ${Object.keys(thumbnails).length} publication thumbnails`);
