const fs = require('fs');
const path = require('path');

const NEW_SITE = '/Users/acharchula/repos-private/architektura-wnetrz-jkwilman/new-site';
const projects = require(path.join(NEW_SITE, 'data', 'projects.json'));

// New projects to add at the top (in the order specified by user)
const newProjects = [
  {
    slug: 'mieszkanie-w-warszawie-pow-29-m2',
    title: 'Mieszkanie w Warszawie – pow. 29 m2',
    category: 'wnetrza-prywatne',
    galleryFolder: 'mieszkanie-w-warszawie-29',
    firstImage: '10.jpg',
    images: []
  },
  {
    slug: 'mieszkanie-w-warszawie-pow-47-m2-4',
    title: 'Mieszkanie w Warszawie – pow. 47 m2',
    category: 'wnetrza-prywatne',
    galleryFolder: 'mieszkanie-w-warszawie-47-4',
    firstImage: '1.jpg',
    images: []
  },
  {
    slug: 'mieszkanie-w-warszawie-pow-34-m2',
    title: 'Mieszkanie w Warszawie – pow. 34 m2',
    category: 'wnetrza-prywatne',
    galleryFolder: 'mieszkanie-w-warszawie-34',
    firstImage: '1.jpg',
    images: []
  },
  {
    slug: 'dom-pod-warszawa-pow-270-m2',
    title: 'Dom pod Warszawa – pow. 270 m2',
    category: 'wnetrza-prywatne',
    galleryFolder: 'dom-pod-warszawa-270',
    firstImage: '001.JPG',
    images: []
  },
  {
    slug: 'mieszkanie-w-warszawie-pow-42-m2',
    title: 'Mieszkanie w Warszawie – pow. 42 m2',
    category: 'wnetrza-prywatne',
    galleryFolder: 'mieszkanie-w-warszawie-42',
    firstImage: '1.jpg',
    images: []
  }
];

console.log(`Adding ${newProjects.length} new projects at the top...\n`);

newProjects.forEach(project => {
  console.log(`+ ${project.title}`);
});

// Add new projects at the beginning
const updatedProjects = [...newProjects, ...projects];

// Save
fs.writeFileSync(
  path.join(NEW_SITE, 'data', 'projects.json'),
  JSON.stringify(updatedProjects, null, 2)
);

console.log(`\n✅ Added ${newProjects.length} new projects!`);
console.log(`Total projects: ${updatedProjects.length}`);
console.log('\nNow run: node scripts/add-images-to-projects.js');
