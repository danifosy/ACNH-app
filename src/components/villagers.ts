import { createElement } from '../../src/utils/createElement';

function createVillagerCard(): HTMLElement {
  return createElement('div', {
    className: 'villagerCard',
    /*Whole card with child article*/
    childElements: [
      createElement('article', {
        className: 'villagerCard',
        /*img child of article*/

        childElements: [
          createElement('img', {
            className: 'villagerImg',
            src: 'https://acnhapi.com/v1/images/villagers/1',
          }),
          /*new div for villager infos*/

          createElement('div', {
            className: 'villagerInfo',

            /*children with infos (the html elements) */
            childElements: [
              createElement('h1', {
                innerHTML: 'Cyrano',
                className: 'Name',
              }),
              /*birthday */
              createElement('p', {
                innerHTML: 'Birthday',
                className: 'birthday',
              }),

              /*Species */
              createElement('p', {}),

              /*Gender */
              createElement('p', {}),
            ],
          }),
        ],
      }),
    ],
  });
}
