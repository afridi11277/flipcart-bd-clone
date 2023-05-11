import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee , faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'


const Product = ({ product, handleAddToCart }) => {
    // console.log(props);
    // const handleAddToCart = props
    // const{product,handleAddToCart} = props

    const { name, img, seller, price, ratings } = product;
    

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-name'>
                <h5>Name: {name}</h5>
            </div>
            <div className='product-info'>
                <h5>Seller: {seller}</h5>
                <h5>Price: {price}</h5>
                <h5>Ratings: {ratings}</h5>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;