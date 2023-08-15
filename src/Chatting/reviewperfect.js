import React from 'react';
import './font.css';
import Button_honey from './Component/honeybtn';
import Button_honey_2 from './Component/honeybtn_2';
import { Link } from 'react-router-dom';

const reviewperfect = () => {
  const Score = 15;
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
       <div className='font fixed top-0 pl-2' style={{color:'white',fontSize:'50px'}}>
            REVIEW
      </div>

      <div className='fixed inset-0 flex items-center justify-center flex-col'>
        <p className='font p-3'  style={{fontSize:'2rem',color:'white'}}> { Score } / 100 꿀을 드렸어요 ! </p>
        <img className='border rounded-xl  max-w-[15rem] max-h-[15rem]'  src="img/Img_sample.png" alt="상품 사진" />


        <div className='pt-10 pb-5 text-center'>
          <p className='text-3xl p-3 font-bold ' style={{ color:'#5F3300' }}>리뷰 작성 완료!</p>
          <p className='text-xl text-white '>작성하신 리뷰는</p>
          <p className='text-xl text-white'>다른 사용자들에게 많은 도움이 될거예요</p>
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