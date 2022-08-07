import React from 'react';
import ProductCardView from './ProductCardView';
import { useParams } from 'react-router-dom';

//onClick function from shop page at the Image click returns this element
const ProductView = (props) => {
    console.log(props.productView)


    //React router can handle this logic.
    const items = props.productView.map(item => {
        console.log("map function occured")
        return(
            <ProductCardView
                id={item.id}
                image={item.image}
                description={item.description}
                title={item.title}
                price={item.price}
                rate={item.rating.rate}
                count={item.rating.count}
            />
        )
    })

    return(
        <div>
            You viewed this product
            {items}
            
            {/* <div>
                <img src={`${props.image}`} alt="Card_Image" />
            </div>
            <div className="image-details">
                <p>{props.title}</p>
                <p>{props.description}</p>
                <p>{props.rate}</p>
                <p>{props.count}</p>
            </div> */}
        </div>
    )
}

export default ProductView;