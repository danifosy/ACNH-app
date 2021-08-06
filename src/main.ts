import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  className: 'container',

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
  ],
});

if (app !== null) {
  app.append(mainElement);
}
