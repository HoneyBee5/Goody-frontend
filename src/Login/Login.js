import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = new FormData();
    form.append('userId', userId);
    form.append('userPw', userPw);
    
    // 로그인 정보를 담은 JSON 객체 생성
    const user = {
      userId: userId,
      userPw: userPw,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // JSON 형식으로 데이터 전송을 설정합니다.
      },
      body: JSON.stringify(user), // JSON 형식으로 데이터를 문자열로 변환하여 전송합니다.
    };
  
    try {
      const response = await fetch('https://www.honeybee-goody.site/goody/user/login', requestOptions);
  
      if (response.ok) {
        const accessToken = response.headers.get('Authorization');
        if (accessToken) {
          // 토큰을 localStorage에 저장
          localStorage.setItem('token', accessToken);
  
          // 로그인 성공 시 홈페이지로 이동
          window.location.href = '/home';
        } else {
          console.error('토큰이 없습니다.');
        }
      } else {
        // Login failed
        console.error('로그인 실패');
        throw new Error('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생', error);
      // 오류 처리
    //  window.location.href = '/home';
    }
  };
  
  return (
    <div>
      <img className='relative' src='img/LoginActionBar.png' alt='구디'/>
      <p className='font-bold text-center text-xl mb-10'> 로그인</p>

      <form onSubmit={handleSubmit} method="POST" action="/login">
        <div className='text-center'>
        <p className='text-left ml-8 font-bold p-2' > 이름 </p>
              <input type={'text'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[22rem] h-12 pl-4'
              placeholder='hongildong' name='userId' onChange={(e) => setUserId(e.target.value)}></input>
              <p className='text-left ml-8 font-bold p-2' > 비밀번호 </p>
              <input type={'password'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)]  rounded-lg w-[22rem] h-12 pl-4'
              placeholder='********' name='userPw' onChange={(e) => setUserPw(e.target.value)}></input>
        
        </div>

        <div className='flex justify-center'>
          <button type={'submit'} className='mt-5 w-[22rem] mb-5'>
              <img src='img/LoginButton.png' alt='Login' />
          </button>
        </div>
      </form>

      <div className='text-center mt-5'>
        <div className='flex justify-center space-x-2'>
          <Link to="/join"><p> 회원가입 </p></Link>
        </div>
      </div>
    </div>
  );
};


export default Login;