import React from 'react';
import { Link } from 'react-router-dom';

// 네비게이션
const Nav = () => {
    return (
      <div className='bg-[#FBFBFB] fixed w-full h-16 bottom-7'>
      <div>
        <button className='w-8 m-6'><Link to="/"> <img src='img/home_gray.png'></img> </Link></button>  
        <button className='w-8 m-7'><Link to="/collection"> <img src='img/collection_gray.png' ></img>   </Link></button>  
        <button className='w-8 m-7'><Link to="/addWrite"><img src='img/write_gray.png'></img>  </Link></button>  
        <button className='w-7 m-6'><Link to="/chatting"><img src='img/chat_gray.png'></img>  </Link></button>  
        <button className='w-8 m-6'><Link to="/mypage"><img src='img/my_gray.png'></img> </Link></button>  
      </div>
    </div>
    )
  }

  export { Nav };