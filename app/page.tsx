import { Suspense } from 'react';
import RealizacjeClient from '@/components/RealizacjeClient';
import projects from '@/data/projects.json';

// Map category to Polish name
const categoryNames: Record<string, string> = {
  'wnetrza-prywatne': 'Wnętrza prywatne',
  'wnetrza-uzytecznosci-publicznej': 'Wnętrza użyteczności publicznej',
};

// All projects for home page
const allProjects = projects.map((project, index) => ({
  id: index + 1,
  title: project.title,
  slug: project.slug,
  category: categoryNames[project.category],
  categorySlug: project.category,
  image: `/projects/${project.category}/${project.slug}/${project.firstImage}`,
}));

export default function Home() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h2 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">Najnowsze realizacje</h2>
        </div>
      </div>

      <Suspense fallback={<div className="text-center py-10">Ładowanie...</div>}>
        <RealizacjeClient allItems={allProjects} basePath="/" />
      </Suspense>
    </div>
  );
}
