import React, { useState } from 'react';
import { ActionBar } from '../Component/ActionBar';
import './AddWrite.css';
import { Nav } from '../Component/Nav';
import PropTypes from 'prop-types';


// 액션바 이름
const actionBarName = "글 작성";

const AddWrite = () => {

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);


  /*사진 올리는 박스*/
  const Square = () => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      console.log(file);
    };
  
    return (
      <label htmlFor="fileInput" className="photo w-32 h-32 mt-10 m-5 ml-3 flex items-center justify-center rounded-lg border border-gray-500">
        <div className="PhotoText rounded-1g">사진</div>
        <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
      </label>
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
    const { options, selectedOption, setSelectedOption } = props;

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    
    return (
      <div className="w-full sm:flex-row h-10 sm:h-16 my-3">
        {(selectedOption === "2" && props.options === OPTIONS1) || selectedOption === "8" ? (
          <select
            className="w-11/12 sm:flex-row h-10 sm:h-16 p-2  ml-2"
            value={selectedOption || ""}
            onChange={handleSelectChange}
          >
            <option value="7">남자배우</option>
            <option value="8">여자배우</option>
          </select>
        ) : (
          <select
            className="w-11/12 sm:flex-row h-10 sm:h-16 p-2 ml-2"
            onChange={handleSelectChange}
            value={selectedOption || ''}
            >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
            {option.name}
              </option>
            ))}
          </select>
        )}
        {/* Show the selected option as text */}
        {selectedOption === "7" && selectedOption !== "2" && selectedOption !== "8" && ""}
        {selectedOption === "8" && ""}
      </div>
    );
  };

  SelectBox.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, name: PropTypes.string })).isRequired,
    selectedOption: PropTypes.string,
    setSelectedOption: PropTypes.func,
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
        <div style={{ marginTop: '10px', display: 'flex' }}> 
        <div className='mb-8' style={{ display: 'flex', alignItems: 'center', marginLeft: '16px'}}> {/*인원수,추가인원div*/}     
        <label style={{ margin: '5px' }}>
              <input
                type="radio"
                name="radioGroup"
                value="option1"
                checked={selectedRadio === 'option1'}
                onChange={handleRadioChange}
              />
              &nbsp;&nbsp;인원수
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
              &nbsp;&nbsp;추가인원
            </label>
        </div>
      </div>

      <div style={{ height: 30, display: 'flex', marginTop:-12, marginLeft:'10px', marginBottom:'20px'}}> {/*(명) text div*/}

        <input
          type="text"
          value={shouldShowPlaceholder ? placeholder : text}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`border border-gray-500  ml-3 text-right ${boxWidth}`}
          style={{borderRadius:5}}
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
      <div className=' h-30 ml-4 my-5 '>
        <input
          type="text"
          value={text}
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
      <div className='flex mr-12 h-30 mt-5 mb-5 ml-3 items-center'>
  
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder='￦ 가격'
          className="outline-none border-0 mr-36 focus:outline-none"

        />

        {/* 나눔 체크 박스  */}
        <div style={{ marginLeft:'10px'}}>

          <div className='ml-17 flex'>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />

            <div className='ml-3 mr-[-14px]'>
            <label className="Check_label mr-[-35px] flex">나눔</label>
            </div>
                     
          </div>
       
        </div>
      </div>
    );
  };

  /*설명 작성*/
  const ExplainText = () => {
    const [text, setText] = useState('');
  
    const handleChange = (event) => {
      setText(event.target.value);
    };
  
    return (
      <div className="Div_explainText flex flex-col m-3">
        <textarea
          type="text"
          value={text}
          onChange={handleChange}
          placeholder='설명'
          rows={text.split('\n').length} // 엔터를 누를 때마다 행의 개수에 따라 크기가 조정됨
          style={{ minHeight: '120px', resize: 'none' }} // 최소 높이 및 크기 조정 비활성화
          className=""
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
  
<div style={{ display: 'flex',alignItems: 'flex-end', marginTop:'5px', marginBottom:'85px'}}>
      <button>
        <img src='img\registerBtn.png'></img>
      </button>
    </div>

    );
  };

  


  return (
    <div className="App">

      <ActionBar actionBarName={actionBarName} />
      {/* /*return 구문에서 PHOTO 컴포넌트 화면에 렌더링*/}
      <Square />
      <hr/>
      {/* SELECTBOX 컴포넌트를 화면에 렌더링 */}
      <SelectBox options={OPTIONS1} selectedOption={selectedOption1} setSelectedOption={setSelectedOption1} /><hr/>
      <SelectBox options={OPTIONS2} selectedOption={selectedOption2} setSelectedOption={setSelectedOption2} /><hr/>
      <SelectBox options={OPTIONS3} selectedOption={selectedOption3} setSelectedOption={setSelectedOption3} /><hr/>
      {/* 라디오 버튼 화면에 렌더링 */}

      <Member/> <hr/>
      <TextBox /> <hr/>
      <PriceText /> <hr/>
      <ExplainText /> 
      <Check />
      <Nav/>
    </div>
  );
};

AddWrite.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultValue: PropTypes.string,
};


export default AddWrite;