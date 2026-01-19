import { Suspense } from 'react';
import Link from 'next/link';
import RealizacjeClient from '@/components/RealizacjeClient';
import projects from '@/data/projects.json';

export const metadata = {
  title: 'Wnętrza prywatne – Realizacje – Jolanta Kwilman',
  description: 'Portfolio realizacji wnętrz prywatnych - projekty mieszkań i domów',
};

// Filter private interiors
const privateInteriors = projects
  .filter(project => project.category === 'wnetrza-prywatne')
  .map((project, index) => ({
    id: index + 1,
    title: project.title,
    slug: project.slug,
    category: 'Wnętrza prywatne',
    categorySlug: 'wnetrza-prywatne',
    image: `/projects/wnetrza-prywatne/${project.slug}/${project.firstImage}`,
  }));

export default function WnetrzaPrywatne() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h2 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/realizacje" className="hover:text-primary transition-colors">
              Realizacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Wnętrza prywatne</span>
          </h2>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-10">Ładowanie...</div>}>
        <RealizacjeClient allItems={privateInteriors} basePath="/realizacje/wnetrza-prywatne" />
      </Suspense>
    </div>
  );
}
