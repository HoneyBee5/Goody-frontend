import React, { useState, useEffect } from 'react';
import './Categories.css';
import { useNavigate } from 'react-router-dom';



const Categories = () => {
  const [activeTab, setActiveTab] = useState('영화');

  const openCity = (cityName) => {
    setActiveTab(cityName);
  };

  useEffect(() => {
    document.getElementById('defaultOpen').click();
  }, []);


  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동하는 함수
  };
  return (

    <div>
      <div className='flex'>
        <img src="img/categories_bar.png" className='relative' />
        <button className='absolute right-0 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]' onClick={handleBack}>
          <img src="img/Close.png" alt='닫기' width={'30px'} height={'30px'} />
        </button>
      </div>

      <div className="tab">
        <button className={activeTab === '영화' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('영화')} id="defaultOpen"> 영화</button>
        <button className={activeTab === '게임' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('게임')}> 게임</button>
        <button className={activeTab === '아이돌' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('아이돌')}>아이돌</button>
        <button className={activeTab === '캐릭터' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('캐릭터')}> 캐릭터</button>
        <button className={activeTab === '스포츠' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('스포츠')}> 스포츠</button>
        <button className={activeTab === '만화' ? 'tablinks active' : 'tablinks'} onClick={() => openCity('만화')}> 만화</button>
      </div>

      <div id="영화" className={activeTab === '영화' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">남자 배우</li>
            <li className='my-5'><a href="#">· 남자 중년 배우</a></li>
            <li className='my-5'><a href="#">· 남자 청년 배우</a></li>
            <li className="mb-8"><a href="#">· 남자 아역 배우</a></li>
            <li className="font-bold">여자 배우</li>
            <li className='my-5'><a href="#">· 여자 중년 배우</a></li>
            <li className='my-5'><a href="#">· 여자 청년 배우</a></li>
            <li className="mb-4"><a href="#">· 여자 아역 배우</a></li>
          </ul>
        </div></div>


      <div id="아이돌" className={activeTab === '아이돌' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">아이돌</li>
            <li className='my-5'><a href="#">· 남자 아이돌</a></li>
            <li className='my-5'><a href="#">· 여자 아이돌</a></li>
            <li className="my-5"><a href="#">· 남자 솔로 가수</a></li>
            <li className="mb-8"><a href="#">· 여자 솔로 가수</a></li>
          </ul>
        </div> </div>

      <div id="게임" className={activeTab === '게임' ? 'tabcontent' : 'tabcontent hidden'}>
        <ul>
          <li className="font-bold">게임</li>
          <li className='my-5'><a href="#">· 롤플레잉 게임 RPG</a></li>
          <li className='my-5'><a href="#">· 시뮬레이션 게임 SLG</a></li>
          <li className="my-5"><a href="#">· 액션 게임 ATG</a></li>
          <li className="my-5"><a href="#">· 리듬 게임</a></li>
          <li className="my-5"><a href="#">· 연애 게임</a></li>
          <li className='mb-8'><a href="#">· 스포츠 게임</a></li>
        </ul>
      </div>

      <div id="스포츠" className={activeTab === '스포츠' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">스포츠</li>
            <li className='my-5'><a href="#">· 육상 경기 종목 </a></li>
            <li className='my-5'><a href="#">· 구기 종목</a></li>
            <li className="my-5"><a href="#">· 라켓 스포츠</a></li>
            <li className="my-5"><a href="#">· 수상 스포츠</a></li>
            <li className='my-5'><a href="#">· 기계 체조</a></li>
            <li className='mb-8'><a href="#">· 격기 종목</a></li>
          </ul>
        </div>
      </div>

      <div id="만화" className={activeTab === '만화' ? 'tabcontent' : 'tabcontent hidden'}>
        <div className="">
          <ul>
            <li className="font-bold">만화</li>
            <li className='my-5'><a href="#">· 웹툰 </a></li>
            <li className='my-5'><a href="#">· 애니메이션</a></li>
            <li className="my-5"><a href="#">· 만화책</a></li>
          </ul>
        </div>
      </div>

      <div id="캐릭터" className={activeTab === '캐릭터' ? 'tabcontent' : 'tabcontent hidden'}>
        <ul>
          <li className="font-bold">캐릭터</li>
          <li className='my-5'><a href="#">· 카카오</a></li>
          <li className='my-5'><a href="#">· 라인</a></li>
          <li className="my-5"><a href="#">· 산리오</a></li>
          <li className="my-5"><a href="#">· 기타</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Categories;


