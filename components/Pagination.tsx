'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  basePath: string;
}

export default function Pagination({ totalItems, itemsPerPage, currentPage, basePath }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  if (totalPages <= 1) {
    return null;
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-2 mt-10 sm:mt-12">
      {/* Previous button */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl text-foreground hover:text-primary transition-colors border border-gray-300 rounded hover:border-primary"
        >
          ←
        </Link>
      ) : (
        <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl text-gray-400 border border-gray-200 rounded cursor-not-allowed">
          ←
        </span>
      )}

      {/* Page numbers */}
      <div className="flex gap-1 sm:gap-2">
        {pages.map((page) => (
          <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-sm sm:text-base rounded transition-colors ${
              page === currentPage
                ? 'bg-foreground text-white'
                : 'text-foreground hover:text-primary border border-gray-300 hover:border-primary'
            }`}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Next button */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl text-foreground hover:text-primary transition-colors border border-gray-300 rounded hover:border-primary"
        >
          →
        </Link>
      ) : (
        <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-xl text-gray-400 border border-gray-200 rounded cursor-not-allowed">
          →
        </span>
      )}
    </div>
  );
}
