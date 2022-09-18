export interface Character {
  _id: string
  name: string
  height: string
  race: string
  gender: string
  birth: string
  spouse: string
  death: string
  realm: string
  hair: string
  wikiUrl: string
}

export interface ListCharactersResponse {
  docs: Character[];
  total: number;
  limit: number;
  page: number;
  offset: number;
}
