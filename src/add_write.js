import React,{useState} from 'react';
import './App.css';


function App() {

  const Top = () => {
    return(
      <div className="topBar">
      </div>
    );
  };


/*사진 올리는 박스*/
const Square = () => {
  return (
    <div className="photo">
      <div className="PhotoText">사진</div>
    </div>
  );
};

/*사진 띄워주기*/
const PHOTO = () => {
  return(
    <>
      <Square></Square>
    </>
  );
};

/*셀렉트 박스 선택*/
const OPTIONS1 = [
  { value: "apple", name: "카테고리" },
  { value: "banana", name: "연예인" },
  { value: "banana", name: "스포츠" },
  { value: "orange", name: "영화" },
  { value: "orange", name: "게임" },
  { value: "orange", name: "애니 / 만화" },
];

const OPTIONS2 = [
  { value: "apple", name: "거래종류" },
  { value: "banana", name: "팔아요 / 구해요" },
  { value: "orange", name: "교환해요" },
  { value: "orange", name: "나눔해요" },
  { value: "orange", name: "같이해요" },
];

const OPTIONS3 = [
  { value: "apple", name: "상태등급" },
  { value: "banana", name: "A" },
  { value: "orange", name: "B" },
  { value: "banana", name: "C" },
  { value: "orange", name: "D" },
];

const SelectBox = (props) => {
   return (
      <select
        style={{
          margin: '-1px',
          marginLeft: '20px',
          width: '300px',
          height: '40px',
          display: 'block',
        }}>

         {props.options.map((option) => (
            <option
               value={option.value}
               defaultValue={props.defaultValue === option.value}
            >
               {option.name}
            </option>
         ))}
      </select>
   );
};

const [selectedRadio, setSelectedRadio] = useState('');
const handleRadioChange = (event) => {
  setSelectedRadio(event.target.value);
};

const Member = () => {
  const [text, setText] = useState('');
  const placeholder = ' (명) ';

  const handleChange = (event) => {
    setText(event.target.value);
  };

  /*작성 X -> 공백 띄우기*/
  const handleFocus = () => {
    if (text === '') {
      setText(placeholder);
    }
  };

  /*작성 O -> 화면에 띄우기*/
  const handleBlur = () => {
    if (text === placeholder) {
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text === '' ? placeholder : text}
        onChange={handleChange}
        onFocus={handleFocus}
        onVlur={handleBlur}
      
        style={{
          width: '150px',
          height: '20px',
          marginLeft: '20px',
          marginBottom: '40px',
          textAlign: 'right',
        }}
      />
    </div>
  )
};

/*글제목 작성*/
const TextBox = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder='글 제목'

        style={{
          width: '290px',
          height: '30px',
          marginLeft: '20px'
        }}
      />
    </div>
  )
};


/*가격 작성*/
const PriceText = () => {
  const [text, setText] = useState('');
  const [isChecked, setIsChecked] = useState(false);


  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center'}}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder='￦ 가격'

          style={{
            width: '290px',
            height: '30px',
            marginTop: '-1px',
            marginLeft: '20px'
          }}
        />
        
        {/* 나눔 체크 박스  */}
        <label className="Check_label">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
           
            style={{
              marginLeft: '-60px',
            }}
          />
          나눔
        </label>

    </div>
  );
};

/*가격 작성*/
const ExplainText = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="Div_explainText">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder='게시글 내용을 작성해주세요.'
        className= "explain-text" /*placeholder 글씨 크기는 css에서 수정*/

        style={{
          width: '290px',
          height: '250px',
          marginTop: '-1px',
          marginLeft: '20px',
        }}
      />
    </div>
  )
};


return (
   <div className="App">

  <Top/>
   {/* /*return 구문에서 PHOTO 컴포넌트 화면에 렌더링*/}
  <PHOTO/>

  {/* SELECTBOX 컴포넌트를 화면에 렌더링 */}  
  <SelectBox options={OPTIONS1} defaultValue="banana"></SelectBox>
  <SelectBox options={OPTIONS2} defaultValue="banana"></SelectBox>
  <SelectBox options={OPTIONS3} defaultValue="banana"></SelectBox>
  
  {/* 라디오 버튼 화면에 렌더링 */}

  <div className="radio-container">
    <label>
      <input
        type="radio"
        name="radioGroup"
        value="option1"
        checked={selectedRadio === 'option1'}
        onChange={handleRadioChange}

        style={{
          margin: '20px', /*라디오버튼과 텍스트의 마진*/
          marginTop: '20px',
        }}
      />
      인원수
     </label>

    <label>
      <input
        type="radio"
        name="radioGroup"
        value="option2"
        checked={selectedRadio === 'option2'}
        onChange={handleRadioChange}
          
        style={{
          margin: '20px', /*라디오버튼과 텍스트의 마진*/
          marginLeft: '60px'/*인원수 버튼과 추가인원 버튼의 마진*/
        }}
      />
      추가인원
    </label>
  </div>

  <Member/>
  <TextBox/>
  <PriceText/>
  <ExplainText/>

  </div>
  );
}

export default App;