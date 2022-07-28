import React from 'react';
import FreeHeart from '../images/free-heart.png'

//Include conditional rendering that onClick on an element, expands the element to display info like and
//input field of some sort as such https://cxl.com/wp-content/uploads/2019/05/image-1-1024x493.png. On the
//delivery element, Clicking it will expand billing address

function CheckOut(props) {
    return ( 
        <>
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
                            <select name='currency' id='currency' className="border-2 border-pink-500/75">
                                <option value='US'>US</option>
                                <option value='UK'>UK</option>
                                <option value='EURO'>EURO</option>
                            </select>
                            <p>QTY</p>
                            <input type='number' className='w-10'/>
                        </div>
                        <div className='flex flex-row'>
                            <img src={FreeHeart} alt='save-icon' height='3px' width='15px' className='mr-1'/>
                            <p>Add to wishlist</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Billing Address */}
            <div className="border-2 border-cyan-500/75 mt-2">
                <h2 className="font-bold">Billing Address</h2>
                <p>Click the checkbox to add the billing address..</p>
                <input type="checkbox"/>
            </div>

            {/* Payments Info */}
            <div className="border-2 border-yellow-500/75 mt-2">
                <h2 className="font-bold">We Accept:</h2>
                <p>Choose your form of payment</p>
                <input type="checkbox" id='card' className="mt-2 ml-2"/>
                <label htmlfor='card' id='card'>Card Payment</label>
                <input type="checkbox" id='card' className="mt-2 ml-2"/>
                <label htmlfor='card' id='card'>Mpesa</label>
                <input type="checkbox" id='card' className="mt-2 ml-2"/>
                <label htmlfor='card' id='card'>Paypal</label>
            </div>
        </>
     );
}

export default CheckOut;