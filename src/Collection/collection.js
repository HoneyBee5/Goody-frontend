import React from 'react';
import { Nav } from '../Component/Nav';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SquareGrid = () => {
  const squares = [
    { id: 1, color: 'white' },
    { id: 2, color: 'white' },
    { id: 3, color: 'white' },
    { id: 4, color: 'white' },
    { id: 5, color: 'white' },
    { id: 6, color: 'white' },
    { id: 7, color: 'white' },
    { id: 8, color: 'white' },
    { id: 9, color: 'white' },
    { id: 10, color: 'white' },
    { id: 11, color: 'white' },
  ];

  // Calculate the clip-path for hexagon-like shape (horizontal top and bottom edges)
  const hexagonClipPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  /*사진이 한 줄에 3개 이상이면 다음 줄에 뜨게 해줌*/
  const chunk = (arr, size) => {
    return arr.reduce((acc, val, i) => {
      const idx = Math.floor(i / size);
      const page = acc[idx] || (acc[idx] = []);
      page.push(val);
      return acc;
    }, []);
  };

  /*현재는 한 줄에 사진 3개까지만 보이게 해둠*/
  const chunkedSquares = chunk(squares, 1);

  return (
    <div className="grid gap-3 grid-cols-3 ml-4 justify-center mt-20">
      {chunkedSquares.map((row, rowIndex) => (
        <div key={rowIndex} className="">
          {row.map((square) => (
            <Link to="/collectionDetail2" className="link-with-animation" key={square.id}>
              <button key={square.id}
                className="m-2 mt-2 w-24 h-28 bg-[white]"
                style={{ clipPath: hexagonClipPath, transform: "rotate(90deg)" }} // Rotate the hexagon by 90 degrees
              ></button>
            </Link>

          ))}
        </div>
      ))}
    </div>
  );
};


// 플로팅 버튼
const PlusBtn = () => {
  return (
    <Link to="/collectionWrite2">
      <button className='right-3 bottom-24 absolute'>
        <img src="/img/collection_plusButton.png" alt='플러스' width={'70px'} className='' />
      </button>
    </Link>

  );
};


function Collection() {

  const back = {
    backgroundImage: "url('img/collection_back.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100vh",
    position: "relative", // Add this line to set the relative position
  };

  return (
    <div style={back}>
      <div className='flex'>
        <div className='w-full flex justify-center'>
          <img className='absolute mt-7 left-7' src="img/SmallLogo.png" alt='구디' width={'150px'} />
        </div>
        <Link to="/Inspect">
          <button className='absolute right-14 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'><img src="img/Search.png" alt='검색' width={'30px'} height={'30px'} /></button>
        </Link>
        <button className='absolute right-0 h-20 p-4 drop-shadow-[0_2px_1px_rgba(220,166,19,100)]'><Link to="/categories"><img src="img/Hamburger.png" alt='햄버거' width={'30px'} height={'30px'} />
        </Link></button>
      </div>
      <SquareGrid />
      <PlusBtn />
      <Nav />
    </div>
  );
}

Collection.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
};

export default Collection;