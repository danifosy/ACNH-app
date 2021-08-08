import './style.css';
import { createElement } from './utils/createElement';
import { createVillagerCard } from './components/villagers';
import { Villager } from './types';
import { getVillager, searchVillager } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

const allVillagers: Villager[] = await getVillager();

const villagerContainer = createElement('div', {
  className: 'villagerContainer',
  childElements: allVillagers.map((villager) => createVillagerCard(villager)),
});

/*input*/
const searchBar = createElement('input', {
  className: 'searchBar',
  placeholder: 'Find your favorite villager...',
});

searchBar.oninput = () => {
  const name = searchBar.value;
  const villagers: Villager[] = searchVillager(allVillagers, name);

  // replace list of villagers with filtered list
  villagerContainer.innerHTML = '';

  const filteredVillagerElements = villagers.map((villager) =>
    createVillagerCard(villager)
  );

  villagerContainer.append(...filteredVillagerElements);
};

const mainElement = createElement('main', {
  className: 'container',
  /*child of main*/
  childElements: [
    /*h1*/
    createElement('img', {
      className: 'header_img',
      src: 'https://i.redd.it/r0ny0t4wnbf41.png',
    }),
    searchBar,
    villagerContainer,
  ],
});

if (app !== null) {
  app.append(mainElement);
}
