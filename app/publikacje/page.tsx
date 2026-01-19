import PageTitle from '@/components/PageTitle';
import Link from 'next/link';
import Image from 'next/image';
import publications from '@/data/publications.json';

export const metadata = {
  title: 'Publikacje – Jolanta Kwilman',
  description: 'Publikacje - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

// Reverse the order to show newest first
const sortedPublications = [...publications].reverse();

export default function Publikacje() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <PageTitle>Publikacje</PageTitle>

      <article className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-10 text-foreground font-light text-sm sm:text-base">
          <p className="mb-2">Realizacje pracowni są prezentowane na łamach pism wnętrzarskich.</p>
          <p>Pracownia jest partnerem Akademii Dobrze Mieszkaj.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sortedPublications.map((publication) => (
            <div key={publication.year} className="type-portfolio bg-white rounded-sm shadow-[0_0_2px_rgba(0,0,0,0.1),0_1px_0_rgba(0,0,0,0.04),0_16px_16px_rgba(0,0,0,0.02)]">
              <Link
                href={`/publikacje/${publication.slug}`}
                className="block p-5"
              >
                <div className="type-portfolio-thumb mb-4 overflow-hidden">
                  <div className="relative w-full aspect-[400/551]">
                    <Image
                      src={`/publications/thumbnails/pub-${publication.year}.jpg`}
                      alt={publication.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
                <div className="type-portfolio-content">
                  <h3 className="type-portfolio-title">
                    <span className="block text-[17px] font-normal leading-[22px] text-[#333] overflow-hidden text-ellipsis whitespace-nowrap hover:text-[#333]">
                      {publication.title}
                    </span>
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
