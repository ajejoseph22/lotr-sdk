import {AxiosInstance, AxiosResponse} from "axios";

import {Book as BookType, ListBooksResponse} from "../types/book";
import {Chapter, ListChaptersResponse} from "../types/chapter";

export default class Book {
  private static readonly BASE_PATH = "/book"
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(): Promise<BookType[]> {
    return this.client.get(Book.BASE_PATH).then((response: AxiosResponse<ListBooksResponse>) => response.data.docs);
  }

  get(id: string): Promise<BookType> {
    return this.client.get(`${Book.BASE_PATH}/${id}`).then((response: AxiosResponse<ListBooksResponse>) => response.data.docs[0]);
  }

  getChapters(id: string): Promise<Chapter[]> {
    return this.client.get(`${Book.BASE_PATH}/${id}/chapter`).then((response: AxiosResponse<ListChaptersResponse>) => response.data.docs);
  }
}
