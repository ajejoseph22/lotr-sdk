import { ListResponse } from './response';

export interface Character {
  _id: string;
  name: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  wikiUrl: string;
}

export interface ListCharactersResponse extends ListResponse {
  docs: Character[];
}
