import { AxiosInstance, AxiosResponse } from 'axios';

import { ListChaptersResponse, Chapter as ChapterType } from '../types/chapter';
import {encodeOptions} from "../util/methods";
import {ListRequestOptions} from "../types/request";

export default class Chapter {
  private static readonly BASE_PATH = '/chapter';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(options?: ListRequestOptions<ChapterType>): Promise<ListChaptersResponse> {
    return this.client
      .get(`${Chapter.BASE_PATH}${encodeOptions<ChapterType>(options)}`)
      .then((response: AxiosResponse<ListChaptersResponse>) => response.data);
  }

  get(id: string): Promise<ChapterType> {
    return this.client
      .get(`${Chapter.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListChaptersResponse>) =>
          response.data.docs[0],
      );
  }
}
