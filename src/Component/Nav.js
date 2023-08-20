import React from 'react';
import { Link } from 'react-router-dom';
import './Component.css';
import { useLocation } from 'react-router-dom';

// 네비게이션
const Nav = () => {
  const location = useLocation();

  return (
    <div className='bg-[#f8f8f8] fixed w-full bottom-0 shadow-inner'>
      <div>
        <button className='w-8 mx-6 my-4 nav_sm'>
          <Link to="/home">
            <img
              src={location.pathname === '/home' ? 'img/home_yellow.png' : 'img/home_gray.png'}
              alt='Home'
            />
          </Link>
        </button>
        <button className='w-8 mx-6 my-4 nav_sm'>
          <Link to="/collection">
            <img
              src={location.pathname === '/collection' ? 'img/collection_yellow.png' : 'img/collection_gray.png'}
              alt='Collection'
            />
          </Link>
        </button>
        <button className='w-8 mx-7 my-4 nav_sm'>
          <Link to="/addWrite">
            <img
              src={location.pathname === '/addWrite' ? 'img/write_yellow.png' : 'img/write_gray.png'}
              alt='Add Write'
            />
          </Link>
        </button>
        <button className='w-7 mx-6 my-4 nav_chat'>
          <Link to="/chatting">
            <img
              src={location.pathname === '/chatting' ? 'img/chat_yellow.png' : 'img/chat_gray.png'}
              alt='Chatting'
            />
          </Link>
        </button>
        <button className='w-8 mx-6 my-4 nav_sm'>
          <Link to="/mypage">
            <img
              src={location.pathname === '/mypage' ? 'img/my_yellow.png' : 'img/my_gray.png'}
              alt='My Page'
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export { Nav };
