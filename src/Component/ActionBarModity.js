import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const ActionBarModify = () => {
    const [showOptions, setShowOptions] = useState(false);

  const handleDdongButtonClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setShowOptions(false); // Close the options after selecting an option
  };

  return (
    <div className="w-full h-[577px] relative">

        <img src='img/newjeans.png' className="h-full object-contain" />
        
      <div style={{ position: 'absolute', right:50, top:28 }}>
        <Link to="/collection">
        <button>
          <img src="img\blackClose.png" style={{ width: '22px', height: '22px' }} />
        </button>
        </Link>
      </div>

      <div style={{ position: 'absolute', right: 20, top: 25 }}>
        <button onClick={handleDdongButtonClick}>
          <img src="img\blackDdong.png" style={{ width: '5px', height: '25px' }} />
        </button>

          {showOptions && (
          <div style={{ position: 'absolute', right:20, top: -3, backgroundColor: '#ffffff', border: '1px solid #575757', borderRadius: '5px', padding: '5px', zIndex: 1 }}>
            <div style={{display: 'block' }} onClick={() => handleOptionClick('수정')}>
              <Link to="/collectionWrite2">
                <button style={{width:'35px'}}>수정</button>
              </Link>
            </div>
            
            <div style={{ display: 'block', marginTop: '5px' }} onClick={() => handleOptionClick('삭제')}>
              <Link to="/collection">
                <button>삭제</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

  
  
  export { ActionBarModify };