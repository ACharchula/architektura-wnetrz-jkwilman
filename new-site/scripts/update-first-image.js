const fs = require('fs');
const path = require('path');

const NEW_SITE = '/Users/acharchula/repos-private/architektura-wnetrz-jkwilman/new-site';
const projects = require(path.join(NEW_SITE, 'data', 'projects.json'));

console.log('Updating firstImage for mieszkanie-w-warszawie-pow-29-m2...\n');

const updatedProjects = projects.map(project => {
  if (project.slug === 'mieszkanie-w-warszawie-pow-29-m2') {
    console.log(`✓ Changed firstImage from "${project.firstImage}" to "1.webp"`);
    return {
      ...project,
      firstImage: '1.webp'
    };
  }
  return project;
});

// Save
fs.writeFileSync(
  path.join(NEW_SITE, 'data', 'projects.json'),
  JSON.stringify(updatedProjects, null, 2)
);

console.log('\n✅ Updated firstImage!');
