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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const nextImage = () => {
    if (writeDetailData.imgPath.length > 0) {
      setCurrentImageIndex((currentImageIndex + 1) % writeDetailData.imgPath.length);
    }
  };

  const prevImage = () => {
    if (writeDetailData.imgPath.length > 0) {
      setCurrentImageIndex((currentImageIndex - 1 + writeDetailData.imgPath.length) % writeDetailData.imgPath.length);
    }
  };

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: token,
      };

      const response = await fetch(
        `https://www.honeybee-goody.site/goody/contents/detail?documentId=${documentId}`,
        {
          method: 'GET',
          headers,
        }
      );

      if (!response.ok) {
        throw Error('HTTP 오류 ' + response.status);
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


  const isFirstImage = currentImageIndex === 0;
  const isLastImage = writeDetailData.imgPath && currentImageIndex === writeDetailData.imgPath.length - 1;


  return (
    <div>
      {writeDetailData && writeDetailData.imgPath && writeDetailData.imgPath.length > 0 ? (
        <div className='relative w-full'>


          <div className='absolute right-0 p-4'>
            <button onClick={handleBack} className=''>
              <img src="/img/close.png" alt="닫기" className=" w-[1.9rem] h-[1.9rem] drop-shadow-[0_2px_1px_rgba(220,166,19,100)]" />
            </button>
          </div>

          {writeDetailData.imgPath.length > 1 && (
            <>
              <div className="flex absolute top-56 left-0 pl-3">
                {!isFirstImage && <button onClick={prevImage} className='nav_button'>&lt;</button>}</div>
              <div className="flex absolute top-56 right-0 pr-3">
                {!isLastImage && <button onClick={nextImage} className='nav_button'>&gt;</button>}</div>
            </>
          )}


          <div>
            <img src={writeDetailData.imgPath[currentImageIndex]} alt="상세 이미지" className="sliding-image" />
          </div>

        </div>
      ) : null}


      {/* 아이디 부분 */}
      <div>
        <div className='flex'>
          <div className='flex mt-5 ml-5'>
            {writeDetailData?.writerId && (
              <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                {writeDetailData.writerId.charAt(0)} {/* 첫 글자만 표시 */}
              </Avatar>
            )}
            <div className='ml-2'>
              <div className=''>
                <label className='font-bold'> {writeDetailData?.writerId} </label>
              </div>
              <div>
                <label className='text-sm'>등급</label>
              </div>
            </div>
          </div>
        </div>

        {/* 카테고리 */}
        <div className='mt-5 ml-3 w-300 flex'>
          <div className='flex justify-center rounded-2xl w-24 m-2 h-7' style={{ border: '1px solid #909090' }}>
            <label>{writeDetailData?.category}</label>
          </div>
          <div className='flex justify-center rounded-2xl w-24 m-2 h-7' style={{ border: '1px solid #909090' }}>
            <label>{writeDetailData?.transType}</label>
          </div>
        </div>

        {/* 설명 */}
        <div className='m-10 mt-[1.5rem] ml-[1rem]'>
          <label className='ml-[0.5rem] text-[#565656]'>{writeDetailData?.explain}</label>
        </div>

        {/* 가격 및 구매하기 */}
        <div className='bottom-0 fixed  w-full'>
          <div className='flex justify-center bg-[#e2e2e2] h-20 p-4'>

            <FontAwesomeIcon icon={faHeartSolid} className={`heart-icon ${liked ? 'text-color' : ''} p-3`} size="xl" onClick={handleLikeClick} />

            <div className='w-[0.1rem] h-[2.5rem] bg-[#b8b8b8] mt-[0.4rem] ml-[1rem]'></div>
            <div className='p-3 pl-5 font-semibold text-lg'>
              <label>{writeDetailData.price}원</label>
            </div>
            <div className='flex ml-auto mr-[0.5rem]' >
              <Link to="/chatting">
                <button className='bg-[#FFD52B] w-[8.5rem] h-[3.2rem] right-0 mt-[0rem] border rounded-xl'>
                  <label style={{ color: 'black', fontWeight: 'bolder', fontSize: '20px' }}>구매하기</label>
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div></div>
  );
}

export default WriteDetail;
