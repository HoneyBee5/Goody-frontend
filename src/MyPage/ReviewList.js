import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { ActionBarClose } from '../Component/ActionBarClose';
import { Item_KeywordReview } from '../Component/Item_KeywordReview';


const actionBarName = "리뷰 목록";
const ReviewList = () => {
      return (
            <>
                  <ActionBarClose actionBarName={actionBarName} />

                  <div className='p-5'>
                        <CardHeader
                              avatar={<Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe"> G </Avatar>}
                              action={<IconButton aria-label="settings"></IconButton>}
                              title={<Typography variant="h7" style={{ fontWeight: 'bold' }}> 사용자 이름 </Typography>}
                              subheader={<Typography variant="subtitle1" style={{ fontWeight: '' }}>사용자 등급 </Typography>}
                        />
                        <hr />
                  </div>

                  {/* 키워드 리뷰 */}
                  <div className="p-2">
                        <button className="flex pl-5 items-center">
                              <img src="img/Icon_List.png" alt="키워드 리뷰" className="h-6 w-6 mr-5" />
                              <span className="font-extrabold">키워드 리뷰</span>
                        </button>
                        <div className='p-4'>
                              <Item_KeywordReview />
                        </div>


                  </div> <br />

            </>
      );
}

export default ReviewList;