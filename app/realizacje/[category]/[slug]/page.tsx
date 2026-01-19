import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import ProjectGallery from '@/components/ProjectGallery';
import Link from 'next/link';
import projects from '@/data/projects.json';

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    category: project.category,
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ category: string; slug: string }> }) {
  const { category, slug } = await params;
  const project = projects.find(
    (p) => p.category === category && p.slug === slug
  );

  if (!project) {
    return {
      title: 'Projekt nie znaleziony',
    };
  }

  const baseUrl = 'https://kwilman.com';
  const projectUrl = `${baseUrl}/realizacje/${category}/${slug}`;
  const imageUrl = `${baseUrl}/projects/${category}/${slug}/${project.firstImage}`;
  
  // Extract size and location from title
  const sizeMatch = project.title.match(/pow\.?\s*(\d+)\s*m2/i);
  const size = sizeMatch ? `${sizeMatch[1]} m²` : '';
  const locationMatch = project.title.match(/^(.+?)\s*–/);
  const location = locationMatch ? locationMatch[1].trim() : project.title;
  
  const categoryName = category === 'wnetrza-prywatne' 
    ? 'Wnętrza prywatne' 
    : 'Wnętrza użyteczności publicznej';
  
  const description = `${project.title} - projekt wnętrza wykonany przez Pracownię Architektury Wnętrz Jolanta Kwilman. Zobacz galerię ${project.images.length} zdjęć realizacji.`;

  return {
    title: project.title,
    description,
    keywords: [
      'projekt wnętrza',
      location,
      size,
      categoryName,
      'Jolanta Kwilman',
      'architektura wnętrz',
    ],
    openGraph: {
      title: project.title,
      description,
      url: projectUrl,
      siteName: 'Jolanta Kwilman – Pracownia Architektury Wnętrz',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
      type: 'article',
      locale: 'pl_PL',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: projectUrl,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  // Await params
  const { category, slug } = await params;
  
  // Find the project
  const project = projects.find(
    (p) => p.category === category && p.slug === slug
  );

  // If project not found, show 404
  if (!project) {
    notFound();
  }

  // Extract size and clean title
  const sizeMatch = project.title.match(/(.+?)\s*–\s*pow\.?\s*(\d+)\s*m2/i);
  const cleanTitle = sizeMatch ? sizeMatch[1].trim() : project.title;
  const sizeNumber = sizeMatch ? sizeMatch[2] : null;

  // Category name
  const categoryName =
    category === 'wnetrza-prywatne'
      ? 'Wnętrza prywatne'
      : 'Wnętrza użyteczności publicznej';

  // Get images from project data
  const images = (project.images || []).map(
    (img: string) => `/projects/${category}/${slug}/${img}`
  );

  // Structured data for the project
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: project.title,
    description: `${project.title} - projekt wnętrza wykonany przez Pracownię Architektury Wnętrz Jolanta Kwilman`,
    url: `https://kwilman.com/realizacje/${category}/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Jolanta Kwilman',
      url: 'https://kwilman.com',
    },
    image: images.map((img) => `https://kwilman.com${img}`),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="py-8 sm:py-10 lg:py-12">
        <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h2 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/realizacje" className="hover:text-primary transition-colors">
              Realizacje
            </Link>
            <span className="text-gray-400"> · </span>
            <Link
              href={`/realizacje/${category}`}
              className="hover:text-primary transition-colors"
            >
              {categoryName}
            </Link>
            <span className="text-gray-400"> · </span>
            <span>{cleanTitle}</span>
            {sizeNumber && (
              <>
                <span className="text-gray-400"> · </span>
                <span>{sizeNumber} m²</span>
              </>
            )}
          </h2>
        </div>
      </div>

        <Suspense fallback={<div className="text-center py-10">Ładowanie...</div>}>
          <ProjectGallery images={images} projectTitle={project.title} />
        </Suspense>
      </div>
    </>
  );
}
