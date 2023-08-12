import React from 'react';
import { Nav } from '../Component/Nav';
import { ActionBar } from '../Component/ActionBar';
import { Link } from 'react-router-dom';


// 액션바 이름
const actionBarName = "채팅목록";

const Chatting = () => {
  /* 값을 받아올 변수들 */
  const chat_id = '이름';
  const chat_explain = '안녕하세요';
  const date_month = '0';
  const date_day = '0';

  return (
    <>
      <ActionBar actionBarName={actionBarName} />
      {/* 채팅목록 */}
      <Link to="/Chatdetails">
      <button className="w-full">
        <div className="p-5 flex border">
          <div>
            <img src="img/item_gray.png" alt="프로필사진" className="rounded-full" style={{ width: 60 }}></img>
          </div>
          <div className="w-3/5 h-full pl-2">
            <div style={{ fontSize: '1.1rem' }} className="font-extrabold flex justify-start">
              {chat_id}
            </div>
            <div style={{ fontSize: '0.9rem' }} className="flex justify-start">
              {chat_explain}
            </div>
          </div>

          <div style={{ fontSize: '0.7rem' }} className="ml-auto">
            {date_month}월{date_day}일
          </div>
        </div>
      </button>
      </Link>

      {/* 추가 채팅버튼(예시) */}
      <button className="w-full">
        <div className="p-5 flex border">
          <div>
            <img src="img/item_gray.png" alt="프로필사진" className="rounded-full" style={{ width: 60 }}></img>
          </div>

          <div className="w-3/5 h-full pl-2">
            <div style={{ fontSize: '1.1rem' }} className="font-extrabold flex justify-start">
              {chat_id}
            </div>
            <div style={{ fontSize: '0.9rem' }} className="flex justify-start">
              {chat_explain}
            </div>
          </div>

          <div style={{ fontSize: '0.7rem' }} className="ml-auto">
            {date_month}월{date_day}일
          </div>
        </div>
      </button>

      {/* 네비게이션바 */}
      <Nav />
    </>
  );
};

export default Chatting;