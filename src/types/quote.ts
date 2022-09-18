import { ListResponse } from './response';

export interface Quote {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
}

export interface ListQuotesResponse extends ListResponse {
  docs: Quote[];
}
