import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Your Liked Restaurant</h2>
      <div id="restaurants" class="restaurants">
 
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
