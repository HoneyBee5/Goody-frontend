import React, { useState, useEffect } from 'react';
import { ActionBar } from '../Component/ActionBar';
import './AddWrite.css';
import { Nav } from '../Component/Nav';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const actionBarName = "글 작성";
const AddWrite = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [title, setTitle] = useState(''); // 상태 변수 추가
  const [price, setPrice] = useState('');
  const [explain, setExplane] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [additionalText, setAdditionalText] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(null);

  useEffect(() => {
    // 사용자 로그인 상태를 확인하는 로직을 구현
    const token = localStorage.getItem('token'); // 또는 세션에서 토큰을 가져올 수 있음
    if (token) {
        setLoggedIn(true); // 토큰이 있다면 로그인 상태로 설정
    }
}, []);

  const handleFileChange = (event) => { //파일 체인지
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };

  
   
    const handleUpload = async () => {
      try {
          // 사용자 인증 여부 확인
          if (!loggedIn) {
              // 로그인되지 않은 경우 처리
              alert('로그인 후에 글을 작성할 수 있습니다.');
              return;
          }

          const formData = new FormData();
          formData.append('transType',selectedOption1 ); // 해당 필드에 원하는 값을 설정
          formData.append('imgPath', selectedImage);
          formData.append('price', parseInt(price, 32));
          formData.append('numOfPeople', numOfPeople);
          formData.append('free', isChecked);
          formData.append('people', JSON.stringify({numOfPeople}));
          formData.append('explain', explain);
          formData.append('grade',  selectedOption3 );
          formData.append('title', title);
          formData.append('category', selectedOption2);
    

          const response = await fetch('http://27.96.134.23:4001/goody/contents/', {
              method: 'POST',
              body: formData, // 멀티파트(form-data) 형식으로 데이터를 보냅니다.
              headers: {
                  // 토큰을 사용하여 사용자 인증
                  Authorization: `${localStorage.getItem('token')}`,
              },
          });

          if (response.ok) {
              // 데이터가 성공적으로 API로 전송되었습니다.
              console.log('데이터가 성공적으로 전송되었습니다.');
          } else {
              // 여기서 오류를 처리합니다.
              console.error('API로 데이터를 전송하는 중 오류가 발생했습니다.');
          }
      } catch (error) {
          console.error('오류가 발생했습니다:', error);
      }
  };

  /*사진 올리는 박스*/
  const Square = () => {
    return (
      <div>
      <div className="w-16 m-6 mt-10 border border-gray-200 rounded-xl p-4 shadow-[0_1px_8px_rgba(180,180,180,0.7)]">
        <label id="fileInput" className="">
          {selectedImage ? (
            <img className='w-16' src={selectedImage} alt="Selected" />
          ) : (
            <img className='w-16' src='img\Icon_Camera.png' alt="Camera Icon" />
          )}
          <p className='text-center font-bold text-[#B4B4B4]'>1/5</p>
          <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
        </label>
        <button onClick={handleUpload}></button> {/* Upload 버튼 추가 */}
      </div>
    </div>
    );
  };


  /*셀렉트 박스 선택*/
  
  const OPTIONS1 = [
    { value: "카테고리", name: "카테고리" },
    { value: "연예인", name: "연예인" },
    { value: "스포츠", name: "스포츠" },
    { value: "영화", name: "영화" },
    { value: "게임", name: "게임" },
    { value: "애니/만화", name: "애니 / 만화" },
  ];

  const OPTIONS2 = [
    { value: "거래종류", name: "거래종류" },
    { value: "팔아요/구해요", name: "팔아요 / 구해요" },
    { value: "교환해요", name: "교환해요" },
    { value: "나눔해요", name: "나눔해요" },
    { value: "같이해요", name: "같이해요" },
  ];

  const OPTIONS3 = [
    { value: "상태등급", name: "상태등급" },
    { value: "A", name: "A" },
    { value: "B", name: "B" },
    { value: "C", name: "C" },
    { value: "D", name: "D" },
  ];


  /*드롭다운 보일때 크기도 수정하기*/
  const SelectBox = (props) => {
    const { options, selectedOption, setSelectedOption } = props;

    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };


    return (
      <div className="w-full sm:flex-row h-10 sm:h-16 my-3">
        {(selectedOption === "연예인" && props.options === OPTIONS1) || selectedOption === "남자배우" || selectedOption == "여자배우" ? (
          <select
            className="w-11/12 sm:flex-row h-10 sm:h-16 p-2  ml-2"
            value={selectedOption || ""}
            onChange={handleSelectChange}
          >
            <option value="카테고리">카테고리</option>
            <option value="남자배우">남자배우</option>
            <option value="여자배우">여자배우</option>
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
       
        {selectedOption === "카테고리" && selectedOption !== "연예인" && selectedOption !== "남자배우" && ""}
        {selectedOption === "남자배우" && ""}
        {selectedOption === "여자배우" && ""}
      </div>
    );
  };

  SelectBox.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string, name: PropTypes.string })).isRequired,
    selectedOption: PropTypes.string,
    setSelectedOption: PropTypes.func,
  };





  const Member = () => {
    const [text, setText] = useState('');
    const [selectedRadio, setSelectedRadio] = useState('');
    const [showNumberOfMembersBox, setShowNumberOfMembersBox] = useState(false);
    const placeholder = " (명) ";

    const handleChange = (event) => {
      setText(event.target.value);
    };



    const shouldShowInput = selectedRadio === 'option1';
    const shouldShowPlaceholder = shouldShowInput && text === '';

    const boxWidth = selectedRadio === 'option2' ? 'w-60' : 'w-32';

    const handleRadioChange = (event) => {
      const selectedValue = event.target.value;

      if (selectedValue === "option1") { //옵션1 = 인원수 클릭시 보임
        setSelectedRadio(selectedValue);
        setShowNumberOfMembersBox(true);
      }
      else if (selectedValue === "option2") { //옵션2 = 추가인원 클릭시 보임
        setSelectedRadio(selectedValue);
        setShowNumberOfMembersBox(true);
      }
    };






    const handleAddBtnClick = () => {
      if (text !== '' && selectedRadio === 'option2') {
        setAdditionalText((prevText) => prevText ? prevText + ', ' + text : text);
        setNumOfPeople(parseInt(text, 32));
      }
    };

    const handleDeleteBtnClick = () => {
      const updatedText = additionalText
        .split(', ')
        .slice(0, -1) 
        .join(', ');
  
      setAdditionalText(updatedText);
    };


    const handleFocus = () => {
      if (shouldShowPlaceholder) {
        setText(placeholder);
      }
    };

    const handleBlur = () => {
      if (text === placeholder) {
        setText('');
      }
    };

    return (
      <div>
        {selectedOption2 === "같이해요" && ( // Check for '5' (같이해요) in selectedOption2
          <div style={{ marginTop: '10px', display: 'flex' }}> 
            <div className='mb-8' style={{ display: 'flex', alignItems: 'center', marginLeft: '16px'}}> {/*인원수,추가인원div*/}     
              <label style={{ margin: '5px' }}>
                <input
                  type="radio"
                  name="radioGroup"
                  value="option1"
                  checked={selectedRadio === "option1"}
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
                  checked={selectedRadio === "option2"}
                  onChange={handleRadioChange}
                />
                &nbsp;&nbsp;추가인원
              </label>
            </div>
          </div>
        )}

        {showNumberOfMembersBox && (
          <div className='flex h-8 mt-[-0.75rem] ml-[0.7rem] mb-[1.25rem]'>
            <input
              type="text"
              value={shouldShowPlaceholder ? placeholder : text}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={`border border-gray-500 pr-[0.25rem] ml-[0.75rem] text-right ${boxWidth}`}
              style={{borderRadius:5}}
            />

            {/*추가버튼*/}
            {selectedRadio === 'option2' && (
              <div className='추가버튼img ml-[1.25rem] mt-[0.2rem]'>
                <button onClick={handleAddBtnClick}>
                  <img src='img\personAdd.png' width={30} alt='추가버튼' />
                </button>
              </div>
            )}

       
            {/*삭제버튼*/}
            {selectedRadio === 'option2' && (
            <div className='삭제버튼img ml-[1rem] mt-[-0.07rem]'>
              <button onClick={handleDeleteBtnClick}>
                <img src='img\personMinus.png' width={33} alt='삭제버튼' />
              </button>
            </div>
            )}
          </div>

        )}

        {/*글작성 +버튼 -> 인원 추가*/}
        <div>
          <div>
            {additionalText !== '' && (
              <div className='mt-[1rem] mb-[1rem] ml-[1.5rem]'>
                {additionalText.split(', ').map((person, index) => (
                  <div key={index}>
                    {index + 1}. {person}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  /*글제목 작성*/
  const TextBox = ()  => {

    const handleChange = (event) => {
      const { value } = event.target;
      setTitle(value);
    };

    return (
      
      <div className=' h-30 ml-4 my-5 '>
        <input
          type="text"
          value={title}
          onChange={handleChange}
          placeholder='글 제목'
          className="outline-none border-0 focus:outline-none"
        />
      </div>
    )
  };

  /*가격 작성*/
  const PriceText = () => {

    const handleChange = (event) => {
      setPrice(event.target.value);
    };

    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
    };

    return (
      <div className='flex h-30 mt-5 mb-5 ml-5 items-center'>

        <input
          type="text"
          value={price}
          maxLength={20}
          onChange={handleChange}
          placeholder='￦ 가격'
          className="outline-none border-0 mr-[9.5rem] check"
        />

        {/* 나눔 체크 박스  */}
        <div style={{ marginLeft: '10px' }}>

          <div className='flex'>

            <div className='mr-1'>
              <label className="Check_label">나눔</label>
            </div>

            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='ml-1 mr-1'
            />

          </div>

        </div>
      </div>
    );
  };

  /*설명 작성*/
  const ExplainText = () => {

    const handleChange = (event) => {
      setExplane(event.target.value);
    };

    return (
      <div className="Div_explainText flex flex-col m-5">
        <textarea
          type="text"
          value={explain}
          onChange={handleChange}
          placeholder='설명'
          rows={explain.split('\n').length} // 엔터를 누를 때마다 행의 개수에 따라 크기가 조정됨
          style={{ minHeight: '120px', resize: 'none' }} // 최소 높이 및 크기 조정 비활성화
          className=""
        />
      </div>
    )
  };
  


  const Check = () => {
    return (
  
    <div style={{ display: 'flex',alignItems: 'flex-end', marginTop:'5px', marginBottom:'85px'}}>
          <Link to="/sightseeing">
      <button onClick={handleUpload}>
        <img src='img\registerBtn.png'></img>
      </button>
      </Link>
    </div>
    );
  };




  return (
    <div className="App">

      <ActionBar actionBarName={actionBarName} />
      {/* /*return 구문에서 PHOTO 컴포넌트 화면에 렌더링*/}
      <Square />
      <hr />
      {/* SELECTBOX 컴포넌트를 화면에 렌더링 */}
      <SelectBox options={OPTIONS1} selectedOption={selectedOption1} setSelectedOption={setSelectedOption1} /><hr />
      <SelectBox options={OPTIONS2} selectedOption={selectedOption2} setSelectedOption={setSelectedOption2} /><hr />
      <SelectBox options={OPTIONS3} selectedOption={selectedOption3} setSelectedOption={setSelectedOption3} /><hr />
      {/* 라디오 버튼 화면에 렌더링 */}

      <Member /> <hr />
      <TextBox /> <hr />
      <PriceText /> <hr />
      <ExplainText />
      <Check />
      <Nav />
    </div>
  );
};

export default AddWrite;