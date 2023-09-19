import React, { useState } from 'react';
import { Nav } from '../Component/Nav';
import TabView from './TabView';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Home.css';


// 액션바
const HomeActionBar = ({ children, imageSrc }) => {

  return (
    <div className='flex'>
      <img className='relative' src={imageSrc} alt='구디' />
      <img className='absolute mt-7 left-7' src="img/SmallLogo.png" alt='구디' width={'130px'} />
      <Link to="/Search">
        <button className='absolute right-12 h-20 p-4  drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'>
          <img src="img/Search.png" alt='검색' width={'25px'} height={'25px'} />
        </button></Link>
      <button className='absolute right-0 h-20 p-4  drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'>
        <Link to="/categories"><img src="img/Hamburger.png" alt='햄버거' width={'25px'} height={'25px'} /></Link>
      </button>

      <div>
        {children && (<div className=''>{children}</div>
        )}</div></div>
  );
};

export { HomeActionBar };


// 탭뷰 테마 커스텀 테마를 생성
const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFD52B', // 원하는 색상으로 변경
    },
  },
});


const Home = () => {

  const [thisIndex, setThisIndex] = useState(0);

  const navigateTo = (data) => {
    const newIndex = thisIndex + data;

    // 범위를 제한하여 이동
    if (newIndex >= 0 && newIndex <= 2) {
      setThisIndex(newIndex);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* 액션바 */}
      <HomeActionBar imageSrc="img\HomeActionBar.png">
        <div className='left-0 absolute w-full flex justify-center items-center mt-24'>
          <div className="all">
            <div id="con" style={{ transform: `translateX(-${thisIndex * 355}px)` }}>
              <a href="#"><img className="main_img" src="img/EventImg1.png" alt="event_img" width={'355px'} /></a>
              <a href="#"><img className="main_img" src="img/EventImg2.png" alt="event_img2" width={'355px'} /></a>
              <a href="#"><img className="main_img" src="img/EventImg3.png" alt="event_img3" width={'355px'} /></a>
            </div>
            <button
              id="prev"
              className={thisIndex === 0 ? 'hidden' : ''}
              onClick={() => navigateTo(-1)}
            >
              <img src="img/gray_left.png" alt="Previous" width={'10px'} />
            </button>
            <button
              id="next"
              className={thisIndex === 2 ? 'hidden' : ''}
              onClick={() => navigateTo(1)}
            >
              <img src="img/gray_right.png" alt="Next" width={'10px'} />
            </button>
            <div className="indicator">
              <span className={thisIndex === 0 ? 'dot dot_active' : 'dot'}></span>
              <span className={thisIndex === 1 ? 'dot dot_active' : 'dot'}></span>
              <span className={thisIndex === 2 ? 'dot dot_active' : 'dot'}></span>
            </div>
          </div>
        </div>
      </HomeActionBar>



      {/* 메인 카테고리 */}
      <div className='flex justify-center'>
        <div className="mb-2">
          <button className='w-10 mx-2.5 my-5 font-bold text-gray-600 text-sm cate'> <img src='img\Movie.png' className='shadow-md rounded-2xl mb-2' alt='영화'></img>영화</button>
          <button className='w-10 mx-2.5 my-5 font-bold text-gray-600 text-sm cate'> <img src='img\Games.png' className='shadow-md rounded-2xl mb-2' alt='게임'></img>게임</button>
          <button className='w-10 mx-2.5 my-5 font-bold text-gray-600 text-sm cate'> <img src='img\Mic.png' className='shadow-md rounded-2xl mb-2' alt='아이돌'></img>아이돌</button>
          <button className='w-10 mx-2.5 my-5 font-bold text-gray-600 text-sm cate'> <img src='img\Bear.png' className='shadow-md rounded-2xl mb-2' alt='캐릭터'></img>캐릭터</button>
          <button className='w-10 mx-2.5 my-5 font-bold text-gray-600 text-sm cate'> <img src='img\Ball.png' className='shadow-md rounded-2xl mb-2' alt='스포츠'></img>스포츠</button>
          <button className='w-10 mx-2.5 my-5 font-bold text-gray-600 text-sm cate'> <img src='img\Book.png' className='shadow-md rounded-2xl mb-2' alt='만화/책'></img>만화</button>
        </div>
      </div>
      <hr />

      {/* 최근 업로드 */}
      <h3 className='font-extrabold mt-7 ml-5'> 최근 업로드 </h3>

      {/* 탭 뷰 */}
      <TabView />
      <Nav />
    </ThemeProvider>
  );
};

HomeActionBar.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Home;