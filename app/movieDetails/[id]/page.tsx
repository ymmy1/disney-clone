import getImagePath from '@/lib/getImagePath';
import { getSpecificMovies } from '@/lib/getMovies';
import { Movie } from '@/types';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};
async function MovieDetails({ params: { id } }: Props) {
  const movie = (await getSpecificMovies('single', id)) as Movie;
  const formatAmount = (revenue?: number): string => {
    if (revenue !== undefined) {
      return revenue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    } else {
      return 'Not available';
    }
  };
  return (
    <div className='my-32 flex gap-10 justify-center'>
      {/* <pre className='whitespace-pre-wrap'>
        {JSON.stringify(movie, null, 2)}
      </pre> */}
      <div className=''>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={1000}
            className='shadow-2xl rounded-sm overflow-hidden '
          />
        ) : (
          <Image
            src={getImagePath(movie.backdrop_path, true)}
            alt={movie.title}
            width={1000}
            height={500}
          />
        )}
      </div>
      <div className='w-[500px]'>
        <h1>
          {movie.title} ({movie.release_date?.split('-')[0]})
        </h1>
        <p>
          {movie.tagline} (
          {movie.spoken_languages.map((language) => (
            <span key={language.english_name}>{language.english_name}</span>
          ))}
          )
        </p>
        <p>
          Runtime: {movie.runtime}m |{' '}
          {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>Budget: {formatAmount(movie.budget)}</p>
        <p>Revenue: {formatAmount(movie.revenue)}</p>
        <p>Vote Average: {movie.vote_average}</p>
        <p>Vote Count: {movie.vote_count}</p>
        <p>Overview</p>
        <p>{movie.overview}</p>
        <p>Production Companies</p>
        <div className='flex gap-10 px-4 flex-wrap justify-center'>
          {movie.production_companies.map(
            (company) =>
              company.logo_path && (
                <div key={company.name}>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                    alt={company.name || 'Production Company'}
                    width={128}
                    height={128}
                  />
                </div>
              )
          )}
        </div>
        <p>Production Countries</p>
        <div className='flex gap-10 px-4 flex-wrap justify-center'>
          {movie.production_countries.map((country) => (
            <Image
              key={country.name}
              src={`https://flagsapi.com/${country.iso_3166_1}/shiny/64.png`}
              alt={country.name || 'Production Country'}
              width={64}
              height={100}
            />
          ))}
        </div>

        <a href={movie.homepage}>Home Page</a>
      </div>
    </div>
  );
}

export default MovieDetails;
