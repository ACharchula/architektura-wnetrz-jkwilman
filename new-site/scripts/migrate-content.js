const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const OLD_SITE = '/Users/acharchula/repos-private/architektura-wnetrz-jkwilman/old-site';
const NEW_SITE = '/Users/acharchula/repos-private/architektura-wnetrz-jkwilman/new-site';
const PROJECTS_DIR = `${OLD_SITE}/2022/01/02`;

// Helper to read HTML and extract info
function extractProjectInfo(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf-8');
  
  // Extract title
  const titleMatch = html.match(/<h1 class="entry-title">(.*?)<\/h1>/);
  const title = titleMatch ? titleMatch[1] : '';
  
  // Extract category from article class (more reliable)
  const categoryMatch = html.match(/class="[^"]*category-(wnetrza-prywatne|wnetrza-uzytecznosci-publicznej)[^"]*"/);
  const category = categoryMatch ? categoryMatch[1] : null;
  
  // Extract gallery path
  const galleryMatch = html.match(/\/wp-content\/gallery\/([\w-]+)\//);
  const galleryFolder = galleryMatch ? galleryMatch[1] : null;
  
  // Get first image as thumbnail
  const thumbMatch = html.match(/\/wp-content\/gallery\/([\w-]+)\/([\w.]+)/);
  const firstImage = thumbMatch ? thumbMatch[2] : null;
  
  return { title, category, galleryFolder, firstImage };
}

// Get all project directories
const projectDirs = fs.readdirSync(PROJECTS_DIR).filter(dir => {
  const fullPath = path.join(PROJECTS_DIR, dir);
  return fs.statSync(fullPath).isDirectory() && !dir.startsWith('publikacje');
});

const projects = [];

console.log(`Found ${projectDirs.length} projects to migrate...\n`);

// Extract info for each project
for (const slug of projectDirs) {
  const htmlPath = path.join(PROJECTS_DIR, slug, 'index.html');
  
  if (!fs.existsSync(htmlPath)) {
    console.log(`⚠️  No HTML file for ${slug}`);
    continue;
  }
  
  const info = extractProjectInfo(htmlPath);
  
  if (!info.category) {
    console.log(`⚠️  No category found for ${slug}`);
    continue;
  }
  
  projects.push({
    slug,
    ...info
  });
  
  console.log(`✓ ${info.title} [${info.category}]`);
}

// Save project data to JSON
const dataPath = path.join(NEW_SITE, 'data', 'projects.json');
fs.mkdirSync(path.dirname(dataPath), { recursive: true });
fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2));

console.log(`\n✓ Saved ${projects.length} projects to data/projects.json`);

// Copy images for each project
console.log('\nCopying images...\n');

for (const project of projects) {
  if (!project.galleryFolder) {
    console.log(`⚠️  No gallery for ${project.slug}`);
    continue;
  }
  
  const sourceGallery = path.join(OLD_SITE, 'wp-content', 'gallery', project.galleryFolder);
  
  if (!fs.existsSync(sourceGallery)) {
    console.log(`⚠️  Gallery not found: ${project.galleryFolder}`);
    continue;
  }
  
  // Create destination directory with descriptive name
  const destDir = path.join(NEW_SITE, 'public', 'projects', project.category, project.slug);
  fs.mkdirSync(destDir, { recursive: true });
  
  // Copy all .jpg files (excluding _backup files)
  const files = fs.readdirSync(sourceGallery);
  const jpgFiles = files.filter(f => f.endsWith('.jpg') && !f.endsWith('_backup'));
  
  for (const file of jpgFiles) {
    const src = path.join(sourceGallery, file);
    const dest = path.join(destDir, file);
    
    try {
      fs.copyFileSync(src, dest);
    } catch (err) {
      console.log(`Error copying ${file}: ${err.message}`);
    }
  }
  
  console.log(`✓ ${project.slug}: ${jpgFiles.length} images`);
}

console.log('\n✅ Migration complete!');
