import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2013 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2013 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„Cztery Kąty” nr 9/2013",
    "gallery": "cztery-katy-9-2013",
    "images": [
      "/publications/cztery-katy-9-2013/001.jpg",
      "/publications/cztery-katy-9-2013/002.jpg",
      "/publications/cztery-katy-9-2013/003.jpg"
    ]
  },
  {
    "magazine": "„Cztery Kąty” nr 5/2013",
    "gallery": "cztery-katy-5-2013",
    "images": [
      "/publications/cztery-katy-5-2013/001.jpg",
      "/publications/cztery-katy-5-2013/002.jpg",
      "/publications/cztery-katy-5-2013/003.jpg"
    ]
  },
  {
    "magazine": "„Świat Łazienek i Kuchni” nr 2/2013",
    "gallery": "swiat-lazienek-i-kuchni-2-2013",
    "images": [
      "/publications/swiat-lazienek-i-kuchni-2-2013/001.jpg",
      "/publications/swiat-lazienek-i-kuchni-2-2013/002.jpg",
      "/publications/swiat-lazienek-i-kuchni-2-2013/003.jpg"
    ]
  },
  {
    "magazine": "„M jak Mieszkanie” nr 2/2013",
    "gallery": "m-jak-mieszkanie-2-2013",
    "images": [
      "/publications/m-jak-mieszkanie-2-2013/001.jpg",
      "/publications/m-jak-mieszkanie-2-2013/002.jpg",
      "/publications/m-jak-mieszkanie-2-2013/003.jpg"
    ]
  }
];

export default function Publication2013() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2013</span>
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
