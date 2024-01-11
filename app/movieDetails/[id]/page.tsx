import getImagePath from '@/lib/getImagePath';
import { getSpecificMovies } from '@/lib/getMovies';
import { Movie } from '@/types';
import Image from 'next/image';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

type Props = {
  params: {
    id: string;
  };
};
async function MovieDetails({ params: { id } }: Props) {
  const movie = (await getSpecificMovies('single', id)) as Movie;

  const formatAmount = (revenue?: number): string => {
    if (revenue !== undefined) {
      return revenue
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 2,
        })
        .replace('$', '');
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
        {movie.homepage && (
          <a
            className='text-2xl bg-[#383B50] text-[#F1F3F4] hover:bg-[#383B50]/90]  mt-10 flex mx-auto w-fit px-4 py-2 rounded dark:bg-[#F1F3F4]  dark:text-[#383B50] dark:hover:bg-[#F1F3F4]/90'
            href={movie.homepage}
            target='_blank'
          >
            Movie Home Page
          </a>
        )}
      </div>
      <div className='w-[900px]'>
        <div className='flex justify-between'>
          <h1 className='text-5xl font-bold mb-5'>
            {movie.title} ({movie.release_date?.split('-')[0]})
          </h1>
          <div>
            <div className='flex justify-center items-center gap-2'>
              <GradeRoundedIcon fontSize='large' color='warning' />
              <span className='text-3xl'>{movie.vote_average.toFixed(1)}</span>
            </div>
            <p className='text-sm text-right italic'>
              ({movie.vote_count} votes)
            </p>
          </div>
        </div>
        <div className='text-2xl'>
          <p className='text-xl italic'>{movie.tagline} </p>
          <p>
            Runtime: {movie.runtime}m |{' '}
            {movie.genres.map((genre) => genre.name).join(', ')}
          </p>
          <p className='flex align-center'>
            Budget:
            <AttachMoneyIcon fontSize='large' style={{ color: '#4caf50' }} />
            {formatAmount(movie.budget)}
          </p>
          <p>
            Revenue:
            <AttachMoneyIcon fontSize='large' style={{ color: '#4caf50' }} />
            {formatAmount(movie.revenue)}
          </p>
          <p className='text-4xl font-bold text-center py-10'>Overview</p>
          <p>{movie.overview}</p>
          <p className='text-4xl font-bold text-center py-10'>
            Production Companies
          </p>
          <div className='flex gap-10 px-4 flex-wrap justify-center items-center'>
            {movie.production_companies.map(
              (company) =>
                company.logo_path && (
                  <div key={company.name}>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                      alt={company.name || 'Production Company'}
                      width={128}
                      height={128}
                      className='drop-shadow-2xl'
                    />
                  </div>
                )
            )}
          </div>
          <p className='text-4xl font-bold text-center py-10'>
            Production Countries
          </p>
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
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
