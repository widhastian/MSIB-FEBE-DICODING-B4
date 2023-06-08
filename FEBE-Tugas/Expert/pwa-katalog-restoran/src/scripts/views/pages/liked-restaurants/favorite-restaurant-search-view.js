/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable operator-linebreak */
/* eslint-disable class-methods-use-this */
import { createRestoItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content__heading">Your Liked Restaurant</h2>
          <div class="restaurants" id="restaurants">
          </div>
        </div>
      </div>
    `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurants(restaurants) {
    this.showFavoriteRestaurants(restaurants);
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;

    if (restaurants.length) {
      html = restaurants.reduce(
        (carry, restaurant) =>
          carry.concat(createRestoItemTemplate(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document
      .getElementById('restaurants')
      .dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div class="resto-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
