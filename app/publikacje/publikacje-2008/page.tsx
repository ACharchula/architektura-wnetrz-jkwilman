import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2008 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2008 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„Cztery Kąty” nr 12/2008",
    "gallery": "cztery-katy-12-2008",
    "images": [
      "/publications/cztery-katy-12-2008/foto.jpg",
      "/publications/cztery-katy-12-2008/okl.jpg"
    ]
  },
  {
    "magazine": "„100% Wnętrza” nr 3/2008",
    "gallery": "100-wnetrza-3-2008",
    "images": [
      "/publications/100-wnetrza-3-2008/foto.jpg",
      "/publications/100-wnetrza-3-2008/okl.jpg"
    ]
  },
  {
    "magazine": "„Salon i Sypialnia” nr 2/2008",
    "gallery": "salon-i-sypialnia-2-2008",
    "images": [
      "/publications/salon-i-sypialnia-2-2008/foto.jpg",
      "/publications/salon-i-sypialnia-2-2008/okl.jpg"
    ]
  },
  {
    "magazine": "„100% Wnętrza” nr 1/2008",
    "gallery": "100-wnetrza-1-2008",
    "images": [
      "/publications/100-wnetrza-1-2008/foto.jpg",
      "/publications/100-wnetrza-1-2008/okl.jpg"
    ]
  }
];

export default function Publication2008() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2008</span>
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
