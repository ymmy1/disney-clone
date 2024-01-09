import MoviesCorousel from '@/components/MoviesCorousel';
import { getSpecificMovies } from '@/lib/getMovies';

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};
async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  const movies = await getSpecificMovies('discover', id);

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col space-y-5 mt-32 xl:mt-42'>
        <h2 className='text-6xl font-bold px-10'>Results for: {genre}</h2>
        <MoviesCorousel movies={movies} isVertical title={'Movies'} />
      </div>
    </div>
  );
}

export default GenrePage;
