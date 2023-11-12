
import './font.css'
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import React, { useState} from 'react';

import { Link } from 'react-router-dom';


const MySlider = ({ value, handleChange }) => {
  return (
    <div>


        <p className='font' style={{fontSize:'40px',color:'white'}}>꿀 {value}%</p>
        <Slider
          aria-label="꿀집"
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}

        sx={{
          '& .MuiSlider-thumb': {
            backgroundColor: 'white',
            border: '2px solid #5F3300',
          },
          color: '#5F3300',
          height: '15px',
          width: '20rem',
        }}
      />

    </div>
  );
};

MySlider.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
};


const ReviewHoneyHome = () => {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    
    const handleReviewClick = async() => {


      fetch(`http://27.96.134.23:4001/goody/review/rate?reviewDocumentId=4ra8NSpdxUGMQfmMm00A&receiveId=${localStorage.getItem('userId')}&rate=${value}`, { //수정해야댐
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${localStorage.getItem('token')}`,
        },
      
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('서버에서 오류가 발생했습니다.');
          }
          console.log('데이터가 성공적으로 전송되었습니다.');
          return response.json(); // 서버에서의 응답을 JSON으로 파싱

        })
        .catch((error) => {
          if (error.response) {
            console.error('HTTP 상태 코드:', error.response.status);
          }
          
        });
    };


    const getHoneyImage = (value) => {
      if (value >= 100) {
        return 'img/honeybox11.png'; // 슬라이더 값이 10 이상일 때 다른 이미지
      }
      else if(value >= 90){
        return 'img/honeybox10.png';
      } 
      else if(value >= 80){
        return 'img/honeybox9.png';
      } 
      else if(value >= 70){
        return 'img/honeybox8.png';
      } 
      else if(value >= 60){
        return 'img/honeybox7.png';
      } 
      else if(value >= 50){
        return 'img/honeybox6.png';
      } 
      else if(value >= 40){
        return 'img/honeybox5.png';
      } 
      else if(value >= 30){
        return 'img/honeybox4.png';
      } 
      else if(value >= 20){
        return 'img/honeybox3.png';
      } 
      else if(value >= 10){
        return 'img/honeybox2.png';
      } 
      else {
        return 'img/honeybox1.png'; // 슬라이더 값이 10 미만일 때 기본 이미지
      }
    };
 
    const divStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        backgroundImage: `url('img/BackGround.png')`,
        backgroundSize: 'cover', // 이미지가 div를 덮도록 설정
      };
    

      return (
        <div style={divStyle}>
          <div className='font fixed top-0 pl-2' style={{color:'white',fontSize:'50px'}}>
            REVIEW
          </div>

          <div className='fixed inset-0 flex items-center justify-center flex-col'> 
                <p className='font font-extrabold m-5' style={{fontSize:'40px',color:'white'}}>
                    꿀단지를 채워주세요
                </p>

          <img src={getHoneyImage(value)}></img>

                <MySlider value={value} handleChange={handleChange} />
        
                <Link to={'/reviewperfect'}
                  state = {{ value}}
                >
                <button 
                onClick={handleReviewClick}
                className='fontsmall font-bold mt-2' 
                style={{ width:'25rem', height:'3rem',borderRadius: '10px 0 10px 10px',backgroundColor:'#5F3300', color: '#FFFFFF'}}> 
                다음
                </button>
            </Link>
          </div>
        
        </div>
      );
 
      }
export default ReviewHoneyHome;
