import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2015 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2015 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„Cztery Kąty” nr 3/2015",
    "gallery": "cztery-katy-3-2015",
    "images": [
      "/publications/cztery-katy-3-2015/001.jpg",
      "/publications/cztery-katy-3-2015/001a.jpg",
      "/publications/cztery-katy-3-2015/002.jpg"
    ]
  }
];

export default function Publication2015() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2015</span>
          </h1>
        </div>
      </div>

      <article className="max-w-6xl mx-auto">
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
      </article>
    </div>
  );
}
