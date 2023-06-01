import React from 'react';
import { Nav } from './Home';
import { ActionBar } from './ActionBar';

// 액션바 이름
const actionBarName = "마이페이지";

const Mypage = () => {
  /* 값을 받아올 변수들 */
  const id = '닉네임';
  const explain = '자기소개';

  return (
    <>
      <ActionBar actionBarName={actionBarName} />
      
      {/* 프로필 */}
      <div className="p-5 flex">
        <div>
          <img src="img/item_gray.png" alt="프로필사진" className="rounded-full" style={{ width: 60 }}></img>
        </div>

        <div className="w-[65%] h-full pl-3 px-2 pt-1">
          <p className='font-bold text-lg'>{id}</p>
          <p className='text-sm'>{explain}</p>
        </div>


        <div className="flex items-center">
          <button className="bg-[#f1c40f] text-white font-bold py-2 px-4 rounded-xl">수정</button>
        </div>
      </div>


      {/* 버튼 */}
      <div className="border pr-5 pl-5 pt-7 pb-7">
      <div className="flex pb-2">
          <button className="flex p-1 items-center">
            <img src="img/item_gray.png" alt="리뷰 목록" className="h-4 w-4 mr-4"/>
            <span className="text-sm font-extrabold">리뷰 목록</span>
          </button>
        </div>

        <div className="flex pb-2">
          <button className="flex p-1 items-center">
            <img src="img/item_gray.png" alt="찜 목록" className="h-4 w-4 mr-4"/>
            <span className="text-sm font-extrabold">찜 목록</span>
          </button>
        </div>

        <div className="flex pb-2">
          <button className="flex p-1 items-center">
            <img src="img/item_gray.png" alt="판매 목록" className="h-4 w-4 mr-4"/>
            <span className="text-sm font-extrabold">판매목록</span>
          </button>
        </div>

        <div className="flex pb-2">
          <button className="flex p-1 items-center">
            <img src="img/item_gray.png" alt="구매 목록" className="h-4 w-4 mr-4"/>
            <span className="text-sm font-extrabold">구매 목록</span>
          </button>
        </div>

        <div className="flex pb-2">
          <button className="flex p-1 items-center">
            <img src="img/item_gray.png" alt="참여 목록" className="h-4 w-4 mr-4"/>
            <span className="text-sm font-extrabold">참여 목록</span>
          </button>
        </div>
      </div>

      {/* 설정 버튼 */}
      <div className="p-5">
        <div className="flex pb-2">
          <button className="flex p-1 items-center">
            <img src="img/item_gray.png" alt="설정" className="h-4 w-4 mr-4"/>
            <span className="text-sm font-extrabold">설정</span>
          </button>
        </div>
      </div>

      {/* 로그아웃 버튼 */}
      <div className="pl-5">
        <button
          style={{
            color: 'gray',
            fontWeight: 'bolder',
            fontSize: '0.75rem',
          }}
        >
          로그아웃
        </button>
      </div>

      <Nav />
    </>
  );
};

export default Mypage;
