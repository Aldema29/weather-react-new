import React, {useState} from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";


export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({message:false});
let [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
  console.log(response.data)
  setWeatherData({
    message: true,
    temperature:response.data.temperature.current,
    wind: response.data.wind.speed,
    city: response.data.city,
    date: new Date(response.data.time * 1000),
    humidity: response.data.temperature.humidity,
    iconUrl : response.data.condition.icon_url,
    description: response.data.codition.description,
  });
}

function handleSubmit(event) {
  event.preventDefault();
  searchCity();
}

function handleCityChange(event) {
  setCity(event.target.value);
}

function searchCity(){
  let apiKey = "6210bfb6041b002d1b53875oa36td949c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  console.log(apiUrl);
}

if (weatherData.message) {
  return (
      <div className="weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
            <input
            className="form-control"
            autoFocus="on"
              type="search"
              placeholder="Enter a city..."
              onChange={handleCityChange}
            />
            </div>

            <div className="col-3">
            <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"/>
            </div>
            </div>
      </form>

      <WeatherInformation data={weatherData} />
      </div>
  );
  } else {
    searchCity();
    return "Loading....";
  }
}