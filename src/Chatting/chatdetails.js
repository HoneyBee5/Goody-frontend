import React, { useState } from 'react';
import { ActionBar } from '../Component/ActionBar';
import { Link } from 'react-router-dom';

// 액션바 이름
const actionBarName = "채팅";

  



const chatdetails = () => {

  const [showplusbtn, setShowplusbtn] = useState(false);
    
    const handleButtonClick = () => {
        setShowplusbtn(!showplusbtn); 
      };


  const chat_id = '이름';
  const chat_explain = '안녕하세요';
  
  return (
    <>
    <div style={{ zIndex: -1, backgroundSize: 'cover'}} >
    <ActionBar actionBarName={actionBarName}  />
      {/* 채팅목록 */}
    </div>
      
    
      <div className="flex justify-center items-center relative pb-5">
      <Link to='/review'>
        <button src="img/Add.png" alt="프로필사진" className="rounded-full border w-14 h-14  z-50"></button>
        </Link>
      </div>
      
      <div style={{ fontSize: '1rem' }} className="font-bold flex justify-start pl-4">
              {chat_id}
      </div>

     
     <div className='pl-3 pb-3'>
      <div style={{ fontSize: '0.9rem',height:'30px', width:'200px'}} 
      className="flex justify-start text-white rounded-full border bg-gray-200 pl-1  items-center bg-gray-400 rounded-lg w-100 h-100 shadow-md" >
              {chat_explain}

      </div>
      
      </div>
    
         
      <div className='p-1 flex justify-end '>
      <div style={{ fontSize: '0.9rem',height:'30px', width:'200px'}} 
      className="flex justify-start text-black rounded-full border bg-yellow-100 pl-1  items-center bg-gray-400 rounded-lg w-100 h-100 shadow-md" >
              {chat_explain}

      </div>
      
      </div>
      <div className='p-1 flex justify-end '>
      <div style={{ fontSize: '0.9rem',height:'30px', width:'200px'}} 
      className="flex justify-start text-black rounded-full border bg-yellow-100 pl-1  items-center bg-gray-400 rounded-lg w-100 h-100 shadow-md" >
              {chat_explain}

      </div>
      </div>
      
    

      <div className="flex justify-center ">
      <div style={{ height: '30px', width: '300px' }} className="items-center flex fixed justify-between bottom-3 p-3 rounded-full bg-gray-200">
        {/* 박스 */}
          {/* 버튼 */}
          <div>
          <Link to='/address'><button className="font-bold text-xl text-black flex justify-start  " onClick={handleButtonClick}>+</button></Link>
          {showplusbtn && <plusbtn />}
          </div>
          <button className='flex justify-end'>ㅁ</button>
      </div>
    </div>

    </>
  );
};


export default chatdetails;
