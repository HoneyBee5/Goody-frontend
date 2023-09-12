import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ActionBarClose } from '../Component/ActionBarClose';
import PropTypes from 'prop-types';

const actionBarName = "컬렉션 작성";

const Title = () => {

    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
      };
  
    return (
        <div>

            <p className="text-3xl text-[#FFD52B] font-serif flex justify-center mt-10">Title</p>
            <div className='flex-col px-4 mt-3'>
                <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder='제목'
                maxLength={30} 
                className='shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[380px] h-12 pl-4'
                />
            </div>
        </div>
    );
};

const Story = () => {

    const [text, setText] = useState('');
    const handleChange = (event) => {
        setText(event.target.value);
      };
  
    return (
        <div>
            <p className="text-3xl text-[#FFD52B] font-serif flex justify-center mt-5">STORY</p>
            <div className='flex-col px-4 mt-3'>
                <textarea
                type="text"
                value={text}
                onChange={handleChange}
                placeholder=' 내용'
                maxLength={400} 
                rows={text.split('\n').length}
                className='py-2 pl-2 shadow-[0_0_4px_0_rgba(174,174,174,0.7)] rounded-lg w-[380px] h-[300px]'
                style={{resize: 'none' }} />
            </div>
        </div>
    )
}

const Photo = () => {
    return (
        <div>
            <img src='img\PhotoText.png' className='w-24 m-5'></img>
        </div>
    )
}

const Nav = () => {

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
      };
    
  
    return(
        
        <div className='flex p-2 mt-48'  htmlFor="fileInput" > 

            <button>
            <input type="file" multiple accept="image/*" className="hidden" onChange={handleFileChange} />
                <label htmlFor="fileInput"> <img src='img\CollectionCamera.png' className='mt-3 w-15 h-14 ml-5 bottom-2'  id="selectedImage" alt="Selected"></img></label>            </button>
            
            <button>
                <input type="file" id="fileInput" className="hidden" onChange={handleFileChange} />
                <label htmlFor="fileInput"> <img src='img\Gallery.png' className='mt-3 w-15 h-14 ml-9 bottom-2'></img></label>
            </button>

            <button>
            <Link to="/collectionDetail2">

                <img src='img\miniRegister.png' className='w-40 h-12 mt-2 ml-10'></img>
                </Link>

            </button>
        </div>
    )
}


function CollectionWrtie() {
  return (

    <div>
        <ActionBarClose actionBarName={actionBarName} />
        <Title />
        <Story />
        <Photo />
        <Nav />
    </div>

  );
}

CollectionWrtie.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultValue: PropTypes.string,
  };

export default CollectionWrtie;