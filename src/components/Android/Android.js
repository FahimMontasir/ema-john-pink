import { Container } from '@material-ui/core';
import React from 'react';
import androids from '../../fakeData/android';
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';

const Android = ({ handleCart }) => {
  const droid = androids;
  return (
    <div>
      <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          droid.map(pd => <RecipeReviewCard pd={pd} key={pd.key} handleCart={handleCart}></RecipeReviewCard>)
        }
      </Container>
    </div>
  );
};

export default Android;