export interface MovieObject {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MovieList {
  movieSearchResult?: Array<MovieObject>;
  error?: string;
}
