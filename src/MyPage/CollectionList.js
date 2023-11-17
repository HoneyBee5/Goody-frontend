import React, { useState, useEffect } from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CollectionItem = ({ item }) => {
  // 컬렉션 아이템 정보를 받아와서 렌더링
  return (
    <div className='inline-flex'>
      <Link to={`/collectionDetail/${item.documentId}`}>
        <button className='rounded-2xl'>
          <div>
            <img
              src={item.thumbnailPath} // 이미지 URL 사용
              className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)] Collecthin_image col_item rounded-2xl'
            />
          </div>
        </button>
      </Link>
    </div>
  );
};

const CollectionList = () => {

  const actionBarName = "컬렉션 찜 목록";
  const [collectionItems, setCollectionItems] = useState([]);


  // collectionItems가 null일 때 처리
  if (collectionItems === null) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `${token}`,
        };

        const response = await fetch(
          'https://www.honeybee-goody.site/goody/myPage/collectionLikeList',
          {
            method: 'GET',
            headers,
          }
        );

        if (!response.ok) {
          throw new Error('HTTP 오류 ' + response.status);
        }

        const data = await response.json();

        // 데이터에서 collectionLikes 배열 추출
        setCollectionItems(data.collectionLikes);

        // 여기에서 collectionLikes를 활용하여 필요한 작업 수행

      } catch (error) {
        console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
      }
    };

    fetchData(); // useEffect 안에서 fetchData 호출

  }, []); // useEffect의 의존성 배열이 비어있으므로 컴포넌트가 처음 마운트될 때만 실행

  return (
    <>
      <ActionBarClose actionBarName={actionBarName} />
      <div className='flex flex-col items-center pt-10'> {/* 부모 요소 */}
        <div className='grid grid-cols-3 gap-1 p-3 rounded-xl'> {/* 그리드 컨테이너, 3개의 열과 간격 설정 */}
          {Array.isArray(collectionItems) &&
            collectionItems.map((item, index) => (
              <CollectionItem key={index} item={item} />
            ))
          }
        </div>
      </div>
    </>
  );
};

// CollectionItem 컴포넌트 내에서 아래와 같이 PropTypes 설정
CollectionItem.propTypes = {
  item: PropTypes.shape({
    documentId: PropTypes.string.isRequired,
    thumbnailPath: PropTypes.string.isRequired,
  }).isRequired,
};

export default CollectionList;
