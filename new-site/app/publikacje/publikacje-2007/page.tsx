import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2007 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2007 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„Salon i Sypialnia” nr 6/2007",
    "gallery": "salon-i-sypialnia-nr-6-2007",
    "images": [
      "/publications/salon-i-sypialnia-nr-6-2007/foto.jpg",
      "/publications/salon-i-sypialnia-nr-6-2007/okl.jpg"
    ]
  },
  {
    "magazine": "„Świat Łazienki i Kuchni” nr 6/2007",
    "gallery": "swiat-lazienki-i-kuchni-nr-6-2007",
    "images": [
      "/publications/swiat-lazienki-i-kuchni-nr-6-2007/foto.jpg",
      "/publications/swiat-lazienki-i-kuchni-nr-6-2007/okl.jpg"
    ]
  },
  {
    "magazine": "„Salon i Sypialnia” nr 5/2007",
    "gallery": "salon-i-sypialnia-nr-5-2007",
    "images": [
      "/publications/salon-i-sypialnia-nr-5-2007/foto.jpg",
      "/publications/salon-i-sypialnia-nr-5-2007/okl.jpg"
    ]
  },
  {
    "magazine": "„Świat Łazienki i Kuchni” nr 5/2007",
    "gallery": "swiat-lazienki-i-kuchni-nr-5-2007",
    "images": [
      "/publications/swiat-lazienki-i-kuchni-nr-5-2007/foto.jpg",
      "/publications/swiat-lazienki-i-kuchni-nr-5-2007/okl.jpg"
    ]
  }
];

export default function Publication2007() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2007</span>
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
