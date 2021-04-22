import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [
    weatherData,
    setWeatherData,
  ] = useState({ ready: false });
  const [city, setCity] = useState(
    props.defaultCity
  );
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
        response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey =
      "b58c9c779b141dfd6610a16049288662";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo
          data={weatherData}
        />
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city..."
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input
            type="submit"
            value="🔍"
            className="button"
          />
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
