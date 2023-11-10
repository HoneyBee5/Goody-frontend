import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Item_width from '../Component/Item_width';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TabView = () => {
  const [tabValue, setTabValue] = useState(0);
  const [postPreviewInfo, setPostPreviewInfo] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 관리
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(0); // 'page' 변수를 정의

  // 토큰 가져오기
  const token = localStorage.getItem('token');

  // fetchData 함수를 정의
  const fetchData = async (postType, nextPage) => {
    try {
      const headers = {
        Authorization: `${token}`,
      };

      const response = await fetch(
        `https://www.honeybee-goody.site/goody/contents/preview-info?transType=${postType}&page=${nextPage}`,
        {
          method: 'GET',
          headers,
        }
      );

      if (!response.ok) {
        throw new Error('HTTP 오류 ' + response.status);
      }

      const data = await response.json();

      if (data.postPreviewInfo && data.postPreviewInfo.length > 0) {
        if (nextPage === 0) {
          // 새로운 탭을 선택할 때는 새로운 데이터로 업데이트
          setPostPreviewInfo(data.postPreviewInfo);
        } else {
          // 페이지가 0이 아닌 경우에는 이전 데이터에 추가
          setPostPreviewInfo((prevData) => [...prevData, ...data.postPreviewInfo]);
        }

        setLoading(false);
        setIsFetching(false);
        setPage(nextPage); // 페이지 업데이트
      } else {
        console.error('API에서 데이터를 가져오는 중 오류 발생: 데이터가 비어 있습니다.');
        setIsFetching(false);
      }
    } catch (error) {
      console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
      setIsFetching(false);
    }
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.scrollY;
  
    // 스크롤이 화면 맨 아래로 도달하면 추가 데이터를 가져옴
    if (scrollPosition + windowHeight === documentHeight && !isFetching) {
      setIsFetching(true);
  
      // 페이지 번호를 가져와서 다음 페이지의 데이터를 불러옴
      const nextPage = page + 1;
      fetchData(getPostType(tabValue), nextPage);
    }
  };
  
  // Define getPostType function
  const getPostType = (tabValue) => {
    switch (tabValue) {
      case 0:
        return '판매해요';
      case 1:
        return '교환해요';
      case 2:
        return '나눔해요';
      case 3:
        return '같이해요';
      default:
        return '';
    }
  };

  // Define handleChange function
  const handleChange = (event, newValue) => {
    setTabValue(newValue);

    // 탭 변경 시 해당하는 데이터를 가져오도록 설정
    fetchData(getPostType(newValue), 0);
  };

  useEffect(() => {
    // 인증된 사용자인지 확인하고, 토큰이 없거나 인증에 실패하면 리디렉션할 수 있음
    if (!token) {
      window.location.href = '/login'; // 로그인 페이지로 리디렉션
      return;
    }

    // 처음 마운트될 때 '판매해요' 탭의 데이터를 가져오도록 설정
    fetchData(getPostType(tabValue), page);

    // 스크롤 이벤트 리스너 등록
    window.addEventListener('scroll', handleScroll);

    // cleanup 함수 등록
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener('scroll', handleScroll);
    };
  }, [token, tabValue, page]);
  

  return (
    <div>
      <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '1rem' }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="scrollable prevent tabs example"
        >
          <Tab label={<Typography variant="body1" sx={{ minWidth: 80, fontWeight: 'bold' }}>판매해요</Typography>} />
          <Tab label={<Typography variant="body1" sx={{ minWidth: 80, fontWeight: 'bold' }}>교환해요</Typography>} />
          <Tab label={<Typography variant="body1" sx={{ minWidth: 80, fontWeight: 'bold' }}>나눔해요</Typography>} />
          <Tab label={<Typography variant="body1" sx={{ minWidth: 80, fontWeight: 'bold' }}>같이해요</Typography>} />
        </Tabs>

        {/* 데이터 로딩 중 또는 데이터가 비어 있는 경우 처리 */}
        {loading && <div>Loading...</div>}

        {/* 각 탭에 따라 데이터 렌더링 */}
        {!loading && postPreviewInfo && postPreviewInfo.map((item, index) => (
          <div key={index}>
            <Link to={`/WriteDetail/${item.documentId}`}>
              <Item_width data={item} />
              {index === postPreviewInfo.length - 1 && <div style={{ marginBottom: '6rem' }}></div>}
            </Link>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default TabView;
