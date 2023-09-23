import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ActionBarClose } from '../Component/ActionBarClose';

const actionBarName = "컬렉션 작성";

const CollectionWrite = () => {
    const [title, setTitle] = useState(''); // 타이틀 상태 추가
    const [story, setStory] = useState(''); // 스토리 상태 추가
    const [image, setImage] = useState(null);

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    const handleStoryChange = (newStory) => {
        setStory(newStory);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleMiniRegisterClick = async () => {
        try {
            const formData = new FormData();
            formData.append('title', title); // 제목을 추가
            formData.append('content', story); // 내용을 추가

            if (image) {
                formData.append('images', image); // 이미지 파일을 추가
            }

            const response = await fetch('http://27.96.134.23:4001/goody/collection/create', {
                method: 'POST',
                body: formData, // 멀티파트(form-data) 형식으로 데이터를 보냅니다.
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
            <ActionBarClose actionBarName={actionBarName} />
            <div>
                <p className="text-3xl text-[#FFD52B] font-serif flex justify-center mt-10">Title</p>
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
                <p className="text-3xl text-[#FFD52B] font-serif flex justify-center mt-5">STORY</p>
                <div className='flex-col px-4 mt-3'>
                    <textarea
                        type="text"
                        value={story}
                        onChange={(e) => handleStoryChange(e.target.value)}
                        placeholder=' 내용'
                        maxLength={400}
                        rows={story.split('\n').length}
                        className='py-2 pl-2 shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[380px] h-[300px]'
                        style={{ resize: 'none' }}
                    />
                </div>
            </div>
            <div>
                <img src='img\PhotoText.png' className='w-24 m-5' alt="Photo"></img>
            </div>
            <div className='flex p-2 mt-48'>
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
