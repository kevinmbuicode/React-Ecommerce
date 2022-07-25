//Imports
import React from "react";
import '../Styles/shop.css'
//import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

function Shop() {
    return ( 
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
            
        </div>
     );
}

export default Shop;