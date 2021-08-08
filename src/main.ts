import './style.css';
import { createElement } from './utils/createElement';
import { createVillagerCard } from './components/villagers';
import { Villager } from './types';
import { getVillager, searchVillager } from './utils/api';

const app = document.querySelector<HTMLDivElement>('#app');

// const villagers: Villager[] = await getVillager();
const villagers: Villager[] = await searchVillager('ros');

const villagerContainer = createElement('div', {
  className: 'villagerContainer',
  childElements: villagers.map((villager) => createVillagerCard(villager)),
});

/*input*/
const searchBar = createElement('input', {
  className: 'searchBar',
  placeholder: 'Find your favorite villager...',
});

const mainElement = createElement('main', {
  className: 'container',
  /*child of main*/
  childElements: [
    /*h1*/
    createElement('h1', {
      className: 'header',
      innerText: 'Animal Crossing New Horizon Villagers',
    }),
    searchBar,
    villagerContainer,
  ],
});

if (app !== null) {
  app.append(mainElement);
}
