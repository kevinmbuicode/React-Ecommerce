//Imports
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/card.css'

//card component
function Card({image, price, title}) {
    const navigate = useNavigate()

    //Handle buy button to add item to cart
    function handleBuy() {
        return(
            console.log("Buy clicked, add item to cart")
        )
    }

    //Handle View function path to Product View
    function handleView() {
        navigate("/productview");
        console.log("Navigated")
    }
    
    return(
        <div className="card-container mx-1">
            <div className="card-image">
                <img src={`${image}`} alt="online-card" className='card-image-inner w-full h-20' />
            </div>
            <div className='card-main'>
                <div className='flex flex-col'> 
                    <p className='text-xs h-3 mb-3'>{title}</p>
                    <p>$ {price}</p>
                </div>
                <div>
                    <button className='flex flex-auto bg-slate-600' onClick={handleView}>View</button>
                    <button className='flex flex-auto bg-slate-600' onClick={handleBuy}>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Card;