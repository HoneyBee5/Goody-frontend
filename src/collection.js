import React from 'react';
import './collection.css';
import { Nav } from './Home';
import { ActionBar } from './ActionBar';

// 액션바 이름
const actionBarName = "컬렉션";
//추가 수정
/*사진 배열*/
const SquareGrid = () => {
  const squares = [
    {id:1, color:'#efb82c'},    
    {id:2, color:'#efb82c'},
    {id:3, color:'#efb82c'},
    {id:4, color:'#efb82c'},
    {id:5, color:'#efb82c'},
    {id:6, color:'#efb82c'},
    {id:7, color:'#efb82c'},
    {id:8, color:'#efb82c'},
    {id:9, color:'#efb82c'},
    {id:9, color:'#efb82c'},

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
  const chunkedSquares = chunk(squares, 3);

  return ( 
    <div className="flex flex-wrap grid gap-3 grid-cols-3 ml-4  justify-center">
      {chunkedSquares.map((row, rowIndex) => (
        <div key={rowIndex} className="flex flex-wrap justify-start ">
          {row.map((square) => (
              <button
                key={square.id}
                className=  
                "m-2 mt-7 inline-block w-20 h-20 rounded-lg bg-yellow-500 shadow-md"
              ></button>
          ))}
        </div>
      ))}
    </div>
  );
};

const PlusBtn = () => {
  return (
    <div className="flex justify-end">
       <button className='mr-5'>
        <img className='' src="/img/plusButton.png" alt='플러스' width={'80px'} />
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