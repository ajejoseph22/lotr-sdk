export interface Quote {
  _id: string
  dialog: string
  movie: string
  character: string
  id: string
}

export interface ListQuotesResponse {
  docs: Quote[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}
