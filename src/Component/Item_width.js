import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Sightseeing from '../Write/WriteDetail';

const Item_width = ({ data }) => {

 // const itemDetailPath = `/item/${data.documentId}`;

  return (
    <>
     <Link to={Sightseeing}> 
      <div className='flex mt-7 ml-5 mb-5'>
        <div>
          {/* 이미지 URL을 data에서 가져와서 src에 설정 */}
          <img width={'70px'} src={`http://27.96.134.23:4001/goody/file/files/?file=${data.filePath.previewImg}`} alt={data.title} className='rounded-xl' />
        </div>
        <div className='ml-3 '>
          <p className='font-bold'>{data.title}</p>
          <p className='font-bold'>{data.price}원</p>
          <p className=''>{data.postDate}</p>
        </div>
        <div className='border rounded-lg border-[#B4B4B4] px-2 text-sm h-6 ml-auto mt-auto mr-4'>{data.transType}</div>
      </div>
      </Link>
      <hr />
    </>
  );
};

Item_width.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    postDate: PropTypes.string.isRequired,
    transType: PropTypes.string.isRequired,
    filePath: PropTypes.shape({
      previewImg: PropTypes.string.isRequired,
    }).isRequired,
    documentId: PropTypes.string.isRequired, // 아이템 식별자를 추가
  }).isRequired,
};

export default Item_width;
