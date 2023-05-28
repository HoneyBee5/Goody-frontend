import React from 'react';
import './index.css';
import './mypage.css';

const mypage = () => {
    {/*값을 받아올 변수들*/}
    const id ='닉네임';
    const explain = '자기소개';
    const keyword1 = '친절해요';
    const keyword2 = '믿어도 돼요';
    const keyword3 = '상품 상태가 좋아요';
    
    return (

        
<>   { /*상단바*/ }
    <div className='mypage_top'>
        마이 페이지
    </div>
    <div className='margin_top'></div> {/*상단바랑 겹치지 않도록*/}
    { /*프로필*/ }

    <div className='p-5 flex'>
    <div>
        <img src="img/item_gray.png" alt="프로필사진"
        className='rounded-full' style={{width:60}}></img>
    </div>

    <div className='w-4/5 h-full pl-3 px-2 pt-1'>
        <div style={{fontSize:'1rem'}} className='font-bold'>
        {id}
        </div>
      <div style={{fontSize:'0.75rem'}}>
        {explain}
      </div>
    </div>
     
     <div className='rounded-lg'>
        <button className='profile'> 프로필수정</button>
     </div>

    </div >


    { /*키워드*/ }
    <div className='pt-5 pl-5 pr-5 pb-7'>
        <div className='pb-3'>
        <div style={{ backgroundColor: 'rgb(239, 184, 44)',fontSize:'0.7rem',textAlign:'center',fontWeight:'bolder'}} className='w-20 p-0.5 rounded'>
            키워드
        </div>

        </div>
        <div className='keyword' >
            # {keyword1}
        </div>
        <div className='keyword'>
            # {keyword2}
        </div>
        <div className='keyword'>
            # {keyword3}
        </div>
    </div>
    
    { /*버튼*/ }
    <div className='border pr-5 pl-5 pt-7 pb-7'>
    <div className="flex pb-2">
    <button className="flex p-1 items-center">
    <img src="img/item_gray.png" alt="찜 목록" className="h-4 w-4 mr-4" />
    <span className="text-sm font-extrabold">찜 목록</span>
    </button>
    </div>

    <div className="flex pb-2">
    <button className="flex p-1 items-center">
    <img src="img/item_gray.png" alt="판매 목록" className="h-4 w-4 mr-4" />
    <span className="text-sm font-extrabold">판매목록</span>
    </button>
    </div>

    <div className="flex pb-2">
    <button className="flex p-1 items-center">
    <img src="img/item_gray.png" alt="구매 목록" className="h-4 w-4 mr-4" />
    <span className="text-sm font-extrabold">구매 목록</span>
    </button>
    </div>

    <div className="flex pb-2">
    <button className="flex p-1 items-center">
    <img src="img/item_gray.png" alt="참여 목록" className="h-4 w-4 mr-4" />
    <span className="text-sm font-extrabold">참여 목록</span>
    </button>
    </div>

    </div>

    {/*설정 버튼*/}

    <div className=' p-5'>
    <div className="flex pb-2">
    <button className="flex p-1 items-center">
    <img src="img/item_gray.png" alt="설정" className="h-4 w-4 mr-4" />
    <span className="text-sm font-extrabold">설정</span>
    </button>
    </div>
    </div>

    {/*로그아웃 버튼*/}
    <div className='pl-5'>
        <button style={{color:'gray',fontWeight:'bold',fontSize:'0.5rem'}} >로그아웃</button>
    </div>

    { /*네비게이션바*/ }
    <div className='bg-white fixed w-full h-16 bottom-0 border'>
                <div>
                    <button className='w-1/5 h-16 font-extrabold'> 홈 </button>
                    <button className='w-1/5 h-16 font-extrabold'> 컬렉션 </button>
                    <button className='w-1/5 h-16 font-extrabold text-2xl'> + </button>
                    <button className='w-1/5 h-16 font-extrabold'> 채팅 </button>
                    <button className='w-1/5 h-16 font-extrabold'> MY </button>
                </div>
    </div></>
   
    );
  
};

export default mypage;