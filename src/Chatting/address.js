import React from 'react';
import './font.css';
import { ActionBarClose } from '../Component/ActionBarClose';

// 액션바 이름
const actionBarName = "채팅";

const Chatting = () => {

  return (
    <>
    
    <ActionBarClose actionBarName={actionBarName} />
      <div className='pb-10'/>

      
      <div className='font flex justify-center font-bold' style={{color:'#5F3300'}}>
        채팅방 이름
      </div>


      <div className="flex justify-center pl-5 pr-5">
      <div style={{ height: '200px', width: '400px' }} className="flex border pt-5 rounded-lg shadow-lg">


        <div className='pr-3 pb-7 w-2/10'>
        
    
        <div className='flex flex-col items-center ml-3 my-3'>
        <img src="img/profile.png" alt="프로필사진" style={{height:'4rem', width:'4rem'}}className="rounded-full border" />
        <p className='pt-1 fontsmall font-semibold'>나</p>   
        </div>     
       
         </div>

        <div className='flex flex-col items-center'>
            <button className='mt-1 mb-1 border rounded-2xl fontsmall text-sm text-gray-500 text-left pl-1' style={{height:'3rem', width:'16rem', fontSize:'1.5rem'}}> 
                주소 onClick
            </button>
            <button className='mt-1 mb-1 border rounded-2xl fontsmall text-gray-500 text-left pl-1' style={{height:'3rem', width:'16rem', fontSize:'1.5rem'}}> 
                계좌번호 onClick
            </button>
            <button className='mt-1 mb-1 border  fontsmall text-gray-500 pl-1 ' style={{height:'2rem', width:'17rem', fontSize:'18px', borderRadius: '10px 0 10px 10px',backgroundColor:'#FFF2C6'}}> 
               확인
            </button>
    
        
      
        </div>

        
      </div>
    </div>
      
    </>
  );
};

export default Chatting;