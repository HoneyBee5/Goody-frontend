import React from 'react';
import { Link } from 'react-router-dom';


const Button = () => {
    return (

        <div className='items-center flex justify-center'>
            <button
                className="border w-14 h-14 z-10  flex justify-center items-center m-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                style={{ backgroundColor: '#FFF2C6' }}>
                <img src="../img/Chat_camera.png" alt="카메라" className="w-10 h-10" />
            </button>

            <button
                className="border w-14 h-14 z-10 flex justify-center items-center m-2 rounded-tl-2xl rounded-bl-2xl  rounded-br-2xl"
                style={{ backgroundColor: '#FFF2C6' }}>
                <img src="../img/Chat_gallery.png" alt="갤러리" className="w-10 h-10" />
            </button>

            <Link to='/address'>
                <button
                    className="border w-14 h-14 z-10  flex justify-center items-center m-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
                    style={{ backgroundColor: '#FFF2C6' }}>
                    <img src="../img/Chat_address.png" alt="주소" className="w-10 h-10" />
                </button>
            </Link>
        </div>

    );
};



export default Button;
