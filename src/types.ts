export type Villager = {
  img: string;
  name: string;
  birthday: string;
  species: string;
  gender: string;
};

export type VillagerFromAPI = {
  id: number;
  'file-name': string;
  name: {
    'name-USen': string;
    'name-EUen': string;
    'name-EUde': string;
    'name-EUes': string;
    'name-USes': string;
    'name-EUfr': string;
    'name-USfr': string;
    'name-EUit': string;
    'name-EUnl': string;
    'name-CNzh': string;
    'name-TWzh': string;
    'name-JPja': string;
    'name-KRko': string;
    'name-EUru': string;
  };
  personality: string;
  'birthday-string': string;
  birthday: string;
  species: string;
  gender: string;
  subtype: string;
  hobby: string;
  'catch-phrase': string;
  icon_uri: string;
  image_uri: string;
  'bubble-color': string;
  'text-color': string;
  saying: string;
  'catch-translations': {
    'catch-USen': string;
    'catch-EUen': string;
    'catch-EUde': string;
    'catch-EUes': string;
    'catch-USes': string;
    'catch-EUfr': string;
    'catch-USfr': string;
    'catch-EUit': string;
    'catch-EUnl': string;
    'catch-CNzh': string;
    'catch-TWzh': string;
    'catch-JPja': string;
    'catch-KRko': string;
    'catch-EUru': string;
  };
};

export type AllVillagersFromAPI = {
  [key: string]: VillagerFromAPI;
};
