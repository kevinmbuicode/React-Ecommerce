import React, {useState, useEffect} from 'react';
import '../Styles/card.css'


function Card() {
    const [products, setProducts] = useState([]);

  useEffect(()=> {
    console.log("fetch occured")
    fetch("https://fakestoreapi.com/products/2")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])


    return(
        <div className="card-container">
            <div className="card-image">
                <img src={`${products.image}`} alt="online-card" className='card-image-inner w-full h-20' />
            </div>
            <div className='card-main'>
                <div className='flex flex-col'> 
                    <p className='text-xs'>{products.title}</p>
                    <p>$ {products.price}</p>
                </div>
                <div>
                    <button className='flex flex-auto bg-slate-600 '>Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Card;