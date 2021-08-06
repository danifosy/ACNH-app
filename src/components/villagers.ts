import { createElement } from '../../src/utils/createElement';
import styles from './villagers.module.css';

export function createVillagerCard(): HTMLElement {
  return createElement('div', {
    className: styles.card,
    /*Whole card with child article*/
    childElements: [
      createElement('article', {
        className: styles.article,

        /*img child of article*/
        childElements: [
          createElement('img', {
            className: styles.img,
            src: 'https://acnhapi.com/v1/images/villagers/1',
          }),
          /*new div for villager infos*/

          createElement('div', {
            className: styles.info,

            /*children with infos (the html elements) */
            childElements: [
              createElement('h1', {
                innerText: 'Cyrano',
                className: styles.name,
              }),
              /*birthday */
              createElement('p', {
                className: styles.birthday,
                innerText: 'March 9th',
              }),
              /*Species */
              createElement('p', {
                innerText: 'Anteater',
                className: styles.species,
              }),
              /*Gender */
              createElement('p', {
                innerText: 'Male',
                className: styles.gender,
              }),
              /*catch-phrase */
              createElement('p', {
                innerText: '"ah-CHOO"',
                className: styles.catchphrase,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
