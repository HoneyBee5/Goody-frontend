import React, { useState } from 'react';
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

  return (
    <div className="w-full h-14 relative">
      <img src="img\ActionBar.png" className="absolute" />

      <div style={{ position: 'absolute',right:65, top:25 }}>
        <Link to="/collection">
        <button>
          <img src="img\backClose.png" style={{ width: '25px', height: '25px' }} />
        </button>
        </Link>
      </div>

      <div style={{ position: 'absolute', right: 35, top: 23 }}>
        <button onClick={handleDdongButtonClick}>
          <img src="img\Ddong.png" style={{ width: '7px', height: '30px' }} />
        </button>

          {showOptions && (
          <div style={{ position: 'absolute', right:20, top: -3, backgroundColor: '#ffffff', border: '1px solid #575757', borderRadius: '5px', padding: '5px', zIndex: 1 }}>

            <div style={{ display: 'block', marginTop: '5px' }} onClick={() => handleOptionClick('삭제')}>
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
        <label htmlFor="fileInput" className="photo w-32 h-32 mt-10 m-5 ml-5 flex items-center justify-center rounded-lg border border-black">
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
      <div className='Div_explainText flex flex-col'>
        <textarea
          type="text"
          value={text}
          onChange={handleChange}
          placeholder='제목'
          maxLength={19} /*제목은 20글자까지만 입력 가능*/
          className='explain-text border border-black mt-20 h-10 ml-6 mr-6'
          style={{fontSize: '18px', borderRadius: '6px', padding: '5px' }}
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
        <div className='Div_explainText flex flex-col'>
        <textarea
          type="text"
          value={text}
          maxLength={313}
          onChange={handleChange}
          placeholder='설명'
          className='explain-text border border-black mt-10 h-80 min-h-90 ml-6 mr-6' 
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
    <div>
      <button onClick={navigateToPurchase}>
          <img src='img\registerBtn.png' style={{marginLeft:20, marginTop:90, height:40, width:370}}></img>
      </button>
  </div>
  )
}


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