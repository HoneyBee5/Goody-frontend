import React from 'react';
import { ActionBarDot } from '../Component/ActionBarDot';

const actionBarName = "컬렉션";

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
      <img src='img\Calendar.png' className="h-7 w-10" />
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
      <ActionBarDot actionBarName={actionBarName} />
      <Image />
      <Title />
      <Calendar />
      <Explain />
      {/* <ModifyBtn /> */}
    </div>

  );
}
  
export default CollectionDetail;