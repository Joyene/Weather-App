let form = document.querySelector("#formControl");
form.addEventListener("submit", searchCity);
function weatherDisplay(response) {
  let cityInput = document.querySelector("#city");
  cityInput.innerHTML = response.data.name;
  console.log(response.data);
  let description = document.querySelector("#descript");
  description.innerHTML = response.data.weather[0].description;
  let unitConversion = document.querySelector("#temps");
  unitConversion.innerHTML = Math.round(response.data.main.temp);
}

function searchCity(event) {
  event.preventDefault();
  let apiKey = "5ec378af668e4e5ca5b63a514661a894";
  let city = document.querySelector("#city_input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(weatherDisplay);
}

function degreeFahrenheit(event) {
  event.preventDefault();
  let fahrenheitConversion = document.querySelector("#temps");

  let fahrenheitTemp = (celciusTemp * 9) / 5 + 32;
  fahrenheitConversion.innerHTML = Math.round(fahrenheitTemp);
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", degreeFahrenheit);

let celciusTemp = null;
