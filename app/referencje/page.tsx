import PageTitle from '@/components/PageTitle';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Referencje – Jolanta Kwilman',
  description: 'Referencje - opinie i rekomendacje klientów',
};

const references = [
  '/referencje/00001.jpg',
  '/referencje/0001.jpg',
  '/referencje/0002.jpg',
  '/referencje/0003.jpg',
  '/referencje/0003a.jpg',
  '/referencje/0004.jpg',
];

export default function Referencje() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <PageTitle>Referencje</PageTitle>

      <article className="max-w-6xl mx-auto">
        <div className="entry-content">
          <ReferencjeGallery images={references} />
        </div>
      </article>
    </div>
  );
}
