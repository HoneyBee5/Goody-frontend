import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 

const ChatListItem = ({ chat_id, chat_explain }) => {
  return (

    <Link to="/chatdetails" className="block w-full h-15">
      <div className="p-5 flex border">
        <div>
          <img src="img/Book.png" alt="프로필사진" className="rounded-full border" style={{ width: '3.5rem', height:'3.5rem' }} />
        </div>
        <div className="w-3/5 h-full pl-3 pt-0.5">
          <div style={{ fontSize: '1.1rem' }} className="font-extrabold flex justify-start">
            {chat_id}
          </div>
          <div style={{ fontSize: '0.9rem' }} className="flex justify-start">
            {chat_explain}
          </div>
        </div>
      </div>
    </Link>
  );
};

ChatListItem.propTypes = {
  chat_id: PropTypes.string.isRequired,
  chat_explain: PropTypes.string.isRequired
};


export default ChatListItem;

