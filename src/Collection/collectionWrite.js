import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ActionBarClose } from '../Component/ActionBarClose';

// 액션바 이름
const actionBarName = "컬렉션 작성";

const Square = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  return (
    <div className='w-16 m-6 mt-10 border border-gray-200 rounded-xl p-4 shadow-[0_1px_8px_rgba(180,180,180,0.7)]'>
    <label id="fileInput" className="">
      <img className='w-16' src='img\Icon_Camera.png'></img>
      <p className='text-center font-bold text-[#B4B4B4]'>1/5</p>
      <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
    </label>
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

      <ActionBarClose actionBarName={actionBarName} />
      <Square />
      <Title />
      <ExplainText />
      <Register />

    </div>

  );
}
  
export default CollectionWrtie;