//Imports
import React from 'react';
import '../Styles/card.css'

//card component
function Card({image, price, title}) {
    
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
                    <button className='flex flex-auto bg-slate-600'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Card;