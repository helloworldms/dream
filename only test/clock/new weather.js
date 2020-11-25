function init() {
  loadCoodrds();
}

init();

function loadCoodrds() {
  const loadCoodrds = localStorage.getItem("coords");

  if (loadCoodrds === null) {
    // 위도 경도를 알아내
    askForCoords();
  } else {
  }
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function saveCoords() {
  localStorage.setItem("coords", JSON.stringify(coodrdsObj));
}

function handleGeoError() {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coodrdsObj = {
    latitude,
    longitude,
  };

  saveCoords(coodrdsObj);
  getWeather(latitude, longitude);
}

function handleGeoSucces() {}

function getWeaterh(lat, lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then((resPonse) => {
    resPonse.json();
  });
  .then((json)=>{
      const temperature = Math.floor(json.main.temp)
  })


  weather.innerHTML = `${temperature} | ${place} | <img class="icon" src="icons/${icon}.png" width="20px"> | ${description}`;
  console.log(json.weather);
}
