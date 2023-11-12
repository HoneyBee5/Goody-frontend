import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';

const ChatListItem = ({ chat_id, chat_explain }) => {
  return (
    <div className="block w-full h-15">
      <div className="p-5 flex  w-full ">
        <div>
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            {chat_id ? chat_id.charAt(0) : ''}
          </Avatar>
        </div>
        {/* <img src={chat_img}></img> */}
        <div className="pl-3">
          <div style={{ fontSize: '1.1rem' }} className="font-extrabold flex justify-start">
            {chat_id}
          </div>
          <div style={{ fontSize: '0.9rem' }} className="flex justify-start">
            {chat_explain}
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

ChatListItem.propTypes = {
  chat_id: PropTypes.string, 
  chat_explain: PropTypes.string.isRequired,
};

export default ChatListItem;
