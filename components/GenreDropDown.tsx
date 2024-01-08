import { Genres } from '@/types';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

async function GenreDropDown() {
  const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.TMDB_API_KEY,
    },
    next: { revalidate: 60 * 60 * 24 * 7 }, // 1 week in seconds
  };

  const response = await fetch(url, options);
  const data = (await response.json()) as Genres;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=' flex justify-center items-center text-white'>
        Genre <ChevronDown className='ml-1' />
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel> Select a Genre</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {data?.genres?.map((genre) => (
          <DropdownMenuItem key={genre.id}>
            <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
              {genre.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GenreDropDown;
