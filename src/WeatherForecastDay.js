import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(
  props
) {
  function maxTemperature() {
    let temperature = Math.round(
      props.data.temp.max
    );
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(
      props.data.temp.min
    );
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(
      props.data.dt * 1000
    );
    let day = date.getDay();

    let days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];

    return days[day];
  }

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h6 className="card-title">
            {day()}
          </h6>
          <WeatherIcon
            code={
              props.data.weather[0].icon
            }
            size={45}
          />
          <p className="card-text">
            <span className="weatherForecast-Max">
              {maxTemperature()}
            </span>
            <span className="weatherForecast-Min">
              {" "}
              {minTemperature()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
