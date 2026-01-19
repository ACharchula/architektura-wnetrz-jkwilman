'use client';

import { useSearchParams } from 'next/navigation';
import PortfolioGrid from '@/components/PortfolioGrid';
import Pagination from '@/components/Pagination';

interface PortfolioItem {
  id: number;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  image: string;
}

interface RealizacjeClientProps {
  allItems: PortfolioItem[];
  basePath: string;
}

export default function RealizacjeClient({ allItems, basePath }: RealizacjeClientProps) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const itemsPerPage = 9;
  
  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = allItems.slice(startIndex, endIndex);

  return (
    <>
      <PortfolioGrid items={paginatedItems} />
      <Pagination
        totalItems={allItems.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        basePath={basePath}
      />
    </>
  );
}
