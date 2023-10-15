import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './WriteDetail.css';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

function WriteDetail() {
  const [writeDetailData, setWriteDetailData] = useState({});
  const { documentId } = useParams();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: token,
      };

      const response = await fetch(
        `http://27.96.134.23:4001/goody/contents/detail?documentId=${documentId}`,
        {
          method: 'GET',
          headers,
        }
      );

      if (!response.ok) {
        throw new Error('HTTP 오류 ' + response.status);
      }

      const data = await response.json();
      setWriteDetailData(data);
    } catch (error) {
      console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Purchase = () => {
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
      setLiked(!liked);
    };

    return (
      <div style={{ position: 'fixed', bottom: -15, width: '100%', backgroundColor: 'white', }}>
        <div className='flex justify-center bg-[#f8f8f8] h-20 bottom-0 p-2 shadow-inner'>

          <FontAwesomeIcon icon={faHeartSolid} className={`heart-icon ${liked ? 'text-color' : ''} ml-[1rem] mt-[0.9rem]`} size="xl" onClick={handleLikeClick} />

          <div className='w-[0.25rem] h-[2.5rem] bg-[#E6E6E6] mt-[0.4rem] ml-[1rem]'></div>
          <div className='ml-[1rem] mt-[0.9rem]'>
            <label>{writeDetailData.price}원</label>
          </div>
          <div className='flex ml-auto mr-[0.5rem]' >
            <Link to="/chatting">
              <button className='bg-[#575757] w-[8.5rem] h-[3.2rem] right-0 mt-[0rem] border rounded-xl'>
                <label style={{ color: 'white', fontWeight: 'bolder', fontSize: '20px' }}>구매하기</label>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {writeDetailData && writeDetailData.imgPath && writeDetailData.imgPath.length > 0 ? (
        <div className='relative'>
          <div className='absolute right-0 p-5 '>
            <button onClick={handleBack}>
              <img src="/img/close.png" alt="닫기" className="w-[1.9rem] h-[1.9rem] drop-shadow-[0_2px_1px_rgba(220,166,19,100)]" />
            </button>
          </div>
          <div>
            <img src={writeDetailData.imgPath[0]} alt="상세 이미지" style={{ width: '500px', height: '500px', objectFit: 'cover' }} />
          </div>
        </div>
      ) : null}

      <div>
        <div className='flex py-5 px-5'>
          {<Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe"> M </Avatar>}
          <div style={{ marginTop: 5, marginLeft: 10 }}>
            <label style={{ fontWeight: 'bold' }}> mjc123</label>
          </div>
          <div style={{ marginTop: 30, marginLeft: -47 }}>
            <label style={{ fontWeight: 'normal' }}></label>
          </div>
        </div>
      </div>
      <div className='flex ml-[0.5rem]'>
        <div className='mt-3 ml-5 flex justify-between'>
          <label className='font-bold text-xl'>{writeDetailData?.title}</label>
          <div className='mr-0 flex center'>
            <img src="/img/Like.png" className="w-7 h-8" alt="Like" />
            <label>11</label>
          </div>
        </div>
      </div>
      <div className='mt-1 ml-[0.5rem] h-10 w-300 display-flex'>
        <div style={{ width: '5.5rem', height: '30px', marginLeft: 10, borderRadius: '15px', border: '1px solid #b4b4b4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <label>{writeDetailData?.category}</label>
        </div>
        <div style={{
          width: '5.5rem', height: '30px', marginLeft: 110, marginTop: -30, borderRadius: '15px', border: '1px solid #b4b4b4', display: 'flex',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <label>{writeDetailData?.transType}</label>
        </div>
      </div>
      <div className='m-10 mt-[1.5rem] ml-[1rem]'>
        <label className='ml-[0.5rem] text-[#6d6d6d]'>{writeDetailData?.explain}</label>
      </div>

      <Purchase />
    </div>
  );
}

export default WriteDetail;
