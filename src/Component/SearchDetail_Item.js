import React, { useState, useEffect } from 'react';
import './SearchDetail_Item.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const SearchDetail_Item = () => {
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

  const itemsPerRow = 3; // 한 줄에 표시할 아이템 수
  const itemRows = [];

  for (let i = 0; i < items.length; i += itemsPerRow) {
    const itemRow = items.slice(i, i + itemsPerRow);
    itemRows.push(
      <div className='flex' key={i}>
        {itemRow.map((item, index) => (
          <div key={index} className='w-[8rem] p-[0.2rem] mt-[2.2rem]'>
             
              <button>
                <Link to='/Sightseeing'>
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
    <div>
      {itemRows}
    </div>
  );
};

export { SearchDetail_Item };
