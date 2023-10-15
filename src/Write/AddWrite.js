import React, { useState, useEffect } from 'react';
import { ActionBar } from '../Component/ActionBar';
import './AddWrite.css';
import { Nav } from '../Component/Nav';

// 액션바 이름
const actionBarName = "글 작성";

const AddWrite = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [additionalText, setAdditionalText] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleUpload = async () => {
    try {
      if (!loggedIn) {
        alert('로그인 후에 글을 작성할 수 있습니다.');
        return;
      }

      const formData = new FormData();
      formData.append('transType', selectedOption2);
      formData.append('imgPath', selectedImage);
      formData.append('price', price);
      formData.append('free', isChecked);
      if (additionalText !== null) {
        formData.append('people', additionalText);
      }

      formData.append('grade', selectedOption3);
      formData.append('title', title);
      formData.append('category', selectedOption1);

      console.log([...formData.entries()]);
      const response = await fetch('http://27.96.134.23:4001/goody/contents/', {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        console.log('데이터가 성공적으로 전송되었습니다.');
      } else {
        console.error('API로 데이터를 전송하는 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('오류가 발생했습니다:', error);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSelectChange = (event, setSelectedOption) => {
    setSelectedOption(event.target.value);
  };

  const handleAddBtnClick = () => {
    if (additionalText !== null) {
      setAdditionalText((prevArray) => [...prevArray, additionalText]);
      setAdditionalText('');
    }
  };

  const handleDeleteBtnClick = () => {
    if (additionalText !== null) {
      const updatedText = additionalText.slice(0, additionalText.length - 1);
      setAdditionalText(updatedText);
    }
  };

  return (
    <>
      <ActionBar actionBarName={actionBarName} />

      {/* 사진 */}
      <div className="App">
        <div className='w-16 m-6 mt-10 border border-gray-200 rounded-xl p-4 shadow-[0_1px_8px_rgba(180,180,180,0.7)]'>
          <label id="fileInput">
            <img className='w-16' src='img\Icon_Camera.png'></img>
            <p className='text-center font-bold text-[#B4B4B4]'>1/5</p>
            <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
          </label>
        </div>
        <hr />

        {/* 카테고리 */}
        <div className="w-full sm:flex-row h-10 sm:h-16 my-3">
          <select
            className="w-11/12 sm:flex-row h-10 sm:h-16 p-2 ml-2"
            value={selectedOption1}
            onChange={(e) => handleSelectChange(e, setSelectedOption1)}
          >
            <option value="카테고리">카테고리</option>
            <option value="MOV">영화</option>
            <option value="GAME">게임</option>
            <option value="ENT">연예인</option>
            <option value="SPO">스포츠</option>
            <option value="ANI">애니/만화</option>
          </select>
        </div>
        <hr />
        <div className="w-full sm:flex-row h-10 sm:h-16 my-3">
          <select
            className="w-11/12 sm:flex-row h-10 sm:h-16 p-2 ml-2"
            value={selectedOption2}
            onChange={(e) => handleSelectChange(e, setSelectedOption2)}
          >
            <option value="거래종류">거래종류</option>
            <option value="판매해요">판매해요</option>
            <option value="교환해요">교환해요</option>
            <option value="나눔해요">나눔해요</option>
            <option value="같이해요">같이해요</option>
          </select>
        </div>
        <hr />
        <div className="w-full sm:flex-row h-10 sm:h-16 my-3">
          <select
            className="w-11/12 sm:flex-row h-10 sm:h-16 p-2 ml-2"
            value={selectedOption3}
            onChange={(e) => handleSelectChange(e, setSelectedOption3)}
          >
            <option value="상태등급">상태등급</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
        <hr />

        <hr />

        {/* 글 제목 */}
        <div className=' h-30 ml-4 my-5 '>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='글 제목' className="outline-none border-0 focus:outline-none" />
        </div>

        <hr />

        {/* 가격 */}
        <div className='flex h-30 mt-5 mb-5 ml-5 items-center'>
          <input
            type="text"
            value={price}
            maxLength={20}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='￦ 가격'
            className="outline-none border-0 mr-[9.5rem] check"
          />
          <div style={{ marginLeft: '10px' }}>
            <div className='flex'>
              <div className='mr-1'>
                <label className="Check_label">나눔</label>
              </div>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className='ml-1 mr-1'
              />
            </div>
          </div>
        </div>
        <hr />

        {/* 내용 */}
        <div className='flex h-30 mt-5 mb-5 ml-5 items-center'>
          <input
            type="text"
            value={additionalText}
            maxLength={20}
            onChange={(e) => setAdditionalText(e.target.value)}
            placeholder='내용'
            className="outline-none border-0 mr-[9.5rem] check"
            rows={additionalText.split('\n').length} // 엔터를 누를 때마다 행의 개수에 따라 크기가 조정됨
            style={{ minHeight: '120px', resize: 'none' }} // 최소 높이 및 크기 조정 비활성화
          />

          <button onClick={handleAddBtnClick} className='btn btn-sm btn-green flex items-center'> 추가</button>
          <button onClick={handleDeleteBtnClick} className='btn btn-sm btn-red flex items-center'>삭제</button>
        </div>
        <hr />
        <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: '5px', marginBottom: '85px' }}>
          <button onClick={handleUpload}> <img src='img\registerBtn.png'></img></button></div>


      </div>
      <Nav />
    </>
  );
};

export default AddWrite;
