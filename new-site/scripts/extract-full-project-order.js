const fs = require('fs');
const path = require('path');

const projectsData = require('../data/projects.json');

// Define the order based on old site page 1
const orderedSlugs = [
  'mieszkanie-w-warszawie-pow-47-m2-3',
  'mieszkanie-w-warszawie-pow-68-m2',
  'dom-pod-grodziskiem-maz-pow-160-m2',
  'dom-w-warszawie-pow-180-m2',
  'dom-pod-warszawa-pow-160-m2',
  'mieszkanie-dwupoziomowe-w-warszawie-pow-140-m2',
  'dom-pod-ciechanowem-pow-160-m2',
  'dom-pod-warszawa-pow-250-m2',
  'dom-w-warszawie-pow-200-m2'
];

// Create ordered projects array
const orderedProjects = [];

// First, add projects in the specified order
orderedSlugs.forEach(slug => {
  const project = projectsData.find(p => p.slug === slug);
  if (project) {
    orderedProjects.push(project);
  } else {
    console.log(`⚠️  Project not found: ${slug}`);
  }
});

// Then add remaining wnetrza-prywatne projects
projectsData.forEach(project => {
  if (project.category === 'wnetrza-prywatne' && !orderedProjects.find(p => p.slug === project.slug)) {
    orderedProjects.push(project);
  }
});

// Finally add wnetrza-uzytecznosci-publicznej projects
projectsData.forEach(project => {
  if (project.category === 'wnetrza-uzytecznosci-publicznej') {
    orderedProjects.push(project);
  }
});

// Save ordered projects
fs.writeFileSync(
  path.join(__dirname, '../data/projects.json'),
  JSON.stringify(orderedProjects, null, 2)
);

console.log(`\n✅ Reordered ${orderedProjects.length} projects`);
console.log(`   Private interiors: ${orderedProjects.filter(p => p.category === 'wnetrza-prywatne').length}`);
console.log(`   Public interiors: ${orderedProjects.filter(p => p.category === 'wnetrza-uzytecznosci-publicznej').length}`);
