export interface PeopleResponseModel {
  count: number;
  next: string;
  previous: string | null;
  results: PeopleModel[];
}

export interface PeopleModel {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface PlanetModel {
  name: string;
  terrain: string;
  climate: string;
}
