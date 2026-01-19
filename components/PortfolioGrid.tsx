import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
}

// Utility function to extract size and clean title
function extractSizeAndTitle(fullTitle: string): { size: string | null; cleanTitle: string } {
  // Match variations: "pow. 47 m2", "pow 70 m2", "pow 25m2"
  const match = fullTitle.match(/(.+?)\s*–\s*pow\.?\s*(\d+)\s*m2/i);
  
  if (match) {
    return {
      size: `Powierzchnia ${match[2]} m²`, // "Powierzchnia 47 m²"
      cleanTitle: match[1].trim(), // "Mieszkanie w Warszawie"
    };
  }
  
  return {
    size: null,
    cleanTitle: fullTitle,
  };
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-foreground font-light">Brak projektów do wyświetlenia</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {items.map((item) => {
        const { size, cleanTitle } = extractSizeAndTitle(item.title);
        
        return (
          <div key={item.id} className="portfolio-item group">
            <div className="portfolio-inner bg-white rounded-sm shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="portfolio-thumb relative aspect-[4/3] overflow-hidden">
                <Link href={`/realizacje/${item.categorySlug}/${item.slug}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </Link>
              </div>
              <div className="portfolio-content p-3 sm:p-4">
                <h3 className="portfolio-title text-sm sm:text-base font-normal mb-2">
                  <Link href={`/realizacje/${item.categorySlug}/${item.slug}`} className="text-foreground hover:text-primary transition-colors line-clamp-2">
                    {cleanTitle}
                  </Link>
                </h3>
                {size && (
                  <div className="portfolio-size text-xs sm:text-sm text-gray-600 font-light mb-1">
                    {size}
                  </div>
                )}
                <div className="portfolio-category text-xs sm:text-sm text-gray-600 font-light">
                  {item.category}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
