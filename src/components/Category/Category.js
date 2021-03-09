import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div style={{ color: 'white', padding: '2px 6px', textAlign: 'center' }}>
      <Link to='/android'><Button variant="contained"
        color="secondary">Android</Button></Link>
      <Link to='/camera' style={{ marginLeft: '6px' }}><Button variant="contained"
        color="secondary">Camera</Button></Link>
      <Link to='/laptop' style={{ marginLeft: '6px' }}><Button variant="contained"
        color="secondary">Laptop</Button></Link>

    </div>
  );
};

export default Category;