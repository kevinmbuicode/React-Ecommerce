import React from 'react';
import '../Styles/card.css'


function Card(props) {
    console.log(props)
    return(
        <div className="card-container mx-1">
            <div className="card-image">
                <img src={`${props.image}`} alt="online-card" className='card-image-inner w-full h-20' />
            </div>
            <div className='card-main'>
                <div className='flex flex-col'> 
                    <p className='text-xs h-3 mb-3'>{props.title}</p>
                    <p>$ {props.price}</p>
                </div>
                <div>
                    <button className='flex flex-auto bg-slate-600'>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Card;