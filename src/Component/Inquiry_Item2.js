import React, { useState, useEffect } from 'react';
import './Inquiry_Item2.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const Inquiry_Item2 = () => {
  const [items, setItems] = useState([]); // 상태
  const [liked, setLiked] = useState([false, false, false, false]);

  const handleLikeClick = (index) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = !updatedLiked[index];
    setLiked(updatedLiked);
  };

  const apiurl = "http://27.96.134.23:4001/goody/post/preview-info?postType=%ED%8C%90%EB%A7%A4%ED%95%B4%EC%9A%94&page=0";

  /*fetch api 연결*/ 
  useEffect(() => {
    fetch(apiurl)
      .then(response => {
        if (!response.ok) {
          throw new Error('네트워크 오류');
        }
        return response.json();
      })
      .then(data => {
        if (data.postPreviewInfo && data.postPreviewInfo.length > 0) {
          setItems(data.postPreviewInfo);
        }
      })
      .catch(error => {
        console.error('오류 발생:', error);
      }); //오류 처리
  }, []);

  return (
    <div className='flex'>
      {items.map((item, index) => (
        <div key={index} style={{width: '100%', height: '300px', marginTop: `${index * 140}px` }}>
          
          
          <div className='flex absolute mt-2'>
              
            <button className='mt-[2rem] ml-[1.4rem]'>
                  <img width={'110px'} src={`http://27.96.134.23:4001/goody/file/files/?file=${item.filePath.previewImg}`} alt={item.title} className='w-[6rem] h-[6rem] rounded-[1rem]'></img>
            </button>
            
            <FontAwesomeIcon onClick={() => handleLikeClick(index)} icon={faHeartRegular} className={`absolute mt-[2.5rem] ml-[5.5rem] ${liked[index] ? 'text-color' : 'fa-heart-regular'}`} size="lg" />
                
              <button className="ml-[1rem] mt-[2.1rem]" style={{ textAlign: 'left' }}>
                  <p className='font-bold text-[1.2rem]'>{item.title}</p>
                  <p className='font-bold mt-[rem]'>{item.price}원</p>
                  <p className='font-bold'>{item.postDate}</p>
                  <div className='border h-[1.5rem] rounded-[0.4rem] ml-[11.5rem] text-[0.85rem] border-[#B4B4B4] p-[0.08rem] px-[0.4rem] inline-block'>{item.transType}</div>
              </button>

          </div>


        </div>
        
      ))}
      
    </div>
  );
};

export { Inquiry_Item2 };