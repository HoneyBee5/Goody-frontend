import React from 'react';

import PropTypes from 'prop-types';

const ActionBar = ({ actionBarName }) => {
  return (
    <div className="w-full h-14 bg-[#f1c40f] ">
        <p id="actionBar_name" className='font-bold text-white p-3 ml-2 text-lg '>{actionBarName}</p>
        </div>
  );
};

ActionBar.propTypes = {
  actionBarName: PropTypes.string.isRequired,
};

export { ActionBar };
