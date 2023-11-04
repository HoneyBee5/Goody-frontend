import React, { useState, useEffect } from 'react';
import { Nav } from '../Component/Nav';
import TabView from './TabView';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Home.css';
import { Drawer } from 'antd';


// 액션바
const HomeActionBar = ({ children, imageSrc }) => {

  const [visible, setVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('영화');


  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  useEffect(() => {
    const defaultOpenElement = document.getElementById('defaultOpen');
    if (defaultOpenElement) {
      defaultOpenElement.click();
    }
  }, []);


  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };


  
  return (
    <div className='flex'>
      <img className='relative' src={imageSrc} alt='구디' />
      <img className='absolute mt-7 left-7' src="img/SmallLogo.png" alt='구디' width={'130px'} />
      <Link to="/Search">
        <button className='absolute right-12 h-20 p-4  drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'>
          <img src="img/Search.png" alt='검색' width={'25px'} height={'25px'} />
        </button></Link>
      <button onClick={showDrawer} className='absolute right-0 h-20 p-4  drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'>
        <img src="img/Hamburger.png" alt='햄버거' width={'25px'} height={'25px'} />
      </button>

      <div>
        {children && (<div className=''>{children}</div>
        )}
      </div>
    
      <Drawer
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible} 
      >
     <div className='ml-[-1.5rem] mt-[-1rem]'>
      <div className='flex'>
        <button  onClick={onClose} className='absolute mt-[-1.3rem] mr-[-0.5rem] right-0 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'>
          <img src="img/Close.png" alt='닫기' width={'30px'} height={'30px'} />
        </button>
      </div>


      <div className="tab">
        <button className={activeTab === '영화' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('영화')} id="defaultOpen"> 영화</button>
        <button className={activeTab === '게임' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('게임')}> 게임</button>
        <button className={activeTab === '연예인' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('연예인')}>연예인</button>
        <button className={activeTab === '캐릭터' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('캐릭터')}> 캐릭터</button>
        <button className={activeTab === '스포츠' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('스포츠')}> 스포츠</button>
        <button className={activeTab === '만화' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('만화')}> 만화</button>
      </div>

      <div id="영화" className={activeTab === '영화' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">영화</li>
            <li className='my-5'><a href="#">· 국내 영화</a></li>
            <li className='my-5'><a href="#">· 해외 영화</a></li>
          </ul>
        </div></div>


      <div id="연예인" className={activeTab === '연예인' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">아이돌</li>
            <li className='my-5'><a href="#">· 남자 아이돌</a></li>
            <li className='my-5'><a href="#">· 여자 아이돌</a></li>
            <li className="my-5"><a href="#">· 남자 솔로 가수</a></li>
            <li className="mb-8"><a href="#">· 여자 솔로 가수</a></li>
          </ul>
        </div> 
        
        <div className="">
          <ul>
            <li className="font-bold">배우</li>
            <li className='my-5'><a href="#">· 남자 배우</a></li>
            <li className='my-5'><a href="#">· 여자 배우</a></li>
          </ul>
        </div>
        </div>

      <div id="게임" className={activeTab === '게임' ? 'tabcontent' : 'tabcontent hidden'}>
        <ul>
          <li className="font-bold">게임</li>
          <li className='my-5'><a href="#">· 롤플레잉 게임 RPG</a></li>
          <li className='my-5'><a href="#">· 시뮬레이션 게임 SLG</a></li>
          <li className="my-5"><a href="#">· 액션 게임 ATG</a></li>
          <li className="my-5"><a href="#">· 리듬 게임</a></li>
          <li className="my-5"><a href="#">· 연애 게임</a></li>
          <li className='mb-8'><a href="#">· 스포츠 게임</a></li>
        </ul>
      </div>

      <div id="스포츠" className={activeTab === '스포츠' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">스포츠</li>
            <li className='my-5'><a href="#">· 육상 경기 종목 </a></li>
            <li className='my-5'><a href="#">· 구기 종목</a></li>
            <li className="my-5"><a href="#">· 라켓 스포츠</a></li>
            <li className="my-5"><a href="#">· 수상 스포츠</a></li>
            <li className='my-5'><a href="#">· 기계 체조</a></li>
            <li className='mb-8'><a href="#">· 격기 종목</a></li>
          </ul>
        </div>
      </div>

      <div id="만화" className={activeTab === '만화' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">만화</li>
            <li className='my-5'><a href="#">· 웹툰 </a></li>
            <li className='my-5'><a href="#">· 애니메이션</a></li>
            <li className="my-5"><a href="#">· 만화책</a></li>
          </ul>
        </div>
      </div>

      <div id="캐릭터" className={activeTab === '캐릭터' ? 'tabcontent' : 'tabcontent hidden'}>
        <ul>
          <li className="font-bold">캐릭터</li>
          <li className='my-5'><a href="#">· 카카오</a></li>
          <li className='my-5'><a href="#">· 라인</a></li>
          <li className="my-5"><a href="#">· 산리오</a></li>
          <li className="my-5"><a href="#">· 기타</a></li>
        </ul>
      </div>
    </div>
      </Drawer>
      
    </div>
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

  // 이미지를 자동으로 넘기는 함수
  const autoNextImage = () => {
    const newIndex = (thisIndex + 1) % 3; // 3은 이미지의 총 개수
    setThisIndex(newIndex);
  };

  // 3초마다 이미지를 자동으로 넘기기
  useEffect(() => {
    const timer = setInterval(autoNextImage, 5000); // 5초(5000ms)마다 호출
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, [thisIndex]);

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
          <div id="con" style={{ transform: `translateX(-${thisIndex * (window.innerWidth <= 390 ? 305 : 335)}px)` }}>
              <a href="#"><img className="main_img" src="img/EventImg1.png" alt="event_img" /></a>
              <a href="#"><img className="main_img" src="img/EventImg2.png" alt="event_img2" /></a>
              <a href="#"><img className="main_img" src="img/EventImg3.png" alt="event_img3"/></a>
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
          <Link to="/maincategories?category=MOV&name=영화"><button className='w-9 mx-2.5 my-5 font-bold text-gray-600 text-xs cate'> <img src='img\Movie.png' className='shadow-md rounded-2xl mb-2' alt='MOV'></img>영화</button></Link>
          <Link to="/maincategories?category=GAME&name=게임"><button className='w-9 mx-2.5 my-5 font-bold text-gray-600 text-xs cate'> <img src='img\Games.png' className='shadow-md rounded-2xl mb-2' alt='GAME'></img>게임</button></Link>
          <Link to="/maincategories?category=ENT&name=연예인"><button className='w-9 mx-2.5 my-5 font-bold text-gray-600 text-xs cate'> <img src='img\Mic.png' className='shadow-md rounded-2xl mb-2' alt='ENT'></img>연예인</button></Link>
          <Link to="/maincategories?category=CHA&name=캐릭터"><button className='w-9 mx-2.5 my-5 font-bold text-gray-600 text-xs cate'> <img src='img\Bear.png' className='shadow-md rounded-2xl mb-2' alt='CHA'></img>캐릭터</button></Link>
          <Link to="/maincategories?category=SPO&name=스포츠"> <button className='w-9 mx-2.5 my-5 font-bold text-gray-600 text-xs cate'> <img src='img\Ball.png' className='shadow-md rounded-2xl mb-2' alt='SPO'></img>스포츠</button></Link>
          <Link to="/maincategories?category=ANI&name=만화"><button className='w-9 mx-2.5 my-5 font-bold text-gray-600 text-xs cate'> <img src='img\Book.png' className='shadow-md rounded-2xl mb-2' alt='ANI'></img>만화</button></Link>
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