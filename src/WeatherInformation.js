import React from "react";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInformation(props){
    return(
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <Date date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <div>
                <WeatherIcon code={props.data.icon} size={52} />
              </div>
  
              <div>
                <WeatherTemp celsius={props.data.temperature} />
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }