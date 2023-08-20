import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import './Sightseeing.css'; 


const Image = () => {
    
  return (
      <div className="PhotoText rounded-1g border border-black bg-black h-260" 
        style={{
          height: "300px",
        }}>
          <div style={{marginLeft:'370px', marginTop:20}}>
          <Link to="/Inquiry">
            <button>
              <img src="img/Close.png" alt='닫기'  className='w-[1.9rem] h-[1.9rem]'/>
            </button>
            </Link>
          </div>
      </div>
  );
};

const Profile = () => {
  return (
    <div>
      <div className='ml-[0.5rem] mt-[2rem] h-18 flex'>

          {/*프로필사진*/}
          <img src='img\Profile.png' 
            style={{width:60, marginLeft:5}}>  
          </img>

          {/*닉네임 텍스트*/}
          <div style={{marginTop:5, marginLeft:10,}}>
            <label style={{fontWeight:'bold'}}>닉네임</label>
          </div>
          
          {/*등급 텍스트*/}
          <div style={{marginTop:30, marginLeft:-47}}>
            <label style={{fontWeight:'normal'}} >등급</label>
          </div>
          
      </div>
    </div>
  );
};

const Title = () => {
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

        <label style={{fontWeight:'bold', fontSize: 20}}>브루노마스 콘서트 동행 구해요</label>
        </div>

        {/*찜*/}
        <div style={{alignItems:'center', display:'flex', marginTop:'-18px', marginRight:'10px'}}>
          <img src="img\Like.png" className="w-7 md:w-20 xl:w-30 right-10"></img>
              <label style={{ fontSize: 19, color: 'orange', right: 17,marginTop:5}}>11</label>
        </div>
      </div>
  );
};

const Tag = () => {
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
        <label>해외가수</label>
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
        <label>같이해요</label>
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
        <label>?명</label>
      </div>
  
    </div>
  );
};

const Content = () => {
  return (
    <div className='m-10 mt-[1.5rem] ml-[1rem]'>
      <label className='ml-[0.5rem] text-[#b4b4b4]'>게시글 내용...</label>
    </div>
  );
};

const TotNum = () => {
  return (

    <div>
      
    <div className='flex ml-[1.5rem] mt-[14rem] ' style={{zIndex: 999}}>
      <label>모집인원수: ?명</label>
    </div>
    </div>

  );
};

const Purchase = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

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
          <label>000원</label>
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

function Sightseeing() {
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