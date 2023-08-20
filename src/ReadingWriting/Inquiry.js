import React, { useState } from 'react';
import { Nav } from '../Component/Nav';
import PropTypes from 'prop-types';
import { Inquiry_Item } from '../Component/Inquiry_Item';

{/*상단*/ }
const Search = () => {

  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };


  return (
    <div className='flex mt-10 bg-yellow' style={{ alignItems: 'center' }}>

      {/*뒤로가기*/}
      <div className='flex mt-[0.2rem] ml-[0.8rem]'>
        <button>
          <img src='img\yellow_left.png' className='w-[1.1rem] h-[1.9rem]'></img>
        </button>
      </div>


      {/*검색입력창*/}
      <div className='h-[2rem] w-[19rem] ml-[1.2rem] border-rounded-[0.5rem] flex items-center'>

        <img src='img\Bar.png' className='w-[23rem] h-[0.3rem] mt-[2rem] flex items-center'></img>


        <input
          type="text"
          value={text}
          maxLength={100}
          onChange={handleChange}
          placeholder='검색어를 입력해주세요.'
          className='transparent outline-none border-0 focus:outline-none w-[22rem] ml-[-19.5rem] mt-[-0.25rem]'
          style={{ border: 'none', padding: '0 8px'}}
        />
      </div>

        {/*돋보기*/}
        <div className='ml-[0.6rem] mb-[-0.8rem]'>
          <button>
            <img src="img/Search2.png" alt='검색' width={'30px'} height={'30px'}/>
          </button>
        </div>

    </div>
  )
}

{/*드롭*/ }
const Dropdown = ({ label, items }) => {
  const [isOpen, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonClick = () => {
    setOpen((prevState) => !prevState);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpen(false);
  };

  return (
    <div className='mt-10 ml-2'>

      <div
        style={{
          width: '7rem',
          height: isOpen ? `${items.length * 40 + 40}px` : '30px',
          marginLeft: 10,
          borderRadius: '10px',
          border: '1px solid #B4B4B4',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          transition: 'height 0.3s',
          position: 'absolute',
          zIndex: isOpen ? 1 : 0,
          backgroundColor: '#ffffff' 
        }}
      >

        <button
          className='flex'
          onClick={handleButtonClick}
          style={{
            textAlign: 'center',
            fontSize: isOpen ? '16px' : '14px',
            padding: '0 10px',
          }}>

          {selectedItem ? selectedItem : label} 
          <img src='img/category.png' 
               className='ml-[0.4rem] w-[1.2rem] h-[1rem]' 
               style={{ marginTop: isOpen ? '5px' : '2px',
               }}>
          </img>

        </button>

        {/*드롭 열렸을 떄*/}
        {isOpen && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '1px',
              backgroundColor: 'white',
              borderRadius: '5px',
            }}>

            {/*드롭박스 카테고리*/}
            {items.map((item) => (
              <button
                key={item}
                style={{
                  marginTop: '10px',
                  fontSize: '16px',
                  textAlign: 'center',
                }}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </button>
            ))}

          </div>

        )}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};


{/*정렬*/ }

const Arrange = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['A 등급', 'B 등급', 'C 등급', 'D 등급'];

  const handleButtonClick = () => {
    setOpen((prevState) => !prevState);
    setSelectedOption(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOpen(false);
  };

  return (
    <div style={{ display: 'flex', marginTop: '-40px', backgroundColor: '#ffffff', position: 'relative' }}>
      <img src='img\Arrange.png' style={{ width: '20px', position: 'absolute', right: 85 }} alt="정렬방법 이미지" onClick={handleButtonClick} />
      <button style={{ width: '30px' }} onClick={handleButtonClick}>
        <label style={{ position: 'absolute', right: 27, marginTop: '-2px', fontSize: '14px', fontWeight: 'bold' }}>
          {selectedOption ? selectedOption : '정렬방법'}
        </label>
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '30px',
            right: '20px',
            backgroundColor: '#ffffff',
            border: '1px solid #575757',
            borderRadius: '5px',
            padding: '5px',
            zIndex: 1,
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              style={{ cursor: 'pointer', padding: '5px' }}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {selectedOption && (
        <div style={{ marginLeft: '10px', fontSize: '14px', fontWeight: 'bold' }}>
        </div>
      )}
    </div>
  );
};

const Dp = () => {
 
  return (
    <div>

          <div className='flex'>
            <Inquiry_Item />  

            <div className='ml-[8rem]'>
              <Inquiry_Item />  
            </div>

            <div className='ml-[8rem]'>
              <Inquiry_Item />  
            </div>
            
          </div>

          <div className='flex mt-[-1rem]'>
            <Inquiry_Item />  

            <div className='ml-[8rem]'>
              <Inquiry_Item />  
            </div>
            
            <div className='ml-[8rem]'>
              <Inquiry_Item />  
            </div>
            
          </div>

          <div className='flex mt-[-1rem]'>
            <Inquiry_Item />  

            <div className='ml-[8rem]'>
              <Inquiry_Item />  
            </div>
            
          </div>


    </div>
  )
}

function Inquiry() {
  return (
    <div>
      <Search />

      {/*드롭박스*/} 
      <div className="pl-2 mt-[-0.5rem] h-[150px]" >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* 첫 번째 드롭다운 */}
          <div style={{ marginLeft: '-5px', display: 'flex', alignItems: 'center' }}>
            <Dropdown label='카테고리' items={['Outerwear', 'Top']} />
          </div>
          {/* 두 번째 드롭다운 */}
          <div style={{ marginLeft: '120px' }}>
            <Dropdown label='거래종류' items={['만나서', '택배']} />
          </div>
          {/* 세 번째 드롭다운 */}
          <div style={{ marginLeft: '120px' }}>
            <Dropdown label='품절포함' items={['Yes', 'No']} />
          </div>
        </div>
      </div>
      
      <Arrange />
      <Dp /> 
      <Nav />
    </div>

  );
}

export default Inquiry;