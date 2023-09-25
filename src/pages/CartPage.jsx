import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart)
  const dispatch = useDispatch();

  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item.id)); 
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div className="product-info">
             <img src={item.image} alt={item.title} />
             </div>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button onClick={() => removeItemFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        Total: ${total}
      </div>
    </div>
  );
};

export default CartPage;
