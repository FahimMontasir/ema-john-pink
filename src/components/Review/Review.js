import { Button, Container } from '@material-ui/core';
import React from 'react';

const Review = ({ cart, removeItem }) => {
  const tPay = cart.reduce((total, pd) => total + pd.price * pd.quantity, 0)
  const tAmount = cart.reduce((total, pd) => total + pd.quantity, 0)
  return (
    <Container>
      <div style={{ backgroundColor: 'pink', padding: "0 10px 5px", borderRadius: '4px' }}>
        <h2 style={{ textAlign: 'center' }}>Your cart review</h2>
        <h3>Total quantity: x{tAmount}</h3>
        <h3>Total payable: ${tPay}</h3>
        <div style={{ textAlign: 'center' }}>
          <Button variant="contained" color="secondary">Place Order</Button>
        </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          cart.map((rd, key) => <ReviewCart remove={removeItem} key={key} rd={rd}></ReviewCart>)
        }
      </div>
    </Container>
  );
};
const ReviewCart = ({ rd, remove }) => {
  return (
    <div style={{ backgroundColor: "lightgrey", padding: "5px", margin: '5px', width: "450px", borderRadius: "5px" }}>
      <h4>{rd.name}</h4>
      <p>price: ${rd.price}</p>
      <p>quantity: x{rd.quantity}</p>
      <Button onClick={() => remove(rd)} variant="contained" color="secondary">Remove</Button>
    </div>
  )
}

export default Review;