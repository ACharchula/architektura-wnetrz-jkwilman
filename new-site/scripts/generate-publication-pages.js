const fs = require('fs');
const path = require('path');

const publicationsData = require('../data/publications.json');

publicationsData.forEach((pub) => {
  const dirPath = path.join(__dirname, `../app/publikacje/${pub.slug}`);
  
  // Create directory
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  // Group galleries with magazine names
  const sections = pub.magazines.map((magazine, idx) => ({
    magazine,
    gallery: pub.galleries[idx]
  }));
  
  // Generate images array for each section
  const sectionsWithImages = sections.map(section => {
    const galleryPath = path.join(__dirname, '../../old-site/wp-content/gallery', section.gallery);
    let images = [];
    
    if (fs.existsSync(galleryPath)) {
      images = fs.readdirSync(galleryPath)
        .filter(file => file.endsWith('.jpg') && !file.endsWith('.jpg_backup'))
        .map(file => `/publications/${section.gallery}/${file}`);
    }
    
    return {
      ...section,
      images
    };
  });
  
  // Generate page content
  const pageContent = `import PageTitle from '@/components/PageTitle';
import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: '${pub.title} – Publikacje – Jolanta Kwilman',
  description: 'Publikacje ${pub.year} - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = ${JSON.stringify(sectionsWithImages, null, 2)};

export default function Publication${pub.year}() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-4 sm:mb-5">
        <div className="page-title-inner group">
          <h2 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
          </h2>
        </div>
      </div>

      <header className="entry-header mb-8 sm:mb-10">
        <h1 className="entry-title text-xl sm:text-2xl font-light text-foreground">${pub.title}</h1>
      </header>

      <article className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10 text-foreground font-light text-sm sm:text-base">
          <p className="mb-2">Realizacje pracowni są prezentowane na łamach pism wnętrzarskich.</p>
          <p>Pracownia jest partnerem Akademii Dobrze Mieszkaj.</p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {sections.map((section, idx) => (
            <div key={idx} className="publication-section">
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6">
                {section.magazine}
              </h3>
              {section.images.length > 0 && (
                <ReferencjeGallery images={section.images} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <Link href="/publikacje" className="text-xs sm:text-sm text-gray-500 hover:text-primary transition-colors">
            ← Powrót do publikacji
          </Link>
        </div>
      </article>
    </div>
  );
}
`;
  
  // Write page.tsx
  fs.writeFileSync(path.join(dirPath, 'page.tsx'), pageContent);
  console.log(`✓ ${pub.title}: ${sections.length} sections, ${sectionsWithImages.reduce((sum, s) => sum + s.images.length, 0)} images`);
});

console.log(`\n✅ Generated ${publicationsData.length} publication pages!`);
