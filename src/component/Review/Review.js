import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import happyImg from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderPlace, setOrderPlace] = useState(false);

    const handlePlaceOrder =()=>{
        setCart([])
        setOrderPlace(true)
        processOrder();
    }

    const removeProduct = (productkey) => {
        const newCart = cart.filter(pd => pd.key !== productkey)
        setCart(newCart);
        removeFromDatabaseCart(productkey)
    }
    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productKeys = Object.keys(saveCart)
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key)
            product.quantity = saveCart[key];
            return product;
        });
        setCart(cartProducts)
    }, [])

    let thankyou;
    if(orderPlace){
        thankyou = <img src={happyImg} alt=""/>
    }
    return (
        <div className="twin-container">

            <div className="product-container">
                {
                    cart.map(pd => <ReviewProduct
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></ReviewProduct>)
                }
                {thankyou}

            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="btn">place order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;