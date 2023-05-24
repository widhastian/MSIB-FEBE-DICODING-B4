import movies from "./movies.js";

class DataSource {
  static searchMovie(keyword) {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=f7ef5cc19e082827f47935ff8406ef01&query=${keyword}`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if (responseJson.results) {
          return Promise.resolve(responseJson.results);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
