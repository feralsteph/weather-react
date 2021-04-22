import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(
  props
) {
  return (
    <div className="WeatherInfo">
      <h3>{props.data.city}</h3>
      <h4>
        <FormattedDate
          date={props.data.date}
        />
      </h4>
      <h4>{props.data.description}</h4>
      <WeatherTemperature
        celsius={props.data.temperature}
      />

      <br />
      <WeatherIcon
        code={props.data.iconUrl}
      />
    </div>
  );
}
