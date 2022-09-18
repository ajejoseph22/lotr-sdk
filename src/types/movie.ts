export interface Movie {
  _id: string
  name: string
  runtimeInMinutes: number
  budgetInMillions: number
  boxOfficeRevenueInMillions: number
  academyAwardNominations: number
  academyAwardWins: number
  rottenTomatoesScore: number
}

export interface ListMoviesResponse {
  docs: Movie[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}
