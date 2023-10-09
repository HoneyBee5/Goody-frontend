// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const ActionBarModify = () => {
//   const [showOptions, setShowOptions] = useState(false);
//   const [imageIndex, setImageIndex] = useState(0); 
//   const images = ['img/newjeans.png', 'img/newjeans.png', 'img/newjeans.png']; 

//   const handleDdongButtonClick = () => {
//     setShowOptions((prevShowOptions) => !prevShowOptions);
//   };

//   const handleOptionClick = (option) => {
//     console.log(`Selected option: ${option}`);
//     setShowOptions(false);
//   };

//   const handleSlideChange = (selectedIndex) => {
//     setImageIndex(selectedIndex);
//   };


//   return (
//     <div className="w-full h-[577px] relative">
      
//       <Carousel selectedItem={imageIndex} onChange={handleSlideChange} showIndicators={false} showThumbs={false} showStatus={false}>
//         {images.map((imageUrl, idx) => (
//           <div key={idx}>
//             <img src={imageUrl} alt={`Slide ${idx}`} className="h-full object-contain" />
//           </div>
//         ))}
//       </Carousel>

//       <div className="indicator absolute mb-5 " style={{width: '100%'}}>
//         {images.map((_, idx) => (
//           <span key={idx} className={imageIndex === idx ? 'dot dot_active' : 'dot'}></span>
//         ))}
//       </div>

//       <div style={{ position: 'absolute', right: 50, top: 28 }}>
//         <Link to="/collection">
//           <button>
//             <img src="img\blackClose.png" style={{ width: '22px', height: '22px' }} />
//           </button>
//         </Link>
//       </div>

//       <div style={{ position: 'absolute', right: 20, top: 25 }}>
//         <button onClick={handleDdongButtonClick}>
//           <img src="img\blackDdong.png" style={{ width: '5px', height: '25px' }} />
//         </button>
//         {showOptions && (
//           <div
//             style={{
//               position: 'absolute',
//               right: 20,
//               top: -3,
//               backgroundColor: '#ffffff',
//               border: '1px solid #575757',
//               borderRadius: '5px',
//               padding: '5px',
//               zIndex: 1,
//             }}
//           >
//             <div style={{ display: 'block' }} onClick={() => handleOptionClick('수정')}>
//               <Link to="/collectionWrite2">
//                 <button style={{ width: '35px' }}>수정</button>
//               </Link>
//             </div>
//             <div style={{ display: 'block', marginTop: '5px' }} onClick={() => handleOptionClick('삭제')}>
//               <Link to="/collection">
//                 <button>삭제</button>
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export { ActionBarModify };
