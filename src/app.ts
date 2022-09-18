import axios, {AxiosInstance} from 'axios';
import Book from "./services/book";
import Movie from "./services/movie";
import Character from "./services/character";
import Quote from "./services/quote";

export default class LOTR {
  private static readonly API_URL = "https://the-one-api.dev/v2"
  private readonly client: AxiosInstance;

  book: Book;
  movie: Movie;
  character: Character;
  quote: Quote;

  constructor(accessKey: string) {
    if (!accessKey) {
      throw new Error("Missing credentials, please pass in your access key")
    }

    this.client = axios.create({
      baseURL: LOTR.API_URL,
      headers: {
        Authorization: `Bearer ${accessKey}`
      }
    })

    this.book = new Book(this.client);
    this.movie = new Movie(this.client);
    this.character = new Character(this.client);
    this.quote = new Quote(this.client);
  }
}
