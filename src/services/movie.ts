import {AxiosInstance, AxiosResponse} from "axios";

import {ListMoviesResponse, Movie as MovieType} from "../types/movie";
import {ListQuotesResponse, Quote} from "../types/quote";

export default class Movie {
  private client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  list(): Promise<MovieType[]> {
    return this.client.get("/movie").then((response: AxiosResponse<ListMoviesResponse>) => response.data.docs);
  }

  get(id: string): Promise<MovieType> {
    return this.client.get(`/movie/${id}`).then((response: AxiosResponse<ListMoviesResponse>) => response.data.docs[0]);
  }

  getQuotes(id: string): Promise<Quote[]> {
    return this.client.get(`/movie/${id}/quote`).then((response: AxiosResponse<ListQuotesResponse>) => response.data.docs);
  }
}
