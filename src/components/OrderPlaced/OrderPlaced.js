import React from 'react';
import img from '../../images/giphy.gif'
const OrderPlaced = () => {
  return (
    <div style={{ textAlign: 'center' }}>

      <h1>Order has been placed</h1>
      <img style={{ maxWidth: "100%" }} src={img} alt="" />

      <p>don't worry about delaying order. We won't  send you the product since you haven't paid any money.</p>
      <div style={{ textAlign: 'center' }}>
        <p >#developers aren't  responsible for this.</p>
        <p>ceo-Fahim (don't  believe google. It's I who am the ceo of emajohn)</p>
      </div>
    </div>
  );
};

export default OrderPlaced;