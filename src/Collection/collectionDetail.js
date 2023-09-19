import React, { useState } from 'react';
import { ActionBarModify } from '../Component/ActionBarModity';
import './collectionDetail.css'; 

const Text = () => {
  const [isSliding, setIsSliding] = useState(false);
  const [isDescriptionVisible1, setIsDescriptionVisible1] = useState(true);
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [marginTop, setMarginTop] = useState(0); 

  const handleImageClick = () => {
    const newMarginTop = marginTop === 0 ? -225 : 0;
    setMarginTop(newMarginTop);
    
    setIsSliding(true);
    setIsDescriptionVisible1(isDescriptionVisible); 
    setIsDescriptionVisible(!isDescriptionVisible);
    
    setTimeout(() => {
      setIsSliding(false);
    }, 500); 
  }

  return (
    <div className={`justify-center flex ${isSliding ? 'transition duration-200 ease-in-out sliding' : ''}`}  
         style={{ marginTop: `${marginTop}px` }}>

      <img src='img/collectionText.png' className='absolute mt-[-4rem]' alt='collection' onClick={handleImageClick} />
      
      <p className='text-3xl mt-[-0.625rem] absolute'>
        <button onClick={handleImageClick}>NEWJEANS</button>
      </p>

      <div className='flex mt-[2.2rem] pr-[8.5rem]'>
        <img src='img\Calendar.png' className="absolute h-6 w-10" alt='calendar' />
        <div><p className='absolute ml-11'>2023.07.31</p></div>
      </div> 

      {isDescriptionVisible1 && (
        <p className='left-[1rem] mt-[5rem] absolute whitespace-pre-line text-[#888]' onClick={handleImageClick} >
          작성 내용 더보기...
        </p>
      )}

      {isDescriptionVisible && (
        <p className='left-[1.25rem] mt-[5.5rem] absolute whitespace-pre-line'>
          설명~~~~{'\n'}설명설명설명설명설명설명{'\n'}설명설명설명설명설명설설명설명
          {'\n'}{'\n'}설명설명설명설설명{'\n'}설명설명설명설명설명설명설설명설명명설명설명{'\n'}{'\n'}명설명설명{'\n'}
          설명설명설명설설명설명설명설설설명{'\n'}설명설명설명설명명설명   
          설명~~~~{'\n'}설명설명설명설명설명설명{'\n'}설명설명설명설명설명설설명설명
          {'\n'}{'\n'}설명설명설명설설명{'\n'}설명설명설명설명설명설명설설명설명명설명설명{'\n'}{'\n'}명설명설명{'\n'}
          설명설명설명설설명설명설명설설설명{'\n'}설명설명설명설명명설명
        </p>
      )}
    </div>
  );
}

function CollectionDetail() {
  return (
    <div>
      <ActionBarModify />
      <Text />
    </div>
  );
}


export default CollectionDetail;
