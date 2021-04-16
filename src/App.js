import Loader from "react-loader-spinner";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader
          type="Puff"
          color="white"
          height={100}
          width={100}
        />
        <Search />
      </header>
    </div>
  );
}

export default App;
