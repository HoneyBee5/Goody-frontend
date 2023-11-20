import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const Button = ({ roomId }) => {

    const apiurl = `https://www.honeybee-goody.site/goody/sendImg?roomId=${roomId}`;

    const handleFileChange = async (event) => {
        console.log('???');
        const fileInput = event.target;
        const selectedFile = fileInput.files[0]; // 첫 번째로 선택된 파일 가져오기
      
        if (selectedFile) {
          // 파일이 선택된 경우 API 호출 또는 원하는 작업 수행
          // 여기서는 API 호출을 가정하고 예시를 제공합니다.
          const formData = new FormData();
          formData.append('file', selectedFile);
      
          // API 호출 또는 원하는 작업을 수행하는 함수 호출
          const response = await fetch(apiurl, {
            method: 'POST',
            body: formData, // 멀티파트(form-data) 형식으로 데이터를 보냅니다.
            headers: {
                // 토큰을 사용하여 사용자 인증
                Authorization: `${localStorage.getItem('token')}`,
            },
        });
        if(response.ok){
            const data = response.json();
            console.log(data);
        }
      
          // 선택된 파일 표시를 위해 파일 이름을 콘솔에 출력
          console.log('Selected File:', selectedFile.name);
        }
      };

    return (

        <div className='items-center flex justify-center relative'>
            <button
                className="border w-14 h-14 z-10  flex justify-center items-center m-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                style={{ backgroundColor: '#FFF2C6' }}>
                <img src="../img/Chat_camera.png" alt="카메라" className="w-10 h-10" />
            </button>

            <input id="fileInput" type="file" className='hidden' onChange={handleFileChange}/>
            <button
                className="border w-14 h-14 z-10 flex justify-center items-center m-2 rounded-tl-2xl rounded-bl-2xl  rounded-br-2xl"
                style={{ backgroundColor: '#FFF2C6' }}>
            <label id="fileInput" htmlFor="fileInput">
                <img src="../img/Chat_gallery.png" alt="갤러리" className="w-10 h-10" />
            </label>
            </button>
            
            

            <Link to={`/address/${roomId}`}>
                <button
                    className="border w-14 h-14 z-10  flex justify-center items-center m-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                    style={{ backgroundColor: '#FFF2C6' }}>
                    <img src="../img/Chat_address.png" alt="주소" className="w-10 h-10" />
                </button>
            </Link>
        </div>

    );
};


Button.propTypes = {
    roomId: PropTypes.string.isRequired, // roomId가 문자열 타입이어야 하며 필수로 전달되어야 함
  };
export default Button;
