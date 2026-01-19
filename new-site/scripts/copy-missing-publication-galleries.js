const fs = require('fs');
const path = require('path');

const publicationsData = require('../data/publications.json');

const oldSiteGalleries = path.join(__dirname, '../../old-site/wp-content/gallery');
const newSitePublications = path.join(__dirname, '../public/publications');

// Get all galleries from publications.json
const allGalleries = new Set();
publicationsData.forEach(pub => {
  pub.galleries.forEach(gallery => allGalleries.add(gallery));
});

console.log(`Found ${allGalleries.size} unique galleries in publications.json`);

// Check which ones are missing and copy them
let copied = 0;
let missing = 0;

allGalleries.forEach(gallery => {
  const targetPath = path.join(newSitePublications, gallery);
  
  if (!fs.existsSync(targetPath)) {
    const sourcePath = path.join(oldSiteGalleries, gallery);
    
    if (fs.existsSync(sourcePath)) {
      // Create target directory
      fs.mkdirSync(targetPath, { recursive: true });
      
      // Copy all .jpg files (not _backup)
      const files = fs.readdirSync(sourcePath)
        .filter(file => file.endsWith('.jpg') && !file.endsWith('.jpg_backup'));
      
      files.forEach(file => {
        fs.copyFileSync(
          path.join(sourcePath, file),
          path.join(targetPath, file)
        );
      });
      
      console.log(`✓ Copied ${gallery} (${files.length} images)`);
      copied++;
    } else {
      console.log(`⚠️  Missing: ${gallery} (not in old-site either)`);
      missing++;
    }
  }
});

console.log(`\n✅ Copied ${copied} missing galleries`);
if (missing > 0) {
  console.log(`⚠️  ${missing} galleries not found in old-site`);
}
