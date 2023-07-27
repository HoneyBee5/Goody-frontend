import React from 'react';
import { Link } from 'react-router-dom';

// 네비게이션
const Nav = () => {
    return (
      <div className='bg-[#f8f8f8] fixed w-full bottom-0 p-2 shadow-inner'>
      <div>
        <button className='w-8 mx-6 mt-2'><Link to="/"> <img src='img/home_gray.png'></img> </Link></button>  
        <button className='w-8 mx-6 mt-2'><Link to="/collection"> <img src='img/collection_gray.png'></img> </Link></button>  
        <button className='w-8 mx-6 mt-2'><Link to="/addWrite"><img src='img/write_gray.png'></img> </Link></button>  
        <button className='w-7 mx-6 mt-2'><Link to="/chatting"><img src='img/chat_gray.png'></img> </Link></button>  
        <button className='w-8 mx-6 mt-2'><Link to="/mypage"><img src='img/my_gray.png'></img> </Link></button>  
      </div>
    </div>
    )
  }

  export { Nav };