import React, { useState, useEffect, useRef } from 'react';
import Plus_btn from './Component/plus_btn';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import "./transition.css";
import Chat_btn1 from './Component/chat_profile_btn';
import Chat_btn2 from './Component/chat_profile_btn2';
import { useParams } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import { useLocation } from 'react-router-dom';


const Chatdetails = () => {
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]); // 채팅 메시지 저장
  const [messageInput, setMessageInput] = useState(''); // 메시지 입력 상태
  const [stompClient, setStompClient] = useState(null); // STOMP 클라이언트
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredY, setIsHoveredY] = useState(false);
  const [ItemInfo, setItemInfo] = useState(false);
  const messagesEndRef = useRef(null);
  const [chattingEnteruser, setChattingEnteruser] = useState([]);

  const lastHyphenIndex = roomId.lastIndexOf('-');
  const contentsId = lastHyphenIndex !== -1 ? roomId.substring(lastHyphenIndex + 1) : null;
  

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
    
  }, [messages]); // 메시지 배열이 업데이트될 때마다 스크롤을 아래로 이동


  
const location = useLocation();
    

  useEffect(() => {
    
    if (location.state && Array.isArray(location.state.chattingEnteruser)) {
      setChattingEnteruser(location.state.chattingEnteruser);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchOptions = {
          headers: {
            Authorization: `${localStorage.getItem('token')}`, // Bearer 토큰 형식을 따릅니다.
          }
        };
      
        // 이전 채팅 출력 api
        const response1 = await fetch(`https://www.honeybee-goody.site/goody/messages?roomId=${roomId}`, fetchOptions);
        // 거래물품 연결 api
        const response2 = await fetch(`https://www.honeybee-goody.site/goody/itemInfo?contentId=${contentsId}`, fetchOptions);
      
        if (response1.ok) {
          const data1 = await response1.json();
          setMessages(data1);
          
        } else {
          console.error('서버에서 오류 응답을 받았습니다.', response1.status);
        }
      
        if (response2.ok) {
          const data2 = await response2.json();
          setItemInfo(data2);
          

        } else {
          console.error('서버에서 오류 응답을 받았습니다.', response2.status);
        }
      } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      }      
    };

    fetchData();


    const socket = new SockJS(`https://www.honeybee-goody.site/goody/ws-stomp`);
    const client = Stomp.over(socket);
    const headers = {
      Authorization: `${localStorage.getItem('token')}`,
    };

    // 웹소켓 연결
    client.connect(headers, async () => {
      setStompClient(client);

      // 채팅방에 입장 요청
      client.subscribe(`/sub/chat/room/${roomId}`, (message) => {
        const newMessage = JSON.parse(message.body);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
        console.log(message);
      });
    });

    return () => {
      if (stompClient) {
        stompClient.disconnect();
      }
    };
  }, [roomId, contentsId]);

  const sendMessage = () => {
    // 메시지를 서버로 보내는 함수
    if (stompClient) {
      const messageWithNewlines = messageInput.replace(/\n/g, '<br/>');
      const message = {
        type: 'TALK', // 메시지 타입
        roomId,
        sender: localStorage.getItem('userId'), // 사용자 이름 또는 ID
        message: messageWithNewlines,
        time: new Date(), // 시간 설정
      };
      stompClient.send(`/pub/chat/message`, {}, JSON.stringify(message));
      setMessageInput('');
    }
  };


  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동하는 함수
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsHovered(!isHovered);
  };

  const handleMouseEnterY = () => {
    setIsHoveredY(true);
  };

  const handleMouseLeaveY = () => {
    setIsHoveredY(false);
  };

  const handleClickY = () => {
    setIsHoveredY(!isHoveredY);
  };

  return (
    <>
      <div className="w-full h-16 relative">
        <AppBar component="nav" className='fixed top-0 w-full'>
          <img src='../img/ActionBar.png' className='absolute' alt="ActionBar"></img>
          <p id="actionBar_name" className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)] font-bold text-white p-6 ml-2 text-xl absolute '>채팅</p>
          <div>
            <div className="pb-5 top-20 absolute flex justify-center items-center w-full h-full "
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}
            >
              <CSSTransition
                in={isHovered}
                timeout={300}
                classNames="transition"
              >
                {isHovered ? <Chat_btn2 ItemInfo={ItemInfo} chattingEnteruser={chattingEnteruser} /> : <Chat_btn1 ItemInfo={ItemInfo} />}
              </CSSTransition>
            </div>
            <button className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)] absolute top-5 right-4 h-full' onClick={handleBack}>
              <img src="../img/close.png" alt='닫기' width={'30px'} height={'30px'} />
            </button>
          </div>
        </AppBar>
      </div>

      {/* 채팅방 출력 */}
      <div className='pt-16 w-full' style={{ overflowY: 'hidden' }}>
        <div>
          {messages.map((message, index) => (
            <div key={index} className={`m-2 flex flex-col ${message.sender === localStorage.getItem('userId') ? 'items-end' : 'items-start'}`} style={{ overflowY: 'auto' }}>
              <p className='text-xs p-2'>{message.sender}</p>
              <div
                style={{ fontSize: '1rem' }}
                className={`flex border p-2 m-1 items-center rounded-lg shadow-md ${message.sender === localStorage.getItem('userId') ? 'bg-yellow-400' : 'bg-gray-400'} ${message.message.length > 20 ? 'w-72' : ''}`}
                dangerouslySetInnerHTML={{ __html: message.message }}
              />
            </div>
          ))}
          <div style={{ marginBottom: '3rem' }} />
        </div>
        <div ref={messagesEndRef} />
      </div>{/*채팅방 출력끝 */}

      {/* 채팅 입력창 */}
      <div className="items-center flex fixed justify-between bottom-3 w-full rounded-full bg-gray-200">
                  <div onMouseEnter={handleMouseEnterY} onMouseLeave={handleMouseLeaveY} onClick={handleClickY}>
                    <CSSTransition
                      in={isHoveredY}
                      timeout={300}
                      classNames="mount">
                      {isHoveredY ? <button className="font-bold text-xl text-black flex justify-start  " ><img src='../img/Plus.png' className='w-5 ml-3' /></button> :
                        <button className="font-bold text-xl text-black flex justify-start  " ><img src='../img/Plus.png' className='w-5 ml-3' /></button>}
                    </CSSTransition>
                  </div>
                  <textarea
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    style={{ borderRadius: '4px', width: '20rem', height: '30px', resize: 'none' }}
                  />
                  <button onClick={sendMessage} style={{ padding: '10px' }}> 전송</button>
      </div>
      <div className='items-center flex fixed bottom-[60px] left-1/2 transform -translate-x-1/2'>
      {isHoveredY && <Plus_btn />}
      </div>
    </>
  );
};

export default Chatdetails;
