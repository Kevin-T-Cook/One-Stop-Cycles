import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const PartsPage = () => {
  const[parts, setParts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  
  useEffect(()=> {
    fetch("http://localhost:3000/api/parts")
    .then(response => response.json())
    .then(data => {
      setParts(data);
      console.log(data)
    })
    .catch(error => console.error
      ("Error", error))
  },[]);
  

  const addItemToCart = (part) => {
    dispatch(addToCart(part)); 
    console.log(cart)
};


  return (
    <>
      <h1 className='partsTitle'>Shop Our Parts</h1>
      <div className="partsContainer">
        {parts.map(part => (
        <div className="productContainer" key={part.id}>
          <h2>{part.title}</h2>
            <div className="partsPhoto">
              {console.log(part.image)}
              <img src={part.image} alt={part.title} />
            </div>
          <p>Brand: {part.vendor}</p>
          <p>Price: {part.price}</p>
          <p className='partsDesc'>Description: {part.description}</p>
          {cart.some(item => item.id === part.id) ? (
              <button disabled>Added to Cart</button>
            ) : (
              <button onClick={() => addItemToCart(part)}>Add to Cart</button>
            )}
              <button className="cart-button">
                <Link to="/cart">Go to Cart</Link>
              </button>
        </div>
      ))}
      </div>
      
      
    </>
  );
}

export default PartsPage;
