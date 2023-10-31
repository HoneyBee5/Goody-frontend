import React, { useState, useEffect } from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import Item_width from '../Component/Item_width';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const FavoriteList = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const actionBarName = queryParams.get('name');
  const categoryId = queryParams.get('category');

    useEffect(() => {

      // 토큰 가져오기
      const token = localStorage.getItem('token');

      const fetchData = async () => {
          try {
              const headers = {
                  Authorization: `${token}`,
              };

              const response = await fetch(
                  `https://www.honeybee-goody.site/goody/contents/myPage/likesPreview`,
                  {
                      method: 'GET',
                      headers,
                  }
              );

              if (!response.ok) {
                  throw new Error('HTTP 오류 ' + response.status);
              }

              const data = await response.json();

              if (data && data.length > 0) {
                  setProductData(data);
                  setLoading(false);
              } else {
                  console.error('API에서 데이터를 가져오는 중 오류 발생: 데이터가 비어 있습니다.');
              }
          } catch (error) {
              console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
              setLoading(false);
          }
      };

      fetchData();
  }, [categoryId, actionBarName]); // 빈 배열을 의존성 배열로 사용하여 최초 한 번만 실행되도록 설정


  return (
    <>
      <ActionBarClose actionBarName={actionBarName} />
      {loading ? (
                <div>Loading...</div>
            ) : (
              productData.map((item, index) => (
                    <div key={index}>
                         <Link to={`/WriteDetail/${item.documentId}`}>
                        <Item_width data={item} />
                        {index === productData.length - 1 && <div style={{ marginBottom: '6rem' }}></div>}</Link>
                    </div>
                ))
            )}
    </>
  );
};


export default FavoriteList;
