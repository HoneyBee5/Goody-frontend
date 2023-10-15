import React from 'react';
import PropTypes from 'prop-types';

const Item_width = ({ data }) => {
  const MAX_TITLE_LENGTH = 16; // 원하는 최대 길이

  const formatPrice = (price) => {
    return price.toLocaleString(); // 가격에 천 단위 구분 기호(쉼표) 추가
  };

  const truncatedTitle = data.title.length > MAX_TITLE_LENGTH
    ? data.title.slice(0, MAX_TITLE_LENGTH) + '...'
    : data.title;

  return (
    <>
      <div className='flex mt-7 ml-5 mb-5'>
        <div>
          <img src={data.thumbnailImg} alt={data.title} className='rounded-xl'  style={{ width:'70px', height: '70px', objectFit: 'cover' }} />
        </div>
        <div className='ml-3 '>
          <p className='font-bold'>{truncatedTitle}</p>
          <p className='font-bold'>{formatPrice(data.price)}원</p>
          <p className='text-sm'>{data.createdDate}</p>
        </div>
        <div className='border rounded-lg border-[#B4B4B4] px-2 text-sm h-6 ml-auto mt-auto mr-4'>{data.transType}</div>
      </div>
      <hr />
    </>
  );
};

Item_width.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    createdDate: PropTypes.string.isRequired,
    transType: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    thumbnailImg: PropTypes.string.isRequired,
    documentId: PropTypes.string.isRequired,
  }).isRequired,
};

export default Item_width;
