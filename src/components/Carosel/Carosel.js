import React from 'react';
import Carousel from 'react-material-ui-carousel'
import fakeData from '../../fakeData'

export default function Carosel() {
  var items = fakeData.slice(0, 5);

  return (
    <Carousel indicators={false} navButtonsAlwaysInvisible={true}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  )
}

function Item({ item }) {
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: '70px' }}>
        <img style={{ width: '200px', height: '180px' }} src={item.img} alt="" />
        <p>${item.price}</p>
        <h5 style={{ height: '50px' }}>{item.name}</h5>
      </div>

    </>
  )
}