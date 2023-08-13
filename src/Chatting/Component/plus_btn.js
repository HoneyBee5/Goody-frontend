import React from 'react';
import { Link } from 'react-router-dom';


const Button = () => {
    return (

<div className='items-center flex justify-center'>


<button
className="border w-14 h-14 z-10 overflow-hidden rounded-2xl m-2">
<img src="img/Camera.png" alt="카메라" className="w-full h-full" />
</button>

<button
className="border w-14 h-14 z-10 overflow-hidden rounded-2xl m-2 ">
<img src="img/Photo.png" alt="갤러리" className="w-full h-full" />
</button>

<Link to='/address'>
<button
className="border w-14 h-14 z-10 overflow-hidden rounded-2xl m-2 ">
<img src="img/Address.png" alt="주소" className="w-full h-full" />
</button>
</Link>
</div>

    );
  };


  
  export default Button;
