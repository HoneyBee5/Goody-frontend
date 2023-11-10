import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children , onClick ,active }) => {


  return (
    <button
      className={`fontsmallb border rounded-xl shadow-lg m-1 `}
      style={{
        width: '12rem',
        height: '2.5rem',
        fontSize: '18px',
        background: active ? '#FFE479' : 'conic-gradient(from 180deg at 50% 50.00%, #FFF2C6 0deg, #FFE479 360deg)',
      
      }}
      onClick={onClick} // 버튼 클릭 시 handleClick 함수 실행
     
    >
      {active ? children : children}
    </button>
  );
};



Button.propTypes = {
  children: PropTypes.node.isRequired, // 버튼 내용 (텍스트 또는 다른 요소)
  onClick: PropTypes.func.isRequired, // 클릭 이벤트 핸들러
  active: PropTypes.bool.isRequired, // 활성/비활성 상태 플래그
};

export default Button;