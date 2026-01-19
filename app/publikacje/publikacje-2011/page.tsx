import Link from 'next/link';
import ReferencjeGallery from '@/components/ReferencjeGallery';

export const metadata = {
  title: 'Publikacje 2011 – Publikacje – Jolanta Kwilman',
  description: 'Publikacje 2011 - realizacje pracowni prezentowane na łamach pism wnętrzarskich',
};

const sections = [
  {
    "magazine": "„100 % Wnętrza” nr 2/2011",
    "gallery": "100-wnetrza-2-2011",
    "images": [
      "/publications/100-wnetrza-2-2011/1.jpg",
      "/publications/100-wnetrza-2-2011/100-wntrza-nr-2-2011.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj” nr 6/2011",
    "gallery": "dobrze-mieszkaj-6-2011",
    "images": [
      "/publications/dobrze-mieszkaj-6-2011/0000001.jpg",
      "/publications/dobrze-mieszkaj-6-2011/dobrze-mieszkaj-6-2011.jpg"
    ]
  },
  {
    "magazine": "„M jak Mieszkanie” nr 11/2011",
    "gallery": "m-jak-mieszkanie-11-2011",
    "images": [
      "/publications/m-jak-mieszkanie-11-2011/2.jpg",
      "/publications/m-jak-mieszkanie-11-2011/m-jak-mieszkanie-nr-11-2011.jpg"
    ]
  },
  {
    "magazine": "„M jak Mieszkanie” nr 10/2011",
    "gallery": "m-jak-mieszkanie-10-2011",
    "images": [
      "/publications/m-jak-mieszkanie-10-2011/3.jpg",
      "/publications/m-jak-mieszkanie-10-2011/m-jak-mieszkanie-nr-10-2011.jpg"
    ]
  },
  {
    "magazine": "„Świat Łazienek i Kuchni” nr 4/2011",
    "gallery": "swiat-lazienek-i-kychni-4-2011",
    "images": [
      "/publications/swiat-lazienek-i-kychni-4-2011/2-2.jpg",
      "/publications/swiat-lazienek-i-kychni-4-2011/wiat-azienek-i-kuchni-nr-4-2011.jpg"
    ]
  },
  {
    "magazine": "„M jak Mieszkanie” nr 6/2011",
    "gallery": "m-jak-mieszkanie-6-2011",
    "images": [
      "/publications/m-jak-mieszkanie-6-2011/foto.jpg",
      "/publications/m-jak-mieszkanie-6-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„Czas na Wnętrze” nr 5/2011",
    "gallery": "czas-na-wnetrze-5-2011",
    "images": [
      "/publications/czas-na-wnetrze-5-2011/foto.jpg",
      "/publications/czas-na-wnetrze-5-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj” nr 3/2011",
    "gallery": "dobrze-mieszkaj-3-2011",
    "images": [
      "/publications/dobrze-mieszkaj-3-2011/foto.jpg",
      "/publications/dobrze-mieszkaj-3-2011/foto2.jpg",
      "/publications/dobrze-mieszkaj-3-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„Cztery Kąty” nr 5/2011",
    "gallery": "cztery-katy-5-2011",
    "images": [
      "/publications/cztery-katy-5-2011/foto.jpg",
      "/publications/cztery-katy-5-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„Cztery Kąty” nr 4/2011",
    "gallery": "cztery-katy-4-2011",
    "images": [
      "/publications/cztery-katy-4-2011/foto.jpg",
      "/publications/cztery-katy-4-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„Cztery Kąty” nr 3/2011",
    "gallery": "cztery-katy-3-2011",
    "images": [
      "/publications/cztery-katy-3-2011/foto.jpg",
      "/publications/cztery-katy-3-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„100% Wnętrza” nr 1/2011",
    "gallery": "100-wnetrza-1-2011",
    "images": [
      "/publications/100-wnetrza-1-2011/foto.jpg",
      "/publications/100-wnetrza-1-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„Świat Łazienki i Kuchni” nr 2/2011",
    "gallery": "swiat-lazienki-i-kuchni-2-2011",
    "images": [
      "/publications/swiat-lazienki-i-kuchni-2-2011/foto.jpg",
      "/publications/swiat-lazienki-i-kuchni-2-2011/okl.jpg"
    ]
  },
  {
    "magazine": "„Dobrze Mieszkaj” nr 1/2011",
    "gallery": "dobrze-mieszkaj-1-2011",
    "images": [
      "/publications/dobrze-mieszkaj-1-2011/foto.jpg",
      "/publications/dobrze-mieszkaj-1-2011/foto2.jpg",
      "/publications/dobrze-mieszkaj-1-2011/okl.jpg"
    ]
  }
];

export default function Publication2011() {
  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="page-title group mb-8 sm:mb-10">
        <div className="page-title-inner group">
          <h1 className="text-[15px] sm:text-base font-normal text-foreground uppercase tracking-wide border-l-4 border-[#333] pl-[30px]">
            <Link href="/publikacje" className="hover:text-primary transition-colors">
              Publikacje
            </Link>
            <span className="text-gray-400"> · </span>
            <span>Publikacje 2011</span>
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
