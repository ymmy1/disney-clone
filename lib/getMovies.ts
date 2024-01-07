import { SearchResults } from '@/types';

async function fetchFromTMDB(url: URL, cacheTime?: number) {
  url.searchParams.set('include_adult', 'false');
  url.searchParams.set('include_video', 'false');
  url.searchParams.set('sort_by', 'popularity.desc');
  url.searchParams.set('language', 'en-US');
  url.searchParams.set('page', '1');

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.TMDB_API_KEY,
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24 * 7,
    }, // 1 week in seconds
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data;
}

export async function getSpecificMovies(
  name: string,
  id?: string,
  keywords?: string,
  term?: string
) {
  let url;

  if (name === 'discover') {
    url = new URL('https://api.themoviedb.org/3/discover/movie');
    keywords && url.searchParams.set('with_keywords', keywords);
    id && url.searchParams.set('with_genres', id);
  } else if (name === 'search') {
    url = new URL('https://api.themoviedb.org/3/search/movie');
    term && url.searchParams.set('query', term);
  } else {
    url = new URL(`https://api.themoviedb.org/3/movie/${name}`);
  }
  const data = await fetchFromTMDB(url);
  return data.results;
}

export async function getSearchedMovies() {}
