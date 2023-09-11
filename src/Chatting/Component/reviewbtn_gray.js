import React, {useState} from 'react';
import PropTypes from 'prop-types'; // prop-types 라이브러리 가져오기


const Button = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false); // 버튼 클릭 상태를 저장하는 상태

  const handleClick = () => {
    // 버튼을 클릭할 때 호출되는 함수
    setIsClicked(!isClicked); // 클릭 상태를 반전시킴
  };
    return (

      
      <button className='fontsmallb border rounded-xl shadow-lg m-1' 
      style={{ 
        width:'12rem', height:'2.5rem',fontSize:'18px',
        background: isClicked? 'gray' :'conic-gradient(from 180deg at 50% 50.00%, #FFF 0deg, #DCDCDC 360deg)'}}
        onClick={handleClick}
        >

        {isClicked ? children : children}
      </button>
    );
  };
  Button.propTypes = {
    children: PropTypes.node.isRequired, // children 프롭스의 유효성 검사
  };
  
  export default Button;

  