import './style.css';
import _ from 'lodash';

const API_KEY = "249d13b3";

class FilmItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "daftar-film-item");

    const img = document.createElement("img");
    img.setAttribute("src", this.getAttribute("poster"));
    img.setAttribute("alt", this.getAttribute("judul"));

    const judul = document.createElement("h3");
    judul.textContent = this.getAttribute("judul");

    const tahun = document.createElement("p");
    tahun.textContent = this.getAttribute("tahun");

    const detailButton = document.createElement("button");
    detailButton.textContent = "Detail";

    detailButton.addEventListener("click", () => {
      alert(
        `Detail film ${this.getAttribute("judul")} belum diimplementasikan`
      );
    });

    wrapper.appendChild(img);
    wrapper.appendChild(judul);
    wrapper.appendChild(tahun);
    wrapper.appendChild(detailButton);

    const style = document.createElement("style");
    style.textContent = `
        .daftar-film-item {
            width: 200px;
            margin: 10px;
            box-shadow: 0px 0px 5px #bfd7ff;
            overflow: hidden;
        }

        .daftar-film-item img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }

        .daftar-film-item h3 {
            margin: 10px;
        }

        .daftar-film-item p {
            margin: 0 10px 10px;
        }

        .daftar-film-item button {
            background-color: #5465ff;
            color: #fff;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
        }

        .daftar-film-item img:hover {
            transform: scale(1.1);
        }

        .daftar-film-item button:hover {
            background-color: #5465ff;
        }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define("film-item", FilmItem);

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const judulFilm = document.querySelector("#judul-film").value;

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${API_KEY}&s=${judulFilm}`
  );
  const data = await response.json();

  const daftarFilm = document.querySelector("#daftar-film");
  daftarFilm.innerHTML = "";

  data.Search.forEach((film) => {
    const filmItem = document.createElement("film-item");
    filmItem.setAttribute("judul", film.Title);
    filmItem.setAttribute("tahun", film.Year);
    filmItem.setAttribute("poster", film.Poster);
    daftarFilm.appendChild(filmItem);
  });

  const render = () => {
  const results = search(input.value);
  resultList.innerHTML = '';
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    resultList.appendChild(li);
  });
};

const debounceRender = _.debounce(render, 300);

input.addEventListener('input', debounceRender);

});
