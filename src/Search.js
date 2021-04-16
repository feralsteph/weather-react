import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(
    false
  );
  const [
    weather,
    setWeather,
  ] = useState("");

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature:
        response.data.main.temp,
      wind: response.data.wind.speed,
      humidity:
        response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description:
        response.data.weather[0]
          .description,
    });
    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey =
      "b58c9c779b141dfd6610a16049288662";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a city..."
        onChange={updateCity}
      />
      <input
        type="submit"
        value="Search"
      />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>
            Temperature:{" "}
            {Math.round(
              weather.temperature
            )}
            °C
          </li>
          <li>
            Description:{" "}
            {weather.description}
          </li>
          <li>
            Wind:{" "}
            {Math.round(weather.wind)}{" "}
            km/hr
          </li>
          <li>
            Humidity: {weather.humidity}
            %
          </li>
          <li>
            <img
              src={weather.icon}
              alt="Weather Icon"
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
