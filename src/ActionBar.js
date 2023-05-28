import React from 'react';

const ActionBar = ({ actionBarName }) => {
  return (
    <div className="w-full h-14 bg-[#efb82c] ">
        <p id="actionBar_name" className='font-bold text-white p-3 ml-2 text-lg '>{actionBarName}</p>
      </div>
  );
};

export { ActionBar };
