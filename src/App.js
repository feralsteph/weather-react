import Weather from "./Weather";

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
          <Weather defaultCity="Houston" />
        </header>
      </div>
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

export default App;
