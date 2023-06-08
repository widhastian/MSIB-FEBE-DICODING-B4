/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.resto-item__not__found'
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.resto-item__not__found'
  );

  I.amOnPage('/');

  I.seeElement('.resto__title a');
  I.wait(3);

  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);

  I.amOnPage('/#/like');
  I.seeElement('.restaurant__title a');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  I.wait(3);

  I.click(firstRestaurant);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see(
    'Tidak ada restaurant untuk ditampilkan',
    '.resto-item__not__found'
  );

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
