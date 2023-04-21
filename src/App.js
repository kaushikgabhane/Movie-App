import { useContext } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

import { searchContext } from "./Components/SearchBox";


function App() {
  const searchInput = useContext(searchContext);
  return (
    <div className="App">
      <Navbar />
      <Home searchInput={searchInput}/>
    </div>
  );
}

export default App;
