import { MetadataRoute } from 'next';
import projects from '@/data/projects.json';
import publications from '@/data/publications.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kwilman.com';
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/oferta`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realizacje`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/realizacje/wnetrza-prywatne`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/realizacje/wnetrza-uzytecznosci-publicznej`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publikacje`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/referencje`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/realizacje/${project.category}/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Publication pages
  const publicationPages: MetadataRoute.Sitemap = publications.map((publication) => ({
    url: `${baseUrl}/publikacje/${publication.slug}`,
    lastModified: currentDate,
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }));

  return [...staticPages, ...projectPages, ...publicationPages];
}
