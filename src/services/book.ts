import { AxiosInstance, AxiosResponse } from 'axios';

import { Book as BookType, ListBooksResponse } from '../types/book';
import { Chapter, ListChaptersResponse } from '../types/chapter';
import { ListRequestOptions } from '../types/request';
import { encodeOptions } from '../util/methods';

export default class Book {
  private static readonly BASE_PATH = '/book';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(options?: ListRequestOptions<BookType>): Promise<ListBooksResponse> {
    return this.client
      .get(`${Book.BASE_PATH}${encodeOptions<BookType>(options)}`)
      .then((response: AxiosResponse<ListBooksResponse>) => response.data);
  }

  get(id: string): Promise<BookType> {
    return this.client
      .get(`${Book.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListBooksResponse>) => response.data.docs[0],
      );
  }

  getChapters(
    id: string,
    options?: ListRequestOptions<Chapter>,
  ): Promise<ListChaptersResponse> {
    return this.client
      .get(`${Book.BASE_PATH}/${id}/chapter${encodeOptions<Chapter>(options)}`)
      .then((response: AxiosResponse<ListChaptersResponse>) => response.data);
  }
}
