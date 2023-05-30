import React, { useState } from 'react';
import { ActionBar } from './ActionBar';
import { Nav } from './Home';
import './add_write.css';

// 액션바 이름
const actionBarName = "글 작성";

const AddWrite = () => {

  /*사진 올리는 박스*/
  const Square = () => {
    return (
      <button className="photo w-20 h-20 m-5 flex items-center justify-center rounded-1g  border border-black">
        <div className="PhotoText rounded-1g">사진</div>
      </button>
    );
  };

  /*셀렉트 박스 선택*/
  const OPTIONS1 = [
    { value: "1", name: "카테고리" },
    { value: "2", name: "연예인" },
    { value: "3", name: "스포츠" },
    { value: "4", name: "영화" },
    { value: "5", name: "게임" },
    { value: "6", name: "애니 / 만화" },
  ];

  const OPTIONS2 = [
    { value: "1", name: "거래종류" },
    { value: "2", name: "팔아요 / 구해요" },
    { value: "3", name: "교환해요" },
    { value: "4", name: "나눔해요" },
    { value: "5", name: "같이해요" },
  ];

  const OPTIONS3 = [
    { value: "1", name: "상태등급" },
    { value: "2", name: "A" },
    { value: "3", name: "B" },
    { value: "4", name: "C" },
    { value: "5", name: "D" },
  ];

  const SelectBox = (props) => {
    return (
      <select
        className="m-0 m1-4 sm:m1-20 w-full sm:flex-row h-10 sm:h-16"
      >
        {props.options.map((option) => (
          <option
            value={option.value}
            defaultValue={props.defaultValue === option.value}
            key={option.value} // key 추가
          >
            {option.name}
          </option>
        ))}
      </select>
    );
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
          onBlur={handleBlur} // 오타 수정
      
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
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
          className="explain-text" /*placeholder 글씨 크기는 css에서 수정*/

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

  const [selectedRadio, setSelectedRadio] = useState('');
  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  return (
    <div className="App">

      <ActionBar actionBarName={actionBarName} />
      {/* /*return 구문에서 PHOTO 컴포넌트 화면에 렌더링*/}
      <Square />

      {/* SELECTBOX 컴포넌트를 화면에 렌더링 */}
      <SelectBox options={OPTIONS1} defaultValue="banana" />
      <SelectBox options={OPTIONS2} defaultValue="banana" />
      <SelectBox options={OPTIONS3} defaultValue="banana" />

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

      <Member />
      <TextBox />
      <PriceText />
      <ExplainText />
      <Nav />
    </div>
  );
};

export default AddWrite;
