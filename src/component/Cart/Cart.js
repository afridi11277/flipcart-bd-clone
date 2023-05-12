import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    // console.log(cart);   
    let total = 0;
    let shipping=0
    let quantity = 0
    for(const product of cart){
        quantity=quantity+product.quantity
        total = total+(
            product.price*quantity)
        shipping = shipping+ (product.shipping * quantity)

    }
    const tax = parseFloat((total*0.15).toFixed(2))
    const grandTotal = total+shipping+tax

    return (
        <div className='cart'>
            <h4>order summary: </h4>
            <h5>selected Items: <h1>{quantity}</h1> </h5>
            <h5>total price: ${total} </h5>
            <h5>Shipping Price: ${shipping} </h5>
            <h5>Included Vat(15%): {tax} </h5>
            <h3>Grand Total: {grandTotal} </h3>

        </div>
    );
};

export default Cart;