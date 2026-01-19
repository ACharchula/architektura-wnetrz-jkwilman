import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2009 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2009 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„100% Wnętrza” nr 2/2009",
    "gallery": "100-wnetrza-2-2009",
    "images": [
      "/publications/100-wnetrza-2-2009/foto.jpg",
      "/publications/100-wnetrza-2-2009/okl.jpg"
    ]
  },
  {
    "magazine": "„Salon i Sypialnia” nr 11/2009",
    "gallery": "salon-i-sypialnia-11-2009",
    "images": [
      "/publications/salon-i-sypialnia-11-2009/foto.jpg",
      "/publications/salon-i-sypialnia-11-2009/okl.jpg"
    ]
  },
  {
    "magazine": "„Cztery Kąty” nr 11/2009",
    "gallery": "cztery-katy-11-2009",
    "images": [
      "/publications/cztery-katy-11-2009/foto.jpg",
      "/publications/cztery-katy-11-2009/okl.jpg"
    ]
  },
  {
    "magazine": "„Cztery Kąty” nr 7/2009",
    "gallery": "cztery-katy-7-2009",
    "images": [
      "/publications/cztery-katy-7-2009/foto.jpg",
      "/publications/cztery-katy-7-2009/okl.jpg"
    ]
  },
  {
    "magazine": "„Salon i Sypialnia” nr 3/2009",
    "gallery": "salon-i-sypialnia-3-2009",
    "images": [
      "/publications/salon-i-sypialnia-3-2009/foto.jpg",
      "/publications/salon-i-sypialnia-3-2009/okl.jpg"
    ]
  }
];

export default function Publication2009() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2009</span>
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
