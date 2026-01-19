import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2014 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2014 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„Dobrze Mieszkaj” nr 4/2014",
    "gallery": "dobrze-mieszkaj-4-2014",
    "images": [
      "/publications/dobrze-mieszkaj-4-2014/001-2.jpg",
      "/publications/dobrze-mieszkaj-4-2014/002.jpg",
      "/publications/dobrze-mieszkaj-4-2014/003.jpg"
    ]
  },
  {
    "magazine": "„Świat Łazienek i Kuchni” nr 6/2014",
    "gallery": "swiat-lazienek-i-kuchni-6-2014",
    "images": [
      "/publications/swiat-lazienek-i-kuchni-6-2014/01.jpg",
      "/publications/swiat-lazienek-i-kuchni-6-2014/02.jpg",
      "/publications/swiat-lazienek-i-kuchni-6-2014/03.jpg"
    ]
  },
  {
    "magazine": "„100% Wnętrza – nr 2/2014”",
    "gallery": "100-wnetrza-2-2014",
    "images": [
      "/publications/100-wnetrza-2-2014/01.jpg",
      "/publications/100-wnetrza-2-2014/02.jpg",
      "/publications/100-wnetrza-2-2014/03.jpg"
    ]
  }
];

export default function Publication2014() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2014</span>
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
