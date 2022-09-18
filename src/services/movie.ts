import { AxiosInstance, AxiosResponse } from 'axios';

import { ListMoviesResponse, Movie as MovieType } from '../types/movie';
import { ListQuotesResponse, Quote } from '../types/quote';
import { encodeOptions } from '../util/methods';
import { ListRequestOptions } from '../types/request';

export default class Movie {
  private static readonly BASE_PATH = '/movie';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(options?: ListRequestOptions<MovieType>): Promise<ListMoviesResponse> {
    return this.client
      .get(`${Movie.BASE_PATH}${encodeOptions<MovieType>(options)}`)
      .then((response: AxiosResponse<ListMoviesResponse>) => response.data);
  }

  get(id: string): Promise<MovieType> {
    return this.client
      .get(`${Movie.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListMoviesResponse>) => response.data.docs[0],
      );
  }

  getQuotes(
    id: string,
    options?: ListRequestOptions<Quote>,
  ): Promise<ListQuotesResponse> {
    return this.client
      .get(`${Movie.BASE_PATH}/${id}/quote${encodeOptions<Quote>(options)}`)
      .then((response: AxiosResponse<ListQuotesResponse>) => response.data);
  }
}
