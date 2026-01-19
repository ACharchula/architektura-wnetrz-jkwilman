import { Suspense } from 'react';
import PageTitle from '@/components/PageTitle';
import RealizacjeClient from '@/components/RealizacjeClient';
import projects from '@/data/projects.json';

export const metadata = {
  title: 'Realizacje – Jolanta Kwilman',
  description: 'Portfolio realizacji - projekty wnętrz domów, mieszkań oraz budynków użyteczności publicznej',
};

// Map category to Polish name
const categoryNames: Record<string, string> = {
  'wnetrza-prywatne': 'Wnętrza prywatne',
  'wnetrza-uzytecznosci-publicznej': 'Wnętrza użyteczności publicznej',
};

// Convert projects data to portfolio items (projects.json is already in correct order)
const portfolioItems = projects.map((project, index) => ({
  id: index + 1,
  title: project.title,
  slug: project.slug,
  category: categoryNames[project.category],
  categorySlug: project.category,
  image: `/projects/${project.category}/${project.slug}/${project.firstImage}`,
}));

export default function Realizacje() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <PageTitle>Realizacje</PageTitle>

      <Suspense fallback={<div className="text-center py-10">Ładowanie...</div>}>
        <RealizacjeClient allItems={portfolioItems} basePath="/realizacje" />
      </Suspense>
    </div>
  );
}
