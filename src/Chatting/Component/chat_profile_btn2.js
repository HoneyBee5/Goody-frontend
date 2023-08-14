import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
    const name = '짱구는 못말려 분철합니다';
    const price = '18000';
    return (
       
        <>


        <div className='flex  border '
        style={{
                width: '25rem', height: '4em', borderRadius: '50px 0 10px 50px',
                backgroundColor: '#FFF2C6'
            }}>

        <img src="img/Book.png" alt="프로필사진" className="rounded-full border" style={{ width: '4rem', height:'4rem' }}></img>
            
            
            
        <div className='flex flex-col  justify-center '>
           
           
            <p className='pl-5 font font-semibold' style={{fontSize:'1.5rem'}}>{name}</p>
            <p className='pl-5 font' style={{fontSize:'1.5rem'}}> {price}원</p>
        </div>
            
            <Link to='/review'>
            <button className='border absolute bottom-4 right-1 mr-2 font flex justify-center' 
            style={{ borderRadius: '10px 0 10px 10px', width: '6rem', height: '2rem',fontSize:'1.5rem',backgroundColor: '#FFFFFF' }}>
                리뷰 남기기
            </button>
            </Link>
        </div>
        

        </>
        

    );
  };


  


  
  export default Button;