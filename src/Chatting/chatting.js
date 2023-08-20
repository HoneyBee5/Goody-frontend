import React from 'react';
import { Nav } from '../Component/Nav';
import { ActionBar } from '../Component/ActionBar';
import ChatListItem from './Component/ChatListItem'; 

// 액션바 이름
const actionBarName = "채팅목록";

const Chatting = () => {


  return (
    <>
      <ActionBar actionBarName={actionBarName} />
      {/* 채팅목록 */}
     
     <div>
      <ChatListItem chat_id="유진" chat_explain="첫번째" />
      <ChatListItem chat_id="유진" chat_explain="두번째" />
      </div>
      {/* 네비게이션바 */}
      <Nav />
    </>
  );
};

export default Chatting;