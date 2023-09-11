import React, { useState, useEffect } from 'react';
import { Nav } from '../Component/Nav';
import { ActionBar } from '../Component/ActionBar';
import ChatListItem from './Component/ChatListItem';

const actionBarName = "채팅목록";
const apiurl = "http://27.96.134.23:4001/goody/post/preview-info?postType=%ED%8C%90%EB%A7%A4%ED%95%B4%EC%9A%94&page=0";

const Chatting = () => {
  const [chatData, setChatData] = useState([]);//상태

  /*fetch api 연결*/ 
  useEffect(() => {
    fetch(apiurl)
      .then(response => {
        if (!response.ok) {
          throw new Error('네트워크 오류');
        }
        return response.json();
      })
      .then(data => {
        // API 응답 데이터의 postPreviewInfo 배열을 chatData 상태에 저장
        setChatData(data.postPreviewInfo);
      })
      .catch(error => {
        console.error('오류 발생:', error);
      }); //오류 처리
  }, []);

  return (
    <>
      <ActionBar actionBarName={actionBarName} />
      <div>
        {/* chatData 배열의 각 요소를 순회하면서 ChatListItem을 렌더링 */}
        {chatData.map(chatItem => ( //map함수를 써서 채팅컴포넌트를 동적으로 렌더링 (여러개의 채팅방 생성)
          <ChatListItem
            key={chatItem.documentId} // 고유키
            chat_img=
            {`http://27.96.134.23:4001/goody/file/files/?file=${chatItem.filePath.previewImg}`}
            chat_id={chatItem.title}
            chat_explain={chatItem.transType} 
          />
        ))}
      </div>
      <Nav />
    </>
  );
};

export default Chatting;