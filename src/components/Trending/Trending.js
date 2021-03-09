import { Container } from '@material-ui/core';
import React from 'react';
import fakeData from '../../fakeData';
import RecipeReviewCard from '../RecipeReviewCard/RecipeReviewCard';

const Trending = ({ handleCart }) => {
  const trendyPd = fakeData.slice(0, 15);

  return (
    <div>
      <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {
          trendyPd.map(pd => <RecipeReviewCard pd={pd} key={pd.key} handleCart={handleCart}></RecipeReviewCard>)
        }
      </Container>
    </div>
  );
};

export default Trending;