'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';

interface ProjectGalleryProps {
  images: string[];
  projectTitle: string;
}

export default function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const imagesPerPage = 9;
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Calculate pagination
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const paginatedImages = images.slice(startIndex, endIndex);

  const openLightbox = (pageIndex: number) => {
    // Calculate actual index in full images array
    const actualIndex = startIndex + pageIndex;
    setCurrentImage(actualIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Handle keyboard events
  useEffect(() => {
    if (!lightboxOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxOpen]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {paginatedImages.map((image, index) => (
          <div
            key={startIndex + index}
            className="relative aspect-[4/3] cursor-pointer group overflow-hidden rounded-sm"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image}
              alt={`${projectTitle} - zdjęcie ${startIndex + index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-10 sm:mt-12">
          {/* Previous button */}
          {currentPage > 1 ? (
            <Link
              href={`?page=${currentPage - 1}`}
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
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Link
                key={page}
                href={`?page=${page}`}
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
              href={`?page=${currentPage + 1}`}
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
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-3xl sm:text-4xl hover:text-gray-300 z-50 p-2"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl hover:text-gray-300 z-50 p-2"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white text-3xl sm:text-4xl hover:text-gray-300 z-50 p-2"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="relative w-full h-full p-4 sm:p-8 flex items-center justify-center">
            <div className="relative max-w-7xl max-h-full w-full h-full">
              <Image
                src={images[currentImage]}
                alt={`${projectTitle} - zdjęcie ${currentImage + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>

          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm">
            {currentImage + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
