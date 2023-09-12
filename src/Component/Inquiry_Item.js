import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Inquiry_Item.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';


const Item = () => {
    const [item, setItem] = useState([]);//상태
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
              setItem(data.postPreviewInfo[0]);
          }
          })
          .catch(error => {
            console.error('오류 발생:', error);
          }); //오류 처리
      }, []);

    

    return (
        <div>
 
            {/*1줄*/}
            <div style={{ width: '100%', height:'300px' }}>
                <div className='absolute mt-1'>
                    <FontAwesomeIcon onClick={() => handleLikeClick(0)} icon={faHeartRegular} className={`absolute mt-[2.5rem] ml-[6.5rem] ${liked[0] ? 'text-color' : 'fa-heart-regular'}`} size="lg" />
                    <Link to="/sightseeing">
                    <button className='mt-[2rem] ml-[1.4rem]'>
                    <img width={'110px'} src='img\item_gray.png' alt='아이템1'></img>
                    </button>
                    </Link>
                    <div className='mt-2 ml-[1.6rem] text-[0.9rem]'>
                    <Link to="/sightseeing">
                    <button className="" style={{ textAlign: 'left' }}>
                   
                    <p className='font-bold'>{item.title}</p>
                    <p className='font-bold'>{item.price}원</p>
                    <p className='font-bold'>{item.postDate}</p>
              
                    </button>
                    </Link>
                    </div>
                    <div className='border rounded-[0.6rem] text-[0.85rem] border-[#B4B4B4] p-[0.08rem] px-[0.4rem] inline-block ml-[1.6rem] mt-[0.5rem]'>거래상태</div>
                </div>
            </div>
        </div>
    );
};

const Inquiry_Item = () => {
    return (
    <div className='flex'>
        <Item />
      </div>
    );
};

export { Inquiry_Item };