import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './Sightseeing.css';


function Sightseeing( ) {
  const [sightseeingData, setSightseeingData] = useState(null);
  const {documentId} = useParams();
  
  const token = localStorage.getItem('token');
  

  useEffect(() => {
    const fetchDataForSightseeing = async () => {
      try {
        const headers = {
          Authorization: `${token}`,
        };

        const response = await fetch(`http://27.96.134.23:4001/goody/contents/detail?documentId=${documentId}`,
        {
          method: 'GET',
          headers,
        });

        if (response.ok) {
          const data = await response.json();
          setSightseeingData(data);
          // 데이터를 사용하여 필요한 렌더링 또는 처리 작업 수행
        } else {
          console.error('API에서 데이터를 가져오는 중 오류 발생:', response);
        }
      } catch (error) {
        console.error('API에서 데이터를 가져오는 중 오류 발생:', error);
    
      }
    };

    // fetchDataForSightseeing 함수를 호출하여 데이터 가져오기
    fetchDataForSightseeing();
  }, [documentId]);


const Image = () => {
  if (!sightseeingData || !sightseeingData.imgPath) {
    return null; // 이미지 데이터가 없을 경우 컴포넌트를 렌더링하지 않음
  }

  return (
    <div className="PhotoText rounded-1g border  h-260"style={{ height: "300px",
     backgroundImage: `url(${sightseeingData.imgPath})` }}>
      <div style={{ marginLeft: '370px', marginTop: 20 }}>

        
        <Link to="/Inquiry">
          <button>
            <img referrerPolicy="no-referrer" src="../img/close.png" alt='닫기' className='w-[1.9rem] h-[1.9rem]' />
          </button>
        </Link>
      </div>
    </div>
  );
};


const Profile = (  ) => {
  if (!sightseeingData) {
    // 데이터가 없을 때의 처리
    return null;
  }

 {
    return (
      <div>
        <div className='ml-[0.5rem] mt-[2rem] h-18 flex'>
          {/*프로필사진*/}
          <img src='' style={{ width: 60, marginLeft: 5 }} alt="프로필 사진" />
          
          {/*닉네임 텍스트*/}
          <div style={{ marginTop: 5, marginLeft: 10 }}>
            <label style={{ fontWeight: 'bold' }}>유댕</label>
          </div>
          
          {/*등급 텍스트*/}
          <div style={{ marginTop: 30, marginLeft: -47 }}>
            <label style={{ fontWeight: 'normal' }}></label>
          </div>
        </div>
      </div>
    );
  } 
};
const Title = () => {
  if (!sightseeingData) {
    // 데이터가 없을 때의 처리
    return null;
  }
  return (
    <div className='flex ml-[0.5rem]'>

      {/*제목*/}
      <div 
        style={{
          marginLeft:12,
          display:'flex',
          width: '350px',
          height: '70px',
          marginTop:'25px',
        }}>

        <label style={{fontWeight:'bold', fontSize: 20}}>{sightseeingData.grade}</label>
        </div>

        {/*찜*/}
        <div style={{alignItems:'center', display:'flex', marginTop:'-18px', marginRight:'10px'}}>
          <img src="../img\Like.png" className="w-7 md:w-20 xl:w-30 right-10"></img>
              <label style={{ fontSize: 19, color: 'orange', right: 17,marginTop:5}}>11</label>
        </div>
      </div>
  );
};

const Tag = () => {
  if (!sightseeingData) {
    // 데이터가 없을 때의 처리
    return null;
  }
  return (
    <div className='mt-1 ml-[0.5rem] h-10 w-300 display-flex'>
      
      <div style={{
        width: '5.5rem',
        height: '30px',
        marginLeft: 10,
        borderRadius: '15px',
        border: '1px solid #b4b4b4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

      }}>
        <label>{sightseeingData.category}</label>
      </div>
      
      <div style={{
        width: '5.5rem',
        height: '30px',
        marginLeft: 110,
        marginTop: -30,
        borderRadius: '15px',
        border: '1px solid #b4b4b4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <label>{sightseeingData.transType}</label>
      </div>
     
      <div style={{
        width: '2.5rem',
        height: '30px',
        marginLeft: 210,
        marginTop: -30,
        borderRadius: '12px',
        border: '1px solid #b4b4b4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <label>{sightseeingData.numOfpeople}명</label>
      </div>
  
    </div>
  );
};

const Content = () => {
  if (!sightseeingData) {
    // 데이터가 없을 때의 처리
    return null;
  }
  return (
    <div className='m-10 mt-[1.5rem] ml-[1rem]'>
      <label className='ml-[0.5rem] text-[#b4b4b4]'>{sightseeingData.explain}</label>
    </div>
  );
};

const TotNum = () => {
  if (!sightseeingData) {
    // 데이터가 없을 때의 처리
    return null;
  }
  return (

    <div>
      
    <div className='flex ml-[1.5rem] mt-[14rem] ' style={{zIndex: 999}}>
      <label>모집인원수: {sightseeingData.people}명</label>
    </div>
    </div>

  );
};

const Purchase = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };
  if (!sightseeingData) {
    // 데이터가 없을 때의 처리
    return null;
  }
  return (
    <div style={{
      position: 'fixed',
      bottom: -15,
      width: '100%',
      backgroundColor: 'white',
    }}>

      <div className='flex justify-center bg-[#f8f8f8] h-20 bottom-0 p-2 shadow-inner'> 

        {/*찜버튼*/}
        <FontAwesomeIcon icon={faHeartSolid} className={`heart-icon ${liked ? 'text-color' : ''} ml-[1rem] mt-[0.9rem]`} size="xl" onClick={handleLikeClick}/>
            
        {/*세로라인*/}
        <div className='w-[0.25rem] h-[2.5rem] bg-[#E6E6E6] mt-[0.4rem] ml-[1rem]'></div>  

        {/*가격*/}
        <div className='ml-[1rem] mt-[0.9rem]'>
          <label>{sightseeingData.price}원</label>
        </div>

        {/*구매하기버튼*/}
        <div className='flex ml-auto mr-[0.5rem]' >
          <Link to="/chatting">
          <button className='bg-[#575757] w-[8.5rem] h-[3.2rem] right-0 mt-[0rem] border rounded-xl'>
            <label style={{
              color:'white',
              fontWeight:'bolder', 
              fontSize:'20px'}}>
              구매하기
            </label>
          </button>
          </Link>
        </div>
          
      </div>

    </div>
  );
};


  return (

    <div>
      <Image /> 
      <Profile /> 
      <Title />
      <Tag /> 
      <Content /> 
      <TotNum /> 
      <Purchase /> 
     </div>

  );
}
  
export default Sightseeing;