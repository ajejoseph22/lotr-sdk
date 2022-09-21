import { AxiosInstance, AxiosResponse } from 'axios';

import { Character as CharacterType } from '../types/character';
import { encodeOptions } from '../util/methods';
import { ListRequestOptions } from '../types/request';
import { ListResponse } from '../types/response';

export default class Character {
  private client: AxiosInstance;
  static readonly BASE_PATH = '/character';

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(
    options?: ListRequestOptions<CharacterType>,
  ): Promise<ListResponse<CharacterType>> {
    return this.client
      .get(`${Character.BASE_PATH}${encodeOptions<CharacterType>(options)}`)
      .then(
        (response: AxiosResponse<ListResponse<CharacterType>>) => response.data,
      );
  }

  get(id: string): Promise<CharacterType> {
    return this.client
      .get(`${Character.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListResponse<CharacterType>>) =>
          response.data.docs[0],
      );
  }
}
