import MoviesCorousel from '@/components/MoviesCorousel';
import { getSpecificMovies } from '@/lib/getMovies';
import { Movie } from '@/types';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();

  const termToUse = decodeURI(term);

  const searchedMovies = await getSpecificMovies(
    'search',
    undefined, // id
    undefined, // keywords
    termToUse
  );
  const popularMovies = await getSpecificMovies('popular');

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-4 mt-32 xl:mt-42'>
        <h1 className='text-6xl font-bold px-10'>Results for: {termToUse}</h1>
        <MoviesCorousel
          movies={searchedMovies as Movie[]}
          title='Movies'
          isVertical
        />
        <MoviesCorousel
          movies={popularMovies as Movie[]}
          title='You may also like'
        />
      </div>
    </div>
  );
}

export default SearchPage;
