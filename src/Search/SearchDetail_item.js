import React, { useState} from 'react';
import './SearchDatail_Item.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const SearchDatail_Item = (props) => {

const { title, price, createdDate,thumbnailImg } = props;



    const [liked, setLiked] = useState([false, false, false, false]);


    const handleLikeClick = (index) => {
        const updatedLiked = [...liked];
        updatedLiked[index] = !updatedLiked[index];
        setLiked(updatedLiked);
      };



    return (
     <>

           
                <div width={'150px'} height={'150px'}>


                    <FontAwesomeIcon onClick={() => handleLikeClick(0)} icon={faHeartRegular} className={`absolute mt-[1.5rem] ml-[6.3rem] ${liked[0] ? 'text-color' : 'fa-heart-regular'}`} size="lg" />
                    <button style={{ width: '1px', height: '115px' }} className='mt-[1rem] ml-[1rem] border rounded-[1rem] flex items-center overflow-hidden'>
                    <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={thumbnailImg} alt='아이템' />
                    </button>
          
                    <div className='mt-2 ml-[1.6rem] text-[0.9rem]'>
             
                    <button style={{ textAlign: 'left' }}>

                    <p className='font-bold text-overflow'>{title}</p>
                    <p className='font-bold text-overflow'>{price}원</p>
                    <p className='font-bold text-overflow'>{createdDate}</p>

                    </button>
                
                    </div>
                    <div className='border rounded-[0.6rem] text-[0.85rem] border-[#B4B4B4] p-[0.08rem] px-[0.4rem] inline-block ml-[1.6rem] mt-[0.5rem]'>거래상태</div>
                </div>
    
   </>
    );
};

SearchDatail_Item.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  createdDate: PropTypes.string.isRequired,
  thumbnailImg: PropTypes.string.isRequired,
};


export { SearchDatail_Item };