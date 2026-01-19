import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2012 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2012 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„Świat Łazienek i Kuchni” nr 6/2012",
    "gallery": "swiat-lazienek-i-kuchni-6-2012",
    "images": [
      "/publications/swiat-lazienek-i-kuchni-6-2012/001.jpg",
      "/publications/swiat-lazienek-i-kuchni-6-2012/002.jpg",
      "/publications/swiat-lazienek-i-kuchni-6-2012/003.jpg"
    ]
  },
  {
    "magazine": "„M jak Mieszkanie” nr 11/2012",
    "gallery": "m-jak-mieszkanie-11-2012",
    "images": [
      "/publications/m-jak-mieszkanie-11-2012/001.jpg",
      "/publications/m-jak-mieszkanie-11-2012/002.jpg",
      "/publications/m-jak-mieszkanie-11-2012/003.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj” nr 5/2012",
    "gallery": "dobrze-mieszkaj-5-2012",
    "images": [
      "/publications/dobrze-mieszkaj-5-2012/001.jpg",
      "/publications/dobrze-mieszkaj-5-2012/002.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj” nr 4/2012",
    "gallery": "dobrze-mieszkaj-4-2012",
    "images": [
      "/publications/dobrze-mieszkaj-4-2012/001.jpg",
      "/publications/dobrze-mieszkaj-4-2012/002.jpg"
    ]
  },
  {
    "magazine": "„kuchnie pl” nr 1/2012",
    "gallery": "kuchnie-pl-1-2012",
    "images": [
      "/publications/kuchnie-pl-1-2012/001.jpg",
      "/publications/kuchnie-pl-1-2012/002.jpg"
    ]
  },
  {
    "magazine": "„Design &amp; Home” nr 1/2012",
    "gallery": "design-and-home-1-2012",
    "images": [
      "/publications/design-and-home-1-2012/001.jpg",
      "/publications/design-and-home-1-2012/002.jpg",
      "/publications/design-and-home-1-2012/003.jpg"
    ]
  },
  {
    "magazine": "„Wnętrze i Ogród” nr 3/2012",
    "gallery": "wnetrze-i-ogrod-3-2012",
    "images": [
      "/publications/wnetrze-i-ogrod-3-2012/001.jpg",
      "/publications/wnetrze-i-ogrod-3-2012/002.jpg",
      "/publications/wnetrze-i-ogrod-3-2012/003.jpg"
    ]
  },
  {
    "magazine": "„Świat Łazienek i Kuchni” nr 2/2012",
    "gallery": "swiat-lazienek-i-kuchni-2-2012",
    "images": [
      "/publications/swiat-lazienek-i-kuchni-2-2012/001.jpg",
      "/publications/swiat-lazienek-i-kuchni-2-2012/002.jpg",
      "/publications/swiat-lazienek-i-kuchni-2-2012/003.jpg"
    ]
  },
  {
    "magazine": "„M jak Mieszkanie” nr 4/2012",
    "gallery": "m-jak-mieskzanie-4-2012",
    "images": [
      "/publications/m-jak-mieskzanie-4-2012/001.jpg",
      "/publications/m-jak-mieskzanie-4-2012/002.jpg",
      "/publications/m-jak-mieskzanie-4-2012/003.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj” nr 2/2012",
    "gallery": "dobrze-mieszkaj-2-2012",
    "images": [
      "/publications/dobrze-mieszkaj-2-2012/0000001.jpg",
      "/publications/dobrze-mieszkaj-2-2012/0000002.jpg"
    ]
  },
  {
    "magazine": "„M jak Mieszkanie” nr 2/2012",
    "gallery": "m-jak-mieszkanie-2-2012",
    "images": [
      "/publications/m-jak-mieszkanie-2-2012/0000001.jpg",
      "/publications/m-jak-mieszkanie-2-2012/nr-2-2012.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj ” nr 1/2012",
    "gallery": "dobrze-mieszkaj-1-2012",
    "images": [
      "/publications/dobrze-mieszkaj-1-2012/0000001-28.jpg",
      "/publications/dobrze-mieszkaj-1-2012/nr-1-2012.jpg"
    ]
  }
];

export default function Publication2012() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2012</span>
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
