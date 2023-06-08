/* eslint-disable no-prototype-builtins */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((restaurant) => restaurant.id == id);
  },

  getAllRestos() {
    return favoriteRestaurants;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteResto(id) {
    favoriteRestaurants = favoriteRestaurants.filter(
      (restaurant) => restaurant.id != id
    );
  },

  searchRestaurants(query) {
    return this.getAllRestos().filter((restaurant) => {
      const loweredCaseRestaurantTitle = (
        restaurant.title || '-'
      ).toLowerCase();
      const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(
        /\s/g,
        ''
      );

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
    });
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => (favoriteRestaurants = []));

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
