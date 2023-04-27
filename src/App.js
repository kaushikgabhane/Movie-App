import { createContext,useState } from "react";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";



export const context = createContext(null);

function App() {
  const [input , setInput] = useState('avengers');
  
  return (
    <context.Provider value={{input , setInput}}>
      <Navbar />
      <Home />
    </context.Provider>
  );
}

export default App;
