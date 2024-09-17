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
      let apiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=metric`;
  console.log(apiUrl)
      axios.get(apiUrl).then(handleForecastResponse);

    return null;
  }
}