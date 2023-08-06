import React from 'react';

const Item_width = () => {
    return (
      <>
        <div className='flex mt-7 ml-5 mb-5'>
        <div>
          <img width={'100px'} src='img\item_yellow.png' alt='아이템1'></img>
        </div>
        <div className='ml-3'>
          <p className='font-bold'>상품이름</p>
          <p className='font-bold'>가격</p>
          <p className=''>판매시간</p>
          <p className=''>거래상태</p>
        </div>

      </div> <hr/></>
    );
  };
  
  export { Item_width };
  