import React, { useState } from 'react';
import { Item_width } from '../Component/Item_width';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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

      {/* 각 탭에 해당하는 내용 */}
      {value === 0 && <Tab1 />}
      {value === 1 && <Tab2 />}
      {value === 2 && <Tab3 />}
      {value === 3 && <Tab4 />}
    </Box>
  );
};


const Tab1 = () => {
    return (
      <div style={{ marginBottom: '10rem' }}>
        <Item_width />
      </div>
    );
  };
  
  
  const Tab2 = () => {
    return (
      <div>
  
      </div>
    );
  };
  
  const Tab3 = () => {
    return (
      <div>
  
      </div>
    );
  };
  
  const Tab4 = () => {
    return (
      <div>
  
      </div>
    );
  };
  
  export { TabView };
