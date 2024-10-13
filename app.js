let API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let API_KEY = "e7618d3d28942a589d3a0269debcb13e";
let searchInput = document.querySelector(".search-box input");
let searchBtn = document.querySelector(".search-box button");
let weatherImage = document.querySelector(".weather-image img");

document.addEventListener("DOMContentLoaded", () => {
  checkWeather();
});

async function checkWeather(city = "Dombivli") {
  const response = await fetch(API_URL + city + `&appid=${API_KEY}`);
  const data = await response.json();
  console.log(data);

  if (data.name == undefined) {
    alert("City is not found");
  } 
  else {
     setTimeout(() => {
          searchInput.value = '';
     },200)
    setTimeout(() => {
      document.querySelector("#city").innerHTML = data.name;
      document.querySelector("#temp").innerHTML =
        Math.round(data.main.temp) + "°C";
      document.querySelector("#humadity").innerHTML = data.main.humidity + "%";
      document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";
    }, 200);

    if (data.weather[0].main == "Clouds") {
      weatherImage.src = "images/clouds.png";
    } 
    else if (data.weather[0].main == "Haze") {
      weatherImage.src = "images/haze.png";
    } 
    else if (data.weather[0].main == "Clear") {
      weatherImage.src = "images/clear.png";
    } 
    else if (data.weather[0].main == "Rain") {
      weatherImage.src = "images/rain.png";
    } 
    else if (data.weather[0].main == "Snow") {
      weatherImage.src = "images/snow.png";
    } 
    else if (data.weather[0].main == "Mist") {
      weatherImage.src = "images/mist.png";
    } 
    else if (data.weather[0].main == "Drizzle") {
      weatherImage.src = "images/drizzle.png";
    }
  }
}

searchBtn.addEventListener("click", () => {
  if (searchInput.value == "") {
    alert("Please enter city name");
  } 
  else {
    checkWeather(searchInput.value);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    searchBtn.click();
  }
});
