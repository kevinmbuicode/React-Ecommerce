//imports
import React, {useState, useEffect} from "react";
import Home from "./components/Home";
import Card from './components/Card'
import ProductView from './components/ProductView'
import Shop from "./components/Shop";
import { Routes, Route} from 'react-router-dom';



function App() {
  const [products, setProducts] = useState([]);

  //Fetching the data from fakestoreapi.com, adding empty dependency array to prevent looping fetch:
  useEffect(()=> {
    console.log("fetch occured")
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])

  //Mapping over the products array and returning card
  const productElements = products.map(product => {
    return(
        <Card
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        description={product.description}
        rate={product.rating.rate}
        count={product.rating.count}
        />
    )
  })

  //Returning routes plus elements and passing props
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/shop" element={<Shop productElements={productElements}/>}/>
        <Route exact path="productview" 
        element={
        <ProductView 
          productView={productElements}
        />
        }/>
      </Routes>
    </div>
  );
}

export default App;
