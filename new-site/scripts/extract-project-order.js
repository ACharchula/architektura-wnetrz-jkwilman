const fs = require('fs');
const path = require('path');

const pages = [
  'category/realizacje/index.html',
  'category/realizacje/page/2/index.html',
  'category/realizacje/page/3/index.html',
  'category/realizacje/page/4/index.html',
  'category/realizacje/page/5/index.html'
];

const projects = [];

pages.forEach((page, pageNum) => {
  const filePath = path.join(__dirname, '../../old-site', page);
  
  if (!fs.existsSync(filePath)) {
    console.log(`Page ${pageNum + 1} not found`);
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf-8');
  
  // Extract project links and titles
  const regex = /<h3 class="type-portfolio-title"><a href="([^"]+)" rel="bookmark">([^<]+)<\/a><\/h3>/g;
  let match;
  
  while ((match = regex.exec(html)) !== null) {
    const url = match[1];
    const title = match[2];
    
    // Extract slug from URL (last segment before trailing slash)
    const slugMatch = url.match(/\/([^\/]+)\/?$/);
    const slug = slugMatch ? slugMatch[1] : null;
    
    if (slug && title) {
      projects.push({ slug, title });
      console.log(`${projects.length}. ${title}`);
    }
  }
});

console.log(`\n✅ Found ${projects.length} projects in order`);

// Save to file
fs.writeFileSync(
  path.join(__dirname, '../data/project-order.json'),
  JSON.stringify(projects, null, 2)
);
