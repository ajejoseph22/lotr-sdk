import { ListRequestOptions } from '../types/request';

export function encodeOptions<T>(options?: ListRequestOptions<T>): string {
  if (!options) return '';

  const { limit, page, offset, sort } = options;
  const params = [];

  if (limit) params.push(`limit=${limit}`);

  if (page) params.push(`page=${page}`);

  if (offset) params.push(`offset=${offset}`);

  if (sort) {
    const key = Object.keys(sort)[0];
    const value = sort[key];
    params.push(`sort=${key}:${value}`);
  }

  return `?${params.join('&')}`;
}
