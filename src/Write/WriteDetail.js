import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './WriteDetail.css';
import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';


// 탭뷰 테마 커스텀 테마를 생성
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD52B', // 원하는 색상으로 변경
    },
  },
});


function WriteDetail() {
  const [writeDetailData, setWriteDetailData] = useState({});
  const { documentId } = useParams();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [liked, setLiked] = useState(false);



  
  const handleLikeClick = () => {

      // 좋아요 상태를 토글하고 저장
      setLiked(!liked);
      const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];


      if (liked) {
        // 이미 좋아요한 경우, 아이템을 제거
        const updatedLikedItems = likedItems.filter((item) => item !== documentId);
        localStorage.setItem('likedItems', JSON.stringify(updatedLikedItems));


        // 좋아요 취소 API 호출
        const headers = {
          Authorization: token,
          'Content-Type': 'application/json',
        };
        
        const dataToSend = {
          documentId: documentId,
        };

        fetch(`https://www.honeybee-goody.site/goody/contents/removeLike?documentId=${documentId}`, {
          method: 'POST',
          headers,
          body: JSON.stringify(dataToSend),
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error('HTTP 오류 ' + response.status);
          }
        })
        .catch((error) => {
          console.error('좋아요 취소 중 오류 발생:', error);
        });
        

      } else {
        // 좋아요하지 않은 경우, 아이템을 추가
        likedItems.push(documentId);
        localStorage.setItem('likedItems', JSON.stringify(likedItems));


    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };
  
    const dataToSend = {
    documentId: documentId,
      liked: true, // 현재 상태를 토글
    };
  
    fetch(`https://www.honeybee-goody.site/goody/contents/addlike?documentId=${documentId}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP 오류 ' + response.status);
        }
      })
      .catch((error) => {
        console.error('좋아요 정보 업데이트 중 오류 발생:', error);
      });
    }
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
      console.log(data);
    } catch (error) {
      console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
    }
  };

useEffect(() => {
  fetchData();
  // 로컬 스토리지에서 좋아요한 아이템 목록을 가져옴
  const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
  // likedItems 배열을 사용하여 해당 아이템의 좋아요 상태를 설정
  const isLiked = likedItems.includes(documentId);
  setLiked(isLiked);
}, [documentId]);


  const isFirstImage = currentImageIndex === 0;
  const isLastImage = writeDetailData.imgPath && currentImageIndex === writeDetailData.imgPath.length - 1;


  return (
    <ThemeProvider theme={theme}>
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
            {documentId && (
              <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
                {documentId.charAt(0)} {/* 첫 글자만 표시 */}
              </Avatar>
            )}
            <div className='ml-2'>
              <div className=''>
                <label className='font-bold'> {documentId} </label>
              </div>
              <div>
                <label className='text-sm'>등급</label>
              </div>
            </div>
          </div>
        </div>

        {/* 카테고리 */}
        <div className='mt-5 ml-5 w-300 flex'>
          <Chip
            label={writeDetailData?.category}
            color="primary" 
            size="medium"
            className='mr-5'
          />
          <Chip
            label={writeDetailData?.transType}
            color="primary" 
            size="medium"
          />
        </div>

        {/* 설명 */}
        <div className='m-10 mt-[1.5rem] ml-[1rem]'>
          <label className='ml-[0.5rem] text-[#565656]'>{writeDetailData?.explain}</label>
        </div>

        <br></br>

        {writeDetailData?.transType === '같이해요' && writeDetailData?.people && (
          <div className="m-4">
            <h2 className="text-sm font-bold ml-3">품목 리스트</h2>
            <div>
              {writeDetailData.people.map((person, index) => (
                <Chip
                  key={index}
                  label={person}
                  variant="outlined"
                  style={{ margin: '0.5rem' }}
                />
              ))}
            </div>
            {writeDetailData.people.length > 0 && <div style={{ marginBottom: '6rem' }}></div>}
          </div>
        )}



        {/* 가격 및 구매하기 */}
        <div className='bottom-0 fixed w-full'>
          <div className='flex justify-center bg-[#f8f8f8] h-15 p-2'>

            <FontAwesomeIcon icon={faHeartSolid} className={`heart-icon ${liked ? 'text-color' : ''} p-3`} size="lg" onClick={handleLikeClick} />
            <div className='p-3 pl-5 font-semibold text-sm'>
              <label>{writeDetailData.price}원</label>
            </div>
            <div className='flex ml-auto mr-[0.5rem]' >
              <Link to="/chatting">
                <button className='bg-[#FFD52B] w-[6.5rem] h-[2.2rem] right-0 mt-[0rem] font-bold rounded-xl content-center'>
                구매하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}



export default WriteDetail;