import './style.css';
import { createElement } from './utils/createElement';
import { createVillagerCard } from './components/villagers';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  className: 'container',
  /*child of main*/
  childElements: [
    /*h1*/
    createElement('h1', {
      className: 'header',
      innerText: 'Animal Crossing New Horizon Villagers',
    }),
    /*input*/
    createElement('input', {
      className: 'searchBar',
      placeholder: 'Find your favorite villager...',
    }),

    /*add the villager cards */
    createElement('div', {
      className: 'villagerContainer',
      childElements: [createVillagerCard()],
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
