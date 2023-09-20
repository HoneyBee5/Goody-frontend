import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 동작 방지

    // 폼 데이터를 서버로 POST 요청으로 전송
    const form = new FormData();
    form.append('userId', userId);
    form.append('userPw', userPw);
    
    fetch('http://27.96.134.23:4001/goody/login', {
      method: 'POST',
      body: form,
      redirect: 'follow',
    })
      .then((response) => {
        if (response.ok) {
          // 로그인 성공 시 리다이렉트 또는 다른 작업 수행
         window.location.href = '/home'
         console.log(response);
        } else {
          // 로그인 실패 시 처리

          console.error('로그인 실패');
        }
      })
      .catch((error) => {
        console.error('로그인 요청 중 오류 발생', error);
        window.location.href = '/home'//
      });
    };

  return (
    <div>
      <img className='relative' src='img/LoginActionBar.png' alt='구디' />
      <p className='font-bold text-center text-xl mb-10'> 로그인</p>

      <form onSubmit={handleSubmit} method="POST" action="/login">
        <div className='text-center'>
        <p className='text-left ml-8 font-bold p-2' > 이름 </p>
              <input type={'text'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[22rem] h-12 pl-4' placeholder='hongildong' name='userId' onChange={(e) => setUserId(e.target.value)}></input>
              <p className='text-left ml-8 font-bold p-2' > 비밀번호 </p>
              <input type={'password'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)]  rounded-lg w-[22rem] h-12 pl-4' placeholder='********' name='userPw' onChange={(e) => setUserPw(e.target.value)}></input>
        
        </div>

        <div className='flex justify-center'> {/* This div will center its children horizontally */}
          <button type={'submit'} className='mt-5 w-[22rem] mb-5'>
            {/* <Link to="/home"> */}
              <img src='img/LoginButton.png' alt='Login' />
            {/* </Link> */}
          </button>
        </div>
      </form>

      <div className='text-center mt-5'>
        <div className='flex justify-center space-x-2'>
          <Link to="/join"><p> 회원가입 </p></Link>
          <p>|</p>
          <Link to="/findid"><p> 아이디 찾기 </p></Link>
          <p>|</p>
          <Link to="/findpw"><p> 비밀번호 찾기 </p></Link>
        </div>
      </div>
    </div>
  );
};

export default Login;