//Imports
import React from "react";
import '../Styles/shop.css';
import { Link, useNavigate } from 'react-router-dom';
//Image Imports
import ShopEmpty from '../images/shopping-cart-colored.webp'
//import ShopEmpty from '../images/shopping-cart-colored.webp'
//import ShopFilled from '../images/shopping-cart-filled.png'

function Shop(props) {
     const navigate = useNavigate()

//   function handleClick() {
//     console.log("Link clicked");
//     navigate('/productview')
//   }

//Moving to Checkout if cart is clicked
    function handleCart() {
        navigate('/checkout')
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
                </div>
            </div>
            <div className="shop-buttons">
                <button className="shop-categories">All</button>
                <button className="shop-categories">Desktops</button>
                <button className="shop-categories">Laptops</button>
                <button className="shop-categories">Printers</button>
                <button className="shop-categories">Monitors</button>
                <input type="search" className="shop-categories"/>
                <button>Search</button>
            </div>

            {/* Grid */}

            <div className="grid-container">
                <div className="bg-red-400">
                    <h2>Clothing</h2>
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