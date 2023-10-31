import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Join()  {
  
  const [formData, setFormData] = useState({
   userId:'',
   userPw:'',
   birth: '2023-09-19T10:53:41.299Z'
  
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://27.96.134.23:4001/goody/test/post', {
        method: 'POST',
        body: JSON.stringify(formData),
        redirect: 'follow',
      });
  
     if (response.ok) {
             console.log('회원가입 성공');
  
} else {
  console.error('회원가입 실패:', response.status, response.statusText);
}
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };
  
  
    return (


        <div>
          <img className='relative' src='img/LoginActionBar.png' alt='구디' />
          <p className='font-bold text-center text-xl mb-10'> 회원가입</p>

          <form onSubmit={handleSubmit}>
          <div className='text-center'>
          <p className='text-left ml-8 font-bold p-2' > 아이디 </p>
            <input type={'text'} name='userId' className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[22rem] h-12 pl-4' placeholder='hongildong' value={formData.userId} onChange={handleChange}></input>
            <p className='text-left ml-8 font-bold p-2' > 비밀번호 </p>
            <input type={'password'} name='userPw' className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[22rem] h-12 pl-4' placeholder='********' value={formData.userPw} onChange={handleChange}></input>
            <p className='text-left ml-8 font-bold p-2' > 비밀번호 재확인 </p>
            <input type={'password'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[22rem] h-12 pl-4' placeholder='********'></input>
            <p className='text-left ml-8 font-bold p-2' > 이름 </p>
            <input type={'text'} className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[22rem] h-12 pl-4' placeholder='홍길동'></input>
            <p className='text-left ml-8 font-bold p-2' > 전화번호 </p>
            <input type={'text'}  className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[22rem] h-12 pl-4' placeholder='010-0000-0000'></input>
            
          </div>
    
          <div className='flex justify-center'> 
            <button type='submit' className='mt-10 w-[22rem]'>
                <img src='img/JoinButton.png' alt='Join' />
            </button>
          </div>
          </form>

          <div className='text-center mt-5'>
        <div className='flex justify-center space-x-2'>
          <Link to="/"><p> 로그인 </p></Link>
        </div>
      </div>
        </div>
      );
}

export default Join;