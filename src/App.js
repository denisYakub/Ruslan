import logo from './logo.svg';
import './App.css';
import Head from "./Head";
import About from "./About";
import People from "./People";
import Bottom from "./Bottom";

function App() {
  return (
    <div className="App">
      <div className="App-Content">
        <Head/>
        <About/>
        <People/>
        <Bottom/>
      </div>
    </div>
  );
}

export default App;
