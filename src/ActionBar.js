import React from 'react';

const ActionBar = ({ actionBarName }) => {
  return (
      <div className="w-full h-14 bg-[#f1c40f] ">
          <p id="actionBar_name" className='font-bold text-white p-3 ml-2 text-lg '>{actionBarName}</p>
      </div>
  );
};

export { ActionBar };
