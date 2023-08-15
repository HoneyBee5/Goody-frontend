import React from 'react';
import PropTypes from 'prop-types';

const ActionBar = ({ actionBarName }) => {
  return (
    <div className="w-full h-16 relative">
      <img src='img/ActionBar.png' className='absolute'></img>
        <p id="actionBar_name" className='drop-shadow-[0_2px_1px_rgba(220,166,19,100)] font-bold text-white p-5 ml-2 text-xl absolute '>{actionBarName}</p>
      </div>
  );
};

ActionBar.propTypes = {
  actionBarName: PropTypes.string.isRequired,
};

export { ActionBar };