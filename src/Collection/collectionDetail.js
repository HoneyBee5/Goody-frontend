import React, { useState, useEffect } from 'react';
import './collectionDetail.css';
import { useParams } from 'react-router-dom';
import { Dropdown, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../Review/font.css';
const token = localStorage.getItem('token');

function CollectionDetail() {
const [isSliding, setIsSliding] = useState(false);
const [isDescriptionVisible1, setIsDescriptionVisible1] = useState(true);
const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
const [marginTop, setMarginTop] = useState(0);
const [collectionData, setCollectionData] = useState(null);
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const navigate = useNavigate();


  const { collectionId } = useParams();
  let apiURL = `https://www.honeybee-goody.site/goody/collection/detail?collectionId=${collectionId}`;


  const fetchData = async () => {
    try {
      const headers = {
        Authorization: `${token}`,
      };

      const response = await fetch(apiURL, {
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

  const handleDeleteClick = async () => {
    try {
      const responseDel = await fetch(
        `https://www.honeybee-goody.site/goody/collection/delete?collectionId=${collectionId}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      if (responseDel.ok) {
        console.log('삭제 성공');
        navigate(-1);
      } else {
        console.error('삭제 실패');
      }
    } catch (error) {
      console.error('오류 발생:', error);
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
    if (currentImageIndex < collectionData.filePath.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handleLinkClick = () => {

    navigate('/addWrite'); // '/collectionWrite'로 이동하도록 설정
  };

  const handleBack = () => {
    navigate(-1);
  }

  const items = [



    ...(collectionData && collectionData.myCollection === true
      ? [
        {
          label: '삭제',
          key: '1',

        },
      ]
      : []),

    {
      type: 'divider',
    },

    ...(collectionData && collectionData.myCollection === true
      ? [
        {
          label: '판매하기',
          key: '3',
        },] : []),

  ];


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
          src={collectionData && collectionData.filePath[currentImageIndex]}
          alt={`Image ${currentImageIndex}`}
          className='relative w-full h-[700px] bg-background-image -z-40 object-cover' />

        <div className='flex'>

          <button onClick={handleBack}>
            <img src="../img/blackClose.png" className='absolute top-5 right-4' style={{ width: '22px', height: '22px' }} />
          </button>



          <Dropdown
            menu={{
              items: items.map((item) => {
                if (item.key === '1') {
                  return { ...item, onClick: handleDeleteClick }; // key가 1인 경우 핸들러 1 연결
                }
                if (item.key === '3') {
                  return { ...item, onClick: handleLinkClick };
                }
                return item;
              }),
            }}
            trigger={['click']}
            style={{ border: '1px solid #000', width: '23px', height: '23px' }}
            className='absolute top-4 right-14'
          >


            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <img src='../img/Icon_info.png ' style={{ width: '30px', height: '30px' }} />

              </Space>
            </a>
          </Dropdown>



        </div>

        <div className="relative" style={{ marginTop: `${marginTop}px` }}> {/*아래 상세설명*/}
          <button className={`overflow-hidden absolute  -bottom-[33rem] w-full h-[600px] bg-white rounded-3xl justify-center flex z-50 
               ${isSliding ? 'transition duration-200 ease-in-out sliding ' : ''}`}
          style={{ marginTop: `${marginTop}px` }}
          onClick={handleImageClick}>
          
          
          <p className="text-3xl p-3  absolute text-center">
            {collectionData ? collectionData.title : 'Loading...'}
          </p>


            <div className="mt-[2.2rem] p-5 justify-center">
              <div className='flex'>
                <p>
                  {collectionData ? new Date(collectionData.createdDate).toLocaleDateString() : 'Loading...'}
                </p>
              </div>

          <div>
          <p className=' text-center flex items-center justify-center '>해시태그</p>
          </div>

            </div>




            {isDescriptionVisible1 && (
              <p onClick={handleImageClick} />
            )}
            {isDescriptionVisible && (
              <div>

                <p className="left-[1.25rem] mt-[8rem] mr-[1.25rem] absolute whitespace-pre-line">
                  {collectionData ? collectionData.explain : 'Loading...'}
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
