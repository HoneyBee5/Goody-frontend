import React from 'react';
import './font.css';
import Button_honey from './Reviewhoneybtn';
import Button_honey_2 from './Reviewhoneybtn2';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const reviewperfect = () => {
  const location = useLocation();
  const value = location.state ? location.state.value : 0;

  const divStyle = {
    zIndex: -1,
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(90deg, #F4E299 0%, #FFCF0E 100%)'
    /* 그 외 다른 스타일 설정 가능 */
  };
  
  return (
    <>
    
    <div style={divStyle}>
    <p className='font-bold text-white p-5 ml-2 text-xl drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'> REVIEW</p>

      <div className='fixed inset-0 flex items-center justify-center flex-col'>
        <p className='font p-3'  style={{fontSize:'2rem',color:'white'}}> { value } / 100 꿀을 드렸어요 ! </p>
        <img className='pl-7' src='img/honeyhome.png' style={{ width: '20rem', height: '25rem' }}></img>


        <div className='pt-10 pb-5 text-center'>
          <p className='text-3xl p-3 font-bold ' style={{ color:'#5F3300' }}>리뷰 작성 완료!</p>
          <p className='text-xl font-bold text-white drop-shadow-[0_2px_1px_rgba(220,166,19,100)] '>작성하신 리뷰는 <br/> 다른 사용자들에게 많은 도움이 될거예요</p>
        </div>

        <Link to='/reviewlist'>
        <Button_honey >내가 작성한 리뷰 보러가기</Button_honey>
        </Link>

        <Link to='/home'>
        <Button_honey_2 className='bg-white' style={{color:'#5F3300'}}>홈</Button_honey_2>
        </Link>
      </div>  

      
    </div>
    


    </>
  );
};

export default reviewperfect;