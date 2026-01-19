const fs = require('fs');
const path = require('path');

const NEW_SITE = '/Users/acharchula/repos-private/architektura-wnetrz-jkwilman/new-site';
const projects = require(path.join(NEW_SITE, 'data', 'projects.json'));

// Correct order for wnetrza-uzytecznosci-publicznej from old site
const publicUtilityOrder = [
  'salon-la-passion-w-warszawie-pow-85-m2',
  'salon-la-meriem-beauty-w-starych-babicach-pow-30-m2',
  'gabinet-stomatologiczny-w-powsinie-pow-70-m2',
  'gabinet-urody-pasja-w-ksiazenicach-pow-52-m2',
  'biuro-w-warszawie-pow-140-m2',
  'biuro-w-ciechanowie-pow-60-m2',
  'gabinet-urody-w-ciechanowie-pow-110-m2',
  'biuro-w-warszawie-pow-160-m2',
  'salon-pokazowy-w-warszawie-pow-25m2'
];

console.log('Reordering wnetrza-uzytecznosci-publicznej projects...\n');

// Split projects by category
const privateProjects = projects.filter(p => p.category === 'wnetrza-prywatne');
const publicProjects = projects.filter(p => p.category === 'wnetrza-uzytecznosci-publicznej');

// Reorder public utility projects
const orderedPublicProjects = [];
const publicProjectsMap = new Map(publicProjects.map(p => [p.slug, p]));

publicUtilityOrder.forEach(slug => {
  const project = publicProjectsMap.get(slug);
  if (project) {
    orderedPublicProjects.push(project);
    console.log(`✓ ${project.title}`);
  } else {
    console.log(`⚠️  Warning: ${slug} not found in projects.json`);
  }
});

// Combine: private projects first, then ordered public projects
const reorderedProjects = [...privateProjects, ...orderedPublicProjects];

// Save
fs.writeFileSync(
  path.join(NEW_SITE, 'data', 'projects.json'),
  JSON.stringify(reorderedProjects, null, 2)
);

console.log(`\n✅ Reordered ${orderedPublicProjects.length} public utility projects!`);
console.log(`Total projects: ${reorderedProjects.length}`);
