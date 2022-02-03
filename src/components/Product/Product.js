import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
    // console.log(props)
    const { name, img, price, stock, seller, star } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className="name">{name}</h2>
                <p>Price: ${price}</p>
                <p>
                    <small>by {seller}</small>
                </p>
                <p>Only {stock} items in stock</p>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly
                ></Rating>
                <br />
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className="btn-regular"
                >
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
