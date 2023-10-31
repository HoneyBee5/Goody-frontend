import React, { useState, useEffect } from 'react';
import { ActionBarClose } from '../Component/ActionBarClose';
import PropTypes from 'prop-types';

const actionBarName = "찜 목록";

const FavoriteList = ({ token, documentId, liked }) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (liked) {
      const headers = {
        Authorization: token,
      };

      fetch(`https://www.honeybee-goody.site/goody/myPage/likesPreview`, {
        method: 'GET',
        headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('데이터를 불러오는 중 오류가 발생했습니다.');
          }
        })
        .then((data) => {
          setProductData(data); // 데이터 설정
        })
        .catch((error) => {
          console.error('오류가 발생했습니다:', error);
        });
    }
  }, [token, documentId, liked]);

  return (
    <>
      <ActionBarClose actionBarName={actionBarName} />
      {productData && (
        <div className='flex mt-7 ml-5 mb-5'>
          <div>
            <img src={productData.imageSrc} alt={productData.title} className='rounded-xl' style={{ width: '70px', height: '70px', objectFit: 'cover' }} />
          </div>
          <div className='ml-3 '>
            <p className='font-bold'>{productData.title}</p>
            <p className='font-bold'>{productData.price}원</p>
            <p className='text-sm'>{productData.description}</p>
          </div>
          <div className='border rounded-lg border-[#B4B4B4] px-2 text-sm h-6 ml-auto mt-auto mr-4'>{productData.category}</div>
        </div>
      )}
    </>
  );
};

FavoriteList.propTypes = {
  token: PropTypes.string.isRequired,
  documentId: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
};

export default FavoriteList;
