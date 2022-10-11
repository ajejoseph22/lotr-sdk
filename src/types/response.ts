export interface ListResponse<T> {
  docs: T[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}
