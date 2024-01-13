'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Movie } from '@/types';
import Image from 'next/image';
import getImagePath from '@/lib/getImagePath';
import Link from 'next/link';

Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: { movies: Movie[] }) {
  const isPortrait = window.innerWidth < window.innerHeight;
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      className='overflow-hidden lg:-mt-40 relative cursor-pointer'
      ref={emblaRef}
    >
      <div className='flex h-full'>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className='flex-full min-w-0 relative h-[90dvh] lg:h-[100dvh]'
          >
            <Image
              src={
                isPortrait
                  ? getImagePath(movie.poster_path, true)
                  : getImagePath(movie.backdrop_path, true)
              }
              alt=''
              fill
              style={{ objectFit: 'cover' }}
            />

            <div className='inline absolute mt-0 top-0 pt-40 xl:pt-52 2xl:pt-104 left-0 lg:mt-20 xl:mt-42 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white '>
              {!isPortrait && (
                <h2 className='text-5xl font-bold max-w-xl'>{movie.title}</h2>
              )}
              <p className='max-w-xl line-clamp-3'>{movie.overview}</p>
              <Link
                href={`movieDetails/${movie.id}`}
                className='bg-[#F1F3F4] px-4 py-2 rounded text-black font-medium hover:bg-[#F1F3F4]/90 mt-10 flex w-fit'
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#F1F3F4] dark:to-[#383B50]  pointer-events-none' />
    </div>
  );
}

export default CarouselBanner;
