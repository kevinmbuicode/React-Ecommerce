//imports
import React, {useState, useEffect} from "react";
import Home from "./components/Home";
import Card from "./components/Card";
import Shop from "./components/Shop";
import { Routes, Route} from 'react-router-dom';



function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(()=> {
  //   console.log("fetch occured")
  //   fetch("https://fakestoreapi.com/products/2")
  //   .then(res => res.json())
  //   .then(data => setProducts(data))
  // }, [])

  // const productElements = products.map(product => {
  //   return(
  //       <Card 
  //       title={product.title}
  //       price={products.price}
  //       />
  //   )
  // })

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
