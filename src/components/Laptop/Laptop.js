import { Container } from '@material-ui/core';
import React from 'react';
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';
import laptop from '../../fakeData/laptop';

const Laptop = ({ handleCart }) => {
  const laptops = laptop;
  return (
    < div >
      <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          laptops.map(pd => <RecipeReviewCard pd={pd} key={pd.key} handleCart={handleCart}></RecipeReviewCard>)
        }
      </Container>
    </div >
  );
};

export default Laptop;