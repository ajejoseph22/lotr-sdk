import { ListResponse } from './response';

export interface Chapter {
  _id: string;
  chapterName: string;
}

export interface ListChaptersResponse extends ListResponse {
  docs: Chapter[];
}
