import React from 'react';


const FindPw = () => {
    return (
        <div>
          <img className='relative' src='img/LoginActionBar.png' alt='구디' />
          <p className='font-bold text-center text-xl  mb-10'> 비밀번호 찾기</p>
    
          <div className='text-center'>
            <p className='text-left ml-8 font-bold p-2' > 이름 </p>
            <input type={'text'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[350px] h-12 pl-4' placeholder='홍길동'></input>
            <p className='text-left ml-8 font-bold p-2' > 아이디 </p>
            <input type={'text'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[350px] h-12 pl-4' placeholder='hongildong'></input>
            <p className='text-left ml-8 font-bold p-2' > 전화번호 </p>
            <input type={'text'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[350px] h-12 pl-4' placeholder='010-0000-0000'></input>
          </div>
    
          <div className='flex justify-center'> {/* This div will center its children horizontally */}
            <button className='mt-10 w-[350px]'>
                <img src='img/FindPwButton.png' alt='Join' />
            </button>
          </div>
    
        </div>
      );
}

export default FindPw;