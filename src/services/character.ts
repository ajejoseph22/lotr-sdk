import { AxiosInstance, AxiosResponse } from 'axios';

import {
  ListCharactersResponse,
  Character as CharacterType,
} from '../types/character';
import { ListQuotesResponse, Quote } from '../types/quote';

export default class Character {
  private static readonly BASE_PATH = '/character';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(): Promise<CharacterType[]> {
    return this.client
      .get(Character.BASE_PATH)
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

  getQuotes(id: string): Promise<Quote[]> {
    return this.client
      .get(`${Character.BASE_PATH}/${id}/quote`)
      .then(
        (response: AxiosResponse<ListQuotesResponse>) => response.data.docs,
      );
  }
}
