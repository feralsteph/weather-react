import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import "./Forecast.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./App.css";
import "./Weather.css";
import "./Search.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather />
          <Search />
          <Forecast />
        </header>
      </div>
    </div>
  );
}

export default App;
