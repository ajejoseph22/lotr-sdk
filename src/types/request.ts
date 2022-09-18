type ExactlyOneKey<K extends keyof never, V, KK extends keyof never = K> = {
  [P in K]: { [Q in P]: V } & { [Q in Exclude<KK, P>]?: never } extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never;
}[K];

export enum FilterOperatorEnum {
  isEqualTo = 'isEqualTo',
  isNotEqualTo = 'isNotEqualTo',
  includes = 'includes',
  excludes = 'excludes',
  propertyExists = 'propertyExists',
  propertyNotExists = 'propertyNotExists',
  regex = 'regex',
  greaterThan = 'greaterThan',
  LessThan = 'LessThan',
  greaterThanOrEqualTo = 'greaterThanOrEqualTo',
  LessThanOrEqualTo = 'LessThanOrEqualTo',
}

export interface ListRequestOptions<T> {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: ExactlyOneKey<keyof T, 'asc' | 'desc'>;
  filter?: {
    [K in FilterOperatorEnum]?:
      | {
          [Q in keyof T]?: string | number | string[] | number[] | RegExp;
        }
      | string;
  };
}
