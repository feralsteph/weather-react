import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h3>Houston</h3>
      <h4>Clear</h4>
      <h1>54°F</h1>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
        alt="weather icon"
      ></img>
    </div>
  );
}
