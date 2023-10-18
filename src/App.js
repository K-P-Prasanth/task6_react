import Nav from "./components/Nav";
import Home from "./components/Home";

import Skills from "./components/skills"
// import Cards from "./components/cards";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      {/* <Cards/> */}
      <Skills/>
    </div>
  );
}

export default App;

