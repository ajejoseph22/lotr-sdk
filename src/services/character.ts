import { AxiosInstance, AxiosResponse } from 'axios';

import {
  ListCharactersResponse,
  Character as CharacterType,
} from '../types/character';
import { ListQuotesResponse, Quote } from '../types/quote';
import {encodeOptions} from "../util/methods";
import {ListRequestOptions} from "../types/request";

export default class Character {
  private static readonly BASE_PATH = '/character';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(options?: ListRequestOptions<CharacterType>): Promise<CharacterType[]> {
    return this.client
      .get(`${Character.BASE_PATH}${encodeOptions<CharacterType>(options)}`)
      .then(
        (response: AxiosResponse<ListCharactersResponse>) => response.data.docs,
      );
  }

  get(id: string): Promise<CharacterType> {
    return this.client
      .get(`${Character.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListCharactersResponse>) =>
          response.data.docs[0],
      );
  }

  getQuotes(id: string, options?: ListRequestOptions<Quote>): Promise<Quote[]> {
    return this.client
      .get(`${Character.BASE_PATH}/${id}/quote${encodeOptions<Quote>(options)}`)
      .then(
        (response: AxiosResponse<ListQuotesResponse>) => response.data.docs,
      );
  }
}
