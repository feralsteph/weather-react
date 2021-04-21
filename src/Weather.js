import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [
    weatherData,
    setWeatherData,
  ] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature:
        response.data.main.temp,
      date: new Date(
        response.data.dt * 1000
      ),
      description:
        response.data.weather[0]
          .description,
      iconUrl:
        "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h3>{weatherData.city}</h3>
        <h4>
          <FormattedDate
            date={weatherData.date}
          />
        </h4>
        <h4>
          {weatherData.description}
        </h4>
        <span className="temperature">
          {Math.round(
            weatherData.temperature
          )}
        </span>
        <span className="unit">°F</span>
        <br />
        <img
          src={weatherData.iconUrl}
          alt={weatherData.description}
        ></img>
      </div>
    );
  } else {
    const apiKey =
      "b58c9c779b141dfd6610a16049288662";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse);
    return "Loading...";
  }
}
