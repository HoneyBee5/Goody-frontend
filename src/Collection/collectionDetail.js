import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


const ActionBar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleDdongButtonClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const handleOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
    setShowOptions(false); // Close the options after selecting an option
  };

  return (
    <div className="w-full h-14 relative">
      <img src="img\ActionBar.png" className="absolute" />

      <div style={{ position: 'absolute', right:65, top:25 }}>
        <Link to="/collection">
          <button>
            <img src="img\backClose.png" style={{ width: '25px', height: '25px' }} />
          </button>
        </Link>
      </div>

      <div style={{ position: 'absolute', right: 35, top: 23 }}>
        <button onClick={handleDdongButtonClick}>
          <img src="img\Ddong.png" style={{ width: '7px', height: '30px' }} />
        </button>

          {showOptions && (
          <div style={{ position: 'absolute', right:20, top: -3, backgroundColor: '#ffffff', border: '1px solid #575757', borderRadius: '5px', padding: '5px', zIndex: 1 }}>
            <div style={{display: 'block' }} onClick={() => handleOptionClick('수정')}>
              <Link to="/collectionWrite">
                <button style={{width:'35px'}}>수정</button>
              </Link>
            </div>
            
            <div style={{ display: 'block', marginTop: '5px' }} onClick={() => handleOptionClick('삭제')}>
              <Link to="/collection">
                <button>삭제</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Image = () => {
  return (
      <div className="PhotoText rounded-1g border border-black bg-black h-260" 
        style={{
          height: "300px"
        }}>사진
      </div>
  );
};


{/*제목*/}
const Title = () => {
  return (
    <div className='mt-5 ml-3'>
      <label style={{
        fontSize:'25px',
        fontWeight:'bold',
        color:'#575757'
        }}>컬렉션 No.1
      </label>
    </div>
  );
};


const Calendar = () => {
  return (
    <div className='fixed right-24 mt-3 display:flex'>

      {/*달력img*/}
      <div className="display:flex mr-2">
        <img src='img\Calendar.png' 
          style={{
          width:'40px',
          height:'25px',
        }}></img>
      </div>

      {/*날짜*/}
      <div>
       <label className=''
          style={{ 
            position: 'fixed',
            marginLeft: '40px', 
            marginTop:'-24px' }}>
            2023.07.31
        </label>
      </div>
  
    </div>
  );
};

const Explain = () => {
  return (
    <div style={{
      width: '100%',
      height: '320px', 
      marginTop:90,
      // border: '1px solid #b4b4b4',
      display: 'block', 
      marginLeft:'12px'
    }}>

      <label className='whitespace-pre-line'>
      설명~~~~{'\n'}설명설명설명설명설명설명{'\n'}설명설명설명
      {'\n'}{'\n'}설명설명설명설설명{'\n'}설명설명설명설명{'\n'}{'\n'}{'\n'}
      설명설명설명설설명설명설{'\n'}설명설명설명설명설명설명설설명명설명설
      </label>
    </div>
  );
};


// const ModifyBtn = () => {
//   const navigate = useNavigate();
//   const navigateToPurchase = () => {
//     navigate("/collectionWrite");
//   };

//   return (
//     <div style={{ marginTop:'30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <button onClick={navigateToPurchase}>
//             <img src='img\modifyBtn.png' 
//             style={{
//               width:180,
//               height:40,
//             }}>
//             </img>
//         </button>
//     </div>  
//   );
// };


function CollectionDetail() {
  return (

    <div>
      <ActionBar />
      <Image />
      <Title />
      <Calendar />
      <Explain />
      {/* <ModifyBtn /> */}
    </div>

  );
}

CollectionDetail.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultValue: PropTypes.string,
  };
  
export default CollectionDetail;