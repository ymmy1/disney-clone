import { Movie } from '@/types';
import MovieCard from './MovieCard';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  movies: Movie[];
  isVertical?: boolean;
};
function MoviesCorousel({ title, movies, isVertical }: Props) {
  return (
    <div className='z-40'>
      <h2 className='text-2xl font-bold px-10 py-2'>{title}</h2>
      <div
        className={cn(
          'flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide',
          isVertical && 'flex-col space-x-0 space-y-12'
        )}
      >
        {movies?.map((movie) => (
          <>
            {isVertical ? (
              <div
                key={movie.id}
                className={cn(
                  isVertical &&
                    'flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5'
                )}
              >
                <MovieCard movie={movie} />
                <div className='max-w-2xl'>
                  <p className='font-bold'>
                    {movie.title} ({movie.release_date?.split('-')[0]})
                  </p>
                  <hr className='mb-3' />
                  <p>{movie.overview}</p>
                </div>
              </div>
            ) : (
              <MovieCard key={movie.id} movie={movie} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default MoviesCorousel;
