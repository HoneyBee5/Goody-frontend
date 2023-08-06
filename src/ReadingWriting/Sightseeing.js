import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from '../Component/Nav';
import { Link } from 'react-router-dom';

const Image = () => {
    
  return (
      <div className="PhotoText rounded-1g border border-black bg-black h-260" 
        style={{
          height: "300px",
        }}>
          <div style={{marginLeft:'370px', marginTop:20}}>
          <Link to="/Inquiry">
            <button>
              <img src="img\backClose.png" style={{ width: '20px', height: '20px'}}/>
            </button>
            </Link>
          </div>
      </div>
  );
};

const Profile = () => {
  return (
    <div>
      <div  
        style={{
          marginTop:30,
          height: "60px",
          display: 'flex', 
        }}>

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
    <div>

      {/*제목*/}
      <div 
        style={{
          marginLeft:10,
          display:'flex',
          position: 'fixed',
          width: '330px',
          height: '70px',
          marginTop:'20px'
        }}>
        <label style={{fontWeight:'bold', fontSize: 20}}>브루노마스 콘서트 동행 구해요.</label>

        {/*찜*/}
        <div className="fixed right-10 display:flex ">
          <img src="img\Like.png" className="fixed w-7 md:w-20 xl:w-30 right-10 display:flex"></img>
        </div>

        {/*찜개수*/}
        <div>
          <label style={{position:'fixed' ,fontSize: 20, marginTop:1, color:'orange', right:17}}>11</label>
        </div>
          </div>
          </div>

  );
};

const Tag = () => {
  return (
    <div className='mt-20 h-10 w-300 display-flex'>
      
      <div style={{
        width: '5.5rem',
        height: '30px',
        marginLeft: 10,
        borderRadius: '15px',
        border: '1px solid #ffd52b',
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
        border: '1px solid #ffd52b',
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
        border: '1px solid #ffd52b',
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
    <div style={{
      margin:10, 
      marginLeft:12,
      marginTop:20
      }}>
      <label style={{color:'GrayText'}}>게시글 내용...</label>
    </div>
  );
};

const TotNum = () => {
  return (

    <div>
      
    <div style={{
      display: 'flex',
      marginLeft:12,
      zIndex: 999,
      // bottom: 'calc(6vh - 1px + 140px)',
      justifyItems: 'center',
      marginTop:'180px'
      }}>
      <label>모집인원수: ?명</label>
    </div>
    </div>

  );
};

const Purchase = () => {
  return (
    <div>

      {/*라인*/}
      <div style={{ 
        marginTop:10,
        border: '1px solid #b4b4b4',
      }}>
      </div>
      
      <div className='h-20 md:border-0 ml-4 mt-2'style={{display: 'flex', alignItems: 'center' }}> 

        {/*찜버튼*/}
        <button  style={{ display: 'inline-block',marginTop: '-30px'}}>
          <img src="img\Like.png" className='w-11'></img>
        </button>
          
        {/*세로라인*/}
        <div style={{
          width:'3px', 
          height:'40px', 
          backgroundColor:'#E6E6E6', 
          marginTop:'-25px',
          marginLeft:'10px' }}>
        </div>  

        {/*가격*/}
        <div style={{
          marginLeft:'20px',
          marginTop: '-25px'}}>
          <label>000원</label>
        </div>

        {/*구매하기버튼*/}
        <div style={{display:'flex', marginLeft: 'auto',  marginRight: '10px'}}>
          <button style={{ 
            backgroundColor:'#575757',
            width:130,
            height:50,              
            borderRadius:12,
            marginTop: '-20px',
            marginBottom: 7,
            }}>
            <label style={{
              color:'white',
              fontWeight:'bolder', 
              fontSize:'20px'}}>
              구매하기
            </label>
          </button>
        </div>
          
      </div>

    </div>
  );
};

function Sightseeing() {
  return (

    <div>
      <Image /> {/*사진*/}
      <Profile /> {/*프로필,닉네임,등급*/}
      <Title /> {/*글제목*/}
      <Tag /> {/*카테고리*/}
      <Content /> {/*게시글내용*/}
      <TotNum /> {/*모집인원*/}
      <Purchase /> {/*찜, 가격, 구매하기*/}
      <Nav /> 
     </div>

  );
}

Sightseeing.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultValue: PropTypes.string,
  };
  
export default Sightseeing;