type ExactlyOneKey<K extends keyof never, V, KK extends keyof never = K> = {
  [P in K]: { [Q in P]: V } & { [Q in Exclude<KK, P>]?: never } extends infer O
    ? { [Q in keyof O]: O[Q] }
    : never;
}[K];

export interface ListRequestOptions<T> {
  limit?: number;
  page?: number;
  offset?: number;
  sort?: ExactlyOneKey<keyof T, 'asc' | 'desc'>;
}
