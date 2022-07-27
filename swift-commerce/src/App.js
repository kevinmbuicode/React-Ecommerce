//imports
import React from "react";
import Home from "./components/Home";
//import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import { Routes, Route} from 'react-router-dom';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
      </Routes>
    </div>
  );
}

export default App;
