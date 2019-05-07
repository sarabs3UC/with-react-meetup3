import React from 'react';
import img from '../loading_spinner.gif'

const Laoading = (props) => (
    props.loading ?
      <div style={{ textAlign: 'center' }}>
        <img src={img} alt='loading' />
        <h1>LOADING</h1>
      </div> :
      null
    
);

export default Laoading;


