import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock, key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 class="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br />
                <div className="short-detail">
                    <p><small>by: {seller}</small></p>
                    <br />
                    <h3>$ {price}</h3>
                    <p><small>Only {stock} left in stock-order soon</small></p>
                     {props.showAddToCart ==true &&<button
                     className="btn"
                     onClick = {() => props.handleAddProduct(props.product)}
                     ><FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
                </div>

            </div>

        </div>
    );
};

export default Product;