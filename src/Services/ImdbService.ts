import {MovieList} from '../types';

export const fetchMovieDetails = async (search: string): Promise<MovieList> => {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?s=${search}&apikey=c13f94d`,
    );
    const movieSearchResult = await response.json();
    if (movieSearchResult.Response === 'True') {
      return {movieSearchResult: movieSearchResult.Search};
    }
    return {error: movieSearchResult.Error};
  } catch (err: any) {
    return {error: err.message};
  }
};
