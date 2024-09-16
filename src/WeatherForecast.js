import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  console.log.apply(props)
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleForecastResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast row">
          {forecast.map(function (day, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={day} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
    );
  } else {
      let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  console.log(apiUrl)
      axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}