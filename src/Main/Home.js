import React, { useState } from 'react';
import { Nav } from '../Component/Nav';
import { Item_width } from '../Component/Item_width';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




// 액션바
const HomeActionBar = ({ children, imageSrc }) => {

  return (
      <div className='flex '>
        <img className='relative' src={imageSrc} alt='구디' />
        <img className='absolute mt-7 left-7' src="img/SmallLogo.png" alt='구디' width={'150px'} />
       

       <Link to="/Inspect">
        <button className='absolute right-14 h-20 p-4'>
        <img src="img/Search.png" alt='검색' width={'30px'} height={'30px'} />

        </button>
        </Link>
        <button className='absolute right-0 h-20 p-4'>
          <Link to="/categories"><img src="img/Hamburger.png" alt='햄버거' width={'30px'} height={'30px'} /></Link>
        </button>
      
      <div>
        {children && (<div className=''>{children}</div>
        )}</div></div>
  );
};


export { HomeActionBar };

// 탭 뷰
const TabView = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '1rem' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="scrollable prevent tabs example"
      >
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>판매해요</Typography>} />
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>같이해요</Typography>} />
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>교환해요</Typography>} />
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>나눔해요</Typography>} />
      </Tabs>
    </Box>
  );
};

// 커스텀 테마를 생성
const theme = createTheme({
  palette: {
    secondary: {
      main: '#FFD52B', // 원하는 색상으로 변경
    },
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* 액션바 */}
      <HomeActionBar imageSrc="img\HomeActionBar.png">
        <img className='absolute left-7 mt-20' src="img/EventImg1.png" alt='구디' width={'355px'} />
      </HomeActionBar>


      {/* 메인 카테고리 */}
      <div className='flex justify-center'>
        <div className="mb-3">
          <button className='w-12 mx-2 my-6 font-bold text-gray-600'> <img src='img\Movie.png' className='shadow-md rounded-2xl mb-2' alt='영화'></img>영화</button>
          <button className='w-12 mx-2 my-6 font-bold text-gray-600'> <img src='img\Games.png' className='shadow-md rounded-2xl mb-2' alt='게임'></img>게임</button>
          <button className='w-12 mx-2 my-6 font-bold text-gray-600'> <img src='img\Mic.png' className='shadow-md rounded-2xl mb-2' alt='아이돌'></img>아이돌</button>
          <button className='w-12 mx-2 my-6 font-bold text-gray-600'> <img src='img\Bear.png' className='shadow-md rounded-2xl mb-2' alt='캐릭터'></img>캐릭터</button>
          <button className='w-12 mx-2 my-6 font-bold text-gray-600'> <img src='img\Ball.png' className='shadow-md rounded-2xl mb-2' alt='스포츠'></img>스포츠</button>
          <button className='w-12 mx-2 my-6 font-bold text-gray-600'> <img src='img\Book.png' className='shadow-md rounded-2xl mb-2' alt='만화/책'></img>만화</button>
        </div>
      </div>
      <hr />

      {/* 최근 업로드 */}
      <h3 className='font-extrabold mt-10 ml-5'> 최근 업로드 </h3>

      {/* 탭 뷰 */}
      <TabView />
      <Item_width />
      <Nav />
    </ThemeProvider>
  );
};

HomeActionBar.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Home;