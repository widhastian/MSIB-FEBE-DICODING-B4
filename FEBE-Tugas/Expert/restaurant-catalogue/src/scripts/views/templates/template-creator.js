import CONFIG from '../../globals/config';
 
const createMovieDetailTemplate = (movie) => `
  <h2 class="movie__title">${movie.restaurant.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.restaurant.pictureId}" alt="${movie.restaurant.name}" />
  <div class="movie__info">
    <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${movie.restaurant.name}</p>
    <h4>Release Date</h4>
    <p>${movie.restaurant.city}</p>
    <h4>Duration</h4>
    <p>${movie.restaurant.address}</p>
    <h4>Rating</h4>
    <p>${movie.restaurant.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${movie.restaurant.description}</p>
  </div>
`;
 
const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.name}"
           src="${movie.pictureId ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.rating}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
      <h3><a href="/#/detail/${movie.id}">${movie.name}</a></h3>
      <p>${movie.description}</p>
    </div>
  </div>
`;
 
const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 
export {
  createMovieItemTemplate,
  createMovieDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};