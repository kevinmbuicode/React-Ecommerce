import React from 'react'

function ProductCardView(props) {
    
    return ( 
        <div>
            <div className='product-Image-Side'>
                <img src={`${props.image}`} alt="image_side_view"/>
            </div>
            <div className='flex flex-col'>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <p>{props.rate}</p>
                <p>{props.count}</p>
            </div>
        </div>
     );
}

export default ProductCardView;