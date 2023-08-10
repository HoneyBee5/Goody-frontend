import React from 'react';
import { ActionBar } from '../Component/ActionBar';
import Button from './Component/reviewbtn';
import Button_g from './Component/reviewbtn_gray';
import Button_honey from './Component/honeybtn';
import { Link } from 'react-router-dom';

const actionBarName = "리뷰";

const review = () => {
  

  return (
    <>

      <ActionBar  actionBarName={actionBarName} />

    <div className='fixed inset-0 flex items-center justify-center flex-col'>
        <div className='fontsmall'>
            이런 점이 가장 좋았어요
        </div>
        
        <div className='flex'>
        <Button>친절해요</Button>
        <Button>응답이 빨라요</Button>
        </div>
        <div className='flex'>
        <Button>믿어도 돼요</Button>
        <Button>상품상태가 좋아요</Button>
        </div>
        <div className='flex'>
        <Button>저렴해요</Button>
        <Button>시간약속을 잘지켜요</Button>
        </div>

        <div className='fontsmall'>
            이런 점이 조금 아쉬웠어요
        </div>
        
        <div className='flex'>
        <Button_g>불친절해요</Button_g>
        <Button_g>응답이 느려요</Button_g>
        </div>
        <div className='flex'>
        <Button_g>믿지 못하겠어요</Button_g>
        <Button_g>상품상태가 안좋아요</Button_g>
        </div>
        <div className='flex'>
        <Button_g>비싸요</Button_g>
        <Button_g>시간약속을 못지켜요</Button_g>
        </div>

        <div className='fontsmall mt-5'>
           상세한 후기를 작성해주세요
        </div>


        <textarea placeholder="300자 이내로 작성해주세요" className='border rounded-lg font-normal'style={{ width:'25rem', height:'7rem',fontSize:'13px',textAlign:'start'}}/>



            
        <div className='fixed bottom-0 p-2'>
        <img className='rounded-2xl'  src="img/review.png" alt="안내문"  style={{ width:'25rem', height:'5rem'}}/>

        <Link to='/honeyhome'>
        <Button_honey>꿀단지 채우러 가기</Button_honey>
        </Link>


        </div>


    </div>
    
        

    </>
  );
};

export default review;
