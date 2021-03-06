import React, {
  useState,
  useEffect,
} from "react";
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

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (
            dailyForecast,
            index
          ) {
            if (index < 6) {
              return (
                <div
                  className="col"
                  key={index}
                >
                  <WeatherForecastDay
                    data={dailyForecast}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey =
      "b58c9c779b141dfd6610a16049288662";
    let longitude =
      props.coordinates.lon;
    let latitude =
      props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

    axios
      .get(apiUrl)
      .then(handleResponse);

    return null;
  }
}
