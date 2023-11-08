import React, { useState, useEffect } from 'react';
import { Nav } from '../Component/Nav';
import { ActionBar } from '../Component/ActionBar';
import ChatListItem from './Component/ChatListItem';
import { Link } from 'react-router-dom';

const chatting = () => {
  const [chatData, setChatData] = useState([]);
  const actionBarName = "채팅목록";
  const apiurl = "https://www.honeybee-goody.site/goody/chatroom/list";
  // 토큰 가져오기
  const token = localStorage.getItem('token');

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `${token}`, // Assuming 'token' is a variable that holds your authorization token
      };

      const response = await fetch(apiurl, {
        method: 'GET',
        headers,
      });

      if (!response.ok) {
        throw Error('네트워크 오류');
      }

      const data = await response.json();

      if (data && data.length > 0) {
        setChatData(data);

      } else {
        console.error('API에서 데이터를 가져오는 중 오류 발생: 데이터가 비어 있습니다.');
      }

    } catch (error) {
      console.error('오류 발생:', error);
      throw error; // You can re-throw the error if you want to handle it further in your component.
    }
  };


  /*fetch api 연결*/
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ActionBar actionBarName={actionBarName} />

      <div className='mt-20'>
        {chatData.map(chatItem => (
          <Link key={chatItem.roomId} to={`/chatdetails/${chatItem.roomId}`}>
            <ChatListItem
              chat_id={chatItem.roomId}
              chat_explain={chatItem.enterUsers.join(', ')}
            />
          </Link>
        ))}
      </div>

      <Nav />
    </>
  );
};

export default chatting;
