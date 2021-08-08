import { createElement } from '../../src/utils/createElement';
import styles from './villagers.module.css';
import { Villager } from '../types';

export function createVillagerCard({
  img,
  name,
  birthday,
  species,
  gender,
}: Villager): HTMLElement {
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
            src: img,
          }),
          /*new div for villager infos*/

          createElement('div', {
            className: styles.info,

            /*children with infos (the html elements) */
            childElements: [
              createElement('h1', {
                innerText: name,
                className: styles.name,
              }),
              /*birthday */
              createElement('p', {
                className: styles.birthday,
                innerText: birthday,
              }),
              /*Species */
              createElement('p', {
                innerText: species,
                className: styles.species,
              }),
              /*Gender */
              createElement('p', {
                innerText: gender,
                className: styles.gender,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
