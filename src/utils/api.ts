import type { AllVillagersFromAPI, Villager } from '../types';

export async function getVillager(): Promise<Villager[]> {
  const response = await fetch('https://acnhapi.com/v1/villagers/');
  const data: AllVillagersFromAPI = await response.json();
  /*Object.values turns values of fetched object into array */

  const villagers = Object.values(data);

  const formattedVillagers: Villager[] = villagers.map((villager) => {
    const formattedVillager: Villager = {
      img: villager.image_uri,
      name: villager.name['name-EUen'],
      birthday: villager.birthday,
      species: villager.species,
      gender: villager.gender,
    };
    return formattedVillager;
  });

  return formattedVillagers;
}

export function searchVillager(
  allVillagers: Villager[],
  name: string
): Villager[] {
  // variable that saves name and puts it to lowercase
  const needle = name.toLowerCase();
  //filter by name, avoid typos from upper-/lowercase mispellings
  const filteredVillagers = allVillagers.filter(
    (villager) => villager.name.toLowerCase().indexOf(needle) !== -1
  );

  return filteredVillagers;
}
