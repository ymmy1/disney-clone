import getImagePath from '@/lib/getImagePath';
import { Movie } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className='flex-shrink-0 relative cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg'>
      <Link href={`/movieDetails/${movie.id}`}>
        <div className='absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#383B50]/80 z-10' />

        <p className='absolute z-20 bottom-5 left-5 line-clamp-1'>
          {movie.title}
        </p>
        <Image
          className='w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-md shadow-#F1F3F4 dark:shadow-gray-900 drop-shadow-xl rounded-sm'
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
          alt={movie.title}
          width={1920}
          height={1080}
          key={movie.id}
        />
      </Link>
    </div>
  );
}

export default MovieCard;
