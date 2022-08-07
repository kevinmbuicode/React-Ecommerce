import React, { useState, useEffect } from 'react';
//import ProductCardView from './ProductCardView';
import { useParams } from 'react-router-dom';

//onClick function from shop page at the Image click returns this element
const ProductView = () => {
    const [product, setProduct] = useState([]);
    const {id} = useParams()


    //fetch product with id
    useEffect(()=> {
        const getProduct = async () => {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const data = await res.json()
            console.log(data)
            setProduct(data)
        }
        getProduct()
    }, [id])


    //React router can handle this logic.
    // const items = props.productView.map(item => {
    //     console.log("map function occured")
    //     return(
    //         <ProductCardView
    //             id={item.id}
    //             image={item.image}
    //             description={item.description}
    //             title={item.title}
    //             price={item.price}
    //             rate={item.rating.rate}
    //             count={item.rating.count}
    //         />
    //     )
    // })

    return(
        <div>
            You viewed this product
            <div>
                <img src={`${product.image}`} alt={product.title} />
            </div>
            <div className="image-details">
                <p>{product.title}</p>
                <p>{product.description}</p>
                <p>{product.rate}</p>
                <p>{product.count}</p>
            </div>
        </div>
    )
}

export default ProductView;