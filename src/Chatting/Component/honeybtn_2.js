import React from 'react';
import PropTypes from 'prop-types'; // prop-types 라이브러리 가져오기


const Button = ({ children }) => {
    return (
        <button className='fontsmall font-bold mt-2' 
        style={{ width:'25rem', height:'3rem',borderRadius: '10px 0 10px 10px',backgroundColor:'#FFFFFF', color: '#5F3300'}}> 
        {children}
        </button>
    );
  };
  Button.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  export default Button;

  