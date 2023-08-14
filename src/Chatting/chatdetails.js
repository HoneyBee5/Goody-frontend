
import React, { useState,useEffect} from 'react';
import Plus_btn from './Component/plus_btn';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import "./transition.css";
import Chat_btn1 from './Component/chat_profile_btn';
import Chat_btn2 from './Component/chat_profile_btn2';


// 액션바 이름
const actionBarName = "채팅";

  



const chatdetails = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredY, setIsHoveredY] = useState(false);

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
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const handleClick = () => {
    setIsHovered(!isHovered);
  };


  const handleMouseEnterY = () => {
    setIsHoveredY(true);
  };

  const handleMouseLeaveY = () => {
    setIsHoveredY(false);
  };
  
  const handleClickY = () => {
    setIsHoveredY(!isHoveredY);
  };
  const chat_id = '이름';
  const chat_explain = '안녕하세요';
 

  return (
    <>
    

    <div className="w-full h-16 relative">
            <img src='img/ActionBar.png' className='absolute'></img>
            <div className='flex justify-between items-center h-full'>
                <p id="actionBar_name" className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)] font-bold text-white p-6 ml-2 text-xl absolute '>리뷰</p>
            </div>

            <div className="pb-5 absolute flex justify-center items-center w-full h-full " 
                     onMouseEnter={ handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick}>

    
                <CSSTransition
              in={isHovered}
              timeout={300}
              classNames="transition"
                >
                {isHovered ? <Chat_btn2 /> : <Chat_btn1/>}
                </CSSTransition>

    
                 </div>

            <div>
                <button className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)] absolute top-0 right-4 h-full' onClick={handleBack}>
                    <img src="img/Close.png" alt='닫기' width={'30px'} height={'30px'} />
                </button>
            </div>

        

        </div>
 


    <div className='pt-16 w-full' style={{height:'45rem'}}>
      
      <div style={{ fontSize: '1.1rem' }} className="font-bold flex justify-start pl-4">
              {chat_id}
      </div>

     
     <div className='pl-3 pb-3'>
      <div style={{ fontSize: '1rem',height:'3rem', width:'16rem'}} 
      className=
      "flex justify-start text-white rounded-full border bg-gray-200 p-2 m-1 items-center bg-gray-400 rounded-lg w-100 h-100 shadow-md " >
              {chat_explain}

      </div>
      
      </div>
    
         
      <div className='p-1 flex justify-end '>
      <div style={{ fontSize: '1rem',height:'3rem', width:'16rem'}} 
      className="flex justify-start text-black rounded-full border bg-yellow-100 p-2 m-1  items-center bg-gray-400 rounded-lg w-100 h-100 shadow-md" >
              {chat_explain}

      </div>
      
      </div>
      <div className='p-1 flex justify-end '>
      <div style={{ fontSize: '1rem',height:'3rem', width:'16rem'}} 
      className="flex justify-start text-black rounded-full border bg-yellow-100 p-2 m-1 items-center bg-gray-400 rounded-lg w-100 h-100 shadow-md" >
              {chat_explain}

      </div>
      </div>
      
    </div>






      <div>
      <div className='w-full h-5 '>
        { isHoveredY && <Plus_btn/> }
      </div>

      <div className="flex justify-center ">
      <div style={{ height: '3rem', width: '25rem' }} className="items-center flex fixed justify-between bottom-3 p-3 rounded-full bg-gray-200">
        {/* 박스 */}


          {/* 버튼 */}
          <div>
            
      
            <div  onMouseEnter={ handleMouseEnterY} onMouseLeave={handleMouseLeaveY} onClick={handleClickY}>

            <CSSTransition
              in={isHoveredY}
              timeout={300}
              classNames="mount"
              >
              {isHoveredY ? <button className="font-bold text-xl text-black flex justify-start  " ><img src='./img/Plus.png' className='w-5'/></button> : 
               <button className="font-bold text-xl text-black flex justify-start  " ><img src='./img/Plus.png' className='w-5'/></button>}
              </CSSTransition>
    
            </div>
   
            
          </div>

            <textarea className='w-72 h-10 bg-gray-200 p-2'></textarea>
    
          <button className='flex justify-end'><img className='w-9' src="./img/Send.png"/></button>
      </div>
    </div>
  </div>
    </>
  );
};


export default chatdetails;
