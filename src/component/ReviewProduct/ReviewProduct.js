import React from 'react';

const ReviewProduct = (props) => {
    const {name, quantity, key, price,img} = props.product;
    const reviewItemStyle = {
        borderBottom : '1px solid lightgray',
        marginBottom: ' 5px',
        paddingBottom: ' 5px',
        marginLeft: ' 200px',
        display:'flex'
        
    }
    return (
        <div style={reviewItemStyle}>
            <div>
                <img src={img} alt=""/>
            </div>
           <div>
           <h4 className="product-name">{name}</h4>
            <h5>Quantity: {quantity}</h5>
            <p><small>$ {price}</small></p>
            <br/>
            <button className="btn"
            onClick={()=>props.removeProduct(key)}
            >Remove</button>
           </div>
        </div>
    );
};

export default ReviewProduct;