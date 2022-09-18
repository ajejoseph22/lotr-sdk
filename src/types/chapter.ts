export interface Chapter {
  _id: string
  chapterName: string
}

export interface ListChaptersResponse {
  docs: Chapter[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}
