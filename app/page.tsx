import CarouselBannerWrapper from '@/components/CarouselBannerWrapper';
import MoviesCorousel from '@/components/MoviesCorousel';
import { getSpecificMovies } from '@/lib/getMovies';
import { Movie } from '@/types';
export default async function Home() {
  const upcomingMovies = await getSpecificMovies('upcoming');
  const topRatedMovies = await getSpecificMovies('top_rated');
  const popularMovies = await getSpecificMovies('popular');

  return (
    <main className=''>
      <CarouselBannerWrapper />

      <div className='flex flex-col space-y-2 xl:-mt-48'>
        <MoviesCorousel movies={upcomingMovies as Movie[]} title='Upcoming' />
        <MoviesCorousel movies={topRatedMovies as Movie[]} title='Top Rated' />
        <MoviesCorousel movies={popularMovies as Movie[]} title='Popular' />
      </div>
    </main>
  );
}
