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
        `http://27.96.134.23:4001/goody/contents/detail?documentId=${documentId}`,
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

  const isFirstImage = currentImageIndex === 0;
  const isLastImage = writeDetailData.imgPath && currentImageIndex === writeDetailData.imgPath.length - 1;


  return (
    <div>
      {writeDetailData && writeDetailData.imgPath && writeDetailData.imgPath.length > 0 ? (
        <div className='relative'>
          <div className='absolute right-0 p-5 '>
            <button onClick={handleBack}>
              <img src="/img/close.png" alt="닫기" className="w-[1.9rem] h-[1.9rem] drop-shadow-[0_2px_1px_rgba(220,166,19,100)]" />
            </button>

          </div>

          {writeDetailData.imgPath.length > 1 && (
            <div className="image-nav absolute">
              {!isFirstImage && <button onClick={prevImage}>이전</button>}
              {!isLastImage && <button onClick={nextImage} className='flex justify-center center items-center bottom-0'>다음</button>}
            </div>
          )}
          <div>
            <img src={writeDetailData.imgPath[currentImageIndex]} alt="상세 이미지" className="sliding-image" />
          </div>
        </div>
      ) : null}
      <div>
        <div className='flex py-5 px-5'>
          {/*  사용자 닉네임 같은 값 가져오는 코드 수정 필요 */}
          {<Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">  {writeDetailData?.writerId}U </Avatar>}
          <div style={{ marginTop: 5, marginLeft: 10 }}>
            <label style={{ fontWeight: 'bold' }}> {writeDetailData?.writerId} 사용자 닉네임</label>
          </div>
          <div style={{ marginTop: 30, marginLeft: -47 }}>
            <label style={{ fontWeight: 'normal' }}></label>
          </div>
        </div>
      </div>


      {/* 제목 하트 부분 */}
      <div className='flex'>
        <div className='mt-3 ml-5 flex mb-2 justify-between items-center w-full'>
          <div>
            <label className='font-bold text-xl'>{writeDetailData?.title}</label>
          </div>
          <div className='flex items-center'>
            <img src="/img/Like.png" className="w-7 h-8" alt="Like" /> <label className='mr-5'>{writeDetailData?.heart}</label>
          </div>
        </div>
      </div>



      <div className='mt-3 h-10 w-300 display-flex'>
        <div  className='flex justify-center items-center rounded-2xl' style={{ width: '5.5rem', height: '30px', marginLeft: 10,border: '1px solid #909090', display: 'flex' }}>
          <label>{writeDetailData?.category}</label>
        </div>
        <div className='flex justify-center items-center rounded-2xl' style={{width: '5.5rem', border: '1px solid #909090', height: '30px', marginLeft: 110, marginTop: -30 }}>
          <label>{writeDetailData?.transType}</label>
        </div>
      </div>
      <div className='m-10 mt-[1.5rem] ml-[1rem]'>
        <label className='ml-[0.5rem] text-[#909090]'>{writeDetailData?.explain}</label>
      </div>

      <Purchase />
    </div>
  );
}

export default WriteDetail;
