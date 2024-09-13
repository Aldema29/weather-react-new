
import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="container">
      <h1> My Weather App </h1>
      <Weather defaultCity="New York" />
      </header>
      <footer>
         { "This app was coded by Aldema Michael-Glantz and is "}
        <a  
            href="https://github.com/Aldema29/weather-react-new" target="blank"> Open sourced
            </a>
        </footer>
      </div>
    
  );
}

