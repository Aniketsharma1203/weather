const apiKey = "2b23c28b61c36ae765e53fa3fa73c6c6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const img = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
  if (data.weather[0].main == "Clouds") {
    img.src =
      "https://cdn-icons-png.freepik.com/256/414/414927.png?ga=GA1.1.1853947530.1700849034&semt=ais";
  }
  if (data.weather[0].main == "Rain") {
    img.src =
      "https://cdn-icons-png.freepik.com/256/2864/2864448.png?ga=GA1.1.1853947530.1700849034&semt=ais";
  }
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
