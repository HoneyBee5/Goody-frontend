import React, { useState, useEffect } from 'react';
import { ActionBarModify } from '../Component/ActionBarModity';
import './collectionDetail.css'; 
import { useParams } from 'react-router-dom';


function CollectionDetail() {
const [isSliding, setIsSliding] = useState(false);
  const [isDescriptionVisible1, setIsDescriptionVisible1] = useState(true);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  const [collectionData, setCollectionData] = useState(null); // 컬렉션 데이터 상태 추가

  const { collectionId } = useParams(); // 추가: URL에서 컬렉션 ID를 가져옴

  const Text = () => {
  
  
  
  

  useEffect(() => {
    async function fetchCollectionItems() {
      const token = localStorage.getItem('token');
      try {
        // HTTP 요청 헤더 설정
        const headers = {
          Authorization: `${token}`,
        };

        // API로부터 컬렉션 아이템 목록을 가져오는 요청
        const response = await fetch(`http://27.96.134.23:4001/goody/collection/detail?collectionId=${collectionId}`,
         {
          method: 'GET',
          headers,
        });

        if (response.ok) {
          const data = await response.json();
          setCollectionData(data); // 컬렉션 데이터 설정
        } else {
          console.error('컬렉션 아이템 목록을 불러오는 중 오류가 발생했습니다.');
        }
      } catch (error) {
        console.error('오류가 발생했습니다:', error);
      }
    }

    fetchCollectionItems();
  }, []);

  const handleImageClick = () => {
    const newMarginTop = marginTop === 0 ? -225 : 0;
    setMarginTop(newMarginTop);

    setIsSliding(true);
    setIsDescriptionVisible1(isDescriptionVisible);
    setIsDescriptionVisible(!isDescriptionVisible);

    setTimeout(() => {
      setIsSliding(false);
    }, 500);
  }

  return (
    <div className={`justify-center flex ${isSliding ? 'transition duration-200 ease-in-out sliding' : ''}`}
      style={{ marginTop: `${marginTop}px` }}>

      <img src='../img/collectionText.png' className='absolute mt-[-3rem]' alt='collection' onClick={handleImageClick} />

      <p className='text-3xl mt-[-0.625rem] absolute'>
        <button onClick={handleImageClick}>
        {collectionData ? collectionData.title : 'Loading...'} 
        </button>
      </p>

      <div className='flex mt-[2.2rem] pr-[8.5rem]'>
        <img src='../img/Calendar.png' className="absolute h-6 w-10" alt='calendar' />
        <div><p className='absolute ml-11'>
        {collectionData ? new Date(collectionData.createdDate).toLocaleString() : 'Loading...'} {/* 날짜 표시 */}
        </p></div>
      </div>

      {isDescriptionVisible1 && (
        <p className='left-[1rem] mt-[5rem] absolute whitespace-pre-line text-[#888]' onClick={handleImageClick} >
          작성 내용 더보기...
        </p>
      )}

      {isDescriptionVisible && (
        <p className='left-[1.25rem] mt-[5.5rem] absolute whitespace-pre-line'>
        {collectionData ? collectionData.content : 'Loading...'}
        </p>
      )}
    </div>
  );
}



  return (
    <div>
     <ActionBarModify collectionData={collectionData} />
      <Text />
    </div>
  );
}


export default CollectionDetail;
