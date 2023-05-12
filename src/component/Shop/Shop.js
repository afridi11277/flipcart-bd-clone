import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log('product loads before fetch');

        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
        console.log('products loaded');
    }, [])

    useEffect(() => {
        console.log('local storage first line');
        const storedCart = getStoredCart()
        const savedCart = []
        console.log(storedCart);
        for (const id in storedCart) {
            // console.log(id);
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                console.log(addedProduct);
                savedCart.push(addedProduct)
            }

            console.log('local storage finished');
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        // cart.push(product)
        let newCart = []
        const exists = cart.find(product=>product.id===selectedProduct.id)
        if(!exists){
            selectedProduct.quantity=1
            newCart = [...cart, selectedProduct]


        }
        else{
            const rest=cart.filter(product=>product.id!==selectedProduct.id)
            exists.quantity=exists.quantity+1
            newCart=[...rest,exists]
        }
        
        setCart(newCart)
        // console.log(newCart);
        addToDb(selectedProduct.id)

    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {/* <p>this is for shopping products</p> */}
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                {/* <h5>Order summary</h5> */}
                {/* {<h5>selected Items:{products.length} </h5>} */}
            </div>
        </div>
    );
};

export default Shop;