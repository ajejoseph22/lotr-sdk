import { AxiosInstance, AxiosResponse } from 'axios';

import { ListQuotesResponse, Quote as QuoteType } from '../types/quote';
import { ListRequestOptions } from '../types/request';
import { encodeOptions } from '../util/methods';
import Movie from './movie';
import Character from './character';

export default class Quote {
  private static readonly BASE_PATH = '/quote';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(options?: ListRequestOptions<QuoteType>): Promise<ListQuotesResponse> {
    return this.client
      .get(`${Quote.BASE_PATH}${encodeOptions<QuoteType>(options)}`)
      .then((response: AxiosResponse<ListQuotesResponse>) => response.data);
  }

  get(id: string): Promise<QuoteType> {
    return this.client
      .get(`${Quote.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListQuotesResponse>) => response.data.docs[0],
      );
  }

  getQuotesForMovie(
    movieId: string,
    options?: ListRequestOptions<Quote>,
  ): Promise<ListQuotesResponse> {
    return this.client
      .get(
        `${Movie.BASE_PATH}/${movieId}/quote${encodeOptions<Quote>(options)}`,
      )
      .then((response: AxiosResponse<ListQuotesResponse>) => response.data);
  }

  getQuotesByCharacter(
    characterId: string,
    options?: ListRequestOptions<Quote>,
  ): Promise<ListQuotesResponse> {
    return this.client
      .get(
        `${Character.BASE_PATH}/${characterId}/quote${encodeOptions<Quote>(
          options,
        )}`,
      )
      .then((response: AxiosResponse<ListQuotesResponse>) => response.data);
  }
}
