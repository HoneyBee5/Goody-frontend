import React from 'react';
import PropTypes from 'prop-types'; // prop-types 라이브러리 가져오기


const Button = ({ children }) => {
    return (
      <button className='fontsmallb border rounded-xl shadow-lg m-1' 
      style={{ 
        width:'12rem', height:'2.5rem',fontSize:'18px',
        background: 'conic-gradient(from 180deg at 50% 50.00%, #FFF2C6 0deg, #FFE479 360deg)'}}>
        {children}
      </button>
    );
  };
  Button.propTypes = {
    children: PropTypes.node.isRequired, // children 프롭스의 유효성 검사
  };
  
  export default Button;

  