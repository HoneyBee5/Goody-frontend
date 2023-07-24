import React from 'react';
import { Link } from 'react-router-dom';

// 네비게이션
const Nav = () => {
    return (
      <div className='bg-white fixed w-full h-16 bottom-0'>
      <div>
        <button className='w-1/5 h-16 font-extrabold'><Link to="/"> 홈 </Link></button>  
        <button className='w-1/5 h-16 font-extrabold'> <Link to="/collection"> 컬렉션 </Link></button>  
        <button  className='w-1/5 h-16 font-extrabold text-2xl'> <Link to="/addWrite"> + </Link></button>  
        <button className='w-1/5 h-16 font-extrabold'> <Link to="/chatting"> 채팅 </Link></button>  
        <button className='w-1/5 h-16 font-extrabold'> <Link to="/mypage"> MY </Link></button>  
      </div>
    </div>
    )
  }

  export { Nav };