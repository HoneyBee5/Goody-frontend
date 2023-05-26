import React from 'react';
import './collection.css';

/*컬렉션 상단바*/
const Top = () => {
  return(
    <div className="topBar">
      <div 
        style={{
          color: 'white', 
          marginLeft: '20px', 
          fontWeight: 'bold',
          fontSize: '20px'
        }}>
      컬렉션
      </div>
    </div>
  );
};

/*사진 배열*/
const SquareGrid = () => {
  const squares = [
    {id:1, color:'gold'},    
    {id:2, color:'gold'},
    {id:3, color:'gold'},
    {id:4, color:'gold'},
    {id:5, color:'gold'},
    {id:6, color:'gold'},
    {id:7, color:'gold'},
    {id:8, color:'gold'},
    {id:9, color:'gold'},
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
    <div className="squareBox">
      {chunkedSquares.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((square) => (
            <div
              key={square.id}
              style={{
                margin: '19px', /*전체 여백 맞추기*/
                marginTop: '10px',
                marginRight: '10px',
                marginLeft: '28px', /*양쪽 여백 차이 맞추기*/
                display: 'inline-block',
                width: '82px',
                height: '82px',
                borderRadius: '13px', /*사각형 둥글게*/
                backgroundColor: square.color,
                boxShadow: '0 0 5px rgba(0,0,0,0.3)' /*박스 그림자*/
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

const CircleBtn = () => {
  const handleClick = () => {
    console.log("클릭");
  };

  return (
    <div className="btn">
    <button className="circleBtn" 
            onClick={handleClick} 
            style={{fontSize: '60px'}}>
    +
    </button>
    </div>
  )
};

const Bottom = () => {
  return(
    <div className="bottomBar">
    </div>
  );
};

function App() {
  return (
    <div>
      <Top/>
      <SquareGrid/>
      <CircleBtn/>
      <Bottom/>
    </div>
  );
}

export default App;