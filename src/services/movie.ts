import { AxiosInstance, AxiosResponse } from 'axios';

import { Movie as MovieType } from '../types/movie';
import { encodeOptions } from '../util/methods';
import { ListRequestOptions } from '../types/request';
import { ListResponse } from '../types/response';

export default class Movie {
  private client: AxiosInstance;
  static readonly BASE_PATH = '/movie';

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(
    options?: ListRequestOptions<MovieType>,
  ): Promise<ListResponse<MovieType>> {
    return this.client
      .get(`${Movie.BASE_PATH}${encodeOptions<MovieType>(options)}`)
      .then(
        (response: AxiosResponse<ListResponse<MovieType>>) => response.data,
      );
  }

  get(id: string): Promise<MovieType> {
    return this.client
      .get(`${Movie.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListResponse<MovieType>>) =>
          response.data.docs[0],
      );
  }
}
