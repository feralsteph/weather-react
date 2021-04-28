import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(
  props
) {
  let [loaded, setLoaded] = useState(
    false
  );
  let [
    forecast,
    setForecast,
  ] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  console.log(props);

  if (loaded) {
    return (
      <div className="Forecast">
        <div class="container">
          <div class="row">
            <div class="col">
              <WeatherForecastDay
                data={forecast[0]}
              />
            </div>
            <div class="col">
              <WeatherForecastDay
                data={forecast[1]}
              />
            </div>
            <div class="col">
              <WeatherForecastDay
                data={forecast[2]}
              />
            </div>
            <div class="col">
              <WeatherForecastDay
                data={forecast[3]}
              />
            </div>
            <div class="col">
              <WeatherForecastDay
                data={forecast[4]}
              />
            </div>
            <div class="col">
              <WeatherForecastDay
                data={forecast[5]}
              />
            </div>
          </div>
        </div>{" "}
        <br />
        <br />
      </div>
    );
  } else {
    let apiKey =
      "b58c9c779b141dfd6610a16049288662";
    let longitude =
      props.coordinates.lon;
    let latitude =
      props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then(handleResponse);

    return null;
  }
}
