import React, { useState } from 'react';
import { Nav } from '../Component/Nav';
import { ActionBar } from '../Component/ActionBar';
import './AddWrite.css';

import PropTypes from 'prop-types';

// 액션바 이름
const actionBarName = "글 작성";

const AddWrite = () => {

  /*사진 올리는 박스*/
  const Square = () => {
    return (
      <button className="photo w-32 h-32 m-5 ml-3 flex items-center justify-center rounded-lg border border-black">
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

  /*드롭다운 보일때 크기도 수정하기*/
  const SelectBox = (props) => {
    return (
      <select className="w-full sm:flex-row h-10 sm:h-16">
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
      <div className='mb-8'>
        <input
          type="text"
          value={text === '' ? placeholder : text}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur} // 오타 수정
          className='w-32 border border-black 100 ml-2 text-right'
      
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
      <div className='w-290 h-30 ml-2 '>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder='글 제목'
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
      <div className='flex mr-12 h-30 mt-5 mb-5 ml-2 items-center'>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder='￦ 가격'
          className='w-full'
        />

        {/* 나눔 체크 박스  */}
        <label className="Check_label mr-[-40px]">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        나눔
        </label>

      </div>
    );
  };

  const Hashtag = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
      setText(event.target.value);
    };

    return (
      <div className='w-290 h-30 m-2 mb-3 flex justify-between'>
        <div className='w-50'>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder='# 해시태그'
          />
        </div>
        
        <div className='textWrite w-150 mr-0'>
          #아이돌 #방탄소년단 #판매중 #포카
        </div>
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
      <div className="Div_explainText flex flex-col">
        <textarea
          type="text"
          value={text}
          onChange={handleChange}
          placeholder=' 설명'
          className="explain-text  sm:w-150 h-60 sm:h-80 mt-1 ml-2 mr-4"
           /*placeholder 글씨 크기는 css에서 수정*/
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
      <SelectBox options={OPTIONS1} />
      <SelectBox options={OPTIONS2} />
      <SelectBox options={OPTIONS3} />

      {/* 라디오 버튼 화면에 렌더링 */}

      <div className="radio-container ml-2 mt-12 mb-5">  
                                      {/* 라디오버튼과 텍스트의 마진 */}
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="option1"
            checked={selectedRadio === 'option1'}
            onChange={handleRadioChange}
          />
           인원수
        </label>

        <label className='fixe fixe-cols ml-20'>
          <input
            type="radio"
            name="radioGroup"
            value="option2"
            checked={selectedRadio === 'option2'}
            onChange={handleRadioChange}

          />
           추가인원
        </label>
      </div>

      <Member />
      <TextBox />
      <PriceText />
      <Hashtag/>
      <ExplainText />
      <Nav />
    </div>
  );
};

AddWrite.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
};


export default AddWrite;