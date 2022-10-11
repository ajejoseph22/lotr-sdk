import { AxiosInstance, AxiosResponse } from 'axios';

import { Chapter as ChapterType } from '../types/chapter';
import { encodeOptions } from '../util/methods';
import { ListRequestOptions } from '../types/request';
import Book from './book';
import { ListResponse } from '../types/response';

export default class Chapter {
  private static readonly BASE_PATH = '/chapter';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(
    options?: ListRequestOptions<ChapterType>,
  ): Promise<ListResponse<ChapterType>> {
    return this.client
      .get(`${Chapter.BASE_PATH}${encodeOptions<ChapterType>(options)}`)
      .then(
        (response: AxiosResponse<ListResponse<ChapterType>>) => response.data,
      );
  }

  get(id: string): Promise<ChapterType> {
    return this.client
      .get(`${Chapter.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListResponse<ChapterType>>) =>
          response.data.docs[0],
      );
  }

  getChaptersForBook(
    bookId: string,
    options?: ListRequestOptions<ChapterType>,
  ): Promise<ListResponse<ChapterType>> {
    return this.client
      .get(
        `${Book.BASE_PATH}/${bookId}/chapter${encodeOptions<ChapterType>(
          options,
        )}`,
      )
      .then(
        (response: AxiosResponse<ListResponse<ChapterType>>) => response.data,
      );
  }
}
