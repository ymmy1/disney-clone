export type Movie = {
  adult: boolean;
  backdrop_path: string;
  budget?: number; // Added
  genres: { id: number; name: string }[]; // Added
  homepage?: string; // Added
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  production_companies: { name: string; logo_path?: string }[]; // Added
  production_countries: { iso_3166_1: string; name: string }[]; // Added
  release_date: string;
  revenue?: number; // Added
  runtime?: number; // Added
  status?: string; // Added
  spoken_languages: { english_name: string }[];
  tagline?: string; // Added
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type SearchResults = {
  page: number;
  results?: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export type Genres = {
  genres: Genre[];
};
