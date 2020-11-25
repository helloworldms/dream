const COORDS = "coords";
const weather = document.querySelector(".js-weather");
const API_KEY = "50368fe18c176c179b45cc6e9e2d72e3";

const array = [{ 1: 10, 2: 1, 3: 2 }, 2, 3, 2, 3, 4, 2, 3, 5];
console.log(array[0]);

function getWeather(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temperature = Math.floor(json.main.temp);
      const place = json.name;
      const icon = json.weather[0].icon;
      const description = json.weather[0].description;

      weather.innerHTML = `${temperature} | ${place} | <img class="icon" src="icons/${icon}.png" width="20px"> | ${description}`;
      console.log(json.weather);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
  console.log(position);

  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const coodrdsObj = {
    latitude,
    longitude,
  };

  saveCoords(coodrdsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(positon) {
  console.log(positon);
}
//장치의 위치 정보에 접근할 수 있는 Geolocation 객체를 반환합니다.
//Geolocation.getCurrentPosition()메서드는 장치의 현재 위치를 가져옵니다.
//navigator.geolocation.getCurrentPosition(success[, error[, [options]])
function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoodrds() {
  const loadedCoords = localStorage.getItem(COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parseCoords = JSON.parse(loadedCoords);
    console.log(parseCoords);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}

function init() {
  loadCoodrds();
}

init();
