import React, { useState } from 'react';
import { Nav } from '../Component/Nav';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


{/*상단*/}
const Search = () => {

    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
      };


    return (
        <div className='flex mt-10 bg-yellow' style={{alignItems:'center'}}>

            {/*뒤로가기*/}
            <div style={{ display: 'flex'}}>
            <button>
                <img src='img\Back.png'
                style={{
                    width:'20px',
                    height:'25px',
                    marginLeft:'12px',
                }}></img>
            </button>
            </div>


            {/*검색입력창*/}
            <div 
                style={{
                    width: '350px',
                    height: '35px', 
                    marginLeft: '15px',
                    borderRadius: '5px',
                    display: 'flex',
                    alignItems: 'center',
                }}>

                  <img src='img\Bar.png' 
                    style={{  
                      height:'6px',
                      marginTop:'30px',
                      width: '310px',
                      marginLeft:'',
                      display: 'flex',
                      alignItems: 'center',}}
                  ></img>
               

                <input
                    type="text"
                    value={text}
                    maxLength={100}
                    onChange={handleChange}
                    placeholder='검색어를 입력해주세요.'
                    className=' outline-none border-0 focus:outline-none'
                    style={{ width:'300px', marginLeft:'-315px', marginTop:'-5px',border: 'none', padding: '0 8px', background: 'transparent' }}
                    />

                {/*돋보기*/}
                <div style={{marginLeft:'20px', marginBottom:'-7px'}}>
                    <button>
                        <img src="img/Search2.png" alt='검색' width={'30px'} height={'30px'} 
                            className=''/>
                    </button>                
                </div>
          
            </div>
        </div>
    )
}

{/*드롭*/}

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
    <div style={{ marginTop: '40px', marginLeft: '8px', position: 'relative' }}>
      
      <div
        style={{
          width: '7rem',
          height: isOpen ? `${items.length * 40 + 40}px` : '30px',
          marginLeft: 10,
          borderRadius: '15px',
          border: '1px solid #575757',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          transition: 'height 0.3s',
          position: 'absolute',
          zIndex: isOpen ? 1 : 0,
          backgroundColor:'#ffffff' //드롭박스 내부 투명/불투명
        }}
      >

        <button
          onClick={handleButtonClick}
          style={{

            width: '100%',
            textAlign: 'center',
            fontSize: isOpen ? '16px' : '14px',
            padding: '0 10px', 
          }}
        >
          {selectedItem ? selectedItem : label} ∨
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
                  marginTop:'10px',
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


{/*정렬*/}

const Arrange = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ['A 등급', 'B 등급', 'C 등급', 'D 등급'];

  const handleButtonClick = () => {
    setOpen((prevState) => !prevState);
    setSelectedOption(null); // Reset the selected option when the button is clicked
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


{/*상품정렬*/}
const SquareGrid = () => {
  const squares = [
    { id: 1, description: '상품 1' },
    { id: 2, description: '상품 2' },
    { id: 3, description: '상품 3' },
    { id: 4, description: '상품 4' },
    { id: 5, description: '상품 5' },
  ];

  /*사진이 한 줄에 2개 이상이면 다음 줄에 뜨게 해줌*/
  const chunk = (arr, size) => {
    return arr.reduce((acc, val, i) => {
      const idx = Math.floor(i / size);
      const page = acc[idx] || (acc[idx] = []);
      page.push(val);
      return acc;
    }, []);
  };

  /*한 줄에 상품 2개까지만 보이게 해둠*/
  const chunkedSquares = chunk(squares, 1);


  return (
    <div className="grid gap-3 grid-cols-2 ml-4 justify-center" style={{marginTop:'-45px'}}>
     
      {chunkedSquares.map((row, rowIndex) => (
        
        <div key={rowIndex} >
          <Link to="/Sightseeing">
          {row.map((square) => (
            <button key={square.id}
              className="m-2 mt-20 w-44 h-40 bg-[#e6e6e6] shadow-md"  
              style={{borderRadius:'10px', marginLeft:'-0px'}}
            >
              <img src='img\Calldib.png' style={{width:'30px', marginLeft:'135px', marginTop:'-70px'}}></img>
            </button>
          ))}
          </Link>
          <button>
          <div
            className='ml-2 mt-2 w-44 h-25'
            style={{ marginBottom:'-58px', borderRadius:'5px', marginLeft:'-0px'
            }}
          >

            {/*예시 입력값*/}
            <label className='whitespace-pre-line'>꿀벌오소리 벌꿀오소리...{'\n'}</label>
            <label className=''>20,000원</label>            
            <label className='fixe ml-11'>3시간전</label>
            <div className='w-16 ml-1 mt-3 border border-[#FFD52B]'>판매해요</div>
          </div>
          </button>
          </div>
      ))}
    </div>
  );
};

function Inquiry() {
  return (
    <div>
      <Search />

        {/*드롭박스*/}
        <div style={{ marginTop: '0px', marginLeft: '8px', height: '150px' }}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            {/* 첫 번째 드롭다운 */}
            <div style={{ marginLeft: '-5px', display: 'flex', alignItems: 'center'}}>
              <Dropdown label='카테고리' items={['Outerwear', 'Top']}/>
            </div>
            {/* 두 번째 드롭다운 */}
            <div style={{ marginLeft: '120px' }}>
              <Dropdown label='거래종류' items={['만나서', '택배']}/>
            </div>
            {/* 세 번째 드롭다운 */}
            <div style={{ marginLeft: '120px' }}>
              <Dropdown label='품절포함' items={['Yes', 'No']} />
            </div>
          </div>
        </div>

      <Arrange />
      <SquareGrid />
      <Nav />
    </div>

  );
}

Inquiry.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultValue: PropTypes.string,
  };
  

  export default Inquiry;