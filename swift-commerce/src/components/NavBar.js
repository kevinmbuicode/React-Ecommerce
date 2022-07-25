//Imports
import React from 'react';


//NavBar function
function NavBar() {
    return ( 
        <div className='nav-container h-9'>
            <div className='nav-title'>
                <p>Swift</p>
            </div>
            <div className='nav-links'>
                <p className='hover:bg-sky-700'>Home</p>
                <p>Shop</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
     );
}

export default NavBar;