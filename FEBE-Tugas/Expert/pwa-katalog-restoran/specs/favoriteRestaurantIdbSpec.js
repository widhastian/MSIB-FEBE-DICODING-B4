/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestos()).forEach(
      async (restaurant) => {
        await FavoriteRestoIdb.deleteResto(restaurant.id);
      }
    );
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestoIdb);
});
