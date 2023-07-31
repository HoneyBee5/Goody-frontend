import React, { useState } from 'react';
import { ActionBar } from '../Component/ActionBar';
import './AddWrite.css';

import PropTypes from 'prop-types';

// 액션바 이름
const actionBarName = "";

const AddWrite = () => {

  /*사진 올리는 박스*/
  const Square = () => {
    return (
      <button className="photo w-32 h-32 mt-10 m-5 ml-3 flex items-center justify-center rounded-lg border border-black">
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
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (event) => {
    const optionValue = event.target.value;
    if (selectedOption === "2" && optionValue === "2") {
      setSelectedOption(null);
    } else {
      setSelectedOption(optionValue);
    }
  };
  

    const modifiedOptions = props.options.map((option) => {
      if (selectedOption === "2" && option.value === "7") {
        return { value: option.value, name: "남자" };
      } else if (selectedOption === "2" && option.value === "8") {
        return { value: option.value, name: "여자" };
      } else {
        return option;
      }
    });
  
    return (
      <>
        <select
          className="w-full sm:flex-row h-10 sm:h-16"
          onChange={handleSelectChange}
          value={selectedOption || ""}
        >
          {modifiedOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {selectedOption === "2" && option.value === "2" ? "연예인" : option.name}
            </option>
          ))}

          {modifiedOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {selectedOption === "2" && option.value === "7" ? "연예인" : option.name}
            </option>
          ))}

          <option value="7" name="남">남자</option>
          <option value="8" name="여">여자</option>

        </select>
      </>
    );
  };


  const Member = ( ) => {
    
    const [text, setText] = useState('');
    const [additionalText, setAdditionalText] = useState(''); // <-- Add this line
    const placeholder = ' (명) ';

    const handleChange = (event) => {
      setText(event.target.value);
    };

    const shouldShowInput = selectedRadio !== 'option2';
    const shouldShowPlaceholder =  shouldShowInput && text === '';

    const boxWidth = selectedRadio === 'option2' ? 'w-60' : 'w-32';

    /*작성 X -> 공백 띄우기*/
    const handleFocus = () => {
      if (shouldShowPlaceholder) {
        setText(placeholder);
      }
    };

    /*작성 O -> 화면에 띄우기*/
    const handleBlur = () => {
      if (text === placeholder) {
        setText('');
      }
    };

    const handleAddBtnClick = () => {
      if (text !== '' && selectedRadio === 'option2') {
        setAdditionalText((prevText) => prevText ? prevText + ', ' + text : text);
        setText('');
      }
    };

    {/*추가인원 - 버튼 클릭 -> 삭제*/}
    const handleDeleteBtnClick = () => {
      setAdditionalText('');
    };
  
  

    return (

    <div >

        <div style={{ marginTop: '10px', display: 'flex'}}> 
          <div className='mb-8'style={{ display: 'flex', alignItems: 'center', marginLeft:3}}>         
            <label style={{margin:'5px'}}>
              <input
                type="radio"
                name="radioGroup"
                value="option1"
                checked={selectedRadio === 'option1'}
                onChange={handleRadioChange}
              />
              인원수
            </label>
          </div>

          <div className={` mb-8 ${boxWidth}`} style={{ display: 'flex', alignItems: 'center'}}>       
            <label className='fixe fixe-cols ml-10'>
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
      </div>

      <div style={{ height: 30, display: 'flex', marginTop:-12 }}>

        <input
          type="text"
          value={shouldShowPlaceholder ? placeholder : text}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`border border-black 100 ml-2 text-right ${boxWidth}`}
        />

        {/*추가버튼*/}
        {selectedRadio === 'option2' && (
            <div className='추가버튼img' style={{ marginLeft: 10, marginTop: -9 }}>
              <button onClick={handleAddBtnClick}>
                <img src='img\Add.png' width={30} alt='추가버튼' />
              </button>
            </div>
          )}

        {/*삭제버튼*/}
        {selectedRadio === 'option2' && (
          <div className='삭제버튼img' style={{marginLeft: 5, marginTop: -8}}>
            <button onClick={handleDeleteBtnClick}>
              <img src='img\Delete.png' width={33} alt='삭제버튼' />
            </button>
          </div>
        )}
      </div>

      {/*글작성 +버튼 -> 인원 추가*/}
      <div>
        {additionalText !== '' && (
            <div style={{marginTop:20, marginLeft:8}}>
              1. {additionalText}
            </div>
        )}
      </div>

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
      <div className='w-290 h-30 ml-2 mt-5 '>
        <input
          type="text"
          value={text}
          maxLength={20}
          onChange={handleChange}
          placeholder='글 제목'
          className="outline-none border-0 focus:outline-none"
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
          className="w-full outline-none border-0 focus:outline-none"

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
          className="explain-text  sm:w-150 h-60 h-43 mt-1 ml-2 mr-4 
                     outline-none border-0 focus:outline-none"
           /*placeholder 글씨 크기는 css에서 수정*/
        />
      </div>
    )
  };

  const [selectedRadio, setSelectedRadio] = useState('');

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };


  const Check = () => {
    return (

      <div style={{
              position: 'fixed', 
              display: 'flex', 
              zIndex: 999,
              bottom: 'calc(7vh - 40px)',
              justifyItems: 'center'
            }}>

        <button>
          <img src='img\DeleteBtn.png' 
          style={{
            width:180,
            height:40,
            marginLeft:15,
          }}>
          </img>
        </button>

        <button>
          <img src='img\AddBtn.png' 
          style={{
            width:180,
            height:40,
            marginLeft: 20,
          }}>
          </img>
        </button>

    </div>
  
    );
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

      <Member/>
      <TextBox />
      <PriceText />
      <ExplainText />
      <Check />
    </div>
  );
};

AddWrite.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
};


export default AddWrite;