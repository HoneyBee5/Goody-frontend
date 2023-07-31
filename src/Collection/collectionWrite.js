import React, { useState } from 'react';
import { ActionBar } from '../Component/ActionBar';
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

// 액션바 이름
const actionBarName = "";

const Square = () => {
    return (
      <button className="photo w-32 h-32 mt-10 m-5 ml-6 flex items-center justify-center rounded-lg border border-black">
        <div className="PhotoText rounded-1g mt-3">
            <img src='img\collectionCam.png' width={90}></img>
        1/3
        </div>
      </button>
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
          className='explain-text border border-black mt-28 h-10 ml-6 mr-6'
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
          <img src='img\registerBtn.png' style={{marginLeft:20, marginTop:70, height:40, width:370}}></img>
      </button>
  </div>
  )
}


function CollectionWrtie() {
  return (

    <div>

      <ActionBar actionBarName={actionBarName} />
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