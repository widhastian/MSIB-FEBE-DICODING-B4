/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable operator-linebreak */

const _showFoundRestaurants = (restaurants, view) => {
  view.showRestaurants(restaurants);
};

class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteRestaurants, view }) {
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }

  _listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this._searchRestaurants(latestQuery);
    });
  }

  async _searchRestaurants(latestQuery) {
    this._latestQuery = latestQuery.trim();

    let foundRestaurants;
    if (this.latestQuery.length > 0) {
      foundRestaurants = await this._favoriteRestaurants.searchRestaurants(
        this.latestQuery
      );
    } else {
      foundRestaurants = await this._favoriteRestaurants.getAllRestos();
    }

    _showFoundRestaurants(foundRestaurants, this._view);
  }

  _showFoundRestaurants(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
