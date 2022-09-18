import { AxiosInstance, AxiosResponse } from 'axios';

import { ListQuotesResponse, Quote as QuoteType } from '../types/quote';
import {ListRequestOptions} from "../types/request";
import {encodeOptions} from "../util/methods";

export default class Quote {
  private static readonly BASE_PATH = '/quote';
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(options?: ListRequestOptions<QuoteType>): Promise<ListQuotesResponse> {
    return this.client
      .get(`${Quote.BASE_PATH}${encodeOptions<QuoteType>(options)}`)
      .then((response: AxiosResponse<ListQuotesResponse>) => response.data);
  }

  get(id: string): Promise<QuoteType> {
    return this.client
      .get(`${Quote.BASE_PATH}/${id}`)
      .then(
        (response: AxiosResponse<ListQuotesResponse>) => response.data.docs[0],
      );
  }
}
