import React from "react";
import FormattedDate from "./FormattedDate";

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
      <span className="temperature">
        {Math.round(
          props.data.temperature
        )}
      </span>
      <span className="unit">°F</span>
      <br />
      <img
        src={props.data.iconUrl}
        alt={props.data.description}
      ></img>
    </div>
  );
}
