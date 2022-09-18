export interface Book {
  _id: string
  name: string
}

export interface ListBooksResponse {
  docs: Book[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}
