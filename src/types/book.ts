import { ListResponse } from './response';

export interface Book {
  _id: string;
  name: string;
}

export interface ListBooksResponse extends ListResponse {
  docs: Book[];
}
