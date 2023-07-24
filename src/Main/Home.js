import React from 'react';
import { Nav } from '../Component/Nav';

const Home = () => {
  return (
<>
        <HomeActionBar />

        {/* 메인 이미지 */}
        <div className='w-full box-content flex justify-center items-center'>
        </div>


        {/* 메인 카테고리 */}
        <div className='flex justify-center'>
          <div className="">
            <button className='w-7 mx-5 mt-6 font-bold text-gray-800'> <img src='img\Movie.png' alt='영화'></img>영화</button>
            <button className='w-7 mx-5 mt-6 font-bold text-gray-800'> <img src='img\Games.png' alt='게임'></img>게임</button>
            <button className='w-7 mx-5 mt-6 font-bold text-gray-800'> <img src='img\Mic.png' alt='아이돌'></img>아이돌</button>
            <button className='w-7 mx-5 mb-6 font-bold text-gray-800'> <img src='img\Bear.png' alt='캐릭터'></img>캐릭터</button>
            <button className='w-7 mx-5 mb-6 font-bold text-gray-800'> <img src='img\Ball.png' alt='스포츠'></img>스포츠</button>
            <button className='w-7 mx-5 mb-6 font-bold text-gray-800'> <img src='img\Book.png' alt='만화/책'></img>만화</button>
          </div>
        </div>
        <hr />
        

        {/* 최근 업로드 */}
        <h3 className='font-extrabold mt-5 ml-5'> 최근 업로드 </h3>
    
    <Nav/>
</>
  );
};
export default Home;


// 액션바
const HomeActionBar = () => {
  return (
     <div className='flex'>
     <div className='w-full flex justify-center'>
     <img className='relative' src="img\HomeActionBar.png" alt='구디' ></img>
       <img className='absolute mt-7 left-7' src="img/SmallLogo.png" alt='구디' width={'150px'} />
     </div>
     <button className='absolute right-14 h-20 p-4'><img src="img/Search.png" alt='검색' width={'32px'} height={'32px'} /></button>
     <button className='absolute right-0 h-20 p-4'><img src="img/Hamburger.png" alt='검색' width={'32px'} height={'32px'} /></button>
   </div>
  )
}


