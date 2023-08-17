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
                <div className='absolute mt-2'>
                    <FontAwesomeIcon onClick={() => handleLikeClick(0)} icon={faHeartRegular} className={`absolute mt-10 ml-40 ${liked[0] ? 'text-color' : 'fa-heart-regular'}`} size="lg" />
                    <Link to="/sightseeing">
                    <button className='mt-8 ml-6'>
                    <img width={'170px'} src='img\item_gray.png' alt='아이템1'></img>
                    </button>
                    </Link>
                    <div className='mt-2 ml-7'>
                    <Link to="/sightseeing">
                    <button className="" style={{ textAlign: 'left' }}>
                    <p className='font-bold'>상품이름</p>
                    <p className='font-bold'>가격</p>
                    <p className='font-bold'>판매시간</p>
                    </button>
                    </Link>
                    </div>
                    <div className='border rounded-lg border-[#B4B4B4] px-2 inline-block ml-[7rem] mt-[0.5rem]'>거래상태</div>
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