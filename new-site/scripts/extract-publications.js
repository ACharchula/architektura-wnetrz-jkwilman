const fs = require('fs');
const path = require('path');

const oldSiteDir = path.join(__dirname, '../../old-site');

// Publication years to extract
const publicationYears = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

const publications = [];

publicationYears.forEach(year => {
  const publicationPath = path.join(oldSiteDir, `2022/01/${year === 2007 ? '01' : '02'}/publikacje-${year}/index.html`);
  
  if (!fs.existsSync(publicationPath)) {
    console.log(`⚠️  File not found: ${publicationPath}`);
    return;
  }

  const html = fs.readFileSync(publicationPath, 'utf-8');
  
  // Extract title
  const titleMatch = html.match(/<h1 class="entry-title">(.*?)<\/h1>/);
  const title = titleMatch ? titleMatch[1] : `Publikacje ${year}`;
  
  // Extract all gallery folders
  const galleryMatches = html.matchAll(/\/wp-content\/gallery\/(.*?)\//g);
  const galleries = [...new Set([...galleryMatches].map(m => m[1]))];
  
  // Extract magazine titles (strong tags with magazine names)
  const magazineMatches = html.matchAll(/<strong>(.*?)<\/strong>/g);
  const magazines = [...magazineMatches].map(m => m[1].trim()).filter(m => m && !m.includes('<'));
  
  publications.push({
    year,
    title,
    slug: `publikacje-${year}`,
    galleries,
    magazines
  });
  
  console.log(`✓ ${title}: ${galleries.length} galleries`);
});

// Save to JSON
const outputPath = path.join(__dirname, '../data/publications.json');
fs.writeFileSync(outputPath, JSON.stringify(publications, null, 2));

console.log(`\n✅ Extracted ${publications.length} publications to data/publications.json`);
