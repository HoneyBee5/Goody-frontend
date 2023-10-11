import React, { useState, useEffect } from 'react';
import './SearchDetail_Item.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';


const SearchDetail_Item = () => {
  const [liked, setLiked] = useState([false, false, false, false]);

  const handleLikeClick = (index) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = !updatedLiked[index];
    setLiked(updatedLiked);
  };

  const [items, setItems] = useState([]);


  useEffect(() => {
    
    fetch(`http://27.96.134.23:4001/goody/contents/search?category=0`, 
    {
      method: 'GET',
      redirect: 'follow',
      headers: {
        Accept: "application/json",
      },
    })
    .then(res => {
       res.json();
    })
    .then(data => {
      setItems(data) 
    });

  },);
    

  const itemsPerRow = 3;
  const itemRows = [];

  for (let i = 0; i < items.length; i += itemsPerRow) {
    const itemRow = items.slice(i, i + itemsPerRow);
    itemRows.push(
      <div className='flex' key={i}>
        {itemRow.map((item, index) => (
          <div key={index} className='w-[8rem] p-[0.2rem] mt-[2.2rem]'>
             
              <button>
                <Link to='/SearchDetail'>
                <img
                  width={'110px'}
                  src={`http://27.96.134.23:4001/goody/file/files/?file=${item.filePath.previewImg}`}
                  alt={item.title}
                  className='ml-[1.15rem] w-[7rem] h-[7rem] rounded-[0.7rem]'
                />
                </Link>
              </button>

              <FontAwesomeIcon
                onClick={() => handleLikeClick(index)}
                icon={faHeartRegular}
                className={`absolute ml-[-1.2rem] mt-[0.4rem] ${liked[index] ? 'text-color' : 'fa-heart-regular'}`} size='lg'
              />

              <Link to="/Sightseeing">
              <button className='ml-[1.15rem] text-[0.9rem]' style={{ textAlign: 'left' }}>
                <p className='font-bold'>{item.title}</p>
                <p className='font-bold'>{item.price}원</p>
                <p className='font-bold text-[0.8rem]'>{item.postDate}</p>
                <div className='border h-[1.5rem] rounded-[0.4rem] mt-[1rem] text-[0.85rem] border-[#B4B4B4] p-[0.06rem] px-[0.2rem] inline-block'> {item.transType} </div>
              </button>
              </Link>

          </div>
        ))}
      </div>
    );
  }



  return (
    <>
    <div>
      {items}
    </div>
    </>
  );
};

export { SearchDetail_Item };