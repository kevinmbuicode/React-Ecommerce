import React from 'react';
import ProductCardView from './ProductCardView';

//onClick function from shop page at the Image click returns this element
const ProductView = (props) => {
    console.log(props.productView)
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
            {console.log("You Viewed ProductView")}
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