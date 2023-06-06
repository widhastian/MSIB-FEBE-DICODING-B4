import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h1 class="resto__name">${restaurant.name}</h1>
  <img class="resto__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
    <h3>Information</h3>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="resto__description">
    <h3>Descrirption</h3>
    <p>${restaurant.description}</p>
  </div>
  <div class="resto__menus">
    <div class="foods">
      <h3>Foods</h3>
      <ul>
        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
      </ul>
    </div>
    <div class="drinks">
      <h3>Drinks</h3>
      <ul>
        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="resto__reviews">
    <h3>Customer Reviews</h3>
    <div class="customer__review">
      ${restaurant.customerReviews.map((review) => `
        <div class="card">
          <p class="card__name">${review.name}</p>
          <p class="card__date">${review.date}</p>
          <p class="card__review">${review.review}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;
 
const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
      <img class="resto-item__header__poster" alt="${restaurants.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
      <p>${restaurants.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};