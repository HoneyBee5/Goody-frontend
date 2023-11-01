import React, { useState, useEffect } from 'react';
import './collectionDetail.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CollectionDetail() {
  const [isSliding, setIsSliding] = useState(false);
  const [isDescriptionVisible1, setIsDescriptionVisible1] = useState(true);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [marginTop, setMarginTop] = useState(0);
  const [collectionData, setCollectionData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { collectionId } = useParams();
  const token = localStorage.getItem('token');

  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `${token}`,
      };

      const response = await fetch(`http://27.96.134.23:4001/goody/collection/detail?collectionId=${collectionId}`, {
        method: 'GET',
        headers,
      });

      if (response.ok) {
        const data = await response.json();
        setCollectionData(data);
        setCurrentImageIndex(0); 
      } else {
        console.error('An error occurred while fetching collection item list.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  const handleImageClick = () => {
    const newMarginTop = marginTop === 0 ? -225 : 0;
    setMarginTop(newMarginTop);
  
    setIsSliding(true);
    setIsDescriptionVisible1(isDescriptionVisible);
    setIsDescriptionVisible(!isDescriptionVisible);
    
 
  };

  const showPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const showNextImage = () => {
    if (currentImageIndex < collectionData.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  useEffect(() => {
    fetchData();
    // 페이지 로드 시 스크롤 비활성화
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트 될 때 스크롤 다시 활성화
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <div> {/*전체*/}



        <button className='absolute left-0 w-[10rem] h-[50rem]' onClick={showPreviousImage}></button> {/*이미지*/}
        <button className='absolute right-0 w-[10rem] h-[50rem]' onClick={showNextImage}> </button>{/*이미지*/}
        {/*이미지*/}
          <img   
          
            src={collectionData && collectionData.images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            className='relative w-full h-[700px] bg-background-image -z-40 '/>
        

        <div className='flex'>
        <Link to="/collection">
          <button>
            <img src="../img/blackClose.png" className='absolute top-5 right-5' style={{ width: '22px', height: '22px' }} />
          </button>
        </Link>

        <button className='absolute top-5 left-3 border p-1 rounded-2xl bg-white'>
          수정
        </button>
        <button className='absolute top-5 left-14 border p-1 rounded-2xl bg-white'>
          삭제
        </button>
      
        </div> 
        

        <div className="relative" style={{ marginTop: `${marginTop}px` }}> {/*아래 상세설명*/}
        <button className={`overflow-hidden absolute  -bottom-[33rem] w-full h-[600px] bg-white rounded-3xl justify-center flex z-50 
               ${isSliding ? 'transition duration-200 ease-in-out sliding ' : ''}`}
          style={{ marginTop: `${marginTop}px` }}
          onClick={handleImageClick}>
          <p className="text-3xl p-3  absolute text-center">
            {collectionData ? collectionData.title : 'Loading...'}
          </p>


          <div className="flex mt-[2.2rem] p-5 justify-center">
              <img src="../img/Calendar.png" className="h-6 w-10" alt="calendar" />
          <div>
          <p>
            {collectionData ? new Date(collectionData.createdDate).toLocaleString() : 'Loading...'}
          </p>
          </div>
          </div>

          {isDescriptionVisible1 && (
            <p className="left-[1rem] mt-[5rem] absolute whitespace-pre-line text-[#888]" onClick={handleImageClick}>
              더보기
            </p>
          )}
          {isDescriptionVisible && (
                          <div>
                          <p className="left-[1.25rem] mt-[5.5rem] mr-[1.25rem] absolute whitespace-pre-line">
                          {collectionData ? collectionData.content : 'Loading...'}
                          </p>
                    
                          </div>

                 
          )}

          
        </button> 
        </div> {/*아래 상세 설명 끝*/}
        </div>
     
    </>
  );
}

export default CollectionDetail;
