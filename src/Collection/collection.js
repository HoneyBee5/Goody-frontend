import React from 'react';
import './collection.css';
import { Nav } from '../Component/Nav';
import { ActionBar } from '../Component/ActionBar';

// 액션바 이름
const actionBarName = "컬렉션";
/*사진 배열*/
const SquareGrid = () => {
  const squares = [

    {id:1, color:'#f1c40f'},    
    {id:2, color:'#f1c40f'},
    {id:3, color:'#f1c40f'},
    {id:4, color:'#f1c40f'},
    {id:5, color:'#f1c40f'},
    {id:6, color:'#f1c40f'},
    {id:7, color:'#f1c40f'},
    {id:8, color:'#f1c40f'},
    {id:9, color:'#f1c40f'},
    {id:9, color:'#f1c40f'},
    {id:9, color:'#f1c40f'},
  ];

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
    <div className="grid gap-3 grid-cols-3 ml-4  justify-center">
      {chunkedSquares.map((row, rowIndex) => (
        <div key={rowIndex} className="">
          {row.map((square) => (
              <button key={square.id} className="m-2 mt-7 w-20 h-20 rounded-lg bg-[#f1c40f] shadow-md"></button>
          ))}
        </div>
      ))}
    </div>
  );
};

const PlusBtn = () => {
  return (
    <div className='fixed bottom-16 right-4'>
      <button>
        <img src="/img/plusButton.png" alt='플러스' width={'50px'} />
      </button>
    </div>
  );
};

function Collection() {
  return (
    <div>
      <ActionBar actionBarName={actionBarName} />
      <SquareGrid/>
      <PlusBtn/>
      <Nav/>
    </div>
  );
}

export default Collection;