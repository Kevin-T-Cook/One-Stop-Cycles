import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';


const BikesPage = () => {
    const [bikes, setBikes] = useState([]);
    const [filteredBikes, setFilteredBikes] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(()=>{
        fetch("http://localhost:3000/api/bikes")
            .then(response => response.json())
            .then(data => {
                setBikes(data);
                setFilteredBikes(data);
            })
            .catch(error => console.error("Error", error))
    }, []);

    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
      if (category === 'All') {
        setFilteredBikes(bikes);
      } else {
        const filtered = bikes.filter(bike => bike.category === category);
        setFilteredBikes(filtered);
      }
    }

    const addItemToCart = (bike) => {
      dispatch(addToCart(bike)); 
      console.log(cart)
  };

    return (
    <>
        <div className="categoryContainer">
        <div className="allBikesRender" onClick={() => handleCategoryClick('All')}>
                    <h3>Shop All</h3>
                </div>
          <div className="roadBikes" onClick={() => handleCategoryClick('Road')}>
            <h3>Road Bikes</h3>
            <img src="https://assets.specialized.com/i/specialized/97222-05_AETHOS-SW-LTD-BRCH-BLKPRL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto" alt="road bike" />
          </div>
          <div className="mtnbikes" onClick={() => handleCategoryClick('Mountain')}>
            <h3>Mountain Bikes</h3>
            <img src="https://assets.specialized.com/i/specialized/96324-30_SJ-EVO-EXPERT-DKNVY-HRVGLD_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto" alt="mountain bike" />
          </div>
          <div className="hybridBikes" onClick={() => handleCategoryClick('Hybrid')}>
            <h3>Hybrid Bikes</h3>
            <img src="https://assets.specialized.com/i/specialized/90121-30_COMO-SL-50-SMK-TRNSP_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto" alt="hybrid bike" />
          </div>
          <div className="eBikes" onClick={() => handleCategoryClick('E-Bike')}>
            <h3>E-Bikes</h3>
            <img src="https://assets.specialized.com/i/specialized/95022-58_VADO-40-ST-REDTNT-SILREFL_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto" alt="eBikes" />
          </div>
          <div className="kidsBikes" onClick={() => handleCategoryClick('Kids')}>
            <h3>Kids Bikes</h3>
            <img src="https://assets.specialized.com/i/specialized/96518-71_RIP_CSTR-12_ACDPRP-BLK-WHT_HERO?bg=rgb(241,241,241)&w=1600&h=900&fmt=auto" alt="kids pink bike" />
          </div>
        </div>
        <h1 className='bikesTitle'>Our Bikes</h1>
        <div className='bikesContainer'>
          {filteredBikes.map(bike => (
            <div className="productContainer" key={bike.id}>
              <h2>{bike.title}</h2>
              <div className="bikePhoto">
              <img src={bike.image} alt={bike.title} />
              </div>
              <div className="priceContainer">
                <p className='bikeBrand'>Brand: {bike.vendor}</p>
                <p className='dollarPrice'>
                  Price: ${bike.price}</p>
              </div>
              <p className='bikeDesc'>Description: {bike.description}</p>
              {cart.some(item => item.id === bike.id) ? (
              <button disabled>Added to Cart</button>
            ) : (
              <button onClick={() => addItemToCart(bike)}>Add to Cart</button>
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

export default BikesPage;
