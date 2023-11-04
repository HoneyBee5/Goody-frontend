import React, { useState, useEffect } from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import Item_width from '../Component/Item_width';
import { Link } from 'react-router-dom';

const FavoriteList = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  const actionBarName = "찜 목록";


  useEffect(() => {
    // 토큰 가져오기
    const token = localStorage.getItem('token');

    const fetchData = async () => {
      try {
     

        const response = await fetch(
          `https://www.honeybee-goody.site/goody/myPage/likesPreview`,
          {
            method: 'GET',
            headers: {
              Authorization: `${token}`,
            }
          }
        );

        if (response.ok) {
        const data = await response.json();
        console.log(data);

          if (data.likedPreviews && data.likedPreviews.length > 0) {
            setProductData(data.likedPreviews);
            setLoading(false);
          }    
       
        } else {
            throw new Error('HTTP 오류 ' + response.status);
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
              productData.map((item, index) => (
                    <div key={index}>
                         <Link to={`/WriteDetail/${item.documentId}`}>
                        <Item_width data={item} key={index} />
                        {index === productData.length - 1 && <div style={{ marginBottom: '6rem' }}></div>}</Link>
                    </div>
                ))
            )}
        </>
    );
};

export default FavoriteList;