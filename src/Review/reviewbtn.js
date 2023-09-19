import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Button = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false); // 버튼 클릭 상태를 저장하는 상태

  const handleClick = () => {
    // 버튼을 클릭할 때 호출되는 함수
    setIsClicked(!isClicked); // 클릭 상태를 반전시킴
  };

  return (
    <button
      className={`fontsmallb border rounded-xl shadow-lg m-1 ${
        isClicked ? 'bg-gray-300 text-gray-600' : 'bg-yellow-400 text-black'
      }`}
      style={{
        width: '12rem',
        height: '2.5rem',
        fontSize: '18px',
        background: isClicked ? '#FFE479' : 'conic-gradient(from 180deg at 50% 50.00%, #FFF2C6 0deg, #FFE479 360deg)',
      
      }}
      onClick={handleClick} // 버튼 클릭 시 handleClick 함수 실행
     
    >
      {isClicked ? children : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;