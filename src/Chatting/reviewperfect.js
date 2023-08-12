import React from 'react';
import './font.css';

const reviewperfect = () => {
  const divStyle = {
    zIndex: -1,
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(90deg, #F4E299 0%, #FFCF0E 100%)'
    /* 그 외 다른 스타일 설정 가능 */
  };
  return (
    <>
    <div style={divStyle}>
    <div className='font fixed top-0 pl-2' style={{color:'white',fontSize:'50px'}}>
            REVIEW
      </div>


      
    </div>
    


    </>
  );
};

export default reviewperfect;