import React, { useState, useEffect } from 'react';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { ActionBarClose } from '../Component/ActionBarClose';
import { Item_KeywordReview } from '../Component/Item_KeywordReview';

const actionBarName = "리뷰 목록";

const ReviewList = () => {
  const [userInfo, setUserInfo] = useState({ nickname: '', grade: '' });
  const [userInfo2, setUserInfo2] = useState({ nickname: '', grade: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('토큰이 없습니다.');
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `${token}`,
        };
        const response = await fetch(
          'https://www.honeybee-goody.site/goody/myPage/myReviewList',
          {
            method: 'GET',
            headers,
          }
        );

        if (!response.ok) {
          throw new Error('HTTP 오류 ' + response.status);
        }

        const data = await response.json();
        console.log(data);

        if (data && data.nickname && data.grade) {
            setUserInfo({ nickname: data.nickname });
            setUserInfo2({ grade: data.grade });
            setLoading(false);
          } else {
            console.error('API 응답에서 유효한 데이터가 없습니다.');
            setLoading(false);
          }
      } catch (error) {
        console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <ActionBarClose actionBarName={actionBarName} />

      {loading ? (
        <div className='flex justify-center items-center h-[50rem]'>
          <img src='img/테이터가 비었습니다.png' className='w-64' alt='데이터가 비었습니다.' />
        </div>
      ) : (
        <div className='p-5'>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe"> {userInfo.nickname.charAt(0)} </Avatar>}
            action={<IconButton aria-label="settings"></IconButton>}
            title={<Typography variant="h7" style={{ fontWeight: 'bold' }}>{userInfo.nickname}</Typography>}
            subheader={<Typography variant="subtitle1" style={{ fontWeight: '' }}>{userInfo2.grade}</Typography>}
          />
          <hr />
          
          {/* 키워드 리뷰 */}
          <div className="p-2">
            <p className="mt-6 flex pl-5 items-center">
              <img src="img/Icon_List.png" alt="키워드 리뷰" className="h-6 w-6 mr-5" />
              <span className="font-extrabold">키워드 리뷰</span>
            </p>
            <div className='p-4'>
              <Item_KeywordReview />
            </div>
          </div> <br />
        </div>
      )}
    </>
  );
}

export default ReviewList;
