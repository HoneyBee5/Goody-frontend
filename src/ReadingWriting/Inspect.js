import React, { useState } from 'react'; // useState를 import하여 상태를 관리합니다.
import { Nav } from '../Component/Nav';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Top = () => {

  const [text, setText] = useState(''); // text 변수와 handleChange 함수를 useState로 정의합니다.

  const handleChange = (event) => {
    setText(event.target.value); // input 요소의 값을 변경할 때마다 text 변수를 업데이트합니다.
  };

 
  return (
    <div>

    <div className='mt-14 mr-5 flex justify-end'>
          <button>
            <img src='img\close.png' style={{width: 15}} alt='Close' />
          </button>
      </div>
     
     <div style={{marginTop:'50px', marginLeft:'20px'}}>
      <label style={{fontSize:'25px'}}>무엇을 찾으시나요 ?</label>
     </div>


      <div className='h-30 ml-5 mt-16 flex flex-grow'>
        <input
          type="text"
          value={text}
          maxLength={100}
          onChange={handleChange}
          placeholder='검색어를 입력해주세요.'
          className="w-full mr-15 outline-none border-0 focus:outline-none"
        />
        <div style={{marginRight:'30px'}}>
          <Link to="/Inquiry">
            <button>
              <img src="img/Search2.png" alt='검색' width={'32px'} height={'32px'} className="ml-2"></img>
            </button>
          </Link>
        </div>
      </div>

      <div style={{}}> 
          <img src="img/Bar.png" style={{marginLeft:'20px', width:'370px'}}></img>
      </div>

      <div style={{marginTop:'40px'}}>
        <img src="img/Top10.png" style={{width:'300px'}}></img>
      </div>

      <div style={{marginTop:'60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button>
          <img src='img/BottomSearch.png' style={{width:'60px'}}></img>
        </button>
      </div>

    </div>
  )
}

function Inspect() {
    return (
  
        <div>
           <Top />
           <Nav />
        </div>
  
    );
  }

  Inspect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultValue: PropTypes.string,
  };
  
  
  export default Inspect;