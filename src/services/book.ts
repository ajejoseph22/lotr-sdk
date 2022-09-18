import { AxiosInstance, AxiosResponse } from 'axios';

import { Book as BookType, ListBooksResponse } from '../types/book';
import { ListRequestOptions } from '../types/request';
import { encodeOptions } from '../util/methods';

export default class Book {
  private client: AxiosInstance;
  static readonly BASE_PATH = '/book';

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
}
