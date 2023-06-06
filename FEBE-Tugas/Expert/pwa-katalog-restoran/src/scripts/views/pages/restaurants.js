import RestaurantSource from '../../data/restaurants-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Find Your Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
