import React from 'react';
import { Link } from 'react-router-dom';

const Item_width = () => {
    return (
        <div className='flex m-5'>
        <div>
          <Link to="/Sightseeing">
          <button>
          <img width={'100px'} src='img\item_yellow.png' alt='아이템1'></img>
          </button>
          </Link>
        </div>
        <div className='ml-3'>
          <p className='font-bold'>상품이름</p>
          <p className='font-bold'>가격</p>
          <p className=''>판매시간</p>
          <p className=''>거래상태</p>
        </div>
      </div>
    );
  };
  

  
  export { Item_width };
  