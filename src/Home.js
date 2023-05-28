import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Collection from './collection';

const Home = () => {
  return (
<>
        {/* 액션바 */}
        <div className='flex'>
          <div className='w-full flex justify-center py-6'>
            <img className='' src="img/GOODY.png" alt='구디' width={'150px'} />
          </div>
          <button className='absolute right-0 h-20 p-4'><img src="img/Search.png" alt='검색' width={'35px'} height={'35px'} /></button>
        </div>


        {/* 메인 이미지 */}
        <div className='w-full h-60 box-content flex justify-center items-center'>
          <img className='object-cover w-full h-60' src="img\event1.png" alt='구디' ></img>
        </div>


        {/* 메인 카테고리 */}
        <hr />
        <div className='flex justify-center'>
          <div className="grid gap-4 grid-cols-3 grid-rows-2 ">
            <button className='w-12 mx-5 mt-6 font-bold text-gray-800'> <img src='img\Movie.png' alt='영화'></img>영화</button>
            <button className='w-12 mx-5 mt-6 font-bold text-gray-800'> <img src='img\Games.png' alt='게임'></img>게임</button>
            <button className='w-12 mx-5 mt-6 font-bold text-gray-800'> <img src='img\Mic.png' alt='아이돌'></img>아이돌</button>
            <button className='w-12 mx-5 mb-6 font-bold text-gray-800'> <img src='img\Bear.png' alt='캐릭터'></img>캐릭터</button>
            <button className='w-12 mx-5 mb-6 font-bold text-gray-800'> <img src='img\Ball.png' alt='스포츠'></img>스포츠</button>
            <button className='w-12 mx-5 mb-6 font-bold text-gray-800'> <img src='img\Book.png' alt='만화/책'></img>만화</button>
          </div>
        </div>
        <hr />


        {/* 최근 업로드 */}
        <h3 className='font-extrabold mt-5 ml-5'> 최근 업로드 </h3>

        <div className='flex m-5'>
          <div>
            <img width={'50px'} src='img\item_yellow.png' alt='아이템1'></img>
          </div>
          <div className='ml-3'>
            <p className='font-bold'>상품이름</p>
            <p className='font-bold'>가격</p>
          </div>
        </div>

        <div className='flex m-5'>
          <div>
            <img width={'50px'} src='img\item_gray.png' alt='아이템2'></img>
          </div>
          <div className='ml-3'>
            <p className='font-bold'>상품이름</p>
            <p className='font-bold'>가격</p>
          </div>
        </div>

        <div className='flex m-5'>
          <div>
            <img width={'50px'} src='img\item_yellow.png' alt='아이템3'></img>
          </div>
          <div className='ml-3'>
            <p className='font-bold'>상품이름</p>
            <p className='font-bold'>가격</p>
          </div>
        </div>


        {/* 네비게이션 */}
        <div className='bg-white fixed w-full h-16 bottom-0'>
          <div>
            <Link to="/" className='w-1/5 h-16 font-extrabold'> 홈 </Link>
            <Link to="/collection" className='w-1/5 h-16 font-extrabold'> 컬렉션 </Link>
            <button className='w-1/5 h-16 font-extrabold text-2xl'> + </button>
            <button className='w-1/5 h-16 font-extrabold'> 채팅 </button>
            <button className='w-1/5 h-16 font-extrabold'> MY </button>
          </div>
        </div>
</>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </Router>
  );
};

export default App;