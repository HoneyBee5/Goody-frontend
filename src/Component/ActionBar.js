import React from 'react';

import PropTypes from 'prop-types';

const ActionBar = ({ actionBarName }) => {
  return (
    <div className="w-full h-14 relative">
      <img src='img/ActionBar.png' className='absolute'></img>
        <p id="actionBar_name" className='font-bold text-white p-4 ml-2 text-lg absolute '>{actionBarName}</p>
        </div>
  );
};

ActionBar.propTypes = {
  actionBarName: PropTypes.string.isRequired,
};

export { ActionBar };
