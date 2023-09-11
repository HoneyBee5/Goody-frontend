import React from 'react';
import { Nav } from '../Component/Nav';
import { Link } from 'react-router-dom';
import './Collection.css'


const CollectionItem = () => {

  return (
    <div className='inline-flex'>
      <Link to="/collectionDetail" >
        <button className='mt-5 ml-3.5 mr-2.5 col_item'>
          <div className='hexagon-container'>
            <img src='/img/newjeans.png' className='clipped-image drop-shadow-[0_2px_1px_rgba(220,166,19,100)]' alt="New Jeans" />
          </div>
            {/* <img src="/img/hexagon.png" alt='벌집' width={'110rem'} className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)]' /> */}
        </button>
      </Link></div>
  );
}

// 플로팅 버튼
const PlusBtn = () => {
  return (
    <Link to="/collectionWrite">
      <button className='right-3 bottom-24 absolute'>
        <img src="/img/collection_plusButton.png" alt='플러스' width={'70px'} className='' />
      </button>
    </Link>
  );
};

function Collection() {
  const back = {
    backgroundImage: "url('img/Collection_back.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    position: "relative",
  };

  return (
    <div style={back}>
      <div className='flex'>
        <div className='w-full flex justify-center mb-20'>
          <img className='absolute mt-7 left-7' src="img/SmallLogo.png" alt='구디' width={'150px'} />
        </div>
        <Link to="/Inspect">
          <button className='absolute right-14 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'><img src="img/Search.png" alt='검색' width={'30px'} height={'30px'} /></button>
        </Link>
        <button className='absolute right-0 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'><Link to="/categories"><img src="img/Hamburger.png" alt='햄버거' width={'30px'} height={'30px'} /></Link></button>
      </div>
      <CollectionItem />
      <PlusBtn />
      <Nav />
    </div>
  );
}

export default Collection;