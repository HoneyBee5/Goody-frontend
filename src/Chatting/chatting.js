import React from 'react';
import { Nav } from '../Component/Nav';
import { ActionBar } from '../Component/ActionBar';
import './chatting.css'; 

// 액션바 이름
const actionBarName = "채팅목록";

const Chatting = () => {
  /* 값을 받아올 변수들 */
  const chat_id = '이름';
  const chat_explain = '안녕하세요';
  const horizontalLineStyle = {
    borderTop: 'px solid #ECECEC',
    width: '50%',
    
  };

  return (
    <>
    
      <ActionBar actionBarName={actionBarName} />
      {/* 채팅목록 */}        

      <button className="w-full">
        <div className="p-5 flex">
          <div>
            <button>
              <img src="img/item_gray.png" alt="프로필사진" className="rounded-full border w-14 h-14" ></img>
            </button>
          </div>

          <div className="w-3/5 h-full pl-2">
            <div style={{ fontSize: '1.1rem' }} className="font-extrabold flex justify-start">
              {chat_id}
            </div>
            <div style={{ fontSize: '0.9rem' }} className="flex justify-start text-gray-300">
              {chat_explain}
            </div>
          </div>
        


         
        </div>
      </button>

      <div style={horizontalLineStyle}></div>

      {/* 네비게이션바 */}
      <Nav />
    </>
  );
};

export default Chatting;