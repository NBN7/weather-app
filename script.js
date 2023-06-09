const api_key = "fecfa9443fbf419993f11738233005";

const searchBtn = document.querySelector("button");

searchBtn.addEventListener("click", () => {
  const inputValue = document.querySelector("input").value;
  const URL = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${inputValue}&aqi=no`;

  const result = fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const weatherImg = document.querySelector("img");
    weatherImg.src = data.current.condition.icon;

    const locationTemp = document.querySelector("h1");
    locationTemp.textContent = data.current.temp_c + " °C";

    const locationName = document.querySelector("h2");
    locationName.textContent = data.location.name;

    const wind = document.querySelector("#wind");
    wind.textContent = `Wind ${data.current.wind_kph}km/h`;

    const humidity = document.querySelector("#humidity");
    humidity.textContent = `Humidity ${data.current.humidity}%`;

  });
});
