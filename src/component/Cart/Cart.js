import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if(total>35){
        shipping = 0;
    }else if(total>15){
        shipping = 4.99;
    }else if(total>0){
        shipping = 12.99;
    }

    const tex =( total /10).toFixed(2);
    const grandTotal = (total + shipping + Number(tex)).toFixed(2);
    return (
        <div>
            <h2>Order Sammery:</h2>
            <p>Items Orders: {cart.length} </p>
            <p>Product Price: {total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tex/Vat: {tex}</small></p>
            <p>Total Price: {grandTotal}</p>
            
        </div>
    );
};

export default Cart;