const form = document.querySelector("form");
const locationInput = document.querySelector("#location");
const weatherDiv = document.querySelector("#weather");
const API_KEY = "3206ee35a9d910b31b671a5810828f4a";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = locationInput.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      weatherDiv.innerHTML = `Current temperature in ${location}: ${temp}°C, ${desc}.`;
    })
    .catch((error) => {
      console.error(error);
      weatherDiv.innerHTML = "An error occurred while fetching weather data.";
    });
});
