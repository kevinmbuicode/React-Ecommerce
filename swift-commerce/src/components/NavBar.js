//Imports
import React from 'react';
import { Link } from 'react-router-dom';


//NavBar function
function NavBar() {


    return ( 
        <div className='nav-container h-9'>
            <div className='nav-title'>
                <Link className='nav-link-link' to='/'><h1>Swift</h1></Link>
            </div>
            <div className='nav-links'> 
                <Link className='nav-link-link' to='/'><p>Home</p></Link>
                <Link className='nav-link-link' to='/shop'><p>Shop</p></Link>
                <Link className='nav-link-link' to='/about'><p>About</p></Link>
                <Link className='nav-link-link' to='/shop'><p>Contact</p></Link>
            </div>
        </div>
     );
}

export default NavBar;