import React, {useState} from "react";

export default function Weather() {
  let [City, setCity] = useState("");
  let [message, setMessage] = useState(false);
  let [weather, setWeather] = useState({});

  let apiKey = "6f578b96aa9505bcce148ac22cb85794"
  let apiUrl = "https://api.shecodes.io/weather/v1/current?query={query}&key={key}"

  function displayWeather(response) {
    setMessage(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidty, 
    });
    }
  
  
  return (
    <div>
      <div class="weather-app">
        <header>
          <form class="search-form" id="search-form">
            <input
              class="search-form-input"
              id="search-form-input"
              type="search"
              placeholder="Enter a city..."
              required
            />
            <input class="search-form-button" type="submit" value="Search" />
          </form>
        </header>

        <main>
          <div class="weather-app-data">
            <div>
              <h1 class="weather-app-city" id="city">
                New York, NYC
              </h1>
              <p class="weather-app-details">
                <span id="time">Sunday 12:00</span>,{" "}
                <span id="description">sunny</span>
                <br />
                Humidity:{" "}
                <strong>
                  <span id="humidity">35</span>%
                </strong>
                , Wind:{" "}
                <strong>
                  <span id="wind-speed">5</span>mph
                </strong>
              </p>
            </div>
            <div class="weather-app-temperature-container">
              <div class="weather-app-icon" id="icon">
                ☀️
              </div>
              <div class="weather-app-temperature-value" id="temperature">
                85
              </div>
              <div class="weather-app-unit">&deg;F</div>
            </div>
          </div>
        </main>
        <footer>
        <a  
            href="https://github.com/Aldema29/weather-react-new" target="blank"> Open source Code on Github 
            </a>
        </footer>
      </div>
    </div>
  );
}
