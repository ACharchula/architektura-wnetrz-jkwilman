// ⚠️ DEPRECATED - DO NOT USE
// This script is no longer needed. The site now uses dynamic routing.
// See HOW_TO_ADD_PROJECTS.md for instructions on adding new projects.
//
// To add a new project:
// 1. Add images to: public/projects/[category]/[slug]/
// 2. Add entry to data/projects.json (at the beginning for newest first)
// 3. Run: node scripts/add-images-to-projects.js
//
// That's it! No need to generate individual pages anymore.

console.log('⚠️  This script is DEPRECATED');
console.log('📖 See HOW_TO_ADD_PROJECTS.md for the new process');
process.exit(1);

const fs = require('fs');
const path = require('path');

const NEW_SITE = '/Users/acharchula/repos-private/architektura-wnetrz-jkwilman/new-site';
const projects = require(path.join(NEW_SITE, 'data', 'projects.json'));

console.log(`Generating ${projects.length} project pages...\n`);

for (const project of projects) {
  const { slug, title, category, galleryFolder } = project;
  
  // Create directory for the project
  const projectDir = path.join(NEW_SITE, 'app', 'realizacje', category, slug);
  fs.mkdirSync(projectDir, { recursive: true });
  
  // Get all images for this project
  const imagesDir = path.join(NEW_SITE, 'public', 'projects', category, slug);
  let imageFiles = [];
  
  if (fs.existsSync(imagesDir)) {
    imageFiles = fs.readdirSync(imagesDir)
      .filter(f => f.endsWith('.jpg'))
      .sort((a, b) => {
        // Sort numerically (001.jpg, 002.jpg, etc.)
        const numA = parseInt(a.match(/\d+/)?.[0] || '999999');
        const numB = parseInt(b.match(/\d+/)?.[0] || '999999');
        return numA - numB;
      });
  }
  
  // Extract size and clean title (handles "pow. 47 m2", "pow 70 m2", "pow 25m2")
  const sizeMatch = title.match(/(.+?)\s*–\s*pow\.?\s*(\d+)\s*m2/i);
  const cleanTitle = sizeMatch ? sizeMatch[1].trim() : title;
  const sizeNumber = sizeMatch ? sizeMatch[2] : null;
  
  // Generate the page content
  const categoryName = category === 'wnetrza-prywatne' ? 'Wnętrza prywatne' : 'Wnętrza użyteczności publicznej';
  const images = imageFiles.map(f => `/projects/${category}/${slug}/${f}`);
  
  const pageContent = `import { Suspense } from 'react';
import ProjectGallery from '@/components/ProjectGallery';
import Link from 'next/link';

export const metadata = {
  title: '${title} – Realizacje – Jolanta Kwilman',
  description: '${title} - projekt wnętrza wykonany przez Pracownię Architektury Wnętrz Jolanta Kwilman',
};

const images = ${JSON.stringify(images, null, 2)};

export default function ProjectPage() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h2 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/realizacje" className="hover:text-primary transition-colors">
              Realizacje
            </Link>
            <span className="text-gray-400"> · </span>
            <Link href="/realizacje/${category}" className="hover:text-primary transition-colors">
              ${categoryName}
            </Link>
            <span className="text-gray-400"> · </span>
            <span>${cleanTitle}</span>${sizeNumber ? `
            <span className="text-gray-400"> · </span>
            <span>${sizeNumber} m²</span>` : ''}
          </h2>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-10">Ładowanie...</div>}>
        <ProjectGallery images={images} projectTitle="${title}" />
      </Suspense>
    </div>
  );
}
`;

  // Write the page file
  const pagePath = path.join(projectDir, 'page.tsx');
  fs.writeFileSync(pagePath, pageContent);
  
  console.log(`✓ ${slug} (${imageFiles.length} images)`);
}

console.log(`\n✅ Generated ${projects.length} project pages!`);
