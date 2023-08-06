import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <img className='relative' src='img/LoginActionBar.png' alt='구디' />
      <p className='font-bold text-center text-xl mb-10'> 로그인</p>

      <div className='text-center'>
      <p className='text-left ml-8 font-bold p-2' > 이름 </p>
            <input type={'text'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[350px] h-12 pl-4' placeholder='hongildong'></input>
            <p className='text-left ml-8 font-bold p-2' > 비밀번호 </p>
            <input type={'password'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)]  rounded-lg w-[350px] h-12 pl-4' placeholder='********'></input>
      </div>

      <div className='flex justify-center'> {/* This div will center its children horizontally */}
        <button className='mt-5 w-[350px] mb-5'>
          <Link to="/home">
            <img src='img/LoginButton.png' alt='Login' />
          </Link>
        </button>
      </div>

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
