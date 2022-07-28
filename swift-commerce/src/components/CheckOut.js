import React from 'react';
import FreeHeart from '../images/free-heart.png'

//Include conditional rendering that onClick on an element, expands the element to display info like and
//input field of some sort as such https://cxl.com/wp-content/uploads/2019/05/image-1-1024x493.png. On the
//delivery element, Clicking it will expand billing address

function CheckOut(props) {
    return ( 
        <div className='0-checkout-main-container'>
            <h2 className='font-bold'>MY BAG</h2>
            <div className='1-checkout-card-container flex flex-row border-2 border-indigo-500/75'>
                <div className='2-checkout-image-container'>
                    <img src={`${props.image}`} alt="image_side_view" />
                </div>
                <div className='3-checkout-title-container'>
                    <p className='font-semibold'>$60.00</p>
                    <p>Birkenstock Arizona birko-flor sandals in stone</p>
                    <div className='4-checkout-currency-select flex flex-row'>
                        <select name='currency' id='currency'>
                            <option value='US'>US</option>
                            <option value='UK'>UK</option>
                            <option value='EURO'>EURO</option>
                        </select>
                        <p>QTY</p>
                        <input type='number' className='w-10'/>
                    </div>
                    <div className='flex flex-row'>
                        <img src={FreeHeart} alt='save-icon' height='3px' width='15px' className='mr-1'/>
                        <p>save for later</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CheckOut;