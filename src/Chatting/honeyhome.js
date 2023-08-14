
import Button_honey from './Component/honeybtn';
import Slider from '@mui/material/Slider';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
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

const honeyhome = () => {
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
        zIndex: -1,
        backgroundImage: `url('img/honeyhome_back.png')`,
        backgroundSize: 'cover', // 이미지가 div를 덮도록 설정
      };
    

      return (
        <div style={divStyle}>
        <div className='flex justify-start items-center'>
  <div className='font fixed top-0 pl-2' style={{ color: 'white', fontSize: '50px' }}>
    REVIEW
  </div>
  
  <div className='ml-auto pt-6 pr-3'>
        
  <Link to="/review" >
    <button className='top-0 right-0'>
      <img src="img/Close.png" alt='닫기' width={'30px'} height={'30px'} />
    </button>
  </Link>
  </div>
  
</div>

          <div className='fixed inset-0 flex items-center justify-center flex-col'> 
                <p className='font font-extrabold m-5' style={{fontSize:'40px',color:'white'}}>
                    꿀단지를 채워주세요
                </p>

                <img className='pl-7' src='img/honeyhome.png' style={{width:'30rem' ,height:'25rem'}}></img>

                <MySlider value={value} handleChange={handleChange} />
        
            <Link to='/reviewperfect'>
              <Button_honey>다음</Button_honey>
            </Link>
          </div>
        
        </div>
      );
};

export default honeyhome;
