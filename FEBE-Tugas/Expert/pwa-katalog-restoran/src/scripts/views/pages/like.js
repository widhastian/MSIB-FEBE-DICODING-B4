/* eslint-disable no-new */
/* eslint-disable operator-linebreak */
import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({
      view,
      favoriteRestaurants: FavoriteRestoIdb,
    });
    new FavoriteRestaurantSearchPresenter({
      view,
      favoriteRestaurants: FavoriteRestoIdb,
    });
  },
};

export default Like;
