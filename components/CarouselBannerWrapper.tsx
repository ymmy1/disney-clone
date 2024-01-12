import { getSpecificMovies } from '@/lib/getMovies';
import CarouselBanner from './CarouselBanner';
import { Movie } from '@/types';

type Props = {
  id?: string;
  keywords?: string;
};

async function CarouselBannerWrapper({ id, keywords }: Props) {
  const movies = await getSpecificMovies('discover', id, keywords);

  return <CarouselBanner movies={movies as Movie[]} />;
}

export default CarouselBannerWrapper;
