import React, { useState, useEffect } from 'react';
import Item_width from '../Component/Item_width';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// 탭 뷰
const TabView = () => {
  const [tabValue, setTabValue] = useState(0);
  const [postPreviewInfo, setPostPreviewInfo] = useState([]);
  const [loading, setLoading] = useState(true); // 데이터 로딩 상태를 관리

  // 데이터를 가져오는 비동기 함수
  const fetchData = async (postType) => {
    try {
      const response = await fetch(`http://27.96.134.23:4001/goody/post/preview-info?postType=${postType}&page=0`);
      
      if (!response.ok) {
        throw new Error('네트워크 오류');
      }
      
      const data = await response.json();
      if (data.postPreviewInfo && data.postPreviewInfo.length > 0) {
        setPostPreviewInfo(data.postPreviewInfo);
        setLoading(false); // 데이터 로딩이 완료되면 false로 설정
        console.log(data);
      } else {
        console.error('API에서 데이터를 가져오는 중 오류 발생: 데이터가 비어 있습니다.');
        console.log(data);
      }
    } catch (error) {
      console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
      setLoading(false); // 에러가 발생하더라도 로딩 상태를 false로 설정
    }
  };

  useEffect(() => {
    // 처음 마운트될 때 '판매해요' 탭의 데이터를 가져오도록 설정
    fetchData('판매해요');
  }, []);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);

    // 탭 변경 시 해당하는 데이터를 가져오도록 설정
    switch (newValue) {
      case 0:
        fetchData('판매해요');
        break;
      case 1:
        fetchData('같이해요');
        break;
      case 2:
        fetchData('교환해요');
        break;
      case 3:
        fetchData('나눔해요');
        break;
      default:
        break;
    }
  };

  return (
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
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>판매해요</Typography>} />
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>같이해요</Typography>} />
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>교환해요</Typography>} />
        <Tab label={<Typography variant="body1" sx={{ minWidth: 90, fontWeight: 'bold' }}>나눔해요</Typography>} />
      </Tabs>

      {/* 데이터 로딩 중 또는 데이터가 비어 있는 경우 처리 */}
      {loading && <div>Loading...</div>}

      {/* 각 탭에 따라 데이터 렌더링 */}
      {!loading && postPreviewInfo && postPreviewInfo.map((item, index) => (
        <div key={index}>
          <Item_width data={item} />
          {index === postPreviewInfo.length - 1 && <div style={{ marginBottom: '6rem' }}></div>}
        </div>
      ))}
    </Box>
  );
};

export default TabView;

