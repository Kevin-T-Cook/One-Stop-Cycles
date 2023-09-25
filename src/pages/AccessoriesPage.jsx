import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';

const AccessoriesPage = () => {
    const [accessories, setAccessories] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(()=>{
        fetch("http://localhost:3000/api/accessories")
            .then(response => response.json())
            .then(data => {
                setAccessories(data);
                console.log(data);
            })
            .catch(error => console.error("Error", error))
    }, []);
  
    const addItemToCart = (accessory) => {
      dispatch(addToCart(accessory)); 
      console.log(cart)
  };

    return (
    <>
    
      <h1 className="accessoryTitle">Shop Our Parts</h1>
      <div className="partsContainer">
      {accessories.map(accessory => (
        <div className="productContainer" key={accessory.id}>
          <h2>{accessory.title}</h2>
          <div className="accessoryPhoto">
              {console.log(accessory.image)}
              <img src={accessory.image} alt={accessory.title} />
              </div>
          <p>Brand: {accessory.vendor}</p>
          <p>Price: {accessory.price}</p>
          <p className='accDesc'>Description: {accessory.description}</p>
          {cart.some(item => item.id === accessory.id) ? (
              <button disabled>Added to Cart</button>
            ) : (
              <button onClick={() => addItemToCart(accessory)}>Add to Cart</button>
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

export default AccessoriesPage;
