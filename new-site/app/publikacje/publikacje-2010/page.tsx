import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2010 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2010 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„Świat Łazienki i Kuchni” nr 6/2010",
    "gallery": "siwat-lazienki-i-kuchnii-6-2010",
    "images": [
      "/publications/siwat-lazienki-i-kuchnii-6-2010/foto.jpg",
      "/publications/siwat-lazienki-i-kuchnii-6-2010/okl.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj” nr 11/2010",
    "gallery": "dobrze-mieszkaj-11-2010",
    "images": [
      "/publications/dobrze-mieszkaj-11-2010/foto.jpg",
      "/publications/dobrze-mieszkaj-11-2010/okl.jpg"
    ]
  },
  {
    "magazine": "„Beauty Forum” nr 7-8/2010",
    "gallery": "beauty-forum-7-8-2010",
    "images": [
      "/publications/beauty-forum-7-8-2010/foto.jpg",
      "/publications/beauty-forum-7-8-2010/okl.jpg"
    ]
  }
];

export default function Publication2010() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2010</span>
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
