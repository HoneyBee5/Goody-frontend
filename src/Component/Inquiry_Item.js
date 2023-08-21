import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Inquiry_Item.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const Item = () => {

    const [liked, setLiked] = useState([false, false, false, false]);

 
    const handleLikeClick = (index) => {
        const updatedLiked = [...liked];
        updatedLiked[index] = !updatedLiked[index];
        setLiked(updatedLiked);
      };


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
                    <p className='font-bold'>상품이름</p>
                    <p className='font-bold'>가격</p>
                    <p className='font-bold'>판매시간</p>
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