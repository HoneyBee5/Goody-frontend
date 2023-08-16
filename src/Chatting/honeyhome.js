
import Button_honey from './Component/honeybtn';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const MySlider = ({ value, handleChange }) => {
  return (
    <div>

      <p className='font' style={{ fontSize: '40px', color: 'white' }}>꿀 {value}%</p>
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







const honeyhome = () => {

  
  useEffect(() => {
    const defaultOpenElement = document.getElementById('defaultOpen');
    if (defaultOpenElement) {
        defaultOpenElement.click();
    }
}, []);

const navigate = useNavigate();
const handleBack = () => {
    navigate(-1); // 이전 페이지로 이동하는 함수
};

    const [value, setValue] = useState(50);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    const divStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url('img/honeyhome_back.png')`,
        backgroundSize: 'cover', // 이미지가 div를 덮도록 설정
      };
    

  return (
    <>
      <div style={divStyle}>

        <div>
          <div className='flex justify-between items-center w-full z-50'>
            <p className='font-bold text-white p-5 ml-2 text-xl drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'> REVIEW</p>

            <div className='flex items-end mr-5' >
              <button onClick={handleBack}>
                <img src="img/Close.png" alt='닫기' width={'30px'} height={'30px'} className='' />
              </button>
            </div>
          </div>
        </div>



        <div className='pt-12 flex items-center justify-center flex-col '>
          <p className='font font-extrabold m-5' style={{ fontSize: '40px', color: 'white' }}>
            꿀단지를 채워주세요
          </p>

          <img className='pl-7' src='img/honeyhome.png' style={{ width: '20rem', height: '25rem' }}></img>

          <MySlider value={value} handleChange={handleChange} />

          <Link to='/reviewperfect'>
            <Button_honey>다음</Button_honey>
          </Link>
        </div>
      </div>

    </>
  );
};

export default honeyhome;
