import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const Item_UserReview = () => {
  return (
    <>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: blue[500], p: 0 }} aria-label="recipe"> U </Avatar>} // Set p: 0 to remove padding
        action={<IconButton aria-label="settings"></IconButton>}
        title={<Typography variant="h7" style={{ fontWeight: 'bold' }}> 000 님 </Typography>}
        subheader={<Typography variant="subtitle1" style={{ fontWeight: '' }}> 0000년 00월 00일 00시 00분 </Typography>}
      />
      <div className='mx-4 mb-4'>
        <p className='font-bold text-sm text-gray-600'>후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
          후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용
          후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 후기 내용 </p>
      </div>
      <hr />
    </>
  );
};

export { Item_UserReview };
