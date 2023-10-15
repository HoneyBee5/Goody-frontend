import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../Component/Nav';
import './Collection.css';
import PropTypes from 'prop-types';

// 플로팅 버튼
const PlusBtn = () => {
  return (
    <Link to="/collectionWrite">
      <button className='right-3 bottom-24 absolute'>
        <img src="/img/collection_plusButton.png" alt='플러스' width={'70px'} className='' />
      </button>
    </Link>
  );
};

const CollectionItem = ({ item }) => {
  // 컬렉션 아이템 정보를 받아와서 렌더링
  return (
    <div className='inline-flex'>
      <Link to={`/collectionDetail/${item.collectionId}`}>
        <button>
          <div>
            <img
              src={item.thumbnail} // 이미지 URL 사용
              className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)] Collecthin_image col_item col_item2'
              alt={item.title}
            />
          </div>
        </button>
      </Link>
    </div>
  );
};


function Collection() {
  const [collectionItems, setCollectionItems] = useState(null);

  // 토큰 가져오기
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetchCollectionItems() {
      try {
        const headers = {
          Authorization: `${token}`,
        };

        const response = await fetch('http://27.96.134.23:4001/goody/collection/list', {
          method: 'GET',
          headers,
        });

        if (response.ok) {
          const data = await response.json();
          setCollectionItems(data.dto); // 데이터 설정
        } else {
          console.error('컬렉션 아이템 목록을 불러오는 중 오류가 발생했습니다.');
        }

      } catch (error) {
        console.error('오류가 발생했습니다:', error);
      }
    }

    fetchCollectionItems();
  }, []);

  const back = {
    backgroundImage: "url('img/Collection_back.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  // collectionItems가 null일 때 처리
  if (collectionItems === null) {
    return <div>Loading...</div>;
  }
  
  return (
    <div style={back}>
      <div className='flex'>
        <div className='w-full flex justify-center mb-20'>
          <img className='absolute mt-7 left-7' src="img/SmallLogo.png" alt='구디' width={'130px'} />
        </div>
        <Link to="/Inspect">
          <button className='absolute right-14 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'><img src="img/Search.png" alt='검색' width={'25px'} height={'25px'} /></button>
        </Link>
        <button className='absolute right-0 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'><Link to="/categories"><img src="img/Hamburger.png" alt='햄버거' width={'25px'} height={'25px'} /></Link></button>
      </div>

      {Array.isArray(collectionItems) &&
        collectionItems.map((item, index) => (
          <CollectionItem key={index} item={item} />
        ))
      }

      <PlusBtn />
      <Nav />
    </div>
  );
}

// CollectionItem 컴포넌트 내에서 아래와 같이 PropTypes 설정
CollectionItem.propTypes = {
  item: PropTypes.shape({
    collectionId: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string, 
  }).isRequired,
};


export default Collection;
