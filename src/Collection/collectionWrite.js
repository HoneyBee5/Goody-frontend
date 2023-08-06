import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

// 액션바 이름
const ActionBar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDdongButtonClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setShowOptions(false); // Close the options after selecting an option
  };


  useEffect(() => {
    const defaultOpenElement = document.getElementById('defaultOpen');
    if (defaultOpenElement) {
      defaultOpenElement.click();
    }
  }, []);
  
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동하는 함수
  };

  return (
    <div className="w-full h-14 relative">
      <img src="img\ActionBar.png" className="absolute" />

      <div style={{ position: 'absolute',right:55, top:20 }}>
        <button onClick={handleBack}>
          <img src="img\Close.png" style={{  width: '35px', height: '35px'  }} className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)]' />
        </button>

      </div>

      <div style={{ position: 'absolute', right: 15, top: 20 }}>
        <button onClick={handleDdongButtonClick}>
          <img src="img\dot.png" style={{  width: '35px', height: '35px' }}  className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)]' />
        </button>

          {showOptions && (
          <div style={{ position: 'absolute', right:20, top: -3, backgroundColor: '#ffffff', border: '1px solid #575757', borderRadius: '5px', padding: '5px', zIndex: 1 }} >

            <div style={{ display: 'block', marginTop: '5px' }} onClick={() => handleOptionClick('삭제')} >
              <Link to="/collection">
              <button style={{width:'35px'}}>삭제</button>
              </Link>
            </div>
          </div>
        )}
    </div>
    </div>

  );
};

const Square = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  return (
    <div>
      <button>
      <label htmlFor="fileInput" className="photo w-32 h-32 mt-10 m-5 ml-3 flex items-center justify-center rounded-lg border border-gray-500">
        <div className="PhotoText rounded-1g">사진</div>
        <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
      </label>
      </button>
    </div>  
  );
};

  const Title = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
      setText(event.target.value);
    };

    return (
      <div className='flex flex-col px-6 mb-6'>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder='제목'
          maxLength={19} /*제목은 20글자까지만 입력 가능*/
          className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)]  rounded-lg w-[355px] h-12 pl-4'
          style={{}}
       />
      </div>
    )
  };

const ExplainText = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
      setText(event.target.value);
    };

    return (
        <div className='flex flex-col px-6'>
        <textarea
          type="text"
          value={text}
          maxLength={313}
          onChange={handleChange}
          placeholder='설명'
          className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)]  rounded-lg w-[355px] h-52 pl-4' 
          style={{fontSize: '18px', borderRadius: '6px', padding: '5px' }}
          />
      </div>

    )
};



const Register = () => {
  const navigate = useNavigate();
  const navigateToPurchase = () => {
    navigate("/collectionDetail");
  };

  return (
    <div style={{ position: 'absolute', bottom: 0 }}>
      <button onClick={navigateToPurchase} className="p-2">
        <img src='img\registerBtn.png' style={{ width: '400px', height: '50px'}}></img>
      </button>
    </div>
  );
};



function CollectionWrtie() {
  return (

    <div>

      <ActionBar />
      <Square />
      <Title />
      <ExplainText />
      <Register />

    </div>

  );
}

CollectionWrtie.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultValue: PropTypes.string,
  };
  
export default CollectionWrtie;