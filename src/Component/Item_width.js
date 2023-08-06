import React from 'react';

const Item_width = () => {
  return (
    <>
      <div className='flex mt-7 ml-5 mb-5'>
        <div>
          <img width={'100px'} src='img\item_yellow.png' alt='아이템1'></img>
        </div>
        <div className='ml-3 '>
          <p className='font-bold'>상품이름</p>
          <p className='font-bold'>가격</p>
          <p className=''>판매시간</p>
        </div>
        <div className='border rounded-lg border-[#B4B4B4] px-2 text-sm h-6 ml-auto mt-auto mr-4'>거래상태</div> {/* mt-auto로 이동 */}
      </div>
      <hr/>
    </>
  );
};

export { Item_width };
