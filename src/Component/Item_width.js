import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Item_width = ({ data }) => {

  return (
    <>
     {/* <Link to={`/item/${data.documentId}`}> */}
      <div className='flex mt-7 ml-5 mb-5'>
        <div>
          {/* 이미지 URL을 data에서 가져와서 src에 설정 */}
          <img width={'70px'} src={`${data.thumbnailImg}`} alt={data.title} className='rounded-xl' />
        </div>
        <div className='ml-3 '>
          <p className='font-bold'>{data.title}</p>
          <p className='font-bold'>{data.price}원</p>
          <p className=''>{data.createdDate}</p>
        </div>
        <div className='border rounded-lg border-[#B4B4B4] px-2 text-sm h-6 ml-auto mt-auto mr-4'>{data.transType}</div>
      </div>
      {/* </Link> */}
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