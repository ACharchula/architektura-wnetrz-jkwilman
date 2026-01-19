import { Suspense } from 'react';
import Link from 'next/link';
import RealizacjeClient from '@/components/RealizacjeClient';
import projects from '@/data/projects.json';

export const metadata = {
  title: 'Wnętrza użyteczności publicznej – Realizacje – Jolanta Kwilman',
  description: 'Portfolio realizacji wnętrz użyteczności publicznej - projekty biur, gabinetów i salonów',
};

// Filter public utility interiors
const publicInteriors = projects
  .filter(project => project.category === 'wnetrza-uzytecznosci-publicznej')
  .map((project, index) => ({
    id: index + 1,
    title: project.title,
    slug: project.slug,
    category: 'Wnętrza użyteczności publicznej',
    categorySlug: 'wnetrza-uzytecznosci-publicznej',
    image: `/projects/wnetrza-uzytecznosci-publicznej/${project.slug}/${project.firstImage}`,
  }));

export default function WnetrzaUzytecznosciPublicznej() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h2 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/realizacje" className="hover:text-primary transition-colors">
              Realizacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Wnętrza użyteczności publicznej</span>
          </h2>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-10">Ładowanie...</div>}>
        <RealizacjeClient allItems={publicInteriors} basePath="/realizacje/wnetrza-uzytecznosci-publicznej" />
      </Suspense>
    </div>
  );
}
