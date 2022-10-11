import { AxiosInstance, AxiosResponse } from 'axios';

import { Quote as QuoteType } from '../types/quote';
import { ListRequestOptions } from '../types/request';
import { encodeOptions } from '../util/methods';
import Movie from './movie';
import Character from './character';
import { ListResponse } from '../types/response';

export default class Quote {
  private static readonly BASE_PATH = '/quote';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(
    options?: ListRequestOptions<QuoteType>,
  ): Promise<ListResponse<QuoteType>> {
    return this.client
      .get(`${Quote.BASE_PATH}${encodeOptions<QuoteType>(options)}`)
      .then(
        (response: AxiosResponse<ListResponse<QuoteType>>) => response.data,
      );
  }

  get(id: string): Promise<QuoteType> {
    return this.client
      .get(`${Quote.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListResponse<QuoteType>>) =>
          response.data.docs[0],
      );
  }

  getQuotesForMovie(
    movieId: string,
    options?: ListRequestOptions<QuoteType>,
  ): Promise<ListResponse<QuoteType>> {
    return this.client
      .get(
        `${Movie.BASE_PATH}/${movieId}/quote${encodeOptions<QuoteType>(
          options,
        )}`,
      )
      .then(
        (response: AxiosResponse<ListResponse<QuoteType>>) => response.data,
      );
  }

  getQuotesByCharacter(
    characterId: string,
    options?: ListRequestOptions<QuoteType>,
  ): Promise<ListResponse<QuoteType>> {
    return this.client
      .get(
        `${Character.BASE_PATH}/${characterId}/quote${encodeOptions<QuoteType>(
          options,
        )}`,
      )
      .then(
        (response: AxiosResponse<ListResponse<QuoteType>>) => response.data,
      );
  }
}
