//Imports
import React, { useState, useEffect }from "react";
import '../Styles/shop.css';
import { Link, useNavigate } from 'react-router-dom';
import ShopEmpty from '../images/shopping-cart-colored.webp'
//import ShopFilled from '../images/shopping-cart-filled.png'

function Shop(props) {
    const [ filter, setFilter ] = useState([]);
    //const [ product, setProduct] = useState([]);
    const navigate = useNavigate()


//Moving to Checkout if cart is clicked
    function handleCart() {
        navigate('/checkout')
    }


    useEffect(() => {
        const getProduct = async() => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            console.log(data)
            setFilter(data)
        }
        getProduct()
    },[])

    //filter products by name selected 
  const filterProduct = (name) => {
    const newList = filter.filter((item)=> item.category === name);
    setFilter(newList)
  }

    return ( 
        // Container and NavBar
        <div className="shop-container">
            <div className="shop-container-nav">
                <div className="shop-title">
                    <Link className='nav-link-link' to='/'><h1>Swift</h1></Link>
                </div>
                <div className="shop-container-links">
                    <Link className='nav-link-link' to='/'><p>Home</p></Link>
                    <Link className='nav-link-link' to='/shop'><p>Shop</p></Link>
                    <Link className='nav-link-link' to='/shop'><p>About</p></Link>
                    <Link className='nav-link-link' to='/shop'><p>Contact</p></Link>
                    <img src={`${ShopEmpty}`} 
                    alt='shop_empty_icon' height='12px' width='20px' 
                    onClick={handleCart}
                    className="ml-2"
                    />
                    <p>{props.count}</p>
                </div>

                {/* Categories */}
            </div>
            <div className="shop-buttons">
                <button className="shop-categories" onClick={()=>filterProduct(filter)}>All</button>
                <button className="shop-categories" onClick={()=>filterProduct("jewelery")}>Jewellery</button>
                <button className="shop-categories" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
                <button className="shop-categories" onClick={()=>filterProduct("electronics")}>Electronics</button>
                <button className="shop-categories" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
                <input type="search" className="shop-categories"/>
                <button>Search</button>
            </div>

            {/* Grid */}

            <div className="grid-container">
                <div className="bg-red-400">
                    <input type='text' className='bg-gray-400 rounded-lg w-28' placeholder='Search Keywords'/>
                    <h2 className="font-bold">Category</h2>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Children</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Children</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>Children</p>
                    <p>Links</p>
                </div>
                <div className="bg-green-400">
                    <p className="flex flex-wrap">{props.productElements}</p>
                </div>
                <div className="bg-red-400">01</div>
            </div>
            
        </div>
     );
}

export default Shop;