import React from 'react';
import './index.css';
import './mypage.css';

const chatting = () =>{
{/*값을 받아올 변수들*/}
const chat_id = '이름';
const chat_explain = '안녕하세요';
const date_month = '0';
const date_day = '0';

return(
 <>   { /*상단바*/ }
    <div className='mypage_top'>
        채팅목록
    </div>
    <div className='margin_top'></div> {/*상단바랑 겹치지 않도록*/}
    {/*채팅목록*/}
    
    <button className='w-full'>
    <div className='p-5 flex border'>
    <div>
        <img src="img/item_gray.png" alt="프로필사진"
        className='rounded-full' style={{width:60}}></img>
    </div>

    <div className='w-3/5 h-full pl-2'>
        <div style={{fontSize:'1.1rem'}} className='font-extrabold flex justify-start'>
        {chat_id}
        </div>
      <div style={{fontSize:'0.9rem'}} className='flex justify-start'>
        {chat_explain}
      </div>
    </div>

        <div style={{fontSize:'0.7rem'}} className='ml-auto'>
        {date_month}월{date_day}일
        </div>
    </div>
    </button>

    {/*추가 채팅버튼(예시)*/}
    <button className='w-full'>
    <div className='p-5 flex border'>
    <div>
        <img src="img/item_gray.png" alt="프로필사진"
        className='rounded-full' style={{width:60}}></img>
    </div>

    <div className='w-3/5 h-full pl-2'>
        <div style={{fontSize:'1.1rem'}} className='font-extrabold flex justify-start'>
        {chat_id}
        </div>
      <div style={{fontSize:'0.9rem'}} className='flex justify-start'>
        {chat_explain}
      </div>
    </div>

        <div style={{fontSize:'0.7rem'}} className='ml-auto'>
        {date_month}월{date_day}일
        </div>
    </div>
    </button><button className='w-full'>
    <div className='p-5 flex border'>
    <div>
        <img src="img/item_gray.png" alt="프로필사진"
        className='rounded-full' style={{width:60}}></img>
    </div>

    <div className='w-3/5 h-full pl-2'>
        <div style={{fontSize:'1.1rem'}} className='font-extrabold flex justify-start'>
        {chat_id}
        </div>
      <div style={{fontSize:'0.9rem'}} className='flex justify-start'>
        {chat_explain}
      </div>
    </div>

        <div style={{fontSize:'0.7rem'}} className='ml-auto'>
        {date_month}월{date_day}일
        </div>
    </div>
    </button><button className='w-full'>
    <div className='p-5 flex border'>
    <div>
        <img src="img/item_gray.png" alt="프로필사진"
        className='rounded-full' style={{width:60}}></img>
    </div>

    <div className='w-3/5 h-full pl-2'>
        <div style={{fontSize:'1.1rem'}} className='font-extrabold flex justify-start'>
        {chat_id}
        </div>
      <div style={{fontSize:'0.9rem'}} className='flex justify-start'>
        {chat_explain}
      </div>
    </div>

        <div style={{fontSize:'0.7rem'}} className='ml-auto'>
        {date_month}월{date_day}일
        </div>
    </div>
    </button>
    <button className='w-full'>
    <div className='p-5 flex border'>
    <div>
        <img src="img/item_gray.png" alt="프로필사진"
        className='rounded-full' style={{width:60}}></img>
    </div>

    <div className='w-3/5 h-full pl-2'>
        <div style={{fontSize:'1.1rem'}} className='font-extrabold flex justify-start'>
        {chat_id}
        </div>
      <div style={{fontSize:'0.9rem'}} className='flex justify-start'>
        {chat_explain}
      </div>
    </div>

        <div style={{fontSize:'0.7rem'}} className='ml-auto'>
        {date_month}월{date_day}일
        </div>
    </div>
    </button><button className='w-full'>
    <div className='p-5 flex border'>
    <div>
        <img src="img/item_gray.png" alt="프로필사진"
        className='rounded-full' style={{width:60}}></img>
    </div>

    <div className='w-3/5 h-full pl-2'>
        <div style={{fontSize:'1.1rem'}} className='font-extrabold flex justify-start'>
        {chat_id}
        </div>
      <div style={{fontSize:'0.9rem'}} className='flex justify-start'>
        {chat_explain}
      </div>
    </div>

        <div style={{fontSize:'0.7rem'}} className='ml-auto'>
        {date_month}월{date_day}일
        </div>
    </div>
    </button>
    
    { /*네비게이션바*/ }
    <div className='bg-white fixed w-full h-16 bottom-0 border'>
                <div>
                    <button className='w-1/5 h-16 font-extrabold'> 홈 </button>
                    <button className='w-1/5 h-16 font-extrabold'> 컬렉션 </button>
                    <button className='w-1/5 h-16 font-extrabold text-2xl'> + </button>
                    <button className='w-1/5 h-16 font-extrabold'> 채팅 </button>
                    <button className='w-1/5 h-16 font-extrabold'> MY </button>
                </div>
        
    </div>

</>
);
};


export default chatting;