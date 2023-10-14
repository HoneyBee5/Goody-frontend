import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const ActionBarModify = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [imageIndex, setImageIndex] = useState(0); 
  const images = ['img/newjeans.png', 'img/newjeans.png', 'img/newjeans.png']; 

  const handleDdongButtonClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  const handleSlideChange = (selectedIndex) => {
    setImageIndex(selectedIndex);
  };


  return (
    <div className="w-full h-[577px] relative">
      
      <Carousel selectedItem={imageIndex} onChange={handleSlideChange} showIndicators={false} showThumbs={false} showStatus={false}>
        {images.map((imageUrl, idx) => (
          <div key={idx}>
            <img src={imageUrl} alt={`Slide ${idx}`} className="h-full object-contain" />
          </div>
        ))}
      </Carousel>

      <div className="indicator absolute mb-5 " style={{width: '100%'}}>
        {images.map((_, idx) => (
          <span key={idx} className={imageIndex === idx ? 'dot dot_active' : 'dot'}></span>
        ))}
      </div>

      <div style={{ position: 'absolute', right: 50, top: 28 }}>
        <Link to="/collection">
          <button>
            <img src="img\blackClose.png" style={{ width: '22px', height: '22px' }} />
          </button>
        </Link>
      </div>

      <div style={{ position: 'absolute', right: 20, top: 25 }}>
        <button onClick={handleDdongButtonClick}>
          <img src="img\blackDdong.png" style={{ width: '5px', height: '25px' }} />
        </button>
      </div>

      {showOptions && (
         <div>
         <img src='img/collectionText.png' className='absolute mt-[9rem]' alt='collection' />
         <div className="absolute mt-[12rem] space-x-4">
           <button className='flex'>
             {/* 수정 버튼 이미지 */}
             <img src='img/pen.png' className='w-[2.8rem] h-[3em] ml-[1.2rem]' alt='게시물 수정' />
             <Link to ="collectionWrite">

             <p className='text-[1.2rem] ml-[1rem] mt-[0.6rem]'>게시물 수정</p>
            </Link>
           </button>
          </div>
          <div className="absolute mt-[17rem] space-x-4">
          <button className='flex'>
             {/* 삭제 버튼 이미지 */}
             <img src='img/trash.png' className='w-[2.5rem] h-[2.5em] ml-[1rem]' alt='게시글 삭제' />
             <Link to ="collection">
             <p className='text-[1.2rem] ml-[1.2rem] mt-[0.2rem]'>휴지통으로 이동</p>
             </Link>
           </button>
         </div>
       </div>
      )}
    </div>
  );
};


export { ActionBarModify };
