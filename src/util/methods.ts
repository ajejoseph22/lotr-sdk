import { FilterOperatorEnum, ListRequestOptions } from '../types/request';

export function encodeOptions<T>(options?: ListRequestOptions<T>): string {
  if (!options) return '';

  const { limit, page, offset, sort, filter } = options;
  const params = [];

  // pagination
  if (limit) params.push(`limit=${limit}`);
  if (page) params.push(`page=${page}`);
  if (offset) params.push(`offset=${offset}`);

  // sorting
  if (sort) {
    const key = Object.keys(sort)[0];
    const value = sort[key];
    params.push(`sort=${key}:${value}`);
  }

  // filtering
  if (filter) {
    Object.keys(filter).forEach((operator) => {
      switch (operator) {
        case FilterOperatorEnum.isEqualTo:
        case FilterOperatorEnum.regex:
          Object.entries(filter[operator]).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}=${value}`);
          });
          break;
        case FilterOperatorEnum.isNotEqualTo:
          Object.entries(filter.isNotEqualTo).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}!=${value}`);
          });
          break;
        case FilterOperatorEnum.includes:
          Object.entries(filter.includes).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}=${value.join(',')}`);
          });
          break;
        case FilterOperatorEnum.excludes:
          Object.entries(filter.excludes).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}!=${value.join(',')}`);
          });
          break;
        case FilterOperatorEnum.propertyExists:
          params.push(`${filter.propertyExists}`);
          break;
        case FilterOperatorEnum.propertyNotExists:
          params.push(`!${filter.propertyNotExists}`);
          break;
        case FilterOperatorEnum.greaterThan:
          Object.entries(filter.greaterThan).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}>${value}`);
          });
          break;
        case FilterOperatorEnum.LessThan:
          Object.entries(filter.LessThan).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}<${value}`);
          });
          break;
        case FilterOperatorEnum.greaterThanOrEqualTo:
          Object.entries(filter.greaterThanOrEqualTo).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}>=${value}`);
          });
          break;
        case FilterOperatorEnum.LessThanOrEqualTo:
          Object.entries(filter.LessThanOrEqualTo).forEach((entry) => {
            const key = entry[0];
            const value = entry[1];
            params.push(`${key}<=${value}`);
          });
          break;
        default:
          throw new Error(`Unknown filter operator: ${operator}`);
      }
    });
  }

  return `?${params.join('&')}`;
}
