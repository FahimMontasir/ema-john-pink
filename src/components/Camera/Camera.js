import { Container } from '@material-ui/core';
import React from 'react';
import cameras from '../../fakeData/camera'
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard'
const Camera = ({ handleCart }) => {
  const cameru = cameras;
  return (
    < div >
      <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          cameru.map(pd => <RecipeReviewCard pd={pd} key={pd.key} handleCart={handleCart}></RecipeReviewCard>)
        }
      </Container>
    </div >
  );
};

export default Camera;