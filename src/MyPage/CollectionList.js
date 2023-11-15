import React, { useState, useEffect } from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import Item_width from '../Component/Item_width';
import { Link } from 'react-router-dom';

const CollectionList = () => {
  const [CollectionData, setCollectionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const actionBarName = "컬렉션 찜 목록";


  useEffect(() => {
    // 토큰 가져오기
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `${token}`,
        };

        const response = await fetch(
          `http://27.96.134.23:4001/goody/myPage/collectionLikeList`,
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

        if (data.likedPreviews && data.likedPreviews.length > 0) {
          setCollectionData(data.likedPreviews);
          setLoading(false);
        }
      } catch (error) {
        console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [actionBarName]);

  return (
    <>
      <ActionBarClose actionBarName={actionBarName} />

      {loading ? (
        <div>Loading...</div>
      ) : (
        CollectionData.map((item, index) => (
          <div key={index}>
            <Link to={`/Collectionetail/${item.collectionLikes}`}>
              <Item_width data={item} />
              {index === CollectionData.length - 1 && <div style={{ marginBottom: '6rem' }}></div>}
            </Link>
          </div>
        ))
        )}
    </>
  );
};

export default CollectionList;