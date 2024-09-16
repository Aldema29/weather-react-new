import React, {useState} from "react";
import axios from "axios";
import WeatherInformation from "./WeatherInformation";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";


export default function Weather(props) {
let [weatherData, setWeatherData] = useState({message: false});
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
    description: response.data.condition.description,
    coordinates: response.data.coordinates
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
  let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
  console.log(apiUrl);
}

if (weatherData.message) {
  return (
      <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
            <input
             className="form-control search-input"
             type="search"
             placeholder="Enter a city..."
             onChange={handleCityChange}
            />
            </div>

            <div className="col-3 p-0">
            <input
            type="submit"
            value="Search"
            className="btn btn-primary w-100"/>
            </div>
            </div>
      </form>

      <WeatherInformation data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} city={weatherData.city}/>
      <footer>
         { "This app was coded by Aldema Michael-Glantz and is "}
        <a  
            href="https://github.com/Aldema29/weather-react-new" target="blank"> Open sourced
            </a>
        </footer>
      </div>
  );
  } else {
    searchCity();
    return "Loading....";
  }
}