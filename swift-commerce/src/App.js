//imports
import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Card from "./components/Card";
import ProductView from "./components/ProductView";
import Shop from "./components/Shop";
import { Routes, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut";
import About from "./components/Pages/About";
//import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  //Count items in Count
  const handleCount = () => {
    return setCount((count) => count + 1);
  };

  //Fetching the data from fakestoreapi.com, adding empty dependency array to prevent looping fetch:
  useEffect(() => {
    console.log("fetch occured");
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //Mapping over the products array and returning card
  const productElements = products.map((product) => {
    return (
      <Card
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        description={product.description}
        rate={product.rating.rate}
        // count={product.rating.count}
        handleCount={handleCount}
      />
    );
  });

  //Returning routes plus elements and passing props
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/checkout" element={<CheckOut />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/shop"
          element={<Shop count={count} productElements={productElements} />}
        />
        <Route exact path="/shop/:id" element={<ProductView/>} />
      </Routes>
    </div>
  );
}

export default App;
