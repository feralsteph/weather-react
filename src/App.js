import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <Search />
        <Forecast />
      </header>
    </div>
  );
}

export default App;
