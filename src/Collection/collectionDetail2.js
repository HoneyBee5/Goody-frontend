import React from 'react';
import { ActionBarModify } from '../Component/ActionBarModity';


const Text = () => {
    return (
    <div className='justify-center flex'>
        <img src='img/collectionText.png' className='absolute mt-[-50px]'></img>
        <p className='text-3xl absolute'>NEWJEANS</p>

        <div className="flex mt-12 pr-36">
            <img src='img\Calendar.png' className="absolute h-6 w-10" />
            <div><p className='absolute ml-11'>2023.07.31</p></div>
        </div>

        <div className='left-5 mt-24 absolute'>
            <label className='whitespace-pre-line'>
            설명~~~~{'\n'}설명설명설명설명설명설명{'\n'}설명설명설명설명설명설설명설명
            {'\n'}{'\n'}설명설명설명설설명{'\n'}설명설명설명설명설명설명설설명설명명설명설명{'\n'}{'\n'}명설명설명{'\n'}
            설명설명설명설설명설명설명설설설명{'\n'}설명설명설명설명명설명{'\n'}{'\n'}{'\n'}
            </label>
        </div>

    </div>
    )
}

function CollectionDetail2() {
    return (
  
      <div>
        <ActionBarModify />
        <Text />
      </div>
  
    );
  }
    
  export default CollectionDetail2;