const fs = require('fs');
const path = require('path');

const NEW_SITE = '/Users/acharchula/repos-private/architektura-wnetrz-jkwilman/new-site';
const projects = require(path.join(NEW_SITE, 'data', 'projects.json'));

console.log(`Adding image lists to ${projects.length} projects...\n`);

const updatedProjects = projects.map((project) => {
  const imagesDir = path.join(NEW_SITE, 'public', 'projects', project.category, project.slug);
  
  let images = [];
  
  if (fs.existsSync(imagesDir)) {
    const files = fs.readdirSync(imagesDir);
    images = files
      .filter(f => {
        const lower = f.toLowerCase();
        return lower.endsWith('.jpg') || lower.endsWith('.webp');
      })
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)?.[0] || '999999');
        const numB = parseInt(b.match(/\d+/)?.[0] || '999999');
        return numA - numB;
      });
    
    console.log(`✓ ${project.slug}: ${images.length} images`);
  } else {
    console.log(`⚠️  ${project.slug}: directory not found`);
  }
  
  return {
    ...project,
    images
  };
});

// Save updated projects.json
fs.writeFileSync(
  path.join(NEW_SITE, 'data', 'projects.json'),
  JSON.stringify(updatedProjects, null, 2)
);

console.log(`\n✅ Updated projects.json with image lists!`);
