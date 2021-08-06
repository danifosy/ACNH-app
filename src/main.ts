import './style.css';
import { createElement } from './utils/createElement';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = createElement('main', {
  className: 'container',
  childElements: [
    createElement('h1', { innerText: 'Animal Crossing New Horizon Villagers' }),

    createElement('input', {
      className: 'searchBar',
      placeholder: 'Find your favorite villager...',
    }),
  ],
});

if (app !== null) {
  app.append(mainElement);
}
