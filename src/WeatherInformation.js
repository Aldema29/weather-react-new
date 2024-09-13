import React from "react";
import Date from "./Date";
import Units from "./Units";

export default function WeatherInformation(props){
    return(
        <div className="WeatherInformation">
            <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <Date date={props.data.date}/>
                </li>
                <li>
                    Mostly Cloudy
                </li>
            </ul>
<div className="row mt-3">
    <div className="col-6">
     <div className="d-flex">
<img src={props.data.iconUrl}
alt={props.data.description}
className="float-left"/>

<div className="float-left">
    <Units celsius={props.data.temperature}/>
</div>
     </div>
    </div>

<div className="col-6">
    <ul>
        <li> Humidity: {props.data.humidity}</li>
        <li>Wind: {props.data.wind} Km/h </li>
    </ul>
</div>
</div>
 </div>
    );
}