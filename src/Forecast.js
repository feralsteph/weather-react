import "./Forecast.css";
export default function Forecast() {
  return (
    <div className="Forecast">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">
                  Mon
                </h6>
                <p class="card-text">
                  Clear
                </p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="weather icon"
                ></img>
                <p class="card-text">
                  69°/54°
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">
                  Tues
                </h6>
                <p class="card-text">
                  Clear
                </p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="weather icon"
                ></img>
                <p class="card-text">
                  69°/54°
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">
                  Wed
                </h6>
                <p class="card-text">
                  Clear
                </p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="weather icon"
                ></img>
                <p class="card-text">
                  69°/54°
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">
                  Thurs
                </h6>
                <p class="card-text">
                  Clear
                </p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="weather icon"
                ></img>
                <p class="card-text">
                  69°/54°
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h6 class="card-title">
                  Fri
                </h6>
                <p class="card-text">
                  Clear
                </p>
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="weather icon"
                ></img>
                <p class="card-text">
                  69°/54°
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
      <footer>
        <a
          href="https://github.com/feralsteph/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Stephanie LaRue
      </footer>
    </div>
  );
}
