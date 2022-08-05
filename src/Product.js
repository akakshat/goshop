import React from 'react'
import "./Product.css"
import {useStateValue} from './StateProvider'

function Product({id, title, price, rating, image}) {
  const [{ Cart }, dispatch] = useStateValue()

  const addtoCart = () =>{
    //ADD ITEM TO CART...
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">

          <p>{title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐️</p>
              ))
            }
          </div>
      </div>

          <img src= {image} alt=""></img>
          <button onClick={addtoCart}>Add to Cart</button>      
    </div>
  )
}

export default Product