import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ActionBarClose } from '../Component/ActionBarClose';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const actionBarName = "컬렉션 작성";

const CollectionWrite = () => {
    const [title, setTitle] = useState('');
    const [story, setStory] = useState('');
    const [images, setImages] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        // 사용자 로그인 상태를 확인하는 로직을 구현
        const token = localStorage.getItem('token'); // 또는 세션에서 토큰을 가져올 수 있음
        if (token) {
            setLoggedIn(true); // 토큰이 있다면 로그인 상태로 설정
        }
    }, []);

    const handleDeleteImage = (index) => {
        // 이미지 목록에서 이미지를 삭제합니다.
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
      };

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    const handleStoryChange = (newStory) => {
        setStory(newStory);
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        const newImages = Array.from(files);
        setImages([...images, ...newImages]);
    };

    const handleMiniRegisterClick = async () => {
        try {
            // 사용자 인증 여부 확인
            if (!loggedIn) {
                // 로그인되지 않은 경우 처리
                alert('로그인 후에 글을 작성할 수 있습니다.');
                return;
            }

            // 나머지 글 작성 로직
            const formData = new FormData();
            formData.append('title', title); // 제목을 추가
            formData.append('content', story); // 내용을 추가
            if (images && images.length > 0) {
                images.forEach((image, index) => {
                    formData.append(`images[${index}]`, image);
                });
            }

            console.log([...formData.entries()]);

            const response = await fetch('https://www.honeybee-goody.site/goody/collection/create', {
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

    return (
        <div>
            {!loggedIn && <link to="/login" />} {/* 로그인되지 않은 경우 로그인 페이지로 리디렉션 */}
            <ActionBarClose actionBarName={actionBarName} />
            <div>
                <p className="text-3xl text-[#FFD52B] font-serif flex justify-center mt-10 font-bold">Title</p>
                <div className='flex-col px-4 mt-3'>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => handleTitleChange(e.target.value)}
                        placeholder='제목'
                        maxLength={30}
                        className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[380px] h-12 pl-4'
                    />
                </div>
            </div>
            <div>
                <p className="text-3xl text-[#FFD52B] font-serif flex justify-center mt-5 font-bold">STORY</p>
                <div className='flex-col px-4 mt-3'>
                    <textarea
                        type="text"
                        value={story}
                        onChange={(e) => handleStoryChange(e.target.value)}
                        placeholder=' 내용'
                        maxLength={400}
                        rows={story.split('\n').length}
                        className='py-2 pl-2 shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[380px] h-[350px]'
                        style={{ resize: 'none' }}
                    />
                </div>
            </div>
            <div>
        <div className='relative inline-block'>
          {images.map((image, index) => (
            <div key={index} style={{ position: 'relative', display: 'inline-block' }}>
              <img src={URL.createObjectURL(image)} className='m-4 rounded-xl object-cover w-[100px] h-[100px]' alt="SelectedImage" />
              <button
              onClick={() => handleDeleteImage(index)} style={{ position: 'absolute',top: '0',right: '0',padding: '20px', zIndex: '1',cursor: 'pointer',}}>
                <HighlightOffIcon />
              </button>
            </div>
          ))}
        </div>
      </div>
            <div style={{ position: 'fixed', bottom: 30, left: 0, right: 0, display: 'flex', justifyContent: 'center', background: 'white' }}>
                <button>
                    <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
                    <label htmlFor="fileInput"> <img src='img\CollectionCamera.png' className='mt-3 w-15 h-14 ml-5 bottom-2' id="selectedImage" alt="Selected"></img></label>            </button>

                <button>
                    <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                    <label htmlFor="fileInput"> <img src='img\Gallery.png' className='mt-3 w-15 h-14 ml-9 bottom-2'></img></label>
                </button>

                <button onClick={handleMiniRegisterClick}>
                    <Link to="/collection">
                        <img src='img\miniRegister.png' className='w-40 h-12 mt-2 ml-10' alt="Mini Register"></img>
                    </Link>
                </button>
            </div>

        </div>
    );
}

export default CollectionWrite;
